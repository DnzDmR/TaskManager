export default class User {
  constructor(email, firstname, lastname) {
    (this.email = email),
      (this.firstname = firstname),
      (this.lastname = lastname),
      (this.teamList = []);
  }
}
