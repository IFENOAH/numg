import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/startgamescreen';
import { LinearGradient } from 'expo-linear-gradient';
import { GameScreen } from './screens/gamescreen';
import { GameOverScreen } from './screens/gameoverscreen';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
// import {} from 'expo-splash-screen'

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [ fontsLoaded ] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  const pickedNumberHandler = (number) => {
    if (!number) return;
    setUserNumber(number);
    setGameIsOver(false)
  }

  const handleGameIsOver = (numRounds) => {
    setGameIsOver(true)
    setGuessRounds(numRounds)
  }

  const handleNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0)
  }

  let gameScreen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber) gameScreen = <GameScreen number={userNumber} onGameOver={handleGameIsOver} />
  if(gameIsOver && userNumber) gameScreen = <GameOverScreen userNUmber={userNumber} roundsNumber={guessRounds} onStartNewGame={handleNewGameHandler} />

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
      <StatusBar style='light' />
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
