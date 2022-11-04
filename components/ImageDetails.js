import React from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';

const ImageDetail = ({imagesource,score,title,name})=>{
  return(
    <View>
    <Image source={imagesource} />
    <Text> {title} </Text>
    <Text> ImageScore - {score}</Text>
    <Text> {name}</Text>

    </View>
  )
  
}
const styles= StyleSheet.create({

});

export default  ImageDetail;