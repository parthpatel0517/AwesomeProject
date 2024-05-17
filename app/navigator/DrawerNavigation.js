import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../container/Home/Home';
import Details from '../container/Details/Details';
import { HomeStack, ProductStack } from './StackNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen   name="Home" component={HomeStack} />
      <Drawer.Screen   name="Product" component={ProductStack} />
    </Drawer.Navigator>
  )
}