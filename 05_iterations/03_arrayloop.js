// for of loop

const arr = [1, 2, 3, 4, 5, 6, 7];

for (const num of arr) {
  // console.log(num);
}

const greetings = "hello world";
for (const char of greetings) {
  if (char == " ") {
    continue;
  }
  //   console.log(`Each character is: ${char}`);
}

// Maps
// It only take unique values
const map = new Map();
map.set("name", "robo");
map.set("age", 22);
map.set("city", "gkp");
map.set("country", "india");

// console.log(`Map size: ${map.size}`);
// console.log(map);

for (const key of map) {
  //   console.log(key);
}

// destructure of Map

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObject = {
  name: "robo",
  age: 22,
  city: "gkp",
  country: "india",
};

for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
// myObject is not iterable using for of loop
