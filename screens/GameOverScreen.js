import { View, Image, StyleSheet, Text } from 'react-native';
import Title from '../components/ui/Title';
import { Colors } from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen() {
    return <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/success.png')} style={styles.image}/>
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>Y</Text></Text>
        <PrimaryButton>Start New Game</PrimaryButton>
    </View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        width: 300,
        height: 300,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: {
        fontWeight: 700,
        color: Colors.primary500
    }
})