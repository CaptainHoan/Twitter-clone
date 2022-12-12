import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar } from "@rneui/themed";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DrawerHeader = ({navigation}) => {
  return (
    <View 
        style={{
            marginTop: 35,
            paddingBottom: -25
        }}
    >
        <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} >
                    <Avatar
                        activeOpacity={0.5}
                        containerStyle={{ backgroundColor: "#BDBDBD", width: 60, height: 60 }}
                        rounded
                        size="large"
                        source={{ uri: "https://th.bing.com/th/id/OIP.GKC_OaM6yk7CQxhre5MNowHaG8?pid=ImgDet&rs=1" }}
                        titleStyle={{}}
                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <MaterialCommunityIcons name="star-box-multiple-outline" size={30} color="white" />
                </TouchableOpacity>
            </View>
            {/**userName when user logged in */}
            <Text style={[styles.text, {marginTop: 10}]}>
                SynLink Foundation
            </Text>
            <Text style={[styles.text, {marginTop: 15}]}>
                79 Following {' '} 4 Followers
            </Text>
        </View>
        
        <View style={{height: 1, backgroundColor: 'gray', marginTop: 20}}></View>

    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600'
    }
})


export default DrawerHeader