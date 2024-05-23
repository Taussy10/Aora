import { StyleSheet, Text, View , Image , TextInput, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../Utils/Colors'

import CustomButton from '../../Components/CustomButton'

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>

<View style={ styles.subContainer}>

{/* for logo */}
<View style={{width: 115 , height: 34, flexDirection:'row' , gap:7}}>
      <Image source={require("../../../assets/images/logo-small.png")} 
      style={styles.logo}
      />
      <Text style={{fontWeight: '600' , fontSize: 22,  lineHeight: 31.9, color:'white'}}>Aora</Text>
      </View>

  <Text style={{color:'white', fontWeight:'500', lineHeight: 22.4,}}>Sign up to Aora</Text>
 {/* Form container */}
<View style={styles.formContainer}>

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

{/* <TouchableOpacity 
onPress={ () => navigation.navigate("TabsRoute")}
style={styles.btn}>
  <Text style={{color:'white'}}>Sign Up</Text>
</TouchableOpacity> */}

<CustomButton 
title= "Sign Up"
handlePress={() => navigation.navigate("TabsRoute")}
containerStyles={styles.btn}

/>




<Text style={{fontWeight:'400', fontSize: 14, lineHeight: 20.3,color:'white', textAlign:'center'}}>
  Already have an account?{' '}
<Pressable onPress={() => navigation.navigate("SignIn")}>
  <Text style={{fontWeight:'600', fontSize: 14, lineHeight: 20.3, color:'#FF9001' , textDecorationLine:'underline'}}>SignIn</Text> 
  </Pressable>
  </Text>

 
</View>


      </View>

    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // padding: 20,
    backgroundColor: COLORS.PRIMARY
  },
  subContainer:{
    width: 327 , 
    height: 568.07 ,
    top: 122, 
    left: 24,
    gap: 40
  },
  logo:{
    width:30.08,
    height: 34.21
  },
  formContainer:{
    width: 327,
    height: 20,
    gap: 20,
    // backgroundColor:'lightgreen'
  },
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
  btn:{
    width: 327,
    height: 58,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor:'#FF8C00',
    justifyContent:'center',
    alignItems:'center',
    // marginTop: 54,
  }
})