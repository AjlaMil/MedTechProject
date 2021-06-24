import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    register: (state, action) => {
      console.log(action.payload) 
      
    },
    logout: (state, action) => {
      console.log("sdad");
      state.user = null;
    },
  },
});

export const { login, logout, register } = userSlice.actions;

export default userSlice.reducer;
