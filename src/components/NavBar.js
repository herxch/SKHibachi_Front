import React from 'react';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.menuButton}>
        <button className={styles.button}>Menu</button>
        <button className={styles.button}>Gallery</button>
        <button className={styles.button}>Story</button>
      </div>
      <div className={styles.actionButton}>
        <button className={styles.button2}>
          <img className={styles.vector} alt='Vector' src='vector.svg' />
          <div className={styles.textWrapper3}>APPOINTMENT</div>
        </button>
      </div>
      <img className={styles.logo} alt='Logo' src='logo.png' />
    </div>
  );
};
