import { StyleSheet, Text, View , StatusBar, FlatList , Image, RefreshControl, Alert} from 'react-native'
import React,{useState , useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '~/constants'
import SearchInput from '~/components/search-input'
import Trending from '~/components/trending'
import EmptyState from '~/components/empty-state'
import { useGlobalContext } from '~/context/global-provider'
import { getAllPosts } from '~/appwrite/appwrite'
import useAppwrite from '~/appwrite/use-appwrite'
import VideoCard from '~/components/video-card'
const Home = () => {
  const [refreshing, setRefreshing] = useState(false)
 const {data: posts , refetch , isLoading} = useAppwrite(getAllPosts)
  const {user} = useGlobalContext()




  console.log("user :", user);
  console.log("Posts :", posts);
   
  const onRefreshing = async () => {
    setRefreshing(true)
    await refetch()
    // re call vidoes: if any new vidoes apperead
    setRefreshing(false)
  }
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <SafeAreaView className=' bg-primary flex-1 '>
      <FlatList 
      data={posts}
      // $id is syntax of id from appwrite 
      keyExtractor={(item) => item.$id }
      ListHeaderComponent={() => (
        // parent container for ListHeaderComponent
        <View className=' my-6 px-4 space-y-6 '>
          {/* for the styling of header  */}
          <View className='  justify-between  items-start  flex-row  mb-6
            '>
           <View>
            <Text className=' font-pmedium text-sm  text-gray-100'>Welcome Back</Text>
            <Text className='text-2xl font-psemibold text-white'>Tausif</Text>
            </View>  

            {/* container for image */}
            <View className=' mt-1.5'>
              <Image  
              source={images.logoSmall} 
              resizeMode='contain'
              className=' w-9  h-10 '
               />
            {/* <Text>Hlllo</Text>      */}
            </View>
          </View>

          {/* for the input */}
          <View>
            <SearchInput />
          </View>

          {/* for the trennding videos */}
          <View className="w-full flex-1 pt-5 pb-8 bg-blue-500">
          <Text className=' text-lg font-pregular text-gray-100 mb-3'>Trending Vidoes</Text>

   {/* ?? if it doesn't exit then will show just [] */}

<Trending posts={[{id:1 , },{id:1 , },{id:1 , }] ?? [] } />
         
           </View>
        </View>
      )}

 
      ListEmptyComponent={() => (
       <EmptyState 
       title= "No Videos Found"
       subtitle = "Be the first one to upload a  video"
       />
      )}

//  refreshing={true}
 refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />}
      renderItem={({item}) => (
        <View>

        {/* <Text className=' text-white'>{item.title}</Text> */}
        <VideoCard video= {item} />
        </View>
      )}

      

     
     

  
      />
      
      <Text>Homes</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})