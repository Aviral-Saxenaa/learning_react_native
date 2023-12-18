import { View, Text,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

let counter=0;
const Hooks = () => {
        const[value,valueSet]=useState(0);

        //! useeffect runs everytime screen loads automatically
        // useEffect(()=>{
        //         console.log("hello"); //runs everytime
        // })

        // useEffect(()=>{
        //         console.log("hello1");  // runs only when screen loads
        // },[])

        // useEffect(()=>{
        //         console.log("hello2");   //runs when desired functionality is changed
        // },[value])
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