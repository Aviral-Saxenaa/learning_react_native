import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:20}}>HomeScreen</Text>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Hello',{
          maindetail:'My name is Aviral'
        })
      }}>
        <Text style={{padding:5,borderWidth:2}}>Go to Hello</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen