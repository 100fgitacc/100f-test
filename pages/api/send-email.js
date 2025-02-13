import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, company, whatsApp, capacity, formType } = req.body;

    const clientId = process.env.SENDPULSE_CLIENT_ID;
    const clientSecret = process.env.SENDPULSE_CLIENT_SECRET;
   

    async function getAccessToken() {
        const response = await fetch("https://api.sendpulse.com/oauth/access_token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                grant_type: "client_credentials",
                client_id: clientId,
                client_secret: clientSecret,
            }),
        });
        const data = await response.json();
        return data.access_token;
    }

    async function addSubscriber(token, formData, id) {
        const response = await fetch(`https://api.sendpulse.com/addressbooks/${id}/emails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        const data = await response.json();
    
        if (!response.ok) {
            throw new Error(data.error || 'Failed to add subscriber');
        }
    }

    try {
        const token = await getAccessToken();
        const transporter = nodemailer.createTransport({
            host: "mail.adm.tools",
            port: 465,
            secure: true,
            auth: {
                user: "info@100f.com",
                pass: "pJT9X67ag9",
            },
        });

        let mailOptions;
        let sendpulseOptions;
        const whitePaperId = process.env.SENDPULSE_ADDRESS_BOOK_ID_WHITEPAPER;
        const waitlistId = process.env.SENDPULSE_ADDRESS_BOOK_ID_WAITLIST;
        const formId = process.env.SENDPULSE_ADDRESS_BOOK_ID_FORM;
        if (name && email && capacity && whatsApp) {
            mailOptions = {
                from: "100Fcom_Pitch <info@100f.com>",
                to: "kir.ulanov@100f.com, admin@100f.com, info@100f.com",
                subject: `100F.com Request Investment Deck`,
                text: `
                    Name: ${name}
                    Email: ${email}
                    Company: ${company}
                    WhatsApp: ${whatsApp}
                    Capacity: ${capacity}
                `,
            };
            sendpulseOptions = JSON.stringify({
                emails: [{ 
                    email, 
                    variables: { 
                        Имя: name, 
                        Компания: company, 
                        WhatsApp: whatsApp, 
                        Емкость: capacity 
                    } 
                }],
            }),
            await addSubscriber(token,sendpulseOptions,formId);
        }else if(formType !== 'whitelist') {
            mailOptions = {
                from: "100Fcom_EarlyAdopter <info@100f.com>",
                to: "kir.ulanov@100f.com, admin@100f.com, info@100f.com",
                subject: `100F.com Request for Early Adoption`,
                text: `
                    Name: ${name}
                    Email: ${email}
                `,
            };
            sendpulseOptions = JSON.stringify({
                emails: [{ 
                    email, 
                    variables: { 
                        Имя: name
                    } 
                }],
            }),
            await addSubscriber(token,sendpulseOptions,waitlistId);
        }else{
            mailOptions = {
                from: "100Fcom_Whitepaper <info@100f.com>",
                to: "kir.ulanov@100f.com, admin@100f.com, info@100f.com",
                subject: `100F.com Request for Whitepaper Access`,
                text: `
                    Name: ${name}
                    Email: ${email}
                `,
            };
            sendpulseOptions = JSON.stringify({
                emails: [{ 
                    email, 
                    variables: { 
                        Имя: name
                    } 
                }],
            }),
            await addSubscriber(token,sendpulseOptions,whitePaperId);
        }

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
}
