import { StyleSheet, Text, View , TextInput, KeyboardAvoidingView, TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { useState } from 'react'

import {hiddenEye} from "../../assets/icons/eye-hide.png"
import {eye} from "../../assets/icons/eye.png"

const FormFiled = ({title , value , placeholder, handleChangeText, keyboardType, ...props }) => {
  const [showPassowrd, setshowPassowrd] = useState(false)

  // ()
  return (
    // <View>
      <KeyboardAvoidingView behavior='padding'>

      <View  style={styles.inputContainer}>
  <Text style={{color:'white', fontWeight:'500', lineHeight: 22.4,}}>{title}</Text>
  <TextInput 
 placeholder={placeholder}
  style={styles.input}
  placeholderTextColor="#CDCDE0"
  keyboardType= {keyboardType}
  // keyboardType="email-address"
  value={value}
  onChangeText={handleChangeText}
//  { title==="password" ? secureTextEntry: "Hello" }
secureTextEntry={title ==="Password" && !showPassowrd}
// It means if title this then do also this
   />
</View>
{title === "Password" && (
            <TouchableOpacity onPress={() => setshowPassowrd(!showPassowrd)} style={{ 
            flexDirection:'row-reverse', padding: 10}}>
              <Image 
                source={showPassowrd ? require('../../assets/icons/eye-hide.png') : require('../../assets/icons/eye.png')}
                style={styles.icon} 
                resizeMode= 'contain'
                // resizeMode  is Image property not he Css property
                
                
              />
            </TouchableOpacity>
          )}


{/* <View  style={styles.inputContainer}>
  <Text style={{color:'white', fontWeight:'500', lineHeight: 22.4,}}>
    Email</Text>
  <TextInput 
 placeholder='Enter your email'
  style={styles.input}
  placeholderTextColor="#CDCDE0"
   />
</View> */}

{/* <View  style={styles.inputContainer}>
  <Text style={{color:'white', fontWeight:'500', lineHeight: 22.4,}}>
    Password</Text>
  <TextInput 
 placeholder='Enter your password'
  style={styles.input}
  placeholderTextColor="#CDCDE0"
   />
</View> */}

    {/* </View> */}
    </KeyboardAvoidingView>

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
  icon: {
    height: 25,
    width: 25,
    color:'blue ',
    // backgroundColor:'lightgreen'

   
  }
})