import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from "react-native";
import { useData } from "../DataContext/DataContext";

const HomeScreen = ({ navigation }) => {
  const { data, setCurrentIndex } = useData();
  const profile = data.currentMember;

  const now = new Date();

  const futureEvents = data.events
    .filter((event) => event.date >= now)
    .sort((a, b) => a.date - b.date);

  const goProfile = () => {
    navigation.navigate("Profile");
  };

  const goEvent = () => {
    navigation.navigate("Event");
  };

  const goLeaderboard = () => {
    navigation.navigate("Leaderboard");
  };

  const goAddEvent = () => {
    navigation.navigate("AddEvent");
  };
  return (
    <View style={styles.homeContainer}>
      <View style={styles.topBar}>
        <View style={{ flex: 1 }} />
        <View style={styles.KSEAContainer}>
          <Image source={require("../media/ksea-logo.jpg")} style={styles.logo} />
        </View>
      <TouchableOpacity onPress={goProfile}>
        <Image source={require("../media/profile.png")} style={styles.profileIcon} />
      </TouchableOpacity>
    </View>

    
    <View style={styles.secondBar}>
        <View style={styles.WelcomeContainer}>
          <Text style={styles.WelcomeText}>Welcome, {profile.name}!</Text>
          <Text style={styles.WelcomeText}>Today is {new Date().toLocaleDateString()}.</Text>
        </View>

        <Text style={styles.upcomingEventsText}>Upcoming Events: </Text>
        {data.events.map((event, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setCurrentIndex(index);
              goEvent();
            }}
            style={styles.eventRow} // Use the row style
          >
            <Text style={styles.eventDate}>
              {event.date.toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                weekday: "short",
              })}
            </Text>
            <Text style={styles.eventName}>
              {event.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style = {styles.AddEventContainer}>
      <TouchableOpacity onPress = {goAddEvent}>
          <Text style = {styles.addEvent}>Create Event</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Bar Here */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={goLeaderboard}>
          <Image
            source={require("../media/trophy.png")}
            style={styles.leaderboardIcon}
          />
        </TouchableOpacity>
        <Text style={styles.pointsText}>My KSEA Points: {profile.points}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  topBar: {
    position: "relative",
    paddingTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
  },
  profileIcon: {
    width: 60,
    height: 60,
  },
  KSEAContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  WelcomeText: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },
  WelcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // Adjust this value to control space below the date text container
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secondBar: {
    padding: 16,
  },
  upcomingEventsText: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },
  eventRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1, // Add border to each row
    borderBottomColor: '#FFFFFF', // Set the color of the border
  },
  eventDate: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10, // Optional: add margin if needed
    textAlign: 'left',
    borderRightWidth: 1, // Right border to separate columns
    borderRightColor: '#FFFFFF', // Color of the right borde
  },
  eventName: {
    color: '#ffffff',
    fontSize: 25,
    flex: 1,
    textAlign: 'left',
    flexShrink: 1, // Allows text to shrink and wrap if needed
  },
  addEvent: {
    color: "#007AFF",
    fontSize: 30,
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  AddEventContainer: {
    justifyContent: 'center',  // Center children vertically in the container
    alignItems: 'center' 
  },
  leaderboardIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    paddingVertical: 40,
  },
  pointsText: {
    color: "#FFD700",
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default HomeScreen;
