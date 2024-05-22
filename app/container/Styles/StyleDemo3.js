import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StyleDemo3() {
  return (
    <View style={[styles.container,{
        flexDirection: 'column',
    }
    ]}>
     <View style={{flex: 1, backgroundColor: 'darkorange'}} ></View>
     <View style={{flex : 2, backgroundColor: 'green'}} ></View>
    </View>
    
  )
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
          }
})