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

const Drawer = createDrawerNavigator();

const App = () => {
        //! READ THE DOCS

        return (
                <NavigationContainer>
                        <Drawer.Navigator
                                initialRouteName="Home"
                                
                                drawerContent={(props) => (
                                        <CustomDrawerContent {...props} />
                                )}
                        >
                                <Drawer.Screen
                                        name="Home"
                                        component={HomeScreen}
                                />
                                <Drawer.Screen name="Hello" component={Hello} />
                        </Drawer.Navigator>
                </NavigationContainer>
        );
};

export default App;
