// --- FUNCTIONS --------------------

// Regular function declaration with 2 parameters (a & b) and a return value
function combineName(a: string, b: string): string {
  return `${a} ${b}`;
}

let combinedName: string = combineName("John", "Andew");

console.log(combinedName);

// Arrow function declaration
type mathOperation = (a: number, b: number) => number;
let multiply: mathOperation = (a, b) => a * b;

console.log(multiply(5, 2));

// Callback function
function isCalling(callback: () => void): void {
  console.log("Hi, have you called?");
  callback();
}

function theCallback(): void {
  console.log("Yes, thanks for calling back!");
}

isCalling(theCallback);
