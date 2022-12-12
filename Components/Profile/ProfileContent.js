import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Ionicons, Feather, EvilIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";
import { useSelector } from 'react-redux'
import { tweetSelector } from '../../RN-Redux/tweetSlice';

const ProfileContent = () => {

  const userProfile = useSelector(tweetSelector)
  
  return (
    <View style={{zIndex: 1}}>
      <ContentHeader />
      <View style={{height: 1, backgroundColor: 'gray', marginTop: 10}}></View>
      {userProfile.map((profile, index) => (
          <View key={index}>
            <ContentTweet 
              userName={profile.name}
              profileName={profile.profile}
              userURL={profile.URL}
              userTweet={profile.post}
              userReply= {profile.reply}
              userRetweet= {profile.retweet}
              userLikes= {profile.likes}
              userUpload={profile.upload}
            />
          </View> 
      ))}
    </View>
  )
}

const ContentHeader = () => {
  return (
    <View>
        <View style={{ marginTop: 0 }}>
          <Image 
            source={{uri: 'https://th.bing.com/th/id/OIP.ri547X8343ggZrqjx56UWAHaEK?pid=ImgDet&rs=1'}}
            style={{height: 170, width: '100%'}}
          />
        </View>
        <View style={{flexDirection: 'row', 
            alignItems: 'flex-end', 
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: -25
            }}>
            <Avatar
              activeOpacity={1}
              containerStyle={{ width: 80, height: 80 }}
              rounded
              size="large"
              source={{ uri: 'https://th.bing.com/th/id/OIP.GKC_OaM6yk7CQxhre5MNowHaG8?pid=ImgDet&rs=1' }}
            />
            <TouchableOpacity style={{
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: 'gray',
              borderRadius: 20,
              paddingHorizontal: 10,
              paddingVertical: 5
            }}>
              <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>Edit profile</Text>
            </TouchableOpacity>
          </View>

        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <Text style={[styles.text, {fontSize: 22}]}>SynLink</Text>
          <Text style={[styles.text, {color: 'gray'}]}>@SynLink Foundation</Text>
          <Text style={[styles.text, {marginTop: 10}]}>My amazing journey worldwide with en route to become React Native Developer</Text>
          <View style={{flexDirection: 'row', 
            alignItems: 'flex-end',
            marginTop: 7 
            }}>
            <Ionicons name="calendar" size={24} color="gray" />
            <Text style={[styles.text, {color: 'gray', marginLeft: 5}]}>Joined June 2022</Text>
          </View>
          <Text style={[styles.text, {marginTop: 7}]}>79 Following   4 Followers</Text>
        </View>
    </View>
  )
}

const ContentTweet = (props) => {
  return (
    <View >
      <View style={{
          marginHorizontal: 20, 
          marginTop: 15,
          flexDirection: 'row', 
          alignItems: 'flex-start', 
        }}>
        <Avatar
          activeOpacity={1}
          containerStyle={{ width: 60, height: 60 }}
          rounded
          size="large"
          source={{ uri: props.userURL }}
        />
        <View style={{marginLeft: 10, marginRight: 50}}>
          <View style={{marginBottom: 6}}>
            <Text style={styles.text}>
              {props.userName} {''} <Text style={{color: 'gray', 
                fontSize: 17, 
                fontWeight: '700'}}>{props.profileName}</Text>
            </Text>
          </View>
            
          <Text style={[styles.text]}>
            {props.userTweet}
          </Text>

          <Image 
              source={{uri: props.userUpload}}
              style={props.userUpload ? styles.postImage : null}
            />

          <View style={{flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginTop: 7,
            }}>
            { props.userReply >= '0' 
            && <View style={styles.container}>
              <TouchableOpacity>
                <Feather name="message-circle" size={22} color="gray" style={{marginRight: 5}}/>
              </TouchableOpacity>
              {props.userReply > '0' && <Text style={styles.textFooter}>{props.userReply}</Text>}
            </View>
            }

            { props.userRetweet >= '0' 
            && <View style={styles.container}>
              <TouchableOpacity>
                <EvilIcons name="retweet" size={32} color='gray' style={{marginRight: 5}}/>
              </TouchableOpacity>
              {props.userRetweet > '0' && <Text style={styles.textFooter}>{props.userRetweet}</Text>}
            </View>
            }
            
            { props.userLikes >= '0' 
            && <View style={styles.container}>
              <TouchableOpacity>
                <AntDesign name='hearto' size={20} color='gray' style={{marginRight: 5}}/>
              </TouchableOpacity>
              {props.userLikes > '0' && <Text style={styles.textFooter}>{props.userLikes}</Text>}
            </View>
            }
            
            { props.userTweet 
            && <TouchableOpacity>
              <Feather name="upload" size={22} color="gray" />
            </TouchableOpacity>
            }
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white', 
    fontSize: 17, 
    fontWeight: '700'
  },
  textFooter: {
    color: 'gray', 
    fontSize: 16, 
    fontWeight: '800'
  },
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-evenly'
  },
  postImage: {
      flex: 1,
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      borderRadius: 20,
      marginTop: 5
  }
})

export default ProfileContent