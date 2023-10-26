import styles from "./PriceSectionContainer.module.css";

const PriceSectionContainer = () => {
  return (
    <section className={styles.priceSection}>
      <div className={styles.priceSectionChild} />
      <div className={styles.priceHeader}>
        <h1 className={styles.personNow50Container}>
          <span>$60/person NOW $</span>
          <b className={styles.b}>50</b>
          <span>!!!</span>
        </h1>
        <img className={styles.priceHeaderChild} alt="" src="/line-3.svg" />
      </div>
      <div className={styles.priceDetails}>
        <div className={styles.priceDR}>
          <h2 className={styles.howItWorks}>HOW IT WORKS</h2>
          <div className={styles.priceDRChild} />
          <div className={styles.priceDRP}>
            <div className={styles.bookAPrivate}>
              Book a private hibachi chef for your event! We'll bring cooking
              utensils, ingredients, sake, and smiles. The chef will arrive with
              a hibachi grill, ready to cook a delightful menu including salad,
              hibachi vegetables, fried rice, and two protein choices. Just
              provide plates, utensils, napkins, tables, and chairs, and let the
              hibachi experience enchant your guests!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.priceDetails}>
        <div className={styles.priceDR1}>
          <h2 className={styles.howItWorks}>PRICING</h2>
          <div className={styles.priceDRChild} />
          <div className={styles.priceDRP1}>
            <div className={styles.minimumForAllContainer}>
              <p className={styles.minimumForAllParties}>
                <span className={styles.span}>{`$500.00 `}</span>
                <span> minimum for all parties</span>
              </p>
              <p className={styles.minimumForAllParties}>
                <span className={styles.span}>$50.00</span>
                <span> per person</span>
              </p>
              <p className={styles.minimumForAllParties}>
                <span className={styles.span}>{`$25.00  `}</span>
                <span>per child 12 and under</span>
              </p>
              <p className={styles.minimumForAllParties}>&nbsp;</p>
              <p className={styles.minimumForAllParties}>
                All fees included except gratuity and a possible travel fee
              </p>
              <p className={styles.minimumForAllParties}>
                Minimum may vary depending on location
              </p>
              <p className={styles.minimumForAllParties}>&nbsp;</p>
              <p className={styles.minimumForAllParties}>
                2 protein per person
              </p>
              <p
                className={styles.minimumForAllParties}
              >{`Chicken, Steak, Shrimp, Scallops, Salmon, Tofu, `}</p>
              <p className={styles.minimumForAllParties}>&nbsp;</p>
              <p className={styles.minimumForAllParties}>
                <span>{`Filet Mignon + `}</span>
                <span className={styles.span}>$5</span>
                <span
                  className={styles.lobsterTail}
                >{`, Lobster Tail + `}</span>
                <span className={styles.span}>$10</span>
              </p>
              <p className={styles.minimumForAllParties}>&nbsp;</p>
              <p className={styles.minimumForAllParties}>
                Includes salad, fried rice, and vegetables
              </p>
              <p className={styles.minimumForAllParties}>&nbsp;</p>
              <p className={styles.minimumForAllParties}>
                <span>{`3rd Protein  `}</span>
                <span className={styles.span}>10$</span>
                <span>{` `}</span>
              </p>
              <p className={styles.minimumForAllParties}>
                <span>{`Filet  `}</span>
                <span className={styles.span}>{`15$ `}</span>
              </p>
              <p className={styles.minimumForAllParties}>
                <span>{`Lobster  `}</span>
                <span className={styles.span}>20$</span>
              </p>
              <p className={styles.minimumForAllParties}>
                <span>{`NOODLES AVALIABLE  `}</span>
                <span className={styles.span}>5$</span>
                <span className={styles.lobsterTail}> PER ORDER</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSectionContainer;
