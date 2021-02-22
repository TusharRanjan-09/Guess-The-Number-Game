import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../Components/Card';
export default function StartGameScreen({ navigation }) {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setconfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const numInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetHnadler = () => {
        setEnteredValue('')
        setconfirmed(false);
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        Keyboard.dismiss();
        setconfirmed(true);
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
    };
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Card><View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 18 }}>You have Entered :</Text>
            <View style={{ alignItems: 'center' }}>
                <View style={{ borderWidth: 2, padding: 12, borderRadius: 10, marginVertical: 5, borderColor: 'darkgreen' }}>
                    <Text style={{ color: 'darkgreen', fontSize: 25 }}>{selectedNumber}</Text>
                </View>

                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('GameScreen', usersChoice = { selectedNumber })} >
                        <Text style={{ color: 'purple', fontWeight: 'bold', fontSize: 20 }}>START GAME</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View></Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 40, color: 'red', marginVertical: 20 }}>Start a new Game</Text>
                <View style={{ elevation: 10, backgroundColor: 'white', width: '80%', padding: 10, alignItems: 'center' }}>
                    <TextInput placeholder="Enter a number" placeholderTextColor="black" textAlign="center" keyboardType="number-pad" maxLength={2}
                        value={enteredValue}
                        onChangeText={numInputHandler}
                        style={{ fontSize: 22 }}
                    />
                    <Text>{enteredValue}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 80, padding: 20 }}>
                        <TouchableOpacity style={{ marginHorizontal: 25 }}
                            onPress={resetHnadler}
                        >
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>RESET</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 25 }}
                            onPress={confirmInputHandler}
                        >
                            <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 20 }}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
        borderRadius: 25
    },
    headerTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
});
