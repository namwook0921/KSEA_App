import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const ProfileScreen = ({navigation}) => {
    const goHome = () => {
        navigation.navigate("Home")
    }

  return (
    <View style = {styles.EntireContainer}>
    <View style = {styles.BackContainer}>
      <Button title = "Back" onPress = {goHome} />
    </View>
    <View style = {styles.MainContainer}>
      <View style = {styles.KSEAContainer}>
        <Image
          source = {require('../media/ksea-logo.jpg')}
          style = {styles.KSEALogo}
          resizeMode = "contain"
        />
      </View>
      <Image 
        source = {require('../media/namwook.jpg')}
        style = {styles.ProfilePhoto}
        resizeMode = "contain"
      />
      <Text style = {styles.name}>Andrew Namwook Lee</Text>
      <Text style = {styles.name}>이남욱</Text>
      <Text style = {styles.mail}>sexypepe@berkeley.edu</Text>

    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  EntireContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  BackContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100, 
    height: 100,
    backgroundColor: '#000'
  },
  MainContainer: {
    width: '80%', // 80% of Screen Width
    aspectRatio: 0.5, // Height & Width Ratio
    justifyContent: 'center',
    alignItems: 'center', 

    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: '#FFF'
  },
  KSEAContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  KSEALogo: {
    width: 100,
    height: 100, 
  },
  ProfilePhoto: {
    width: 250,
    height: 250,
    aspectRatio: 1,
  },
  name: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10, 
    color: 'white',
  },
  mail: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 15,
    color: 'white',
  }
})

export default ProfileScreen;