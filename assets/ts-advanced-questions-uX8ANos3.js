const e=[{id:"ed0331a3-d4b2-401a-9637-a057fd37bcd4",question:"What is the purpose of the 'readonly' modifier in TypeScript?",answer:`\`\`\`markdown
The \`readonly\` modifier in TypeScript is used to make properties of an object immutable after their initial assignment. Once a property is marked as \`readonly\`, its value cannot be changed. This is particularly useful for creating objects with properties that should not be modified after they are initialized, ensuring immutability and reducing the risk of unintended side effects.

For example:

\`\`\`typescript
class Example {
  readonly id: number;

  constructor(id: number) {
    this.id = id; // Allowed: Initial assignment
  }

  updateId(newId: number) {
    // this.id = newId; // Error: Cannot assign to 'id' because it is a read-only property
  }
}

const example = new Example(1);
console.log(example.id); // Output: 1
// example.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
\`\`\`

In addition to classes, the \`readonly\` modifier can also be applied to interfaces and type aliases to enforce immutability for object properties.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418325Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"5e008a07-f931-42aa-a6e1-851779d29217",question:"How do you enforce immutability in TypeScript?",answer:`\`\`\`markdown
In TypeScript, immutability can be enforced using the following techniques:

1. **Readonly Properties**:
   Use the \`readonly\` modifier for class properties or object types to ensure that their values cannot be reassigned after initialization.
   \`\`\`typescript
   class Person {
       readonly name: string;

       constructor(name: string) {
           this.name = name;
       }
   }

   const person = new Person("John");
   // person.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
   \`\`\`

2. **Readonly Utility Type**:
   Use the \`Readonly<T>\` utility type to make all properties of an object type immutable.
   \`\`\`typescript
   interface User {
       id: number;
       name: string;
   }

   const user: Readonly<User> = { id: 1, name: "Alice" };
   // user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
   \`\`\`

3. **Readonly Arrays**:
   Use the \`readonly\` modifier for arrays to prevent modifications to the array's contents.
   \`\`\`typescript
   const numbers: readonly number[] = [1, 2, 3];
   // numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
   \`\`\`

4. **Immutability Libraries**:
   Use libraries like \`Immutable.js\` or \`Immer\` to enforce immutability in complex data structures. These libraries provide immutable data structures and utilities for working with them.

5. **Deep Readonly**:
   For deeply nested objects, you can create or use a utility type to recursively make all properties readonly.
   \`\`\`typescript
   type DeepReadonly<T> = {
       readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
   };

   interface Config {
       settings: {
           theme: string;
           language: string;
       };
   }

   const config: DeepReadonly<Config> = {
       settings: {
           theme: "dark",
           language: "en",
       },
   };

   // config.settings.theme = "light"; // Error: Cannot assign to 'theme' because it is a read-only property.
   \`\`\`

By combining these techniques, you can enforce immutability in TypeScript effectively, ensuring that your data structures remain consistent and unmodifiable.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:58:41.418430Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"dea08a72-5205-4b4e-994c-3a762e8c338d",question:"What is TypeScript, and how does it differ from JavaScript?",answer:`\`\`\`markdown
TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, interfaces, and other features to enhance the development experience and catch errors during development. 

The key differences between TypeScript and JavaScript are:

1. **Static Typing**: TypeScript allows developers to define types for variables, function parameters, and return values, enabling type checking at compile time. JavaScript is dynamically typed, meaning types are determined at runtime.

2. **Compilation**: TypeScript code needs to be compiled (or transpiled) into JavaScript before it can be executed in a browser or Node.js environment. JavaScript, on the other hand, runs directly without compilation.

3. **Enhanced Tooling**: TypeScript provides better support for IDEs and text editors, offering features like autocompletion, refactoring, and type checking, which improve developer productivity.

4. **Advanced Features**: TypeScript introduces features like interfaces, enums, generics, and access modifiers, which are not available in plain JavaScript.

5. **Backward Compatibility**: TypeScript is fully compatible with JavaScript, meaning any valid JavaScript code is also valid TypeScript code.

In summary, TypeScript builds upon JavaScript by adding static typing and other features, making it a powerful tool for developing large-scale, maintainable applications.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:58:41.418200Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"ac65ba82-fd62-4c07-9f74-bd44245121e8",question:"How do you define and use interfaces in TypeScript?",answer:`\`\`\`markdown
In TypeScript, interfaces are used to define the structure of an object. They act as a contract that specifies the properties and methods an object must have. Interfaces are particularly useful for type-checking and ensuring consistency in your code.

### Defining an Interface
You can define an interface using the \`interface\` keyword. Here's an example:

\`\`\`typescript
interface Person {
  name: string;
  age: number;
  greet(): string;
}
\`\`\`

In this example:
- \`name\` is a string property.
- \`age\` is a number property.
- \`greet\` is a method that returns a string.

### Using an Interface
You can use an interface to type-check objects or function parameters:

\`\`\`typescript
const person: Person = {
  name: "John",
  age: 30,
  greet() {
    return \`Hello, my name is \${this.name}\`;
  },
};

console.log(person.greet());
\`\`\`

### Optional Properties
You can make properties optional by adding a \`?\` after the property name:

\`\`\`typescript
interface Person {
  name: string;
  age?: number; // Optional property
}
\`\`\`

### Readonly Properties
You can make properties read-only using the \`readonly\` modifier:

\`\`\`typescript
interface Person {
  readonly id: number;
  name: string;
}
\`\`\`

### Extending Interfaces
Interfaces can extend other interfaces to inherit their properties:

\`\`\`typescript
interface Employee extends Person {
  position: string;
}
\`\`\`

### Function Interfaces
You can define the structure of a function using an interface:

\`\`\`typescript
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;
\`\`\`

### Conclusion
Interfaces in TypeScript provide a powerful way to define and enforce the shape of objects, ensuring your code is robust and maintainable.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:58:41.418242Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"aa4bbfd8-2d60-4cc2-b48c-74b30338f3d2",question:"What are the benefits of using TypeScript in a project?",answer:`\`\`\`markdown
### Benefits of Using TypeScript in a Project

1. **Static Typing**: TypeScript provides static typing, which helps catch errors at compile time rather than runtime, leading to more robust and error-free code.

2. **Improved Developer Experience**: With features like IntelliSense, autocompletion, and type checking, TypeScript enhances productivity and makes it easier to work with large codebases.

3. **Better Code Maintainability**: TypeScript enforces strict typing and clear interfaces, making the code easier to read, understand, and maintain over time.

4. **Enhanced Collaboration**: Strong typing and explicit contracts between components make it easier for teams to collaborate, as the code becomes more predictable and self-documenting.

5. **Early Bug Detection**: By catching type-related errors during development, TypeScript reduces the likelihood of runtime errors in production.

6. **Seamless Integration with JavaScript**: TypeScript is a superset of JavaScript, allowing developers to gradually adopt it in existing projects without rewriting the entire codebase.

7. **Support for Modern JavaScript Features**: TypeScript supports ES6+ features and compiles them down to compatible JavaScript for older environments.

8. **Rich Ecosystem and Tooling**: TypeScript has excellent support in IDEs, build tools, and frameworks, making it easy to integrate into modern development workflows.

9. **Improved Refactoring**: The strong typing system makes refactoring safer and more efficient, as the compiler ensures that changes are consistent throughout the codebase.

10. **Community and Ecosystem**: TypeScript has a large and active community, providing extensive resources, libraries, and support for developers.

By using TypeScript, developers can create more reliable, maintainable, and scalable applications while reducing development time and debugging efforts.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:58:41.418254Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"0be107ec-0555-48e6-96eb-70b3533e8a0b",question:"How do you declare a variable with a specific type in TypeScript?",answer:'```markdown\nIn TypeScript, you can declare a variable with a specific type by using a colon (`:`) followed by the type after the variable name. For example:\n\n```typescript\nlet myVariable: string = "Hello, TypeScript!";\n```\n\nIn this example, `myVariable` is explicitly declared as a `string` type. This ensures that the variable can only hold string values, and TypeScript will throw an error if you try to assign a value of a different type.\n```',level:"Beginner",created_at:"2025-03-28T17:58:41.418265Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"ef9118a5-05b4-4bca-899a-df8ae61e3951",question:"What is the purpose of the 'Omit' utility type in TypeScript?",answer:"```markdown\nThe `Omit` utility type in TypeScript is used to create a new type by excluding one or more properties from an existing type. It is particularly useful when you want to work with a subset of an existing type but need to exclude specific fields.\n\n### Syntax:\n```typescript\nOmit<Type, Keys>\n```\n\n- `Type`: The original type from which properties will be omitted.\n- `Keys`: The keys (property names) to exclude from the original type.\n\n### Example:\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n}\n\ntype PublicUser = Omit<User, 'password'>;\n\n// PublicUser will be:\n// {\n//   id: number;\n//   name: string;\n//   email: string;\n// }\n```\n\nIn this example, the `Omit` utility removes the `password` property from the `User` type, creating a new `PublicUser` type that excludes sensitive information.\n\n### Purpose:\nThe primary purpose of `Omit` is to simplify type manipulation by allowing developers to exclude specific properties from a type without having to redefine the entire structure manually.\n```",level:"Intermediate",created_at:"2025-03-28T17:58:41.418532Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"42336965-ee88-44e6-9a4f-af305496dcad",question:"What are type annotations, and how are they used in TypeScript?",answer:`\`\`\`markdown
### What are Type Annotations, and How Are They Used in TypeScript?

Type annotations in TypeScript are a way to explicitly declare the types of variables, function parameters, return values, or object properties. They help ensure type safety by allowing the TypeScript compiler to catch type-related errors during development.

#### Syntax
Type annotations are added using a colon (\`:\`) followed by the type.

#### Examples

1. **Variable Type Annotation**:
   \`\`\`typescript
   let age: number = 25; // \`age\` must be a number
   let name: string = "John"; // \`name\` must be a string
   \`\`\`

2. **Function Parameter and Return Type Annotation**:
   \`\`\`typescript
   function add(a: number, b: number): number {
       return a + b; // The function must return a number
   }
   \`\`\`

3. **Object Type Annotation**:
   \`\`\`typescript
   let person: { name: string; age: number } = {
       name: "Alice",
       age: 30
   };
   \`\`\`

4. **Array Type Annotation**:
   \`\`\`typescript
   let numbers: number[] = [1, 2, 3]; // Array of numbers
   \`\`\`

#### Benefits of Type Annotations
- **Improved Code Safety**: Prevents unintended type errors.
- **Better Tooling Support**: Enables features like autocompletion and type inference in IDEs.
- **Documentation**: Makes the code more readable and self-explanatory.

While TypeScript can infer types in many cases, using type annotations explicitly can make the code more robust and easier to understand.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:58:41.418275Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"a05bb8f0-115e-4808-b100-aa1128dd0c0e",question:"What is the difference between 'any' and 'unknown' types in TypeScript?",answer:"```markdown\nIn TypeScript, both `any` and `unknown` are top types, meaning they can represent any value. However, they have significant differences in terms of safety and usage:\n\n### `any`\n- The `any` type disables type checking entirely. Once a value is typed as `any`, you can perform any operation on it without the compiler raising errors.\n- It is considered unsafe because it bypasses TypeScript's type-checking system, potentially leading to runtime errors.\n- Example:\n  ```typescript\n  let value: any;\n  value = 42;\n  value.toUpperCase(); // No error, but this will fail at runtime if `value` is not a string.\n  ```\n\n### `unknown`\n- The `unknown` type is safer than `any` because it enforces type checking. You cannot perform operations on a value of type `unknown` without first narrowing its type (e.g., using type guards).\n- It is useful when you want to represent a value that could be of any type but still want to ensure type safety.\n- Example:\n  ```typescript\n  let value: unknown;\n  value = 42;\n\n  // value.toUpperCase(); // Error: Object is of type 'unknown'.\n\n  if (typeof value === \"string\") {\n    value.toUpperCase(); // Safe, as the type is narrowed to 'string'.\n  }\n  ```\n\n### Key Differences\n| Feature                | `any`                          | `unknown`                       |\n|------------------------|--------------------------------|---------------------------------|\n| Type Safety           | Unsafe                        | Safe                           |\n| Type Checking         | Disabled                      | Enforced                       |\n| Operations Allowed    | Any operation is allowed      | Requires type narrowing first  |\n| Use Case              | Quick prototyping or migration| Representing unknown values safely |\n\nIn summary, prefer `unknown` over `any` when you need to handle values of unknown types but want to maintain type safety.\n```",level:"Intermediate",created_at:"2025-03-28T17:58:41.418286Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"0bc4dc2f-0457-49eb-afbb-664d883563e6",question:"How does TypeScript handle null and undefined types?",answer:'```markdown\nTypeScript provides robust handling for `null` and `undefined` types, allowing developers to manage these values explicitly. Here\'s how TypeScript deals with them:\n\n1. **Strict Null Checks (`strictNullChecks`):**\n   - When the `strictNullChecks` compiler option is enabled (which is recommended), `null` and `undefined` are treated as distinct types. This means variables of a specific type (e.g., `string`) cannot be assigned `null` or `undefined` unless explicitly allowed.\n   - Example:\n     ```typescript\n     let name: string = "John";\n     name = null; // Error: Type \'null\' is not assignable to type \'string\'.\n     ```\n\n2. **Union Types for Null and Undefined:**\n   - To allow `null` or `undefined` as valid values for a variable, you can use union types.\n   - Example:\n     ```typescript\n     let name: string | null = "John";\n     name = null; // Valid\n     ```\n\n3. **Default Behavior Without `strictNullChecks`:**\n   - If `strictNullChecks` is disabled, `null` and `undefined` are treated as valid values for all types. This can lead to potential runtime errors, as TypeScript won\'t enforce strict type safety.\n\n4. **Optional Properties and Parameters:**\n   - TypeScript uses `undefined` to represent the absence of a value for optional properties or parameters.\n   - Example:\n     ```typescript\n     interface User {\n       name: string;\n       age?: number; // age is optional and can be undefined\n     }\n     ```\n\n5. **Non-Nullable Types:**\n   - TypeScript provides the `NonNullable` utility type to exclude `null` and `undefined` from a type.\n   - Example:\n     ```typescript\n     type NonNullableString = NonNullable<string | null | undefined>; // Result: string\n     ```\n\n6. **Nullish Coalescing (`??`) and Optional Chaining (`?.`):**\n   - TypeScript supports modern JavaScript features like nullish coalescing and optional chaining to handle `null` and `undefined` values more gracefully.\n   - Example:\n     ```typescript\n     const value = null ?? "default"; // Result: "default"\n     const user = { name: "John" };\n     console.log(user?.age); // Safely accesses age, outputs undefined if not present\n     ```\n\nBy leveraging these features, TypeScript ensures better type safety and helps prevent common issues related to `null` and `undefined` values.\n```',level:"Intermediate",created_at:"2025-03-28T17:58:41.418298Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"3bc8b8dc-2582-4b62-99e3-a37ba0c5b5f8",question:"What are generics in TypeScript, and how do you use them?",answer:`\`\`\`markdown
Generics in TypeScript are a powerful feature that allows you to create reusable, type-safe components, functions, and classes. They enable you to define a component or function with a placeholder type that can be specified later when the component or function is used. This provides flexibility while maintaining type safety.

### Why Use Generics?
Generics are useful when:
- You want to write code that works with multiple types without sacrificing type safety.
- You want to avoid duplicating code for different types.
- You want to enforce constraints on the types that can be used.

### Syntax and Usage

#### Generic Functions
A generic function allows you to define a placeholder type using angle brackets (\`<T>\`), where \`T\` is a type variable that can represent any type.

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}

// Usage
const numberValue = identity<number>(42); // T is inferred as number
const stringValue = identity<string>("Hello"); // T is inferred as string
\`\`\`

#### Generic Classes
Generic classes allow you to define a class with a type parameter.

\`\`\`typescript
class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

// Usage
const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // Output: 123

const stringBox = new Box<string>("TypeScript");
console.log(stringBox.getContent()); // Output: TypeScript
\`\`\`

#### Generic Interfaces
Generic interfaces allow you to define the structure of an object with a type parameter.

\`\`\`typescript
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<string, number> = {
  first: "Hello",
  second: 42,
};
\`\`\`

#### Generic Constraints
You can constrain the type parameter to ensure it meets certain requirements using the \`extends\` keyword.

\`\`\`typescript
function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

// Usage
logLength("Hello"); // Works because string has a length property
logLength([1, 2, 3]); // Works because arrays have a length property
// logLength(42); // Error: number does not have a length property
\`\`\`

### Benefits of Generics
- **Reusability**: Write code that works with different types.
- **Type Safety**: Catch errors at compile time.
- **Flexibility**: Allow users to specify the type they need.

Generics are a cornerstone of TypeScript's type system, enabling developers to write robust, reusable, and maintainable code.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418308Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"9085b8d4-a6c7-4e8b-9abf-773e5d639f33",question:"How do you create and use a union type in TypeScript?",answer:`\`\`\`markdown
In TypeScript, a union type allows a variable to hold values of multiple types. You can create a union type using the \`|\` (pipe) symbol to combine two or more types. Here's how you can create and use a union type:

### Creating a Union Type
\`\`\`typescript
type StringOrNumber = string | number;
\`\`\`

In this example, the \`StringOrNumber\` type can hold either a \`string\` or a \`number\`.

### Using a Union Type
You can use the union type in variables, function parameters, or return types:

#### Example 1: Variable with Union Type
\`\`\`typescript
let value: StringOrNumber;

value = "Hello"; // valid
value = 42;      // valid
// value = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
\`\`\`

#### Example 2: Function with Union Type Parameter
\`\`\`typescript
function printValue(value: StringOrNumber): void {
  if (typeof value === "string") {
    console.log(\`String value: \${value}\`);
  } else {
    console.log(\`Number value: \${value}\`);
  }
}

printValue("Hello"); // Output: String value: Hello
printValue(123);     // Output: Number value: 123
\`\`\`

#### Example 3: Union Type in Function Return
\`\`\`typescript
function getValue(isString: boolean): StringOrNumber {
  return isString ? "A string" : 100;
}

const result = getValue(true); // result is of type StringOrNumber
console.log(result);
\`\`\`

### Key Points
- Use type guards (e.g., \`typeof\`, \`instanceof\`) to narrow down the type when working with union types.
- Union types are helpful for scenarios where a value can belong to multiple types, improving flexibility while maintaining type safety.

By leveraging union types, you can write more robust and type-safe TypeScript code.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418316Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"4345f544-bdb8-45f3-bf1e-473d0653123e",question:"What are mapped types in TypeScript, and how are they used?",answer:`\`\`\`markdown
### Mapped Types in TypeScript

Mapped types in TypeScript are a powerful feature that allows you to create new types by transforming the properties of an existing type. They are particularly useful for creating variations of a given type, such as making all properties optional, readonly, or applying other transformations.

#### Syntax
Mapped types use the \`keyof\` operator to iterate over the keys of an existing type and apply a transformation. The basic syntax is:

\`\`\`typescript
type MappedType<T> = {
  [Key in keyof T]: Transformation;
};
\`\`\`

- \`T\` is the original type.
- \`keyof T\` represents the keys of the type \`T\`.
- \`Key\` is a placeholder for each key in \`T\`.
- \`Transformation\` is the operation applied to each property.

#### Common Use Cases

1. **Making All Properties Optional**
   \`\`\`typescript
   type Partial<T> = {
     [Key in keyof T]?: T[Key];
   };

   interface User {
     id: number;
     name: string;
   }

   type OptionalUser = Partial<User>;
   // Equivalent to:
   // type OptionalUser = {
   //   id?: number;
   //   name?: string;
   // };
   \`\`\`

2. **Making All Properties Readonly**
   \`\`\`typescript
   type Readonly<T> = {
     readonly [Key in keyof T]: T[Key];
   };

   interface User {
     id: number;
     name: string;
   }

   type ReadonlyUser = Readonly<User>;
   // Equivalent to:
   // type ReadonlyUser = {
   //   readonly id: number;
   //   readonly name: string;
   // };
   \`\`\`

3. **Mapping Property Types**
   \`\`\`typescript
   type Record<K extends keyof any, T> = {
     [P in K]: T;
   };

   type StringRecord = Record<'a' | 'b' | 'c', string>;
   // Equivalent to:
   // type StringRecord = {
   //   a: string;
   //   b: string;
   //   c: string;
   // };
   \`\`\`

4. **Applying Custom Transformations**
   \`\`\`typescript
   type Nullable<T> = {
     [Key in keyof T]: T[Key] | null;
   };

   interface User {
     id: number;
     name: string;
   }

   type NullableUser = Nullable<User>;
   // Equivalent to:
   // type NullableUser = {
   //   id: number | null;
   //   name: string | null;
   // };
   \`\`\`

#### Built-in Mapped Types
TypeScript provides several built-in mapped types, such as:
- \`Partial<T>\`: Makes all properties optional.
- \`Required<T>\`: Makes all properties required.
- \`Readonly<T>\`: Makes all properties readonly.
- \`Pick<T, K>\`: Picks a subset of properties from a type.
- \`Record<K, T>\`: Creates a type with a set of keys \`K\` and values of type \`T\`.

#### Benefits
- **Reusability**: Mapped types allow you to create reusable and flexible type transformations.
- **Type Safety**: They ensure that transformations are applied consistently across all properties of a type.
- **Dynamic Type Creation**: They enable dynamic creation of types based on existing ones, reducing redundancy.

#### Example
\`\`\`typescript
interface Product {
  id: number;
  name: string;
  price: number;
}

type ReadonlyProduct = Readonly<Product>;
const product: ReadonlyProduct = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

// The following line will cause an error because the properties are readonly
// product.price = 1200;
\`\`\`

Mapped types are a cornerstone of TypeScript's type system, enabling developers to write more expressive, concise, and maintainable code.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:58:41.418335Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"2a74a223-906b-4e24-8146-89bc54a321c0",question:"How does TypeScript's type inference work?",answer:`\`\`\`markdown
TypeScript's type inference is a feature that allows the compiler to automatically determine the type of a variable, function, or expression without explicit type annotations. This makes code more concise while still maintaining type safety. Type inference works in several scenarios:

1. **Variable Initialization**:
   When a variable is initialized, TypeScript infers its type based on the assigned value.
   \`\`\`typescript
   let message = "Hello, TypeScript"; // Inferred as string
   let count = 42; // Inferred as number
   \`\`\`

2. **Function Return Types**:
   TypeScript infers the return type of a function based on its implementation.
   \`\`\`typescript
   function add(a: number, b: number) {
       return a + b; // Return type inferred as number
   }
   \`\`\`

3. **Contextual Typing**:
   TypeScript uses the context in which a value is used to infer its type. This is common in functions, callbacks, and event handlers.
   \`\`\`typescript
   const numbers = [1, 2, 3];
   numbers.forEach((num) => {
       console.log(num); // num is inferred as number
   });
   \`\`\`

4. **Best Common Type**:
   When inferring the type of an array or union, TypeScript determines the "best common type" from the elements.
   \`\`\`typescript
   const mixedArray = [1, "text", true]; // Inferred as (string | number | boolean)[]
   \`\`\`

5. **Generics**:
   TypeScript can infer generic types based on the arguments passed to a function or class.
   \`\`\`typescript
   function identity<T>(value: T): T {
       return value;
   }
   const result = identity(42); // T inferred as number
   \`\`\`

Type inference simplifies code while still leveraging TypeScript's strong type system. However, for complex scenarios or when clarity is needed, explicit type annotations can still be used.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418344Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"e40bcfb8-1223-47ae-b278-e5f14b574745",question:"What is the difference between 'interface' and 'type' in TypeScript?",answer:`\`\`\`markdown
In TypeScript, both \`interface\` and \`type\` are used to define the shape of objects, but there are some key differences between the two:

### 1. **Declaration Merging**
   - **Interface**: Supports declaration merging. Multiple declarations of the same interface are merged into a single definition.
     \`\`\`typescript
     interface User {
       name: string;
     }

     interface User {
       age: number;
     }

     // Merged interface
     const user: User = { name: "Alice", age: 25 };
     \`\`\`
   - **Type**: Does not support declaration merging. If you try to define the same type multiple times, it will result in a compilation error.

### 2. **Extensibility**
   - **Interface**: Can be extended using the \`extends\` keyword.
     \`\`\`typescript
     interface Person {
       name: string;
     }

     interface Employee extends Person {
       employeeId: number;
     }

     const employee: Employee = { name: "Bob", employeeId: 123 };
     \`\`\`
   - **Type**: Can also be extended using intersections (\`&\`).
     \`\`\`typescript
     type Person = {
       name: string;
     };

     type Employee = Person & {
       employeeId: number;
     };

     const employee: Employee = { name: "Bob", employeeId: 123 };
     \`\`\`

### 3. **Usage with Primitives and Other Types**
   - **Interface**: Can only describe the shape of objects (including functions and arrays).
   - **Type**: Can describe primitives, unions, intersections, and other more complex types.
     \`\`\`typescript
     type StringOrNumber = string | number; // Valid with type
     \`\`\`

### 4. **Performance**
   - **Interface**: Generally preferred for defining object shapes because it is slightly more performant in terms of type-checking.
   - **Type**: May have a slight performance overhead when used for complex types.

### 5. **Key Use Cases**
   - Use **interface** when defining the structure of objects, especially when you expect the structure to be extended or merged.
   - Use **type** for more complex type definitions, such as unions, intersections, or when working with primitives.

### Summary
| Feature                  | Interface          | Type                     |
|--------------------------|--------------------|--------------------------|
| Declaration Merging      | Supported          | Not Supported            |
| Extensibility            | \`extends\`          | Intersections (\`&\`)      |
| Primitives and Unions    | Not Supported      | Supported                |
| Performance              | Slightly better    | Slightly slower          |

In general, both \`interface\` and \`type\` are powerful tools, and the choice between them often comes down to specific use cases and personal/team preferences.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418354Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"8dfd63c8-f70e-4e89-8215-104c7fe5cb17",question:"How do you create a custom type guard in TypeScript?",answer:'```markdown\nIn TypeScript, a custom type guard is a function that allows you to narrow down the type of a variable within a conditional block. To create a custom type guard, you define a function that returns a boolean value and uses a type predicate (`parameterName is Type`) in its return type. Here\'s how you can create and use a custom type guard:\n\n### Steps to Create a Custom Type Guard\n\n1. Define a function that takes a parameter of a broader type (e.g., `unknown`, `any`, or a union type).\n2. Use runtime checks (e.g., `typeof`, `instanceof`, or property existence) to determine if the parameter matches the desired type.\n3. Return `true` if the type matches and `false` otherwise.\n4. Use the `parameterName is Type` syntax as the return type to indicate the type guard.\n\n### Example: Custom Type Guard\n\n```typescript\n// Define a type\ninterface User {\n  name: string;\n  age: number;\n}\n\n// Create a custom type guard function\nfunction isUser(obj: unknown): obj is User {\n  return (\n    typeof obj === "object" &&\n    obj !== null &&\n    "name" in obj &&\n    "age" in obj &&\n    typeof (obj as User).name === "string" &&\n    typeof (obj as User).age === "number"\n  );\n}\n\n// Usage of the custom type guard\nconst data: unknown = { name: "Alice", age: 25 };\n\nif (isUser(data)) {\n  // TypeScript now knows `data` is of type `User` within this block\n  console.log(`User\'s name is ${data.name} and age is ${data.age}`);\n} else {\n  console.log("Data is not a User");\n}\n```\n\n### Explanation\n\n1. The `isUser` function checks if the input `obj` has the required properties (`name` and `age`) and ensures they are of the correct types.\n2. The return type `obj is User` tells TypeScript that if the function returns `true`, the input `obj` can be safely treated as a `User`.\n3. This allows TypeScript to narrow the type of `obj` within the `if` block, enabling type-safe access to its properties.\n\nCustom type guards are a powerful feature in TypeScript for working with complex types and ensuring type safety at runtime.\n```',level:"Advanced",created_at:"2025-03-28T17:58:41.418363Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"f49a3ede-cee7-4707-919c-34cd98f59b7c",question:"What is the 'keyof' operator in TypeScript, and how is it used?",answer:`\`\`\`markdown
The \`keyof\` operator in TypeScript is used to obtain a union of the keys of a given type. It is particularly useful when working with object types, as it allows you to create types that are constrained to the keys of another type.

### Syntax
\`\`\`typescript
keyof Type
\`\`\`

### How It Works
When applied to a type, \`keyof\` produces a string or numeric literal union of its keys. For example:

\`\`\`typescript
type Person = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof Person; // "name" | "age" | "location"
\`\`\`

Here, \`PersonKeys\` will be a union type of the keys \`"name" | "age" | "location"\`.

### Common Use Cases
1. **Constraining Function Parameters**:
   You can use \`keyof\` to restrict function parameters to valid keys of an object.

   \`\`\`typescript
   function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
     return obj[key];
   }

   const person: Person = { name: "Alice", age: 30, location: "NYC" };
   const name = getProperty(person, "name"); // Valid
   // const invalid = getProperty(person, "height"); // Error: Argument of type '"height"' is not assignable to parameter of type '"name" | "age" | "location"'.
   \`\`\`

2. **Mapping Over Object Keys**:
   You can use \`keyof\` in conjunction with mapped types to create new types based on the keys of an existing type.

   \`\`\`typescript
   type ReadOnly<T> = {
     readonly [K in keyof T]: T[K];
   };

   type ReadOnlyPerson = ReadOnly<Person>;
   \`\`\`

3. **Dynamic Object Access**:
   It allows you to dynamically access object properties while maintaining type safety.

   \`\`\`typescript
   function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
     obj[key] = value;
   }

   updateProperty(person, "age", 31); // Valid
   \`\`\`

### Summary
The \`keyof\` operator is a powerful tool in TypeScript for working with object types. It enables type-safe operations on object keys, dynamic property access, and the creation of utility types. By leveraging \`keyof\`, developers can write more robust and maintainable code.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:58:41.418374Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"c90ebf3c-c6c6-4b2e-9449-8faace0988d7",question:"How do you handle function overloading in TypeScript?",answer:`\`\`\`markdown
In TypeScript, function overloading is handled by defining multiple function signatures for the same function. These signatures specify the different combinations of parameter types and return types the function can accept. The actual implementation of the function is written once, and it must handle all the defined overloads.

### Steps to Handle Function Overloading:

1. **Define Overload Signatures**: Write multiple function signatures with different parameter and return type combinations.
2. **Provide a Single Implementation**: Write one implementation of the function that can handle all the overload cases. The implementation should use type guards or conditional logic to differentiate between the overloads.

### Example:

\`\`\`typescript
// Overload signatures
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Implementation
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // Handles number addition
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b; // Handles string concatenation
  }
  throw new Error("Invalid arguments");
}

// Usage
const result1 = add(10, 20); // Returns 30
const result2 = add("Hello, ", "World!"); // Returns "Hello, World!"
\`\`\`

### Key Points:
- The implementation must be compatible with all the overload signatures.
- TypeScript will use the overload signatures for type checking, not the implementation.
- The implementation should include logic to handle all possible cases defined in the overloads.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418384Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"6268aa51-fdf0-4636-90e6-9c33c58d3c9e",question:"What are utility types in TypeScript, and can you provide examples?",answer:`\`\`\`markdown
Utility types in TypeScript are predefined types that help transform or manipulate other types. They are provided by TypeScript to make it easier to work with common type transformations, such as making properties optional, readonly, or picking specific properties from a type. These utility types save time and reduce boilerplate code when working with complex type definitions.

Here are some commonly used utility types with examples:

### 1. \`Partial<Type>\`
The \`Partial\` utility type makes all properties of a given type optional.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  age: number;
}

const updateUser: Partial<User> = {
  name: "Alice",
};
\`\`\`

### 2. \`Required<Type>\`
The \`Required\` utility type makes all properties of a given type required.

\`\`\`typescript
interface User {
  id?: number;
  name?: string;
}

const user: Required<User> = {
  id: 1,
  name: "Bob",
};
\`\`\`

### 3. \`Readonly<Type>\`
The \`Readonly\` utility type makes all properties of a given type immutable.

\`\`\`typescript
interface User {
  id: number;
  name: string;
}

const user: Readonly<User> = {
  id: 1,
  name: "Charlie",
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
\`\`\`

### 4. \`Pick<Type, Keys>\`
The \`Pick\` utility type creates a new type by selecting specific properties from an existing type.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  age: number;
}

const user: Pick<User, "id" | "name"> = {
  id: 1,
  name: "Diana",
};
\`\`\`

### 5. \`Omit<Type, Keys>\`
The \`Omit\` utility type creates a new type by excluding specific properties from an existing type.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  age: number;
}

const user: Omit<User, "age"> = {
  id: 1,
  name: "Eve",
};
\`\`\`

### 6. \`Record<Keys, Type>\`
The \`Record\` utility type creates an object type with specified keys and values of a specific type.

\`\`\`typescript
const userRoles: Record<string, string> = {
  admin: "Admin",
  editor: "Editor",
};

const userAges: Record<number, string> = {
  1: "20 years",
  2: "25 years",
};
\`\`\`

### 7. \`Exclude<Type, ExcludedUnion>\`
The \`Exclude\` utility type removes specific types from a union.

\`\`\`typescript
type Status = "active" | "inactive" | "pending";
type ActiveStatus = Exclude<Status, "inactive">;

// ActiveStatus is "active" | "pending"
\`\`\`

### 8. \`Extract<Type, Union>\`
The \`Extract\` utility type selects only the types that are assignable to a given union.

\`\`\`typescript
type Status = "active" | "inactive" | "pending";
type ActiveStatus = Extract<Status, "active" | "pending">;

// ActiveStatus is "active" | "pending"
\`\`\`

### 9. \`NonNullable<Type>\`
The \`NonNullable\` utility type removes \`null\` and \`undefined\` from a type.

\`\`\`typescript
type User = string | null | undefined;
type ValidUser = NonNullable<User>;

// ValidUser is string
\`\`\`

### 10. \`ReturnType<Type>\`
The \`ReturnType\` utility type extracts the return type of a function.

\`\`\`typescript
function getUser() {
  return { id: 1, name: "Frank" };
}

type User = ReturnType<typeof getUser>;

// User is { id: number; name: string; }
\`\`\`

### 11. \`Parameters<Type>\`
The \`Parameters\` utility type extracts the parameter types of a function as a tuple.

\`\`\`typescript
function createUser(id: number, name: string) {
  return { id, name };
}

type CreateUserParams = Parameters<typeof createUser>;

// CreateUserParams is [number, string]
\`\`\`

### 12. \`InstanceType<Type>\`
The \`InstanceType\` utility type extracts the instance type of a class.

\`\`\`typescript
class User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

type UserInstance = InstanceType<typeof User>;

// UserInstance is User
\`\`\`

These utility types are powerful tools for creating flexible and reusable type definitions in TypeScript.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418394Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"64453534-86b4-4c05-abe6-554628d86d4d",question:"What is the difference between 'extends' and 'implements' in TypeScript?",answer:`\`\`\`markdown
In TypeScript, \`extends\` and \`implements\` are used to establish relationships between classes, interfaces, and other types, but they serve different purposes:

### \`extends\`
- The \`extends\` keyword is used for inheritance.
- A class can extend another class, inheriting its properties and methods.
- An interface can extend another interface or multiple interfaces, combining their definitions.
- Example with classes:
  \`\`\`typescript
  class Animal {
    eat() {
      console.log("Eating...");
    }
  }

  class Dog extends Animal {
    bark() {
      console.log("Barking...");
    }
  }

  const dog = new Dog();
  dog.eat(); // Inherited from Animal
  dog.bark(); // Defined in Dog
  \`\`\`
- Example with interfaces:
  \`\`\`typescript
  interface Shape {
    area: number;
  }

  interface Circle extends Shape {
    radius: number;
  }

  const circle: Circle = {
    area: 78.5,
    radius: 5,
  };
  \`\`\`

### \`implements\`
- The \`implements\` keyword is used to enforce that a class adheres to the structure defined by an interface.
- A class can implement one or more interfaces, ensuring it provides the required properties and methods.
- Unlike \`extends\`, \`implements\` does not provide inheritance of behavior (methods or properties); it only enforces a contract.
- Example:
  \`\`\`typescript
  interface Flyable {
    fly(): void;
  }

  class Bird implements Flyable {
    fly() {
      console.log("Flying...");
    }
  }

  const bird = new Bird();
  bird.fly(); // Implements the Flyable interface
  \`\`\`

### Key Differences
| Feature         | \`extends\`                               | \`implements\`                           |
|-----------------|-----------------------------------------|----------------------------------------|
| Purpose         | Inheritance of behavior and structure  | Enforcing a contract                  |
| Usage           | Between classes or interfaces          | Between a class and an interface      |
| Multiple Types  | A class can extend only one class, but an interface can extend multiple interfaces | A class can implement multiple interfaces |

In summary, \`extends\` is used for inheritance, while \`implements\` is used to ensure a class adheres to a specific structure defined by an interface.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418403Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"673842ac-b3d1-426f-833d-4a5244b9aa95",question:"How do you use decorators in TypeScript?",answer:`\`\`\`markdown
### Using Decorators in TypeScript

Decorators in TypeScript are a special kind of declaration that can be attached to classes, methods, accessors, properties, or parameters. They allow you to modify the behavior of these elements at runtime. To use decorators, you need to enable the \`experimentalDecorators\` compiler option in your \`tsconfig.json\` file:

\`\`\`json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
\`\`\`

#### Types of Decorators

1. **Class Decorators**  
   A class decorator is applied to a class constructor. It can be used to modify or replace the class definition.

   \`\`\`typescript
   function Logger(target: Function) {
     console.log(\`Class \${target.name} is being created.\`);
   }

   @Logger
   class ExampleClass {
     constructor() {
       console.log('ExampleClass instance created.');
     }
   }
   \`\`\`

2. **Method Decorators**  
   A method decorator is applied to a method of a class. It can be used to modify the method's behavior.

   \`\`\`typescript
   function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
     const originalMethod = descriptor.value;
     descriptor.value = function (...args: any[]) {
       console.log(\`Method \${propertyKey} called with arguments:\`, args);
       return originalMethod.apply(this, args);
     };
   }

   class ExampleClass {
     @LogMethod
     greet(name: string) {
       return \`Hello, \${name}!\`;
     }
   }

   const example = new ExampleClass();
   example.greet('John'); // Logs method call and arguments
   \`\`\`

3. **Property Decorators**  
   A property decorator is applied to a property of a class. It can be used to observe or modify the property metadata.

   \`\`\`typescript
   function ReadOnly(target: any, propertyKey: string) {
     Object.defineProperty(target, propertyKey, {
       writable: false,
     });
   }

   class ExampleClass {
     @ReadOnly
     name: string = 'Default Name';
   }

   const example = new ExampleClass();
   example.name = 'New Name'; // Error: Cannot assign to read-only property
   \`\`\`

4. **Accessor Decorators**  
   An accessor decorator is applied to a getter or setter of a class. It can modify the behavior of the accessor.

   \`\`\`typescript
   function LogAccessor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
     const originalGetter = descriptor.get;
     descriptor.get = function () {
       console.log(\`Getter for \${propertyKey} is called.\`);
       return originalGetter?.apply(this);
     };
   }

   class ExampleClass {
     private _value: number = 0;

     @LogAccessor
     get value() {
       return this._value;
     }

     set value(val: number) {
       this._value = val;
     }
   }

   const example = new ExampleClass();
   console.log(example.value); // Logs the getter call
   \`\`\`

5. **Parameter Decorators**  
   A parameter decorator is applied to a parameter of a method. It can be used to observe or modify metadata about the parameter.

   \`\`\`typescript
   function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
     console.log(\`Parameter at index \${parameterIndex} in method \${propertyKey} is being decorated.\`);
   }

   class ExampleClass {
     greet(@LogParameter name: string) {
       console.log(\`Hello, \${name}!\`);
     }
   }

   const example = new ExampleClass();
   example.greet('John'); // Logs parameter decoration
   \`\`\`

#### Key Points
- Decorators are functions that are invoked at runtime.
- They can be used to modify or enhance classes, methods, properties, accessors, or parameters.
- The order of decorator execution is **top-to-bottom** for class elements and **bottom-to-top** for nested decorators.

Decorators are a powerful feature in TypeScript, often used in frameworks like Angular for dependency injection, metadata handling, and more.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:58:41.418412Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"c6c2ae21-c313-43ff-ae82-b0e6a5985de7",question:"What is the purpose of the 'Partial' utility type in TypeScript?",answer:`\`\`\`markdown
The \`Partial\` utility type in TypeScript is used to create a new type based on an existing type, where all the properties of the original type are made optional. This is particularly useful when you want to work with objects that may only have a subset of the properties defined.

### Syntax:
\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

### Purpose:
- To allow flexibility when working with objects that don't need all properties to be defined.
- Useful in scenarios like updating a subset of an object or initializing an object incrementally.

### Example:
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser = (id: number, userUpdates: Partial<User>) => {
  // userUpdates can have any combination of User properties
  console.log(\`Updating user \${id} with\`, userUpdates);
};

// Example usage:
updateUser(1, { name: "Alice" }); // Only updating the name
updateUser(2, { email: "bob@example.com", name: "Bob" }); // Updating name and email
\`\`\`

In this example, the \`Partial<User>\` type allows the \`updateUser\` function to accept an object with any subset of the \`User\` properties, making it more flexible and convenient to use.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418421Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"7fd52fa1-adab-43e7-ba51-60d7aa76a35b",question:"What are conditional types in TypeScript, and how do they work?",answer:'```markdown\n### Conditional Types in TypeScript\n\nConditional types in TypeScript allow for type expressions that depend on a condition. They enable more dynamic and flexible type definitions by evaluating a condition at the type level and returning one of two possible types based on the result.\n\nThe basic syntax for a conditional type is:\n\n```typescript\nT extends U ? X : Y\n```\n\n- `T` is the type being checked.\n- `U` is the type to check against.\n- `X` is the type returned if the condition `T extends U` is true.\n- `Y` is the type returned if the condition `T extends U` is false.\n\n### How Conditional Types Work\n\n1. **Type Checking**: The `extends` keyword is used to test whether `T` is assignable to `U`.\n2. **Branching**: If the condition evaluates to `true`, the type resolves to `X`. Otherwise, it resolves to `Y`.\n\n### Example\n\n```typescript\ntype IsString<T> = T extends string ? "Yes" : "No";\n\ntype Result1 = IsString<string>; // "Yes"\ntype Result2 = IsString<number>; // "No"\n```\n\nIn this example:\n- If `T` is a `string`, the type resolves to `"Yes"`.\n- Otherwise, it resolves to `"No"`.\n\n### Distributive Conditional Types\n\nWhen the type `T` is a union, conditional types are applied to each member of the union individually. This is known as distributive behavior.\n\nExample:\n\n```typescript\ntype ToArray<T> = T extends any ? T[] : never;\n\ntype Result = ToArray<string | number>; // string[] | number[]\n```\n\nHere, the conditional type is applied to both `string` and `number` separately, resulting in a union of `string[] | number[]`.\n\n### Practical Use Cases\n\n1. **Type Filtering**:\n   ```typescript\n   type Exclude<T, U> = T extends U ? never : T;\n\n   type Result = Exclude<"a" | "b" | "c", "a">; // "b" | "c"\n   ```\n\n2. **Inferring Types**:\n   ```typescript\n   type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\n\n   type Result = GetReturnType<() => string>; // string\n   ```\n\n3. **Mapping Types**:\n   ```typescript\n   type Nullable<T> = T extends object ? T | null : T;\n\n   type Result = Nullable<{ name: string }>; // { name: string } | null\n   ```\n\n### Summary\n\nConditional types in TypeScript provide a powerful way to create flexible and reusable type logic. They are particularly useful for type transformations, filtering, and inference, making TypeScript a highly expressive and robust type system.\n```',level:"Advanced",created_at:"2025-03-28T17:58:41.418440Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"42b8b02a-86c9-4d02-a88c-cbc784ffa921",question:"How do you define a tuple in TypeScript, and when would you use one?",answer:'```markdown\nIn TypeScript, a tuple is defined as a fixed-length array where each element has a specific type. You can define a tuple using square brackets `[]` and specifying the types of its elements in order.\n\n### Syntax:\n```typescript\nlet tupleName: [type1, type2, type3] = [value1, value2, value3];\n```\n\n### Example:\n```typescript\nlet user: [number, string, boolean] = [1, "John Doe", true];\n```\n\nIn this example:\n- The first element must be a `number`.\n- The second element must be a `string`.\n- The third element must be a `boolean`.\n\n### When to Use Tuples:\nYou would use a tuple when you need to represent a fixed structure with a known number of elements, where each element has a specific type. For example:\n1. **Returning multiple values from a function**:\n   ```typescript\n   function getUser(): [number, string] {\n       return [1, "John Doe"];\n   }\n   ```\n2. **Representing a structured data point**:\n   ```typescript\n   let coordinates: [number, number] = [10, 20];\n   ```\n\nTuples are particularly useful when working with data where the position and type of each element are strictly defined.\n```',level:"Beginner",created_at:"2025-03-28T17:58:41.418450Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"2b6165da-2568-46be-92dc-87103b164502",question:"What is the purpose of the 'never' type in TypeScript?",answer:`\`\`\`markdown
The \`never\` type in TypeScript represents a value that never occurs. It is used in scenarios where a function or expression cannot return a value, such as when a function throws an error or enters an infinite loop. The \`never\` type is also useful for exhaustive type checking in switch statements or conditional logic, ensuring that all possible cases are handled.

### Key Use Cases:
1. **Functions that never return:**
   \`\`\`typescript
   function throwError(message: string): never {
       throw new Error(message);
   }
   \`\`\`

2. **Exhaustive type checking:**
   \`\`\`typescript
   type Shape = 'circle' | 'square';

   function getArea(shape: Shape): number {
       switch (shape) {
           case 'circle':
               return Math.PI * 1; // Example calculation
           case 'square':
               return 4; // Example calculation
           default:
               const _exhaustiveCheck: never = shape;
               throw new Error(\`Unhandled shape: \${_exhaustiveCheck}\`);
       }
   }
   \`\`\`

In the example above, the \`never\` type ensures that all possible values of \`Shape\` are handled, and any unhandled case will result in a compile-time error.

### Summary:
The \`never\` type is a powerful tool for ensuring type safety and correctness in TypeScript, particularly in functions that cannot return or when performing exhaustive checks.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418459Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"95d22eca-84ac-4a76-ac2b-6716d4d37536",question:"How do you handle asynchronous code in TypeScript?",answer:`\`\`\`markdown
To handle asynchronous code in TypeScript, you can use features like \`Promises\`, \`async/await\`, and callback functions. TypeScript enhances these features by providing type safety, ensuring that the data being handled is correctly typed.

### 1. Using Promises
Promises are used to handle asynchronous operations. You can define the type of the data the promise resolves to:

\`\`\`typescript
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

fetchData().then((data) => {
  console.log(data); // Output: Data fetched successfully
});
\`\`\`

### 2. Using \`async/await\`
The \`async/await\` syntax simplifies working with promises, making asynchronous code look more like synchronous code. TypeScript ensures proper typing of the resolved value.

\`\`\`typescript
async function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

async function getData() {
  try {
    const data: string = await fetchData();
    console.log(data); // Output: Data fetched successfully
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();
\`\`\`

### 3. Typing Asynchronous Functions
When defining asynchronous functions, you can explicitly specify the return type as a \`Promise\` of the resolved value type:

\`\`\`typescript
async function fetchNumber(): Promise<number> {
  return 42;
}

fetchNumber().then((num) => {
  console.log(num); // Output: 42
});
\`\`\`

### 4. Handling Errors
TypeScript allows you to type errors explicitly when handling asynchronous code:

\`\`\`typescript
async function fetchWithError(): Promise<string> {
  throw new Error("Something went wrong");
}

async function handleError() {
  try {
    const result = await fetchWithError();
    console.log(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    }
  }
}

handleError();
\`\`\`

### Summary
- Use \`Promise\` and \`async/await\` for handling asynchronous operations.
- Explicitly type the resolved value of promises for better type safety.
- Handle errors using \`try/catch\` and ensure proper error typing.
TypeScript's type system ensures that asynchronous code is robust and less prone to runtime errors.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418468Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"2efc56c6-abe4-4090-b4c5-8d944c320435",question:"What are index signatures in TypeScript, and how are they used?",answer:`\`\`\`markdown
### Index Signatures in TypeScript

Index signatures in TypeScript are a way to define the shape of objects where the keys and values follow specific patterns. They allow you to specify the type of keys and the type of values an object can have when the exact keys are not known in advance.

#### Syntax
An index signature is defined using the following syntax:

\`\`\`typescript
interface Example {
  [key: string]: valueType;
}
\`\`\`

- \`key: string\` specifies that the keys must be of type \`string\` (or another type like \`number\`).
- \`valueType\` defines the type of the values associated with those keys.

#### Example Usage
Here’s an example of an index signature:

\`\`\`typescript
interface StringDictionary {
  [key: string]: string;
}

const dictionary: StringDictionary = {
  name: "John",
  city: "New York",
  country: "USA",
};
\`\`\`

In this example:
- The \`StringDictionary\` interface allows any number of string keys, each associated with a string value.
- The \`dictionary\` object adheres to this structure.

#### Number Index Signatures
You can also use \`number\` as the key type:

\`\`\`typescript
interface NumberArray {
  [index: number]: string;
}

const myArray: NumberArray = ["apple", "banana", "cherry"];
\`\`\`

Here, the \`NumberArray\` interface ensures that the object behaves like an array with numeric indices and string values.

#### Use Cases
Index signatures are commonly used when:
1. You need to represent objects with dynamic keys.
2. You are working with maps, dictionaries, or arrays.
3. The exact keys are not known at compile time.

#### Limitations
1. Index signatures enforce uniformity, meaning all keys must have the same value type.
2. They cannot coexist with properties of a different type unless explicitly defined.

\`\`\`typescript
interface MixedObject {
  [key: string]: number;
  fixedKey: string; // Error: Type 'string' is not assignable to type 'number'.
}
\`\`\`

To fix this, you can explicitly define exceptions:

\`\`\`typescript
interface MixedObject {
  [key: string]: number | string;
  fixedKey: string;
}
\`\`\`

Index signatures are a powerful feature in TypeScript for working with dynamic or flexible object structures while maintaining type safety.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418478Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"958dd828-a74d-46ca-b958-2202c305c86b",question:"What is the purpose of the 'infer' keyword in TypeScript?",answer:"```markdown\nThe `infer` keyword in TypeScript is used in conditional types to infer and extract a type from another type. It allows you to capture a type within a conditional type and assign it to a type variable for further use. This is particularly useful when working with complex types, such as extracting the return type of a function, the element type of an array, or other derived types.\n\nFor example:\n\n```typescript\ntype GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\n\ntype ExampleFunction = () => string;\ntype Result = GetReturnType<ExampleFunction>; // Result is inferred as 'string'\n```\n\nIn this example, the `infer` keyword is used to extract the return type (`R`) of the function type `T`. If `T` matches the function signature, the return type is inferred and assigned to `R`.\n\nThe `infer` keyword is a powerful tool for creating reusable and dynamic type utilities in TypeScript.\n```",level:"Advanced",created_at:"2025-03-28T17:58:41.418585Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"70262e03-b90a-4f93-88b9-86eb39d90361",question:"How do you use the 'Record' utility type in TypeScript?",answer:`\`\`\`markdown
The \`Record\` utility type in TypeScript is used to construct an object type with a specific set of keys and their corresponding value types. It is defined as:

\`\`\`typescript
Record<Keys, Type>
\`\`\`

- \`Keys\`: The set of keys for the object (can be a union of string or number literals, or \`string\`/\`number\`).
- \`Type\`: The type of the values associated with those keys.

### Example Usage:

\`\`\`typescript
// Example 1: Basic usage
type UserRoles = Record<string, string>;

const roles: UserRoles = {
  admin: "Admin User",
  editor: "Editor User",
};

// Example 2: Using specific keys
type UserPermissions = Record<"read" | "write" | "delete", boolean>;

const permissions: UserPermissions = {
  read: true,
  write: false,
  delete: true,
};

// Example 3: Nested Record
type NestedRecord = Record<string, Record<string, number>>;

const nested: NestedRecord = {
  group1: {
    item1: 10,
    item2: 20,
  },
  group2: {
    item1: 30,
    item2: 40,
  },
};
\`\`\`

### Key Benefits:
1. Ensures type safety by enforcing specific key-value structures.
2. Useful for mapping a set of keys to a consistent value type.
3. Simplifies the creation of complex object types.

The \`Record\` utility type is particularly helpful when you need to define objects with a predictable structure and consistent value types.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418487Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"6858639d-7108-44ab-b4b6-7cd4b5017fb5",question:"What is the purpose of the 'Exclude' utility type in TypeScript?",answer:"```markdown\nThe `Exclude` utility type in TypeScript is used to construct a new type by excluding specific types from a union type. Its purpose is to filter out unwanted types from a union, leaving only the types that are not excluded.\n\nThe syntax for `Exclude` is:\n\n```typescript\nExclude<T, U>\n```\n\n- `T`: The union type to be filtered.\n- `U`: The type(s) to exclude from `T`.\n\nThe resulting type includes all members of `T` that are not assignable to `U`.\n\n### Example:\n\n```typescript\ntype AllTypes = string | number | boolean;\ntype ExcludedTypes = Exclude<AllTypes, boolean>;\n\n// Result: ExcludedTypes is now string | number\n```\n\nIn this example, the `Exclude` utility removes `boolean` from the union type `AllTypes`, leaving only `string | number`.\n\n### Use Case:\nThe `Exclude` utility is particularly useful when you want to refine or narrow down a type by removing specific members, making it easier to work with subsets of a union type in a type-safe manner.\n```",level:"Advanced",created_at:"2025-03-28T17:58:41.418496Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"4c2cb8e3-d11f-4e93-a229-8553016ff2f6",question:"How do you create a type-safe API client using TypeScript?",answer:`\`\`\`markdown
To create a type-safe API client using TypeScript, you can follow these steps:

### 1. Define API Endpoints and Types
Start by defining the structure of your API endpoints and the data they return. Use TypeScript interfaces or types to ensure type safety.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiEndpoints {
  getUser: {
    params: { id: number };
    response: User;
  };
  createUser: {
    params: { name: string; email: string };
    response: User;
  };
}
\`\`\`

### 2. Create a Generic API Client
Build a reusable API client that uses generics to enforce type safety for requests and responses.

\`\`\`typescript
class ApiClient<T extends Record<string, any>> {
  constructor(private baseUrl: string) {}

  async request<K extends keyof T>(
    endpoint: K,
    params: T[K]['params']
  ): Promise<T[K]['response']> {
    const response = await fetch(\`\${this.baseUrl}/\${String(endpoint)}\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(\`API request failed with status \${response.status}\`);
    }

    return response.json() as Promise<T[K]['response']>;
  }
}
\`\`\`

### 3. Instantiate the API Client
Pass the API endpoint definitions to the client to enforce type safety.

\`\`\`typescript
const apiClient = new ApiClient<ApiEndpoints>('https://api.example.com');
\`\`\`

### 4. Make Type-Safe API Calls
When making API calls, TypeScript will enforce the correct types for parameters and responses.

\`\`\`typescript
async function fetchUser() {
  const user = await apiClient.request('getUser', { id: 1 });
  console.log(user.name); // Type-safe access to the \`name\` field
}

async function addUser() {
  const newUser = await apiClient.request('createUser', {
    name: 'John Doe',
    email: 'john.doe@example.com',
  });
  console.log(newUser.id); // Type-safe access to the \`id\` field
}
\`\`\`

### 5. Benefits of Type-Safe API Clients
- **Compile-Time Safety**: Errors in API calls (e.g., incorrect parameters or response types) are caught during development.
- **Improved Developer Experience**: Autocompletion and type hints make working with the API easier.
- **Reduced Runtime Errors**: Type safety ensures that the API client behaves as expected.

By combining TypeScript's type system with a generic API client, you can create a robust and type-safe interface for interacting with your backend services.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:58:41.418505Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"f56fcc4d-46f7-4b6e-a606-c73b14837b00",question:"What are discriminated unions in TypeScript, and how do they work?",answer:`\`\`\`markdown
### Discriminated Unions in TypeScript

Discriminated unions, also known as tagged unions or algebraic data types, are a powerful feature in TypeScript that allow you to create a type that can represent multiple distinct types with a common property to differentiate between them. They are particularly useful for modeling scenarios where a value can take on one of several known shapes.

#### How They Work

A discriminated union consists of:
1. **Union of Types**: A union type that combines multiple object types.
2. **Discriminant Property**: A shared property (usually a string literal) that acts as a "tag" to distinguish between the different types in the union.

TypeScript uses the discriminant property to narrow down the type of a value at compile time, enabling type-safe operations on the specific type.

#### Example

\`\`\`typescript
// Define a discriminated union
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number }
  | { kind: "rectangle"; width: number; height: number };

// Function to calculate the area of a shape
function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      // Exhaustiveness checking
      const _exhaustive: never = shape;
      throw new Error(\`Unhandled shape: \${_exhaustive}\`);
  }
}

// Example usage
const circle: Shape = { kind: "circle", radius: 5 };
console.log(getArea(circle)); // Output: 78.53981633974483
\`\`\`

#### Key Features
1. **Type Narrowing**: TypeScript automatically narrows the type based on the \`kind\` property in control flow constructs like \`switch\` or \`if\`.
2. **Exhaustiveness Checking**: Using the \`never\` type in the default case ensures all possible cases are handled, making the code more robust.

Discriminated unions are a clean and type-safe way to handle multiple related types in TypeScript, improving code readability and maintainability.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418514Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"0d484a46-28ff-4ec7-8234-d7aecefd11f3",question:"How do you use the 'Pick' utility type in TypeScript?",answer:`\`\`\`markdown
The \`Pick\` utility type in TypeScript is used to create a new type by selecting a subset of properties from an existing type. It is particularly useful when you want to work with only specific properties of an object type.

### Syntax:
\`\`\`typescript
Pick<Type, Keys>
\`\`\`

- \`Type\`: The existing object type you want to pick properties from.
- \`Keys\`: A union of the keys (property names) you want to include in the new type.

### Example:
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

// Use Pick to create a new type with only 'id' and 'name'
type UserPreview = Pick<User, 'id' | 'name'>;

const user: UserPreview = {
  id: 1,
  name: "John Doe",
};
\`\`\`

In this example:
- The \`UserPreview\` type includes only the \`id\` and \`name\` properties from the \`User\` interface.
- The \`Pick\` utility ensures that the new type is strongly typed and only allows the specified properties.

### Key Benefits:
1. Helps in creating more focused and reusable types.
2. Reduces redundancy by reusing existing type definitions.
3. Ensures type safety when working with subsets of an object.

The \`Pick\` utility type is a powerful tool for managing and manipulating types in TypeScript, especially in large codebases.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418522Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"427a31aa-1832-4fe3-bd4b-dd2bb7c0cd07",question:"How do you define a class in TypeScript, and what are the key features?",answer:`\`\`\`markdown
In TypeScript, a class is defined using the \`class\` keyword. A class can include properties, constructors, and methods. TypeScript enhances classes with features like type annotations, access modifiers, and support for interfaces and inheritance.

### Example of Defining a Class in TypeScript:
\`\`\`typescript
class Person {
  // Properties with type annotations
  private name: string;
  public age: number;
  protected gender: string;

  // Constructor to initialize properties
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Method
  public greet(): string {
    return \`Hello, my name is \${this.name}.\`;
  }
}

// Creating an instance of the class
const person = new Person("Alice", 30, "Female");
console.log(person.greet());
\`\`\`

### Key Features of TypeScript Classes:
1. **Type Annotations**: You can specify types for properties, method parameters, and return values.
2. **Access Modifiers**: 
   - \`public\`: Accessible from anywhere (default).
   - \`private\`: Accessible only within the class.
   - \`protected\`: Accessible within the class and its subclasses.
3. **Constructors**: Special methods for initializing class properties.
4. **Inheritance**: Classes can extend other classes using the \`extends\` keyword.
5. **Interfaces**: Classes can implement interfaces to enforce a specific structure.
6. **Static Members**: Properties and methods can be declared as \`static\` to belong to the class itself rather than an instance.
7. **Getters and Setters**: Provide controlled access to properties.

These features make TypeScript classes more robust and type-safe compared to plain JavaScript classes.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:58:41.418541Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"1909f3a8-9a80-4a34-af7d-9831e176162f",question:"What is the difference between public, private, and protected access modifiers in TypeScript?",answer:`\`\`\`markdown
In TypeScript, access modifiers are used to control the visibility and accessibility of class members (properties and methods). The three main access modifiers are \`public\`, \`private\`, and \`protected\`.

### 1. \`public\`
- Members marked as \`public\` are accessible from anywhere.
- This is the default access modifier in TypeScript if no modifier is explicitly specified.
- Public members can be accessed both inside and outside the class.

\`\`\`typescript
class Example {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log(\`Hello, \${this.name}\`);
  }
}

const example = new Example("Alice");
console.log(example.name); // Accessible
example.greet(); // Accessible
\`\`\`

---

### 2. \`private\`
- Members marked as \`private\` are accessible only within the class in which they are defined.
- They cannot be accessed from outside the class or by subclasses.

\`\`\`typescript
class Example {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  private revealSecret(): void {
    console.log(this.secret);
  }
}

const example = new Example("Top Secret");
// console.log(example.secret); // Error: Property 'secret' is private
// example.revealSecret(); // Error: Method 'revealSecret' is private
\`\`\`

---

### 3. \`protected\`
- Members marked as \`protected\` are accessible within the class and its subclasses.
- They are not accessible from outside the class, even if inherited.

\`\`\`typescript
class Parent {
  protected data: string;

  constructor(data: string) {
    this.data = data;
  }

  protected showData(): void {
    console.log(this.data);
  }
}

class Child extends Parent {
  display(): void {
    console.log("Accessing protected member:");
    this.showData(); // Accessible in subclass
  }
}

const child = new Child("Protected Data");
child.display(); // Works
// console.log(child.data); // Error: Property 'data' is protected
\`\`\`

---

### Summary Table

| Modifier   | Accessible in the Class | Accessible in Subclasses | Accessible Outside the Class |
|------------|--------------------------|---------------------------|-------------------------------|
| \`public\`   | Yes                      | Yes                       | Yes                           |
| \`private\`  | Yes                      | No                        | No                            |
| \`protected\`| Yes                      | Yes                       | No                            |
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418550Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"31cd22d6-08ca-4742-8f9f-bb44de2ff7cf",question:"How do you use abstract classes in TypeScript?",answer:`\`\`\`markdown
In TypeScript, abstract classes are used as a blueprint for other classes. They cannot be instantiated directly and are designed to define a common structure and behavior that derived classes must implement. Abstract classes can include both abstract methods (methods without implementation) and concrete methods (methods with implementation).

### Key Points:
1. **Abstract Classes**:
   - Declared using the \`abstract\` keyword.
   - Cannot be instantiated directly.
   - Can include abstract methods and concrete methods.

2. **Abstract Methods**:
   - Declared using the \`abstract\` keyword.
   - Do not have an implementation in the abstract class.
   - Must be implemented by any non-abstract subclass.

3. **Concrete Methods**:
   - Regular methods with implementations.
   - Can be inherited by subclasses.

### Example:

\`\`\`typescript
abstract class Animal {
  // Abstract method (must be implemented by subclasses)
  abstract makeSound(): void;

  // Concrete method (can be inherited)
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  // Implementing the abstract method
  makeSound(): void {
    console.log("Bark!");
  }
}

const dog = new Dog();
dog.makeSound(); // Output: Bark!
dog.move();      // Output: Moving...
\`\`\`

### Use Cases:
- Abstract classes are useful when you want to enforce a consistent structure across multiple derived classes.
- They are often used in scenarios where you want to provide some shared functionality (via concrete methods) while ensuring that specific behaviors (via abstract methods) are implemented by subclasses.

### Notes:
- Abstract classes are different from interfaces. While interfaces only define the structure, abstract classes can define both structure and behavior.
- A class can extend only one abstract class but can implement multiple interfaces.
\`\`\`
`,level:"Intermediate",created_at:"2025-03-28T17:58:41.418559Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"4ab93b2d-8995-48b7-b40d-0bc74cb01124",question:"What are module declarations in TypeScript, and how are they used?",answer:`\`\`\`markdown
### Module Declarations in TypeScript

In TypeScript, module declarations are used to define the shape of external modules that do not have type definitions. They allow developers to describe the types and structure of such modules so they can be safely used within a TypeScript project.

#### Syntax
A module declaration is written using the \`declare module\` syntax. For example:

\`\`\`typescript
declare module 'external-module-name' {
  export function someFunction(param: string): number;
  export const someConstant: boolean;
}
\`\`\`

#### Use Cases
1. **Typing for External Libraries**: When using a third-party library that lacks TypeScript type definitions, you can create a module declaration to define its API.
2. **Custom Modules**: For custom JavaScript files or modules without type annotations, module declarations provide a way to integrate them into a TypeScript project.
3. **Augmenting Existing Modules**: You can extend or modify the types of an existing module by declaring the module again and adding additional types.

#### Example
Suppose you are using a library called \`my-library\` that does not have type definitions. You can create a \`.d.ts\` file and declare the module:

\`\`\`typescript
// my-library.d.ts
declare module 'my-library' {
  export function greet(name: string): string;
  export const version: string;
}
\`\`\`

Now, you can safely use \`my-library\` in your TypeScript code:

\`\`\`typescript
import { greet, version } from 'my-library';

console.log(greet('Alice')); // Type-safe usage
console.log(\`Library version: \${version}\`);
\`\`\`

#### Notes
- Module declarations are typically placed in \`.d.ts\` files.
- For popular libraries, type definitions are often available via the DefinitelyTyped repository (\`@types\` packages).
- If the module is a global script (not an ES module), you may need to use a global declaration instead.

By using module declarations, TypeScript ensures type safety and better developer experience when working with untyped or partially typed modules.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:58:41.418567Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"12cab893-a9b6-44cb-bf1e-95dbf3e1d075",question:"How do you configure a TypeScript project using tsconfig.json?",answer:'```markdown\nTo configure a TypeScript project using `tsconfig.json`, follow these steps:\n\n1. **Create a `tsconfig.json` file**: In the root of your project, create a file named `tsconfig.json`. This file is used to specify the TypeScript compiler options and project settings.\n\n2. **Initialize the `tsconfig.json` file**: Run the following command in your terminal to generate a basic `tsconfig.json` file:\n   ```bash\n   tsc --init\n   ```\n   This will create a default configuration file with common options.\n\n3. **Customize the configuration**: Open the `tsconfig.json` file and modify it to suit your project\'s needs. Below is an example of a typical configuration:\n   ```json\n   {\n     "compilerOptions": {\n       "target": "ES6",                // Specify ECMAScript target version\n       "module": "CommonJS",           // Specify module system\n       "strict": true,                 // Enable strict type-checking options\n       "outDir": "./dist",             // Specify output directory for compiled files\n       "rootDir": "./src",             // Specify root directory of input files\n       "esModuleInterop": true,        // Enable interoperability between CommonJS and ES modules\n       "skipLibCheck": true            // Skip type checking of declaration files\n     },\n     "include": ["src/**/*"],          // Specify files or directories to include\n     "exclude": ["node_modules"]       // Specify files or directories to exclude\n   }\n   ```\n\n4. **Compile the project**: Run the TypeScript compiler using the `tsc` command. It will use the settings defined in `tsconfig.json`:\n   ```bash\n   tsc\n   ```\n\n5. **Verify the output**: The compiled JavaScript files will be generated in the directory specified by the `outDir` option (e.g., `./dist`).\n\nBy configuring the `tsconfig.json` file, you can control how TypeScript compiles your code and manage your project\'s structure effectively.\n```',level:"Beginner",created_at:"2025-03-28T17:58:41.418576Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"d8687e1c-0675-487a-a3a7-4ae4ff21001f",question:"How do you handle type casting in TypeScript?",answer:'```markdown\nIn TypeScript, type casting is used to explicitly tell the compiler to treat a value as a specific type. This can be useful when you have more information about the type of a value than TypeScript can infer. There are two main ways to perform type casting:\n\n### 1. Using the `as` Syntax\nThe `as` keyword is the most common and recommended way to cast a value to a specific type in TypeScript.\n\n```typescript\nlet someValue: unknown = "Hello, TypeScript!";\nlet strLength: number = (someValue as string).length;\nconsole.log(strLength); // Output: 17\n```\n\n### 2. Using Angle Bracket Syntax\nYou can also use the angle bracket (`<>`) syntax for type casting. However, this is not recommended in JSX files (e.g., React projects) because it conflicts with JSX syntax.\n\n```typescript\nlet someValue: unknown = "Hello, TypeScript!";\nlet strLength: number = (<string>someValue).length;\nconsole.log(strLength); // Output: 17\n```\n\n### Important Notes:\n- **Type Safety**: Type casting does not change the runtime type of a value; it only tells the compiler to treat the value as a specific type. If the actual type does not match the cast type, it may lead to runtime errors.\n- **Avoid Overuse**: Use type casting sparingly and only when you are certain about the type of the value. Overusing type casting can bypass TypeScript\'s type-checking and lead to bugs.\n- **Non-null Assertion (`!`)**: You can use the non-null assertion operator (`!`) to tell TypeScript that a value is not `null` or `undefined`.\n\n```typescript\nlet someValue: string | null = "Hello!";\nlet strLength: number = someValue!.length; // Asserts that someValue is not null\nconsole.log(strLength); // Output: 6\n```\n\nBy using type casting carefully, you can ensure your TypeScript code remains type-safe while accommodating scenarios where the compiler cannot infer the type correctly.\n```',level:"Intermediate",created_at:"2025-03-28T17:58:41.418594Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"f81ce0b0-0ce6-4d11-aed4-85d8252acb44",question:"What is the difference between 'type' and 'interface' when extending in TypeScript?",answer:'```markdown\nIn TypeScript, both `type` and `interface` can be used to define the shape of an object, but there are some differences when it comes to extending them:\n\n### 1. **Extending with `interface`**\n- `interface` supports extending other interfaces using the `extends` keyword.\n- An `interface` can extend one or more interfaces or even a class type.\n- Interfaces are open-ended, meaning you can declare the same interface multiple times, and TypeScript will merge their properties.\n\n```typescript\ninterface A {\n  propA: string;\n}\n\ninterface B extends A {\n  propB: number;\n}\n\nconst obj: B = {\n  propA: "Hello",\n  propB: 42,\n};\n```\n\n### 2. **Extending with `type`**\n- `type` uses intersection types (`&`) to combine multiple types.\n- Unlike `interface`, `type` is not open-ended, so you cannot redeclare a type to add new properties.\n- `type` can extend other types, interfaces, or even complex unions.\n\n```typescript\ntype A = {\n  propA: string;\n};\n\ntype B = A & {\n  propB: number;\n};\n\nconst obj: B = {\n  propA: "Hello",\n  propB: 42,\n};\n```\n\n### Key Differences\n| Feature                  | `interface`                     | `type`                          |\n|--------------------------|----------------------------------|----------------------------------|\n| Extending                | Uses `extends` keyword          | Uses intersection types (`&`)   |\n| Open-ended               | Yes, can be merged              | No, cannot be redefined         |\n| Extends Classes          | Yes                             | No                              |\n| Union Types              | No                              | Yes                             |\n\n### When to Use\n- Use `interface` when you need to define a contract for objects and want to take advantage of declaration merging.\n- Use `type` when you need to work with union types, intersections, or more complex type compositions.\n```',level:"Intermediate",created_at:"2025-03-28T17:58:41.418603Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"17225516-fb71-4dd3-b605-26023d571ca8",question:"How do you use the 'NonNullable' utility type in TypeScript?",answer:'```markdown\nIn TypeScript, the `NonNullable` utility type is used to construct a type by excluding `null` and `undefined` from a given type. It is particularly useful when you want to ensure that a value cannot be `null` or `undefined`.\n\n### Syntax:\n```typescript\nNonNullable<Type>\n```\n\n### Example:\n```typescript\ntype Example = string | number | null | undefined;\n\n// Using NonNullable to exclude null and undefined\ntype NonNullableExample = NonNullable<Example>;\n\n// Resulting type: string | number\n```\n\n### Use Case:\nThe `NonNullable` utility type is often used in scenarios where you want to enforce stricter type checks, such as when working with APIs or functions that should not accept `null` or `undefined` values.\n\n### Practical Example:\n```typescript\nfunction processValue(value: NonNullable<string | null | undefined>) {\n  // Here, value is guaranteed to be a string and not null or undefined\n  console.log(value.toUpperCase());\n}\n\n// Valid usage\nprocessValue("Hello");\n\n// Invalid usage (will cause a TypeScript error)\n// processValue(null);\n// processValue(undefined);\n```\n\nBy using `NonNullable`, you can ensure that your code is more robust and avoids potential runtime errors caused by `null` or `undefined` values.\n```',level:"Advanced",created_at:"2025-03-28T17:58:41.418611Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"339a3dc8-3f64-46d5-8579-906b1db06a52",question:"What is the purpose of the 'Awaited' utility type in TypeScript?",answer:"```markdown\nThe `Awaited` utility type in TypeScript is used to infer the resolved type of a `Promise` or a value that is `await`-ed. It is particularly useful when working with asynchronous code, as it helps extract the type of the value that a `Promise` resolves to, or the type returned by an `async` function.\n\n### Purpose:\n1. **Extract Resolved Types**: It allows developers to determine the type of the value that a `Promise` resolves to, simplifying type handling in asynchronous workflows.\n2. **Handle Nested Promises**: It can recursively unwrap nested `Promise` types, ensuring the correct resolved type is inferred.\n3. **Type Safety**: It improves type safety by ensuring that the resolved type is accurately represented in the code.\n\n### Example:\n```typescript\ntype Example = Promise<string>;\n\ntype Resolved = Awaited<Example>; // Resolved is inferred as 'string'\n\nasync function fetchData(): Promise<number> {\n  return 42;\n}\n\ntype Result = Awaited<ReturnType<typeof fetchData>>; // Result is inferred as 'number'\n```\n\n### Key Points:\n- Introduced in TypeScript 4.5.\n- Works with both `Promise` and non-`Promise` values, making it versatile.\n- Simplifies type inference in complex asynchronous scenarios.\n\nThe `Awaited` utility type is a powerful tool for managing asynchronous code and ensuring type correctness in TypeScript.\n```",level:"Advanced",created_at:"2025-03-28T17:58:41.418620Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"26b2e937-8ebb-425f-aa93-462ac823f3cc",question:"How do you define and use enums in TypeScript?",answer:`\`\`\`markdown
In TypeScript, enums are a way to define a set of named constants, which can be either numeric or string-based. Enums make it easier to work with a group of related values and improve code readability.

### Defining an Enum
You can define an enum using the \`enum\` keyword. Here's an example of a numeric enum:

\`\`\`typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
\`\`\`

In this example:
- \`Up\` is explicitly assigned the value \`1\`.
- The rest of the members (\`Down\`, \`Left\`, \`Right\`) are auto-incremented, so \`Down\` will be \`2\`, \`Left\` will be \`3\`, and \`Right\` will be \`4\`.

You can also define string enums:

\`\`\`typescript
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}
\`\`\`

Here, each member is explicitly assigned a string value.

### Using Enums
You can use enums to access their members or values:

\`\`\`typescript
// Accessing enum members
const direction: Direction = Direction.Up;
console.log(direction); // Output: 1

// Accessing enum names using values
const directionName: string = Direction[1];
console.log(directionName); // Output: "Up"

// Using string enums
const status: Status = Status.Success;
console.log(status); // Output: "SUCCESS"
\`\`\`

### Key Points
1. Numeric enums can have auto-incremented values.
2. String enums require explicit assignment of values.
3. Enums can be used for both type safety and readability in your code.

Enums are particularly useful when you have a fixed set of related constants that you want to use throughout your application.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:58:41.418629Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"b586d1ba-11c5-4cf5-9922-783ddf4f9773",question:"What are ambient declarations in TypeScript, and when are they used?",answer:`\`\`\`markdown
### Ambient Declarations in TypeScript

Ambient declarations in TypeScript are used to describe the shape or type of code that exists outside of the TypeScript project, typically in JavaScript or other external libraries. These declarations allow TypeScript to understand and type-check code that is not written in TypeScript but is still used in a TypeScript project.

Ambient declarations are written using the \`declare\` keyword and are typically found in \`.d.ts\` (declaration) files. These files do not contain any implementation; they only provide type information. This is particularly useful when working with third-party libraries that do not have their own TypeScript type definitions.

### When to Use Ambient Declarations

1. **Interfacing with JavaScript Libraries**: When using a JavaScript library that does not provide TypeScript type definitions, you can write ambient declarations to describe the library's API.

2. **Global Variables or Modules**: When you need to declare global variables, modules, or namespaces that are not explicitly defined in your TypeScript code.

3. **Custom Type Definitions**: When extending or customizing existing type definitions for libraries or frameworks.

4. **Legacy Codebases**: When integrating TypeScript into a legacy JavaScript project, ambient declarations can help describe the existing codebase without rewriting it.

### Example

Here is an example of an ambient declaration for a global variable:

\`\`\`typescript
// globals.d.ts
declare const API_URL: string;
\`\`\`

This tells TypeScript that a global variable \`API_URL\` exists and is of type \`string\`.

Another example for a module:

\`\`\`typescript
// myLibrary.d.ts
declare module "myLibrary" {
  export function doSomething(param: string): void;
}
\`\`\`

This allows TypeScript to understand the \`myLibrary\` module and its \`doSomething\` function.

### Summary

Ambient declarations are a powerful feature in TypeScript that enable type safety and better tooling support when working with external or legacy code. They bridge the gap between TypeScript and non-TypeScript codebases, ensuring a seamless development experience.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:58:41.418638Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"a53794f7-4327-4f49-ab50-4ff3eb9568dc",question:"How do you work with third-party libraries that don't have TypeScript definitions?",answer:"```markdown\nWhen working with third-party libraries that don't have TypeScript definitions, you can handle this situation in the following ways:\n\n1. **Install Community-Maintained Type Definitions**:  \n   Many libraries have TypeScript definitions maintained by the community, which are available in the DefinitelyTyped repository. You can install these using the `@types` package. For example:\n   ```bash\n   npm install --save-dev @types/library-name\n   ```\n   Check if the type definitions exist for the library before proceeding.\n\n2. **Use the `any` Type**:  \n   If no type definitions are available and you need a quick solution, you can use the `any` type. However, this approach sacrifices type safety:\n   ```typescript\n   const library: any = require('library-name');\n   ```\n\n3. **Create a Custom Type Declaration File**:  \n   If no type definitions exist, you can create your own `.d.ts` file to define the types for the library. For example, create a `library-name.d.ts` file in your project:\n   ```typescript\n   declare module 'library-name' {\n       export function someFunction(arg: string): number;\n       // Add other type definitions as needed\n   }\n   ```\n\n4. **Use the `declare` Keyword**:  \n   If you only need to use a small part of the library, you can declare the module inline in your code:\n   ```typescript\n   declare module 'library-name';\n   ```\n\n5. **Use `ts-ignore` as a Last Resort**:  \n   If you are unable to define types and need to bypass TypeScript errors temporarily, you can use `// @ts-ignore` to suppress the error. This should only be used sparingly:\n   ```typescript\n   // @ts-ignore\n   import library from 'library-name';\n   ```\n\n6. **Contribute to the Community**:  \n   If you create custom type definitions for a library, consider contributing them to the DefinitelyTyped repository so others can benefit.\n\nBy following these steps, you can effectively work with third-party libraries that lack TypeScript definitions while maintaining as much type safety as possible.\n```",level:"Intermediate",created_at:"2025-03-28T17:58:41.418646Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"a6bdeae7-4b6d-4166-ab4c-12f61e395fe5",question:"What is the purpose of declaration merging in TypeScript?",answer:`\`\`\`markdown
Declaration merging in TypeScript allows multiple declarations with the same name to be combined into a single definition. This feature is particularly useful for extending existing types, interfaces, or modules without modifying their original definitions. It enables developers to:

1. **Extend Interfaces**: Add additional properties or methods to an existing interface.
2. **Augment Modules**: Add new members to existing modules, such as extending third-party libraries.
3. **Combine Function Overloads**: Merge multiple function declarations to support different parameter and return type combinations.

This capability enhances flexibility and reusability in TypeScript, making it easier to work with external libraries and maintain modular code.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:58:41.418654Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"334d4c34-943a-4982-a73f-0cf8a8f44702",question:"How do you use the 'this' keyword in TypeScript classes?",answer:`\`\`\`markdown
In TypeScript classes, the \`this\` keyword refers to the current instance of the class. It is used to access the properties and methods of the class within its scope. Here's an example:

\`\`\`typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name; // Using 'this' to refer to the class property
  }

  greet() {
    console.log(\`Hello, my name is \${this.name}.\`); // Accessing 'name' using 'this'
  }
}

const person = new Person("Alice");
person.greet(); // Output: Hello, my name is Alice.
\`\`\`

### Key Points:
1. \`this\` always refers to the current instance of the class.
2. It is commonly used in constructors and methods to access or modify class properties.
3. Be cautious when using \`this\` in callbacks or event handlers, as the context of \`this\` may change. To preserve the context, you can use arrow functions or explicitly bind the method.

Example of preserving \`this\` context with an arrow function:

\`\`\`typescript
class Counter {
  count: number = 0;

  increment = () => {
    this.count++;
    console.log(this.count);
  };
}

const counter = new Counter();
const incrementFn = counter.increment;
incrementFn(); // Output: 1 (context of 'this' is preserved)
\`\`\`
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:58:41.418663Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"be6b0376-1e85-4660-bf9b-8382157399fd",question:"What are the differences between static and instance members in TypeScript classes?",answer:`\`\`\`markdown
In TypeScript, static and instance members of a class differ in the following ways:

1. **Definition and Access**:
   - **Static Members**: These are defined using the \`static\` keyword and belong to the class itself, not to any specific instance. They are accessed directly on the class (e.g., \`ClassName.staticMember\`).
   - **Instance Members**: These are defined without the \`static\` keyword and belong to individual instances of the class. They are accessed through an instance of the class (e.g., \`instance.instanceMember\`).

2. **Memory Allocation**:
   - **Static Members**: Only one copy of a static member exists, regardless of the number of instances of the class. It is shared across all instances.
   - **Instance Members**: Each instance of the class has its own copy of the instance members, meaning they are unique to each object.

3. **Use Cases**:
   - **Static Members**: Used for properties or methods that are common to all instances and do not depend on instance-specific data. For example, utility functions or constants.
   - **Instance Members**: Used for properties or methods that are specific to an instance and may vary between instances.

4. **Access Restrictions**:
   - **Static Members**: Cannot access instance members directly because they do not belong to any specific instance. To access instance members, a static method would need an instance of the class.
   - **Instance Members**: Can access both static and instance members of the class.

### Example:
\`\`\`typescript
class Example {
  static staticProperty: string = "I am static";
  instanceProperty: string;

  constructor(instanceProperty: string) {
    this.instanceProperty = instanceProperty;
  }

  static staticMethod() {
    console.log("Static method called");
    // Cannot access instanceProperty directly
    // console.log(this.instanceProperty); // Error
  }

  instanceMethod() {
    console.log("Instance method called");
    console.log(Example.staticProperty); // Can access static members
  }
}

// Accessing static members
console.log(Example.staticProperty); // "I am static"
Example.staticMethod(); // "Static method called"

// Accessing instance members
const instance = new Example("I am an instance");
console.log(instance.instanceProperty); // "I am an instance"
instance.instanceMethod(); 
// "Instance method called"
// "I am static"
\`\`\`

In summary, static members are tied to the class itself, while instance members are tied to individual instances of the class. They serve different purposes and are accessed differently.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:58:41.418672Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"},{id:"2f9029f5-5d4c-45c2-85b0-5198d2644a58",question:"How do you handle circular dependencies in TypeScript?",answer:`\`\`\`markdown
### Handling Circular Dependencies in TypeScript

Circular dependencies occur when two or more modules depend on each other, either directly or indirectly. In TypeScript, circular dependencies can lead to runtime errors or unexpected behavior. Here are some strategies to handle them:

1. **Refactor Code to Remove Circular Dependencies**:
   - Analyze the dependency graph and identify the circular references.
   - Break the dependency chain by restructuring the code. For example:
     - Extract shared logic into a separate module.
     - Use dependency injection to decouple modules.

2. **Use Interfaces or Abstract Classes**:
   - Instead of importing concrete implementations, use interfaces or abstract classes to define contracts. This reduces direct dependencies between modules.

   \`\`\`typescript
   // Module A
   import { BInterface } from './B';

   export class A {
       constructor(private b: BInterface) {}
   }

   // Module B
   import { A } from './A';

   export interface BInterface {
       doSomething(): void;
   }

   export class B implements BInterface {
       constructor(private a: A) {}
       doSomething() {
           console.log('B is doing something');
       }
   }
   \`\`\`

3. **Lazy Imports**:
   - Use dynamic imports (\`import()\`) to defer the loading of a module until it's needed. This can break the circular dependency at runtime.

   \`\`\`typescript
   class A {
       async useB() {
           const { B } = await import('./B');
           const b = new B();
           b.doSomething();
       }
   }
   \`\`\`

4. **Re-export Modules**:
   - Use a central module to re-export dependencies, reducing direct imports between modules.

   \`\`\`typescript
   // index.ts
   export { A } from './A';
   export { B } from './B';

   // A.ts and B.ts import from index.ts instead of each other
   \`\`\`

5. **Type-Only Imports**:
   - Use \`import type\` to import only types, which avoids runtime circular dependencies.

   \`\`\`typescript
   import type { B } from './B';

   export class A {
       b!: B;
   }
   \`\`\`

6. **Enable \`esModuleInterop\` or \`allowSyntheticDefaultImports\`**:
   - In some cases, enabling these compiler options in \`tsconfig.json\` can help resolve circular dependencies when working with CommonJS modules.

   \`\`\`json
   {
       "compilerOptions": {
           "esModuleInterop": true,
           "allowSyntheticDefaultImports": true
       }
   }
   \`\`\`

7. **Use Dependency Injection Frameworks**:
   - Frameworks like \`InversifyJS\` or \`NestJS\` can help manage dependencies and resolve circular references automatically.

8. **Be Aware of Execution Order**:
   - Circular dependencies can cause issues due to the order in which modules are executed. Ensure that initialization logic does not rely on incomplete module states.

By carefully analyzing and refactoring your code, you can effectively manage and eliminate circular dependencies in TypeScript.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:58:41.418681Z",topic:"82ef8628-02db-4238-a140-023ad52e3778"}];export{e as default};
