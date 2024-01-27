import { useContext } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { LogInContext } from "./App"

export const Home = ({navigation}) => {

    const setIsUser = useContext(LogInContext);

    return (
        <View>
            <Text style={style.baseContent} > This is Home Page </Text>
            <Button onPress={() => {setIsUser(false); setTimeout(()=> navigation.navigate("Login"), 10) }} title="LOG OUT" />
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