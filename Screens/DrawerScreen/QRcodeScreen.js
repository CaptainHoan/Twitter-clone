import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg'
import { useState } from 'react';

const QRStack = createStackNavigator();
const globalScreenOptions =  {
    headerShown: false
}

const QRcodeScreen = () => {
    return ( 
      <QRStack.Navigator
        initialRouteName='QRcode'
        >           
          <QRStack.Screen name="QRcode" component={QRcode}
            options={({route, navigation}) => ({
              headerTitle: () => null,
              headerStyle: {
                backgroundColor: 'black'
              },
              headerLeft: () => (
                <View style={{marginLeft: 15}}>
                  <TouchableOpacity onPress={() => navigation.navigate('MainScreenNavigation')}>
                    <Feather name="x" size={28} color="white" />
                  </TouchableOpacity>
                </View>  
              ),
              headerRight: () => (
                <View style={{marginRight: 15}}>
                  <TouchableOpacity>
                    <Feather name="upload" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              )
            })} 
          />
      </QRStack.Navigator>
    )
  }

const generateRandomColor = () => {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}


const QRcode = () => {

  const [color, setColor] = useState('blue')

  const changeColor = () => {
    setColor(generateRandomColor())
  }
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <TouchableWithoutFeedback onPress={() => changeColor()}>
            <View 
              style={{
                paddingVertical: 40,
                paddingHorizontal: 40,
                backgroundColor: color,
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 150,
                position: 'absolute',
                borderWidth: 5,
                borderColor: 'white',
                borderRadius: 10
              }}
            >
              <QRCode
                  value="https://pbs.twimg.com/media/EZ_zIs4U4AQjXC_.jpg"
                  logo={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABlBMVEXJycmcnJyshIZ4AAAB7ElEQVR4nO3bUW7DMAwEUfv+ly4SGEXQ2kksk1xqPXMCvj8BIpeFiIiIiIiIiIiIiIiIiKio9TX1MIOt+6nHOtcBYjbMB8YklC8UM1i+ZjSnnHL0lZxkdKUMMFpSBh3tJMOOXpILjFaUi442ksuOJpIARwtJiKOBJMihl7hAwhxiSaBDKgl1KCUukGCHThIOEUniHRpIgkMjcYGkOBQSIM0kWQ4g3RzVEiBApnPUSoAAAaJzVEqAAAECBAgQIECAzCopdAABAkQoKXUAATKfpNjhA7H5Q+RXtx3EZvPBB2KzHeSzr+WzQWez0+gDsdn79dnE9tmN94HY3I/4XPT43Fj5XL353CEuNpehi8+trs/19GJzz74MSNQDH2fCeGTCeGTCeOah2LJA/OZgICIioq35nygOr9+Phhk0JxCNMQOKhpZhRS/LRUYTSoCigyWMoaWEMnSUcIaGksIQUNIcRjvlhZRkR5UknVFEKXHkS4oY6ZRCR6qk1JEoKXakScodSRKBI0MiYSRQZI5gidARK3GBSB2BErEjTKJmrEESNeKZiyNCohZsuTguS9TjvwSkmeOSRD36n4CoB//X3SHqsXe6N0Q99G53hqhHPghIt1wc5yXqeQ+7K0Q97puAdOueEPWwbwPSLSDd2p34B3GsN/j6gvMWAAAAAElFTkSuQmCC"}}
                  size={200}
                  logoBackgroundColor='transparent'
                  backgroundColor={color}
                  color="white"
                />
            </View>
      </TouchableWithoutFeedback>

      <View style={{
        marginTop: 500,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
        <Text 
          style={{
            color: 'white', 
            fontSize: 18, 
            fontWeight: '700', 
            textAlign: 'center',
            marginBottom: 20 
        }}>
          Share your QR code with others to easily follow you
        </Text>
        <TouchableOpacity>
          <MaterialIcons name="qr-code-scanner" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default QRcodeScreen