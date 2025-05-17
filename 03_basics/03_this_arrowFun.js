const user = {
  username: "ashwani",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to the course`);
    console.log(this);
  },
  // this keyword used to refer current context.
};

// user.welcomeMessage();
// user.username = "robo";
// user.welcomeMessage();

// console.log(this);


// function robo(){
//   let username = "robo";
//   console.log(this);
//   console.log(this.username);  
// }

// robo();


console.log("arrow function");


const robo = () => {
  let username = "robo";
  console.log(this);
  console.log(this.username);  
}
robo();

const addTwo = (num1, num2) => {
  return num1 + num2;
}
console.log(addTwo(5, 10));


// Implicit return arrow function

const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(5, 10, 15));