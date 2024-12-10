
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function index() {
  return (
    <View>
      
      <Text className=' text-xl  font-bold'>Index</Text>
      <Redirect href={"/home"} />
      {/* don't write like "(tabs)/home" just write "/home" expo 
      treate everyone as /route except index.tsx
      */}
    </View>
  )
}

const styles = StyleSheet.create({})

