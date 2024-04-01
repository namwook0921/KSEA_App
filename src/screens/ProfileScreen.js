import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const ProfileScreen = ({navigation}) => {
    const goHome = () => {
        navigation.navigate("Home")
    }

  return (
    <View style={styles.profileContainer}>
      <Image 
        source = {require('../media/ksea-logo.jpg')}
        style = {styles.KSEAlogo}
        resizeMode = "contain"
      />
      <Image 
        source = {require('../media/namwook.jpg')}
        style = {styles.profileImage}
        resizeMode = "contain"
      />
      <Text style = {styles.name}>Andrew Namwook Lee</Text>
      <Text style = {styles.email}>sexypepe@berkeley.edu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  KSEAlogo: {
    width: 100,
    height: 100,
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000',
  },
  profileImage: {
    width: 200,
    height: 200, 
  },
  name: {
    fontSize: 20,
    marginTop: 15, 
    marginBottom: 10, 
    color: 'white',
  },
  email: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
  }
})

export default ProfileScreen;