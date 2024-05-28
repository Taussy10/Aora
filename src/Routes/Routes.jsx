import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';

import Onboarding from '../Screens/Onboarding';
import Home from '../Screens/Home';
import Bookmarked from '../Screens/Bookmarked';
import Profile from '../Screens/Profile';
import Create from '../Screens/Create';
import SignUp from '../Screens/Auth/SignUp';
import SignIn from '../Screens/Auth/SignIn';
import GlobalProvider from '../Context/GlobalProvider';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabsRoute = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmarked" component={Bookmarked} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Create" component={Create} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='TabsRoute' component={TabsRoute} />
      </Stack.Navigator>
    </GlobalProvider>
  );
};

const styles = StyleSheet.create({});

export default Routes;
