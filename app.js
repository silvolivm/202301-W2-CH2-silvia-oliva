import { strictEquals } from "./strictEquals.js";

console.log(strictEquals(1, 1)); // True
console.log(strictEquals(NaN, NaN)); // False
console.log(strictEquals(0, -0)); // True
console.log(strictEquals(-0, 0)); // True
console.log(strictEquals(1, "1")); // False
console.log(strictEquals(true, false)); // False
console.log(strictEquals(false, false)); // True
console.log(strictEquals("water", "oil")); // False
