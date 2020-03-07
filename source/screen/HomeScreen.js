import React, { Component } from 'react';
import {FlatList,View, ScrollView, Text, Image } from "react-native";
import {Card, Button, ListItem ,Divider} from 'react-native-elements';
import styles from '../styles/BaseStyles';
import firebase from 'react-native-firebase';
import User from '../model/User';
import {Dimensions,StyleSheet} from 'react-native';

export default class HomeScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            user: new User(),
        }
    }
    

    render(){    
        const list = [
            {
              name: 'Amy Farha1',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President'
            },
            {
                name: 'Amy Farha2',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
              },
              {
                name: 'Amy Farha3',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
              },
              {
                name: 'Amy Farha4',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
              },
            {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            }]    
        var self = this;
        const auth = firebase.auth().currentUser;
        const user = firebase.firestore().collection("user")
        .where("email","==",auth.email).get()
        .then(data => {
            data.forEach(function(doc) {
                self.setState(prevState => ({user:{...prevState.user,firstname:doc.data().firstname,lastname:doc.data().lastname}}))
            });
    
        }).catch();
        
        return(

            <ScrollView>
                <Card>
                    <ListItem title={this.state.user.firstname+" "+this.state.user.lastname} leftAvatar={{source : {uri:"../images/logo.png"}}} />
                    <Divider />
                    <View style={styles.buttonGroup}>
                        <View style={styles.buttonGroupItem}>
                            <Button title="Join Team"/>
                        </View>
                        <View style={styles.buttonGroupItem}>
                            <Button title="Create Team"/>
                        </View>
                    </View>
                </Card>
                <Card title="Team List">
                    
                { list.map((l, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.name}
                        subtitle={l.subtitle}
                        bottomDivider
                        chevron
                    />
                ))}

                </Card>
            </ScrollView>

        );
    }

}