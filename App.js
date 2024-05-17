import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/container/Home/Home'
import Details from './app/container/Details/Details'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStack, ProductStack } from './app/navigator/StackNavigation';
import 'react-native-gesture-handler';
import DrawerNavigation from './app/navigator/DrawerNavigation';
import BottomNavigation from './app/navigator/BottomNavigation';



export default function App() {
  return (
  
     <NavigationContainer>
      <BottomNavigation />
     </NavigationContainer>
  
  
  )
}