import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type propsType = {
    title: string,
    handlePress?: () => void,
    isLoading?: boolean,
    containerStyles?: string; // Optional styles for the button container
    textStyles?: string;      // Optional styles for the text
    // question mark is for optional
}

const CustomButton = ({title , handlePress , containerStyles , textStyles, isLoading , 
}:propsType) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    // add if loading show indicator no
    // disabled={isLoading === true ?  <ActivityIndicator color={"white"} />: 

      // <Text className={`text-primary font-psemibold text-lg ${textStyles} `} >{title}</Text>
    // }
    className= {`bg-secondary rounded-xl min-h-[62px] justify-center items-center
    ${containerStyles}
    ${isLoading ? "opacity-50": " " }
    `}>
      <Text className={`text-primary font-psemibold text-lg ${textStyles} `} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})