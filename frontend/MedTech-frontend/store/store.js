import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productsSlice from "./productsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    products: productsSlice,
  },
});
