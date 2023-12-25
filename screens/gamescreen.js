import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { PrimaryButton } from "../components/forms/primarybutton";
import { NumberContainer } from "../components/global/game/numbercontainer";
import Title from "../components/global/ui/title";
import { COLORS } from "../constants/colors";
import { generateRandomNumberBetween } from "../utils/randomnumbergenerator";

let minBoundary = 1
let maxBoundary = 100;

export function GameScreen({ number, onGameOver }){

    const initialGuess = generateRandomNumberBetween( 1, 100, number );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === parseInt(number))
        onGameOver();
    }, [currentGuess, number, onGameOver])

    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < number) || (direction === 'higher' && currentGuess > number)) {
            Alert.alert(
                'I believe that is wrong!!!',
                'Please Indicate appropriately' ,
                [{
                    text: 'Sorry',
                    style: "Cancel",
                }]
            )
            return;
        }
        if ( direction === 'lower' ){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRandomNumber = generateRandomNumberBetween(
            minBoundary,
            maxBoundary, 
            currentGuess
        );
        setCurrentGuess(newRandomNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                {/* HIGH/LOW */}
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
                </View>
            </View>
            {/* BUTTONS */}

            <View>
               {/* Log Rounds */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.primary500,
        textAlign: 'center',
        padding: 12,
        borderWidth: 2,
        borderColor: COLORS.primary500,
        borderRadius: 8
    },
})