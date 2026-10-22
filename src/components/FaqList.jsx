import { PlusIcon } from './Icons';
import styles from './FaqList.module.css';

// Native <details> accordion: keyboard and screen-reader friendly without extra JS.
export default function FaqList({ items }) {
  return (
    <div className={styles.list}>
      {items.map(({ q, a }) => (
        <details key={q} className={styles.item}>
          <summary className={styles.q}>
            <span>{q}</span>
            <PlusIcon className={styles.icon} />
          </summary>
          <p className={styles.a}>{a}</p>
        </details>
      ))}
    </div>
  );
}
