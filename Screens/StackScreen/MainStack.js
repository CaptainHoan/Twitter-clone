import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import QRcodeStack from '../../Components/DrawerScreen.js/Drawer/QRcodeStack';

const Stack = createStackNavigator();

const globalScreenOptions =  {
  headerShown: false
}

const MainStack = () => {
  return (
    <NavigationContainer independent={true} >
        <Stack.Navigator
            initialRouteName='QRcodeStack'
            screenOptions={ globalScreenOptions }
        >           
            <Stack.Screen name="QRcodeStack" component={QRcodeStack} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack