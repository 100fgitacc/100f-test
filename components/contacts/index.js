import React from 'react';
import styles from './index.module.css';
import Form from '../sections/contacts';
import Footer from '../footer';
import CoinsPlugin from '../coinsPlugin';

const Contacts = () => {
 
  return (
    <>
      <section className={styles['first-screen-card']}>
          <div className={styles['first-screen-card-container']}>
              <CoinsPlugin/>
              <div className={styles.inner}>
                  <h1 className="main-title">Interested in submitting a project or investing in one?<br/><span className={`title-span ${styles['contacts-span']}`}>Let&#39;s talk!</span></h1>
                  <p className={styles.subtitle}>We select projects with potential for market development and opportunities for joint returns</p>
                  <p className={styles.subtitle}>Projects on our platform go through a vigorous vetting process. Rest assured, only those meeting our exacting standards and primed for growth are accepted</p>
              </div>
          </div>
      </section>
      <Form contacts={true}/>
      <Footer/>
    </>
  );
};

export default Contacts;