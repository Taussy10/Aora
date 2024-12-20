import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
const videoSource =
  'https://cloud.appwrite.io/v1/storage/buckets/6759b43d0022c6aea369/files/6765a0c7001fe656df6a/view?project=6759ae410027ed3e1c02&project=6759ae410027ed3e1c02&mode=admin';

// const Comp = ({item}) => {
//   console.log(item , "sfdlsf");
//   const playerVar = useVideoPlayer(item.video , player => {
//     player.loop = true
//     player.play

//   })

//   return(
//     <View>
//          <VideoView style={styles.video} player={playerVar} allowsFullscreen allowsPictureInPicture />

//     </View>

//   )
// }


const VideoComp = ({posts}) => {

  // useVideoPlayer is a hook for creating a videoPlayer UI 
  // it takes two things: resource and a call back function
  // player is for configuration of the  videoPlayer
    // this player(a fun) returns an object that has some kyes  
    // such as player 
    // lastly: we are storing useVideoPlayer hook inside variable 
    // so that we can use return value of player 


  // const playerVar = useVideoPlayer(posts , player => {
  //   player.loop = true
  //   player.play

  // })

  console.log(posts.video , "vhsf");
  

  // console.log("player" , playerVar.duration);
  
  return (
    <View>
      {/* Expo also gives <VideoView/> comp for showing player in the just call playerVar function 
      it will show the videoPlayer  */}
    {/* <VideoView style={styles.video} player={playerVar} allowsFullscreen allowsPictureInPicture /> */}

      {/* <FlatList 
      data={posts}
      renderItem={({item}) => 
      // <Comp item={item} />
      }
      /> */}
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