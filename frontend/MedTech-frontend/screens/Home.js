import { createStackNavigator } from "@react-navigation/stack"
import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../api/products";
import Product from "./Product";
import { setProducts } from "../store/productsSlice"

const Stack = createStackNavigator()

const Home = () => {

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
        <>
        
        {
        products.map((x) => (
            <Product key={x.id} product={x} />
        
        ))}
    </>
    )

    
};

export default Home;