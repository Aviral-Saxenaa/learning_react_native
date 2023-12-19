import { View, Text ,Button} from 'react-native'
import React from 'react'

const CustomDrawerContent = ({ navigation }) => {
        return (
          <View style={{ flex: 1, padding:50 }}>
            <Text style={{ marginBottom:50 }}>Custom Drawer Header</Text>
            <Button
              title="Close Drawer"
              onPress={() => navigation.closeDrawer()}
              
            />
            {/* Add your custom content here */}
          </View>
        );
      };
      

export default CustomDrawerContent