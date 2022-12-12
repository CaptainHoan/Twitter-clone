import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import SpaceScreen from './SpaceScreen';
import NotificationScreen from './NotificationScreen'
import MessageScreen from './MessageScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import SearchHeader from '../../Components/MainScreen/SearchScreen/SearchHeader';
import HomeHeader from '../../Components/MainScreen/HomeScreen/HomeHeader';
import SpaceHeader from '../../Components/MainScreen/SpaceScreen/SpaceHeader';
import NotificationHeader from '../../Components/MainScreen/NotificationScreen/NotificationHeader';
import MessageHeader from '../../Components/MainScreen/MessageScreen/MessageHeader';


const Tab = createMaterialBottomTabNavigator()

const MainScreenNavigation = ({navigation}) => {

  return (
    
        <Tab.Navigator
            initialRouteName='HomeScreen'
            screenOptions={({route}) => ({
              showIcon: true  
            })}
            activeColor="#8ED1FC"
            inactiveColor="white"
            barStyle={{ 
              backgroundColor: 'black',
              height: 50,
              paddingTop: 0
            }}
        >
            <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} 
              options={({navigation}) => ({
                tabBarIcon: ({color}) => (
                  <FontAwesome name="home" size={28} color={color} style={{marginBottom: -10}}/>
                ),
                tabBarLabel: () => null,

              })}
            />
            <Tab.Screen name="SearchStackScreen" component={SearchStackScreen} 
              options={({}) => ({
                tabBarIcon: ({color}) => (
                  <FontAwesome name="search" size={26} color={color} style={{marginBottom: -10}}/>
                ),
                tabBarLabel: () => null,
              })}
            />
            <Tab.Screen name="SpaceStackScreen" component={SpaceStackScreen} 
              options={{
                tabBarIcon: ({color}) => (
                  <Ionicons name="md-mic-circle" size={28} color={color} style={{marginBottom: -10}}/>
                ),
                tabBarLabel: () => null
              }}
            />
            <Tab.Screen name="NotificationStackScreen" component={NotificationStackScreen} 
              options={{
                tabBarIcon: ({color}) => (
                  <Ionicons name="notifications-circle" size={28} color={color} style={{marginBottom: -10}}/>
                ),
                tabBarLabel: () => null
              }}
            />
            <Tab.Screen name="MessageStackScreen" component={MessageStackScreen} 
              options={{
                tabBarIcon: ({color}) => (
                  <FontAwesome name="envelope" size={24} color={color} style={{marginBottom: -10}}/>
                ),
                tabBarLabel: () => null
              }}
            />         
        </Tab.Navigator>
    
  )
}


const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const SpaceStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const MessageStack = createStackNavigator();


const globalScreenOptions =  {
  headerShown: false
}

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
            initialRouteName='HomeScreen'
            
        >           
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} 
              options={{
                header: () => <HomeHeader navigation={navigation} />,
                headerTitle: () => null,
              }}
            />
    </HomeStack.Navigator>
  )
}
const SearchStackScreen = ({navigation}) => {
  return (
    <SearchStack.Navigator
            initialRouteName='SearchScreen'
            
        >           
            <SearchStack.Screen name="SearchScreen" component={SearchScreen} 
              options={{
                header: () => <SearchHeader navigation={navigation} />,
                headerTitle: () => null
              }}
            />
    </SearchStack.Navigator>
  )
}
const SpaceStackScreen = ({navigation}) => {
  return (
    <SpaceStack.Navigator
            initialRouteName='SpaceScreen'
            
        >           
            <SpaceStack.Screen name="SpaceScreen" component={SpaceScreen} 
              options={{
                header: () => <SpaceHeader navigation={navigation} />,
                headerTitle: () => null
              }}
            />
    </SpaceStack.Navigator>
  )
}
const NotificationStackScreen = ({navigation}) => {
  return (
    <NotificationStack.Navigator
            initialRouteName='NotificationScreen'
            
        >           
            <NotificationStack.Screen name="NotificationScreen" component={NotificationScreen} 
              options={{
                header: () => <NotificationHeader navigation={navigation} />,
                headerTitle: () => null
              }}
            />
    </NotificationStack.Navigator>
  )
}
const MessageStackScreen = ({navigation}) => {
  return (
    <MessageStack.Navigator
            initialRouteName='MessageScreen'            
        >           
            <MessageStack.Screen name="MessageScreen" component={MessageScreen} 
              options={{
                header: () => null,
                headerTitle: () => null,
              }}
            />
    </MessageStack.Navigator>
  )
}

export default MainScreenNavigation