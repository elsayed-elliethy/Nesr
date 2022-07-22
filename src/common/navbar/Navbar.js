import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store";
import logo from "../../assets/logo.jpg";
function Navbar() {
  ////////////////

  const login = useSelector((state) => {
    return state.auth.isloggedIn;
  });
  const token = useSelector((state) => {
    return state.auth.token;
  });
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
  };

  ///////////////
  const totalAmount = useSelector((state) => {
    return state.manageCart.totalAmount;
  });
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            <img src={logo} alt="..." className="mw-100" />
            Nesr
          </NavLink>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/products"} className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {!login && (
                <NavLink to="/auth" className="btn btn-outline-dark me-2">
                  <i className="fa fa-sign-in me-1"></i>
                  Login
                </NavLink>
              )}
              {login && (
                <button
                  onClick={logoutHandler}
                  className="btn btn-outline-dark me-2"
                >
                  <i className="fa fa-sign-out me-1"></i>
                  Logout
                </button>
              )}

              <NavLink to="/cart" className="btn btn-outline-dark">
                <i className="fa fa-shopping-cart me-1"></i>
                Cart ({totalAmount})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
