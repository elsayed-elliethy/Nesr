import React, { Fragment, useEffect, useReducer, useState } from "react";
import "./Products.css";
import useHttp from "../../hook/use-http";
// import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import homeImg from "../../assets/images.jfif";
import ErrorModal from "../../components/error/ErrorModal";
import Skeleton from "../../components/skeleton/Skeleton";
import Categories from "../../components/category/Categories";
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
              {/* <Skeleton height={350} /> */}
            </div>
            <div className="col-md-3 mb-3 px-2">
              {/* <Skeleton height={350} /> */}
            </div>
            <div className="col-md-3 mb-3 px-2">
              {/* <Skeleton height={350} /> */}
            </div>
            <div className="col-md-3 mb-3 px-2">
              {/* <Skeleton height={350} /> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  ////

  const [isActive, setIsActive] = useState("all");
  const filterHandler = (catId) => {
    let updatedList = [];
    if (catId === "all") {
      updatedList = avilableProducts;
    } else {
      updatedList = avilableProducts.filter((ele) => {
        return ele.category === catId;
      });
    }
    setFilter(updatedList);
    setIsActive(catId);
  };

  ///
  const ShowProducts = () => {
    return (
      <Fragment>
        {/* <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="buttons d-flex justify-content-center mw-100">
                <button
                  className={
                    isActive === "all"
                      ? "btn btn-outline-dark active me-2"
                      : "btn btn-outline-dark me-2"
                  }
                  id="all"
                  onClick={(e) => filterHandler(e.target.id)}
                >
                  All
                </button>
                <button
                  className={
                    isActive === "men's clothing"
                      ? "btn btn-outline-dark active me-2"
                      : "btn btn-outline-dark me-2"
                  }
                  id="men's clothing"
                  onClick={(e) => filterHandler(e.target.id)}
                >
                  Men's Clothing
                </button>
                <button
                  className={
                    isActive === "women's clothing"
                      ? "btn btn-outline-dark active me-2"
                      : "btn btn-outline-dark me-2"
                  }
                  id="women's clothing"
                  onClick={(e) => filterHandler(e.target.id)}
                >
                  Woman's Clothing
                </button>
                <button
                  className={
                    isActive === "jewelery"
                      ? "btn btn-outline-dark active me-2"
                      : "btn btn-outline-dark me-2"
                  }
                  id="jewelery"
                  onClick={(e) => filterHandler(e.target.id)}
                >
                  Jewelery
                </button>
                <button
                  className={
                    isActive === "electronics"
                      ? "btn btn-outline-dark active me-2"
                      : "btn btn-outline-dark me-2"
                  }
                  id="electronics"
                  onClick={(e) => filterHandler(e.target.id)}
                >
                  Electronic
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container cats-row">
          <div className="row mx-auto ">
            {/* <div className="col-md-0 col-lg-0 cats-col text-center">
              <button
                className={
                  isActive === "all"
                    ? "btn btn-outline-dark active w-25"
                    : "btn btn-outline-dark  "
                }
                id="all"
                onClick={(e) => filterHandler(e.target.id)}
              >
                All
              </button>
            </div> */}
            <div className="col-md-6 col-lg-3 cats-col">
              <button
                className={
                  isActive === "men's clothing"
                    ? "btn btn-outline-dark active w-100"
                    : "btn btn-outline-dark w-100"
                }
                id="men's clothing"
                onClick={(e) => filterHandler(e.target.id)}
              >
                Men's Clothing
              </button>
            </div>
            <div className="col-md-6 col-lg-3 cats-col">
              <button
                className={
                  isActive === "women's clothing"
                    ? "btn btn-outline-dark active w-100"
                    : "btn btn-outline-dark w-100"
                }
                id="women's clothing"
                onClick={(e) => filterHandler(e.target.id)}
              >
                Woman's Clothing
              </button>
            </div>
            <div className="col-md-6 col-lg-3 cats-col">
              <button
                className={
                  isActive === "jewelery"
                    ? "btn btn-outline-dark active w-100"
                    : "btn btn-outline-dark w-100"
                }
                id="jewelery"
                onClick={(e) => filterHandler(e.target.id)}
              >
                Jewelery
              </button>
            </div>
            <div className="col-md-6 col-lg-3 cats-col">
              <button
                className={
                  isActive === "electronics"
                    ? "btn btn-outline-dark active w-100"
                    : "btn btn-outline-dark w-100"
                }
                id="electronics"
                onClick={(e) => filterHandler(e.target.id)}
              >
                Electronic
              </button>
            </div>
          </div>
        </div>

        <div className="container my-5 py-5 text-center">
          <div className="row d-flex justify-content-center">
            {filter.map((product) => {
              return (
                <div className="col-md-6 col-lg-3 mb-3 px-2" key={product.id}>
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
      <div className="card bg-dark products-card text-white border-0">
        <img src={homeImg} className="card-img h-100 w-100" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title display-5 fw-bolder mb-0">Products</h5>
          <p className="card-text lead fs-2 text-center">
            Browse Our Latest Products
          </p>
        </div>
      </div>
      <h2 className="text-center my-5 fw-bold">Latest Products</h2>
      {error && (
        <ErrorModal onClose={closeError}>Failed To Fetch Products.</ErrorModal>
      )}
      {isLoading ? <Skeleton type="products" count={8} /> : <ShowProducts />}
      {/* <Skeleton type="products" count={8} /> */}
    </div>
  );
}

export default Products;
