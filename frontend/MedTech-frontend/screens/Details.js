import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import colors from "../config/colors";

const Details = ({ route }) => {
  const products = useSelector((state) => state.products.values);
  const item = products.find((p) => p._id === route.params.productId);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.prodName}>{item.name}</Text>
        <Text style={styles.priceTag}>
          Price: <Text style={{ color: colors.primary }}>${item.price}</Text>
        </Text>
      </View>
      <Image style={styles.picture} source={require("../assets/masina.jpg")} />
      <View style={styles.detailContainer}>
        <Text
          style={{
            fontSize: 15,
            color: colors.darkGrey,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {" "}
          Description:{" "}
        </Text>
        <Text style={{ color: colors.darkGrey }}> {item.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{ color: colors.white, fontWeight: "600" }}
            onPress={() => {}}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{ color: colors.white, fontWeight: "600" }}
            onPress={() => {}}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  picture: {
    width: 250,
    height: 350,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 20,
  },
  detailContainer: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: colors.lightGrey,
    padding: 15,
    shadowColor: colors.darkGrey,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    elevation: 1,
  },
  prodName: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: colors.primary,
  },
  priceTag: {
    alignSelf: "flex-end",
    fontWeight: "700",
    right: 50,
    fontSize: 25,
    color: colors.darkGrey,
    marginRight: 15,
  },
  button: {
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.white,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonContainer: {
    flex: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 25,
  },
});

export default Details;
