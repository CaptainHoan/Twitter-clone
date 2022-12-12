import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MessageButton = () => {
  return (
    <View style={{
        backgroundColor: '#009CE0',
        width: 60, 
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20
    }}>
        <TouchableOpacity>
            <MaterialCommunityIcons name="email-plus-outline" size={28} color="white" />    
        </TouchableOpacity>
    </View>
  )
}

export default MessageButton