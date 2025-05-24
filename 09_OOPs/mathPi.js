const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

// const mynewObject = Object.create(null);

const robo = {
  name: "Robot",
  price: "$250",
  isAvailable: true,

  orderRobo: function () {
    console.log("It gives Error");
  },
};

console.log(robo);

console.log(Object.getOwnPropertyDescriptor(robo, "name"));

Object.defineProperty(robo, "name", {
    // writable: false,
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(robo, "name"));

// for (let [key, value] of robo) {
//   console.log(`${key} : ${value}`);
// }

for (let [key, value] of Object.entries(robo)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
