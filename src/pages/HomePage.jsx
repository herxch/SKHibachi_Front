import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { business, faqGroups, steps } from '../data/site';
import PricingPanel from '../components/PricingPanel';
import FaqList from '../components/FaqList';
import CtaBand from '../components/CtaBand';
import { ArrowRightIcon, FlameIcon, MapPinIcon } from '../components/Icons';
import styles from './HomePage.module.css';

const facts = [
  { value: '$50', label: 'per adult guest' },
  { value: '$500', label: 'party minimum' },
  { value: '2', label: 'proteins per guest' },
  { value: '3', label: 'Texas cities served' },
];

const features = [
  {
    image: '/images/filet-grill.webp',
    alt: 'Filet mignon searing on a hibachi grill',
    title: 'Cooked fresh, right in front of you',
    text: 'We use the freshest ingredients and cook every plate to order on the grill, so the food arrives hot, sizzling and full of flavor.',
  },
  {
    image: '/images/shrimp.webp',
    alt: 'Grilled shrimp held with chopsticks',
    title: 'Chefs who put on a show',
    text: 'Our hibachi chefs are masters of the grill and natural entertainers. Expect plenty of laughs and a dinner your guests will be talking about.',
  },
  {
    image: '/images/fried-rice.webp',
    alt: 'Heart-shaped hibachi fried rice on the grill',
    title: 'Made for any occasion',
    text: 'Birthdays, anniversaries, graduations, team dinners or just a Saturday with friends. Bring the hibachi experience home to your backyard.',
  },
];

const partyPhotos = [
  { src: '/images/party-3.webp', alt: 'A large family party under a backyard tent' },
  { src: '/images/party-4.webp', alt: 'Guests in balloon hats posing with their hibachi chef' },
  { src: '/images/party-1.webp', alt: 'Hibachi chef entertaining guests on a patio at night' },
  { src: '/images/party-2.webp', alt: 'A group of friends smiling at a night-time hibachi party' },
];

const homeFaq = faqGroups.flatMap((g) => g.items).filter((item) =>
  [
    'What should I prepare?',
    'How does the travel fee work?',
    'Do I need to tip the chef?',
    'Do you cook indoors?',
  ].includes(item.q)
);

export default function HomePage() {
  usePageMeta({
    title: 'Private Hibachi Chef in Houston, Dallas & Austin',
    description:
      'SK Hibachi brings a private hibachi chef, grill, fresh food and sake to your backyard. Serving Houston, Dallas and Austin. $50 per guest, $500 party minimum.',
  });

  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          src="/video/hero.mp4"
          poster="/images/hero-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">Private hibachi chef · Houston · Dallas · Austin</span>
          <h1 className="heading-xl">The hibachi show, live in your backyard.</h1>
          <p className={styles.heroLead}>
            A private chef, a sizzling grill and plenty of sake. We bring everything to your home so
            you can host an unforgettable party without lifting a spatula.
          </p>
          <div className="btn-row">
            <Link to="/book" className="btn btn--primary">
              Book your party <ArrowRightIcon width={18} height={18} />
            </Link>
            <a href="#pricing" className="btn btn--ghost">
              See pricing
            </a>
          </div>
        </div>
      </section>

      <section className={styles.facts} aria-label="At a glance">
        <ul className={`container ${styles.factsList}`}>
          {facts.map((f) => (
            <li key={f.label}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How it works</span>
            <h2 className="heading-lg">Hosting a hibachi party is easy.</h2>
            <p className="lead">
              We bring the chef, the grill, the ingredients and the sake. You bring the guests.
            </p>
          </div>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="heading-md">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper" id="pricing">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Pricing</span>
            <h2 className="heading-lg">Simple, all-inclusive pricing.</h2>
            <p className="lead">
              One price per guest covers the chef, the full hibachi meal and sake. No hidden fees.
            </p>
          </div>
          <div className="reveal">
            <PricingPanel />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The experience</span>
            <h2 className="heading-lg">Dinner and a show, without leaving home.</h2>
          </div>
          <div className={styles.features}>
            {features.map((f, i) => (
              <article key={f.title} className={`${styles.feature} reveal`} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className={styles.featureImg}>
                  <img src={f.image} alt={f.alt} loading="lazy" width="800" height="533" />
                </div>
                <h3 className="heading-md">{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="container">
          <div className={`${styles.galleryHead} reveal`}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Real parties</span>
              <h2 className="heading-lg">Moments our guests remember.</h2>
            </div>
            <Link to="/gallery" className="text-link">
              View the gallery <ArrowRightIcon width={16} height={16} />
            </Link>
          </div>
          <div className={styles.mosaic}>
            {partyPhotos.map((p, i) => (
              <figure key={p.src} className={`${styles.tile} ${styles[`tile${i + 1}`]} reveal`}>
                <img src={p.src} alt={p.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.areas}`}>
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Service areas</span>
            <h2 className="heading-lg">Now serving three Texas metros.</h2>
            <p className="lead">
              We come to homes across greater Houston, Dallas and Austin. The first 20 miles from our
              nearest location are free; after that the travel fee is $2 per mile.
            </p>
          </div>
          <ul className={styles.cityList}>
            {business.cities.map((c, i) => (
              <li key={c} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <MapPinIcon />
                <div>
                  <h3>{c}</h3>
                  <span>& surrounding areas</span>
                </div>
                <FlameIcon className={styles.cityFlame} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--raised">
        <div className={`container ${styles.faq}`}>
          <div className="section-head reveal">
            <span className="eyebrow">Good to know</span>
            <h2 className="heading-lg">Questions before you book?</h2>
            <p className="lead">The essentials are below. Everything else is on our FAQ page.</p>
            <Link to="/qna" className="text-link">
              Read all FAQs <ArrowRightIcon width={16} height={16} />
            </Link>
          </div>
          <div className="reveal">
            <FaqList items={homeFaq} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
