// PageHeader.jsx
import React from 'react';
import styles from './PageHeader.module.css'; // 使用模块化的 CSS

const PageHeader = ({ title, text = '' }) => {
  return (
    <div className={styles.pageHeaderContainer}>
      <div className={styles.pageHeaderContent}>
        <h2 className={styles.pageHeaderTitle}>{title}</h2>
        <p className={styles.pageHeaderText}>{text}</p>
      </div>
    </div>
  );
};

export default PageHeader;
