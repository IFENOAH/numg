import { useEffect, useState } from "react";
import { useWindowDimensions, View, StyleSheet, Alert, FlatList } from "react-native";
import { PrimaryButton } from "../components/forms/primarybutton";
import { Card } from "../components/global/ui/card";
import { CustomText } from "../components/global/ui/customtext";
import { COLORS } from "../constants/colors";
import { generateRandomNumberBetween } from "../utils/randomnumbergenerator";
import { Ionicons } from '@expo/vector-icons'
import { GuessItem } from "../components/global/game/guessLogItem";
import { NumberContainer } from "../components/global/game/numbercontainer";
import Title from "../components/global/ui/title";

let minBoundary = 1
let maxBoundary = 100;

export function GameScreen({ number, onGameOver }){

    const initialGuess = generateRandomNumberBetween( 1, 100, number );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [roundNumbers, setRoundNumbers] = useState([initialGuess])

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100;
    }, [])

    useEffect(() => {
        if(currentGuess === parseInt(number))
        onGameOver(roundNumbers.length);
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
        setRoundNumbers(prev => [newRandomNumber, ...prev])
    }

    const guessRoundsListLength = roundNumbers?.length

    let content = 
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                {/* HIGH/LOW */}
                <CustomText style={styles.textStyle} >Higher or Lower?</CustomText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name="md-add" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>

        if(width > 500) {
            content = 
            <>
                {/* <CustomText style={styles.textStyle} >Higher or Lower?</CustomText> */}
                <View style={styles.buttonContainerLandScape}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name="md-add" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList 
                    data={roundNumbers} 
                    renderItem={(itemData) =>(
                        <GuessItem 
                            roundNumber={guessRoundsListLength - itemData.index}
                            oppGuess={itemData.item}
                        />
                    )} 
                    keyExtractor={(item) =>item}    
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
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
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainerLandScape: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
    },
    textStyle: {
        marginBottom: 20,
    },
    listContainer: {
        flex: 1,
        padding: 12
    }
})