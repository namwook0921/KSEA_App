import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
  const goProfile = () => {
    navigation.navigate("Profile");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title= "Profile" onPress={goProfile} />
    </View>
  );
};

export default HomeScreen;
