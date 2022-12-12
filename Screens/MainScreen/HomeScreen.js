import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeader from '../../Components/MainScreen/HomeScreen/HomeHeader'
import HomeContent from '../../Components/MainScreen/HomeScreen/HomeContent'
import { PostData } from '../../DummyData/postData'
import HomeFooter from '../../Components/MainScreen/HomeScreen/HomeFooter'
import FlashMessage from "react-native-flash-message";
import PlusButton from '../../Components/MainScreen/HomeScreen/PlusButton'
import { tweetSelectorUser } from '../../RN-Redux/tweetSlice'
import { useSelector } from 'react-redux'

const HomeScreen = () => {

  const TweetUserSelector = useSelector(tweetSelectorUser);

  const Posts = [...PostData, ...TweetUserSelector]

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          Posts.map((post, index) => (
            <HomeContent post={post} key={index}/>
          ))
        }
      </ScrollView>
      <PlusButton />           
    </View>
  )
}

export default HomeScreen

{/**

        <FlatList 
            data={Posts}
            renderItem={(post) => <HomeContent post={post}/>}
            keyExtractor={post => post.name}
          />

          for (i = arr.length -1; i < arr.length, i--) {
            return < HomeContent />
          }
*/}
