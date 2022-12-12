import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Divider } from "@rneui/themed";
import { Avatar } from "@rneui/themed";
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { Entypo } from '@expo/vector-icons';
import UploadShare from '../../../SubComponents/HomeScreen/UploadShare';
import ImageShare from '../../../SubComponents/HomeScreen/ImageShare';
import { useDispatch } from 'react-redux'
import { addTweet, removeTweet } from '../../../RN-Redux/tweetSlice';

const HomeContent = ({post}) => {
  const dispatch = useDispatch()
  return (
    <View style={{marginBottom: 10}} >
      <View style={{marginBottom: 20}}>
        <Divider
          width={0.5}
          orientation="vertical"
        />
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20, alignItems: 'flex-start'}}>
        <PostUser post={post} />
        <View style={{marginRight: 50}} >
          <PostHeader post={post} dispatch={dispatch}/>
          <PostTweet post ={post} dispatch={dispatch}/>
          <PostFooter post={post} dispatch={dispatch} />
        </View>
      </View>
    </View>
  )
}

const PostUser = ({post, ...props}) => {
  return (
    <View style={{marginRight: 10}}>
      <Avatar
        activeOpacity={0.5}
        containerStyle={{ width: 50, height: 50 }}
        rounded
        size="large"
        source={{ uri: post.URL }}
      />
    </View>
  );
};

const PostHeader = ({post, ...props}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        {post.name}
        {' '}
        <Text style={{color: 'gray'}}>{post.profile}</Text>
      </Text>
    </View>
  )
}

const PostTweet = ({post, ...props}) => {
  return (
    <View style={{marginRight: 10, marginBottom: 10}}>
      <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>{post.post}</Text>
      <ImageShare post={post} />
    </View>
  )
}

const PostFooter = ({post, ...props}) => {

  const [isModalVisible, setModalVisible] = useState(false)
  
  const setModal = () => {
    setModalVisible(!isModalVisible)
  }

  const [reTweet, setReTweet] = useState('gray')
  const [reTweetNumber, setReTweetNumber] = useState(post.retweet)
  const [reTweetNumberColor, setReTweetNumberColor] = useState('gray')
  const [modalRetweet, setModalRetweet] = useState('gray')
  const [textRetweet, setTextReTweet] = useState('white')
  const [undoRetweet, setundoRetweet] = useState('Retweet')

  const setModalColor = () => {
    if (modalRetweet === 'gray') {
      setModalRetweet('red')
      setTextReTweet('red')
      setundoRetweet('Undo Retweet')
      setModalVisible(!isModalVisible)
      setReTweet('#01FF80')
      setReTweetNumber(parseInt(post.retweet) + 1)
      setReTweetNumberColor('#01FF80')
      props.dispatch(addTweet({
        name: post.name,
        profile: post.profile,
        URL: post.URL,
        post: post.post,
        reply: post.reply, 
        retweet: parseInt(post.retweet) + 1,
        likes: post.likes,
        upload: post.postImage
      }))
    }
    //I dont know but this is fucking bullshit to write a lot of useState Hooks like this
    if (modalRetweet === 'red') {
      setModalRetweet('gray')
      setTextReTweet('white')
      setundoRetweet('Retweet')
      setReTweet('gray')
      setReTweetNumber(post.retweet)
      setReTweetNumberColor('gray')
      props.dispatch(removeTweet({
        name: post.name,
      }))
    }
  }

  const [likeName, setLikeName] = useState('hearto')
  const [likeColor, setLikeColor] = useState('gray')
  const [likeNumberColor, setLikeNumbeColor] = useState('gray')
  const [likeNumber, setLikeNumber] = useState(post.likes)

  const changeLikes = () => {
    setLikeName('heart')
    setLikeColor('red')
    setLikeNumbeColor('red')
    setLikeNumber(parseInt(post.likes) + 1)
    if (likeColor === 'red') {
      setLikeName('hearto')
      setLikeColor('gray')
      setLikeNumbeColor('gray')
      setLikeNumber(post.likes)
    }
  }

  const [isLiked, setIsLiked] = useState(false)

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 25}} >
        <TouchableOpacity style={{marginRight: 3}}>
          <Feather name="message-circle" size={20} color="gray" />
        </TouchableOpacity>
        {post.reply > '0' && <Text style={{color: 'gray', fontSize: 13, fontWeight: '700'}}>{post.reply}</Text>}
      </View>

        {/**Retweet Modal */}
       <View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 25}}>
          <TouchableOpacity style={{marginRight: 3}} onPress={setModal}>
            <EvilIcons name="retweet" size={30} color={reTweet} />
          </TouchableOpacity>
           <Text style={{color: reTweetNumberColor, fontSize: 13, fontWeight: '700'}}>{reTweetNumber}</Text>
        </View>

        <Modal isVisible={isModalVisible} onBackdropPress={() => setModal()}
          style={{
              backgroundColor: 'black',
              marginHorizontal: 0,
              marginTop: 500,
              marginBottom: -10,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }}
          >
          <View style={{
                marginHorizontal: 30               
              }}>

            <TouchableOpacity 
              style={{flexDirection: 'row', alignItems: 'center', marginBottom: 25}}
              onPress={() => {
                setModalColor()
                setModal()
              }}
            >
              <EvilIcons name="retweet" size={40} color={modalRetweet} style={{marginRight: 10}}/>
              <Text style={{color: textRetweet, fontSize: 18, fontWeight: '600'}}>{undoRetweet}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginBottom: 40}}>
              <Entypo name="pencil" size={28} color="gray" style={{marginRight: 18}} />
              <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>Quote Tweet</Text>
            </TouchableOpacity>
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

      {/** Likes Modal */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 25}}>
        <TouchableOpacity 
          style={{marginRight: 8}}
          onPress={() => {
            changeLikes();
            setIsLiked(!isLiked)
            }} 
        >
            <AntDesign name={likeName} size={18} color={likeColor} />
        </TouchableOpacity>       
         <Text style={{color: likeNumberColor, fontSize: 13, fontWeight: '700'}}>
          {likeNumber}
        </Text>
      </View>

      <View>
        <UploadShare post={post}/>
      </View>
    </View>   
  )
}

export default HomeContent
