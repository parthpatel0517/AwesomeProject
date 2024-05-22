import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StyleDemo1() {
  return (
    <View style={Styles.container}>
        <Text style={[Styles.Blue, Styles.red]}>Hello</Text>
      <Text style={Styles.red}>StyleDemo1</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    Blue: {
      color: 'blue',
      fontSize: 50,
    },
    red: {
      color: 'red',
    },
  });
  