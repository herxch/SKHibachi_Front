import { useState, useCallback } from "react";
import BookTable from "./BookTable";
import PortalPopup from "./PortalPopup";
import MobileMenuButton from "./MobileMenuButton";
import PortalDrawer from "./PortalDrawer";
import styles from "./Header.module.css";

const Header = () => {
  const [isBookTablePopupOpen, setBookTablePopupOpen] = useState(false);
  const [isMobileMenuButtonOpen, setMobileMenuButtonOpen] = useState(false);

  const openBookTablePopup = useCallback(() => {
    setBookTablePopupOpen(true);
  }, []);

  const closeBookTablePopup = useCallback(() => {
    setBookTablePopupOpen(false);
  }, []);

  const openMobileMenuButton = useCallback(() => {
    setMobileMenuButtonOpen(true);
  }, []);

  const closeMobileMenuButton = useCallback(() => {
    setMobileMenuButtonOpen(false);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <button className={styles.bookbutton} onClick={openBookTablePopup}>
          <img className={styles.bellicon} alt="" src="/vector.svg" />
          <b className={styles.book}>Book</b>
        </button>
        <div className={styles.hamburger} onClick={openMobileMenuButton}>
          <img className={styles.hamline1Icon} alt="" src="/vector1.svg" />
          <img className={styles.hamline1Icon} alt="" src="/vector1.svg" />
          <img className={styles.hamline1Icon} alt="" src="/vector1.svg" />
        </div>
        <nav className={styles.menuButton}>
          <button className={styles.menu}>
            <b className={styles.menu1}>Menu</b>
          </button>
          <button className={styles.menu}>
            <b className={styles.menu1}>Gallery</b>
          </button>
          <button className={styles.story}>
            <b className={styles.menu1}>Story</b>
          </button>
        </nav>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </nav>
      {isBookTablePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.9)"
          placement="Centered"
          onOutsideClick={closeBookTablePopup}
        >
          <BookTable onClose={closeBookTablePopup} />
        </PortalPopup>
      )}
      {isMobileMenuButtonOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMobileMenuButton}
        >
          <MobileMenuButton onClose={closeMobileMenuButton} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Header;
