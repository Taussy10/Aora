import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/Routes/Routes'

const App = () => {
  return (
   
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const App = () => {
//   return (
//     <View>
//       <Text className="text-3xl" >App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})