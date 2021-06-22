import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

import ItemScreen from "../screens/Item";

import WelcomeScreen from "../screens/WelcomeScreen";
import RegistrationScreen from "../screens/Registration";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import LoginScreen from "../screens/Login";
import CartScreen from "../screens/Cart";
import { useSelector } from "react-redux";
const MainStack = () => {
  const Bottom = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator();

  const user = useSelector((state) => {
    return state.user;
  });
  return (
    <NavigationContainer>
      {user ? (
        <Bottom.Navigator
          initialRouteName="Item"
          activeColor="#02c7d1"
          barStyle={{ backgroundColor: colors.white }}
        >
          <Bottom.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Bottom.Screen
            name="Item"
            component={ItemScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Bottom.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarLabel: "Cart",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              ),
            }}
          />
        </Bottom.Navigator>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="Getting Started"
              options={{ headerShown: false }}
              component={WelcomeScreen}
            />
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={LoginScreen}
            />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});