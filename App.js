import { View, Text } from "react-native";
import React from "react";
import Hooks from "./Hooks";
import Flatlist from "./Flatlist";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hello from "./screens/Hello";
import HomeScreen from "./screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./screens/CustomDrawerContent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const App = () => {
        //! READ THE DOCS

        return (
                <NavigationContainer>
                <Tab.Navigator>
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen
                                name="Hello"
                                component={Hello}
                        />
                </Tab.Navigator>
                </NavigationContainer>
        );
};

export default App;
