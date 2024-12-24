import { FlatList, ImageBackground, StyleSheet, Text, Image , TouchableOpacity, View, Dimensions } from 'react-native'
import React,{useState} from 'react'
import * as Animatable from 'react-native-animatable';
import { icons } from '~/constants';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from  'expo-video';





const zoomIn = {
  0:{
    scale:0.9
  },
  1:{
    scale:1.1
  },
}

const zoomOut = {
  0:{
    scale:1
  },
  1:{
    scale:0.9
  },
}

const TrendingItem = ({ activeItem, playingItem, item, setPlayingItem }) => {
  // for checking video Playing or not
  const [play, setPlay] = useState(false)
  const isPlaying = playingItem === item.$id; // Check if this item is currently playing

   
  // console.log("activeItem & item : ",activeItem.$id , item.$id);

  const player = useVideoPlayer(item.video, (player) => {
    player.loop = true;
    player.play();
  });
  // console.log("item.video from trending :",item);
  
  return(
    <Animatable.View
    className="mr-5"
    animation={activeItem === item.$id ? zoomIn : zoomOut}
    
    duration={500}
    // miliseconds
    >
 {
isPlaying ? (
    // <Text className=' text-white'> Playing</Text>
    <VideoView
     contentFit= 'cover'
     
    // why className isn't working ? expo-video is new tool in expo that's why it 
    // might not supportable by nativewind 
    // className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
    style={{
      width: 208 ,
      height: 288,
      borderRadius: 27
    }}
    nativeControls={false}
   allowsFullscreen 
   allowsPictureInPicture
   startsPictureInPictureAutomatically
    player={player}

    
     
    />
  ):
  <TouchableOpacity
  className="relative flex justify-center items-center"
  activeOpacity={0.7}
  onPress={() => setPlayingItem(item.$id)} // Start playing this video
  // why in arrow function cause  we have to return something need to write in arrow function
  // otherwise you could use this 
  // onPress={setPlay(true)}
  >
    <ImageBackground 
    source={{uri: item.thumbnail}}
    className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
    resizeMode= 'cover'
    />

    <Image 
     
     source={icons.play}
     className="w-12 h-12 absolute"
    resizeMode= "contain" 
       />

  </TouchableOpacity>
 }
    </Animatable.View>
  )
}
const Trending = ({posts}) => {
  // posts[0] means that I nedd 1st index posts (now what's post and what data is coming ? check from where posts is coming )
  // const activeItem = posts[0]
  const [activeItem, setActiveItem] = useState(posts[0]); // Store the string ID
  const [playingItem, setPlayingItem] = useState(null) // for tracking item playing

  // console.log("posts from trending " ,posts );
  
  // fn provides so we have to {destructure}
//   getting viewableItems (basially those are 70% visible)
  const viewableItemsChanged = ({viewableItems}) => {
    // console.log("VisiableItems from trending :" , viewableItems);
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
      // if playingItem === null and viewableItems[0].key is not matching with playing item 
      if (playingItem && viewableItems[0].key !== playingItem) {
        setPlayingItem(null);
      }
    }
    
   
    

  }
  return (
 <FlatList
 data={posts}
 showsHorizontalScrollIndicator={false}

//  keyExtractor={(item) => item.$id }
 keyExtractor={(item) => item.$id }
horizontal={true}
onViewableItemsChanged={viewableItemsChanged}
viewabilityConfig={{
  itemVisiblePercentThreshold: 70 // if item is 70% then count it as Viewable item otherwise  it's a non-Viewable
}}
contentOffset={{x:170 ,y: 0}}
 renderItem={({item}) => (
  // in this we  also we can create comps
  // these are just props that will be recived by TrendingItem comp
 <TrendingItem activeItem= {activeItem} item={item}  playingItem={playingItem}        
    setPlayingItem={setPlayingItem}
 />
 )}
 />   
  )
}

export default Trending

// import React, { useRef } from 'react';
// import { FlatList, Text, View } from 'react-native';

// const Trending = () => {
//   const onViewableItemsChanged = ({ viewableItems, changed }) => {
//     console.log("Viewable Items:", viewableItems);
//     console.log("Changed Items:", changed);
//   };

//   const viewabilityConfig = {
//     itemVisiblePercentThreshold: 100, // Item must be at least 50% visible
//   };

//   const viewabilityConfigCallbackPairs = useRef([
//     { viewabilityConfig, onViewableItemsChanged }
//   ]);

//   const data = [
//     { id: '1', title: 'Item 1' },
//     { id: '2', title: 'Item 2' },
//     { id: '3', title: 'Item 3' },
//     { id: '4', title: 'Item 4' },
//     { id: '5', title: 'Item 1' },
//     { id: '6', title: 'Item 2' },
//     { id: '7', title: 'Item 3' },
//     { id: '8', title: 'Item 4' },
//     { id: '9', title: 'Item 1' },
//     { id: '10', title: 'Item 2' },
//     { id: '11', title: 'Item 3' },
//     { id: '12', title: 'Item 4' },
//     { id: '13', title: 'Item 1' },
//     { id: '14', title: 'Item 2' },
//     { id: '15', title: 'Item 3' },
//     { id: '16', title: 'Item 4' },
//   ];

//   return (
//     <FlatList
//       data={data}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <View style={{ height: 100, justifyContent: 'center' }}>
//           <Text>{item.id}</Text>
//         </View>
//       )}
//       onViewableItemsChanged={onViewableItemsChanged}
//       viewabilityConfig={viewabilityConfig}
//     />
//   );
// };

// export default Trending;
