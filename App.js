import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Src/Components/Header';
import StartGameScreen from './Src/Screens/StartGameScreen';
import GameScreen from './Src/Screens/GameScreen';
import Index from './Src/index';
export default function App() {
  // const [userNum,setUserNum]= useState();
  // const startGameHandler = (selectedNumber) => {
  //   setUserNum(selectedNumber);
  // };
  // let content  = <StartGameScreen onStartGame={startGameHandler}/>
  // if (userNum) {
  //   content =   <GameScreen userChoice={userNum}/>
  // }
  return (
    <View style={styles.container}>
     <Header title="Guess the Number"/>
    <Index/>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
