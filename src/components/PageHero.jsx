import styles from './PageHero.module.css';

export default function PageHero({ eyebrow, title, lead, image }) {
  return (
    <section className={styles.hero}>
      {image && <img className={styles.bg} src={image} alt="" />}
      <div className={`container ${styles.inner}`}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="heading-xl">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
