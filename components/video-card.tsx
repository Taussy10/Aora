import { View, Text , Image, TouchableOpacity, FlatList } from 'react-native'
import React,{useState }from 'react'
import { icons } from '~/constants'
import { useVideoPlayer, VideoView } from  'expo-video';

type propsType = {
    
}
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


const VideoCard = ({video}) => {
  const [play, setPlay] = useState(false)

   const player = useVideoPlayer(video, (player) => {
     player.loop = true;
     player.play();
   });
 console.log("Video from vide-card :" , [video]);
//  const data = Object.keys(video)
//  console.log("converted array" ,data);
 
  return (
    <View>
      <FlatList 
      data={[video]}
      keyExtractor={(item) => item.$id  }
      renderItem={({item}) => 
  // // for the centering(just remove flex-col , items-center just remove it I don't they are in use)
//     //  and and giving px and mb
    <View className=" flex-col items-center px-4 mb-14 bg-green-500 ">
        
        {/* then for the avatar + title + username VS icon */}
      {/* <View className="flex-row gap-3 items-start bg-blue-500"> */}
      <View className="flex-row gap-3 items-start ">

             {/* then for title VS username */}
      <View className=" justify-center items-center flex-row flex-1 bg-orange-500">

    {/* For the Image container  */}
      <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
        <Image  source={{uri: item.avatar}}
        resizeMode='cover'
        // resizeMode= 'contain'
        className="w-full h-full rounded-lg"

        />
      </View>


           <View className="flex justify-center flex-1 ml-3 gap-y-1">
         <Text
        className="font-psemibold text-sm text-white"
        numberOfLines={1} //if the text is longer than width of screen then ...(will render)
        >
            {item.title}
        </Text>
         <Text
          className="text-xs text-gray-100 font-pregular"
          numberOfLines={1}
        >
            {item.username}
        </Text>
      </View>
        </View>   
        
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>  
        </View>
     

     {/* check play or not */}
     {
        play
         ? (
              <VideoView
                contentFit= 'cover'
               
               // why className isn't working ? expo-video is new tool in expo that's why it 
               // might not supportable by nativewind 
               // className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
               style={{
                 width: "100%" ,
                 height: 240,
                 borderRadius: 10
               }}
               nativeControls={true}
              allowsFullscreen 
              allowsPictureInPicture
              startsPictureInPictureAutomatically
               player={player}
           
               
  />
        ): (
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setPlay(true)}
            className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
            >
                <Image source={{uri: item.thumbnail}}
             className="w-full h-full rounded-xl mt-3"
             resizeMode="cover"
             />
                 <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
            </TouchableOpacity>
        )
     }
    </View>
      }
      />
    </View>
  )
}

export default VideoCard

