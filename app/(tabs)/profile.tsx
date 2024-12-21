import {  Text, View , FlatList, TouchableOpacity , Image} from 'react-native'
import React,{ useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '~/components/search-input'
import EmptyState from '~/components/empty-state'
import {getSearchPosts, getUserPosts, signOut } from '~/appwrite/appwrite'
import useAppwrite from '~/appwrite/use-appwrite'
import VideoCard from '~/components/video-card'
import { router, useLocalSearchParams } from 'expo-router'
import { useGlobalContext } from '~/context/global-provider'
import { icons, images } from '~/constants'
import InfoBox from '~/components/info-box'
const Profile = () => {


  // got the all quries getSearchPost function will filter by Query via appwrite
  //  by arrow function firstly refrence will be passed
  //  then after sometime function executes
  // and how much time check use-appwrite file 
  // if you think that why userId didin't need then learn about params and args 
  // param is userId and arg is user.$id so userId value = user.$id
 const {data: posts , refetch , isLoading} = useAppwrite(() => getUserPosts(user.$id))
//  by this it will exectue gives the return value of it then value will passed to useApppwrite which object so you will get error
//  const {data: posts , refetch , isLoading} = useAppwrite(() => getSearchPosts(query))
// for getting the data and always write filename in curly
const {isLoggedIn , setIsLoggedIn , user, setUser , loading , setLoading }= useGlobalContext()
  
console.log("All LatestPosts from Videos collections :",posts);


 console.log("User :" ,user );
 

  console.log( "posts from Search :" ,posts);
  const logout = async() => {
    await signOut()
    setUser(null)
    setIsLoggedIn(false)
    router.replace('/sign-in')
  }
  return (
    <SafeAreaView className=' bg-primary flex-1 '>
      <FlatList 
      data={posts}
      // $id is syntax of id from appwrite 
      keyExtractor={(item) => item.$id }
      ListHeaderComponent={() => (
        // parent container for ListHeaderComponent
        <View className='  w-full items-center justify-center mt-6  mb-12 px-4  bg-green-500'>
          {/* for th
          e styling of header  */}
          <TouchableOpacity
          className=' w-full  items-end mb-10'
          onPress={logout}
          >
            <Image source={icons.logout} 
            resizeMode= 'contain'
            className='  w-6 h-6'
            />
          </TouchableOpacity>


    <View className=' w-16 h-16 border border-secondary rounded-lg justify-center items-center '>
     <Image source={{uri: user?.avatar}}
     className=' w-[90%] h-[90%] rounded-lg'
     resizeMode= 'cover'
     />
    </View>
          
          <InfoBox 
          title = {user?.username}
          containerStyles = 'mt-5'
          titleStyles = 'text-lg'
          />
          
           <View className='  flex-row'>
           <InfoBox 
          title = {posts.length || 0}
          subtitle = "Posts"
          containerStyles = 'mr-10'
          titleStyles = 'text-xl'
          />
           <InfoBox 
          title = {1.2}
          subtitle = "Followers"
          titleStyles = 'text-xl'
          />
           </View>
           

          
         

         
          {/* for the trennding videos */}
          {/* <View className="w-full flex-1 pt-5 pb-8 bg-blue-500 "> */}
     
        </View>
      )}

 
      ListEmptyComponent={() => (
       <EmptyState 
       title= "No Videos Found"
       subtitle = "No videos found for this search query"
       />
      )}

//  refreshing={true}
      renderItem={({item}) => (
        <View>

        {/* <Text className=' text-white'>{item.title}</Text> */}
        <VideoCard video= {item} />
        </View>
      )}

      

     
     

  
      />
      
      <Text>Searchs</Text>
    </SafeAreaView>
  )
}

export default Profile

