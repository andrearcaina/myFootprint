import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = function() {
        console.log(`Username: ${username}, Password: ${password}`);
        // TODO: Add logic to authenticate user
    };

    return (
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10,
        marginBottom: 20,
        width: 300,
    },
    button: {
        backgroundColor: '#3DED97',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        fontFamily: 'monospace',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});