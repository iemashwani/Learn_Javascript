// Destructuring

const course = {
  courseName: "JavaScript",
  price: "999",
  courseInstructor: "Robo",
};

const { courseInstructor: instructor } = course;
const { courseInstructor } = course;

console.log(courseInstructor); // Robo
console.log(instructor); // Robo


const navbar = ({companyName}) => {

}
navbar(companyName = "ashwani");


// Json Format
{
    "name": "ashwani",
    "age": 23,
    "isStudent": false,
    "skills": ["html", "css", "js"],
    "address": {
        "city": "delhi",
        "state": "delhi",
        "country": "india"
    }
}

[
    {},
    {},
    {},
    {}
]