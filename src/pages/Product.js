import React, { Fragment, useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import useHttp from "../hook/use-http";
import { manageCartActions } from "../store";
import Skeleton from "../components/skeleton/Skeleton";

import "./Product.css";
function Product() {
  const params = useParams();
  // /////////////
  const [product, setProduct] = useState({});

  const { isLoading, error, requestFn: getProducts } = useHttp();

  const { productId } = params;
  useEffect(() => {
    const transformProducts = (data) => {
      let loadedProduct = {};

      Object.entries(data).map(([key, value]) => {
        if (key === productId) {
          loadedProduct = {
            id: key,
            title: value.title,
            desc: value.description,
            price: value.price,
            category: value.category,
            image: value.image,
            rating: value.rating,
            quantity: 1,
          };
        }
      });
      setProduct(loadedProduct);
    };

    getProducts(
      {
        url: "https://fakestoreapi.com/products",
      },
      transformProducts
    );
  }, [getProducts, productId]);
  ///////////

  ///////////
  // const Loading = () => {
  //   return (
  //     <Fragment>
  //       <div className="container my-5 py-5 text-center">
  //         <div className="row d-flex justify-content-center">
  //           <div className="col-lg-6 mb-sm-5">
  //             <Skeleton height={400} />
  //           </div>
  //           <div className="col-md-6" style={{ lineHeight: 2 }}>
  //             <Skeleton height={50} width={300} />
  //             <Skeleton height={75} />
  //             <Skeleton height={25} width={150} />
  //             <Skeleton height={50} />
  //             <Skeleton height={150} />
  //             <Skeleton height={50} width={100} />
  //             <Skeleton height={50} width={100} />
  //           </div>
  //         </div>
  //       </div>
  //     </Fragment>
  //   );
  // };

  /////////////////////
  const dispatch = useDispatch();
  const addProductHandler = (item) => {
    dispatch(manageCartActions.addProduct({ val: item }));
  };

  /////////////////////

  const ShowProducts = () => {
    return (
      <Fragment>
        <div className="product">
          <div className="container my-5 py-5 text-center">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 mb-sm-5">
                <img
                  src={product.image}
                  className="mw-100"
                  alt={product.title}
                ></img>
              </div>
              <div className="col-lg-6">
                <h4 className="category text-uppercase text-black-50">
                  {product.category}
                </h4>
                <h1 className="title display-5">{product.title}</h1>
                <p className="lead fw-bolder">
                  Rating {product.rating && product.rating.rate}
                  <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4 price">
                  ${product.price}
                </h3>
                <p className="lead">{product.desc}</p>
                <button
                  href="#"
                  className="btn btn-outline-dark me-2 px-4 py-2"
                  id={product.id}
                  onClick={() => addProductHandler(product)}
                >
                  Add To Cart
                </button>
                <NavLink to="/cart" className="btn btn-dark px-3 py-2">
                  Go To Cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <div className="products">
      {isLoading ? <Skeleton type={"product"} count={1} /> : <ShowProducts />}

      {/* <Skeleton type={"product"} count={1} /> */}
    </div>
  );
}

export default Product;
