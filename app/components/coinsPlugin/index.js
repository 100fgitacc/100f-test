import React, { useEffect } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import  '../../globals.css';
const CoinsPlugin = () => {

  const currCoins = [
    {
        "name": "ChainGPT",
        "logo": null,
        "symbol": "CGPT",
        "price": 0.20635893581041126,
        "percent_change_1h": -0.07251823
    },
    {
        "name": "The Root Network",
        "logo": null,
        "symbol": "ROOT",
        "price": 0.04023629864808752,
        "percent_change_1h": 1.57441504
    },
    {
        "name": "DeFi",
        "logo": null,
        "symbol": "DEFI",
        "price": 0.09664395462043526,
        "percent_change_1h": -2.29699127
    },
    {
        "name": "Virtual Versions",
        "logo": null,
        "symbol": "VV",
        "price": 0.0039014053552470173,
        "percent_change_1h": -5.02830822
    },
    {
        "name": "BRC20.com",
        "logo": null,
        "symbol": ".COM",
        "price": 0.4778221386429034,
        "percent_change_1h": -0.0177836
    },
    {
        "name": "TENET",
        "logo": null,
        "symbol": "TENET",
        "price": 0.06033730079532325,
        "percent_change_1h": -3.67844867
    },
    {
        "name": "Degen Zoo",
        "logo": null,
        "symbol": "DZOO",
        "price": 0.00856761657110033,
        "percent_change_1h": -0.3570561
    },
    {
        "name": "Patex",
        "logo": null,
        "symbol": "PATEX",
        "price": 3.120454658449023,
        "percent_change_1h": 0.7570272
    },
    {
        "name": "ivendPay",
        "logo": null,
        "symbol": "IVPAY",
        "price": 0.03832726112610543,
        "percent_change_1h": 0.96241459
    },
    {
        "name": "Kryptonite",
        "logo": null,
        "symbol": "SEILOR",
        "price": 0.02300976529578157,
        "percent_change_1h": 11.29421986
    },
    {
        "name": "CryptoGPT",
        "logo": null,
        "symbol": "CRGPT",
        "price": 0.6434948108459795,
        "percent_change_1h": -0.23910969
    },
    {
        "name": "SophiaVerse",
        "logo": null,
        "symbol": "SOPH",
        "price": 0.05910649092639204,
        "percent_change_1h": -0.8598198
    }
] ;

useEffect(() => {
  const getCoins = async () => {
    try {
      const response = await axios.get('/api/get-coins');
      const result = response.data;
      if (result.success) {
        setCryptoData(result.data);
      } else {
        setError(`Failed to fetch coins: ${result.error}`);
      }
    } catch (error) {
      setError(`Failed to fetch coins: ${error.message}`);
      console.error('Error fetching coins:', error);
    }
  };

  getCoins();
}, []);


  return (
    <div className={styles['currency-wrapper']}>
      <div className={styles['plugin-inner']}>
        {currCoins.map((item, index) => {
         const formattedPrice = `$${item.price.toFixed(2)}`;
         const formattedChange = `${item.percent_change_1h.toFixed(2)}%`;
         const rateClass = item.percent_change_1h < 0 ? `${styles['value-rate']} ${styles['negative-rate']}` : styles['value-rate'];
         const normalizedCryptoName = item.name.replace(/[%\s]/g, '_').toLowerCase();
         const imgFolder = '/assets/img/' + normalizedCryptoName + '.png';

          return(
            <div key={index} className={styles['plugin-item']}>
              <div className={styles['item-currency']}>
                  <div className={styles['currency-info']}>
                      <div className={styles['currency-logo']}><Image src={imgFolder} alt={item.name} width={100} height={100} /></div>
                      <p className={styles['currency-name']}>
                        {item.name}
                        <span className={styles['currency-span']}>{item.symbol}</span>
                      </p>
                  </div>
                  <div className={styles['currency-value']}>
                    <div className={styles['value-price']}>{formattedPrice}</div>
                    <div className={rateClass}>{formattedChange}</div>
                  </div>
              </div>
          </div>
          )
        })} 
      </div>
      <div className={styles['plugin-inner']}>
        {currCoins.map((item, index) => {
         const formattedPrice = `$${item.price.toFixed(2)}`;
         const formattedChange = `${item.percent_change_1h.toFixed(2)}%`;
         const rateClass = item.percent_change_1h < 0 ? `${styles['value-rate']} ${styles['negative-rate']}` : styles['value-rate'];
         const normalizedCryptoName = item.name.replace(/[%\s]/g, '_').toLowerCase();
         const imgFolder = '/assets/img/' + normalizedCryptoName + '.png';

          return(
            <div key={index} className={styles['plugin-item']}>
              <div className={styles['item-currency']}>
                  <div className={styles['currency-info']}>
                      <div className={styles['currency-logo']}><Image src={imgFolder} alt={item.name} width={100} height={100} /></div>
                      <p className={styles['currency-name']}>
                        {item.name}
                        <span className={styles['currency-span']}>{item.symbol}</span>
                      </p>
                  </div>
                  <div className={styles['currency-value']}>
                    <div className={styles['value-price']}>{formattedPrice}</div>
                    <div className={rateClass}>{formattedChange}</div>
                  </div>
              </div>
          </div>
          )
        })} 
      </div>
    </div>
   
  );
};

export default CoinsPlugin;