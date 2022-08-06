import React, { Component } from "react";
import "./Header.css";
import headerImg1 from "../../assets/1.png";
import headerImg2 from "../../assets/2.jpg";
import headerImg3 from "../../assets/3.jpg";
import headerImg4 from "../../assets/4.jpg";
import headerImg5 from "../../assets/5.jpg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide parent"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={headerImg1} class="d-block w-100 h-100 mh-100" alt="..." />
          <div class="carousel-caption ">
            <h2>New Season Arrivals</h2>
            <p>Check Out All The Trends.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={headerImg2} class="d-block w-100 h-100 mh-100" alt="..." />
          <div class="carousel-caption ">
            <h2>New Season Arrivals</h2>
            <p>Check Out All The Trends.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={headerImg3} class="d-block w-100 h-100 mh-100" alt="..." />
          <div class="carousel-caption ">
            <h2>New Season Arrivals</h2>
            <p>Check Out All The Trends.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev d-none d-md-block"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next d-none d-md-block"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden ">Next</span>
      </button>
    </div>
  );
};

export default Header;
