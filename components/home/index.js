import React from 'react';
import { Link, Element } from 'react-scroll';
import styles from './index.module.css';
import Footer from '../footer-new';
import Image from 'next/image';
import BecomeSlider from '/components/sections/becomeSlider'
import Contacts from '../sections/contacts-new';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PopupForm from '/components/sections/contacts-popup';
const MySwal = withReactContent(Swal);

const Home = () => {

    const showPopup = () => {
        MySwal.fire({
            html: <PopupForm />,  
            showConfirmButton: false, 
            showCloseButton: true,  
            backdrop: true, 
          });
      };

  return (
    <>
        <section className={styles['first-screen-card']}>
            <div className={styles['first-screen-card-container']}>
                <div className={styles.inner}>
                    <Image className={styles.logo} src='/assets/img/footer-logo.png' width={86} height={25}/>
                    <h1 className={styles["main-title"]}>Unified crypto platform</h1>
                    <p className={styles.subtitle}>connecting qualified Projects with an educated audience</p>
                    <div className={styles.cards}>
                        <div className={styles['card-elem']}>
                            <p className={styles['card-text']}>
                                <span>Innovative projects </span>attract educated investors and an engaged audience
                            </p>
                        </div>
                        <div className={styles['card-elem']}>
                            <p className={styles['card-text']}>
                                <span>Crypto enthusiasts </span>contribute and earn with crypto projects
                            </p>
                        </div>
                    </div>
                    <Link className={styles.button} to="contacts" smooth={true} duration={500}>
                        Become an Early Adopter
                    </Link>
                    <p className={styles.note}>
                        By registering now, you gain early access to a platform that will change the game in the cryptocurrencies world
                    </p>
                </div>
            </div>
        </section>
        <section className={styles['phases']}>
            <span className={styles.points}>Phase 1</span>
            <div className={styles['phases-inner']}>
                <h2 className={styles['secondary-title']}>
                    Who Are We Now?
                </h2>
                <h2 className={styles['secondary-title-mobile']}>
                    Who Are We Now?
                </h2>
                <div className={styles['phases-cards']}>
                    <div className={styles['phases-cards-elem']}>
                        <p>Projects Onboarding</p>
                    </div>
                    <div className={styles['phases-cards-elem']}>
                        <p>Investors Onboarding</p>
                    </div>
                    <div className={styles['phases-cards-elem']}>
                        <p>Matching <br/>& Activities</p>
                    </div>
                    <div className={styles['phases-cards-elem']}>
                        <p>Analytics <br/>& Reporting</p>
                    </div>
                </div>
                <div className={styles['become-section']}>
                    <div className={styles['become-section-desc']}>
                        <h2 className={`${styles['secondary-title']}`}>
                            Who Will We Become?
                        </h2>
                        <div className={styles['become-options']}>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx1.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Early Stage Investments </p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx2.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Investor and Audience Networks</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx3.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Social Features</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx4.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Crypto AirDrops</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx5.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Education </p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx6.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>AI Modeling</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx7.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>DeFi</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx8.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Blockchain Analysis</p>
                            </div>
                            <div className={styles['become-options-item']}>
                                <Image src='/assets/img/icons/iconx9.png' width={18} height={18} className={styles['options-name']}/>
                                <p className={styles['options-title']}>Investor Ranking</p>
                            </div>
                        </div>
                        <a  onClick={showPopup} className={styles['schedule-btn']}>Schedule a Pitch Session</a>
                        <p className={styles.note}>
                            Request a pitch session to discuss investment opportunities
                        </p>
                    </div>
                    <BecomeSlider/>
                    <h2 className={`${styles['secondary-title-mobile']}`}>
                        Who Will We Become?
                    </h2>
                </div>
            </div>
            <span className={styles.points}>Phase 2</span>
        </section>
        <section className={styles['platform-list']}>
            <div className={styles.inner}>
                <h2 className={styles["main-title"]}>Platform Waiting List</h2>
                <div className={styles.cards}>
                    <div className={styles['card-elem']}>
                        <p className={styles['card-text']}>
                            Investors
                        </p>
                        <p className={styles['card-counter']}>13,382</p>
                    </div>
                    <div className={styles['card-elem']}>
                        <p className={styles['card-text']}>
                            Crypto Enthusiasts
                        </p>
                        <p className={styles['card-counter']}>27,358</p>
                    </div>
                </div>
                    <Link className={styles.button} to="contacts" smooth={true} duration={500}>
                        Become an Early Adopter
                    </Link>
                <p className={styles.note}>
                    By registering now, you gain early access to a platform that will change the game in the cryptocurrencies world
                </p>
            </div>
        </section>
        <section className={styles['platform-roadmap']}>
            <div className={styles.inner}>
                <h2 className={styles["main-title"]}>100F Platform Roadmap</h2>
                <div className={styles['roadmap-container']}>
                    <div className={styles['roadmap-item']}>
                        <Image src='/assets/img/step1.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                        <p className={styles['roadmap-subtitle']}>Q3 2023-Q3 2024</p>
                        <p className={styles['roadmap-title']}>BOOTSTRAPPING</p>
                        <ul className={styles['roadmap-list']}>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                <p>Prototype Function 1</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                <p>211 Paid Users</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                <p>Prototype Function 2</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                <p>Prototype Function 3</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                <p>Prototype Function 4</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/check-img.png' className={styles['roadmap-icon']} width={13} height={13}/>
                                <p>Validating Platform Concept</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['roadmap-item']}>
                        <ul className={styles['roadmap-list']}>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/yellow-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>MVPs design & development<br/> of a Platform</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/yellow-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>Clickable Prototype<br/> of the Platfrom</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/yellow-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>PreSeed Investment<br/> Round</p>
                            </li>
                        </ul>
                        <div>
                            <Image src='/assets/img/step2.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                            <p className={styles['roadmap-subtitle']}>Q4 2024</p>
                            <p className={styles['roadmap-title']}>PRESEED</p>
                        </div>
                       
                        
                    </div>
                    <div className={styles['roadmap-item']}>
                        <Image src='/assets/img/step3.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                        <p className={styles['roadmap-subtitle']}>Q1-Q2 2025</p>
                        <p className={styles['roadmap-title']}>Onboarding</p>
                        <ul className={styles['roadmap-list']}>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>First 211 clients onboarded</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>Start of Client Acquisition</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>MRR $12,000+</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>MVP Platform Release</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>MRR $26,000+</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>Start Development <br/>of the Platform`s 1st <br/>Version</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['roadmap-item']}>
                        <ul className={styles['roadmap-list']}>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>Aquire Investment <br/> License in the USA</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>Platform Launch v1.0</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>Tier 2-3 Projects <br/> Acquisition & <br/>Onboarding 50+ Verified <br/>Crypto Projects</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>1K+ Educated <br/> Users/Investors</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>MRR $130,000+</p>
                            </li>
                        </ul>
                       <div>
                        <Image src='/assets/img/step4.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                            <p className={styles['roadmap-subtitle']}>Q3-Q4 2025</p>
                            <p className={styles['roadmap-title']}>PLATFORM 1.0</p>
                       </div>
                    </div>
                    <div className={styles['roadmap-item']}>
                        <Image src='/assets/img/step5.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                        <p className={styles['roadmap-subtitle']}>Q1 2026</p>
                        <p className={styles['roadmap-title']}>SEED</p>
                    </div>
                    <div className={styles['roadmap-item']}>
                        <Image src='/assets/img/step6.png' width={40} height={40} className={styles['roadmap-icon-step']}/>
                        <p className={styles['roadmap-subtitle']}>Q1-Q4 2026</p>
                        <p className={styles['roadmap-title']}>PLATFORM 2.0</p>
                        <ul className={styles['roadmap-list']}>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>Platform Launch v2.0</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>10K+ Educated Users/investors</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>100+ Verified Crypto Projects</p>
                            </li>
                            <li className={styles['roadmap-list-item']}>
                                <Image src='/assets/img/icons/blue-img.png' className={styles['roadmap-icon']} width={7} height={7}/>
                                <p>MRR $1,300,000+</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className={styles.button} to="contacts" smooth={true} duration={500}>
                    Become an Early Adopter
                </Link>
                <p className={styles.note}>
                    By registering now, you gain early access to a platform that will change the game in the cryptocurrencies world
                </p>
                <a  onClick={showPopup} className={`${styles['schedule-btn']} ${styles['schedule-btn-mobile']}`}>Schedule a Pitch Session</a>
                <p className={`${styles['note-mobile']} ${styles.note}`}>
                    Request a pitch session to discuss investment opportunities
                </p>
            </div>
        </section>
        <section className={styles['solved-problem']}>
            <div className={styles.inner}>
                <h2 className={styles["main-title"]}>What Crypto Market Challenges 
                    <span> Do We Solve?</span>
                </h2>
                <div className={styles['solved-problem-item-first']}>
                   <Image src='/assets/img/icopro1.png' width={57} height={51}/>
                   <div className={styles.desc}>
                    <h3 className={styles['third-title']}>Problem</h3>
                        <p>
                        The majority views the Web3 market as a speculative opportunity for quick profits rather than a viable long-term investment tool
                        </p>
                   </div>
                </div>
                <div className={styles['solved-problem-item-wrapper']}>
                    <div className={styles['solved-problem-item']}>
                        <Image src='/assets/img/icopro2.png' width={43} height={45}/>
                        <div className={styles.desc}>
                            <h3 className={styles['third-title']}>Web3 Projects</h3>
                            <p>Early-stage investors are often overlooked</p>
                        </div>
                    </div>
                    <div className={styles['solved-problem-item']}>
                        <Image src='/assets/img/icopro3.png' width={49} height={49}/>
                        <div className={styles.desc}>
                            <h3 className={styles['third-title']}>Web3 Investors</h3>
                            <p>Encounter challenges in early-stage investments</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles['solved-problem-item']} ${styles['solved-problem-item-last']}`}>
                    <Image src='/assets/img/icopro4.png' width={44} height={44}/>
                    <div className={styles.desc}>
                        <h3 className={styles['third-title']}>Short-Term</h3>
                        <p>One-time projects use one-time investors</p>
                    </div>
                </div>
            </div>
        </section>
        
        <Element name="contacts">
            <Contacts/>
        </Element>
       <Footer/>
    </>
   
  );
};

export default Home;
