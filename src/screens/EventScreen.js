import React, { useEffect, useState } from "react";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Event = ( {navigation}) => {
    /* Event Dictionary */
    const [event, setEvent] = useState({
        title: "",
        date: new Date(),
        type: "",
        attendance: true,
        points: 0,
        note: "",
        register_link: "https://example.com/register",
    });

    const goHome = () => {
        navigation.navigate("Home");
    };

    return (
        <View style = {StyleSheet.EntireContainer}>
            <View style={styles.BackContainer}>
                <TouchableOpacity onPress={goHome}>
                <Image
                    source={require("../media/icons8-back-100.png")}
                    style={styles.BackIcon}
                />
                </TouchableOpacity>
            </View>

            <View style={styles.KSEAContainer}>
                <Image
                    source={require("../media/ksea-logo.jpg")}
                    style={styles.KSEALogo}
                    resizeMode="contain"
                />
            </View>

            <View styles = {styles.MainContainer}>
                <View styles = {styles.TitleContainer}>
                    <Text style = {styles.TitleText}>{event.title}</Text>
                </View>
                <View styles = {styles.DateContainer}>
                    <Text style = {styles.InfoText}>{event.date}</Text>
                </View>
                <View styles = {styles.TypeContainer}>
                    <Text style = {styles.InfoText}>{event.type}</Text>
                </View>
                <View styles = {styles.AttendanceContainer}>
                    <Text style = {styles.InfoText}>{event.type}</Text>
                </View>
                <View styles = {styles.PointContainer}>
                    <Text style = {styles.InfoText}>{event.type}</Text>
                </View>
                <View styles = {styles.NoteContainer}>
                    <Text style = {styles.InfoText}>{event.type}</Text>
                </View>
                <View styles = {styles.RegisterContainer}>
                    <Text style = {styles.InfoText}>{event.type}</Text>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    EntireContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: "#000",
    },
    BackContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        backgroundColor: "#000",
        marginLeft: 10,
        marginTop: 30,
    },
    TitleContainer: {

    },
    TitleText: {

    }
});