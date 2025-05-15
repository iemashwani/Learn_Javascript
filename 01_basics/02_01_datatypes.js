console.log("JavaScript is a dynamic language");

// Primitive Data Types

// There are 7 types of primitive data types in JavaScript:
// 1. String
// 2. Number
// 3. Boolean
// 4. BigInt
// 5. Undefined
// 6. Null
// 7. Symbol

const score = 100; // Number
const scoreValue = 100.34; // Number
const isPassed = true; // Boolean
const outsideTemperature = null; // Null (it's not a 0 values it means no value or empty value)
const name = "John Doe"; // String
let userEmail; // Undefined (it means this variable is declared but not assigned any value)
const id = Symbol("123"); // Symbol (it is used to create unique identifiers for objects)
const anotherId = Symbol("123"); // Symbol (it is used to create unique identifiers for objects)
console.log(id === anotherId); // false (because both are unique identifiers)

// Non-Primitive (Refrence) Data Types
// 1. Array
// 2. Object
// 3. Function

const heros = ["Batman", "Superman", "Spiderman"]; // Array

let myObj = {
  name: "Ashwani",
  age: 20,
};

const myFunc = function () {
  console.log("Hello");
};

console.log(typeof myFunc); // function

/*  Memory in JavaScript  */
// 1. Stack Memory (for primitive data types)
// 2. Heap Memory (for non-primitive data types)

console.log("");

console.log("About Memory");

let myName = "Ashwani";
let anotherName = myName;
anotherName = "Shiya";
console.log(anotherName);
console.log(myName); 


let useOne = {
  email: "uesrOne@gmail.com",
  upi: "user@ybl",
}

let userTwo = useOne;

userTwo.email = "ashwani@gmail.com";

console.log(userTwo.email); 
console.log(useOne.email); 

