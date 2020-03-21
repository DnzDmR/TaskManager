import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../styles/BaseStyles';
import FirebaseController from '../controller/FirebaseController';
import Task from '../model/Task';

export default class CreateTaskScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: new Task()
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          placeholder="Task Summary"
          placeholderTextColor="#003f5c"
          onChangeText={text =>
            this.setState(prevState => ({
              team: {...prevState.task, taskSummary: text},
            }))
          }
        />

        <TextInput
          style={styles.inputText}
          placeholder="Task Description"
          placeholderTextColor="#003f5c"
          onChangeText={text =>
            this.setState(prevState => ({
              team: {...prevState.task, taskDescription: text},
            }))
          }
        />

        <TextInput
          style={styles.inputText}
          placeholder="Due Date"
          placeholderTextColor="#003f5c"
          onChangeText={text =>
            this.setState(prevState => ({
              team: {...prevState.task, taskDueDate: text},
            }))
          }
        />

        <TextInput
          style={styles.inputText}
          placeholder="Assignee"
          placeholderTextColor="#003f5c"
          onChangeText={text =>
            this.setState(prevState => ({
              team: {...prevState.task, taskAssignee: text},
            }))
          }
        />

        <View style={[{width: '75%', margin: 15}]}>
          <Button
            title="Create Task"
            color="#303B4A"
            onPress={this.createTask.bind(this)}
          />
        </View>
        <View style={[{width: '75%', margin: 15}]}>
          <Button
            title="Return"
            color="#303B4A"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }

  createTask() {
    var newTask = this.state.task;
    newTask.taskTeamCode = this.props.navigation.getParam('teamCode');
    FirebaseController.newTask(newTask);
    this.props.navigation.navigate('Home');
  }
}