// For loop

for (let i = 0; i < 10; i++) {
  const ele = i;
  if (ele == 5) {
    // console.log("Found 5");
  }
  //   console.log(i);
}

for (let i = 0; i <= 10; i++) {
  //   console.log(`outer loop ${i}`);

  for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop -> i: ${i} j: ${j}`);
  }
}

let myArray = ["flash", "batman", "superman", "wonderwoman"];

for (let i = 0; i < myArray.length; i++) {
  //   console.log(myArray[i]);
}

// break and continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Found 5`);
    break; // breaks the loop
  }
    console.log(`value of i: ${i}`);
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Found 5`);
    continue; // continue the loop
  }
  console.log(`value of i: ${i}`);
}
