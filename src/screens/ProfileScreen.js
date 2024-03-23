import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ProfileScreen = ({navigation}) => {
    const goHome = () => {
        navigation.navigate("Home")
    }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Andrew</Text>
      <Button title = "Home" onPress={goHome} />
    </View>
  );
};

export default ProfileScreen;
