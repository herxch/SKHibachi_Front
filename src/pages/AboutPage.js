import React from 'react';
import styles from './AboutPage.module.css'; // 假设你的CSS模块文件叫styles.module.css
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

const AboutPage = () => {
  const pageTitle = 'WHY SK HIBACHI';
  const storyTitle = 'Our Story';
  const storyText = `S&K Hibachi was born from a shared love for the bold flavors and interactive cooking style of hibachi cuisine. With a desire to create a unique culinary experience, we set out to bring the sizzle of hibachi to outdoor settings, allowing guests to enjoy fresh, expertly prepared dishes in the open air.`;

  const locationTitle = 'Our Locations';
  const locationText = `We're proud to serve the thriving communities of Houston, Dallas, and Austin, ensuring that residents and visitors in these dynamic cities can indulge in the thrill of outdoor hibachi. Whether you're hosting a special event, planning a gathering with friends, or simply seeking a memorable dining experience, S&K Hibachi is ready to make your outdoor occasion extraordinary.`;

  const apartTitle = 'What Sets Us Apart';
  const apartText = `At S&K Hibachi, we prioritize quality, flavor, and entertainment. Our skilled hibachi chefs are not only masters of the grill but also engaging performers who add an extra layer of excitement to your dining experience. We use the freshest ingredients to craft mouthwatering hibachi dishes right before your eyes, ensuring an unforgettable meal that tantalizes your taste buds and sparks lively conversation.`;

  const fireupTitle = 'Fire up !';
  const fireupText = `Join us at S&K Hibachi to savor the irresistible flavors of hibachi cuisine, breathe in the fresh outdoor air, and create lasting memories with your loved ones. Discover the perfect blend of nature and gastronomy in Houston, Dallas, and Austin.

  So, if you're ready for a unique outdoor hibachi adventure, come dine with us at S&K Hibachi, where every meal is a delightful spectacle in the heart of Texas.`;
  const fireupParagraphs = fireupText.split('\n').map((paragraph, index) => (
    // 使用 React.Fragment 而不是 <p> 来避免嵌套问题
    <React.Fragment key={index}>
      {paragraph}
      <br />
    </React.Fragment>
  ));
  return (
    <>
      <Navbar />
      <PageHeader title={pageTitle} />
      <div className={styles.aboutWrapper}>
        <div className={styles.leftContentContainer}>
          <div className={styles.leftContent}>
            <Card title={storyTitle} text={storyText} />
          </div>
          <img
            src='/storyImage.png'
            className={styles.rightImage}
            alt='Our Story'
          />
        </div>
        <div className={styles.rightContentContainer}>
          <div className={styles.rightContent}>
            <Card title={locationTitle} text={locationText} />
          </div>
          <img
            src='/locationImage.png'
            className={styles.leftImage}
            alt='Our Locations'
          />
        </div>
        <div className={styles.leftContentContainer}>
          <div className={styles.leftContent}>
            <Card title={apartTitle} text={apartText} />
          </div>
          <img
            src='/apartImage.png'
            className={styles.rightImage}
            alt='What Sets Us Apart'
          />
        </div>
        <div className={styles.rightContentContainer}>
          <div className={styles.rightContent}>
            <Card title={fireupTitle} text={fireupParagraphs} />
          </div>
          <img
            src='/fireupImage.png'
            className={styles.leftImage}
            alt='Fire up !'
          />
        </div>
        <SocialMedia />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
