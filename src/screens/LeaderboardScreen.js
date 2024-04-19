import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useData } from "../DataContext/DataContext"; // Import useData hook

const LeaderboardScreen = ({ navigation }) => {
  const { data } = useData(); // Use the context to get the data

  // Sort users by points in descending order and include rank
  const sortedUsers = data.members
    .slice() // Create a shallow copy to sort without mutating the original array
    .sort((a, b) => b.points - a.points) // Sort users based on points
    .map((user, index) => ({ ...user, rank: index + 1 })); // Map users to include rank

  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
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
    fontSize: 16,
    color: "#000",
  },
  nameText: {
    flex: 1,
    textAlign: "left",
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  pointsText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
});

export default LeaderboardScreen;
