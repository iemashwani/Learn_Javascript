// Object Literals

const user = {
  username: "Ashwani",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from DB");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // if i do this in browser console then it return window object

function User(username, loginCount, isLoggedIn) {
  this.usename = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.usename}`);
  };

  //   return this;
}
// const userOne = User("Ashwani", 10, true);
// const useTwo = User("Robo", 11, false); // Overwrite the value of userOne
// console.log(userOne);

// Constructor Function
// it is a refrence of itself

const userOne = new User("Ashwani", 10, true);
const useTwo = new User("Robo", 11, false);

console.log(userOne);
console.log(useTwo);
console.log(userOne.greeting());

// About new Keywords
// when we use new keyword it's create a empty object which is called instance
// then call consructor by new keyword
// it's pack all the argument ant give to variable
// after that inject all the argument into this keyword
// after that we get it all
