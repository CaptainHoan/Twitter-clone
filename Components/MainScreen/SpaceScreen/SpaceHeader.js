import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Avatar } from "@rneui/themed";
import { EvilIcons } from '@expo/vector-icons';

const SpaceHeader = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'black'}}>
        <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            paddingHorizontal: 20, 
            paddingBottom: 15,
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
            <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>Spaces</Text>
            <Text>Spaces</Text>
        </View>

        <View style={styles.searchInput}>
            <EvilIcons name="search" size={24} color="gray" />
            <TextInput 
                placeholder='Search for a Space'
                placeholderTextColor={'gray'}
                style={{
                    fontSize: 17,
                    color: 'white',
                    fontWeight: '600'
                }}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    searchInput: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#555555',
      paddingHorizontal: 60,
      paddingVertical: 5,
      borderRadius: 50,
      marginHorizontal: 20,
      
    }
  })

export default SpaceHeader