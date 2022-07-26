import { Fragment } from "react";
import useHttp from "../../hook/use-http";
import useInput from "../../hook/use-input";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";
import classes from "./AuthForm.module.css";
import { useHistory, useLocation } from "react-router-dom";
import ErrorModal from "../error/ErrorModal";
import LoadingIndicator from "../loading/LoadingIndicator";

const isEmail = (value) => {
  return value.includes("@" && ".com");
};
const isPass = (value) => {
  return value.trim().length === 7;
};

const AuthForm = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeLogin = queryParams.get("type") === "login";
  const switchAuthModeHandler = () => {
    history.push("/auth?type=" + (typeLogin ? "signup" : "login"));
  };

  const {
    enteredvalue: enteredEmail,
    inputValid: emailValid,
    inputInvalid: emailInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
    inputClasses: emailClasses,
  } = useInput(isEmail);

  const {
    enteredvalue: enteredPass,
    inputValid: passValid,
    inputInvalid: passInvalid,
    inputChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPass,
    inputClasses: passClasses,
  } = useInput(isPass);

  let formValid = false;
  if (emailValid && passValid) {
    formValid = true;
  }

  const dispatch = useDispatch();

  //////

  const { isLoading, error, requestFn: login, closeError } = useHttp();
  const {
    isLoading: load,
    error: err,
    requestFn: signUp,
    closeError: closeErr,
  } = useHttp();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formValid) {
      return;
    }
    const mail = enteredEmail;
    const pass = enteredPass;
    resetEmail();
    resetPass();

    if (typeLogin) {
      const transformData = (data) => {
        const expirTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        dispatch(
          authActions.login({
            tok: data.idToken,
            expir: expirTime.toISOString(),
          })
        );
        localStorage.setItem("token", data.idToken);
        localStorage.setItem("expirationTime", expirTime.toISOString());
        history.replace("/");
      };
      login(
        {
          url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxhAYskbgPspYtcJRl0tHBdBfX_M7lugQ",
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
    } else {
      const transformData = (data) => {
        history.push("/auth?type=login");
      };
      signUp(
        {
          url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxhAYskbgPspYtcJRl0tHBdBfX_M7lugQ",
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
    }
  };

  let content = (
    <Fragment>
      {" "}
      <h1>{typeLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailClasses}`}>
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
        <div className={`${classes.control} ${passClasses}`}>
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
            {typeLogin ? "Login" : "Create Account"}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {typeLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </Fragment>
  );
  if (isLoading || load) {
    content = <LoadingIndicator />;
  }

  return (
    <div className={classes.authentication}>
      {error && (
        <ErrorModal onClose={closeError}>
          Email Or Password Is Wrong.
        </ErrorModal>
      )}
      {err && (
        <ErrorModal onClose={closeErr}>
          Email Is Already Exist Type A Different One.
        </ErrorModal>
      )}
      <section className={classes.auth}>{content}</section>;
    </div>
  );
};

export default AuthForm;
