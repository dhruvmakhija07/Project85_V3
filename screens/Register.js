import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

const appIcon = require("../assetss/logo.png");

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      confirmpassword: "",
      fontsLoaded: false
    };
  }

  render() {

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <Text style={styles.appTitleText}>Register</Text>
          
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ firstname: text })}
            placeholder={"Enter First Name"}
            placeholderTextColor={"#FFFFFF"}
          />

          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ lastname: text })}
            placeholder={"Enter Last Name"}
            placeholderTextColor={"#FFFFFF"}
          />

          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Enter Email"}
            placeholderTextColor={"#FFFFFF"}

          />
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Enter Password"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />

          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ confirmpassword: text })}
            placeholder={"Confirm Password"}
            placeholderTextColor={"#FFFFFF"}
          />

          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => this.registerUser(email, password, confirmPassword,first_name,last_name)}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
    alignItems: "center",
    justifyContent: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appIcon: {
    width: RFValue(200),
    height: RFValue(200),
    resizeMode: "contain",
    marginBottom: RFValue(20)
  },
  appTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(40),
    marginBottom: RFValue(20)
  },
  textinput: {
    width: RFValue(250),
    height: RFValue(40),
    padding: RFValue(10),
    marginTop: RFValue(10),
    borderColor: "#FFFFFF",
    borderWidth: RFValue(4),
    borderRadius: RFValue(10),
    fontSize: RFValue(15),
    color: "#FFFFFF",
    backgroundColor: "#15193c",
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    marginBottom: RFValue(20)
  },
  buttonText: {
    fontSize: RFValue(24),
    color: "#15193c",
  },
  buttonTextNewUser: {
    fontSize: RFValue(12),
    color: "#FFFFFF",
    textDecorationLine: 'underline'
  }
});
