import React, { Component } from 'react';
import { View, Button, Image,ToastAndroid} from "react-native";
import { TextInput} from 'react-native-gesture-handler';
import styles from '../styles/BaseStyles';
import firebase from 'react-native-firebase';
import User from '../model/User';
import Team from '../model/Team';
import Member from '../model/Member';

export default class CreateTeamScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            team: new Team(),
            errorMessage:""
          }
    }


    render(){
        
        

        return(
            
            <View style={styles.container}>
                                
                <TextInput  
                style={styles.inputText}
                placeholder="Team Name" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState(prevState => ({team:{...prevState.team,teamName:text}}))}/>   
                
                <TextInput  
                style={styles.inputText}
                placeholder="Team Summary" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState(prevState => ({team:{...prevState.team,teamSummary:text}}))}/>   
                
                <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Access Password" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState(prevState => ({team:{...prevState.team,teamPassword:text}}))}/>   


                <View style={[{ width: "75%", margin: 15 }]}>
                    <Button title="Create Team" color="#303B4A" onPress={this.createTeam.bind(this)} />
                </View> 
                <View style={[{ width: "75%", margin: 15 }]}>
                    <Button title="Return" color="#303B4A" onPress={ () => this.props.navigation.navigate("Home")} />
                </View> 
            </View>
        );
    }

    createTeam(){
        
        var newTeam = this.state.team;
        newTeam.teamCreatorEmail = firebase.auth().currentUser.email;
        firebase.firestore().collection("team").add(newTeam);

        var joinTeam = new Member(newTeam.teamCreatorEmail,newTeam.teamName);
        firebase.firestore().collection("member").add(joinTeam);
    }

}