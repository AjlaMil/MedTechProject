import * as React from "react"
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView } from "react-native"
import colors from "../config/colors";

const Cart = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{alignSelf: "stretch"}}>
            <View style={styles.topBar}>
            <Image 
                style={styles.tinyLogo}
                source={require('../assets/Logo.png')}
            />
            <View style={{fontWeight: "bold", color: colors.darkGrey}}>
                MedTech
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.primary
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

export default Cart;