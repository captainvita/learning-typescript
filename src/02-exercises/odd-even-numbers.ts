const MAX_NUMBER = 25;
const FIVE_MINUTES = 5 * 60 * 1000;
let zeroToMax: number[] = [];

for (let i = 0; i <= MAX_NUMBER; i++) {
    zeroToMax.push(i);
}

let even: number[] = [];
let odd: number[] = [];

for (let v of zeroToMax) {
    if (v % 2 === 0) {
        even.push(v);
    } else {
        odd.push(v);
    }
}

console.log(`Even Numbers: ${even.join(", ")}`);
console.log(`Odd Numbers: ${odd.join(", ")}`);

type OddOrEven = {
    value: number;
    isEven: boolean;
    oddOrEvenKey: 0 | 1;
    timestamp: number;
}

const oddEvenStatus = {
    0: "Even",
    1: "Odd",
}

let numbers: OddOrEven[] = [];

for (let i = 0; i <= MAX_NUMBER; i++) {
    numbers.push({
        value: i,
        isEven: i % 2 === 0,
        oddOrEvenKey: i % 2 === 0 ? 0 : 1,
        timestamp: Date.now(),
    })
}

const evenNumbers = numbers.filter(e => e.isEven === true);
const oddNumbers = numbers.filter(e => e.isEven === false);

const fiveMinNumbers = numbers.filter(e => e.timestamp >= Date.now() - FIVE_MINUTES)

console.log(`Even Numbers: ${evenNumbers.map(e => e.value).join(", ")}`)
console.log(`Odd Numbers: ${oddNumbers.map(e => e.value).join(", ")}`);
console.log(`Numbers from last 5 Min.: ${fiveMinNumbers.map(e => e.value).join(", ")}`);

for (const k of numbers) {
    console.log(`Value ${k.value} is ${oddEvenStatus[k.oddOrEvenKey]}`);
}