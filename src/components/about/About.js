import React from "react";
import "./About.css";
import iconImg1 from "../../assets/icon-1.svg";
import iconImg2 from "../../assets/icon-2.svg";
import iconImg3 from "../../assets/icon-3.svg";
import iconImg4 from "../../assets/icon-4.svg";
import iconImg5 from "../../assets/icon-5.svg";
import iconImg6 from "../../assets/icon-6.svg";
import teamImg1 from "../../assets/about-6.png";
import teamImg2 from "../../assets/about-8.png";
import homeImg from "../../assets/images.jfif";
const About = () => {
  return (
    <div className="about">
      <div className="card bg-dark about-card text-white border-0">
        <img src={homeImg} className="card-img h-100 w-100" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title display-5 fw-bolder mb-0">About Us</h5>
          <p className="card-text lead fs-2 text-center">Get To Know Us</p>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center mt-5 mb-4">Welcome To Our Store</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate id est laborum.
        </p>
        <p>
          Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et
          Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio
          aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus.
          Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate id est laborum.
        </p>
      </div>
      <div className="container">
        <h2 className="text-center my-4">What We Provide?</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4 text-center my-4 ">
            <div className="box">
              <img src={iconImg1} alt="..."></img>
              <h3>Best Prices & Offers</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center my-4 ">
            <div className="box">
              <img src={iconImg2} alt="..."></img>
              <h3>Wide Assortment</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center my-4 ">
            <div className="box">
              <img src={iconImg3} alt="..."></img>
              <h3>Free Delivery</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center my-4 ">
            <div className="box">
              <img src={iconImg4} alt="..."></img>
              <h3>Easy Returns</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center my-4 ">
            <div className="box">
              <img src={iconImg5} alt="..."></img>
              <h3>100% Satisfaction</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center my-4 ">
            <div className="box">
              <img src={iconImg6} alt="..."></img>
              <h3>Great Daily Deal</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center mt-4 ">Get To Know Us</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4 text-center my-4 ">
            <div className="box1">
              <h3>Who we are</h3>
              <p>
                Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis
                enim ut tellus eros donec ac odio orci ultrices in. ellus eros
                donec ac odio orci ultrices in.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center my-4 ">
            <div className="box1">
              <h3>Our history</h3>
              <p>
                Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis
                enim ut tellus eros donec ac odio orci ultrices in. ellus eros
                donec ac odio orci ultrices in.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 text-center my-4 ">
            <div className="box1">
              <h3>Our mission</h3>
              <p>
                Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis
                enim ut tellus eros donec ac odio orci ultrices in. ellus eros
                donec ac odio orci ultrices in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="static">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="static-box ">
                <span className="number">8+</span>
                <span className="title">Glorious years</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="static-box ">
                <span className="number">12+</span>
                <span className="title">Happy clients</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="static-box ">
                <span className="number">57+</span>
                <span className="title">Projects complete</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="static-box ">
                <span className="number">24+</span>
                <span className="title">Team advisor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container text-center">
          <h2 className="text-center my-5 fw-bold">Our Team</h2>
          <div className="row">
            <div className="col-lg-4 my-4">
              <div className="team-box">
                <h5 className="mb-4">Meet Our Expert Team</h5>
                <p className="my-4">
                  Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
                  massa dolor imperdiet neccon sequata congue idsem. Maecenas
                  malesuada faucibus finibus.
                </p>

                <p>
                  Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
                  massa dolor imperdiet neccon sequata congue idsem. Maecenas
                  malesuada faucibus finibus.
                </p>
                <button className="btn btn-outline-dark my-4">
                  View All Members
                </button>
              </div>
            </div>
            <div className="col-lg-4 my-4">
              <div className="card">
                <img src={teamImg1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">H. Merinda</h5>
                  <p className="card-text">CEO & Co-Founder</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-4">
              <div className="card">
                <img src={teamImg2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Dilan Specter</h5>
                  <p className="card-text">Head Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
