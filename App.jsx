import React, { createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './Home';
import { Login } from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Thanks } from './Thanks';

const Stack = createNativeStackNavigator();

export const LogInContext = createContext();


function App() {

  const [isUser, setIsUser] = useState(false);


  return (
    <LogInContext.Provider value={setIsUser}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        {!isUser && <Stack.Screen name="Login" component={Login} />}
        {isUser && <Stack.Screen name="Home" component={Home} />}
        {!isUser && <Stack.Screen name="Thanks" component={Thanks} />}
      </Stack.Navigator>
    </NavigationContainer>
    </LogInContext.Provider>
  )
}

export default App;