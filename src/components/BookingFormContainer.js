import { useState, useCallback } from "react";
import BookTable from "./BookTable";
import PortalPopup from "./PortalPopup";
import styles from "./BookingFormContainer.module.css";

const BookingFormContainer = () => {
  const [isBookTablePopup1Open, setBookTablePopup1Open] = useState(false);

  const openBookTablePopup1 = useCallback(() => {
    setBookTablePopup1Open(true);
  }, []);

  const closeBookTablePopup1 = useCallback(() => {
    setBookTablePopup1Open(false);
  }, []);

  return (
    <>
      <section className={styles.gallerySection}>
        <div className={styles.gallerySectionChild} />
        <div className={styles.bookWrapper}>
          <div className={styles.button4} onClick={openBookTablePopup1}>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            <h3 className={styles.bookNow}>BOOK NOW</h3>
          </div>
          <h3 className={styles.weCoverAll}>We cover all State of Taxes!</h3>
          <div className={styles.logoWrapper}>
            <div className={styles.logoWrapperChild} />
            <img
              className={styles.skCuber31}
              alt=""
              src="/sk-cuber-3-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.contactInfo}>
          <h3
            className={styles.weCoverAll}
          >{`Have fun with us and enjoy an unforgettable meal ! `}</h3>
          <h3 className={styles.contactUs}>{`Contact us `}</h3>
          <h3 className={styles.weCoverAll}>(832)-729-3896</h3>
          <h3 className={styles.weCoverAll}>skhibachi@gmail.com</h3>
        </div>
        <img
          className={styles.photoWrapperIcon}
          alt=""
          src="/photowrapper@2x.png"
        />
      </section>
      {isBookTablePopup1Open && (
        <PortalPopup
          overlayColor="rgba(255, 255, 255, 0.9)"
          placement="Centered"
          onOutsideClick={closeBookTablePopup1}
        >
          <BookTable onClose={closeBookTablePopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default BookingFormContainer;
