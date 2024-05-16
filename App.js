import { View, Text } from 'react-native'
import React from 'react'
import Country from './app/container/Country/Country'
import CounrtyClass from './app/container/CountryClass/CounrtyClass'
import CityClass from './app/container/CityClass/CityClass'
import Count from './app/container/CounterClass/CounterClass'
import City from './app/container/City/City'
import Counter from './app/container/Count/Counter'
import Product from './app/container/Product/Product'
import ProductClass from './app/container/ProductClass/ProductClass'
import Timer from './app/container/Timer/Timerclass'
import TimerFun from './app/container/Timer/TimerFun'
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/container/Home/Home'
import Details from './app/container/Details/Details'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
  
     <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
     </NavigationContainer>
  
  
  )
}