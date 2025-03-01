import React, { useState,useEffect  } from 'react';
import styles from './index.module.css';
import Footer from '../footer-new';
import Image from 'next/image';
import Contacts from '../sections/contacts-whitepaper';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Link from 'next/link';

const Whitepaper = () => {
  const MySwal = withReactContent(Swal);
  
    const handleTextClick = (src) => {
      MySwal.fire({
        imageUrl: src,
        imageAlt: 'Large Image',
        showCloseButton: true,
        showConfirmButton: false,
        width: '10%',
        heightAuto: true,
      });
    };



  const [unlock, setUnlockAccess] = useState(null);

  useEffect(() => {
    const access = localStorage.getItem('access');
    setUnlockAccess(access === 'true');
  }, []);
  
  if (unlock === null) return null;

    
  return (
    <>
      <section className={styles['first-screen-card']}>
        <div className={styles.wrapper}>
            <Image className={styles.logo} src="/assets/img/footer-logo.png" alt="logo" width={75} height={22} />
            <h1 className={styles['main-title']}>A Rising AMERICAN UNICORN In The Web3</h1>
            <p className={styles.subtitle}><span>Q1 2025:</span> Investment Round In Equity Is Open</p>
            <div className={`${styles.content} ${unlock ? styles.unlock: ''}`}>
              <div className={styles.preview}>
                <h2 className={styles['secondary-title']}> Learn How to 40X+ 
                Your Investment With U.S. Law Protection</h2>
                {unlock ? (
                  <>
                    <p className={styles['subtitle-access']}>Congratulations! You have access to the whitepaper</p>
                    <Link className={styles['btn-apply']} href='/whitepaper-access'>Go to Whitepaper list</Link>
                  </>
                ) : (
                    <p className={styles.subtitle}>Get access for unlock</p>
                )}
                
              </div>
              {!unlock && (
                <Contacts/>
              )}
             
            </div>
        </div>
      </section>
      <section className={styles['advisor']}>
        <div className={styles.wrapper}>
          <Image className={styles.text} src="/assets/img/advisor-text.png" alt="logo" width={280} height={430} onClick={() => handleTextClick('/assets/img/advisor-text.png')}/>
          <div className={styles['advisor-content']}>
            <p className={styles.subtitle}>Read What An Advisor To Microsoft, Sony, T-Mobil, eBay, Yahoo, ETrade, Orange, And Nintendo Says About Us
            </p>
            <div className={styles['add-logos']}>
              <Image src='/assets/img/sony.png' alt='sony' width={48} height={8}/>
              <Image src='/assets/img/microsoft.png'   alt='microsoft' width={63} height={13}/>
              <Image src='/assets/img/nintendo.png'   alt='nintendo' width={61} height={15}/>
              <Image src='/assets/img/verizon1.png'   alt='verizon' width={58} height={12}/>
              <Image src='/assets/img/sanyo.png'  alt='sanyo'  width={58} height={12} unoptimized={true}/>
              <Image src='/assets/img/ebay.png' alt='ebay' width={46} height={19}/>
              <Image src='/assets/img/sega.png'  alt='sega'  width={38} height={15} unoptimized={true}/>
              <Image src='/assets/img/mazda.png'  alt='mazda'  width={20} height={15}/>
              <Image src='/assets/img/mitsubishi.png'  alt='mitsubishi'  width={20} height={17}/>
              <Image src='/assets/img/symantec.png'  alt='symantec'  width={61} height={12}/>
              <Image src='/assets/img/hitachi.png'  alt='hitachi'  width={68} height={21}/>
            </div>
            <div className={styles.info}>
              <Image src='/assets/img/expert1.png' width={105} height={95} />
                <h3 className={styles.title}>Dr. Jack Torobin</h3>
                <p className={styles.subtitle}>Fortune 500 Strategic Advisor</p>
                <a className={styles['member-link']} href='https://www.linkedin.com/in/jtorobin/' target='_blank'>
                    <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                    @jtorobin
                  </a>
                <ul className={styles['popup-list']}>
                  <li className={styles['popup-list-item']}>30+ years advising tech giants & startups</li>
                  <li className={styles['popup-list-item']}>Worked with Microsoft, Sony, Nintendo, etc</li>
                  <li className={styles['popup-list-item']}>PhD in Psychology and Digital Media (USC)</li>
                  <li className={styles['popup-list-item']}>Pioneer in EV and mobile technology</li>
                </ul>
              </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Whitepaper;
