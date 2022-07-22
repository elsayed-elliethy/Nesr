import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row first-footer">
          <div className="col-md-3">
            <img src={logo} alt="logo" className="mw-100" />
            <p>
              <span className="fw-bold">Address:</span> 5171 W Campbell Ave
              undefined Kent, Utah 53127 United State
            </p>
            <p>
              <span className="fw-bold">Call Us:</span>(+91) - 540-025-124553
            </p>
            <p>
              <span className="fw-bold">Email:</span>sale@Nest.com
            </p>
            <p>
              <span className="fw-bold">Hours:</span>10:00 - 18:00, Mon - Sat
            </p>
          </div>
          <div className="col-md-3">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="#">Delivery Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2>Account</h2>
            <ul>
              <li>
                <a href="#">Compare products</a>
              </li>
              <li>
                <a href="#">Shipping Details</a>
              </li>
              <li>
                <a href="#">Track My Order</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
              <li>
                <a href="#">View Cart</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2>Corporate</h2>
            <ul>
              <li>
                <a href="#">Become a Vendor</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Farm Business</a>
              </li>
              <li>
                <a href="#">Our Supplierss</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-md-12 mt-4 text-center second-footer">
          <h5>Follow Us</h5>
          <ul>
            <li>
              <a>
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa fa-whatsapp"></i>
              </a>
            </li>
          </ul>
          <p>Up to 15% discount on your first subscribe</p>
          <p className="copyright fw-bold">
            &copy; 2022,Nesr All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
