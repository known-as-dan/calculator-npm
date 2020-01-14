# About
A modular text-parsing calculator that enables the creation of custom operators, functions and constants with ease.

# Usage
Parsing and calculating a simple math statement:
```typescript
import { parse, calculate } from "@known-as-dan/calculator";

const math: string = "1 + 5 * 2";
const answer: Array<number> = calculate(parse(math));

console.log(`${math} = ${answer}`);

// Output: 
// 1 + 5 * 2 = 11
```
---
Implementing a random number function that takes in two inputs(min & max):
```typescript
import { addFunction, fetchValue } from "@known-as-dan/calculator";

addFunction("Random", "rand", "rand(min, max)", (values: Array<number>) => {
	const min: number = fetchValue(values, 0);
	const max: number = fetchValue(values, 1);
	return Math.floor(Math.random() * (max - min)) + min;
});
```