import { useState } from 'react';

import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEneternedNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEneternedNumber(enteredText);
    }

    function resetInputHandler() {
        setEneternedNumber('');
    }

    function confirmInputHandler() {
        const chooseNumber = parseInt(enteredNumber);
        const alertTitle = 'Invalid number!';
        const alertMessage = 'Number has to be a number between 1 and 99'

        if(isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert(alertTitle, alertMessage, [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return
        }
        onPickNumber(chooseNumber);
    }

    return (
    <View style={styles.inputContainer} >
        <TextInput 
        style={styles.textInput} 
        maxLength={2} 
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
        />
        <View style={styles.buttonsContainer} >
            <View>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View >
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 16,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    }
})