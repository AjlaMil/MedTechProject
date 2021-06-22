import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = "xdd";
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
