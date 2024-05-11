import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function City({cn, cc}) {
  const [ CityName , setCityName] = useState('Surat');
  const [ FamousPlace , setFamousPlace ] = useState('Dummas');

  const changecity = ()=>{
    setCityName('Baroda');
    setFamousPlace('ABCD');
  }

  return (
    <View>
      <Text>City</Text>
      <Text>{CityName}</Text>
      <Text>{FamousPlace}</Text>
      <Text>{cn}</Text>
      <Text>{cc}</Text>

      <TouchableOpacity 
        onPress={changecity}
      >
        <Text>Change City</Text>
      </TouchableOpacity>

    
    </View>
  )
}