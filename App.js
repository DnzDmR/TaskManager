import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './source/screen/HomeScreen.js';
import LoginScreen from './source/screen/LoginScreen';
import RegisterScreen from './source/screen/RegisterScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AboutScreen from './source/screen/AboutScreen.js';

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
          <Tab.Navigator  
            activeColor="#f0edf6"
            inactiveColor="#ccc"
            barStyle={{ backgroundColor: '#303B4A' }}>

            <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarIcon: ({color,size}) => (<Icon name="user" size={18} color={color} />) }} />
            <Tab.Screen name="Sign Up" component={RegisterScreen} options={{ tabBarIcon: ({color,size}) => (<Icon name="user-plus" size={18} color={color} />) }} />
            <Tab.Screen name="About" component={AboutScreen} options={{ tabBarIcon: ({color,size}) => (<Icon name="user-plus" size={18} color={color} />) }} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
    else{
      return(
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color,size}) => (<Icon name="address-card" size={18} color={color} />) }} />
            <Tab.Screen name="Register" component={RegisterScreen} options={{ tabBarIcon: ({color,size}) => (<Icon name="address-card" size={18} color={color} />) }} />
            <Tab.Screen name="Login" component={LoginScreen} options={{tabBarIcon: ({color,size}) => (<Icon name="address-card" size={18} color={color} />)}} />
            <Tab.Screen name="About" component={AboutScreen} options={{ tabBarIcon: ({color,size}) => (<Icon name="user-plus" size={18} color={color} />) }} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
  }
}
