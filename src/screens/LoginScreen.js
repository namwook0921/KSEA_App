// LoginScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
// const id = "kseaatcal@gmail.com";
// const pw = "HelloWorld!"
import { useData } from "../DataContext/DataContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, setCurrentMember } = useData();

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter both email and password.");
      return;
    }

    const user = data.members.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );
    if (user) {
      setCurrentMember(user);
      navigation.navigate("Home"); // Assuming 'Home' is a valid route
    } else {
      alert("Incorrect email or password.");
    }
  };

  const goSignUp = () => {
    navigation.navigate("Signup");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS == "ios" ? 60 : 0}
    >
      <Image
        source={require("../media/ksea-logo.jpg")}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login</Text>
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
      <Button title="Sign Up" onPress={goSignUp}></Button>
    </KeyboardAvoidingView>
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
