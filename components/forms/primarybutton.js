import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants/colors';

export const PrimaryButton = ({ children, onPress, bgColor }) => {

  return (
        <View style={styles.outerButtonContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed
                    ? [styles.innerButtonContainer, styles.pressed] 
                    : styles.innerButtonContainer
                } 
                onPress={onPress} 
                android_ripple={{color: COLORS.secondary200}}
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
  )
}

const styles = StyleSheet.create({
    outerButtonContainer: {
        borderRadius: 8,
        margin: 4,
        overflow: 'hidden'
    },
    innerButtonContainer: {
        backgroundColor: COLORS.secondary200,
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 4,
    },
    buttonText: {
        color: COLORS.primary500,
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75,
    },
});