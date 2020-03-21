import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './source/screen/HomeScreen.js';
import LoginScreen from './source/screen/LoginScreen';
import RegisterScreen from './source/screen/RegisterScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingScreen from './source/screen/SettingScreen';
import DetailScreen from './source/screen/DetailScreen';
import JoinTeamScreen from './source/screen/JoinTeamScreen';
import CreateTeamScreen from './source/screen/CreateTeamScreen';
import CreateTaskScreen from './source/screen/CreateTaskScreen';
import firebase from 'react-native-firebase';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="TabNavigator"
            component={this.tabNavigator.bind(this)}
          />
          <Stack.Screen name="JoinTeamScreen" component={JoinTeamScreen} />
          <Stack.Screen name="CreateTeamScreen" component={CreateTeamScreen} />
          <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }

  //for nesting navigator
  tabNavigator() {
    const isAuth = this.state.currentUser;
    return (
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#ccc"
        barStyle={{backgroundColor: '#303B4A'}}>
        {!isAuth ? (
          <Tab.Screen
            name="Login"
            component={LoginScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="user" size={18} color={color} />
              ),
            }}
          />
        ) : (
          <></>
        )}
        {!isAuth ? (
          <Tab.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="user-plus" size={18} color={color} />
              ),
            }}
          />
        ) : (
          <></>
        )}
        {isAuth ? (
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="home" size={18} color={color} />
              ),
            }}
          />
        ) : (
          <></>
        )}
        {isAuth ? (
          <Tab.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="tasks" size={18} color={color} />
              ),
            }}
          />
        ) : (
          <></>
        )}
        {isAuth ? (
          <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="cog" size={18} color={color} />
              ),
            }}
          />
        ) : (
          <></>
        )}
      </Tab.Navigator>
    );
  }
}
