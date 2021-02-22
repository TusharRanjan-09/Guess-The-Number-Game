import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
