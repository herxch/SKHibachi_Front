import Navbar from '../components/Navbar';
import VideoSection from '../components/VideoSection';
import AboutSection from '../components/AboutSection';
import PriceSectionContainer from '../components/PriceSectionContainer';
import BookingFormContainer from '../components/BookingFormContainer';
import Footer from '../components/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Navbar />
      <VideoSection />
      <AboutSection />
      <PriceSectionContainer />
      <BookingFormContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
