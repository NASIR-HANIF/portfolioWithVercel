import { configureStore } from "@reduxjs/toolkit";
 import { thunk } from "redux-thunk";
import {  loginReducer, updateReducer, userReducer } from "./reducers/user";

const store = configureStore({
  reducer: {
    user: userReducer,
    login : loginReducer,
    update : updateReducer
  },
   middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk),
});

export default store;
