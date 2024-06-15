import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, useWindowDimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import { Colors } from '../constants/Colors';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEneternedNumber] = useState('');

    const {witdh, height} = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEneternedNumber(enteredText);
    }

    function resetInputHandler() {
        setEneternedNumber('');
    }

    function confirmInputHandler() {
        const chooseNumber = parseInt(enteredNumber);
        const alertTitle = 'Invalid number!';
        const alertMessage = 'Number has to be a number between 1 and 99';

        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert(alertTitle, alertMessage, [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        onPickNumber(chooseNumber);
    }

    const marginTopDistance = height < 380 ? 50 : 100;

    return (
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
        <Title>Guess My Number</Title>
        <Card>
           <InstructionText>Enter a number</InstructionText>
            <TextInput 
                style={styles.textInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>

</View>
    );
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        //marginTop: deviceHeight < 400 ? 30 : 100,
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
});
