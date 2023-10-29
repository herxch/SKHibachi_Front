import { useState, useCallback, useRef, useEffect } from 'react';
import BookingConfirm from './BookingConfirm';
import PortalPopup from './PortalPopup';
import emailjs from 'emailjs-com';
import styles from './BookTable.module.css';

const BookTable = ({ onClose }) => {
  const form = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const verifyFirstName = () => {
    if (!firstNameRef.current.value.trim()) {
      setFirstNameError('First name is mandatory.');
    } else {
      setFirstNameError('');
      validateForm();
    }
  };

  const verifyLastName = () => {
    if (!lastNameRef.current.value.trim()) {
      setLastNameError('Last name is mandatory.');
    } else {
      setLastNameError('');
      validateForm();
    }
  };

  const emailRef = useRef();
  const [emailError, setEmailError] = useState(''); // 用于存储验证信息的状态

  const verifyEmail = () => {
    const emailValue = emailRef.current.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 简单的电子邮件验证正则表达式

    if (!emailPattern.test(emailValue)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError('');
      validateForm();
    }
  };

  const phoneRef = useRef();
  const [phoneError, setPhoneError] = useState('');

  const verifyPhone = () => {
    const phoneValue = phoneRef.current.value;
    const phonePattern = /^[0-9-\s]+$/; // 仅允许数字，短横线和空格

    if (!phonePattern.test(phoneValue) || !phoneValue) {
      setPhoneError('Please enter a valid phone number.');
    } else {
      setPhoneError('');
      validateForm();
    }
  };

  const dateRef = useRef();
  const [dateError, setDateError] = useState('');
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dateString = tomorrow.toISOString().split('T')[0];
    setMinDate(dateString);
  }, []);

  const verifyDate = () => {
    const dateValue = dateRef.current.value;

    if (!dateValue) {
      // 检查日期是否已选
      setDateError('Please select a date.');
    } else {
      setDateError('');
      validateForm();
    }
  };

  const timeRef = useRef();
  const [timeError, setTimeError] = useState('');

  const verifyTime = () => {
    const timeValue = timeRef.current.value;

    if (!timeValue) {
      // 检查是否已选择时间
      setTimeError('Please select a time.');
    } else {
      setTimeError('');
      validateForm();
    }
  };

  const peopleRef = useRef();
  const [peopleError, setPeopleError] = useState('');

  const verifyPeople = () => {
    const peopleValue = peopleRef.current.value;

    if (!peopleValue || peopleValue < 1 || peopleValue > 100) {
      setPeopleError('Must between 1 and 100.');
    } else {
      setPeopleError('');
      validateForm();
    }
  };

  const addressRef = useRef();
  const [addressError, setAddressError] = useState('');

  const verifyAddress = () => {
    const addressValue = addressRef.current.value;

    if (!addressValue.trim()) {
      // 检查地址是否为空或只有空格
      setAddressError('Home address is mandatory.');
    } else {
      setAddressError('');
      validateForm();
    }
  };

  const messageRef = useRef();

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [
    firstNameError,
    lastNameError,
    emailError,
    phoneError,
    dateError,
    timeError,
    peopleError,
    addressError,
  ]);

  const validateForm = () => {
    if (
      firstNameRef.current.value.trim() &&
      lastNameRef.current.value.trim() &&
      emailRef.current.value.trim() &&
      phoneRef.current.value.trim() &&
      dateRef.current.value.trim() &&
      timeRef.current.value &&
      peopleRef.current.value &&
      addressRef.current.value.trim() &&
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !phoneError &&
      !dateError &&
      !timeError &&
      !peopleError &&
      !addressError
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const [isBookingConfirmPopupOpen, setBookingConfirmPopupOpen] =
    useState(false);
  const [showBookTable, setShowBookTable] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setBookingConfirmPopupOpen(true);
      setShowBookTable(false);
      emailjs
        .sendForm(
          `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
          `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
          form.current,
          `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const closeBookingConfirmPopup = useCallback(() => {
    setBookingConfirmPopupOpen(false);
    onClose();
  }, [onClose]);

  console.log(isValid);

  return (
    <>
      {showBookTable && (
        <div className={styles.booktable}>
          <h1 className={styles.appointment}>Appointment</h1>
          <form className={styles.form} ref={form} onSubmit={onSubmit}>
            <div className={styles.firstname}>
              <label className={styles.labelText}>First name</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/user.svg' />
                <input
                  className={styles.input}
                  type='text'
                  ref={firstNameRef}
                  name='firstName'
                  onBlur={verifyFirstName} // 验证名字
                />
              </div>
              {firstNameError && (
                <span style={{ color: 'red' }}>({firstNameError})</span>
              )}
            </div>
            <div className={styles.lastname}>
              <label className={styles.labelText}>Last Name</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/user.svg' />
                <input
                  className={styles.input}
                  type='text'
                  ref={lastNameRef}
                  name='lastName'
                  onBlur={verifyLastName} // 验证姓氏
                />
              </div>
              {lastNameError && (
                <span style={{ color: 'red' }}>({lastNameError})</span>
              )}
            </div>

            <div className={styles.email}>
              <label className={styles.labelText}>Email Address</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/envelope.svg' />
                <input
                  className={styles.input}
                  type='email' // 将输入类型更改为电子邮件
                  ref={emailRef}
                  name='email'
                  onBlur={verifyEmail}
                />
              </div>
              {emailError && (
                <span style={{ color: 'red' }}>({emailError})</span>
              )}
            </div>
            <div className={styles.phone}>
              <label className={styles.labelText}>Phone #</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/phone.svg' />
                <input
                  className={styles.input}
                  type='tel' // 将输入类型更改为电话
                  ref={phoneRef}
                  name='phone'
                  onBlur={verifyPhone}
                />
              </div>
              {phoneError && (
                <span style={{ color: 'red' }}>({phoneError})</span>
              )}
            </div>
            <div className={styles.date}>
              <label className={styles.labelText}>Date</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/calendar.svg' />
                <input
                  className={styles.input}
                  type='date'
                  ref={dateRef}
                  name='date'
                  onBlur={verifyDate}
                  min={minDate} // 设置可选择日期的最小值
                />
              </div>
              {dateError && <span style={{ color: 'red' }}>({dateError})</span>}
            </div>
            <div className={styles.time}>
              <label className={styles.labelText}>Time</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/time.svg' />
                <select
                  className={styles.input}
                  ref={timeRef}
                  name='time'
                  onBlur={verifyTime}
                >
                  <option value=''>Select a time</option>
                  <option value='13:00'>1:00pm</option>
                  <option value='16:00'>4:00pm</option>
                  <option value='19:00'>7:00pm</option>
                  <option value='21:30'>9:30pm</option>
                </select>
              </div>
              {timeError && <span style={{ color: 'red' }}>({timeError})</span>}
            </div>
            <div className={styles.people}>
              <label className={styles.labelText}>How many people</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/group.svg' />
                <input
                  className={`${styles.input}`}
                  type='number' // 设置输入类型为数字
                  ref={peopleRef}
                  name='people'
                  onBlur={verifyPeople}
                  min='1' // 设置最小值
                  max='100' // 设置最大值
                />
              </div>
              {peopleError && (
                <span style={{ color: 'red' }}>({peopleError})</span>
              )}
            </div>
            <div className={styles.address}>
              <label className={styles.labelText}>Home Address</label>
              <div className={styles.inputwrapper}>
                <input
                  className={styles.input}
                  type='text'
                  ref={addressRef}
                  name='address'
                  onBlur={verifyAddress} // 当用户离开输入框时验证地址
                />
              </div>
              {addressError && (
                <span style={{ color: 'red' }}>({addressError})</span>
              )}
            </div>
            <div className={styles.message}>
              <label className={styles.labelText}>Message to chef</label>
              <div className={styles.inputwrapper8}>
                <textarea
                  className={styles.input}
                  ref={messageRef}
                  name='message'
                  rows='3' // 你可以根据需要调整行数
                  cols='50' // 你可以根据需要调整列数
                ></textarea>
              </div>
            </div>
            <button className={styles.submit} type='submit' disabled={!isValid}>
              <h3 className={styles.submit1}>Submit</h3>
            </button>
          </form>
        </div>
      )}
      ;
      {isBookingConfirmPopupOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.9)'
          placement='Centered'
          onOutsideClick={closeBookingConfirmPopup}
        >
          <BookingConfirm onClose={closeBookingConfirmPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default BookTable;
