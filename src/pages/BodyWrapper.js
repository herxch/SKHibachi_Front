import Header from "../components/Header";
import VideoSection from "../components/VideoSection";
import AboutSection from "../components/AboutSection";
import PriceSectionContainer from "../components/PriceSectionContainer";
import BookingFormContainer from "../components/BookingFormContainer";
import Footer from "../components/Footer";
import styles from "./BodyWrapper.module.css";

const BodyWrapper = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <VideoSection />
      <AboutSection />
      <PriceSectionContainer />
      <BookingFormContainer />
      <Footer />
    </div>
  );
};

export default BodyWrapper;
