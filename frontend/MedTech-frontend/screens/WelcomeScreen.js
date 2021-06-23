import colorSupport from 'color-support';
import { color } from 'jimp';
import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

import colors from '../config/colors.js'

export default function WelcomeScreen({navigation}) {

  const onContinuePress = () => {
    navigation.navigate('Login')
}

    return (
        <View style={styles.container}>
      <View style={styles.container2}>
          <View style={{borderWidth: 5, borderColor: "#02c7d1", borderRadius: 100, width: 300, height: 300, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.logo} source={require('../assets/Logo.png')} />
          </View>
        
        <Text style={styles.logotext}> MedTech </Text>
      </View>
      <View style={styles.container3}>
          <View style={{marginLeft: 35, }}>
            <Text style={styles.title}>Welcome to MedTech!</Text>
            <Text style={styles.info}>Everything that one clinic needs.</Text>
          </View>
        
        <TouchableOpacity 
          style={styles.button_design}  
          onPress= {onContinuePress} ><Text style={styles.button_text}>Continue {'>>>'}</Text></TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      container2:{
        height: "60%",
        alignItems: 'center',
        justifyContent: 'center',
      },
    container3:{
        height: "40%",
        backgroundColor: colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'space-between',
        
      },
      logotext:{
        fontSize: 40,
        fontWeight: 'bold',
        paddingVertical: 15,
        color: colors.primary,
        marginTop: 10,
        fontStyle: 'italic'

      },
      button_design:{
        height: 30,
        padding: 20,
        borderColor: colors.white,
        backgroundColor: colors.primary,
        width: '50%',
        alignSelf: 'flex-end',
        bottom: 80,
        marginRight: 20
      },
      logo: {
        width: 200,
        height: 200, 
      },
      title:{
        fontSize: 24,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 80,
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        left: 40
      },
      info:{
        fontSize: 15,
        color: colors.white,
        textAlign: 'center',
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        left: 40
       
      },
      button_text:{
        textAlign: 'center',
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold'
      }
      
})
