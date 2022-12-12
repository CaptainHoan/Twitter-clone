import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ChatBox from './ChatBox';
import ChatContent from './ChatContent';
import MessageHeader from './MessageHeader';


const Stack = createStackNavigator();

const MessageContent = ({navigation}) => {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName='ChatContent'
        >
          <Stack.Screen name='ChatContent' component={ChatContent}  options={{
            header: () => <MessageHeader navigation={navigation} />
          }}
          />
          <Stack.Screen name='ChatBox' component={ChatBox} />
        </Stack.Navigator>
      </NavigationContainer>
      
    )
}

export default MessageContent