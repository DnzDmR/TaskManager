import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Card, Button, ListItem, Divider} from 'react-native-elements';
import styles from '../styles/BaseStyles';
import firebase from 'react-native-firebase';
import User from '../model/User';
import FirebaseController from '../controller/FirebaseController';
import BaseEnum from '../controller/BaseEnum';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new User(),
      teamList: [],
    };
  }

  render() {
    const auth = firebase.auth().currentUser;
    var self = this;
    firebase
      .firestore()
      .collection(BaseEnum.USER)
      .where('email', '==', auth.email)
      .get()
      .then(data => {
        data.forEach(function(doc) {
          self.setState(prevState => ({
            user: {
              ...prevState.user,
              firstname: doc.data().firstname,
              lastname: doc.data().lastname,
            },
          }));
        });
      })
      .catch();

    return (
      <ScrollView>
        <Card>
          <ListItem
            title={this.state.user.firstname + ' ' + this.state.user.lastname}
            leftAvatar={{source: {uri: '../images/logo.png'}}}
          />
          <Divider />
          <View style={styles.buttonGroup}>
            <View style={styles.buttonGroupItem}>
              <Button
                title="Join Team"
                onPress={this.openJoinTeamScreen.bind(this)}
              />
            </View>
            <View style={styles.buttonGroupItem}>
              <Button
                title="Create Team"
                onPress={this.openCreateTeamScreen.bind(this)}
              />
            </View>
          </View>
        </Card>
        <Card title="Team List">
          {this.state.teamList.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{source: {uri: l.teamPhoto}}}
              title={l.teamName}
              subtitle={l.teamSummary}
              bottomDivider
              chevron
              onPress={() => {
                this.selectedTeam(l.teamCode);
              }}
            />
          ))}
        </Card>
      </ScrollView>
    );
  }

  openCreateTeamScreen() {
    this.props.navigation.navigate('CreateTeamScreen');
  }

  openJoinTeamScreen() {
    this.props.navigation.navigate('JoinTeamScreen');
  }

  selectedTeam(code) {
    this.props.navigation.jumpTo('Detail', {teamCode: code});
  }

  async componentDidMount() {

    this.props.navigation.addListener('blur', () => {
      this.setState({teamList:[]})
    });

    this.props.navigation.addListener('focus', () => {
      this.setState({teamList:[]})
      this.subscribe();

    });


  }

  subscribe(){
    firebase
    .firestore()
    .collection(BaseEnum.USER)
    .where('email', '==', firebase.auth().currentUser.email)
    .onSnapshot(data => {
      data.forEach(element => {
        element.data().teamList.map(async i => {
          var temp = await FirebaseController.getTeam(i.teamCode);
          this.setState(prevState => ({
            teamList: [...prevState.teamList, temp],
          }));
        });
      });
    });
  }
}