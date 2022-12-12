import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { showMessage, hideMessage, FlashMessage } from "react-native-flash-message";

const Reminder = ({calender}) => {

    const [reminder, setReminder] = useState('Set reminder')

    const changeReminder = () => {
        setReminder('Reminder set')
        if(reminder === 'Reminder set') {
            setReminder('Set reminder')
        }
    }

    const ReminderShareTweet = () => {
        return(
            <View style={{borderRadius: 20}}>
                <Button title='share' />
            </View>
            
        )
    }

  return (
    <View>
        <TouchableOpacity 
            style={[styles.button, {
                backgroundColor: reminder === 'Set reminder' ? 'white' : 'transparent'
            }]}
            onPress={() => {
                changeReminder();
                showMessage({                                   
                    message: reminder === 'Set reminder' 
                        ? " You'll get a notification when it starts" 
                        : 'Reminder removed',
                    titleStyle: {
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'white',
                        alignItems: 'center',
                        marginBottom: reminder === 'Set reminder' ? 10 : null
                    },
                    style: {
                        marginTop: 20,
                        paddingVertical: 20,
                        borderRadius: 15,                                       
                    },
                    backgroundColor: '#303F9F',
                    duration: 4096,
                    animationDuration: 225,
                    floating: true,
                    icon: 'success', 
                    position: "top",
                    renderCustomContent: () => 
                        reminder === 'Set reminder' && <ReminderShareTweet />
                    
                })
            }}
        >
            <Text 
                style={{
                    color: reminder === 'Set reminder' ? 'black' : 'white', 
                    fontWeight: '700', 
                    fontSize: 17, 
                    textAlign: 'center'
                }}
            >
                {reminder}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        //backgroundColor: () => reminder === 'Set reminder' ? 'red' : 'white',
        paddingHorizontal: 15,
        paddingVertical: 13,
        borderRadius: 50, 
        borderWidth: 2,
        borderColor: 'white'
    }
})

export default Reminder