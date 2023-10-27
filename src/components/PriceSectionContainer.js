import { useState, useCallback } from "react";
import BookTable from "./BookTable";
import PortalPopup from "./PortalPopup";
import styles from "./PriceSectionContainer.module.css";

const PriceSectionContainer = () => {
  const [isBookTablePopupOpen, setBookTablePopupOpen] = useState(false);

  const openBookTablePopup = useCallback(() => {
    setBookTablePopupOpen(true);
  }, []);

  const closeBookTablePopup = useCallback(() => {
    setBookTablePopupOpen(false);
  }, []);

  return (
    <>
      <section className={styles.priceSection} onClick={openBookTablePopup}>
        <div className={styles.priceseparateline} />
        <div className={styles.priceHeader}>
          <h1 className={styles.personNow50Container}>
            <span>
              <span className={styles.span}>$60</span>
            </span>
            <span>/person NOW $</span>
            <b className={styles.b}>50</b>
            <span className={styles.span1}>!!!</span>
          </h1>
          <img
            className={styles.strikethroughlineIcon}
            alt=""
            src="/line-3.svg"
          />
        </div>
        <div className={styles.priceDetails}>
          <div className={styles.priceDR}>
            <h1 className={styles.howItWorks}>HOW IT WORKS</h1>
            <div className={styles.howitworksline} />
            <p className={styles.bookAPrivate}>
              Book a private hibachi chef for your event! We'll bring cooking
              utensils, ingredients, sake, and smiles. The chef will arrive with
              a hibachi grill, ready to cook a delightful menu including salad,
              hibachi vegetables, fried rice, and two protein choices. Just
              provide plates, utensils, napkins, tables, and chairs, and let the
              hibachi experience enchant your guests!
            </p>
          </div>
          <div className={styles.priceDR1}>
            <h1 className={styles.howItWorks}>PRICING</h1>
            <div className={styles.howitworksline} />
            <p className={styles.minimumForAllContainer}>
              <span className={styles.minimumForAllParties}>
                <span className={styles.span2}>{`$500.00 `}</span>
                <span> minimum for all parties</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span className={styles.span2}>$50.00</span>
                <span> per person</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span className={styles.span2}>{`$25.00  `}</span>
                <span>per child 12 and under</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>&nbsp;</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>
                  All fees included except gratuity and a possible travel fee
                </span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>Minimum may vary depending on location</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>&nbsp;</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>2 protein per person</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>{`Chicken, Steak, Shrimp, Scallops, Salmon, Tofu, `}</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>&nbsp;</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>{`Filet Mignon + `}</span>
                <span className={styles.span2}>$5</span>
                <span
                  className={styles.lobsterTail}
                >{`, Lobster Tail + `}</span>
                <span className={styles.span2}>$10</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>&nbsp;</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>Includes salad, fried rice, and vegetables</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>&nbsp;</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>{`3rd Protein  `}</span>
                <span className={styles.span2}>10$</span>
                <span>{` `}</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>{`Filet  `}</span>
                <span className={styles.span2}>{`15$ `}</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>{`Lobster  `}</span>
                <span className={styles.span2}>20$</span>
              </span>
              <span className={styles.minimumForAllParties}>
                <span>{`NOODLES AVALIABLE  `}</span>
                <span className={styles.span2}>5$</span>
                <span className={styles.lobsterTail}> PER ORDER</span>
              </span>
            </p>
          </div>
        </div>
      </section>
      {isBookTablePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBookTablePopup}
        >
          <BookTable onClose={closeBookTablePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default PriceSectionContainer;
