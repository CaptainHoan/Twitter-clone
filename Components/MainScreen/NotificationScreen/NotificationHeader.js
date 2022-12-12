import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";

const NotificationHeader = ({navigation}) => {
  return (
    <View>
      <View style={{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20, 
        backgroundColor: 'black',
        paddingTop: 25
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
    
        <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>Notifications</Text>

        <TouchableOpacity>
        <AntDesign name="setting" size={30} color="gray" />
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default NotificationHeader