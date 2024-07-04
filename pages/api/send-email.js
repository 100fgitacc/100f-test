import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, company, email, tel, telegram, request } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `New Consultation Request from ${name}`,
      text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone: ${tel}
        Telegram: ${telegram}
        Request: ${request}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}