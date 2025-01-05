function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(2, 2)); // 4
console.log(subtract(2, 2)); // 0

// Solution: Type checking and conversion
const num1 = parseInt("2");
const num2 = 2;

if (typeof num1 === 'number' && typeof num2 === 'number') {
  console.log(add(num1, num2)); // 4
  console.log(subtract(num1, num2)); // 0
} else {
  console.error("Invalid input: Values must be numbers");
}

//Alternative solution using type assertion (use with caution):
console.log(add(Number("2"), 2)); //4
console.log(subtract(Number("2"),2)); //0