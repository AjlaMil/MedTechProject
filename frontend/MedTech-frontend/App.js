import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./screens/Home"
import ProfileScreen from "./screens/Profile"
import LoginScreen from "./screens/Login"
import CartScreen from "./screens/Cart"
import { Provider } from 'react-redux';
import { store } from './store/productsSlice'

const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Bottom.Navigator>
          <Bottom.Screen name="Profile" component={ProfileScreen} />
          <Bottom.Screen name="Home" component={HomeScreen} />
          <Bottom.Screen name="Cart" component={CartScreen} />
      </Bottom.Navigator> 
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
