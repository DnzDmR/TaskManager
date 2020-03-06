import React, { Component } from 'react';
import { View, Button, Image,ToastAndroid} from "react-native";
import { TextInput} from 'react-native-gesture-handler';
import styles from '../styles/BaseStyles';
import firebase from 'react-native-firebase';


export default class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            errorMessage:""
          }
    }

    render(){

        return(
            <View style={styles.container}>
              
                <Image source={require('../images/logo.png')} style={styles.logo} />
                
                <TextInput  
                  style={styles.inputText}
                  placeholder="Email" 
                  placeholderTextColor="#003f5c"
                  onChangeText={text => this.setState({email:text})}/>
                
                <TextInput  
                  secureTextEntry
                  style={styles.inputText}
                  placeholder="Password" 
                  placeholderTextColor="#003f5c"
                  onChangeText={text => this.setState({password:text})}/>        
                
                <View style={[{ width: "75%", margin: 15 }]}>
                    <Button title="Login" color="#303B4A" onPress={this.login.bind(this)} />
                </View> 

            </View>
          );
        }

        //TODO : You should take email and password from textbox
        login(){
          firebase.auth().signInWithEmailAndPassword("denizcandemir@outlook.com","123456")
          .then(user => console.log(user))
          .catch(err => {
            this.setState({errorMessage:err})
            ToastAndroid.show(String(this.state.errorMessage), ToastAndroid.SHORT);
          });
        }
      }   