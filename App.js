import React from 'react';
import {Text, View} from 'react-native';
import Home from './Home.js';
import BasicInformation0 from './BasicInformation0.js';
import Habit0 from './Habit0.js';
import Person0 from './Person0';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const HomeStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer initialRouteName = "Home">
      <HomeStack.Navigator>
        <HomeStack.Screen name = "Home" component = {Home}/>
        <HomeStack.Screen name = "基本資料0" component={BasicInformation0}/>
        <HomeStack.Screen name = "興趣0" component={Habit0}/>
        <HomeStack.Screen name = "沈哲寬" component={Person0}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

function PersonNode0(){

}

