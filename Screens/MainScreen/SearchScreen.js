import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SearchHeader from '../../Components/MainScreen/SearchScreen/SearchHeader'
import SearchContent from '../../Components/MainScreen/SearchScreen/SearchContent'
import { trends } from '../../DummyData/trendData'
import { follows } from '../../DummyData/follows'
import HomeFooter from '../../Components/MainScreen/HomeScreen/HomeFooter'
import PlusButton from '../../Components/MainScreen/HomeScreen/PlusButton'

const SearchScreen = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1, paddingTop: 25}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchContent trends={trends} follows={follows} />
      </ScrollView>
      <PlusButton />
    </View>
  )
}

export default SearchScreen