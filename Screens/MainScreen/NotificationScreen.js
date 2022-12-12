import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import NotificationHeader from '../../Components/MainScreen/NotificationScreen/NotificationHeader'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { allNote } from '../../DummyData/notificationData'
import PlusButton from '../../Components/MainScreen/HomeScreen/PlusButton';

/*const Notification = () => {

    const [activeTab, setActiveTab] = useState('All')
    return (
        <View style={{marginHorizontal: 20,}}>
            <View style={{
                flexDirection: 'row', 
                alignSelf: 'center', 
                justifyContent: 'space-around'
            }}>
                {/**<AllButton />
                    <MentionButton />
                *
            
                    <HeaderButton 
                        text="All" 
                        color='white'
                        bbColor= '#0693E3'
                        bbWidth = {2}
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab}
                    />
                                   
                    <HeaderButton 
                        text="Mentions" 
                        color='gray'
                        bbColor= 'black'
                        bbWidth = {2} 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab}
                    />
                               
            </View>

            

        </View>
    )
}

const HeaderButton = (props) => {

    return (
        
        <TouchableOpacity 
            style={{
                paddingHorizontal: 25,
                paddingVertical: 10,
                borderBottomColor: props.activeTab === props.text ? '#0693E3' : 'black',
                borderWidth: props.bbWidth,
                marginHorizontal: 30

            }}
            onPress={() => {
                props.setActiveTab(props.text)
            }}
        >
            <Text style={{
                color: props.activeTab === props.text ? 'white' : 'gray', 
                fontSize: 20, 
                fontWeight: '700'
            }}>
                {props.text}
            </Text>
        </TouchableOpacity>
             
    )
}*/

const AllContent = () => {

  const myItemSeparator = () => {
      return (
      <Text style={{ color: "white", fontSize: 20, marginRight: 5 }}>,</Text>
  )}

  return (
      <View style={{
          flexDirection: 'row', 
          alignItems: 'flex-start', 
          paddingTop: 20,
          backgroundColor: 'black', 
          flex: 1,
          paddingHorizontal: 20
        }}>
          <Ionicons name="ios-notifications" size={30} color="#0693E3" style={{marginRight: 10}} />
          <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {allNote.map((note, index) => (
                      <Avatar
                          activeOpacity={0.5}
                          containerStyle={{ width: 40, height: 40 }}
                          rounded
                          size="large"
                          source={{ uri: note.userURL }}
                          key={index}
                      />
                  ))}
              </View>
              <Text style={{
                  color: 'white', 
                  fontWeight: '400', 
                  fontSize: 17,
                  
              }}>
                  New Tweet notifications from 
                  <FlatList
                      ItemSeparatorComponent={myItemSeparator} 
                      data={ allNote }
                      horizontal
                      renderItem={({item}) => (
                          <View style={{flex: 1, flexWrap: 'wrap'}}>
                              <Text style={{
                                  color: 'white', 
                                  fontWeight: '700', 
                                  fontSize: 17,
                                  marginLeft: 0
                              }}>
                                  {item.userName}
                              </Text>
                          </View>
                      )}
                  />
              </Text>
          </View>
      </View>
  )
}

const MentionContent = () => {
  return (
      <View style={{
          paddingHorizontal: 20,
          paddingTop: 80,
          backgroundColor: 'black', 
          flex: 1
        }}>
          <Image
              style={{width: 150, 
                  height: 150, 
                  resizeMode: 'contain', 
                  alignSelf: 'center', 
                  marginBottom: 20
              }}
              source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'
              }}
          />
          <Text style={{color: 'white', fontSize: 30, fontWeight: '700', marginBottom: 8, textAlign:'center'}}>Join the conversation</Text>
          <Text style={{color: 'gray', fontSize: 17, fontWeight: '700'}}>
              When someone on Twitter mentions you in a Tweet or reply, you'll find it here
          </Text>
      </View>
  )
}

const Tab = createMaterialTopTabNavigator();

const NotificationContent = () => {

    return (
            <Tab.Navigator
            initialRouteName='All'
            screenOptions={({route}) => ({
                tabBarStyle: { 
                    backgroundColor: 'black',
                    //paddingHorizontal:5,
                    marginHorizontal: 40
                },
                tabBarLabelStyle: { 
                    fontSize: 12, 
                    fontSize: 15, 
                    fontWeight: '700',
                    
                },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray'   
            })}    
            >
                <Tab.Screen name="All" component={AllContent} />
                <Tab.Screen name="Mentions" component={MentionContent} />
            </Tab.Navigator>
        
    );
};

const NotificationScreen = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1, paddingTop: 25}}>
      <NavigationContainer independent={true}>
        <NotificationContent />       
      </NavigationContainer>
      <PlusButton />
    </View>
  )
}

export default NotificationScreen