import { Link } from 'react-router-dom';
import { business } from '../data/site';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, socialIcons } from './Icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.brand}>
            <img src="/images/logo.webp" alt="" width="52" height="52" loading="lazy" />
            <span>SK Hibachi</span>
          </Link>
          <p className={styles.blurb}>
            Private hibachi chefs who bring the grill, the food, the sake and the show to your
            backyard.
          </p>
          <div className={styles.social}>
            {business.social.map(({ name, href }) => {
              const Icon = socialIcons[name];
              return (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className={styles.title}>Explore</h2>
          <ul className={styles.list}>
            <li><Link to="/menu">Menu &amp; Pricing</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/qna">FAQ</Link></li>
            <li><Link to="/book">Book a party</Link></li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Contact</h2>
          <ul className={styles.list}>
            <li>
              <a href={business.phoneHref}>
                <PhoneIcon width={16} height={16} /> {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref}>
                <MailIcon width={16} height={16} /> {business.email}
              </a>
            </li>
            <li>
              <span>
                <ClockIcon width={16} height={16} /> {business.hours}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Service areas</h2>
          <ul className={styles.list}>
            {business.cities.map((c) => (
              <li key={c}>
                <span>
                  <MapPinIcon width={16} height={16} /> {c}, TX
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} SK Hibachi. All rights reserved.</p>
        <p>Outdoor hibachi catering in Houston, Dallas &amp; Austin.</p>
      </div>
    </footer>
  );
}
