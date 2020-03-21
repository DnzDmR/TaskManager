import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Card, Button, ListItem} from 'react-native-elements';
import styles from '../styles/BaseStyles';
import firebase from 'react-native-firebase';
import BaseEnum from '../controller/BaseEnum';

var unsubscribe;

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: null,
      taskList: [],
    };
  }

  render() {
    return (
      <ScrollView>
        <Card title={this.state.team ? this.state.team.teamName : 'degil'}>
          <View style={styles.buttonGroup}>
            <View style={styles.buttonGroupItem}>
              <Button
                title="Create Task"
                onPress={this.openCreateTaskScreen.bind(this)}
              />
            </View>
            <View style={styles.buttonGroupItem}>
              <Button
                title="Import Task"
                onPress={this.openImportTaskScreen.bind(this)}
              />
            </View>
          </View>
        </Card>
        <Card title="Task List" >
        {this.state.taskList.map((l, i) => (
          
            <ListItem
              key={i}
              leftAvatar={{ source: this.imageTest(l.taskStatus) }}
              title={l.taskSummary}
              subtitle={l.taskDescription}
              bottomDivider
              chevron
            
            />
          ))}
        </Card>

      </ScrollView>
    );
  }

  //TODO : Tasklar takım içerisinde yer alacak. KUllanıcının default bir taskı olacak
  //        Kullanıcı Detail seçtiğinde bu defaul olan açılacak
  
  imageTest(status){
    
    switch(status) {
      case "todo":
        return require('../images/todo.png')
        break;
      case "pass":
        return require('../images/pass.png')
        break;
      case "fail":
        return require('../images/fail.png')
        break;
      case "executing":
        return require('../images/executing.png')
        break;
      case "executing":
          return require('../images/executing.png')
          break;
      default:
        return require('../images/todo.png')
    }
    
  }
 
  
  async componentDidMount() {
 
    
    const a = this.props.navigation.addListener('focus', () => {
      this.setState({taskList:[]})
      this.update();
      this.subscribe();

    });
     
    const b = this.props.navigation.addListener('blur', () => {
      this.setState({taskList:[]})
      this.unsubscribe();
     });
 
  }
   async update() {
    
    firebase
      .firestore()
      .collection(BaseEnum.TEAM)
      .where('teamCode', '==', this.props.route.params.teamCode)
      .get()
      .then(data => {
        data.forEach(async element => {
          this.setState({team: element.data()});
        });
      });
  }

  subscribe(){
    
    this.unsubscribe =firebase
    .firestore()
    .collection(BaseEnum.TASK)
    .where('taskTeamCode', '==', this.props.route.params.teamCode)
    .onSnapshot(data => {
      data.forEach(element => {
          this.setState({
            taskList: [...this.state.taskList, element.data()]
          })
      });
    });

  }

  openCreateTaskScreen() {
    this.props.navigation.navigate('CreateTaskScreen',{"teamCode":this.props.route.params.teamCode});
  }

  openImportTaskScreen() {}
}
