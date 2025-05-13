let score = "33";

console.log(typeof score);
console.log(typeof (score));

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
