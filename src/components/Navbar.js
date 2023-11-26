import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import BookTable from './BookTable';
import PortalPopup from './PortalPopup';
import MobileMenuButton from './MobileMenuButton';
import PortalDrawer from './PortalDrawer';
import styles from './Navbar.module.css';

const Navbar = () => {
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
        <div className={styles.hamburger} onClick={openMobileMenuButton}>
          <img className={styles.hamline1Icon} alt='' src='/vector1.svg' />
          <img className={styles.hamline1Icon} alt='' src='/vector1.svg' />
          <img className={styles.hamline1Icon} alt='' src='/vector1.svg' />
        </div>
        <img className={styles.logoIcon} alt='' src='/logo@2x.png' />
        <nav className={styles.menuButton}>
          <NavLink to='/menu' className={styles.menu}>
            <b className={styles.menu1}>Menu</b>
          </NavLink>
          <NavLink to='/gallery' className={styles.menu}>
            <b className={styles.menu1}>Gallery</b>
          </NavLink>
          <NavLink to='/about' className={styles.menu}>
            <b className={styles.menu1}>About us</b>
          </NavLink>
          <NavLink to='/qna' className={styles.menu}>
            <b className={styles.menu1}>Q&A</b>
          </NavLink>
        </nav>

        <button className={styles.bookbutton} onClick={openBookTablePopup}>
          <img className={styles.bellicon} alt='' src='/vector.svg' />
          <b className={styles.book}>Book</b>
        </button>
      </nav>
      {isBookTablePopupOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.9)'
          placement='Centered'
          onOutsideClick={closeBookTablePopup}
        >
          <BookTable onClose={closeBookTablePopup} />
        </PortalPopup>
      )}
      {isMobileMenuButtonOpen && (
        <PortalDrawer
          overlayColor='rgba(113, 113, 113, 0.9)'
          placement='Right'
          onOutsideClick={closeMobileMenuButton}
        >
          <MobileMenuButton onClose={closeMobileMenuButton} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Navbar;
