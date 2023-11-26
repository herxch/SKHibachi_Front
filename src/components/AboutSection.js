import styles from './AboutSection.module.css';
import PageHeader from './PageHeader';

const AboutSection = () => {
  const title = 'FUN, SAKE AND SK HIBACHI !';
  const text = `S&K Hibachi was born from a shared love for the bold flavors and interactive cooking style of hibachi cuisine. With a desire to create a unique culinary experience, we set out to bring the sizzle of hibachi to outdoor settings, allowing guests to enjoy fresh, expertly prepared dishes in the open air.`;
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutWrapper}>
        <PageHeader title={title} text={text} />
      </div>
    </section>
  );
};

export default AboutSection;
