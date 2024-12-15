import { StyleSheet, Text, View , StatusBar, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// Learn from here
// https://reactnative.dev/docs/flatlist?language=typescript
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
  //  renderIteem function iterates(internally) over the data array that you provide 
  // and, for each element, calls the renderItem function
  return (
    <SafeAreaView>
      <FlatList 
      // FlatList  data  ko internally iterate karta hai.
      data={DATA}
      //simillar to event object in onChangeText in renderItem we get 
      // arg(just a name so it can change) object 
      // arg has three keys: item(each data of array) ,
      //  index(each array data's index(from 0)) , separators(a function)
       
      // Here is how it looks internally
      // renderItem={(arg) => (
      //   <View>

      //   <Text>{arg.item.title}</Text>
      //   </View>
      // )}



      // here we how write 
      // here that arg is name as item 
      // const arg = { item: { id: "1", title: "First Item" }, index: 0, separators: {...} };
     // const { item } = args;
     // this is how we are destructure item; you can also destructure index same as item

      renderItem={({item}) => (
        <View>

        <Text>{item.title}</Text>
        {/* <Text>{arg.separators}</Text> */}
        </View>
      )}

      ItemSeparatorComponent={() => (
        <Text>Hello</Text>
      )}
      // when list is empty it will render
      ListEmptyComponent={() => (
        <Text>List is Empty</Text>
      )}

      // Now you can understand that keyExtractor get item params(not object)
      // so we don't need to wrap in curly
      keyExtractor={(item) => item.id }
  // horizontal={true}
  refreshing={true}
  
      />
      
      <Text>Homes</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})