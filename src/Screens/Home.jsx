import { FlatList, FlatListComponent, StyleSheet, Text, View , ListHeaderComponent } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <FlatList 
  data={[{ id: 1 }]}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <Text>{item.id}</Text>
  )}
 ListHeaderComponent={() =>(
<View>
  <Text>Hello</Text>
</View>

 ) 
 }
 />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightgreen'
  }
})