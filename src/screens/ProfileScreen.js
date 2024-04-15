import React, { useEffect, useState } from "react";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  /* Profile in Dictionary */
  const [profile, setProfile] = useState({
    engName: "",
    krName: "",
    mail: "",
    major: "",
    note: "",
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

        <View style={styles.ProfileContainer}>
          <Image
            source={require("../media/namwook.jpg")}
            style={styles.ProfilePhoto}
            resizeMode="contain"
          />
        </View>

        <View style={styles.NameContainer}>
          <Text style={styles.name}>{profile.engName}</Text>
          <Text style={styles.name}>{profile.krName}</Text>
          <Text style={styles.mail}>{profile.mail}</Text>
        </View>

        <View style={styles.InfoContainer}>
          <Text style={styles.major}>{profile.major}</Text>
          <Text style={styles.info}>{profile.note}</Text>
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
    aspectRatio: 0.55, // Height & Width Ratio
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    backgroundColor: "#000",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  KSEAContainer: {
    flex: 0.5,
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  KSEALogo: {
    width: 75,
    height: 75,
  },
  ProfileContainer: {
    flex: 2,
  },
  ProfilePhoto: {
    width: "90%",
    height: "90%",
    aspectRatio: 1,
  },
  NameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 25,
    marginTop: 5,
    marginBottom: 5,
    color: "white",
  },
  mail: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 15,
    color: "white",
  },
  InfoContainer: {
    flex: 1,
  },
  major: {
    fontSize: 20,
    color: "white",
  },
  info: {
    fontSize: 20,
    color: "white",
  },
});

export default ProfileScreen;
