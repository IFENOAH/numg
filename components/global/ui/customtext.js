import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { COLORS } from '../../../constants/colors'

export const CustomText = ({ children, style }) => {
  return (
    <Text style={[styles.textProperty, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    textProperty: {
        fontFamily: 'open-sans',
        fontSize: 24,
        color: COLORS.secondary200,
    },
})