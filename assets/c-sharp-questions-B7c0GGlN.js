const e=[{id:"3ed68f52-d4de-49a1-ab03-e15be47b5948",question:"What is the purpose of the 'params' keyword in C#?",answer:`\`\`\`markdown
The \`params\` keyword in C# is used to specify a method parameter that takes a variable number of arguments. It allows you to pass a comma-separated list of arguments of the same type to a method, or even an array of that type. This is particularly useful when the exact number of arguments is not known at compile time.

### Key Points:
1. A method can only have one \`params\` parameter, and it must be the last parameter in the method's parameter list.
2. The \`params\` parameter can accept zero or more arguments.
3. If no arguments are passed for the \`params\` parameter, it defaults to an empty array.

### Example:
\`\`\`csharp
using System;

class Program
{
    static void PrintNumbers(params int[] numbers)
    {
        foreach (int number in numbers)
        {
            Console.WriteLine(number);
        }
    }

    static void Main()
    {
        PrintNumbers(1, 2, 3, 4, 5); // Passing multiple arguments
        PrintNumbers(); // Passing no arguments
    }
}
\`\`\`

### Output:
\`\`\`
1
2
3
4
5
\`\`\`

The \`params\` keyword simplifies method calls and makes the code more flexible when dealing with a variable number of inputs.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531933Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"04457358-25dc-407d-8951-4bbe314a1928",question:"What is C# and what are its main features?",answer:`\`\`\`markdown
C# is a modern, object-oriented, and type-safe programming language developed by Microsoft as part of its .NET platform. It is designed for building a wide range of applications, including web, desktop, mobile, and cloud-based solutions. C# combines the power of C++ with the simplicity of Visual Basic, making it easy to learn and use.

### Main Features of C#:
1. **Object-Oriented Programming (OOP):** C# supports OOP principles such as encapsulation, inheritance, and polymorphism, enabling modular and reusable code.
2. **Type Safety:** C# ensures type safety, preventing type errors during runtime and improving application reliability.
3. **Automatic Garbage Collection:** It has a built-in garbage collector that manages memory allocation and deallocation, reducing memory leaks.
4. **Rich Standard Library:** C# provides a comprehensive library (part of the .NET framework) for handling tasks like file I/O, networking, and data manipulation.
5. **Cross-Platform Development:** With .NET Core and .NET 5/6+, C# supports cross-platform development, allowing applications to run on Windows, macOS, and Linux.
6. **Asynchronous Programming:** C# includes support for asynchronous programming with \`async\` and \`await\` keywords, improving application responsiveness.
7. **LINQ (Language Integrated Query):** C# provides LINQ for querying collections and databases in a concise and readable manner.
8. **Interoperability:** C# can interoperate with other languages and technologies, such as COM components and native C++ code.
9. **Strong Community and Tooling Support:** C# is supported by powerful development tools like Visual Studio and has a large, active developer community.
10. **Modern Features:** C# continuously evolves with new versions, introducing features like pattern matching, records, nullable reference types, and more.

C# is widely used for developing enterprise-level applications, games (using Unity), and cloud-based solutions, making it a versatile and popular programming language.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:56:09.531395Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"1fcc5257-5fd5-4e92-8614-838d7f4fd6bd",question:"What is the difference between a class and an object in C#?",answer:`\`\`\`markdown
In C#, a **class** is a blueprint or template that defines the structure and behavior (properties, methods, etc.) of objects. It is a user-defined data type that acts as a prototype for creating objects. A class itself does not occupy memory until an object is created from it.

An **object**, on the other hand, is an instance of a class. It is a concrete entity that is created based on the class definition and occupies memory. Objects are used to access the members (properties, methods, etc.) defined in the class.

### Key Differences:
| **Class**                          | **Object**                          |
|------------------------------------|-------------------------------------|
| A class is a logical construct.    | An object is a physical instance.   |
| It defines the structure and behavior. | It represents an actual entity.    |
| Does not occupy memory by itself.  | Occupies memory when created.       |
| Example: \`class Car { ... }\`       | Example: \`Car myCar = new Car();\`   |

In summary, a class is the definition, while an object is the realization of that definition.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:56:09.531437Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"0266b68c-28b0-4b6b-bf27-2630e3885bf2",question:"What is the Common Language Runtime (CLR) in C#?",answer:`\`\`\`markdown
The Common Language Runtime (CLR) in C# is a core component of the .NET Framework that provides a runtime environment for executing .NET applications. It manages the execution of code written in .NET languages, such as C#, VB.NET, and F#. The CLR offers several key services, including:

1. **Memory Management**: Automatically handles memory allocation and garbage collection.
2. **Type Safety**: Ensures that code adheres to type safety rules.
3. **Just-In-Time (JIT) Compilation**: Converts Intermediate Language (IL) code into native machine code for execution.
4. **Exception Handling**: Provides a structured way to handle runtime errors.
5. **Security**: Enforces code access security and verifies code integrity.
6. **Interoperability**: Allows .NET applications to interact with unmanaged code (e.g., COM components or native libraries).

The CLR is a fundamental part of the .NET ecosystem, enabling developers to write robust, secure, and platform-independent applications.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:56:09.531456Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"4291ad06-d544-4861-a63b-189be45e2f6a",question:"What is the purpose of the 'using' keyword in C#?",answer:'```markdown\nThe `using` keyword in C# serves two main purposes:\n\n1. **Namespace Inclusion**: It allows you to include namespaces in your code, enabling you to access classes, methods, and other members defined in those namespaces without needing to use their fully qualified names. For example:\n   ```csharp\n   using System;\n\n   class Program\n   {\n       static void Main()\n       {\n           Console.WriteLine("Hello, World!");\n       }\n   }\n   ```\n\n2. **Resource Management**: It is used to ensure that unmanaged resources (like file handles, database connections, etc.) are properly disposed of when they are no longer needed. This is done by creating a `using` statement block that automatically calls the `Dispose` method on objects that implement the `IDisposable` interface. For example:\n   ```csharp\n   using (var file = new System.IO.StreamWriter("example.txt"))\n   {\n       file.WriteLine("Hello, World!");\n   }\n   // The file is automatically closed and disposed of here.\n   ```\n\nIn summary, the `using` keyword is essential for both simplifying code readability and ensuring proper resource management in C#.\n```',level:"Beginner",created_at:"2025-03-28T17:56:09.531466Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"5c386065-de58-4c40-9479-fb964da2efbf",question:"What are value types and reference types in C#?",answer:`\`\`\`markdown
In C#, types are categorized into two main types: **Value Types** and **Reference Types**.

### Value Types
- Value types store the actual data directly in their memory allocation.
- They are stored in the stack, which makes them faster to access.
- Examples of value types include:
  - Primitive types like \`int\`, \`float\`, \`double\`, \`bool\`, \`char\`
  - Structs (\`struct\`) and Enumerations (\`enum\`)
- When a value type is assigned to another value type, a copy of the value is made.

#### Example:
\`\`\`csharp
int a = 10;
int b = a; // b gets a copy of the value of a
b = 20;    // Changing b does not affect a
Console.WriteLine(a); // Output: 10
\`\`\`

### Reference Types
- Reference types store a reference (or address) to the memory location where the actual data is stored.
- They are stored in the heap, and the reference to the data is stored in the stack.
- Examples of reference types include:
  - Classes (\`class\`)
  - Interfaces
  - Delegates
  - Arrays
  - Strings
- When a reference type is assigned to another reference type, both variables refer to the same memory location.

#### Example:
\`\`\`csharp
class Person
{
    public string Name { get; set; }
}

Person person1 = new Person { Name = "Alice" };
Person person2 = person1; // person2 refers to the same object as person1
person2.Name = "Bob";     // Changing person2's Name also affects person1
Console.WriteLine(person1.Name); // Output: Bob
\`\`\`

### Key Differences
| **Aspect**        | **Value Types**                     | **Reference Types**                  |
|--------------------|-------------------------------------|--------------------------------------|
| **Storage**        | Stored in the stack                | Stored in the heap                   |
| **Data Handling**  | Contains actual data               | Contains a reference to the data     |
| **Assignment**     | Creates a copy of the value        | Copies the reference (points to the same object) |
| **Performance**    | Faster due to stack allocation     | Slower due to heap allocation        |

Understanding the difference between value types and reference types is crucial for managing memory and avoiding unintended side effects in your C# programs.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:56:09.531475Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"e5803c0e-92ba-4be4-a83b-1ed6ad7b2e2a",question:"What is the difference between 'const' and 'readonly' in C#?",answer:"```markdown\nIn C#, both `const` and `readonly` are used to define values that cannot be changed after they are set, but there are key differences between the two:\n\n### `const`\n- A `const` field is a compile-time constant, meaning its value must be assigned at the time of declaration and cannot be changed later.\n- The value of a `const` is implicitly static, so it is shared across all instances of the class and accessed using the class name.\n- Only primitive types, enums, or strings can be declared as `const`.\n- Example:\n  ```csharp\n  public const double Pi = 3.14159;\n  ```\n\n### `readonly`\n- A `readonly` field can only be assigned during declaration or within the constructor of the class.\n- Unlike `const`, `readonly` fields are not implicitly static, so they can have different values for different instances of the class (unless explicitly declared as `static`).\n- `readonly` can hold complex types, including objects.\n- Example:\n  ```csharp\n  public readonly int MyValue;\n\n  public MyClass(int value)\n  {\n      MyValue = value;\n  }\n  ```\n\n### Key Differences\n| Feature            | `const`                  | `readonly`              |\n|---------------------|--------------------------|--------------------------|\n| Assignment          | At declaration only      | At declaration or in constructor |\n| Runtime/Compile-time| Compile-time constant    | Runtime constant         |\n| Implicitly static   | Yes                      | No                       |\n| Supported types     | Primitive, enum, string  | Any type                 |\n\nIn summary, use `const` for values that are fixed and known at compile time, and use `readonly` for values that are determined at runtime or may vary between instances.\n```",level:"Beginner",created_at:"2025-03-28T17:56:09.531487Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"b343eba2-4a29-483f-964e-61fa99d6d0bf",question:"What is the difference between '==' and '.Equals()' in C#?",answer:'```markdown\nIn C#, `==` and `.Equals()` are used to compare objects, but they work differently:\n\n1. **`==` Operator**:\n   - The `==` operator is used to compare the values of two objects.\n   - For value types (e.g., `int`, `float`), it checks if the values are equal.\n   - For reference types (e.g., objects, strings), it checks if the references (memory addresses) are the same, unless the `==` operator is overridden in the class to compare values.\n\n2. **`.Equals()` Method**:\n   - The `.Equals()` method is used to determine whether two objects are equal.\n   - By default, the base implementation in the `Object` class checks for reference equality (same memory address).\n   - However, many types (e.g., `string`, custom classes) override `.Equals()` to perform value-based comparisons.\n\n### Key Differences:\n- `==` can be overridden by a type to provide custom behavior, while `.Equals()` is a method that can also be overridden for custom equality logic.\n- For strings in C#, both `==` and `.Equals()` compare the values of the strings because the `string` class overrides both for value comparison.\n\n### Example:\n```csharp\nstring str1 = "hello";\nstring str2 = "hello";\n\nConsole.WriteLine(str1 == str2);       // True (compares values)\nConsole.WriteLine(str1.Equals(str2)); // True (compares values)\n\nobject obj1 = new object();\nobject obj2 = new object();\n\nConsole.WriteLine(obj1 == obj2);       // False (compares references)\nConsole.WriteLine(obj1.Equals(obj2)); // False (default reference equality)\n```\n\n### Summary:\n- Use `==` for general equality checks, especially for primitive types or when overridden for value comparison.\n- Use `.Equals()` when you want to explicitly check for value equality, especially for objects where `.Equals()` has been overridden.\n```',level:"Beginner",created_at:"2025-03-28T17:56:09.531500Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"b682d9cf-f0d6-44a1-9154-8129c14c42f6",question:"What is a namespace in C# and why is it used?",answer:`\`\`\`markdown
In C#, a **namespace** is a way to organize and group related classes, interfaces, structs, enums, and delegates. It provides a hierarchical structure to manage code and avoid naming conflicts between different parts of a program or between different libraries.

### Why is it used?
1. **Avoid Naming Conflicts**: Namespaces help prevent naming collisions by encapsulating code elements within a specific context. For example, two classes with the same name can exist in different namespaces without conflict.
2. **Code Organization**: They make the codebase more structured and easier to navigate by grouping related functionalities together.
3. **Reusability**: Namespaces allow developers to reuse code from libraries or frameworks without worrying about conflicts with existing code.
4. **Readability**: Using namespaces improves the readability and maintainability of the code.

### Example:
\`\`\`csharp
using System;

namespace MyApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
\`\`\`

In this example:
- \`System\` is a namespace that provides access to built-in classes like \`Console\`.
- \`MyApplication\` is a custom namespace that contains the \`Program\` class.
\`\`\`
`,level:"Beginner",created_at:"2025-03-28T17:56:09.531514Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"13b76828-64f2-4bf7-99e2-1e04fc562e5c",question:"What is the difference between 'public', 'private', 'protected', and 'internal' access modifiers in C#?",answer:`\`\`\`markdown
In C#, access modifiers define the accessibility of classes, methods, and other members. Here’s the difference between \`public\`, \`private\`, \`protected\`, and \`internal\`:

1. **public**:
   - The member is accessible from anywhere in the application.
   - There are no restrictions on access.

   \`\`\`csharp
   public class MyClass
   {
       public int MyProperty { get; set; }
   }
   \`\`\`

2. **private**:
   - The member is accessible only within the class in which it is defined.
   - It is the most restrictive access level.

   \`\`\`csharp
   public class MyClass
   {
       private int MyProperty { get; set; }
   }
   \`\`\`

3. **protected**:
   - The member is accessible within its own class and by derived classes.
   - It is useful for inheritance scenarios.

   \`\`\`csharp
   public class MyClass
   {
       protected int MyProperty { get; set; }
   }
   \`\`\`

4. **internal**:
   - The member is accessible only within the same assembly (project).
   - It is not accessible from another assembly.

   \`\`\`csharp
   internal class MyClass
   {
       internal int MyProperty { get; set; }
   }
   \`\`\`

Additionally, you can combine \`protected\` and \`internal\` as \`protected internal\`:
- The member is accessible within the same assembly or by derived classes in other assemblies.

\`\`\`csharp
public class MyClass
{
    protected internal int MyProperty { get; set; }
}
\`\`\`

Each access modifier serves a specific purpose, allowing you to control how your code is exposed and used.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:56:09.531524Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"7f7ec9c1-dad3-4527-ad42-10b604e9ea8b",question:"What is the purpose of the 'static' keyword in C#?",answer:`\`\`\`markdown
In C#, the \`static\` keyword is used to declare members (fields, methods, properties, etc.) or classes that belong to the type itself rather than to a specific instance of the type. This means that \`static\` members are shared across all instances of the class and can be accessed without creating an object of the class.

### Key Points About \`static\`:
1. **Static Members**:
   - Declared using the \`static\` keyword.
   - Can be accessed using the class name (e.g., \`ClassName.StaticMember\`).
   - Useful for defining utility methods or shared data.

   \`\`\`csharp
   public class MathHelper
   {
       public static int Add(int a, int b)
       {
           return a + b;
       }
   }

   // Usage
   int result = MathHelper.Add(5, 3); // No need to create an instance
   \`\`\`

2. **Static Classes**:
   - A class can be declared as \`static\` if all its members are static.
   - Cannot be instantiated or inherited.
   - Typically used for utility or helper classes.

   \`\`\`csharp
   public static class Utility
   {
       public static void PrintMessage(string message)
       {
           Console.WriteLine(message);
       }
   }

   // Usage
   Utility.PrintMessage("Hello, World!");
   \`\`\`

3. **Static Constructors**:
   - A special constructor used to initialize static members of a class.
   - Called automatically before any static member is accessed or any instance is created.
   - Cannot take parameters and is defined using the \`static\` keyword.

   \`\`\`csharp
   public class Config
   {
       public static string AppName;

       static Config()
       {
           AppName = "My Application";
       }
   }

   // Usage
   Console.WriteLine(Config.AppName);
   \`\`\`

4. **Static Variables**:
   - Shared across all instances of the class.
   - Retain their value between method calls.

   \`\`\`csharp
   public class Counter
   {
       public static int Count = 0;

       public void Increment()
       {
           Count++;
       }
   }

   // Usage
   Counter c1 = new Counter();
   c1.Increment();
   Console.WriteLine(Counter.Count); // Output: 1
   \`\`\`

### Summary:
The \`static\` keyword is used to define members or classes that are shared and do not require an instance to be accessed. It is particularly useful for creating utility classes, shared data, or methods that do not depend on instance-specific data.
\`\`\``,level:"Beginner",created_at:"2025-03-28T17:56:09.531533Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"ebf0dc11-985b-4750-9c6e-6d3a3d30fd62",question:"What is an interface in C# and how is it different from an abstract class?",answer:`\`\`\`markdown
In C#, an **interface** is a contract that defines a set of methods, properties, events, or indexers without providing any implementation. It is used to specify what a class must do, but not how it does it. A class or struct that implements an interface must provide concrete implementations for all its members.

### Key Features of an Interface:
- Declares members without any implementation.
- Supports multiple inheritance, meaning a class can implement multiple interfaces.
- Members are implicitly public and abstract.
- Cannot contain fields, constructors, destructors, or static members (except static methods with implementation in C# 8.0 and later).

### Syntax:
\`\`\`csharp
public interface IExample
{
    void Method1();
    int Property1 { get; set; }
}
\`\`\`

### Abstract Class vs Interface:
| **Aspect**               | **Abstract Class**                                                                 | **Interface**                                                                 |
|--------------------------|------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Purpose**              | Serves as a base class for related classes with shared functionality.              | Defines a contract that implementing classes must follow.                    |
| **Implementation**       | Can have both abstract and concrete (implemented) members.                        | Cannot have implementation (except default interface methods in C# 8.0+).    |
| **Inheritance**          | Supports single inheritance (a class can inherit only one abstract class).        | Supports multiple inheritance (a class can implement multiple interfaces).   |
| **Access Modifiers**     | Members can have different access modifiers (e.g., \`protected\`, \`private\`).        | Members are always \`public\` and cannot have access modifiers.                |
| **Fields**               | Can have fields (instance or static).                                              | Cannot have fields.                                                          |
| **Constructors**         | Can have constructors.                                                            | Cannot have constructors.                                                    |
| **Use Case**             | Use when classes share common functionality and behavior.                         | Use when unrelated classes need to follow the same contract or behavior.     |

### Example:
\`\`\`csharp
// Interface
public interface IAnimal
{
    void Speak();
}

// Abstract Class
public abstract class Animal
{
    public abstract void Speak();
    public void Eat()
    {
        Console.WriteLine("Eating...");
    }
}

// Implementing Interface
public class Dog : IAnimal
{
    public void Speak()
    {
        Console.WriteLine("Bark");
    }
}

// Inheriting Abstract Class
public class Cat : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Meow");
    }
}
\`\`\`

### Summary:
- Use an **interface** when you need to define a contract that multiple unrelated classes can implement.
- Use an **abstract class** when you need to provide a base class with shared functionality and behavior for related classes.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531542Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"e323f291-6fa7-4b06-a686-bad50de767fb",question:"What is polymorphism in C# and how is it implemented?",answer:`\`\`\`markdown
Polymorphism in C# is one of the core principles of object-oriented programming (OOP). It allows objects to be treated as instances of their parent class rather than their actual class. The term "polymorphism" means "many forms," and in C#, it enables a single method, property, or operator to behave differently based on the context or the object it is acting upon.

### Types of Polymorphism in C#
1. **Compile-time Polymorphism (Static Polymorphism)**:
   - Achieved through method overloading and operator overloading.
   - The method to be invoked is determined at compile time.

   **Example of Method Overloading**:
   \`\`\`csharp
   public class Calculator
   {
       public int Add(int a, int b)
       {
           return a + b;
       }

       public double Add(double a, double b)
       {
           return a + b;
       }
   }
   \`\`\`

2. **Runtime Polymorphism (Dynamic Polymorphism)**:
   - Achieved through method overriding using inheritance.
   - The method to be invoked is determined at runtime based on the actual object type.

   **Example of Method Overriding**:
   \`\`\`csharp
   public class Animal
   {
       public virtual void Speak()
       {
           Console.WriteLine("Animal speaks");
       }
   }

   public class Dog : Animal
   {
       public override void Speak()
       {
           Console.WriteLine("Dog barks");
       }
   }

   public class Cat : Animal
   {
       public override void Speak()
       {
           Console.WriteLine("Cat meows");
       }
   }

   public class Program
   {
       public static void Main()
       {
           Animal animal;

           animal = new Dog();
           animal.Speak(); // Output: Dog barks

           animal = new Cat();
           animal.Speak(); // Output: Cat meows
       }
   }
   \`\`\`

### Key Points
- **Method Overloading**: Same method name with different parameters (compile-time polymorphism).
- **Method Overriding**: Using the \`virtual\` keyword in the base class and the \`override\` keyword in the derived class (runtime polymorphism).
- Polymorphism promotes code reusability and flexibility by allowing methods to behave differently based on the object type.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531551Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"0bdf237a-9a50-4b2a-a6dd-b5d1bad643ed",question:"What is the difference between method overloading and method overriding in C#?",answer:`\`\`\`markdown
In C#, method overloading and method overriding are two distinct concepts used to define methods with similar names but different behaviors.

### Method Overloading
- **Definition**: Method overloading allows multiple methods in the same class to have the same name but with different parameter lists (type, number, or order of parameters).
- **Purpose**: It provides flexibility to call a method based on different input parameters.
- **Compile-Time**: It is resolved at compile-time (also known as compile-time polymorphism).
- **Example**:
  \`\`\`csharp
  public class Calculator
  {
      public int Add(int a, int b)
      {
          return a + b;
      }

      public double Add(double a, double b)
      {
          return a + b;
      }
  }
  \`\`\`

### Method Overriding
- **Definition**: Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its base class.
- **Purpose**: It enables runtime polymorphism, allowing the subclass to modify or extend the behavior of the base class method.
- **Runtime**: It is resolved at runtime (also known as runtime polymorphism).
- **Requirements**:
  - The base class method must be marked as \`virtual\`, \`abstract\`, or \`override\`.
  - The overriding method in the derived class must use the \`override\` keyword.
- **Example**:
  \`\`\`csharp
  public class Animal
  {
      public virtual void Speak()
      {
          Console.WriteLine("Animal speaks");
      }
  }

  public class Dog : Animal
  {
      public override void Speak()
      {
          Console.WriteLine("Dog barks");
      }
  }
  \`\`\`

### Key Differences
| Aspect               | Method Overloading                       | Method Overriding                       |
|----------------------|------------------------------------------|-----------------------------------------|
| **Definition**       | Same method name, different parameters.  | Same method name and signature, different implementation. |
| **Polymorphism**     | Compile-time polymorphism.               | Runtime polymorphism.                   |
| **Inheritance**      | Not required.                           | Requires inheritance.                   |
| **Keywords**         | No special keywords needed.             | Uses \`virtual\`, \`override\`, or \`abstract\`. |
| **Behavior**         | Adds multiple versions of a method.      | Modifies the behavior of a base class method. |

Both concepts are essential for achieving method flexibility and polymorphism in C#.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531561Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"31177286-8f13-4988-ae60-8cb1b61d791a",question:"What are delegates in C# and how are they used?",answer:`\`\`\`markdown
### Delegates in C#

A delegate in C# is a type that represents references to methods with a specific signature and return type. Delegates are similar to function pointers in C or C++, but they are type-safe and object-oriented. They allow methods to be passed as parameters, enabling dynamic method invocation.

#### Key Features of Delegates:
1. **Type-Safe**: Delegates ensure that the method signature matches the delegate signature.
2. **Multicast Support**: A delegate can reference multiple methods, allowing invocation of all methods in the invocation list.
3. **Encapsulation**: Delegates encapsulate method references, enabling dynamic behavior at runtime.
4. **Event Handling**: Delegates are commonly used in event-driven programming to define and handle events.

#### Syntax for Declaring and Using Delegates:
1. **Declaration**:
   \`\`\`csharp
   public delegate void MyDelegate(string message);
   \`\`\`
   Here, \`MyDelegate\` is a delegate type that can reference methods with a \`void\` return type and a single \`string\` parameter.

2. **Instantiation**:
   \`\`\`csharp
   MyDelegate del = new MyDelegate(SomeMethod);
   \`\`\`
   Alternatively, you can use shorthand:
   \`\`\`csharp
   MyDelegate del = SomeMethod;
   \`\`\`

3. **Invocation**:
   \`\`\`csharp
   del("Hello, World!");
   \`\`\`

#### Example:
\`\`\`csharp
using System;

public class Program
{
    // Define a delegate
    public delegate void PrintMessage(string message);

    // Method matching the delegate signature
    public static void PrintToConsole(string message)
    {
        Console.WriteLine(message);
    }

    public static void Main()
    {
        // Instantiate the delegate
        PrintMessage printDelegate = PrintToConsole;

        // Invoke the delegate
        printDelegate("Hello, Delegates!");

        // Multicast delegate example
        printDelegate += AnotherMethod;
        printDelegate("Multicast Example");
    }

    public static void AnotherMethod(string message)
    {
        Console.WriteLine("Another Method: " + message);
    }
}
\`\`\`

#### Use Cases of Delegates:
1. **Event Handling**: Delegates are the foundation of events in C#.
2. **Callback Mechanisms**: Delegates can be used to implement callback methods.
3. **Encapsulation**: They allow encapsulation of method references for dynamic invocation.

#### Built-in Delegates:
C# provides several built-in generic delegates such as:
- \`Action\`: Represents a method that returns void and can take up to 16 parameters.
- \`Func\`: Represents a method that returns a value and can take up to 16 parameters.
- \`Predicate\`: Represents a method that takes one parameter and returns a \`bool\`.

Example with \`Func\`:
\`\`\`csharp
Func<int, int, int> add = (a, b) => a + b;
Console.WriteLine(add(3, 5)); // Output: 8
\`\`\`

Delegates are a powerful feature in C# that enable flexible and dynamic programming patterns.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531570Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"a11aabac-875c-460c-bc3a-b57321e28abf",question:"What is an event in C# and how does it work?",answer:`\`\`\`markdown
In C#, an event is a mechanism that allows a class or object to notify other classes or objects when something of interest occurs. It is a way to implement the observer design pattern, enabling communication between objects in a loosely coupled manner.

An event is declared using the \`event\` keyword and is typically associated with a delegate type. Delegates define the signature of the methods that can handle the event. When an event is raised, all the methods subscribed to it (event handlers) are invoked.

### How Events Work in C#
1. **Declaration**: An event is declared in a class using the \`event\` keyword along with a delegate type.
2. **Subscription**: Other classes or objects can subscribe to the event by attaching event handler methods using the \`+=\` operator.
3. **Raising the Event**: The event is triggered (raised) by the class that owns it, usually when a specific condition or action occurs.
4. **Unsubscription**: Objects can unsubscribe from the event using the \`-=\` operator to stop receiving notifications.

### Example
\`\`\`csharp
using System;

public class Publisher
{
    // Declare an event using a delegate
    public event EventHandler SomethingHappened;

    public void TriggerEvent()
    {
        // Raise the event (check for null to ensure there are subscribers)
        SomethingHappened?.Invoke(this, EventArgs.Empty);
    }
}

public class Subscriber
{
    public void OnSomethingHappened(object sender, EventArgs e)
    {
        Console.WriteLine("Event received by Subscriber.");
    }
}

class Program
{
    static void Main()
    {
        Publisher publisher = new Publisher();
        Subscriber subscriber = new Subscriber();

        // Subscribe to the event
        publisher.SomethingHappened += subscriber.OnSomethingHappened;

        // Trigger the event
        publisher.TriggerEvent();

        // Output: "Event received by Subscriber."
    }
}
\`\`\`

### Key Points
- Events are based on delegates and provide a way to encapsulate the delegate's invocation list.
- The \`event\` keyword restricts direct access to the delegate, ensuring only the owning class can raise the event.
- Events promote loose coupling, as the publisher does not need to know the details of the subscribers.
- Always check for \`null\` before raising an event to avoid \`NullReferenceException\` if no subscribers are attached.

Events are widely used in C# for implementing notifications, such as in GUI programming or handling asynchronous operations.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531580Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"cceaefb2-3ed9-471f-85f2-f73814d171e6",question:"What is LINQ in C# and how is it used?",answer:`\`\`\`markdown
LINQ (Language Integrated Query) in C# is a powerful feature that allows developers to query data from various sources (such as collections, databases, XML, or other data stores) using a consistent syntax. It integrates query capabilities directly into the C# language, enabling developers to write queries in a declarative style similar to SQL.

### Key Features of LINQ:
1. **Unified Query Syntax**: LINQ provides a consistent query syntax for different data sources.
2. **Strongly Typed**: LINQ queries are checked at compile time, reducing runtime errors.
3. **IntelliSense Support**: LINQ queries benefit from Visual Studio's IntelliSense, making them easier to write and debug.
4. **Deferred Execution**: LINQ queries are executed only when the results are enumerated, optimizing performance.

### Common LINQ Query Syntax:
LINQ queries are written using two main syntaxes:
1. **Query Syntax**: Similar to SQL, using keywords like \`from\`, \`where\`, \`select\`, etc.
2. **Method Syntax**: Uses extension methods like \`Where()\`, \`Select()\`, etc.

### Example Usage:
Here’s an example of using LINQ to query a list of integers:

#### Query Syntax:
\`\`\`csharp
using System;
using System.Linq;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        // Query syntax
        var evenNumbers = from num in numbers
                          where num % 2 == 0
                          select num;

        Console.WriteLine("Even Numbers:");
        foreach (var num in evenNumbers)
        {
            Console.WriteLine(num);
        }
    }
}
\`\`\`

#### Method Syntax:
\`\`\`csharp
using System;
using System.Linq;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        // Method syntax
        var evenNumbers = numbers.Where(num => num % 2 == 0);

        Console.WriteLine("Even Numbers:");
        foreach (var num in evenNumbers)
        {
            Console.WriteLine(num);
        }
    }
}
\`\`\`

### LINQ Providers:
LINQ can work with various data sources through providers such as:
- **LINQ to Objects**: Queries in-memory collections like arrays or lists.
- **LINQ to SQL**: Queries relational databases.
- **LINQ to XML**: Queries XML data.
- **LINQ to Entities**: Works with Entity Framework for database queries.

### Benefits of LINQ:
- Simplifies data querying and manipulation.
- Reduces boilerplate code.
- Improves readability and maintainability of code.
- Provides compile-time checking and IntelliSense support.

By using LINQ, developers can work with data in a more intuitive and expressive way, making it a valuable tool in C# programming.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531681Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"ee7d845c-8de6-4ecd-aac0-5129e929302a",question:"What is the difference between 'ref' and 'out' keywords in C#?",answer:`\`\`\`markdown
In C#, both \`ref\` and \`out\` are used to pass arguments by reference to a method, allowing the method to modify the value of the parameter. However, there are key differences between the two:

1. **Initialization Requirement**:
   - \`ref\`: The variable passed as a \`ref\` parameter must be initialized before it is passed to the method.
   - \`out\`: The variable passed as an \`out\` parameter does not need to be initialized before being passed. However, it must be assigned a value inside the method before the method returns.

2. **Purpose**:
   - \`ref\`: Used when the variable is already initialized and you want the method to read and/or modify its value.
   - \`out\`: Used when the method is expected to initialize or assign a value to the variable and return it to the caller.

3. **Usage in Method Signature**:
   - Both \`ref\` and \`out\` must be explicitly specified in both the method definition and the method call.

4. **Example**:

   \`\`\`csharp
   using System;

   class Program
   {
       static void Main()
       {
           int refValue = 10;
           int outValue;

           ModifyRef(ref refValue);
           Console.WriteLine($"refValue after method call: {refValue}");

           ModifyOut(out outValue);
           Console.WriteLine($"outValue after method call: {outValue}");
       }

       static void ModifyRef(ref int value)
       {
           value += 10; // Modifies the existing value
       }

       static void ModifyOut(out int value)
       {
           value = 20; // Must assign a value before returning
       }
   }
   \`\`\`

5. **Compiler Enforcement**:
   - The compiler enforces that \`ref\` variables are initialized before being passed to the method.
   - The compiler enforces that \`out\` variables are assigned a value inside the method before it returns.

In summary, use \`ref\` when you want to pass an already initialized variable and allow the method to modify it. Use \`out\` when you want the method to initialize or assign a value to the variable and return it to the caller.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531694Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"e59c1a8f-5780-47cb-bde6-3b107503493a",question:"What is the difference between 'is' and 'as' operators in C#?",answer:'```markdown\nIn C#, the `is` and `as` operators are used for type checking and type conversion, but they serve different purposes:\n\n### `is` Operator\n- The `is` operator is used to check if an object is of a specific type.\n- It returns a boolean value: `true` if the object is of the specified type or can be cast to that type, otherwise `false`.\n- It does not perform any type conversion or throw an exception.\n\n**Example:**\n```csharp\nobject obj = "Hello, World!";\nif (obj is string)\n{\n    Console.WriteLine("The object is a string.");\n}\n```\n\n### `as` Operator\n- The `as` operator is used to perform a safe type conversion.\n- It attempts to cast an object to a specified type and returns the object if the conversion is successful, or `null` if it fails.\n- It does not throw an exception if the conversion fails, unlike a direct cast.\n\n**Example:**\n```csharp\nobject obj = "Hello, World!";\nstring str = obj as string;\nif (str != null)\n{\n    Console.WriteLine("The object was successfully cast to a string.");\n}\n```\n\n### Key Differences\n| Feature             | `is` Operator                     | `as` Operator                     |\n|---------------------|------------------------------------|------------------------------------|\n| Purpose             | Checks if an object is of a specific type. | Attempts to cast an object to a specific type. |\n| Return Type         | `bool`                            | The object cast to the specified type or `null`. |\n| Exception Handling  | Does not throw an exception.       | Does not throw an exception but returns `null` on failure. |\n| Usage               | Used for type checking.           | Used for safe type conversion.    |\n\n### When to Use\n- Use `is` when you only need to check the type of an object.\n- Use `as` when you need to safely cast an object to a specific type without risking an exception.\n```',level:"Intermediate",created_at:"2025-03-28T17:56:09.531707Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"b2892b29-fe8d-408d-ad76-72698b52cfc4",question:"What are generics in C# and how do they improve code reusability?",answer:`\`\`\`markdown
Generics in C# are a feature that allows you to define classes, interfaces, methods, and delegates with a placeholder for the type of data they operate on. This placeholder is specified using type parameters, which are defined using angle brackets (\`<>\`). Generics enable type-safe and reusable code by allowing you to write a single implementation that works with any data type.

### Key Benefits of Generics:
1. **Type Safety**: Generics enforce compile-time type checking, reducing runtime errors. For example, when using a \`List<T>\`, you can only add items of type \`T\`, preventing invalid type assignments.
2. **Code Reusability**: You can write a generic class or method once and use it with different data types without duplicating code. This reduces redundancy and improves maintainability.
3. **Performance**: Generics eliminate the need for boxing and unboxing when working with value types, which improves performance and reduces memory overhead.
4. **Flexibility**: Generics allow you to create highly flexible and extensible code structures, such as collections, algorithms, and utilities.

### Example of Generics in C#:
\`\`\`csharp
// Generic class
public class GenericRepository<T>
{
    private List<T> items = new List<T>();

    public void Add(T item)
    {
        items.Add(item);
    }

    public T Get(int index)
    {
        return items[index];
    }
}

// Usage
var intRepository = new GenericRepository<int>();
intRepository.Add(10);
int value = intRepository.Get(0);

var stringRepository = new GenericRepository<string>();
stringRepository.Add("Hello");
string text = stringRepository.Get(0);
\`\`\`

### How Generics Improve Code Reusability:
1. **Single Implementation for Multiple Types**: Instead of creating separate classes or methods for each data type, you can use generics to handle all types with a single implementation.
2. **Customizable Behavior**: Generics allow you to define constraints (using \`where\` clauses) to restrict the types that can be used, enabling more specific and reusable designs.
3. **Reduced Code Duplication**: By leveraging generics, you avoid duplicating logic for different types, leading to cleaner and more maintainable codebases.

Generics are extensively used in the .NET Framework, especially in collections (e.g., \`List<T>\`, \`Dictionary<TKey, TValue>\`), LINQ, and many other libraries, making them a cornerstone of modern C# programming.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.531763Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"e09933ad-06db-4878-b8d1-e899be149995",question:"What is the purpose of the 'sealed' keyword in C#?",answer:`\`\`\`markdown
In C#, the \`sealed\` keyword is used to prevent a class from being inherited or to prevent a method from being overridden in derived classes.

### Purpose of \`sealed\`:
1. **Sealing a Class**: When a class is marked as \`sealed\`, it cannot be used as a base class for other classes. This is useful when you want to restrict inheritance and ensure that the functionality of the class remains unchanged.
   \`\`\`csharp
   sealed class MyClass
   {
       public void Display()
       {
           Console.WriteLine("This is a sealed class.");
       }
   }

   // The following would result in a compilation error:
   // class DerivedClass : MyClass { }
   \`\`\`

2. **Sealing a Method**: When a method in a derived class is marked as \`sealed\`, it prevents further overriding of that method in any classes that derive from the current class. This is typically done in combination with the \`override\` keyword.
   \`\`\`csharp
   class BaseClass
   {
       public virtual void Display()
       {
           Console.WriteLine("Base class display method.");
       }
   }

   class DerivedClass : BaseClass
   {
       public sealed override void Display()
       {
           Console.WriteLine("Derived class sealed display method.");
       }
   }

   // The following would result in a compilation error:
   // class FurtherDerivedClass : DerivedClass
   // {
   //     public override void Display() { }
   // }
   \`\`\`

### Key Points:
- A \`sealed\` class cannot be inherited.
- A \`sealed\` method cannot be overridden further.
- The \`sealed\` keyword is often used to enforce design constraints and improve performance by preventing unnecessary inheritance or overriding.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531717Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"1d7b5f69-1bb8-4107-a6ef-0db8764e832c",question:"What are extension methods in C# and how are they implemented?",answer:`\`\`\`markdown
### Extension Methods in C#

Extension methods in C# allow you to add new methods to existing types without modifying the original type or creating a new derived type. They are a special kind of static method that can be called as if they were instance methods on the extended type. This feature is particularly useful when you want to enhance the functionality of a class, struct, or interface without altering its source code.

#### Key Characteristics of Extension Methods:
1. They are defined as static methods in a static class.
2. The first parameter of the method specifies the type it extends, and it must be preceded by the \`this\` keyword.
3. They are invoked using instance method syntax, even though they are static methods.

#### How to Implement Extension Methods

Here is an example of implementing and using an extension method:

\`\`\`csharp
using System;

namespace ExtensionMethodExample
{
    // Define a static class to hold the extension method
    public static class StringExtensions
    {
        // Define the extension method
        public static bool IsPalindrome(this string str)
        {
            if (string.IsNullOrEmpty(str))
                return false;

            int start = 0;
            int end = str.Length - 1;

            while (start < end)
            {
                if (str[start] != str[end])
                    return false;

                start++;
                end--;
            }

            return true;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            string word = "radar";

            // Call the extension method as if it were an instance method
            bool isPalindrome = word.IsPalindrome();

            Console.WriteLine($"Is '{word}' a palindrome? {isPalindrome}");
        }
    }
}
\`\`\`

#### Explanation of the Example:
1. The \`IsPalindrome\` method is defined in a static class \`StringExtensions\`.
2. The \`this\` keyword in the first parameter (\`this string str\`) indicates that the method extends the \`string\` type.
3. In the \`Main\` method, the \`IsPalindrome\` method is called on a \`string\` instance (\`word\`), even though it is a static method.

#### Benefits of Extension Methods:
- They provide a way to add functionality to existing types without modifying their source code.
- They improve code readability and maintainability by allowing methods to be called in a natural, instance-like manner.
- They are particularly useful for extending sealed classes or third-party libraries.

#### Limitations of Extension Methods:
- They cannot access private or protected members of the type they extend.
- If a method with the same name already exists in the type, the extension method will not be called unless explicitly invoked using the static class name.
\`\`\`
`,level:"Intermediate",created_at:"2025-03-28T17:56:09.531726Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"e4871d0b-7afd-435f-9084-cb7062c90b3d",question:"What is the purpose of the 'async' and 'await' keywords in C#?",answer:'```markdown\nIn C#, the `async` and `await` keywords are used to work with asynchronous programming, allowing developers to write non-blocking, responsive code. Here\'s their purpose:\n\n1. **`async` Keyword**:\n   - The `async` modifier is applied to a method, lambda, or anonymous function to indicate that it contains asynchronous operations.\n   - It enables the use of the `await` keyword within the method.\n   - An `async` method typically returns a `Task`, `Task<T>`, or `void` (for event handlers). This allows the method to run asynchronously and return control to the caller without blocking the thread.\n\n2. **`await` Keyword**:\n   - The `await` keyword is used to pause the execution of an `async` method until the awaited task completes.\n   - It allows the program to continue executing other work on the same thread or a different thread while waiting for the task to finish.\n   - When the awaited task completes, execution resumes from the point where it was paused.\n\n### Example:\n```csharp\npublic async Task<string> GetDataAsync()\n{\n    // Simulate an asynchronous operation\n    await Task.Delay(2000); // Pauses the method execution for 2 seconds\n    return "Data retrieved";\n}\n\npublic async Task MainMethodAsync()\n{\n    Console.WriteLine("Fetching data...");\n    string result = await GetDataAsync(); // Waits for GetDataAsync to complete\n    Console.WriteLine(result);\n}\n```\n\n### Key Benefits:\n- **Improved Responsiveness**: The application remains responsive, especially in UI applications, as the main thread is not blocked.\n- **Simplified Asynchronous Code**: The `async` and `await` keywords make asynchronous programming easier to read and maintain compared to traditional callback-based approaches.\n\n### Notes:\n- An `async` method does not run on a separate thread by default; it uses the current thread unless explicitly specified.\n- Proper exception handling is necessary, as exceptions in asynchronous methods are captured in the returned `Task` and need to be awaited or observed.\n```',level:"Advanced",created_at:"2025-03-28T17:56:09.531738Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"6d2cc628-9951-42bd-a2dc-9a768397ec51",question:"What is dependency injection in C# and why is it important?",answer:`\`\`\`markdown
### Dependency Injection in C# and Its Importance

**Dependency Injection (DI)** is a design pattern used in C# (and other programming languages) to achieve **Inversion of Control (IoC)**. It allows the creation of dependent objects (dependencies) outside of a class and provides those objects to the class in a controlled manner. In simpler terms, DI is a way to supply a class with its dependencies rather than letting the class create them itself.

#### How Dependency Injection Works
Instead of a class instantiating its dependencies directly, the dependencies are injected into the class, typically via:
1. **Constructor Injection**: Dependencies are passed through the constructor.
2. **Property Injection**: Dependencies are assigned to public properties.
3. **Method Injection**: Dependencies are passed as parameters to a method.

#### Example of Dependency Injection
\`\`\`csharp
// Dependency Interface
public interface ILogger
{
    void Log(string message);
}

// Dependency Implementation
public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}

// Class that depends on ILogger
public class Application
{
    private readonly ILogger _logger;

    // Dependency is injected via the constructor
    public Application(ILogger logger)
    {
        _logger = logger;
    }

    public void Run()
    {
        _logger.Log("Application is running...");
    }
}

// Main Program
class Program
{
    static void Main(string[] args)
    {
        // Dependency is created and injected
        ILogger logger = new ConsoleLogger();
        Application app = new Application(logger);
        app.Run();
    }
}
\`\`\`

#### Importance of Dependency Injection
1. **Improved Testability**: By injecting dependencies, you can easily replace them with mock objects during unit testing, making the code more testable.
2. **Loose Coupling**: Classes are not tightly coupled to specific implementations of their dependencies, making the code more flexible and easier to maintain.
3. **Better Maintainability**: Changes to a dependency do not require changes to the classes that use it, as long as the dependency adheres to the same interface or contract.
4. **Reusability**: Dependency injection promotes the use of interfaces and abstractions, encouraging reusable and modular code.
5. **Adherence to SOLID Principles**: DI supports the Dependency Inversion Principle (DIP), which states that high-level modules should not depend on low-level modules but rather on abstractions.

#### Built-in DI in .NET Core
In .NET Core and .NET 5+, Microsoft provides a built-in dependency injection container. It allows developers to register services and resolve them automatically. For example:
\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);

// Register services
builder.Services.AddTransient<ILogger, ConsoleLogger>();

var app = builder.Build();

// Resolve and use the service
var logger = app.Services.GetRequiredService<ILogger>();
logger.Log("Dependency Injection in action!");

app.Run();
\`\`\`

Dependency Injection is a cornerstone of modern C# development, enabling scalable, maintainable, and testable applications.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.531749Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"23e2f278-f8eb-4a85-bd6e-48e3482e3421",question:"What is the difference between covariance and contravariance in C#?",answer:`\`\`\`markdown
In C#, covariance and contravariance are concepts that allow for more flexible use of generic types, delegates, and interfaces. They define how type parameters are related in inheritance hierarchies.

### Covariance
- **Definition**: Covariance allows a method to return a more derived type than the one specified by the generic type parameter.
- **Use Case**: It enables you to assign a generic type of a derived class to a generic type of its base class.
- **Applicable To**: Delegates, generic interfaces, and arrays.
- **Keyword**: \`out\` (used in generic type parameters to indicate covariance).
- **Example**:
  \`\`\`csharp
  IEnumerable<string> strings = new List<string>();
  IEnumerable<object> objects = strings; // Covariance: string is derived from object
  \`\`\`

### Contravariance
- **Definition**: Contravariance allows a method to accept parameters of a more generic type than the one specified by the generic type parameter.
- **Use Case**: It enables you to assign a generic type of a base class to a generic type of its derived class.
- **Applicable To**: Delegates and generic interfaces.
- **Keyword**: \`in\` (used in generic type parameters to indicate contravariance).
- **Example**:
  \`\`\`csharp
  Action<object> actionObject = obj => Console.WriteLine(obj);
  Action<string> actionString = actionObject; // Contravariance: object is more generic than string
  \`\`\`

### Key Differences
| Aspect              | Covariance                          | Contravariance                     |
|---------------------|-------------------------------------|-------------------------------------|
| **Direction**       | Preserves assignment compatibility from derived to base types. | Preserves assignment compatibility from base to derived types. |
| **Keyword**         | \`out\`                              | \`in\`                              |
| **Usage**           | Used for return types.             | Used for input parameters.         |
| **Example**         | \`IEnumerable<out T>\`               | \`IComparer<in T>\`                  |

By using covariance and contravariance, C# provides a way to work with type hierarchies in a type-safe manner while maintaining flexibility.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.531774Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"482a0c46-21a3-4e50-9c2a-8dde7c6f598a",question:"What is garbage collection in C# and how does it work?",answer:`\`\`\`markdown
### Garbage Collection in C#

Garbage Collection (GC) in C# is an automatic memory management feature provided by the .NET runtime (CLR - Common Language Runtime). It is responsible for reclaiming memory occupied by objects that are no longer accessible or in use, thereby preventing memory leaks and optimizing application performance.

#### How Garbage Collection Works

1. **Managed Heap**:
   - When objects are created in C#, they are allocated memory on the managed heap.
   - The managed heap is divided into three generations: **Gen 0**, **Gen 1**, and **Gen 2**. These generations help optimize memory management by categorizing objects based on their lifespan.

2. **Generations**:
   - **Gen 0**: Contains short-lived objects (e.g., temporary variables). Garbage collection occurs frequently in this generation.
   - **Gen 1**: Acts as a buffer between short-lived and long-lived objects. Objects promoted from Gen 0 are moved here if they survive a collection.
   - **Gen 2**: Contains long-lived objects (e.g., static data, objects that persist throughout the application lifecycle). Garbage collection occurs less frequently here.

3. **Garbage Collection Process**:
   - The GC identifies objects that are no longer reachable by the application (i.e., no references point to them).
   - It reclaims the memory occupied by these unreachable objects.
   - For objects that are still reachable, the GC compacts the memory to reduce fragmentation and improve performance.
   - Surviving objects are promoted to the next generation.

4. **Triggering Garbage Collection**:
   - GC is triggered automatically by the CLR when it determines that the system is running low on memory.
   - It can also be triggered manually using the \`GC.Collect()\` method, though this is generally discouraged as it can disrupt the GC's optimization.

5. **Finalization and Dispose**:
   - Before reclaiming an object, the GC calls its finalizer (if defined) to allow cleanup of unmanaged resources.
   - For deterministic cleanup of unmanaged resources, the \`IDisposable\` interface and the \`Dispose\` method should be implemented.

6. **GC Modes**:
   - The .NET GC supports different modes such as **Workstation GC** (optimized for desktop applications) and **Server GC** (optimized for server applications with high throughput).

#### Key Benefits of Garbage Collection
- **Automatic Memory Management**: Reduces the need for manual memory allocation and deallocation.
- **Prevention of Memory Leaks**: Ensures that unused objects are removed from memory.
- **Improved Performance**: Optimizes memory usage by compacting the heap and reducing fragmentation.

#### Limitations of Garbage Collection
- **Non-Deterministic**: The exact timing of garbage collection is not predictable.
- **Performance Overhead**: While GC improves memory management, it can introduce pauses (GC pauses) during collection, which may impact performance in real-time applications.

By leveraging garbage collection, C# developers can focus on application logic without worrying about low-level memory management, while still maintaining efficient and reliable applications.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.531783Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"4198425c-e834-4be8-ac12-09fabc053071",question:"What is the IDisposable interface in C# and why is it used?",answer:`\`\`\`markdown
The \`IDisposable\` interface in C# is used to provide a mechanism for releasing unmanaged resources, such as file handles, database connections, or network sockets, that a class may hold. It is part of the \`System\` namespace and defines a single method:

\`\`\`csharp
public interface IDisposable
{
    void Dispose();
}
\`\`\`

### Purpose of \`IDisposable\`
In .NET, the garbage collector (GC) automatically manages the memory for managed objects. However, it does not handle unmanaged resources, which are resources outside the control of the .NET runtime, such as operating system resources. The \`IDisposable\` interface allows developers to explicitly release these unmanaged resources when they are no longer needed, ensuring efficient resource management and avoiding resource leaks.

### How to Use \`IDisposable\`
1. **Implementing \`Dispose\` Method**:
   A class that holds unmanaged resources should implement the \`IDisposable\` interface and provide the logic to release those resources in the \`Dispose\` method.

   \`\`\`csharp
   public class ResourceHolder : IDisposable
   {
       private IntPtr unmanagedResource; // Example of an unmanaged resource

       public void Dispose()
       {
           // Release unmanaged resources
           if (unmanagedResource != IntPtr.Zero)
           {
               // Free the resource
               unmanagedResource = IntPtr.Zero;
           }

           // Suppress finalization to optimize GC
           GC.SuppressFinalize(this);
       }

       ~ResourceHolder()
       {
           // Finalizer as a fallback to release unmanaged resources
           Dispose();
       }
   }
   \`\`\`

2. **Using \`using\` Statement**:
   The \`using\` statement ensures that the \`Dispose\` method is called automatically when the object goes out of scope, even if an exception occurs.

   \`\`\`csharp
   using (var resource = new ResourceHolder())
   {
       // Use the resource
   } // Dispose is called automatically here
   \`\`\`

3. **Manual Disposal**:
   If the \`using\` statement is not used, the \`Dispose\` method must be called explicitly.

   \`\`\`csharp
   var resource = new ResourceHolder();
   try
   {
       // Use the resource
   }
   finally
   {
       resource.Dispose();
   }
   \`\`\`

### Best Practices
- Always implement \`IDisposable\` for classes that use unmanaged resources.
- Use the \`using\` statement whenever possible to ensure proper disposal.
- Suppress finalization in the \`Dispose\` method using \`GC.SuppressFinalize\` to improve performance.
- Implement a finalizer (\`~ClassName\`) only as a safety net for releasing unmanaged resources if \`Dispose\` is not called.

### Summary
The \`IDisposable\` interface is critical for managing unmanaged resources in C#. It provides a standardized way to release these resources deterministically, ensuring better performance and resource management in applications.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.531793Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"826d72f5-1c8b-4265-85ab-3d4d3475d9ad",question:"What is the difference between synchronous and asynchronous programming in C#?",answer:`\`\`\`markdown
In C#, the difference between synchronous and asynchronous programming lies in how tasks are executed and how the program handles waiting for operations to complete:

### Synchronous Programming
- In synchronous programming, tasks are executed sequentially, one after the other.
- The program waits for a task to complete before moving on to the next one.
- If a task involves a time-consuming operation (e.g., file I/O, network requests), the program becomes blocked and cannot perform other work until the task finishes.
- Example:
  \`\`\`csharp
  public void SynchronousMethod()
  {
      Console.WriteLine("Task started");
      Thread.Sleep(3000); // Simulates a blocking operation
      Console.WriteLine("Task completed");
  }
  \`\`\`

### Asynchronous Programming
- In asynchronous programming, tasks can run concurrently without blocking the main thread.
- The program does not wait for a task to complete; instead, it continues executing other code while the task runs in the background.
- This is achieved using constructs like \`async\` and \`await\`, or by working with \`Task\` objects.
- Asynchronous programming improves responsiveness, especially in applications with UI or server-side operations.
- Example:
  \`\`\`csharp
  public async Task AsynchronousMethod()
  {
      Console.WriteLine("Task started");
      await Task.Delay(3000); // Simulates a non-blocking operation
      Console.WriteLine("Task completed");
  }
  \`\`\`

### Key Differences
| Aspect                  | Synchronous Programming                 | Asynchronous Programming                 |
|-------------------------|------------------------------------------|------------------------------------------|
| Execution               | Sequential                              | Concurrent                               |
| Blocking                | Blocks the thread until task completes  | Does not block the thread                |
| Performance             | Slower for I/O-bound or long-running tasks | More efficient for I/O-bound tasks       |
| Use Case                | Simple, short-lived tasks               | Long-running or I/O-intensive tasks      |

By using asynchronous programming in C#, developers can create more efficient and responsive applications, particularly for scenarios involving I/O operations or tasks that take significant time to complete.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.531802Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"479fee27-dc55-4e72-be67-16d9e01ba2ae",question:"What is reflection in C# and how is it used?",answer:`\`\`\`markdown
### Reflection in C#

Reflection in C# is a feature that allows the inspection of metadata about assemblies, modules, and types at runtime. It is part of the \`System.Reflection\` namespace and provides the ability to dynamically create instances of types, invoke methods, access fields and properties, and retrieve type information.

#### Key Uses of Reflection:
1. **Inspecting Metadata**: Reflection can be used to examine the structure of assemblies, classes, methods, properties, and other members at runtime.
2. **Dynamic Type Creation**: It allows creating instances of types dynamically without knowing their type at compile time.
3. **Invoking Methods Dynamically**: Methods can be invoked on objects dynamically, even if the method name is not known at compile time.
4. **Accessing Private Members**: Reflection can access private fields, methods, and properties, though this should be done cautiously as it can break encapsulation.
5. **Custom Attributes**: Reflection is often used to retrieve custom attributes applied to classes, methods, or other members.

#### Common Classes in \`System.Reflection\`:
- \`Assembly\`: Represents an assembly and provides methods to load and inspect it.
- \`Type\`: Represents type declarations and provides methods to inspect and manipulate types.
- \`MethodInfo\`: Represents a method and allows invocation of methods.
- \`PropertyInfo\`: Represents a property and allows getting or setting property values.
- \`FieldInfo\`: Represents a field and allows accessing field values.

#### Example Usage:
\`\`\`csharp
using System;
using System.Reflection;

class Program
{
    static void Main()
    {
        // Get the type of a class
        Type type = typeof(SampleClass);

        // Display type information
        Console.WriteLine("Class Name: " + type.Name);

        // Get and display methods
        MethodInfo[] methods = type.GetMethods();
        foreach (var method in methods)
        {
            Console.WriteLine("Method: " + method.Name);
        }

        // Create an instance dynamically
        object instance = Activator.CreateInstance(type);

        // Invoke a method dynamically
        MethodInfo methodInfo = type.GetMethod("SayHello");
        methodInfo.Invoke(instance, null);
    }
}

class SampleClass
{
    public void SayHello()
    {
        Console.WriteLine("Hello from SampleClass!");
    }
}
\`\`\`

#### Advantages of Reflection:
- Enables dynamic behavior in applications.
- Useful for frameworks, libraries, and tools that need to work with unknown types or assemblies.

#### Disadvantages of Reflection:
- **Performance Overhead**: Reflection is slower compared to direct code execution.
- **Security Risks**: Accessing private members can lead to security vulnerabilities.
- **Complexity**: Code using reflection can be harder to read and maintain.

Reflection is a powerful tool in C#, but it should be used judiciously to avoid performance and security issues.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.531812Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"46f41e2d-45f9-40f5-b97b-465152ce42e2",question:"What are nullable types in C# and how are they used?",answer:`\`\`\`markdown
### Nullable Types in C#

In C#, nullable types allow value types (e.g., \`int\`, \`double\`, \`bool\`, etc.) to represent \`null\` values in addition to their normal range of values. This is useful when dealing with scenarios where a value type might not have a value, such as database fields that can be null.

#### Declaration of Nullable Types
A nullable type is declared using the \`?\` syntax after the value type or by using the \`Nullable<T>\` generic type. For example:
\`\`\`csharp
int? nullableInt = null; // Using the ? syntax
Nullable<int> anotherNullableInt = 5; // Using Nullable<T>
\`\`\`

#### Checking for Null
You can check whether a nullable type has a value using the \`HasValue\` property or by comparing it to \`null\`:
\`\`\`csharp
if (nullableInt.HasValue)
{
    Console.WriteLine($"Value: {nullableInt.Value}");
}
else
{
    Console.WriteLine("Value is null");
}
\`\`\`

#### Accessing the Value
To access the value of a nullable type, you can use the \`Value\` property. However, attempting to access \`Value\` when the nullable type is \`null\` will throw an exception. To avoid this, always check \`HasValue\` first.

#### Null Coalescing Operator
The null coalescing operator (\`??\`) provides a way to specify a default value if the nullable type is \`null\`:
\`\`\`csharp
int result = nullableInt ?? 0; // If nullableInt is null, result will be 0
\`\`\`

#### Nullable Value Type with LINQ and Methods
Nullable types are particularly useful when working with LINQ queries or methods that may return null values. They allow you to handle optional or missing data more effectively.

#### Example Usage
\`\`\`csharp
int? age = null;

if (age.HasValue)
{
    Console.WriteLine($"Age: {age.Value}");
}
else
{
    Console.WriteLine("Age is not specified");
}

// Using null coalescing operator
int defaultAge = age ?? 18;
Console.WriteLine($"Default Age: {defaultAge}");
\`\`\`

#### Key Points
1. Nullable types are only applicable to value types.
2. They are useful for representing optional or missing data.
3. Always check for null using \`HasValue\` or the null coalescing operator to avoid runtime exceptions.

By using nullable types effectively, you can write safer and more robust code when dealing with scenarios where a value type might not always have a value.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.531820Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"4b57435c-b027-4ca9-871c-1ada62f6ab56",question:"What is the purpose of the 'lock' statement in C#?",answer:'```markdown\nThe `lock` statement in C# is used to ensure that a block of code is executed by only one thread at a time, providing thread safety in a multithreaded environment. It prevents multiple threads from accessing the same critical section of code simultaneously, which can lead to race conditions or inconsistent data.\n\nThe `lock` statement works by acquiring a mutual exclusion lock on a specified object (referred to as the lock object) before executing the code block. Once the code block is executed, the lock is automatically released. This ensures that only one thread can enter the critical section at a time.\n\n### Syntax:\n```csharp\nlock (lockObject)\n{\n    // Critical section code\n}\n```\n\n### Key Points:\n1. **Lock Object**: The object used in the `lock` statement should be a private or protected object to avoid unintended access by external code. Commonly, a private `readonly` object is used.\n2. **Thread Safety**: It helps prevent data corruption or unexpected behavior in shared resources when accessed by multiple threads.\n3. **Deadlock Prevention**: Care should be taken to avoid deadlocks by ensuring that locks are acquired in a consistent order across threads.\n\n### Example:\n```csharp\nprivate readonly object _lockObject = new object();\nprivate int _counter = 0;\n\npublic void IncrementCounter()\n{\n    lock (_lockObject)\n    {\n        _counter++;\n        Console.WriteLine($"Counter: {_counter}");\n    }\n}\n```\n\nIn this example, the `lock` statement ensures that only one thread can increment the `_counter` variable at a time, preventing race conditions.\n\n### Notes:\n- Avoid locking on publicly accessible objects (e.g., `this` or `typeof(ClassName)`) as it can lead to unexpected behavior if external code also locks on the same object.\n- Use `Monitor` class for more advanced locking scenarios if needed, but `lock` is preferred for simplicity and readability.\n```',level:"Advanced",created_at:"2025-03-28T17:56:09.531838Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"0562265d-ebca-4af8-9d87-19a96c0be814",question:"What is the difference between Task and Thread in C#?",answer:`\`\`\`markdown
In C#, both \`Task\` and \`Thread\` are used for asynchronous programming and concurrency, but they have significant differences in their purpose, abstraction level, and usage:

### 1. **Abstraction Level**
   - **Thread**: A \`Thread\` represents a low-level, operating system-managed thread of execution. It is a basic unit of CPU utilization and provides direct control over thread lifecycle and behavior.
   - **Task**: A \`Task\` is a higher-level abstraction provided by the Task Parallel Library (TPL). It represents an asynchronous operation that may or may not run on a separate thread. Tasks are designed to simplify parallelism and concurrency.

### 2. **Resource Management**
   - **Thread**: Threads are expensive to create and manage because they are directly tied to the operating system's threading model. Each thread consumes a significant amount of memory and system resources.
   - **Task**: Tasks are lightweight and managed by the .NET runtime. They use the thread pool, which efficiently reuses threads to minimize overhead.

### 3. **Ease of Use**
   - **Thread**: Using threads requires manual management of synchronization, thread creation, and lifecycle. This can lead to complex and error-prone code.
   - **Task**: Tasks simplify asynchronous programming by providing built-in support for continuations, cancellation, and exception handling. The \`async\` and \`await\` keywords make working with tasks more intuitive.

### 4. **Concurrency vs. Parallelism**
   - **Thread**: Threads are primarily used for parallelism, where multiple threads execute code simultaneously.
   - **Task**: Tasks are designed for both concurrency (asynchronous operations) and parallelism. A task does not necessarily run on a separate thread; it may execute synchronously or asynchronously depending on the context.

### 5. **Thread Pool Usage**
   - **Thread**: A \`Thread\` does not use the thread pool by default. Each thread is independent and not reused.
   - **Task**: Tasks typically use the thread pool, which manages and reuses threads efficiently.

### 6. **Cancellation and Continuations**
   - **Thread**: Threads do not have built-in support for cancellation or continuations. These must be implemented manually.
   - **Task**: Tasks support cancellation via \`CancellationToken\` and continuations using methods like \`ContinueWith\` or the \`await\` keyword.

### 7. **Error Handling**
   - **Thread**: Exceptions in threads must be handled manually, and unhandled exceptions can terminate the application.
   - **Task**: Tasks provide built-in exception handling and aggregation. Exceptions are encapsulated in the \`AggregateException\` and can be handled more gracefully.

### Example:
#### Using Thread:
\`\`\`csharp
Thread thread = new Thread(() =>
{
    Console.WriteLine("Thread is running");
});
thread.Start();
thread.Join();
\`\`\`

#### Using Task:
\`\`\`csharp
Task task = Task.Run(() =>
{
    Console.WriteLine("Task is running");
});
task.Wait();
\`\`\`

### Summary:
- Use \`Thread\` when you need fine-grained control over threading.
- Use \`Task\` for most asynchronous and parallel programming scenarios, as it is higher-level, more efficient, and easier to use.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.531848Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"4e71bc1f-ba70-4504-994a-5a9e2c30742d",question:"What is the purpose of the 'yield' keyword in C#?",answer:`\`\`\`markdown
The \`yield\` keyword in C# is used to simplify the implementation of iterators, which are methods, properties, or indexers that return sequences of values. It allows you to produce elements of a sequence one at a time, without the need to create a temporary collection or explicitly implement the \`IEnumerator\` or \`IEnumerable\` interfaces.

When the \`yield\` keyword is used in a method, the method becomes an iterator. The \`yield return\` statement is used to return each element of the sequence, and the state of the method is preserved between calls, enabling the method to resume execution where it left off. The \`yield break\` statement is used to terminate the iteration.

### Key Points:
1. **Deferred Execution**: The \`yield\` keyword enables deferred execution, meaning the sequence is not evaluated until it is iterated over.
2. **Simplifies Code**: It eliminates the need for manually managing the state of the iteration or creating temporary collections.
3. **State Preservation**: The compiler automatically generates the necessary state machine to preserve the state of the method between iterations.

### Example:
\`\`\`csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        foreach (int number in GetNumbers())
        {
            Console.WriteLine(number);
        }
    }

    static IEnumerable<int> GetNumbers()
    {
        yield return 1;
        yield return 2;
        yield return 3;
        yield break; // Ends the iteration
    }
}
\`\`\`

### Output:
\`\`\`
1
2
3
\`\`\`

In this example, the \`GetNumbers\` method uses \`yield return\` to return each number in the sequence. The iteration stops when \`yield break\` is encountered or when all \`yield return\` statements are executed.

The \`yield\` keyword is particularly useful for creating custom iterators and working with large datasets, as it avoids the overhead of creating and storing large collections in memory.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.531856Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"bc6cf278-d8b7-44b4-b65f-6327b0d251a7",question:"What is the difference between IEnumerable and IQueryable in C#?",answer:`\`\`\`markdown
### Difference Between \`IEnumerable\` and \`IQueryable\` in C#

#### 1. **Definition**
   - **IEnumerable**: Represents a forward-only, read-only collection of objects that can be enumerated. It is defined in the \`System.Collections\` namespace.
   - **IQueryable**: Inherits from \`IEnumerable\` and is used to execute queries against a specific data source. It is defined in the \`System.Linq\` namespace.

#### 2. **Execution**
   - **IEnumerable**: Executes the query on the client side. The entire data is loaded into memory, and the filtering is done in-memory.
   - **IQueryable**: Executes the query on the server side (e.g., database). The filtering is translated into a query language (like SQL) and executed on the data source.

#### 3. **Use Case**
   - **IEnumerable**: Suitable for in-memory collections like arrays, lists, or other data structures.
   - **IQueryable**: Suitable for querying remote data sources like databases using LINQ-to-SQL or Entity Framework.

#### 4. **Deferred Execution**
   - **IEnumerable**: Supports deferred execution, but the query is executed in-memory.
   - **IQueryable**: Also supports deferred execution, but the query is executed on the data source.

#### 5. **Performance**
   - **IEnumerable**: Less efficient for large datasets because it fetches all data into memory before processing.
   - **IQueryable**: More efficient for large datasets as it fetches only the required data from the data source.

#### 6. **Query Translation**
   - **IEnumerable**: LINQ queries are executed in-memory and cannot be translated to a query language like SQL.
   - **IQueryable**: LINQ queries are translated into the query language of the underlying data source (e.g., SQL for databases).

#### 7. **Example**

   - **IEnumerable Example**:
     \`\`\`csharp
     List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
     IEnumerable<int> evenNumbers = numbers.Where(n => n % 2 == 0); // Filtering happens in-memory
     foreach (var num in evenNumbers)
     {
         Console.WriteLine(num);
     }
     \`\`\`

   - **IQueryable Example**:
     \`\`\`csharp
     using (var context = new MyDbContext())
     {
         IQueryable<User> users = context.Users.Where(u => u.IsActive); // Filtering happens in the database
         foreach (var user in users)
         {
             Console.WriteLine(user.Name);
         }
     }
     \`\`\`

#### 8. **Key Points**
   - Use \`IEnumerable\` for in-memory collections.
   - Use \`IQueryable\` for querying remote data sources to leverage server-side processing and improve performance.
\`\`\`
`,level:"Advanced",created_at:"2025-03-28T17:56:09.531866Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"69839b81-61eb-4003-8af1-6fb6de270702",question:"What is the difference between abstract classes and interfaces in C#?",answer:`\`\`\`markdown
In C#, both abstract classes and interfaces are used to define contracts that other classes can implement. However, they have key differences:

### Abstract Classes
1. **Definition**: An abstract class is a class that cannot be instantiated and may contain abstract methods (methods without implementation) as well as concrete methods (methods with implementation).
2. **Inheritance**: A class can inherit from only one abstract class (single inheritance).
3. **Members**: Can include fields, constructors, properties, methods, and events with implementations.
4. **Access Modifiers**: Members of an abstract class can have access modifiers (e.g., \`public\`, \`protected\`, \`private\`).
5. **Use Case**: Used when classes share common functionality and need to enforce a base implementation.

### Interfaces
1. **Definition**: An interface is a contract that defines a set of methods, properties, events, or indexers without providing any implementation.
2. **Inheritance**: A class or struct can implement multiple interfaces (multiple inheritance).
3. **Members**: Cannot include fields or constructors. Starting from C# 8.0, interfaces can include default implementations for methods.
4. **Access Modifiers**: Members are implicitly \`public\` and cannot have other access modifiers.
5. **Use Case**: Used to define a contract that multiple unrelated classes can implement.

### Key Differences
| Feature                | Abstract Class                         | Interface                             |
|------------------------|----------------------------------------|---------------------------------------|
| Instantiation          | Cannot be instantiated                | Cannot be instantiated               |
| Inheritance            | Single inheritance                    | Multiple inheritance                  |
| Members                | Can have fields, constructors, and methods with implementations | Cannot have fields or constructors (except default implementations in C# 8.0+) |
| Access Modifiers       | Members can have access modifiers     | Members are implicitly \`public\`       |
| Use Case               | For shared functionality and base class behavior | For defining a contract or capability |

### Example
#### Abstract Class
\`\`\`csharp
public abstract class Animal
{
    public abstract void Speak(); // Abstract method
    public void Eat() // Concrete method
    {
        Console.WriteLine("Eating...");
    }
}
\`\`\`

#### Interface
\`\`\`csharp
public interface IAnimal
{
    void Speak(); // Method without implementation
    void Eat();   // Method without implementation
}
\`\`\`

In summary, abstract classes are ideal for creating a base class with shared functionality, while interfaces are better suited for defining a contract that multiple classes can implement, regardless of their inheritance hierarchy.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531875Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"25cc5878-2957-4cef-8780-9eb82f17e139",question:"What is the purpose of the 'virtual' keyword in C#?",answer:`\`\`\`markdown
The \`virtual\` keyword in C# is used to indicate that a method, property, indexer, or event in a base class can be overridden in a derived class. It allows for runtime polymorphism, enabling derived classes to provide their own specific implementation of a member while maintaining the same interface.

When a member is marked as \`virtual\`, it can be overridden in a derived class using the \`override\` keyword. If a derived class does not override the virtual member, the base class implementation will be used.

### Example:
\`\`\`csharp
public class BaseClass
{
    public virtual void Display()
    {
        Console.WriteLine("BaseClass Display method");
    }
}

public class DerivedClass : BaseClass
{
    public override void Display()
    {
        Console.WriteLine("DerivedClass Display method");
    }
}

class Program
{
    static void Main()
    {
        BaseClass obj = new DerivedClass();
        obj.Display(); // Output: DerivedClass Display method
    }
}
\`\`\`

In this example, the \`Display\` method in the \`BaseClass\` is marked as \`virtual\`, allowing the \`DerivedClass\` to override it. When the method is called on a \`BaseClass\` reference pointing to a \`DerivedClass\` object, the overridden method in the derived class is executed.

### Key Points:
- The \`virtual\` keyword enables overriding in derived classes.
- It supports runtime polymorphism.
- If a virtual member is not overridden, the base class implementation is used.
- Only instance members (not static members) can be declared as \`virtual\`.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531884Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"2ae06213-17c2-4813-a382-a3aacef32868",question:"What is the difference between 'throw' and 'throw ex' in C#?",answer:`\`\`\`markdown
In C#, the difference between \`throw\` and \`throw ex\` lies in how they handle the exception's stack trace:

1. **\`throw\`**:
   - When you use \`throw\` by itself, it rethrows the original exception while preserving the original stack trace.
   - This is useful when you want to propagate the exception without losing the context of where it was originally thrown.

   Example:
   \`\`\`csharp
   try
   {
       // Some code that throws an exception
   }
   catch (Exception ex)
   {
       // Log or handle the exception
       throw; // Rethrows the original exception
   }
   \`\`\`

2. **\`throw ex\`**:
   - When you use \`throw ex\`, it resets the stack trace of the exception to the current location in the code.
   - This means the original stack trace is lost, and debugging becomes harder because you lose the context of where the exception was initially thrown.

   Example:
   \`\`\`csharp
   try
   {
       // Some code that throws an exception
   }
   catch (Exception ex)
   {
       // Log or handle the exception
       throw ex; // Resets the stack trace
   }
   \`\`\`

**Best Practice**: Always use \`throw\` (without the exception variable) when rethrowing an exception to preserve the original stack trace. Avoid using \`throw ex\` unless you have a specific reason to reset the stack trace.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531892Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"dfeb82cd-565e-455b-ad09-3cd0c4ee8a0f",question:"What is the purpose of the 'base' keyword in C#?",answer:`\`\`\`markdown
The \`base\` keyword in C# is used to access members of the base class from within a derived class. It allows a derived class to call methods, access properties, or invoke constructors of its base class. This is particularly useful when you want to extend or modify the behavior of the base class while still utilizing its functionality.

### Common Use Cases of \`base\`:
1. **Calling a Base Class Constructor**:
   You can use \`base\` to explicitly call a constructor of the base class from a derived class constructor.
   \`\`\`csharp
   public class BaseClass
   {
       public BaseClass(string message)
       {
           Console.WriteLine(message);
       }
   }

   public class DerivedClass : BaseClass
   {
       public DerivedClass() : base("Hello from BaseClass!")
       {
           Console.WriteLine("Hello from DerivedClass!");
       }
   }
   \`\`\`

2. **Accessing Base Class Methods or Properties**:
   You can use \`base\` to call a method or access a property in the base class that has been overridden in the derived class.
   \`\`\`csharp
   public class BaseClass
   {
       public virtual void Display()
       {
           Console.WriteLine("Display method in BaseClass");
       }
   }

   public class DerivedClass : BaseClass
   {
       public override void Display()
       {
           base.Display(); // Calls the base class method
           Console.WriteLine("Display method in DerivedClass");
       }
   }
   \`\`\`

3. **Accessing Hidden Members**:
   If a derived class hides a member of the base class (using the \`new\` keyword), you can use \`base\` to access the hidden member.
   \`\`\`csharp
   public class BaseClass
   {
       public void Show()
       {
           Console.WriteLine("Show method in BaseClass");
       }
   }

   public class DerivedClass : BaseClass
   {
       public new void Show()
       {
           Console.WriteLine("Show method in DerivedClass");
       }

       public void CallBaseShow()
       {
           base.Show(); // Calls the base class method
       }
   }
   \`\`\`

### Key Points:
- The \`base\` keyword is only valid in a derived class.
- It is commonly used in scenarios involving inheritance to ensure proper interaction between the derived and base classes.
- Using \`base\` helps avoid redundancy and leverages the functionality of the base class.

By using \`base\`, you can maintain a clear and structured relationship between base and derived classes, ensuring code reusability and clarity.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531903Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"56b95ede-a169-4d19-95bd-9f497fcb3e30",question:"What is boxing and unboxing in C#?",answer:`\`\`\`markdown
In C#, **boxing** and **unboxing** are processes used to convert value types and reference types.

### Boxing
Boxing is the process of converting a value type (e.g., \`int\`, \`float\`) into a reference type (i.e., an object). When a value type is boxed, it is wrapped inside a \`System.Object\` or an interface type, and stored on the managed heap.

#### Example:
\`\`\`csharp
int num = 42; // Value type
object boxedNum = num; // Boxing
\`\`\`

### Unboxing
Unboxing is the reverse process of boxing. It converts a reference type (an object) back into a value type. This requires explicit casting and the object being unboxed must be of the correct value type.

#### Example:
\`\`\`csharp
object boxedNum = 42; // Boxing
int num = (int)boxedNum; // Unboxing
\`\`\`

### Key Points:
- Boxing is implicit, while unboxing requires explicit casting.
- Boxing involves copying the value type data into the heap, which can have performance implications.
- Unboxing retrieves the value type from the heap and copies it back to the stack.

Understanding boxing and unboxing is important for performance optimization, as excessive boxing/unboxing can lead to memory and CPU overhead.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531913Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"e85930bb-be69-4344-8f8a-10140c0f6be7",question:"What is the difference between stack and heap memory in C#?",answer:`\`\`\`markdown
In C#, stack and heap are two types of memory used for storing data during the execution of a program. The key differences between stack and heap memory are:

### 1. **Storage Type**
   - **Stack**: Stores value types and method call information, including local variables and method parameters. Data stored in the stack is of fixed size and is automatically managed.
   - **Heap**: Stores reference types (e.g., objects, arrays) and dynamically allocated memory. The heap is used for data that needs to persist beyond the scope of a single method.

### 2. **Memory Allocation**
   - **Stack**: Memory is allocated and deallocated automatically in a Last In, First Out (LIFO) manner. Each method call creates a new stack frame, and when the method ends, the stack frame is removed.
   - **Heap**: Memory is allocated dynamically, and the garbage collector is responsible for deallocating memory that is no longer in use.

### 3. **Performance**
   - **Stack**: Faster access because memory allocation and deallocation follow a predictable pattern (LIFO).
   - **Heap**: Slower access due to the overhead of dynamic memory allocation and garbage collection.

### 4. **Lifetime**
   - **Stack**: Data exists only while the method in which it was created is executing. Once the method exits, the data is removed.
   - **Heap**: Data exists until it is explicitly deallocated or garbage collected, making it suitable for objects that need to persist beyond the scope of a single method.

### 5. **Thread Safety**
   - **Stack**: Each thread has its own stack, so it is inherently thread-safe.
   - **Heap**: Shared across threads, so synchronization is required to ensure thread safety when accessing heap memory.

### Example:
\`\`\`csharp
void Example() 
{
    int x = 10; // Stored in the stack (value type)
    Person person = new Person(); // 'person' reference is on the stack, but the object is on the heap
}
\`\`\`

In this example:
- \`x\` is a value type and is stored in the stack.
- The \`person\` variable (reference) is stored in the stack, but the actual \`Person\` object is allocated on the heap.

### Summary:
- Use the **stack** for small, short-lived data (e.g., local variables, method parameters).
- Use the **heap** for larger, more complex objects that need to persist beyond a single method call.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531925Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"daab7f93-0d6f-4e7d-b1f7-f615cb4ae573",question:"What is the difference between 'String' and 'StringBuilder' in C#?",answer:`\`\`\`markdown
In C#, both \`String\` and \`StringBuilder\` are used to work with text, but they have significant differences in terms of mutability, performance, and use cases:

### 1. **Mutability**
   - **String**: Strings in C# are immutable, meaning once a string is created, it cannot be changed. Any operation that appears to modify a string (e.g., concatenation, replacement) actually creates a new string object in memory.
   - **StringBuilder**: StringBuilder is mutable, meaning it allows modifications to the same object without creating a new one. This makes it more efficient for scenarios where frequent modifications to text are required.

### 2. **Performance**
   - **String**: Since strings are immutable, operations like concatenation or appending involve creating new string objects, which can be costly in terms of memory and performance, especially in loops or when working with large amounts of text.
   - **StringBuilder**: StringBuilder is optimized for performance when performing multiple string manipulations. It avoids creating new objects by modifying the existing buffer, making it faster and more memory-efficient for such tasks.

### 3. **Use Cases**
   - **String**: Best suited for scenarios where the text is not expected to change frequently, or when working with small, simple text manipulations.
   - **StringBuilder**: Ideal for scenarios involving frequent or complex modifications to text, such as building large strings dynamically or performing multiple concatenation operations in loops.

### 4. **Namespace**
   - **String**: Belongs to the \`System\` namespace.
   - **StringBuilder**: Belongs to the \`System.Text\` namespace.

### Example:
\`\`\`csharp
// Using String
string str = "Hello";
str += " World"; // Creates a new string object
Console.WriteLine(str); // Output: Hello World

// Using StringBuilder
StringBuilder sb = new StringBuilder("Hello");
sb.Append(" World"); // Modifies the existing object
Console.WriteLine(sb.ToString()); // Output: Hello World
\`\`\`

### Summary:
- Use \`String\` for simple, infrequent text manipulations.
- Use \`StringBuilder\` for complex or repetitive string operations to improve performance and reduce memory overhead.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531945Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"e0ad5410-7ca9-4ccd-895a-fc390bceaed7",question:"What is the purpose of the 'checked' and 'unchecked' keywords in C#?",answer:'```markdown\nIn C#, the `checked` and `unchecked` keywords are used to control the behavior of arithmetic operations and conversions with respect to overflow.\n\n### `checked`\nThe `checked` keyword is used to explicitly enable overflow checking for arithmetic operations and conversions. If an overflow occurs in a `checked` context, a `System.OverflowException` is thrown. This is useful when you want to ensure that overflow is detected and handled during runtime.\n\n#### Example:\n```csharp\nint max = int.MaxValue;\ntry\n{\n    int result = checked(max + 1); // Throws OverflowException\n}\ncatch (OverflowException)\n{\n    Console.WriteLine("Overflow occurred!");\n}\n```\n\n### `unchecked`\nThe `unchecked` keyword disables overflow checking for arithmetic operations and conversions. If an overflow occurs in an `unchecked` context, the result wraps around without throwing an exception. This is the default behavior in C# unless the compiler or runtime is explicitly configured to check for overflows.\n\n#### Example:\n```csharp\nint max = int.MaxValue;\nint result = unchecked(max + 1); // No exception, result wraps around\nConsole.WriteLine(result); // Output: -2147483648\n```\n\n### Use Cases\n- Use `checked` when you need to ensure the integrity of calculations and want to detect overflow errors.\n- Use `unchecked` when performance is critical, and you are confident that overflow will not cause issues or is acceptable.\n\n### Notes\n- The default behavior for overflow checking can be configured using compiler options (e.g., `/checked`).\n- The `checked` and `unchecked` keywords can be applied to specific expressions or entire blocks of code.\n\n#### Example of Block Usage:\n```csharp\nchecked\n{\n    int result = max + 1; // OverflowException will be thrown\n}\n\nunchecked\n{\n    int result = max + 1; // Overflow is ignored\n}\n```\n```',level:"Intermediate",created_at:"2025-03-28T17:56:09.531956Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"0d81fb5b-863c-46a2-b4c5-4a61809374b0",question:"What is the difference between 'Array' and 'ArrayList' in C#?",answer:`\`\`\`markdown
In C#, both \`Array\` and \`ArrayList\` are used to store collections of data, but they have significant differences:

### 1. **Type Safety**
   - **Array**: It is type-safe, meaning it can only store elements of a specified type. For example, an \`int[]\` can only store integers.
   - **ArrayList**: It is not type-safe and can store elements of any type because it stores objects as \`object\`. This can lead to runtime errors if typecasting is done incorrectly.

### 2. **Performance**
   - **Array**: Since it is type-safe, there is no need for boxing/unboxing, making it faster and more efficient.
   - **ArrayList**: When storing value types, boxing/unboxing occurs, which can degrade performance.

### 3. **Size**
   - **Array**: Its size is fixed at the time of creation and cannot be changed.
   - **ArrayList**: It is dynamic and can grow or shrink in size as elements are added or removed.

### 4. **Namespace**
   - **Array**: It is part of the \`System\` namespace.
   - **ArrayList**: It is part of the \`System.Collections\` namespace.

### 5. **Generic Alternative**
   - **Array**: There is no direct generic alternative because arrays are inherently type-safe.
   - **ArrayList**: The generic alternative is \`List<T>\` from the \`System.Collections.Generic\` namespace, which is type-safe and preferred over \`ArrayList\` in modern C#.

### Example
\`\`\`csharp
// Array
int[] numbers = new int[3] { 1, 2, 3 }; // Fixed size and type-safe

// ArrayList
ArrayList list = new ArrayList();
list.Add(1); // Adding an integer
list.Add("Hello"); // Adding a string (not type-safe)
\`\`\`

### Summary
- Use \`Array\` when you need a fixed-size, type-safe collection.
- Use \`ArrayList\` only if you need a dynamic collection and are working with older versions of C#. For modern C#, prefer \`List<T>\` for a dynamic, type-safe collection.
\`\`\``,level:"Intermediate",created_at:"2025-03-28T17:56:09.531967Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"e01aa59e-825b-4436-b32e-0c9817b29ba9",question:"What is the purpose of the 'default' keyword in C#?",answer:'```markdown\nThe `default` keyword in C# serves multiple purposes depending on the context in which it is used:\n\n1. **Default Value of a Type**: It is used to produce the default value for a given type. For example:\n   - For value types (e.g., `int`, `float`, `bool`), it returns `0`, `0.0`, or `false` respectively.\n   - For reference types (e.g., `string`, `object`), it returns `null`.\n   - For nullable types, it returns `null`.\n\n   Example:\n   ```csharp\n   int defaultValue = default(int); // 0\n   string defaultString = default(string); // null\n   ```\n\n2. **Switch Statement**: In a `switch` statement, the `default` keyword is used to define a case that will execute if no other case matches. It acts as a fallback.\n\n   Example:\n   ```csharp\n   int number = 5;\n   switch (number)\n   {\n       case 1:\n           Console.WriteLine("One");\n           break;\n       case 2:\n           Console.WriteLine("Two");\n           break;\n       default:\n           Console.WriteLine("Default case");\n           break;\n   }\n   ```\n\n3. **Default Literal (C# 7.1 and later)**: The `default` keyword can be used as a literal to simplify code. Instead of specifying the type explicitly, you can use `default` directly.\n\n   Example:\n   ```csharp\n   int defaultValue = default; // 0\n   string defaultString = default; // null\n   ```\n\n4. **Generic Constraints**: When working with generics, the `default` keyword can be used to initialize variables to their default value, especially when the type is unknown.\n\n   Example:\n   ```csharp\n   public T GetDefaultValue<T>()\n   {\n       return default(T);\n   }\n   ```\n\nIn summary, the `default` keyword is a versatile feature in C# that simplifies working with default values, provides a fallback in switch statements, and enhances code readability in various scenarios.\n```',level:"Intermediate",created_at:"2025-03-28T17:56:09.531976Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"a58a3e19-b751-4321-87e6-cba9b34a30b8",question:"What is the difference between 'throw' and 'rethrow' in C#?",answer:"```markdown\nIn C#, both `throw` and `rethrow` are used to propagate exceptions, but they differ in how they handle the exception stack trace:\n\n1. **`throw`**:\n   - When you use `throw` with an exception object (e.g., `throw ex;`), it resets the stack trace of the exception. This means the original stack trace is lost, and the new stack trace starts from the point where the `throw` statement is executed.\n   - This is typically used when you want to throw a new exception or modify the exception before propagating it.\n\n   Example:\n   ```csharp\n   try\n   {\n       // Some code that throws an exception\n   }\n   catch (Exception ex)\n   {\n       // Modifying or logging the exception\n       throw ex; // Resets the stack trace\n   }\n   ```\n\n2. **Rethrow (using `throw` without an exception object)**:\n   - When you use `throw` without specifying an exception object (e.g., just `throw;`), it preserves the original stack trace of the exception. This is useful when you want to propagate the exception as-is without altering its context or stack trace.\n   - This is commonly used in `catch` blocks when you want to handle the exception partially and then rethrow it for further handling.\n\n   Example:\n   ```csharp\n   try\n   {\n       // Some code that throws an exception\n   }\n   catch (Exception ex)\n   {\n       // Perform some logging or cleanup\n       throw; // Preserves the original stack trace\n   }\n   ```\n\n### Key Difference:\n- `throw ex;` resets the stack trace, losing the original exception context.\n- `throw;` rethrows the exception while preserving the original stack trace.\n\n### Best Practice:\nWhenever possible, use `throw;` to preserve the original stack trace unless you specifically need to modify or replace the exception.\n```",level:"Advanced",created_at:"2025-03-28T17:56:09.531985Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"885b3897-06fb-43be-b8ba-51fcefa88078",question:"What is the purpose of the 'volatile' keyword in C#?",answer:"```markdown\nThe `volatile` keyword in C# is used to indicate that a field might be modified by multiple threads simultaneously. It ensures that the value of the field is always read from and written to the main memory, rather than being cached in a thread's local memory. This guarantees that all threads see the most up-to-date value of the field.\n\n### Key Points:\n1. **Thread Safety**: The `volatile` keyword helps in achieving thread safety for simple read and write operations on a field.\n2. **Memory Visibility**: It ensures that changes made to the field by one thread are immediately visible to other threads.\n3. **Usage**: It can only be applied to fields of certain types, such as `bool`, `byte`, `sbyte`, `short`, `ushort`, `int`, `uint`, `char`, `float`, `double`, `IntPtr`, `UIntPtr`, or reference types.\n4. **Limitations**: The `volatile` keyword does not provide atomicity for compound operations (e.g., incrementing a value). For such cases, synchronization mechanisms like `lock` or `Interlocked` class should be used.\n\n### Example:\n```csharp\npublic class Example\n{\n    private volatile bool _isRunning;\n\n    public void Start()\n    {\n        _isRunning = true;\n        Task.Run(() =>\n        {\n            while (_isRunning)\n            {\n                // Perform some work\n            }\n        });\n    }\n\n    public void Stop()\n    {\n        _isRunning = false; // Ensures that the worker thread sees the updated value\n    }\n}\n```\n\nIn this example, the `volatile` keyword ensures that the `_isRunning` field's value is always consistent across threads.\n\n### Important Note:\nThe `volatile` keyword is not a substitute for proper synchronization in complex scenarios. It is best suited for simple scenarios where a field is accessed by multiple threads without requiring compound operations.\n```",level:"Advanced",created_at:"2025-03-28T17:56:09.531996Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"e86c51ec-34b8-4fb1-8062-8937b1cc1508",question:"What is the difference between 'dynamic' and 'var' in C#?",answer:'```markdown\nIn C#, both `dynamic` and `var` are used for variable declarations, but they serve different purposes and behave differently:\n\n### `var`\n- **Compile-Time Type Inference**: The type of a `var` variable is determined at compile time based on the value assigned to it. Once the type is inferred, it cannot change.\n- **Strongly Typed**: After the type is inferred, the variable is strongly typed. Any operation that is not valid for the inferred type will result in a compile-time error.\n- **Usage**: Commonly used when the type is obvious or when working with anonymous types.\n- **Example**:\n  ```csharp\n  var number = 10; // Inferred as int\n  var message = "Hello"; // Inferred as string\n  ```\n\n### `dynamic`\n- **Runtime Type Resolution**: The type of a `dynamic` variable is determined at runtime. The compiler does not perform type checking on `dynamic` variables.\n- **Weakly Typed**: Since the type is resolved at runtime, operations on `dynamic` variables are not checked at compile time. This can lead to runtime errors if the operation is invalid for the actual type.\n- **Usage**: Useful when working with objects that are not known at compile time, such as COM objects, reflection, or dynamic programming scenarios.\n- **Example**:\n  ```csharp\n  dynamic obj = 10; // Initially an int\n  obj = "Hello"; // Now a string\n  ```\n\n### Key Differences\n| Feature                | `var`                          | `dynamic`                      |\n|------------------------|---------------------------------|---------------------------------|\n| **Type Resolution**    | At compile time                | At runtime                     |\n| **Type Checking**      | Performed at compile time      | Performed at runtime           |\n| **Type Mutability**    | Fixed after initialization     | Can change during execution    |\n| **Error Detection**    | Compile-time errors for invalid operations | Runtime errors for invalid operations |\n| **Use Case**           | When the type is known or can be inferred | When the type is not known at compile time |\n\n### Example Comparison\n```csharp\n// Using var\nvar number = 10; // Inferred as int\nnumber = "Hello"; // Compile-time error: Cannot assign string to int\n\n// Using dynamic\ndynamic obj = 10; // Initially an int\nobj = "Hello"; // No error at compile time, but type changes at runtime\n```\n\n### Summary\n- Use `var` when the type is known or can be inferred and you want compile-time type safety.\n- Use `dynamic` when the type is not known at compile time or when working with dynamic scenarios, but be cautious of potential runtime errors.\n```',level:"Advanced",created_at:"2025-03-28T17:56:09.532004Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"cba95b7b-27e3-439e-bc69-463df0667d8c",question:"What is the purpose of the 'nameof' operator in C#?",answer:`\`\`\`markdown
The \`nameof\` operator in C# is used to obtain the name of a variable, type, or member as a string. It is particularly useful for avoiding hardcoding strings in your code, which improves maintainability and reduces the risk of errors when renaming elements.

### Key Purposes of \`nameof\`:
1. **Refactoring Safety**: When you rename a variable, type, or member, the \`nameof\` operator ensures the string representation is updated automatically during refactoring.
2. **Improved Readability**: It makes the code more readable and self-explanatory compared to hardcoded strings.
3. **Error Prevention**: Reduces the likelihood of typos or mismatches in string literals.

### Example Usage:
\`\`\`csharp
class Example
{
    public string PropertyName { get; set; }

    public void ShowName()
    {
        // Using nameof to get the property name as a string
        Console.WriteLine(nameof(PropertyName)); // Output: "PropertyName"
    }
}
\`\`\`

### Common Use Cases:
1. **Argument Validation**:
   \`\`\`csharp
   void ValidateInput(string input)
   {
       if (input == null)
           throw new ArgumentNullException(nameof(input));
   }
   \`\`\`
2. **Logging**:
   \`\`\`csharp
   Console.WriteLine($"Error in method: {nameof(ValidateInput)}");
   \`\`\`
3. **Binding Frameworks**:
   \`\`\`csharp
   NotifyPropertyChanged(nameof(PropertyName));
   \`\`\`

By using \`nameof\`, you ensure your code remains robust and easier to maintain, especially in large projects.
\`\`\``,level:"Advanced",created_at:"2025-03-28T17:56:09.532020Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"},{id:"c5ec00ce-0463-4303-8ad1-70549ba5c858",question:"What is the difference between 'finalize' and 'dispose' in C#?",answer:"```markdown\nIn C#, `finalize` and `dispose` are both used for resource management, but they serve different purposes and are implemented differently:\n\n### Finalize\n- **Purpose**: The `finalize` method is used to release unmanaged resources before the object is reclaimed by the garbage collector.\n- **Implementation**: It is implemented by overriding the `Finalize` method in a class. This is done by defining a destructor in C# (e.g., `~ClassName()`).\n- **Invocation**: The garbage collector automatically calls the `Finalize` method when it determines that the object is no longer accessible.\n- **Performance**: Finalization can be slow because it relies on the garbage collector and requires an additional pass to clean up finalized objects.\n- **Control**: You have no direct control over when the `Finalize` method is called.\n- **Usage**: Typically used as a safety net for cleaning up unmanaged resources if `Dispose` was not called.\n\n### Dispose\n- **Purpose**: The `Dispose` method is used to explicitly release unmanaged resources and perform cleanup in a deterministic manner.\n- **Implementation**: It is part of the `IDisposable` interface, which a class implements to provide the `Dispose` method.\n- **Invocation**: The `Dispose` method must be called explicitly in code or indirectly via a `using` statement.\n- **Performance**: More efficient than `Finalize` because it allows for immediate cleanup of resources without waiting for garbage collection.\n- **Control**: You have full control over when the `Dispose` method is called.\n- **Usage**: Commonly used for releasing unmanaged resources like file handles, database connections, or network sockets.\n\n### Key Differences\n| Feature              | Finalize                          | Dispose                           |\n|----------------------|-----------------------------------|-----------------------------------|\n| **Purpose**          | Cleanup during garbage collection | Explicit cleanup of resources     |\n| **Implementation**   | Destructor (`~ClassName`)         | `IDisposable.Dispose` method      |\n| **Invocation**       | Automatic by garbage collector    | Manual or via `using` statement   |\n| **Performance**      | Slower (depends on GC)            | Faster (deterministic)            |\n| **Control**          | No direct control                | Full control                      |\n| **Usage**            | Safety net for unmanaged cleanup | Deterministic resource cleanup    |\n\n### Best Practices\n- Always implement `IDisposable` and use the `Dispose` method for deterministic cleanup of resources.\n- Use a `using` statement to ensure `Dispose` is called automatically.\n- Implement a finalizer (`Finalize`) only if your class uses unmanaged resources directly and as a fallback in case `Dispose` is not called.\n- If both `Dispose` and `Finalize` are implemented, ensure `Dispose` suppresses finalization using `GC.SuppressFinalize(this)` to avoid redundant cleanup.\n\nBy following these practices, you can effectively manage resources and improve application performance.\n```",level:"Advanced",created_at:"2025-03-28T17:56:09.532034Z",topic:"105fee08-0e41-46a6-b25c-5bea530848d3"}];export{e as default};
