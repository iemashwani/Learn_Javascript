class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static creatId() {
    return `123`;
  }
}

const ash = new User("Ashwani");
// console.log(ash.creatId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new Teacher("iphone", "iphone@gmail.com");
iPhone.logMe();
// console.log(iPhone.creatId());
