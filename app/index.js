import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from '../screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';


export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    function pickNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);

    }

    let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

    if(userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }

    if(gameIsOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
    }

    
  return (
    <>
    <StatusBar style='dark'/>
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./../assets/images/background.png')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
