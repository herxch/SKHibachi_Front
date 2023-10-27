import styles from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.videoheaderWrapper}>
        <h1 className={styles.foodSakeFire}>FOOD, SAKE, FIRE AND FUN!</h1>
        <h3 className={styles.letYourFamily}>
          Let your family and friends share your food experience
        </h3>
      </div>
    </section>
  );
};

export default VideoSection;
