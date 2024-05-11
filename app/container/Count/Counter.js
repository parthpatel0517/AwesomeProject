import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Counter() {
    const [Count , setCount ] = useState('0');

    const handalInc = () => {
        if(Count < 5){
            setCount(Count + 1)
        }
       
    }
    const handalDec = () => {
        if(Count > -5){
            setCount(Count - 1)
        }
       
    }
  return (
    <View>
      <Text>Counter</Text>

      <TouchableOpacity onPress={handalInc}>
            <Text>+</Text>
        </TouchableOpacity>

        <Text>{Count}</Text>

        <TouchableOpacity onPress={handalDec}>
            <Text>-</Text>
        </TouchableOpacity>

    </View>
  )
}