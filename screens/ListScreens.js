import React from 'react';
import { Text, StyleSheet , View, FlatList}  from 'react-native';
const ListScreens= () => {
  const friends=[
    {name:'Ankit', age: '22', class:'10'},
    {name:'Akshay', age:'23', class:'11'},
    {name:'Ajeet', age:'24', class:'12'},
    {name:'Rishi', age:'25', class :'13'},
    {name:'Akshit', age:'25', class :'14'},
    {name:'Manisha', age : '26' , class :'15'},
    {name:'Sunny', age : '27', class : '16'},
  ]
  
return (
  <FlatList 
  //horizontal
  KeyExtractor ={friends => friends.name}
  data={friends} 
  renderItem={({item}) =>{
return (
  <Text>Name-{item.name},  Age - {item.age} , class {item.class} , </Text>
);
  }}
  />
);
};
// const styles= StyleSheet.create({
//   TextStyle:{
//     fontSize:20,
//     alignItems:'center',
//     justifyContent:'center'
  
    
    
//   }
// });
 export default ListScreens;