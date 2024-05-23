import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'


export default function StyleDemo3() {
  return (

    <View style={style.container}>
      <View style={style.box1}></View>
      <View style={style.box2}></View>
      <View style={style.box3}></View>
    <Image
      source={{uri:'https://picsum.photos/id/237/200/300 '}}
      style={{width:100,height:100}}
    />
    <Image
      source={require('../../assets/Img/9b.jpg')} 
      style={{width:100,height:100}}
    />

    </View >
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    position: 'relative',
    columnGap: 10
  },
  box1: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 50,
    right: 50,
    backgroundColor: 'blue'
  },
  box2: {
    width: 100,
    height: 100,
    top: 50,
    backgroundColor: 'green'
  },
  box3: {
    width: 100,
    height: 100,
    top: 50,
    backgroundColor: 'red'
  }
})




