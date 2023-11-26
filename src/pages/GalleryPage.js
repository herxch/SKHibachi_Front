import React from 'react';
import styles from './GalleryPage.module.css'; // 使用模块化的 CSS
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const pageTitle = 'MOMENT OF PLEASURE';

  return (
    <>
      <Navbar />
      <PageHeader title={pageTitle} />
      <div className={styles.galleryWrapper}>
        <div className={styles.photos}>
          <img
            src='/photo1.png'
            alt='happy customers'
            className={styles.photo1}
          />
          <img
            src='/photo2.png'
            alt='happy customers'
            className={styles.photo2}
          />
          <img
            src='/photo3.png'
            alt='happy customers'
            className={styles.photo3}
          />
          <img
            src='/photo4.png'
            alt='happy customers'
            className={styles.photo4}
          />
        </div>
        <SocialMedia />
      </div>

      <Footer />
    </>
  );
};

export default GalleryPage;
