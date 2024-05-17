import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../container/Home/Home';
import City from '../container/City/City';
import DrawerNavigation from './DrawerNavigation';
import { ProductStack } from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
   
      <Tab.Navigator 
    
      >
      <Tab.Screen 
      options={{
        headerShown:false
      }}
      name="Home"
       component={DrawerNavigation} 
       />
      <Tab.Screen
      options={{
        headerShown:true
      }}
       name="City" 
       component={City} 
       />
      <Tab.Screen
     
       name="Product" 
       component={ProductStack} 
       />
    </Tab.Navigator>

  )
}