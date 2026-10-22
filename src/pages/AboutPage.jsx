import usePageMeta from '../hooks/usePageMeta';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import styles from './AboutPage.module.css';

const chapters = [
  {
    eyebrow: 'Our story',
    title: 'Born from a love of the grill.',
    text: [
      'SK Hibachi was born from a shared love for the bold flavors and interactive cooking style of hibachi cuisine.',
      'We set out to create something different: bringing the sizzle of hibachi to outdoor settings, so guests can enjoy fresh, expertly prepared dishes in the open air.',
    ],
    image: '/images/steak-chicken.webp',
    alt: 'Steak and chicken fresh off the hibachi grill',
  },
  {
    eyebrow: 'Where we cook',
    title: 'Proudly serving Houston, Dallas and Austin.',
    text: [
      'We are proud to serve the thriving communities of Houston, Dallas and Austin, so residents and visitors in these dynamic cities can enjoy the thrill of outdoor hibachi.',
      'Hosting a special event, a gathering with friends or simply looking for a memorable meal? SK Hibachi is ready to make your outdoor occasion extraordinary.',
    ],
    image: '/images/filet-grill.webp',
    alt: 'Filet mignon searing on the grill',
  },
  {
    eyebrow: 'What sets us apart',
    title: 'Quality, flavor and entertainment.',
    text: [
      'Our hibachi chefs are not only masters of the grill but also engaging performers who add an extra layer of excitement to the meal.',
      'We cook with the freshest ingredients, right before your eyes, for an unforgettable dinner that sparks lively conversation.',
    ],
    image: '/images/shrimp.webp',
    alt: 'Grilled shrimp held with chopsticks',
  },
  {
    eyebrow: 'Fire it up',
    title: 'Every meal is a delightful spectacle.',
    text: [
      'Savor the irresistible flavors of hibachi, breathe in the fresh outdoor air and create lasting memories with the people you love.',
      'If you are ready for a unique outdoor hibachi adventure, we would love to cook for you, right in the heart of Texas.',
    ],
    image: '/images/fried-rice.webp',
    alt: 'Heart-shaped hibachi fried rice',
  },
];

export default function AboutPage() {
  usePageMeta({
    title: 'About Us',
    description:
      'SK Hibachi brings the sizzle of hibachi to backyards across Houston, Dallas and Austin, with skilled chefs, fresh ingredients and a great show.',
  });

  return (
    <>
      <PageHero
        eyebrow="About SK Hibachi"
        title="Why SK Hibachi?"
        lead="Fresh food, skilled chefs and a show your guests will not forget, brought straight to your backyard."
        image="/images/chef-flame.webp"
      />

      <section className="section">
        <div className={`container ${styles.chapters}`}>
          {chapters.map((c, i) => (
            <article key={c.title} className={`${styles.chapter} ${i % 2 ? styles.flip : ''}`}>
              <div className={`${styles.media} reveal`}>
                <img src={c.image} alt={c.alt} loading={i ? 'lazy' : 'eager'} width="800" height="560" />
              </div>
              <div className={`${styles.copy} reveal`}>
                <span className="eyebrow">{c.eyebrow}</span>
                <h2 className="heading-lg">{c.title}</h2>
                {c.text.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
