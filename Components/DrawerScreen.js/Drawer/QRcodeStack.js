import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from '../../../Screens/DrawerScreen/DrawerNavigation';
import QRcodeScreen from '../../../Screens/DrawerScreen/QRcodeScreen';
import ProfileScreen from '../../../Screens/DrawerScreen/ProfileScreen';

const Stack = createStackNavigator();

const globalScreenOptions =  {
  headerShown: false
}

const QRcodeStack = () => {
  return ( 
        <Stack.Navigator
            initialRouteName='DrawerNavigation'
            screenOptions={ globalScreenOptions }
        >           
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
            <Stack.Screen name="QRcodeScreen" component={QRcodeScreen} />
        </Stack.Navigator>
  )
}


export default QRcodeStack