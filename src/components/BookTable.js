import { useState, useCallback } from "react";
import BookingConfirm from "./BookingConfirm";
import PortalPopup from "./PortalPopup";
import styles from "./BookTable.module.css";

const BookTable = ({ onClose }) => {
  const [isBookingConfirmPopupOpen, setBookingConfirmPopupOpen] =
    useState(false);

  const openBookingConfirmPopup = useCallback(() => {
    setBookingConfirmPopupOpen(true);
  }, []);

  const closeBookingConfirmPopup = useCallback(() => {
    setBookingConfirmPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.booktable}>
        <b className={styles.bookTable}>BOOK TABLE</b>
        <div className={styles.form}>
          <div className={styles.name}>
            <div className={styles.input}>
              <b className={styles.firstName}>First name</b>
              <div className={styles.iconUserParent}>
                <img className={styles.iconUser} alt="" src="/-icon-user.svg" />
                <div className={styles.i}>I</div>
              </div>
            </div>
            <div className={styles.input}>
              <b className={styles.firstName}>Last Name</b>
              <div className={styles.iconUserParent}>
                <img className={styles.iconUser} alt="" src="/-icon-user.svg" />
                <div className={styles.i}>I</div>
              </div>
            </div>
          </div>
          <div className={styles.name}>
            <div className={styles.input}>
              <b className={styles.firstName}>Email Address</b>
              <div className={styles.iconUserParent}>
                <img
                  className={styles.iconEnvelope}
                  alt=""
                  src="/-icon-envelope.svg"
                />
                <div className={styles.i}>I</div>
              </div>
            </div>
            <div className={styles.input}>
              <b className={styles.firstName}>Phone #</b>
              <div className={styles.iconUserParent}>
                <img
                  className={styles.iconPhone}
                  alt=""
                  src="/-icon-phone.svg"
                />
                <div className={styles.i}>I</div>
              </div>
            </div>
          </div>
          <div className={styles.name}>
            <div className={styles.input}>
              <b className={styles.firstName}>Date</b>
              <div className={styles.iconUserParent}>
                <img
                  className={styles.iconCalendar}
                  alt=""
                  src="/-icon-calendar.svg"
                />
                <div className={styles.i}>I</div>
              </div>
            </div>
            <div className={styles.input}>
              <b className={styles.firstName}>Time</b>
              <div className={styles.iconUserParent}>
                <img
                  className={styles.iconPhone}
                  alt=""
                  src="/-icon-time.svg"
                />
                <div className={styles.i}>I</div>
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <b className={styles.firstName}>How many</b>
              <div className={styles.iconUserParent}>
                <img
                  className={styles.iconUserGroup1}
                  alt=""
                  src="/-icon-user-group.svg"
                />
                <div className={styles.i}>I</div>
              </div>
            </div>
          </div>
          <div className={styles.homeaddress}>
            <b className={styles.firstName}>Home Address</b>
            <div className={styles.dollarSymbolParent}>
              <img
                className={styles.dollarSymbolIcon}
                alt=""
                src="/dollar-symbol.svg"
              />
              <div className={styles.i}> I</div>
            </div>
          </div>
          <div className={styles.message}>
            <b className={styles.firstName}>Message to chef #</b>
            <div className={styles.dollarSymbolGroup}>
              <img
                className={styles.dollarSymbolIcon}
                alt=""
                src="/dollar-symbol.svg"
              />
              <div className={styles.i}> I</div>
            </div>
          </div>
        </div>
        <div className={styles.button} onClick={openBookingConfirmPopup}>
          <b className={styles.bookTable}>Submit</b>
        </div>
      </div>
      {isBookingConfirmPopupOpen && (
        <PortalPopup
          overlayColor="rgba(255, 255, 255, 0.9)"
          placement="Centered"
          onOutsideClick={closeBookingConfirmPopup}
        >
          <BookingConfirm onClose={closeBookingConfirmPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default BookTable;
