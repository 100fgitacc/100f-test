import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';
const Footer = () => {

  return (
    <footer className={styles.footer}>
    
      <div>
        <Image src="/assets/img/footer-logo.png" alt="logo" width={75} height={23} />
        
      </div>
      <div>
          <Link href="/privacy-policy" className={`${styles['docs']} ${styles['docs-terms']}`}>Privacy Policy</Link>
          <Link href="/terms-of-use"className={`${styles['docs']} ${styles['docs-policy']}`}>Terms of Use</Link>
        
      </div>
      <div>
          <p className={styles.copyright}>The Next-Gen Crypto Launchpad with Long-term profit and support</p>
      </div>
    </footer>
  );
};

export default Footer;