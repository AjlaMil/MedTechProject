import React, { useEffect } from "react"
import {
    Button,
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
  } from "react-native";
import colors from "../config/colors";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";

const MyProducts = () => {

    return (
      <div>
          <h2>My Products</h2>
          <Button>
              TEST
          </Button>
      </div>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      //alignItems: "center"
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    topBar: {
      alignSelf: "stretch",
      backgroundColor: colors.white,
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      padding: 10,
    },
  });

export default MyProducts;