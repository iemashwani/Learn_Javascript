let score = "33";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null => 0;
// undefined => NaN

let isLoggedIn = "abc";
let booleanValue = Boolean(isLoggedIn);
console.log(typeof booleanValue);
console.log(booleanValue);

// 1 => true; 0 => false;
// "" => false;
// "abc" => true;

/*  Operations */

console.log("");

console.log("Operations");

let value = 3;
let negValue = -value;

console.log(negValue);

let str1 = "Hello! ";
let str2 = "Ashwani";
console.log(str1 + str2);

console.log(+true);
console.log(+"");

console.log("Increment and Decrement Operators");

let a = 2;
let b = 3;

console.log(a++);
console.log(++b);
console.log(a++);
console.log(a);

