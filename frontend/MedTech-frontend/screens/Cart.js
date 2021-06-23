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
import { getProducts } from "../api/products";
import { setProducts } from "../store/productsSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = ({navigation}) => {
const cartIds = useSelector((state) => state.cart.productIds);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const products = await getProducts();
          
    //       dispatch(setProducts(products.filter(product=>cartIds.includes(products["_id"]))));
    //     };
    //     fetchData();
    //   }, []);

      const products = useSelector((state) => state.products.values);
      const cartProducts = products.filter(product=>cartIds.includes(product["_id"]))
      const dispatch = useDispatch();
    return (
        <ScrollView style={styles.container}>
        <View style={styles.topBar}>
          <Image style={styles.tinyLogo} source={require("../assets/Logo.png")} />
          <View style={{ fontWeight: "bold", color: colors.darkGrey }}>
            MedTech
          </View>
        </View>
        <View style={{ alignItems: "center", alignSelf: "stretch" }}>
          <>
            {cartProducts.map((x) => {
              return <Product key={x._id} clickable={false} product={x} navigation={navigation} />;
            })}
          </>
        </View>
    </ScrollView>
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

export default Cart;