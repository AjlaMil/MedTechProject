import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';

const Profile = () => {
    return (
        <KeyboardAvoidingView style={styles.container} behaviour="padding">
        <View style={styles.headercontainer}>
              <View style={styles.userlogo}>
                  <AntDesign name="user" size={100} color={colors.primary} />
              </View>
              <View style={styles.username}>
                  <Text style={{fontWeight: 'bold', fontSize: 25, color: colors.primary, paddingVertical: 20}}>User Name</Text>
              </View>
              <View style={styles.userinfo}>
                  <Text style={styles.textinfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor vel turpis ut aliquet. Nullam elit elit, imperdiet vitae ultrices sed, porttitor in erat. In porta massa at tempus consectetur. In vehicula, sapien in blandit tincidunt, metus libero fringilla risus, in vehicula leo sem in ex.</Text>
              </View>
        </View>
    </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
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
    textinfo:{
        fontSize: 15,
        paddingHorizontal: 25,
        backgroundColor: "white",
        paddingVertical: 15,
        marginHorizontal: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'silver'
    }
})

export default Profile;