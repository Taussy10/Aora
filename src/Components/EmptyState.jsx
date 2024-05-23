import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const EmptyState = ({ title, subtitle , navigation }) => {
    return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/empty.png")}
      style={styles.img}
      resizeMode= 'contain'
      />
      <View style={{flexDirection:'column', alignItems:'center', }}>
      <Text style={{fontWeight: '500' , fontFamily:'Poppins-Regular' , fontSize: 24 , lineHeight: 32.4 , color: '#ffffff'}}>{subtitle}</Text>

<Text style={{fontWeight: '500' , fontFamily:'Poppins-Regular' , fontSize: 14 , lineHeight: 20.3 , color: '#CDCDE0'}}>{title}</Text>
</View>
<CustomButton
  title="Create" 
 handlePress={()=> navigation.navigate("Create")  }
/>
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'lightgreen'
    },
    img:{
   height: 215,
   width: 270,
   position: 'relative',
  //  bottom: 100,
  //  right: 75,
    }
})