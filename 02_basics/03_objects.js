// There are two types of object declarations in JavaScript:
// 1. Object Literal
// 2. Object Constructor it's always singleton

// Object.create() is used to create an object using constructor method (singleton).

console.log("Object Literal");

const mySym = Symbol("key1");

const JsUser = {
  name: "Ashwani",
  "full name": "Ashwani Singh",
  age: 20,
  location: "Gorakhpur",
  email: "ashwani@gmail.com",
  isActive: true,
  hobbies: ["coding", "reading"],
  [mySym]: "key12", // Symbol
};

console.log(JsUser.hobbies);
console.log(JsUser["hobbies"]);
console.log(JsUser["full name"]);
// console.log(JsUser.full name); // SyntaxError: Unexpected token
console.log(JsUser[mySym]); // Symbol

JsUser.email = "ashwani@google.com"; // change the email value
// Object.freeze(JsUser); // Freeze the object
// JsUser.email = "ashwani@microsoft.com";

console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello js user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.name}`);
};

console.log(JsUser.greeting); // undefined
console.log(JsUser.greeting()); // Hello js user
console.log(JsUser.greetingTwo()); // Hello js user, Ashwani
