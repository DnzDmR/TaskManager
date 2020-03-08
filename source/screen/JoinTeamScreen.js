import React, { Component } from 'react';
import { View, Button, Image,ToastAndroid} from "react-native";
import { TextInput} from 'react-native-gesture-handler';
import styles from '../styles/BaseStyles';
import FirebaseController from '../controller/FirebaseController';

export default class JoinTeamScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            teamCode:"",
            teamPassword:"",
          }
    }


    render(){
        
        return(
            
            <View style={styles.container}>
                 
                <TextInput  
                style={styles.inputText}
                placeholder="Team Code" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({teamCode:text})}/>   
                
                <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Team Password" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({teamPassword:text})}/>

                <View style={[{ width: "75%", margin: 15 }]}>
                    <Button title="Join" color="#303B4A" onPress={this.joinTeam.bind(this)} />
                </View> 
                
            </View>
        );
    }

    joinTeam(){
        FirebaseController.joinTeam(this.state.teamCode,this.state.teamPassword);
        this.props.navigation.navigate("Home");
    }

}