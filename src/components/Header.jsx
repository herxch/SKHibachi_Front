import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { business } from '../data/site';
import { CloseIcon, MenuIcon, PhoneIcon } from './Icons';
import styles from './Header.module.css';

const links = [
  { to: '/menu', label: 'Menu & Pricing' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/qna', label: 'FAQ' },
];

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Transparent over the home hero, solid everywhere else.
  const solid = scrolled || open || pathname !== '/';

  return (
    <header className={`${styles.header} ${solid ? styles.solid : ''}`}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.brand} aria-label="SK Hibachi home">
          <img src="/images/logo.webp" alt="" width="44" height="44" />
          <span>SK Hibachi</span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.phone} href={business.phoneHref}>
            <PhoneIcon width={16} height={16} />
            {business.phone}
          </a>
          <Link to="/book" className="btn btn--primary btn--sm">
            Book a party
          </Link>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} hidden={!open}>
        <nav className="container" aria-label="Mobile">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={styles.drawerLink}>
              {l.label}
            </NavLink>
          ))}
          <div className={styles.drawerFoot}>
            <Link to="/book" className="btn btn--primary">
              Book a party
            </Link>
            <a href={business.phoneHref} className="btn btn--ghost">
              <PhoneIcon width={18} height={18} />
              {business.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
