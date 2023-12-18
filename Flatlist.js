import { View, Text, FlatList,StyleSheet } from "react-native";
import React from "react";

const Flatlist = () => {
        const details = [
                {
                        id: 1,
                        name: "aviral",
                },
                {
                        id: 2,
                        name: "avira",
                },
                {
                        id: 3,
                        name: "avir",
                },
                {
                        id: 4,
                        name: "avi",
                },
                {
                        id: 5,
                        name: "av",
                },
        ];
        return (
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                        <FlatList
                                data={details}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                        <Text style={styles.list}>{item.name}</Text>
                                )}
                                style={{marginHorizontal:100}}
                        />
                </View>
        );
};

const styles=StyleSheet.create({
        list:{
                padding:10,
                backgroundColor:"orange",
                marginVertical:10,
                textAlign:"center"
        }
})

export default Flatlist;
