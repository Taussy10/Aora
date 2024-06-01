import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VideoCards = ({video}) => {
  return (
    <View>
      <Text style={{color:'white'}}>{video.Title}</Text>
    </View>
  )
}

export default VideoCards

const styles = StyleSheet.create({})