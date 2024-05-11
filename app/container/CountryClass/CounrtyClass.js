import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import CityClass from '../CityClass/CityClass';

export default class CounrtyClass extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            countryName:'india',
            CounrtyCode:'+91'
        }
    }
    changecountry = () =>{
       this.setState({
            countryName:'US',
            CounrtyCode:'+1'
       })
       
    }
  render() {
    return (
      <View>
        <Text>Counrty Class based on Component</Text>
        <Text>Country Name:{this.state.countryName}</Text>
        <Text>Country Code:{this.state.CounrtyCode}</Text>
        <TouchableOpacity onPress={this.changecountry}>
            <Text>Press Here</Text>
            </TouchableOpacity>
            <CityClass cn={this.state.countryName} cc={this.state.CounrtyCode} myname={'Parth'}/>
      </View>

    )
  }
}