// --- CONDITIONS --------------------

let numberA: number = 0;
let numberB: number = 2;

// If-Else
if (numberA < numberB) {
  console.log("Number A is smaller");
} else if (numberA === numberB) {
  console.log("Both numbers are the same");
} else {
  console.log("Number B is smaller");
}

// Ternary Shorthand If-Else same as above
console.log(
  numberA < numberB
    ? "Number A is smaller"
    : numberA > numberB
      ? "Number B is smaller"
      : "Both numbers are the same",
);

// Switch
switch (numberB) {
  case 0:
    console.log("Number: 0");
    break;
  case 1:
    console.log("Number: 1");
    break;
  case 2:
    console.log("Number: 2");
    break;
  default:
    throw new Error("Number not in range!");
}

// --- LOOPS --------------------

let something = 0;
let somethingElse = [1, 2, 4, 8];
let limit = 5;

// For
for (let i = 0; i < limit; i++) {
  something = i;
}

// For-Of
for (let k of somethingElse) {
  console.log(k);
}

// For-In (used in objects)
for (const key in person) {
  console.log(key, person[key as keyof Person]);
}

// While
while (something < 10) {
  something++;
}

// Do-While
do {
  something++;
} while (something < 15);
