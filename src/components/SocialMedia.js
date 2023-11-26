// SocialMedia.jsx
import React from 'react';
import styles from './SocialMedia.module.css'; // 使用模块化的 CSS
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <div className={styles.socialMediaContent}>
        <h2 className={styles.socialMediaTitle}>
          FOLLOW US FOR ACTIVITIES AND MORE FUN !
        </h2>
        <div className={styles.socialMediaIcon}>
          <a
            href='https://www.google.com'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.fb}
          ></a>
          <a
            href='https://www.google.com'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.ig}
          ></a>
          <a
            href='https://www.google.com'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.tw}
          ></a>
          <a
            href='https://www.google.com'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.yt}
          ></a>
          <a
            href='https://www.google.com'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.yp}
          ></a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
