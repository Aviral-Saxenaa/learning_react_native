import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

let counter=0;
const Hooks = () => {
        const[value,valueSet]=useState(0);
        return (
                <View
                        style={{
                                flex: 1,
                                backgroundColor:"orange",
                                justifyContent: "center",
                                alignItems: "center",
                        }}
                >
                        <Text>{value}</Text>
                        <TouchableOpacity
                                style={{
                                        width: 150,
                                        height: 100,
                                        marginTop: 40,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderWidth: 0.4,
                                        
                                }}
                                onPress={()=>{
                                  valueSet(value+1);
                                  
                                }}
                        >
                                <Text>Increase Count</Text>
                        </TouchableOpacity>
                </View>
        );
}

export default Hooks;