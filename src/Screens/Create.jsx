import { StyleSheet, Text, View  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../Utils/Colors'

const Create = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:'white'}}>Create</Text>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    padding: 20
  }
})