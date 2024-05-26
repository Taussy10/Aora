import { StyleSheet, Text, View , Image , TextInput, TouchableOpacity, Pressable ,} from 'react-native'
import {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../Utils/Colors'
import CustomButton from '../../Components/CustomButton'
import FormFiled from '../../Components/FormFiled'

// ()
const SignIn = ({navigation}) => {
  const [form, setform] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <SafeAreaView style={styles.container}>

<View style={ styles.subContainer}>

{/* for logo */}
<View style={{width: 115 , height: 34, flexDirection:'row' , gap:7}}>
      <Image source={require("../../../assets/images/logo-small.png")} 
      style={styles.logo}
      />
      <Text style={{fontWeight: '600' , fontSize: 22,  lineHeight: 31.9, color:'white'}}>Aora</Text>
      </View>

  <Text style={{color:'white', fontWeight:'500', lineHeight: 22.4,}}>Sign in to Aora</Text>
 {/* Form container */}
<View style={styles.formContainer}>

<FormFiled 
title="Email"
value={form.email}
handleChangeText={(e)=> setform({...form , email: e})}
keboardType ="email-address"

/>

<FormFiled 
title="Password"
value={form.password}
handleChangeText={(e)=> setform({...form , password: e})}
// keboardType ="email-address"


/>


{/* <View  style={styles.inputContainer}>
  <Text style={{color:'white', fontWeight:'500', lineHeight: 22.4,}}>
    Email</Text>
  <TextInput 
 placeholder='Enter your email'
  style={styles.input}
  placeholderTextColor="#CDCDE0"
   />
</View> */}

{/* <View  style={{ marginBottom: 100  ,...styles.inputContainer}}>
  <Text style={{color:'white', fontWeight:'500', lineHeight: 22.4,}}>
    Password</Text>
  <TextInput 
 placeholder='Enter your password'
  style={styles.input}
  placeholderTextColor="#CDCDE0"
   />
   <Text style={{color:'white', textAlign:'right', }}>Forget password ?</Text>
</View> */}



{/* <TouchableOpacity 
onPress={ () => navigation.navigate("TabsRoute")}
style={styles.btn}>
  <Text style={{color:'white'}}>Log in</Text>
</TouchableOpacity>
 */}





<CustomButton 
title= "Sign In"
handlePress={() => navigation.navigate("TabsRoute")}
containerStyles={styles.btn}
isLoading={isSubmitting}

/>




<Text style={{fontWeight:'400', fontSize: 14, lineHeight: 20.3, color:'white', textAlign:'center', }}>
  Don't have an account?{' '}
  <Pressable onPress={() => navigation.navigate("SignUp")}>
    <Text style={{fontWeight:'600', fontSize: 14, lineHeight: 20.3, color:'#FF9001', textDecorationLine: 'underline'}}>
      Signup</Text>
  </Pressable>
</Text>



{/* </View>contin */}

</View>



      </View>

    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // padding: 20,
    backgroundColor: COLORS.PRIMARY
  },
  subContainer:{
    width: 327 , 
    height: 568.07 ,
    top: 122, 
    left: 24,
    gap: 40,
  },
  logo:{
    width:30.08,
    height: 34.21
  },
  formContainer:{
    width: 327,
    height: 20,
    gap: 20,
    // backgroundColor:'lightgreen'
  },
  inputContainer:{
    width: 327,
    height: 88,
    gap: 8,
    // flexDirection:'row',
    // justifyContent:'center',
  },
  input:{
    width: 327,
    height: 58,
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    // backgroundColor:'white',
    backgroundColor:'#1E1E2D',
   gap: 10,
  //  color: '#CDCDE0'
   color:'#CDCDE0',
  elevation: 10,
  },

})