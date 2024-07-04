'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './index.module.css';

const Sidebar = () => {

  const router = useRouter();
  const isActive = (basePath) => {
    if (basePath === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(basePath) && router.pathname !== '/';
  };

  return (
    <nav className={styles.sidebar}>
      <Link href="/" className={styles['main-logo']}>
        <Image src="/assets/img/logo.png" alt="logo" width={180} height={35}/>
      </Link>
      <ul className={styles['sidebar-menu']}>
        <li className={styles['sidebar-menu__item']}>
          <Link href="/" className={`${styles['page-button']} ${isActive('/') ? styles.active : ''} ${styles['home-btn']}`}>
            Home
          </Link>
        </li>
        <li className={styles['sidebar-menu__item']}>
          <Link href="/kols">
            <p className={`${styles['page-button']} ${isActive('/kols') ? styles.active : ''} ${styles['promotion-btn']}`}>KOLs Promotion</p>
          </Link>
        </li>
        <li className={styles['sidebar-menu__item']}>
          <Link href="/investments">
            <p className={`${styles['page-button']} ${isActive('/investments') ? styles.active : ''} ${styles['investments-btn']}`}>Investments</p>
          </Link>
        </li>
        <li className={styles['sidebar-menu__item']}>
          <Link href="/blog">
            <p className={`${styles['page-button']} ${isActive('/blog') ? styles.active : ''} ${styles['blog-btn']}`}>Blog</p>
          </Link>
        </li>
        <li className={styles['sidebar-menu__item']}>
          <Link href="/contacts">
            <p className={`${styles['page-button']} ${isActive('/contacts') ? styles.active : ''} ${styles['contact-btn']}`}>Contact Us</p>
          </Link>
        </li>
      </ul>
      <div className={styles.banner}>
        <a href="https://invest.100f.com/zimabank" target="_blank" className={`${styles['banner-item']} ${styles['banner-item__private']}`}></a>
        <div className={`${styles['banner-item']} ${styles['banner-item__educational']}`}>
            <p className={styles['banner-note']}>Updates coming soon</p>
            <p className={styles['banner-title']}>Educational platform</p>
        </div>
        <div className={`${styles['banner-item']} ${styles['banner-item__sales']}`}>
            <p className={styles['banner-note']}>Release coming soon</p>
            <p className={styles['banner-title']}>Sales funnel building platform</p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;