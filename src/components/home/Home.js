import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Home.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import Testimonials from "../testimonials/Testimonials";
import Subscribe from "../subscribe/Subscribe";
import useHttp from "../../hook/use-http";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Header from "../header/Header";
const Home = () => {
  /////change background
  let backgroundImgs = [img1, img2, img3, img4, img5];
  const [index, setIndex] = useState(0);

  const changeBackground = useCallback(() => {
    let randomNumber = Math.floor(Math.random() * backgroundImgs.length);
    setIndex(randomNumber);
  }, [backgroundImgs.length]);
  useEffect(() => {
    let counter = setInterval(changeBackground, 10000000000);
    return () => clearInterval(counter);
  }, [changeBackground]);
  //////
  // /////////////

  const [avilableProducts, setAvilableProducts] = useState([]);

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
    };

    getProducts(
      {
        url: "https://fakestoreapi.com/products",
      },
      transformProducts
    );
  }, [getProducts]);
  ///////////

  const men = avilableProducts.filter((ele) => {
    return ele.category === "men's clothing";
  });
  const woman = avilableProducts.filter((ele) => {
    return ele.category === "women's clothing";
  });
  const jewelery = avilableProducts.filter((ele) => {
    return ele.category === "jewelery";
  });
  const electronics = avilableProducts.filter((ele) => {
    return ele.category === "electronics";
  });

  const menRef = useRef(null);
  const womanRef = useRef(null);
  const jewlleryRef = useRef(null);
  const electronicsRef = useRef(null);

  const [activeId, setActiveId] = useState();

  const productsArray = [
    { id: 1, name: "men's clothing", relativeProducts: men, ref: menRef },
    { id: 2, name: "women's clothing", relativeProducts: woman, ref: womanRef },
    { id: 3, name: "jewelery", relativeProducts: jewelery, ref: jewlleryRef },
    {
      id: 4,
      name: "electronics",
      relativeProducts: electronics,
      ref: electronicsRef,
    },
  ];

  const location = useLocation();

  window.onscroll = function () {
    if (location.pathname === "/") {
      return productsArray.map((sec) => {
        if (window.scrollY >= sec.ref.current?.offsetTop - 100) {
          setActiveId(sec.id);
        }
      });
    } else {
      return;
    }
  };

  const FilteredProducts = () => {
    return (
      <div className="container my-5 py-5 text-center home-products">
        {productsArray.map((ele) => {
          return (
            <div key={ele.id} className={ele.name} ref={ele.ref}>
              <h2 className="py-5">{ele.name}</h2>
              <div className="row d-flex justify-content-center">
                {ele.relativeProducts.map((product) => {
                  return (
                    <div
                      className="col-md-6 col-lg-3 mb-3 px-2"
                      key={product.id}
                    >
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

                          <p className="card-text lead fw-bold">
                            ${product.price}
                          </p>

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
          );
        })}
      </div>
    );
  };
  ///
  /////////bullets//////
  const showBullets = useSelector((state) => {
    return state.showBullets.show;
  });
  const bullets = [
    { id: 1, name: "Men's Clothing", ref: menRef },
    { id: 2, name: "Women's Clothing", ref: womanRef },
    { id: 3, name: "Jewelery", ref: jewlleryRef },
    { id: 4, name: "Electronics", ref: electronicsRef },
  ];
  const BulletsSection = () => {
    const scrollToSection = (elementRef, id) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
      setActiveId(id);
    };
    return (
      <div className="bullets d-none d-md-block">
        {bullets.map((bullet) => {
          return (
            <div
              key={bullet.id}
              className={activeId === bullet.id ? "bullet active" : "bullet"}
              onClick={() => scrollToSection(bullet.ref, bullet.id)}
            >
              <div className="bullet-tooltip">{bullet.name}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="home">
      <Header />
      <FilteredProducts />
      {showBullets && <BulletsSection />}
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Home;
