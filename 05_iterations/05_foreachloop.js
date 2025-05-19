const codingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// Using forEach to iterate over the array
// foreach loop takes a callback function

// codingLanguages.forEach(function (val) {
//   console.log(val);
// });

codingLanguages.forEach((val) => {
  //   console.log(val);
});

function print(val) {
  //   console.log(val);
}

codingLanguages.forEach(print);

codingLanguages.forEach((val, index, arr) => {
//   console.log(index, val, arr);
});

const myCoding = [
  {
    langaugeName: "JavaScript",
    year: 1995,
    creator: "Brendan Eich",
  },
  {
    langaugeName: "Python",
    year: 1991,
    creator: "Guido van Rossum",
  },
  {
    langaugeName: "Java",
    year: 1995,
    creator: "James Gosling",
  },
  {
    langaugeName: "C++",
    year: 1985,
    creator: "Bjarne Stroustrup",
  },
  {
    langaugeName: "Ruby",
    year: 1995,
    creator: "Yukihiro Matsumoto",
  },
];

myCoding.forEach((item) => {
  console.log(item.langaugeName);
  console.log(item.year);
  console.log(item.creator);
  
});
