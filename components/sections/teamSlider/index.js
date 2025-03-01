
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from'./index.module.css';
import Image from 'next/image';
const TeamSlider = () => {
  return (
    <div className={styles['slider-section']}>
      <h3 className={styles['third-title']}>Unstoppable 100F team</h3>
      <div className={styles['slider-wrapper']}>
        <h4 className={styles['four-title']}>Founders</h4>
        <div className={styles['button-container']}>
          
          <div className={styles['swiper-founders-button-prev']}></div>
          <div className={styles['swiper-founders-button-next']}></div>
        </div>
        <Swiper
          className={styles['team-slider']}
          spaceBetween={12} // Расстояние между слайдами
          slidesPerView={1.5} // Количество слайдов на экране
          grabCursor={true} // Включает захват курсора для перетаскивания
          
          modules={[Navigation]}
          navigation={{
            nextEl: `.${styles['swiper-founders-button-next']}`, // Класс кнопки "вперед"
            prevEl: `.${styles['swiper-founders-button-prev']}`, // Класс кнопки "назад"
          }}
          effect="slide" // Эффект анимации
          breakpoints={{
            390: {
              slidesPerView: 1.5,
            },
          }}
        >
          <SwiperSlide className={styles['team-group-item']}>
                <Image className={styles['member-img']} src='/assets/img/kir.png' width={150} height={136}/>
                <p className={styles['member-title']}>Kir Ulanov, <br/> CEO</p>
                <a className={styles['member-link']} href='https://www.linkedin.com/in/kirulanov/' target='_blank'>
                  <Image src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                  @kirulanov
                </a>
                <div className={styles['member-desc']}>
                  <p>
                  14+ years in entrepreneurship, digital marketing, online education & 6+ years of expertise in Web3 marketing
                  </p>
                  <p>Former Founder & CEO of Marketing Gamers – built from scratch over 12 years into a 7-figure digital marketing holding with expertise in 100+ niches and 10,000+ clients</p>
                  <p>Author of the book &#39;Client Generator&#39;, a winner of the Book Oscar</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles['team-group-item']}>
            <Image className={styles['member-img']} src='/assets/img/ksander.png' width={150} height={136}/>
                      <p className={styles['member-title']}>Aleksandr Yakimtsou, CPO</p>
                      <a className={styles['member-link']} href='https://www.linkedin.com/in/ksanderkim/' target='_blank'>
                        <Image src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                        @ksanderkim
                      </a>
                      <div className={styles['member-desc']}>
                        <p>
                        12+ years expertise in Crypto & Ed-Tech
                        </p>
                        <p>Architect of an app for crypto bots and automated sales funnels, leveraging expertise from Marketing Gamers, whose products served over 100,000 users</p>
                        <p>Founded & scaled e-commerce/edu businesses with focus on automation & int&#39;l expansion</p>
              </div>
            </SwiperSlide>
        
        </Swiper>
      </div>
      <div className={styles['slider-wrapper']}>
        <h4 className={styles['four-title']}>C-level</h4>
        <div className={styles['button-container']}>
          <div className={styles['swiper-clevel-button-prev']}></div>
          <div className={styles['swiper-clevel-button-next']}></div>
        </div>
        <Swiper
          className={styles['team-slider']}
          spaceBetween={12} // Расстояние между слайдами
          slidesPerView={1.5} // Количество слайдов на экране
          grabCursor={true} // Включает захват курсора для перетаскивания
          
          modules={[Navigation]}
          navigation={{
            nextEl: `.${styles['swiper-clevel-button-next']}`, // Класс кнопки "вперед"
            prevEl: `.${styles['swiper-clevel-button-prev']}`, // Класс кнопки "назад"
          }}
          effect="slide" // Эффект анимации
          breakpoints={{
            390: {
              slidesPerView: 1.5,
            },
          }}
        >
          <SwiperSlide className={styles['team-group-item']}>
          <Image className={styles['member-img']} src='/assets/img/alex.png' width={150} height={136}/>
            <p className={styles['member-title']}>Alex Pomelnikov, Phd, CFO</p>
            <a className={styles['member-link']} href='https://www.linkedin.com/in/apomelnikov/' target='_blank'>
              <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
              @apomelnikov
            </a>
            <p className={styles['member-desc']}>
              PhD in Economics, 17+ years expertise in Finance & Economics, Former founder of 2 international businesses, Investor-analyst, having evaluated hundreds of projects valued between $1 million and $500 million, resulting in over $60 million in successful investments
            </p>
          </SwiperSlide>
         
          <SwiperSlide className={styles['team-group-item']}> 
            <Image className={styles['member-img']} src='/assets/img/igor.png' width={150} height={136}/>
            <div>
              <p className={styles['member-title']}>Igor Jalenco, <br/>
              CBDO</p>
              <a className={styles['member-link']} href='https://www.linkedin.com/in/ihorjalenco/' target='_blank'>
                <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                @ihorjalenco
              </a>
              <p className={styles['member-desc']}>13+ years expertise in EdTech, Marketing & StartUps, managed corporate education programs
              for IT companies with 300+ employees valued at $500M+. Led growth of international EdTech business to 5 countries (UAE, KSA, Kazakhstan, Ukraine, Azerbaijan), reaching 14K+ students</p>
            </div>
            
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div className={styles['slider-wrapper']}>
        <h4 className={styles['four-title']}>Advisors</h4>
        <div className={styles['button-container']}>
          <div className={styles['swiper-advisors-button-prev']}></div>
          <div className={styles['swiper-advisors-button-next']}></div>
        </div>
        <Swiper
          className={styles['team-slider']}
          spaceBetween={12} // Расстояние между слайдами
          slidesPerView={1.5} // Количество слайдов на экране
          grabCursor={true} // Включает захват курсора для перетаскивания
          
          modules={[Navigation]}
          navigation={{
            nextEl: `.${styles['swiper-advisors-button-next']}`, // Класс кнопки "вперед"
            prevEl: `.${styles['swiper-advisors-button-prev']}`, // Класс кнопки "назад"
          }}
          effect="slide" // Эффект анимации
          breakpoints={{
            390: {
              slidesPerView: 1.5,
            },
          }}
        >
          <SwiperSlide className={styles['team-group-item']}>
          <Image className={styles['member-img']} src='/assets/img/jack.png' width={150} height={136}/>
                  <p className={styles['member-title']}>Dr. Jack<br/> Torobin</p>
                  <a className={styles['member-link']} href='https://www.linkedin.com/in/jtorobin/' target='_blank'>
                    <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                    @jtorobin
                  </a>
                  <div className={styles['member-desc']}>
                    <p>
                    PhD in Communications and Psychology, 30+ years advising Fortune 500 companies (Microsoft, eBay, Sony Interactive) and startups. Pioneer in digital media and IoT, led successful exits including iKIT (recognized by T3 Magazine as top 10 business device)</p>
                  </div>
          </SwiperSlide>
          <SwiperSlide className={styles['team-group-item']}>
          <Image className={styles['member-img']} src='/assets/img/yaroslav.png' width={150} height={136}/>
                  <p className={styles['member-title']}>Yaroslav Yaroslavskiy</p>
                  <a className={styles['member-link']} href='https://www.linkedin.com/in/yaroslav-yaroslavskiy/' target='_blank'>
                    <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                    @yaroslav-yaroslavskiy
                  </a>
                  <div className={styles['member-desc']}>
                    <p>BD Adviser, Ex. Co-Founder & Shareholder UPSWOT, Mentor at Google for Startups, Visa Foundation</p>
                  </div>
          </SwiperSlide>
          <SwiperSlide className={styles['team-group-item']}> 
          <Image className={styles['member-img']} src='/assets/img/nikolay.png' width={150} height={136}/>
                  <p className={styles['member-title']}>NIKOLAY<br/>  SHKILEV, PhD</p>
                  <div className={styles['member-desc']}>
                    <p>Founder of Private Business Club for VCs, Zelwin Ecosystem, AR Generation, MagiScan 3D. Rated Top 3 in People of BlockChain by Forbes</p>
                  </div>
          </SwiperSlide>
          <SwiperSlide className={styles['team-group-item']}> 
          <Image className={styles['member-img']} src='/assets/img/andrii.png' width={150} height={136}/>
                  <p className={styles['member-title']}>ANDRII<br/>  KHANTIL</p>
                  <a className={styles['member-link']} href='https://www.linkedin.com/in/khantil-andrii-570a406/' target='_blank'>
                    <Image  src='/assets/img/icons/linkedin.png' width={14} height={14}/>
                    @khantil-andrii
                  </a>
                  <div className={styles['member-desc']}>
                    <p>Strategic Legal Adviser with 20+ years experience in investment structuring. Head of Legal at CyberInnovate LLC, leading Unicorn Nest&#39;s legal operations. Expert in startup acceleration and VC programs, supported 500+ projects</p>
                  </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles['logos-container']}>
        <div>
          <Image src='/assets/img/bnv.png' width={63} height={16}/>
          <Image src='/assets/img/floki.png' width={22} height={22}/>
          <Image src='/assets/img/snape.png' width={61} height={16}/>
        </div>
        <div>
          <Image src='/assets/img/Grou7.png' width={60} height={16}/>
          <Image src='/assets/img/a858a9a.png' width={65} height={17}/>
          <Image src='/assets/img/full-vaiot2.png' width={67} height={14}/>
        </div>
        <div>
          <Image src='/assets/img/channels4.png' width={60} height={19}/>
          <Image src='/assets/img/gass1.png' width={62} height={14}/>
          <Image src='/assets/img/Group48095548.png' width={61} height={19}/>
        </div>
        <div>
          <Image src='/assets/img/chainlink-coin2714.png' width={61} height={18}/>
          <Image src='/assets/img/Group8095549.png' width={72} height={16}/>
          <Image src='/assets/img/images-Photoroom.png' width={65} height={14}/>
        </div>
        <div>
        <Image src='/assets/img/toncoin-ton.png' width={58} height={25}/>
        <Image src='/assets/img/AIBC-P.png' width={60} height={15}/>
        <Image src='/assets/img/imagehjgg.png' width={63} height={10}/>
        </div>
        <div>
        <Image src='/assets/img/full-lbank-logo-Photoroom1.png' width={67} height={12}/>
        <Image src='/assets/img/f4e36bb761bdf872f8ad1bf4137b8c0c.png' width={67} height={20}/>
        <Image src='/assets/img/fxcnvncszx.png' width={58} height={12}/>
        </div>
        <div>
        <Image src='/assets/img/dbxn.png' width={60} height={10}/>
        <Image src='/assets/img/Nintendo-Logo.png' width={58} height={16}/>
        <Image src='/assets/img/Verizon.png' width={62} height={13}/>
        </div>
        
      </div>
    </div>
    
  );
};

export default TeamSlider;
