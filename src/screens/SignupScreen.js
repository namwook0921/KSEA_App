import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [major, setMajor] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSignup = () => {
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      major.trim() === "" ||
      birthdate.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Success", "Account created successfully.");
        navigation.navigate("Login");
      })
      .catch((error) => {
        Alert.alert("Signup failed", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../media/ksea-logo.jpg")}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Major"
        value={major}
        onChangeText={setMajor}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthdate"
        value={birthdate}
        onChangeText={setBirthdate}
        keyboardType="numeric" // Adjust the keyboard type as needed
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    color: "white",
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default SignupScreen;
