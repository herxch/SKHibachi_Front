import React from 'react';
import styles from './QnAPage.module.css'; // 使用模块化的 CSS
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Card from '../components/Card';

const QnAPage = () => {
  const pageTitle = 'ANY QUESTIONS BEFORE SET THE WHOLE PLACE ON FIRE ?';
  const qnaL1Title = 'How much does your service cost?';
  const qnaL1Text =
    'Our service has a base price of $50 per person with a $500 minimum spend.';
  const qnaL2Title = 'What is on the Menu?';
  const qnaL2Text = `Each guest gets:
  Choice of 2 Proteins
  Chicken, NY Strip Steak, Shrimp, Scallops or Salmon, Tofu or Vegetarian Options.
  Lots of Sake (21+)
  Fried Rice
  Fresh Cooked Vegetables
  Side Salad
  Signature Sauce`;
  const qnaL2Paragraph = qnaL2Text
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  const qnaL3Title = 'What time will the chef arrive?';
  const qnaL3Text = `The chef will try to arrive approximately 10-15 minutes prior to the reservation time. Our set-up process is usually very easy and only takes a few minutes.`;
  const qnaL4Title = 'Do I Need to Tip the Chef?';
  const qnaL4Text = `Gratuity goes directly to the chef and is greatly appreciated!
  Most of our guests tip at minimum similar to eating at restaurants 18% - 25%`;
  const qnaL4Paragraph = qnaL4Text
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  const qnaL5Title = 'Can I Have More Details on Kids Prices?';
  const qnaL5Text = `The Kids price is for ages between 5-12 years old.
  13 and older is adult price.
  Age 4 and under eats free! They get 1 protein and about 1/4 cup of rice.`;
  const qnaL5Paragraph = qnaL5Text
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  const qnaL6Title = 'Do you cook inside homes?';
  const qnaL6Text = `Our experience is best outside in backyards, terraces, balconies etc.. Although we prefer outside we can cook indoors if we are notified ahead of time and there are high ceilings and plenty of ventilation in the cooking area.`;

  const qnaR1Title = 'Can you Tell More About Fees?';
  const qnaR1Text = `All fees are included in price per person except for chef gratuity, possible travel fee and optional upgrades. We accept and prefer Cash in all locations. To be paid after the party. Some locations accept other forms of payment like Zelle, Venmo. Contact us for the specific payment options offered at your location.`;
  const qnaR2Title = 'What Should I Prepare for My Party?';
  const qnaR2Text = `You should arrange for a clear area for our grill: 68.3" L x 27.5" W x 41.3" H and setup your tables, chairs, silverware, large plates, salad plates, drink cups and any beverages you want to drink besides sake (which we bring plenty of!)`;
  const qnaR3Title = 'Can you Explain the Travel Fee?';
  const qnaR3Text = `The first 20 miles to your party location from our nearest office is free! It's $2 per mile after the first 20 miles  (please contact for travel fees there)`;
  const qnaR4Title = 'Can the customer provide their own proteins?';
  const qnaR4Text = `Due to insurance and pricing requirements, we do not cook any outside protein or food at this time. `;
  const qnaR5Title = 'Do you Offer Table and Chair Setup?';
  const qnaR5Text = `We do not offer setup service for the parties. Companies that do often charge 2x 3x our price.

  Our chefs just need space for the grill setup so we can entertain you and your guests in almost any type of setup you choose.`;
  const qnaR5Paragraph = qnaR5Text
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  const qnaR6Title = 'Are These Parties Kid Friendly?';
  const qnaR6Text = `Yes 100% Our parties are fun for the whole family! 
  Our chefs are very talented and can tailor the experience to be even more kid and family friendly. 
  Just let the reservations manager know after booking. `;
  const qnaR6Paragraph = qnaR6Text
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <>
      <Navbar />
      <PageHeader title={pageTitle} />
      <div className={styles.qnaWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <Card title={qnaL1Title} text={qnaL1Text} />
            <Card title={qnaL2Title} text={qnaL2Paragraph} />
            <Card title={qnaL3Title} text={qnaL3Text} />
            <Card title={qnaL4Title} text={qnaL4Paragraph} />
            <Card title={qnaL5Title} text={qnaL5Paragraph} />
            <Card title={qnaL6Title} text={qnaL6Text} />
          </div>
          <div className={styles.rightContent}>
            <Card title={qnaR1Title} text={qnaR1Text} />
            <Card title={qnaR2Title} text={qnaR2Text} />
            <Card title={qnaR3Title} text={qnaR3Text} />
            <Card title={qnaR4Title} text={qnaR4Text} />
            <Card title={qnaR5Title} text={qnaR5Paragraph} />
            <Card title={qnaR6Title} text={qnaR6Paragraph} />
          </div>
        </div>
        <SocialMedia />
      </div>
      <Footer />
    </>
  );
};

export default QnAPage;
