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
};

const oddEvenStatus = {
  0: "Even",
  1: "Odd",
};

function generateEvenOddNumbers(max: number): OddOrEven[] {
  const nums: OddOrEven[] = [];
  for (let i = 0; i <= max; i++) {
    nums.push({
      value: i,
      isEven: i % 2 === 0,
      oddOrEvenKey: i % 2 === 0 ? 0 : 1,
      timestamp: Date.now(),
    });
  }
  return nums;
}

function filterOddEvenNumbers(nums: OddOrEven[]): {
  evenNumbers: OddOrEven[];
  oddNumbers: OddOrEven[];
} {
  const evenNumbers: OddOrEven[] = nums.filter((e) => e.isEven === true);
  const oddNumbers: OddOrEven[] = nums.filter((e) => e.isEven === false);
  return { evenNumbers, oddNumbers };
}

function filterTimestampNumbers(nums: OddOrEven[]): OddOrEven[] {
  const fiveMinNumbers = nums.filter(
    (e) => e.timestamp >= Date.now() - FIVE_MINUTES,
  );
  return fiveMinNumbers;
}

function logNumbers(nums: OddOrEven[]): void {
  const { evenNumbers, oddNumbers } = filterOddEvenNumbers(nums);
  console.log(`Even Numbers: ${evenNumbers.map((e) => e.value).join(", ")}`);
  console.log(`Odd Numbers: ${oddNumbers.map((e) => e.value).join(", ")}`);
  console.log(
    `Numbers from last 5 Min.: ${filterTimestampNumbers(nums)
      .map((e) => e.value)
      .join(", ")}`,
  );
}

function logWithStatus(nums: OddOrEven[]): void {
  for (const k of nums) {
    console.log(`Value ${k.value} is ${oddEvenStatus[k.oddOrEvenKey]}`);
  }
}

const numbers: OddOrEven[] = generateEvenOddNumbers(MAX_NUMBER);
logNumbers(numbers);
logWithStatus(numbers);
