const myNums = [1, 2, 3, 4];

const myTotal = myNums.reduce(function (acc, currVal) {
//   console.log(`acc: ${acc} and currVal: ${currVal}`);
  return acc + currVal;
}, 0); // 0 is intial value of acc
// console.log(myTotal);

const myTotal1 = myNums.reduce((acc, currVal) => acc + currVal, 0);

// console.log(myTotal1);

const shoppingCart = [
  {
    itemName: "Jacket",
    price: 599,
  },
  {
    itemName: "Jeans",
    price: 399,
  },
  {
    itemName: "Shirt",
    price: 899,
  },
  {
    itemName: "Robot",
    price: 1599,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);
