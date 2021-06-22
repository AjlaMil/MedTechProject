import React, { useEffect } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../api/products";
import Product from "./Product";

import colors from "../config/colors";
import { setProducts } from "../store/productsSlice";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      dispatch(setProducts(products));
    };
    fetchData();
  }, []);

  const products = useSelector((state) => state.products.values);

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
          {products.map((x) => {
            return <Product key={x._id} product={x} navigation={navigation} />;
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

export default Home;
