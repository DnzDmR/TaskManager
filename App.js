import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './source/screen/HomeScreen.js';
import LoginScreen from './source/screen/LoginScreen';
import RegisterScreen from './source/screen/RegisterScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingScreen from './source/screen/SettingScreen';
import DetailScreen from './source/screen/DetailScreen';
import firebase from 'react-native-firebase';

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentUser:null
    }
  }

  render(){

    const isAuth = this.state.currentUser;
    return(
      <NavigationContainer>
        <Tab.Navigator  
          activeColor="#f0edf6"
          inactiveColor="#ccc"
          barStyle={{ backgroundColor: '#303B4A' }}>
          { !isAuth ? <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarIcon: ({color,size}) => (<Icon name="user" size={18} color={color} />) }} /> : <></> } 
          { !isAuth ? <Tab.Screen name="Register" component={RegisterScreen} options={{ tabBarIcon: ({color,size}) => (<Icon name="user-plus" size={18} color={color} />) }} /> : <></> } 
          { isAuth ? <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color,size}) => (<Icon name="home" size={18} color={color} />) }} /> : <></> } 
          { isAuth ? <Tab.Screen name="Detail" component={DetailScreen} options={{ tabBarIcon: ({color,size}) => (<Icon name="tasks" size={18} color={color} />) }} /> : <></> } 
          { isAuth ? <Tab.Screen name="Settings" component={SettingScreen} options={{ tabBarIcon: ({color,size}) => (<Icon name="cog" size={18} color={color} />) }} /> : <></> } 
        </Tab.Navigator>
      </NavigationContainer>
    );
    
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({currentUser:user});
    });
  }
  
}
