import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../Utils/Colors'

const Bookmarked = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:'white', fontSize: 20}} >Bookmarked</Text>
    </SafeAreaView>
  )
}

export default Bookmarked

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    // color:'white',
    justifyContent: 'center',
    alignItems:'center'
  }
})