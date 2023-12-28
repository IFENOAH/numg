import React from 'react'
import { StyleSheet, Image, View, Text, Dimensions, ScrollView, useWindowDimensions } from 'react-native'
import { PrimaryButton } from '../components/forms/primarybutton'
import { COLORS } from '../constants/colors'
import Title from '../components/global/ui/title'

export const GameOverScreen = ({ roundsNumber, userNUmber, onStartNewGame }) => {

    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if(width < 380){
        imageSize = 150;
    }

    if(height < 415){
        imageSize = 100;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2
    }

  return (
    <ScrollView>
        <View style={styles.screenStyle}>
            <Title>GAME OVER!!!</Title>
            <View style={[styles.imageContainerStyle, imageStyle]}>
                <Image 
                    style={styles.imageStyle} 
                    source={require('../assets/Images/success.png')} 
                />
            </View>
            <View>
                <Text style={styles.summary}>
                    Your phone needed <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightedText}>{userNUmber}</Text>
                </Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>
                START NEW GAME
            </PrimaryButton>
        </View>
    </ScrollView>
  )
}

const DeviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainerStyle: {
        borderWidth: 3,
        borderColor: COLORS.secondary100,
        overflow: 'hidden',
        margin: 36
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    summary: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlightedText: {
        fontFamily: 'open-sans-bold',
        color: COLORS.primary500
    }
})