import React, { useEffect } from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../api/products";
import Product from "./Product";
import { setProducts } from "../store/productsSlice"

import colors from "../config/colors"



const Home = ({ navigation }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async() => {
            const products = await getProducts();
            console.log("prrrrrrrrrrrrr")
            console.log(products)
            dispatch(setProducts(products))
        }
        fetchData();
    }, [])

    const products = useSelector((state) => state.products.values)


    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Image 
                    style={styles.tinyLogo}
                    source={require('../assets/Logo.png')}
                />
                <View style={{fontWeight: "bold" , color: colors.darkGrey}}>
                    MedTech
                </View>
            </View>
            <>
                {
                products.map((x) => (
                    <Product key={x.id} product={x} navigation={navigation}/>
                ))}
            </>
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center"
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    topBar:{
        alignSelf: 'stretch',
        backgroundColor: colors.white,
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        padding: 10
        
    },
})

export default Home;