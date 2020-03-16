import firebase from 'react-native-firebase';
import BaseEnum from './BaseEnum';
import User from '../model/User';
import {ToastAndroid} from "react-native";
export default class FirebaseController {

 
     static async getUserTeamList(userEmail){

        var userTeamList = [];
        var self = this;
        await firebase.firestore().collection(BaseEnum.TEAM_MEMBERS).where("userEmail","==",userEmail)
        .onSnapshot(data =>{
            data.forEach(async element => {
                userTeamList.push(await self.getTeam(element.data().teamName));
            });        
        }).catch(err => console.log("error:"+err)); 
        return userTeamList;
    }

    
    static async getTeam(accessCode){
        
        var tempTeam;

        await firebase.firestore().collection(BaseEnum.TEAM).where("teamCode","==",accessCode)
        .get()  
        .then(data =>{
            data.forEach(element =>{
                tempTeam = element.data();
            });
        }).catch(err => 
            ToastAndroid.show(String(err), ToastAndroid.SHORT)    
        ); 
        
        return tempTeam;
    }


    static createUser(email,password,firstname,lastname){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(data => {
            var newUser = new User(email,firstname,lastname) ;
            firebase.firestore().collection(BaseEnum.USER).add(newUser);
        })
        .catch(err => 
            ToastAndroid.show(String(err), ToastAndroid.SHORT)
        );
    }


    static createTeam(newTeam){

        var teamCode = this.uuidv4();

        newTeam.teamLead = firebase.auth().currentUser.email;
        newTeam.teamCode = teamCode;
        firebase.firestore().collection(BaseEnum.TEAM).add(newTeam);


        firebase.firestore().collection(BaseEnum.USER).where("email","==",firebase
        .auth().currentUser.email)
        .get().then(data => {
            data.forEach(element =>{
                var team = element.data().teamList;
                team.push({"teamCode":teamCode})
                element.ref.update({teamList:team})
            })
        })
        

    }

    static uuidv4() {
        return 'xxxx-xxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }

    static joinTeam(teamCode,teamPassword){

        firebase.firestore().collection(BaseEnum.TEAM)
        .where("teamCode","==",teamCode)
        .get().then(data =>{

            data.forEach(element =>{
                
                if(element.data().teamPassword == teamPassword){
                    
                    firebase.firestore().collection(BaseEnum.USER).where("email","==",firebase
                    .auth().currentUser.email)
                    .get().then(data => {
                    data.forEach(element =>{
                        var team = element.data().teamList;
                        team.push({"teamCode":teamCode})
                        element.ref.update({teamList:team})
                        })
                    })

                }
            })

        })

    }

}