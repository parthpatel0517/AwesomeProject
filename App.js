import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import DrawerNavigation from './app/navigator/DrawerNavigation';
import BottomNavigation from './app/navigator/BottomNavigation';
import Switche from './app/component/AllComponent';
import Buttons from './app/component/AllComponent';
import AllComponent from './app/component/AllComponent';
import Counter from './app/container/Count/Counter';



export default function App() {
  return (
  
    <>
    {/* <AllComponent></AllComponent> */}
    <Counter></Counter>
    </>
  
  )
}