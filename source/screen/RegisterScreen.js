import React, { Component } from 'react';
import { View, Button} from "react-native";
import { TextInput} from 'react-native-gesture-handler';
import styles from '../styles/BaseStyles';


export default class RegisterScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            username:"",
            password:""
          }
    }


    render(){

        return(
            <View style={styles.container}>
              
               
                
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

                <TextInput  
                style={styles.inputText}
                placeholder="Email" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({email:text})}/>     
            
                <View style={[{ width: "75%", margin: 15 }]}>
                    <Button title="Register" color="#303B4A" STY />
                </View> 
            </View>
        );
    }

}