import usePageMeta from '../hooks/usePageMeta';
import { business, pricing } from '../data/site';
import BookingForm from '../components/BookingForm';
import { CheckIcon, MailIcon, PhoneIcon } from '../components/Icons';
import styles from './BookPage.module.css';

export default function BookPage() {
  usePageMeta({
    title: 'Book Your Hibachi Party',
    description:
      'Request a private hibachi chef for your party in Houston, Dallas or Austin. Pick your date, time and guest count and our team will confirm the details.',
  });

  return (
    <section className={styles.page}>
      {/* Desktop: intro + details on the left, form on the right. Phones: intro, form, details. */}
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <span className="eyebrow">Book a party</span>
          <h1 className="heading-lg">Let’s get your grill date on the calendar.</h1>
          <p className="lead">
            Send us a few details and our team will follow up by text or email to confirm your
            reservation. No payment is needed to request a date.
          </p>
        </div>

        <div id="booking" className={styles.formCol}>
          <BookingForm />
        </div>

        <div className={styles.details}>
          <ul className={styles.points}>
            <li>
              <CheckIcon width={18} height={18} /> $50 per adult · $25 per child · {pricing.minimum} minimum
            </li>
            <li>
              <CheckIcon width={18} height={18} /> Chef, grill, food and sake included
            </li>
            <li>
              <CheckIcon width={18} height={18} /> Pay after the party
            </li>
            <li>
              <CheckIcon width={18} height={18} /> Free travel within 20 miles
            </li>
          </ul>
          <div className={styles.contact}>
            <p>Prefer to talk to someone?</p>
            <a href={business.phoneHref}>
              <PhoneIcon width={16} height={16} /> {business.phone}
            </a>
            <a href={business.emailHref}>
              <MailIcon width={16} height={16} /> {business.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
