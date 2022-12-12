import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";
import Modal from "react-native-modal";
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HomeHeader = ({navigation}) => {


  const [isModalVisible, setModalVisible] = useState(false)
  
  const setModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <View style={{flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      paddingHorizontal: 20, 
      paddingBottom: 10,
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
    
        <Image
          style={{width: 33, height: 33, resizeMode: 'contain'}}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'}}
        />
        <View>
          <TouchableOpacity onPress={setModal}>
            <MaterialCommunityIcons name="star-box-multiple-outline" size={30} color="white" />
          </TouchableOpacity>

          <Modal isVisible={isModalVisible}
            style={{
              backgroundColor: 'black',
              marginHorizontal: 0,
              marginTop: 350,
              marginBottom: -10,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }}
            onBackdropPress={() => setModal()}
          >
              <View style={{
                marginHorizontal: 20               
              }}>
                <MaterialCommunityIcons name="map-clock" size={40} color="#1273DE" 
                  style={{
                    alignSelf: 'center', 
                    marginBottom: 25
                  }} 
                />

                <Text style={{
                  color: 'white',
                  fontSize: 25,
                  lineHeight: 35,
                  marginBottom: 20
                }}>Your time line shows the latest Tweets</Text>

                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                  <Octicons name="arrow-switch" size={24} color="gray" style={{marginRight: 20}}/>
                  <View>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>Switch to Home</Text>
                    <Text style={{color: 'gray', fontSize: 15, fontWeight: '600'}}>Home Tweets are recommended for you</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 25}}>
                  <AntDesign name="setting" size={24} color="gray" style={{marginRight: 17}}/>
                  <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>View content prefrences</Text>
                </View>

                <TouchableOpacity 
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    backgroundColor: 'transparent',
                    borderRadius: 50,
                    paddingVertical: 10
                  }}
                  onPress={setModal}
                >
                  <Text style={{color: 'white', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Cancel</Text>
                </TouchableOpacity>
              </View>
          </Modal>
        </View>   
    </View>
  )
}

export default HomeHeader