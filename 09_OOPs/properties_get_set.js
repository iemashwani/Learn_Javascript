function User(email, pass) {
  this._email = email;
  this._pass = pass;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (newEmail) {
      this._email = newEmail.toUpperCase();
    },
  });
  Object.defineProperty(this, "pass", {
    get: function () {
      return this._pass;
    },
    set: function (newPass) {
      this._pass = newPass;
    },
  });
}

const robo = new User("robo@gmail.com", "abcd");

console.log(robo.email);
console.log(robo.pass);
