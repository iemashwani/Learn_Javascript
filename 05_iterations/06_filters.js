const coding = ["javascript", "python", "java", "c++", "c#", "php", "ruby"];

// forEach loop did not return anything
// forEach loop is used to iterate over an array and perform an action on each element
// const values = coding.forEach((val) => {
//   //   console.log(val);
//   return val;
// });
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums = myNums.filter((num) => {
  return num > 5;
});

// console.log(nums); // [6, 7, 8, 9, 10]

const newNums = [];
myNums.forEach((num) => {
  if (num > 5) {
    newNums.push(num);
  }
});

// console.log(newNums); // [6, 7, 8, 9, 10]

const book = [
  {
    title: "Book One",
    genre: "Fiction",
    published: 1988,
    edition: "2004",
  },
  {
    title: "Book Two",
    genre: "Science",
    published: 1990,
    edition: "2005",
  },
  {
    title: "Book Three",
    genre: "History",
    published: 2000,
    edition: "2010",
  },
  {
    title: "Book Four",
    genre: "Science",
    published: 2010,
    edition: "2015",
  },
  {
    title: "Book Five",
    genre: "Fiction",
    published: 2015,
    edition: "2020",
  },
  {
    title: "Book Six",
    genre: "History",
    published: 2020,
    edition: "2021",
  },
  {
    title: "Book Seven",
    genre: "Science",
    published: 2021,
    edition: "2022",
  },
  {
    title: "Book Eight",
    genre: "Fiction",
    published: 2022,
    edition: "2023",
  },
  {
    title: "Book Nine",
    genre: "History",
    published: 2023,
    edition: "2024",
  },
  {
    title: "Book Ten",
    genre: "Science",
    published: 2024,
    edition: "2025",
  },
];

let userBooks = book.filter((bk) => {
  return bk.genre === "History";
});

userBooks = book.filter((bk) => {
  return bk.published >= 2020;
});

// console.log("History Books");
console.log(userBooks);

// console.log(book.length);
