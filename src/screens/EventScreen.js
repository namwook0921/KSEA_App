import React, { useEffect, useState } from "react";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  /* EVent in Dictionary */
  const [event, setEvent] = useState({
    title: "PEPE Mingles",
    date: "04/14/2024",
    type: "Mingles",
    attendance: true,
    points: 0,
    note: "",
    register_link: "https://example.com/register",
});

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
          <Text style={styles.TitleText}>{event.title}</Text>
        </View>

        <View style={styles.InfoContainer}>
          <Text style={styles.InfoText}>{event.date}</Text>
          <Text style={styles.InfoText}>{event.type}</Text>
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
