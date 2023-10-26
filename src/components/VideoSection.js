import styles from "./VideoSection.module.css";
import HeroVideo from "./HeroVideo";

const VideoSection = () => {
  return (
    <section className={styles.videoSection}>
      <HeroVideo />
      <div className={styles.videoheaderWrapper}>
        <h1 className={styles.foodSakeFire}>FOOD, SAKE, FIRE AND FUN!</h1>
      </div>
      <div className={styles.letYourFamily}>
        Let your family and friends share your food experience
      </div>
    </section>
  );
};

export default VideoSection;
