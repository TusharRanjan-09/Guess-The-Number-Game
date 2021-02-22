import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {
    return (
        <View style={{ elevation: 10, borderRadius: 10, padding: 20, marginTop: 20, backgroundColor: 'white' }}>
            {props.children}
        </View>
    );
}

