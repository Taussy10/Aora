import {  Text, TextInput, TouchableOpacity, View , Image, Alert } from 'react-native'
import React,{useState} from 'react'
import { icons, images } from '~/constants';
import { router, usePathname } from 'expo-router';

type propsType = {
  intialQuery: string,

    // question mark is for optional
}

const SearchInput = ({intialQuery}:propsType) => {
  
  // to understand usePathname hook you have to understand 
  // let's say amazon site is: amazon.com/products/shoe?color=blue&size=large
  // amazon.com is domain , products and shoe is page/path within the website
  // and ?color=blue&size=large is search/query params that you searched 
  // so , this usePathname hook removes query params and only return pathname(with domain offcourse ) 
  // that is /amazon.com/products/shoe
 const pathname = usePathname()
 const [query, setQuery] = useState<string>(intialQuery || '')
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
      value={query.trim()}
      onChangeText={(e) => setQuery(e)  }
      keyboardType= 'default'
      />
      
      
       <TouchableOpacity
       onPress={()=> {
        if (!query) { // Alert with return ? cause it's a jsx syntax if you want to pass jsx in if statement then you have to return it 
          return Alert.alert("Missing query", 
     "Please input something to search results across databas")}

     if (pathname.startsWith("/search")) router.setParams({ query });
     else router.push(`/search/${query}`);
    // pathname.startsWith is for checking wheter it has converted into
    //  string or not if converted then send the query to [query] else router.push to send it  

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












