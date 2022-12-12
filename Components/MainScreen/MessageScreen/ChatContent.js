import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { messages } from '../../../DummyData/MessageData'
import { Avatar } from "@rneui/themed";
import MessageHeader from './MessageHeader'
import MessageButton from './MessageButton';
import { createStackNavigator } from '@react-navigation/stack';

const ChatContentScreen = ({navigation}) => {

  return (
    <View style={{backgroundColor: 'black', flex: 1, paddingTop: 10}}>
        <ScrollView 
            style={{paddingHorizontal: 20, paddingTop: 5}}
            showsVerticalScrollIndicator={false}
        >
            {messages.map((message, index) => (
                <Message message={message} key={index} navigation={navigation} />
            ))}
        </ScrollView>
        <MessageButton />
    </View>
    
  )
}

const Message = ({message, navigation}) => {
  return (
    <TouchableOpacity 
        style={{flexDirection: 'row', alignItems:'flex-start', marginVertical: 15}}
        onPress={() => 
        navigation.push('ChatBox', {userName: message.userName, userURL: message.userURL})}     
    >
      
        <Avatar
          activeOpacity={0.5}
          containerStyle={{ width: 60, height: 60, marginRight: 10 }}
          rounded
          size="large"
          source={{ uri: message.userURL }}
        />
      
        <View>
            <View style={{
                flexDirection:"row",
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                marginBottom: 3
            }}>
                <Text style={{
                    color: 'white', 
                    fontSize: 17, 
                    fontWeight: '600'
                }}>
                    {message.userName}
                </Text>
                <Text style={{
                    color: 'gray', 
                    fontSize: 17, 
                    fontWeight: '600', 
                    position: 'absolute', 
                    marginLeft: 240
                }}>
                    {message.messageTime}
                </Text>
            </View>
            <View style={{marginRight: 70}}>
                <Text style={{
                    color: 'gray', 
                    fontSize: 15, 
                    fontWeight: '600', 
                    position: 'relative',
                    
                    }}>
                    {message.messageText}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const ChatStack = createStackNavigator();

const ChatContent = ({navigation}) => {
    return (
      <ChatStack.Navigator
              initialRouteName='ChatContentScreen'
              
          >           
              <ChatStack.Screen name="ChatContentScreen" component={ChatContentScreen}
                options={{
                    header: () => null               
                }}
              />
      </ChatStack.Navigator>
    )
  }

export default ChatContent