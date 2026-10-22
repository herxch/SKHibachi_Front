import usePageMeta from '../hooks/usePageMeta';
import { business, faqGroups } from '../data/site';
import PageHero from '../components/PageHero';
import FaqList from '../components/FaqList';
import CtaBand from '../components/CtaBand';
import { MailIcon, PhoneIcon } from '../components/Icons';
import styles from './FaqPage.module.css';

export default function FaqPage() {
  usePageMeta({
    title: 'FAQ',
    description:
      'Answers about SK Hibachi pricing, kids’ prices, travel fees, tipping, what to prepare, indoor cooking, rain and cancellations.',
  });

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Any questions before we set the place on fire?"
        lead="Everything you need to know about pricing, the menu and party day."
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <aside className={styles.aside}>
            <nav aria-label="FAQ topics" className={styles.toc}>
              {faqGroups.map((g) => (
                <a key={g.title} href={`#${slug(g.title)}`}>
                  {g.title}
                </a>
              ))}
            </nav>
            <div className={styles.help}>
              <h2>Still have a question?</h2>
              <p>Call, text or email us and we will be happy to help.</p>
              <a href={business.phoneHref}>
                <PhoneIcon width={16} height={16} /> {business.phone}
              </a>
              <a href={business.emailHref}>
                <MailIcon width={16} height={16} /> {business.email}
              </a>
            </div>
          </aside>

          <div className={styles.groups}>
            {faqGroups.map((g) => (
              <section key={g.title} id={slug(g.title)} className={`${styles.group} reveal`}>
                <h2 className="heading-md">{g.title}</h2>
                <FaqList items={g.items} />
              </section>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
