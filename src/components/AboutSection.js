import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutWrapper}>
        <h1 className={styles.aboutUs}>FUN, SAKE AND SK HIBACHI !</h1>
        <p className={styles.loremIpsumDolorContainer}>
          <span className={styles.loremIpsumDolor}>
            S&K Hibachi was born from a shared love for the bold flavors and
            interactive cooking style of hibachi cuisine. With a desire to
            create a unique culinary experience, we set out to bring the sizzle
            of hibachi to outdoor settings, allowing guests to enjoy fresh,
            expertly prepared dishes in the open air.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
