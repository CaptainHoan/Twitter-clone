import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import React, { useState, useRef } from 'react'

const Dotbutton = () => {

    const [display, setDisplay] = useState('none')

    const changeDisplay = () => {
        setDisplay('flex')
        
        if (display === 'flex') {
            setDisplay('none')
        }
    }

  return (
    <View >
        <TouchableOpacity 
            onPress={() => {
                changeDisplay();
            }}
        >
            <Text style={{
                color: 'white', 
                fontWeight: '600', 
                fontSize: 25,
                marginTop: -10,
                position: 'relative'
            }}>...</Text>
        </TouchableOpacity>
        <View 
            style={{
                position: 'absolute',
                marginTop: 40,
                width: 240,
                right: 2,
                backgroundColor: '#607D8B',
                zIndex: 100,
                borderRadius: 10,
                display: display,
            }}       
        >
            <TouchableOpacity>
                <Text style={styles.textContainer}>Not interested in this Space</Text>
            </TouchableOpacity>
            <View style={styles.viewContainer}></View>
            <TouchableOpacity>
                <Text style={styles.textContainer}>Report this Space</Text>
            </TouchableOpacity>
            
        </View>  
    </View>
  )
}

const styles = StyleSheet.create({
    textContainer: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600',
        padding: 10
    },

    viewContainer: {
        backgroundColor: '#947F6D',
        height: 5
    }
})

export default Dotbutton