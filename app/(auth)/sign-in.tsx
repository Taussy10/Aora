import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '~/constants'
import FormFiled from '~/components/formFiled'
import CustomButton from '~/components/customButton'
import { Link } from 'expo-router'
import StatusBarComp from '~/components/statusBarComp'
const SignIn = () => {
  // here we have a object name form that has two keys
  // email and password both are sting 
  const [form, setForm] = useState({
    email: "",
    password: " "
  })
const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }
  return (

    <SafeAreaView className=' flex-1 bg-primary'>
      <ScrollView>

        <View className=' w-full justify-center px-4 my-20 min-h-[84vh] '>
        <Image source={images.logo}
      resizeMode='contain'
    className=' w-[115px] h-[35px] '
      />
      <Text className=' text-2xl font-psemibold mt-10 text-white  '>Log in to Aora </Text>

      <FormFiled 
      title = "Email"
      // for value of input filed from form object
      value = {form.email}
      placeholder='Input your Email'
      // e just a params,
      // setForm() is function in which we are spreadig the values of
      // form object and putting value email to e 
      handleChangeText ={(e) => setForm({...form , email:e }) }
      otherStyles= "mt-7 "
      keyboarType = "email-address"
      />
      <FormFiled 
      title = "Password"
      value = {form.password}
      placeholder='Input your Password'
      handleChangeText ={(e) => setForm({...form , password:e }) }
      otherStyles= "mt-7 "
    
      />
      <CustomButton 
      title='Login'
      handlePress={submit}
      containerStyles='mt-7 '
      isLoading={isSubmitting}
      />

<View className=' justify-center pt-5 flex-row'>

  <Text className=' text-lg text-gray-100  font-pregular'>
    Don't have an account?  </Text>
    <Link href={'/sing-up'} className=' text-lg font-psemibold text-secondary'>Signup</Link>
</View>
        </View>

      </ScrollView>
 
    </SafeAreaView>
  )
}

export default SignIn

