import { createSlice } from "@reduxjs/toolkit";

console.log("cart slice");
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productIds: [],
  },
  reducers: {
    setcart: (state, action) => {
      state.productIds = [...state.productIds,action.payload]
    },
  },
});

export const { setcart } = cartSlice.actions;

export default cartSlice.reducer;
