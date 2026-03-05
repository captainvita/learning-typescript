// --- DATA TYPES --------------------

// Primitive types & constants
let name: string = "Hans";
let age: number = 31;
let isOnline: boolean = true;
let randomValue: any;
const USER_ID: number = 145853;

// Basic string array
const fullName: string[] = ["Andre", "Michel"];
let hobbies: string[] = ["Jogging", "Gaming", "Making music"];
let maritalStatus: [string, string, string] = ["single", "married", "divorced"]; // Tuple is a array with fixed amount of elements

console.log("Hobbies: ", hobbies);

// Union type that accept multiple datatypes as values
let userProfile: string | number = 12;
let userDetails: (string | number)[] = ["Hans", "Dungi", 23];

// Object type definition
let user: {
  name: string;
  age: number;
  isOnline: boolean;
} = {
  name: "Michael",
  age: 16,
  isOnline: false,
};

console.log(user);

// Interface type definition and instatiation
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

console.log(person);

// Literal union type alias with fixed values
type UserStatus = "pending" | "rejected" | "approved";
let status: UserStatus = "pending";

console.log("User status: ", status);

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

console.log(empployeeDetails.salary);

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

// --- GENERICS --------------------

// Generic function declaration that accepts and returns any type (T)
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

// --- UTILITY TYPES --------------------

interface Profile {
  name: string;
  gender: string;
  email: string;
  age: number;
  isMod: boolean;
}

// | Object Manipulation Types |

// Partial - Makes all properties optional
type PartialProfile = Partial<Profile>;

// Required - Makes all properties mandatory
type RequiredProfile = Required<Profile>;

// Readyonly - Makes all properties read only
type ReadonlyProfile = Readonly<Profile>;

// Record - Creates object from keys
type RecordProfile = Record<keyof Profile, string>;

// Pick - Selects specific properties
type PickProfile = Pick<Profile, "name" | "gender" | "age">;

// Omit - Removes specific properties
type OmitProfile = Omit<Profile, "email" | "isMod">;

// | Union Manupulation Types |

// Exclude - Removes specific unions
type ExcludeProfile = Exclude<Profile, "email" | "isMod">;

// Extract - Keeps specific unions
type ExtractProfile = Extract<Profile, "name" | "age">;

// NonNullable - Excludes null & undefined
type NonnullProfile = NonNullable<Profile>;

// | Function Types |

// Parameters - Gets function parameters (inputs)
function updateProfile(name: string, age: number): void {}

type ParametersProfile = Parameters<typeof updateProfile>;

// ReturnType - Gets function types (outputs)
function createProfile(): Profile {
  return {
    name: "Pennai",
    gender: "male",
    email: "pennai@gmail.com",
    age: 21,
    isMod: false,
  };
}

type ReturnProfile = ReturnType<typeof createProfile>;

// | Class / Object Types |
//ConstructorParameter -

// InstanceType -

// ThisParameterType -

// OmitThisParameter -

// ThisType-

// | String Manipulation Types |
// Upppercase -

// Lowercase -

// Capitalize -

// Uncapitalize -

// --- CLASSES --------------------

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
