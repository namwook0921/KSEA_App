import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useData } from "../DataContext/DataContext"; // Import useData hook

const LeaderboardScreen = ({ navigation }) => {
  const { data } = useData(); // Use the context to get the data

  // Sort users by points in descending order and include rank
  const sortedUsers = data.members
    .slice() // Create a shallow copy to sort without mutating the original array
    .sort((a, b) => b.points - a.points) // Sort users based on points
    .map((user, index) => ({ ...user, rank: index + 1 })); // Map users to include rank
  
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

        <ScrollView style={styles.scrollView}>
          {sortedUsers.map((user) => (
            <View key={user.email} style={styles.userRow}>
              <Text style={styles.rankText}>{user.rank}</Text>
              <Text style={styles.nameText}>{user.name}</Text>
              <Text style={styles.pointsText}>{user.points} Points</Text>
            </View>
          ))}
        </ScrollView>
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
  scrollView: {
    width: "100%",
  },
  userRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  rankText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  nameText: {
    flex: 1,
    textAlign: "left",
    marginLeft: 20,
    fontSize: 25,
    color: "white",
  },
  pointsText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});

export default LeaderboardScreen;
