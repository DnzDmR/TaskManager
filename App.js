import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './source/screen/HomeScreen.js';
import LoginScreen from './source/screen/LoginScreen';
import RegisterScreen from './source/screen/RegisterScreen';


const Tab = createMaterialBottomTabNavigator();

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      userToken:null
    }
  }

  render(){

    if(this.state.userToken==null){

      return(
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={LoginScreen} options={{tabBarVisible:true} } />
            <Tab.Screen name="Register" component={RegisterScreen} options={{tabBarVisible:true} } />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
    else{
      return(
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarVisible:true} } />
            <Tab.Screen name="Register" component={RegisterScreen} options={{tabBarVisible:true} } />
            <Tab.Screen name="Login" component={LoginScreen} options={{tabBarVisible:true} } />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
  }
}
