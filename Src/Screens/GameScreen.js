import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
const generateRandom = (min,max,exclude) => {
    min=Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandom(min,max,exclude);
    } else {
        return rndNum;
    }
        } 
export default function GameScreen(props) {
    const [currentGuess, setCurrentGuess] = useState(generateRandom(1,100, props.userChoice))
     return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Hi</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
   width:'100%',
   height:50,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
    padding:35
  },
  headerTitle: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold'
  }
});
