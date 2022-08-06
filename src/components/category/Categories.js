import React from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";
const Categories = () => {
  return (
    <div className="container mb-5 cats-row">
      <div className="row mx-auto ">
        <div className="col-md-6 col-lg-3 cats-col">
          <NavLink to={"/category/Italian"}>
            <button className="btn w-100" id="Italian">
              Italian
            </button>
          </NavLink>
        </div>
        <div className="col-md-6 col-lg-3 cats-col">
          <NavLink to={"/category/Chinese"}>
            <button className="btn w-100" id="Chinese">
              Chinese
            </button>
          </NavLink>
        </div>
        <div className="col-md-6 col-lg-3 cats-col">
          <NavLink to={"/category/American"}>
            <button className="btn w-100" id="American">
              American
            </button>
          </NavLink>
        </div>
        <div className="col-md-6 col-lg-3 cats-col">
          <NavLink to={"/category/African"}>
            <button className="btn w-100" id="African">
              African
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Categories;
