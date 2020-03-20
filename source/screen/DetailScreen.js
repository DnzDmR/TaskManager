import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
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
      <View>
        <Card title={this.state.team ? this.state.team.teamName : 'degil'}>
          <Text>Hello World</Text>
        </Card>
      </View>
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
}