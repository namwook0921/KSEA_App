import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, StyleSheet } from "react-native";

const AddEventScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [points, setPoints] = useState("");
  const [note, setNote] = useState("");

  const handleAddEvent = () => {
    if (
      name.trim() === "" ||
      type.trim() === "" ||
      date.trim() === "" ||
      location.trim() === "" ||
      points.trim() === "" ||
      note.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image 
        source = {require('../media/ksea-logo.jpg')}
        style = {styles.imageStyle}
        resizeMode = "contain"
      />
      <Text style={styles.title}>Add Event</Text>
      <Text style={[styles.label, { color: "white" }]}>Event Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
      />
      <Text style={[styles.label, { color: "white" }]}>Event Type</Text>
      <TextInput
        style={styles.input}
        placeholder="Event Type"
        value={type}
        onChangeText={setType}
      />
      <Text style={[styles.label, { color: "white" }]}>Date (MM/DD)</Text>
      <TextInput
        style={styles.input}
        placeholder="Date (MM/DD)"
        value={date}
        onChangeText={setDate}
      />
      <Text style={[styles.label, { color: "white" }]}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <Text style={[styles.label, { color: "white" }]}>KSEA Points</Text>
      <TextInput
        style={styles.input}
        placeholder="KSEA Points"
        value={points}
        onChangeText={setPoints}
        keyboardType="numeric" // Adjust the keyboard type as needed
      />
      <Text style={[styles.label, { color: "white" }]}>Note</Text>
      <TextInput
        style={styles.input}
        placeholder="Note"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Add Event" onPress={handleAddEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000',
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
    color: 'white',
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default AddEventScreen;