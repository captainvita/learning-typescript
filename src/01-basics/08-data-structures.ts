// --- DATA STRUCTURES

// Object Arrays are arrays made of objects of any type
const CARS = [
  { make: "Honda", year: 2012 },
  { make: "VW", years: 2022 },
];

// Sets are collections without keys where each value can be of any type and occurs only once
let mySet = new Set(); // Empty set
let numberSet = new Set([1, 2, 3, 4, 5, 6, 7, 8]); // Initialized set
numberSet.add(9).add(0);
numberSet.add(1); // 1 is already in the set, so it won't be added again
console.log(numberSet.has(10));

numberSet.forEach((value) => {
  console.log(value);
});

// Maps are collections of data with keys where they key can be of any type
let myMap = new Map();
let locationMap = new Map([
  ["Hamburg", "Germany"],
  ["Berlin", "Germany"],
  ["Paris", "France"],
  ["London", "UK"],
]);

locationMap.set("Barcelona", "Spain");
locationMap.has("Rome");
locationMap.forEach((value, key) => {
  console.log(key, value);
});

// Linked List

// Stack

// Queue

// Tree

// Graphs
