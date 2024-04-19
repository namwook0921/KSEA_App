import React, { useEffect, useState } from "react";
import { useData } from "../DataContext/DataContext";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

const EventScreen = ({ navigation }) => {
  /* Event in Dictionary */
  const { data } = useData();
  const event = data.events[data.currentIndex];

  const goHome = () => {
    navigation.navigate("Home");
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.EntireContainer}>
      <View style={styles.MainContainer}>
        <View style={styles.BackContainer}>
          <TouchableOpacity onPress={goHome}>
            <Image
              source={require("../media/icons8-back-100.png")}
              style={styles.BackIcon}
            />
          </TouchableOpacity>
        </View>
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
            <Text style={styles.BoldText}>Date: </Text>
            {event.date.toDateString()}
          </Text>
          <Text style={styles.InfoText}>
            <Text style={styles.BoldText}>Type: </Text>
            {event.type}
          </Text>
          <Text style={styles.InfoText}>
            <Text style={styles.BoldText}>Location: </Text>
            {event.location}
          </Text>
          <Text style={styles.InfoText}>
            <Text style={styles.BoldText}>Points: </Text>
            {event.points}
          </Text>
          <Text style={styles.InfoText}>
            <Text style={styles.BoldText}>Notes: {"\n"}</Text>
            {event.note}
          </Text>
          <Text style={styles.InfoText}>
            <Text style={styles.BoldText}>Registration: {"\n"}</Text>
            <Text
              style={styles.LinkText}
              onPress={() => handleLinkPress(event.register_link)}
            >
              {event.register_link}
            </Text>
          </Text>
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
    flex: 0.9, 
    aspectRatio: 0.5, // Height & Width Ratio
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 10,

    backgroundColor: "#000",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  KSEALogo: {
    width: 90,
    height: 90,
  },
  TitleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  TitleText: {
    fontSize: 35,
    color: "white",
    flexShrink: 1,
  },
  InfoContainer: {
    width: "100%",
    marginTop: 30,
  },
  InfoText: {
    fontSize: 25,
    color: "white",
    marginBottom: 10,
    marginLeft: 10,
  },
  BoldText: {
    fontWeight: "bold",
  },
  LinkText: {
    color: "#87CEFA",
    textDecorationLine: "underline",
  },
});

export default EventScreen;
