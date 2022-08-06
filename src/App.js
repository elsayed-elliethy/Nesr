import { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./common/navbar/Navbar";
import Home from "./components/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/Product";
import Cart from "./pages/cart/Cart";
import AuthPage from "./pages/AuthPage";
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import Footer from "./common/footer/Footer";
import CheckOut from "./components/CheckOut";
import Auth from "./components/Auth/Auth";
import { authActions } from "./store";
import { useDispatch, useSelector } from "react-redux";
import Setting from "./common/setting/Setting";

const App = () => {
  ////////////
  const login = useSelector((state) => {
    return state.auth.isloggedIn;
  });
  const expirT = useSelector((state) => {
    return state.auth.expirationTime;
  });
  const CartProducts = useSelector((state) => {
    return state.manageCart.items;
  });
  const total = useSelector((state) => {
    return state.manageCart.totalAmount;
  });

  localStorage.setItem("cartItems", JSON.stringify(CartProducts));
  localStorage.setItem("totalAmount", total);

  const dispatch = useDispatch();

  const calculationRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime(); // convert expirationTime from string to date object
    const remainDuration = adjExpirationTime - currentTime;
    return remainDuration;
  };
  const remainingTime = calculationRemainingTime(expirT);
  useEffect(
    () => {
      if (login) {
        const logoutTimer = setTimeout(() => {
          dispatch(authActions.logout());
          localStorage.removeItem("token");
          localStorage.removeItem("expirationTime");
        }, remainingTime);
        return () => clearTimeout(logoutTimer);
      }
    },
    // respond to changes in isLoggedIn
    [dispatch, login, remainingTime]
  );

  //////////////
  return (
    <Fragment>
      <Navbar />
      <Setting />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:productId" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/CheckOut" component={CheckOut} />
        <Route exact path="/notAuth" component={Auth} />
        {!login && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
