import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StyleDemo2() {
  return (
    <View style={style.container1}>
         <View style={style.boxx1}>
        
        </View>
        <View style={style.boxx2}>
        
        </View>
        <View style={style.boxx3}>
        
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container1:{
        height:'100%'
    },
    boxx1:{
        backgroundColor:'red',
        height:'20%'
    },
    boxx2:{
     backgroundColor:'skyblue',
     height:'20%'
    },
    boxx3:{
        backgroundColor:'steelblue',
      height:'60%'
    }

})
