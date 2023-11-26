import styles from './BookingConfirm.module.css';

const BookingConfirm = ({ onClose }) => {
  return (
    <div className={styles.bookingconfirm}>
      <img className={styles.logoIcon} alt='Company Logo' src='/logo@2x.png' />
      <h1 className={styles.confirmationheading}>
        Thank you so much for booking with us!
      </h1>
      <p className={styles.confirmationcontent}>
        <span className={styles.ourCustomerServise}>
          Our customer servise team will contact you shortly ,
        </span>
        <span className={styles.ourCustomerServise}>&nbsp;</span>
        <span className={styles.ourCustomerServise}>
          Please pay attention to you text message /Email
        </span>
      </p>
      <button className={styles.gotit} onClick={onClose}>
        <h3 className={styles.gotIt}>Got it</h3>
      </button>
    </div>
  );
};

export default BookingConfirm;
