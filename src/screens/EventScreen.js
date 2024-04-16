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
          <Text style={styles.InfoText}>{event.date.toDateString()}</Text>
          <Text style={styles.InfoText}>{event.type}</Text>
          <Text style={styles.InfoText}>{event.location}</Text>
          <Text style={styles.InfoText}>{event.points}</Text>
          <Text style={styles.InfoText}>{event.note}</Text>
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
    flex: 0.5,
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  MainContainer: {
    width: "80%", // 80% of Screen Width
    aspectRatio: 0.55, // Height & Width Ratio
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    backgroundColor: "#000",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  KSEALogo: {
    width: 75,
    height: 75,
  },
  TitleContainer: {
    flex: 1,
  },
  TitleText: {
    fontSize: 25,
    marginTop: 5,
    marginBottom: 5,
    color: "white",
  },
  InfoContainer: {
    flex: 1,
  },
  InfoText: {
    fontSize: 20,
    color: "white",
  }
});

export default ProfileScreen;
