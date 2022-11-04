import React from 'react';
import {View,Text,StyleSheet,} from 'react-native';

const BoxScreen= ()=>{
  return(
   <View style={styles.parentStyle}>
   <View  style={styles.child1} />
   <View  style={styles.child2} />
   <View  style={styles.child3} />

   </View>
  );
}

const styles=StyleSheet.create({
  parentStyle:{
    borderWidth:3,
    borderColor:'black',
    // alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    
    height:200
  },
  child1:{
  height:50,
  width:50 ,
  backgroundColor:'red'





    // borderWidth:2,
    // borderColor:'red',
    // position:'relative',
    // fontSize:18
    // // alignSelf:'stretch'
    // // flex:1
  },
  child2:{
 height:50,
 width:50,
 backgroundColor:'green',
 marginTop:50




// borderColor:'red',
// borderWidth:2,
// // flex:1
  },
  child3:{
 height:50,
 width:50,
 backgroundColor:'purple'




// borderColor:'red',
// borderWidth:2,
// // flex:1
  }
})

export default BoxScreen;
