import React,{useState} from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const TextScreen = ()=>{
  const [password,setPassword] = useState();

  return(
    <View> 
    <Text> Enter Password:</Text>
    <TextInput 
    style={styles.input} 
    value={password}
    onChangeText={(newValue) => setPassword(newValue)}
    /> 
    <Text> My Password is:{password}</Text>
    
    </View>

  )
}
const styles=StyleSheet.create({
  input:{
    margin:15,
    borderColor:'black',
    borderWidth:1
  }
})
export default TextScreen;