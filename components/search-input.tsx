import {  Text, TextInput, TouchableOpacity, View , Image, Alert } from 'react-native'
import React,{useState} from 'react'
import { icons, images } from '~/constants';
import { router, usePathname } from 'expo-router';

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

const SearchInput = ({intialQuery}) => {
 const pathname = usePathname()
 const [query, setQuery] = useState(intialQuery || '')
    // console.log("input value from FormFilled: " ,value);
    console.log("query from search-inut :",query);
    
  return (
//{/* container for form  */}

      <View className=' border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl 
       focus:border-secondary   flex-row  items-center  space-x-4 
      '>
  <TextInput 
  className="text-base mt-0.5 text-white flex-1 font-pregular"
      placeholder= "Search for a video topic"
      placeholderTextColor= "#cdcde0" 
      value={query}
      onChangeText={(e) => setQuery(e)  }
      keyboardType= 'default'
      />
      
      
       <TouchableOpacity
       onPress={()=> {
        if (!query) {
          return Alert.alert("Missing query", 
     "Please input something to search results across databas")}
     if (pathname.startsWith("/search")) router.setParams({ query });
     else router.push(`/search/${query}`);

       }}
       >
         <Image source={icons.search}
         resizeMode='contain'
         className=' w-5 h-5'
         />
       </TouchableOpacity>
      </View>

      

  )
}

export default SearchInput












