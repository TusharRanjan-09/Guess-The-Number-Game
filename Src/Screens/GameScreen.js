import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
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
    const [currentGuess, setCurrentGuess] = useState(generateRandom(1,100, props.route.params.selectedNumber))
   const currentLow = useRef(1);
   const currentHigh = useRef(100);
   useEffect (()=> {
if (currentGuess === props.route.params.selectedNumber) {
  Alert.alert('Game Over !!')
}
   })
    const nextGuessHandler = (direction) => {
if(direction === 'lower' && currentGuess < props.route.params.selectedNumber ||
  (direction === 'greater' && currentGuess > props.route.params.selectedNumber)) {
Alert.alert('You know this', 'Bro You Know this', [{text: 'Sorry', style: 'cancel'}])
return;
}
if (direction === 'lower') {
currentHigh.current = currentGuess;
} else {
  currentLow.current = currentGuess;
} 
const nextNum = generateRandom(currentHigh.current, currentLow.current, currentGuess)
   setCurrentGuess(nextNum)
}
   
     return (
    <View style={styles.container}>
      <Text >Opponent's Choice</Text> 
      <Text>{props.userChoice}</Text>
      <View style={{borderWidth:2, padding:12, borderRadius:10, marginVertical:5, borderColor: 'darkgreen'}}>
                <Text style={{color: 'darkgreen', fontSize:25}}>{currentGuess}</Text>
                </View>
  
      <Card>
        <View style={{flexDirection : 'row', }}>
        <TouchableOpacity onPress={nextGuessHandler.bind(this, 'lower')}>
  <Text style={{color:'yellow', fontWeight: 'bold', fontSize:20, marginRight:25}}>LOWER</Text>
</TouchableOpacity>
<TouchableOpacity onPress={nextGuessHandler.bind(this, 'greater')}>
  <Text style={{color:'purple', fontWeight: 'bold', fontSize:20}}>HIGHER</Text>
</TouchableOpacity>
        </View>

      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
  flex:1,
    backgroundColor: 'white',
    alignItems: 'center'
   
  },
  headerTitle: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold'
  }
});
