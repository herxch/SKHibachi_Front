import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutWrapper}>
        <h1 className={styles.aboutUs}>ABOUT US</h1>
        <div className={styles.loremIpsumDolorContainer}>
          <p className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, ne vix altera putant meliore. Ius ut
            dicunt delicata, nam accusamus comprehensam ne, ex erat partem duo.
            Eos putent maiorum ut, nominati urbanitas ut his, ei nec malorum
            laoreet disputando. Per ne graece deterruisset.
          </p>
          <p className={styles.loremIpsumDolor}></p>
          <p className={styles.loremIpsumDolor}>
            Pericula periculis eam in. Eu illud facilis vim, qui populo persius
            disputationi an. Ei per perpetua vulputate, per solet ridens commune
            in, zril theophrastus ut duo. Sea ut modus omnes referrentur, ne
            solum interpretaris his. His et reque regione ancillae, nemore
            quaerendum dissentiet vis et. Ex veri nullam sit, vis an nostrud
            nostrum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
