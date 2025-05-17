// Immediately Invoked Function Expression (IIFE)

// An IIFE is a function that runs as soon as it is defined

function one() {
  console.log(`DB Connected`);
}
one();

// IIFE
(function () {
  // named IIFE
  console.log(`DB Connected Two`);
})();

((name) => {
  // Simple IIFE with parameter
  console.log(`DB Connected ${name}`);
})("Ashwani");
