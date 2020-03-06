import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import styles from '../styles/BaseStyles';
import firebase from 'react-native-firebase';


export default class SettingScreen extends Component{

    render(){

        return(

            <View style={styles.container}>
                <Card title="Settings">                
                    <Button title="Logout" onPress={this.logout.bind(this)}/>
                </Card>
            </View>

        );
    }

    logout(){
        firebase.auth().signOut()
    }

}