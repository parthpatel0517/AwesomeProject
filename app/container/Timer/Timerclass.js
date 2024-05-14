import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Timer extends Component {


    constructor(props) {
        super(props);
        this.state={
            time:new Date()
        }
    }
    tick = () => {
        this.setState({
            time: new Date()
        })
    }
    componentDidMount=()=>{
       this.timeref= setInterval(this.tick,1000)
    }
    
    componentDidUpdate=(prevProps,prevState)=>{
        if(prevState.time !== this.state.time){
            console.log("componentDidUpdate");
        }
    }
    componentWillUnmount=()=>{
        clearInterval(this.timeref)
    }
    
    render() {
    return (
      <View style={{backgroundColor:'skyblue', height:900}}>
        {/* <Text>Timer</Text> */}
        <Text style={{  
            transform: "rotate(90.5deg)",
            fontSize:90,
            marginTop:400,
            backgroundColor:'blue' 
            }} >{this.state.time.toLocaleTimeString()}</Text>
      </View>
    )
  }
}
