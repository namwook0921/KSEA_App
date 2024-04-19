import React, { useEffect, useState } from "react";
import { useData } from "../DataContext/DataContext";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  /* Profile in Dictionary */
  const { data } = useData();
  const profile = data.currentMember;

  const goHome = () => {
    navigation.navigate("Home");
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

        <View style={styles.ProfileContainer}>
          <Image
            source={require("../media/profile-jaewon.jpeg")}
            style={styles.ProfilePhoto}
            resizeMode="contain"
          />
        </View>

        <View style={styles.NameContainer}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.mail}>{profile.email}</Text>
        </View>

        <View style={styles.InfoContainer}>
          <Text style={styles.major}>
            <Text style={styles.BoldText}>Major: </Text>
            {profile.major}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.BoldText}>Grade: </Text>
            {profile.grade}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.BoldText}>Focus Group: </Text>
            {profile.fog}
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
  KSEAContainer: {
    flex: 0.5,
    marginBottom: 40,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  KSEALogo: {
    width: 90,
    height: 90,
  },
  ProfileContainer: {
    flex: 3,
  },
  ProfilePhoto: {
    width: "90%",
    height: "90%",
    aspectRatio: 1,
  },
  NameContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  name: {
    fontSize: 35,
    marginTop: 5,
    marginBottom: 5,
    color: "white",
  },
  mail: {
    fontSize: 25,
    marginTop: 5,
    marginBottom: 15,
    color: "white",
  },
  InfoContainer: {
    flex: 1,
  },
  major: {
    fontSize: 25,
    color: "white",
  },
  info: {
    fontSize: 25,
    color: "white",
  },
  BoldText: {
    fontWeight: "bold",
  },
});

export default ProfileScreen;
