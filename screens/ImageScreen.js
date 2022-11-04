import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetails';

const ImageScreen = ()=>{
  return(
    <View>
    < ImageDetail 
     title='Forest' 
     imagesource={require('../assets/snack-icon.png')}
     score={9}
     name={'hey'}/>

    <ImageDetail 
    title='beach'
    score={10}
    name={'congo'}/>

    <ImageDetail 
    title='Mountain'
    score={11}
    name={'wow'}/>
    
    </View>
  )
  
}
const styles= StyleSheet.create({

});

export default  ImageScreen;