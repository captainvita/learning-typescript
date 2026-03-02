// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// --- TYPES ---

// Basic variables & constants with type
let name: string = "Hans";
let age: number = 31;
let isOnline: boolean = true;
let randomValue: any;
const USER_ID: number = 145853;

// Basic string array
const fullName: string[] = ["Andre", "Michel"];
let hobbies: string[] = ["Jogging", "Gaming", "Making music"];
let maritalStatus: [string, string, string] = ["single", "married", "divorced"]; // Tuple is a array with fixed amount of elements

// Union type variable and array that accept multiple datatypes as values
let userProfile: string | number = 12;
let userDetails: (string | number)[] = ["Hans", "Dungi", 23];

// Object definition
let user: {
  name: string;
  age: number;
  isOnline: boolean;
} = {
  name: "Michael",
  age: 16,
  isOnline: false,
};

// Interface definition and instatiation
interface Person {
  name: string;
  age: number;
  location: string;
  email?: string; // optional variable
}

let person: Person = {
  name: "Rebeecca",
  age: 31,
  location: "Hannover",
};

// Literal union type alias with fixed values
type UserStatus = "pending" | "rejected" | "approved";
let status: UserStatus = "pending";

// Intersection type alias with limited assignable values (needs to meet all type requirements)
type Employee = Person & {
  department: string;
  position: string;
  salary: number;
};

let empployeeDetails: Employee = {
  name: "Joerg",
  age: 44,
  location: "Muenich",
  department: "HR",
  position: "Recruiter",
  salary: 5850,
};

// --- CONDITIONS ---

// If-Else

// Else-if

// Ternary Shorthand

// Switch

// --- LOOPS ---

// --- FUNCTIONS ---

// Regular function with 2 parameters (a & b) and a return value
function combineName(a: string, b: string): string {
  return `${a} ${b}`;
}

let combinedName: string = combineName("John", "Andew");

// Arrow function
type mathOperation = (a: number, b: number) => number;
let multiply: mathOperation = (a, b) => a * b;

// Callback function
function isCalling(callback: () => void): void {
  console.log("Hi, have you called?");
  callback();
}

function theCallback(): void {
  console.log("Yes, thanks for calling back!");
}

isCalling(theCallback);

// --- GENERICS ---

// Generic function that accepts and returns any type (T)
function anyType<T>(value: T[]): T {
  return value[0];
}

console.log(anyType([0, 1, 2, 3]));

// Generic interface
interface Container<ID, C> {
  containerID: ID;
  content: C;
}

let myContainer: Container<number, string> = {
  containerID: 123456789,
  content: "Food",
};

let yourContainer: Container<string, string> = {
  containerID: "Not assigned",
  content: "Clothes",
};

console.log("Your container content: ", yourContainer.content);
console.log("My Container ID: ", myContainer.containerID);

// --- CLASSES ---

// Creating a class wth public and private properties
class Car {
  make: string;
  model: string;
  year: number;
  private _serial?: string | undefined; // Accepts string or undefined data type

  // intializing class properties
  constructor(
    make: string,
    model: string,
    year: number,
    serial?: string | undefined,
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this._serial = serial;
  }

  // Getter and setter methods to access private properties
  get serial(): string | undefined {
    return this._serial;
  }

  set serial(serial: string | undefined) {
    this._serial = serial;
  }

  // Class method
  listCarDetails(): void {
    console.log(
      `Car Details: ${this.make}, ${this.model}, ${this.year}, ${this._serial}`,
    );
  }
}

// Instantiating Class
const myCar = new Car("Toyota", "Vios", 2018);

myCar.listCarDetails();
myCar.serial = "TYVS00126699"; // Setting _serial
console.log(`Car Serial No: ${myCar.serial}`); // Getting _serial

// --- OUTPUT ---

// Console output
console.log("Hobbies: ", hobbies);
console.log(user);
console.log(person);
console.log("User status: ", status);
console.log(empployeeDetails.salary);
console.log(combinedName);
console.log(multiply(5, 2));
