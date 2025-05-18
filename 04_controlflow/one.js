// if statement

if (true) {
  console.log("true");
}
if (false) {
  console.log("false");
}

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("User is logged in");
}

/*
    Comparision Operator
        <, >, <=, >=, ==, !=, ===, !==
*/

// Block Scope
// const score = 200;
// if (score > 100) {
//   let power = "fly";
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// Shorthand Notation
const balance = 1000;
if (balance > 500) console.log("test");

// if (balance > 500) console.log("test"), console.log("test2");

/*
    if (balance < 500) {
    console.log("less than 500");
    } else if (balance < 750) {
    console.log("less than 750");
    } else if (balance < 900) {
    console.log("less than 900");
    } else {
    console.log("greater than 1200");
    }
*/

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard) {
  console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
  console.log("allow to buy course");
}
