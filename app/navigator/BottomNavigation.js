import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../container/Home/Home';
import City from '../container/City/City';
import DrawerNavigation from './DrawerNavigation';
import { ProductStack } from './StackNavigation';
import StyleDemo1 from '../container/Styles/StyleDemo1';
import StyleDemo2 from '../container/Styles/StyleDemo2';
import StyleDemo3 from '../container/Styles/StyleDemo3';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (

    <Tab.Navigator

    >
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name="Home"
        component={DrawerNavigation}
      />
      <Tab.Screen
        options={{
          headerShown: true
        }}
        name="City"
        component={City}
      />
      <Tab.Screen

        name="Product"
        component={ProductStack}
      />
      <Tab.Screen

        name="StyleDemo1"
        component={StyleDemo1}
      />
      <Tab.Screen

        name="StyleDemo2"
        component={StyleDemo2}
      />
      <Tab.Screen

        name="StyleDemo3"
        component={StyleDemo3}
      />
    </Tab.Navigator>

  )
}