const userEmail = "ashwani@gmail.com";

if (userEmail) {
  console.log("Email is present");
} else {
  console.log("Email is not present");
}

/*
    Falsy Values
        false, 0, -0, BigInt, 0n, "", null, undefined, NaN.
*/

/*
    Truthy Values
        "0", 'false', " ", [], {}, function(){}
*/

// const user = [];
// if (user.length === 0) {
//   console.log("Array is Empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;  // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 10; // 10

val1 = null ?? 10 ?? 20; // 10
console.log(val1);

// Terniary Operator

// condition ? true : false;

const ice = 100;
ice <= 80 ? console.log("less than 80") : console.log("more than 80");
