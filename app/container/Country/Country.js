import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import City from '../City/City';

export default function Country() {
  const [ countryName , setCounrtyName] = useState('india');
  const [ countryCode , setCountryCode ] = useState('+91');

  const changecounry = ()=>{
    setCounrtyName('us');
    setCountryCode('+1');
  }

  return (
    <View>
      <Text>Country</Text>
      <Text>{countryName}</Text>
      <Text>{countryCode}</Text>

      <TouchableOpacity 
        onPress={changecounry}
      >
        <Text>Change Country</Text>
      </TouchableOpacity>
      <City cn = {countryName} cc = {countryCode}></City>
    </View>
  )
}