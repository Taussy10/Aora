import {  Text, View , FlatList ,} from 'react-native'
import React,{ useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '~/components/search-input'
import EmptyState from '~/components/empty-state'
import {getSearchPosts } from '~/appwrite/appwrite'
import useAppwrite from '~/appwrite/use-appwrite'
import VideoCard from '~/components/video-card'
import { useLocalSearchParams } from 'expo-router'
const Search = () => {


  // got the all quries getSearchPost function will filter by Query via appwrite
  //  by arrow function firstly refrence will be passed
  //  then after sometime function executes
  // and how much time check use-appwrite file 
 const {data: posts , refetch , isLoading} = useAppwrite(() => getSearchPosts(query))
//  by this it will exectue gives the return value of it then value will passed to useApppwrite which object so you will get error
//  const {data: posts , refetch , isLoading} = useAppwrite(() => getSearchPosts(query))
// for getting the data and always write filename in curly
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

