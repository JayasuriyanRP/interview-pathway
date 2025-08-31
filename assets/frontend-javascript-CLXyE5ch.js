const e=[{id:"3d2d36f3-f178-4c9f-8d43-0a16d7bd6343",question:"What is the purpose of the JavaScript spread operator (...)?",answer:`\`\`\`markdown
The JavaScript spread operator (\`...\`) is used to expand elements of an iterable (like an array, string, or object) into individual elements. It allows for more concise and flexible handling of data structures. Here are some common purposes of the spread operator:

1. **Copying Arrays or Objects**:
   The spread operator can create shallow copies of arrays or objects without modifying the original data.
   \`\`\`javascript
   const arr1 = [1, 2, 3];
   const arr2 = [...arr1]; // Copy of arr1
   console.log(arr2); // [1, 2, 3]
   \`\`\`

2. **Merging Arrays or Objects**:
   It can merge multiple arrays or objects into one.
   \`\`\`javascript
   const arr1 = [1, 2];
   const arr2 = [3, 4];
   const mergedArray = [...arr1, ...arr2];
   console.log(mergedArray); // [1, 2, 3, 4]
   \`\`\`

   \`\`\`javascript
   const obj1 = { a: 1, b: 2 };
   const obj2 = { c: 3, d: 4 };
   const mergedObject = { ...obj1, ...obj2 };
   console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }
   \`\`\`

3. **Passing Arguments to Functions**:
   The spread operator can expand an array into individual arguments for a function.
   \`\`\`javascript
   const numbers = [1, 2, 3];
   const sum = (a, b, c) => a + b + c;
   console.log(sum(...numbers)); // 6
   \`\`\`

4. **Converting Iterables to Arrays**:
   It can convert iterable objects (like strings or NodeLists) into arrays.
   \`\`\`javascript
   const str = "hello";
   const chars = [...str];
   console.log(chars); // ['h', 'e', 'l', 'l', 'o']
   \`\`\`

5. **Adding or Updating Properties in Objects**:
   The spread operator can be used to add or update properties in objects immutably.
   \`\`\`javascript
   const obj = { a: 1, b: 2 };
   const updatedObj = { ...obj, b: 3, c: 4 };
   console.log(updatedObj); // { a: 1, b: 3, c: 4 }
   \`\`\`

The spread operator is a powerful feature in JavaScript that simplifies working with arrays, objects, and other iterable data structures.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553237Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"949254bb-8a39-4422-81a0-e754a795ddc0",question:"What is JavaScript and how is it different from Java?",answer:`\`\`\`markdown
JavaScript is a lightweight, interpreted programming language primarily used to create dynamic and interactive content on websites. It is a client-side scripting language that runs in the browser and is widely used for tasks such as form validation, animations, and handling user interactions.

JavaScript is different from Java in several ways:

1. **Purpose**: Java is a general-purpose, object-oriented programming language used for building standalone applications, server-side applications, and mobile apps. JavaScript, on the other hand, is mainly used for enhancing the interactivity of web pages.

2. **Execution Environment**: Java code is compiled into bytecode and runs on the Java Virtual Machine (JVM), making it platform-independent. JavaScript is interpreted and executed directly in the browser (or on the server using environments like Node.js).

3. **Syntax and Complexity**: While both share some syntax similarities (like C-style syntax), Java is a statically-typed language requiring explicit declaration of data types, whereas JavaScript is dynamically-typed and more flexible.

4. **Use Cases**: Java is used for enterprise-level applications, Android development, and backend systems. JavaScript is primarily used for front-end development, though it can also be used on the backend with frameworks like Node.js.

Despite the similarity in their names, Java and JavaScript are distinct languages with different purposes and capabilities.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:52:50.553035Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"3c14c8da-7ed3-4a0a-b8ed-260bfac7297f",question:"What are the different data types in JavaScript?",answer:'```markdown\nJavaScript has the following data types:\n\n### 1. Primitive Data Types:\n   - **String**: Represents textual data. Example: `"Hello, World!"`\n   - **Number**: Represents numeric values (both integers and floating-point numbers). Example: `42`, `3.14`\n   - **BigInt**: Represents integers with arbitrary precision. Example: `123456789012345678901234567890n`\n   - **Boolean**: Represents logical values: `true` or `false`.\n   - **Undefined**: Represents a variable that has been declared but not assigned a value. Example: `let x;`\n   - **Null**: Represents an intentional absence of any object value. Example: `let y = null;`\n   - **Symbol**: Represents a unique and immutable value, often used as object property keys. Example: `Symbol(\'description\')`\n\n### 2. Non-Primitive (Reference) Data Type:\n   - **Object**: Represents collections of key-value pairs or more complex entities. Example:\n     ```javascript\n     let person = {\n       name: "John",\n       age: 30\n     };\n     ```\n\n### Special Notes:\n- Arrays, functions, and dates are technically objects in JavaScript.\n- JavaScript is dynamically typed, meaning variables can hold values of any data type and can change types during execution.\n```',level:"Beginner",created_at:"2025-03-28T17:52:50.553063Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"6213cfbe-bc19-4777-b73d-f3bbc500761c",question:"What is the difference between var, let, and const in JavaScript?",answer:"```markdown\nIn JavaScript, `var`, `let`, and `const` are used to declare variables, but they have significant differences in terms of scope, hoisting, and mutability:\n\n1. **`var`**:\n   - **Scope**: `var` is function-scoped, meaning it is accessible within the function where it is declared. If declared outside a function, it becomes globally scoped.\n   - **Hoisting**: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. This means you can use the variable before its declaration, but its value will be `undefined` until the assignment.\n   - **Re-declaration**: You can re-declare a `var` variable in the same scope without errors.\n   - **Example**:\n     ```javascript\n     console.log(x); // undefined (hoisted)\n     var x = 10;\n     console.log(x); // 10\n     ```\n\n2. **`let`**:\n   - **Scope**: `let` is block-scoped, meaning it is only accessible within the block (enclosed by `{}`) where it is declared.\n   - **Hoisting**: Variables declared with `let` are hoisted but are not initialized. Accessing them before declaration results in a `ReferenceError`.\n   - **Re-declaration**: You cannot re-declare a `let` variable in the same scope.\n   - **Example**:\n     ```javascript\n     {\n       let y = 20;\n       console.log(y); // 20\n     }\n     // console.log(y); // ReferenceError: y is not defined\n     ```\n\n3. **`const`**:\n   - **Scope**: Like `let`, `const` is block-scoped.\n   - **Hoisting**: Variables declared with `const` are hoisted but are not initialized. Accessing them before declaration results in a `ReferenceError`.\n   - **Mutability**: A `const` variable must be initialized at the time of declaration and cannot be reassigned. However, if the variable holds an object or array, the contents of the object or array can be modified.\n   - **Re-declaration**: You cannot re-declare a `const` variable in the same scope.\n   - **Example**:\n     ```javascript\n     const z = 30;\n     // z = 40; // TypeError: Assignment to constant variable\n     const arr = [1, 2, 3];\n     arr.push(4); // Allowed\n     console.log(arr); // [1, 2, 3, 4]\n     ```\n\n**Summary**:\n- Use `var` sparingly due to its function scope and potential for bugs.\n- Use `let` for variables that will be reassigned.\n- Use `const` for variables that should not be reassigned, ensuring immutability for primitive values.\n```",level:"Beginner",created_at:"2025-03-28T17:52:50.553073Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"61668223-26a7-40e5-bbe6-9873d0a54425",question:"What is the purpose of the 'use strict' directive in JavaScript?",answer:"```markdown\nThe `'use strict'` directive in JavaScript is used to enable strict mode, which enforces a stricter set of rules for writing JavaScript code. It helps developers write cleaner and more secure code by catching common coding mistakes and preventing the use of certain unsafe features. Strict mode can be applied globally or to individual functions.\n\n### Key purposes of `'use strict'`:\n1. **Eliminates silent errors**: Converts silent errors into exceptions, making them easier to detect and debug.\n2. **Prevents accidental global variables**: Variables must be explicitly declared using `var`, `let`, or `const`. Assigning a value to an undeclared variable throws an error.\n3. **Disallows duplicate parameter names**: Function parameters cannot have duplicate names, which avoids ambiguity.\n4. **Restricts use of `this`**: In strict mode, `this` in a function defaults to `undefined` instead of the global object, reducing unintended behavior.\n5. **Prohibits certain syntax**: Some features, like `with` statements, are disallowed in strict mode as they can lead to unpredictable behavior.\n\n### Example:\n```javascript\n'use strict';\n\nfunction example() {\n  undeclaredVariable = 10; // Throws an error because the variable is not declared\n}\n\nexample();\n```\n\nUsing `'use strict'` is a good practice, especially in modern JavaScript development, as it promotes better coding standards and helps avoid potential bugs.\n```",level:"Intermediate",created_at:"2025-03-28T17:52:50.553086Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"34977d20-1b00-48d4-afc2-df38c814bf70",question:"What are JavaScript closures and how do they work?",answer:`\`\`\`markdown
### What are JavaScript Closures and How Do They Work?

A **closure** in JavaScript is a feature where an inner function has access to the variables and scope of its outer function, even after the outer function has finished executing. Closures allow functions to "remember" the environment in which they were created.

#### How Closures Work:
1. **Scope Chain**: When a function is defined, it retains access to the variables in its outer scope. This is because of the lexical scoping rules in JavaScript.
2. **Preservation of Variables**: Even if the outer function has returned, the inner function still holds a reference to the variables in the outer function's scope.
3. **Encapsulation**: Closures can be used to create private variables and methods, as they are not directly accessible from outside the function.

#### Example:
\`\`\`javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(\`Outer Variable: \${outerVariable}\`);
    console.log(\`Inner Variable: \${innerVariable}\`);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");
// Output:
// Outer Variable: outside
// Inner Variable: inside
\`\`\`

In this example:
- \`outerFunction\` creates a variable \`outerVariable\` and returns \`innerFunction\`.
- \`innerFunction\` is a closure because it "remembers" the \`outerVariable\` from its parent scope, even after \`outerFunction\` has executed.

#### Use Cases of Closures:
1. **Data Privacy**: Create private variables that cannot be accessed directly.
   \`\`\`javascript
   function counter() {
     let count = 0;
     return function() {
       count++;
       return count;
     };
   }

   const increment = counter();
   console.log(increment()); // 1
   console.log(increment()); // 2
   \`\`\`
2. **Partial Application**: Pre-configure a function with some arguments.
   \`\`\`javascript
   function multiply(a) {
     return function(b) {
       return a * b;
     };
   }

   const double = multiply(2);
   console.log(double(5)); // 10
   \`\`\`
3. **Event Handlers**: Maintain state in asynchronous callbacks.

Closures are a powerful concept in JavaScript, enabling flexibility and control over function behavior and variable scope.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553096Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"08d0bded-aa1d-45a0-b8d7-c89f8c030f77",question:"What is the difference between == and === in JavaScript?",answer:"```markdown\nIn JavaScript, `==` and `===` are comparison operators, but they work differently:\n\n1. **`==` (Equality Operator)**:\n   - Compares two values for equality after performing type conversion if necessary.\n   - If the values are of different types, JavaScript attempts to convert them to the same type before comparing.\n   - Example:\n     ```javascript\n     console.log(5 == '5'); // true (type coercion happens)\n     ```\n\n2. **`===` (Strict Equality Operator)**:\n   - Compares two values for equality without performing type conversion.\n   - Both the value and the type must be the same for it to return `true`.\n   - Example:\n     ```javascript\n     console.log(5 === '5'); // false (no type coercion, types are different)\n     ```\n\n**Key Difference**: `==` allows type coercion, while `===` does not. It is generally recommended to use `===` to avoid unexpected behavior caused by type conversion.\n```",level:"Beginner",created_at:"2025-03-28T17:52:50.553107Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"886fca09-5847-4022-a99e-957a0a6a19b6",question:"What is the event loop in JavaScript and how does it work?",answer:`\`\`\`markdown
### What is the Event Loop in JavaScript and How Does It Work?

The **event loop** is a fundamental concept in JavaScript that enables asynchronous programming. It is responsible for handling and coordinating the execution of multiple pieces of code, such as callbacks, promises, and other asynchronous operations, while ensuring that JavaScript's single-threaded nature is maintained.

#### How the Event Loop Works:

1. **Call Stack**:
   - JavaScript uses a call stack to manage the execution of functions. When a function is invoked, it is pushed onto the call stack. Once the function execution is complete, it is popped off the stack.
   - The call stack operates on a "last in, first out" (LIFO) principle.

2. **Web APIs / Background Tasks**:
   - When an asynchronous operation (e.g., \`setTimeout\`, HTTP request, or DOM event listener) is initiated, it is delegated to the browser's Web APIs or Node.js's background thread.
   - These APIs handle the operation independently of the main thread.

3. **Callback Queue (or Task Queue)**:
   - Once an asynchronous operation is completed, its associated callback function is placed in the callback queue (or task queue).
   - Examples of tasks in the callback queue include \`setTimeout\` callbacks, DOM events, and other asynchronous tasks.

4. **Microtask Queue**:
   - In addition to the callback queue, there is a microtask queue, which has higher priority than the callback queue.
   - Microtasks include callbacks from Promises (e.g., \`.then()\` or \`catch()\`), \`MutationObserver\`, and \`queueMicrotask()\`.

5. **Event Loop**:
   - The event loop continuously checks the call stack to see if it is empty.
   - If the call stack is empty, the event loop processes tasks from the microtask queue first. Once the microtask queue is empty, it moves on to the callback queue.
   - This ensures that microtasks are executed before any other tasks in the callback queue.

#### Key Points:
- JavaScript is single-threaded, meaning it can execute only one task at a time.
- The event loop ensures that asynchronous operations do not block the main thread and are executed in the correct order.
- Microtasks have higher priority than tasks in the callback queue, which is why \`Promise\` callbacks are executed before \`setTimeout\` callbacks, even if both are queued at the same time.

#### Example:

\`\`\`javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('End');
\`\`\`

**Output**:
\`\`\`
Start
End
Promise callback
Timeout callback
\`\`\`

**Explanation**:
1. \`console.log('Start')\` and \`console.log('End')\` are executed synchronously and logged immediately.
2. The \`setTimeout\` callback is added to the callback queue.
3. The \`Promise\` callback is added to the microtask queue.
4. The event loop processes the microtask queue first, so the \`Promise\` callback is executed before the \`setTimeout\` callback.

The event loop is what makes JavaScript capable of handling asynchronous operations efficiently while maintaining its single-threaded nature.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:52:50.553117Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"d45a2295-0d0f-4062-8a43-76049ff3b19b",question:"What is the difference between synchronous and asynchronous programming in JavaScript?",answer:`\`\`\`markdown
In JavaScript, the difference between synchronous and asynchronous programming lies in how tasks are executed and handled:

### Synchronous Programming
- **Definition**: In synchronous programming, tasks are executed sequentially, one after the other. Each task must complete before the next one begins.
- **Blocking**: A synchronous task blocks the execution of subsequent tasks until it finishes.
- **Example**:
  \`\`\`javascript
  console.log("Task 1");
  console.log("Task 2");
  console.log("Task 3");
  \`\`\`
  Output:
  \`\`\`
  Task 1
  Task 2
  Task 3
  \`\`\`

### Asynchronous Programming
- **Definition**: In asynchronous programming, tasks can be executed independently of the main program flow. The program does not wait for a task to complete before moving on to the next one.
- **Non-blocking**: Asynchronous tasks do not block the execution of other tasks. Instead, they are executed in the background, and their results are handled via callbacks, promises, or \`async/await\`.
- **Example**:
  \`\`\`javascript
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
  }, 1000);
  console.log("Task 3");
  \`\`\`
  Output:
  \`\`\`
  Task 1
  Task 3
  Task 2
  \`\`\`

### Key Differences
| Feature               | Synchronous                     | Asynchronous                     |
|-----------------------|----------------------------------|-----------------------------------|
| **Execution**         | Sequential                      | Non-sequential                   |
| **Blocking**          | Blocks subsequent tasks         | Does not block subsequent tasks  |
| **Use Case**          | Simple, dependent operations    | Time-consuming or I/O operations |
| **Examples**          | Loops, arithmetic operations    | API calls, file reading          |

Asynchronous programming is particularly useful in JavaScript for handling tasks like fetching data from a server or reading files, where waiting for the task to complete would otherwise block the execution of other code.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553126Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"91a524e0-06ef-42e4-b225-21c31a086079",question:"What are JavaScript promises and how are they used?",answer:`\`\`\`markdown
### JavaScript Promises

A **JavaScript Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations in a more readable and manageable way compared to traditional callback functions.

A Promise can be in one of three states:
1. **Pending**: The initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation was completed successfully, and the promise has a resulting value.
3. **Rejected**: The operation failed, and the promise has a reason for the failure (usually an error).

#### Creating a Promise
A Promise is created using the \`Promise\` constructor, which takes a function (executor) with two parameters: \`resolve\` and \`reject\`.

\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
\`\`\`

#### Using Promises
Promises are consumed using the \`.then()\`, \`.catch()\`, and \`.finally()\` methods:

1. **\`.then()\`**: Executes when the promise is fulfilled and receives the resolved value.
2. **\`.catch()\`**: Executes when the promise is rejected and receives the error reason.
3. **\`.finally()\`**: Executes after the promise is settled (fulfilled or rejected), regardless of the outcome.

\`\`\`javascript
myPromise
  .then((result) => {
    console.log(result); // Logs: "Operation was successful!"
  })
  .catch((error) => {
    console.error(error); // Logs: "Operation failed." if rejected
  })
  .finally(() => {
    console.log("Promise has been settled."); // Always runs
  });
\`\`\`

#### Chaining Promises
Promises can be chained to handle multiple asynchronous operations in sequence. Each \`.then()\` returns a new promise, allowing further chaining.

\`\`\`javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
  .then((data) => {
    console.log(data); // Logs: "Data fetched"
    return "Processing data";
  })
  .then((processedData) => {
    console.log(processedData); // Logs: "Processing data"
  })
  .catch((error) => {
    console.error(error);
  });
\`\`\`

#### Benefits of Promises
- Avoids "callback hell" by providing a cleaner and more structured way to handle asynchronous code.
- Makes error handling easier with \`.catch()\`.
- Supports chaining for sequential asynchronous operations.

Promises are a core feature of modern JavaScript and are widely used in APIs like \`fetch\` for handling HTTP requests.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553136Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"45e47c0c-3093-4703-b6c1-7489c37677ce",question:"What is the purpose of the async/await syntax in JavaScript?",answer:"```markdown\nThe `async/await` syntax in JavaScript is used to handle asynchronous operations in a more readable and synchronous-like manner. It is built on top of Promises and provides a cleaner way to work with asynchronous code compared to using `.then()` and `.catch()` chains.\n\n### Key Points:\n1. **`async` Function**: Declaring a function as `async` ensures that it always returns a Promise. Inside an `async` function, you can use the `await` keyword to pause the execution until a Promise is resolved or rejected.\n   \n2. **`await` Keyword**: The `await` keyword is used to wait for a Promise to resolve. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and debug.\n\n3. **Error Handling**: You can use `try...catch` blocks with `async/await` to handle errors in a more straightforward way compared to chaining `.catch()` with Promises.\n\n### Example:\n```javascript\n// Example of async/await\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n}\n\nfetchData();\n```\n\n### Benefits:\n- Improves code readability and maintainability.\n- Reduces the complexity of chaining multiple `.then()` calls.\n- Makes asynchronous code easier to debug and reason about.\n\nIn summary, `async/await` simplifies working with asynchronous operations by providing a more intuitive and cleaner syntax.\n```",level:"Intermediate",created_at:"2025-03-28T17:52:50.553145Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"b36e1943-bb5b-44bc-8b87-1ef85add3d83",question:"What is the DOM (Document Object Model) in JavaScript?",answer:"```markdown\nThe **DOM (Document Object Model)** is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, where each node corresponds to a part of the document (such as elements, attributes, or text).\n\nIn JavaScript, the DOM allows developers to interact with and manipulate the content, structure, and style of a webpage dynamically. For example, you can use the DOM to:\n\n- Access elements (e.g., `document.getElementById()` or `document.querySelector()`).\n- Modify content or attributes (e.g., `element.textContent` or `element.setAttribute()`).\n- Add or remove elements (e.g., `document.createElement()` or `element.remove()`).\n- Handle events (e.g., `element.addEventListener()`).\n\nThe DOM provides a way for JavaScript to make webpages interactive and responsive to user actions.\n```",level:"Beginner",created_at:"2025-03-28T17:52:50.553154Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"f934a862-1ccc-4d58-9e62-840e02a9fa91",question:"What is the difference between null and undefined in JavaScript?",answer:'```markdown\nIn JavaScript, `null` and `undefined` are both used to represent the absence of a value, but they are different in their usage and meaning:\n\n1. **`undefined`**:\n   - It means a variable has been declared but has not been assigned a value yet.\n   - It is the default value for uninitialized variables.\n   - Example:\n     ```javascript\n     let x;\n     console.log(x); // Output: undefined\n     ```\n\n2. **`null`**:\n   - It is an intentional absence of any object value.\n   - It is explicitly assigned to a variable to indicate that it has no value.\n   - Example:\n     ```javascript\n     let y = null;\n     console.log(y); // Output: null\n     ```\n\n**Key Differences**:\n- `undefined` is a type itself (`undefined`), while `null` is an object.\n- `undefined` often indicates a variable that has not been initialized, whereas `null` is explicitly set to signify "no value."\n\n**Type Checking**:\n```javascript\nconsole.log(typeof undefined); // Output: "undefined"\nconsole.log(typeof null);      // Output: "object"\n```\n\nIn summary, `undefined` is used by JavaScript to indicate missing values, while `null` is used by developers to explicitly indicate an empty or non-existent value.\n```',level:"Beginner",created_at:"2025-03-28T17:52:50.553165Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"0db8050e-e8e9-479c-abfb-d860205a7b9c",question:"What is hoisting in JavaScript and how does it work?",answer:`\`\`\`markdown
### What is Hoisting in JavaScript and How Does it Work?

Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions in your code before they are declared, without causing a runtime error.

However, it's important to note that **only the declarations are hoisted, not the initializations**. For variables declared with \`var\`, the declaration is hoisted, but the value assignment remains in place. Variables declared with \`let\` and \`const\` are also hoisted, but they are placed in a "temporal dead zone" from the start of the block until the declaration is encountered, meaning they cannot be accessed before their declaration.

#### Example of Hoisting with \`var\`:
\`\`\`javascript
console.log(a); // Output: undefined (declaration is hoisted, but not the initialization)
var a = 5;
console.log(a); // Output: 5
\`\`\`

#### Example of Hoisting with \`let\` and \`const\`:
\`\`\`javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;
\`\`\`

#### Function Hoisting:
Function declarations are fully hoisted, meaning you can call the function before it is defined in the code:
\`\`\`javascript
greet(); // Output: "Hello, World!"

function greet() {
  console.log("Hello, World!");
}
\`\`\`

However, function expressions (both regular and arrow functions) are not fully hoisted. Only the variable declaration is hoisted, not the function definition:
\`\`\`javascript
sayHello(); // TypeError: sayHello is not a function
var sayHello = function() {
  console.log("Hello!");
};
\`\`\`

#### Key Points:
1. Hoisting applies to variable and function declarations, not initializations.
2. Variables declared with \`var\` are hoisted and initialized with \`undefined\`.
3. Variables declared with \`let\` and \`const\` are hoisted but remain in the "temporal dead zone" until their declaration is encountered.
4. Function declarations are fully hoisted, but function expressions are not.

Understanding hoisting helps avoid unexpected behavior and write cleaner, more predictable code.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553174Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"5e9d8550-f9f6-4c87-a317-cd1cc790b788",question:"What are JavaScript arrow functions and how do they differ from regular functions?",answer:`\`\`\`markdown
### JavaScript Arrow Functions and How They Differ from Regular Functions

Arrow functions are a more concise syntax for writing functions in JavaScript, introduced in ES6. They are particularly useful for writing shorter function expressions and are often used in functional programming patterns.

#### Syntax of Arrow Functions
An arrow function is defined using the \`=>\` (arrow) syntax. For example:

\`\`\`javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
\`\`\`

#### Key Differences Between Arrow Functions and Regular Functions

1. **Syntax**:
   - Arrow functions provide a shorter and cleaner syntax, especially for simple one-liner functions.
   - Regular functions require the \`function\` keyword and curly braces for the function body.

2. **\`this\` Binding**:
   - Arrow functions do not have their own \`this\`. Instead, they inherit \`this\` from the surrounding lexical scope. This makes them particularly useful in scenarios where you want to preserve the context of \`this\`, such as in callbacks.
   - Regular functions have their own \`this\`, which is determined by how the function is called (e.g., as a method, as a constructor, etc.).

   Example:
   \`\`\`javascript
   function RegularFunction() {
     this.value = 10;
     setTimeout(function() {
       console.log(this.value); // undefined, because \`this\` refers to the global object
     }, 1000);
   }

   function ArrowFunction() {
     this.value = 10;
     setTimeout(() => {
       console.log(this.value); // 10, because \`this\` is inherited from the enclosing scope
     }, 1000);
   }

   new RegularFunction();
   new ArrowFunction();
   \`\`\`

3. **Usage as Constructors**:
   - Arrow functions cannot be used as constructors and will throw an error if used with the \`new\` keyword.
   - Regular functions can be used as constructors to create objects.

4. **\`arguments\` Object**:
   - Arrow functions do not have their own \`arguments\` object. If you need to access the \`arguments\` of an arrow function, you must use the rest parameter syntax (\`...args\`).
   - Regular functions have their own \`arguments\` object, which contains all the arguments passed to the function.

   Example:
   \`\`\`javascript
   function regularFunction() {
     console.log(arguments); // Logs the arguments object
   }

   const arrowFunction = (...args) => {
     console.log(args); // Logs an array of arguments
   };

   regularFunction(1, 2, 3);
   arrowFunction(1, 2, 3);
   \`\`\`

5. **Implicit Return**:
   - Arrow functions allow for implicit return if the function body consists of a single expression. The value of that expression is automatically returned.
   - Regular functions require the use of the \`return\` keyword to return a value.

   Example:
   \`\`\`javascript
   const multiply = (a, b) => a * b; // Implicit return
   const multiplyRegular = function(a, b) {
     return a * b; // Explicit return
   };
   \`\`\`

#### Conclusion
Arrow functions are a powerful addition to JavaScript, offering a more concise syntax and predictable behavior for \`this\`. However, they are not a replacement for regular functions in all cases, especially when you need features like the \`arguments\` object or the ability to use the function as a constructor.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553183Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"afcdbbb2-c2ed-41d0-96a0-fd583f367e98",question:"What is the purpose of the JavaScript 'this' keyword?",answer:"```markdown\nThe `this` keyword in JavaScript refers to the object that is currently executing the code. Its value depends on the context in which it is used:\n\n1. **Global Context**: In the global execution context (outside of any function), `this` refers to the global object (`window` in browsers or `global` in Node.js).\n\n2. **Inside a Function**:\n   - In a regular function, `this` refers to the global object in non-strict mode, or `undefined` in strict mode.\n   - In an object method, `this` refers to the object that owns the method.\n\n3. **Arrow Functions**: Arrow functions do not have their own `this`. Instead, they inherit `this` from the surrounding lexical scope.\n\n4. **Event Handlers**: In event handlers, `this` typically refers to the element that triggered the event.\n\n5. **Explicit Binding**: The value of `this` can be explicitly set using methods like `call()`, `apply()`, or `bind()`.\n\n6. **Constructor Functions and Classes**: When using a constructor function or a class, `this` refers to the newly created object.\n\nThe `this` keyword is essential for dynamic context binding and allows methods to operate on the object they belong to.\n```",level:"Intermediate",created_at:"2025-03-28T17:52:50.553192Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"67fcb060-ee52-4761-89d7-f1b7047262f0",question:"What are JavaScript prototypes and how are they used?",answer:`\`\`\`markdown
### JavaScript Prototypes

In JavaScript, every object has an internal property called \`[[Prototype]]\`, which refers to another object. This is the foundation of JavaScript's prototype-based inheritance. The prototype is essentially a blueprint from which objects can inherit properties and methods.

#### Key Concepts of Prototypes:
1. **Prototype Chain**: If a property or method is not found on an object, JavaScript looks up the \`[[Prototype]]\` chain to find it. This chain continues until it reaches \`null\`, which is the end of the chain.
2. **Object.prototype**: The base object in JavaScript is \`Object.prototype\`. All objects ultimately inherit from it unless explicitly created otherwise.
3. **Prototype Property**: Functions in JavaScript have a \`prototype\` property, which is used to define properties and methods that will be inherited by objects created using that function as a constructor.

#### How Prototypes Are Used:
1. **Inheritance**: Prototypes allow objects to share methods and properties, enabling inheritance. For example:
   \`\`\`javascript
   function Person(name) {
       this.name = name;
   }

   Person.prototype.greet = function() {
       console.log(\`Hello, my name is \${this.name}\`);
   };

   const john = new Person('John');
   john.greet(); // Output: Hello, my name is John
   \`\`\`

2. **Extending Objects**: Prototypes can be used to extend the functionality of existing objects.
   \`\`\`javascript
   Array.prototype.sum = function() {
       return this.reduce((acc, val) => acc + val, 0);
   };

   const numbers = [1, 2, 3];
   console.log(numbers.sum()); // Output: 6
   \`\`\`

3. **Dynamic Behavior**: Prototypes allow dynamic addition of properties or methods to objects even after they are created.

4. **Custom Objects**: Developers can create custom objects with shared behavior using prototypes.

#### Important Notes:
- Modifying the prototype of an object after it has been created can lead to performance issues and is generally discouraged.
- The \`Object.create()\` method allows creating a new object with a specified prototype.
   \`\`\`javascript
   const proto = {
       greet() {
           console.log('Hello from prototype!');
       }
   };

   const obj = Object.create(proto);
   obj.greet(); // Output: Hello from prototype!
   \`\`\`

- The \`__proto__\` property (deprecated but still widely used) and \`Object.getPrototypeOf()\` can be used to access an object's prototype.

#### Summary:
Prototypes are a core feature of JavaScript that enable inheritance and code reuse. By leveraging prototypes, developers can create efficient and maintainable code, sharing behavior across objects without duplicating functionality.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:52:50.553201Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"d8ae9a4e-b54f-4c52-bc23-f84022a4bb59",question:"What is the difference between function declarations and function expressions in JavaScript?",answer:`\`\`\`markdown
In JavaScript, the difference between function declarations and function expressions lies in how they are defined and their behavior in the code:

### Function Declaration
- A function declaration defines a named function using the \`function\` keyword.
- It is hoisted to the top of its scope, meaning you can call the function before it is defined in the code.
- Syntax:
  \`\`\`javascript
  function greet() {
    console.log("Hello!");
  }
  \`\`\`

### Function Expression
- A function expression defines a function as part of an expression. It can be named or anonymous.
- It is not hoisted, so you cannot call the function before the expression is defined.
- Syntax:
  \`\`\`javascript
  const greet = function() {
    console.log("Hello!");
  };
  \`\`\`

### Key Differences
| Aspect                  | Function Declaration                  | Function Expression                  |
|-------------------------|---------------------------------------|---------------------------------------|
| **Hoisting**            | Hoisted to the top of the scope.      | Not hoisted.                         |
| **Usage Before Definition** | Can be called before it is defined. | Cannot be called before it is defined. |
| **Naming**              | Always has a name.                   | Can be anonymous or named.           |

### Example
\`\`\`javascript
// Function Declaration
greet(); // Works because of hoisting
function greet() {
  console.log("Hello from declaration!");
}

// Function Expression
try {
  greetExpression(); // Error: Cannot access 'greetExpression' before initialization
} catch (e) {
  console.log(e.message);
}
const greetExpression = function() {
  console.log("Hello from expression!");
};
\`\`\`
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:52:50.553210Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"1684c9d2-f629-4bf2-85a6-269efcda6a4e",question:"What are JavaScript modules and how do you use them?",answer:`\`\`\`markdown
### JavaScript Modules

JavaScript modules are reusable pieces of code that can be exported from one file and imported into another. They help in organizing code into smaller, manageable, and reusable components, making it easier to maintain and debug. Modules also allow for better encapsulation by keeping variables and functions private to the module unless explicitly exported.

#### Key Features of JavaScript Modules:
1. **Encapsulation**: Variables and functions are scoped to the module by default.
2. **Reusability**: Code can be reused across different parts of an application.
3. **Maintainability**: Code is easier to maintain and debug when divided into smaller modules.
4. **Dependency Management**: Modules can import other modules, creating a clear dependency structure.

#### Using JavaScript Modules

1. **Exporting Code**:
   You can export variables, functions, or classes from a module using \`export\`. There are two types of exports:
   
   - **Named Exports**: Export multiple values by name.
     \`\`\`javascript
     // math.js
     export const add = (a, b) => a + b;
     export const subtract = (a, b) => a - b;
     \`\`\`

   - **Default Export**: Export a single default value.
     \`\`\`javascript
     // greet.js
     export default function greet(name) {
       return \`Hello, \${name}!\`;
     }
     \`\`\`

2. **Importing Code**:
   Use the \`import\` keyword to bring in exported code from another module.
   
   - Importing named exports:
     \`\`\`javascript
     import { add, subtract } from './math.js';

     console.log(add(2, 3)); // Output: 5
     console.log(subtract(5, 2)); // Output: 3
     \`\`\`

   - Importing a default export:
     \`\`\`javascript
     import greet from './greet.js';

     console.log(greet('Alice')); // Output: Hello, Alice!
     \`\`\`

   - Importing everything as an object:
     \`\`\`javascript
     import * as math from './math.js';

     console.log(math.add(2, 3)); // Output: 5
     console.log(math.subtract(5, 2)); // Output: 3
     \`\`\`

3. **Using Modules in the Browser**:
   To use modules in the browser, include the \`type="module"\` attribute in the \`<script>\` tag:
   \`\`\`html
   <script type="module" src="main.js"><\/script>
   \`\`\`

4. **Using Modules in Node.js**:
   In Node.js, you can use ES modules by setting \`"type": "module"\` in your \`package.json\` file or by using \`.mjs\` file extensions.

#### Example
\`\`\`javascript
// math.js
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

// main.js
import { multiply, divide } from './math.js';

console.log(multiply(4, 5)); // Output: 20
console.log(divide(10, 2));  // Output: 5
\`\`\`

JavaScript modules are now widely supported in modern browsers and Node.js, making them a standard way to structure and manage code in JavaScript applications.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553219Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"99566a59-8d64-4bda-830b-96c03adf0bf7",question:"What is the difference between call(), apply(), and bind() in JavaScript?",answer:"```markdown\nIn JavaScript, `call()`, `apply()`, and `bind()` are methods used to control the `this` context of a function and invoke it in different ways. Here's a breakdown of their differences:\n\n### 1. `call()`\n- **Purpose**: Invokes a function with a specified `this` context and arguments provided individually.\n- **Syntax**: `function.call(thisArg, arg1, arg2, ...)`\n- **Use Case**: Use `call()` when you know the arguments beforehand and want to pass them explicitly.\n- **Example**:\n  ```javascript\n  function greet(greeting, punctuation) {\n    console.log(`${greeting}, ${this.name}${punctuation}`);\n  }\n\n  const person = { name: 'Alice' };\n  greet.call(person, 'Hello', '!');\n  // Output: \"Hello, Alice!\"\n  ```\n\n---\n\n### 2. `apply()`\n- **Purpose**: Similar to `call()`, but arguments are passed as an array or array-like object.\n- **Syntax**: `function.apply(thisArg, [argsArray])`\n- **Use Case**: Use `apply()` when you have arguments in an array or need to pass them dynamically.\n- **Example**:\n  ```javascript\n  function greet(greeting, punctuation) {\n    console.log(`${greeting}, ${this.name}${punctuation}`);\n  }\n\n  const person = { name: 'Bob' };\n  greet.apply(person, ['Hi', '!']);\n  // Output: \"Hi, Bob!\"\n  ```\n\n---\n\n### 3. `bind()`\n- **Purpose**: Creates a new function with a specified `this` context and optionally pre-sets arguments. The new function can be invoked later.\n- **Syntax**: `function.bind(thisArg, arg1, arg2, ...)`\n- **Use Case**: Use `bind()` when you want to create a reusable function with a specific `this` context.\n- **Example**:\n  ```javascript\n  function greet(greeting, punctuation) {\n    console.log(`${greeting}, ${this.name}${punctuation}`);\n  }\n\n  const person = { name: 'Charlie' };\n  const boundGreet = greet.bind(person, 'Hey');\n  boundGreet('!');\n  // Output: \"Hey, Charlie!\"\n  ```\n\n---\n\n### Key Differences\n| Method   | Invokes Function Immediately? | Accepts Arguments Individually? | Accepts Arguments as Array? | Returns New Function? |\n|----------|-------------------------------|----------------------------------|-----------------------------|-----------------------|\n| `call()` | Yes                           | Yes                              | No                          | No                    |\n| `apply()`| Yes                           | No                               | Yes                         | No                    |\n| `bind()` | No                            | Yes                              | No                          | Yes                   |\n\nIn summary:\n- Use `call()` or `apply()` to invoke a function immediately with a specific `this` context.\n- Use `bind()` to create a new function with a bound `this` context for later use.\n```",level:"Advanced",created_at:"2025-03-28T17:52:50.553227Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"6079e67b-b1d6-4e67-b8ed-9d18c18b57bf",question:"What is the difference between for, for...in, and for...of loops in JavaScript?",answer:"```markdown\nIn JavaScript, `for`, `for...in`, and `for...of` loops are used for iteration, but they differ in their use cases and behavior:\n\n### 1. `for` Loop\n- The `for` loop is a general-purpose loop that is used to iterate over a block of code a specific number of times.\n- It is commonly used with arrays or when the number of iterations is known beforehand.\n- Syntax:\n  ```javascript\n  for (initialization; condition; increment/decrement) {\n    // Code to execute\n  }\n  ```\n- Example:\n  ```javascript\n  for (let i = 0; i < 5; i++) {\n    console.log(i); // Outputs: 0, 1, 2, 3, 4\n  }\n  ```\n\n### 2. `for...in` Loop\n- The `for...in` loop is used to iterate over the **enumerable properties** of an object (keys in an object or indices in an array).\n- It is not recommended for iterating over arrays because it iterates over all enumerable properties, including inherited ones, which may lead to unexpected results.\n- Syntax:\n  ```javascript\n  for (key in object) {\n    // Code to execute\n  }\n  ```\n- Example:\n  ```javascript\n  const obj = { a: 1, b: 2, c: 3 };\n  for (let key in obj) {\n    console.log(key, obj[key]); // Outputs: a 1, b 2, c 3\n  }\n  ```\n\n### 3. `for...of` Loop\n- The `for...of` loop is used to iterate over **iterable objects** such as arrays, strings, Maps, Sets, and more.\n- It directly accesses the values of the iterable, making it more suitable for arrays and other iterable objects.\n- Syntax:\n  ```javascript\n  for (value of iterable) {\n    // Code to execute\n  }\n  ```\n- Example:\n  ```javascript\n  const arr = [10, 20, 30];\n  for (let value of arr) {\n    console.log(value); // Outputs: 10, 20, 30\n  }\n  ```\n\n### Key Differences\n| Loop Type   | Use Case                          | Iterates Over                  | Notes                                                                 |\n|-------------|-----------------------------------|--------------------------------|----------------------------------------------------------------------|\n| `for`       | General-purpose iteration         | Indices (manually controlled)  | Best for when you need full control over the iteration process.      |\n| `for...in`  | Iterates over object properties   | Keys (enumerable properties)   | Avoid for arrays; may include inherited properties.                  |\n| `for...of`  | Iterates over iterable objects    | Values of the iterable         | Ideal for arrays, strings, Maps, Sets, and other iterable objects.   |\n\n### Summary\n- Use `for` for traditional loops with a known number of iterations.\n- Use `for...in` for iterating over object properties.\n- Use `for...of` for iterating over the values of iterable objects.\n```",level:"Intermediate",created_at:"2025-03-28T17:52:50.553245Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"1b2aef70-b4d9-4c85-be6c-d331c82e716d",question:"What are JavaScript objects and how do you create them?",answer:`\`\`\`markdown
### What are JavaScript Objects and How Do You Create Them?

In JavaScript, objects are collections of key-value pairs, where the keys are strings (or symbols) and the values can be of any data type, including other objects, arrays, or functions. Objects are used to store and organize data in a structured way.

#### Creating JavaScript Objects

1. **Using Object Literals**:
   You can create an object using curly braces \`{}\` and define key-value pairs inside.
   \`\`\`javascript
   const person = {
       name: "John",
       age: 30,
       isStudent: false,
       greet: function() {
           console.log("Hello!");
       }
   };
   \`\`\`

2. **Using the \`new Object()\` Constructor**:
   You can create an object using the \`Object\` constructor.
   \`\`\`javascript
   const car = new Object();
   car.make = "Toyota";
   car.model = "Corolla";
   car.year = 2022;
   \`\`\`

3. **Using a Constructor Function**:
   You can define a custom constructor function to create objects with specific properties and methods.
   \`\`\`javascript
   function Person(name, age) {
       this.name = name;
       this.age = age;
   }
   const person1 = new Person("Alice", 25);
   \`\`\`

4. **Using \`Object.create()\`**:
   You can create an object with a specified prototype using \`Object.create()\`.
   \`\`\`javascript
   const prototypeObject = {
       greet: function() {
           console.log("Hello!");
       }
   };
   const newObject = Object.create(prototypeObject);
   newObject.name = "Jane";
   \`\`\`

Objects are fundamental in JavaScript and are widely used to represent real-world entities, manage data, and implement functionality.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:52:50.553254Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"43946bd8-6192-4086-8124-850d8e3767ef",question:"What is the difference between shallow copy and deep copy in JavaScript?",answer:`\`\`\`markdown
In JavaScript, the difference between a shallow copy and a deep copy lies in how the data is copied and whether nested objects are duplicated or referenced.

### Shallow Copy
- A shallow copy creates a new object, but it only copies the top-level properties of the original object.
- If the original object contains nested objects (like arrays or other objects), the shallow copy will still reference the same nested objects in memory.
- Changes made to the nested objects in the shallow copy will affect the original object, and vice versa.
- Common methods to create a shallow copy:
  - Using the spread operator (\`...\`): \`const shallowCopy = { ...original };\`
  - Using \`Object.assign()\`: \`const shallowCopy = Object.assign({}, original);\`

### Deep Copy
- A deep copy creates a completely independent copy of the original object, including all nested objects.
- Changes made to the deep copy do not affect the original object, and vice versa.
- Deep copying is more complex and often requires additional tools or techniques.
- Common methods to create a deep copy:
  - Using \`JSON.stringify()\` and \`JSON.parse()\`:
    \`\`\`javascript
    const deepCopy = JSON.parse(JSON.stringify(original));
    \`\`\`
    *Note: This method has limitations, such as not handling functions, \`undefined\`, or circular references.*
  - Using libraries like Lodash (\`_.cloneDeep()\`):
    \`\`\`javascript
    const deepCopy = _.cloneDeep(original);
    \`\`\`

### Example
\`\`\`javascript
const original = { a: 1, b: { c: 2 } };

// Shallow Copy
const shallowCopy = { ...original };
shallowCopy.b.c = 42;
console.log(original.b.c); // Output: 42 (nested object is shared)

// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 99;
console.log(original.b.c); // Output: 2 (nested object is independent)
\`\`\`

### Summary
- **Shallow Copy**: Copies only the top-level properties; nested objects are shared.
- **Deep Copy**: Creates a completely independent copy, including all nested objects.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553269Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"d254046a-142f-44a4-a76f-7288c5ee7f71",question:"What is the purpose of the JavaScript map() and filter() methods?",answer:"```markdown\nThe `map()` and `filter()` methods in JavaScript are used to manipulate and transform arrays in a functional programming style.\n\n### `map()`\nThe `map()` method is used to create a new array by applying a provided function to each element of the original array. It does not modify the original array but returns a new one with the transformed elements.\n\n**Syntax:**\n```javascript\narray.map(callback(element, index, array))\n```\n\n- **callback**: A function that is called for every element in the array.\n  - **element**: The current element being processed.\n  - **index** (optional): The index of the current element.\n  - **array** (optional): The array `map()` was called on.\n\n**Example:**\n```javascript\nconst numbers = [1, 2, 3, 4];\nconst squared = numbers.map(num => num * num);\nconsole.log(squared); // Output: [1, 4, 9, 16]\n```\n\n---\n\n### `filter()`\nThe `filter()` method is used to create a new array containing only the elements that pass a specified condition (i.e., return `true` when the callback function is executed). Like `map()`, it does not modify the original array.\n\n**Syntax:**\n```javascript\narray.filter(callback(element, index, array))\n```\n\n- **callback**: A function that is called for every element in the array.\n  - **element**: The current element being processed.\n  - **index** (optional): The index of the current element.\n  - **array** (optional): The array `filter()` was called on.\n\n**Example:**\n```javascript\nconst numbers = [1, 2, 3, 4];\nconst evenNumbers = numbers.filter(num => num % 2 === 0);\nconsole.log(evenNumbers); // Output: [2, 4]\n```\n\n---\n\n### Key Differences:\n- `map()` transforms every element in the array and returns a new array of the same length.\n- `filter()` selects elements based on a condition and returns a new array with fewer or the same number of elements as the original.\n\nBoth methods are commonly used in functional programming to work with arrays in a clean and readable way.\n```",level:"Intermediate",created_at:"2025-03-28T17:52:50.553279Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"a1c7dee7-8a11-411a-a0ca-3a2a330c19f5",question:"What is the difference between localStorage, sessionStorage, and cookies in JavaScript?",answer:`\`\`\`markdown
### Difference Between \`localStorage\`, \`sessionStorage\`, and Cookies in JavaScript

1. **Storage Duration**:
   - **localStorage**: Data persists even after the browser is closed and remains until explicitly deleted.
   - **sessionStorage**: Data persists only for the duration of the page session. It is cleared when the browser tab is closed.
   - **Cookies**: Can be set with an expiration date. If no expiration is set, they are treated as session cookies and are deleted when the browser is closed.

2. **Storage Capacity**:
   - **localStorage**: Typically allows up to 5-10 MB of data per origin.
   - **sessionStorage**: Similar to \`localStorage\`, it allows up to 5-10 MB of data per origin.
   - **Cookies**: Limited to around 4 KB per cookie.

3. **Accessibility**:
   - **localStorage**: Accessible only from the same origin (protocol, domain, and port).
   - **sessionStorage**: Also accessible only from the same origin, but limited to the specific browser tab.
   - **Cookies**: Can be accessed server-side (sent with every HTTP request) and client-side (via JavaScript).

4. **Use Cases**:
   - **localStorage**: Suitable for storing large amounts of data that need to persist across sessions, such as user preferences or application state.
   - **sessionStorage**: Ideal for temporary data that should only exist during a single session, such as form data or one-time calculations.
   - **Cookies**: Best for storing small amounts of data that need to be sent to the server with every request, such as authentication tokens or user session identifiers.

5. **Data Transmission**:
   - **localStorage**: Data is not sent to the server with HTTP requests.
   - **sessionStorage**: Data is also not sent to the server with HTTP requests.
   - **Cookies**: Automatically sent to the server with every HTTP request, which can impact performance.

6. **Security**:
   - **localStorage** and **sessionStorage**: Data is stored in plain text and is vulnerable to cross-site scripting (XSS) attacks if not handled properly.
   - **Cookies**: Can be secured using flags like \`HttpOnly\` (to prevent client-side access) and \`Secure\` (to ensure transmission over HTTPS).

### Summary Table

| Feature             | localStorage       | sessionStorage    | Cookies          |
|---------------------|--------------------|-------------------|------------------|
| Persistence         | Until explicitly deleted | Until tab is closed | Depends on expiration |
| Capacity            | 5-10 MB           | 5-10 MB           | ~4 KB per cookie |
| Accessibility       | Client-side only  | Client-side only  | Client & server  |
| Data Transmission   | Not sent to server | Not sent to server | Sent with requests |
| Security Features   | Vulnerable to XSS | Vulnerable to XSS | \`HttpOnly\`, \`Secure\` flags |

By understanding these differences, you can choose the most appropriate storage mechanism for your application's needs.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553293Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"f914d053-9fbf-4ff3-a74b-136a56d2e602",question:"What are JavaScript callbacks and how are they used?",answer:`\`\`\`markdown
### What are JavaScript Callbacks and How Are They Used?

A **callback** in JavaScript is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are commonly used to handle asynchronous operations, such as fetching data from an API, reading files, or handling events.

#### How Callbacks Work
1. A function is defined and passed as an argument to another function.
2. The receiving function executes the callback at the appropriate time, often after completing some task.

#### Example of a Callback
\`\`\`javascript
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data fetched!");
    callback("Here is your data");
  }, 2000); // Simulates a 2-second delay
}

function processData(data) {
  console.log("Processing:", data);
}

// Using the callback
fetchData(processData);
\`\`\`

In this example:
- \`fetchData\` simulates an asynchronous operation (e.g., fetching data).
- \`processData\` is passed as a callback to \`fetchData\` and is executed after the data is fetched.

#### Why Use Callbacks?
- **Asynchronous Programming**: Callbacks allow JavaScript to handle tasks without blocking the main thread.
- **Event Handling**: Callbacks are used in event listeners to execute code when an event occurs.
- **Customizable Behavior**: They enable passing custom logic to functions for flexibility.

#### Common Use Cases
- Handling API responses (e.g., \`fetch\` or \`XMLHttpRequest\`).
- Event listeners (e.g., \`button.addEventListener('click', callback)\`).
- Timers (e.g., \`setTimeout\` or \`setInterval\`).

#### Callback Pitfalls
Using too many nested callbacks can lead to "callback hell," making code difficult to read and maintain. To address this, modern JavaScript often uses **Promises** or **async/await** for cleaner asynchronous code.

\`\`\`javascript
// Example of callback hell
doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      console.log("All tasks completed!");
    });
  });
});
\`\`\`

By understanding and using callbacks effectively, you can write more efficient and responsive JavaScript code.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:52:50.553306Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"eef15ed8-d8c7-4487-8a5a-72ece478a73f",question:"What is the purpose of the JavaScript reduce() method?",answer:"```markdown\nThe `reduce()` method in JavaScript is used to execute a reducer function on each element of an array, resulting in a single output value. It is commonly used to accumulate or combine array elements into a single value, such as summing numbers, flattening arrays, or building objects.\n\nThe `reduce()` method takes two arguments:\n1. A reducer function, which is called for each element in the array. This function takes four parameters:\n   - `accumulator`: The accumulated result from the previous iteration.\n   - `currentValue`: The current element being processed in the array.\n   - `currentIndex` (optional): The index of the current element.\n   - `array` (optional): The array `reduce()` was called on.\n2. An initial value (optional): The starting value for the accumulator. If not provided, the first element of the array is used as the initial value, and the iteration starts from the second element.\n\n### Syntax:\n```javascript\narray.reduce(callback, initialValue)\n```\n\n### Example:\n```javascript\n// Summing numbers in an array\nconst numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);\nconsole.log(sum); // Output: 10\n\n// Flattening an array of arrays\nconst nestedArrays = [[1, 2], [3, 4], [5, 6]];\nconst flattened = nestedArrays.reduce((acc, curr) => acc.concat(curr), []);\nconsole.log(flattened); // Output: [1, 2, 3, 4, 5, 6]\n```\n\nThe `reduce()` method is a powerful tool for transforming and aggregating data in arrays.\n```",level:"Intermediate",created_at:"2025-03-28T17:52:50.553319Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"e45dcff3-36d3-4b14-9846-9d149e1c12c4",question:"What is the difference between a promise and an observable in JavaScript?",answer:`\`\`\`markdown
In JavaScript, both Promises and Observables are used to handle asynchronous operations, but they differ significantly in their behavior, features, and use cases.

### Promises
1. **Eager Execution**: A Promise starts executing immediately when it is created. It represents a single value that will be resolved or rejected in the future.
2. **Single Emission**: A Promise can only resolve or reject once. After that, its state is immutable, and it cannot emit additional values.
3. **Chaining**: Promises use \`.then()\`, \`.catch()\`, and \`.finally()\` methods to handle asynchronous operations and errors in a chainable manner.
4. **Push-based**: Promises are push-based, meaning the producer (async operation) pushes the resolved value to the consumer.
5. **Simpler API**: Promises are simpler to use and are well-suited for straightforward, single-value asynchronous operations.

   Example:
   \`\`\`javascript
   const promise = new Promise((resolve, reject) => {
       setTimeout(() => resolve("Promise resolved"), 1000);
   });

   promise.then(value => console.log(value));
   \`\`\`

### Observables
1. **Lazy Execution**: An Observable does not start emitting values until it is subscribed to. It represents a stream of values over time.
2. **Multiple Emissions**: Observables can emit multiple values over time, making them suitable for handling streams of data (e.g., user input, WebSocket messages).
3. **Operators**: Observables provide a rich set of operators (e.g., \`map\`, \`filter\`, \`merge\`, \`debounceTime\`) for transforming, combining, and manipulating streams of data.
4. **Pull-based**: Observables are pull-based, meaning the consumer (subscriber) requests data from the producer.
5. **Complex API**: Observables are more complex and are typically used in scenarios requiring advanced asynchronous data handling, such as reactive programming.

   Example:
   \`\`\`javascript
   import { Observable } from 'rxjs';

   const observable = new Observable(subscriber => {
       subscriber.next("First value");
       setTimeout(() => subscriber.next("Second value"), 1000);
       setTimeout(() => subscriber.complete(), 2000);
   });

   observable.subscribe({
       next: value => console.log(value),
       complete: () => console.log("Observable complete")
   });
   \`\`\`

### Key Differences
| Feature               | Promise                     | Observable                  |
|-----------------------|-----------------------------|-----------------------------|
| Execution             | Eager                      | Lazy                        |
| Emissions             | Single value               | Multiple values             |
| Cancellation          | Not cancellable            | Cancellable via \`unsubscribe\` |
| Operators             | Limited (\`then\`, \`catch\`)  | Rich set of operators       |
| Use Case              | Simple async operations    | Streams of data over time   |

### Summary
- Use **Promises** for simple, one-time asynchronous operations like fetching data from an API.
- Use **Observables** for handling continuous streams of data or when you need advanced control over asynchronous workflows.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:52:50.553334Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"1e49cbdd-d420-409b-a890-a4ef790cc7f4",question:"What is the purpose of the JavaScript setTimeout() and setInterval() functions?",answer:'```markdown\nIn JavaScript, the `setTimeout()` and `setInterval()` functions are used to execute code after a specified amount of time or at regular intervals, respectively.\n\n1. **`setTimeout()`**: This function is used to execute a piece of code or a function after a specified delay (in milliseconds). It runs the code only once after the delay.\n\n   **Syntax**:\n   ```javascript\n   setTimeout(function, delay);\n   ```\n\n   **Example**:\n   ```javascript\n   setTimeout(() => {\n       console.log("This message appears after 2 seconds.");\n   }, 2000);\n   ```\n\n2. **`setInterval()`**: This function is used to repeatedly execute a piece of code or a function at a specified interval (in milliseconds). It continues to run until explicitly stopped using `clearInterval()`.\n\n   **Syntax**:\n   ```javascript\n   setInterval(function, interval);\n   ```\n\n   **Example**:\n   ```javascript\n   const intervalId = setInterval(() => {\n       console.log("This message appears every 1 second.");\n   }, 1000);\n\n   // To stop the interval after 5 seconds\n   setTimeout(() => {\n       clearInterval(intervalId);\n       console.log("Interval stopped.");\n   }, 5000);\n   ```\n\n**Key Differences**:\n- `setTimeout()` executes code once after the delay.\n- `setInterval()` executes code repeatedly at the specified interval.\n\nBoth functions are useful for scheduling tasks in JavaScript.\n```',level:"Beginner",created_at:"2025-03-28T17:52:50.553349Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"ae533f57-85f6-4b10-a5c3-7d640c6aefcd",question:"What are JavaScript generators and how do they work?",answer:`\`\`\`markdown
### JavaScript Generators and How They Work

JavaScript generators are special functions that can pause their execution and later resume from where they left off. They are introduced in ES6 and are defined using the \`function*\` syntax. Generators provide a powerful way to handle asynchronous programming, lazy evaluation, and custom iteration.

#### Key Characteristics of Generators:
1. **Pause and Resume**: Generators can pause execution at any point using the \`yield\` keyword and resume later from the same point.
2. **Iterator Protocol**: Generators implement the iterator protocol, meaning they return an object with a \`next()\` method that can be used to iterate through their values.
3. **State Preservation**: Generators maintain their state between pauses, allowing them to remember where they left off.

#### Syntax:
\`\`\`javascript
function* generatorFunction() {
  yield 'First value';
  yield 'Second value';
  return 'Final value';
}
\`\`\`

#### How Generators Work:
1. When a generator function is called, it does not execute immediately. Instead, it returns a generator object.
2. The generator object has a \`next()\` method, which starts or resumes the generator's execution.
3. Each call to \`next()\` runs the generator until it encounters a \`yield\` statement, at which point it pauses and returns the value specified by \`yield\`.
4. When the generator completes execution (reaches the end or a \`return\` statement), the \`done\` property of the result returned by \`next()\` is set to \`true\`.

#### Example:
\`\`\`javascript
function* simpleGenerator() {
  console.log('Start');
  yield 1;
  console.log('After first yield');
  yield 2;
  console.log('After second yield');
  return 3;
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: true }
console.log(gen.next()); // { value: undefined, done: true }
\`\`\`

#### Use Cases:
1. **Asynchronous Programming**: Generators can be used with \`yield\` to pause execution and wait for asynchronous operations.
2. **Custom Iterators**: Generators can create custom iterable objects.
3. **Infinite Sequences**: Generators can produce infinite sequences without consuming large amounts of memory.

#### Example: Infinite Sequence
\`\`\`javascript
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const seq = infiniteSequence();
console.log(seq.next().value); // 0
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
\`\`\`

#### Conclusion:
Generators are a powerful feature in JavaScript that enable more flexible and efficient control over function execution. By leveraging the \`yield\` keyword and the iterator protocol, they simplify complex workflows, especially in scenarios involving asynchronous operations or custom iteration logic.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:52:50.553365Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"d9c84dcd-74e5-41f5-8d21-1f5fd44e78f2",question:"What is the difference between mutable and immutable data in JavaScript?",answer:`\`\`\`markdown
In JavaScript, the difference between mutable and immutable data lies in whether the data can be changed after it is created.

### Mutable Data
- Mutable data can be modified after it is created.
- Changes to mutable data affect the original data structure.
- Examples of mutable data types in JavaScript include:
  - Objects (\`{}\`): You can add, remove, or update properties.
  - Arrays (\`[]\`): You can modify elements, add new elements, or remove elements.

\`\`\`javascript
let obj = { name: "Alice" };
obj.age = 25; // Modifies the object by adding a new property
console.log(obj); // { name: "Alice", age: 25 }

let arr = [1, 2, 3];
arr.push(4); // Modifies the array by adding a new element
console.log(arr); // [1, 2, 3, 4]
\`\`\`

### Immutable Data
- Immutable data cannot be changed after it is created.
- Any modification results in the creation of a new value or data structure, leaving the original unchanged.
- Examples of immutable data types in JavaScript include:
  - Primitive types: \`String\`, \`Number\`, \`Boolean\`, \`null\`, \`undefined\`, \`Symbol\`, and \`BigInt\`.

\`\`\`javascript
let str = "Hello";
let newStr = str + " World"; // Creates a new string
console.log(str); // "Hello" (original string remains unchanged)
console.log(newStr); // "Hello World"

let num = 42;
let newNum = num + 1; // Creates a new number
console.log(num); // 42 (original number remains unchanged)
console.log(newNum); // 43
\`\`\`

### Key Differences
| Aspect                | Mutable Data                  | Immutable Data               |
|-----------------------|-------------------------------|------------------------------|
| Can be modified       | Yes                           | No                           |
| Original data changes | Yes                           | No                           |
| Examples              | Objects, Arrays              | Strings, Numbers, Booleans   |

Understanding the distinction between mutable and immutable data is essential for managing state and avoiding unintended side effects in JavaScript applications.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553380Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"96756d9c-c919-45d4-a20f-c798194d56ca",question:"What is the purpose of the JavaScript Symbol data type?",answer:"```markdown\nThe `Symbol` data type in JavaScript is a primitive type introduced in ECMAScript 6 (ES6). Its primary purpose is to create unique and immutable identifiers. Symbols are often used as keys for object properties to avoid naming collisions, as each Symbol is guaranteed to be unique, even if two Symbols have the same description.\n\n### Key Characteristics of Symbols:\n1. **Uniqueness**: Every Symbol is unique, even if created with the same description.\n   ```javascript\n   const sym1 = Symbol('description');\n   const sym2 = Symbol('description');\n   console.log(sym1 === sym2); // false\n   ```\n2. **Immutability**: Symbols are immutable, meaning their value cannot be changed once created.\n3. **Non-enumerable by default**: Properties keyed by Symbols are not included in `for...in` or `Object.keys()` iterations, making them useful for defining hidden or internal object properties.\n\n### Common Use Cases:\n1. **Object Property Keys**: Symbols can be used as keys for object properties to ensure uniqueness and avoid property name conflicts.\n   ```javascript\n   const uniqueKey = Symbol('key');\n   const obj = {\n       [uniqueKey]: 'value'\n   };\n   console.log(obj[uniqueKey]); // 'value'\n   ```\n\n2. **Defining Constants**: Symbols can represent constants where uniqueness is important.\n   ```javascript\n   const COLOR_RED = Symbol('red');\n   const COLOR_BLUE = Symbol('blue');\n   ```\n\n3. **Customizing Object Behavior**: Symbols are used in well-known Symbol properties to customize object behavior, such as:\n   - `Symbol.iterator` for making objects iterable.\n   - `Symbol.toStringTag` for customizing the default string description of an object.\n   ```javascript\n   const myObject = {\n       [Symbol.toStringTag]: 'CustomObject'\n   };\n   console.log(Object.prototype.toString.call(myObject)); // [object CustomObject]\n   ```\n\n### Conclusion:\nThe `Symbol` data type is a powerful feature in JavaScript that provides a way to create unique, immutable identifiers. It is particularly useful in scenarios where property name conflicts need to be avoided or when customizing object behavior through well-known Symbols.\n```",level:"Advanced",created_at:"2025-03-28T17:52:50.553395Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"338e386a-6c3c-4706-b29b-912d79510a2e",question:"What is the difference between an arrow function and a regular function in terms of 'this' binding?",answer:"```markdown\nIn JavaScript, the key difference between an arrow function and a regular function lies in how they handle the `this` keyword:\n\n1. **Arrow Functions**:\n   - Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding (lexical) scope where they are defined.\n   - This makes arrow functions particularly useful in scenarios where you want to preserve the `this` value from the outer context, such as in callbacks or event handlers.\n   - Example:\n     ```javascript\n     const obj = {\n       value: 10,\n       regularFunction: function () {\n         console.log(this.value); // `this` refers to `obj`\n       },\n       arrowFunction: () => {\n         console.log(this.value); // `this` refers to the outer scope, not `obj`\n       }\n     };\n\n     obj.regularFunction(); // Output: 10\n     obj.arrowFunction();   // Output: undefined (or an error in strict mode)\n     ```\n\n2. **Regular Functions**:\n   - Regular functions have their own `this` context, which is determined by how the function is called (runtime binding).\n   - If called as a method of an object, `this` refers to the object. If called as a standalone function, `this` is `undefined` in strict mode or refers to the global object in non-strict mode.\n   - Example:\n     ```javascript\n     function regularFunction() {\n       console.log(this);\n     }\n\n     const obj = { method: regularFunction };\n     obj.method(); // `this` refers to `obj`\n     regularFunction(); // `this` is undefined in strict mode or the global object otherwise\n     ```\n\n### Summary:\n- Arrow functions: Lexical `this` (inherits from the surrounding scope).\n- Regular functions: Dynamic `this` (determined by how the function is called).\n```",level:"Intermediate",created_at:"2025-03-28T17:52:50.553408Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"490f1837-0413-40d3-a542-b1aa2b378a51",question:"What is the purpose of the JavaScript Array.from() method?",answer:"```markdown\nThe `Array.from()` method in JavaScript is used to create a new array instance from an array-like or iterable object. It allows you to convert objects such as `NodeList`, `arguments`, or any iterable (like a string or a `Set`) into a proper array.\n\n### Key Features:\n1. **Array-like to Array Conversion**: Converts objects with a `length` property (e.g., `arguments` or `NodeList`) into an array.\n2. **Iterable to Array Conversion**: Converts iterable objects (e.g., strings, `Set`, `Map`) into an array.\n3. **Mapping Function**: Accepts an optional mapping function as the second argument to transform each element during the conversion.\n\n### Syntax:\n```javascript\nArray.from(arrayLike, mapFunction, thisArg)\n```\n\n- `arrayLike`: The array-like or iterable object to convert.\n- `mapFunction` (optional): A function to apply to each element before adding it to the new array.\n- `thisArg` (optional): A value to use as `this` when executing the `mapFunction`.\n\n### Examples:\n\n#### Converting a String to an Array:\n```javascript\nconst str = \"hello\";\nconst arr = Array.from(str);\nconsole.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']\n```\n\n#### Converting a Set to an Array:\n```javascript\nconst mySet = new Set([1, 2, 3]);\nconst arr = Array.from(mySet);\nconsole.log(arr); // Output: [1, 2, 3]\n```\n\n#### Using a Mapping Function:\n```javascript\nconst numbers = Array.from([1, 2, 3], x => x * 2);\nconsole.log(numbers); // Output: [2, 4, 6]\n```\n\n#### Converting a NodeList to an Array:\n```javascript\nconst nodeList = document.querySelectorAll('div');\nconst nodesArray = Array.from(nodeList);\nconsole.log(nodesArray); // Output: Array of div elements\n```\n\n### Use Cases:\n- Converting `arguments` or `NodeList` to an array for easier manipulation.\n- Duplicating or transforming iterable objects.\n- Creating arrays from custom objects with a `length` property.\n\nThe `Array.from()` method is particularly useful when working with array-like objects that do not have array methods like `map`, `filter`, or `reduce`.\n```",level:"Intermediate",created_at:"2025-03-28T17:52:50.553418Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"06e10221-e1cd-42cc-ab06-38431255885c",question:"What is the difference between a shallow merge and a deep merge in JavaScript?",answer:`\`\`\`markdown
In JavaScript, the difference between a shallow merge and a deep merge lies in how the properties of objects are copied or merged:

### Shallow Merge
- A shallow merge copies only the first level of properties from one object to another.
- If a property is an object or array, only the reference to that object/array is copied, not the actual nested structure.
- Changes made to the nested object/array in the source or target will affect both, as they share the same reference.
- Example of a shallow merge:
  \`\`\`javascript
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { d: 3 };
  const shallowMerged = Object.assign({}, obj1, obj2);
  console.log(shallowMerged); // { a: 1, b: { c: 2 }, d: 3 }
  shallowMerged.b.c = 42;
  console.log(obj1.b.c); // 42 (shared reference)
  \`\`\`

### Deep Merge
- A deep merge involves recursively copying all properties, including nested objects and arrays, creating entirely new references for them.
- Changes made to the nested objects/arrays in the source or target will not affect each other, as they are independent.
- Deep merging requires additional logic, as JavaScript does not provide a built-in method for this. Libraries like Lodash (\`_.merge\`) or custom recursive functions are commonly used.
- Example of a deep merge:
  \`\`\`javascript
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { d: 3 };
  const deepMerged = _.merge({}, obj1, obj2); // Using Lodash
  console.log(deepMerged); // { a: 1, b: { c: 2 }, d: 3 }
  deepMerged.b.c = 42;
  console.log(obj1.b.c); // 2 (independent reference)
  \`\`\`

### Key Differences
| Aspect            | Shallow Merge                          | Deep Merge                              |
|--------------------|----------------------------------------|-----------------------------------------|
| Depth of Copy      | First level only                      | All levels (recursive)                  |
| Nested Objects/Arrays | References are shared               | New references are created              |
| Built-in Support   | Supported (e.g., \`Object.assign\`)      | Not built-in, requires custom logic or libraries |
| Use Case           | Simple merges with flat structures    | Complex merges with nested structures   |
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553428Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"1a73f799-ff6d-4e97-a9c5-886586d6483e",question:"What is the purpose of the JavaScript WeakMap and WeakSet objects?",answer:'```markdown\n### Purpose of JavaScript `WeakMap` and `WeakSet` Objects\n\nThe `WeakMap` and `WeakSet` objects in JavaScript are specialized collections designed to hold "weak" references to their keys or values. These weak references allow the garbage collector to reclaim memory if there are no other strong references to the objects, making them useful for certain memory-sensitive use cases.\n\n#### **WeakMap**\n- A `WeakMap` is a collection of key-value pairs where the keys must be objects, and the values can be arbitrary data.\n- The keys in a `WeakMap` are weakly referenced, meaning they do not prevent the key object from being garbage-collected if there are no other references to it.\n- This makes `WeakMap` ideal for associating metadata or private data with objects without risking memory leaks.\n\n**Key Characteristics of `WeakMap`:**\n1. Keys must be objects (not primitive values).\n2. Values can be of any type.\n3. Keys are weakly held, allowing garbage collection when no other references exist.\n4. It does not have methods to iterate over its elements (e.g., no `forEach` or `keys` methods) to ensure the privacy of the keys.\n\n**Use Cases:**\n- Storing private data for objects.\n- Caching data tied to objects without preventing garbage collection.\n\n#### **WeakSet**\n- A `WeakSet` is a collection of objects, where each object is stored as a weak reference.\n- Like `WeakMap`, the objects in a `WeakSet` can be garbage-collected if there are no other references to them.\n\n**Key Characteristics of `WeakSet`:**\n1. Only objects can be added to a `WeakSet` (no primitive values).\n2. Objects are weakly held, allowing garbage collection when no other references exist.\n3. It does not support iteration or methods to retrieve its elements.\n\n**Use Cases:**\n- Tracking objects without preventing their garbage collection.\n- Managing a set of objects that may dynamically appear and disappear during runtime.\n\n#### **Key Differences from `Map` and `Set`:**\n- `WeakMap` and `WeakSet` do not prevent garbage collection of their keys or objects.\n- They do not expose their elements for iteration or inspection, ensuring privacy and efficiency.\n- They are suitable for use cases where memory management and object lifecycle are critical.\n\nBy using `WeakMap` and `WeakSet`, developers can manage memory more effectively and avoid memory leaks in scenarios where objects may become unreachable but still need temporary associations or tracking.\n```',level:"Advanced",created_at:"2025-03-28T17:52:50.553438Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"fe82c9a8-ba36-40a8-98d0-ac9fa2709ba3",question:"What is the difference between Object.freeze() and Object.seal() in JavaScript?",answer:'```markdown\nIn JavaScript, `Object.freeze()` and `Object.seal()` are methods used to restrict modifications to objects, but they differ in their level of restriction:\n\n### `Object.freeze()`\n- Prevents **adding**, **removing**, or **modifying** properties of an object.\n- The object becomes **completely immutable**.\n- Existing property values cannot be changed, and no new properties can be added.\n- The `writable` and `configurable` attributes of all properties are set to `false`.\n- Example:\n  ```javascript\n  const obj = { name: "Alice" };\n  Object.freeze(obj);\n\n  obj.name = "Bob"; // Does nothing (in strict mode, throws an error)\n  obj.age = 25;     // Does nothing (in strict mode, throws an error)\n  delete obj.name;  // Does nothing (in strict mode, throws an error)\n\n  console.log(obj); // { name: "Alice" }\n  ```\n\n### `Object.seal()`\n- Prevents **adding** or **removing** properties from an object.\n- Existing properties can still be **modified** if their `writable` attribute is `true`.\n- The `configurable` attribute of all properties is set to `false`, but the `writable` attribute remains unchanged.\n- Example:\n  ```javascript\n  const obj = { name: "Alice" };\n  Object.seal(obj);\n\n  obj.name = "Bob"; // Allowed (modifying existing property)\n  obj.age = 25;     // Does nothing (in strict mode, throws an error)\n  delete obj.name;  // Does nothing (in strict mode, throws an error)\n\n  console.log(obj); // { name: "Bob" }\n  ```\n\n### Key Differences\n| Feature                  | `Object.freeze()`                     | `Object.seal()`                     |\n|--------------------------|----------------------------------------|--------------------------------------|\n| Add new properties       | Not allowed                           | Not allowed                         |\n| Remove properties        | Not allowed                           | Not allowed                         |\n| Modify existing values   | Not allowed                           | Allowed if `writable` is `true`     |\n| Configurable properties  | Set to `false`                        | Set to `false`                      |\n| Writable properties      | Set to `false`                        | Unchanged                           |\n\nIn summary, `Object.freeze()` makes an object completely immutable, while `Object.seal()` allows modification of existing properties but prevents adding or removing properties.\n```',level:"Intermediate",created_at:"2025-03-28T17:52:50.553447Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"a4c63028-2d3f-4973-9570-5fa71db40979",question:"What are JavaScript promises and how do they handle errors?",answer:`\`\`\`markdown
### JavaScript Promises and Error Handling

A **JavaScript Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations in a more readable and manageable way compared to traditional callback-based approaches.

A promise can be in one of three states:
1. **Pending**: The initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully, and the promise has a resulting value.
3. **Rejected**: The operation failed, and the promise has a reason for the failure (an error).

#### Syntax
A promise is created using the \`Promise\` constructor:
\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  if (/* operation successful */) {
    resolve("Success!");
  } else {
    reject("Error occurred!");
  }
});
\`\`\`

#### Handling Errors in Promises
Errors in promises can be handled using the \`.catch()\` method or by chaining \`.then()\` with a rejection handler. Here's how it works:

1. **Using \`.catch()\`**:
   The \`.catch()\` method is used to handle errors or rejections in a promise chain. It catches any error that occurs in the promise or in any of the preceding \`.then()\` handlers.
   \`\`\`javascript
   const promise = new Promise((resolve, reject) => {
     reject("Something went wrong!");
   });

   promise
     .then((result) => {
       console.log(result);
     })
     .catch((error) => {
       console.error("Error:", error);
     });
   \`\`\`

2. **Using \`.then()\` with a rejection handler**:
   The \`.then()\` method can take two arguments: a success handler and a rejection handler. The rejection handler is invoked if the promise is rejected.
   \`\`\`javascript
   const promise = new Promise((resolve, reject) => {
     reject("Something went wrong!");
   });

   promise.then(
     (result) => {
       console.log(result);
     },
     (error) => {
       console.error("Error:", error);
     }
   );
   \`\`\`

3. **Error Propagation**:
   If an error occurs in a \`.then()\` block and is not handled, it propagates down the chain until it is caught by a \`.catch()\` block.
   \`\`\`javascript
   const promise = new Promise((resolve, reject) => {
     resolve("Success!");
   });

   promise
     .then((result) => {
       console.log(result);
       throw new Error("Something went wrong!");
     })
     .catch((error) => {
       console.error("Caught error:", error.message);
     });
   \`\`\`

4. **Using \`finally()\`**:
   The \`.finally()\` method is executed after the promise is settled (fulfilled or rejected), regardless of the outcome. It is typically used for cleanup operations.
   \`\`\`javascript
   const promise = new Promise((resolve, reject) => {
     reject("Error occurred!");
   });

   promise
     .catch((error) => {
       console.error("Error:", error);
     })
     .finally(() => {
       console.log("Cleanup complete.");
     });
   \`\`\`

By using promises, JavaScript provides a clean and structured way to handle asynchronous operations and errors, making code easier to read and maintain.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553456Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"df9b88bc-f350-4391-82c0-56c7f63ca2f3",question:"What is the purpose of the JavaScript Rest parameter syntax?",answer:`\`\`\`markdown
The JavaScript Rest parameter syntax (\`...\`) allows a function to accept an indefinite number of arguments as an array. It provides a way to handle multiple arguments without explicitly defining each one in the function's parameter list. This is particularly useful when the number of arguments is unknown or can vary.

### Key Points:
1. The Rest parameter is represented by three dots (\`...\`) followed by a name.
2. It collects all remaining arguments passed to the function into a single array.
3. It must be the last parameter in the function's parameter list.

### Example:
\`\`\`javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10));      // Output: 15
\`\`\`

In this example, the \`sum\` function uses the Rest parameter to gather all arguments into the \`numbers\` array, which is then processed using the \`reduce\` method.

### Benefits:
- Simplifies handling of variable numbers of arguments.
- Makes functions more flexible and reusable.
- Avoids the need to use the \`arguments\` object, which is less intuitive and lacks array methods.

The Rest parameter is a modern feature introduced in ES6 (ECMAScript 2015) and is widely used in JavaScript programming.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553465Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"c3cf2829-f18f-4499-adb0-f6bfd1affdc6",question:"What is the difference between a JavaScript class and a constructor function?",answer:`\`\`\`markdown
### Difference Between a JavaScript Class and a Constructor Function

In JavaScript, both classes and constructor functions are used to create objects, but they have some key differences:

1. **Syntax**:
   - A class is a syntactic sugar introduced in ES6 that provides a cleaner and more structured way to define object blueprints.
   - A constructor function is an older way of creating objects using regular functions.

   \`\`\`javascript
   // Class Example
   class Person {
       constructor(name, age) {
           this.name = name;
           this.age = age;
       }

       greet() {
           console.log(\`Hello, my name is \${this.name}\`);
       }
   }

   // Constructor Function Example
   function Person(name, age) {
       this.name = name;
       this.age = age;
   }

   Person.prototype.greet = function() {
       console.log(\`Hello, my name is \${this.name}\`);
   };
   \`\`\`

2. **Inheritance**:
   - Classes use the \`extends\` keyword and the \`super()\` function to handle inheritance, making it more intuitive.
   - Constructor functions use \`Object.create()\` or \`prototype\` chaining for inheritance, which can be more verbose and less straightforward.

   \`\`\`javascript
   // Class Inheritance
   class Employee extends Person {
       constructor(name, age, job) {
           super(name, age);
           this.job = job;
       }
   }

   // Constructor Function Inheritance
   function Employee(name, age, job) {
       Person.call(this, name, age);
       this.job = job;
   }

   Employee.prototype = Object.create(Person.prototype);
   Employee.prototype.constructor = Employee;
   \`\`\`

3. **\`class\` is not hoisted**:
   - Classes are not hoisted, meaning you cannot use a class before it is defined.
   - Constructor functions are hoisted, so they can be used before their definition (though this is not recommended).

   \`\`\`javascript
   // Class Example (Throws an error)
   const obj = new MyClass(); // ReferenceError
   class MyClass {}

   // Constructor Function Example (Works)
   const obj2 = new MyFunction();
   function MyFunction() {}
   \`\`\`

4. **Strict Mode**:
   - Classes always operate in strict mode, even if you don't explicitly enable it.
   - Constructor functions do not enforce strict mode unless you explicitly enable it with \`"use strict"\`.

5. **Static Methods**:
   - Classes allow you to define static methods directly using the \`static\` keyword.
   - In constructor functions, static methods are added manually to the constructor itself.

   \`\`\`javascript
   // Class Static Method
   class Person {
       static sayHello() {
           console.log("Hello from Person class");
       }
   }

   // Constructor Function Static Method
   function Person() {}
   Person.sayHello = function() {
       console.log("Hello from Person function");
   };
   \`\`\`

6. **Readability and Modern Features**:
   - Classes provide a more readable and modern syntax, making the code easier to understand and maintain.
   - Constructor functions rely on older patterns and can be less intuitive for developers familiar with modern JavaScript.

### Conclusion
While both classes and constructor functions achieve similar outcomes, classes are the preferred approach in modern JavaScript due to their cleaner syntax, built-in features like inheritance, and alignment with modern programming paradigms.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553474Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"850d5c92-926b-4303-89f0-88ac5dd3c0d2",question:"What is the purpose of the JavaScript async generator functions?",answer:`\`\`\`markdown
### Purpose of JavaScript Async Generator Functions

Async generator functions in JavaScript are used to handle asynchronous iteration. They allow you to work with streams of data that are produced asynchronously, such as fetching data from an API in chunks or processing events over time. These functions combine the capabilities of \`async\` functions and generator functions, enabling you to yield promises and wait for their resolution during iteration.

#### Key Features:
1. **Asynchronous Iteration**: Async generator functions return an \`AsyncGenerator\` object, which can be iterated using the \`for await...of\` loop. This allows you to process asynchronous data sequentially.
2. **Non-blocking Execution**: They enable non-blocking code execution while waiting for asynchronous operations to complete, improving performance and responsiveness.
3. **Streamlined Data Handling**: Useful for scenarios like reading files, processing streams, or fetching paginated API data.

#### Syntax:
\`\`\`javascript
async function* asyncGenerator() {
  const data = [1, 2, 3];
  for (const item of data) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
    yield item;
  }
}

(async () => {
  for await (const value of asyncGenerator()) {
    console.log(value); // Logs 1, 2, 3 with a 1-second delay between each
  }
})();
\`\`\`

#### Use Cases:
- Fetching data in chunks (e.g., paginated API responses).
- Processing real-time data streams (e.g., WebSocket messages).
- Handling large datasets incrementally to avoid memory overload.

Async generator functions provide a powerful and elegant way to manage asynchronous workflows in JavaScript, especially when dealing with iterable data sources.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:52:50.553482Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"6315bddd-ccd9-475a-9e75-9096ee22ee5e",question:"What is the difference between event capturing and event bubbling in JavaScript?",answer:`\`\`\`markdown
In JavaScript, event capturing and event bubbling are two phases of event propagation in the DOM (Document Object Model).

### Event Capturing (Capture Phase)
- Event capturing, also known as the "trickling phase," is the process where the event starts from the outermost element (ancestor) and propagates down to the target element.
- In this phase, the event listener on the outer elements is triggered before the inner elements.
- To use event capturing, the \`addEventListener\` method's third parameter (or \`options\` object) must be set to \`true\`:
  \`\`\`javascript
  element.addEventListener('click', handler, true);
  \`\`\`

### Event Bubbling (Bubble Phase)
- Event bubbling is the process where the event starts from the target element and propagates up to the outermost ancestor element.
- In this phase, the event listener on the inner elements is triggered before the outer elements.
- By default, event listeners in JavaScript use the bubbling phase unless specified otherwise:
  \`\`\`javascript
  element.addEventListener('click', handler);
  \`\`\`

### Key Differences
| Aspect                | Event Capturing                     | Event Bubbling                      |
|-----------------------|--------------------------------------|-------------------------------------|
| Propagation Direction | Outer to inner (ancestor to target) | Inner to outer (target to ancestor) |
| Default Behavior      | Not default, must be explicitly set | Default behavior in JavaScript      |
| Use Case             | Useful for intercepting events early | Useful for handling events at the target or higher levels |

### Example
\`\`\`javascript
// HTML structure
// <div id="parent">
//   <button id="child">Click Me</button>
// </div>

const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Event listener in capturing phase
parent.addEventListener('click', () => {
  console.log('Parent clicked (capturing phase)');
}, true);

// Event listener in bubbling phase
child.addEventListener('click', () => {
  console.log('Child clicked (bubbling phase)');
});
\`\`\`

### Output when the button is clicked:
1. "Parent clicked (capturing phase)" (capturing phase)
2. "Child clicked (bubbling phase)" (bubbling phase)
\`\`\`

This explanation highlights the differences and provides an example for better understanding.`,level:"Intermediate",created_at:"2025-03-28T17:52:50.553491Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"f86ce0a1-71a5-49f2-9a23-725cafffcf7c",question:"What is the purpose of the JavaScript fetch() API?",answer:"```markdown\nThe `fetch()` API in JavaScript is used to make network requests to retrieve resources, such as data from a server. It provides a modern, promise-based approach to handling HTTP requests and responses, making it easier to work with asynchronous operations compared to older methods like `XMLHttpRequest`.\n\n### Key Features of `fetch()`:\n1. **Promise-based**: It returns a `Promise` that resolves to the `Response` object, allowing you to handle success and error cases using `.then()` and `.catch()`.\n2. **Simplified Syntax**: The API is straightforward and easier to read compared to older alternatives.\n3. **Supports Modern Features**: It supports features like streaming responses, custom headers, and request methods (GET, POST, PUT, DELETE, etc.).\n4. **Cross-Origin Requests**: It adheres to the same-origin policy and supports CORS (Cross-Origin Resource Sharing) for secure cross-origin requests.\n\n### Example Usage:\n```javascript\nfetch('https://api.example.com/data')\n  .then(response => {\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n    return response.json(); // Parse the JSON data from the response\n  })\n  .then(data => {\n    console.log(data); // Handle the fetched data\n  })\n  .catch(error => {\n    console.error('There was a problem with the fetch operation:', error);\n  });\n```\n\n### Notes:\n- The `fetch()` API does not reject the promise on HTTP errors (e.g., 404 or 500). You need to manually check the `response.ok` property to handle such cases.\n- It is widely supported in modern browsers but may require polyfills for older environments.\n\nThe `fetch()` API is a powerful tool for making HTTP requests and is commonly used in web development for interacting with REST APIs.\n```",level:"Intermediate",created_at:"2025-03-28T17:52:50.553500Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"d5a0b978-d1fb-40a2-ada1-dfc7e9f3785a",question:"What is the difference between JSON.stringify() and JSON.parse() in JavaScript?",answer:`\`\`\`markdown
In JavaScript, \`JSON.stringify()\` and \`JSON.parse()\` are methods used to work with JSON (JavaScript Object Notation) data:

1. **\`JSON.stringify()\`**:
   - Converts a JavaScript object or value into a JSON string.
   - Commonly used to prepare data for storage or transmission (e.g., sending data to a server).
   - Example:
     \`\`\`javascript
     const obj = { name: "Alice", age: 25 };
     const jsonString = JSON.stringify(obj);
     console.log(jsonString); // Output: '{"name":"Alice","age":25}'
     \`\`\`

2. **\`JSON.parse()\`**:
   - Converts a JSON string back into a JavaScript object.
   - Commonly used to parse JSON data received from a server or other sources.
   - Example:
     \`\`\`javascript
     const jsonString = '{"name":"Alice","age":25}';
     const obj = JSON.parse(jsonString);
     console.log(obj); // Output: { name: 'Alice', age: 25 }
     \`\`\`

In summary:
- Use \`JSON.stringify()\` to convert an object to a JSON string.
- Use \`JSON.parse()\` to convert a JSON string back to an object.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:52:50.553508Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"aa4af8ac-c353-4c6a-bf15-fdb77de648e7",question:"What are JavaScript template literals and how are they used?",answer:`\`\`\`markdown
### What are JavaScript Template Literals and How Are They Used?

Template literals are a feature in JavaScript introduced in ES6 that allow for easier creation of strings. They are enclosed by backticks (\`\` \` \`\`) instead of single or double quotes and provide enhanced functionality, such as:

1. **String Interpolation**: Embedding expressions directly into strings using the \`\${expression}\` syntax.
2. **Multiline Strings**: Creating strings that span multiple lines without needing escape characters.
3. **Tagged Templates**: Custom processing of template literals using a function.

#### Syntax
\`\`\`javascript
const name = "John";
const age = 30;

// String Interpolation
const greeting = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(greeting); // Output: Hello, my name is John and I am 30 years old.

// Multiline Strings
const multiline = \`This is a string
that spans multiple
lines.\`;
console.log(multiline);

// Tagged Templates
function tagExample(strings, ...values) {
  console.log(strings); // Array of string literals
  console.log(values); // Array of interpolated values
}

const result = tagExample\`Hello, \${name}! You are \${age} years old.\`;
\`\`\`

Template literals make string manipulation more readable and concise compared to traditional string concatenation.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:52:50.553517Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"b8ae8cd2-d6cb-4bf4-943f-b3d2c586fa99",question:"What is the purpose of the JavaScript Promise.all() method?",answer:`\`\`\`markdown
The \`Promise.all()\` method in JavaScript is used to execute multiple promises concurrently and aggregate their results. It takes an array (or any iterable) of promises as input and returns a single promise that resolves when all the promises in the array have resolved or rejects if any of the promises in the array reject.

### Key Points:
1. **Resolve Behavior**: The returned promise resolves with an array of the results of the input promises, in the same order as the input.
2. **Reject Behavior**: If any promise in the array rejects, the returned promise immediately rejects with the reason of the first rejected promise.
3. **Concurrency**: All promises are executed concurrently, not sequentially.

### Example:
\`\`\`javascript
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // Output: [10, 20, 30]
  })
  .catch(error => {
    console.error(error); // If any promise rejects, this will handle the error.
  });
\`\`\`

### Use Case:
\`Promise.all()\` is useful when you need to wait for multiple asynchronous operations to complete before proceeding, such as fetching data from multiple APIs or performing batch operations.

### Note:
If the input array is empty, \`Promise.all()\` resolves immediately with an empty array.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553525Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"9664273e-9df0-4215-844b-2672157a5de4",question:"What is the difference between a JavaScript Map and an Object?",answer:`\`\`\`markdown
### Difference Between a JavaScript Map and an Object

JavaScript \`Map\` and \`Object\` are both used to store key-value pairs, but they have significant differences:

1. **Key Types**:
   - **Map**: Keys can be of any data type, including objects, functions, and primitives.
   - **Object**: Keys are always strings or symbols. Non-string keys are automatically converted to strings.

2. **Key Order**:
   - **Map**: Keys are ordered in the order they were added.
   - **Object**: Keys are not guaranteed to maintain insertion order (though modern JavaScript engines often do for string keys).

3. **Performance**:
   - **Map**: Optimized for frequent additions and removals of key-value pairs.
   - **Object**: May have slower performance for these operations due to its additional features like prototype inheritance.

4. **Size Property**:
   - **Map**: Has a \`size\` property that directly returns the number of key-value pairs.
   - **Object**: Requires manual calculation of size using \`Object.keys(obj).length\`.

5. **Iteration**:
   - **Map**: Iterates directly using methods like \`map.keys()\`, \`map.values()\`, or \`map.entries()\`. It also supports \`for...of\` iteration.
   - **Object**: Requires manual iteration using \`for...in\` or \`Object.keys(obj)\`.

6. **Prototype Inheritance**:
   - **Map**: Does not have a prototype chain affecting its keys.
   - **Object**: Inherits from \`Object.prototype\`, which may lead to unintended key collisions unless \`Object.create(null)\` is used.

7. **Use Cases**:
   - **Map**: Preferred when you need a collection of key-value pairs with guaranteed order and diverse key types.
   - **Object**: Better suited for structured data or when working with JSON-like data.

### Example:

\`\`\`javascript
// Using a Map
const map = new Map();
map.set('key1', 'value1');
map.set(42, 'value2');
console.log(map.get(42)); // Output: 'value2'

// Using an Object
const obj = {};
obj['key1'] = 'value1';
obj[42] = 'value2'; // Key is converted to string '42'
console.log(obj[42]); // Output: 'value2'
\`\`\`

In summary, \`Map\` is more versatile and efficient for managing key-value pairs, while \`Object\` is better for traditional data structures and compatibility with JSON.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:52:50.553535Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"6e6e5f43-b928-4b38-bce3-92ff5a29806c",question:"What is the purpose of the JavaScript Reflect API?",answer:`\`\`\`markdown The JavaScript Reflect API is a built-in object introduced in ECMAScript 2015 (ES6) that provides a set of static methods for performing common object operations. Its primary purpose is to offer a more predictable and functional way to interact with objects, while also complementing the \`Proxy\` object by exposing methods that are internally used by JavaScript.

### Key Purposes of the Reflect API:
1. **Standardized Object Operations**:  
   Reflect provides methods for tasks like property manipulation, function invocation, and object construction, which were previously handled using \`Object\` methods or direct operations. For example:
   - \`Reflect.get()\` for accessing properties.
   - \`Reflect.set()\` for setting properties.
   - \`Reflect.deleteProperty()\` for deleting properties.

2. **Improved Consistency**:  
   Reflect methods return \`true\` or \`false\` to indicate success or failure, instead of throwing errors in certain cases. This makes error handling more predictable.

3. **Proxy Integration**:  
   The Reflect API is designed to work seamlessly with the \`Proxy\` object. It allows developers to call default behavior within proxy traps, ensuring that proxies can mimic or extend native object behavior.

4. **Functional Programming Style**:  
   Reflect methods are purely functional and do not rely on the context (\`this\`), making them easier to use in functional programming paradigms.

### Example Usage:
\`\`\`javascript
const obj = { name: 'Alice' };

// Using Reflect to get a property
console.log(Reflect.get(obj, 'name')); // Output: Alice

// Using Reflect to set a property
Reflect.set(obj, 'age', 25);
console.log(obj.age); // Output: 25

// Using Reflect to delete a property
Reflect.deleteProperty(obj, 'name');
console.log(obj.name); // Output: undefined
\`\`\`

### Common Reflect Methods:
- \`Reflect.get(target, propertyKey[, receiver])\`
- \`Reflect.set(target, propertyKey, value[, receiver])\`
- \`Reflect.has(target, propertyKey)\`
- \`Reflect.deleteProperty(target, propertyKey)\`
- \`Reflect.ownKeys(target)\`
- \`Reflect.apply(target, thisArgument, argumentsList)\`
- \`Reflect.construct(target, argumentsList[, newTarget])\`
- \`Reflect.defineProperty(target, propertyKey, attributes)\`
- \`Reflect.getOwnPropertyDescriptor(target, propertyKey)\`

### Advantages:
- Provides a unified interface for object operations.
- Simplifies working with proxies.
- Reduces the need for custom error handling by returning boolean values for success/failure.

In summary, the Reflect API enhances the way developers interact with objects by offering a consistent, functional, and proxy-friendly set of methods for common operations.`,level:"Advanced",created_at:"2025-03-28T17:52:50.553544Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"cbff8e6d-3936-4fa9-b335-b6f9ad343755",question:"What is the difference between a stack and a queue in JavaScript?",answer:`\`\`\`markdown
In JavaScript, a **stack** and a **queue** are data structures used to manage collections of data, but they operate differently in terms of how elements are added and removed:

1. **Stack**:
   - Follows the **LIFO** (Last In, First Out) principle.
   - The last element added to the stack is the first one to be removed.
   - Common methods:
     - \`push()\`: Adds an element to the top of the stack.
     - \`pop()\`: Removes the top element from the stack.

   Example:
   \`\`\`javascript
   let stack = [];
   stack.push(1); // [1]
   stack.push(2); // [1, 2]
   stack.pop();   // [1] (removes 2)
   \`\`\`

2. **Queue**:
   - Follows the **FIFO** (First In, First Out) principle.
   - The first element added to the queue is the first one to be removed.
   - Common methods:
     - \`push()\`: Adds an element to the end of the queue.
     - \`shift()\`: Removes the first element from the queue.

   Example:
   \`\`\`javascript
   let queue = [];
   queue.push(1); // [1]
   queue.push(2); // [1, 2]
   queue.shift(); // [2] (removes 1)
   \`\`\`

In summary, a stack removes elements from the top (last added), while a queue removes elements from the front (first added).
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:52:50.553553Z",topic:"97892842-6ded-4b1d-b8db-95a54a72d66e"},{id:"cce5e006-c264-4188-89c8-d3a74f92e42c",question:"How do you include JavaScript in an HTML file?",answer:`\`\`\`markdown You can include JavaScript in an HTML file using the <script> tag. There are two main ways:

1. **Inline JavaScript (within the HTML file):**

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello!</h1>
  <script>
    alert('Hello from JavaScript!');
  <\/script>
</body>
</html>
\`\`\`

2. **External JavaScript file:**

First, create a separate JavaScript file (for example, script.js):

\`\`\`javascript
// script.js
alert('Hello from an external JavaScript file!');
\`\`\`

Then, include it in your HTML file using the src attribute:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello!</h1>
  <script src="script.js"><\/script>
</body>
</html>
\`\`\`

**Tip:** Place your <script> tags just before the closing </body> tag to ensure the HTML loads before the JavaScript runs.`,level:"Beginner",created_at:"2025-04-20T11:30:07.795032Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"921acc32-3235-4e1a-8bcf-34f3ab5f50d1",question:"What is an object in JavaScript and how do you define one?",answer:`\`\`\`markdown An **object** in JavaScript is a collection of key-value pairs, where the keys are strings (called properties) and the values can be any data type, including other objects or functions. Objects are used to store and organize related data and functionality.

### How to Define an Object

You can define an object in JavaScript using **object literal syntax** or the **Object constructor**.

#### 1. Object Literal Syntax

\`\`\`javascript
const person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
\`\`\`

#### 2. Object Constructor

\`\`\`javascript
const person = new Object();
person.name = "Alice";
person.age = 25;
person.isStudent = true;
\`\`\`

### Accessing Object Properties

You can access properties using **dot notation** or **bracket notation**:

\`\`\`javascript
console.log(person.name);      // "Alice"
console.log(person["age"]);    // 25
\`\`\`

Objects are fundamental in JavaScript and are used everywhere, from storing data to creating more complex structures.`,level:"Beginner",created_at:"2025-04-20T11:30:07.795101Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"9d19d0c4-7978-48dd-8043-a8c25a5c24d6",question:"How do you access properties of an object?",answer:`\`\`\`markdown You can access properties of a JavaScript object in two main ways:

1. **Dot Notation**

\`\`\`javascript
const person = { name: "Alice", age: 25 };
console.log(person.name); // Output: Alice
\`\`\`

2. **Bracket Notation**

\`\`\`javascript
const person = { name: "Alice", age: 25 };
console.log(person["age"]); // Output: 25
\`\`\`

- Use **dot notation** when you know the property name and it’s a valid identifier.
- Use **bracket notation** when the property name is stored in a variable or contains special characters.

\`\`\`javascript
const property = "name";
console.log(person[property]); // Output: Alice
\`\`\``,level:"Beginner",created_at:"2025-04-20T11:30:07.795109Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"f23f9e80-2f67-4dcd-a763-201f15c0265d",question:"What is JavaScript and where is it commonly used?",answer:`\`\`\`markdown **Answer:**

JavaScript is a high-level, interpreted programming language that is primarily used to make web pages interactive and dynamic. It runs in the browser and allows developers to create features like image sliders, form validations, animations, and much more.

**Common Uses of JavaScript:**
- **Web Development:** Adding interactivity to websites (e.g., buttons, forms, menus).
- **Web Applications:** Building complex applications like online games, chat apps, and productivity tools.
- **Server-side Development:** Using environments like Node.js to build backend services.
- **Mobile App Development:** Creating mobile apps with frameworks like React Native.
- **Desktop Applications:** Building cross-platform desktop apps with tools like Electron.

In summary, JavaScript is a versatile language most commonly used in web development, both on the client-side (in the browser) and server-side (with Node.js).`,level:"Beginner",created_at:"2025-04-20T11:30:07.795005Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"ae347b00-5281-46b5-a25e-1ce3cfce1de3",question:"What are variables in JavaScript and how do you declare them?",answer:'```markdown Variables in JavaScript are containers used to store data values, such as numbers, strings, or objects. They allow you to label and store information that can be referenced and manipulated in your program.\n\n### Declaring Variables\n\nYou can declare variables in JavaScript using three keywords: `var`, `let`, and `const`.\n\n#### 1. Using `var`\n```javascript\nvar name = "Alice";\n```\n- `var` is function-scoped and was commonly used in older JavaScript code.\n\n#### 2. Using `let`\n```javascript\nlet age = 25;\n```\n- `let` is block-scoped and is the preferred way to declare variables that may change value.\n\n#### 3. Using `const`\n```javascript\nconst pi = 3.14;\n```\n- `const` is also block-scoped but is used for variables whose value should not change.\n\n### Example\n```javascript\nlet message = "Hello, world!";\nconst year = 2024;\nvar isActive = true;\n```\n\n**Summary:**  \nVariables in JavaScript are used to store data. You declare them using `var`, `let`, or `const` depending on the scope and whether the value will change.',level:"Beginner",created_at:"2025-04-20T11:30:07.795039Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"17118282-a7d1-48a6-948b-f9a5111f5504",question:"Explain the difference between var, let, and const.",answer:`\`\`\`markdown **Difference between \`var\`, \`let\`, and \`const\` in JavaScript**

| Feature      | \`var\`                      | \`let\`                       | \`const\`                       |
|--------------|----------------------------|-----------------------------|-------------------------------|
| Scope        | Function-scoped            | Block-scoped                | Block-scoped                  |
| Hoisting     | Yes (initialized as \`undefined\`) | Yes (but not initialized)   | Yes (but not initialized)     |
| Re-declaration | Allowed                   | Not allowed in same scope   | Not allowed in same scope     |
| Re-assignment | Allowed                   | Allowed                     | Not allowed                   |
| Use case     | Older code, avoid in ES6+  | Use for variables that change | Use for constants (never change) |

### Examples

\`\`\`javascript
// var example
var x = 1;
if (true) {
  var x = 2; // same variable!
}
console.log(x); // 2

// let example
let y = 1;
if (true) {
  let y = 2; // different variable (block-scoped)
  console.log(y); // 2
}
console.log(y); // 1

// const example
const z = 1;
z = 2; // Error: Assignment to constant variable
\`\`\`

### Summary

- Use \`let\` for variables that will change.
- Use \`const\` for variables that should never change.
- Avoid \`var\` in modern JavaScript.`,level:"Beginner",created_at:"2025-04-20T11:30:07.795048Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"2235edd5-fe9d-41fa-9c00-aa17d0e06f4e",question:"What are data types in JavaScript? Name at least five.",answer:'```markdown **Answer:**\n\nIn JavaScript, data types specify the kind of data a variable can hold. Here are five common data types:\n\n1. **Number** – Represents numeric values (e.g., `42`, `3.14`)\n2. **String** – Represents sequences of characters (e.g., `"Hello"`, `\'JavaScript\'`)\n3. **Boolean** – Represents logical values: `true` or `false`\n4. **Object** – Used to store collections of data (e.g., `{ name: "Alice", age: 25 }`)\n5. **Undefined** – A variable that has been declared but not assigned a value\n\nOther data types include `null`, `Symbol`, and `BigInt`.',level:"Beginner",created_at:"2025-04-20T11:30:07.795056Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"a8c25f71-c810-43ad-91a7-9bbaf3e83873",question:"How do you write a function in JavaScript?",answer:`\`\`\`markdown You can write a function in JavaScript using the function keyword, followed by the function name, parentheses (), and curly braces {}. Here’s a simple example:

\`\`\`javascript
function sayHello() {
  console.log("Hello, world!");
}
\`\`\`

To call (run) the function, use its name followed by parentheses:

\`\`\`javascript
sayHello(); // Output: Hello, world!
\`\`\`

You can also create functions that take parameters:

\`\`\`javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
\`\`\`

Alternatively, you can use arrow function syntax:

\`\`\`javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // Output: 5
\`\`\`

These are the basic ways to write functions in JavaScript!`,level:"Beginner",created_at:"2025-04-20T11:30:07.795065Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"2d8ba07d-6476-49c1-88f7-b175668d093e",question:"What is the difference between == and === in JavaScript?",answer:"```markdown\nIn JavaScript, == and === are comparison operators, but they behave differently:\n\n- **== (Equality Operator)**: Compares two values for equality after converting both values to a common type (type coercion).\n  - Example: `5 == '5'` returns `true` because the string `'5'` is converted to the number `5` before comparison.\n\n- **=== (Strict Equality Operator)**: Compares both the value and the type, without doing any type conversion.\n  - Example: `5 === '5'` returns `false` because one is a number and the other is a string.\n\n**Summary Table:**\n\n| Operator | Checks Value | Checks Type | Example          | Result  |\n|----------|:------------:|:-----------:|------------------|---------|\n| ==       |     Yes      |     No      | 5 == '5'         | true    |\n| ===      |     Yes      |    Yes      | 5 === '5'        | false   |\n\n**Tip:**  \nIt's generally recommended to use `===` to avoid unexpected results due to type coercion.\n```",level:"Beginner",created_at:"2025-04-20T11:30:07.795072Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"fe697eff-bd87-4492-8139-4b14ff60fdfc",question:"How do you write a conditional statement in JavaScript?",answer:`\`\`\`markdown You can write a conditional statement in JavaScript using the if statement. Here’s the basic syntax:

\`\`\`javascript
if (condition) {
  // code to run if condition is true
}
\`\`\`

You can also add else and else if for more complex conditions:

\`\`\`javascript
if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else {
  // code to run if none of the above conditions are true
}
\`\`\`

**Example:**

\`\`\`javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
\`\`\`

This will print \`You are an adult.\` because the condition \`age >= 18\` is true.`,level:"Beginner",created_at:"2025-04-20T11:30:07.795079Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"dda04f60-5745-449c-a55c-c24f8a3c7e63",question:"What is an array and how do you create one?",answer:`\`\`\`markdown An array in JavaScript is a special variable that can hold multiple values at once. Arrays are used to store lists of items, such as numbers, strings, or even other arrays.

### How to Create an Array

You can create an array in JavaScript using square brackets \`[]\` and separating the values with commas.

\`\`\`javascript
// Example: Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Example: Creating an array of strings
let fruits = ["apple", "banana", "orange"];
\`\`\`

You can also create an array using the \`Array\` constructor:

\`\`\`javascript
let colors = new Array("red", "green", "blue");
\`\`\`

### Accessing Array Elements

You can access elements in an array using their index (starting from 0):

\`\`\`javascript
console.log(fruits[0]); // Output: "apple"
console.log(numbers[2]); // Output: 3
\`\`\`

Arrays are a fundamental part of JavaScript and are very useful for managing collections of data.`,level:"Beginner",created_at:"2025-04-20T11:30:07.795087Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"b3a75bd3-34a8-4232-b97f-692fa6cacc68",question:"How do you access and modify elements in an array?",answer:`\`\`\`markdown You can access and modify elements in a JavaScript array using bracket notation with the element's index. Array indices start at 0.

**Accessing Elements:**

\`\`\`javascript
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[2]); // Output: 'cherry'
\`\`\`

**Modifying Elements:**

\`\`\`javascript
fruits[1] = 'orange'; // Changes 'banana' to 'orange'
console.log(fruits); // Output: ['apple', 'orange', 'cherry']
\`\`\`

**Summary:**

- Use arrayName[index] to access or modify an element.
- Indices start from 0 (first element).`,level:"Beginner",created_at:"2025-04-20T11:30:07.795094Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"da52b8e4-36c0-4581-9aa9-8ad130528b26",question:"What is a loop? Name and explain two types of loops in JavaScript.",answer:`\`\`\`markdown A **loop** in JavaScript is a programming construct that allows you to execute a block of code multiple times, based on a condition. Loops help automate repetitive tasks efficiently.

Here are two common types of loops in JavaScript:

### 1. \`for\` Loop

The \`for\` loop is used when you know in advance how many times you want to execute a statement or a block of statements.

**Syntax:**
\`\`\`javascript
for (initialization; condition; increment) {
  // code to be executed
}
\`\`\`

**Example:**
\`\`\`javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
\`\`\`
This will print numbers 0 to 4 in the console.

---

### 2. \`while\` Loop

The \`while\` loop repeats a block of code as long as a specified condition is true.

**Syntax:**
\`\`\`javascript
while (condition) {
  // code to be executed
}
\`\`\`

**Example:**
\`\`\`javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
\`\`\`
This will also print numbers 0 to 4 in the console.

---

**Summary:**  
Loops are essential for repeating tasks in JavaScript. The \`for\` loop is typically used when the number of iterations is known, while the \`while\` loop is used when the number of iterations is determined by a condition.`,level:"Beginner",created_at:"2025-04-20T11:30:07.795117Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"4f4bef4d-298f-4ee3-aead-26a2747625da",question:"What is the purpose of the 'this' keyword in JavaScript?",answer:`\`\`\`markdown The this keyword in JavaScript refers to the object that is currently executing the code. Its value depends on how a function is called:

- **In a method**: this refers to the object the method belongs to.
- **In a function (non-strict mode)**: this refers to the global object (window in browsers).
- **In a function (strict mode)**: this is undefined.
- **In an event handler**: this refers to the element that received the event.
- **With constructors (using new)**: this refers to the newly created object.
- **With call, apply, or bind**: this is explicitly set to the first argument passed to those methods.
- **In arrow functions**: this is inherited from the enclosing (lexical) scope.

**Example:**

\`\`\`javascript
const person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Output: Hello, Alice
\`\`\`

In the example above, this refers to the person object, so this.name is "Alice".

**Summary:**  
The this keyword allows you to access properties and methods of the object that is currently invoking the function, enabling dynamic and context-aware code.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795124Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"ce6e5015-7f53-41ea-bd09-0897577dfebe",question:"Explain the concept of scope in JavaScript.",answer:`\`\`\`markdown
### Scope in JavaScript

**Scope** in JavaScript refers to the current context of code, which determines the accessibility (visibility) of variables, functions, and objects. In other words, scope controls where variables and functions can be accessed from in your code.

#### Types of Scope

1. **Global Scope**
   - Variables declared outside of any function or block are in the global scope.
   - They can be accessed from anywhere in the code.

   \`\`\`js
   let globalVar = "I'm global";

   function showVar() {
     console.log(globalVar); // Accessible here
   }

   showVar();
   console.log(globalVar); // Also accessible here
   \`\`\`

2. **Function Scope**
   - Variables declared inside a function using \`var\` are only accessible within that function.

   \`\`\`js
   function myFunction() {
     var functionVar = "I'm local to myFunction";
     console.log(functionVar); // Accessible here
   }

   myFunction();
   // console.log(functionVar); // Error: functionVar is not defined
   \`\`\`

3. **Block Scope (ES6 and later)**
   - Variables declared with \`let\` or \`const\` inside a block (\`{}\`) are only accessible within that block.

   \`\`\`js
   if (true) {
     let blockVar = "I'm block scoped";
     console.log(blockVar); // Accessible here
   }
   // console.log(blockVar); // Error: blockVar is not defined
   \`\`\`

#### Scope Chain

When trying to access a variable, JavaScript looks in the current scope. If it doesn't find it, it moves outward to the next outer scope, and so on, until it reaches the global scope. This is called the **scope chain**.

#### Summary Table

| Declaration | Scope Type     | Example Context      |
|-------------|---------------|---------------------|
| \`var\`       | Function      | Inside functions    |
| \`let\`/\`const\`| Block        | Inside \`{}\` blocks  |
| (none)      | Global        | Outside any block   |

#### Why is Scope Important?

- **Prevents variable name conflicts**
- **Controls variable lifetime and accessibility**
- **Helps organize and modularize code**

Understanding scope is essential for writing clean, bug-free JavaScript code!
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795131Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"100faeda-26be-42be-b140-8614f22c8361",question:"What is hoisting in JavaScript?",answer:`\`\`\`markdown **Hoisting in JavaScript**

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope (global or function scope) during the compilation phase, before the code is executed.

### How Hoisting Works

- **Variables:**  
  - \`var\` declarations are hoisted and initialized with \`undefined\`.
  - \`let\` and \`const\` declarations are hoisted but not initialized. Accessing them before declaration results in a \`ReferenceError\` (Temporal Dead Zone).

- **Functions:**  
  - Function declarations are hoisted along with their definitions.
  - Function expressions (assigned to variables) are treated like variables and only the variable declaration is hoisted, not the function definition.

### Example

\`\`\`javascript
console.log(a); // undefined
var a = 5;

foo(); // "Hello"
function foo() {
  console.log("Hello");
}

// let and const
console.log(b); // ReferenceError
let b = 10;
\`\`\`

### Summary

- Hoisting allows you to use variables and functions before they are declared in the code.
- Only declarations are hoisted, not initializations.
- Be cautious with \`let\` and \`const\` due to the Temporal Dead Zone.

---

**In short:**  
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795138Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"b18842f2-3bbc-4fbb-8fe7-abcf87077323",question:"What are arrow functions and how do they differ from regular functions?",answer:`\`\`\`markdown Arrow functions are a concise way to write functions in JavaScript, introduced in ES6 (ECMAScript 2015). They use the => syntax and are often used for shorter functions or callbacks.

**Syntax Example:**

\`\`\`javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
\`\`\`

## Key Differences from Regular Functions

1. **Syntax:**  
   Arrow functions are shorter and do not require the function keyword.

2. **this Binding:**  
   Arrow functions do not have their own this context. Instead, they inherit this from the enclosing scope (lexical scoping). Regular functions have their own this, which can change depending on how the function is called.

   \`\`\`javascript
   function Regular() {
     this.value = 1;
     setTimeout(function() {
       console.log(this.value); // undefined (or window.value in browsers)
     }, 100);
   }

   function Arrow() {
     this.value = 1;
     setTimeout(() => {
       console.log(this.value); // 1
     }, 100);
   }
   \`\`\`

3. **No arguments Object:**  
   Arrow functions do not have their own arguments object. Regular functions do.

   \`\`\`javascript
   function regular() {
     console.log(arguments); // works
   }

   const arrow = () => {
     console.log(arguments); // ReferenceError
   }
   \`\`\`

4. **Cannot be used as Constructors:**  
   Arrow functions cannot be used with new to create instances.

5. **No prototype Property:**  
   Arrow functions do not have a prototype property.

## When to Use Arrow Functions

- When you need a concise function, especially for callbacks.
- When you want to inherit this from the surrounding scope.

**When NOT to use:**
- When you need a function with its own this (e.g., object methods, constructors).

---

**In summary:**  
Arrow functions provide a shorter syntax and inherit this from their surrounding scope, making them useful for many scenarios, but they are not suitable for all use cases.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795144Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"ae675d4a-1776-402a-9d8b-e3cd465c9e79",question:"What is the difference between null and undefined?",answer:'```markdown **Difference Between `null` and `undefined` in JavaScript**\n\n| Feature         | `null`                                   | `undefined`                                  |\n|-----------------|------------------------------------------|----------------------------------------------|\n| **Type**        | Object                                   | Undefined                                    |\n| **Meaning**     | Explicitly means "no value" or "empty"   | Variable declared but not assigned a value   |\n| **How to get**  | Assigned manually: `let x = null;`       | Default for uninitialized variables: `let y;`|\n| **Use case**    | Intentional absence of any object value  | Unintentional absence of value               |\n| **Equality**    | `null == undefined` is `true`            |                                              |\n| **Strict Equality** | `null === undefined` is `false`      |                                              |\n\n**Example:**\n```javascript\nlet a;\nconsole.log(a); // undefined\n\nlet b = null;\nconsole.log(b); // null\n```\n\n**Summary:**  \n- Use `null` when you want to intentionally indicate "no value".\n- `undefined` usually means a variable has been declared but not yet assigned a value.',level:"Intermediate",created_at:"2025-04-20T11:30:07.795152Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"39414967-1c49-4537-8399-1871e3f5c0fc",question:"How does JavaScript handle asynchronous operations?",answer:`\`\`\`markdown JavaScript handles asynchronous operations using several mechanisms that allow code to execute without blocking the main thread. Here’s an overview:

## 1. **Callbacks**
A callback is a function passed as an argument to another function, to be executed after an operation completes.

\`\`\`javascript
setTimeout(() => {
  console.log('Executed after 1 second');
}, 1000);
\`\`\`

## 2. **Promises**
Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000);
});

promise.then(result => console.log(result));
\`\`\`

## 3. **Async/Await**
\`async\` and \`await\` are syntactic sugar over Promises, making asynchronous code look and behave more like synchronous code.

\`\`\`javascript
async function fetchData() {
  const result = await promise;
  console.log(result);
}
fetchData();
\`\`\`

## 4. **Event Loop**
JavaScript uses an event loop to handle asynchronous operations. The event loop continuously checks the call stack and the message queue, executing callbacks and promise handlers when the stack is empty.

---

**Summary:**  
JavaScript handles asynchronous operations using callbacks, Promises, and async/await, all coordinated by the event loop to ensure non-blocking execution.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795158Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"f9a963c5-ac2e-4fcf-a083-f08cf0b0ab1f",question:"What is a callback function?",answer:`\`\`\`markdown A **callback function** in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used to handle asynchronous operations, such as reading files, making API requests, or handling events.

### Example

\`\`\`javascript
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice!
// Goodbye!
\`\`\`

### Key Points

- A callback function is **not executed immediately**; it is called at a later time, usually after a task is finished.
- Callbacks help manage asynchronous code and event-driven programming.
- In modern JavaScript, callbacks are often replaced by **Promises** and **async/await** for better readability and error handling.

### Usage Example: Asynchronous Operation

\`\`\`javascript
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);
\`\`\`

Here, the anonymous function is a callback that runs after 2 seconds.

---

**In summary:**  
A callback function is a way to ensure that a function is not executed until another function has finished its task.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795165Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"71919dc9-bc52-4fff-80c0-40f9850e0406",question:"Explain promises in JavaScript.",answer:`\`\`\`markdown ## Explanation of Promises in JavaScript

A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner, more flexible way to handle asynchronous code compared to traditional callback functions.

### Key Concepts

- **Pending:** The initial state; the promise is neither fulfilled nor rejected.
- **Fulfilled:** The operation completed successfully, and the promise has a resulting value.
- **Rejected:** The operation failed, and the promise has a reason for the failure (usually an error).

### Creating a Promise

\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (/* success */) {
    resolve('Success!');
  } else {
    reject('Error!');
  }
});
\`\`\`

### Consuming a Promise

You use \`.then()\` to handle fulfillment and \`.catch()\` to handle rejection:

\`\`\`javascript
myPromise
  .then(result => {
    console.log(result); // 'Success!'
  })
  .catch(error => {
    console.error(error); // 'Error!'
  });
\`\`\`

### Chaining Promises

Promises can be chained, allowing you to perform a sequence of asynchronous operations:

\`\`\`javascript
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .catch(error => handleError(error));
\`\`\`

### Why Use Promises?

- **Avoid callback hell:** Promises make asynchronous code easier to read and maintain.
- **Error handling:** Promises provide a unified way to handle errors.
- **Chaining:** Promises can be chained for sequential asynchronous operations.

### Example

\`\`\`javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: 'Alice' };
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log(data); // { name: 'Alice' }
  })
  .catch(error => {
    console.error(error);
  });
\`\`\`

---

**In summary:**  
Promises are a modern, powerful way to handle asynchronous operations in JavaScript, making your code more readable and robust.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795172Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"fc7c61f6-1c01-450c-8d35-4e26e5024b24",question:"What is async/await and how is it used?",answer:`\`\`\`markdown
**Async/await** are modern JavaScript keywords used to work with asynchronous code in a more readable and straightforward way, making asynchronous code look and behave more like synchronous code.

### What is \`async\`?

- The \`async\` keyword is used to declare a function as asynchronous.
- An \`async\` function always returns a Promise, even if you don't explicitly return one.

### What is \`await\`?

- The \`await\` keyword can only be used inside an \`async\` function.
- It pauses the execution of the function until the Promise is resolved or rejected.
- It allows you to write asynchronous code that looks like synchronous code, making it easier to read and maintain.

### Example

\`\`\`javascript
// Example of async/await
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching data...");
  const result = await fetchData(); // Waits for fetchData to resolve
  console.log(result); // Logs: Data received!
}

getData();
\`\`\`

### Key Points

- \`async\` functions enable the use of \`await\` inside them.
- \`await\` pauses the function execution until the awaited Promise settles.
- Helps avoid "callback hell" and makes asynchronous code easier to understand.

### When to Use

Use \`async/await\` when you need to perform asynchronous operations (like fetching data from an API) and want your code to be cleaner and easier to follow than using \`.then()\` and \`.catch()\` with Promises.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795179Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"7580218a-d3a0-4daa-89e9-a35c91002086",question:"What is event bubbling and event capturing in the DOM?",answer:`\`\`\`markdown **Event Bubbling and Event Capturing in the DOM**

In the DOM (Document Object Model), when an event occurs on an element, it doesn't only affect that element. The event can propagate through the DOM tree in two main phases: **event capturing** and **event bubbling**.

---

### 1. Event Capturing (Trickling)

- **Order:** The event starts from the root of the DOM tree and travels down to the target element.
- **Phase:** This is also called the "capture phase."
- **Example:** If you click a button inside a div, the event first goes from the document → html → body → div → button (target).

---

### 2. Event Bubbling

- **Order:** After reaching the target element, the event bubbles up from the target back to the root.
- **Phase:** This is called the "bubble phase."
- **Example:** After the button receives the event, it bubbles up: button → div → body → html → document.

---

### 3. How to Use Them in JavaScript

When you add an event listener, you can specify which phase to listen to using the third parameter (\`useCapture\`):

\`\`\`javascript
element.addEventListener('click', handler, useCapture);
\`\`\`

- If \`useCapture\` is \`true\`, the handler is called during the capturing phase.
- If \`useCapture\` is \`false\` (default), the handler is called during the bubbling phase.

**Example:**

\`\`\`javascript
document.querySelector('div').addEventListener('click', function() {
  console.log('DIV clicked!');
}, false); // Bubbling phase

document.querySelector('div').addEventListener('click', function() {
  console.log('DIV captured!');
}, true); // Capturing phase
\`\`\`

---

### 4. Visual Representation

\`\`\`
Capturing phase:    document → html → body → div → button (target)
Bubbling phase:     button (target) → div → body → html → document
\`\`\`

---

### 5. Summary Table

| Phase      | Direction         | Handler Parameter (\`useCapture\`) |
|------------|-------------------|----------------------------------|
| Capturing  | Top → Target      | true                             |
| Bubbling   | Target → Top      | false (default)                  |

---

**In summary:**  
- **Event capturing**: Event goes down to the target.
- **Event bubbling**: Event bubbles up from the target.
- You can choose which phase to listen to by setting the third parameter in \`addEventListener\`.  
- By default, most events are handled in the bubbling phase.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795186Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"949e80e6-6dad-4f0c-a548-ca0c93435bd3",question:"How do you add and remove event listeners in JavaScript?",answer:`\`\`\`markdown
### Adding and Removing Event Listeners in JavaScript

In JavaScript, you can add and remove event listeners to DOM elements using the \`addEventListener\` and \`removeEventListener\` methods.

#### Adding an Event Listener

Use \`addEventListener\` to attach an event handler to an element:

\`\`\`javascript
const button = document.querySelector('#myButton');

function handleClick(event) {
  alert('Button was clicked!');
}

button.addEventListener('click', handleClick);
\`\`\`

#### Removing an Event Listener

To remove an event listener, use \`removeEventListener\` with the same event type and handler function reference:

\`\`\`javascript
button.removeEventListener('click', handleClick);
\`\`\`

**Important:**  
The function reference passed to \`removeEventListener\` must be the same as the one used in \`addEventListener\`. Anonymous functions cannot be removed this way.

#### Example

\`\`\`javascript
const button = document.querySelector('#myButton');

function handleClick() {
  console.log('Clicked!');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener after 5 seconds
setTimeout(() => {
  button.removeEventListener('click', handleClick);
  console.log('Event listener removed');
}, 5000);
\`\`\`

#### Summary Table

| Method                | Purpose                    |
|-----------------------|---------------------------|
| \`addEventListener\`    | Attach an event handler   |
| \`removeEventListener\` | Detach an event handler   |
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795196Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"51c3067d-a1e1-4f25-a8eb-12e9b758331f",question:"What is the Document Object Model (DOM)?",answer:`\`\`\`markdown The **Document Object Model (DOM)** is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, where each node corresponds to a part of the document (such as elements, attributes, and text).

In JavaScript, the DOM allows you to:

- **Access** and **manipulate** HTML and XML documents dynamically.
- Change the structure, style, and content of a webpage after it has loaded.
- Respond to user events (like clicks, input, etc.).

**Example:**

\`\`\`html
<!DOCTYPE html>
<html>
  <body>
    <p id="demo">Hello, World!</p>
    <script>
      // Access the paragraph element and change its text
      document.getElementById("demo").textContent = "Hello, DOM!";
    <\/script>
  </body>
</html>
\`\`\`

**Key Points:**

- The DOM represents the page so that programs can change the document structure, style, and content.
- It is language-independent, but most commonly used with JavaScript in browsers.
- The DOM is organized as a tree of nodes, making it easy to traverse and manipulate.

**In summary:**  
The DOM is what allows JavaScript to interact with and modify web pages dynamically.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795204Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"6cb4abeb-a67a-48e8-aa92-ad99992154b7",question:"How do you select elements from the DOM?",answer:`\`\`\`markdown You can select elements from the DOM in JavaScript using several methods provided by the Document Object Model (DOM) API. Here are the most common ways:

### 1. \`getElementById()\`
Selects a single element by its unique \`id\`.

\`\`\`javascript
const element = document.getElementById('myId');
\`\`\`

---

### 2. \`getElementsByClassName()\`
Selects all elements with a specific class name. Returns an HTMLCollection.

\`\`\`javascript
const elements = document.getElementsByClassName('myClass');
\`\`\`

---

### 3. \`getElementsByTagName()\`
Selects all elements with a specific tag name. Returns an HTMLCollection.

\`\`\`javascript
const elements = document.getElementsByTagName('div');
\`\`\`

---

### 4. \`querySelector()\`
Selects the first element that matches a CSS selector.

\`\`\`javascript
const element = document.querySelector('.myClass');
\`\`\`

---

### 5. \`querySelectorAll()\`
Selects all elements that match a CSS selector. Returns a NodeList.

\`\`\`javascript
const elements = document.querySelectorAll('div.myClass');
\`\`\`

---

### Example

\`\`\`html
<div id="header" class="menu"></div>
<div class="menu"></div>
\`\`\`

\`\`\`javascript
const header = document.getElementById('header'); // Select by ID
const menus = document.getElementsByClassName('menu'); // Select by class
const firstMenu = document.querySelector('.menu'); // First element with class 'menu'
const allMenus = document.querySelectorAll('.menu'); // All elements with class 'menu'
\`\`\`

---

**Tip:**  
- Use \`querySelector\` and \`querySelectorAll\` for more flexible and powerful CSS-style selections.
- \`getElementById\` is the fastest for selecting a single element by ID.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795211Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"ff264ec1-2ce1-4585-87b3-28af3914005f",question:"How can you manipulate the DOM using JavaScript?",answer:`\`\`\`markdown You can manipulate the DOM (Document Object Model) using JavaScript by accessing and modifying HTML elements, their attributes, and content. Here are some common ways to manipulate the DOM:

## 1. Selecting Elements

\`\`\`js
// By ID
const element = document.getElementById('myId');

// By class
const items = document.getElementsByClassName('myClass');

// By tag name
const paragraphs = document.getElementsByTagName('p');

// Using querySelector (CSS selectors)
const firstItem = document.querySelector('.myClass');

// Using querySelectorAll (all matches)
const allItems = document.querySelectorAll('.myClass');
\`\`\`

## 2. Changing Content

\`\`\`js
element.textContent = 'New text'; // Changes text
element.innerHTML = '<span>New HTML</span>'; // Changes HTML
\`\`\`

## 3. Changing Attributes

\`\`\`js
element.setAttribute('src', 'image.jpg'); // Set attribute
element.removeAttribute('alt'); // Remove attribute
\`\`\`

## 4. Changing Styles

\`\`\`js
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
\`\`\`

## 5. Adding/Removing Classes

\`\`\`js
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');
\`\`\`

## 6. Creating and Appending Elements

\`\`\`js
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
document.body.appendChild(newDiv);
\`\`\`

## 7. Removing Elements

\`\`\`js
element.remove(); // Removes the element from the DOM
\`\`\`

## 8. Adding Event Listeners

\`\`\`js
element.addEventListener('click', function() {
  alert('Element clicked!');
});
\`\`\`

---

**Summary:**  
You can manipulate the DOM in JavaScript by selecting elements, changing their content or attributes, modifying styles, adding/removing classes, creating or removing elements, and handling events. This allows you to dynamically update the web page in response to user actions or other events.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795218Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"5b4107bc-a984-4b06-b8d8-b9cc810f318f",question:"What is closure in JavaScript? Give an example.",answer:`\`\`\`markdown **Closure in JavaScript**

A **closure** is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables—even after the outer function has executed. Closures allow functions to retain access to their lexical scope, enabling powerful patterns like data privacy and function factories.

**Key Points:**
- A closure has access to:
  - Its own scope (variables defined between its curly braces)
  - The scope of the outer function
  - The global scope

**Example:**

\`\`\`javascript
function makeCounter() {
  let count = 0; // \`count\` is a local variable created by makeCounter

  return function() {
    count += 1;
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
\`\`\`

**Explanation:**
- \`makeCounter\` returns an inner function.
- The inner function forms a closure, capturing the \`count\` variable from its outer scope.
- Each call to \`counter()\` increments and returns the private \`count\` variable, which persists between calls due to the closure.

Closures are fundamental in JavaScript for data encapsulation, callbacks, and functional programming patterns.`,level:"Advanced",created_at:"2025-04-20T11:30:07.795225Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"5134d346-5d6d-4052-a712-13853a1725fd",question:"Explain the concept of prototypal inheritance.",answer:`\`\`\`markdown ### Prototypal Inheritance in JavaScript

Prototypal inheritance is a core concept in JavaScript that allows objects to inherit properties and methods from other objects. Unlike classical inheritance (as seen in languages like Java or C++), which is based on classes, JavaScript uses prototypes to share behavior.

#### How It Works

Every JavaScript object has an internal link to another object called its **prototype**. When you try to access a property or method on an object, JavaScript will:

1. Look for the property directly on the object.
2. If not found, it will look up the prototype chain (i.e., the object's prototype, then the prototype's prototype, and so on) until it finds the property or reaches the end of the chain (\`null\`).

#### Example

\`\`\`javascript
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // true (inherited from animal)
dog.walk();            // "Animal walks" (inherited method)
console.log(dog.barks); // true (own property)
\`\`\`

In this example:

- \`dog\` is created with \`animal\` as its prototype.
- \`dog\` inherits the \`eats\` property and \`walk\` method from \`animal\`.
- \`barks\` is a property specific to \`dog\`.

#### Prototype Chain

The chain of prototypes is called the **prototype chain**. It ends when a prototype is \`null\` (usually \`Object.prototype\`).

#### Constructor Functions and \`prototype\`

When using constructor functions:

\`\`\`javascript
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log(\`Hello, my name is \${this.name}\`);
};

const alice = new Person('Alice');
alice.sayHello(); // "Hello, my name is Alice"
\`\`\`

Here, \`alice\` inherits \`sayHello\` from \`Person.prototype\`.

#### ES6 Classes

ES6 \`class\` syntax is syntactic sugar over prototypal inheritance:

\`\`\`javascript
class Animal {
  walk() {
    console.log("Animal walks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.walk(); // "Animal walks"
dog.bark(); // "Woof!"
\`\`\`

#### Summary

- **Prototypal inheritance** allows objects to inherit directly from other objects.
- It enables code reuse and dynamic property/method lookup.
- It is the foundation for JavaScript’s object system, including ES6 classes.

**References:**
- [MDN: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [JavaScript.info: Prototypal inheritance](https://javascript.info/prototype-inheritance)`,level:"Advanced",created_at:"2025-04-20T11:30:07.795232Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"f597769c-2067-4060-8100-234e7960e461",question:"What are higher-order functions? Provide an example.",answer:`\`\`\`markdown **Higher-order functions** are functions that either take one or more functions as arguments, return a function as their result, or both. They are a fundamental concept in JavaScript, enabling powerful patterns like callbacks, function composition, and functional programming.

### Example

\`\`\`javascript
// Higher-order function: takes a function as an argument
function mapArray(arr, transform) {
  const result = [];
  for (let item of arr) {
    result.push(transform(item));
  }
  return result;
}

// Function to be passed as an argument
function square(x) {
  return x * x;
}

// Usage
const numbers = [1, 2, 3, 4];
const squaredNumbers = mapArray(numbers, square);

console.log(squaredNumbers); // Output: [1, 4, 9, 16]
\`\`\`

In this example, \`mapArray\` is a higher-order function because it takes another function (\`transform\`) as an argument. The built-in \`Array.prototype.map\` is another common higher-order function in JavaScript.`,level:"Advanced",created_at:"2025-04-20T11:30:07.795238Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"b7069471-8331-4466-b58d-5ad4b372934d",question:"What is the module pattern in JavaScript?",answer:`\`\`\`markdown The **module pattern** in JavaScript is a design pattern used to encapsulate private and public members within a single object, providing a way to create modules with private state and public interfaces. It leverages closures and immediately-invoked function expressions (IIFEs) to achieve data privacy and organize code into reusable, maintainable components.

### Key Features

- **Encapsulation:** Keeps variables and functions private, exposing only what is necessary.
- **Namespace Management:** Avoids polluting the global namespace.
- **Reusability:** Modules can be reused across different parts of an application.

### Syntax Example

\`\`\`javascript
const MyModule = (function() {
  // Private variables and functions
  let privateVar = 'I am private';

  function privateFunction() {
    console.log(privateVar);
  }

  // Public API
  return {
    publicVar: 'I am public',
    publicFunction: function() {
      privateFunction();
      console.log('Accessed from public function');
    }
  };
})();

// Usage
console.log(MyModule.publicVar); // I am public
MyModule.publicFunction();       // I am private
                                 // Accessed from public function
console.log(MyModule.privateVar); // undefined
\`\`\`

### How It Works

- The IIFE creates a new scope, so variables and functions defined inside are not accessible from the outside.
- Only the object returned from the IIFE is exposed, forming the module’s public API.
- Private members remain inaccessible, ensuring encapsulation.

### Modern Alternatives

With ES6, JavaScript introduced native modules using the \`import\` and \`export\` syntax, which provide even better encapsulation and modularity. However, the module pattern is still useful, especially in environments where ES6 modules are not supported.

---

**In summary:**  
The module pattern is a classic JavaScript design pattern for creating self-contained modules with private and public members, improving code organization, reusability, and maintainability.`,level:"Advanced",created_at:"2025-04-20T11:30:07.795245Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"fadebe0c-42da-40e6-bdca-52770838024b",question:"How does the 'bind', 'call', and 'apply' methods work?",answer:"```markdown ### Understanding `bind`, `call`, and `apply` in JavaScript\n\nIn JavaScript, functions are first-class objects and come with several built-in methods that control their invocation context (`this`). Three commonly used methods are `bind`, `call`, and `apply`.\n\n---\n\n#### 1. `call()`\n\n- **Purpose:** Invokes a function immediately, setting its `this` value explicitly.\n- **Syntax:** `func.call(thisArg, arg1, arg2, ...)`\n- **How it works:** The first argument is the value to use as `this` inside the function. The rest are arguments passed to the function.\n\n```javascript\nfunction greet(greeting, punctuation) {\n  console.log(greeting + ', ' + this.name + punctuation);\n}\n\nconst person = { name: 'Alice' };\ngreet.call(person, 'Hello', '!'); // Output: Hello, Alice!\n```\n\n---\n\n#### 2. `apply()`\n\n- **Purpose:** Similar to `call`, but arguments are provided as an array (or array-like object).\n- **Syntax:** `func.apply(thisArg, [argsArray])`\n- **How it works:** The first argument is the value for `this`, and the second is an array of arguments.\n\n```javascript\ngreet.apply(person, ['Hi', '...']); // Output: Hi, Alice...\n```\n\n---\n\n#### 3. `bind()`\n\n- **Purpose:** Returns a new function with a permanently bound `this` value and (optionally) preset arguments. Does **not** invoke the function immediately.\n- **Syntax:** `const newFunc = func.bind(thisArg, arg1, arg2, ...)`\n- **How it works:** The returned function can be called later, with `this` and any preset arguments already fixed.\n\n```javascript\nconst greetAlice = greet.bind(person, 'Hey');\ngreetAlice('?'); // Output: Hey, Alice?\n```\n\n---\n\n### Key Differences\n\n| Method | Invokes Function Immediately? | Sets `this`? | Passes Arguments |\n|--------|------------------------------|--------------|------------------|\n| `call` | Yes                          | Yes          | Individually     |\n| `apply`| Yes                          | Yes          | As array         |\n| `bind` | No (returns new function)    | Yes          | Individually (can preset) |\n\n---\n\n### Use Cases\n\n- **`call`/`apply`:** When you want to invoke a function immediately with a specific `this` context.\n- **`bind`:** When you need a function to always use a specific `this` (e.g., for event handlers or callbacks).\n\n---\n\n### Example: All Three in Action\n\n```javascript\nfunction introduce(age, city) {\n  console.log(`I'm ${this.name}, ${age} years old from ${city}.`);\n}\n\nconst user = { name: 'Bob' };\n\n// call\nintroduce.call(user, 25, 'Paris');\n\n// apply\nintroduce.apply(user, [30, 'London']);\n\n// bind\nconst introduceBob = introduce.bind(user, 35);\nintroduceBob('Berlin');\n```\n\n**Output:**\n```\nI'm Bob, 25 years old from Paris.\nI'm Bob, 30 years old from London.\nI'm Bob, 35 years old from Berlin.\n```\n\n---\n\n**In summary:**  \n- Use `call` and `apply` to invoke functions with a specific `this` immediately.\n- Use `bind` to create a new function with a bound `this` (and optionally preset arguments) for later use.",level:"Advanced",created_at:"2025-04-20T11:30:07.795252Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"391307b8-6f4e-463e-8021-b8da9a0cea50",question:"What is the difference between synchronous and asynchronous code?",answer:`\`\`\`markdown
### Difference Between Synchronous and Asynchronous Code in JavaScript

#### Synchronous Code

- **Definition:** Synchronous code is executed sequentially, one operation after another. Each statement waits for the previous one to finish before executing.
- **Blocking:** If a synchronous operation takes time (e.g., reading a large file), it blocks the execution of subsequent code until it completes.
- **Example:**
    \`\`\`javascript
    console.log('Start');
    // Synchronous operation
    for (let i = 0; i < 1e9; i++) {} // Time-consuming loop
    console.log('End');
    \`\`\`
    Output:
    \`\`\`
    Start
    End
    \`\`\`

#### Asynchronous Code

- **Definition:** Asynchronous code allows certain operations to run in the background, enabling the program to continue executing other code without waiting for the operation to complete.
- **Non-blocking:** Asynchronous operations (like network requests, timers, or file I/O) do not block the execution of subsequent code.
- **Mechanisms:** JavaScript handles asynchrony using callbacks, promises, and async/await.
- **Example:**
    \`\`\`javascript
    console.log('Start');
    setTimeout(() => {
      console.log('Inside setTimeout');
    }, 1000);
    console.log('End');
    \`\`\`
    Output:
    \`\`\`
    Start
    End
    Inside setTimeout
    \`\`\`

#### Summary Table

| Aspect         | Synchronous                | Asynchronous                  |
|----------------|---------------------------|-------------------------------|
| Execution      | Sequential                | Non-sequential                |
| Blocking       | Yes                       | No                            |
| Use Cases      | Simple, quick operations  | I/O, network, timers, etc.    |
| Examples       | Loops, arithmetic         | setTimeout, fetch, promises   |

#### Key Takeaway

Synchronous code is simple but can block the main thread, leading to poor performance for long-running tasks. Asynchronous code enables efficient, non-blocking execution, which is crucial for responsive web applications.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:30:07.795259Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"74b26cf5-4cb1-4d61-a199-5b7dce60be03",question:"What are JavaScript classes and how do they work?",answer:`\`\`\`markdown
### What are JavaScript Classes and How Do They Work?

**JavaScript classes** are a syntactic sugar introduced in ES6 (ECMAScript 2015) that provide a clearer and more concise way to create objects and deal with inheritance. They are primarily a new way to write constructor functions and work with prototypes.

#### Key Concepts

- **Class Declaration:** Classes are declared using the \`class\` keyword.
- **Constructor:** The \`constructor\` method is a special function for initializing new objects.
- **Methods:** Functions defined inside a class are called methods. They are added to the prototype of the class.
- **Inheritance:** Classes can extend other classes using the \`extends\` keyword, enabling inheritance.
- **Super:** The \`super\` keyword is used to call the constructor or methods of the parent class.

#### Example

\`\`\`javascript
// Class Declaration
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a sound.\`);
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(\`\${this.name} barks.\`);
  }
}

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // Output: Rex barks.
\`\`\`

#### How Do Classes Work?

- **Behind the Scenes:** Classes in JavaScript are primarily syntactic sugar over the existing prototype-based inheritance. When you define a class, JavaScript creates a constructor function and sets up the prototype chain.
- **Instance Creation:** When you use \`new\` with a class, the constructor is called, and a new object is created with the class's prototype.
- **Method Sharing:** All instances share methods defined in the class, as they are stored on the prototype, not on each instance.

#### Summary

JavaScript classes provide a cleaner and more familiar syntax for creating objects and handling inheritance, but under the hood, they use the same prototype-based model that JavaScript has always used.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:30:07.795266Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"9da905a3-f58e-45b7-ac1c-b9be5a1e7775",question:"Explain the concept of 'strict mode' in JavaScript.",answer:`\`\`\`markdown ### Strict Mode in JavaScript

**Strict mode** is a way to opt in to a restricted variant of JavaScript, introduced in ECMAScript 5. It helps you write more secure and error-free code by enforcing stricter parsing and error handling.

#### How to Enable Strict Mode

You can enable strict mode by adding the following line at the beginning of a script or a function:

\`\`\`javascript
"use strict";
\`\`\`

- **Globally:** At the top of a script file, applies to the entire script.
- **Locally:** Inside a function, applies only to that function.

#### Example

\`\`\`javascript
"use strict";

x = 10; // ReferenceError: x is not defined
\`\`\`

#### Key Features and Restrictions

- **Eliminates silent errors:** Converts mistakes that would otherwise fail silently into errors (e.g., assigning to undeclared variables).
- **Prevents use of reserved keywords:** Disallows using future reserved keywords as variable names (e.g., \`let\`, \`static\`).
- **Disallows duplicate property names or parameter values:** Throws errors for duplicates in object literals or function parameters.
- **Secures \`this\` keyword:** In functions, \`this\` is \`undefined\` if the function is called without an object context, instead of defaulting to the global object.
- **Prohibits deleting undeletable properties:** Throws errors when trying to delete properties that cannot be deleted.
- **Prevents accidental globals:** Variables must be declared with \`var\`, \`let\`, or \`const\`.

#### Why Use Strict Mode?

- **Catches common coding bugs.**
- **Makes debugging easier.**
- **Prepares code for future JavaScript versions.**
- **Improves performance in some JavaScript engines.**

#### Example: Non-strict vs. Strict Mode

\`\`\`javascript
// Non-strict mode
function foo() {
  x = 3; // Creates a global variable
}
foo();
console.log(x); // 3

// Strict mode
function bar() {
  "use strict";
  y = 3; // ReferenceError: y is not defined
}
bar();
\`\`\`

---

**In summary:**  
Strict mode is a powerful tool for writing safer, more robust JavaScript by enforcing stricter rules and catching common mistakes early in the development process.`,level:"Advanced",created_at:"2025-04-20T11:30:07.795313Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"4ce7ad45-dd80-40e2-9c8f-5567094b1cdc",question:"What are template literals and how are they used?",answer:"```markdown **Template literals** are a feature in JavaScript that allow you to work with strings in a more flexible and readable way. Introduced in ES6 (ECMAScript 2015), template literals use backticks (`` ` ``) instead of single (`'`) or double (`\"`) quotes.\n\n### Key Features of Template Literals\n\n1. **String Interpolation:**  \n   You can embed variables and expressions directly inside a string using the `${...}` syntax.\n\n   ```javascript\n   const name = 'Alice';\n   const greeting = `Hello, ${name}!`;\n   // Output: Hello, Alice!\n   ```\n\n2. **Multi-line Strings:**  \n   Template literals preserve line breaks, making it easy to write multi-line strings.\n\n   ```javascript\n   const message = `This is a\n   multi-line string.`;\n   // Output:\n   // This is a\n   // multi-line string.\n   ```\n\n3. **Expression Evaluation:**  \n   You can include any valid JavaScript expression inside `${...}`.\n\n   ```javascript\n   const a = 5;\n   const b = 10;\n   const result = `The sum is ${a + b}.`;\n   // Output: The sum is 15.\n   ```\n\n### Example Usage\n\n```javascript\nconst product = 'book';\nconst price = 12.99;\nconst summary = `The price of the ${product} is $${price}.`;\nconsole.log(summary);\n// Output: The price of the book is $12.99.\n```\n\n### Summary Table\n\n| Feature               | Traditional Strings      | Template Literals         |\n|-----------------------|-------------------------|--------------------------|\n| Quotes                | ' or \"                  | ` (backtick)             |\n| Variable Interpolation| Concatenation (+)       | `${variable}`            |\n| Multi-line Support    | \\n and concatenation    | Native multi-line        |\n\n**In summary:**  \nTemplate literals make string creation and manipulation in JavaScript more powerful and readable, especially when dealing with variables, expressions, and multi-line text.",level:"Intermediate",created_at:"2025-04-20T11:30:07.795322Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"c9bcf464-50b9-434f-b5c9-6856408c2a02",question:"What is destructuring assignment in JavaScript?",answer:`\`\`\`markdown Destructuring assignment in JavaScript is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables. This makes it easier and more concise to extract data from complex structures.

### Array Destructuring

\`\`\`javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
\`\`\`

### Object Destructuring

\`\`\`javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;

console.log(name); // "Alice"
console.log(age);  // 25
\`\`\`

### Benefits

- **Cleaner code:** Reduces the need for multiple lines to extract values.
- **Default values:** You can assign default values if the unpacked value is \`undefined\`.
- **Nested destructuring:** Works with nested objects and arrays.

### Example with Default Values

\`\`\`javascript
const [x = 10, y = 20] = [5];
console.log(x); // 5
console.log(y); // 20
\`\`\`

Destructuring assignment is widely used in modern JavaScript for handling function parameters, working with APIs, and simplifying code.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795329Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"f21897b3-f201-4e35-90c1-6b29027edf6f",question:"How do you clone an object in JavaScript?",answer:`\`\`\`markdown ### Cloning an Object in JavaScript

Cloning an object means creating a new object with the same properties and values as the original. There are two main types of cloning:

- **Shallow Clone:** Only the first level is copied; nested objects are still referenced.
- **Deep Clone:** All levels are recursively copied; nested objects are duplicated.

#### 1. Shallow Cloning

**Using \`Object.assign()\`**
\`\`\`javascript
const original = { a: 1, b: 2 };
const clone = Object.assign({}, original);
\`\`\`

**Using Spread Syntax**
\`\`\`javascript
const original = { a: 1, b: 2 };
const clone = { ...original };
\`\`\`

> **Note:** Both methods only perform a shallow copy.

---

#### 2. Deep Cloning

**Using \`structuredClone()\` (ES2021+)**
\`\`\`javascript
const original = { a: 1, b: { c: 2 } };
const clone = structuredClone(original);
\`\`\`

**Using \`JSON.parse(JSON.stringify())\`**
\`\`\`javascript
const original = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(original));
\`\`\`
> **Caveat:** This method does not clone functions, \`undefined\`, \`Symbol\`, or handle circular references.

**Using Libraries**
- [Lodash's \`_.cloneDeep()\`](https://lodash.com/docs/4.17.15#cloneDeep)
    \`\`\`javascript
    const _ = require('lodash');
    const clone = _.cloneDeep(original);
    \`\`\`

---

### Summary Table

| Method                        | Shallow/Deep | Handles Functions & Symbols | Handles Circular References |
|-------------------------------|:------------:|:--------------------------:|:--------------------------:|
| Spread syntax / \`Object.assign\`| Shallow      | Yes                        | N/A                        |
| \`structuredClone()\`           | Deep         | Yes                        | Yes                        |
| \`JSON.parse(JSON.stringify())\`| Deep         | No                         | No                         |
| Lodash \`_.cloneDeep()\`        | Deep         | Yes                        | Yes                        |

---

**Choose the cloning method based on your use case and the complexity of the object you need to clone.**`,level:"Advanced",created_at:"2025-04-20T11:30:07.795337Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"c4cd2c44-06a6-4446-ad07-408730b228da",question:"What are the main differences between ES5 and ES6?",answer:`\`\`\`markdown
### Main Differences Between ES5 and ES6 in JavaScript

**1. Variable Declarations**
- **ES5:** Uses \`var\` for variable declarations (function-scoped).
- **ES6:** Introduces \`let\` and \`const\` (block-scoped).

**2. Arrow Functions**
- **ES5:** Functions are defined using the \`function\` keyword.
- **ES6:** Introduces arrow functions (\`() => {}\`), which have lexical \`this\` binding.

**3. Classes**
- **ES5:** Uses constructor functions and prototypes for object-oriented programming.
- **ES6:** Introduces the \`class\` syntax for easier and clearer object-oriented code.

**4. Template Literals**
- **ES5:** String concatenation uses \`+\`.
- **ES6:** Introduces template literals using backticks (\`\` \` \`\`) and \`\${}\` for interpolation.

**5. Default Parameters**
- **ES5:** Default values are set manually inside the function.
- **ES6:** Allows default parameter values directly in the function signature.

**6. Destructuring Assignment**
- **ES5:** Extracting values from arrays/objects requires manual assignment.
- **ES6:** Supports destructuring for arrays and objects.

**7. Enhanced Object Literals**
- **ES5:** Object properties and methods must be explicitly defined.
- **ES6:** Allows shorthand property names and method definitions.

**8. Modules**
- **ES5:** No native module system; uses CommonJS or AMD.
- **ES6:** Introduces native \`import\` and \`export\` statements.

**9. Promises**
- **ES5:** Relies on callbacks for asynchronous operations.
- **ES6:** Introduces Promises for better async handling.

**10. Other Features**
- **ES6** adds features like:
  - Spread and rest operators (\`...\`)
  - \`for...of\` loops
  - Symbol type
  - Map and Set collections
  - Generators

---

**Summary Table**

| Feature                | ES5                           | ES6                                  |
|------------------------|-------------------------------|--------------------------------------|
| Variable Declaration   | \`var\`                         | \`let\`, \`const\`                       |
| Functions              | \`function\`                    | Arrow functions                      |
| Classes                | Constructor functions         | \`class\` syntax                       |
| String Interpolation   | Concatenation (\`+\`)           | Template literals (\`\` \`...\${}\` \`\`)   |
| Default Parameters     | Manual                        | Direct in signature                  |
| Destructuring          | No                            | Yes                                  |
| Modules                | No native support             | \`import\`/\`export\`                    |
| Promises               | No                            | Yes                                  |

ES6 (ECMAScript 2015) brought significant improvements to JavaScript, making code more concise, readable, and maintainable compared to ES5.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:30:07.795344Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"b82f49ea-2f4f-4064-a2f2-115010a26bd0",question:"What is a Symbol in JavaScript?",answer:`\`\`\`markdown
### What is a Symbol in JavaScript?

A **Symbol** is a primitive data type introduced in ES6 (ECMAScript 2015) that represents a unique and immutable identifier. Symbols are often used to create unique property keys for objects, ensuring that no property keys will clash, even if they have the same description.

#### Key Characteristics

- **Uniqueness:** Every symbol is unique, even if created with the same description.
- **Immutability:** Once created, a symbol's value cannot be changed.
- **Not enumerable:** Symbol-keyed properties are not included in \`for...in\` loops or \`Object.keys()\`, but can be accessed using \`Object.getOwnPropertySymbols()\`.

#### Creating a Symbol

\`\`\`javascript
const sym1 = Symbol();
const sym2 = Symbol('description');
const sym3 = Symbol('description');

console.log(sym2 === sym3); // false, each symbol is unique
\`\`\`

#### Using Symbols as Object Keys

\`\`\`javascript
const MY_KEY = Symbol('myKey');
const obj = {
  [MY_KEY]: 'value'
};

console.log(obj[MY_KEY]); // 'value'
\`\`\`

#### Use Cases

- **Private/Object properties:** Symbols can be used to create hidden or non-colliding properties in objects.
- **Well-known symbols:** JavaScript defines some built-in symbols (e.g., \`Symbol.iterator\`, \`Symbol.toStringTag\`) to customize language behavior.

#### Example: Custom Iterator

\`\`\`javascript
const myIterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const value of myIterable) {
  console.log(value); // 1, 2, 3
}
\`\`\`

#### Summary

Symbols provide a way to create unique identifiers for object properties, helping to avoid property name collisions and enabling advanced object-oriented patterns in JavaScript.
\`\`\``,level:"Advanced",created_at:"2025-04-20T11:30:07.795351Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"c5402375-dcc9-4e2e-9609-ababfac55923",question:"Explain the event loop in JavaScript.",answer:`\`\`\`markdown
### The Event Loop in JavaScript

The **event loop** is a fundamental concept in JavaScript that enables non-blocking, asynchronous programming despite JavaScript being single-threaded.

#### How It Works

1. **Call Stack:**  
   JavaScript executes code in a single thread using the call stack. When a function is called, it's pushed onto the stack; when it returns, it's popped off.

2. **Web APIs (Browser) / Node APIs (Node.js):**  
   Asynchronous operations (like \`setTimeout\`, HTTP requests, or DOM events) are handled by the browser or Node.js APIs, not directly by JavaScript.

3. **Callback Queue (Task Queue):**  
   When an async operation completes, its callback is placed in the callback queue.

4. **Event Loop:**  
   The event loop constantly checks if the call stack is empty. If it is, it moves the first callback from the queue to the stack for execution.

#### Visual Representation

\`\`\`plaintext
+-------------------+      +-------------------+      +-------------------+
|   Call Stack      | <----|   Event Loop      |<-----|   Callback Queue  |
+-------------------+      +-------------------+      +-------------------+
\`\`\`

#### Example

\`\`\`javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');
\`\`\`

**Output:**
\`\`\`
Start
End
Timeout
\`\`\`

- \`console.log('Start')\` and \`console.log('End')\` execute immediately.
- \`setTimeout\`'s callback is placed in the callback queue and waits until the call stack is empty.

#### Microtasks vs. Macrotasks

- **Macrotasks:** \`setTimeout\`, \`setInterval\`, I/O events.
- **Microtasks:** Promises (\`.then\`, \`.catch\`), \`MutationObserver\`.
- Microtasks are executed before the next macrotask, after the current stack is empty.

#### Why Is It Important?

- Prevents blocking: Long-running tasks don't freeze the UI.
- Enables asynchronous code: Callbacks, Promises, and async/await rely on the event loop.

#### Summary

The event loop allows JavaScript to handle asynchronous operations efficiently by coordinating the call stack and callback queue, ensuring smooth, non-blocking execution of code.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:30:07.795358Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"ee1e9f37-f411-44c2-8499-1e319f542e11",question:"What is debouncing and throttling in JavaScript?",answer:`\`\`\`markdown
### Debouncing and Throttling in JavaScript

**Debouncing** and **throttling** are two techniques used to control how often a function is executed over time, especially in response to events like scrolling, resizing, or keypresses. They help improve performance and user experience by limiting the rate at which expensive operations are triggered.

---

#### Debouncing

**Debouncing** ensures that a function is only executed after a certain period of inactivity. If the event is triggered again before the delay ends, the timer resets. This is useful for scenarios like search input fields, where you want to wait until the user has stopped typing before sending a request.

**Example:**
\`\`\`js
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
window.addEventListener('resize', debounce(() => {
  console.log('Resized!');
}, 300));
\`\`\`

---

#### Throttling

**Throttling** ensures that a function is executed at most once every specified interval, regardless of how many times the event is triggered. This is useful for events like window scrolling, where you want to limit the rate of function execution.

**Example:**
\`\`\`js
function throttle(func, interval) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

// Usage
window.addEventListener('scroll', throttle(() => {
  console.log('Scrolled!');
}, 200));
\`\`\`

---

#### Key Differences

- **Debouncing**: Executes the function *after* the event has stopped firing for a specified time.
- **Throttling**: Executes the function *at most once* every specified interval, regardless of how many times the event occurs.

---

**Summary Table:**

| Technique   | Use Case Example      | Execution Timing            |
|-------------|----------------------|-----------------------------|
| Debouncing  | Search input, resize | After inactivity            |
| Throttling  | Scroll, mousemove    | At regular intervals        |
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:30:07.795365Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"664215b8-38cf-4ef6-be41-9dc61f22c39d",question:"How do you handle errors in JavaScript?",answer:`\`\`\`markdown
### How to Handle Errors in JavaScript

In JavaScript, errors can be handled using the \`try...catch\` statement. This allows you to catch exceptions (errors) that occur in a block of code and handle them gracefully, preventing your program from crashing.

#### Basic Syntax

\`\`\`javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
}
\`\`\`

#### Example

\`\`\`javascript
try {
  let result = someUndefinedFunction(); // This will throw an error
} catch (error) {
  console.error("An error occurred:", error.message);
}
\`\`\`

#### \`finally\` Block

You can also use a \`finally\` block, which will always execute after \`try\` and \`catch\`, regardless of whether an error was thrown.

\`\`\`javascript
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
} finally {
  // Always runs
}
\`\`\`

#### Throwing Custom Errors

You can throw your own errors using the \`throw\` statement:

\`\`\`javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (error) {
  console.error(error.message);
}
\`\`\`

#### Handling Errors in Asynchronous Code

For promises and async/await, use \`.catch()\` or \`try...catch\` with \`async\` functions:

\`\`\`javascript
// Using .catch()
fetch('https://api.example.com/data')
  .then(response => response.json())
  .catch(error => console.error('Fetch error:', error));

// Using async/await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Async error:', error);
  }
}
\`\`\`

---

**Summary:**  
Use \`try...catch\` (and optionally \`finally\`) to handle errors in synchronous code, and use \`.catch()\` or \`try...catch\` with \`async/await\` for asynchronous code. You can also throw custom errors using the \`throw\` statement.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795372Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"63a117ef-6fa2-43e9-945a-9278008c1ad7",question:"What is JSON and how do you parse and stringify it in JavaScript?",answer:`\`\`\`markdown **JSON (JavaScript Object Notation)** is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used to transmit data between a server and a web application.

### Parsing JSON

To convert a JSON string into a JavaScript object, use \`JSON.parse()\`:

\`\`\`javascript
const jsonString = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // Output: Alice
console.log(obj.age);  // Output: 25
\`\`\`

### Stringifying JSON

To convert a JavaScript object into a JSON string, use \`JSON.stringify()\`:

\`\`\`javascript
const obj = { name: "Bob", age: 30 };
const jsonString = JSON.stringify(obj);

console.log(jsonString); // Output: {"name":"Bob","age":30}
\`\`\`

### Summary Table

| Operation    | Method             | Example                          |
|--------------|--------------------|----------------------------------|
| Parse JSON   | \`JSON.parse()\`     | \`JSON.parse('{"a":1}')\`          |
| Stringify    | \`JSON.stringify()\` | \`JSON.stringify({a:1})\`          |

**Note:** JSON only supports certain data types (objects, arrays, strings, numbers, booleans, and null). Functions and undefined values are not preserved when stringifying.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795379Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"3317abb3-b226-4848-95dd-317a1d01f2df",question:"What are Map and Set objects in JavaScript?",answer:`\`\`\`markdown ### Map and Set Objects in JavaScript

#### **Map**

A **Map** is a built-in JavaScript object that allows you to store key-value pairs. Unlike regular objects, the keys in a Map can be of any data type (not just strings or symbols).

**Key Features:**
- Maintains the insertion order of keys.
- Keys can be any value (objects, functions, primitives).
- Provides useful methods like \`.set()\`, \`.get()\`, \`.has()\`, \`.delete()\`, and \`.clear()\`.

**Example:**
\`\`\`javascript
const map = new Map();
map.set('name', 'Alice');
map.set(1, 'one');
map.set(true, 'yes');

console.log(map.get('name')); // Alice
console.log(map.has(1));      // true
console.log(map.size);        // 3
\`\`\`

---

#### **Set**

A **Set** is a collection of unique values. It only stores distinct values, meaning duplicates are automatically removed.

**Key Features:**
- Values can be of any type.
- Maintains insertion order.
- Provides methods like \`.add()\`, \`.has()\`, \`.delete()\`, and \`.clear()\`.

**Example:**
\`\`\`javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate, will be ignored
set.add('hello');

console.log(set.has(1));   // true
console.log(set.size);     // 3
\`\`\`

---

**Summary Table:**

| Feature      | Map                         | Set                   |
|--------------|-----------------------------|-----------------------|
| Stores       | Key-value pairs              | Unique values         |
| Key/Value    | Any type                     | Any type (values only)|
| Order        | Insertion order              | Insertion order       |
| Duplicates   | Keys must be unique          | Values must be unique |

Both Map and Set are useful for managing collections of data with unique keys or values, offering better performance and flexibility compared to plain objects and arrays in certain scenarios.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795386Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"fa277b79-5840-41ac-9244-54c1a0e0be8b",question:"How do you make HTTP requests in JavaScript?",answer:`\`\`\`markdown You can make HTTP requests in JavaScript using several methods. The most common modern approaches are the Fetch API and the older XMLHttpRequest. Here’s how you can use them:

## 1. Using the Fetch API

The Fetch API is the modern way to make HTTP requests. It returns Promises and is easy to use:

\`\`\`javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON data
  })
  .then(data => {
    console.log(data); // Use the data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
\`\`\`

### Sending Data (POST Request)

\`\`\`javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
})
  .then(response => response.json())
  .then(data => console.log(data));
\`\`\`

## 2. Using XMLHttpRequest (Older Way)

\`\`\`javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error('Request failed. Status:', xhr.status);
  }
};
xhr.send();
\`\`\`

## 3. Using Third-Party Libraries (e.g., Axios)

You can also use libraries like Axios for simpler syntax and additional features:

\`\`\`javascript
// First, install axios: npm install axios
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
\`\`\`

---

**Summary:**  
- Use \`fetch()\` for modern, promise-based HTTP requests.
- Use \`XMLHttpRequest\` for older browser support.
- Consider libraries like Axios for more features and easier syntax.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795393Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"ca810ecb-f441-422c-81d5-250a7b53496c",question:"What is localStorage and sessionStorage?",answer:`\`\`\`markdown **localStorage** and **sessionStorage** are two types of Web Storage objects in JavaScript that allow you to store key-value pairs in a user's browser.

---

### localStorage

- **Persistence:** Data stored in localStorage has no expiration time. It remains even after the browser is closed and reopened.
- **Scope:** Data is accessible only within the same origin (protocol, host, and port).
- **Capacity:** Typically allows up to 5-10MB of data per origin.
- **Usage Example:**

  \`\`\`javascript
  // Store data
  localStorage.setItem('username', 'js_hero');

  // Retrieve data
  const user = localStorage.getItem('username');

  // Remove data
  localStorage.removeItem('username');

  // Clear all data
  localStorage.clear();
  \`\`\`

---

### sessionStorage

- **Persistence:** Data is only available for the duration of the page session (as long as the browser tab is open). Once the tab is closed, the data is deleted.
- **Scope:** Data is accessible only within the same tab and origin.
- **Capacity:** Similar to localStorage, but separate for each tab.
- **Usage Example:**

  \`\`\`javascript
  // Store data
  sessionStorage.setItem('session_id', '12345');

  // Retrieve data
  const sessionId = sessionStorage.getItem('session_id');

  // Remove data
  sessionStorage.removeItem('session_id');

  // Clear all data
  sessionStorage.clear();
  \`\`\`

---

### Key Differences

| Feature         | localStorage                | sessionStorage              |
|-----------------|----------------------------|-----------------------------|
| Persistence     | Until manually cleared      | Until tab/window is closed  |
| Scope           | Per origin                  | Per tab and origin          |
| Capacity        | 5-10MB (varies by browser)  | 5-10MB (varies by browser)  |

---

**Note:** Both localStorage and sessionStorage store data as strings. If you need to store objects or arrays, use \`JSON.stringify()\` and \`JSON.parse()\`.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795399Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"757ee217-bd2b-4aeb-9de0-1e03bc359cfc",question:"How do you prevent default behavior in event handling?",answer:`\`\`\`markdown To prevent the default behavior of an event in JavaScript (such as stopping a form from submitting or a link from navigating), you use the event object's .preventDefault() method inside your event handler function.

**Example: Preventing form submission**

\`\`\`javascript
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Stops the form from submitting
  alert('Form submission prevented!');
});
\`\`\`

**Example: Preventing link navigation**

\`\`\`javascript
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault(); // Stops the link from navigating
  alert('Link navigation prevented!');
});
\`\`\`

**Summary:**  
Call \`event.preventDefault()\` inside your event handler to stop the browser's default action for that event.`,level:"Intermediate",created_at:"2025-04-20T11:30:07.795406Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"},{id:"857ab5d8-ca16-4625-8663-0b3813d7a9f8",question:"What is a service worker in JavaScript?",answer:`\`\`\`markdown A **service worker** in JavaScript is a type of web worker that acts as a programmable network proxy, allowing you to intercept and control network requests, cache resources, and enable offline experiences for web applications.

### Key Features

- **Runs in the background:** Service workers operate separately from the main browser thread, enabling background tasks without blocking the UI.
- **Intercepts network requests:** They can intercept and modify network requests, making it possible to serve cached content or custom responses.
- **Enables offline functionality:** By caching assets and data, service workers allow web apps to function without an internet connection.
- **Supports push notifications and background sync:** Service workers can handle push messages and synchronize data in the background.

### How Service Workers Work

1. **Registration:** The service worker script is registered in your main JavaScript code.
2. **Installation:** The browser installs the service worker and triggers the install event.
3. **Activation:** After installation, the service worker activates and takes control of the page.
4. **Event Handling:** The service worker listens for events like fetch (network requests), push (notifications), and sync (background sync).

### Example

\`\`\`javascript
// Registering a service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registered:', registration);
    })
    .catch(error => {
      console.error('Registration failed:', error);
    });
}
\`\`\`

\`\`\`javascript
// service-worker.js
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
\`\`\`

### Use Cases

- Offline-first web applications (Progressive Web Apps)
- Resource caching for faster load times
- Background data synchronization
- Push notifications

### Limitations

- Runs only over HTTPS (except on localhost)
- Does not have direct access to the DOM
- Lifecycle is independent of web pages

---

**In summary:**  
A service worker is a powerful JavaScript feature that enables advanced capabilities like offline support, caching, and background processing, making modern web applications more reliable and performant.`,level:"Advanced",created_at:"2025-04-20T11:30:07.795413Z",topic:"9c852d8e-5ed8-4a17-b710-12be9ceba95a"}];export{e as default};
