import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { Avatar } from "@rneui/themed";
import { useDispatch } from 'react-redux'
import { addTweet } from '../../../RN-Redux/tweetSlice';

const PlusButton = () => {

  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const [isModalVisible, setModalVisible] = useState(false)
  
  const setModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <View>
      <View>
        <TouchableOpacity
        onPress={setModal} 
        style={{
        backgroundColor: '#009CE0',
        width: 60, 
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20
      }}>
          <AntDesign name="plus" size={24} color="white" />     
      </TouchableOpacity>
      </View>
      
      <Modal isVisible={isModalVisible}
        onBackdropPress={() => setModal()}
        avoidKeyboard= {true} 
        style={{
              backgroundColor: 'black',
            }}
      >
        <View style={{width: '100%', height: '100%'}}>
          <ModalHeader 
            setModal={setModal} 
            text={text} 
            setText={setText}
            dispatch={dispatch}
          />
          <View style={{height: 1, backgroundColor: 'gray', marginTop: 10, marginBottom: 20}}></View>
          <ScrollView showsVerticalScrollIndicator={false} >
            <ModalContent 
              text={text} 
              setText={setText}
              dispatch={dispatch}
            />
          </ScrollView>
        </View>
      </Modal>
    </View>
    
  )
}

const ModalHeader = (props) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={props.setModal}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if(props.text.length > 0) {
            props.dispatch(addTweet({
              name: 'SynLink',
              profile: '@SynLink Foundation',
              URL: 'https://th.bing.com/th/id/OIP.GKC_OaM6yk7CQxhre5MNowHaG8?pid=ImgDet&rs=1',
              post: props.text,
              reply: '0',
              retweet: '0',
              likes: '0',
            }))
            props.setModal()
          }}}
        style={{
          paddingHorizontal: 15,
          paddingVertical: 4,
          backgroundColor: props.text ? '#009CE0' : '#72B8D7',
          borderRadius: 60
        }}>
          <Text style={[styles.text, {
            color: props.text ? 'white' : 'gray'
          }]}>Tweet</Text>
        </TouchableOpacity>
    </View>
  )
}

const ModalContent = (props) => {
  return (
    <View>
      <View style={{
        flexDirection: 'row', 
        alignItems: 'center'
       }}>
        <Avatar
          activeOpacity={1}
          containerStyle={{ width: 50, height: 50 }}
          rounded
          size="large"
          source={{ uri: 'https://th.bing.com/th/id/OIP.GKC_OaM6yk7CQxhre5MNowHaG8?pid=ImgDet&rs=1' }}
        />
        
        <View style={{
            flexDirection: 'row', 
            alignItems: 'center',
            borderWidth: 1.5,
            backgroundColor: 'transparent',
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderColor: '#009CE0',
            borderRadius: 40,
            marginBottom: 10,
            marginLeft: 10
          }}>
          <Text style={[styles.text, {color: '#009CE0', marginRight: 3}]}>Everyone</Text>
          <SimpleLineIcons name="arrow-down" size={16} color="#009CE0" />    
        </View>
      </View>
      <KeyboardAvoidingView style={{marginLeft: 60}}>
        <TextInput 
        placeholder="What's happening ?"
        placeholderTextColor={'gray'}
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: '700'
          }}
          multiline={true}
          autoFocus={true}
          blurOnSubmit={false}
          value={props.text}
          onChangeText={e => props.setText(e)}
      />
      </KeyboardAvoidingView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700'
  }
})

export default PlusButton