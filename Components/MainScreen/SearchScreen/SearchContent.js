import { View, Text, TouchableOpacityBase, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from "@rneui/themed";
import { Avatar } from "@rneui/themed";
import { AntDesign } from '@expo/vector-icons';

const SearchContent = ({trends, follows}) => {
  return (
    <View style={{marginTop: 3, marginHorizontal: 20, flex: 1}}>
      <Trends trends={trends} />
      <Text style={{
        color: 'white', 
        fontSize: 25, 
        fontWeight: '600',
        marginBottom: 15, 
        marginTop: 15
        }}>
        Who to follow
      </Text>
      {follows.map((follow, index) => (
        <FollowSuggestion follow={follow} key={index} />
      ))}
      
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text style={{color: '#03A9F4', fontWeight: '600', fontSize: 17}}>Show more</Text>
            <AntDesign name="arrowright" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  )
}
const Trends = ({trends}) => {
    return (
        <View>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '600', marginBottom: 15}}>Trends for you</Text>
            {trends.map((trend, index) => (
                <View key={index}>
                    <Text style={{color: 'gray', fontWeight: '600', fontSize: 15}}>{trend.trendName}</Text>
                    <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>{trend.tag}</Text>
                    <Text style={{color: 'gray', fontWeight: '600', fontSize: 15}}>{trend.tweetNumber}</Text>
                    <Text></Text>
                </View>
            ))}
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{color: '#03A9F4', fontWeight: '600', fontSize: 17}}>Show more</Text>
                <AntDesign name="arrowright" size={20} color="gray" />
            </TouchableOpacity>
            <View style={{marginTop: 10}}>
                <Divider
                    width={1}
                    orientation="vertical"
                />
            </View>
        </View>
    )
}

const FollowSuggestion = ({follow}) => {

    const [button, setButton] = useState(styles.buttonContainer)

    const buttonChange = (event) => {
        setButton(styles.newbuttonContainer)
        if (button === styles.newbuttonContainer) {
            setButton(styles.buttonContainer)
        }
    }

    return (
        <View style={{marginTop: 15, flexDirection: 'row', alignItems: 'flex-start', marginHorizontal: 10}}>
            <TouchableOpacity>
                <Avatar
                    activeOpacity={0.5}
                    containerStyle={{ width: 50, height: 50 }}
                    rounded
                    size="large"
                    source={{ uri: follow.avatarURL }}
                />
            </TouchableOpacity>
                       
            <View style={{marginLeft: 10}}>
                {/*header */}
                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between', position: 'relative'}}>                      
                    <View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>{follow.username}</Text>
                        <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 15}}>{follow.nametag}</Text>
                    </View>

                    <TouchableOpacity 
                        style={button} 
                        onPress={() => buttonChange()} 
                        button={button} 
                        setButton={setButton}
                    >
                        <Text style={styles.buttonText}>Follow</Text>
                    </TouchableOpacity>
                        
                </View>

                {/*profile */}
                <View style={{width: '95%', marginTop: 5}}>
                    <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>{follow.profile}</Text>
                    <Text></Text>
                </View>
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'white', 
        paddingHorizontal: 30, 
        paddingVertical: 5, 
        borderRadius: 50, 
        marginLeft: 170, 
        position: 'absolute'
    }, 
    buttonText: {
        fontWeight: '600', 
        fontSize: 15, 
        textAlign: 'center'
    },
    newbuttonContainer: {
        backgroundColor: '#8ED1FC', 
        paddingHorizontal: 30, 
        paddingVertical: 5, 
        borderRadius: 50, 
        marginLeft: 170, 
        position: 'absolute'
    }
})

export default SearchContent