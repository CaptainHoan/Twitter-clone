import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import React from 'react'

//React-native-Shared-Element, React-Navigation-Shared-element, React-native-fluid Transitions

const ImageShare = ({post}) => {
  return (
  <View>
    <Image 
        style={post.postImage ? styles.PostTweetStartImage : null }
        source={{uri:post.postImage}} />
    </View>
  )
}

const styles = StyleSheet.create({
    PostTweetStartImage: {
      flex: 1,
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      borderRadius: 20,
      marginTop: 5
    },

    PostTweetEndImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '50%'
    }
})

export default ImageShare