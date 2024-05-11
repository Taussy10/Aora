// Home.js
import { FlatList, StyleSheet, Text, View, Image ,  } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './Utils/Colors';
import SearchInput from '../Components/SearchInput';
import Trending from '../Components/Trending'; // Correct import path

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.id}</Text>}
        ListHeaderComponent={() => (
          <View style={styles.subContainerContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.headerText}>Welcome Back</Text>
                <Text style={styles.headerText}>Tausif</Text>
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
    backgroundColor:'white',
    flex: 1,
  },
  headerContainer: {
    // 130
    height: 130,
    width: 327,
    backgroundColor:'green',
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


