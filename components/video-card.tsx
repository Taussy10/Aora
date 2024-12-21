import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { icons } from '~/constants';
import { useVideoPlayer, VideoView } from 'expo-video';

type propsType = {};
// // destructure the video object
// // creator is also an object inside the object(just see the data)
// const VideoCard = ({video: {title , creator , thumbnail , prompt ,video ,
//      creator:{username , avatar}}}) => {
// // we don't want to play every vidoe so will track them by usestate
//  const [play, setPlay] = useState(false)

//  const player = useVideoPlayer(video, (player) => {
//      player.loop = true;
//      player.play();
//    });
//   return (
//     // for the centering(just remove flex-col , items-center just remove it I don't they are in use)
//     //  and and giving px and mb
//     <View className=" flex-col items-center px-4 mb-14 bg-green-500 ">

//         {/* then for the avatar + title + username VS icon */}
//       {/* <View className="flex-row gap-3 items-start bg-blue-500"> */}
//       <View className="flex-row gap-3 items-start ">

//              {/* then for title VS username */}
//       <View className=" justify-center items-center flex-row flex-1 bg-orange-500">

//     {/* For the Image container  */}
//       <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
//         <Image  source={{uri: avatar}}
//         resizeMode='cover'
//         // resizeMode= 'contain'
//         className="w-full h-full rounded-lg"

//         />
//       </View>

//           <View className="flex justify-center flex-1 ml-3 gap-y-1">
//         <Text
//         className="font-psemibold text-sm text-white"
//         numberOfLines={1} //if the text is longer than width of screen then ...(will render)
//         >
//             {title}
//         </Text>
//         <Text
//           className="text-xs text-gray-100 font-pregular"
//           numberOfLines={1}
//         >
//             {username}
//         </Text>
//       </View>
//         </View>

//         <View className="pt-2">
//           <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
//         </View>
//         </View>

//      {/* check play or not */}
//      {
//         play ? (
//               <VideoView
//                 contentFit= 'cover'

//                // why className isn't working ? expo-video is new tool in expo that's why it
//                // might not supportable by nativewind
//                // className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
//                style={{
//                  width: "100%" ,
//                  height: 240,
//                  borderRadius: 10
//                }}
//                nativeControls={true}
//               allowsFullscreen
//               allowsPictureInPicture
//               startsPictureInPictureAutomatically
//                player={player}

//   />
//         ): (
//             <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={() => setPlay(true)}
//             className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
//             >
//                 <Image source={{uri: thumbnail}}
//              className="w-full h-full rounded-xl mt-3"
//              resizeMode="cover"
//              />
//                  <Image
//             source={icons.play}
//             className="w-12 h-12 absolute"
//             resizeMode="contain"
//           />
//             </TouchableOpacity>
//         )
//      }
//     </View>
//   )
// }

// export default VideoCard

const VideoCard = ({ video }) => {
  const [play, setPlay] = useState(false);

  const player = useVideoPlayer(video.video, (player) => {
    player.loop = true;
    player.play();
  });
  console.log('Video from vide-card :', video.video);
  //  const data = Object.keys(video)
  //  console.log("converted array" ,data);

  const viewableItems = ({viewableItems}) => {

    if (viewableItems > 0) {
    setPlay(false)  
    }
    console.log( "viewableItems" ,viewableItems);

  }
  return (
    <View>
      <FlatList
        data={[video]}
        
        keyExtractor={(item) => item.$id}
        // if i use callback(it will call by itself) then I won't able to use let's make it another function call here
        onViewableItemsChanged={viewableItems}

        viewabilityConfig={ 
                    {itemVisiblePercentThreshold	: 70}
              }
        renderItem={({ item }) => 
          {
            // you can't call hook here
console.log("item from glalist" , item );

            return (
          // // for the centering(just remove flex-col , items-center just remove it I don't they are in use)
          //     //  and and giving px and mb
          <View className=" mb-14 flex-col items-center bg-green-500 px-4 ">
            {/* then for the avatar + title + username VS icon */}
            {/* <View className="flex-row gap-3 items-start bg-blue-500"> */}
            <View className="flex-row items-start gap-3 ">
              {/* then for title VS username */}
              <View className=" flex-1 flex-row items-center justify-center bg-orange-500">
                {/* For the Image container  */}
                <View className="flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-secondary p-0.5">
                  <Image
                    source={{ uri: item.avatar }}
                    // resizeMode='cover'
                    // resizeMode= 'contain'
                    className="h-full w-full rounded-lg"
                  />
                </View>

                <View className="ml-3 flex flex-1 justify-center gap-y-1">
                  <Text
                    className="font-psemibold text-sm text-white"
                    numberOfLines={1} //if the text is longer than width of screen then ...(will render)
                  >
                    {item.title}
                  </Text>
                  <Text className="font-pregular text-xs text-gray-100" numberOfLines={1}>
                    {item.username}
                  </Text>
                </View>
              </View>

              <View className="pt-2">
                <Image source={icons.menu} className="h-5 w-5" resizeMode="contain" />
              </View>
            </View>

            {/* check play or not */}
            {play ? (
              <VideoView
                contentFit="cover"
                // why className isn't working ? expo-video is new tool in expo that's why it
                // might not supportable by nativewind
                // className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
                style={{
                  width: '100%',
                  height: 240,
                  borderRadius: 10,
                }}
                nativeControls={true}
                allowsFullscreen
                allowsPictureInPicture
                startsPictureInPictureAutomatically
                player={player}
              />
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setPlay(true)}
                className="relative mt-3 flex h-60 w-full items-center justify-center rounded-xl">
                <Image
                  source={{ uri: item.thumbnail }}
                  className="mt-3 h-full w-full rounded-xl"
                  resizeMode="cover"
                />
                <Image source={icons.play} className="absolute h-12 w-12" resizeMode="contain" />
              </TouchableOpacity>
            )}
          </View>
        )}}
        
      />
    </View>
  )
};

export default VideoCard;
