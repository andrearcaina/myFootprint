import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button, Platform } from 'react-native';

export default function SecondPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.TrackYourFootprint}>Track Your Carbon Footprint</Text>
            <Text style={styles.getWeeklyMonthly}>Hello </Text>
            <View style={styles.box}></View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
    },
    TrackYourFootprint: {
        color: 'rgb(105, 0, 255)',
    },
    getWeeklyMonthly: {
        color: 'red',
        fontSize: 20,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'black',
    },
});