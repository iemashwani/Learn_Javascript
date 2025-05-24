class User {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(newEmail) {
    this._email = newEmail.toUpperCase();
  }

  get pass() {
    return this._pass.toUpperCase();
  }
  set pass(newPass) {
    this._pass = newPass.toUpperCase();
  }
}

const robo = new User("robo@gmail.com", "abcd");
console.log(robo.pass);
console.log(robo.email);
