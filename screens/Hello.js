import { View, Text ,Button} from 'react-native'
import React from 'react'

//! READ THE DOCS

const Hello = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:20 , color:"blue"}}>Hello</Text>
      <Button  onPress={()=>navigation.goBack()}
        title="goback"
      />
    </View>
  )
}

export default Hello