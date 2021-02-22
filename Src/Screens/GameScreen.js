import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from '../Components/Card';
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
    <View style={styles.container}>
      <Text >Hi</Text> 
      <Text>{currentGuess}</Text>
  
      <Card>
<TouchableOpacity>
  <Text>LOWER</Text>
</TouchableOpacity>
<TouchableOpacity>
  <Text>HIGHER</Text>
</TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
  flex:1,
    backgroundColor: 'white',
   
  },
  headerTitle: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold'
  }
});
