import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
const Stack = createStackNavigator();

function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="StartGameScreen" component={StartGameScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="GameOverScreen" component={GameOverScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Index;
