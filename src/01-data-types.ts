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
