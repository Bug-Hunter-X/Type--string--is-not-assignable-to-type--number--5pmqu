function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(add(2, 2)); // 4
console.log(subtract(2, 2)); // 0

// Type 'string' is not assignable to type 'number'.
console.log(add("2", 2)); //Error
console.log(subtract("2", 2)); //Error