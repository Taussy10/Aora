import { StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { images } from '~/constants'
import CustomButton from './custom-button'
import { useRouter } from 'expo-router'
type propsType = {
    title: string
    subtitle: string
}


const EmptyState = ({title , subtitle}:propsType) => {
    const router = useRouter()
  return (
    <View className="   justify-center items-center px-4">
    <Image 
    source={images.empty}
    resizeMode= 'contain'
className=' w-[270px] h-[216px]'
    />
      <Text className="text-xl text-center font-psemibold text-white mt-2">{title}</Text>
<Text className="text-sm font-pmedium text-gray-100">{subtitle}</Text>
        
      <CustomButton 
      title='Create Video'
      handlePress={() => router.push("/home")}
       containerStyles="w-full my-5"

      />

    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({})