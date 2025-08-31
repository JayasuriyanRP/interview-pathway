const e=[{id:"b5fc1649-8cb8-4270-8a8d-b1d6428b4632",question:"What is the syntax for declaring a generic function in TypeScript?",answer:`\`\`\`markdown
In TypeScript, a generic function is declared by placing a type parameter in angle brackets (<>) before the function’s parameter list. Here’s the syntax:

\`\`\`typescript
function functionName<T>(parameter: T): T {
  // function body
  return parameter;
}
\`\`\`

- \`T\` is a type variable representing any type.
- You can use multiple type parameters, e.g., \`<T, U>\`.
- The type parameter can be used for parameter types, return types, or within the function body.

**Example:**

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42); // num: number
const str = identity<string>("hello"); // str: string
\`\`\`
\`\`\``,level:"Intermediate",created_at:"2025-04-20T08:54:31.681547Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"f51ac6db-dadb-4ca6-86fb-c6694a75dba7",question:"How do you specify default values for function parameters in TypeScript?",answer:`\`\`\`markdown You can specify default values for function parameters in TypeScript by assigning a value to the parameter in the function declaration. If the caller does not provide an argument for that parameter, the default value will be used.

\`\`\`typescript
function greet(name: string = "Guest"): void {
  console.log(\`Hello, \${name}!\`);
}

greet();          // Output: Hello, Guest!
greet("Alice");   // Output: Hello, Alice!
\`\`\`

**Key Points:**
- Default values are assigned using the = operator in the parameter list.
- Parameters with default values are considered optional.
- If a value is provided when calling the function, it overrides the default.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681554Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"85eee635-63d1-49e5-9cbd-2a7a7d6da107",question:"How do you define a function with rest parameters in TypeScript?",answer:`\`\`\`markdown To define a function with rest parameters in TypeScript, use the ... (spread) syntax before the parameter name, and specify the type of the elements in the array. Here’s the syntax:

\`\`\`typescript
function functionName(...args: Type[]): ReturnType {
  // function body
}
\`\`\`

**Example:**

\`\`\`typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
\`\`\`

- ...numbers: number[] means numbers is an array of numbers.
- You can pass any number of arguments to the function, and they will be available as an array.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681562Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"e105e17f-39ab-4580-9c62-618d1c2a1c35",question:"What is the syntax for type assertion in TypeScript?",answer:`\`\`\`markdown Type assertion in TypeScript is a way to tell the compiler to treat a value as a specific type. There are two syntaxes for type assertion:

1. Angle-bracket syntax:

\`\`\`typescript
let someValue: any = "Hello, TypeScript!";
let strLength: number = (<string>someValue).length;
\`\`\`

2. as-syntax (recommended, especially in JSX/TSX files):

\`\`\`typescript
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
\`\`\`

Both syntaxes achieve the same result, but the as-syntax is preferred for compatibility with JSX.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681579Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"7a28d6c4-3ceb-4981-b91c-00b50ed85456",question:"How do you use intersection types in TypeScript?",answer:`\`\`\`markdown ## Using Intersection Types in TypeScript

Intersection types in TypeScript allow you to combine multiple types into one. An intersection type is created using the \`&\` operator. The resulting type will have all the properties and methods of the combined types.

### Syntax

\`\`\`typescript
type TypeA = { a: number };
type TypeB = { b: string };

type Combined = TypeA & TypeB;
\`\`\`

### Example Usage

\`\`\`typescript
type Person = { name: string };
type Employee = { employeeId: number };

type EmployeePerson = Person & Employee;

const john: EmployeePerson = {
  name: "John Doe",
  employeeId: 1234
};
\`\`\`

In this example, \`EmployeePerson\` must have all properties from both \`Person\` and \`Employee\`.

### When to Use

Use intersection types when you want to create a type that must satisfy multiple type requirements at once.

---

**Summary:**  
Use the \`&\` operator to combine types in TypeScript, ensuring the resulting type includes all properties from the intersected types.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681587Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"01ba7f59-ebad-463b-87f9-8fd7896b21a4",question:"How do you extend an interface in TypeScript?",answer:`\`\`\`markdown You can extend an interface in TypeScript using the extends keyword. This allows you to create a new interface that inherits the properties of one or more existing interfaces.

\`\`\`typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 1234
};
\`\`\`

You can also extend multiple interfaces by separating them with commas:

\`\`\`typescript
interface Contact {
  email: string;
}

interface Manager extends Person, Contact {
  department: string;
}
\`\`\`

This way, the new interface combines all properties from the extended interfaces.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681595Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"01056e6e-0275-4af0-a6d0-97103d21fb54",question:"What is the syntax for declaring a function type in TypeScript?",answer:"```markdown\nIn TypeScript, you can declare a function type using either a type alias or an interface. The syntax specifies the parameter types and the return type.\n\n**Using a type alias:**\n```typescript\ntype GreetFunction = (name: string, age: number) => string;\n```\n\n**Using an interface:**\n```typescript\ninterface GreetFunction {\n  (name: string, age: number): string;\n}\n```\n\n**Example usage:**\n```typescript\nconst greet: GreetFunction = (name, age) => {\n  return `Hello, ${name}. You are ${age} years old.`;\n};\n```\n```",level:"Intermediate",created_at:"2025-04-20T08:54:31.681602Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"889566aa-502c-4381-9ada-14ef928ea7a6",question:"How do you define an abstract class in TypeScript?",answer:`\`\`\`markdown In TypeScript, you define an abstract class using the abstract keyword. An abstract class cannot be instantiated directly and can contain both abstract methods (methods without implementation) and concrete methods (methods with implementation). Subclasses must implement all abstract methods.

Here’s an example:

\`\`\`typescript
abstract class Animal {
  abstract makeSound(): void; // Abstract method

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof!
dog.move();      // Output: Moving...
\`\`\`

**Key Points:**
- Use the abstract keyword before class and method declarations.
- Abstract methods do not have a body and must be implemented by subclasses.
- Abstract classes can have regular methods with implementations.
- You cannot create an instance of an abstract class directly.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681611Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"d89a9f98-a18e-4195-9f2d-363adf34bb6c",question:"How do you use the 'implements' keyword with multiple interfaces in TypeScript?",answer:`\`\`\`markdown In TypeScript, you can use the implements keyword to make a class conform to one or more interfaces. To implement multiple interfaces, separate them with commas after the implements keyword.

**Example:**

\`\`\`typescript
interface Printable {
  print(): void;
}

interface Scannable {
  scan(): void;
}

class MultiFunctionPrinter implements Printable, Scannable {
  print(): void {
    console.log("Printing document...");
  }
  scan(): void {
    console.log("Scanning document...");
  }
}
\`\`\`

**Explanation:**

- The class MultiFunctionPrinter implements both Printable and Scannable interfaces.
- It must provide concrete implementations for all methods defined in both interfaces.

**Syntax:**
\`\`\`typescript
class ClassName implements Interface1, Interface2, ... {
  // class body
}
\`\`\`

This allows a class to adhere to multiple contracts, ensuring it provides all required methods and properties.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681620Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"09db662a-3f3f-4671-9b04-7275af355e1e",question:"What is the syntax for declaring a module in TypeScript?",answer:`\`\`\`typescript
// Declaring a module in TypeScript

declare module 'module-name' {
  // Export types, interfaces, functions, classes, etc.
  export function myFunction(param: string): number;
  export interface MyInterface {
    id: number;
    name: string;
  }
  // ...other declarations
}
\`\`\`

**Explanation:**
- Use \`declare module 'module-name' { ... }\` to declare the shape of a module, especially for external modules without type definitions.
- Inside the module block, you can declare exports such as functions, interfaces, types, or classes.
- This is commonly used in \`.d.ts\` (declaration) files.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681628Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"c9eb6823-7bd9-4b7e-a5ea-732934facace",question:"How do you define a generic interface in TypeScript?",answer:`\`\`\`markdown To define a generic interface in TypeScript, you use angle brackets <> to specify one or more type parameters. These type parameters can then be used within the interface to make it flexible and reusable for different types.

Here’s the syntax:

\`\`\`typescript
interface MyInterface<T> {
  value: T;
  getValue: () => T;
}
\`\`\`

You can use multiple type parameters if needed:

\`\`\`typescript
interface Pair<K, V> {
  key: K;
  value: V;
}
\`\`\`

**Example usage:**

\`\`\`typescript
const numberItem: MyInterface<number> = {
  value: 42,
  getValue: () => 42
};

const stringPair: Pair<string, string> = {
  key: "id",
  value: "1234"
};
\`\`\`

**Summary:**  
A generic interface is defined by adding type parameters in angle brackets after the interface name, allowing the interface to work with various types.`,level:"Advanced",created_at:"2025-04-20T08:54:31.681693Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"80782d8b-81fa-46a9-a5ff-ebd7138768e8",question:"How do you use utility types like Partial, Pick, and Omit in TypeScript?",answer:`\`\`\`markdown
In TypeScript, utility types like \`Partial\`, \`Pick\`, and \`Omit\` help you manipulate and transform existing types in flexible ways. Here’s how you use each:

### 1. \`Partial<Type>\`

- **Purpose:** Makes all properties of \`Type\` optional.
- **Use case:** When you want to allow objects with only some properties of a type.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser = (id: number, userData: Partial<User>) => {
  // userData can have any subset of User's properties
};
\`\`\`

---

### 2. \`Pick<Type, Keys>\`

- **Purpose:** Constructs a type by picking a set of properties \`Keys\` from \`Type\`.
- **Use case:** When you only need a subset of properties from a type.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, 'id' | 'name'>;

const user: UserPreview = {
  id: 1,
  name: "Alice"
  // email is not required
};
\`\`\`

---

### 3. \`Omit<Type, Keys>\`

- **Purpose:** Constructs a type by omitting a set of properties \`Keys\` from \`Type\`.
- **Use case:** When you want all properties except a few.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User, 'email'>;

const user: UserWithoutEmail = {
  id: 1,
  name: "Bob"
  // email is not allowed
};
\`\`\`

---

### Summary Table

| Utility Type      | Description                              | Example Syntax                      |
|-------------------|------------------------------------------|-------------------------------------|
| \`Partial<Type>\`   | All properties optional                  | \`Partial<User>\`                     |
| \`Pick<Type, K>\`   | Only specified properties                | \`Pick<User, 'id' | 'name'>\`         |
| \`Omit<Type, K>\`   | All except specified properties          | \`Omit<User, 'email'>\`               |

These utility types are essential for creating flexible, type-safe code in TypeScript.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:31.681700Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"71f7e756-e35d-4910-9a7e-6d7a95440db5",question:"What is the syntax for declaring a function overload in TypeScript?",answer:`\`\`\`markdown
In TypeScript, function overloads are declared by writing multiple function signatures for the same function name, followed by a single implementation. The syntax is:

\`\`\`typescript
// Overload signatures
function funcName(param1: TypeA): ReturnTypeA;
function funcName(param1: TypeB, param2: TypeC): ReturnTypeB;

// Implementation signature
function funcName(param1: any, param2?: any): any {
  // Function implementation
}
\`\`\`

**Example:**

\`\`\`typescript
// Overload signatures
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Implementation
function add(a: any, b: any): any {
  return a + b;
}

// Usage
const sum = add(1, 2);         // sum: number
const concat = add('a', 'b');  // concat: string
\`\`\`

**Key Points:**
- Only one implementation is provided, after all overload signatures.
- The implementation must be compatible with all overloads.
- Overload signatures define the allowed call patterns and their return types.
\`\`\``,level:"Advanced",created_at:"2025-04-20T08:54:31.681707Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"6e5c3ef1-c721-4c87-84d0-e804beeedb2a",question:"How do you use access modifiers (public, private, protected) in TypeScript classes?",answer:`\`\`\`markdown
In TypeScript, access modifiers are used to control the visibility of class members (properties and methods). The three main access modifiers are:

- \`public\`: Members are accessible from anywhere. This is the default if no modifier is specified.
- \`private\`: Members are accessible only within the class they are declared.
- \`protected\`: Members are accessible within the class and its subclasses (derived classes).

**Example:**

\`\`\`typescript
class Person {
  public name: string;         // Can be accessed from anywhere
  private age: number;         // Can only be accessed within Person
  protected address: string;   // Can be accessed in Person and subclasses

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public greet() {
    console.log(\`Hello, my name is \${this.name}.\`);
  }

  private getAge() {
    return this.age;
  }

  protected getAddress() {
    return this.address;
  }
}

class Employee extends Person {
  public jobTitle: string;

  constructor(name: string, age: number, address: string, jobTitle: string) {
    super(name, age, address);
    this.jobTitle = jobTitle;
  }

  public showAddress() {
    // Can access protected member from base class
    console.log(\`Address: \${this.address}\`);
  }
}

const person = new Person('Alice', 30, '123 Main St');
console.log(person.name);      // OK (public)
// console.log(person.age);    // Error (private)
// console.log(person.address);// Error (protected)
person.greet();                // OK (public method)
\`\`\`

**Summary Table:**

| Modifier   | Accessible within class | Accessible in subclass | Accessible outside class |
|------------|:----------------------:|:---------------------:|:-----------------------:|
| public     |           ✔            |          ✔            |           ✔             |
| protected  |           ✔            |          ✔            |           ✘             |
| private    |           ✔            |          ✘            |           ✘             |
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681802Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"68b6275b-24b6-40d9-aa05-3178aed97683",question:"How do you declare a static property or method in a TypeScript class?",answer:`\`\`\`markdown To declare a static property or method in a TypeScript class, use the static keyword before the property or method name. Static members belong to the class itself, not to instances of the class.

\`\`\`typescript
class MyClass {
  static staticProperty: string = "I am static";

  static staticMethod(): void {
    console.log("This is a static method.");
  }
}

// Accessing static members
console.log(MyClass.staticProperty); // Output: I am static
MyClass.staticMethod();              // Output: This is a static method.
\`\`\`

**Key Points:**
- Use static before the property or method.
- Access static members using the class name, not an instance.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681809Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"170b09dd-07fc-4aa1-9512-e5a2343d0fab",question:"What is the correct syntax to declare a variable with a string type in TypeScript?",answer:'```typescript\nlet myVariable: string;\n```\n\nYou can also assign a value when declaring:\n\n```typescript\nlet myVariable: string = "Hello, TypeScript!";\n```',level:"Beginner",created_at:"2025-04-20T08:54:31.681350Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"65feb9ff-f7e0-4ba4-b8e0-83e56b85abb0",question:"How do you define a function that takes two numbers and returns a number in TypeScript?",answer:`\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}
\`\`\`

- This function, add, takes two parameters (a and b), both of type number.
- The function returns a value of type number.`,level:"Beginner",created_at:"2025-04-20T08:54:31.681369Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"ea191971-02dd-4554-bfb6-5ef671d70006",question:"How do you specify an array of numbers in TypeScript?",answer:"```markdown You can specify an array of numbers in TypeScript using either of the following syntaxes:\n\n```typescript\nlet numbers: number[] = [1, 2, 3, 4, 5];\n```\n\nor\n\n```typescript\nlet numbers: Array<number> = [1, 2, 3, 4, 5];\n```\n\nBoth approaches are valid and commonly used.",level:"Beginner",created_at:"2025-04-20T08:54:31.681378Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"4cbf8915-62b5-4638-81c5-7db741691792",question:"What is the syntax for defining an interface in TypeScript?",answer:`\`\`\`typescript
interface InterfaceName {
  property1: type1;
  property2: type2;
  // ...more properties
  method1?(param: type): returnType; // optional method
}
\`\`\`

**Example:**
\`\`\`typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}
\`\`\``,level:"Beginner",created_at:"2025-04-20T08:54:31.681386Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"5536c6c1-0f9d-49c6-b2bf-c0bee7387b7e",question:"How do you make a property optional in a TypeScript interface?",answer:"```markdown To make a property optional in a TypeScript interface, add a question mark (?) after the property name. Here’s an example:\n\n```typescript\ninterface User {\n  name: string;\n  age?: number; // 'age' is optional\n}\n```\n\nIn this example, the age property is optional, so objects of type User may or may not include it.",level:"Beginner",created_at:"2025-04-20T08:54:31.681394Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"6dae8cf7-92d0-4271-98d4-863680dc19e2",question:"How do you declare a variable that can be either a string or a number?",answer:'```markdown You can declare a variable that can be either a string or a number in TypeScript by using a union type with the | (pipe) symbol. Here\'s how you do it:\n\n```typescript\nlet value: string | number;\n```\n\nThis means the variable value can hold either a string or a number. For example:\n\n```typescript\nvalue = "hello"; // valid\nvalue = 42;      // also valid\n```',level:"Beginner",created_at:"2025-04-20T08:54:31.681402Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"30653092-76a2-4519-8eae-81bd1e6b70b8",question:"What is the syntax for defining a tuple with a string and a number?",answer:'```typescript\nlet myTuple: [string, number];\n```\n\nThis defines a tuple type where the first element is a string and the second element is a number. For example:\n\n```typescript\nlet example: [string, number] = ["hello", 42];\n```',level:"Beginner",created_at:"2025-04-20T08:54:31.681409Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"ea8fb5bc-0a43-45dd-b4be-663bb03f664e",question:"How do you annotate the return type of a function in TypeScript?",answer:`\`\`\`markdown You can annotate the return type of a function in TypeScript by adding a colon : followed by the type after the parameter list and before the function body. Here’s the syntax:

\`\`\`typescript
function functionName(parameters): ReturnType {
  // function body
}
\`\`\`

**Example:**

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}
\`\`\`

In this example, the function add takes two numbers as parameters and is annotated to return a number.`,level:"Beginner",created_at:"2025-04-20T08:54:31.681417Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"99317e63-8ad7-46a4-8feb-944f177289bf",question:"How do you specify a readonly property in an interface?",answer:"```markdown You can specify a readonly property in a TypeScript interface by using the readonly modifier before the property name. Here’s an example:\n\n```typescript\ninterface User {\n  readonly id: number;\n  name: string;\n}\n```\n\nIn this example, the id property is readonly, meaning it can only be assigned a value when the object is created and cannot be changed afterwards.",level:"Beginner",created_at:"2025-04-20T08:54:31.681425Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"0517c67f-2d22-4e49-8369-ed9da48025c2",question:"What is the syntax for creating an enum in TypeScript?",answer:`\`\`\`typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}
\`\`\`

- Use the enum keyword followed by the name of the enum.
- List the enum members inside curly braces, separated by commas.`,level:"Beginner",created_at:"2025-04-20T08:54:31.681433Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"d5c9f3c3-5657-4019-b2a7-538b2887628e",question:"How do you use type aliases in TypeScript?",answer:`\`\`\`markdown You can use type aliases in TypeScript with the type keyword to give a name to a type. This is useful for simplifying complex types or reusing types in multiple places.

\`\`\`typescript
// Creating a type alias for a primitive type
type UserID = number;

let id: UserID = 123;

// Creating a type alias for an object type
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Alice",
  age: 25,
};

// Type alias for a union type
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
\`\`\`

**Summary:**  
Use type aliases to create custom names for types, making your code more readable and maintainable.`,level:"Beginner",created_at:"2025-04-20T08:54:31.681440Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"663dcbe7-9364-4a83-a226-962527c762ba",question:"How do you define a class and its constructor in TypeScript?",answer:`\`\`\`typescript
// Defining a class with a constructor in TypeScript

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Example usage:
const person1 = new Person("Alice", 25);
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 25
\`\`\`

**Explanation:**
- The class \`Person\` has two properties: \`name\` (string) and \`age\` (number).
- The \`constructor\` method initializes these properties when a new object is created.
- You can create a new instance of the class using the \`new\` keyword.`,level:"Beginner",created_at:"2025-04-20T08:54:31.681531Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"dd60a79a-93e5-449a-a10c-198135ebc8fe",question:"How do you implement an interface in a TypeScript class?",answer:`\`\`\`markdown To implement an interface in a TypeScript class, use the implements keyword after the class name, followed by the interface name. The class must then provide concrete implementations for all properties and methods defined in the interface.

\`\`\`typescript
// Define an interface
interface Animal {
  name: string;
  makeSound(): void;
}

// Implement the interface in a class
class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Woof!
\`\`\`

**Summary:**  
- Use implements to have a class follow an interface.
- The class must define all the interface's properties and methods.`,level:"Beginner",created_at:"2025-04-20T08:54:31.681539Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"e2d63819-05eb-4ecd-97b4-302f55b1c81b",question:"How do you use the 'as' keyword for type assertions?",answer:`\`\`\`markdown You can use the as keyword in TypeScript to perform a type assertion, which tells the compiler to treat a value as a specific type. This does not change the runtime type, but helps with type checking during development.

**Syntax:**
\`\`\`typescript
let value: any = "Hello, TypeScript!";
let strLength: number = (value as string).length;
\`\`\`

**Example:**
\`\`\`typescript
function getLength(input: unknown): number {
  // Assert that input is a string
  return (input as string).length;
}

const len = getLength("TypeScript"); // 10
\`\`\`

**Notes:**
- Type assertions are purely a compile-time construct and do not affect the generated JavaScript.
- Use type assertions when you know more about the type than TypeScript does.
- You can also use the angle-bracket syntax (<Type>value), but as is preferred, especially in JSX.

**Summary Table:**

| Syntax              | Example                        |
|---------------------|--------------------------------|
| Using as            | value as Type                  |
| Using angle brackets| <Type>value                    |

**Best Practice:**  
Use type assertions sparingly and only when you are certain of the value's type. Overusing them can lead to runtime errors.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681636Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"007ce7c2-b639-4413-a743-80f1d00e00bd",question:"How do you declare a variable with the 'any' type?",answer:'```markdown You can declare a variable with the any type in TypeScript using the following syntax:\n\n```typescript\nlet variableName: any;\n```\n\nFor example:\n\n```typescript\nlet data: any;\ndata = 5;\ndata = "Hello";\ndata = { key: "value" };\n```\n\nThe any type allows the variable to hold values of any type, effectively opting out of type checking for that variable.',level:"Intermediate",created_at:"2025-04-20T08:54:31.681643Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"c047cc82-69b4-41a7-83b6-74d3403690b7",question:"How do you use the 'never' type in TypeScript?",answer:`\`\`\`markdown
The \`never\` type in TypeScript represents values that never occur. It is typically used to annotate functions that never return (for example, functions that always throw an error or have infinite loops).

**Usage Examples:**

1. **Function that always throws an error:**
   \`\`\`typescript
   function throwError(message: string): never {
     throw new Error(message);
   }
   \`\`\`

2. **Function with an infinite loop:**
   \`\`\`typescript
   function infiniteLoop(): never {
     while (true) {}
   }
   \`\`\`

3. **Exhaustiveness checking in switch statements:**
   \`\`\`typescript
   type Shape = 'circle' | 'square';

   function getArea(shape: Shape): number {
     switch (shape) {
       case 'circle':
         return Math.PI * 1 * 1;
       case 'square':
         return 1 * 1;
       default:
         // If a new shape is added, TypeScript will error here
         const _exhaustiveCheck: never = shape;
         return _exhaustiveCheck;
     }
   }
   \`\`\`

**Summary:**  
Use \`never\` to indicate that a function does not return a value or to perform exhaustive checks in control flow statements.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681651Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"17b697aa-f4c1-43e0-93f1-cea0d5317096",question:"How do you define a function that returns void in TypeScript?",answer:'```markdown To define a function that returns void in TypeScript, you specify the return type as void after the parameter list. Here’s the syntax:\n\n```typescript\nfunction myFunction(): void {\n  console.log("This function returns nothing.");\n}\n```\n\n- The : void after the parentheses indicates that the function does not return any value.\n- If you try to return a value from this function, TypeScript will show an error.',level:"Intermediate",created_at:"2025-04-20T08:54:31.681658Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"fc5cbd6c-b60d-4cc2-a26d-a9e6106545dc",question:"How do you create a mapped type in TypeScript?",answer:`\`\`\`markdown
A mapped type in TypeScript is created by using the \`in\` keyword to iterate over the keys of an existing type (often using \`keyof\`). This allows you to construct new types by transforming each property in a given type.

**Syntax Example:**

\`\`\`typescript
type MappedType<T> = {
  [P in keyof T]: T[P];
};
\`\`\`

**Usage Example:**

Suppose you have an interface:

\`\`\`typescript
interface Person {
  name: string;
  age: number;
  active: boolean;
}
\`\`\`

You can create a mapped type that makes all properties optional:

\`\`\`typescript
type PartialPerson = {
  [K in keyof Person]?: Person[K];
};
// Equivalent to: { name?: string; age?: number; active?: boolean; }
\`\`\`

**Key Points:**
- \`[K in keyof T]\` iterates over all keys of type \`T\`.
- You can apply modifiers like \`?\` (optional) or \`readonly\`.
- You can transform property types as needed.

**Example with transformation:**

\`\`\`typescript
type Stringify<T> = {
  [K in keyof T]: string;
};

type StringifiedPerson = Stringify<Person>;
// { name: string; age: string; active: string; }
\`\`\`
\`\`\``,level:"Advanced",created_at:"2025-04-20T08:54:31.681666Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"61a7a5ad-ff96-4464-b9d8-8347b6ccfda9",question:"What is the syntax for conditional types in TypeScript?",answer:'```markdown\nIn TypeScript, **conditional types** allow you to express types that depend on a condition. The basic syntax is:\n\n```typescript\nT extends U ? X : Y\n```\n\n- `T` and `U` are types.\n- If `T` is assignable to `U`, the type resolves to `X`; otherwise, it resolves to `Y`.\n\n### Example\n\n```typescript\ntype IsString<T> = T extends string ? "Yes" : "No";\n\ntype A = IsString<string>;  // "Yes"\ntype B = IsString<number>;  // "No"\n```\n\n### Usage in Generics\n\nConditional types are often used with generics to create flexible, type-safe APIs.\n\n```typescript\ntype ElementType<T> = T extends (infer U)[] ? U : T;\n\ntype T1 = ElementType<number[]>; // number\ntype T2 = ElementType<string>;   // string\n```\n\n### Key Points\n\n- Conditional types can be nested.\n- They support distributive conditional types when used with union types.\n\n```typescript\ntype ToArray<T> = T extends any ? T[] : never;\n\ntype A = ToArray<string | number>; // string[] | number[]\n```\n```\n',level:"Advanced",created_at:"2025-04-20T08:54:31.681672Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"9b8d7341-30d9-43fc-b53e-b60bcaca7abf",question:"How do you use keyof and typeof operators in TypeScript?",answer:`\`\`\`markdown
In TypeScript, the \`keyof\` and \`typeof\` operators are powerful tools for creating type-safe code, especially when working with object types and values.

## \`typeof\` Operator

The \`typeof\` operator is used to get the type of a variable or property. This is particularly useful when you want to refer to the type of an existing variable or object.

**Example:**

\`\`\`typescript
const person = {
  name: "Alice",
  age: 30,
};

type Person = typeof person;
// Equivalent to:
// type Person = {
//   name: string;
//   age: number;
// }
\`\`\`

## \`keyof\` Operator

The \`keyof\` operator is used to get a union type of all the keys of an object type.

**Example:**

\`\`\`typescript
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// Equivalent to: "name" | "age"
\`\`\`

## Combining \`keyof\` and \`typeof\`

You can combine both operators to create types based on the keys of a specific object value.

**Example:**

\`\`\`typescript
const person = {
  name: "Alice",
  age: 30,
};

type PersonKeys = keyof typeof person;
// Equivalent to: "name" | "age"
\`\`\`

## Practical Usage Example

Suppose you want to write a function that only accepts valid keys of an object:

\`\`\`typescript
const settings = {
  volume: 10,
  brightness: 80,
};

function getSetting(key: keyof typeof settings) {
  return settings[key];
}

getSetting("volume");      // OK
getSetting("brightness");  // OK
getSetting("contrast");    // Error: Argument of type '"contrast"' is not assignable to parameter of type '"volume" | "brightness"'
\`\`\`

## Summary Table

| Operator | Usage Example              | Description                                 |
|----------|---------------------------|---------------------------------------------|
| \`typeof\` | \`typeof variableName\`      | Gets the type of a variable or property     |
| \`keyof\`  | \`keyof Type\`               | Gets a union of the keys of a type          |
| Combined | \`keyof typeof variableName\`| Gets the keys of the type of a variable     |
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:31.681679Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"c3bfed14-7c7e-42ed-8b8c-f8a8233647a3",question:"How do you create a type from the keys of an object in TypeScript?",answer:'```markdown\nYou can create a type from the keys of an object in TypeScript using the `keyof` operator. This operator extracts the keys of a given object type as a union of string (or number/symbol) literal types.\n\n**Example:**\n\n```typescript\nconst person = {\n  name: "Alice",\n  age: 30,\n  isAdmin: true\n};\n\n// Create a type from the keys of `person`\ntype PersonKeys = keyof typeof person;\n// Equivalent to: type PersonKeys = "name" | "age" | "isAdmin"\n```\n\n**Explanation:**\n\n- `typeof person` gets the type of the `person` object.\n- `keyof typeof person` produces a union type of its keys: `"name" | "age" | "isAdmin"`.\n\nThis technique is useful for creating utility types, ensuring type safety when working with object keys, and for generic programming in TypeScript.\n```',level:"Advanced",created_at:"2025-04-20T08:54:31.681686Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"3124a0fe-82a4-4fd4-82f5-befd0e0cd8cc",question:"How do you use the 'infer' keyword in conditional types?",answer:'```markdown\nThe `infer` keyword in TypeScript is used within conditional types to introduce a type variable that can be inferred from a type expression. It allows you to extract and name a type within the context of a conditional type, making it possible to manipulate or return that type.\n\n**Syntax Example:**\n\n```typescript\ntype UnwrapPromise<T> = T extends Promise<infer U> ? U : T;\n```\n\nIn this example:\n\n- `T extends Promise<infer U>` checks if `T` is a `Promise`.\n- If it is, `U` is inferred as the type the `Promise` resolves to.\n- The type resolves to `U` if `T` is a `Promise`, otherwise it resolves to `T`.\n\n**Usage Example:**\n\n```typescript\ntype A = UnwrapPromise<Promise<number>>; // A is number\ntype B = UnwrapPromise<string>;          // B is string\n```\n\n**General Pattern:**\n\n```typescript\ntype MyType<T> = T extends SomeType<infer U> ? U : DefaultType;\n```\n\n**Use Cases:**\n\n- Extracting tuple element types\n- Getting function parameter or return types\n- Unwrapping nested types\n\n**Example: Extracting function return type**\n\n```typescript\ntype ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;\n\nfunction foo(): string { return "hello"; }\ntype FooReturn = ReturnType<typeof foo>; // FooReturn is string\n```\n\n**Summary:**  \nUse `infer` within conditional types to capture and reuse types from complex type structures, enabling powerful type transformations and extractions.\n```\n',level:"Advanced",created_at:"2025-04-20T08:54:31.681714Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"08927ce9-6cd3-40c9-bd62-8f0b05f40947",question:"How do you use template literal types in TypeScript?",answer:`\`\`\`markdown
Template literal types in TypeScript allow you to construct types using string literal concatenation, similar to JavaScript's template literals. They are especially useful for creating complex string-based types, enforcing naming conventions, or generating union types from existing string types.

### Basic Syntax

\`\`\`typescript
type Greeting = \`Hello, \${string}\`;
\`\`\`

Here, \`Greeting\` can be any string that starts with \`Hello, \` followed by any string.

### Combining with Union Types

You can combine template literal types with union types to generate all possible combinations:

\`\`\`typescript
type Color = "red" | "blue";
type Shade = "light" | "dark";

type ColoredShade = \`\${Shade}-\${Color}\`;
// Equivalent to: "light-red" | "light-blue" | "dark-red" | "dark-blue"
\`\`\`

### Inferring Parts of a String (Pattern Matching)

Template literal types can be used with conditional types and the \`infer\` keyword to extract parts of a string:

\`\`\`typescript
type ExtractId<T> = T extends \`id:\${infer Id}\` ? Id : never;

type UserId = ExtractId<"id:12345">; // "12345"
\`\`\`

### Enforcing Naming Conventions

You can use template literal types to enforce specific string formats:

\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`;

const event: EventName = "onClick"; // Valid
\`\`\`

### Practical Example

Suppose you want to create types for API endpoints:

\`\`\`typescript
type Resource = "user" | "post";
type Method = "get" | "update";

type Endpoint = \`\${Method}-\${Resource}\`;
// "get-user" | "get-post" | "update-user" | "update-post"
\`\`\`

### Summary

- Template literal types use backticks and \`\${}\` placeholders.
- They can combine string literals, unions, and utility types.
- Useful for generating string unions, enforcing formats, and extracting substrings.

**References:**
- [TypeScript Handbook: Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:31.681721Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"9af932b8-0907-40df-b51e-8ef5d62075b0",question:"How do you specify a constructor signature in an interface?",answer:`\`\`\`markdown
In TypeScript, to specify a constructor signature in an interface, you use the \`new\` keyword followed by the parameter list and the return type. This is often used to describe classes that can be constructed with certain arguments.

**Syntax Example:**

\`\`\`typescript
interface MyConstructor {
  new (arg1: string, arg2: number): MyClass;
}

class MyClass {
  constructor(public name: string, public value: number) {}
}

// Usage:
function createInstance(ctor: MyConstructor, name: string, value: number) {
  return new ctor(name, value);
}

const instance = createInstance(MyClass, "example", 42);
\`\`\`

**Key Points:**
- The \`new\` signature in the interface describes the constructor.
- The return type is the type of the instance that will be created.
- This pattern is useful for factory functions or dependency injection.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:31.681728Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"9511fd4e-370b-4d45-b107-856e5cba9bce",question:"How do you use the 'this' type in TypeScript methods?",answer:`\`\`\`markdown
In TypeScript, the \`this\` type is a special type that refers to the type of the current class or object instance within a method. It allows you to specify that a method returns the same type as the class it belongs to, which is particularly useful for fluent APIs and method chaining.

### Example Usage

\`\`\`typescript
class Builder {
  value: number = 0;

  add(n: number): this {
    this.value += n;
    return this;
  }

  multiply(n: number): this {
    this.value *= n;
    return this;
  }
}

const b = new Builder();
b.add(5).multiply(2); // Method chaining works, type is Builder
\`\`\`

### Key Points

- The \`this\` type always refers to the type of the current class or object, even in subclasses.
- When a subclass extends a class with methods returning \`this\`, those methods will return the subclass type, not the base class type.

#### Example with Inheritance

\`\`\`typescript
class AdvancedBuilder extends Builder {
  subtract(n: number): this {
    this.value -= n;
    return this;
  }
}

const ab = new AdvancedBuilder();
ab.add(10).subtract(3).multiply(2); // All methods return AdvancedBuilder
\`\`\`

### Benefits

- Enables correct typing for method chaining.
- Supports polymorphic \`this\` for inheritance hierarchies.

### Summary

Use the \`this\` type in method signatures to ensure that methods return the current instance's type, supporting fluent APIs and correct typing in subclasses.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:31.681735Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"d867016b-e334-4e10-aa1c-3df14ce20e41",question:"How do you declare a function that never returns in TypeScript?",answer:"```markdown\nIn TypeScript, to declare a function that never returns (for example, a function that always throws an error or has an infinite loop), you use the `never` return type. This indicates that the function does not return any value to the caller, not even `undefined`.\n\n**Syntax Example:**\n\n```typescript\nfunction throwError(message: string): never {\n  throw new Error(message);\n}\n```\n\n**Explanation:**\n\n- The `never` type is used as the return type.\n- This tells TypeScript that the function will never successfully complete (it either throws an error or never finishes executing).\n\n**Another Example (infinite loop):**\n\n```typescript\nfunction infiniteLoop(): never {\n  while (true) {}\n}\n```\n```",level:"Advanced",created_at:"2025-04-20T08:54:31.681742Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"1c1adca2-d54e-4594-b6ab-75bdd9fcaa4d",question:"How do you use type guards in TypeScript?",answer:`\`\`\`markdown
## Using Type Guards in TypeScript

Type guards in TypeScript are techniques used to narrow down the type of a variable within a conditional block. They help the TypeScript compiler infer more specific types, enabling safer and more expressive code. Here are the main ways to use type guards:

### 1. \`typeof\` Type Guard

Used for primitive types (\`string\`, \`number\`, \`boolean\`, \`symbol\`, etc.):

\`\`\`typescript
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    // Here, padding is number
    return Array(padding + 1).join(" ") + value;
  }
  // Here, padding is string
  return padding + value;
}
\`\`\`

---

### 2. \`instanceof\` Type Guard

Used for class instances:

\`\`\`typescript
class Dog {
  bark() {}
}

class Cat {
  meow() {}
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // TypeScript knows animal is Dog
  } else {
    animal.meow(); // TypeScript knows animal is Cat
  }
}
\`\`\`

---

### 3. User-Defined Type Guards

Custom functions that return a type predicate (\`param is Type\`):

\`\`\`typescript
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim(); // animal is Fish here
  } else {
    animal.fly(); // animal is Bird here
  }
}
\`\`\`

---

### 4. \`in\` Operator Type Guard

Checks if a property exists on an object:

\`\`\`typescript
type Admin = { name: string; privileges: string[] };
type Employee = { name: string; startDate: Date };

function printEmployeeInformation(emp: Admin | Employee) {
  if ("privileges" in emp) {
    // emp is Admin
    console.log(emp.privileges);
  }
  if ("startDate" in emp) {
    // emp is Employee
    console.log(emp.startDate);
  }
}
\`\`\`

---

## Summary Table

| Syntax         | Use Case                | Example Keyword      |
|----------------|------------------------|---------------------|
| \`typeof\`       | Primitives              | \`typeof x === "string"\` |
| \`instanceof\`   | Class instances         | \`x instanceof MyClass\`  |
| User-defined   | Complex/nested types    | \`function isFoo(x): x is Foo\` |
| \`in\`           | Property existence      | \`"prop" in obj\`         |

Type guards are essential for writing robust, type-safe TypeScript code, especially when working with unions or complex types.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:31.681748Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"4bf0de9a-d25b-4c85-a337-6991aea4b58b",question:"How do you use the 'unknown' type and how is it different from 'any'?",answer:"```markdown\n### Using the `unknown` Type in TypeScript\n\nThe `unknown` type in TypeScript is a type-safe counterpart to `any`. It represents any value, but unlike `any`, you cannot interact with a value of type `unknown` without first performing some type checking or type assertion.\n\n#### Example: Declaring and Using `unknown`\n\n```typescript\nlet value: unknown;\n\nvalue = 42;         // OK\nvalue = \"hello\";    // OK\nvalue = { x: 10 };  // OK\n\n// Error: Object is of type 'unknown'.\n// let num: number = value;\n\n// Type narrowing is required:\nif (typeof value === \"number\") {\n  let num: number = value; // OK\n}\n```\n\n#### Key Differences Between `unknown` and `any`\n\n| Feature                | `any`                                  | `unknown`                              |\n|------------------------|----------------------------------------|----------------------------------------|\n| Assignment            | Can be assigned to any type             | Can only be assigned to `any` or `unknown` |\n| Property Access        | Allowed without checks                  | Not allowed without type checking      |\n| Method Calls           | Allowed without checks                  | Not allowed without type checking      |\n| Type Safety            | Unsafe (bypasses type checking)         | Safe (forces type checking)            |\n\n#### Example: Unsafe vs Safe\n\n```typescript\nlet a: any = 5;\na.foo(); // No error at compile time\n\nlet u: unknown = 5;\n// u.foo(); // Error: Object is of type 'unknown'\n```\n\n#### When to Use `unknown`\n\n- Use `unknown` when you want to accept any value but require explicit type checking before usage.\n- Prefer `unknown` over `any` to maintain type safety in your codebase.\n\n#### Summary\n\n- `unknown` is safer than `any` because it forces you to perform type checks before using the value.\n- Use `unknown` when you want flexibility but also want to prevent runtime errors due to unsafe operations.\n```\n",level:"Advanced",created_at:"2025-04-20T08:54:31.681755Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"51b9173b-30b3-497f-81d9-1dc6f1d0d578",question:"How do you create recursive types in TypeScript?",answer:`\`\`\`markdown
### Creating Recursive Types in TypeScript

In TypeScript, **recursive types** are types that reference themselves within their own definition. This is particularly useful for representing data structures like trees, linked lists, or nested objects.

#### Example: Recursive Type for a Tree Structure

\`\`\`typescript
type TreeNode = {
  value: string;
  children?: TreeNode[]; // Recursive reference
};
\`\`\`

Here, \`TreeNode\` contains an optional \`children\` property, which is an array of \`TreeNode\`—referencing itself.

#### Example: Recursive Type for a Nested Object

\`\`\`typescript
type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue }; // Recursive reference
\`\`\`

This \`JsonValue\` type can represent any valid JSON value, including nested arrays and objects.

#### Notes

- Recursive types must reference themselves in a way that allows TypeScript to resolve them (e.g., through properties or array elements).
- For complex recursion (especially with generics), you might need to use \`interface\` instead of \`type\` for better readability and compatibility.

#### Example: Recursive Linked List

\`\`\`typescript
type LinkedList<T> = {
  value: T;
  next?: LinkedList<T>; // Recursive reference
};
\`\`\`

#### Summary

To create a recursive type in TypeScript, simply have a type alias or interface that refers to itself within its definition, typically through properties or array elements.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:31.681762Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"39f6e530-4b16-40cf-b7f4-3dffb783bbc1",question:"How do you use the 'in' keyword for mapped types?",answer:`\`\`\`markdown
In TypeScript, the \`in\` keyword is used in mapped types to iterate over a union of keys (usually a union of string literal types) and create a new type by transforming each property.

**Syntax:**
\`\`\`typescript
type MappedType = {
  [K in Keys]: Type
}
\`\`\`
- \`Keys\` is a union of property names (e.g., \`"a" | "b" | "c"\`).
- \`K\` is a type variable representing each key in the union.
- \`Type\` can reference \`K\` to create property types dynamically.

**Example:**
\`\`\`typescript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean
};

interface Features {
  darkMode: () => void;
  newUserProfile: () => void;
}

type FeatureOptions = OptionsFlags<Features>;
// Equivalent to:
// type FeatureOptions = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// }
\`\`\`

**Custom Example:**
\`\`\`typescript
type Keys = "id" | "name" | "age";

type ReadonlyMapped = {
  readonly [K in Keys]: string;
};

// Result:
// type ReadonlyMapped = {
//   readonly id: string;
//   readonly name: string;
//   readonly age: string;
// }
\`\`\`

**Summary:**
- The \`in\` keyword in mapped types allows you to iterate over a set of keys and generate new property signatures, enabling powerful type transformations in TypeScript.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:31.681768Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"608a1ecb-4484-45c4-90f1-f1863160626e",question:"How do you use index signatures in interfaces?",answer:`\`\`\`markdown You can use index signatures in TypeScript interfaces to describe types for objects with dynamic keys, where the property names are not known in advance but their value types are consistent.

Here’s the syntax:

\`\`\`typescript
interface MyObject {
  [key: string]: number;
}
\`\`\`

This means any property with a string key will have a value of type number.

### Example

\`\`\`typescript
interface Scores {
  [studentName: string]: number;
}

const mathScores: Scores = {
  Alice: 95,
  Bob: 87,
  Charlie: 78,
};
\`\`\`

You can also use other key types, like \`number\`:

\`\`\`typescript
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];
\`\`\`

**Note:**  
If you declare other properties in the interface, their types must be compatible with the index signature’s value type.

\`\`\`typescript
interface PersonAges {
  [name: string]: number;
  oldest: number; // OK, number is compatible with number
}
\`\`\`

Index signatures are useful for representing objects with flexible property names but consistent value types.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681775Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"5f7565f2-7af8-4286-b970-52dd222f8da3",question:"How do you specify optional chaining in TypeScript?",answer:"```markdown You can specify optional chaining in TypeScript using the **?.** operator. This allows you to safely access deeply nested properties or call functions on objects that might be null or undefined, without causing a runtime error.\n\n**Syntax Example:**\n\n```typescript\ninterface User {\n  profile?: {\n    name?: string;\n    getAge?: () => number;\n  };\n}\n\nconst user: User = {};\n\n// Accessing a nested property safely\nconst userName = user.profile?.name; // Returns undefined if profile or name is undefined\n\n// Calling a method safely\nconst userAge = user.profile?.getAge?.(); // Returns undefined if getAge is undefined\n```\n\n**Explanation:**\n- `user.profile?.name` will return `undefined` instead of throwing an error if `profile` is `undefined`.\n- `user.profile?.getAge?.()` will only call `getAge` if both `profile` and `getAge` exist.\n\nOptional chaining is available in TypeScript 3.7 and later.",level:"Intermediate",created_at:"2025-04-20T08:54:31.681782Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"8a42240b-0e03-4d22-9500-ee723458f539",question:"How do you use nullish coalescing in TypeScript?",answer:`\`\`\`markdown You can use the nullish coalescing operator (??) in TypeScript to provide a default value when the left-hand operand is null or undefined. It works similarly to the logical OR (||) operator, but only considers null and undefined as "nullish" values, not other falsy values like 0, '', or false.

**Syntax Example:**

\`\`\`typescript
let value: string | null | undefined = null;
let result = value ?? "Default Value";

console.log(result); // Output: "Default Value"
\`\`\`

**Explanation:**

- If value is null or undefined, result will be "Default Value".
- If value is any other value (including '', 0, false), result will be value.

**Use Case Comparison:**

\`\`\`typescript
let count: number = 0;

let withOr = count || 10;      // Result: 10 (because 0 is falsy)
let withNullish = count ?? 10; // Result: 0  (because 0 is not null or undefined)
\`\`\`

**Summary:**  
Use ?? in TypeScript to safely assign default values only when a variable is null or undefined, without affecting other falsy values.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681789Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"},{id:"23dea27b-26fa-4439-9488-cb02f4515260",question:"How do you define a union of string literal types?",answer:`\`\`\`markdown You can define a union of string literal types in TypeScript by using the | (pipe) operator between the string literals. Here’s the syntax:

\`\`\`typescript
type Direction = "up" | "down" | "left" | "right";

let move: Direction;

move = "up";    // ✅ Valid
move = "left";  // ✅ Valid
move = "forward"; // ❌ Error: Type '"forward"' is not assignable to type 'Direction'
\`\`\`

This restricts the variable to only accept one of the specified string values.`,level:"Intermediate",created_at:"2025-04-20T08:54:31.681796Z",topic:"62bdb7c0-3251-4279-852a-5f618195ccac"}];export{e as default};
