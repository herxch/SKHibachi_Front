// Lambda (Node.js 22) behind a Function URL: receives the website booking form and emails it via SES.
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const ses = new SESv2Client({});
const FROM = process.env.FROM_ADDRESS; // e.g. "SK Hibachi Website <bookings@skhibachi.com>"
const TO = process.env.TO_ADDRESS; // e.g. skhibachi@gmail.com

const FIELDS = [
  ['dateLabel', 'Date'],
  ['timeLabel', 'Time'],
  ['city', 'City'],
  ['address', 'Address'],
  ['adults', 'Adults (13+)'],
  ['kids', 'Kids (5-12)'],
  ['toddlers', 'Age 4 & under'],
  ['estimate', 'Estimated food total'],
  ['name', 'Name'],
  ['phone', 'Phone'],
  ['email', 'Email'],
  ['occasion', 'Occasion'],
  ['allergies', 'Allergies'],
  ['orders', 'Protein choices'],
  ['chef', 'Chef preference'],
  ['referer', 'Heard about us via'],
  ['message', 'Message'],
];

const reply = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const clean = (v, max = 1000) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export const handler = async (event) => {
  if (event.requestContext?.http?.method !== 'POST') return reply(405, { error: 'Method not allowed' });

  let data;
  try {
    const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : event.body;
    if (!raw || raw.length > 20000) return reply(400, { error: 'Invalid request' });
    data = JSON.parse(raw);
  } catch {
    return reply(400, { error: 'Invalid JSON' });
  }

  // Honeypot filled in: pretend success so bots move on.
  if (clean(data.company)) return reply(200, { ok: true });

  const f = Object.fromEntries(FIELDS.map(([key]) => [key, clean(data[key])]));
  const email = f.email;
  const digits = (f.phone.match(/\d/g) || []).length;
  if (
    f.name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    digits < 10 ||
    !f.dateLabel ||
    !f.timeLabel ||
    !f.city ||
    !f.address ||
    !(parseInt(f.adults, 10) >= 1) ||
    data.agreed !== true
  ) {
    return reply(422, { error: 'Missing or invalid fields' });
  }

  const subject = clean(`New booking request: ${f.dateLabel} ${f.timeLabel}, ${f.city} (${f.name})`, 200).replace(/[\r\n]+/g, ' ');
  const rows = FIELDS.filter(([key]) => f[key]);
  const text = [
    'New hibachi party request from skhibachi.com',
    '',
    ...rows.map(([key, label]) => `${label}: ${f[key]}`),
    '',
    'The customer agreed to the terms, cancellation and weather policies.',
    'Reply to this email to respond to the customer directly.',
  ].join('\n');
  const html = `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;color:#1c1712;background:#f6f0e7;padding:24px">
<div style="max-width:600px;margin:auto;background:#fff;border-radius:12px;overflow:hidden">
<div style="background:#1c1712;color:#f4ede4;padding:20px 24px"><h1 style="margin:0;font-size:20px">New booking request</h1>
<p style="margin:6px 0 0;color:#d9a35b">${escapeHtml(f.dateLabel)} · ${escapeHtml(f.timeLabel)} · ${escapeHtml(f.city)}</p></div>
<table style="width:100%;border-collapse:collapse;font-size:14px">${rows
    .map(
      ([key, label]) =>
        `<tr><td style="padding:10px 24px;border-bottom:1px solid #eee;color:#6b5f52;width:170px;vertical-align:top">${label}</td><td style="padding:10px 24px;border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(f[key])}</td></tr>`
    )
    .join('')}</table>
<p style="padding:16px 24px;margin:0;font-size:13px;color:#6b5f52">The customer agreed to the terms, cancellation and weather policies. Reply to this email to respond to them directly.</p>
</div></body></html>`;

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: FROM,
        Destination: { ToAddresses: [TO] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: subject, Charset: 'UTF-8' },
            Body: { Text: { Data: text, Charset: 'UTF-8' }, Html: { Data: html, Charset: 'UTF-8' } },
          },
        },
      })
    );
  } catch (err) {
    console.error('SES send failed', err);
    return reply(502, { error: 'Could not send' });
  }

  return reply(200, { ok: true });
};
