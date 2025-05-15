const name = "Ashwani";
const surName = "Singh";

console.log(name + surName); // This way is outdated
console.log(name.concat(surName)); // This way is outdated

console.log(`Hello my name is ${name} and last name is ${surName}`);

const fullName = new String("Ashwani Singh");
console.log(fullName); // String object

console.log("");

console.log("Some methods of string");

console.log(fullName.length); // 12
console.log(fullName.toUpperCase()); // A
console.log(fullName.charAt(4));
console.log(fullName.indexOf("S")); // 7

const newString = new String("Hello World! I am Ashwani Singh");
console.log("");
console.log(newString);

console.log(newString.substring(0, 3));
console.log("hii");

const newStr = newString.slice(0, 4); // This is same as substring
console.log(newStr);

console.log("");
console.log("trim method of string");
const newStringOne = "    Ashwani       ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Remove white spaces from start and end

const url = "https://www.google.com/ashwani%20singh";

console.log(url);

console.log(url.replace("%20", "-"));
console.log(url.includes("shiya"));
console.log(newString.split(" ")); // Split string into array
