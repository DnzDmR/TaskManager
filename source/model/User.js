export default class User{

    constructor(email,firstname,lastname){
        this.email=email,
        this.firstname=firstname,
        this.lastname=lastname
    }


    getEmail(){
        return this.email;
    }

    getFirstName(){
        return this.firstname;
    }

    getLastName(){
        return this.lastname;
    }

}