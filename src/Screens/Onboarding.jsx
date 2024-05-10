import { ScrollView, StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// When we want to export function or part of something from the file 
// then we export them by curly brackets
import {COLORS} from  './Utils/Colors'

import { images } from '../../constants/images'

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}  >
      <Text style={{fontFamily:"Poppins-Black"}} >Onboarding</Text>
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

        <Text style={{color:'white'}}>Discover Endless </Text>
        <Text style={{color:'white'}}>Possibilities with Aora</Text>
        <Text style={{color:'white'}}>Where Creativity Meets Innovation: Embark on </Text>
        <Text style={{color:'white'}}>a Journey of Limitless Exploration with Aora</Text>

<TouchableOpacity style={styles.btn}>
  <Text style={{color:'white'}}>Continue with Email</Text>
</TouchableOpacity>
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
  },
  subContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',
  },
  logo:{
    height: 84,
    width: 115,
//  top: 84,
   resizeMode: 'contain'
  },
  cards:{
    height: 240,
    width: 140,
  },
  btn:{
    width: 327,
    height: 58,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor:'lightgreen',
    justifyContent:'center',
    alignItems:'center'
  }
})