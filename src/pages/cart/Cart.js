import React, { Fragment } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { manageCartActions } from "../../store";
import homeImg from "../../assets/images.jfif";
const Cart = () => {
  const CartProducts = useSelector((state) => {
    return state.manageCart.items;
  });
  const login = useSelector((state) => {
    return state.auth.isloggedIn;
  });
  const EmptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  ///////////////
  const dispatch = useDispatch();
  const addProductHandler = (item) => {
    dispatch(manageCartActions.addProduct({ val: item }));
  };
  const removeProductHandler = (item) => {
    dispatch(manageCartActions.removeProduct({ val: item }));
  };

  ///////////////

  const CartItems = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-1">
          <div className="container py-3 text-center">
            {CartProducts.map((product) => {
              return (
                <div
                  className="row justify-content-center cart-item py-3"
                  key={product.id}
                >
                  <div className="col-md-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      height="200px"
                      width="180px"
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{product.title}</h3>
                    <p className="lead fw-bold">
                      {product.quantity} X ${product.price} = $
                      {(product.quantity * product.price).toFixed(2)}
                    </p>
                    <button
                      className="btn btn-outline-dark me-3"
                      id={product.id}
                      onClick={() => removeProductHandler(product)}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button
                      className="btn btn-outline-dark"
                      id={product.id}
                      onClick={() => addProductHandler(product)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  const Buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row ">
            <NavLink
              to={login ? "/checkout" : "/notAuth"}
              className="btn btn-outline-dark mb-5 mx-auto checkoutBtn"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="cart">
      <div className="card bg-dark cart-card text-white border-0">
        <img src={homeImg} className="card-img h-100 w-100" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title display-5 fw-bolder mb-0">Your Cart</h5>
          <p className="card-text lead fs-2 text-center">
            Add Products To Your cart
          </p>
        </div>
      </div>
      <div>
        {CartProducts.length === 0 && <EmptyCart />}
        {CartProducts.length > 0 && <CartItems />}
        {CartProducts.length > 0 && <Buttons />}
      </div>
    </div>
  );
};

export default Cart;
