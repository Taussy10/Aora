import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Onboarding = () => {
  return (
    <SafeAreaView  className="  flex-auto
     bg-green-400" >
      <Text style={{fontFamily:"Poppins-Black"}} >Onboarding</Text>
      <Text className= 'font-pregular'  >Hello</Text>
    </SafeAreaView>
  )
}

export default Onboarding

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor:'lightgreen'
//     }
// })