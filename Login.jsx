import { useContext } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { LogInContext } from "./App"

export const Login = ({navigation}) => {

    const setIsUser = useContext(LogInContext)

    const goToHome = () => {
        setIsUser(true);
        console.log("Navigating to Home")
        // navigation.navigate("Home");
        // navigation.replace("Home")
    }


    return (
        <View style = {style.baseContent}>
            <Text style = {style.baseContent}>
                Login Page
            </Text>
            <Button onPress={goToHome} title="Log In " />
        </View>
    )
}

const style = StyleSheet.create({
    baseContent: {
        fontSize: 24,
        alignSelf: "center",
        paddingTop: 50,
        paddingBottom: 10
    }
})