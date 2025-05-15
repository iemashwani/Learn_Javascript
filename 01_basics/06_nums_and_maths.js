const score = 100;

const balance = new Number(400);

console.log(score);
console.log(balance);

console.log("");
console.log("Some methods of number");

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 400.00

const newNum = new Number(23.8966);
console.log(`New Number: ${newNum}`);
console.log(newNum.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000
console.log(hundreds.toLocaleString("en-US")); // 1,000,000

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.EPSILON); // 2.220446049250313e-16

/*              Maths             */

console.log("");

console.log("                 Maths           ");
console.log(Math);
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-10)); // 10
console.log(Math.round(4.9));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.2)); // 5
console.log("");
console.log(Math.min(7, 2, 5, 4, 9));
console.log(Math.max(7, 2, 5, 4, 9));
console.log("");
console.log("      Use of Random method      ");
console.log(Math.random()); // It will give random number between 0 and 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
