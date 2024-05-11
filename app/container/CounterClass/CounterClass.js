import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count : 0 ,
        }
    }
    handalInc = () => {
        if(this.state.count < 5 ){
            this.setState({
                count : this.state.count + 1 
        
            })
        }   
    }
    handalDec = () => {
        if(this.state.count > -5 ){
            this.setState({
                count : this.state.count - 1 
        
            })
        } 
    }
  render() {
    return (
      <View>
        <Text>Count</Text>

        <TouchableOpacity onPress={this.handalInc}>
            <Text>+</Text>
        </TouchableOpacity>

        <Text>{this.state.count}</Text>

        <TouchableOpacity onPress={this.handalDec}>
            <Text>-</Text>
        </TouchableOpacity>

      </View>
    )
  }
}