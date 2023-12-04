import styles from "./BookingAlert.module.css";

const BookingAlert = ({ onClose }) => {
  return (
    <div className={styles.bookingconfirm}>
      <img className={styles.logoIcon} alt="Company Logo" src="/logo@2x.png" />
      <h1 className={styles.confirmationheading}>
        The minimum reservation is dozens of people, but we still want you!
      </h1>
      <p className={styles.confirmationcontent}>
        <span className={styles.ourCustomerServise}>
          Please contact 713-320-0887 we will try out best to serve you.
        </span>
        <span className={styles.ourCustomerServise}>&nbsp;</span>
        <span className={styles.ourCustomerServise}>
          (If you are booking with fewer than ten people, we will calculate the
          cost for ten people, but you will still receive extra food. )
        </span>
      </p>
      <button className={styles.gotit} onClick={onClose}>
        <h3 className={styles.gotIt}>Got it</h3>
      </button>
    </div>
  );
};

export default BookingAlert;
