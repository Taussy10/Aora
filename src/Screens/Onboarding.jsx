import { ScrollView, StyleSheet, Text, View , Image, TouchableOpacity, StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// When we want to export function or part of something from the file 
// then we export them by curly brackets
import {COLORS} from  '../Utils/Colors'
import CustomButton from '../Components/CustomButton'
// we need context cause context have data
import { useGlobalContext } from '../Context/GlobalProvider'

const Onboarding = ({navigation}) => {
const {isLoading , isLoggedIn} = useGlobalContext()

// useEffect(() => {
//   if (!isLoading && isLoggedIn) {
//     navigation.navigate("TabsRoute");
//   }
// }, [isLoading, isLoggedIn]);

  return (
    <SafeAreaView style={styles.container}  >
      {/* <Text style={{fontFamily:"Poppins-Black"}} >Onboarding</Text> */}
      <StatusBar  />
      <ScrollView >

        {/* for centering everything in the screen */}
        <View style={styles.subContainer}>
        <Image source={require("../../assets/images/logo.png")} 
          style={styles.logo}
          />
        <View style={{width: 375, height: 298, justifyContent:'center', alignItems:'center'}}>
          <Image source={require("../../assets/images/cards.png")} 
          style={styles.cards}
          />
        </View>

<View style={{width: 333, height: 73, justifyContent:'center', alignItems:'center'}}>
<Text style={{color:'white', fontWeight: '600', fontSize: 30, lineHeight: 36}}>Discover Endless </Text>
        <Text style={{color:'white', fontWeight: '600', fontSize: 30, lineHeight: 36}}>Possibilities with 
        <Text style={{fontWeight: '600', fontSize: 30 , lineHeight: 36 , fontFamily:'Poppins-Medium' , color:'#FF8E01' }}> Aora</Text></Text>
</View>
        
<View style={{width: 325, height: 44, justifyContent:'center', alignItems:'center' , top: 10 ,    marginBottom: 50,  }}>      
        <Text style={{color:'#CDCDE0' , fontWeight: '400', fontSize: 14, lineHeight: 22.4,}}>Where Creativity Meets Innovation: Embark on </Text>
        <Text style={{color:'#CDCDE0' , fontWeight: '400', fontSize: 14, lineHeight: 22.4,}}>a Journey of Limitless Exploration with Aora</Text>
        </View>

<CustomButton 
title= "Continue with Email"
handlePress={() =>{(!isLoading && isLoggedIn) ? navigation.navigate("TabsRoute"):navigation.navigate("SignUp") }}
containerStyles={styles.btn}

/>

{/* <TouchableOpacity 
onPress={ () => navigation.navigate("SignUp")}
style={styles.btn}>
  <Text style={{color:'white'}}>Continue with Email</Text>
</TouchableOpacity> */}

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    // justifyContent:'center',
    // alignItems:'center',
    // padding: 20,
  },
  subContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'green',
  },
  logo:{
    height: 84,
    width: 115,
//  top: 84,
   resizeMode: 'contain'
  },
  cards:{
    height: 240,
    width: 240,

  },
  btn:{
    width: 327,
    height: 58,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor:'#FF8C00',
    // backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 54,
  }
})