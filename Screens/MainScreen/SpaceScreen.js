import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SpaceHeader from '../../Components/MainScreen/SpaceScreen/SpaceHeader'
import SpaceContent from '../../Components/MainScreen/SpaceScreen/SpaceContent'
import { spaceCalender, spaceLive } from '../../DummyData/spaceData'
import HomeFooter from '../../Components/MainScreen/HomeScreen/HomeFooter'
import FlashMessage from "react-native-flash-message";
import SpaceButton from '../../Components/MainScreen/SpaceScreen/SpaceButton'

const SpaceScreen = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1, paddingTop: 25}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SpaceContent lives={spaceLive} calenders={spaceCalender} />
      </ScrollView>
      <SpaceButton />     
    </View>
  )
}

export default SpaceScreen