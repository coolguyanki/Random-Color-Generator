import React,{useReducer} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const reducer = (state,action)=>{
  // state===={number:'number'}
  /// action === {type:'increment' || 'decrement', payload:1}

  switch(action.type){
    case 'increment' :
    return {...state,count:state.count+action.payload};
    case 'decrement' :
    return{...state, count:state.count+action.payload}
    case 'reset' :
    return{...state,count:state.count*0}
    default :
    return state;
  }
}
const CounterScreen = ()=>{
 const[state,dispatch] = useReducer(reducer,{count:0}) 

  return(
    <View>
    <Text> Current Count:{state.count} </Text>
    <Button title='increase' onPress={()=>{
    dispatch({type:'increment', payload:5})
    }}/>

    <Button title='decrease' onPress={()=>{
     dispatch({type:'decrement', payload:-1})
    }} />
    <Button title="reset" onPress={()=>{
      dispatch({type:'reset', payload:0})
    }} />
    </View>
  )
}
const styles= StyleSheet.create({

})

export default CounterScreen;