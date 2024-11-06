import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect, Stack } from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon, color, name, focused}) =>{
  return(
    <View className="flex items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
      <Text
        className={`${focused ? "font-bold" : "font-semibold"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
    
  )
  
}

const TabLayout = () => {
  return (
   <>
    <Tabs
    screenOptions={{
          tabBarActiveTintColor: "#B87333",
          tabBarInactiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#00000f",
            borderTopWidth: .4,
            borderTopColor: "#84907C",
            height: 60,
          },
        }}>


      <Tabs.Screen
        name="home"
        options={{
          title:'Home',
          headerShown: false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="promo"
        options={{
          title:'Promo',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.promo}
            color={color}
            name="Promo"
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="foods"
        options={{
          title:'Foods',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.foods}
            color={color}
            name="Foods"
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="location"
        options={{
          title:'Location',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.location}
            color={color}
            name="Location"
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="profile"
        options={{
          title:'Profile',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.profile}
            color={color}
            name="Profile"
            focused={focused}
           />
          )
        }}
      />


    </Tabs>
   </>
  )
}

export default TabLayout