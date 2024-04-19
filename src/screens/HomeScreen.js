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
        <View style={styles.dateTextContainter}>
          <Text style={styles.dateText}>Welcome, Today is {new Date().toLocaleDateString()}</Text>
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
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  dateText: {
    color: "#ffffff",
    fontSize: 25,
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
  eventRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  eventDate: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 10, // Optional: add margin if needed
  },
  eventName: {
    color: '#ffffff',
    fontSize: 25,
    flexShrink: 1, // Allows text to shrink and wrap if needed
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
