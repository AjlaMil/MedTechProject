import * as React from "react"
import { Button, View, Text } from "react-native"

const Product = ({ product }) => { 
    

    return(
        <View>
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
            <Text>{product.description}</Text>
            <br></br>
            <Button title="Details" />
            <br></br>
            <Button title="Add To Cart" />
        </View>
    )
};

export default Product;