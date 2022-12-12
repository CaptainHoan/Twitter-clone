import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";
import { EvilIcons } from '@expo/vector-icons';

const MessageHeader = ({navigation}) => {

  return (
    <View style={{backgroundColor: 'black'}}>
      <View style={{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20, 
        paddingBottom: 25,
        paddingTop: 25,
        backgroundColor: 'black'
    }}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Avatar
            activeOpacity={0.5}
            containerStyle={{ backgroundColor: "#BDBDBD", width: 32, height: 32 }}
            rounded
            size="large"
            source={{ uri: "https://th.bing.com/th/id/OIP.GKC_OaM6yk7CQxhre5MNowHaG8?pid=ImgDet&rs=1" }}
            titleStyle={{}}
            />
        </TouchableOpacity>
    
        <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>Messages</Text>

        <TouchableOpacity>
            <AntDesign name="setting" size={30} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchInput}>
            <EvilIcons name="search" size={24} color="gray" />
            <TextInput 
                placeholder='Search Messages'
                placeholderTextColor={'gray'}
                style={{
                    fontSize: 15,
                    color: 'white',
                    fontWeight: '600',
                }}
            />
        </View>

        <View style={{backgroundColor: 'gray', height: 1}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    searchInput: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#555555',
      paddingHorizontal: 50,
      paddingVertical: 6,
      borderRadius: 50,
      marginHorizontal: 20,
      marginBottom: 25
    }
  })

export default MessageHeader