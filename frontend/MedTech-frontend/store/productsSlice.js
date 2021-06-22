import { createSlice } from "@reduxjs/toolkit";

console.log("product slice");
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    values: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
