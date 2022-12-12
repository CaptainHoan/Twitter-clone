import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SearchHeader = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      paddingHorizontal: 20, 
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
    
        <SearchInput />

        <TouchableOpacity>
        <AntDesign name="setting" size={30} color="gray" />
        </TouchableOpacity>
    </View>
  )
}

const SearchInput = () => {
  return (
    <View style={styles.searchInput}>
      
      <EvilIcons name="search" size={24} color="gray" />
      
      <TextInput 
        placeholder='Search Twitter'
        placeholderTextColor={'gray'}
        style={{
          fontSize: 18,
          color: 'white' 
        }}
      />
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
    borderRadius: 50
  }
})

export default SearchHeader