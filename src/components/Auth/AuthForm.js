import { Fragment, useEffect, useState } from "react";
import useHttp from "../../hook/use-http";
import useInput from "../../hook/use-input";
import { authActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import classes from "./AuthForm.module.css";
import { useHistory } from "react-router-dom";

const isEmail = (value) => {
  return value.includes("@" && ".com");
};
const isPass = (value) => {
  return value.trim().length === 7;
};

const AuthForm = (props) => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const {
    enteredvalue: enteredEmail,
    inputValid: emailValid,
    inputInvalid: emailInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
    inputClasses: emailCalsses,
  } = useInput(isEmail);

  const {
    enteredvalue: enteredPass,
    inputValid: passValid,
    inputInvalid: passInvalid,
    inputChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPass,
    inputClasses: passCalsses,
  } = useInput(isPass);

  let formValid = false;
  if (emailValid && passValid) {
    formValid = true;
  }

  const dispatch = useDispatch();

  //////

  const { isLoading, error, requestFn: signUp } = useHttp();
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formValid) {
      return;
    }
    console.log(`Email : ${enteredEmail}`);
    console.log(`Password : ${enteredPass}`);
    const mail = enteredEmail;
    const pass = enteredPass;
    resetEmail();
    resetPass();

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxhAYskbgPspYtcJRl0tHBdBfX_M7lugQ";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxhAYskbgPspYtcJRl0tHBdBfX_M7lugQ";
    }

    const transformData = (data) => {
      setIsSubmit(true);
      const expirTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
      dispatch(
        authActions.login({ tok: data.idToken, expir: expirTime.toISOString() })
      );
      localStorage.setItem("token", data.idToken);
      localStorage.setItem("expirationTime", expirTime.toISOString());
      history.replace("/");
    };
    signUp(
      {
        url: url,
        method: "POST",
        body: {
          email: mail,
          password: pass,
          returnSecureToken: true,
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      transformData
    );
  };

  let content = (
    <Fragment>
      {" "}
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailCalsses}`}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            required
          />
          {emailInvalid && (
            <p className={classes["error-text"]}>Type a Valid Email</p>
          )}
        </div>
        <div className={`${classes.control} ${passCalsses}`}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            onChange={passChangeHandler}
            onBlur={passBlurHandler}
            value={enteredPass}
            required
          />
          {passInvalid && (
            <p className={classes["error-text"]}>
              Password Must Be larger Than 7 Numbers
            </p>
          )}
        </div>
        <div className={classes.actions}>
          <button disabled={!formValid}>
            {isLogin ? "Login" : "Create Account"}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </Fragment>
  );
  if (isLoading) {
    content = <p>Sending Request...</p>;
  }
  if (error) {
    content = <p>{error}</p>;
    history.replace("/auth");
  }
  if (!isLoading && !error && isSubmit) {
    content = <p>Congratulations</p>;
  }

  return (
    <div className={classes.authentication}>
      <section className={classes.auth}>{content}</section>;
    </div>
  );
};

export default AuthForm;
