import styles from "./BookingConfirm.module.css";

const BookingConfirm = ({ onClose }) => {
  return (
    <div className={styles.bookingconfirm}>
      <b className={styles.thankYouSo}>
        Thank you so much for booking with us!
      </b>
      <b className={styles.ourCustomerServiseContainer}>
        <p className={styles.ourCustomerServise}>
          Our customer servise team will contact you shortly ,
        </p>
        <p className={styles.ourCustomerServise}>&nbsp;</p>
        <p className={styles.ourCustomerServise}>
          Please pay attention to you text message /Email
        </p>
      </b>
      <div className={styles.button} onClick={onClose}>
        <b className={styles.gotIt}>Got it</b>
      </div>
    </div>
  );
};

export default BookingConfirm;
