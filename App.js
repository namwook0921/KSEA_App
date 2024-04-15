import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import LeaderboardScreen from "./src/screens/LeaderboardScreen";
<<<<<<< HEAD
import EventScreen from "./src/screens/EventScreen";
=======
import { DataContext, DataProvider } from "./src/DataContext/DataContext";
>>>>>>> origin/datacontext

const Stack = createStackNavigator();

const App = () => {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="Event" component={EventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
>>>>>>> origin/datacontext
  );
};

export default App;
