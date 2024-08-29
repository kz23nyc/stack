// import { Stack } from "./Stack.js"; // named exports
import Stack from './Stack.js'; // default exports

// import * as Stack from './Stack.js';

const stack = new Stack();


stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.peek()); // 20
console.log(stack.isEmpty()); //  false
console.log(stack.size()); //  2
stack.clear();
console.log(stack.isEmpty()); // true

const lastItem = stack.peek();

console.log(lastItem); // stack is empty

