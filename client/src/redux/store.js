import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./cartRedux";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
