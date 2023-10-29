import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.copyright2023SkHibachi}>
        Copyright©{new Date().getFullYear()} SK HIBACHI
      </h2>
    </footer>
  );
};

export default Footer;
