import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useData } from "../DataContext/DataContext";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [major, setMajor] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [grade, setGrade] = useState("");
  const { data, addUser } = useData();

  const handleSignup = async () => {
    // Authenticate valid sign-up info
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      major.trim() === "" ||
      birthdate.trim() === "" ||
      grade.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = data.members;

    if (users.some((user) => user.email === email)) {
      alert("This email is already in use.");
      return;
    }

    addUser(name, email, password, major, birthdate, grade);

    alert("User registered successfully!");

    navigation.navigate("Login");
  };
  const goLogIn = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <View style={styles.BackContainer}>
          <TouchableOpacity onPress={goLogIn}>
            <Image
              source={require("../media/icons8-back-100.png")}
              style={styles.BackIcon}
            />
          </TouchableOpacity>
        </View>
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
      <Text style={[styles.label, { color: "white" }]}>Grade</Text>
      <TextInput
        style={styles.input}
        placeholder="Grade"
        value={grade}
        onChangeText={setGrade}
      />
      <Button title="Signup" onPress={handleSignup} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  BackContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    backgroundColor: "#000",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
  },
  BackIcon: {
    width: 30,
    height: 30,
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
