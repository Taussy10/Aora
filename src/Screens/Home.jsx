import { FlatList, FlatListComponent, StyleSheet, Text, View , Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Colors from '../../'
// import colors from '../'
import {COLORS } from './Utils/Colors'
import SearchInput from '../Components/SearchInput'


const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
  data={[{ id: 1 }]}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <Text>{item.id}</Text>
  )}

 ListHeaderComponent={() =>(
<View style={styles.headerContainer}>

  <View style={styles.header}>

<View style={{flexDirection:'column'}}>
<Text style={{fontWeight: '500' , fontFamily:'Poppins-Regular' , fontSize: 14 , lineHeight: 20.3 , color: '#CDCDE0'}}>Welcome Back</Text>
<Text style={{fontWeight: '500' , fontFamily:'Poppins-Regular' , fontSize: 24 , lineHeight: 32.4 , color: '#ffffff'}}>Tausif</Text>
</View>


<Image source={require("../../assets/images/logo-small.png")}
style={styles.logo}
/>
</View>



{/* <View style={styles.searchContainer}> */}

{/* For the serchInput */}
<SearchInput />


<View style={{ height: 1000, paddingTop: 20 , paddingBottom: 40, backgroundColor: 'lightgreen'}}>
   <Text style={{fontWeight: '400', fontSize: 14 , lineHeight: 19.6,
 color:'#CDCDE0'

    }}> Trending Videos </Text>
</View>

 



</View>

// </View >




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
    backgroundColor: COLORS.PRIMARY,
    padding: 10,
  },




  headerContainer:{
    height: 130,
    width: 327,
  },
  header:{
flexDirection:'row',
justifyContent:  'space-between' ,
width: 325,
height: 52,
marginBottom: 10,
 },
 logo:{
 width: 30.08,
 height: 34.21,
 },



})