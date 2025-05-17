var c = 300;
let a = 100;

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "ashwani";
  function two() {
    const website = "youtube.com";
    console.log(username);
  }

  console.log(website);
  two();
}
one();

if (true) {
  username = "ashwani";
  if (true) {
    const website = "youtube.com";
    console.log(username + website);
  }
  console.log(website);
}
console.log(username);

//          Intresting

function addone(num) {
  return num + 1;
}
addone(5);

const addtwo = function(num) {
  return num + 2;
}
addtwo(5);
