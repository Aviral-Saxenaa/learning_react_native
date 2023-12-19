import { View, Text ,Button} from 'react-native'
import React from 'react'

//! READ THE DOCS

const Hello = ({route,navigation}) => {
  const{maindetail}=route.params;
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:20 , color:"blue"}}>{maindetail}</Text>
      <Button  onPress={()=>{
        navigation.navigate('Home')
      }}
        title="goback"
      />
    </View>
  )
}

export default Hello