import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Card, Button} from 'react-native-elements';
import styles from '../styles/BaseStyles';
import firebase from 'react-native-firebase';
import BaseEnum from '../controller/BaseEnum';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: null,
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
        <Card title="Task List" />
      </ScrollView>
    );
  }

  //TODO : Tasklar takım içerisinde yer alacak. KUllanıcının default bir taskı olacak
  //        Kullanıcı Detail seçtiğinde bu defaul olan açılacak
  async componentDidMount() {
    this.update();
  }

  async componentDidUpdate() {
    this.update();
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

  openCreateTaskScreen() {
    this.props.navigation.navigate('CreateTaskScreen',{"teamCode":this.props.route.params.teamCode});
  }

  openImportTaskScreen() {}
}
