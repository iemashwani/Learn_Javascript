function setUserName(username) {
  //
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const newVar = new createUser("ashwani", "ashwani@gmail.com", "12345");
console.log(newVar);
