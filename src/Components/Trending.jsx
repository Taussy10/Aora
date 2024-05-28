// Trending.js
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const Trending = ({ posts}) => { // Remove the destructuring
  return (
    <FlatList 
    data={posts}
    horizontal
    // this is how id looks{with dollar sign} like in appwrite 
    keyExtractor={item=> item.$id}
    // keyExtractor={item=> item.id}
    renderItem={({item}) =>(
        <View>
            <Text style={{color:'white'}}>{item.id}</Text>
            {/* <Text>{item.id}</Text> */}
        </View>
    ) }


    />
    // <View style={styles.container}>
    //   <Text style={{ color: 'green' }}>Hello</Text>
    // </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightgreen',
  },
});
