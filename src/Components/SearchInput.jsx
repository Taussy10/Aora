import { StyleSheet, Text, View , TextInput , Image ,  } from 'react-native'
import React from 'react'

const SearchInput = () => {
  return (
    <View  style={styles.inputContainer}>

    <TextInput 
    placeholder='Searchfor a video topic'
    // value= "placeholder"
    style={styles.input}
    placeholderTextColor="white"
    />
  
  
  <View style={{height: 20 , width: 20}}>
  
  <Image source={require("../../assets/icons/search.png")}
  style={{width: 15.42 , height: 15.42 , }}
  />
  
  
  </View> 
  </View> 
  )
}

export default SearchInput

const styles = StyleSheet.create({
    inputContainer:{
        width: 327,
        height: 58,
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: "#1E1E2D",
        alignItems:'center',
      },
    input:{
        width: 280,
        borderRadius: 8,
        borderWidth: 1,
        color:'#CDCDE0',
        gap: 10,
        elevation: 10,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: "#1E1E2D",
        fontWeight: '400',
        fontSize: 14 ,
        lineHeight: 22.4,
        
        },
})