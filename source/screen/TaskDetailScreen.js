import React, {Component} from 'react';
import {View,Text,Picker, ScrollView} from 'react-native';
import {Card, Button, ListItem} from 'react-native-elements';
import styles from '../styles/BaseStyles';
import firebase from 'react-native-firebase';
import BaseEnum from '../controller/BaseEnum';
 
 

export default class TaskDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null,
      taskList: [],
    };
  }
  

  render() {
    return (
      <ScrollView>
 
      <Card>
      <ListItem title="Summary" subtitle={this.props.route.params.task.taskSummary}></ListItem>
      <ListItem title="Description" subtitle={this.props.route.params.task.taskSummary}></ListItem>
      <ListItem title="Assignee" subtitle={this.props.route.params.task.taskAssignee}></ListItem>
      <ListItem title="Status" subtitle={this.props.route.params.task.taskStatus}></ListItem>
      <ListItem title="Creator By" subtitle={this.props.route.params.task.taskCreatorBy}></ListItem>
      <ListItem title="Due Date" subtitle={this.props.route.params.task.taskDueDate}></ListItem>
      <Picker
        selectedValue={this.state.team}
        style={{marginLeft:10, marginBottom:10, width: "100%"}}
        onValueChange={(itemValue, itemIndex) =>
        this.setState({team: itemValue})
        }>

        <Picker.Item label="TODO" value="TODO" />
        <Picker.Item label="ACTIVE" value="ACTIVE" />
        <Picker.Item label="DONE" value="DONE" />
        <Picker.Item label="CANCELED" value="CANCELED" />
      
      </Picker>

      <Button title="Update"/>

      </Card>

        
      </ScrollView>
    );
  }

 
}