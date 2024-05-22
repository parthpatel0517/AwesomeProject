import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

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