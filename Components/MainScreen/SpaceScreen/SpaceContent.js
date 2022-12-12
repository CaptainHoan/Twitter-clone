import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";
import { AntDesign } from '@expo/vector-icons';
import Reminder from '../../../SubComponents/SpaceScreen/Reminder';
import Dotbutton from '../../../SubComponents/SpaceScreen/Dotbutton';

const generateRandomColor = () => {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
} 

const SpaceContent = ({lives, calenders}) => {
  return (
    <View style={{marginHorizontal: 20}}>
        {/* <SpaceLive />*/}
        <View style={{marginBottom: 15}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '700'}}>Happening Now</Text>
            <Text style={{color: 'gray', fontSize: 15, fontWeight: '700'}}>Spaces going on right now</Text>
        </View>

        {lives.map((live, index) => (
            <SpaceLive live={live} key={index} />
        ))}
        {/* <SpaceCalendar />*/}
        <View style={{marginBottom: 15}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '700'}}>Get these in your calendar</Text>
            <Text style={{color: 'gray', fontSize: 15, fontWeight: '700'}}>People you follow will be tuning in</Text>
        </View>
        
        {calenders.map((calender, index) => (
            <SpaceCalender key={index} calender={calender} />
        ))}

    </View>
  )
}

const SpaceLive = ({live}) => {

    return (
        <View style={styles.liveContainer}>
            <View style={{paddingBottom: 25, 
                        backgroundColor: generateRandomColor(), 
                        padding: 20, 
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }}>
                {/*liveHeader */}
                <View style={styles.headerContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="radio" size={20} color="white" />
                        <Text style={{color: 'white', fontWeight: '600', fontSize: 18, marginLeft: 5}}>LIVE</Text>
                    </View>
                    <Dotbutton />
                </View>
                {/**liveTitle */}
                <Text style={styles.titleContainer}>{live.spaceTitle}</Text>
                {/**Listener */}
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar
                        activeOpacity={1}
                        containerStyle={{ width: 30, height: 30 }}
                        rounded
                        size="large"
                        source={{ 
                            uri: `https://api.lorem.space/image?w=${Math.floor(Math.random() * 1500) + 20}&h=150`
                        }}
                        />
                        <Avatar
                        activeOpacity={1}
                        containerStyle={{ width: 30, height: 30 }}
                        rounded
                        size="large"
                        source={{ 
                            uri: `https://api.lorem.space/image?w=${Math.floor(Math.random() * 1500) + 20}&h=150`
                        }}
                        />
                        <Avatar
                        activeOpacity={1}
                        containerStyle={{ width: 30, height: 30 }}
                        rounded
                        size="large"
                        source={{ 
                            uri: `https://api.lorem.space/image?w=${Math.floor(Math.random() * 1500) + 20}&h=150`
                        }}
                        />
                        <Text style={{color: 'white', fontWeight: '600', fontSize: 15, marginLeft: 10}}>{live.listener}</Text>
                    </View>

                </View>
            </View>

            <View style={{backgroundColor: generateRandomColor(), 
                        padding: 20, 
                        borderBottomLeftRadius: 20, 
                        borderBottomRightRadius: 20
                    }}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    <Avatar
                        activeOpacity={1}
                        containerStyle={{ width: 20, height: 20 }}
                        rounded
                        size="large"
                        source={{ 
                            uri: `https://api.lorem.space/image?w=${Math.floor(Math.random() * 1500) + 20}&h=150`
                        }}
                    />
                    <Text style={{color: 'white', fontWeight: '600', fontSize: 15, marginLeft: 10}}>{live.host}</Text>
                </View>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 15}}>{live.hostTitle}</Text>
            </View>
            <Text></Text>
        </View>
    )
}

const SpaceCalender = ({calender}) => {
    return (
        <View style={styles.liveContainer}>
            <View style={{paddingBottom: 25, 
                        backgroundColor: generateRandomColor(), 
                        padding: 20, 
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }}>
                <View style={styles.headerContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="calendar" size={24} color="white" />
                        <Text style={{color: 'white', fontWeight: '600', fontSize: 15, marginLeft: 5}}>{calender.spaceTime}</Text>
                    </View>
                    <Dotbutton /> 
                </View>

                <Text style={styles.titleContainer}>{calender.spaceTitle}</Text>

                <Reminder calender={calender}/>
            </View>

            <View style={{backgroundColor: generateRandomColor(), 
                        padding: 20, 
                        borderBottomLeftRadius: 20, 
                        borderBottomRightRadius: 20
                    }}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    <Avatar
                        activeOpacity={1}
                        containerStyle={{ width: 20, height: 20 }}
                        rounded
                        size="large"
                        source={{ 
                            uri: `https://api.lorem.space/image?w=${Math.floor(Math.random() * 1500) + 20}&h=150`
                        }}
                    />
                    <Text style={{color: 'white', fontWeight: '600', fontSize: 15, marginLeft: 10}}>{calender.host}</Text>
                </View>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 15}}>{calender.hostTitle}</Text>
            </View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    liveContainer: {
        //backgroundColor: generateRandomColor(), 
        marginVertical: 3
    },

    headerContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: 10
    },

    titleContainer: {
        color: 'white', 
        fontSize: 22, 
        fontWeight: '600', 
        marginBottom: 15
    }
})

export default SpaceContent

//`https://api.lorem.space/image?w=${Math.floor(Math.random() * 1500) + 20}&h=150`