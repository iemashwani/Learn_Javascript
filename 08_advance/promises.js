// fetch('https://something.com').then().catch().finally();

const promisesOne = new Promise(function (resolve, reject) {
  // Do n async task
  // DB calls, cryptography, network

  setTimeout(function () {
    console.log("Async task is Completed");
    resolve(); // after this method it connected with .then
  }, 1000);
});
console.log("after timeout");

promisesOne.then(function () {
  console.log("Promise consumed");
}); // direct connection with resolve parameter

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

const promisedThird = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ashwani", email: "ashwani@gmail.com" });
  }, 1000);
});

promisedThird.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "Ashwani", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "Robo", password: "12345" });
    } else {
      reject("ERROR: Robo went wrong");
    }
  }, 1000);
});

async function concumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

concumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();

// upper code using then catch and finally

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally();
