import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    user: userReducer,
    products: productsSlice
  },
});
