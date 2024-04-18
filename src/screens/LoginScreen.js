// LoginScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

// Import readFile from FileUtils.js
import { readAndParseTextFromFile } from "../utils/FileUtils.js";

import { FILE_PATH } from '../utils/FileUtils.js';

const FILE_NAME = "../../loginDatabase.txt";
const ID_ARRAY = [];
const PW_ARRAY = [];

// const id = "kseaatcal@gmail.com";
// const pw = "HelloWorld!"

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountDatabase, setAccountDatabase] = useState([]);

  // Fetch all the ID and PW from loginDatabase.txt
  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedText = await readAndParseTextFromFile(FILE_PATH);
        setAccountDatabase(parsedText);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);
  
  if (accountDatabase != null && accountDatabase.length > 0){
    for (let i = 0; i < accountDatabase.length; i++) {
      ID_ARRAY.push(accountDatabase[i][1]);    // A Tuple of data consists of
      PW_ARRAY.push(accountDatabase[i][2]);    // 0th: Name, 1st: Email, 2nd: Password, ...
    }
  }

  const handleLogin = () => {
    if (ID_ARRAY.includes(email) && PW_ARRAY.includes(password) 
        && ID_ARRAY.indexOf(email) == PW_ARRAY.indexOf(password)) {
      navigation.navigate("Home");
    } else if (email == "" || password == "") {
      alert("Invalid email or password. Please try again.")
    } else {
      alert("Incorrect email or password.");
    }
  };

  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../media/ksea-logo.jpg")}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login</Text>
      {/* <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 60 : 0}
      > */}
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#FFFFFF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* </KeyboardAvoidingView> */}
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={navigateToSignup}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center the Image Vertically
    alignItems: "center", // Center the Image Horizontally
    backgroundColor: "#000", // Background: Black
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  TextInput: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    color: "white",
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default LoginScreen;
