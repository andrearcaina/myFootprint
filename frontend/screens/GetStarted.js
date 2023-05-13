import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Calendar from  './Calendar';
import Tips from  './Tips';
import LoginPage from  './LoginPage';

export default function Beginning() {
    const [activePage, setActivePage] = useState(0);
    const subpages = [
        { title: "Page 1", content: "Page 1 content" },
        { title: "Page 2", content: "Page 2 content" },
        { title: "Page 3", content: "Page 3 content" },
        { title: "Page 4", content: "Page 4 content" },
    ];

    const handleNextPage = function () {
        setActivePage(activePage + 1);
    };

    const handlePrevPage = function () {
        setActivePage(activePage - 1);
    };

    return (
        // instead of styles.titles and styles.content, use Calendar.js for second page, Tips.js for third page
        // and LoginPage.js for the fourth page
        <View style={styles.container}>
            <View style={styles.subPage}> 
                {activePage === 0 && (
                    <>
                        <Text style={styles.title}>{subpages[activePage].title}</Text>
                        <Text style={styles.content}>{subpages[activePage].content}</Text>
                    </>
                )}
                {activePage === 1 && <Calendar />}
                {activePage === 2 && <Tips />}
                {activePage === 3 && <LoginPage />}
            </View>
        <View style={styles.dots}>
            <View style={[styles.dot, activePage === 0 && styles.activeDot]} />
            <View style={[styles.dot, activePage === 1 && styles.activeDot]} />
            <View style={[styles.dot, activePage === 2 && styles.activeDot]} />
            <View style={[styles.dot, activePage === 3 && styles.activeDot]} />
        </View>
            <View style={styles.footer}>
                {activePage > 0 && (
                    <TouchableOpacity style={styles.button} onPress={handlePrevPage}>
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                )}
                {activePage < subpages.length - 1 ? (
                    <TouchableOpacity style={styles.button} onPress={handleNextPage}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
    },
    
    subPage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    
    title: {
        fontSize: 24,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    
    content: {
        fontSize: 18,
        fontFamily: 'monospace',
        textAlign: 'center',
    },
    
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        backgroundColor: '#c4c4c4',
    },
    
    activeDot: {
        backgroundColor: '#333333',
    },
    
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 30,
        width: '100%',
    },
    
    button: {
        backgroundColor: '#333333',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
});