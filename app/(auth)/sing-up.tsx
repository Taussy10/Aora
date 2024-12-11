import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '~/constants'
import FormFiled from '~/components/FormFiled'
import CustomButton from '~/components/CustomButton'
import { Link } from 'expo-router'
import StatusBarComp from '~/components/StatusBarComp'
const SignUp = () => {
  // here we have a object name form that has two keys
  // email and password both are sting 
  const [form, setForm] = useState({
    username: "",
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
      <Text className=' text-2xl font-psemibold mt-10 text-white  '>Sign up to Aora </Text>

      <FormFiled 
      title = "Username"
      // for value of input filed from form object
      value = {form.username}
      placeholder='Input your username'
      // e just a params,
      // setForm() is function in which we are spreadig the values of
      // form object and putting value email to e 
      handleChangeText ={(e) => setForm({...form , username:e }) }
      otherStyles= "mt-7 "
      />
      <FormFiled 
      title = "Username"
      value = {form.password}
      placeholder='Input your Password'
      handleChangeText ={(e) => setForm({...form , password:e }) }
      otherStyles= "mt-7 "
    
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
    Already have an account?  </Text>
    <Link href={'/sign-in'} className=' text-lg font-psemibold text-secondary'>Login</Link>
</View>
        </View>

      </ScrollView>
 
    </SafeAreaView>
  )
}

export default SignUp

