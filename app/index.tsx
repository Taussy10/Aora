
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '~/constants'
import CustomButton from '~/components/customButton'
import { useRouter } from 'expo-router'
import StatusBarComp from '~/components/statusBarComp'
import { useGlobalContext } from '~/context/GlobalProvider' 
import { Redirect } from 'expo-router'
// He converted index.tsx into onBoarding screen

export default function Onboarding() {
  const router = useRouter()
  const { loading, isLoggedIn } = useGlobalContext();

  if (!loading && isLoggedIn) return <Redirect href="/home" />;

  return (
    // flex-1: will take whole screen height that's empty 
    // use it only in screen comp
    <SafeAreaView className=' bg-primary flex-1

    '>
      {/* style is for smaller device if device  */}
     <ScrollView contentContainerStyle={{height: "100%"}}>
{/* for content: can't be written safe cause there is scroll view */}
<View className=' justify-center items-center px-4   '>

<Image source={images.logo}
resizeMode= 'contain'
// for containing(showing full image) the image in given h and w 
className=' w-[130px] h-[84px] '
/>
<Image source={images.cards}
resizeMode= 'contain'
className=' max-w-[380px] w-full h-[300px] '
/>

   <View className= 'relative mt-5' >
    <Text className=' text-3xl text-white font-bold text-center'>Discover Endless Possibilities with
      {" "}<Text className=' text-secondary-200'>Aora</Text></Text>
      <Image source={images.path}
      resizeMode='contain'
      className=' w-[136px] h-[15px] absolute  -bottom-2 -right-8'
      />
   </View>

{/* by text-center then text will start from center of screen widthly */}
<Text className='  text-gray-100 mt-7 text-sm font-pregular text-center' >Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora </Text>

<CustomButton 
title = "Continue with Email"
handlePress= {() => router.push("/sign-in") }
containerStyles = "w-full  mt-7  "
/>

</View>

     </ScrollView>
     {/*  */}
     <StatusBarComp />

    </SafeAreaView>
  )
}


  