//import React from 'react' ;
import { createStackNavigator}  from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ComponentScreen from './screens/ComponentScreen';
import ListScreens from './screens/ListScreens';
import ImageScreen from './screens/ImageScreen';
import CounterScreen from './screens/CounterScreen';
import ColorScreen from './screens/ColorScreen';
import SquareScreen from './screens/SquareScreen';
import TextScreen from './screens/TextScreen';
import BoxScreen from './screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    Components: ComponentScreen,
    List:ListScreens,
    Image:ImageScreen,
    Counter: CounterScreen,
    Color:ColorScreen,
    Square:SquareScreen,
    Text:TextScreen,
    Box:BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      title:'App'
    }
  }
);
const styles = StyleSheet.create({
  
});
export default createAppContainer(navigator);
