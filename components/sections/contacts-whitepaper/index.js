import React, { useState, useRef  } from 'react';
import styles from './index.module.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PopupSuccess from '/components/sections/popup-success';
const MySwal = withReactContent(Swal);
const Contacts = () => {


  const showPopup = () => {
    MySwal.fire({
        html: <PopupSuccess />,  
        showConfirmButton: false, 
        showCloseButton: true,  
        backdrop: true, 
        customClass: {
          popup: 'my-swal-popup',
        },
      });
  };

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'This field is empty';
    }
  
    if (!formData.email) {
      newErrors.email = 'This field is empty';
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Please enter a valid email address';
    }
  
    return newErrors; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const newErrors = validateForm(data);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
      showPopup();
        formRef.current.reset(); 
        setStatus('');
      } else {
        setStatus(`Failed to send email: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Failed to send email: ${error.message}`);
      console.error('Error sending email:', error);
    }
  };

  return (
      <form ref={formRef} className={styles['mailing-form']} method="post" autoComplete="off" noValidate="noValidate" onSubmit={handleSubmit}>
        <p className={styles.subtitle}>Fill the form below to get <br></br> an access to the whitepaper</p>
        <div className={styles['form-group']}>
          <input type="text" id="name" name="name" placeholder="Full Name*" required />
          <div className={`${styles['error-message']} ${errors.name ? styles.active : ''}`}>{errors.name}</div>
        </div>
        <div className={styles['form-group']}>
          <input type="email" id="email" name="email" placeholder="Email*" required />
          <div className={`${styles['error-message']} ${errors.email ? styles.active : ''}`}>{errors.email}</div>
        </div>
        <div className={styles['button-cont']}>
          <button id="submitBtn" type="submit" className={styles['mailing-form-btn']}>Access To The WhitePaper</button>
          {status && <p>{status}</p>}
        </div>
      </form>
    );
};

export default Contacts;
