import React, { Component, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useHttp from "../hook/use-http";
import useInput from "../hook/use-input";
import { manageCartActions } from "../store";
import styles from "./CheckOut.module.css";
const notEmpty = (value) => {
  return value.trim() !== "";
};
const isCode = (value) => {
  return value.trim().length === 5;
};
const CheckOut = (props) => {
  const dispatch = useDispatch();
  const [submitForm, setSubmitForm] = useState(false);
  const history = useHistory();
  const CartProducts = useSelector((state) => {
    return state.manageCart.items;
  });
  const {
    enteredvalue: enteredYourName,
    inputValid: yourNameValid,
    inputInvalid: yourNameInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetYourName,
    inputClasses: yourNameCalsses,
  } = useInput(notEmpty);
  const {
    enteredvalue: enteredStreet,
    inputValid: streetValid,
    inputInvalid: streetInvalid,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
    inputClasses: streetCalsses,
  } = useInput(notEmpty);
  const {
    enteredvalue: enteredCode,
    inputValid: codeValid,
    inputInvalid: codeInvalid,
    inputChangeHandler: codeChangeHandler,
    inputBlurHandler: codeBlurHandler,
    reset: resetCode,
    inputClasses: codeCalsses,
  } = useInput(isCode);
  const {
    enteredvalue: enteredCity,
    inputValid: cityValid,
    inputInvalid: cityInvalid,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
    inputClasses: cityCalsses,
  } = useInput(notEmpty);

  let formValid = false;
  if (yourNameValid && streetValid && codeValid && cityValid) {
    formValid = true;
  }

  const closeHandler = () => {
    history.push("/cart");
  };
  const { isLoading, error, requestFn: checkout } = useHttp();
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    const userData = {
      userName: enteredYourName,
      street: enteredStreet,
      code: enteredCode,
      city: enteredCity,
    };

    const transformData = () => {
      setSubmitForm(true);
      dispatch(manageCartActions.clearCartItems());
    };
    checkout(
      {
        url: "https://food-e7d7c-default-rtdb.firebaseio.com/data/orders.json",
        method: "POST",
        body: { user: userData, orderedItems: CartProducts },
        headers: {
          "Content-Type": "application/json",
        },
      },
      transformData
    );

    resetYourName();
    resetStreet();
    resetCode();
    resetCity();
  };

  let content = (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.control}>
        <div className={yourNameCalsses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredYourName}
          />
          {yourNameInvalid && (
            <p className={styles["error-text"]}>Type a Valid Name</p>
          )}
        </div>
        <div className={streetCalsses}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
            value={enteredStreet}
          />
          {streetInvalid && (
            <p className={styles["error-text"]}>Type a Valid Street</p>
          )}
        </div>

        <div className={codeCalsses}>
          <label htmlFor="code">Postal Code</label>
          <input
            type="text"
            id="code"
            onChange={codeChangeHandler}
            onBlur={codeBlurHandler}
            value={enteredCode}
          />
          {codeInvalid && (
            <p className={styles["error-text"]}>Type a Valid Code</p>
          )}
        </div>
        <div className={cityCalsses}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            value={enteredCity}
          />
          {cityInvalid && (
            <p className={styles["error-text"]}>Type a Valid City</p>
          )}
        </div>
        <div className={styles.actions}>
          <button type="button" onClick={closeHandler}>
            Cancel
          </button>
          <button disabled={!formValid} className={styles.submit}>
            Confirm
          </button>
        </div>
      </div>
    </form>
  );

  if (error) {
    content = (
      <Fragment>
        <p>{error}</p>
        <div className={styles.actions}>
          <button className={styles.order} onClick={closeHandler}>
            Close
          </button>
        </div>
      </Fragment>
    );
  }
  if (isLoading) {
    content = <p>loading...</p>;
  }
  if (submitForm && !error && !isLoading) {
    content = (
      <Fragment>
        <p className={styles.success}>Your Order Has Been Sent</p>
        <div className={styles.actions}>
          <button className={styles.order} onClick={closeHandler}>
            Close
          </button>
        </div>
      </Fragment>
    );
  }

  return <div className={styles.checkout}>{content}</div>;
};

export default CheckOut;
