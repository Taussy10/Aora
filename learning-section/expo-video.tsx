import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
const videoSource =
  'https://cloud.appwrite.io/v1/storage/buckets/6759b43d0022c6aea369/files/6765a0c7001fe656df6a/view?project=6759ae410027ed3e1c02&project=6759ae410027ed3e1c02&mode=admin';




const VideoComp = ({posts}) => {

  // useVideoPlayer is a hook for creating a videoPlayer UI 
  // it takes two things: resource(should be always mp4(you can try other other formats but that 
  // must be a video format (don't try with youtube video link (I was trying lol)) )) and a call back function
  // player is for configuration of the  videoPlayer
    // this player(a fun) returns an object that has some kyes  
    // such as player 
    // lastly: we are storing useVideoPlayer hook inside variable 
    // so that we can use return value of player 


  // const playerVar = useVideoPlayer(videoSource , player => {
  //   player.loop = true
  //   player.play

  // })

  
  

  // console.log("player" , playerVar.duration);
  
  return (
    <View>
      {/* Expo also gives <VideoView/> comp for showing player in the just call playerVar function 
      it will show the videoPlayer  */}
    {/* <VideoView style={styles.video} player={playerVar} allowsFullscreen allowsPictureInPicture /> */}

    
    </View>
  )
}

export default VideoComp

const styles = StyleSheet.create({
  video: {
    width: 350,
    height: 275,
  },
})