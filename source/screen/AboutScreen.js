import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import styles from '../styles/BaseStyles';
export default class AboutScreen extends Component{

    render(){

        return(

            <View style={styles.container}>
                <Card title="ABOUT">                
                    <Text>Excepteur quis sit magna quis minim est est consectetur incididunt non labore et. Ut aliquip velit ullamco eu minim consectetur pariatur sint ullamco labore elit eiusmod. Elit anim reprehenderit ut qui enim voluptate ut. Aute veniam veniam sunt laborum do Lorem pariatur ullamco ad est eiusmod ipsum. Tempor culpa occaecat cupidatat eu labore eu sit commodo do. Est aliqua et laborum et labore nostrud Lorem nulla. Do dolor velit nostrud voluptate aliquip ipsum irure commodo culpa quis sint cupidatat.</Text>
                </Card>
            </View>

        );
    }

}