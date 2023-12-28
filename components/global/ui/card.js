import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import { COLORS } from '../../../constants/colors';

export const Card = ({ children }) => {
  return (
    <View style={styles.inputContainer}>
        {children}
    </View>
  )
}

const DeviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: DeviceWidth < 380 ? 20 : 40,
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
});
