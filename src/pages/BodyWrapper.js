import Header from "../components/Header";
import VideoSection from "../components/VideoSection";
import AboutSection from "../components/AboutSection";
import PriceSectionContainer from "../components/PriceSectionContainer";
import BookingFormContainer from "../components/BookingFormContainer";
import Footer from "../components/Footer";
import styles from "./BodyWrapper.module.css";

const BodyWrapper = () => {
  return (
    <div className={styles.bodyWrapper}>
      <Header />
      <VideoSection />
      <AboutSection />
      <PriceSectionContainer />
      <BookingFormContainer />
      <Footer />
      <div className={styles.navLogo}>
        <div className={styles.navLogoChild} />
        <img className={styles.skCuber31} alt="" src="/sk-cuber-3-11@2x.png" />
      </div>
    </div>
  );
};

export default BodyWrapper;
