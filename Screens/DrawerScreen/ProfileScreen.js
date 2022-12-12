import { View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { Ionicons } from '@expo/vector-icons';
import ProfileContent from '../../Components/Profile/ProfileContent';


const ProfileScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false, 
      /*header: () => (
        <>
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            position: 'relative',
            marginTop: -130
            }}>
            <TouchableOpacity style={{marginLeft: 20}}
              onPress={() => navigation.navigate('MainScreenNavigation')}
             > 
              <Ionicons name="ios-arrow-back-circle-outline" size={33} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 20}}>
              <Ionicons name="search-circle-outline" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </>
      ),)
      headerStyle: {backgroundColor: 'red'},
      headerTintColor: 'white',
      headerTitle: () => null, 
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 20}}>
          <Ionicons name="search-circle-outline" size={35} color="white" />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 20}}
          onPress={() => navigation.navigate('MainScreenNavigation')}
        > 
          <Ionicons name="ios-arrow-back-circle-outline" size={33} color="white" />
        </TouchableOpacity>
      )*/
      header: () => null
    })
  }, [])

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginTop: 30,
            position: 'absolute',
            zIndex: 100,
            backgroundColor: 'transparent'            
            }}>
            <TouchableOpacity style={{marginLeft: 20, marginRight: 280}}
              onPress={() => navigation.navigate('MainScreenNavigation')}
             > 
              <Ionicons name="ios-arrow-back-circle-outline" size={33} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 20}}>
              <Ionicons name="search-circle-outline" size={35} color="white" />
            </TouchableOpacity>
          </View>  
          <ProfileContent />
        </ScrollView>
    </View>
  )
}

export default ProfileScreen