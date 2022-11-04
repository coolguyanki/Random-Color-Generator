import React from 'react';
import { Text, StyleSheet , View} from 'react-native';
const ComponentScreen= () => {
  const name= 'Ankit kumar';
return (
  <View style={styles.TextStyle}>
  <Text style={styles.TextStyle}> Getting started with React Native</Text>
  <Text style={styles.textstyle}> My name is {name}</Text>


  </View>
);


};
const styles= StyleSheet.create({
  TextStyle:{
    fontSize:22,
    alignItems:'center',
    justifyContent:'center'  
  },
  textstyle:{
    fontSize:20,
  }
});
 export default ComponentScreen;