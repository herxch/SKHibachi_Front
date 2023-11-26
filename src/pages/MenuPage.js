import React, { useEffect, useRef } from 'react';
import styles from './MenuPage.module.css'; // 使用模块化的 CSS
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

const MenuPage = () => {
  const pageTitle = 'PICK YOU MEAT ! SAKE ON US ! ';
  const videoRef = useRef();

  useEffect(() => {
    const handlePlayVideo = () => {
      videoRef.current.play();
    };

    window.addEventListener('load', handlePlayVideo);

    return () => {
      window.removeEventListener('load', handlePlayVideo);
    };
  }, []);

  return (
    <>
      <Navbar />
      <PageHeader title={pageTitle} />
      <div className={styles.menuWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <h1 className={styles.howItWorks}>PRICING</h1>
            {/* <div className={styles.howitworksline} /> */}
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
          <div className={styles.rightContent}>
            <div onClick={() => videoRef.current.play()}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                }}
              >
                <source src={'/menuVideo1.mp4'} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <h1 className={styles.howItWorks}>WHAT GONNA HAPPEN </h1>
              <p className={styles.minimumForAllContainer}>
                On the day of the event, the private chef would arrive at your
                location with their own hibachi grill equipment.as the host,
                would be responsible for providing plates, utensils, napkins
                tables and chairs for your guests. Each guest would typically
                get a pre-determined hibachi menu, which might include a side
                salad, hibachi vegetables, fried rice, and a choice of two
                proteins (such as chicken, beef, shrimp, or tofu).{' '}
              </p>
            </div>
            <div onClick={() => videoRef.current.play()}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                }}
              >
                <source src={'/menuVideo2.mp4'} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <SocialMedia />
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
