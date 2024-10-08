import React from 'react';
import styles from './index.module.css';
import Footer from '../footer-new';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <section className={styles['first-srceen-card']}>
        <div className={styles['first-srceen-card-container']}>
            <div className={styles.inner}>
                <Image className={styles.logo} src='/assets/img/footer-logo.png' width={86} height={25}/>
                <h1 className={styles["main-title"]}>Unified crypto platform</h1>
                <p className={styles.subtitle}>connecting qualified Projects with educated audience</p>
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
                <a className={styles.button}>Become an Early Adopter</a>
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
            <div className={styles['phases-cards']}>
                <div className={styles['phases-cards-elem']}>
                    <p>Projects Onboarding</p>
                </div>
                <div className={styles['phases-cards-elem']}>
                    <p>Investors Onboarding</p>
                </div>
                <div className={styles['phases-cards-elem']}>
                    <p>Matching & Activities</p>
                </div>
                <div className={styles['phases-cards-elem']}>
                    <p>Analytics & Reporting</p>
                </div>
            </div>
            <div className={styles['become-section']}>
                
                <div className={styles['become-section-desc']}>
                    <h2 className={styles['secondary-title']}>
                        Who Will We Become?
                    </h2>
                    <div className={styles['become-options']}>
                        <div className={styles['become-options-item']}>
                            <Image src='/assets/img/icons/finger.png' width={18} height={18} className={styles['options-name']}/>
                            <p className={styles['options-title']}>Early Stage Investments </p>
                        </div>
                        <div className={styles['become-options-item']}>
                            <Image src='/assets/img/icons/finger.png' width={18} height={18} className={styles['options-name']}/>
                            <p className={styles['options-title']}>Investor and Audience Networks</p>
                        </div>
                        <div className={styles['become-options-item']}>
                            <Image src='/assets/img/icons/finger.png' width={18} height={18} className={styles['options-name']}/>
                            <p className={styles['options-title']}>Social Features</p>
                        </div>
                        <div className={styles['become-options-item']}>
                            <Image src='/assets/img/icons/finger.png' width={18} height={18} className={styles['options-name']}/>
                            <p className={styles['options-title']}>Crypto AirDrops</p>
                        </div>
                        <div className={styles['become-options-item']}>
                            <Image src='/assets/img/icons/finger.png' width={18} height={18} className={styles['options-name']}/>
                            <p className={styles['options-title']}>Education </p>
                        </div>
                        <div className={styles['become-options-item']}>
                            <Image src='/assets/img/icons/finger.png' width={18} height={18} className={styles['options-name']}/>
                            <p className={styles['options-title']}>AI Modeling</p>
                        </div>
                        <div className={styles['become-options-item']}>
                            <Image src='/assets/img/icons/finger.png' width={18} height={18} className={styles['options-name']}/>
                            <p className={styles['options-title']}>DeFi</p>
                        </div>
                        <div className={styles['become-options-item']}>
                            <Image src='/assets/img/icons/finger.png' width={18} height={18} className={styles['options-name']}/>
                            <p className={styles['options-title']}>Blockchain Analysis</p>
                        </div>
                        <div className={styles['become-options-item']}>
                            <Image src='/assets/img/icons/finger.png' width={18} height={18} className={styles['options-name']}/>
                            <p className={styles['options-title']}>Investor Ranking</p>
                        </div>
                    </div>
                    <a  className={styles['mailing-form-btn']}>Schedule a Pitch Session</a>
                    <p className={styles.note}>
                        Request a pitch session to discuss investment opportunities
                    </p>
                </div>
            </div>
        </div>
        <span className={styles.points}>Phase 2</span>
      </section>
       <Footer/>
    </div>
   
  );
};

export default Home;
