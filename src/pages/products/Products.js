import React, { Fragment, useEffect, useReducer, useState } from "react";
import "./Products.css";
import useHttp from "../../hook/use-http";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import homeImg from "../../assets/images.jfif";
import ErrorModal from "../../components/error/ErrorModal";
function Products() {
  // /////////////

  const [avilableProducts, setAvilableProducts] = useState([]);
  const [filter, setFilter] = useState([]);

  const { isLoading, error, requestFn: getProducts, closeError } = useHttp();

  useEffect(() => {
    const transformProducts = (data) => {
      const loadedProducts = [];

      Object.entries(data).map(([key, value]) => {
        loadedProducts.push({
          id: key,
          title: value.title,
          desc: value.description,
          price: value.price,
          category: value.category,
          image: value.image,
          rating: value.rating,
          quantity: 1,
        });
      });
      setAvilableProducts(loadedProducts);
      setFilter(loadedProducts);
    };

    getProducts(
      {
        url: "https://fakestoreapi.com/products",
      },
      transformProducts
    );
  }, [getProducts]);
  ///////////
  const Loading = () => {
    return (
      <Fragment>
        <div className="container my-5 py-5 text-center">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3 mb-3 px-2">
              <Skeleton height={350} />
            </div>
            <div className="col-md-3 mb-3 px-2">
              <Skeleton height={350} />
            </div>
            <div className="col-md-3 mb-3 px-2">
              <Skeleton height={350} />
            </div>
            <div className="col-md-3 mb-3 px-2">
              <Skeleton height={350} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  ////

  const filterHandler = (event) => {
    let updatedList = [];
    if (event.target.id === "all") {
      updatedList = avilableProducts;
    } else {
      updatedList = avilableProducts.filter((ele) => {
        return ele.category === event.target.id;
      });
    }
    setFilter(updatedList);
  };

  ///
  const ShowProducts = () => {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="buttons d-flex justify-content-center mw-100">
                <button
                  className="btn btn-outline-dark me-2"
                  id="all"
                  onClick={filterHandler}
                >
                  All
                </button>
                <button
                  className="btn btn-outline-dark me-2"
                  id="men's clothing"
                  onClick={filterHandler}
                >
                  Men's Clothing
                </button>
                <button
                  className="btn btn-outline-dark me-2"
                  id="women's clothing"
                  onClick={filterHandler}
                >
                  Woman's Clothing
                </button>
                <button
                  className="btn btn-outline-dark me-2"
                  id="jewelery"
                  onClick={filterHandler}
                >
                  Jewelery
                </button>
                <button
                  className="btn btn-outline-dark me-2"
                  id="electronics"
                  onClick={filterHandler}
                >
                  Electronic
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5 py-5 text-center">
          <div className="row d-flex justify-content-center">
            {filter.map((product) => {
              return (
                <div className="col-md-3 mb-3 px-2" key={product.id}>
                  <div className="card h-100 text-center py-4 px-1 product-card">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 12)}...
                      </h5>

                      <p className="card-text lead fw-bold">${product.price}</p>

                      <NavLink
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <div className="products">
      <h2 className="text-center my-5 fw-bold">Latest Products</h2>
      {error && (
        <ErrorModal onClose={closeError}>Failed To Fetch Products.</ErrorModal>
      )}
      {isLoading ? <Loading /> : <ShowProducts />}
    </div>
  );
}

export default Products;
