import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function TimerFun() {
    const [time , setTime ] = useState(new Date());

    const tick= () => {
        setTime(new Date());
    }



    //using useEffect hook , we can use lifecycle methods in functionbased component
    useEffect(() => { 
        //componentDidMount     , componentDidUpdate
        const timeInterval = setInterval(() => tick(), 1000);

        //componentWillUnmount
        return () => {
            clearInterval(timeInterval);
        }
    } ,[time])
  return (
    <View>
      <Text style={{fontSize:30, fontFamily:'Roboto-BlackItalic'}}>hello</Text>
      <Text><MaterialIcons name="home" size={30} color="red" />TimerFun</Text>
      <Text>{time.toLocaleTimeString()}</Text>
    </View>
  )
}