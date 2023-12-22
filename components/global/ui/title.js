import { StyleSheet, Text } from "react-native";

export default function Title({ children }){
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#ffffff",
        textAlign: 'center',
        padding: 12,
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 8
    }
})