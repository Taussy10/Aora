import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

// layout for auth but why ?
// cause in auth we don't have tab bar so we need it

const AuthLayout = () => {
  return (
   <Stack>
    <Stack.Screen name='signIn' />
   </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})