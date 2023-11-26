// Card.jsx
import React from 'react';
import styles from './Card.module.css'; // 使用模块化的 CSS

const Card = ({ title, text }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default Card;
