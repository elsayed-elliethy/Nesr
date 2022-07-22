import React, { Component } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
      <p>Limited time offer for this month. No credit card required.</p>
      <form>
        <input type="email" placeholder="Email Address Here"></input>
        <button href="#">Subscribe</button>
      </form>
    </div>
  );
};
export default Subscribe;
