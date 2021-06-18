import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home"
import DetailScreen from "../screens/Details"
import colors from "../config/colors";

const Stack = createStackNavigator();

const ItemScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
    <Stack.Screen name="Detail" options={{headerTintColor: colors.primary, headerTitleStyle: {fontWeight: "bold"}}} component={DetailScreen} />
  </Stack.Navigator>
);

export default ItemScreen;