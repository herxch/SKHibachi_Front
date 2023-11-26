import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MobileMenuButton.module.css';

const MobileMenuButton = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      '[data-animate-on-scroll]'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.mobileMenuButton} data-animate-on-scroll>
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
    </div>
  );
};

export default MobileMenuButton;
