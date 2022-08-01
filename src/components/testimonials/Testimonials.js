import { Carousel } from "bootstrap";
import React, { Component } from "react";
import "./Testimonials.css";
import girlImg from "../../assets/girl1.jpg";
import boyImg from "../../assets/boy.jpg";
const Testimonials = () => {
  return (
    <div className="testinomials">
      <h2>Testimonials</h2>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={girlImg} alt="First slide" />
            <div className="carousel-caption d-md-block">
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live."
              </p>
              <h3>Simab Dave - Web Designer</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={boyImg} alt="second slide" />
            <div className="carousel-caption  d-md-block">
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live far from the countries Vokalia."
              </p>
              <h3>Johnthan Doe - UX Designer</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={girlImg} alt="First slide" />
            <div className="carousel-caption  d-md-block">
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. "
              </p>
              <h3>Maccy Doe - Front End</h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
