import React, { Component } from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";

//////////
const inetialToken = localStorage.getItem("token");
const inetialExpirationTime = localStorage.getItem("expirationTime");
const inetialLogin = inetialToken && inetialExpirationTime ? true : false;
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: inetialToken,
    isloggedIn: inetialLogin,
    expirationTime: inetialExpirationTime,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.tok;
      state.expirationTime = action.payload.expir;
      state.isloggedIn = true;
    },
    logout(state, action) {
      state.token = "";
      state.expirationTime = "";
      state.isloggedIn = false;
    },
  },
});

////////

const showCartSlice = createSlice({
  name: "showCart",
  initialState: { show: false },
  reducers: {
    openCart(state, action) {
      state.show = true;
    },
    closeCart(state, action) {
      state.show = false;
    },
  },
});

const inetialItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const inetialTotal = localStorage.getItem("totalAmount")
  ? localStorage.getItem("totalAmount")
  : 0;
const manageCartSlice = createSlice({
  name: "manageCart",
  initialState: {
    items: inetialItems,
    totalPrice: 0,
    totalAmount: inetialTotal,
  },
  reducers: {
    addProduct(state, action) {
      const newItem = action.payload.val;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount = +state.totalAmount + 1;
      let updatedArray;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: +existingItem.quantity + 1,
        };
        state.items[state.items.indexOf(existingItem)] = updatedItem;
        updatedArray = [...state.items];
        state.items = updatedArray;
      } else {
        state.items = [...state.items, newItem];
      }
    },
    removeProduct(state, action) {
      const newItem = action.payload.val;
      state.totalAmount = +state.totalAmount - 1;
      let updatedArray;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      const updatedItem = {
        ...existingItem,
        quantity: +existingItem.quantity - 1,
      };
      state.items[state.items.indexOf(existingItem)] = updatedItem;
      if (updatedItem.quantity === 0) {
        updatedArray = state.items.filter((ele) => {
          return ele.id !== updatedItem.id;
        });
      } else {
        updatedArray = [...state.items];
      }

      state.items = updatedArray;
    },
    clearCartItems(state, action) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

/////////
const inetialShowBullets =
  localStorage.getItem("Show-Bullets") === "yes" ||
  !localStorage.getItem("Show-Bullets")
    ? true
    : false;
const showBulletsSlice = createSlice({
  name: "showBullets",
  initialState: { show: inetialShowBullets },
  reducers: {
    showBullets(state, action) {
      state.show = true;
    },
    hideBullets(state, action) {
      state.show = false;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    showCart: showCartSlice.reducer,
    manageCart: manageCartSlice.reducer,
    showBullets: showBulletsSlice.reducer,
  },
});
export const authActions = authSlice.actions;
export const showCartActions = showCartSlice.actions;
export const manageCartActions = manageCartSlice.actions;
export const showBulletsActions = showBulletsSlice.actions;
export default store;
