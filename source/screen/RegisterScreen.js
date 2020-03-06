import React, { Component } from 'react';
import { View, Button, Image,ToastAndroid} from "react-native";
import { TextInput} from 'react-native-gesture-handler';
import styles from '../styles/BaseStyles';
import firebase from 'react-native-firebase';
import User from '../model/User';

export default class RegisterScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
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
                placeholder="First Name" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({firstname:text})}/>   
                
                <TextInput  
                style={styles.inputText}
                placeholder="Last Name" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({lastname:text})}/>   
                
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
                    <Button title="Register" color="#303B4A" onPress={this.register.bind(this)} />
                </View> 
                
            </View>
        );
    }

    register(){

        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(data => {
            var newUser = new User(this.state.email,this.state.firstname,this.state.lastname) ;
            firebase.firestore().collection("user").add(newUser);
        })
        .catch(err => {
            this.setState({errorMessage:err})
            ToastAndroid.show(String(this.state.errorMessage), ToastAndroid.SHORT);
        });
    }

}