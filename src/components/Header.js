import { useState, useCallback } from "react";
import BookTable from "./BookTable";
import PortalPopup from "./PortalPopup";
import styles from "./Header.module.css";

const Header = () => {
  const [isBookTablePopupOpen, setBookTablePopupOpen] = useState(false);

  const openBookTablePopup = useCallback(() => {
    setBookTablePopupOpen(true);
  }, []);

  const closeBookTablePopup = useCallback(() => {
    setBookTablePopupOpen(false);
  }, []);

  return (
    <>
      <header className={styles.navBar}>
        <div className={styles.leftButton}>
          <button className={styles.button3} onClick={openBookTablePopup}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <b className={styles.appointment}>APPOINTMENT</b>
          </button>
          <div className={styles.hamburger}>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
        </div>
        <nav className={styles.menuButton}>
          <div className={styles.button}>
            <b className={styles.menu}>Menu</b>
          </div>
          <div className={styles.button}>
            <b className={styles.menu}>Gallery</b>
          </div>
          <div className={styles.button2}>
            <b className={styles.menu}>Story</b>
          </div>
        </nav>
      </header>
      {isBookTablePopupOpen && (
        <PortalPopup
          overlayColor="rgba(255, 255, 255, 0.9)"
          placement="Centered"
          onOutsideClick={closeBookTablePopup}
        >
          <BookTable onClose={closeBookTablePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
