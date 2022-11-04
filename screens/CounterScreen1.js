import React,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const CounterScreen = ()=>{
  const [number,setNumber] = useState(0);
 

  return(
    <View>
    <Text> Current Count:{number} </Text>
    
    <Button title='increase' 
    onPress={()=>{
    setNumber(number+1);
    }}/>

    <Button title='decrease' 
    onPress={()=>{
    setNumber(number-1);
    }} />

    <Button title="reset" 
    onPress={()=>{
    setNumber(0);
    }} />
    </View>
  )
}
const styles= StyleSheet.create({

})

export default CounterScreen;