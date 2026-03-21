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
