import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../config/colors";

const Product = ({ product, navigation }) => {
  console.log(product._id);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", { productId: product._id });
        }}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.prodName} numberOfLines={2} ellipsizeMode="tail">
            {product.name}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{ color: colors.white, fontWeight: "600" }}
              onPress={() => {}}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardBody}>
          <View style={{ padding: 5, alignItems: "flex-start" }}>
            <Text style={styles.priceLable}>${product.price}</Text>
            <Text
              style={styles.descriptionLable}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {product.description}
            </Text>
          </View>
          <Image
            style={styles.picture}
            source={require("../assets/masina.jpg")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    padding: 10,
    width: "90%",
    borderRadius: 5,
    shadowColor: colors.darkGrey,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    elevation: 1,
    marginBottom: 10,
  },
  cardHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.white,
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  prodName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  priceLable: {
    paddingVertical: 20,
    fontWeight: "bold",
    fontSize: 30,
  },
  descriptionLable: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.darkGrey,
    width: 190,
  },
  cardBody: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  picture: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
});

export default Product;
