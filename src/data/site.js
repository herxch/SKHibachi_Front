// Single source of truth for business details, pricing and FAQ copy.

export const business = {
  name: 'SK Hibachi',
  phone: '(713) 320-0887',
  phoneHref: 'tel:+17133200887',
  smsHref: 'sms:+17133200887',
  email: 'skhibachi@gmail.com',
  emailHref: 'mailto:skhibachi@gmail.com',
  hours: 'Parties daily, 1 PM – 11 PM',
  cities: ['Houston', 'Dallas', 'Austin'],
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/skhibachi' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61553915606269' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@skhibachi' },
  ],
};

export const pricing = {
  tiers: [
    { label: 'Adults', note: 'Ages 13 and up', price: '$50', unit: 'per guest' },
    { label: 'Kids', note: 'Ages 5 – 12', price: '$25', unit: 'per child' },
    { label: 'Little ones', note: 'Ages 4 and under', price: 'Free', unit: '1 protein & rice' },
  ],
  minimum: '$500',
  included: [
    'Side salad',
    'Hibachi vegetables',
    'Fried rice',
    'Two proteins per guest',
    'Signature sauce',
    'Sake for guests 21+',
  ],
  proteins: ['Chicken', 'NY Strip Steak', 'Shrimp', 'Scallops', 'Salmon', 'Tofu'],
  upgrades: [
    { label: 'Filet Mignon', price: '+$5' },
    { label: 'Lobster Tail', price: '+$10' },
  ],
  extras: [
    { label: 'Additional protein', price: '$10' },
    { label: 'Additional filet mignon', price: '$15' },
    { label: 'Additional lobster tail', price: '$20' },
    { label: 'Hibachi noodles', price: '$5 / order' },
  ],
  finePrint:
    'Prices include all fees except chef gratuity and a possible travel fee. Minimum may vary by location.',
};

export const steps = [
  {
    title: 'Reserve your date',
    text: 'Tell us your date, time, city and guest count online. Our team follows up by text or email to confirm the details.',
  },
  {
    title: 'We bring the show',
    text: 'Your chef arrives 10–15 minutes early with the hibachi grill, fresh ingredients and plenty of sake. Setup takes just a few minutes.',
  },
  {
    title: 'Enjoy the party',
    text: 'You set out tables, chairs and plates. Your chef cooks every plate fresh in front of your guests and keeps the crowd entertained.',
  },
];

export const timeSlots = [
  { value: '13:00', label: '1:00 PM' },
  { value: '16:00', label: '4:00 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '21:30', label: '9:30 PM' },
];

export const referralSources = [
  'Google',
  'Instagram',
  'TikTok',
  'Facebook',
  'Yelp',
  'Friend or family',
  'Repeat customer',
  'Other',
];

export const policies = [
  {
    title: 'Cancellations',
    text: 'Please give at least 48 hours’ notice to cancel or reschedule. Changes made with less notice are subject to a $200 fee.',
  },
  {
    title: 'Weather',
    text: 'If rain is in the forecast, please provide a covered area (tent, patio or awning) so the chef can cook and stay dry. Weather cancellations must also be made at least 48 hours ahead.',
  },
  {
    title: 'Payment',
    text: 'Cash is preferred in all locations and is paid after the party. Some locations also accept Zelle or Venmo; ask us what is available in your area.',
  },
];

export const terms = `SK Hibachi, Inc., and any agent, employee, director, or representative of SK Hibachi, will not be liable to any Licensee (Host) or the Licensee’s guests for property damage caused as a result of any party held on the Licensee’s (Host’s) premises. For the purpose of this paragraph, “property damage” is defined as injury to any real or personal property on the premises where the SK Hibachi event is taking place. Furthermore, the Licensee (Host), individually and for the Licensee’s guests, waives any claim against SK Hibachi, Inc. for any loss of, or damage or destruction to, property of the Licensee (Host) or the Licensee’s guests, arising from any cause. This waiver is intended to be a complete release of any responsibility for property loss, damage or destruction sustained by the Licensee or the Licensee’s guests before, during, or after the SK Hibachi event.`;

export const faqGroups = [
  {
    title: 'Pricing & payment',
    items: [
      {
        q: 'How much does your service cost?',
        a: '$50 per adult and $25 per child (ages 5–12), with a $500 minimum per party. Children 4 and under eat free.',
      },
      {
        q: 'What fees are included?',
        a: 'All fees are included in the per-person price except chef gratuity, a possible travel fee and any optional upgrades. Cash is preferred and paid after the party; some locations also accept Zelle or Venmo.',
      },
      {
        q: 'How does the travel fee work?',
        a: 'The first 20 miles from our nearest location are free. After that it is $2 per mile. Contact us if you would like a quote for your address.',
      },
      {
        q: 'Do I need to tip the chef?',
        a: 'Gratuity goes directly to your chef and is greatly appreciated. Most guests tip about what they would at a restaurant, 18%–25%.',
      },
      {
        q: 'Can you tell me more about kids’ prices?',
        a: 'The kids’ price applies to ages 5–12; guests 13 and older pay the adult price. Children 4 and under eat free and get one protein with about a quarter cup of rice.',
      },
      {
        q: 'What if my party has fewer than 10 guests?',
        a: 'We are happy to come. Smaller parties are billed at the $500 minimum, and you will receive extra food to match.',
      },
    ],
  },
  {
    title: 'Food & menu',
    items: [
      {
        q: 'What is on the menu?',
        a: 'Every guest gets a side salad, hibachi vegetables, fried rice, our signature sauce and two proteins: chicken, NY strip steak, shrimp, scallops, salmon or tofu. Filet mignon (+$5) and lobster tail (+$10) are available as upgrades, and we bring plenty of sake for guests 21+.',
      },
      {
        q: 'Can we provide our own proteins?',
        a: 'Due to insurance and pricing requirements, we are not able to cook any outside proteins or food.',
      },
      {
        q: 'Can you accommodate food allergies?',
        a: 'Please list any food allergies when you book so your chef can prepare accordingly.',
      },
    ],
  },
  {
    title: 'Party day',
    items: [
      {
        q: 'What time will the chef arrive?',
        a: 'Your chef aims to arrive 10–15 minutes before your reservation time. Setup is quick and only takes a few minutes.',
      },
      {
        q: 'What should I prepare?',
        a: 'Please clear a flat area for the grill, about 68" L × 28" W × 41" H, and set up your tables, chairs, silverware, large plates, salad plates, cups and any drinks besides sake (we bring plenty).',
      },
      {
        q: 'Do you set up tables and chairs?',
        a: 'We do not offer table and chair setup; companies that do often charge two to three times our price. Our chefs only need space for the grill, so we can work with almost any setup you choose.',
      },
      {
        q: 'Do you cook indoors?',
        a: 'The experience is best outdoors in backyards, terraces and balconies. We can cook indoors if you let us know ahead of time and the space has high ceilings and plenty of ventilation.',
      },
      {
        q: 'Are the parties kid friendly?',
        a: 'Absolutely. Our chefs can tailor the show to be even more kid and family friendly. Just mention it in your booking.',
      },
      {
        q: 'What happens if it rains?',
        a: 'Please provide a covered area such as a tent or patio so the chef can cook and stay dry. If you need to cancel because of weather, let us know at least 48 hours ahead.',
      },
    ],
  },
];
