// --- MODULES -------------------
/*
1. Configure the Enviornmental Settings for the Module Import/Export format and version in the tsconfig.json
Example for Node.js: "module": "nodenext", "target": "esnext"
2. Reference the right transpiled JS file int the HTML File
Example: <script type="module" src="./main.js"></script>
*/

// Export
const PI = 3.14; // Const needs to be first declared before default export
export default PI; // Primary export is defined with default for main exports
export function myFunction() {
  return 0;
} // Variables, Types, Interfaces, Functions and Classes can be named exports
export type MyType = number | string;

// Import
import PI from "./folder/file.js"; // Default import as specified above
import { myFunction } from "./folder/file.js"; // For single named imports
import PI, { myFunction, type MyType } from "./folder/file.js"; // Multiple default + named imports
import { myFunction as yourFunction } from "./folder/file.js"; // Renamed import
