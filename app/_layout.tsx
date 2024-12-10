import '../global.css';
import { Stack   } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import {useFonts} from 'expo-font'

//It  Makes the native splash screen (configured in app.json) remain visible until hideAsync is called
// you can aslo remove it what if the resources not able to able fetch then it will not move
// from splash screen but no need to do that because we have resources
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
 const [loaded , error ] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"), 
  }) 

  // if one of the things statsify then will do hideAsyncc
  useEffect(() => {
     
// used to explicitly raise an exception here we are rasing an erorr if errror occurs
if (error) throw error 
if (loaded) {
  SplashScreen.hideAsync()
}
  }, [loaded , error])
// if one of the changes then useEffect will execute

  if (!loaded && !error) {
    return null
    
  }
  

// always write like this if (tabs) then write (tabs)
  return (
    <Stack screenOptions={{headerShown: false}} >
      <Stack.Screen name='index' />
      <Stack.Screen name='(tabs)' />
    </Stack>
  ) 
  
  // <Stack />;
}
