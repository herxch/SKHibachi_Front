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
        <h1 className={styles.appointment}>Appointment</h1>
        <main className={styles.form}>
          <div className={styles.firstname}>
            <label className={styles.firstName}>First name</label>
            <div className={styles.inputwrapper}>
              <img className={styles.userIcon} alt="" src="/user.svg" />
              <input className={styles.firstname1} type="text" />
            </div>
          </div>
          <div className={styles.firstname}>
            <label className={styles.firstName}>Last Name</label>
            <div className={styles.inputwrapper}>
              <img className={styles.userIcon} alt="" src="/user.svg" />
              <input className={styles.firstname1} type="text" />
            </div>
          </div>
          <div className={styles.firstname}>
            <label className={styles.firstName}>Email Address</label>
            <div className={styles.inputwrapper}>
              <img className={styles.evelopeIcon} alt="" src="/evelope.svg" />
              <input className={styles.firstname1} type="text" />
            </div>
          </div>
          <div className={styles.firstname}>
            <label className={styles.firstName}>Phone #</label>
            <div className={styles.inputwrapper}>
              <img className={styles.phoneIcon} alt="" src="/phone.svg" />
              <input className={styles.calendar} type="text" />
            </div>
          </div>
          <div className={styles.firstname}>
            <label className={styles.firstName}>Date</label>
            <div className={styles.inputwrapper}>
              <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
              <input className={styles.calendar} type="text" />
            </div>
          </div>
          <div className={styles.firstname}>
            <label className={styles.firstName}>Time</label>
            <div className={styles.inputwrapper}>
              <img className={styles.phoneIcon} alt="" src="/time.svg" />
              <input className={styles.calendar} type="text" />
            </div>
          </div>
          <div className={styles.people}>
            <label className={styles.firstName}>How many people</label>
            <div className={styles.inputwrapper}>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <input className={styles.calendar} type="text" />
            </div>
          </div>
          <div className={styles.address}>
            <label className={styles.firstName}>Home Address</label>
            <div className={styles.inputwrapper7}>
              <input className={styles.calendar} type="text" />
            </div>
          </div>
          <div className={styles.message}>
            <label className={styles.firstName}>{`Message to chef `}</label>
            <div className={styles.inputwrapper8}>
              <input className={styles.firstname1} type="text" />
            </div>
          </div>
        </main>
        <button className={styles.submit} onClick={openBookingConfirmPopup}>
          <h3 className={styles.submit1}>Submit</h3>
        </button>
      </div>
      {isBookingConfirmPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.9)"
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
