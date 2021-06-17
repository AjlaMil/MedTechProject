import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';

const Profile = () => {
    return (
        <KeyboardAvoidingView style={styles.container} behaviour="padding">
        <View style={styles.topBar}>
            <Image 
                style={styles.tinyLogo}
                source={require('../assets/Logo.png')}
            />
            <View style={{fontWeight: "bold" , color: colors.darkGrey}}>
                MedTech
            </View>
        </View>
        <View style={styles.headercontainer}>
              <View style={styles.userlogo}>
                  <AntDesign name="user" size={100} color={colors.primary} />
              </View>
              <View style={styles.username}>
                  <Text style={{fontWeight: 'bold', fontSize: 25, color: colors.primary, paddingVertical: 20}}>Comapany Name</Text>
              </View>
              <View style={styles.userinfo}>
                  <Text style={styles.textinfo}>Company City: <Text style={{color: colors.primary}}> Sarajevo </Text></Text>
                  <Text style={styles.textinfo}>E-Mail: <Text style={{color:colors.primary}}>mimo.medica@mimo.ba</Text></Text>
                  
              </View>
        </View>
    </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.white
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: colors.black,
        alignSelf:"center",
        marginBottom: 10
    },
    headercontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    userlogo:{
        borderColor: colors.black,
        borderWidth: 2,
        borderRadius: 150,
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'silver'

    },
    userinfo:{
        width: "100%",
        fontSize: 15,
        paddingHorizontal: 25,
        backgroundColor: "white",
        paddingVertical: 15,
        marginHorizontal: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'silver',
    },
    textinfo: {
        fontSize: 15,
        fontWeight: "600",
        color: colors.darkGrey,
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

export default Profile;