import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/startgamescreen';
import { LinearGradient } from 'expo-linear-gradient';
import { GameScreen } from './screens/gamescreen';
import { GameOverScreen } from './screens/gameoverscreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)

  const pickedNumberHandler = (number) => {
    if (!number) return;
    setUserNumber(number);
    setGameIsOver(false)
  }

  const handleGameIsOver = () => {
    setGameIsOver(true)
  }

  let gameScreen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber) gameScreen = <GameScreen number={userNumber} onGameOver={handleGameIsOver} />
  if(gameIsOver && userNumber) gameScreen = <GameOverScreen />

  return (
    <LinearGradient colors={["#000000", "#000006"]} style={styles.screenRoot}>
      <ImageBackground
        source={require('./assets/Images/dice.jpg')}
        resizeMode='cover'
        style={styles.screenRoot}
        imageStyle={styles.backgroundImage}
      >
      <SafeAreaView style={styles.screenRoot}>
        {gameScreen}
      </SafeAreaView>
      </ImageBackground>
      {/* <StatusBar style='auto' /> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  }
});
