import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect, useCallback, useState } from 'react'
import { getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';

const ChatBox = ({navigation}) => {

    const route = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleStyle: {color: 'white', textAlign: 'center'},
            headerBackTitleVisible: false, 
            headerStyle: {backgroundColor: 'black', height: 90},
            headerTintColor: 'white',
            headerRight: () => (
              <View style={{marginRight: 25, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <FontAwesome name="video-camera" size={24} color="white" style={{marginRight: 25}} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="phone" size={24} color="white" />
                </TouchableOpacity> 
              </View>                   
            ),
            headerTitle: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar
                  activeOpacity={0.5}
                  containerStyle={{ width: 30, height: 30, marginRight: 10 }}
                  rounded
                  size="large"
                  source={{ uri: route?.params?.userURL }}
                />
                <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>{route?.params?.userName}</Text>
              </View>
            ),
        })
    }, [])

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello ',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const renderBubble = (props) => {
    return (
      <Bubble 
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#F8BBD0',
            marginBottom: 10
          }
        }}
        textStyle={{
          left: {
            color: 'white',
            fontWeight: '600'
          },
          right: {
            color: 'white',
            fontSize: 18,
            fontWeight: '600'
          }
        }}
      />
    )
  }

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar 
        {...props}
        renderActions={() => {
          return(
            <View 
              style={{flexDirection: 'row', 
                      alignItems: 'center', 
                      marginBottom: 7, 
                      marginLeft: 5
            }}>
              <TouchableOpacity>
                <Entypo name="camera" size={28} color="#1273DE" style={{marginRight: 10}}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="picture" size={30} color="#1273DE" style={{marginRight: 10}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="microphone" size={24} color="#1273DE" style={{marginRight: 5}}/>
              </TouchableOpacity>    
            </View>
          )
        }}
      />
    )
  }

  const renderSend = (props) => {
    return(
      <Send {...props}>
        <View style={{marginBottom: 10, marginRight: 5}}>
          <Ionicons name="send" size={24} color="#1273DE" />
        </View>
      </Send>
    )
  }

  const scrollToBottomComponent = () => {
    return (
      <FontAwesome name="angle-double-down" size={24} color="#333" />
    )
  }

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      renderInputToolbar={renderInputToolbar}
      textInputStyle={{
        backgroundColor: 'gray',
        borderRadius: 50, 
        paddingLeft: 20,
        paddingTop: 3,
        paddingBottom: 3,
        marginRight: 15,
        color: 'white',
        fontSize: 15,
        fontWeight: '600',        
      }}
      containerStyle={{
        backgroundColor: "black",
        borderTopColor: "gray",
        borderTopWidth: 0.5,
        borderTopWidth: 0
      }}
    />  
    </View>
       
  )
}

export default ChatBox