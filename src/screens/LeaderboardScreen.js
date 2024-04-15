import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const EXAMPLESCORE = 15;

const LeaderboardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Leaderboard {EXAMPLESCORE} </Text>
    </View>
  );
};

export default LeaderboardScreen;
