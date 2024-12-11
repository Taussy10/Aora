import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

// layout for auth but why ?
// cause in auth we don't have tab bar so we need it

const AuthLayout = () => {
  return (
   <Stack 
   initialRouteName='sign-in'
   screenOptions={{headerShown:false}}
   >
    {/* even name of the file screen should match with file name
    although can change titile using options
    */}
    <Stack.Screen name='sign-in' />
    <Stack.Screen name='sign-up' />
   </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})