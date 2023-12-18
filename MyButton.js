import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const MyButton = ({bgcolor,text}) => {
        return (
                <View>
                        <TouchableOpacity
                                style={{
                                        width: 200,
                                        height: 100,
                                        backgroundColor: bgcolor,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                }}
                        >
                                <Text style={{ color: "white" }}>text</Text>
                        </TouchableOpacity>
                </View>
        );
};

export default MyButton;
