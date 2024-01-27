import { useContext } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

export const Thanks = ({navigation}) => {

    return (
        <View>
            <Text style={style.baseContent} > Thanks for Using our App </Text>
        </View>
    )
}

const style = StyleSheet.create({
    baseContent: {
        fontSize: 24,
        alignSelf: "center",
        paddingTop: 50
    }
})