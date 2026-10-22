import { Link } from 'react-router-dom';
import { business } from '../data/site';
import { ArrowRightIcon, PhoneIcon } from './Icons';
import styles from './CtaBand.module.css';

export default function CtaBand({
  title = 'Ready to fire up your next party?',
  text = 'Pick a date and tell us about your crowd. We will handle the grill, the food and the show.',
}) {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner} reveal`}>
        <div className={styles.copy}>
          <h2 className="heading-lg">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btn-row">
          <Link to="/book" className={`btn ${styles.light}`}>
            Book your party <ArrowRightIcon width={18} height={18} />
          </Link>
          <a href={business.phoneHref} className={`btn ${styles.outline}`}>
            <PhoneIcon width={18} height={18} /> {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
