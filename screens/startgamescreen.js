import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native"
import { PrimaryButton } from "../components/forms/primarybutton"
import { COLORS } from "../constants/colors";

export function StartGameScreen({ onPickNumber }){
    
    const [enteredNumber, setEnteredNumber] = useState('');

    const handleSubmitHandler = (enteredValue) => {
        setEnteredNumber(enteredValue);
    }

    const resetInputHandler = () => {
        setEnteredNumber()
    }

    const confirmInputHandler = () => {
        const number = parseInt(enteredNumber)

        if(isNaN(number) || number <= 0 || number > 99 ){
            Alert.alert(
                'Invalid Number',
                'Input must be a number between 1 and 99' ,
                [{
                    text: 'Okay',
                    style: "destructive",
                    onPress: resetInputHandler,
                }]
            )
            return;
        }
        onPickNumber(enteredNumber)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numInput} 
                keyboardType="number-pad" 
                maxLength={2}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleSubmitHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonHolder}>
                    <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
                </View>
                <View style={styles.buttonHolder}>
                    <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: COLORS.primary500,
        elevation: 4,
        shadowColor: COLORS.secondary100,
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numInput: {
        textAlign: "center",
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomColor: COLORS.secondary100,
        borderBottomWidth: 2,
        color: COLORS.secondary200,
        marginVertical: 8,
        fontWeight: "bold", 
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonHolder: {
        flex: 1
    }
});
