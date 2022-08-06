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
          <div class="carousel-item active testi-item">
            <img src={girlImg} class="d-block" alt="..." />
            <div class="carousel-caption ">
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live."
              </p>
              <h5>Simab Dave - Web Designer</h5>
            </div>
          </div>
          <div class="carousel-item testi-item">
            <img src={boyImg} class="d-block " alt="..." />
            <div class="carousel-caption ">
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live."
              </p>
              <h5>Johnthan Doe - UX Designer</h5>
            </div>
          </div>
          <div class="carousel-item testi-item">
            <img src={girlImg} class="d-block" alt="..." />
            <div class="carousel-caption ">
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live."
              </p>
              <h5>Maccy Doe - Front End</h5>
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
    </div>
  );
};

export default Testimonials;
