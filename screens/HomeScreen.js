import React from 'react';
import { Text, StyleSheet , View , Button, TouchableOpacity} from 'react-native';

const HomeScreen= ({navigation}) => {
return (
  <View style={styles.TextStyle}>
  <Text style={styles.TextStyle}> This is  HomeScreen</Text>
  <Button 
  title='go to Components Screen'
  onPress = {() => navigation.navigate('Components')}/>
 

 <Button onPress={()=> navigation.navigate('List')}
 title='Go to List screen'
 />

 <Button
 title='Go to imageScreen'
 onPress={()=> navigation.navigate('Image')}
 />

 <Button
 title="Go to CounterScreen"
 onPress={()=> navigation.navigate('Counter')}/>

 <Button 
 title="Go to ColorScreen"
 onPress={()=>{
   navigation.navigate('Color')
 }} />

 <Button 
 title=" Go to SquareScreen"
 onPress={()=> navigation.navigate('Square')} />

 <Button
 title='Go to TextScreen'
 onPress={()=> navigation.navigate('Text')}
 />
 
 <Button
 title='Go to BoxScreen'
 onPress={()=>navigation.navigate('Box')}
 />
 
  </View>
);


};
const styles= StyleSheet.create({
  TextStyle:{
    fontSize:20,
    alignItems:'center',
    justifyContent:'center'
  
    
    
  }
});
 export default HomeScreen;