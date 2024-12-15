import { StyleSheet, Text, View , StatusBar, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
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
    <SafeAreaView>
      <FlatList 
      data={DATA}
      keyExtractor={(item) => item.id }

      renderItem={({item}) => (
        <View>

        <Text>{item.title}</Text>
        </View>
      )}

      

     
     

  
      />
      
      <Text>Homes</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})