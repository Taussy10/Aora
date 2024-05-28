// Home.js
import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator ,
   RefreshControl , StatusBar,  
   TouchableOpacity,
   Button,
   Alert} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../Utils/Colors';
import SearchInput from '../Components/SearchInput';
import Trending from '../Components/Trending'; // Correct import path
import EmptyState from '../Components/EmptyState';
import { useState , useEffect } from 'react';
import { getAllposts } from '../Utils/appwrite';
import useApprite from '../Utils/useAppwrite';
import VideoCards from '../Components/VideoCards';

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const {data:posts , refetch } =  useApprite(getAllposts) ;

  // when refersh it will show loader
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };







  // console.log(posts);
  // const onRefresh = async () => {
  //   await refetch();

  //   setRefreshing(true);
  //   // try {
  //   //   const fetchedPosts = await getAllposts();
  //   //   setPosts(fetchedPosts);
  //   // } catch (error) {
  //   //   console.error('Error refreshing posts:', error);
  //   // } finally {
  //   //   setRefreshing(false);
  //   // }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
      
        data={posts}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => 
        
        
        <View>
          {/* <Text style={{color:'white' , fontSize:20}}>{item.Title}</Text>

      <Image source={{uri: item.Thumbnail}} 
      style={{height: 200 , width: 400 , backgroundColor:'lightgreen'}} 
      resizeMode= 'contain'
      /> */}
      <VideoCards  video={item}/>

        </View>
      }
        ListHeaderComponent={() => (
          <View style={styles.subContainerContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
            <View style={{flexDirection:'column'}}>
<Text style={{fontWeight: '500' , fontFamily:'Poppins-Regular' , fontSize: 14 , lineHeight: 20.3 , color: '#CDCDE0'}}>Welcome Back</Text>
<Text style={{fontWeight: '500' , fontFamily:'Poppins-Regular' , fontSize: 24 , lineHeight: 32.4 , color: '#ffffff'}}>Tausif</Text>
</View>
              <Image
                source={require("../../assets/images/logo-small.png")}
                style={styles.logo}
              />
            </View>

            <SearchInput />
            </View>
            <Text style={{color:'white'}}>Trending Videos</Text>

            {/* Use the Trending component */}
            <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
            {/* <Trending /> */}
        
          </View>
        )}

        // if text is emptpy it will show this
        // You you have to pass navigation to component
        //  from Parent componet otherwise you won't be able to use

        ListEmptyComponent={()=> (
          // <Text style={{color:'white'}}>Empty</Text>
          <EmptyState 
          title="Be the first one to upload a video"

          subtitle="No Videos Found"
          navigation={navigation}

          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />


    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    padding: 10,
  },
  subContainerContainer: {
    // 130
    // height: 100,
    width: 327,
    // backgroundColor:'white',
    flex: 1,
  },
  headerContainer: {
    // 130
    height: 130,
    width: 327,
    // backgroundColor:'green',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 325,
    height: 52,
    marginBottom: 10,
  },
  logo: {
    width: 30.08,
    height: 34.21,
  },
});


