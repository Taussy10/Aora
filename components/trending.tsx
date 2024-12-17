import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trending = ({posts}) => {
  return (
 <FlatList
 data={posts}

//  keyExtractor={(item) => item.$id }
 keyExtractor={(item) => item.$1id }
horizontal={true}
 renderItem={({item}) => (
  <View>
    <Text className=' text-white'>{item.id}</Text>
    
  </View>
 )}
 />   
  )
}

export default Trending

const styles = StyleSheet.create({})