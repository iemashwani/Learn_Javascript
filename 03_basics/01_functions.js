function sayMyName() {
  console.log("My name is Ashwani");
}

sayMyName();

function add(num1, num2) {
  console.log(num1 + num2);
}
function add2(num1, num2) {
  return num1 + num2;
}

add(3, 4);
const result = add2(8, 4);

console.log("Result:", result);

console.log("");
console.log("multiple parameters");

function calculateCarPrice(num1) {
  return num1;
}
function calculateCarPrice2(...num1) {
  return num1;
}

function calculateCarPrice3(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCarPrice(2000));
console.log(calculateCarPrice2(200, 300, 400, 500));
console.log(calculateCarPrice3(200, 300, 400, 500));

const user = {
  username: "Ashwani",
  age: 20,
};

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user);
handleObject({
  username: "Robo",
  age: 22,
});

const myNewArray = [200, 300, 400, 500];
function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([20, 30, 40, 50]));
