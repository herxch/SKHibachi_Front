import { useEffect, useState } from 'react';
import usePageMeta from '../hooks/usePageMeta';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { CloseIcon } from '../components/Icons';
import styles from './GalleryPage.module.css';

const items = [
  { type: 'image', src: '/images/party-1.webp', alt: 'Hibachi chef entertaining guests on a patio at night', wide: true },
  { type: 'image', src: '/images/filet-grill.webp', alt: 'Filet mignon searing on the grill' },
  { type: 'video', src: '/video/grill-1.mp4', poster: '/images/grill-1-poster.webp', alt: 'Chef cooking on the hibachi grill', tall: true },
  { type: 'image', src: '/images/party-4.webp', alt: 'Guests in balloon hats posing with their chef' },
  { type: 'image', src: '/images/shrimp.webp', alt: 'Grilled shrimp held with chopsticks' },
  { type: 'image', src: '/images/party-3.webp', alt: 'A large family party under a backyard tent', wide: true },
  { type: 'image', src: '/images/fried-rice.webp', alt: 'Heart-shaped hibachi fried rice' },
  { type: 'video', src: '/video/grill-2.mp4', poster: '/images/grill-2-poster.webp', alt: 'Flames rising from the hibachi grill', tall: true },
  { type: 'image', src: '/images/party-2.webp', alt: 'Friends smiling at a night-time hibachi party' },
  { type: 'image', src: '/images/steak-chicken.webp', alt: 'Steak and chicken hibachi plate' },
  { type: 'image', src: '/images/chef-flame.webp', alt: 'Hibachi chef with flames rising from the grill' },
];

export default function GalleryPage() {
  usePageMeta({
    title: 'Gallery',
    description:
      'Photos and videos from SK Hibachi backyard parties in Houston, Dallas and Austin: happy guests, flaming grills and fresh hibachi food.',
  });

  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of pleasure."
        lead="Real parties, real guests and a lot of sizzle. Follow us on Instagram and TikTok for more."
      />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          {items.map((item) => (
            <figure
              key={item.src}
              className={`${styles.cell} ${item.wide ? styles.wide : ''} ${item.tall ? styles.tall : ''} reveal`}
            >
              {item.type === 'video' ? (
                <video src={item.src} poster={item.poster} autoPlay muted loop playsInline aria-label={item.alt} />
              ) : (
                <button type="button" className={styles.open} onClick={() => setActive(item)}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <span className="visually-hidden">Open larger photo</span>
                </button>
              )}
            </figure>
          ))}
        </div>
      </section>

      {active && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={active.alt} onClick={() => setActive(null)}>
          <button type="button" className={styles.close} aria-label="Close" onClick={() => setActive(null)} autoFocus>
            <CloseIcon width={24} height={24} />
          </button>
          <img src={active.src} alt={active.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <CtaBand title="Want photos like these from your party?" />
    </>
  );
}
