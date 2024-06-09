import { useState, useEffect } from 'react';

import {  View, StyleSheet, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import NumberContainer from '../components/game/NumberContainer.js';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText.js';


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);

    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);


    useEffect(()=>{
        if(currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction) {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Don"t lie', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}])
            return;
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess;
            
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber);
    }
    
    return <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionsText}>Higher ot Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color='white'/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                Log Rounds
            </View>
        </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    instructionsText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})