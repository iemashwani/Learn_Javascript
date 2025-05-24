// After ES6

class User {
  constructor(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
  }
  encryptPassword() {
    return `${this.pass}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const ash = new User("Ashwani", "ash@gmail.com", "123");

console.log(ash.encryptPassword());
console.log(ash.changeUsername());

// behind the scene

function User1(username, email, pass) {
  this.username = username;
  this.email = email;
  this.pass = pass;
}

User1.prototype.encryptPassword = function () {
  return `${this.pass}abc`;
};

User1.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const robo = new User1("robot", "robo@gmail.com", "123");

console.log(robo.encryptPassword());
console.log(robo.changeUsername());
