import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, StyleSheet } from "react-native";
import { insertNewData } from "../utils/FileUtils.js";
import { FILE_PATH } from "../utils/FileUtils.js";

const FILE_NAME = "../../loginDatabase.txt";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [major, setMajor] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSignup = () => {
    p;
    // Authenticate valid sign-up info
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

    // Concatenate all the Sign-up info to a local Database
    // String variable that contains all the Account info
    // const newUser =  = `${name} ${email} ${password} ${major} ${birthdate}\n`;
    // insertNewData(FILE_PATH, token);

    // Then, navigate back to the Login Screen
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../media/ksea-logo.jpg")}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={[styles.title, { color: "white" }]}>Signup</Text>
      <Text style={[styles.label, { color: "white" }]}>Name (First Last)</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
      />
      <Text style={[styles.label, { color: "white" }]}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={[styles.label, { color: "white" }]}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={[styles.label, { color: "white" }]}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Text style={[styles.label, { color: "white" }]}>Major</Text>
      <TextInput
        style={styles.input}
        placeholder="Major"
        value={major}
        onChangeText={setMajor}
      />
      <Text style={[styles.label, { color: "white" }]}>
        Birthdate (MM/DD/YYYY)
      </Text>
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
