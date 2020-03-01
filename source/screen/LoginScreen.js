import React, { Component } from 'react';
import { View, Button, Image} from "react-native";
import { TextInput} from 'react-native-gesture-handler';
import styles from '../styles/BaseStyles';

export default class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
          }
    }

    render(){

        return(
            <View style={styles.container}>
              
                <Image source={require('../images/logo.png')} style={styles.logo} />
                
                <TextInput  
                  style={styles.inputText}
                  placeholder="Username" 
                  placeholderTextColor="#003f5c"
                  onChangeText={text => this.setState({username:text})}/>
                
                <TextInput  
                  secureTextEntry
                  style={styles.inputText}
                  placeholder="Password" 
                  placeholderTextColor="#003f5c"
                  onChangeText={text => this.setState({password:text})}/>        
                
                <View style={[{ width: "75%", margin: 15 }]}>
                    <Button title="Login" color="#303B4A" STY />
                </View> 

            </View>
          );
        }
      }   