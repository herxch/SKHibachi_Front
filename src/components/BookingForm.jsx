import { useMemo, useState } from 'react';
import { business, policies, referralSources, terms, timeSlots } from '../data/site';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from './Icons';
import styles from './BookingForm.module.css';

const ENDPOINT = import.meta.env.VITE_BOOKING_ENDPOINT;

const STEPS = ['Event', 'Your details', 'Review'];

const initial = {
  date: '',
  time: '',
  city: '',
  address: '',
  adults: '',
  kids: '',
  toddlers: '',
  name: '',
  phone: '',
  email: '',
  occasion: '',
  allergies: '',
  referer: '',
  chef: '',
  orders: '',
  message: '',
  agreed: false,
  company: '', // honeypot, real visitors never see it
};

function tomorrowISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const toInt = (v) => Math.max(0, parseInt(v, 10) || 0);

function validate(step, f) {
  const e = {};
  if (step === 0) {
    if (!f.date) e.date = 'Choose a date.';
    else if (f.date < tomorrowISO()) e.date = 'Please choose a date from tomorrow onward.';
    if (!f.time) e.time = 'Choose a start time.';
    if (!f.city) e.city = 'Choose a city.';
    if (f.address.trim().length < 6) e.address = 'Enter the party address.';
    const adults = toInt(f.adults);
    if (adults < 1) e.adults = 'At least one adult is required.';
    if (adults + toInt(f.kids) + toInt(f.toddlers) > 150) e.adults = 'For parties over 150 guests, please call us.';
  }
  if (step === 1) {
    if (f.name.trim().length < 2) e.name = 'Enter your full name.';
    if ((f.phone.match(/\d/g) || []).length < 10) e.phone = 'Enter a 10-digit phone number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Enter a valid email address.';
    if (!f.referer) e.referer = 'Let us know how you found us.';
  }
  if (step === 2 && !f.agreed) e.agreed = 'Please agree to the terms to send your request.';
  return e;
}

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed

  const minDate = useMemo(tomorrowISO, []);
  const adults = toInt(form.adults);
  const kids = toInt(form.kids);
  const subtotal = adults * 50 + kids * 25;
  const estimate = Math.max(500, subtotal);
  const timeLabel = timeSlots.find((t) => t.value === form.time)?.label ?? '';

  const set = (name) => (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const goTo = (next) => {
    setStep(next);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const next = (ev) => {
    ev.preventDefault();
    const e = validate(step, form);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.querySelector(`[name="${Object.keys(e)[0]}"]`);
      first?.focus();
      return;
    }
    if (step < STEPS.length - 1) goTo(step + 1);
    else submit();
  };

  async function submit() {
    if (!ENDPOINT) {
      setStatus('failed');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          dateLabel: formatDate(form.date),
          timeLabel,
          estimate: `$${estimate.toLocaleString()}`,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch {
      setStatus('failed');
    }
  }

  if (status === 'sent') {
    return (
      <div className={styles.card} role="status">
        <div className={styles.done}>
          <span className={styles.doneIcon}>
            <CheckIcon width={28} height={28} />
          </span>
          <h2 className="heading-lg">Thank you, {form.name.split(' ')[0]}!</h2>
          <p>
            We received your request for <strong>{formatDate(form.date)}</strong> at{' '}
            <strong>{timeLabel}</strong> in <strong>{form.city}</strong>. Our team will reach out by text or
            email shortly to confirm your party.
          </p>
          <p className={styles.muted}>
            Need to change something? Call or text {business.phone} or email {business.email}.
          </p>
        </div>
      </div>
    );
  }

  const field = (name, label, input, hint) => (
    <div className={styles.field}>
      <label htmlFor={`f-${name}`}>{label}</label>
      {input}
      {hint && !errors[name] && <p className={styles.hint}>{hint}</p>}
      {errors[name] && (
        <p className={styles.error} id={`f-${name}-error`}>
          {errors[name]}
        </p>
      )}
    </div>
  );

  const inputProps = (name) => ({
    id: `f-${name}`,
    name,
    value: form[name],
    onChange: set(name),
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `f-${name}-error` : undefined,
  });

  return (
    <form className={styles.card} onSubmit={next} noValidate>
      <ol className={styles.progress} aria-label="Booking steps">
        {STEPS.map((label, i) => (
          <li
            key={label}
            className={i === step ? styles.current : i < step ? styles.complete : ''}
            aria-current={i === step ? 'step' : undefined}
          >
            <span>{i < step ? <CheckIcon width={14} height={14} /> : i + 1}</span>
            {label}
          </li>
        ))}
      </ol>

      <div className={styles.honey} aria-hidden="true">
        <label htmlFor="f-company">Company</label>
        <input id="f-company" name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={set('company')} />
      </div>

      {step === 0 && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>When and where is your party?</legend>
          <div className={styles.grid2}>
            {field('date', 'Date', <input type="date" min={minDate} {...inputProps('date')} />)}
            {field(
              'time',
              'Start time',
              <select {...inputProps('time')}>
                <option value="">Select a time</option>
                {timeSlots.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            )}
          </div>
          {field(
            'city',
            'City',
            <select {...inputProps('city')}>
              <option value="">Select a city</option>
              {business.cities.map((c) => (
                <option key={c} value={c}>
                  {c} area
                </option>
              ))}
            </select>
          )}
          {field(
            'address',
            'Party address',
            <input type="text" autoComplete="street-address" placeholder="Street, city, ZIP" {...inputProps('address')} />,
            'First 20 miles from our nearest location are free; $2 per mile after that.'
          )}
          <div className={styles.grid3}>
            {field('adults', 'Adults (13+)', <input type="number" min="1" inputMode="numeric" {...inputProps('adults')} />)}
            {field('kids', 'Kids (5–12)', <input type="number" min="0" inputMode="numeric" {...inputProps('kids')} />)}
            {field('toddlers', '4 & under', <input type="number" min="0" inputMode="numeric" {...inputProps('toddlers')} />)}
          </div>
          {adults > 0 && (
            <div className={styles.estimate} aria-live="polite">
              <div>
                <span>Estimated food total</span>
                <strong>${estimate.toLocaleString()}</strong>
              </div>
              <p>
                {subtotal < 500
                  ? 'Parties under the $500 minimum are billed at $500, and you get extra food to match.'
                  : `${adults} adult${adults === 1 ? '' : 's'} × $50${kids ? ` + ${kids} kid${kids === 1 ? '' : 's'} × $25` : ''}.`}{' '}
                Gratuity, travel and upgrades are extra.
              </p>
            </div>
          )}
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Tell us about you and your guests</legend>
          {field('name', 'Full name', <input type="text" autoComplete="name" {...inputProps('name')} />)}
          <div className={styles.grid2}>
            {field('phone', 'Mobile phone', <input type="tel" autoComplete="tel" placeholder="(555) 555-5555" {...inputProps('phone')} />)}
            {field('email', 'Email', <input type="email" autoComplete="email" {...inputProps('email')} />)}
          </div>
          <div className={styles.grid2}>
            {field('occasion', 'Occasion (optional)', <input type="text" placeholder="Birthday, anniversary…" {...inputProps('occasion')} />)}
            {field(
              'referer',
              'How did you hear about us?',
              <select {...inputProps('referer')}>
                <option value="">Select an option</option>
                {referralSources.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            )}
          </div>
          {field('allergies', 'Food allergies (optional)', <input type="text" placeholder="None" {...inputProps('allergies')} />)}
          {field(
            'orders',
            'Protein choices (optional)',
            <textarea rows="3" placeholder="e.g. Adults: 10 chicken, 5 steak, 5 shrimp. Kids: 5 chicken, 5 steak" {...inputProps('orders')} />,
            'Two proteins per guest. Not sure yet? Leave it blank and send it to us later.'
          )}
          <div className={styles.grid2}>
            {field('chef', 'Chef preference (optional)', <input type="text" placeholder="Chef's name" {...inputProps('chef')} />)}
          </div>
          {field('message', 'Anything else? (optional)', <textarea rows="3" {...inputProps('message')} />)}
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Review your request</legend>
          <dl className={styles.summary}>
            <div><dt>Date</dt><dd>{formatDate(form.date)}</dd></div>
            <div><dt>Time</dt><dd>{timeLabel}</dd></div>
            <div><dt>Location</dt><dd>{form.address} ({form.city} area)</dd></div>
            <div>
              <dt>Guests</dt>
              <dd>
                {adults} adult{adults === 1 ? '' : 's'}
                {kids ? `, ${kids} kid${kids === 1 ? '' : 's'}` : ''}
                {toInt(form.toddlers) ? `, ${toInt(form.toddlers)} age 4 & under` : ''}
              </dd>
            </div>
            <div><dt>Contact</dt><dd>{form.name} · {form.phone} · {form.email}</dd></div>
            <div><dt>Estimate</dt><dd>${estimate.toLocaleString()} + gratuity &amp; travel</dd></div>
          </dl>
          <button type="button" className={styles.editLink} onClick={() => goTo(0)}>
            Edit details
          </button>

          <div className={styles.terms} tabIndex={0} aria-label="Terms and policies">
            <h3>Terms &amp; conditions</h3>
            <p>{terms}</p>
            {policies.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          <label className={styles.check}>
            <input type="checkbox" name="agreed" checked={form.agreed} onChange={set('agreed')} aria-invalid={errors.agreed ? true : undefined} />
            <span>I have read and agree to the terms, cancellation and weather policies above.</span>
          </label>
          {errors.agreed && <p className={styles.error}>{errors.agreed}</p>}

          {status === 'failed' && (
            <div className={styles.failed} role="alert">
              We could not send your request just now. Please call or text{' '}
              <a href={business.phoneHref}>{business.phone}</a> or email{' '}
              <a href={business.emailHref}>{business.email}</a> and we will get you booked.
            </div>
          )}
        </fieldset>
      )}

      <div className={styles.nav}>
        {step > 0 ? (
          <button type="button" className="btn btn--ghost" onClick={() => goTo(step - 1)}>
            <ArrowLeftIcon width={18} height={18} /> Back
          </button>
        ) : (
          <span />
        )}
        <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
          {step < STEPS.length - 1 ? (
            <>
              Continue <ArrowRightIcon width={18} height={18} />
            </>
          ) : status === 'sending' ? (
            'Sending…'
          ) : (
            'Send booking request'
          )}
        </button>
      </div>
    </form>
  );
}
