import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button, Image, Platform} from 'react-native';

export default function SecondPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.TrackYourFootprint}>Track Your Carbon Footprint</Text>
            <Text style={styles.getWeeklyMonthly}>Get Weekly and Monthly Progress! </Text>
            <View style={styles.box}></View>
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
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
        fontSize: 20,
    },
    getWeeklyMonthly: {
        color: 'lightblue',
        alginItems: 'center',
        fontSize: 20,
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',

    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'black',
    },
    calendarImage: {
        width: 400,
        height: 300
        
    },
});