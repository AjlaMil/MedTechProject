import React from "react"
import {
    StyleSheet
  } from "react-native";
import colors from "../config/colors";

const MyProducts = () => {

    return (
      <div>
          <h2>My Products</h2>
          <h4>
           My products page will be implemented in the future. This page is supposed to have the option to add a new product, delete product and view products for sale.
          </h4>
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