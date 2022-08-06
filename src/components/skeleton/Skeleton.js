import React, { Fragment, useState } from "react";
import "./Skeleton.css";
const Skeleton = (props) => {
  const type = props.type;
  const count = props.count;
  const ProductsSkeleton = () => {
    return (
      <div className="col-md-3 mb-3 px-2">
        <div className="card h-100 py-4 px-1 product-card-sk">
          <div className="card-img-top-sk"></div>
          <div className="card-body mx-auto">
            <div className="card-title-sk mb-0 "></div>
            <div className="card-text-sk"></div>
            <div className="btn-sk"></div>
          </div>
        </div>
      </div>
    );
  };
  const ProductSkeleton = () => {
    return (
      <Fragment>
        <div className="col-lg-6 mb-sm-5 img-container">
          <div className="mw-100 product-img-sk"></div>
        </div>
        <div className="col-lg-6 text-container">
          <div className="category-sk"></div>
          <div className="title-sk"></div>
          <div className="rate-sk"></div>
          <div className="my-4 price-sk"></div>
          <div className="disc-sk"></div>
          <div className="btn-add-sk me-2 px-4 py-2"></div>
          <div className="btn-go-sk px-3 py-2"></div>
        </div>
      </Fragment>
    );
  };

  let countArray = [];
  for (let i = 0; i < count; i++) {
    countArray.push(i);
  }
  console.log(countArray);

  let content;
  if (type === "products") {
    content = (
      <div className="container">
        <div className="container my-5 py-5 text-center">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {countArray.map((ele) => {
            // return Array(count).fill(<ProductsSkeleton key={ele} />);
            return <ProductsSkeleton key={ele} />;
          })}
        </div>
      </div>
    );
  }
  if (type === "product") {
    content = (
      <div className="container my-5 py-5 text-center">
        <div className="row d-flex justify-content-center">
          {countArray.map((ele) => {
            return <ProductSkeleton key={ele} />;
          })}
        </div>
      </div>
    );
  }
  return content;
};

export default Skeleton;
