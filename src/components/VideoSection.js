import HeroVideo from './HeroVideo';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  return (
    <section className={styles.videoSection}>
      <HeroVideo />
    </section>
  );
};

export default VideoSection;
