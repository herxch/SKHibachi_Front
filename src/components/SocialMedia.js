// SocialMedia.jsx
import React from "react";
import styles from "./SocialMedia.module.css"; // 使用模块化的 CSS
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <div className={styles.socialMediaContent}>
        <h2 className={styles.socialMediaTitle}>
          FOLLOW US FOR ACTIVITIES AND MORE FUN !
        </h2>
        <div className={styles.socialMediaIcon}>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fb}
          ></a>
          <a
            href="https://instagram.com/skhibachi?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ig}
          ></a>
          <a
            href="https://www.tiktok.com/@skhibachi?_t=8hhbyZLPeix&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tt}
          ></a>
          {/* <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.yt}
          ></a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.yp}
          ></a> */}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
