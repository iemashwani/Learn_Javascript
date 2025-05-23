const marvel_heros = ["thor", "ironman", "hulk", "spiderman", "black widow"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// console.log(marvel_heros[5][1]); // flash

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Ashwani"));
console.log(Array.from("Ashwani"));
console.log(Array.from({ name: "Ashwani" })); // important

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2, score3, score4));

