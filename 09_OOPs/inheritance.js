class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, pass) {
    super(username);
    this.email = email;
    this.pass = pass;
  }

  addCourse() {
    console.log(`A new Course was added by ${this.username}`);
  }
}

const ash = new Teacher("ashwani", "ashwani@gmail.com", "123");
ash.addCourse();

const robo = new User("Robot");
robo.logMe();

console.log(ash === robo);
console.log(ash === Teacher);
console.log("Instance");

console.log(ash instanceof Teacher);
console.log(ash instanceof User);
