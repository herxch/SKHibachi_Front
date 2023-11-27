import { useState, useCallback, useRef, useEffect } from 'react';
import BookingConfirm from './BookingConfirm';
import PortalPopup from './PortalPopup';
import emailjs from 'emailjs-com';
import styles from './BookTable.module.css';

const BookTable = ({ onClose }) => {
  const form = useRef();
  const form2 = useRef();
  const form3 = useRef();
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [people, setPeople] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [allergies, setAllergies] = useState('');
  const [occasion, setOccasion] = useState('');
  const [chef, setChef] = useState('');
  const [referer, setReferer] = useState('');
  const [orders, setOrders] = useState('');
  const [message, setMessage] = useState('');

  const firstNameRef = useRef();

  useEffect(() => {
    // 设置 input 的初始值
    if (firstNameRef.current) {
      setFirstName(firstNameRef.current.value);
    }
    if (peopleRef.current) {
      setPeople(peopleRef.current.value);
    }
    if (emailRef.current) {
      setEmail(emailRef.current.value);
    }
    if (phoneRef.current) {
      setPhone(phoneRef.current.value);
    }
    if (dateRef.current) {
      setDate(dateRef.current.value);
    }
    if (timeRef.current) {
      setTime(timeRef.current.value);
    }
    if (addressRef.current) {
      setAddress(addressRef.current.value);
    }
    if (cityRef.current) {
      setCity(cityRef.current.value);
    }
    if (allergiesRef.current) {
      setAllergies(allergiesRef.current.value);
    }
    if (occasionRef.current) {
      setOccasion(occasionRef.current.value);
    }
    if (chefRef.current) {
      setChef(chefRef.current.value);
    }
    if (refererRef.current) {
      setReferer(refererRef.current.value);
    }
    if (ordersRef.current) {
      setOrders(ordersRef.current.value);
    }
    if (messageRef.current) {
      setMessage(messageRef.current.value);
    }
  }, []);

  const [firstNameError, setFirstNameError] = useState('');

  const verifyFirstName = () => {
    if (!firstNameRef.current?.value.trim()) {
      setFirstNameError('First name is mandatory.');
    } else {
      setFirstNameError('');
      validateForm();
    }
  };

  // const verifyLastName = () => {
  //   if (!lastNameRef.current?.value.trim()) {
  //     setLastNameError('Last name is mandatory.');
  //   } else {
  //     setLastNameError('');
  //     validateForm();
  //   }
  // };

  const emailRef = useRef();
  const [emailError, setEmailError] = useState(''); // 用于存储验证信息的状态

  const verifyEmail = () => {
    const emailValue = emailRef.current?.value;
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
    const phoneValue = phoneRef.current?.value;
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
    const dateValue = dateRef.current?.value;

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
    const timeValue = timeRef.current?.value;

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
    const peopleValue = peopleRef.current?.value;

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
    const addressValue = addressRef.current?.value;

    if (!addressValue.trim()) {
      // 检查地址是否为空或只有空格
      setAddressError('Home address is mandatory.');
    } else {
      setAddressError('');
      validateForm();
    }
  };

  const cityRef = useRef();
  const [cityError, setCityError] = useState('');

  const verifyCity = () => {
    const cityValue = cityRef.current?.value;

    if (!cityValue) {
      // 检查是否已选择时间
      setCityError('Please select a city.');
    } else {
      setCityError('');
      validateForm();
    }
  };

  const allergiesRef = useRef();
  const [allergiesError, setAllergiesError] = useState('');

  const verifyAllergies = () => {
    if (!allergiesRef.current?.value.trim()) {
      setAllergiesError(
        `This field is mandatory. Please indicate 'NA' if you have no food allergies.`
      );
    } else {
      setAllergiesError('');
      validateSecondForm();
    }
  };

  const ordersRef = useRef();
  const [ordersError, setOrdersError] = useState('');

  const verifyOrders = () => {
    if (!ordersRef.current?.value.trim()) {
      setOrdersError(
        `This field is mandatory. Please indicate 'TBD' if you want to add the food orders later.`
      );
    } else {
      setOrdersError('');
      validateSecondForm();
    }
  };

  const occasionRef = useRef();
  const [occasionError, setOccasionError] = useState('');

  const verifyOccasion = () => {
    if (!occasionRef.current?.value.trim()) {
      setOccasionError(`This field is mandatory.`);
    } else {
      setOccasionError('');
      validateSecondForm();
    }
  };

  const chefRef = useRef();
  const refererRef = useRef();
  const [refererError, setRefererError] = useState('');

  const verifyReferer = () => {
    const refererValue = refererRef.current?.value;

    if (!refererValue) {
      setRefererError(`This field is mandatory. Please select one option.`);
    } else {
      setRefererError('');
      validateSecondForm();
    }
  };

  const [termsError, setTermsError] = useState('');

  const verifyTerms = () => {
    if (!isAgreed) {
      setTermsError(`You need to agree to submit.`);
    } else {
      setTermsError('');
    }
  };

  const messageRef = useRef();

  const [isValid, setIsValid] = useState(false);
  const [isSecondFormValid, setIsSecondFormValid] = useState(false);

  useEffect(() => {
    validateForm();
    // validateSecondForm();
  }, [
    firstNameError,
    // lastNameError,
    emailError,
    phoneError,
    dateError,
    timeError,
    peopleError,
    addressError,
    cityError,
    // allergiesError,
  ]);

  const validateForm = () => {
    if (
      firstNameRef.current?.value.trim() &&
      // lastNameRef.current?.value.trim() &&
      emailRef.current?.value.trim() &&
      phoneRef.current?.value.trim() &&
      dateRef.current?.value.trim() &&
      timeRef.current?.value &&
      peopleRef.current?.value &&
      addressRef.current?.value.trim() &&
      cityRef.current?.value &&
      !firstNameError &&
      // !lastNameError &&
      !emailError &&
      !phoneError &&
      !dateError &&
      !timeError &&
      !peopleError &&
      !cityError &&
      !addressError
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    validateSecondForm();
  }, [allergiesError, ordersError, occasionError, refererError]);

  const validateSecondForm = () => {
    if (
      allergiesRef.current?.value.trim() &&
      ordersRef.current?.value.trim() &&
      occasionRef.current?.value.trim() &&
      refererRef.current?.value.trim() &&
      !allergiesError &&
      !ordersError &&
      !occasionError &&
      !refererError
    ) {
      setIsSecondFormValid(true);
    } else {
      setIsSecondFormValid(false);
    }
  };

  const [isBookingConfirmPopupOpen, setBookingConfirmPopupOpen] =
    useState(false);
  const [showBookTable, setShowBookTable] = useState(true);

  const onSubmitFirstForm = (e) => {
    e.preventDefault();
    // 检查第一个表单的有效性
    verifyFirstName();
    verifyPeople();
    verifyEmail();
    verifyPhone();
    verifyDate();
    verifyTime();
    verifyAddress();
    verifyCity();

    if (isValid) {
      setShowSecondForm(true); // 显示第二个表单
      setShowBookTable(false); // 隐藏第一个表单
    }
  };

  const backToFirstForm = () => {
    setShowSecondForm(false); // 隐藏第二个表单
    setShowBookTable(true); // 显示第一个表单
  };
  const backToSecondForm = () => {
    setShowThirdForm(false); // 隐藏第二个表单
    setShowSecondForm(true); // 显示第一个表单
  };

  const onSubmitSecondForm = (e) => {
    e.preventDefault();
    // 这里可以加入第二个表单的验证逻辑
    verifyAllergies();
    verifyOrders();
    verifyOccasion();
    verifyReferer();
    if (isSecondFormValid) {
      setShowThirdForm(true); // 显示第三个表单
      setShowSecondForm(false); // 隐藏第二个表单
    }
  };

  // 创建一个状态来追踪复选框是否被选中
  const [isAgreed, setIsAgreed] = useState(false);

  // 处理复选框变化的函数
  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const formatDate = (dateString) => {
    const parts = dateString.split('-'); // 将日期分割为 [yyyy, mm, dd]
    return `${parts[1]}/${parts[2]}/${parts[0]}`; // 重新组合为 mm-dd-yyyy
  };

  // 使用示例
  const formattedDate = formatDate(date); // 假设 date 是 yyyy-mm-dd 格式

  const onSubmitThirdForm = (e) => {
    e.preventDefault();
    // 这里可以加入第三个表单的验证逻辑
    verifyTerms();
    if (isAgreed) {
      // 创建一个新的 FormData 实例来合并数据
      const combinedData = {
        firstName: firstName,
        people: people,
        email: email,
        phone: phone,
        date: formattedDate,
        time: time,
        address: address,
        city: city,
        allergies: allergies,
        occasion: occasion,
        chef: chef,
        referer: referer,
        orders: orders,
        message: message,
      };

      //使用 EmailJS 的 send 方法发送合并的表单数据
      emailjs
        .send(
          `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
          `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
          combinedData,
          `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            console.log(result.text);
            setBookingConfirmPopupOpen(true); // 最终确认弹窗
            setShowThirdForm(false); // 隐藏第三个表单
            // 可以在这里处理提交后的逻辑
          },
          (error) => {
            console.log(error.text);
            // 处理错误情况
          }
        );
    }
  };

  const closeBookingConfirmPopup = useCallback(() => {
    setBookingConfirmPopupOpen(false);
    onClose();
  }, [onClose]);

  return (
    <>
      {showBookTable && (
        <div className={styles.booktable}>
          <h1 className={styles.appointment}>Appointment</h1>
          <h3 className={styles.subtitle}>Contact Info</h3>
          <form className={styles.form} ref={form} onSubmit={onSubmitFirstForm}>
            <div className={styles.firstname}>
              <label className={styles.labelText}>Full name</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/user.svg' />
                <input
                  className={styles.input}
                  type='text'
                  ref={firstNameRef}
                  value={firstName}
                  name='firstName'
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={verifyFirstName} // 验证名字
                />
              </div>
              {firstNameError && (
                <span style={{ color: 'red' }}>({firstNameError})</span>
              )}
            </div>
            {/* <div className={styles.lastname}>
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
            </div> */}
            <div className={styles.people}>
              <label className={styles.labelText}>How many people</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/group.svg' />
                <input
                  className={`${styles.input}`}
                  type='number' // 设置输入类型为数字
                  ref={peopleRef}
                  name='people'
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  onBlur={verifyPeople}
                  min='1' // 设置最小值
                  max='100' // 设置最大值
                />
              </div>
              {peopleError && (
                <span style={{ color: 'red' }}>({peopleError})</span>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
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

            <div className={styles.address}>
              <label className={styles.labelText}>Home Address</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/home.svg' />
                <input
                  className={styles.input}
                  type='text'
                  ref={addressRef}
                  name='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onBlur={verifyAddress} // 当用户离开输入框时验证地址
                />
              </div>
              {addressError && (
                <span style={{ color: 'red' }}>({addressError})</span>
              )}
            </div>
            <div className={styles.city}>
              <label className={styles.labelText}>City</label>
              <div className={styles.inputwrapper}>
                <img className={styles.icon} alt='' src='/city.svg' />
                <select
                  className={styles.input}
                  ref={cityRef}
                  name='city'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onBlur={verifyCity}
                >
                  <option value=''>Select a city</option>
                  <option value='Houston'>Houston</option>
                  <option value='San Antonio'>San Antonio</option>
                  <option value='Dallas' disabled>
                    Dallas (comming soon)
                  </option>
                </select>
              </div>
              {cityError && <span style={{ color: 'red' }}>({cityError})</span>}
            </div>

            {/* <div className={styles.message}>
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
            </div> */}
            <button className={styles.next} type='submit'>
              <h3 className={styles.submit1}>Next</h3>
            </button>
          </form>
        </div>
      )}
      ;
      {showSecondForm && (
        <div className={styles.booktable}>
          <h1 className={styles.appointment}>Appointment</h1>
          <h3 className={styles.subtitle}>Party Requirement</h3>
          <form
            className={styles.form}
            ref={form2}
            onSubmit={onSubmitSecondForm}
          >
            <div className={styles.allergies}>
              <label className={styles.labelText}>
                ANY FOOD ALLERGIES?<span className={styles.required}>*</span>
              </label>
              <div className={styles.inputwrapper}>
                <input
                  className={styles.input}
                  type='text'
                  ref={allergiesRef}
                  name='allergies'
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                  onBlur={verifyAllergies} // 验证名字
                />
              </div>
              {allergiesError && (
                <span style={{ color: 'red' }}>({allergiesError})</span>
              )}
            </div>
            <div className={styles.occasion}>
              <label className={styles.labelText}>
                What is the Occasion?
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputwrapper}>
                <input
                  className={styles.input}
                  type='text'
                  ref={occasionRef}
                  name='occasion'
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  onBlur={verifyOccasion} // 验证名字
                />
              </div>
              {occasionError && (
                <span style={{ color: 'red' }}>({occasionError})</span>
              )}
            </div>
            <div className={styles.chef}>
              <label className={styles.labelText}>
                Do you have a chef preference? (Name?)
              </label>
              <div className={styles.inputwrapper}>
                <input
                  className={styles.input}
                  type='text'
                  ref={chefRef}
                  name='chef'
                  value={chef}
                  onChange={(e) => setChef(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.referer}>
              <label className={styles.labelText}>
                How Did You Hear About Us?
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputwrapper}>
                <select
                  className={styles.input}
                  ref={refererRef}
                  name='referer'
                  value={referer}
                  onChange={(e) => setReferer(e.target.value)}
                  onBlur={verifyReferer}
                >
                  <option value=''>Select an option</option>
                  <option value='Google'>Google</option>
                  <option value='Instagram'>Instagram</option>
                  <option value='Yelp'>Yelp</option>
                  <option value='Facebook'>Facebook</option>
                  <option value='Referral'>Referral</option>
                  <option value='Repeat Customer'>Repeat Customer</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
              {refererError && (
                <span style={{ color: 'red' }}>({refererError})</span>
              )}
            </div>
            <div className={styles.orders}>
              <label className={styles.labelText}>
                Orders<span className={styles.required}>*</span>
                List Names & 2 Protein choices (put "TBD" if you want to add the
                food orders later){' '}
                <span className={styles.spangrey}>
                  **EXAMPLE: (Party of 10 adults & 5 kids)- Adults: 10 chicken,5
                  steak,5 shrimp. Kids: 5 chicken 5 steak**
                </span>
              </label>
              <div className={styles.inputwrapper}>
                <input
                  className={styles.input}
                  type='text'
                  ref={ordersRef}
                  name='orders'
                  value={orders}
                  onChange={(e) => setOrders(e.target.value)}
                  onBlur={verifyOrders} // 验证名字
                />
              </div>
              {ordersError && (
                <span style={{ color: 'red' }}>({ordersError})</span>
              )}
            </div>

            <div className={styles.message}>
              <label className={styles.labelText}>Message to chef</label>
              <div className={styles.inputwrapper8}>
                <textarea
                  className={styles.input}
                  ref={messageRef}
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows='3' // 你可以根据需要调整行数
                  cols='50' // 你可以根据需要调整列数
                ></textarea>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                type='button'
                onClick={backToFirstForm}
              >
                <h3 className={styles.submit1}>Back</h3>
              </button>
              <button className={styles.submit} type='submit'>
                <h3 className={styles.submit1}>LooksGood !</h3>
              </button>
            </div>
          </form>
        </div>
      )}
      {showThirdForm && (
        <div className={styles.booktable}>
          <h1 className={styles.appointment}>Appointment</h1>
          <h3 className={styles.subtitle}>Policy & Agreement</h3>
          <form
            className={styles.form3}
            ref={form3}
            onSubmit={onSubmitThirdForm}
          >
            <div className={styles.termsContainer}>
              <h3 className={styles.termsTitle}>Terms & Conditions</h3>
              <p className={styles.termsText}>
                PLEASE TAKE NOTICE: SK Hibachi, Inc., or any agent, employee,
                director, or representative of SK Hibachi, will NOT be liable to
                any Licensee (Host) or Licensee’s guests for property damage
                caused as a result of any party held on the Licensee’s (Hosts)
                premises. For the purpose of this paragraph “property damage” is
                defined as: injury to any real or personal property on the
                premises of where the SK Hibachi event is taking place.
                Furthermore, Licensee (Host), individually and for Licensee’s
                guests, waives any claim against SK Hibachi, Inc. for any loss
                of, or damage or destruction to, property of Licensee (Host) or
                Licensee’s guests, arising from any cause. This waiver is
                intended to be a complete release of any responsibility for
                property loss or damage or destruction to the property sustained
                by the Licensee or Licensee’s guests before, during, or after
                the SK Hibachi Inc. event has taken place.
              </p>
            </div>
            <div className={styles.termsContainer}>
              <h3 className={styles.termsTitle}>
                Cancellation Policy & Weather Policy
              </h3>
              <p className={styles.termsText}>
                At least 48 hours notice required for all cancellations and
                rescheduled parties or guest will be charged a fee of $200.00.
                If it rains, customer is required to provide some type of
                covering for the chef to cook under so they can stay dry. We can
                cook under tents, and patios. Customer is responsible for
                canceling due to inclement weather within 48 hours of your
                party.
              </p>
            </div>
            <div className={styles.checkboxContainer}>
              <input
                type='checkbox'
                id='termsCheckbox'
                checked={isAgreed}
                onChange={handleCheckboxChange}
                onBlur={verifyTerms}
              />
              <label htmlFor='termsCheckbox'>
                I have read and agree to the terms above
              </label>
              {termsError && (
                <span style={{ color: 'red', display: 'inline-block' }}>
                  ({termsError})
                </span>
              )}
            </div>
            <div className={styles.buttonWrapperThird}>
              <button
                className={styles.backButton}
                type='button'
                onClick={backToSecondForm}
              >
                <h3 className={styles.submit1}>Back</h3>
              </button>
              <button className={styles.submit} type='submit'>
                <h3 className={styles.submit1}>Submit</h3>
              </button>
            </div>
          </form>
        </div>
      )}
      {isBookingConfirmPopupOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.9)'
          placement='Centered'
          onOutsideClick={closeBookingConfirmPopup}
          className='popup'
        >
          <BookingConfirm onClose={closeBookingConfirmPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default BookTable;
