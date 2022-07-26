import React from "react";
import { NavLink } from "react-router-dom";
// import Card from './UI/Card';
import "./Auth.css";

const Auth = (props) => {
  const loginHandler = () => {};

  return (
    <div className="auth">
      {/* <Card> */}
      <h2>You are not authenticated!</h2>
      <p>Please log in to continue.</p>
      {/* <button onClick={loginHandler}>Log In</button> */}
      <NavLink to="/auth?type=login" className="btn btn-outline-dark me-2">
        Login
      </NavLink>
      {/* </Card> */}
    </div>
  );
};

export default Auth;
