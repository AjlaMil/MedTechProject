import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RadioButton } from "react-native-paper";
import { useDispatch } from "react-redux";
import colors from "../config/colors";
import { register } from "../store/userSlice";

export default function RegistrationScreen({ navigation }) {
  const [companyName, setComapnyName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [jib, setJIB] = useState("");
  const [checked,setChecked] = React.useState("first");
  const dispatch = useDispatch();


  const setData = async () => {  
    try {
      const userData = {
        name: companyName,
        address: city,
        email: email,
        vatnum: jib,
        password: password,
        address: city,
        role : checked,
      };
      const response = await fetch(`http://localhost:3000/registerUser`, {
        method: "POST",
        body: JSON.stringify(userData),
      });


      const data = await response.json();
      dispatch(register(data));

      console.log(data);
    } catch (error) {}
  };
  const onFooterLinkPress = () => {
    navigation.navigate("Login");
  };

  const onRegisterPress = () => {
    setData();

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    navigation.navigate("Login")
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Image style={styles.logo} source={require("../assets/Logo.png")} />
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setComapnyName(text)}
          value={companyName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setCity(text)}
          value={city}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="JIB"
          keyboardType='numeric'
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setJIB(text)}
          value={jib}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <RadioButton
            value="clinic"
            placeholder="Klinic"
            status={checked === "clinic" ? "checked" : "unchecked"}
            onPress={() => {setChecked("clinic");}}
          />
          <RadioButton
            value="vendor"
            placeholder="Vendor"
            status={checked === "vendor" ? "checked" : "unchecked"}
            onPress={() => {setChecked("vendor")}}
          />
        </View>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text style={{ left: 4, fontWeight: "bold", color: colors.darkGrey }}>
            Klinic
          </Text>
          <Text style={{ left: 3, fontWeight: "bold", color: colors.darkGrey }}>
            Vendor
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}
        >
          <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Log in
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {},
  logo: {
    flex: 1,
    height: 50,
    width: 50,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: colors.primary,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
