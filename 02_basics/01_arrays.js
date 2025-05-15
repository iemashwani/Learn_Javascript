const myArr = [0, 1, 2, 3, 4, 5];

console.log(myArr[0]); // 0
console.log(myArr);

const myArr2 = new Array(1, 2, 3, 4);

// Shallow copy : A shallow copy of an object is a copy whose properties share the same references of those of the source object from which the copy was made.

// Deep copy : A deep copy of an object is a copy whose properties don't share the same references of those of the source object from which the copy was made.

// Array Methods

myArr.push(6);
myArr.push(7);
myArr.pop();
console.log(myArr);

console.log("");

myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();

console.log(myArr);
console.log(typeof myArr);
console.log(newArr);
console.log(typeof newArr);

console.log("");
console.log("Slice and Splice");

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("");

console.log(myArr);

console.log(myn2);
