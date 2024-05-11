import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class CityClass extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            CityName:'Surat',
            FamousPlace:'Dummas'
        }
    }
    chnagecity = () =>{
       this.setState({
            CityName:'Ahemdabad',
            FamousPlace:'River Front'
       })
       
    }
  render() {
    return (
      <View>
        <Text>City Class</Text>
        <Text>Country Name: {this.props.cn}</Text>
        <Text>Country Code: {this.props.cc}</Text>
        <Text>My Name: {this.props.myname}</Text>
        <Text>City Name:{this.state.CityName}</Text>
        <Text>FamouscPlace :{this.state.FamousPlace}</Text>
        <TouchableOpacity onPress={this.chnagecity}>
            <Text>Press Here</Text>
            </TouchableOpacity>
      </View>

    )
  }
}