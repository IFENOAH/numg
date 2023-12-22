import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../constants/colors";

export function NumberContainer ({ children }){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: COLORS.primary500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: COLORS.primary500,
        fontSize: 36,
        fontWeight: 'bold'
    }
})