import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
// import { auth } from '../firebase';
// ^ when this is imported, it gives an error: asyncStorage and INTERNAL

const LoginPage = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = function() {
        console.log(`Email: ${email}, Password: ${password}`);
        
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
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
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});