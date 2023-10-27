import { useEffect } from "react";
import styles from "./MobileMenuButton.module.css";

const MobileMenuButton = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
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
      <button className={styles.menu}>
        <b className={styles.menu1}>Menu</b>
      </button>
      <button className={styles.menu}>
        <b className={styles.menu1}>Gallery</b>
      </button>
      <button className={styles.story}>
        <b className={styles.menu1}>Story</b>
      </button>
    </div>
  );
};

export default MobileMenuButton;
