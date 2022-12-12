import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const SpaceButton = () => {
  return (
    <View style={{
        backgroundColor: '#6111CB',
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
            <Ionicons name="md-mic" size={27} color="white" />
        </TouchableOpacity>
    </View>
  )
}

export default SpaceButton