// Objject Singletons

console.log("Object Singleton or Constructor");

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Ashwani";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "ashwani@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Ashwani",
      lastname: "Singh",
    },
  },
};

console.log(regularUser);
console.log(regularUser.fullname.userfullname);

console.log("");
console.log("Merge Objects");

const obj1 = { 1: "one", 2: "two" };
const obj2 = { 3: "three", 4: "four" };

const obj3 = Object.assign(obj1, obj2); // Object.assign({}, obj1, obj2) is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object. {} this works as target object
console.log(obj3);

// also use spred method
// const obj4 = { ...obj1, ...obj2 };

const users = [
  {
    id: 1,
    email: "as@gmail.com",
  },
  {
    id: 1,
    email: "as@gmail.com",
  },
  {
    id: 1,
    email: "as@gmail.com",
  },
  {
    id: 1,
    email: "as@gmail.com",
  },
  {
    id: 1,
    email: "as@gmail.com",
  },
];

users[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // get keys
console.log(Object.values(tinderUser)); // get values
console.log(Object.entries(tinderUser)); // get entries

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // check if property exists
