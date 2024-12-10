
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function index() {
  return (
    <View>
      <Text className=' text-xl  font-bold'>Index</Text>
      <Redirect href={"/profile"} />
    </View>
  )
}

const styles = StyleSheet.create({})

