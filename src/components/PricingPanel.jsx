import { Link } from 'react-router-dom';
import { pricing } from '../data/site';
import { ArrowRightIcon, CheckIcon } from './Icons';
import styles from './PricingPanel.module.css';

// Price list shown on the home page and the menu page. `detailed` adds add-ons.
export default function PricingPanel({ detailed = false }) {
  return (
    <div className={styles.panel}>
      <div className={styles.prices}>
        <ul className={styles.tiers}>
          {pricing.tiers.map((t) => (
            <li key={t.label} className={styles.tier}>
              <div>
                <h3>{t.label}</h3>
                <p>{t.note}</p>
              </div>
              <div className={styles.amount}>
                <strong>{t.price}</strong>
                <span>{t.unit}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.minimum}>
          <span>Party minimum</span>
          <strong>{pricing.minimum}</strong>
        </div>
        <p className={styles.fine}>{pricing.finePrint}</p>
      </div>

      <div className={styles.details}>
        <h3 className={styles.subhead}>Every guest gets</h3>
        <ul className={styles.checks}>
          {pricing.included.map((item) => (
            <li key={item}>
              <CheckIcon width={18} height={18} /> {item}
            </li>
          ))}
        </ul>

        <h3 className={styles.subhead}>Pick two proteins</h3>
        <ul className={styles.chips}>
          {pricing.proteins.map((p) => (
            <li key={p}>{p}</li>
          ))}
          {pricing.upgrades.map((u) => (
            <li key={u.label} className={styles.upgrade}>
              {u.label} <b>{u.price}</b>
            </li>
          ))}
        </ul>

        {detailed ? (
          <>
            <h3 className={styles.subhead}>Add-ons</h3>
            <ul className={styles.extras}>
              {pricing.extras.map((x) => (
                <li key={x.label}>
                  <span>{x.label}</span>
                  <span className={styles.dots} aria-hidden="true" />
                  <b>{x.price}</b>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Link to="/menu" className="text-link">
            Add-ons, upgrades &amp; policies <ArrowRightIcon width={16} height={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
