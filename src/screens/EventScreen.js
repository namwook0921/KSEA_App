import React, { useEffect, useState } from "react";
import { useData } from "../DataContext/DataContext";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  /* EVent in Dictionary */
  const { data } = useData();
  const event = data.events[0]; // Assuming you want to display the first event

  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.EntireContainer}>
      <View style={styles.BackContainer}>
        <TouchableOpacity onPress={goHome}>
          <Image
            source={require("../media/icons8-back-100.png")}
            style={styles.BackIcon}
          />
        </TouchableOpacity>
      </View>


      <View style={styles.MainContainer}>
        <View style={styles.KSEAContainer}>
            <Image
              source={require("../media/ksea-logo.jpg")}
              style={styles.KSEALogo}
              resizeMode="contain"
            />
        </View>

        <View style={styles.TitleContainer}>
          <Text style={styles.TitleText}>{event.name}</Text>
        </View>

        <View style={styles.InfoContainer}>
          <Text style={styles.InfoText}>
            <Text style = {styles.BoldText}>
              Date: </Text>
            {event.date.toDateString()}
          </Text>
          <Text style={styles.InfoText}>
            <Text style = {styles.BoldText}>Type: </Text>
            {event.type}
          </Text>
          <Text style={styles.InfoText}>
            <Text style = {styles.BoldText}>Location: </Text>
            {event.location}
          </Text>
          <Text style={styles.InfoText}>
            <Text style = {styles.BoldText}>Points: </Text> 
            {event.points}
          </Text>
          <Text style={styles.InfoText}>
            <Text style = {styles.BoldText}>Notes: {'\n'}</Text> 
            {event.note}
          </Text>
          <Text style={styles.InfoText}>{event.register_link}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  EntireContainer: {
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
  KSEAContainer: {
    flex: 0.3,
    marginBottom: 10,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  MainContainer: {
    width: "80%", // 80% of Screen Width
    aspectRatio: 0.55, // Height & Width Ratio
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 10,

    backgroundColor: "#000",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  KSEALogo: {
    width: 75,
    height: 75,
  },
  TitleContainer: {
    flex: 0.2,
  },
  TitleText: {
    fontSize: 25,
    marginTop: 5,
    marginBottom: 5,
    color: "white",
  },
  InfoContainer: {
    width: "100%",
    marginTop: 10,
  },
  InfoText: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
  BoldText: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
