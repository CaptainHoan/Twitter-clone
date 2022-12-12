import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from "@rneui/themed";
import React from 'react'
import { 
  createDrawerNavigator, 
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} 
from '@react-navigation/drawer'
import ProfileScreen from './ProfileScreen'
import Bookmarks from './Bookmarks'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import MainScreenNavigation from '../MainScreen/MainScreenNavigation'
import { 
  FontAwesome, 
  AntDesign, 
  Ionicons, 
  Feather,
  MaterialCommunityIcons,
  FontAwesome5 
} from '@expo/vector-icons';
import DrawerHeader from '../../Components/DrawerScreen.js/Drawer/DrawerHeader';
import ListScreen from './ListScreen';
import TopicScreen from './TopicScreen';
import MomentScreen from './MomentScreen';
import PurchaseScreen from './PurchaseScreen';
import MonetizationScreen from './MonetizationScreen';
import TwitterPro from './TwitterPro';
import SettingScreen from './SettingScreen';
import HelpScreen from './HelpScreen';
import DrawerFooter from '../../Components/DrawerScreen.js/Drawer/DrawerFooter';
import { Drawer } from 'react-native-paper'

const MainDrawer = createDrawerNavigator()

const globalScreenOptions =  {
  headerShown: false
}

export const HeaderLeft = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Avatar
            activeOpacity={0.5}
            containerStyle={{ backgroundColor: "#BDBDBD", width: 32, height: 32 }}
            rounded
            size="large"
            source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABlBMVEXJycmcnJyshIZ4AAAB7ElEQVR4nO3bUW7DMAwEUfv+ly4SGEXQ2kksk1xqPXMCvj8BIpeFiIiIiIiIiIiIiIiIiKio9TX1MIOt+6nHOtcBYjbMB8YklC8UM1i+ZjSnnHL0lZxkdKUMMFpSBh3tJMOOXpILjFaUi442ksuOJpIARwtJiKOBJMihl7hAwhxiSaBDKgl1KCUukGCHThIOEUniHRpIgkMjcYGkOBQSIM0kWQ4g3RzVEiBApnPUSoAAAaJzVEqAAAECBAgQIECAzCopdAABAkQoKXUAATKfpNjhA7H5Q+RXtx3EZvPBB2KzHeSzr+WzQWez0+gDsdn79dnE9tmN94HY3I/4XPT43Fj5XL353CEuNpehi8+trs/19GJzz74MSNQDH2fCeGTCeGTCeOah2LJA/OZgICIioq35nygOr9+Phhk0JxCNMQOKhpZhRS/LRUYTSoCigyWMoaWEMnSUcIaGksIQUNIcRjvlhZRkR5UknVFEKXHkS4oY6ZRCR6qk1JEoKXakScodSRKBI0MiYSRQZI5gidARK3GBSB2BErEjTKJmrEESNeKZiyNCohZsuTguS9TjvwSkmeOSRD36n4CoB//X3SHqsXe6N0Q99G53hqhHPghIt1wc5yXqeQ+7K0Q97puAdOueEPWwbwPSLSDd2p34B3GsN/j6gvMWAAAAAElFTkSuQmCC" }}
            titleStyle={{}}
            />
        </TouchableOpacity>
    </View>
  )
}

const DrawerNavigation = ({navigation}) => {

  return (
    
        <MainDrawer.Navigator 
          initialRouteName='MainScreenNavigation'
          screenOptions={({route, navigation}) => ({
              drawerType: 'slide',
              drawerStyle: {
                backgroundColor: 'black'
              },
              drawerLabelStyle: {
                color: "white",
                fontSize: 18
              },
              drawerIcon: () => {
                if (route.name === 'Profile') {
                  return <Feather name="user" size={24} color="white" />
                } else if (route.name === 'Lists') {
                  return <AntDesign name="profile" size={24} color="white" />
                } else if (route.name === 'Topics') {
                  return <Feather name="message-circle" size={24} color="white" />
                } else if (route.name === 'Bookmarks') {
                  return <Ionicons name="bookmark-outline" size={24} color="white" />
                } else if (route.name === 'Moments') {
                  return <MaterialCommunityIcons name="lightning-bolt-outline" size={24} color="white" />
                } else if (route.name === 'Purchases') {
                  return <AntDesign name="shoppingcart" size={24} color="white" />
                } else if (route.name === 'Monetization') {
                  return <FontAwesome name="money" size={24} color="white" />
                } else if (route.name === 'Twitter for Pros') {
                  return <Ionicons name="md-rocket-outline" size={24} color="white" />
                } else if (route.name === 'Bookmarks') {
                  return <Ionicons name="bookmark-outline" size={24} color="white" />
                } else if (route.name === 'Bookmarks') {
                  return <Ionicons name="bookmark-outline" size={24} color="white" />
                } 
              },
              drawerActiveTintColor: 'black',
              //overlayColor: 'transparent' 
          })}
          drawerContent= {props => <CustomeDrawer {...props}/>
          }
          DrawerItem = {() => <DrawerItemList navigation={navigation} />}
          overlayColor="transparent"
          hideStatusBar = {false}
        >
            <MainDrawer.Screen name="Profile" component={ProfileScreen} />
            <MainDrawer.Screen name="Lists" component={ListScreen} />
            <MainDrawer.Screen name="Topics" component={TopicScreen} />
            <MainDrawer.Screen name="Bookmarks" component={Bookmarks} />
            <MainDrawer.Screen name="Moments" component={MomentScreen} />
            <MainDrawer.Screen name="Purchases" component={PurchaseScreen} />
            <MainDrawer.Screen name="Monetization" component={MonetizationScreen} />
            <MainDrawer.Screen name="Twitter for Pros" component={TwitterPro}/>
            <MainDrawer.Screen name="Settings and privacy" component={SettingScreen} />
            <MainDrawer.Screen name="Help Center" component={HelpScreen} />
            <MainDrawer.Screen name="MainScreenNavigation" component={MainScreenNavigation} 
              options={{
                header: () => null,
                drawerLabelStyle: {
                  color: "black"
                },
                drawerActiveTintColor: 'black',
                drawerActiveBackgroundColor: 'black'
              }}
            />
        </MainDrawer.Navigator>
    
    
  )
}

const CustomeDrawer = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerHeader {...props}/>
      <DrawerContentScrollView {...props} >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerFooter {...props}/>
    </View>     
  )
}

export default DrawerNavigation;