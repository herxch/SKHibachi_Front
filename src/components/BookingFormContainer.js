import { useState, useCallback } from "react";
import BookTable from "./BookTable";
import PortalPopup from "./PortalPopup";
import styles from "./BookingFormContainer.module.css";
import SocialMedia from "./SocialMedia";

const BookingFormContainer = () => {
  const [isBookTablePopupOpen, setBookTablePopupOpen] = useState(false);

  const openBookTablePopup = useCallback(() => {
    setBookTablePopupOpen(true);
  }, []);

  const closeBookTablePopup = useCallback(() => {
    setBookTablePopupOpen(false);
  }, []);

  return (
    <>
      <section className={styles.gallerySection}>
        <div className={styles.locations}>
          <div className={styles.city}>
            <div className={`${styles.cityImage} ${styles.houston}`}></div>
            <p>HOUSTON</p>
          </div>
          <div className={styles.city}>
            <div className={`${styles.cityImage}  ${styles.dallas}`}></div>
            <p>DALLAS</p>
          </div>
          <div className={styles.city}>
            <div className={`${styles.cityImage}  ${styles.austin}`}></div>
            <p>AUSTIN</p>
          </div>
        </div>
        <div className={styles.contact}>
          <button className={styles.bookbutton} onClick={openBookTablePopup}>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            <b className={styles.bookNow}>Appointment</b>
          </button>
          <div className={styles.contactInfo}>
            <p>Contact us</p>
            <p>
              <a href="tel:+17133200887">(713)-320-0887</a>
            </p>
            <p>
              <a href="mailto:skhibachi@gmail.com">skhibachi@gmail.com</a>
            </p>
          </div>
        </div>
        <SocialMedia />
      </section>
      {isBookTablePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.9)"
          placement="Centered"
          onOutsideClick={closeBookTablePopup}
        >
          <BookTable onClose={closeBookTablePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default BookingFormContainer;
