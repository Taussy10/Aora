import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'



import Onboarding from '../Screens/Onboarding'

const Stack = createNativeStackNavigator()
const Routes = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
        'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        // 'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        // 'Poppins-Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
        
         
      });
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>

    <Stack.Screen name='Onboarding' component={Onboarding} />
    </Stack.Navigator>

  )
}

export default Routes

const styles = StyleSheet.create({})