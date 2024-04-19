import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from "react-native";
import { useData } from "../DataContext/DataContext";

// Example values
const EXAMPLEUPCOMINGEVENTS =
  "Upcoming Events: GM 3 (3/22), Big Social (4/6), FOG Meeting (4/8)";
const EXAMPLEPOINTS = 67;

const HomeScreen = ({ navigation }) => {
  const { data, setCurrentIndex } = useData();

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

  const renderCalendar = () => {
    return (
      <View style={styles.calendarContainer}>
        {/* Calendar dates go here */}
      </View>
    );
  };

  return (
    <View style={styles.homeContainer}>
      {/* Top Bar Here */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={goProfile}>
          <Image
            source={require("../media/profile.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        <Image source={require("../media/ksea-logo.jpg")} style={styles.logo} />
        <View style={styles.dateTextContainter}>
          <Text style={styles.dateText}>{new Date().toLocaleDateString()}</Text>
          {/* <Text style={styles.dateText}>{new Date().}</Text> */}
        </View>
      </View>

      {/* Second Bar Here */}
      <View style={styles.secondBar}>
        <Text style={styles.upcomingEventsText}>EVENTS</Text>

        <Text style={styles.upcomingEventsText}>Upcoming Events: </Text>
        {data.events.map((event, index) => (
          <TouchableOpacity
            onPress={() => {
              setCurrentIndex(index);
              goEvent();
            }}
          >
            <Text key={index} style={styles.upcomingEventsText}>
              {event.name} (
              {event.date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "numeric",
                day: "numeric",
              })}
              ){index < data.events.length - 1 ? ", " : ""}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calendar Here */}
      {/* {renderCalendar()} */}

      <Button title="Add Event" onPress={goAddEvent}></Button>

      {/* Bottom Bar Here */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={goLeaderboard}>
          <Image
            source={require("../media/trophy.png")}
            style={styles.leaderboardIcon}
          />
        </TouchableOpacity>
        <Text style={styles.pointsText}>My KSEA Points: {EXAMPLEPOINTS}</Text>
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
    padding: 10,
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  dateText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
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
    fontSize: 22,
    fontWeight: "bold",
  },
  // calendarContainer: {
  // },
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
  leaderboardIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    paddingVertical: 40,
  },
  pointsText: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
