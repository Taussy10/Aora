import { StyleSheet, Text, View , TextInput } from 'react-native'
import React from 'react'

const FormFiled = () => {
  return (
    <View style={{flex: 1, backgroundColor:'lightgreen'}}>
      <View  style={styles.inputContainer}>
  <Text style={{color:'white', fontWeight:'500', lineHeight: 22.4,}}>Username</Text>
  <TextInput 
 placeholder='Enter your userNme'
  style={styles.input}
  placeholderTextColor="#CDCDE0"
   />
</View>

<View  style={styles.inputContainer}>
  <Text style={{color:'white', fontWeight:'500', lineHeight: 22.4,}}>
    Email</Text>
  <TextInput 
 placeholder='Enter your email'
  style={styles.input}
  placeholderTextColor="#CDCDE0"
   />
</View>

<View  style={styles.inputContainer}>
  <Text style={{color:'white', fontWeight:'500', lineHeight: 22.4,}}>
    Password</Text>
  <TextInput 
 placeholder='Enter your password'
  style={styles.input}
  placeholderTextColor="#CDCDE0"
   />

</View>
    </View>
  )
}

export default FormFiled

const styles = StyleSheet.create({
  inputContainer:{
    width: 327,
    height: 88,
    gap: 8,
    // flexDirection:'row',
    // justifyContent:'center',
  },
  input:{
    width: 327,
    height: 58,
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    // backgroundColor:'white',
    backgroundColor:'#1E1E2D',
   gap: 10,
  //  color: '#CDCDE0'
  //  color: 'white',
  elevation: 10,
  color:'#CDCDE0'
  },
})