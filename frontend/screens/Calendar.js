import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button, Image, Platform} from 'react-native';

export default function SecondPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.TrackYourFootprint}>Track Your Carbon Footprint</Text>
            <Text style={styles.getWeeklyMonthly}>Get Weekly and Monthly Progress! </Text>
            <Image source={require('./images/Calendar-Clipart.png')} style={[styles.calendarImage, {marginRight: 30}]} />
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
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
        fontSize: 20,
        fontWeight: 'bold',
    },
    getWeeklyMonthly: {
        color: 'lightblue',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',

    },
    calendarImage: {
        marginTop: 100,
        width: 255,
        height: 200
    },
});