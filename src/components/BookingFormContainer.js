import { useState, useCallback } from "react";
import BookTable from "./BookTable";
import PortalPopup from "./PortalPopup";
import styles from "./BookingFormContainer.module.css";

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
        <div className={styles.galleryseparateline} />
        <div className={styles.contact}>
          <button className={styles.bookbutton} onClick={openBookTablePopup}>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            <h3 className={styles.bookNow}>BOOK NOW</h3>
          </button>
          <h3 className={styles.weCoverAll}>We cover all State of Taxes!</h3>
          <h2
            className={styles.haveFunWith}
          >{`Have fun with us and enjoy an unforgettable meal ! `}</h2>
          <h2 className={styles.haveFunWith}>{`Contact us `}</h2>
          <h2 className={styles.haveFunWith}>(832)-729-3896</h2>
          <h2 className={styles.haveFunWith}>skhibachi@gmail.com</h2>
        </div>
        <div className={styles.photoseparateline} />
        <div className={styles.photoWrapperIcon}>
          <img className={styles.photo} alt="" src="/photo1.png" />
          <img className={styles.photo} alt="" src="/photo2.png" />
          <img className={styles.photo} alt="" src="/photo3.png" />
          <img className={styles.photo} alt="" src="/photo4.png" />
        </div>
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
