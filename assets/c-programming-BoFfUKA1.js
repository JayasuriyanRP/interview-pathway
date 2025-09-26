const e=[{id:"1dba6402-084d-480d-bb9d-ffe92e739646",question:"What are constructors and destructors in C++?",answer:`\`\`\`markdown
In C++, **constructors** and **destructors** are special member functions of a class that are automatically called when objects are created and destroyed, respectively.

### Constructors:
- A constructor is a special function that initializes an object of a class.
- It has the same name as the class and no return type (not even \`void\`).
- Constructors can be overloaded to allow different ways of initializing objects.
- If no constructor is explicitly defined, the compiler provides a default constructor.
  
#### Example:
\`\`\`cpp
#include <iostream>
using namespace std;

class MyClass {
public:
    int value;

    // Constructor
    MyClass(int v) {
        value = v;
        cout << "Constructor called, value = " << value << endl;
    }
};

int main() {
    MyClass obj(10); // Constructor is called
    return 0;
}
\`\`\`

### Destructors:
- A destructor is a special function that is automatically called when an object goes out of scope or is explicitly deleted.
- It is used to release resources (e.g., memory, file handles) that the object may have acquired during its lifetime.
- A destructor has the same name as the class but is preceded by a tilde (\`~\`), and it also has no return type.
- Like constructors, if no destructor is explicitly defined, the compiler provides a default destructor.

#### Example:
\`\`\`cpp
#include <iostream>
using namespace std;

class MyClass {
public:
    // Constructor
    MyClass() {
        cout << "Constructor called" << endl;
    }

    // Destructor
    ~MyClass() {
        cout << "Destructor called" << endl;
    }
};

int main() {
    MyClass obj; // Constructor is called
    return 0;    // Destructor is called when obj goes out of scope
}
\`\`\`

### Key Points:
- Constructors are used for initialization, while destructors are used for cleanup.
- Both are automatically invoked by the compiler.
- Constructors can be overloaded, but destructors cannot.
- If dynamic memory allocation is used in a class, destructors are essential to prevent memory leaks.
\`\`\``,level:"Intermediate"},{id:"b6577964-051c-4881-af63-e2e0d7c5e6ab",question:"What is the difference between function templates and class templates in C++?",answer:`\`\`\`markdown
In C++, both function templates and class templates are used to create generic code that works with any data type. However, there are key differences between them:

### Function Templates
- **Purpose**: Used to define a template for a function that can operate on different data types without rewriting the function for each type.
- **Syntax**:
  \`\`\`cpp
  template <typename T>
  T add(T a, T b) {
      return a + b;
  }
  \`\`\`
- **Instantiation**: The compiler automatically deduces the type of the template parameter based on the arguments passed to the function.
- **Usage**: Primarily used for operations or algorithms that are independent of the type of data being processed.

### Class Templates
- **Purpose**: Used to define a template for a class or struct that can work with different data types.
- **Syntax**:
  \`\`\`cpp
  template <typename T>
  class Box {
      T value;
  public:
      Box(T v) : value(v) {}
      T getValue() { return value; }
  };
  \`\`\`
- **Instantiation**: The type must be explicitly specified when creating an object of the class template (e.g., \`Box<int> box(10);\`).
- **Usage**: Primarily used for creating data structures or classes that need to handle multiple data types (e.g., containers like \`std::vector\`).

### Key Differences
| Aspect                  | Function Templates                          | Class Templates                             |
|-------------------------|---------------------------------------------|--------------------------------------------|
| **Scope**               | Defines a generic function                 | Defines a generic class or struct          |
| **Type Deduction**      | Compiler deduces the type automatically    | Type must be explicitly specified          |
| **Use Case**            | Generic algorithms or operations           | Generic data structures or classes         |

Both function and class templates are powerful tools in C++ for writing reusable and type-independent code.
\`\`\``,level:"Intermediate"},{id:"0e99229c-2421-445f-b0b1-248d355f2417",question:"What is C++ and how is it different from C?",answer:`\`\`\`markdown
C++ is a high-level, general-purpose programming language that was developed by Bjarne Stroustrup in 1983 as an extension of the C programming language. It is widely used for system programming, game development, embedded systems, and applications requiring high performance.

### Key Differences Between C and C++:
1. **Object-Oriented Programming (OOP):**
   - C++ supports object-oriented programming, including features like classes, objects, inheritance, polymorphism, encapsulation, and abstraction.
   - C is a procedural programming language and does not support OOP concepts.

2. **Standard Template Library (STL):**
   - C++ provides the Standard Template Library, which includes pre-defined classes and functions for data structures (e.g., vectors, lists) and algorithms (e.g., sorting, searching).
   - C does not have a built-in library for such functionalities.

3. **Function Overloading and Operator Overloading:**
   - C++ allows function overloading and operator overloading, enabling developers to define multiple functions with the same name but different parameters or redefine operators for custom behavior.
   - C does not support these features.

4. **Stronger Type Checking:**
   - C++ enforces stricter type checking compared to C, reducing the chances of type-related errors.

5. **Namespace Support:**
   - C++ introduces namespaces to avoid name conflicts in large projects.
   - C does not have namespaces.

6. **Inline Functions:**
   - C++ supports inline functions to reduce function call overhead.
   - C does not have inline functions in its standard.

7. **Memory Management:**
   - C++ provides \`new\` and \`delete\` operators for dynamic memory allocation and deallocation.
   - C uses \`malloc()\` and \`free()\` functions for memory management.

8. **Exception Handling:**
   - C++ has built-in support for exception handling using \`try\`, \`catch\`, and \`throw\` blocks.
   - C does not have native exception handling mechanisms.

9. **Compatibility:**
   - C++ is backward compatible with C, meaning most C code can run in a C++ compiler with minimal changes.
   - However, C++ introduces additional features and syntax that are not available in C.

In summary, C++ builds upon C by adding features that support modern programming paradigms and improve code reusability, maintainability, and scalability.
\`\`\``,level:"Beginner"},{id:"078088be-44f8-4629-b577-bc271b417d3c",question:"What are the basic data types in C++?",answer:"```markdown\nIn C++, the basic data types are categorized into the following types:\n\n1. **Integer Types**:\n   - `int`: Used to store integers (whole numbers).\n   - `short`: Smaller integer type.\n   - `long`: Larger integer type.\n   - `long long`: Even larger integer type.\n\n2. **Floating-Point Types**:\n   - `float`: Used to store single-precision floating-point numbers.\n   - `double`: Used to store double-precision floating-point numbers.\n   - `long double`: Used to store extended precision floating-point numbers.\n\n3. **Character Type**:\n   - `char`: Used to store a single character (e.g., 'a', '1', '$').\n\n4. **Boolean Type**:\n   - `bool`: Used to store `true` or `false`.\n\n5. **Void Type**:\n   - `void`: Represents the absence of a value, typically used for functions that do not return a value.\n\n6. **Wide Character Type**:\n   - `wchar_t`: Used to store wide characters (for extended character sets).\n\nThese data types form the foundation for variables and operations in C++.\n```",level:"Beginner"},{id:"755656da-6d2b-4aef-bb44-d331c2f8afa8",question:"What is the purpose of the 'main()' function in C++?",answer:"```markdown\nThe `main()` function in C++ serves as the entry point of a program. It is where the execution of a C++ program begins. Every C++ program must have a `main()` function, and its purpose is to define the starting point for the program's logic. The operating system calls the `main()` function when the program is executed.\n\nThe `main()` function typically has the following signature:\n\n```cpp\nint main() {\n    // Code to execute\n    return 0;\n}\n```\n\n- The return type `int` indicates that the function returns an integer value to the operating system. A return value of `0` usually signifies successful execution.\n- The body of the `main()` function contains the code that the program will execute.\n\nOptionally, the `main()` function can also accept arguments:\n\n```cpp\nint main(int argc, char* argv[]) {\n    // Code to execute\n    return 0;\n}\n```\n\n- `argc` represents the number of command-line arguments passed to the program.\n- `argv` is an array of character pointers listing all the arguments.\n\nIn summary, the `main()` function is essential for program execution and acts as the starting point for all C++ programs.\n```",level:"Beginner"},{id:"97a68fac-db40-49ac-8cd7-817bb47850cc",question:"What are header files in C++ and why are they used?",answer:`\`\`\`markdown
### What are Header Files in C++ and Why are They Used?

In C++, header files are files with a \`.h\` or \`.hpp\` extension that contain declarations of functions, classes, variables, and other program elements. They are used to share code between multiple source files and help organize the program structure.

#### Why Are Header Files Used?
1. **Code Reusability**: Header files allow you to write code once and reuse it in multiple source files by including the header file using the \`#include\` directive.
2. **Separation of Declaration and Implementation**: They separate the interface (declarations) from the implementation (definitions), making the code easier to read and maintain.
3. **Modularity**: By organizing code into separate header and source files, programs become more modular and manageable.
4. **Predefined Libraries**: C++ provides standard header files (e.g., \`<iostream>\`, \`<vector>\`) that include predefined functions and classes, saving time and effort.

#### Example
Here’s an example of a header file and its usage:

**\`math_utils.h\`** (Header File):
\`\`\`cpp
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);
int subtract(int a, int b);

#endif
\`\`\`

**\`math_utils.cpp\`** (Source File):
\`\`\`cpp
#include "math_utils.h"

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}
\`\`\`

**\`main.cpp\`** (Main Program):
\`\`\`cpp
#include <iostream>
#include "math_utils.h"

int main() {
    int x = 5, y = 3;
    std::cout << "Sum: " << add(x, y) << std::endl;
    std::cout << "Difference: " << subtract(x, y) << std::endl;
    return 0;
}
\`\`\`

In this example, the header file \`math_utils.h\` declares the functions, while the source file \`math_utils.cpp\` defines them. The \`main.cpp\` file includes the header file to use the declared functions.
\`\`\``,level:"Beginner"},{id:"d29e99dc-1834-4843-a453-5c5b34efcb71",question:"What is the difference between 'cout' and 'cin' in C++?",answer:`\`\`\`markdown
In C++, \`cout\` and \`cin\` are used for input and output operations, respectively:

1. **\`cout\`**:
   - Stands for "character output".
   - Used to display output on the standard output device (usually the console).
   - It is part of the \`<iostream>\` library.
   - Example:
     \`\`\`cpp
     #include <iostream>
     using namespace std;

     int main() {
         cout << "Hello, World!" << endl;
         return 0;
     }
     \`\`\`

2. **\`cin\`**:
   - Stands for "character input".
   - Used to take input from the user via the standard input device (usually the keyboard).
   - It is also part of the \`<iostream>\` library.
   - Example:
     \`\`\`cpp
     #include <iostream>
     using namespace std;

     int main() {
         int age;
         cout << "Enter your age: ";
         cin >> age;
         cout << "You entered: " << age << endl;
         return 0;
     }
     \`\`\`

In summary, \`cout\` is used for output, while \`cin\` is used for input in C++ programs.
\`\`\``,level:"Beginner"},{id:"3419079e-6d98-431b-ae26-b6b906e891cb",question:"What are the different types of operators in C++?",answer:"```markdown\nIn C++, operators are symbols that perform operations on variables and values. The different types of operators in C++ are:\n\n1. **Arithmetic Operators**: Used for mathematical operations.\n   - `+` (Addition)\n   - `-` (Subtraction)\n   - `*` (Multiplication)\n   - `/` (Division)\n   - `%` (Modulus)\n\n2. **Relational (Comparison) Operators**: Used to compare two values.\n   - `==` (Equal to)\n   - `!=` (Not equal to)\n   - `<` (Less than)\n   - `>` (Greater than)\n   - `<=` (Less than or equal to)\n   - `>=` (Greater than or equal to)\n\n3. **Logical Operators**: Used to perform logical operations.\n   - `&&` (Logical AND)\n   - `||` (Logical OR)\n   - `!` (Logical NOT)\n\n4. **Bitwise Operators**: Used to perform operations at the bit level.\n   - `&` (Bitwise AND)\n   - `|` (Bitwise OR)\n   - `^` (Bitwise XOR)\n   - `~` (Bitwise NOT)\n   - `<<` (Left shift)\n   - `>>` (Right shift)\n\n5. **Assignment Operators**: Used to assign values to variables.\n   - `=` (Assign)\n   - `+=` (Add and assign)\n   - `-=` (Subtract and assign)\n   - `*=` (Multiply and assign)\n   - `/=` (Divide and assign)\n   - `%=` (Modulus and assign)\n\n6. **Increment and Decrement Operators**: Used to increase or decrease a value by 1.\n   - `++` (Increment)\n   - `--` (Decrement)\n\n7. **Conditional (Ternary) Operator**: Used to evaluate a condition and return a value.\n   - `? :` (Condition ? true_value : false_value)\n\n8. **Type Casting Operators**: Used to convert one data type to another.\n   - `(type)` (C-style cast)\n   - `static_cast<type>()`, `dynamic_cast<type>()`, `const_cast<type>()`, `reinterpret_cast<type>()` (C++ style casts)\n\n9. **Special Operators**:\n   - `sizeof` (Returns the size of a data type)\n   - `&` (Address-of operator)\n   - `*` (Pointer dereference operator)\n   - `->` (Member access through pointer)\n   - `.` (Member access operator)\n   - `::` (Scope resolution operator)\n\n10. **Other Operators**:\n    - `,` (Comma operator)\n    - `new` and `delete` (Memory allocation and deallocation)\n    - `[]` (Array subscript)\n    - `()` (Function call)\n\nEach operator has a specific purpose and is used in different contexts to perform operations in C++ programs.\n```",level:"Beginner"},{id:"5bcb4d8d-6cec-43c2-b891-464d772c1389",question:"What is the difference between 'while' and 'do-while' loops in C++?",answer:`\`\`\`markdown
In C++, both \`while\` and \`do-while\` loops are used for iteration, but they differ in how they execute:

1. **\`while\` Loop**:
   - The condition is checked **before** the execution of the loop body.
   - If the condition is \`false\` initially, the loop body will not execute even once.
   - Syntax:
     \`\`\`cpp
     while (condition) {
         // Loop body
     }
     \`\`\`

2. **\`do-while\` Loop**:
   - The condition is checked **after** the execution of the loop body.
   - The loop body will execute at least once, regardless of whether the condition is \`true\` or \`false\`.
   - Syntax:
     \`\`\`cpp
     do {
         // Loop body
     } while (condition);
     \`\`\`

### Example:
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int x = 0;

    // while loop
    while (x > 0) {
        cout << "This will not print because x > 0 is false." << endl;
    }

    // do-while loop
    do {
        cout << "This will print at least once, even though x > 0 is false." << endl;
    } while (x > 0);

    return 0;
}
\`\`\`

### Key Difference:
- Use a \`while\` loop when you want to execute the loop only if the condition is true from the start.
- Use a \`do-while\` loop when you want the loop body to execute at least once, regardless of the condition.
\`\`\``,level:"Beginner"},{id:"ed7dc843-fdb4-4f23-85aa-2c22fb3c776e",question:"What is a pointer in C++ and how is it used?",answer:`\`\`\`markdown
### What is a Pointer in C++ and How is it Used?

A **pointer** in C++ is a variable that stores the memory address of another variable. Instead of holding a direct value, a pointer "points" to the location in memory where the value is stored. Pointers are a powerful feature in C++ that allow for dynamic memory management, efficient array handling, and the creation of complex data structures like linked lists and trees.

#### Syntax of a Pointer
To declare a pointer, use the \`*\` symbol:
\`\`\`cpp
int* ptr; // Declares a pointer to an integer
\`\`\`

#### How to Use Pointers
1. **Declaration and Initialization**:
   A pointer must be initialized with the address of a variable using the address-of operator (\`&\`):
   \`\`\`cpp
   int x = 10;
   int* ptr = &x; // ptr now holds the address of x
   \`\`\`

2. **Dereferencing**:
   The value stored at the memory address can be accessed using the dereference operator (\`*\`):
   \`\`\`cpp
   cout << *ptr; // Outputs the value of x (10)
   \`\`\`

3. **Null Pointers**:
   A pointer can be set to \`nullptr\` to indicate it does not point to any valid memory:
   \`\`\`cpp
   int* ptr = nullptr; // Pointer is initialized but points to nothing
   \`\`\`

4. **Dynamic Memory Allocation**:
   Pointers are often used with \`new\` and \`delete\` for dynamic memory allocation:
   \`\`\`cpp
   int* ptr = new int(5); // Allocates memory for an integer and initializes it to 5
   cout << *ptr;         // Outputs 5
   delete ptr;           // Frees the allocated memory
   \`\`\`

5. **Pointer Arithmetic**:
   Pointers can be incremented or decremented to traverse arrays:
   \`\`\`cpp
   int arr[] = {1, 2, 3};
   int* ptr = arr; // Points to the first element of the array
   cout << *ptr;   // Outputs 1
   ptr++;
   cout << *ptr;   // Outputs 2
   \`\`\`

#### Why Use Pointers?
- **Efficiency**: Pointers allow direct memory access, making operations faster in some cases.
- **Dynamic Memory**: Enable the creation of variables and arrays at runtime.
- **Data Structures**: Essential for implementing advanced structures like linked lists, trees, and graphs.
- **Function Arguments**: Allow passing variables by reference to functions, enabling modification of the original value.

#### Example Code
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int x = 42;
    int* ptr = &x; // Pointer stores the address of x

    cout << "Value of x: " << x << endl;       // Outputs 42
    cout << "Address of x: " << &x << endl;    // Outputs the memory address of x
    cout << "Value via pointer: " << *ptr << endl; // Outputs 42

    *ptr = 100; // Modifies the value of x through the pointer
    cout << "New value of x: " << x << endl;   // Outputs 100

    return 0;
}
\`\`\`

#### Key Points
- A pointer stores the memory address of another variable.
- Use \`&\` to get the address of a variable and \`*\` to dereference a pointer.
- Pointers are essential for dynamic memory allocation and advanced programming techniques.
\`\`\``,level:"Beginner"},{id:"1397b494-b705-44d9-8a85-aeeb6c9e2877",question:"What is the difference between a reference and a pointer in C++?",answer:`\`\`\`markdown
In C++, references and pointers are both used to refer to other variables, but they have significant differences:

1. **Declaration and Syntax**:
   - A reference is declared using the \`&\` symbol and must be initialized at the time of declaration. For example:
     \`\`\`cpp
     int x = 10;
     int& ref = x; // ref is a reference to x
     \`\`\`
   - A pointer is declared using the \`*\` symbol and can be initialized later. For example:
     \`\`\`cpp
     int x = 10;
     int* ptr = &x; // ptr is a pointer to x
     \`\`\`

2. **Nullability**:
   - A reference cannot be null. It must always refer to a valid object or variable.
   - A pointer can be null, meaning it can point to nothing. For example:
     \`\`\`cpp
     int* ptr = nullptr; // ptr points to nothing
     \`\`\`

3. **Reassignment**:
   - A reference cannot be reassigned to refer to another variable after it is initialized. It is permanently bound to the initial variable.
   - A pointer can be reassigned to point to a different variable or memory address.

4. **Dereferencing**:
   - A reference is automatically dereferenced, so you can use it as if it were the original variable.
   - A pointer needs to be explicitly dereferenced using the \`*\` operator to access the value it points to.

5. **Memory Address**:
   - A reference does not have its own memory address; it is just an alias for the original variable.
   - A pointer has its own memory address and stores the address of the variable it points to.

6. **Use Cases**:
   - References are typically used when you want to create an alias for a variable or pass arguments to functions by reference.
   - Pointers are used when you need dynamic memory allocation, need to work with arrays, or need to manage memory manually.

### Example:
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 10;

    // Reference
    int& ref = a; // ref is an alias for a
    ref = 20;     // modifies a
    cout << "a: " << a << endl; // Output: a: 20

    // Pointer
    int* ptr = &b; // ptr points to b
    *ptr = 30;     // modifies b
    cout << "b: " << b << endl; // Output: b: 30

    // Reassigning pointer
    ptr = &a;      // ptr now points to a
    *ptr = 40;     // modifies a
    cout << "a: " << a << endl; // Output: a: 40

    return 0;
}
\`\`\`

### Summary:
| Feature              | Reference                  | Pointer                     |
|----------------------|---------------------------|-----------------------------|
| Syntax               | \`int& ref = var;\`         | \`int* ptr = &var;\`          |
| Nullability          | Cannot be null            | Can be null (\`nullptr\`)     |
| Reassignment         | Cannot be reassigned      | Can be reassigned           |
| Dereferencing        | Implicit                  | Explicit (\`*ptr\`)           |
| Memory Address       | No separate address       | Has its own address         |
| Use Cases            | Aliases, function arguments | Dynamic memory, arrays, etc. |
\`\`\``,level:"Intermediate"},{id:"fed4dc6c-a961-45b8-a556-89b94dca03df",question:"What is the purpose of the 'new' and 'delete' keywords in C++?",answer:"```markdown\nIn C++, the `new` and `delete` keywords are used for dynamic memory management.\n\n- **`new`**: The `new` keyword is used to allocate memory on the heap for an object or array during runtime. It returns a pointer to the allocated memory. For example:\n  ```cpp\n  int* ptr = new int;       // Allocates memory for a single integer\n  int* arr = new int[10];   // Allocates memory for an array of 10 integers\n  ```\n\n- **`delete`**: The `delete` keyword is used to deallocate memory that was previously allocated using `new`. This ensures that the memory is freed and prevents memory leaks. For example:\n  ```cpp\n  delete ptr;       // Deallocates memory for the single integer\n  delete[] arr;     // Deallocates memory for the array\n  ```\n\n### Key Points:\n1. Memory allocated with `new` must always be deallocated using `delete` (or `delete[]` for arrays).\n2. Failure to deallocate memory can lead to memory leaks.\n3. Using `delete` on memory that was not allocated with `new` or on a null pointer is undefined behavior.\n4. C++11 introduced smart pointers (e.g., `std::unique_ptr`, `std::shared_ptr`) as a safer alternative to manage dynamic memory, reducing the need for manual use of `new` and `delete`.\n```",level:"Intermediate"},{id:"82faa4f7-26ae-4696-9911-9b82f7547013",question:"What is a class in C++ and how is it different from a structure?",answer:`\`\`\`markdown
In C++, a **class** is a user-defined data type that serves as a blueprint for creating objects. It encapsulates data members (variables) and member functions (methods) that operate on the data, promoting the principles of object-oriented programming such as encapsulation, inheritance, and polymorphism.

### Key Differences Between a Class and a Structure in C++:
1. **Default Access Modifier**:
   - In a class, members are private by default.
   - In a structure, members are public by default.

2. **Object-Oriented Features**:
   - Classes support advanced object-oriented features like inheritance and polymorphism.
   - Structures can also support these features in C++, but they are primarily used for simpler data grouping.

3. **Use Case**:
   - Classes are typically used for complex data models and behaviors.
   - Structures are often used for lightweight data grouping without much functionality.

### Example:
\`\`\`cpp
#include <iostream>
using namespace std;

// Class Example
class MyClass {
private:
    int privateData; // Private by default
public:
    void setData(int value) {
        privateData = value;
    }
    int getData() {
        return privateData;
    }
};

// Structure Example
struct MyStruct {
    int publicData; // Public by default
};

int main() {
    MyClass obj1;
    obj1.setData(10);
    cout << "Class Data: " << obj1.getData() << endl;

    MyStruct obj2;
    obj2.publicData = 20;
    cout << "Struct Data: " << obj2.publicData << endl;

    return 0;
}
\`\`\`

### Output:
\`\`\`
Class Data: 10
Struct Data: 20
\`\`\`

In summary, while both classes and structures can be used to define custom data types, classes are more suited for implementing object-oriented programming concepts, whereas structures are simpler and more suited for basic data grouping.
\`\`\``,level:"Beginner"},{id:"67dcc7c6-f570-4e34-8c6c-c6adc64bba03",question:"What is the concept of object-oriented programming (OOP) in C++?",answer:`\`\`\`markdown
### Object-Oriented Programming (OOP) in C++

Object-Oriented Programming (OOP) is a programming paradigm in C++ that is based on the concept of "objects." Objects are instances of classes, which are user-defined data types that encapsulate data and functions together. OOP allows developers to model real-world entities and their interactions in a structured and reusable way.

#### Key Concepts of OOP in C++:

1. **Class and Object**:
   - A **class** is a blueprint for creating objects. It defines the properties (data members) and behaviors (member functions) of an object.
   - An **object** is an instance of a class.

2. **Encapsulation**:
   - Encapsulation is the bundling of data and methods that operate on the data within a single unit (class).
   - It restricts direct access to some of the object's components, ensuring controlled interaction through public methods.

3. **Inheritance**:
   - Inheritance allows a class (child or derived class) to inherit properties and behaviors from another class (parent or base class).
   - It promotes code reuse and establishes a relationship between classes.

4. **Polymorphism**:
   - Polymorphism allows functions or methods to behave differently based on the object that calls them.
   - It is achieved through function overloading, operator overloading, and virtual functions.

5. **Abstraction**:
   - Abstraction hides the implementation details of a class and only exposes the essential features.
   - It is implemented using abstract classes and interfaces.

6. **Dynamic Binding**:
   - Dynamic binding (or late binding) refers to the process where the method to be executed is determined at runtime, typically using virtual functions.

#### Advantages of OOP in C++:
- **Modularity**: Code is organized into classes, making it easier to manage and maintain.
- **Reusability**: Inheritance and polymorphism allow code reuse, reducing redundancy.
- **Scalability**: OOP makes it easier to add new features or modify existing ones.
- **Data Security**: Encapsulation ensures that data is protected and accessed only through controlled methods.

OOP is a powerful paradigm in C++ that helps in building robust, maintainable, and scalable applications.
\`\`\``,level:"Beginner"},{id:"ebe9dc4d-0469-4513-8d13-b7e4a49fb178",question:"What is function overloading in C++?",answer:`\`\`\`markdown
### Function Overloading in C++

Function overloading in C++ is a feature that allows multiple functions to have the same name but with different parameter lists (type, number, or both). It enables the same function name to perform different tasks based on the arguments passed to it.

When a function is called, the compiler determines which version of the function to invoke by examining the number and types of arguments provided. This is known as **compile-time polymorphism** or **static polymorphism**.

#### Example:
\`\`\`cpp
#include <iostream>
using namespace std;

// Function to add two integers
int add(int a, int b) {
    return a + b;
}

// Function to add three integers
int add(int a, int b, int c) {
    return a + b + c;
}

// Function to add two double values
double add(double a, double b) {
    return a + b;
}

int main() {
    cout << "Sum of 2 and 3: " << add(2, 3) << endl;           // Calls the first function
    cout << "Sum of 1, 2, and 3: " << add(1, 2, 3) << endl;   // Calls the second function
    cout << "Sum of 2.5 and 3.5: " << add(2.5, 3.5) << endl;  // Calls the third function
    return 0;
}
\`\`\`

#### Output:
\`\`\`
Sum of 2 and 3: 5
Sum of 1, 2, and 3: 6
Sum of 2.5 and 3.5: 6
\`\`\`

#### Key Points:
- Function overloading is achieved by varying the number or types of parameters.
- The return type of the function is not considered for overloading.
- Overloading improves code readability and reusability.
- It is resolved at compile time.

Function overloading is an example of **polymorphism**, which is one of the core principles of object-oriented programming.
\`\`\``,level:"Intermediate"},{id:"df6408d0-90db-43f3-ab2e-413e1d8dbfa1",question:"What is operator overloading in C++ and how is it implemented?",answer:`\`\`\`markdown
### Operator Overloading in C++

Operator overloading in C++ is a feature that allows developers to redefine the way operators work for user-defined types (e.g., classes and structs). It enables operators such as \`+\`, \`-\`, \`*\`, \`==\`, etc., to be used with objects of these types, making the code more intuitive and readable.

#### How Operator Overloading Works
When an operator is overloaded, a special function (called an operator function) is defined to specify the behavior of the operator for the given type. This function can be a member function of a class or a non-member (friend) function.

#### Syntax for Operator Overloading
The syntax for overloading an operator involves using the \`operator\` keyword followed by the symbol of the operator being overloaded.

\`\`\`cpp
ReturnType ClassName::operatorSymbol(Parameters) {
    // Implementation of the operator
}
\`\`\`

#### Example: Overloading the \`+\` Operator
Here is an example of overloading the \`+\` operator for a class \`Complex\` to add two complex numbers:

\`\`\`cpp
#include <iostream>
using namespace std;

class Complex {
private:
    double real;
    double imag;

public:
    // Constructor
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    // Overloading the + operator
    Complex operator+(const Complex& other) {
        return Complex(real + other.real, imag + other.imag);
    }

    // Function to display the complex number
    void display() const {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3.0, 4.0);
    Complex c2(1.0, 2.0);

    Complex c3 = c1 + c2; // Using the overloaded + operator
    c3.display(); // Output: 4.0 + 6.0i

    return 0;
}
\`\`\`

#### Key Points to Remember
1. **Not all operators can be overloaded**: Operators like \`::\`, \`.*\`, \`.\`, and \`sizeof\` cannot be overloaded.
2. **Overloading as a member vs. non-member**:
   - Member functions take one argument (the right-hand operand).
   - Non-member functions take two arguments (both operands).
3. **Preserve operator semantics**: Overloaded operators should behave intuitively and follow the expected semantics of the operator.
4. **Friend functions**: For operators that need access to private members of a class, you can use friend functions.

Operator overloading enhances code readability and allows user-defined types to behave more like built-in types.
\`\`\``,level:"Intermediate"},{id:"a1cb60ad-556f-410d-adbd-12d3723f903e",question:"What is inheritance in C++ and what are its types?",answer:`\`\`\`markdown
Inheritance in C++ is a fundamental concept of Object-Oriented Programming (OOP) that allows a class (called the derived or child class) to acquire the properties and behaviors (methods and attributes) of another class (called the base or parent class). It promotes code reusability and establishes a relationship between classes.

### Types of Inheritance in C++
C++ supports the following types of inheritance:

1. **Single Inheritance**  
   In single inheritance, a derived class inherits from a single base class.  
   Example:
   \`\`\`cpp
   class Base {
   public:
       void display() {
           std::cout << "Base class" << std::endl;
       }
   };

   class Derived : public Base {
   public:
       void show() {
           std::cout << "Derived class" << std::endl;
       }
   };
   \`\`\`

2. **Multiple Inheritance**  
   In multiple inheritance, a derived class inherits from more than one base class.  
   Example:
   \`\`\`cpp
   class Base1 {
   public:
       void display1() {
           std::cout << "Base1 class" << std::endl;
       }
   };

   class Base2 {
   public:
       void display2() {
           std::cout << "Base2 class" << std::endl;
       }
   };

   class Derived : public Base1, public Base2 {
   public:
       void show() {
           std::cout << "Derived class" << std::endl;
       }
   };
   \`\`\`

3. **Multilevel Inheritance**  
   In multilevel inheritance, a class is derived from another derived class.  
   Example:
   \`\`\`cpp
   class Base {
   public:
       void display() {
           std::cout << "Base class" << std::endl;
       }
   };

   class Intermediate : public Base {
   public:
       void showIntermediate() {
           std::cout << "Intermediate class" << std::endl;
       }
   };

   class Derived : public Intermediate {
   public:
       void showDerived() {
           std::cout << "Derived class" << std::endl;
       }
   };
   \`\`\`

4. **Hierarchical Inheritance**  
   In hierarchical inheritance, multiple derived classes inherit from a single base class.  
   Example:
   \`\`\`cpp
   class Base {
   public:
       void display() {
           std::cout << "Base class" << std::endl;
       }
   };

   class Derived1 : public Base {
   public:
       void show1() {
           std::cout << "Derived1 class" << std::endl;
       }
   };

   class Derived2 : public Base {
   public:
       void show2() {
           std::cout << "Derived2 class" << std::endl;
       }
   };
   \`\`\`

5. **Hybrid (Virtual) Inheritance**  
   Hybrid inheritance is a combination of two or more types of inheritance. It often involves the use of virtual inheritance to avoid ambiguity caused by multiple inheritance.  
   Example:
   \`\`\`cpp
   class Base {
   public:
       void display() {
           std::cout << "Base class" << std::endl;
       }
   };

   class Intermediate1 : virtual public Base {};
   class Intermediate2 : virtual public Base {};

   class Derived : public Intermediate1, public Intermediate2 {};
   \`\`\`

### Key Points
- **Access Specifiers**: The type of inheritance (public, protected, or private) determines the accessibility of base class members in the derived class.
- **Virtual Inheritance**: Used to resolve ambiguity in cases of multiple inheritance.
- Inheritance allows for better code organization, reusability, and maintainability.
\`\`\``,level:"Intermediate"},{id:"10d7aab9-0e6b-4cc8-928a-d2657b2e8350",question:"What is polymorphism in C++ and how is it achieved?",answer:`\`\`\`markdown
### Polymorphism in C++

Polymorphism in C++ refers to the ability of a function, object, or operator to take on multiple forms. It allows one interface to be used for a general class of actions, enabling flexibility and the ability to define behavior dynamically at runtime. Polymorphism is a key feature of Object-Oriented Programming (OOP) and is primarily used to achieve code reusability and extensibility.

#### Types of Polymorphism in C++
1. **Compile-Time Polymorphism (Static Binding):**
   - Achieved through function overloading and operator overloading.
   - The function or operator to be invoked is determined at compile time.

   Example of Function Overloading:
   \`\`\`cpp
   #include <iostream>
   using namespace std;

   class Calculator {
   public:
       int add(int a, int b) {
           return a + b;
       }
       double add(double a, double b) {
           return a + b;
       }
   };

   int main() {
       Calculator calc;
       cout << calc.add(5, 10) << endl;        // Calls int version
       cout << calc.add(5.5, 10.2) << endl;    // Calls double version
       return 0;
   }
   \`\`\`

2. **Run-Time Polymorphism (Dynamic Binding):**
   - Achieved through inheritance and virtual functions.
   - The function to be invoked is determined at runtime based on the type of the object being referred to.

   Example of Run-Time Polymorphism:
   \`\`\`cpp
   #include <iostream>
   using namespace std;

   class Base {
   public:
       virtual void display() {
           cout << "Display from Base class" << endl;
       }
   };

   class Derived : public Base {
   public:
       void display() override {
           cout << "Display from Derived class" << endl;
       }
   };

   int main() {
       Base* basePtr;
       Derived derivedObj;

       basePtr = &derivedObj;
       basePtr->display();  // Calls Derived's display() due to runtime polymorphism
       return 0;
   }
   \`\`\`

#### Key Concepts for Achieving Polymorphism
1. **Function Overloading:** Multiple functions with the same name but different parameter lists.
2. **Operator Overloading:** Redefining the behavior of operators for user-defined types.
3. **Inheritance:** Allows a derived class to inherit properties and behavior from a base class.
4. **Virtual Functions:** Functions declared with the \`virtual\` keyword in the base class, enabling dynamic dispatch.
5. **Pointers and References:** Used to refer to base class objects, allowing runtime polymorphism.

Polymorphism enhances code flexibility and maintainability by allowing the same interface to perform different behaviors depending on the context.
\`\`\``,level:"Intermediate"},{id:"5202f65d-1535-4188-bf09-04f8e77238e8",question:"What is the difference between compile-time and run-time polymorphism in C++?",answer:`\`\`\`markdown
In C++, polymorphism allows objects to be treated as instances of their parent class, enabling dynamic behavior. There are two types of polymorphism: compile-time and run-time.

### 1. Compile-Time Polymorphism
- **Definition**: Also known as static polymorphism, it is resolved during the compilation of the program.
- **Mechanism**: Achieved through function overloading and operator overloading.
- **Key Characteristics**:
  - The function to be executed is determined at compile time.
  - Faster execution since the decision is made during compilation.
  - Does not involve runtime overhead.
- **Example**:
  \`\`\`cpp
  #include <iostream>
  using namespace std;

  class Calculator {
  public:
      int add(int a, int b) {
          return a + b;
      }

      double add(double a, double b) {
          return a + b;
      }
  };

  int main() {
      Calculator calc;
      cout << calc.add(5, 10) << endl;       // Calls int version
      cout << calc.add(5.5, 10.5) << endl;   // Calls double version
      return 0;
  }
  \`\`\`

### 2. Run-Time Polymorphism
- **Definition**: Also known as dynamic polymorphism, it is resolved during the execution of the program.
- **Mechanism**: Achieved through inheritance and virtual functions.
- **Key Characteristics**:
  - The function to be executed is determined at runtime.
  - Introduces runtime overhead due to the use of virtual tables (vtable).
  - Enables dynamic behavior and allows overriding of base class methods in derived classes.
- **Example**:
  \`\`\`cpp
  #include <iostream>
  using namespace std;

  class Base {
  public:
      virtual void display() {
          cout << "Display from Base class" << endl;
      }
  };

  class Derived : public Base {
  public:
      void display() override {
          cout << "Display from Derived class" << endl;
      }
  };

  int main() {
      Base* basePtr;
      Derived derivedObj;

      basePtr = &derivedObj;
      basePtr->display();  // Calls Derived's display() at runtime
      return 0;
  }
  \`\`\`

### Key Differences
| Feature                | Compile-Time Polymorphism        | Run-Time Polymorphism          |
|------------------------|----------------------------------|--------------------------------|
| **Resolution Time**    | Compile time                    | Runtime                       |
| **Mechanism**          | Function/Operator overloading   | Virtual functions             |
| **Performance**        | Faster, no runtime overhead     | Slower, involves runtime overhead |
| **Flexibility**        | Less flexible                   | More flexible                 |
| **Inheritance**        | Not required                   | Requires inheritance          |

Both types of polymorphism are essential in C++ for achieving code reusability and flexibility, depending on the use case.
\`\`\``,level:"Intermediate"},{id:"c3d48660-ade3-43af-9435-12b1404f22ae",question:"What is a virtual function in C++?",answer:`\`\`\`markdown
A **virtual function** in C++ is a member function in a base class that you can override in a derived class. It is declared using the \`virtual\` keyword in the base class. Virtual functions enable **runtime polymorphism**, allowing the program to determine at runtime which function to invoke, based on the type of the object being pointed to, rather than the type of the pointer.

When a base class pointer or reference is used to refer to a derived class object, the derived class's version of the virtual function is called (if it is overridden), instead of the base class's version. This behavior is achieved through the use of a **vtable** (virtual table) mechanism.

### Syntax:
\`\`\`cpp
class Base {
public:
    virtual void display() {
        std::cout << "Display from Base class" << std::endl;
    }
};

class Derived : public Base {
public:
    void display() override { // Override the base class function
        std::cout << "Display from Derived class" << std::endl;
    }
};

int main() {
    Base* basePtr;
    Derived derivedObj;

    basePtr = &derivedObj;

    // Calls Derived's display() because display() is virtual
    basePtr->display();

    return 0;
}
\`\`\`

### Key Points:
1. Virtual functions must be members of a class (not standalone functions).
2. They enable dynamic dispatch, meaning the function call is resolved at runtime.
3. If a derived class does not override a virtual function, the base class's version is used.
4. Declaring a function as \`virtual\` in the base class ensures that derived classes can override it.
5. Virtual functions can be overridden in derived classes but must have the same signature.
6. A class with at least one virtual function typically has a **vtable** to support dynamic dispatch.

### Example Output:
\`\`\`
Display from Derived class
\`\`\`
\`\`\``,level:"Intermediate"},{id:"68d76ee0-5e93-44fe-9901-8c8df29a16a4",question:"What is the purpose of the 'virtual' keyword in C++?",answer:`\`\`\`markdown
The \`virtual\` keyword in C++ is used to enable polymorphism, which allows a derived class to override a member function of its base class. When a member function in a base class is declared as \`virtual\`, it ensures that the function to be called is determined at runtime based on the type of the object being pointed to, rather than the type of the pointer or reference.

This is particularly useful in scenarios involving inheritance, where you want the derived class's implementation of a function to be invoked even when using a base class pointer or reference.

### Key Points:
1. **Dynamic Dispatch**: The \`virtual\` keyword enables dynamic dispatch, meaning the decision of which function to call is made at runtime.
2. **Overriding**: Derived classes can provide their own implementation of a virtual function, which will override the base class's implementation.
3. **Virtual Table (vtable)**: Behind the scenes, C++ uses a mechanism called a virtual table (vtable) to support virtual functions.
4. **Polymorphism**: It is a cornerstone of achieving runtime polymorphism in object-oriented programming.

### Example:
\`\`\`cpp
#include <iostream>
using namespace std;

class Base {
public:
    virtual void display() {
        cout << "Base class display function" << endl;
    }
};

class Derived : public Base {
public:
    void display() override { // Override the base class function
        cout << "Derived class display function" << endl;
    }
};

int main() {
    Base* basePtr;
    Derived derivedObj;
    basePtr = &derivedObj;

    // Calls the derived class's display function due to virtual keyword
    basePtr->display();

    return 0;
}
\`\`\`

### Output:
\`\`\`
Derived class display function
\`\`\`

Without the \`virtual\` keyword, the base class's \`display\` function would have been called instead, as the function call would be resolved at compile time based on the type of the pointer (\`Base*\`).

### Summary:
The \`virtual\` keyword is essential for enabling runtime polymorphism and ensuring that the correct function implementation is called for derived classes when accessed through base class pointers or references.
\`\`\``,level:"Intermediate"},{id:"c7455ef0-b2c5-4f70-b793-d5136c7df806",question:"What is an abstract class in C++?",answer:`\`\`\`markdown
An abstract class in C++ is a class that is designed to be specifically used as a base class and cannot be instantiated on its own. It is declared by including at least one pure virtual function. A pure virtual function is a function that is declared within a class and is assigned \`= 0\`, indicating that it must be overridden by any derived class.

### Key Points:
1. **Purpose**: Abstract classes are used to define an interface or a blueprint for derived classes.
2. **Pure Virtual Function**: A function declared with \`= 0\` in the base class, which must be implemented by derived classes.
3. **Instantiation**: Abstract classes cannot be instantiated directly. They can only be used as base classes.
4. **Polymorphism**: Abstract classes enable polymorphism by allowing derived classes to provide specific implementations of the pure virtual functions.

### Syntax Example:
\`\`\`cpp
#include <iostream>
using namespace std;

// Abstract class
class Shape {
public:
    // Pure virtual function
    virtual void draw() = 0;

    // Regular member function
    void display() {
        cout << "This is a shape." << endl;
    }
};

// Derived class
class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing a circle." << endl;
    }
};

int main() {
    // Shape shape; // Error: Cannot instantiate abstract class
    Circle circle;
    circle.draw();    // Output: Drawing a circle.
    circle.display(); // Output: This is a shape.
    return 0;
}
\`\`\`

### Explanation:
- The \`Shape\` class is an abstract class because it contains the pure virtual function \`draw()\`.
- The \`Circle\` class inherits from \`Shape\` and provides an implementation for the \`draw()\` function.
- Attempting to instantiate \`Shape\` directly will result in a compilation error.

Abstract classes are a fundamental concept in object-oriented programming, used to enforce a contract for derived classes and promote code reusability and maintainability.
\`\`\``,level:"Intermediate"},{id:"7ded1d73-94d4-4987-be48-dfc8f6435d2a",question:"What is a pure virtual function in C++?",answer:`\`\`\`markdown
A pure virtual function in C++ is a virtual function that is declared within a base class and is meant to be overridden by derived classes. It does not have a definition (implementation) in the base class and is specified by assigning \`= 0\` to the function declaration. A class containing at least one pure virtual function is considered an abstract class and cannot be instantiated directly.

The purpose of a pure virtual function is to enforce that derived classes provide their own implementation of the function. This is commonly used in polymorphism to define a common interface for a group of related classes.

### Syntax:
\`\`\`cpp
class Base {
public:
    virtual void pureVirtualFunction() = 0; // Pure virtual function
};
\`\`\`

### Example:
\`\`\`cpp
#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() = 0; // Pure virtual function
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
};

class Square : public Shape {
public:
    void draw() override {
        cout << "Drawing Square" << endl;
    }
};

int main() {
    Shape* shape1 = new Circle();
    Shape* shape2 = new Square();

    shape1->draw(); // Output: Drawing Circle
    shape2->draw(); // Output: Drawing Square

    delete shape1;
    delete shape2;

    return 0;
}
\`\`\`

### Key Points:
1. A pure virtual function is declared using \`= 0\` in the base class.
2. A class with at least one pure virtual function is abstract and cannot be instantiated.
3. Derived classes must override the pure virtual function to be instantiable.
4. Pure virtual functions are used to enforce a consistent interface across derived classes.
\`\`\``,level:"Intermediate"},{id:"7de8b953-243b-4a92-ba62-984389baadea",question:"What is the difference between 'std::vector' and 'std::array' in C++?",answer:'```markdown\nIn C++, `std::vector` and `std::array` are both container classes provided by the Standard Template Library (STL), but they have significant differences in terms of functionality and use cases:\n\n### 1. **Size**\n   - **`std::vector`**: Dynamic size. The size of a `std::vector` can grow or shrink during runtime as elements are added or removed.\n   - **`std::array`**: Fixed size. The size of a `std::array` is determined at compile time and cannot be changed during runtime.\n\n### 2. **Memory Allocation**\n   - **`std::vector`**: Allocates memory dynamically on the heap. It may reallocate memory when the size increases beyond its current capacity.\n   - **`std::array`**: Allocates memory on the stack (or as part of the containing object). It does not involve dynamic memory allocation.\n\n### 3. **Performance**\n   - **`std::vector`**: Slightly slower due to dynamic memory allocation and potential reallocation when resizing.\n   - **`std::array`**: Faster because it uses stack memory and does not involve dynamic allocation.\n\n### 4. **Flexibility**\n   - **`std::vector`**: More flexible as it supports dynamic resizing, making it suitable for scenarios where the number of elements is not known in advance.\n   - **`std::array`**: Less flexible due to its fixed size, but it is more efficient for scenarios where the size is constant and known at compile time.\n\n### 5. **Initialization**\n   - **`std::vector`**: Can be initialized with an empty size or with a specific number of elements.\n     ```cpp\n     std::vector<int> vec; // Empty vector\n     std::vector<int> vec(5, 0); // Vector with 5 elements initialized to 0\n     ```\n   - **`std::array`**: Must be initialized with a fixed size.\n     ```cpp\n     std::array<int, 5> arr = {1, 2, 3, 4, 5}; // Array with 5 elements\n     ```\n\n### 6. **Size Information**\n   - **`std::vector`**: The size can be queried using the `size()` method, and the capacity can be queried using the `capacity()` method.\n   - **`std::array`**: The size is fixed and can be queried using the `size()` method, which is a `constexpr`.\n\n### 7. **Use Cases**\n   - **`std::vector`**: Best suited for scenarios where the number of elements is not known in advance or may change dynamically.\n   - **`std::array`**: Ideal for scenarios where the size is fixed and known at compile time, such as small collections of elements.\n\n### Example Code\n```cpp\n#include <iostream>\n#include <vector>\n#include <array>\n\nint main() {\n    // std::vector example\n    std::vector<int> vec = {1, 2, 3};\n    vec.push_back(4); // Dynamic resizing\n    std::cout << "Vector size: " << vec.size() << std::endl;\n\n    // std::array example\n    std::array<int, 3> arr = {1, 2, 3};\n    // arr.push_back(4); // Error: std::array has fixed size\n    std::cout << "Array size: " << arr.size() << std::endl;\n\n    return 0;\n}\n```\n\n### Summary\n- Use `std::vector` when you need a dynamic, resizable container.\n- Use `std::array` when you need a fixed-size, efficient container with better performance for small, constant-size collections.\n```',level:"Intermediate"},{id:"d7e79900-2f50-408d-9b07-70c6c69f1143",question:"What is the difference between 'public', 'private', and 'protected' access specifiers in C++?",answer:"```markdown\nIn C++, `public`, `private`, and `protected` are access specifiers that determine the accessibility of class members (attributes and methods) within and outside the class. Here's the difference between them:\n\n1. **`public`**:\n   - Members declared as `public` are accessible from anywhere in the program.\n   - They can be accessed by objects of the class, derived classes, and external code.\n\n   ```cpp\n   class Example {\n   public:\n       int publicVar; // Accessible anywhere\n   };\n   ```\n\n2. **`private`**:\n   - Members declared as `private` are only accessible within the class itself.\n   - They cannot be accessed directly by objects of the class or derived classes.\n\n   ```cpp\n   class Example {\n   private:\n       int privateVar; // Accessible only within the class\n   };\n   ```\n\n3. **`protected`**:\n   - Members declared as `protected` are accessible within the class and by derived classes.\n   - They are not accessible by objects of the class or external code.\n\n   ```cpp\n   class Example {\n   protected:\n       int protectedVar; // Accessible within the class and derived classes\n   };\n   ```\n\n### Summary Table:\n\n| Access Specifier | Access Within Class | Access by Derived Classes | Access by Objects/External Code |\n|-------------------|---------------------|---------------------------|----------------------------------|\n| `public`          | Yes                 | Yes                       | Yes                              |\n| `protected`       | Yes                 | Yes                       | No                               |\n| `private`         | Yes                 | No                        | No                               |\n\nBy using these access specifiers, you can control the encapsulation and visibility of class members, which is a fundamental principle of object-oriented programming.\n```",level:"Beginner"},{id:"a32c7f7d-46f4-4ee6-b16c-332d1079a154",question:"What is the purpose of the 'friend' keyword in C++?",answer:`\`\`\`markdown
In C++, the \`friend\` keyword is used to grant a non-member function or another class access to the private and protected members of a class. By default, private and protected members of a class are only accessible within the class itself or its derived classes. However, there are situations where it is necessary for an external function or another class to access these members. The \`friend\` keyword allows this while maintaining encapsulation.

### Key Points:
1. **Friend Function**:
   - A non-member function can be declared as a friend of a class.
   - This function can access the private and protected members of the class.
   - Syntax:
     \`\`\`cpp
     class MyClass {
         private:
             int data;
         public:
             friend void displayData(MyClass obj); // Friend function declaration
     };
     \`\`\`

2. **Friend Class**:
   - An entire class can be declared as a friend of another class.
   - All member functions of the friend class can access the private and protected members of the class that declared it as a friend.
   - Syntax:
     \`\`\`cpp
     class ClassA {
         private:
             int data;
         public:
             friend class ClassB; // Friend class declaration
     };
     \`\`\`

### Use Cases:
- When two classes or functions need to work closely together and require access to each other's private data.
- To implement operator overloading for non-member functions.
- To maintain encapsulation while allowing controlled access to class internals.

### Example:
\`\`\`cpp
#include <iostream>
using namespace std;

class MyClass {
private:
    int data;
public:
    MyClass(int value) : data(value) {}
    friend void displayData(const MyClass& obj); // Friend function declaration
};

void displayData(const MyClass& obj) {
    cout << "Data: " << obj.data << endl; // Accessing private member
}

int main() {
    MyClass obj(42);
    displayData(obj); // Friend function can access private member
    return 0;
}
\`\`\`

### Notes:
- Friendship is not transitive, inherited, or reciprocal.
- Use the \`friend\` keyword judiciously, as excessive use can lead to tight coupling and reduced maintainability.
\`\`\``,level:"Intermediate"},{id:"8c859c81-e36b-4023-96d2-483d5746e690",question:"What is the difference between shallow copy and deep copy in C++?",answer:`\`\`\`markdown
In C++, the difference between shallow copy and deep copy lies in how they handle copying objects, especially when the object contains dynamically allocated memory or pointers.

### Shallow Copy
- A shallow copy duplicates as-is, copying the values of the member variables from one object to another.
- If the object contains pointers, the shallow copy only copies the pointer values, not the actual data they point to. Both objects will share the same memory location for the dynamically allocated data.
- This can lead to issues such as **dangling pointers** or **double deletion** when one object modifies or deletes the shared memory.

#### Example:
\`\`\`cpp
class Shallow {
public:
    int* data;
    Shallow(int value) {
        data = new int(value);
    }
    ~Shallow() {
        delete data;
    }
};

Shallow obj1(10);
Shallow obj2 = obj1; // Shallow copy: obj2.data points to the same memory as obj1.data
\`\`\`

### Deep Copy
- A deep copy creates a new copy of the object, including duplicating any dynamically allocated memory or resources.
- Each object has its own copy of the data, ensuring they are independent of each other.
- This approach avoids issues like shared memory conflicts or accidental modifications.

#### Example:
\`\`\`cpp
class Deep {
public:
    int* data;
    Deep(int value) {
        data = new int(value);
    }
    Deep(const Deep& other) { // Deep copy constructor
        data = new int(*other.data);
    }
    ~Deep() {
        delete data;
    }
};

Deep obj1(10);
Deep obj2 = obj1; // Deep copy: obj2.data points to a separate memory location
\`\`\`

### Key Differences
| Aspect           | Shallow Copy                          | Deep Copy                           |
|------------------|---------------------------------------|-------------------------------------|
| Memory Handling  | Copies pointers, shares memory.       | Allocates new memory, copies data. |
| Independence     | Objects are not independent.          | Objects are fully independent.     |
| Safety           | Prone to issues like double deletion. | Safer, avoids shared memory issues.|

In summary, shallow copy is faster but riskier, while deep copy is safer but may have performance overhead due to additional memory allocation and copying.
\`\`\``,level:"Intermediate"},{id:"0885bc53-1d79-4002-982b-5ebf7c36a2c9",question:"What is the 'this' pointer in C++?",answer:`\`\`\`markdown
In C++, the \`this\` pointer is an implicit pointer available within all non-static member functions of a class. It points to the current instance of the class for which the member function is called. The \`this\` pointer is used to access the calling object's members and can be useful in scenarios such as:

1. **Distinguishing between local variables and class members**: When a member variable is shadowed by a local variable or a function parameter, the \`this\` pointer can be used to explicitly refer to the class member.

   \`\`\`cpp
   class Example {
   private:
       int value;
   public:
       void setValue(int value) {
           this->value = value; // 'this->value' refers to the class member, while 'value' refers to the parameter
       }
   };
   \`\`\`

2. **Returning the current object**: The \`this\` pointer can be returned from a member function to enable method chaining.

   \`\`\`cpp
   class Example {
   private:
       int value;
   public:
       Example& setValue(int value) {
           this->value = value;
           return *this; // Returning the current object
       }
   };
   \`\`\`

3. **Avoiding copying the object**: When passing the current object to another function, the \`this\` pointer can be used to pass the address of the object instead of creating a copy.

   \`\`\`cpp
   void display(const Example* obj);

   class Example {
   public:
       void show() {
           display(this); // Passing the address of the current object
       }
   };
   \`\`\`

### Key Points:
- The \`this\` pointer is not available in static member functions because static functions are not tied to any specific instance of the class.
- It is a constant pointer, meaning the address it holds cannot be changed.

The \`this\` pointer is a powerful feature in C++ that helps manage object-oriented programming tasks effectively.
\`\`\``,level:"Intermediate"},{id:"70a7aa00-1639-43a2-9b45-350654daf793",question:"What is the purpose of the 'std::mutex' in C++?",answer:`\`\`\`markdown
In C++, \`std::mutex\` is a synchronization primitive provided by the Standard Template Library (STL) to protect shared resources from being accessed simultaneously by multiple threads. Its primary purpose is to ensure mutual exclusion, meaning that only one thread can access the critical section of code protected by the \`std::mutex\` at a time.

### Key Features of \`std::mutex\`:
1. **Locking and Unlocking**:
   - A thread can acquire ownership of the \`std::mutex\` by calling its \`lock()\` method.
   - Once the thread is done with the critical section, it must release the \`std::mutex\` by calling \`unlock()\`.

2. **Thread Safety**:
   - By ensuring that only one thread can hold the \`std::mutex\` at a time, it prevents race conditions when multiple threads attempt to modify shared data.

3. **RAII with \`std::lock_guard\`**:
   - To avoid manual locking and unlocking (which can lead to errors like forgetting to unlock), \`std::lock_guard\` or \`std::unique_lock\` can be used. These provide exception-safe locking by automatically releasing the \`std::mutex\` when the guard object goes out of scope.

### Example Usage:
\`\`\`cpp
#include <iostream>
#include <thread>
#include <mutex>

std::mutex mtx; // Global mutex

void print_message(const std::string& message) {
    mtx.lock(); // Lock the mutex
    std::cout << message << std::endl;
    mtx.unlock(); // Unlock the mutex
}

int main() {
    std::thread t1(print_message, "Hello from Thread 1");
    std::thread t2(print_message, "Hello from Thread 2");

    t1.join();
    t2.join();

    return 0;
}
\`\`\`

### Common Issues:
- **Deadlocks**: If multiple threads try to acquire multiple mutexes in different orders, it can lead to a deadlock.
- **Performance Overhead**: Excessive use of \`std::mutex\` can lead to contention and degrade performance.

### Alternatives:
- For more advanced scenarios, C++ provides other synchronization mechanisms like \`std::recursive_mutex\`, \`std::shared_mutex\`, and \`std::atomic\`.

In summary, \`std::mutex\` is a fundamental tool for thread synchronization in C++, ensuring safe access to shared resources in multithreaded programs.
\`\`\``,level:"Advanced"},{id:"8265ab69-4b01-4f0d-8cbb-2193976fddc9",question:"What is the purpose of the 'static' keyword in C++?",answer:`\`\`\`markdown
The \`static\` keyword in C++ serves multiple purposes depending on its context:

1. **Static Variables in Functions**:
   - A \`static\` variable inside a function retains its value between function calls.
   - It is initialized only once, and its lifetime extends until the program ends.
   \`\`\`cpp
   void example() {
       static int count = 0; // Retains its value between calls
       count++;
       std::cout << count << std::endl;
   }
   \`\`\`

2. **Static Variables in Classes**:
   - A \`static\` member variable in a class is shared among all objects of the class.
   - It belongs to the class rather than any specific instance.
   \`\`\`cpp
   class MyClass {
   public:
       static int sharedValue;
   };

   int MyClass::sharedValue = 0; // Definition outside the class
   \`\`\`

3. **Static Member Functions**:
   - A \`static\` member function in a class can be called without an instance of the class.
   - It can only access other \`static\` members (variables or functions) of the class.
   \`\`\`cpp
   class MyClass {
   public:
       static void display() {
           std::cout << "Static function called!" << std::endl;
       }
   };

   MyClass::display(); // Can be called without an object
   \`\`\`

4. **Static Global Variables**:
   - A \`static\` global variable limits its scope to the file in which it is declared.
   - This prevents it from being accessed in other files, providing internal linkage.
   \`\`\`cpp
   static int globalVar = 42; // Accessible only within this file
   \`\`\`

5. **Static in Namespace Scope**:
   - Similar to global variables, a \`static\` variable in namespace scope has internal linkage and is limited to the file it is declared in.

The \`static\` keyword is a powerful tool for managing memory, scope, and access control in C++ programs.
\`\`\``,level:"Intermediate"},{id:"172d7c4e-a648-45fd-8b28-fe358b1e02cc",question:"What is the difference between a stack and a heap in C++?",answer:`\`\`\`markdown
In C++, the **stack** and **heap** are two distinct memory areas used for managing data, and they differ in several key aspects:

### 1. **Memory Allocation**
   - **Stack**: Memory is allocated automatically when a function is called and deallocated when the function exits. This is used for local variables and function call management.
   - **Heap**: Memory is allocated manually using \`new\` or \`malloc\` and must be explicitly deallocated using \`delete\` or \`free\`.

### 2. **Lifetime**
   - **Stack**: The lifetime of variables is limited to the scope in which they are defined. Once the scope is exited, the memory is automatically reclaimed.
   - **Heap**: The lifetime of variables persists until the programmer explicitly deallocates the memory. If not managed properly, it can lead to memory leaks.

### 3. **Size**
   - **Stack**: The size of the stack is typically smaller and fixed. It is determined at compile time and can lead to a stack overflow if exceeded.
   - **Heap**: The heap is much larger and can grow dynamically, limited only by the system's available memory.

### 4. **Access Speed**
   - **Stack**: Access to stack memory is faster because it operates in a last-in, first-out (LIFO) manner and is managed by the CPU.
   - **Heap**: Access to heap memory is slower due to the overhead of dynamic memory management and potential fragmentation.

### 5. **Usage**
   - **Stack**: Used for storing local variables, function parameters, and return addresses.
   - **Heap**: Used for dynamically allocated memory, such as objects or arrays whose size is not known at compile time.

### 6. **Error Handling**
   - **Stack**: Errors like stack overflow occur when the stack exceeds its limit.
   - **Heap**: Errors like memory leaks or heap corruption occur if memory is not properly managed.

### Example
\`\`\`cpp
#include <iostream>
using namespace std;

void stackExample() {
    int x = 10; // Allocated on the stack
    cout << "Stack variable: " << x << endl;
}

void heapExample() {
    int* ptr = new int(20); // Allocated on the heap
    cout << "Heap variable: " << *ptr << endl;
    delete ptr; // Freeing heap memory
}

int main() {
    stackExample();
    heapExample();
    return 0;
}
\`\`\`

### Summary Table

| Feature          | Stack                          | Heap                         |
|------------------|--------------------------------|-----------------------------|
| Allocation       | Automatic                     | Manual                      |
| Deallocation     | Automatic                     | Manual                      |
| Lifetime         | Limited to scope              | Until explicitly deallocated|
| Size             | Smaller, fixed                | Larger, dynamic             |
| Speed            | Faster                        | Slower                      |
| Error Handling   | Stack overflow                | Memory leaks, fragmentation |

Proper understanding and management of stack and heap memory are crucial for writing efficient and error-free C++ programs.
\`\`\``,level:"Intermediate"},{id:"3677471d-0db8-451e-9df3-85ef9186fce2",question:"What is the Standard Template Library (STL) in C++?",answer:"```markdown\nThe Standard Template Library (STL) in C++ is a powerful set of C++ template classes that provide general-purpose, reusable components for data structures and algorithms. It is a part of the C++ Standard Library and is designed to help developers write efficient, maintainable, and scalable code.\n\nThe STL is broadly divided into three main components:\n\n1. **Containers**: These are data structures used to store collections of objects. Examples include:\n   - `vector`: A dynamic array.\n   - `list`: A doubly linked list.\n   - `deque`: A double-ended queue.\n   - `set` and `multiset`: Containers for unique or duplicate sorted elements.\n   - `map` and `multimap`: Associative containers for key-value pairs.\n   - `unordered_set` and `unordered_map`: Hash-based containers for faster lookups.\n\n2. **Algorithms**: These are a collection of functions for performing operations on data stored in containers. Examples include:\n   - Searching (`find`, `binary_search`).\n   - Sorting (`sort`, `stable_sort`).\n   - Modifying (`copy`, `replace`, `transform`).\n   - Other utilities (`accumulate`, `count`, `for_each`).\n\n3. **Iterators**: These are objects that act as pointers to elements in containers. They provide a way to traverse and manipulate container elements. Common types of iterators include:\n   - Input and output iterators.\n   - Forward iterators.\n   - Bidirectional iterators.\n   - Random-access iterators.\n\nThe STL is highly efficient and provides a consistent interface, making it easier for developers to implement complex functionalities without reinventing the wheel. It promotes code reusability and reduces development time.\n```",level:"Intermediate"},{id:"14dfa240-febc-431c-aede-32087b544d07",question:"What are the main components of STL in C++?",answer:"```markdown\nThe Standard Template Library (STL) in C++ is a powerful set of template-based components that provide reusable and efficient data structures and algorithms. The main components of STL are:\n\n1. **Containers**:\n   - Containers are data structures that store collections of objects. They are classified into three types:\n     - **Sequence Containers**: Maintain elements in a linear order (e.g., `vector`, `deque`, `list`).\n     - **Associative Containers**: Store elements in a sorted order and allow fast retrieval using keys (e.g., `set`, `map`, `multiset`, `multimap`).\n     - **Unordered Containers**: Provide fast access using hash tables (e.g., `unordered_set`, `unordered_map`, `unordered_multiset`, `unordered_multimap`).\n\n2. **Algorithms**:\n   - Algorithms are a collection of functions that perform operations on containers, such as searching, sorting, and manipulating data. Examples include `sort`, `find`, `reverse`, `accumulate`, and `binary_search`.\n\n3. **Iterators**:\n   - Iterators are objects used to traverse elements in containers. They act as a bridge between containers and algorithms. Common types of iterators include:\n     - Input Iterator\n     - Output Iterator\n     - Forward Iterator\n     - Bidirectional Iterator\n     - Random Access Iterator\n\n4. **Functors (Function Objects)**:\n   - Functors are objects that can be called as if they were functions. They are used to define custom operations for algorithms. For example, `std::greater` and `std::less` are predefined functors.\n\n5. **Adapters**:\n   - Adapters modify the behavior of containers, iterators, or functors. Examples include:\n     - **Container Adapters**: `stack`, `queue`, `priority_queue`.\n     - **Iterator Adapters**: `reverse_iterator`, `back_inserter`, `front_inserter`.\n     - **Function Adapters**: `std::bind`, `std::function`.\n\nThese components work together to provide a flexible and efficient framework for handling data and performing operations in C++.\n```",level:"Intermediate"},{id:"f909866c-7a32-49bf-a58b-f015503dbbe3",question:"What is a template in C++ and how is it used?",answer:`\`\`\`markdown
In C++, a **template** is a feature that allows functions and classes to operate with generic types. This enables code reusability and type safety, as the same function or class can work with different data types without being rewritten for each type.

### Types of Templates in C++:
1. **Function Templates**: Allow a function to work with any data type.
2. **Class Templates**: Allow a class to operate with generic types.

---

### Function Template Example:
\`\`\`cpp
#include <iostream>
using namespace std;

template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    cout << add(5, 10) << endl;        // Works with integers
    cout << add(5.5, 10.5) << endl;    // Works with doubles
    return 0;
}
\`\`\`

Here, \`T\` is a placeholder for a data type. The compiler replaces \`T\` with the appropriate type during compilation based on the arguments passed.

---

### Class Template Example:
\`\`\`cpp
#include <iostream>
using namespace std;

template <typename T>
class Box {
private:
    T value;
public:
    Box(T val) : value(val) {}
    void display() {
        cout << "Value: " << value << endl;
    }
};

int main() {
    Box<int> intBox(123);       // Box for integers
    Box<string> strBox("Hello"); // Box for strings

    intBox.display();
    strBox.display();
    return 0;
}
\`\`\`

In this example, the \`Box\` class can store and operate on any data type, determined when an object is instantiated.

---

### Key Points:
- Templates are defined using the \`template\` keyword followed by a template parameter list (e.g., \`<typename T>\` or \`<class T>\`).
- They promote **code reusability** and **type safety**.
- Templates are instantiated at compile-time, which can lead to larger binary sizes if many types are used.
- Templates are widely used in the Standard Template Library (STL), such as \`std::vector\`, \`std::map\`, and \`std::sort\`.

Templates are a powerful feature in C++ that enable generic programming, making code more flexible and reusable.
\`\`\``,level:"Intermediate"},{id:"adf92656-8467-4023-9530-228f52fc7a52",question:"What is exception handling in C++ and how is it implemented?",answer:`\`\`\`markdown
### Exception Handling in C++

Exception handling in C++ is a mechanism to handle runtime errors or exceptional situations in a program, ensuring the program can continue executing or terminate gracefully. It separates error-handling code from regular code, making the program more robust and maintainable.

#### Key Components of Exception Handling

1. **\`try\` Block**: Contains the code that might throw an exception.
2. **\`throw\` Statement**: Used to signal the occurrence of an exception.
3. **\`catch\` Block**: Handles the exception thrown by the \`try\` block.

#### Syntax
\`\`\`cpp
try {
    // Code that may throw an exception
    if (some_error_condition) {
        throw exception_object; // Throw an exception
    }
} catch (exception_type e) {
    // Code to handle the exception
}
\`\`\`

#### Example
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    try {
        int a = 10, b = 0;
        if (b == 0) {
            throw "Division by zero error!"; // Throwing an exception
        }
        cout << "Result: " << a / b << endl;
    } catch (const char* e) {
        // Catching and handling the exception
        cout << "Exception caught: " << e << endl;
    }

    cout << "Program continues..." << endl;
    return 0;
}
\`\`\`

#### Output
\`\`\`
Exception caught: Division by zero error!
Program continues...
\`\`\`

#### Key Points
- Multiple \`catch\` blocks can be used to handle different types of exceptions.
- A \`catch(...)\` block can be used as a generic handler for any exception type.
- Exceptions can be user-defined or standard exceptions provided by the C++ Standard Library (e.g., \`std::exception\`).

#### Benefits of Exception Handling
- Improves code readability and maintainability.
- Separates error-handling logic from normal program logic.
- Prevents abrupt program termination by allowing graceful error recovery.
\`\`\`
`,level:"Intermediate"},{id:"5c147f29-e2a2-422e-9500-19b6f7213b3f",question:"What is the purpose of 'try', 'catch', and 'throw' in C++?",answer:'```markdown\nIn C++, `try`, `catch`, and `throw` are used for exception handling, which allows a program to handle runtime errors gracefully without crashing.\n\n1. **`throw`**: This keyword is used to signal that an exception has occurred. When an error condition is detected, a `throw` statement is used to "throw" an exception, which can be of any type (e.g., `int`, `std::string`, or a custom exception class).\n\n   ```cpp\n   throw 42; // Throwing an integer exception\n   throw "An error occurred"; // Throwing a string exception\n   ```\n\n2. **`try`**: A `try` block is used to enclose the code that might throw an exception. It acts as a guard, and if an exception is thrown within the `try` block, the control is transferred to the corresponding `catch` block.\n\n   ```cpp\n   try {\n       // Code that might throw an exception\n   }\n   ```\n\n3. **`catch`**: A `catch` block is used to handle the exception thrown by the `try` block. It specifies the type of exception it can handle and contains the code to process the exception.\n\n   ```cpp\n   catch (int e) {\n       // Handle integer exception\n   }\n   catch (const char* e) {\n       // Handle string exception\n   }\n   ```\n\n### Example:\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n    try {\n        throw 42; // Throwing an integer exception\n    } catch (int e) {\n        cout << "Caught an exception: " << e << endl;\n    }\n\n    try {\n        throw "An error occurred"; // Throwing a string exception\n    } catch (const char* e) {\n        cout << "Caught an exception: " << e << endl;\n    }\n\n    return 0;\n}\n```\n\n### Output:\n```\nCaught an exception: 42\nCaught an exception: An error occurred\n```\n\n### Purpose:\n- `try`, `catch`, and `throw` provide a structured way to detect and handle errors.\n- They help in separating error-handling code from the main logic of the program.\n- This mechanism improves code readability and robustness by allowing programs to recover from errors gracefully.\n```',level:"Intermediate"},{id:"ee689099-ce29-4abd-aaf2-7e18558c2c1c",question:"What is the 'namespace' keyword in C++ and why is it used?",answer:`\`\`\`markdown
In C++, the \`namespace\` keyword is used to define a scope that organizes code into logical groups and prevents name conflicts. Namespaces allow you to group related classes, functions, variables, and other identifiers under a unique name, helping to avoid clashes when multiple libraries or pieces of code define identifiers with the same name.

### Why is it used?
1. **Avoiding Name Conflicts**: When working on large projects or using multiple libraries, there might be identifiers (like function or variable names) with the same name. Namespaces help differentiate them.
2. **Code Organization**: Namespaces group related code together, making it easier to understand and maintain.
3. **Reusability**: By encapsulating code in namespaces, you can reuse the same names in different contexts without conflict.

### Example:
\`\`\`cpp
#include <iostream>

// Define a namespace
namespace MathOperations {
    int add(int a, int b) {
        return a + b;
    }
}

// Define another namespace
namespace StringOperations {
    std::string add(std::string a, std::string b) {
        return a + b;
    }
}

int main() {
    // Accessing functions from different namespaces
    std::cout << "Sum: " << MathOperations::add(5, 3) << std::endl;
    std::cout << "Concatenation: " << StringOperations::add("Hello, ", "World!") << std::endl;

    return 0;
}
\`\`\`

### Output:
\`\`\`
Sum: 8
Concatenation: Hello, World!
\`\`\`

In this example, the \`add\` function is defined in two different namespaces (\`MathOperations\` and \`StringOperations\`), and there is no conflict because they are scoped within their respective namespaces.

### Notes:
- The \`std\` namespace is commonly used in C++ for standard library functions and objects (e.g., \`std::cout\`, \`std::string\`).
- You can use the \`using\` directive to avoid repeatedly specifying the namespace, but it should be used carefully to avoid unintentional name conflicts.
\`\`\``,level:"Beginner"},{id:"c2e71566-9431-4220-8bb6-80a85c411309",question:"What is the difference between 'inline' and 'macro' functions in C++?",answer:`\`\`\`markdown
In C++, both \`inline\` functions and macros are used to reduce the overhead of function calls, but they have significant differences in terms of functionality, safety, and usage:

### 1. **Definition and Syntax**
   - **Inline Function**: Defined using the \`inline\` keyword. It is a regular function that suggests to the compiler to replace the function call with the actual function code during compilation.
     \`\`\`cpp
     inline int add(int a, int b) {
         return a + b;
     }
     \`\`\`
   - **Macro**: Defined using the \`#define\` preprocessor directive. It is a preprocessor directive that performs a simple text substitution before compilation.
     \`\`\`cpp
     #define ADD(a, b) ((a) + (b))
     \`\`\`

### 2. **Type Safety**
   - **Inline Function**: Type-safe, as it is checked by the compiler during compilation. Errors in parameter types or return types are caught.
   - **Macro**: Not type-safe, as it is a simple text substitution. It does not perform any type checking, which can lead to unexpected behavior or errors.

### 3. **Debugging**
   - **Inline Function**: Easier to debug, as it behaves like a normal function. Debuggers can step into inline functions.
   - **Macro**: Harder to debug, as the code is replaced during preprocessing, making it difficult to trace errors.

### 4. **Scope**
   - **Inline Function**: Has a proper scope and follows C++ scoping rules. It is part of the C++ language.
   - **Macro**: Does not have a scope. It is a global substitution and can lead to name conflicts or unintended replacements.

### 5. **Complexity**
   - **Inline Function**: Can handle complex logic, including loops, conditionals, and templates.
   - **Macro**: Limited to simple text substitution. Complex macros can become hard to read and maintain.

### 6. **Side Effects**
   - **Inline Function**: Evaluates arguments only once, preventing unintended side effects.
   - **Macro**: Can lead to side effects if arguments are evaluated multiple times. For example:
     \`\`\`cpp
     #define SQUARE(x) ((x) * (x))
     int result = SQUARE(1 + 2); // Expands to ((1 + 2) * (1 + 2)), which is incorrect.
     \`\`\`

### 7. **Performance**
   - **Inline Function**: The compiler decides whether to inline the function or not, based on optimization settings.
   - **Macro**: Always substitutes the code, regardless of optimization.

### Summary Table

| Feature            | Inline Function           | Macro                     |
|--------------------|---------------------------|---------------------------|
| Syntax             | Uses \`inline\` keyword     | Uses \`#define\` directive  |
| Type Safety        | Type-safe                 | Not type-safe             |
| Debugging          | Easy to debug             | Hard to debug             |
| Scope              | Follows C++ scoping rules | Global substitution       |
| Complexity         | Handles complex logic     | Limited to simple logic   |
| Side Effects       | No unintended side effects| Can cause side effects    |
| Performance        | Compiler-optimized        | Always substituted        |

### Conclusion
Inline functions are generally preferred over macros in modern C++ because they are safer, easier to debug, and follow the rules of the language. Macros should be used sparingly and only when necessary, such as for defining constants or conditional compilation.
\`\`\``,level:"Intermediate"},{id:"935168c3-71a9-4b59-88db-22a5159aa716",question:"What is the difference between 'const' and '#define' in C++?",answer:'```markdown\nIn C++, both `const` and `#define` are used to define constants, but they have significant differences in how they work and are used:\n\n### 1. **Type Safety**\n   - **`const`**: Provides type safety. The compiler knows the type of the constant, and it ensures that the value is used correctly according to its type.\n   - **`#define`**: Does not provide type safety. It is a preprocessor directive, and the compiler does not check the type.\n\n### 2. **Scope**\n   - **`const`**: Has a scope limited to the block or file in which it is defined (depending on whether it is declared locally or globally).\n   - **`#define`**: Has a global scope and is replaced by the preprocessor before compilation, which can lead to unintended side effects.\n\n### 3. **Debugging**\n   - **`const`**: Easier to debug because it is part of the compiled code and retains type information.\n   - **`#define`**: Harder to debug because it is replaced by the preprocessor before compilation, making it invisible in the compiled code.\n\n### 4. **Memory Usage**\n   - **`const`**: May occupy memory if it is used as a variable (depending on the compiler and optimization settings).\n   - **`#define`**: Does not occupy memory as it is replaced inline during preprocessing.\n\n### 5. **Syntax and Usage**\n   - **`const`**: Declared using the `const` keyword and can be used with any data type.\n     ```cpp\n     const int MAX_VALUE = 100;\n     ```\n   - **`#define`**: Declared using the `#define` directive and is typically used for simple macros.\n     ```cpp\n     #define MAX_VALUE 100\n     ```\n\n### 6. **Evaluation**\n   - **`const`**: Evaluated at runtime (though it can be optimized by the compiler to behave like a compile-time constant).\n   - **`#define`**: Replaced during preprocessing and is evaluated at compile-time.\n\n### 7. **Additional Features**\n   - **`const`**: Can be used with pointers, references, and objects, and supports scoping and encapsulation.\n   - **`#define`**: Can be used for simple text substitution or macros, but cannot handle complex types or scoping.\n\n### Example Comparison\n```cpp\n#include <iostream>\n#define PI 3.14 // #define example\n\nconst double e = 2.718; // const example\n\nint main() {\n    std::cout << "PI: " << PI << std::endl; // Works, but no type checking\n    std::cout << "e: " << e << std::endl;  // Works with type checking\n    return 0;\n}\n```\n\n### Summary\n- Use `const` for defining constants whenever possible, as it is safer, scoped, and provides better debugging support.\n- Use `#define` sparingly, typically for macros or conditional compilation, but avoid it for defining constants.\n```',level:"Intermediate"},{id:"51d1992c-e994-4ac5-9ba2-3c88cdf1da76",question:"What is the Rule of Three in C++?",answer:`\`\`\`markdown
### The Rule of Three in C++

The Rule of Three in C++ is a principle that states if a class requires a user-defined **destructor**, **copy constructor**, or **copy assignment operator**, it likely requires all three. This rule arises because these three functions are closely related to resource management, particularly when a class manages dynamic memory or other resources that require explicit handling.

#### The Three Special Member Functions:
1. **Destructor**:
   - Responsible for releasing resources (e.g., memory, file handles) when an object goes out of scope or is deleted.
   - Example:
     \`\`\`cpp
     ~MyClass() {
         delete[] data;
     }
     \`\`\`

2. **Copy Constructor**:
   - Defines how an object is copied when passed by value or explicitly copied.
   - Example:
     \`\`\`cpp
     MyClass(const MyClass& other) {
         data = new int[other.size];
         std::copy(other.data, other.data + other.size, data);
         size = other.size;
     }
     \`\`\`

3. **Copy Assignment Operator**:
   - Defines how an object is assigned from another object of the same type.
   - Example:
     \`\`\`cpp
     MyClass& operator=(const MyClass& other) {
         if (this == &other) return *this; // Handle self-assignment
         delete[] data; // Clean up existing resources
         data = new int[other.size];
         std::copy(other.data, other.data + other.size, data);
         size = other.size;
         return *this;
     }
     \`\`\`

#### Why the Rule of Three?
If a class manages resources like dynamic memory, the default implementations of these functions provided by the compiler may not handle resource management correctly, leading to issues like:
- **Memory leaks**: If the destructor is not implemented to free allocated memory.
- **Shallow copies**: If the copy constructor or assignment operator does not perform a deep copy, multiple objects may share the same resource, causing undefined behavior when one modifies or deletes it.

#### Example:
\`\`\`cpp
class MyClass {
private:
    int* data;
    size_t size;

public:
    MyClass(size_t s) : size(s) {
        data = new int[s];
    }

    // Destructor
    ~MyClass() {
        delete[] data;
    }

    // Copy Constructor
    MyClass(const MyClass& other) {
        data = new int[other.size];
        std::copy(other.data, other.data + other.size, data);
        size = other.size;
    }

    // Copy Assignment Operator
    MyClass& operator=(const MyClass& other) {
        if (this == &other) return *this;
        delete[] data;
        data = new int[other.size];
        std::copy(other.data, other.data + other.size, data);
        size = other.size;
        return *this;
    }
};
\`\`\`

#### Modern C++ Considerations:
With the introduction of C++11, the **Rule of Three** has evolved into the **Rule of Five** to include:
1. Move Constructor
2. Move Assignment Operator

These additional functions handle efficient resource transfers, avoiding unnecessary deep copies. If your class adheres to the Rule of Three, you should also consider implementing these move semantics for optimal performance.

\`\`\`cpp
// Move Constructor
MyClass(MyClass&& other) noexcept : data(other.data), size(other.size) {
    other.data = nullptr;
    other.size = 0;
}

// Move Assignment Operator
MyClass& operator=(MyClass&& other) noexcept {
    if (this == &other) return *this;
    delete[] data;
    data = other.data;
    size = other.size;
    other.data = nullptr;
    other.size = 0;
    return *this;
}
\`\`\`

By following these principles, you can ensure proper resource management and avoid common pitfalls in C++.
\`\`\``,level:"Advanced"},{id:"78cc34b6-e004-4a0d-90f1-7dfc3fe5ec9a",question:"What is the Rule of Five in C++?",answer:`\`\`\`markdown
### The Rule of Five in C++

The Rule of Five in C++ is a design principle that applies to resource management in classes. It states that if a class manages resources (e.g., dynamic memory, file handles, sockets, etc.), and it requires any one of the following special member functions, then it likely requires all five of them to ensure proper resource management and avoid issues like resource leaks or undefined behavior. The five special member functions are:

1. **Destructor**:
   - Responsible for releasing resources when an object goes out of scope.
   - Ensures proper cleanup of dynamically allocated memory or other resources.

   \`\`\`cpp
   ~ClassName();
   \`\`\`

2. **Copy Constructor**:
   - Defines how an object is copied during initialization (e.g., \`ClassName obj2 = obj1;\`).
   - Ensures a deep copy of resources to avoid shared ownership issues.

   \`\`\`cpp
   ClassName(const ClassName& other);
   \`\`\`

3. **Copy Assignment Operator**:
   - Defines how an object is assigned from another object of the same type (e.g., \`obj2 = obj1;\`).
   - Ensures proper handling of resource duplication and cleanup of existing resources.

   \`\`\`cpp
   ClassName& operator=(const ClassName& other);
   \`\`\`

4. **Move Constructor**:
   - Defines how an object is moved during initialization (e.g., \`ClassName obj2 = std::move(obj1);\`).
   - Transfers ownership of resources from one object to another, avoiding deep copies and improving performance.

   \`\`\`cpp
   ClassName(ClassName&& other) noexcept;
   \`\`\`

5. **Move Assignment Operator**:
   - Defines how an object is assigned from a temporary or rvalue object (e.g., \`obj2 = std::move(obj1);\`).
   - Transfers ownership of resources while ensuring proper cleanup of existing resources.

   \`\`\`cpp
   ClassName& operator=(ClassName&& other) noexcept;
   \`\`\`

### Why the Rule of Five Matters
The Rule of Five ensures that a class properly manages its resources in all scenarios, including copying, moving, and destruction. If these functions are not implemented correctly, issues such as double deletion, memory leaks, or dangling pointers can occur.

### Example
Here is an example of a class adhering to the Rule of Five:

\`\`\`cpp
#include <iostream>
#include <cstring>

class MyString {
private:
    char* data;
    size_t size;

public:
    // Constructor
    MyString(const char* str) : size(strlen(str)), data(new char[size + 1]) {
        std::strcpy(data, str);
    }

    // Destructor
    ~MyString() {
        delete[] data;
    }

    // Copy Constructor
    MyString(const MyString& other) : size(other.size), data(new char[other.size + 1]) {
        std::strcpy(data, other.data);
    }

    // Copy Assignment Operator
    MyString& operator=(const MyString& other) {
        if (this == &other) return *this; // Handle self-assignment
        delete[] data; // Clean up existing resource
        size = other.size;
        data = new char[size + 1];
        std::strcpy(data, other.data);
        return *this;
    }

    // Move Constructor
    MyString(MyString&& other) noexcept : size(other.size), data(other.data) {
        other.size = 0;
        other.data = nullptr;
    }

    // Move Assignment Operator
    MyString& operator=(MyString&& other) noexcept {
        if (this == &other) return *this; // Handle self-assignment
        delete[] data; // Clean up existing resource
        size = other.size;
        data = other.data;
        other.size = 0;
        other.data = nullptr;
        return *this;
    }

    // Utility function to print the string
    void print() const {
        std::cout << data << std::endl;
    }
};

int main() {
    MyString str1("Hello");
    MyString str2 = str1; // Copy constructor
    MyString str3 = std::move(str1); // Move constructor

    str2.print();
    str3.print();

    return 0;
}
\`\`\`

By following the Rule of Five, the \`MyString\` class ensures proper resource management, avoiding memory leaks and undefined behavior.
\`\`\``,level:"Advanced"},{id:"a7ff7b75-b748-4700-a89f-4acc029572d8",question:"What is RAII (Resource Acquisition Is Initialization) in C++?",answer:`\`\`\`markdown
### RAII (Resource Acquisition Is Initialization) in C++

RAII (Resource Acquisition Is Initialization) is a programming idiom in C++ that ties the lifecycle of resources (such as memory, file handles, sockets, etc.) to the lifetime of objects. The core idea is that resources are acquired during the initialization (construction) of an object and released during its destruction. This ensures proper resource management and helps prevent resource leaks.

#### Key Concepts of RAII:
1. **Resource Acquisition in Constructor**:
   - Resources are acquired (e.g., memory allocation, file opening) when an object is constructed.
   - The constructor is responsible for initializing the resource.

2. **Resource Release in Destructor**:
   - Resources are released (e.g., memory deallocation, file closing) when the object goes out of scope and its destructor is called.
   - The destructor ensures that resources are properly cleaned up, even in the presence of exceptions.

3. **Automatic Resource Management**:
   - Since destructors are automatically called when an object goes out of scope, RAII ensures that resources are managed automatically without requiring explicit cleanup code.

#### Benefits of RAII:
- **Exception Safety**: Resources are properly released even if an exception is thrown, as destructors are always called.
- **Simplified Code**: Eliminates the need for manual resource management, reducing the chances of resource leaks and dangling pointers.
- **Encapsulation**: Resource management logic is encapsulated within the class, improving code readability and maintainability.

#### Example of RAII:
\`\`\`cpp
#include <iostream>
#include <fstream>

class FileHandler {
private:
    std::fstream file;

public:
    // Constructor acquires the resource
    FileHandler(const std::string& filename) {
        file.open(filename, std::ios::in | std::ios::out | std::ios::app);
        if (!file.is_open()) {
            throw std::runtime_error("Failed to open file");
        }
    }

    // Destructor releases the resource
    ~FileHandler() {
        if (file.is_open()) {
            file.close();
        }
    }

    void write(const std::string& data) {
        if (file.is_open()) {
            file << data << std::endl;
        }
    }
};

int main() {
    try {
        FileHandler fileHandler("example.txt");
        fileHandler.write("Hello, RAII!");
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }
    // FileHandler's destructor is automatically called here, ensuring the file is closed.
    return 0;
}
\`\`\`

#### Common RAII Examples in C++:
- **\`std::unique_ptr\` and \`std::shared_ptr\`**: Manage dynamic memory.
- **\`std::lock_guard\` and \`std::unique_lock\`**: Manage mutex locks.
- **\`std::fstream\`**: Manage file streams.

RAII is a fundamental concept in C++ that promotes safe and efficient resource management, making it a cornerstone of modern C++ programming.
\`\`\``,level:"Advanced"},{id:"edcf131e-ba97-4d18-a01a-1bd264a303b6",question:"What is a lambda function in C++ and how is it used?",answer:`\`\`\`markdown
### Lambda Function in C++

A **lambda function** in C++ is an anonymous function (a function without a name) that can be defined inline. It is often used for short, simple operations where defining a separate named function would be unnecessary. Lambda functions were introduced in C++11 and have become a powerful feature for functional programming and concise code.

#### Syntax of a Lambda Function
\`\`\`cpp
[capture_list](parameters) -> return_type {
    // function body
};
\`\`\`

- **\`capture_list\`**: Specifies which variables from the surrounding scope are accessible inside the lambda.
- **\`parameters\`**: The input parameters for the lambda, similar to a regular function.
- **\`return_type\`**: (Optional) Specifies the return type of the lambda. If omitted, the compiler deduces it automatically.
- **Function body**: Contains the logic of the lambda.

#### Example Usage
\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    // Lambda function to print each number
    auto print = [](int n) {
        std::cout << n << " ";
    };

    // Using the lambda with std::for_each
    std::for_each(numbers.begin(), numbers.end(), print);
    std::cout << std::endl;

    // Lambda function to calculate the sum of numbers
    int sum = 0;
    std::for_each(numbers.begin(), numbers.end(), [&sum](int n) {
        sum += n;
    });
    std::cout << "Sum: " << sum << std::endl;

    return 0;
}
\`\`\`

#### Explanation of the Example
1. **Printing Elements**: The lambda \`[](int n) { std::cout << n << " "; }\` is passed to \`std::for_each\` to print each element of the vector.
2. **Capturing Variables**: The lambda \`[&sum](int n) { sum += n; }\` captures the variable \`sum\` by reference (\`&\`) so it can modify the variable from the outer scope.

#### Capture List Options
- **\`[]\`**: No variables are captured.
- **\`[=]\`**: Captures all variables from the surrounding scope by value.
- **\`[&]\`**: Captures all variables from the surrounding scope by reference.
- **\`[x]\`**: Captures only \`x\` by value.
- **\`[&x]\`**: Captures only \`x\` by reference.
- **\`[=, &x]\`**: Captures all variables by value, but \`x\` by reference.
- **\`[&, x]\`**: Captures all variables by reference, but \`x\` by value.

#### Key Benefits of Lambda Functions
1. **Conciseness**: Reduces the need for separate named functions.
2. **Flexibility**: Can capture variables from the surrounding scope.
3. **Inline Definition**: Makes the code more readable and self-contained.

Lambda functions are widely used in algorithms, event handling, and functional programming paradigms in C++.
\`\`\``,level:"Intermediate"},{id:"cbc334d6-d802-44e0-bc2a-4b44e0e9e9af",question:"What is the difference between 'std::map' and 'std::unordered_map' in C++?",answer:`\`\`\`markdown
In C++, \`std::map\` and \`std::unordered_map\` are both associative containers used to store key-value pairs, but they have significant differences in terms of implementation, performance, and ordering:

### 1. **Underlying Data Structure**
   - **\`std::map\`**: Implemented as a balanced binary search tree (usually a Red-Black Tree).
   - **\`std::unordered_map\`**: Implemented as a hash table.

### 2. **Ordering**
   - **\`std::map\`**: Stores elements in sorted order based on the keys. The sorting is determined by the comparison function (default is \`std::less<Key>\`).
   - **\`std::unordered_map\`**: Does not maintain any order of elements. The order is determined by the hash function and the internal structure of the hash table.

### 3. **Performance**
   - **\`std::map\`**:
     - Lookup, insertion, and deletion operations have a time complexity of **O(log n)** due to the tree structure.
   - **\`std::unordered_map\`**:
     - Lookup, insertion, and deletion operations have an average time complexity of **O(1)**, but in the worst case (due to hash collisions), it can degrade to **O(n)**.

### 4. **Memory Usage**
   - **\`std::map\`**: Requires less memory overhead as it uses a tree structure.
   - **\`std::unordered_map\`**: Requires more memory due to the hash table and potential rehashing.

### 5. **Use Cases**
   - **\`std::map\`**: Preferred when you need elements to be sorted by key or when you need to perform range-based operations (e.g., finding all elements within a specific range).
   - **\`std::unordered_map\`**: Preferred when fast access and retrieval are more important than maintaining order.

### 6. **Custom Key Comparison/Hashing**
   - **\`std::map\`**: Allows a custom comparison function for key ordering.
   - **\`std::unordered_map\`**: Allows a custom hash function and equality function for keys.

### Example Code
\`\`\`cpp
#include <iostream>
#include <map>
#include <unordered_map>

int main() {
    // std::map example
    std::map<int, std::string> orderedMap;
    orderedMap[2] = "Two";
    orderedMap[1] = "One";
    orderedMap[3] = "Three";

    std::cout << "std::map (ordered): ";
    for (const auto& pair : orderedMap) {
        std::cout << "{" << pair.first << ", " << pair.second << "} ";
    }
    std::cout << std::endl;

    // std::unordered_map example
    std::unordered_map<int, std::string> unorderedMap;
    unorderedMap[2] = "Two";
    unorderedMap[1] = "One";
    unorderedMap[3] = "Three";

    std::cout << "std::unordered_map (unordered): ";
    for (const auto& pair : unorderedMap) {
        std::cout << "{" << pair.first << ", " << pair.second << "} ";
    }
    std::cout << std::endl;

    return 0;
}
\`\`\`

### Output
\`\`\`
std::map (ordered): {1, One} {2, Two} {3, Three} 
std::unordered_map (unordered): {2, Two} {1, One} {3, Three} 
\`\`\`

### Summary
- Use \`std::map\` when you need sorted keys or range-based operations.
- Use \`std::unordered_map\` when you need faster average performance for lookups and don't care about order.
\`\`\``,level:"Intermediate"},{id:"fc2b3b5a-e178-430f-a42c-a2d33991b9d9",question:"What is a smart pointer in C++ and what are its types?",answer:"```markdown\n### Smart Pointer in C++\n\nA **smart pointer** in C++ is a wrapper class over a raw pointer that manages the lifetime of the object it points to. It ensures proper resource management by automatically deallocating the memory when the smart pointer goes out of scope. Smart pointers are part of the C++ Standard Library and are defined in the `<memory>` header.\n\nSmart pointers help prevent common issues like memory leaks and dangling pointers by implementing **RAII (Resource Acquisition Is Initialization)** principles.\n\n### Types of Smart Pointers\n\n1. **`std::unique_ptr`**\n   - A smart pointer that owns and manages a single object.\n   - Ensures exclusive ownership of the object, meaning no two `std::unique_ptr` instances can own the same object.\n   - Automatically deletes the object when the `std::unique_ptr` goes out of scope.\n   - Cannot be copied but can be moved using `std::move`.\n\n   ```cpp\n   #include <memory>\n   std::unique_ptr<int> ptr = std::make_unique<int>(10);\n   ```\n\n2. **`std::shared_ptr`**\n   - A smart pointer that allows multiple `std::shared_ptr` instances to share ownership of the same object.\n   - Uses reference counting to keep track of how many `std::shared_ptr` instances are pointing to the object.\n   - Automatically deletes the object when the last `std::shared_ptr` goes out of scope.\n\n   ```cpp\n   #include <memory>\n   std::shared_ptr<int> ptr1 = std::make_shared<int>(20);\n   std::shared_ptr<int> ptr2 = ptr1; // Shared ownership\n   ```\n\n3. **`std::weak_ptr`**\n   - A smart pointer that provides a non-owning reference to an object managed by `std::shared_ptr`.\n   - Does not contribute to the reference count, preventing circular references.\n   - Used to safely access an object that may be managed by a `std::shared_ptr`.\n\n   ```cpp\n   #include <memory>\n   std::shared_ptr<int> sharedPtr = std::make_shared<int>(30);\n   std::weak_ptr<int> weakPtr = sharedPtr; // Non-owning reference\n   ```\n\n4. **`std::auto_ptr`** (Deprecated in C++11 and removed in C++17)\n   - An older smart pointer that was replaced by `std::unique_ptr` due to its unsafe behavior (e.g., transferring ownership on copy).\n\n### Summary\n\nSmart pointers in C++ (`std::unique_ptr`, `std::shared_ptr`, and `std::weak_ptr`) are essential tools for managing dynamic memory safely and efficiently. They reduce the risk of memory leaks and dangling pointers by automating resource management.\n```",level:"Advanced"},{id:"f33f5e2d-215f-4b74-b71b-8698dc8a5026",question:"What is the difference between 'std::shared_ptr' and 'std::unique_ptr' in C++?",answer:`\`\`\`markdown
In C++, \`std::shared_ptr\` and \`std::unique_ptr\` are both smart pointers provided by the Standard Library to manage dynamic memory. However, they have significant differences in their behavior and use cases:

### 1. Ownership and Reference Count:
- **\`std::shared_ptr\`**:
  - Allows multiple \`std::shared_ptr\` instances to share ownership of the same dynamically allocated object.
  - Internally maintains a reference count. When a \`std::shared_ptr\` is copied, the reference count is incremented. When a \`std::shared_ptr\` is destroyed, the reference count is decremented. The object is destroyed only when the reference count reaches zero.
  - Suitable for scenarios where multiple parts of the program need shared access to the same resource.

- **\`std::unique_ptr\`**:
  - Maintains sole ownership of the dynamically allocated object. It cannot be copied, only moved.
  - When a \`std::unique_ptr\` is destroyed, the object it owns is automatically deleted.
  - Suitable for cases where exclusive ownership of a resource is required.

### 2. Copy and Move Semantics:
- **\`std::shared_ptr\`**:
  - Supports both copy and move semantics. Copying a \`std::shared_ptr\` creates another shared owner of the resource.
  - Example:
    \`\`\`cpp
    std::shared_ptr<int> sp1 = std::make_shared<int>(10);
    std::shared_ptr<int> sp2 = sp1; // sp1 and sp2 share ownership
    \`\`\`

- **\`std::unique_ptr\`**:
  - Does not support copy semantics. It can only be moved to transfer ownership.
  - Example:
    \`\`\`cpp
    std::unique_ptr<int> up1 = std::make_unique<int>(10);
    std::unique_ptr<int> up2 = std::move(up1); // Ownership transferred to up2
    \`\`\`

### 3. Overhead:
- **\`std::shared_ptr\`**:
  - Has additional overhead due to the reference counting mechanism and the need to manage shared ownership.
  - Slightly slower than \`std::unique_ptr\` because of this overhead.

- **\`std::unique_ptr\`**:
  - Lightweight and faster as it does not involve reference counting or shared ownership.

### 4. Use Cases:
- **\`std::shared_ptr\`**:
  - Use when multiple parts of the program need to share ownership of a resource.
  - Example: Shared access to a configuration object or a shared cache.

- **\`std::unique_ptr\`**:
  - Use when a resource has a single owner, and ownership needs to be transferred explicitly if required.
  - Example: Managing the lifetime of a dynamically allocated object in a single scope.

### 5. Custom Deleters:
- Both \`std::shared_ptr\` and \`std::unique_ptr\` support custom deleters, allowing you to define how the managed object is destroyed.

### Summary Table:

| Feature               | \`std::shared_ptr\`                     | \`std::unique_ptr\`                     |
|-----------------------|---------------------------------------|---------------------------------------|
| Ownership             | Shared (multiple owners)             | Unique (single owner)                 |
| Copy Semantics        | Allowed                              | Not allowed                           |
| Move Semantics        | Allowed                              | Allowed                               |
| Reference Counting    | Yes                                  | No                                    |
| Overhead              | Higher (due to reference counting)   | Lower                                 |
| Use Case              | Shared ownership                     | Exclusive ownership                   |

### Conclusion:
- Use \`std::shared_ptr\` when you need shared ownership of a resource.
- Use \`std::unique_ptr\` when you need exclusive ownership and want lightweight, efficient memory management.
\`\`\``,level:"Advanced"},{id:"07f1d59b-3f63-456e-ad4e-cb45f35769a5",question:"What is multithreading in C++ and how is it implemented?",answer:`\`\`\`markdown
### Multithreading in C++

Multithreading in C++ refers to the ability of a program to execute multiple threads concurrently, allowing tasks to run in parallel. Each thread represents a separate path of execution within a program, enabling efficient utilization of CPU resources and improved performance for tasks that can be executed independently.

C++ provides support for multithreading through the \`<thread>\` library, introduced in C++11. This library includes classes and functions to create and manage threads, synchronize their execution, and handle shared resources.

---

### Implementation of Multithreading in C++

Here’s how multithreading is implemented in C++:

1. **Creating Threads**:
   Threads can be created using the \`std::thread\` class. A thread can execute a function, a lambda expression, or a callable object.

   \`\`\`cpp
   #include <iostream>
   #include <thread>

   void printMessage() {
       std::cout << "Hello from thread!" << std::endl;
   }

   int main() {
       std::thread t(printMessage); // Create a thread to execute printMessage
       t.join(); // Wait for the thread to finish
       return 0;
   }
   \`\`\`

2. **Joining Threads**:
   The \`join()\` method ensures that the main thread waits for the created thread to finish execution before continuing.

3. **Detaching Threads**:
   Threads can be detached using the \`detach()\` method, allowing them to run independently. However, care must be taken to avoid accessing shared resources without proper synchronization.

   \`\`\`cpp
   std::thread t([]() {
       std::cout << "Detached thread running!" << std::endl;
   });
   t.detach(); // Detach the thread
   \`\`\`

4. **Passing Arguments to Threads**:
   Arguments can be passed to threads using the \`std::thread\` constructor.

   \`\`\`cpp
   void printNumber(int num) {
       std::cout << "Number: " << num << std::endl;
   }

   int main() {
       std::thread t(printNumber, 42); // Pass argument 42 to the thread
       t.join();
       return 0;
   }
   \`\`\`

5. **Synchronization**:
   To avoid race conditions when multiple threads access shared resources, synchronization mechanisms like \`std::mutex\`, \`std::lock_guard\`, and \`std::unique_lock\` are used.

   \`\`\`cpp
   #include <iostream>
   #include <thread>
   #include <mutex>

   std::mutex mtx;

   void printSafe(const std::string& message) {
       std::lock_guard<std::mutex> lock(mtx); // Automatically locks and unlocks the mutex
       std::cout << message << std::endl;
   }

   int main() {
       std::thread t1(printSafe, "Thread 1");
       std::thread t2(printSafe, "Thread 2");

       t1.join();
       t2.join();
       return 0;
   }
   \`\`\`

6. **Thread Safety**:
   Proper synchronization is critical to ensure thread safety when accessing shared data. Use atomic operations (\`std::atomic\`) or mutexes to prevent data races.

---

### Key Features of Multithreading in C++:
- **Concurrency**: Enables parallel execution of tasks.
- **Thread Management**: Provides tools for creating, joining, and detaching threads.
- **Synchronization**: Ensures safe access to shared resources.
- **Scalability**: Utilizes multiple CPU cores effectively.

---

### Challenges in Multithreading:
- **Race Conditions**: Occur when multiple threads access shared data simultaneously without proper synchronization.
- **Deadlocks**: Happen when two or more threads are waiting for each other to release resources.
- **Debugging Complexity**: Multithreaded programs can be harder to debug due to non-deterministic behavior.

By leveraging the \`<thread>\` library and proper synchronization techniques, C++ allows developers to write efficient and robust multithreaded applications.
\`\`\``,level:"Advanced"},{id:"42d79032-f466-49a6-932f-6787674a29bf",question:"What is the difference between 'std::lock_guard' and 'std::unique_lock' in C++?",answer:`\`\`\`markdown
In C++, both \`std::lock_guard\` and \`std::unique_lock\` are used to manage mutexes and ensure proper locking and unlocking of critical sections. However, they differ in terms of flexibility and use cases:

### \`std::lock_guard\`
- **Purpose**: A simple RAII (Resource Acquisition Is Initialization) wrapper for managing a mutex.
- **Behavior**: Automatically locks the mutex upon construction and unlocks it when it goes out of scope.
- **Flexibility**: It is not flexible; it only provides basic lock management.
- **Use Case**: Ideal for scenarios where you need a straightforward, scoped lock without requiring advanced features.
- **Features**:
  - No ability to defer locking.
  - No ability to unlock or re-lock the mutex manually.
  - Lightweight and efficient.

\`\`\`cpp
#include <mutex>

std::mutex mtx;

void example() {
    std::lock_guard<std::mutex> lock(mtx); // Locks the mutex
    // Critical section
} // Mutex is automatically unlocked here
\`\`\`

---

### \`std::unique_lock\`
- **Purpose**: A more versatile RAII wrapper for managing a mutex.
- **Behavior**: Can lock/unlock the mutex multiple times during its lifetime.
- **Flexibility**: Provides advanced features such as deferred locking, timed locking, and manual unlocking/re-locking.
- **Use Case**: Suitable for scenarios where you need more control over the mutex, such as conditional locking or timed waits.
- **Features**:
  - Can defer locking using the \`std::defer_lock\` tag.
  - Supports timed locking with \`try_lock_for\` or \`try_lock_until\`.
  - Allows manual unlocking and re-locking of the mutex.

\`\`\`cpp
#include <mutex>
#include <chrono>

std::mutex mtx;

void example() {
    std::unique_lock<std::mutex> lock(mtx, std::defer_lock); // Mutex is not locked initially
    lock.lock(); // Manually lock the mutex
    // Critical section
    lock.unlock(); // Manually unlock the mutex
    // Mutex can be re-locked if needed
    lock.lock();
} // Mutex is automatically unlocked here if still locked
\`\`\`

---

### Key Differences
| Feature                     | \`std::lock_guard\`               | \`std::unique_lock\`             |
|-----------------------------|----------------------------------|---------------------------------|
| Locking on construction     | Always locks the mutex          | Can defer locking with \`std::defer_lock\` |
| Manual lock/unlock          | Not supported                   | Supported                      |
| Timed locking               | Not supported                   | Supported                      |
| Overhead                    | Minimal                         | Slightly higher due to added flexibility |
| Use case                    | Simple and scoped locking       | Complex locking scenarios requiring flexibility |

In summary, use \`std::lock_guard\` for simple and efficient locking when no advanced features are needed, and use \`std::unique_lock\` when more control over the mutex is required.
\`\`\``,level:"Advanced"},{id:"819df990-a01b-49d2-aa71-1248bd836bfd",question:"What are move semantics in C++ and how do they work?",answer:`\`\`\`markdown
### Move Semantics in C++

Move semantics in C++ is a feature introduced in C++11 that allows the resources of a temporary or "rvalue" object to be transferred to another object, rather than being copied. This can significantly improve performance by avoiding unnecessary deep copies of resources, especially for objects that manage dynamic memory or other expensive resources.

#### Key Concepts

1. **Lvalue and Rvalue**:
   - An **lvalue** refers to an object that persists beyond a single expression (e.g., variables).
   - An **rvalue** refers to a temporary object or a value that does not persist beyond the expression in which it is used (e.g., the result of \`5 + 3\` or a temporary object returned by a function).

2. **Move Constructor**:
   A move constructor allows an object to "steal" resources from an rvalue object. It is defined as:
   \`\`\`cpp
   ClassName(ClassName&& other);
   \`\`\`
   Here, \`other\` is an rvalue reference (denoted by \`&&\`), which allows the function to accept temporary objects.

3. **Move Assignment Operator**:
   The move assignment operator transfers resources from one object to another, similar to the move constructor. It is defined as:
   \`\`\`cpp
   ClassName& operator=(ClassName&& other);
   \`\`\`

4. **std::move**:
   The \`std::move\` utility is used to cast an lvalue to an rvalue, enabling move semantics. It signals that the object can be "moved from."

#### How Move Semantics Work

- When a move constructor or move assignment operator is invoked, the resources (e.g., dynamic memory, file handles) of the rvalue object are transferred to the target object.
- The rvalue object is left in a valid but unspecified state (often reset to a "default" state, such as a null pointer).
- This avoids the overhead of deep copying the resources.

#### Example

\`\`\`cpp
#include <iostream>
#include <vector>

class MyClass {
private:
    int* data;

public:
    // Constructor
    MyClass(int value) : data(new int(value)) {
        std::cout << "Constructor called\\n";
    }

    // Destructor
    ~MyClass() {
        delete data;
        std::cout << "Destructor called\\n";
    }

    // Copy Constructor
    MyClass(const MyClass& other) : data(new int(*other.data)) {
        std::cout << "Copy Constructor called\\n";
    }

    // Move Constructor
    MyClass(MyClass&& other) noexcept : data(other.data) {
        other.data = nullptr; // Leave the source in a valid state
        std::cout << "Move Constructor called\\n";
    }

    // Move Assignment Operator
    MyClass& operator=(MyClass&& other) noexcept {
        if (this != &other) {
            delete data;          // Free existing resource
            data = other.data;    // Transfer ownership
            other.data = nullptr; // Leave the source in a valid state
            std::cout << "Move Assignment Operator called\\n";
        }
        return *this;
    }

    void print() const {
        if (data)
            std::cout << "Value: " << *data << "\\n";
        else
            std::cout << "Data is null\\n";
    }
};

int main() {
    MyClass obj1(10);           // Constructor
    MyClass obj2 = std::move(obj1); // Move Constructor
    obj2.print();               // Value: 10
    obj1.print();               // Data is null

    MyClass obj3(20);           // Constructor
    obj3 = std::move(obj2);     // Move Assignment Operator
    obj3.print();               // Value: 10
    obj2.print();               // Data is null

    return 0;
}
\`\`\`

#### Output
\`\`\`
Constructor called
Move Constructor called
Value: 10
Data is null
Constructor called
Move Assignment Operator called
Value: 10
Data is null
Destructor called
Destructor called
Destructor called
\`\`\`

#### Benefits of Move Semantics

1. **Performance**:
   - Avoids deep copying of resources, which can be expensive.
   - Particularly useful for containers like \`std::vector\`, \`std::string\`, etc., where large amounts of data may need to be moved.

2. **Efficiency**:
   - Reduces memory allocations and deallocations.
   - Optimizes temporary object handling.

3. **Improved Resource Management**:
   - Ensures that resources are not duplicated unnecessarily.

#### Summary

Move semantics is a powerful feature in modern C++ that enables efficient resource management by transferring ownership of resources from one object to another. It is particularly useful in scenarios involving temporary objects or objects with expensive resource management. By leveraging move constructors, move assignment operators, and \`std::move\`, developers can write more performant and resource-efficient code.
\`\`\``,level:"Advanced"},{id:"59656b9a-7abd-4207-80e4-ee6c302e3091",question:"What is the purpose of the 'std::move' function in C++?",answer:`\`\`\`markdown
The purpose of the \`std::move\` function in C++ is to enable the transfer of resources from one object to another by converting an object into an rvalue reference. This allows the object to be "moved" rather than copied, which can significantly improve performance by avoiding expensive deep copies.

\`std::move\` is commonly used in the following scenarios:

1. **Move Semantics**: It is used to invoke move constructors or move assignment operators, which transfer ownership of resources (e.g., dynamic memory, file handles) from one object to another.
2. **Efficient Resource Management**: By moving resources instead of copying them, it reduces overhead, especially when dealing with large objects or containers like \`std::vector\` or \`std::string\`.
3. **Explicit Intent**: It explicitly marks that the object is no longer needed in its current context, making the code more readable and intentional.

### Example:
\`\`\`cpp
#include <iostream>
#include <vector>
#include <string>

int main() {
    std::string str = "Hello, World!";
    std::string movedStr = std::move(str); // Transfer ownership of str's resources to movedStr

    std::cout << "Moved String: " << movedStr << std::endl;
    std::cout << "Original String: " << str << std::endl; // str is now in a valid but unspecified state

    std::vector<int> vec1 = {1, 2, 3, 4, 5};
    std::vector<int> vec2 = std::move(vec1); // Move vec1's contents to vec2

    std::cout << "vec2 size: " << vec2.size() << std::endl;
    std::cout << "vec1 size: " << vec1.size() << std::endl; // vec1 is now empty

    return 0;
}
\`\`\`

### Key Points:
- After using \`std::move\`, the source object is left in a valid but unspecified state. It should not be used further except for destruction or reassignment.
- \`std::move\` does not actually move anything; it simply casts an object to an rvalue reference (\`T&&\`), enabling move semantics.
- It is primarily used with user-defined types that implement move constructors and move assignment operators.

By leveraging \`std::move\`, developers can write more efficient and performant C++ programs, especially when dealing with resource-intensive operations.
\`\`\``,level:"Advanced"}];export{e as default};
