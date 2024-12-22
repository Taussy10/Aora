import React, { useState } from 'react'
import { ScrollView, Text, View, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, useRouter } from 'expo-router'
import { images } from '~/constants'
import FormFiled from '~/components/form-filed'
import CustomButton from '~/components/custom-button'
import { createUser } from '~/appwrite/appwrite'
import { useGlobalContext } from '~/context/global-provider'

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()
  const {setSignUp} = useGlobalContext()

    const submit = async () => {
        try {
            if (!form.username || !form.email || !form.password) {
                // Alert is taking two props: 1.Title(of errror) 2.message 
                Alert.alert("Error" , "Please fill in all the fields")
                
            }
            setIsSubmitting(true)
            // store the result for later use 
            // createUser function will give user but we don't need why ? 
            //  cause if you loook at that createUser fun then it will also signup(create session)
            // and by that you can get user details by getCurrentUser so we are not doing 
            // we createUser 
            
        const result =  await createUser(form.email, form.password, form.username)
        setSignUp(result)
        //   set it to global state
            router.replace('/home')
        } catch (error: any) {
            // Handle error appropriately, perhaps show an alert
            Alert.alert(error.message)
            throw new Error(error)
        } finally { 
            setIsSubmitting(false)
        }
    }

    return (
        <SafeAreaView className='flex-1 bg-primary'>
            <ScrollView>
                <View className='w-full justify-center px-4 my-20 min-h-[84vh]'>
                    <Image 
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[115px] h-[35px]'
                    />
                    <Text className='text-2xl font-psemibold mt-10 text-white'>
                        Sign up to Aora
                    </Text>
                    <FormFiled
                        title="Username"
                        value={form.username}
                        placeholder='Input your username'
                        handleChangeText={(e) => setForm({...form, username: e})}
                        otherStyles="mt-7"
                    />
                    <FormFiled
                        title="Email"
                        value={form.email}
                        placeholder='Input your email'
                        handleChangeText={(e) => setForm({...form, email: e})}
                        otherStyles="mt-7"
                    />
                    <FormFiled
                        title="Password"
                        value={form.password}
                        placeholder='Input your password'
                        handleChangeText={(e) => setForm({...form, password: e})}
                        otherStyles="mt-7"
                    />
                    <CustomButton
                        title='Signup'
                        handlePress={submit}
                        containerStyles='mt-7'
                        isLoading={isSubmitting}
                    />
                    <View className='justify-center pt-5 flex-row'>
                        <Text className='text-lg text-gray-100 font-pregular'>
                            Already have an account?
                        </Text>
                        <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>
                            Login
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp