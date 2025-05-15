let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

console.log("");
let myCreatedDate = new Date(2023, 0, 1);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());

console.log("About Timestamp");

let myTimestamp = Date.now();
console.log(myTimestamp); // it give in miliseconds

console.log("");
console.log(Math.floor(Date.now() / 1000)); // it give in seconds

let newDate = new Date();

console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
