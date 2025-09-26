const n=[{id:"c622488e-3856-495a-a0e0-5e0390471907",question:"What is a syntax error in C programming?",answer:`A **syntax error** in C programming occurs when the code violates the rules and structure defined by the C language. These errors are detected by the compiler and prevent the program from compiling successfully.

**Examples of syntax errors:**
\`\`\`c
int main() {
    printf("Hello, world!") // Missing semicolon
    return 0;
}
\`\`\`

**Explanation:**  
In the example above, the missing semicolon (\`;\`) after the \`printf\` statement is a syntax error. The compiler will generate an error message indicating the mistake.

**Key Points:**
- Syntax errors must be fixed before the program can run.
- Common causes include missing semicolons, unmatched parentheses or braces, misspelled keywords, and incorrect use of operators.`,level:"Beginner"},{id:"105720a1-db5f-4d19-b834-d3e0e083321f",question:"How do you declare and initialize an array in C?",answer:`To declare and initialize an array in C, you specify the data type, the array name, and the number of elements in square brackets. You can also assign initial values using curly braces.

**Syntax:**

\`\`\`c
// Declaration only (uninitialized)
int numbers[5];

// Declaration with initialization
int numbers[5] = {1, 2, 3, 4, 5};
\`\`\`

**Example:**

\`\`\`c
#include <stdio.h>

int main() {
    // Declare and initialize an array of 3 integers
    int values[3] = {10, 20, 30};

    // Print array elements
    for(int i = 0; i < 3; i++) {
        printf("%d\\n", values[i]);
    }

    return 0;
}
\`\`\`

**Notes:**
- If you initialize fewer elements than the size, the remaining elements are set to zero.
- You can omit the size if you provide the initial values:  
  \`\`\`c
  int numbers[] = {1, 2, 3};
  \`\`\``,level:"Beginner"},{id:"d4d8c189-32a0-4a04-99e2-c471bece3693",question:"What is the purpose of the return statement in C?",answer:`The **return** statement in C is used to:

- **Exit a function:** When the return statement is executed, the function terminates immediately.
- **Send a value back:** If the function is designed to return a value (for example, int, float, etc.), the return statement specifies what value should be sent back to the calling code.

**Example:**

\`\`\`c
int add(int a, int b) {
    return a + b; // returns the sum of a and b
}
\`\`\`

In the example above, the return statement sends the result of a + b back to wherever the add function was called. If a function has a void return type, return can be used without a value just to exit the function early.`,level:"Beginner"},{id:"5a62ecbc-b7e7-4df8-a592-ed659075a218",question:"How do you write a for loop in C?",answer:`Here's how you write a for loop in C:

\`\`\`c
#include <stdio.h>

int main() {
    int i;
    // This for loop prints numbers from 1 to 5
    for (i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }
    return 0;
}
\`\`\`

**Explanation:**

- The for loop has three parts: initialization (\`i = 1\`), condition (\`i <= 5\`), and increment (\`i++\`).
- The loop will run as long as the condition is true.
- Each time the loop runs, \`i\` increases by 1.
- The code inside the loop (\`printf("%d\\n", i);\`) is executed each time.`,level:"Beginner"},{id:"73d493ee-efa7-4e7c-9304-56a103e8ca3e",question:"How do you define a function in C?",answer:`In C, a function is defined using the following syntax:

\`\`\`c
return_type function_name(parameter_list) {
    // function body
    // statements
    return value; // if return_type is not void
}
\`\`\`

**Example:**

\`\`\`c
#include <stdio.h>

// Function definition
int add(int a, int b) {
    int sum = a + b;
    return sum;
}

int main() {
    int result = add(5, 3);
    printf("Sum: %d\\n", result);
    return 0;
}
\`\`\`

**Explanation:**

- **return_type**: The type of value the function returns (e.g., int, void, float).
- **function_name**: The name you give to the function.
- **parameter_list**: The variables passed to the function (can be empty).
- **function body**: The block of code that defines what the function does.

**Note:** If the function does not return a value, use void as the return type.`,level:"Intermediate"},{id:"4aaf9d13-e6d4-4ad1-8a8c-c4b5c3db25dc",question:"What is the scope of a variable declared inside a function?",answer:`In C, a variable declared inside a function is called a **local variable**. The scope of a local variable is limited to the block (usually the function body) in which it is declared. This means:

- The variable can only be accessed and used within that function.
- It is created (allocated) when the function is called and destroyed (deallocated) when the function exits.
- It cannot be accessed outside the function.

**Example:**

\`\`\`c
#include <stdio.h>

void myFunction() {
    int localVar = 10; // localVar is only accessible within myFunction
    printf("%d\\n", localVar);
}

int main() {
    // printf("%d\\n", localVar); // Error: localVar is not visible here
    myFunction();
    return 0;
}
\`\`\`

**Summary:**  
A variable declared inside a function has **local scope**—it is only accessible within that function.`,level:"Intermediate"},{id:"40f6f53e-b37c-40d3-83f2-eced9f172810",question:"What is the difference between pre-increment and post-increment operators?",answer:`\`\`\`markdown
**Difference between Pre-increment and Post-increment Operators in C**

In C, the increment operator (\`++\`) can be used in two ways: **pre-increment** and **post-increment**.

### Pre-increment (\`++variable\`)
- The variable is **incremented first**, then its value is used in the expression.
- Example:
  \`\`\`c
  int a = 5;
  int b = ++a; // a becomes 6, then b is assigned 6
  \`\`\`

### Post-increment (\`variable++\`)
- The variable's **current value is used first**, then it is incremented.
- Example:
  \`\`\`c
  int a = 5;
  int b = a++; // b is assigned 5, then a becomes 6
  \`\`\`

### Summary Table

| Operator    | When is increment done? | Value used in expression |
|-------------|------------------------|-------------------------|
| ++variable  | Before expression      | New (incremented) value |
| variable++  | After expression       | Original value          |

**In short:**  
- **Pre-increment:** Increment, then use.
- **Post-increment:** Use, then increment.
\`\`\``,level:"Beginner"},{id:"31519e22-3253-4a7c-954c-2919a8e7498c",question:"What is the purpose of the main() function in a C program?",answer:'The `main()` function is the entry point of every C program. When a C program is executed, the execution starts from the `main()` function. It is where the program begins and typically contains the instructions that define what the program does.\n\n**Example:**\n```c\n#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}\n```\n\n**Key Points:**\n- Every C program must have a `main()` function.\n- The `main()` function can return an integer value (commonly `0` to indicate successful execution).\n- Without a `main()` function, the program will not run.',level:"Beginner"},{id:"ed111965-278d-44a2-8c07-86462013eba7",question:"How do you declare an integer variable in C?",answer:"To declare an integer variable in C, use the int keyword followed by the variable name and a semicolon. For example:\n\n```c\nint number;\n```\n\nThis statement declares a variable named number that can store integer values.",level:"Beginner"},{id:"a9394e6b-c816-43fc-80fe-b4f5d7761a43",question:"What is the difference between printf() and scanf() functions?",answer:`\`\`\`markdown
The \`printf()\` and \`scanf()\` functions are both standard input/output functions in C, but they serve different purposes:

- **printf()**: This function is used to display (print) output to the screen. You use it to show messages, numbers, or results to the user.

  **Example:**
  \`\`\`c
  printf("Hello, World!\\n");
  \`\`\`

- **scanf()**: This function is used to read (scan) input from the user. You use it to get values from the keyboard and store them in variables.

  **Example:**
  \`\`\`c
  int number;
  scanf("%d", &number);
  \`\`\`

**Summary Table:**

| Function   | Purpose          | Direction | Example Usage             |
|------------|------------------|-----------|--------------------------|
| printf()   | Output to screen | Output    | printf("Hello");         |
| scanf()    | Input from user  | Input     | scanf("%d", &number);    |
\`\`\`
`,level:"Beginner"},{id:"5186fa4c-a2b3-49cb-93dd-fa9251648dd5",question:"How do you write a single-line comment in C?",answer:'You can write a single-line comment in C by using two forward slashes //. Everything after // on that line will be treated as a comment and ignored by the compiler.\n\n```c\n// This is a single-line comment in C\nprintf("Hello, World!\\n"); // This prints a message to the screen\n```',level:"Beginner"},{id:"93c53d8f-2b73-4010-88ca-1036dd538cce",question:"What is the use of #include <stdio.h> in a C program?",answer:"```markdown\nThe line `#include <stdio.h>` is a preprocessor directive in C. It tells the compiler to include the Standard Input Output header file (`stdio.h`) before compiling the program. This header file contains declarations for standard input and output functions, such as `printf()` for printing output to the screen and `scanf()` for reading input from the user. Without including `stdio.h`, you cannot use these standard I/O functions in your C program.\n```",level:"Beginner"},{id:"b707548e-06a9-4094-8e30-37a4cb20a6a3",question:"Explain the difference between = and == operators in C.",answer:`In C, = and == are two different operators with distinct purposes:

| Operator | Name              | Purpose                                              | Example           |
|----------|-------------------|------------------------------------------------------|-------------------|
| =        | Assignment        | Assigns a value to a variable                        | x = 5;            |
| ==       | Equality check    | Compares two values for equality (returns true/false)| if (x == 5) {...} |

**Explanation:**

- = (Assignment Operator):  
  Used to assign the value on the right to the variable on the left.
  \`\`\`c
  int a;
  a = 10; // assigns 10 to variable a
  \`\`\`

- == (Equality Operator):  
  Used to compare two values. Returns 1 (true) if they are equal, 0 (false) otherwise.
  \`\`\`c
  if (a == 10) {
      // This block runs if a is equal to 10
  }
  \`\`\`

**Common Mistake:**  
Using = instead of == in conditions can lead to bugs. For example:
\`\`\`c
if (a = 10) { // This assigns 10 to a, not compares!
    // Always true, because a is now 10 (non-zero)
}
\`\`\`

**Summary:**  
- Use = for assignment.
- Use == for comparison.`,level:"Beginner"},{id:"d02c11de-4bc5-4a31-a2d1-b3ddee1e397b",question:"What is a pointer in C?",answer:`A pointer in C is a variable that stores the memory address of another variable. Instead of holding a direct value like an integer or a character, a pointer holds the location in memory where a value is stored. Pointers are powerful tools in C that allow for dynamic memory allocation, efficient array handling, and the creation of complex data structures like linked lists and trees.

### Syntax

\`\`\`c
type *pointer_name;
\`\`\`

For example:

\`\`\`c
int *ptr; // ptr is a pointer to an integer
\`\`\`

### Example Usage

\`\`\`c
int num = 10;
int *ptr = &num; // ptr now holds the address of num

printf("Value of num: %d\\n", num);         // Output: 10
printf("Address of num: %p\\n", &num);      // Output: (some address)
printf("Value stored in ptr: %p\\n", ptr);  // Output: (same address as above)
printf("Value pointed to by ptr: %d\\n", *ptr); // Output: 10
\`\`\`

### Key Points

- The \`*\` operator is used to declare a pointer and to dereference it (access the value at the address).
- The \`&\` operator is used to get the address of a variable.
- Pointers are essential for dynamic memory management and for passing large structures or arrays efficiently to functions.

Pointers are a fundamental concept in C and mastering them is crucial for effective C programming.`,level:"Intermediate"},{id:"f7ff1a3f-9d97-4886-a267-5d6a29bc3704",question:"How do you pass an array to a function in C?",answer:`To pass an array to a function in C, you pass the address of its first element. In the function parameter list, you can specify the array as either an array or a pointer. Here’s an example:

\`\`\`c
#include <stdio.h>

// Function that takes an array and its size as parameters
void printArray(int arr[], int size) {
    for(int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int length = sizeof(numbers) / sizeof(numbers[0]);
    printArray(numbers, length); // Passing array to function
    return 0;
}
\`\`\`

**Key Points:**
- When you pass an array to a function, what actually gets passed is a pointer to its first element.
- The function does not know the size of the array, so you should also pass the array size as a separate argument.
- The parameter can be written as \`int arr[]\`, \`int arr[5]\`, or \`int *arr\`—all are equivalent in the function parameter list.

**Example function signatures:**
\`\`\`c
void func(int arr[], int size);
void func(int *arr, int size);
\`\`\`

**Note:** Modifying the array inside the function will affect the original array, since you are working with the same memory.`,level:"Intermediate"},{id:"221d5db2-1c59-4c97-9cf7-a2380c7defe6",question:"What is the difference between call by value and call by reference in C?",answer:`**Call by Value vs Call by Reference in C**

In C programming, functions can receive arguments in two ways: **call by value** and **call by reference**. Here’s the difference:

### Call by Value

- **Definition:** The actual value of the argument is passed to the function.
- **Behavior:** Changes made to the parameter inside the function do **not** affect the original argument.
- **Example:**

  \`\`\`c
  void modify(int x) {
      x = 10;
  }

  int main() {
      int a = 5;
      modify(a);
      // a is still 5 here
  }
  \`\`\`

### Call by Reference

- **Definition:** The address of the argument is passed to the function (using pointers).
- **Behavior:** Changes made to the parameter inside the function **do** affect the original argument.
- **Example:**

  \`\`\`c
  void modify(int *x) {
      *x = 10;
  }

  int main() {
      int a = 5;
      modify(&a);
      // a is now 10 here
  }
  \`\`\`

### Summary Table

| Feature            | Call by Value         | Call by Reference      |
|--------------------|----------------------|-----------------------|
| What is passed     | Value (copy)         | Address (pointer)     |
| Original affected? | No                   | Yes                   |
| Syntax             | Normal variable      | Pointer (&, *)        |

**Note:**  
C does not support call by reference directly, but it can be achieved using pointers.`,level:"Intermediate"},{id:"a8c710e5-def8-442a-9bbf-9cdd7d58e3fe",question:"Explain the use of the malloc() function.",answer:`\`\`\`markdown
### Use of the \`malloc()\` Function in C

The \`malloc()\` function in C is used for dynamic memory allocation. It stands for "memory allocation" and is defined in the \`<stdlib.h>\` header file.

#### Purpose

- Allocates a specified number of bytes in the heap (dynamic memory).
- Returns a pointer to the first byte of the allocated memory block.
- If the allocation fails, it returns \`NULL\`.

#### Syntax

\`\`\`c
void *malloc(size_t size);
\`\`\`
- \`size\`: The number of bytes to allocate.

#### Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr;
    int n = 5;

    // Allocate memory for 5 integers
    arr = (int *)malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    // Use the allocated memory
    for (int i = 0; i < n; i++) {
        arr[i] = i * 10;
        printf("%d ", arr[i]);
    }

    // Free the allocated memory
    free(arr);

    return 0;
}
\`\`\`

#### Key Points

- **Typecasting:** The pointer returned by \`malloc()\` is of type \`void*\`. It is often typecast to the appropriate pointer type.
- **Uninitialized Memory:** The memory allocated by \`malloc()\` contains garbage values (not initialized).
- **Freeing Memory:** Always use \`free()\` to release memory allocated by \`malloc()\` to avoid memory leaks.

#### Summary Table

| Function | Purpose                | Returns         | Initializes Memory? |
|----------|------------------------|-----------------|---------------------|
| malloc() | Allocate memory block  | Pointer/NULL    | No                  |

---
**Note:** For zero-initialized memory, use \`calloc()\` instead.
\`\`\`
`,level:"Intermediate"},{id:"9855cc8e-594e-44e3-9f5c-19a26f0f6e48",question:"What is a structure in C and how is it different from an array?",answer:`A **structure** in C is a user-defined data type that allows you to group variables of different data types under a single name. Structures are useful for representing a record, such as a student with a name, roll number, and marks.

### Example of a Structure

\`\`\`c
struct Student {
    char name[50];
    int rollNumber;
    float marks;
};
\`\`\`

You can create variables of this structure type:

\`\`\`c
struct Student student1;
\`\`\`

### Differences Between Structure and Array

| Structure                                   | Array                                         |
|----------------------------------------------|-----------------------------------------------|
| Can contain variables of different data types| Contains elements of the same data type       |
| Each member is accessed by its name          | Elements are accessed using an index          |
| Used to represent a record                   | Used to store a collection of similar items   |
| Memory allocation can be non-contiguous      | Memory allocation is always contiguous        |

#### Example

- **Structure:**  
  \`\`\`c
  struct Point {
      int x;
      float y;
  };
  \`\`\`
- **Array:**  
  \`\`\`c
  int numbers[5]; // All elements are of type int
  \`\`\`

### Summary

- **Structure:** Groups variables of different types.
- **Array:** Stores multiple values of the same type.

Structures provide a way to combine data of different types, while arrays are used for collections of the same type.`,level:"Intermediate"},{id:"32ba6b8e-d44a-4869-9e0f-94a05f00bfff",question:"How do you handle file input and output in C?",answer:`To handle file input and output (I/O) in C, you use the standard library functions provided in the \`<stdio.h>\` header. The basic steps are:

1. **Open a File:**  
   Use \`fopen()\` to open a file. It returns a pointer to a \`FILE\` object.

   \`\`\`c
   FILE *fp = fopen("filename.txt", "r"); // "r" for reading, "w" for writing, "a" for appending
   if (fp == NULL) {
       // Handle error
   }
   \`\`\`

2. **Read or Write Data:**  
   - Use \`fprintf()\` or \`fputs()\` to write text, or \`fread()\` for binary data.
   - Use \`fscanf()\` or \`fgets()\` to read text, or \`fread()\` for binary data.

   **Writing Example:**
   \`\`\`c
   fprintf(fp, "Hello, World!\\n");
   \`\`\`

   **Reading Example:**
   \`\`\`c
   char buffer[100];
   if (fgets(buffer, 100, fp) != NULL) {
       // Use buffer
   }
   \`\`\`

3. **Close the File:**  
   Always close the file using \`fclose()\` to free resources.

   \`\`\`c
   fclose(fp);
   \`\`\`

### Example: Writing and Reading a File

\`\`\`c
#include <stdio.h>

int main() {
    FILE *fp;

    // Writing to a file
    fp = fopen("example.txt", "w");
    if (fp == NULL) {
        printf("Error opening file for writing.\\n");
        return 1;
    }
    fprintf(fp, "This is a test.\\n");
    fclose(fp);

    // Reading from a file
    fp = fopen("example.txt", "r");
    if (fp == NULL) {
        printf("Error opening file for reading.\\n");
        return 1;
    }
    char line[100];
    while (fgets(line, sizeof(line), fp)) {
        printf("%s", line);
    }
    fclose(fp);

    return 0;
}
\`\`\`

### Notes

- Always check if the file was opened successfully.
- Use appropriate modes: \`"r"\` (read), \`"w"\` (write), \`"a"\` (append), and their binary versions (\`"rb"\`, \`"wb"\`, etc.).
- Remember to close files to prevent memory leaks and data corruption.

For more advanced operations, you can use \`fseek()\`, \`ftell()\`, and \`rewind()\` to manipulate the file pointer.`,level:"Intermediate"},{id:"63f868b0-7962-451d-b4fc-ee2014a12fd3",question:"What is a segmentation fault in C?",answer:`A **segmentation fault** in C is a specific kind of error that occurs when a program tries to access a memory location that it is not allowed to access. This typically happens due to:

- Dereferencing a null or uninitialized pointer
- Accessing memory outside the bounds of an array
- Writing to read-only memory
- Using a pointer after the memory it points to has been freed (dangling pointer)

When a segmentation fault occurs, the operating system stops the program to prevent it from corrupting or interfering with other processes.

**Example:**

\`\`\`c
#include <stdio.h>

int main() {
    int *ptr = NULL;
    *ptr = 10; // This will cause a segmentation fault
    return 0;
}
\`\`\`

**Explanation:**  
In the example above, \`ptr\` is a null pointer. Attempting to write to the memory location it points to (\`*ptr = 10;\`) results in a segmentation fault because the program does not have permission to access address 0 (NULL).

**Summary:**  
A segmentation fault is a runtime error indicating illegal access to memory, and it is often a sign of bugs related to pointer misuse in C programs.`,level:"Intermediate"},{id:"065df3b0-ea95-4f14-9cb8-8f25edb75f92",question:"Explain the difference between global and local variables.",answer:`**Difference Between Global and Local Variables in C**

In C programming, variables can be declared either globally or locally, and their scope and lifetime differ:

| Aspect              | Global Variable                                    | Local Variable                                  |
|---------------------|---------------------------------------------------|-------------------------------------------------|
| **Declaration**     | Outside all functions, usually at the top of file | Inside a function or a block (e.g., \`{}\`)       |
| **Scope**           | Accessible from any function in the file (and possibly other files with extern) | Accessible only within the function or block where declared |
| **Lifetime**        | Exists for the entire duration of the program      | Exists only while the function/block is executing|
| **Default Value**   | Initialized to zero (if not explicitly initialized)| Contains garbage value (if not explicitly initialized) |
| **Usage Example**   | \`int count = 0;\`                                  | \`int i = 0;\` inside a function                  |

**Example:**

\`\`\`c
#include <stdio.h>

int globalVar = 10; // Global variable

void func() {
    int localVar = 5; // Local variable
    printf("Inside func: globalVar = %d, localVar = %d\\n", globalVar, localVar);
}

int main() {
    func();
    // printf("%d", localVar); // Error: localVar not accessible here
    printf("Inside main: globalVar = %d\\n", globalVar);
    return 0;
}
\`\`\`

**Summary:**
- **Global variables** have program-wide scope and lifetime.
- **Local variables** are limited in scope and exist only within the function or block where they are declared.`,level:"Intermediate"},{id:"dd042551-fc56-4374-98ce-61b0a3e3c2a5",question:"What are header files and why are they used?",answer:`Header files in C are files with a \`.h\` extension that contain declarations of functions, macros, constants, and data types. They do not contain the actual implementation of functions, but rather their prototypes and definitions that can be shared across multiple source files.

### Why Header Files Are Used

- **Code Reusability:** Header files allow you to declare functions and variables once and use them in multiple source files, promoting code reuse.
- **Separation of Interface and Implementation:** By placing declarations in header files and implementations in \`.c\` files, you separate the interface from the implementation, making code easier to manage and maintain.
- **Avoiding Redundancy:** Instead of rewriting function prototypes or macro definitions in every source file, you include the header file using \`#include\`.
- **Standard Library Support:** Standard C libraries (like \`stdio.h\`, \`stdlib.h\`, etc.) provide function and macro declarations through header files.

### Example

\`\`\`c
// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);
int subtract(int a, int b);

#endif
\`\`\`

\`\`\`c
// main.c
#include <stdio.h>
#include "math_utils.h"

int main() {
    printf("%d\\n", add(3, 4));
    return 0;
}
\`\`\`

In this example, \`math_utils.h\` contains the function declarations, which are then included in \`main.c\` for use.

**In summary:** Header files help organize code, promote reuse, and make large C programs easier to develop and maintain.`,level:"Intermediate"},{id:"aa5ed428-6867-4d2c-b4bb-211fbde320f1",question:"What is a dangling pointer?",answer:`A **dangling pointer** in C is a pointer that continues to reference a memory location after the object it points to has been deallocated or gone out of scope. Using a dangling pointer leads to undefined behavior, as the memory it points to may now be used for other purposes or may be inaccessible.

### Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

int* createPointer() {
    int a = 10;
    return &a; // Returning address of local variable (dangerous)
}

int main() {
    int *ptr = createPointer();
    // 'a' is out of scope here; 'ptr' is now a dangling pointer
    printf("%d\\n", *ptr); // Undefined behavior
    return 0;
}
\`\`\`

Or, after freeing memory:

\`\`\`c
int *ptr = (int*)malloc(sizeof(int));
*ptr = 42;
free(ptr); // Memory is deallocated
// 'ptr' is now a dangling pointer
\`\`\`

### How to Avoid Dangling Pointers

- Set pointers to \`NULL\` after freeing them:
  \`\`\`c
  free(ptr);
  ptr = NULL;
  \`\`\`
- Avoid returning addresses of local variables from functions.
- Be careful with pointer assignments and object lifetimes.

### Summary

A dangling pointer is a pointer that points to memory that has been freed or is otherwise invalid. Accessing or dereferencing such pointers can cause unpredictable program behavior, crashes, or security vulnerabilities.`,level:"Advanced"},{id:"f762b9c5-0100-44ad-9d2f-72733ddfebe7",question:"Explain the difference between static and dynamic memory allocation.",answer:`\`\`\`markdown
### Difference Between Static and Dynamic Memory Allocation in C

#### 1. **Static Memory Allocation**
- **Definition:** Memory for variables is allocated at compile time.
- **How:** Done using data type declarations (e.g., \`int arr[10];\`).
- **Memory Lifetime:** The allocated memory exists throughout the program's execution (for global/static variables) or until the function exits (for local variables).
- **Size:** Must be known at compile time and cannot be changed during runtime.
- **Allocation/Deallocation:** Managed automatically by the compiler; programmer does not explicitly allocate or free memory.
- **Example:**
  \`\`\`c
  int arr[100]; // Static allocation of 100 integers
  \`\`\`

#### 2. **Dynamic Memory Allocation**
- **Definition:** Memory is allocated at runtime as needed.
- **How:** Done using library functions like \`malloc()\`, \`calloc()\`, \`realloc()\`, and freed with \`free()\`.
- **Memory Lifetime:** The allocated memory exists until it is explicitly deallocated using \`free()\`.
- **Size:** Can be determined and changed at runtime, offering flexibility.
- **Allocation/Deallocation:** Programmer is responsible for both allocating and freeing memory.
- **Example:**
  \`\`\`c
  int *arr = (int *)malloc(100 * sizeof(int)); // Dynamic allocation of 100 integers
  if (arr != NULL) {
      // Use the array
      free(arr); // Free the allocated memory
  }
  \`\`\`

#### 3. **Key Differences Table**

| Aspect                | Static Allocation                | Dynamic Allocation                |
|-----------------------|----------------------------------|-----------------------------------|
| Allocation Time       | Compile time                     | Run time                          |
| Memory Size           | Fixed                            | Flexible                          |
| Lifetime              | Automatic (scope-based)          | Manual (until \`free()\` is called) |
| Allocation Function   | Compiler                         | \`malloc()\`, \`calloc()\`, etc.      |
| Deallocation          | Automatic                        | Manual (\`free()\`)                 |
| Efficiency            | Faster (no runtime overhead)     | Slower (runtime overhead)         |
| Example               | \`int arr[10];\`                   | \`int *arr = malloc(10 * sizeof(int));\` |

#### 4. **Summary**
- **Static allocation** is simple and fast but inflexible.
- **Dynamic allocation** is flexible and powerful but requires careful memory management to avoid leaks and errors.
\`\`\`
`,level:"Advanced"},{id:"990585d4-d8db-43ec-ad7e-00c8514dfe39",question:"What is pointer arithmetic?",answer:`### Pointer Arithmetic in C

Pointer arithmetic refers to performing arithmetic operations on pointers in C, such as addition, subtraction, increment, and decrement. Since pointers store memory addresses, pointer arithmetic allows you to navigate through arrays and data structures efficiently.

#### Key Points

- **Increment/Decrement:** When you increment (\`ptr++\`) or decrement (\`ptr--\`) a pointer, it moves to the next or previous element of its type, not just the next byte. For example, incrementing an \`int*\` advances the pointer by \`sizeof(int)\` bytes.
- **Addition/Subtraction:** You can add or subtract an integer value to/from a pointer (\`ptr + n\`, \`ptr - n\`). This moves the pointer forward or backward by \`n\` elements of the pointer's type.
- **Pointer Difference:** Subtracting two pointers of the same type gives the number of elements between them.

#### Example

\`\`\`c
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;

    printf("First element: %d\\n", *ptr);       // 10
    ptr++;                                     // Move to next int
    printf("Second element: %d\\n", *ptr);      // 20

    ptr = ptr + 2;                             // Move two ints ahead
    printf("Fourth element: %d\\n", *ptr);      // 40

    int diff = ptr - arr;                      // Difference in elements
    printf("Index of ptr: %d\\n", diff);        // 3

    return 0;
}
\`\`\`

#### Notes

- Pointer arithmetic is only valid within arrays or memory blocks allocated for the same data type.
- Performing arithmetic on \`void*\` pointers is not allowed in standard C, as the size of \`void\` is undefined.

#### Summary

Pointer arithmetic is a powerful feature in C that allows efficient traversal and manipulation of arrays and data structures by leveraging the type and size information associated with pointers.`,level:"Advanced"},{id:"68a43176-a07e-4207-b7d9-d5b4b0c98caa",question:"How do you prevent buffer overflow in C?",answer:`\`\`\`markdown
### Preventing Buffer Overflow in C

Buffer overflow occurs when a program writes more data to a buffer than it can hold, potentially overwriting adjacent memory and leading to unpredictable behavior or security vulnerabilities. Here are advanced strategies to prevent buffer overflow in C:

#### 1. **Use Safe Library Functions**
- Prefer safer alternatives to standard functions:
  - Use \`strncpy()\` instead of \`strcpy()\`
  - Use \`snprintf()\` instead of \`sprintf()\`
  - Use \`fgets()\` instead of \`gets()\`
- Example:
  \`\`\`c
  char dest[10];
  strncpy(dest, src, sizeof(dest) - 1);
  dest[sizeof(dest) - 1] = '\\0'; // Ensure null-termination
  \`\`\`

#### 2. **Explicit Bounds Checking**
- Always check the size of buffers before writing or copying data.
- Example:
  \`\`\`c
  if (input_length < sizeof(buffer)) {
      memcpy(buffer, input, input_length);
  }
  \`\`\`

#### 3. **Dynamic Memory Allocation**
- Allocate memory dynamically based on the actual size needed.
- Example:
  \`\`\`c
  char *buffer = malloc(input_length + 1);
  if (buffer) {
      strcpy(buffer, input);
      // ...
      free(buffer);
  }
  \`\`\`

#### 4. **Compiler Security Features**
- Enable stack protection flags:
  - Use \`-fstack-protector\` or \`-fstack-protector-all\` with GCC.
  - Enable AddressSanitizer (\`-fsanitize=address\`) during development.
- Example:
  \`\`\`
  gcc -fstack-protector-all -o myprog myprog.c
  \`\`\`

#### 5. **Use Modern C Standards**
- Use functions introduced in C11, such as \`strncpy_s()\` and \`memcpy_s()\`, which require explicit buffer sizes and return error codes.

#### 6. **Code Reviews and Static Analysis**
- Regularly review code for unsafe practices.
- Use static analysis tools (e.g., \`splint\`, \`clang-analyzer\`) to detect potential buffer overflows.

#### 7. **Avoid Dangerous Functions**
- Avoid using inherently unsafe functions like \`gets()\`, \`scanf()\` with \`%s\`, \`strcpy()\`, and \`sprintf()\`.

---

**Summary Table**

| Unsafe Function | Safer Alternative      |
|-----------------|-----------------------|
| gets()          | fgets()               |
| strcpy()        | strncpy(), strcpy_s() |
| strcat()        | strncat(), strcat_s() |
| sprintf()       | snprintf(), sprintf_s() |

---

**Key Takeaway:**  
Always validate buffer sizes, prefer safe functions, enable compiler protections, and use static analysis to prevent buffer overflows in C.
\`\`\`
`,level:"Advanced"},{id:"37df085e-9f62-45fb-9f80-5ce60175a132",question:"What is the use of the const keyword with pointers?",answer:`### Use of the \`const\` Keyword with Pointers in C

The \`const\` keyword in C is used to indicate that the value of a variable should not be modified after its initialization. When used with pointers, \`const\` can be applied in different ways to control what can or cannot be changed: the pointer itself, the data it points to, or both.

#### 1. Pointer to Constant Data

\`\`\`c
const int *ptr;
\`\`\`
or
\`\`\`c
int const *ptr;
\`\`\`

- **Meaning:** The data pointed to by \`ptr\` cannot be changed through \`ptr\`, but the pointer itself can point to different locations.
- **Example:**
  \`\`\`c
  int x = 10, y = 20;
  const int *ptr = &x;
  *ptr = 15;    // Error: cannot modify value through ptr
  ptr = &y;     // OK: can change what ptr points to
  \`\`\`

#### 2. Constant Pointer to Data

\`\`\`c
int *const ptr = &x;
\`\`\`

- **Meaning:** The pointer \`ptr\` cannot point to another location after initialization, but the data it points to can be changed.
- **Example:**
  \`\`\`c
  int x = 10;
  int *const ptr = &x;
  *ptr = 15;    // OK: can modify value through ptr
  int y = 20;
  ptr = &y;     // Error: cannot change what ptr points to
  \`\`\`

#### 3. Constant Pointer to Constant Data

\`\`\`c
const int *const ptr = &x;
\`\`\`
or
\`\`\`c
int const *const ptr = &x;
\`\`\`

- **Meaning:** Neither the pointer can point to another location, nor can the data it points to be changed through the pointer.
- **Example:**
  \`\`\`c
  int x = 10;
  const int *const ptr = &x;
  *ptr = 15;    // Error: cannot modify value through ptr
  int y = 20;
  ptr = &y;     // Error: cannot change what ptr points to
  \`\`\`

---

### Summary Table

| Declaration             | Can modify data? | Can change pointer? |
|-------------------------|:---------------:|:------------------:|
| \`const int *ptr\`        |       No        |        Yes         |
| \`int *const ptr\`        |      Yes        |        No          |
| \`const int *const ptr\`  |       No        |        No          |

---

### **Why Use \`const\` with Pointers?**

- **Safety:** Prevents accidental modification of data or pointer addresses.
- **Self-documenting code:** Makes it clear what is intended to be constant.
- **Optimization:** Allows the compiler to optimize code better in some cases.
- **Interface contracts:** Useful in function parameters to indicate that a function will not modify the data pointed to.

---

**Example in Function Parameter:**

\`\`\`c
void printArray(const int *arr, int size) {
    for (int i = 0; i < size; ++i) {
        printf("%d ", arr[i]);
        // arr[i] = 10; // Error: cannot modify value
    }
}
\`\`\`

This ensures that \`printArray\` cannot modify the contents of the array passed to it.`,level:"Advanced"},{id:"71012632-1bd4-4996-aca0-849c363fd011",question:"What is the volatile keyword and when should it be used?",answer:`\`\`\`markdown
## What is the \`volatile\` keyword and when should it be used?

The \`volatile\` keyword in C is a type qualifier that tells the compiler that a variable's value may be changed at any time—without any action being taken by the code the compiler finds nearby. This prevents the compiler from applying certain optimizations that assume values of variables cannot change "unexpectedly."

### Purpose

When a variable is declared as \`volatile\`, the compiler will always read its value from memory each time it is accessed, rather than caching it in a register. This ensures that the program always sees the most up-to-date value.

### Typical Use Cases

You should use \`volatile\` in the following scenarios:

1. **Hardware Registers in Embedded Systems**  
   When accessing memory-mapped hardware registers, their values can change independently of the program flow.

   \`\`\`c
   volatile int *status_register = (int *)0x40021000;
   while (!(*status_register & 0x01)) {
       // Wait for hardware event
   }
   \`\`\`

2. **Variables Modified by an Interrupt Service Routine (ISR)**  
   If a variable is modified both in the main code and in an ISR, it should be declared \`volatile\`.

   \`\`\`c
   volatile int flag = 0;

   void ISR() {
       flag = 1;
   }

   int main() {
       while (!flag) {
           // Wait for interrupt
       }
   }
   \`\`\`

3. **Variables Shared Between Threads (in some cases)**  
   In multi-threaded programs, if a variable is shared between threads without proper synchronization, \`volatile\` may be used, but note that it does **not** guarantee atomicity or memory ordering—use proper synchronization primitives for thread safety.

### What \`volatile\` Does **Not** Do

- It does **not** make operations on the variable atomic.
- It does **not** provide memory barriers or synchronization between threads.
- It does **not** prevent all compiler optimizations—only those related to caching the variable's value.

### Summary Table

| Use Case                        | Should Use \`volatile\`? |
|----------------------------------|:---------------------:|
| Hardware registers               | Yes                   |
| Variables modified by ISRs       | Yes                   |
| Shared variables between threads | Sometimes\\*           |

\\* For thread synchronization, prefer atomic types and synchronization primitives.

### Example

\`\`\`c
volatile int counter;
\`\`\`

This tells the compiler that \`counter\` can change at any time, so every access must read from memory.

---

**In summary:**  
Use \`volatile\` for variables that can be changed outside the normal program flow, such as by hardware, interrupts, or (rarely) other threads. It prevents the compiler from optimizing away necessary reads/writes, ensuring correct program behavior in these special cases.
\`\`\`
`,level:"Advanced"},{id:"51d4eb32-3c03-4347-9d53-50b7dcc5a825",question:"Explain the concept of memory leaks and how to avoid them.",answer:`\`\`\`markdown
## Memory Leaks in C and How to Avoid Them

### What is a Memory Leak?

A **memory leak** in C occurs when a program allocates memory on the heap (using functions like \`malloc\`, \`calloc\`, or \`realloc\`) but fails to release it using \`free\` after the memory is no longer needed. As a result, the allocated memory remains inaccessible (no pointer references it), but is not returned to the system, leading to wasted resources. Over time, especially in long-running programs, memory leaks can cause the program to consume excessive memory, degrade performance, or even crash.

#### Example of a Memory Leak

\`\`\`c
#include <stdlib.h>

void leak_example() {
    int *ptr = malloc(sizeof(int) * 100);
    // ... use ptr
    // forgot to free(ptr);
}
\`\`\`

In this example, the memory allocated for \`ptr\` is never freed, resulting in a memory leak.

---

### How to Avoid Memory Leaks

1. **Always Free Allocated Memory**
   - For every \`malloc\`, \`calloc\`, or \`realloc\`, ensure there is a corresponding \`free\` when the memory is no longer needed.

   \`\`\`c
   int *arr = malloc(10 * sizeof(int));
   // ... use arr
   free(arr); // release memory
   \`\`\`

2. **Set Pointers to NULL After Freeing**
   - After freeing a pointer, set it to \`NULL\` to avoid accidental use (dangling pointer) and to make double-free errors easier to detect.

   \`\`\`c
   free(arr);
   arr = NULL;
   \`\`\`

3. **Avoid Losing References**
   - Do not overwrite pointers to allocated memory before freeing them.

   \`\`\`c
   int *ptr = malloc(sizeof(int));
   ptr = malloc(sizeof(int)); // memory from first malloc is leaked!
   \`\`\`

4. **Track Allocations and Deallocations**
   - In complex programs, keep track of all allocations and ensure each is freed. Use data structures or comments to document ownership and responsibility for freeing memory.

5. **Use Tools for Detection**
   - Use tools like **Valgrind** (Linux), **Dr. Memory** (Windows), or compiler sanitizers (e.g., \`-fsanitize=address\` with GCC/Clang) to detect memory leaks during development and testing.

   \`\`\`bash
   valgrind --leak-check=full ./your_program
   \`\`\`

6. **Follow Ownership Conventions**
   - Clearly define which function/module is responsible for freeing memory, especially when passing pointers between functions.

---

### Summary Table

| Practice                        | Purpose                                 |
|----------------------------------|-----------------------------------------|
| Free every allocated block       | Prevent leaks                           |
| Set pointers to NULL after free  | Avoid dangling pointers                 |
| Avoid overwriting pointers       | Prevent losing references to memory     |
| Use memory checking tools        | Detect leaks and improper usage         |
| Document ownership               | Clarify responsibility for freeing      |

---

### Conclusion

Memory leaks are a common source of bugs in C programs due to manual memory management. By following best practices—always freeing memory, using tools, and maintaining clear ownership—you can minimize the risk of leaks and write more robust, efficient C code.
\`\`\`
`,level:"Advanced"},{id:"e5a5568f-7434-427d-b32c-cb957e3dc8b9",question:"What is the difference between malloc() and calloc()?",answer:"```markdown\n### Difference between `malloc()` and `calloc()` in C\n\nBoth `malloc()` and `calloc()` are used for dynamic memory allocation in C, but they have key differences:\n\n| Feature                | `malloc()`                                        | `calloc()`                                         |\n|------------------------|--------------------------------------------------|----------------------------------------------------|\n| **Syntax**             | `void* malloc(size_t size);`                     | `void* calloc(size_t num, size_t size);`           |\n| **Memory Initialization** | Does **not** initialize the allocated memory (contains garbage values). | Initializes all allocated memory to **zero**.      |\n| **Parameters**         | Takes a **single** argument: total number of bytes to allocate. | Takes **two** arguments: number of elements and size of each element. |\n| **Return Value**       | Returns a pointer to the allocated memory block, or `NULL` if allocation fails. | Same as `malloc()`.                                |\n| **Use Case Example**   | `int *arr = (int*)malloc(10 * sizeof(int));`     | `int *arr = (int*)calloc(10, sizeof(int));`        |\n\n#### Example\n\n```c\n// Using malloc\nint *a = (int*)malloc(5 * sizeof(int)); // Memory not initialized\n\n// Using calloc\nint *b = (int*)calloc(5, sizeof(int));  // Memory initialized to zero\n```\n\n#### Summary\n\n- Use `malloc()` when you do **not** need the memory to be initialized.\n- Use `calloc()` when you want the allocated memory to be **zero-initialized**.\n```\n",level:"Advanced"},{id:"457ce20e-c5eb-437b-a3d0-32ff3589ca37",question:"How can you implement a linked list in C?",answer:`Certainly! Here’s an advanced-level answer in markdown format on how to implement a linked list in C:

---

## Implementing a Linked List in C

A **linked list** is a dynamic data structure where each element (node) contains data and a pointer to the next node. Below is an example of how to implement a singly linked list in C, including functions to insert, delete, and traverse the list.

### 1. Define the Node Structure

\`\`\`c
typedef struct Node {
    int data;
    struct Node* next;
} Node;
\`\`\`

### 2. Insert at the Beginning

\`\`\`c
void insertAtBeginning(Node** head, int newData) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = newData;
    newNode->next = *head;
    *head = newNode;
}
\`\`\`

### 3. Insert at the End

\`\`\`c
void insertAtEnd(Node** head, int newData) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = newData;
    newNode->next = NULL;
    if (*head == NULL) {
        *head = newNode;
        return;
    }
    Node* temp = *head;
    while (temp->next != NULL)
        temp = temp->next;
    temp->next = newNode;
}
\`\`\`

### 4. Delete a Node

\`\`\`c
void deleteNode(Node** head, int key) {
    Node* temp = *head;
    Node* prev = NULL;
    // If head node holds the key
    if (temp != NULL && temp->data == key) {
        *head = temp->next;
        free(temp);
        return;
    }
    // Search for the key
    while (temp != NULL && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }
    if (temp == NULL) return; // Key not found
    prev->next = temp->next;
    free(temp);
}
\`\`\`

### 5. Traverse and Print the List

\`\`\`c
void printList(Node* head) {
    Node* temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}
\`\`\`

### 6. Free the List

\`\`\`c
void freeList(Node* head) {
    Node* temp;
    while (head != NULL) {
        temp = head;
        head = head->next;
        free(temp);
    }
}
\`\`\`

### 7. Example Usage

\`\`\`c
int main() {
    Node* head = NULL;
    insertAtBeginning(&head, 10);
    insertAtEnd(&head, 20);
    insertAtBeginning(&head, 5);
    printList(head); // Output: 5 -> 10 -> 20 -> NULL
    deleteNode(&head, 10);
    printList(head); // Output: 5 -> 20 -> NULL
    freeList(head);
    return 0;
}
\`\`\`

---

**Key Points:**
- Dynamic memory allocation (\`malloc\`/\`free\`) is used for node management.
- The head pointer is often passed by reference (\`Node**\`) to allow modification.
- Proper memory management is crucial to avoid leaks.

This is a basic singly linked list. For advanced usage, you can implement doubly linked lists, circular lists, or add more complex operations (like sorting, reversing, etc.).`,level:"Advanced"},{id:"451e3fb9-3727-4f4c-bfaf-281055c5ea6c",question:"What are function pointers and how are they used?",answer:`\`\`\`markdown
## Function Pointers in C

A **function pointer** in C is a variable that stores the address of a function. Just like pointers to data, function pointers can be used to call functions indirectly, pass functions as arguments, or store arrays of functions for dynamic invocation.

### Declaration

To declare a function pointer, use the following syntax:

\`\`\`c
return_type (*pointer_name)(parameter_types);
\`\`\`

**Example:** Pointer to a function taking two \`int\` arguments and returning \`int\`:

\`\`\`c
int (*func_ptr)(int, int);
\`\`\`

### Assigning a Function to a Pointer

You can assign a function to a function pointer by simply using the function's name (without parentheses):

\`\`\`c
int add(int a, int b) {
    return a + b;
}

func_ptr = add;
\`\`\`

### Calling a Function via Pointer

You can call the function using the pointer:

\`\`\`c
int result = func_ptr(2, 3); // result = 5
\`\`\`

Or, equivalently:

\`\`\`c
int result = (*func_ptr)(2, 3);
\`\`\`

### Use Cases

1. **Callback Functions:**  
   Function pointers are commonly used to implement callbacks, where a function is passed as an argument to another function.

   \`\`\`c
   void process(int x, int y, int (*operation)(int, int)) {
       printf("%d\\n", operation(x, y));
   }
   \`\`\`

2. **Arrays of Functions:**  
   You can create arrays of function pointers to select and call functions dynamically.

   \`\`\`c
   int (*operations[2])(int, int) = { add, subtract };
   int result = operations[0](5, 3); // Calls add
   \`\`\`

3. **Implementing Polymorphism:**  
   Function pointers can be used to simulate polymorphism in C, especially in structures.

   \`\`\`c
   typedef struct {
       void (*speak)(void);
   } Animal;
   \`\`\`

### Example

\`\`\`c
#include <stdio.h>

void greet() {
    printf("Hello, World!\\n");
}

int main() {
    void (*func_ptr)() = greet;
    func_ptr(); // Calls greet()
    return 0;
}
\`\`\`

### Summary

Function pointers are powerful tools in C for achieving flexible and dynamic function invocation, enabling callbacks, event handling, and more advanced programming techniques.
\`\`\`
`,level:"Advanced"},{id:"1ad8ff31-e615-4156-a149-349e44067216",question:"What is the purpose of the sizeof operator?",answer:`The sizeof operator in C is used to determine the size, in bytes, of a data type or a variable. It is evaluated at compile time and returns a value of type size_t. This operator is particularly useful for:

- Allocating memory dynamically (e.g., with malloc)
- Determining the size of arrays or structures
- Writing portable code that works across different platforms and architectures

**Example:**

\`\`\`c
int a;
printf("Size of int: %zu bytes\\n", sizeof(a));      // Output: Size of int: 4 bytes (typically)
printf("Size of double: %zu bytes\\n", sizeof(double)); // Output: Size of double: 8 bytes (typically)
\`\`\`

**Key Points:**
- sizeof can be used with variables, data types, and structures.
- Parentheses are optional when using sizeof with a variable, but required with a type (e.g., sizeof(int)).
- The result may vary depending on the system and compiler.

**Summary:**  
The sizeof operator helps you write safer and more portable C programs by allowing you to query the memory requirements of data types and variables.`,level:"Intermediate"},{id:"a7b91e79-71f5-47d3-bb88-07489caa3bbd",question:"How do you use typedef in C?",answer:`### Using \`typedef\` in C

The \`typedef\` keyword in C is used to create an alias (alternative name) for existing data types. This can make complex type declarations easier to read and manage, and can also improve code portability and clarity.

#### Basic Syntax

\`\`\`c
typedef existing_type new_type_name;
\`\`\`

#### Examples

1. **Simple Type Alias**

   \`\`\`c
   typedef unsigned long ulong;
   
   ulong a = 1000; // Equivalent to: unsigned long a = 1000;
   \`\`\`

2. **Struct Alias**

   \`\`\`c
   struct Point {
       int x;
       int y;
   };
   
   typedef struct Point Point;
   
   // Now you can declare:
   Point p1;
   \`\`\`

   Or more concisely:

   \`\`\`c
   typedef struct {
       int x;
       int y;
   } Point;
   
   Point p2;
   \`\`\`

3. **Pointer Type Alias**

   \`\`\`c
   typedef int* IntPtr;
   
   IntPtr p, q; // Both p and q are of type int*
   \`\`\`

4. **Function Pointer Alias**

   \`\`\`c
   typedef int (*CompareFunc)(const void*, const void*);
   
   int compare(const void* a, const void* b) { /*...*/ }
   CompareFunc cmp = compare;
   \`\`\`

#### Use Cases

- Simplifying complex declarations (e.g., function pointers, structures).
- Improving code readability.
- Enhancing portability (e.g., defining platform-specific types).

#### Notes

- \`typedef\` does **not** create a new type; it only creates an alias.
- It is commonly used in header files to abstract implementation details.

---

**Example:**

\`\`\`c
#include <stdio.h>

typedef struct {
    char name[50];
    int age;
} Person;

int main() {
    Person p = {"Alice", 30};
    printf("%s is %d years old.\\n", p.name, p.age);
    return 0;
}
\`\`\`

**Output:**
\`\`\`
Alice is 30 years old.
\`\`\`

---

**Summary:**  
Use \`typedef\` in C to create type aliases, making your code more readable and maintainable, especially when dealing with complex types.`,level:"Advanced"},{id:"744720e2-6525-417b-9d80-d07a3acbf05a",question:"What is recursion? Give an example in C.",answer:`Recursion in C

**Recursion** is a programming technique where a function calls itself directly or indirectly to solve a problem. Recursive functions typically solve a problem by breaking it down into smaller subproblems, each of which is solved by a recursive call, until a base case is reached.

### Example: Calculating Factorial Using Recursion

\`\`\`c
#include <stdio.h>

// Recursive function to calculate factorial
int factorial(int n) {
    if (n == 0) // Base case
        return 1;
    else
        return n * factorial(n - 1); // Recursive call
}

int main() {
    int num = 5;
    printf("Factorial of %d is %d\\n", num, factorial(num));
    return 0;
}
\`\`\`

**Output:**
\`\`\`
Factorial of 5 is 120
\`\`\`

**Explanation:**  
- The \`factorial\` function calls itself with a smaller value (\`n - 1\`) until it reaches the base case (\`n == 0\`).
- Each recursive call multiplies \`n\` by the factorial of \`n - 1\`, building up the result as the recursion unwinds.`,level:"Intermediate"},{id:"7ae82ff9-ea19-4f90-b2a8-8fb10ad12ff2",question:"How does the switch statement work in C?",answer:`\`\`\`markdown
The \`switch\` statement in C is used to perform different actions based on the value of an expression. It is an alternative to using multiple \`if-else\` statements when you need to compare the same variable or expression against different constant values.

**Syntax:**
\`\`\`c
switch(expression) {
    case constant1:
        // code to execute if expression == constant1
        break;
    case constant2:
        // code to execute if expression == constant2
        break;
    // more cases...
    default:
        // code to execute if expression doesn't match any case
}
\`\`\`

**How it works:**
1. The \`expression\` inside the \`switch\` is evaluated.
2. The value of \`expression\` is compared with each \`case\` label.
3. If a match is found, the code under that \`case\` runs.
4. The \`break\` statement ends the switch block. If \`break\` is omitted, execution continues to the next case ("fall-through").
5. The \`default\` case is optional and runs if no other case matches.

**Example:**
\`\`\`c
int num = 2;
switch(num) {
    case 1:
        printf("One\\n");
        break;
    case 2:
        printf("Two\\n");
        break;
    case 3:
        printf("Three\\n");
        break;
    default:
        printf("Other number\\n");
}
\`\`\`
**Output:**
\`\`\`
Two
\`\`\`

**Key Points:**
- Only integer and character constants are allowed in \`case\` labels.
- The \`break\` statement is important to prevent fall-through.
- The \`default\` case is optional but useful for handling unexpected values.
\`\`\`
`,level:"Beginner"},{id:"db3d92c3-a296-4f32-80db-e94507ba07cd",question:"What is the difference between break and continue statements?",answer:`**Answer:**

In C programming, both \`break\` and \`continue\` are control statements used inside loops, but they behave differently:

- **break:**  
  - Immediately exits the nearest enclosing loop (\`for\`, \`while\`, or \`do-while\`) or \`switch\` statement.
  - The program continues execution with the statement following the loop or \`switch\`.
  - Example:
    \`\`\`c
    for (int i = 0; i < 5; i++) {
        if (i == 3) {
            break; // Loop stops when i is 3
        }
        printf("%d ", i);
    }
    // Output: 0 1 2
    \`\`\`

- **continue:**  
  - Skips the remaining statements in the current iteration of the loop.
  - The loop proceeds with the next iteration.
  - Example:
    \`\`\`c
    for (int i = 0; i < 5; i++) {
        if (i == 3) {
            continue; // Skip printing when i is 3
        }
        printf("%d ", i);
    }
    // Output: 0 1 2 4
    \`\`\`

**Summary Table:**

| Statement | Effect                                                |
|-----------|------------------------------------------------------|
| break     | Exits the loop or switch entirely                    |
| continue  | Skips to the next iteration of the loop              |`,level:"Beginner"},{id:"fa545e4f-b880-4dbd-87db-d295182b2065",question:"How do you define and use enums in C?",answer:`\`\`\`markdown
### Defining and Using Enums in C

In C, an **enum** (short for *enumeration*) is a user-defined data type that consists of a set of named integer constants. Enums make code more readable and maintainable by giving meaningful names to integer values.

#### Defining an Enum

You define an enum using the \`enum\` keyword:

\`\`\`c
enum Day {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
};
\`\`\`

By default, the first name in the enum has the value \`0\`, the next \`1\`, and so on. You can also assign specific values:

\`\`\`c
enum Status {
    SUCCESS = 1,
    FAILURE = 0,
    PENDING = 2
};
\`\`\`

#### Declaring Enum Variables

You can declare variables of the enum type:

\`\`\`c
enum Day today;
today = WEDNESDAY;
\`\`\`

Or combine definition and variable declaration:

\`\`\`c
enum Color { RED, GREEN, BLUE } favoriteColor;
favoriteColor = GREEN;
\`\`\`

#### Using Enums

You can use enums in switch statements, comparisons, and assignments:

\`\`\`c
#include <stdio.h>

enum Day { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY };

int main() {
    enum Day today = FRIDAY;

    if (today == FRIDAY) {
        printf("It's Friday!\\n");
    }

    switch (today) {
        case MONDAY:
            printf("Start of the week.\\n");
            break;
        case FRIDAY:
            printf("Weekend is coming!\\n");
            break;
        default:
            printf("It's a regular day.\\n");
    }

    return 0;
}
\`\`\`

#### Summary

- Enums assign names to integer values, improving code clarity.
- By default, values start from 0, but you can specify custom values.
- Use enums for variables that can take one out of a small set of possible values.
\`\`\`
`,level:"Intermediate"},{id:"49f441c0-86a9-47d4-b153-2177e5d548ce",question:"How do you handle command-line arguments in C?",answer:'In C, command-line arguments are handled using the parameters of the main function:\n\n```c\nint main(int argc, char *argv[])\n```\n\n- **argc** (argument count): An integer representing the number of command-line arguments passed, including the program name itself.\n- **argv** (argument vector): An array of strings (character pointers) listing all the arguments. `argv[0]` is the program name, and `argv[1]` to `argv[argc-1]` are the additional arguments.\n\n### Example\n\n```c\n#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n    printf("Number of arguments: %d\\n", argc);\n    for (int i = 0; i < argc; i++) {\n        printf("Argument %d: %s\\n", i, argv[i]);\n    }\n    return 0;\n}\n```\n\n**Sample Output:**\n```\n$ ./myprogram hello world\nNumber of arguments: 3\nArgument 0: ./myprogram\nArgument 1: hello\nArgument 2: world\n```\n\n### Notes\n\n- Arguments are always passed as strings. If you need numeric values, use functions like `atoi()` or `strtol()` to convert them.\n- Always check `argc` before accessing `argv` elements to avoid out-of-bounds errors.\n\n**Summary:**  \nUse `int main(int argc, char *argv[])` to access command-line arguments in C, where `argc` is the count and `argv` is the array of arguments.',level:"Intermediate"},{id:"3bc8c766-8306-428a-a246-598120796558",question:"What is a union in C and how is it different from a structure?",answer:`\`\`\`markdown
### What is a union in C and how is it different from a structure?

A **union** in C is a user-defined data type similar to a structure, but with a key difference in how memory is allocated for its members.

#### Definition of Union

A union allows you to define a variable that can hold data of different types, but **only one member can contain a value at any given time**. All members of a union share the same memory location.

\`\`\`c
union Data {
    int i;
    float f;
    char str[20];
};
\`\`\`

#### Memory Allocation

- **Union:** Allocates enough memory to hold the largest member only. All members share this memory.
- **Structure:** Allocates enough memory to hold all members; each member has its own storage.

#### Example

\`\`\`c
#include <stdio.h>

union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    union Data data;

    data.i = 10;
    printf("data.i: %d\\n", data.i);

    data.f = 220.5;
    printf("data.f: %f\\n", data.f);

    // Now, data.i is likely overwritten
    printf("data.i after data.f: %d\\n", data.i);

    return 0;
}
\`\`\`

#### Key Differences

| Feature      | Structure (\`struct\`)                | Union (\`union\`)                          |
|--------------|------------------------------------|------------------------------------------|
| Memory       | Sum of all members' sizes          | Size of the largest member               |
| Storage      | Each member has its own storage    | All members share the same storage       |
| Usage        | Can store multiple values at once  | Can store only one value at a time       |
| Modification | Changing one member doesn't affect others | Changing one member affects others |

#### When to Use

- **Structure:** When you need to store values of different types simultaneously.
- **Union:** When you need to store one of several types, but never more than one at a time, saving memory.

---
**Summary:**  
A union is a special data type in C that allows storing different data types in the same memory location, but only one at a time. Unlike a structure, which can store multiple values simultaneously, a union is memory-efficient when only one value is needed at any moment.
\`\`\`
`,level:"Advanced"},{id:"74e6b11c-0b27-4a29-a67b-ee0dd4d7e7af",question:"Explain the concept of bitwise operators in C.",answer:`### Bitwise Operators in C

Bitwise operators in C are special operators used to perform operations directly on the binary representations of integers. They manipulate individual bits within an integer value, allowing for efficient low-level programming, such as hardware interfacing, cryptography, and performance-critical code.

#### Types of Bitwise Operators

| Operator | Name              | Description                                 |
|----------|-------------------|---------------------------------------------|
| \`&\`      | Bitwise AND       | Sets each bit to 1 if both bits are 1       |
| \`|\`      | Bitwise OR        | Sets each bit to 1 if at least one bit is 1 |
| \`^\`      | Bitwise XOR       | Sets each bit to 1 if only one bit is 1     |
| \`~\`      | Bitwise NOT       | Inverts all the bits                        |
| \`<<\`     | Left Shift        | Shifts bits to the left                     |
| \`>>\`     | Right Shift       | Shifts bits to the right                    |

#### Example

\`\`\`c
#include <stdio.h>

int main() {
    unsigned int a = 5;    // 0000 0101 in binary
    unsigned int b = 9;    // 0000 1001 in binary

    printf("a & b = %d\\n", a & b);   // 0000 0001 = 1
    printf("a | b = %d\\n", a | b);   // 0000 1101 = 13
    printf("a ^ b = %d\\n", a ^ b);   // 0000 1100 = 12
    printf("~a = %d\\n", ~a);         // 1111 1010 (in 8 bits) = -6 (in 2's complement)
    printf("b << 1 = %d\\n", b << 1); // 0001 0010 = 18
    printf("b >> 1 = %d\\n", b >> 1); // 0000 0100 = 4

    return 0;
}
\`\`\`

#### Key Points

- Bitwise operators only work with integer types (\`int\`, \`char\`, \`short\`, \`long\`, etc.).
- They are often used for setting, clearing, toggling, or testing individual bits.
- Bitwise operations are generally faster than arithmetic operations.

#### Use Cases

- Setting or clearing specific bits in a register.
- Packing multiple values into a single integer.
- Implementing efficient algorithms for cryptography or graphics.

Bitwise operators are a powerful tool in C for manipulating data at the bit level, enabling efficient and concise code for certain types of problems.`,level:"Intermediate"},{id:"58019613-613e-4f7b-8309-e76e2295e6ec",question:"What is the purpose of the extern keyword?",answer:`The extern keyword in C is used to declare a variable or function that is defined in another file or translation unit. It tells the compiler that the variable or function exists, but its memory allocation or definition is elsewhere. This enables sharing of variables and functions across multiple source files in a program.

**Key Points:**

- **Variable Declaration:** extern is commonly used to declare global variables that are defined in another source file.
- **Function Declaration:** By default, function declarations are treated as extern, so explicitly using extern is optional for functions.
- **No Memory Allocation:** Using extern does not allocate memory for the variable; it only provides a reference.

**Example:**

Suppose you have two files: \`file1.c\` and \`file2.c\`.

file1.c
\`\`\`c
int count = 10; // Definition and allocation
\`\`\`

file2.c
\`\`\`c
#include <stdio.h>

extern int count; // Declaration, no allocation

int main() {
    printf("%d\\n", count); // Accesses the variable defined in file1.c
    return 0;
}
\`\`\`

**Summary Table:**

| Usage                  | extern int x; | int x;          |
|------------------------|---------------|-----------------|
| Declaration only       | Yes           | Yes             |
| Definition (allocates) | No            | Yes             |

**Purpose:**  
The extern keyword is essential for managing scope and linkage in multi-file C programs, enabling variables and functions to be shared across files without multiple definitions.`,level:"Advanced"},{id:"620803ce-aa84-4dbb-8c84-70efa25e34d3",question:"How do you prevent multiple inclusions of a header file?",answer:`To prevent multiple inclusions of a header file in C, you use **include guards**. These are preprocessor directives that ensure the contents of a header file are included only once, even if the file is included multiple times in a project.

Here’s how you implement include guards:

\`\`\`c
#ifndef HEADER_FILE_NAME_H
#define HEADER_FILE_NAME_H

// Header file contents go here

#endif // HEADER_FILE_NAME_H
\`\`\`

**Explanation:**

- \`#ifndef HEADER_FILE_NAME_H\`: Checks if the macro \`HEADER_FILE_NAME_H\` is not defined.
- \`#define HEADER_FILE_NAME_H\`: Defines the macro if it hasn’t been defined yet.
- The actual contents of the header file are placed between these directives.
- \`#endif\`: Ends the conditional.

**Example:**

Suppose your header file is named \`myheader.h\`:

\`\`\`c
#ifndef MYHEADER_H
#define MYHEADER_H

void myFunction();

#endif // MYHEADER_H
\`\`\`

**Why use include guards?**

- Prevents redefinition errors.
- Ensures declarations and definitions in the header are processed only once per translation unit.

**Alternative (C11 and later):**

The \`#pragma once\` directive can also be used, but it is not part of the C standard (though widely supported):

\`\`\`c
#pragma once

// Header file contents
\`\`\`

**Best Practice:**  
Use traditional include guards for maximum portability.`,level:"Advanced"},{id:"abd50d90-03ef-4d83-8db3-ebe4bf1ad8f7",question:"How do you dynamically allocate a 2D array in C?",answer:`To dynamically allocate a 2D array in C, you typically use pointers and the malloc function. There are two common approaches:

### 1. Array of Pointers (Jagged Array)

This method allocates an array of pointers, then allocates each row separately.

\`\`\`c
int rows = 5, cols = 10;
int **arr = malloc(rows * sizeof(int *));
for (int i = 0; i < rows; i++) {
    arr[i] = malloc(cols * sizeof(int));
}

// Usage: arr[row][col] = value;

// Free memory
for (int i = 0; i < rows; i++) {
    free(arr[i]);
}
free(arr);
\`\`\`

**Pros:** Each row can have a different length (jagged arrays possible).  
**Cons:** Non-contiguous memory allocation; slightly slower access.

---

### 2. Single Block Allocation (Contiguous 2D Array)

This method allocates a single block for all elements and sets up pointers for each row.

\`\`\`c
int rows = 5, cols = 10;
int *data = malloc(rows * cols * sizeof(int));
int **arr = malloc(rows * sizeof(int *));
for (int i = 0; i < rows; i++) {
    arr[i] = data + i * cols;
}

// Usage: arr[row][col] = value;

// Free memory
free(arr);
free(data);
\`\`\`

**Pros:** All elements are in contiguous memory (better cache performance).  
**Cons:** All rows must have the same length.

---

### Notes

- Always check the result of malloc for NULL to ensure allocation succeeded.
- Remember to free all allocated memory to avoid memory leaks.
- For multi-dimensional arrays beyond 2D, similar principles apply.

---

**Example Usage:**

\`\`\`c
arr[2][3] = 42; // Sets the element at row 2, column 3 to 42
\`\`\`

---

**Summary Table:**

| Method                 | Memory Layout   | Flexibility | Performance |
|------------------------|----------------|-------------|-------------|
| Array of Pointers      | Non-contiguous | High        | Moderate    |
| Single Block Allocation| Contiguous     | Low         | High        |`,level:"Advanced"},{id:"fc3495dc-4ec5-46ac-a0a0-b2d037fc701e",question:"What are macros and how are they defined in C?",answer:`**Macros in C**

Macros are preprocessor directives in C that allow you to define symbolic names or code fragments that are replaced by the preprocessor before compilation. They are commonly used to define constants, inline functions, or code snippets to improve code readability and maintainability.

### Defining Macros

Macros are defined using the \`#define\` directive. There are two main types:

#### 1. Object-like Macros

These are simple replacements, often used for constants.

\`\`\`c
#define PI 3.14159
#define MAX_SIZE 100
\`\`\`

Whenever \`PI\` or \`MAX_SIZE\` appears in the code, the preprocessor replaces them with \`3.14159\` and \`100\`, respectively.

#### 2. Function-like Macros

These macros take arguments and can be used like functions, but the code is replaced inline.

\`\`\`c
#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
\`\`\`

When you use \`SQUARE(5)\`, it gets replaced with \`((5) * (5))\`.

### Example Usage

\`\`\`c
#include <stdio.h>

#define PI 3.14159
#define SQUARE(x) ((x) * (x))

int main() {
    double r = 2.0;
    double area = PI * SQUARE(r);
    printf("Area: %f\\n", area);
    return 0;
}
\`\`\`

### Notes

- Macros do not perform type checking.
- Parentheses should be used carefully in macro definitions to avoid unexpected results.
- Macros are replaced before compilation, so they do not consume memory at runtime.

**Summary:**  
Macros in C are powerful tools for code substitution and are defined using the \`#define\` directive. They can represent constants or code fragments, and their usage can make code more readable and maintainable when used appropriately.`,level:"Intermediate"},{id:"37e8aae6-179f-4c04-9656-916df27095f0",question:"What is the difference between a shallow copy and a deep copy?",answer:`### Difference Between Shallow Copy and Deep Copy in C

In C programming, **shallow copy** and **deep copy** refer to two different ways of copying data structures (like arrays, structs, or objects containing pointers).

---

#### **Shallow Copy**

- **Definition:** A shallow copy copies the immediate values of the data structure (including pointer values), but does **not** copy the data pointed to by those pointers.
- **Effect:** Both the original and the copy share the same referenced memory (e.g., heap-allocated memory).
- **Implication:** Changes made through one pointer affect the other, leading to potential bugs (like double-free errors or unintended data modification).

**Example:**
\`\`\`c
typedef struct {
    int *data;
} MyStruct;

MyStruct a, b;
a.data = malloc(sizeof(int));
*a.data = 42;

// Shallow copy: just copies the pointer
b = a;

// Both a.data and b.data point to the same memory
\`\`\`

---

#### **Deep Copy**

- **Definition:** A deep copy duplicates not only the immediate values but also the data referenced by any pointers. This means all dynamically allocated memory is also copied.
- **Effect:** The original and the copy are completely independent; changes to one do not affect the other.
- **Implication:** Prevents issues like double-free or unintended data sharing, but requires manual implementation.

**Example:**
\`\`\`c
b.data = malloc(sizeof(int));
*b.data = *a.data; // Deep copy of the data

// Now a.data and b.data point to different memory locations
\`\`\`

---

#### **Summary Table**

| Aspect         | Shallow Copy                        | Deep Copy                           |
|----------------|------------------------------------|-------------------------------------|
| Pointer Data   | Copied as pointer values            | Copied as new allocations           |
| Independence   | Not independent (shared memory)     | Fully independent                   |
| Implementation | Default assignment                  | Manual (custom function needed)     |
| Use Cases      | When sharing is intended            | When full independence is required  |

---

**In summary:**  
- Use a **shallow copy** for simple structures without pointers or when shared data is acceptable.
- Use a **deep copy** when you need independent copies of complex structures containing pointers.`,level:"Advanced"},{id:"b37e2777-5163-473f-b0ca-97bf0c6642ee",question:"How do you implement error handling in C?",answer:`\`\`\`markdown
## How to Implement Error Handling in C

C does not have built-in exception handling like some other languages (e.g., \`try-catch\` in Java or C++). Instead, error handling in C is typically done using:

1. **Return Codes**
2. **\`errno\` Variable**
3. **\`perror()\` and \`strerror()\` Functions**
4. **Custom Error Handling**

### 1. Return Codes

Most C library functions return a value indicating success or failure. For example, \`fopen()\` returns \`NULL\` on failure.

\`\`\`c
FILE *fp = fopen("file.txt", "r");
if (fp == NULL) {
    // Handle error
    printf("Error opening file!\\n");
}
\`\`\`

### 2. \`errno\` Variable

The global variable \`errno\` is set by system calls and some library functions in the event of an error to indicate what went wrong.

\`\`\`c
#include <stdio.h>
#include <errno.h>
#include <string.h>

FILE *fp = fopen("file.txt", "r");
if (fp == NULL) {
    printf("Error opening file: %s\\n", strerror(errno));
}
\`\`\`

### 3. \`perror()\` and \`strerror()\`

- \`perror()\` prints a description of the last error that occurred.
- \`strerror(errno)\` returns a string describing the error code.

\`\`\`c
if (fp == NULL) {
    perror("fopen failed");
}
\`\`\`

### 4. Custom Error Handling

You can define your own error codes and handle them as needed.

\`\`\`c
#define SUCCESS 0
#define ERROR_FILE_NOT_FOUND 1

int open_file(const char *filename) {
    FILE *fp = fopen(filename, "r");
    if (fp == NULL) {
        return ERROR_FILE_NOT_FOUND;
    }
    // ... use the file
    fclose(fp);
    return SUCCESS;
}

int main() {
    int status = open_file("file.txt");
    if (status != SUCCESS) {
        printf("Custom error: File not found.\\n");
    }
    return 0;
}
\`\`\`

### Summary

- Check return values of functions.
- Use \`errno\`, \`perror()\`, and \`strerror()\` for detailed error information.
- Define and use custom error codes for your own functions.

This approach helps you detect and respond to errors effectively in C programs.
\`\`\`
`,level:"Intermediate"},{id:"9c2476fe-6ba3-4c00-9a0d-9aba72346377",question:"Explain the process of compiling and linking in C.",answer:`Certainly! Here’s an explanation in markdown format:

---

## Compiling and Linking in C

The process of turning C source code into an executable program involves two main steps: **compiling** and **linking**.

### 1. Compiling

- **Source Code to Object Code:**  
  The C compiler (like \`gcc\` or \`clang\`) takes your \`.c\` source files and translates them into **object files** (\`.o\` or \`.obj\`).  
- **Syntax Checking:**  
  During compilation, the compiler checks for syntax errors and ensures the code follows the C language rules.
- **Intermediate Code Generation:**  
  The compiler converts the code into machine code instructions, but references to external functions or variables are left unresolved.

**Example:**
\`\`\`bash
gcc -c main.c    # Produces main.o
\`\`\`

### 2. Linking

- **Combining Object Files:**  
  The linker takes one or more object files and combines them into a single executable file.
- **Resolving References:**  
  It resolves references to functions and variables that are declared in different files or libraries (like the C standard library).
- **Producing Executable:**  
  The final output is an executable file (like \`a.out\` on Unix or \`.exe\` on Windows).

**Example:**
\`\`\`bash
gcc main.o utils.o -o myprogram
\`\`\`

### Summary Diagram

\`\`\`
main.c + utils.c
      |   (compile)
      v
main.o + utils.o
      |   (link)
      v
   myprogram (executable)
\`\`\`

---

**In short:**  
- **Compiling** translates source code to object code.
- **Linking** combines object code and libraries to create an executable.`,level:"Intermediate"},{id:"f2244566-94c0-4d98-ad4e-08f19cbebe7f",question:"What are storage classes in C and name them.",answer:`**Storage classes** in C define the scope (visibility), lifetime, and linkage of variables and/or functions within a C program. They determine where a variable is stored, its default initial value, and how long it exists during program execution.

The four storage classes in C are:

1. **auto**  
   - Default for local variables inside functions.
   - Scope: Local to the block.
   - Lifetime: Created on entry, destroyed on exit.

2. **register**  
   - Suggests storing the variable in a CPU register for faster access.
   - Scope: Local to the block.
   - Lifetime: Created on entry, destroyed on exit.

3. **static**  
   - Retains the value of a variable between function calls.
   - Scope: Local to the block (if declared inside a function) or global (if outside).
   - Lifetime: Entire program execution.

4. **extern**  
   - Declares a variable defined elsewhere (usually in another file).
   - Scope: Global.
   - Lifetime: Entire program execution.

**Summary Table:**

| Storage Class | Scope         | Lifetime           | Default Value | Linkage      |
|---------------|--------------|--------------------|---------------|--------------|
| auto          | Local        | Block execution    | Garbage       | None         |
| register      | Local        | Block execution    | Garbage       | None         |
| static        | Local/Global | Entire program     | Zero          | Internal     |
| extern        | Global       | Entire program     | Zero          | External     |`,level:"Intermediate"}];export{n as default};
