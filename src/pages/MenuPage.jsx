import usePageMeta from '../hooks/usePageMeta';
import { policies } from '../data/site';
import PageHero from '../components/PageHero';
import PricingPanel from '../components/PricingPanel';
import CtaBand from '../components/CtaBand';
import styles from './MenuPage.module.css';

const hostChecklist = [
  'A flat, clear area for the grill, about 68" L × 28" W × 41" H',
  'Tables and chairs for your guests',
  'Large plates, salad plates, silverware and napkins',
  'Cups and any drinks besides sake',
  'A covered spot (tent or patio) if rain is in the forecast',
];

export default function MenuPage() {
  usePageMeta({
    title: 'Menu & Pricing',
    description:
      'SK Hibachi pricing: $50 per adult, $25 per child, $500 party minimum. Every guest gets salad, vegetables, fried rice, two proteins, signature sauce and sake.',
  });

  return (
    <>
      <PageHero
        eyebrow="Menu & pricing"
        title="Pick your proteins. Sake is on us."
        lead="One straightforward price per guest covers your private chef, the full hibachi meal and sake for guests 21 and over."
        image="/images/steak-fire.webp"
      />

      <section className="section section--paper">
        <div className="container reveal">
          <PricingPanel detailed />
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.split}`}>
          <div className="reveal">
            <span className="eyebrow">Party day</span>
            <h2 className="heading-lg" style={{ marginTop: 18 }}>
              What to expect when the chef arrives.
            </h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Your chef arrives 10–15 minutes before the reservation with their own hibachi grill,
              fresh ingredients and sake. Setup only takes a few minutes. Each guest is served a side
              salad, hibachi vegetables, fried rice and their two protein choices, all cooked fresh in
              front of the group.
            </p>
            <h3 className={styles.listTitle}>As the host, please provide</h3>
            <ul className={styles.checklist}>
              {hostChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.videos} reveal`}>
            <video src="/video/grill-1.mp4" poster="/images/grill-1-poster.webp" autoPlay muted loop playsInline aria-label="Chef cooking on the hibachi grill" />
            <video src="/video/grill-2.mp4" poster="/images/grill-2-poster.webp" autoPlay muted loop playsInline aria-label="Flames rising from the hibachi grill" />
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Policies</span>
            <h2 className="heading-lg">The fine print, made simple.</h2>
          </div>
          <div className={styles.policies}>
            {[
              {
                title: 'Gratuity',
                text: 'Gratuity is not included and goes directly to your chef. Most guests tip 18%–25%, as they would at a restaurant.',
              },
              {
                title: 'Travel fee',
                text: 'The first 20 miles from our nearest location are free. After that, travel is $2 per mile.',
              },
              ...policies,
            ].map((p, i) => (
              <article key={p.title} className={`${styles.policy} reveal`} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
