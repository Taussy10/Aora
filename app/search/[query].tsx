import { StyleSheet, Text, View , StatusBar, FlatList , Image, RefreshControl, Alert} from 'react-native'
import React,{useState , useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '~/constants'
import SearchInput from '~/components/search-input'
import Trending from '~/components/trending'
import EmptyState from '~/components/empty-state'
import { useGlobalContext } from '~/context/global-provider'
import { getAllPosts, getLatestPosts, getSearchPosts } from '~/appwrite/appwrite'
import useAppwrite from '~/appwrite/use-appwrite'
import VideoCard from '~/components/video-card'
import { useFetchData } from '~/learning-section/custom-hook'
import { useLocalSearchParams } from 'expo-router'
const Search = () => {
  const [refreshing, setRefreshing] = useState(false)
  // useAppwrite(getAllPosts): getAllPost  is just we got params 

  //  by arrow function firstly refrence will be passed
  //  then after sometime function executes
  // and how much time check use-appwrite file 
 const {data: posts , refetch , isLoading} = useAppwrite(() => getSearchPosts(query))
//  const {data: posts , refetch , isLoading} = useAppwrite(() => getSearchPosts(query))
  const {query} = useLocalSearchParams()

  
console.log("All LatestPosts from Videos collections :",posts);

useEffect(() => {
  refetch()
}, [query])



  console.log( "posts from Search :" ,posts);
  
  return (
    <SafeAreaView className=' bg-primary flex-1 '>
      <FlatList 
      data={posts}
      // $id is syntax of id from appwrite 
      keyExtractor={(item) => item.$id }
      ListHeaderComponent={() => (
        // parent container for ListHeaderComponent
        <View className=' my-6 px-4 '>
          {/* for the styling of header  */}
          
          
            <Text className=' font-pmedium text-sm  text-gray-100'>Search Results</Text>
            <Text className='text-2xl font-psemibold text-white'>{query}</Text>

            <View className=' mt-6 mb-8'>
            <SearchInput intialQuery={query} />
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

export default Search

