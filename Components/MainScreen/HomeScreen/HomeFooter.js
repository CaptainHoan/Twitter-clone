import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { Divider } from "@rneui/themed";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const HomeFooter = ({navigation}) => {
        
    const bottomTabIcons = [
        {
        name: 'Home',
        inactive: <MaterialCommunityIcons name="home-circle-outline" size={30} color="white" />,
        active: <FontAwesome name="home" size={30} color="#8ED1FC" />,
        },
        {
        name: 'Search',
        inactive: <Feather name="search" size={27} color="white" />,
        active: <FontAwesome name="search" size={27} color="#8ED1FC" />,
        },
        {
        name: 'Space',
        inactive: 
            <Ionicons name="mic-circle-outline" size={30} color="white" />,
        active: 
            <Ionicons name="md-mic-circle" size={30} color="#8ED1FC" />,
        },
        {
        name: 'notification',
        inactive:
            <Ionicons name="notifications-circle-outline" size={30} color="white" />,
        active:
            <Ionicons name="notifications-circle" size={30} color="#8ED1FC" />,
        },
        {
        name: 'message',
        inactive:
            <SimpleLineIcons name="envelope" size={27} color="white" />,
        active:
            <FontAwesome name="envelope" size={27} color="#8ED1FC" />,
        },
    ]

    const [activeTab, setActiveTab] = useState(bottomTabIcons[0].name)

    const Icons = ({icon}) => (
        <TouchableOpacity onPress={
            () => {
                setActiveTab(icon.name) 
            }}>
            {activeTab === icon.name ? icon.active : icon.inactive}
        </TouchableOpacity>
    )

  return (
    <View >
        <Divider
          width={1}
          orientation="vertical"
        />
        <View style={{
            flexDirection: 'row', 
            alignItems:'center', justifyContent: 
            'space-around', 
            paddingTop: 6, 
            
        }}>
            {bottomTabIcons.map((icon, index) => (
                <Icons icon={icon} key={index} />
            ))}  
        </View>
    </View>
    
  )
}

export default HomeFooter