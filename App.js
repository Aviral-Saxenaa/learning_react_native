import { View, Text } from "react-native";
import React from "react";
import Hooks from "./Hooks";
import Flatlist from "./Flatlist";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hello from './screens/Hello';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const App = () => {

        //! READ THE DOCS


        return (
                <NavigationContainer>
                  
                 <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Hello" component={Hello} />
                 </Stack.Navigator>
                </NavigationContainer>
        );
};

export default App;
