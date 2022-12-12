import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import * as Facebook from 'expo-facebook';

const SignButton = () => {
    const [isLoggedin, setLoggedinStatus] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isImageLoading, setImageLoadStatus] = useState(false);
  
    async function facebookLogIn() {
        try {
          await Facebook.initializeAsync({
            appId: '389961156436167',
          });
          const { type, token, expirationDate, permissions, declinedPermissions } =
            await Facebook.logInWithReadPermissionsAsync({
              permissions: ['public_profile'],
            });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
  
    return (
        <View>
          <TouchableOpacity style={styles.loginBtn} onPress={facebookLogIn} >
            <Image 
                style={{width: 25, height: 25, marginRight: 10}}
                source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png'}}
            />
            <Text style={{ color: "black", fontSize: 17, fontWeight: '600' }}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    loginBtn: {
      backgroundColor: 'white',
      paddingVertical: 12,
      paddingHorizontal: 40,
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center'
    },
  });

export default SignButton