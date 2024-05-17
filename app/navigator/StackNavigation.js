import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import City from '../container/City/City';
import Details from '../container/Details/Details';
import Home from '../container/Home/Home';
import Country from '../container/Country/Country';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown:false
              }} 
             name="City" 
             component={City}
             />
            <Stack.Screen name="Country" component={Country} />
        </Stack.Navigator>
    )
}

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={ {
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}
export {ProductStack,HomeStack}