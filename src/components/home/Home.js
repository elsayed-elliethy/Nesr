import React from "react";
import "./Home.css";
import phonesImg from "../../assets/phones.jpg";
import homeImg from "../../assets/images.jfif";
import homeImg2 from "../../assets/modal-background.svg";
import Products from "../../pages/products/Products";
import Testimonials from "../testimonials/Testimonials";
import Subscribe from "../subscribe/Subscribe";
function Home() {
  return (
    <div className="home">
      <div className="card home-card bg-dark text-white border-0">
        <img src={homeImg2} className="card-img h-100 w-100" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title display-5 fw-bolder mb-0">
            New Season Arrivals
          </h5>
          <p className="card-text lead fs-2 text-center">
            Check Out All The Trends
          </p>
        </div>
      </div>
      <Products />
      <Testimonials />
      <Subscribe />
    </div>
  );
}

export default Home;
