import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '~/constants'

// these are props that can get by TabIcon compoenent if you defined
// them like <TabIcon />
const TabIcon = ({icon , color , name , focused }) => {
    return (
        <View className='  items-center  justify-center   w-20  pt-5   '>
            <Image source={icon}
            resizeMode= "contain"
            tintColor={color}
            className='  w-6 h-6'
            />
            <Text className={`${focused ? 'font-psemibold': "font-pregular" } text-[10px] `} style={{color:color}}>{name}</Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
   <Tabs screenOptions={
    {headerShown: false,
        // for by default tabBarLabel which is getting by headershow 
        // and header is getting from title if no title then it will  
        // take from Tab.screen name 
     tabBarShowLabel: false,

    //  we changed the default color 
     tabBarActiveTintColor: "#ffa001",
     tabBarInactiveTintColor: "#cdcde0",
    
     tabBarStyle: {
        backgroundColor: "#161622",
        borderTopWidth: 1,
        borderTopColor: "#232533",
        height: 50,
         borderTopRightRadius: 20,
         borderTopLeftRadius: 20,
         borderBottomRightRadius: 20,
         borderBottomLeftRadius: 20,
        //  padding: 30,
        
      },

     }}>
    {/* always write in small case name of tab just like you did while
    writing it's file name */}
    <Tabs.Screen name='home'
    // want to give opitons so give it an array 
    // because there are a lot of options
    options={{
        // for header title if it's shown
        title: "Home",
        // tabBarIcons props give two inbuilt props having default color 
        // for eg: default tabBarActiveTintColor(color) = blue
        //  tabBarInactiveTintColor(when you don't press that) = gray
          tabBarIcon: ({color , focused}) => (

          <TabIcon 
          icon={icons.home}
          color={color}
        //custome name
          name="Home"
          focused={focused}
          />
          )
    }}
    />

    <Tabs.Screen name='create' 

    options={{
    
        title: "Create",
          tabBarIcon: ({color , focused}) => (

          <TabIcon 
          icon={icons.plus}
          color={color}
          name="Create"
          focused={focused}
          />
          )
    }}
    />
    <Tabs.Screen name='profile'

    options={{
    
        title: "Profile",

          tabBarIcon: ({color , focused}) => (

          <TabIcon 
          icon={icons.profile}
          color={color}
          name="Profile"
          focused={focused}
          />
          )
    }}
    />
    <Tabs.Screen name='bookmark'

    options={{
    
        title: "Bookmark",

          tabBarIcon: ({color , focused}) => (

          <TabIcon 
          icon={icons.bookmark}
          color={color}
          name="Bookmark"
          focused={focused}
          />
          )
    }}
    />

   </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})