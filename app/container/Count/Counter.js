import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/action/counter.action';

export default function Counter() {
    const dispatch = useDispatch();//3
    //2
    const handalInc = ()=>{
        dispatch(increment()); //4
    }
    const handalDec = ()=>{
        dispatch(decrement()); 
    }

  return (
    
    <View>
      <Text>Counter</Text>
     {/* 1 */}
      <TouchableOpacity onPress={handalInc}> 
            <Text>+</Text>
        </TouchableOpacity>

        {/* <Text>{Count}</Text> */}

        <TouchableOpacity onPress={handalDec}>
            <Text>-</Text>
        </TouchableOpacity>

    </View>
  )
}