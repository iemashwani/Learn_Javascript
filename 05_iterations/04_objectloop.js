const myObject = {
  name: "robo",
  age: 22,
  city: "gkp",
  country: "india",
};

// for in loop

for (const key in myObject) {
  console.log(key); // prints the keys
  console.log(myObject[key]); // prints the values
  console.log(`${key} :- ${myObject[key]}`); // prints the key and value
}

const myArray = [1, 2, 3, 4, 5];

console.log("");

console.log("Array Loop");

for (const key in myArray) {
  console.log(key); // prints the index
  console.log(myArray[key]); // prints the value
  console.log(`${key} :- ${myArray[key]}`); // prints the index and value
}

// map is not iterable by for in loop
