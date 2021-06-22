import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { Provider, useSelector } from "react-redux";

import MainStack from "./router/MainStack";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}
