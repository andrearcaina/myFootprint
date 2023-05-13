import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button } from 'react-native';

export default function Beginning() {
    return (
        <View style={styles.container}>
            <Text style={styles.TrackYourFootprint}>Track Your Carbon Footprint</Text>
            <Text style={styles.getStarted}>Get Started</Text>
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
    getStarted: {
        color: 'red',
        fontSize: 20,
        fontFamily: 'monospace',
    }
});