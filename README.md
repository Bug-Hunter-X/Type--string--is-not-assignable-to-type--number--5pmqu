# Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: 'Type 'string' is not assignable to type 'number''.  The error arises when attempting arithmetic operations on string values instead of numbers.  The `bug.ts` file shows the problematic code, while `bugSolution.ts` presents a solution.

## Problem

The `add` and `subtract` functions are defined to accept and return numbers. However, in the example, we try to pass a string ('2') to these functions, causing the TypeScript compiler to throw an error because type checking prevents the unintended string-number operation.

## Solution

The solution is to ensure that all values passed to the functions are of the correct type (number) before performing any arithmetic operations.  This can involve input validation or type conversion (e.g., using `parseInt()` or `parseFloat()`).