import React from "react";
import { NavLink } from "react-router-dom";
import "./Auth.css";

const Auth = (props) => {
  return (
    <div className="auth">
      <h2>You are not authenticated!</h2>
      <p>Please log in to continue.</p>
      <NavLink to="/auth?type=login" className="btn btn-outline-dark me-2">
        Login
      </NavLink>
    </div>
  );
};

export default Auth;
