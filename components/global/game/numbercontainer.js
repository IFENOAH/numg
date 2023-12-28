import { StyleSheet, Text, View, Dimensions } from "react-native";
import { COLORS } from "../../../constants/colors";

export function NumberContainer ({ children }){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const DeviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: COLORS.primary500,
        padding: DeviceWidth < 350 ? 8 : 16,
        margin: DeviceWidth < 350 ? 10 : 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: COLORS.primary500,
        fontFamily: 'open-sans-bold',
        fontSize: DeviceWidth < 350 ? 28 : 36,
        color: COLORS.primary500
        // fontWeight: 'bold'
    }
})