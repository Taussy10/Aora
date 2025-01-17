import {  Text, TextInput, TouchableOpacity, View , Image } from 'react-native'
import React,{useState} from 'react'
import { icons, images } from '~/constants';

type propsType = {
    title: string,
    value: string,
    placeholder: string,
    handleChangeText: (e:any) => void,
    isLoading?: boolean,
    otherStyles?: string; 
    textStyles?: string;  
    keyboardType?: string   
    // question mark is for optional
}

const FormFiled = ({title , value ,placeholder ,handleChangeText,keyboardType,  otherStyles, ...props}:propsType) => {
    const [showPassword, setShowPassword] = useState(false)

    // console.log("input value from FormFilled: " ,value);
    
  return (
    <View className={` space-y-2 ${otherStyles}`}>
      <Text className=' text-base text-gray-100 font-pmedium'>{title}</Text>

      {/* container for form  */}
      <View className=' border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl 
       focus:border-secondary
      '>
  <TextInput 
  className='  h-full  text-white font-psemibold text-base'
      placeholder={placeholder}
      // placeholderTextColor= "#7b7b8b"
      placeholderTextColor= "grey"
      value={value}
      onChangeText={handleChangeText}
      secureTextEntry={title === 'Password' && !showPassword }
      keyboardType={keyboardType}
      />
      
      {
        // it can be done via terniary operator but use terniary when you want to return in else part 
        // part then use this  and let me tell you if() { } this syntax won't work cause it  doesn't work 
        // in jsx even if you write inside { } cause jsx expects expression(mathematics) not statemnt( if is statement) 

        // if the condition is true then renders nothing otherwise:
// this is called:  Short-Circuit Logic
        title === "Password"  && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eyeHide: icons.eye} 
                 resizeMode='contain'
                className=' w-6 h-6 absolute right-0 bottom-4 ' />

            </TouchableOpacity>
        )
      }
      
      </View>

      
    
    </View>
  )
}

export default FormFiled

