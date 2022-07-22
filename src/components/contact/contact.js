import React from "react";
import "./contact.css";
import contactImg from "../../assets/contact-2.png";
import homeImg from "../../assets/images.jfif";
const Contact = () => {
  return (
    <div className="contact">
      <div className="card bg-dark contact-card text-white border-0">
        <img src={homeImg} className="card-img h-100 w-100" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title display-5 fw-bolder mb-0">Contact Us</h5>
          <p className="card-text lead fs-2 text-center">Drop Us a Line</p>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center mt-5 mb-4">
          Let us know how we can help you
        </h2>
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
        <div className="row">
          <div className="col-md-6 col-lg-3 text-center my-4 ">
            <div className="box3">
              <h3>01. Visit Feedback</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center my-4 ">
            <div className="box3">
              <h3>02. Employer Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center my-4 ">
            <div className="box3">
              <h3>03. Billing Inquiries</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center my-4 ">
            <div className="box3">
              <h3>04.General Inquiries</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21817567.718251098!2d39.87894209497682!3d48.12417531530424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2z2KPZiNix2YjYqNin!5e0!3m2!1sar!2seg!4v1648146186993!5m2!1sar!2seg"
          width="100%"
          height="400"
          title="map"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div class="srv-box">
              <h3>Office</h3>
              <span>205 North Michigan Avenue, Suite 810</span>
              <span>Chicago, 60601, USA</span>
              <span>Phone: (123) 456-7890</span>
              <span>Email: contact@Evara.com</span>
              <a href="#">
                <i class="fa fa-map-marker"></i>View Map
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div class="srv-box">
              <h3>Shop</h3>
              <span>205 North Michigan Avenue, Suite 810</span>
              <span>Chicago, 60601, USA</span>
              <span>Phone: (123) 456-7890</span>
              <span>Email: contact@Evara.com</span>
              <a href="#">
                <i class="fa fa-map-marker"></i>View Map
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div class="srv-box">
              <h3>Studio</h3>
              <span>205 North Michigan Avenue, Suite 810</span>
              <span>Chicago, 60601, USA</span>
              <span>Phone: (123) 456-7890</span>
              <span>Email: contact@Evara.com</span>
              <a href="#">
                <i class="fa fa-map-marker"></i>View Map
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h3>Contact form</h3>
            <h1>Drop Us a Line</h1>
            <p>Your email address will not be published.</p>
            <form>
              <input
                class="main-input one"
                type="text"
                placeholder="First Name"
              />
              <input
                class="main-input one"
                type="email"
                placeholder="Your Email"
              />
              <input
                class="main-input two"
                type="text"
                placeholder="Your Phone"
              />
              <input class="main-input two" type="text" placeholder="Subject" />
              <textarea
                class="main-input"
                name="Message"
                placeholder="Message"
              ></textarea>
              <input type="submit" value="Send Message" />
            </form>
          </div>
          <div className="col-md-4">
            <img src={contactImg} className="mw-100 contact-img" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
