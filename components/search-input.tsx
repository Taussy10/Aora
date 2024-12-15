import {  Text, TextInput, TouchableOpacity, View , Image } from 'react-native'
import React,{useState} from 'react'
import { icons, images } from '~/constants';

type propsType = {
    title: string,
    value: string,
    placeholder: string,
    handleChangeText: (e) => void,
    isLoading?: boolean,
    otherStyles?: string; 
    textStyles?: string;  
    keyboardType?: string   
    // question mark is for optional
}

const SearchInput = ({title , value ,placeholder ,handleChangeText,keyboardType,  otherStyles, ...props}:propsType) => {
    const [showPassword, setShowPassword] = useState(false)

    // console.log("input value from FormFilled: " ,value);
    
  return (
//{/* container for form  */}

      <View className=' border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl 
       focus:border-secondary   flex-row  items-center  space-x-4 
      '>
  <TextInput 
  className="text-base mt-0.5 text-white flex-1 font-pregular"
      placeholder= "Search for a video topic"
      placeholderTextColor= "#7b7b8b" 
      value={value}
      onChangeText={handleChangeText}
      secureTextEntry={title === 'Password' && !showPassword }
      keyboardType={keyboardType}
      />
      
      
       <TouchableOpacity>
         <Image source={icons.search}
         resizeMode='contain'
         className=' w-5 h-5'
         />
       </TouchableOpacity>
      </View>

      

  )
}

export default SearchInput












