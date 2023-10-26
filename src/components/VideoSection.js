import styles from './VideoSection.module.css';

const VideoSection = () => {
  return (
    <section className={styles.videoSection}>
      <video
        autoPlay
        loop
        muted
        style={{
          // position: "fixed",
          width: '100%',
          // left: 0,
          // top: 0,
        }}
      >
        <source src='/VideoHeader.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
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
