// LoginScreen.js
import React, { useState } from "react";
import { View, Text, Image, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      navigation.navigate("Home");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../media/ksea-logo.jpg')}
        style = {styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
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
    backgroundColor: '#000', // Background: Black
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
    color: 'white',
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default LoginScreen;
