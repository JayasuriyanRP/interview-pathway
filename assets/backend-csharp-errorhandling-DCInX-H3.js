const e=[{id:"ade6a601-d9d7-4b30-88a3-0be4dbf3c3a0",question:"How does the catch block work in C#?",answer:'```markdown\nIn C#, the `catch` block is used to handle exceptions that occur in the associated `try` block. When an exception is thrown inside the `try` block, the runtime looks for a matching `catch` block to handle the error. The code inside the `catch` block is executed, allowing you to respond to the error, log it, or take corrective action.\n\n**Basic Syntax:**\n```csharp\ntry\n{\n    // Code that might throw an exception\n}\ncatch (ExceptionType ex)\n{\n    // Code to handle the exception\n}\n```\n\n**Example:**\n```csharp\ntry\n{\n    int number = int.Parse("abc"); // This will throw a FormatException\n}\ncatch (FormatException ex)\n{\n    Console.WriteLine("Input string is not a valid number.");\n}\n```\n\n**Key Points:**\n- You can have multiple `catch` blocks to handle different exception types.\n- If no exception occurs, the `catch` block is skipped.\n- The `catch` block can access the exception object (e.g., `ex`) for more details about the error.\n```\n',level:"Beginner",created_at:"2025-04-21T05:05:02.745429Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"624232d2-c97f-4df5-9596-2d1d025c2c43",question:"What is the finally block used for in C# error handling?",answer:`\`\`\`markdown The finally block in C# error handling is used to execute code after a try and catch block, regardless of whether an exception was thrown or not. It is typically used for cleanup operations, such as closing files, releasing resources, or resetting values.

**Example:**

\`\`\`csharp
try
{
    // Code that may throw an exception
}
catch (Exception ex)
{
    // Code to handle the exception
}
finally
{
    // Code that will always run, even if an exception occurs
}
\`\`\`

**Key Points:**
- The finally block always executes after the try and catch blocks.
- It is commonly used for resource cleanup.
- It runs even if an exception is not caught or if a return statement is encountered in the try or catch blocks.`,level:"Beginner",created_at:"2025-04-21T05:05:02.745442Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"8551cb46-9eaf-43e7-b5fd-3a8808f2f94a",question:"How do you throw an exception manually in C#?",answer:'```markdown To throw an exception manually in C#, you use the throw keyword followed by a new instance of an exception class. For example:\n\n```csharp\nthrow new Exception("Something went wrong!");\n```\n\nYou can also throw more specific exceptions, such as:\n\n```csharp\nthrow new ArgumentNullException("parameterName", "Parameter cannot be null.");\n```\n\nThis is typically done inside a method when you want to indicate that an error has occurred.',level:"Beginner",created_at:"2025-04-21T05:05:02.745456Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"8850a0d8-f705-4da6-9d25-cf6cc4742378",question:"What is the base class for all exceptions in C#?",answer:"```markdown\nThe base class for all exceptions in C# is `System.Exception`.\n```",level:"Beginner",created_at:"2025-04-21T05:05:02.745468Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"89ff1478-41b5-4b24-b021-33a16b8cdd6f",question:"What is exception handling in C#?",answer:`\`\`\`markdown Exception handling in C# is a mechanism that allows you to detect and respond to errors that occur during program execution. It helps prevent your program from crashing by catching exceptions (unexpected events or errors) and handling them gracefully.

In C#, exception handling is done using the try, catch, and finally blocks:

\`\`\`csharp
try
{
    // Code that might throw an exception
    int result = 10 / 0;
}
catch (DivideByZeroException ex)
{
    // Code to handle the exception
    Console.WriteLine("Cannot divide by zero.");
}
finally
{
    // Code that always runs, whether an exception occurred or not
    Console.WriteLine("Operation complete.");
}
\`\`\`

- **try**: Contains code that might throw an exception.
- **catch**: Handles the exception if one occurs.
- **finally**: (Optional) Contains code that runs no matter what, often used for cleanup.

Exception handling makes your programs more robust and user-friendly by allowing you to manage errors effectively.`,level:"Beginner",created_at:"2025-04-21T05:05:02.745371Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"2d12ef75-81bf-4b7d-be85-66c4268d15e2",question:"Which keywords are used for error handling in C#?",answer:`\`\`\`markdown The keywords used for error handling in C# are:

- \`try\`
- \`catch\`
- \`finally\`
- \`throw\`

**Example:**
\`\`\`csharp
try
{
    // Code that may cause an exception
}
catch (Exception ex)
{
    // Code to handle the exception
}
finally
{
    // Code that runs regardless of an exception
}
\`\`\`
You can use the \`throw\` keyword to manually raise an exception.`,level:"Beginner",created_at:"2025-04-21T05:05:02.745401Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"39722729-b36d-4c81-b812-9e63c78a1fb0",question:"What is the purpose of the try block in C#?",answer:`\`\`\`markdown The try block in C# is used to wrap code that might throw an exception during execution. Its main purpose is to allow you to handle potential errors gracefully. If an exception occurs within the try block, control is passed to the corresponding catch block, where you can handle the error. This helps prevent your program from crashing unexpectedly.

**Example:**
\`\`\`csharp
try
{
    int result = 10 / 0; // This will throw a DivideByZeroException
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Cannot divide by zero!");
}
\`\`\`

**Summary:**  
The try block is used to detect and handle exceptions, making your code more robust and reliable.`,level:"Beginner",created_at:"2025-04-21T05:05:02.745413Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"da19163a-92f0-4c8f-842a-71917aeb46a9",question:"How can you catch multiple types of exceptions in C#?",answer:`\`\`\`markdown You can catch multiple types of exceptions in C# by using multiple catch blocks, each specifying a different exception type. The catch blocks are checked in order, and the first one that matches the thrown exception type is executed.

Here’s an example:

\`\`\`csharp
try
{
    // Code that may throw exceptions
}
catch (FormatException ex)
{
    Console.WriteLine("A format exception occurred: " + ex.Message);
}
catch (NullReferenceException ex)
{
    Console.WriteLine("A null reference exception occurred: " + ex.Message);
}
catch (Exception ex)
{
    // This will catch any other exceptions not caught above
    Console.WriteLine("An exception occurred: " + ex.Message);
}
\`\`\`

**Key points:**
- Place more specific exceptions before more general ones (like \`Exception\`).
- Only one catch block will execute for a thrown exception.
- You can also use a single catch block for multiple exception types using pattern matching (C# 7.0+):

\`\`\`csharp
catch (Exception ex) when (ex is FormatException || ex is NullReferenceException)
{
    Console.WriteLine("A format or null reference exception occurred: " + ex.Message);
}
\`\`\`

This approach helps you handle different exception types appropriately in your C# programs.`,level:"Beginner",created_at:"2025-04-21T05:05:02.745479Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"1dbf3da8-4787-4abb-a9fd-510412b9f05c",question:"What happens if an exception is not caught in C#?",answer:`\`\`\`markdown If an exception is not caught in C#, the program will terminate abnormally. The runtime will display an error message describing the unhandled exception, including its type and stack trace. Any code after the point where the exception was thrown will not execute. Uncaught exceptions can cause loss of data or resources, so it is important to handle exceptions appropriately using try-catch blocks.

**Example:**

\`\`\`csharp
int x = 10;
int y = 0;
int result = x / y; // This will throw a DivideByZeroException
Console.WriteLine("This line will not execute.");
\`\`\`

**Output:**
\`\`\`
Unhandled exception. System.DivideByZeroException: Attempted to divide by zero.
   at Program.Main()
\`\`\`

**Summary:**  
If an exception is not caught, the application crashes and the exception details are shown.`,level:"Beginner",created_at:"2025-04-21T05:05:02.745493Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"125c8474-2723-4030-b2c1-452a3379fa7e",question:"What is the difference between System.Exception and System.SystemException?",answer:`\`\`\`markdown **System.Exception** is the base class for all exceptions in C#. It represents errors that occur during application execution. All exception types, both predefined and user-defined, ultimately derive from System.Exception.

**System.SystemException** is a subclass of System.Exception. It acts as the base class for exceptions that are thrown by the .NET runtime (the CLR), rather than by user code. Examples of exceptions derived from System.SystemException include:

- System.NullReferenceException
- System.IndexOutOfRangeException
- System.DivideByZeroException

**Key Differences:**

| System.Exception                    | System.SystemException                       |
|-------------------------------------|----------------------------------------------|
| Base class for all exceptions       | Derived from System.Exception                |
| Can be used for user-defined errors | Intended for exceptions thrown by the runtime|
| Not usually thrown directly         | Not usually thrown directly                  |
| Examples: custom exceptions         | Examples: NullReferenceException, etc.       |

**Summary:**  
System.Exception is the root of the exception hierarchy, while System.SystemException is a specific subclass used for exceptions generated by the .NET runtime environment. User-defined exceptions should generally inherit directly from System.Exception, not System.SystemException.`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745507Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"d146d6e0-f6cd-4921-8e3b-5b28fc5ae92a",question:"How do you create a custom exception in C#?",answer:`\`\`\`markdown To create a custom exception in C#, you define a new class that inherits from the Exception class (or a derived exception class). It's recommended to implement the standard constructors to ensure your exception can be used in various scenarios.

\`\`\`csharp
using System;

public class MyCustomException : Exception
{
    public MyCustomException() { }

    public MyCustomException(string message)
        : base(message) { }

    public MyCustomException(string message, Exception inner)
        : base(message, inner) { }
}
\`\`\`

**Usage Example:**
\`\`\`csharp
throw new MyCustomException("Something went wrong!");
\`\`\`

**Best Practices:**
- Name your exception classes with the suffix Exception.
- Provide the standard constructors for flexibility.
- Optionally, add custom properties or methods if needed for additional context.`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745523Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"bfcfc838-8332-4355-98bc-38303b91940d",question:"What is the purpose of the InnerException property?",answer:`\`\`\`markdown The **InnerException** property in C# is used to provide additional context when an exception is thrown as a direct result of another exception. It allows you to chain exceptions together, preserving the original exception that caused the current one. This is especially useful for debugging and error tracing, as it helps you understand the sequence of errors that led to the final exception.

**Example:**

\`\`\`csharp
try
{
    // Some code that throws an exception
}
catch (Exception ex)
{
    throw new ApplicationException("An error occurred in the application.", ex);
}
\`\`\`

In this example, the original exception (ex) is passed as the InnerException to the new ApplicationException. When handling the ApplicationException, you can inspect its InnerException property to see the original error.

**Key Points:**
- **InnerException** helps maintain the exception chain.
- It provides more detailed error information.
- Useful for debugging complex error scenarios.`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745538Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"1be070f7-5333-47fc-bfb5-6b16fa63e13c",question:"How can you rethrow an exception in C#?",answer:`\`\`\`markdown To rethrow an exception in C#, you use the throw statement without specifying the exception variable. This preserves the original stack trace, which is important for debugging. Here’s an example:

\`\`\`csharp
try
{
    // Some code that may throw an exception
}
catch (Exception ex)
{
    // Handle or log the exception if needed
    throw; // Rethrows the current exception
}
\`\`\`

**Note:**  
Using throw ex; instead of throw; will reset the stack trace, making it harder to trace the original error location. Always use throw; to rethrow the current exception while preserving the stack trace.`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745552Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"df99c8fa-e393-4821-a21b-23b41790e834",question:"What is the difference between throw and throw ex in C#?",answer:`\`\`\`markdown
**Difference between \`throw\` and \`throw ex\` in C#:**

- **\`throw;\`**  
  - Re-throws the current exception.
  - Preserves the original stack trace, which is crucial for debugging.
  - Commonly used inside a \`catch\` block when you want to handle something and then let the exception propagate.

- **\`throw ex;\`**  
  - Throws the caught exception object (\`ex\`) again.
  - **Resets the stack trace** to the current location, losing the original error location information.
  - Makes debugging harder because you lose the context of where the exception was originally thrown.

**Example:**

\`\`\`csharp
try
{
    // Some code that throws an exception
}
catch (Exception ex)
{
    // Option 1: Preserves stack trace
    throw;

    // Option 2: Resets stack trace (not recommended)
    // throw ex;
}
\`\`\`

**Best Practice:**  
Always use \`throw;\` to re-throw exceptions unless you have a specific reason to modify the exception. This ensures the original stack trace is preserved.
\`\`\``,level:"Intermediate",created_at:"2025-04-21T05:05:02.745566Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"6bd85c83-adb2-4a13-a60d-2ac1a7d3eb3b",question:"How does exception propagation work in C#?",answer:`\`\`\`markdown ### How Exception Propagation Works in C#

In C#, **exception propagation** refers to the process by which an exception moves up the call stack until it is caught by a matching \`catch\` block or causes the program to terminate if unhandled.

#### How It Works

1. **Exception Thrown:** When an error occurs, an exception is thrown using the \`throw\` statement.
2. **Searching for a Handler:** The runtime looks for a \`catch\` block that can handle the exception, starting in the current method.
3. **Moving Up the Call Stack:** 
    - If no suitable \`catch\` block is found in the current method, the exception propagates to the calling method.
    - This process repeats up the call stack until a matching \`catch\` block is found.
4. **Unhandled Exception:** 
    - If the exception reaches the top of the call stack without being caught, the program terminates and displays an error message.

#### Example

\`\`\`csharp
void MethodA()
{
    try
    {
        MethodB();
    }
    catch (Exception ex)
    {
        Console.WriteLine("Caught in MethodA: " + ex.Message);
    }
}

void MethodB()
{
    MethodC();
}

void MethodC()
{
    throw new InvalidOperationException("Something went wrong!");
}
\`\`\`

- \`MethodC\` throws an exception.
- \`MethodB\` does not handle it, so the exception propagates to \`MethodA\`.
- \`MethodA\` has a \`try-catch\` block, so the exception is caught there.

#### Key Points

- Exception propagation allows centralized error handling.
- Only the first matching \`catch\` block handles the exception.
- If no handler is found, the application will terminate.

#### Best Practices

- Catch exceptions at the appropriate level where you can handle them meaningfully.
- Avoid catching exceptions too early unless you can resolve or log them properly.

---

**In summary:** Exception propagation in C# moves exceptions up the call stack until a suitable handler is found, enabling structured and centralized error handling.`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745580Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"82609013-0c2c-4cb4-af41-23f27ff16924",question:"What is a stack trace and how is it useful in error handling?",answer:`\`\`\`markdown A **stack trace** in C# is a report that provides information about the sequence of method calls that led to a particular point in the execution of a program, typically when an exception occurs.

### What is a Stack Trace?

- It is a textual representation of the call stack at a specific moment, usually when an exception is thrown.
- Each line in the stack trace shows a method call, starting from the method where the exception occurred and tracing back up to the entry point of the program.

### Example

\`\`\`csharp
try
{
    // Some code that throws an exception
}
catch (Exception ex)
{
    Console.WriteLine(ex.StackTrace);
}
\`\`\`

Sample output:
\`\`\`
   at MyApp.Program.DoWork() in C:\\Projects\\MyApp\\Program.cs:line 25
   at MyApp.Program.Main(String[] args) in C:\\Projects\\MyApp\\Program.cs:line 10
\`\`\`

### How is it Useful in Error Handling?

- **Debugging:** Helps developers identify exactly where an error occurred and the sequence of method calls that led to it.
- **Root Cause Analysis:** By examining the stack trace, you can trace back through the code to find the source of the problem.
- **Logging:** Including stack traces in error logs makes it easier to diagnose issues after deployment.
- **Exception Propagation:** When exceptions are caught and rethrown, stack traces help maintain context about the original error.

### Best Practices

- Always log the stack trace when handling exceptions, especially in production environments.
- Use \`ex.ToString()\` to get both the exception message and the stack trace.

---

**In summary:**  
A stack trace is an essential tool in C# error handling, providing detailed information about the call sequence leading to an error, which greatly aids in debugging and maintaining robust applications.`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745595Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"0d4cd2dc-0e9d-4fe1-b435-77bef7b34759",question:"How can you log exceptions in C#?",answer:`\`\`\`markdown You can log exceptions in C# using various approaches, depending on your application's requirements and the logging framework you choose. Here are some common methods:

### 1. Using \`try-catch\` and \`Console.WriteLine\`

\`\`\`csharp
try
{
    // Code that may throw an exception
}
catch (Exception ex)
{
    Console.WriteLine($"Exception: {ex.Message}");
    Console.WriteLine($"Stack Trace: {ex.StackTrace}");
}
\`\`\`

### 2. Using \`System.Diagnostics.Trace\`

\`\`\`csharp
using System.Diagnostics;

try
{
    // Code that may throw an exception
}
catch (Exception ex)
{
    Trace.WriteLine($"Exception: {ex}");
}
\`\`\`

### 3. Using a Logging Framework (e.g., NLog, log4net, Serilog)

**Example with NLog:**

1. Install NLog via NuGet:

   \`\`\`
   Install-Package NLog
   \`\`\`

2. Configure NLog and log exceptions:

   \`\`\`csharp
   private static readonly NLog.Logger logger = NLog.LogManager.GetCurrentClassLogger();

   try
   {
       // Code that may throw an exception
   }
   catch (Exception ex)
   {
       logger.Error(ex, "An error occurred");
   }
   \`\`\`

### 4. Writing to a File Manually

\`\`\`csharp
try
{
    // Code that may throw an exception
}
catch (Exception ex)
{
    System.IO.File.AppendAllText("log.txt", $"{DateTime.Now}: {ex}\\n");
}
\`\`\`

---

**Best Practice:**  
For production applications, it's recommended to use a robust logging framework (like NLog, log4net, or Serilog) for flexibility, configurability, and support for multiple log targets (files, databases, event logs, etc.).`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745608Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"11f13573-d7e9-4a5a-ae3c-a98e823dc6ce",question:"What is the AggregateException class used for?",answer:`\`\`\`markdown The \`AggregateException\` class in C# is used to represent one or more errors that occur during the execution of parallel or asynchronous operations. It is commonly encountered when working with the Task Parallel Library (TPL), such as with \`Task\` or \`Parallel\` classes.

### Key Points

- **Purpose:** To encapsulate multiple exceptions into a single exception object.
- **Typical Usage:** When multiple tasks run concurrently and more than one task throws an exception, these exceptions are bundled into an \`AggregateException\`.
- **Accessing Inner Exceptions:** The \`InnerExceptions\` property provides a collection of all the exceptions that were thrown.
- **Handling:** You can use the \`Handle\` method to process each inner exception individually.

### Example

\`\`\`csharp
try
{
    Task task1 = Task.Run(() => { throw new InvalidOperationException("Task 1 failed."); });
    Task task2 = Task.Run(() => { throw new ArgumentException("Task 2 failed."); });
    Task.WaitAll(task1, task2);
}
catch (AggregateException ex)
{
    foreach (var inner in ex.InnerExceptions)
    {
        Console.WriteLine(inner.Message);
    }
}
\`\`\`

**Output:**
\`\`\`
Task 1 failed.
Task 2 failed.
\`\`\`

### Summary

\`AggregateException\` is essential for robust error handling in parallel and asynchronous programming, allowing you to manage multiple exceptions in a structured way.`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745621Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"a5eef7c4-695d-46ef-8f78-be4a8cec36ea",question:"How do you handle exceptions in asynchronous methods in C#?",answer:`\`\`\`markdown
In C#, exceptions in asynchronous methods are handled using try-catch blocks, just like in synchronous code. However, because asynchronous methods often return a Task or Task<T>, exceptions are captured and stored in the Task. When you await the Task, any exceptions are re-thrown at the await point, allowing you to catch them with try-catch.

**Example:**

\`\`\`csharp
public async Task MyAsyncMethod()
{
    try
    {
        // Await an asynchronous operation that may throw
        await SomeOtherAsyncMethod();
    }
    catch (Exception ex)
    {
        // Handle the exception
        Console.WriteLine($"Exception caught: {ex.Message}");
    }
}
\`\`\`

**Key Points:**

- Place the try-catch block inside the async method, wrapping the await statement.
- If you do not await the Task (e.g., fire-and-forget), exceptions may go unobserved unless you attach a continuation or handle the Task's Exception property.
- For methods returning Task, exceptions are propagated to the caller and can be caught when the Task is awaited.

**Catching exceptions from awaited tasks:**

\`\`\`csharp
try
{
    await MyAsyncMethod();
}
catch (Exception ex)
{
    // Handle exceptions thrown from MyAsyncMethod
}
\`\`\`

**Summary:**  
Always use try-catch around await statements to handle exceptions in asynchronous methods. If you do not await the Task, check the Task.Exception property or use continuations to observe exceptions.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745635Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"5d870f8f-eace-44c3-a4ed-d4cf3fa2e4be",question:"What is the difference between checked and unchecked contexts in C#?",answer:`\`\`\`markdown
In C#, **checked** and **unchecked** contexts control how arithmetic overflow is handled for integral-type operations (such as \`int\`, \`long\`, etc.).

### checked Context

- In a \`checked\` context, arithmetic overflow **raises a runtime exception** (\`OverflowException\`).
- This is useful when you want to ensure that overflow conditions are detected and handled.

**Example:**
\`\`\`csharp
checked
{
    int x = int.MaxValue;
    int y = x + 1; // Throws OverflowException
}
\`\`\`

### unchecked Context

- In an \`unchecked\` context, arithmetic overflow **does not raise an exception**; the result wraps around (default behavior).
- This is useful for performance or when overflow is expected and acceptable.

**Example:**
\`\`\`csharp
unchecked
{
    int x = int.MaxValue;
    int y = x + 1; // y becomes int.MinValue, no exception thrown
}
\`\`\`

### Summary Table

| Context   | Overflow Behavior         | Exception Thrown?      |
|-----------|--------------------------|------------------------|
| checked   | Detects overflow         | Yes (\`OverflowException\`) |
| unchecked | Ignores overflow (wraps) | No                     |

**Note:** By default, most arithmetic operations in C# are \`unchecked\` unless the \`/checked\` compiler option is enabled or the code is explicitly placed in a \`checked\` block.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745648Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"6b5a30f1-6ef4-4f23-a61b-25033170d1f4",question:"How do you handle exceptions in parallel programming in C#?",answer:`\`\`\`markdown
### Handling Exceptions in Parallel Programming in C#

In parallel programming with C# (using \`Parallel.For\`, \`Parallel.ForEach\`, or \`Task\`), exceptions are handled differently than in sequential code. When multiple tasks or iterations throw exceptions, these are aggregated and thrown as an \`AggregateException\`.

#### Key Points

- **Exceptions are not thrown immediately:** In parallel loops or tasks, exceptions are captured and wrapped in an \`AggregateException\`.
- **AggregateException:** This exception contains all the exceptions thrown by individual tasks or iterations.

#### Example: Handling Exceptions in \`Parallel.For\`

\`\`\`csharp
try
{
    Parallel.For(0, 10, i =>
    {
        if (i == 5)
            throw new InvalidOperationException($"Error at iteration {i}");
        Console.WriteLine(i);
    });
}
catch (AggregateException ex)
{
    foreach (var inner in ex.InnerExceptions)
    {
        Console.WriteLine($"Caught exception: {inner.Message}");
    }
}
\`\`\`

#### Example: Handling Exceptions in Tasks

\`\`\`csharp
var tasks = new List<Task>();

for (int i = 0; i < 5; i++)
{
    int local = i;
    tasks.Add(Task.Run(() =>
    {
        if (local == 2)
            throw new Exception("Task failed");
    }));
}

try
{
    Task.WaitAll(tasks.ToArray());
}
catch (AggregateException ex)
{
    ex.Handle(e =>
    {
        Console.WriteLine($"Handled exception: {e.Message}");
        return true; // Mark as handled
    });
}
\`\`\`

#### Best Practices

- Always catch \`AggregateException\` when using parallel constructs.
- Use the \`Handle\` method of \`AggregateException\` to process or filter exceptions.
- Be aware that if an exception is unhandled, it will propagate and may terminate your application.

#### References

- [Microsoft Docs: Exception Handling in Task Parallel Library](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/exception-handling-task-parallel-library)
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.745662Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"1ed2c82b-6941-46d2-8286-8ba08d04f247",question:"What are exception filters and how are they used in C#?",answer:`\`\`\`markdown Exception filters in C# are a feature that allows you to specify a condition for a catch block to handle an exception. They enable more granular and expressive error handling by letting you catch exceptions only when certain criteria are met, without resorting to rethrowing or nesting catch blocks.

## Syntax

Exception filters use the \`when\` keyword in a catch clause:

\`\`\`csharp
try
{
    // Code that may throw an exception
}
catch (Exception ex) when (/* condition */)
{
    // Handle exception if condition is true
}
\`\`\`

## How They Work

- The condition after \`when\` is a boolean expression.
- If the exception is thrown, the runtime evaluates the filter.
- If the filter returns \`true\`, the catch block executes.
- If it returns \`false\`, the exception continues to propagate and may be caught by another catch block or higher up the call stack.

## Example

\`\`\`csharp
try
{
    // Some code that may throw
}
catch (IOException ex) when (ex.Message.Contains("disk full"))
{
    Console.WriteLine("Handle disk full error specifically.");
}
catch (IOException ex)
{
    Console.WriteLine("Handle other IO exceptions.");
}
\`\`\`

In this example:

- The first catch block only handles \`IOException\` if the message contains "disk full".
- Other IO exceptions are handled by the second catch block.

## Benefits

- **Improved Readability:** Keeps catch blocks focused and avoids deeply nested try-catch structures.
- **No Side Effects:** The filter expression should be free of side effects, as it may be evaluated multiple times.
- **Selective Handling:** Enables handling exceptions based on runtime state or exception data.

## Use Cases

- Logging only certain exceptions.
- Handling exceptions differently based on environment or user context.
- Filtering exceptions based on properties (e.g., error codes, messages).

## Notes

- Exception filters are available in C# 6.0 and later.
- They are especially useful in asynchronous programming and when working with complex exception hierarchies.

---

**Summary:**  
Exception filters in C# use the \`when\` keyword to conditionally handle exceptions in catch blocks, making error handling more precise and expressive.`,level:"Advanced",created_at:"2025-04-21T05:05:02.745676Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"1c3f4275-0c6b-41fe-9575-6d304cbf289f",question:"How can you ensure resource cleanup when an exception occurs?",answer:`\`\`\`markdown To ensure resource cleanup when an exception occurs in C#, you should use the **try-finally** construct or, preferably, the **using** statement for objects that implement \`IDisposable\`. This guarantees that resources such as file handles, database connections, or network streams are properly released, even if an exception is thrown.

### Using \`try-finally\`

\`\`\`csharp
FileStream stream = null;
try
{
    stream = new FileStream("data.txt", FileMode.Open);
    // Perform operations on the stream
}
finally
{
    if (stream != null)
        stream.Dispose(); // Ensures cleanup even if an exception occurs
}
\`\`\`

### Using \`using\` Statement

The \`using\` statement is a shorthand for try-finally that automatically calls \`Dispose()\` on the object when the block is exited, regardless of whether an exception was thrown.

\`\`\`csharp
using (var stream = new FileStream("data.txt", FileMode.Open))
{
    // Perform operations on the stream
} // stream.Dispose() is called automatically here
\`\`\`

### Key Points

- **try-finally**: Use when you need explicit control over cleanup.
- **using**: Preferred for \`IDisposable\` resources; ensures deterministic cleanup.
- Always release unmanaged resources to prevent resource leaks, even in the presence of exceptions.

**References:**
- [Microsoft Docs: try-finally](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-finally)
- [Microsoft Docs: using statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement)`,level:"Advanced",created_at:"2025-04-21T05:05:02.745690Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"0731e45a-a981-4e78-9bbc-60a39375d370",question:"What is the difference between a handled and an unhandled exception?",answer:`\`\`\`markdown
### Difference Between a Handled and an Unhandled Exception in C#

In C#, **exceptions** are runtime errors that disrupt the normal flow of a program. How these exceptions are managed determines whether they are *handled* or *unhandled*.

#### Handled Exception

- **Definition:** An exception is *handled* when it is caught and processed by the program using a \`try-catch\` (or \`try-catch-finally\`) block.
- **Behavior:** The program can recover from the error, log it, display a user-friendly message, or take corrective action.
- **Example:**
  \`\`\`csharp
  try
  {
      int x = int.Parse("not a number");
  }
  catch (FormatException ex)
  {
      Console.WriteLine("Input was not in a correct format.");
  }
  \`\`\`
- **Outcome:** The application continues running after the exception is handled.

#### Unhandled Exception

- **Definition:** An exception is *unhandled* if it is not caught by any \`catch\` block in the call stack.
- **Behavior:** The exception propagates up the call stack. If it remains unhandled, the .NET runtime terminates the application and may display an error message.
- **Example:**
  \`\`\`csharp
  int x = int.Parse("not a number"); // No try-catch block
  \`\`\`
- **Outcome:** The application crashes, and the runtime may display a stack trace or error dialog.

#### Summary Table

| Aspect                | Handled Exception                | Unhandled Exception             |
|-----------------------|----------------------------------|---------------------------------|
| Caught by code?       | Yes (\`try-catch\`)                | No                              |
| Application continues?| Usually                          | No (application terminates)     |
| Error reporting       | Controlled (custom messages/log) | Default runtime error message   |
| Recovery possible?    | Yes                              | No (unless handled globally)    |

#### Best Practice

Always handle exceptions where recovery or meaningful error reporting is possible. For unhandled exceptions, consider using global handlers (e.g., \`AppDomain.UnhandledException\`) to log errors before termination.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.745705Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"497eb243-dd57-494d-b30a-66a8a0e4765e",question:"How can you globally handle unhandled exceptions in a C# application?",answer:`\`\`\`markdown
To globally handle unhandled exceptions in a C# application, you can subscribe to special events provided by the .NET runtime. This allows you to log, display, or otherwise process exceptions that are not caught elsewhere in your code.

### For Console Applications

Subscribe to the following events at the start of your application (e.g., in \`Main\`):

\`\`\`csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        AppDomain.CurrentDomain.UnhandledException += (sender, e) =>
        {
            Exception ex = (Exception)e.ExceptionObject;
            // Log or handle the exception
            Console.WriteLine($"Unhandled exception: {ex.Message}");
        };

        // Your application code here
    }
}
\`\`\`

### For Windows Forms Applications

Handle both \`AppDomain.CurrentDomain.UnhandledException\` and \`Application.ThreadException\`:

\`\`\`csharp
using System;
using System.Windows.Forms;

static class Program
{
    [STAThread]
    static void Main()
    {
        Application.ThreadException += (sender, e) =>
        {
            // Handle UI thread exceptions
            MessageBox.Show($"UI Thread exception: {e.Exception.Message}");
        };

        AppDomain.CurrentDomain.UnhandledException += (sender, e) =>
        {
            Exception ex = (Exception)e.ExceptionObject;
            // Handle non-UI thread exceptions
            MessageBox.Show($"Non-UI Thread exception: {ex.Message}");
        };

        Application.EnableVisualStyles();
        Application.SetCompatibleTextRenderingDefault(false);
        Application.Run(new MainForm());
    }
}
\`\`\`

### For WPF Applications

Handle \`AppDomain.CurrentDomain.UnhandledException\` and \`Application.DispatcherUnhandledException\`:

\`\`\`csharp
using System;
using System.Windows;

public partial class App : Application
{
    public App()
    {
        this.DispatcherUnhandledException += (sender, e) =>
        {
            // Handle UI thread exceptions
            MessageBox.Show($"UI Thread exception: {e.Exception.Message}");
            e.Handled = true;
        };

        AppDomain.CurrentDomain.UnhandledException += (sender, e) =>
        {
            Exception ex = (Exception)e.ExceptionObject;
            // Handle non-UI thread exceptions
            MessageBox.Show($"Non-UI Thread exception: {ex.Message}");
        };
    }
}
\`\`\`

### Notes

- These handlers should be set as early as possible in your application's lifecycle.
- Global exception handlers are a last resort; always use local try-catch blocks where possible.
- Unhandled exceptions may terminate the application, especially in .NET Core and later.
- For ASP.NET applications, use \`Application_Error\` in \`Global.asax\` or middleware for global exception handling.

**References:**
- [Microsoft Docs: Handling and Throwing Exceptions](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/)
- [AppDomain.UnhandledException Event](https://learn.microsoft.com/en-us/dotnet/api/system.appdomain.unhandledexception)
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.745720Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"0f4aa788-67d3-4741-956c-19e1393dc519",question:"What are fatal exceptions and how should they be handled?",answer:`\`\`\`markdown ### Fatal Exceptions in C# and Their Handling

**Fatal exceptions** are errors that occur during the execution of a program and indicate conditions from which the application cannot reasonably recover. These exceptions typically represent serious problems such as:

- Out of memory (\`OutOfMemoryException\`)
- Stack overflow (\`StackOverflowException\`)
- Access violations (\`AccessViolationException\`)
- Execution engine failures (\`ExecutionEngineException\`)

#### Characteristics of Fatal Exceptions

- **Unrecoverable:** The application state is likely corrupted, making it unsafe or impossible to continue execution.
- **Not Meant to be Caught:** Many fatal exceptions are not meant to be caught or handled in user code. For example, catching \`StackOverflowException\` or \`ExecutionEngineException\` is not possible in .NET Core and later versions.
- **Process Termination:** The .NET runtime will often terminate the process when a fatal exception occurs to prevent further damage or data corruption.

#### Handling Fatal Exceptions

**Best Practices:**

1. **Do Not Catch Fatal Exceptions:**  
   Avoid catching fatal exceptions in general \`catch\` blocks. Use specific exception types in your catch statements to prevent accidentally catching fatal exceptions.
   \`\`\`csharp
   try
   {
       // Code that may throw exceptions
   }
   catch (IOException ex)
   {
       // Handle IO exceptions
   }
   // Avoid: catch (Exception ex) { ... }
   \`\`\`

2. **Fail Fast:**  
   If a fatal exception is detected, allow the application to terminate. This prevents running in an unpredictable or corrupted state.

3. **Use AppDomain.UnhandledException:**  
   For logging or cleanup purposes, you can subscribe to the \`AppDomain.UnhandledException\` event. However, do not attempt to recover or continue execution from this event.
   \`\`\`csharp
   AppDomain.CurrentDomain.UnhandledException += (sender, e) =>
   {
       // Log the exception
       var ex = e.ExceptionObject as Exception;
       LogException(ex);
   };
   \`\`\`

4. **Design for Robustness:**  
   Write code defensively to minimize the chance of fatal exceptions (e.g., avoid unbounded recursion, manage memory usage carefully).

#### Summary Table

| Exception Type             | Can Be Caught? | Should Be Handled? | Typical Action         |
|---------------------------|:--------------:|:------------------:|-----------------------|
| \`OutOfMemoryException\`    | Yes*           | No                 | Log and terminate     |
| \`StackOverflowException\`  | No             | No                 | Process terminates    |
| \`AccessViolationException\`| Yes*           | No                 | Log and terminate     |
| \`ExecutionEngineException\`| No             | No                 | Process terminates    |

\\* In .NET Core and later, some exceptions cannot be caught even with try/catch.

---

**In summary:**  
Fatal exceptions indicate irrecoverable errors. The recommended approach is to let the application terminate, possibly logging the error for diagnostics, but never attempting to continue execution. Always write code to avoid these exceptions rather than trying to handle them.`,level:"Advanced",created_at:"2025-04-21T05:05:02.745734Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"7d72262b-0ec6-453f-92c5-8d2070de2691",question:"How does exception handling differ between synchronous and asynchronous code in C#?",answer:`\`\`\`markdown
### Exception Handling in Synchronous vs. Asynchronous Code in C#

#### Synchronous Code

In synchronous C# code, exception handling is straightforward:

- Exceptions are thrown immediately when an error occurs.
- They propagate up the call stack until caught by a \`catch\` block.
- Example:

    \`\`\`csharp
    try
    {
        // Code that may throw
        int result = 10 / int.Parse("0");
    }
    catch (DivideByZeroException ex)
    {
        Console.WriteLine("Caught: " + ex.Message);
    }
    \`\`\`

#### Asynchronous Code

In asynchronous code (using \`async\`/\`await\` and \`Task\`), exception handling has important differences:

- Exceptions thrown inside an \`async\` method are captured and stored in the returned \`Task\`.
- The exception is **not thrown immediately**; instead, it is re-thrown when the \`Task\` is awaited or its \`Result\`/\`Wait()\` is accessed.
- To handle exceptions, wrap the \`await\` expression in a \`try-catch\` block.

    \`\`\`csharp
    async Task<int> DivideAsync(int a, int b)
    {
        return await Task.Run(() => a / b);
    }

    async Task CallDivideAsync()
    {
        try
        {
            int result = await DivideAsync(10, 0);
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine("Caught async: " + ex.Message);
        }
    }
    \`\`\`

- If you **do not await** the task (fire-and-forget), unhandled exceptions may go unnoticed or be observed by the runtime's unobserved exception handler.

#### Key Differences

| Aspect                | Synchronous Code                         | Asynchronous Code (\`async\`/\`await\`)           |
|-----------------------|------------------------------------------|-----------------------------------------------|
| Exception propagation | Immediate, up the call stack             | Stored in \`Task\`; re-thrown on \`await\`        |
| Handling location     | Where the exception is thrown            | Where the \`Task\` is awaited                   |
| Fire-and-forget       | N/A                                      | Exceptions may be unobserved                  |
| AggregateException    | Rarely seen                              | Multiple exceptions can be aggregated in \`Task\`|

#### Summary

- **Synchronous:** Exceptions are thrown and caught immediately.
- **Asynchronous:** Exceptions are captured in the \`Task\` and must be handled when the \`Task\` is awaited or its result is accessed.
- Always use \`try-catch\` around \`await\` to handle exceptions in asynchronous code.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.745750Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"366896ea-49b8-4dbd-911b-307a93abfa20",question:"What is the role of the AppDomain.UnhandledException event?",answer:`\`\`\`markdown
The \`AppDomain.UnhandledException\` event in C# plays a crucial role in error handling at the application domain level. It is triggered when an exception is thrown in any thread within the application domain and is not caught by any \`try-catch\` block.

**Key Points:**

- **Purpose:** It provides a last-chance notification mechanism for unhandled exceptions before the application terminates.
- **Scope:** The event is raised for exceptions that are not handled anywhere else in the code, regardless of the thread in which they occur.
- **Usage:** You can subscribe to this event to log error details, perform cleanup, or notify users before the process exits.
- **Limitation:** Handling this event does **not** prevent the application from terminating. It is primarily for logging or final actions.

**Example:**

\`\`\`csharp
AppDomain.CurrentDomain.UnhandledException += (sender, e) =>
{
    Exception ex = (Exception)e.ExceptionObject;
    Console.WriteLine($"Unhandled exception: {ex.Message}");
    // Perform logging or cleanup here
};
\`\`\`

**Important Notes:**

- The process will still terminate after this event is raised.
- Not all exceptions will trigger this event (e.g., exceptions in background threads may behave differently depending on the .NET version).
- Use this event as a safety net, not as a primary error handling mechanism.

**References:**
- [Microsoft Docs: AppDomain.UnhandledException Event](https://learn.microsoft.com/en-us/dotnet/api/system.appdomain.unhandledexception)
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.745764Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"aa2abcb6-1e5e-4d2f-acbb-59059d568939",question:"How can you prevent exception swallowing in C#?",answer:`\`\`\`markdown To prevent exception swallowing in C#, you should avoid catching exceptions without proper handling or rethrowing. Exception swallowing occurs when an exception is caught but not acted upon, which can obscure bugs and make debugging difficult.

**Best Practices to Prevent Exception Swallowing:**

1. **Avoid Empty Catch Blocks**
   \`\`\`csharp
   try
   {
       // Some code that may throw
   }
   catch (Exception)
   {
       // BAD: Swallows the exception
   }
   \`\`\`

2. **Log Exceptions**
   Always log exceptions if you catch them, so you have a record of what went wrong.
   \`\`\`csharp
   try
   {
       // Some code
   }
   catch (Exception ex)
   {
       // Log the exception
       logger.LogError(ex, "An error occurred");
       throw; // Rethrow to preserve stack trace
   }
   \`\`\`

3. **Rethrow Exceptions Properly**
   Use \`throw;\` (not \`throw ex;\`) to preserve the original stack trace.
   \`\`\`csharp
   catch (Exception ex)
   {
       // Optionally log
       throw; // Preserves stack trace
   }
   \`\`\`

4. **Catch Specific Exceptions**
   Only catch exceptions you can handle meaningfully.
   \`\`\`csharp
   try
   {
       // Some code
   }
   catch (FileNotFoundException ex)
   {
       // Handle file not found
   }
   \`\`\`

5. **Avoid Catching System.Exception Unnecessarily**
   Catching all exceptions can hide critical errors (like \`OutOfMemoryException\`).

**Summary Table**

| Practice                       | Prevents Swallowing? | Preserves Info? |
|------------------------------- |:-------------------:|:---------------:|
| Empty catch block              | ❌                  | ❌              |
| Logging and rethrowing         | ✅                  | ✅              |
| Catching specific exceptions   | ✅                  | ✅              |
| Using \`throw;\` (not \`throw ex;\`)| ✅                  | ✅              |

**Conclusion**

Prevent exception swallowing by handling exceptions appropriately: log them, rethrow if you can't handle, and always catch the most specific exception types possible. This ensures errors are visible and debuggable.`,level:"Advanced",created_at:"2025-04-21T05:05:02.745777Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"af2ddab5-f8bb-4aa4-92fe-23a5701e9819",question:"What are best practices for designing custom exceptions in C#?",answer:`\`\`\`markdown
### Best Practices for Designing Custom Exceptions in C#

When designing custom exceptions in C#, follow these best practices to ensure clarity, maintainability, and consistency:

1. **Inherit from the Appropriate Base Class**
   - Derive custom exceptions from \`System.Exception\` or a more specific subclass like \`ApplicationException\` (rarely used) or \`ArgumentException\` if applicable.
   - Avoid inheriting from \`System.SystemException\` or \`System.Exception\` directly unless necessary.

2. **Use the "Exception" Suffix**
   - Name your custom exception classes with the "Exception" suffix for clarity (e.g., \`InvalidOrderException\`).

3. **Implement Standard Constructors**
   - Provide the following constructors:
     - Parameterless constructor
     - Constructor with a \`string\` message
     - Constructor with a \`string\` message and an \`Exception\` inner exception
     - Protected constructor for serialization

   \`\`\`csharp
   public class InvalidOrderException : Exception
   {
       public InvalidOrderException() { }
       public InvalidOrderException(string message) : base(message) { }
       public InvalidOrderException(string message, Exception inner) : base(message, inner) { }
       protected InvalidOrderException(
         System.Runtime.Serialization.SerializationInfo info,
         System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
   }
   \`\`\`

4. **Be Specific and Document Usage**
   - Create custom exceptions only for exceptional conditions specific to your domain or application logic.
   - Document when and why the exception should be thrown.

5. **Support Serialization**
   - Mark the class with \`[Serializable]\` and implement the protected serialization constructor if your exception may be serialized (e.g., in distributed applications).

   \`\`\`csharp
   [Serializable]
   public class InvalidOrderException : Exception
   {
       // Constructors as above
   }
   \`\`\`

6. **Avoid Overusing Custom Exceptions**
   - Prefer using built-in exceptions (e.g., \`ArgumentNullException\`, \`InvalidOperationException\`) when they accurately describe the error condition.

7. **Do Not Catch General Exceptions**
   - Avoid catching \`Exception\` unless you have a compelling reason; catch specific exceptions instead.

8. **Include Relevant Data**
   - If needed, add properties to provide additional context (e.g., an order ID in \`InvalidOrderException\`).

   \`\`\`csharp
   public int OrderId { get; }
   public InvalidOrderException(string message, int orderId) : base(message)
   {
       OrderId = orderId;
   }
   \`\`\`

9. **Keep Exceptions Lightweight**
   - Avoid heavy logic or resource allocation in exception constructors.

10. **Document Exception Throwing**
    - Clearly document which methods may throw your custom exception and under what circumstances.

---

**References:**
- [Microsoft Docs: Best Practices for Exceptions](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/best-practices-for-exceptions)
- [Microsoft Docs: Creating and Throwing Exceptions](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/how-to-create-user-defined-exceptions)
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.745791Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"43da92a1-1560-4676-9988-ae8425a3530f",question:"How does exception handling impact performance in C#?",answer:`\`\`\`markdown Exception handling in C#—using try, catch, and finally blocks—has a measurable impact on performance, but the effect depends on how exceptions are used:

- **Normal Execution (No Exception Thrown):**
  - The presence of try/catch blocks incurs minimal overhead. The JIT compiler optimizes for the common case where no exception is thrown, so wrapping code in try blocks is generally inexpensive.
  - However, excessive or deeply nested try/catch blocks can slightly increase code size and affect inlining, which may have a minor impact on performance.

- **When an Exception is Thrown:**
  - Throwing and catching exceptions is **expensive**. The runtime must:
    - Capture the current stack trace.
    - Unwind the call stack to find a matching catch block.
    - Allocate and initialize the exception object.
  - This process is significantly slower than regular control flow—often by orders of magnitude.

- **Best Practices:**
  - **Do not use exceptions for normal control flow.** Exceptions should signal truly exceptional or error conditions.
  - Use return codes or other mechanisms for expected conditions (e.g., parsing failures).
  - Minimize the scope of try blocks to only the code that may throw.

**Summary Table:**

| Scenario                        | Performance Impact      |
|----------------------------------|------------------------|
| try/catch, no exception thrown   | Minimal                |
| Exception thrown and caught      | Significant overhead   |
| Frequent exception usage         | Severe performance hit |

**References:**
- [Microsoft Docs: Best Practices for Exceptions](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/best-practices-for-exceptions)
- [Eric Lippert: Vexing Exceptions](https://ericlippert.com/2008/09/10/vexing-exceptions/)

**In short:**  
Exception handling is efficient when exceptions are rare, but throwing and catching exceptions is slow. Design your code to avoid exceptions in performance-critical paths.`,level:"Advanced",created_at:"2025-04-21T05:05:02.745803Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"21d8f857-d7d3-4632-8678-945f3542a7ad",question:"What is the difference between exceptions and errors in C#?",answer:`\`\`\`markdown
In C#, **exceptions** and **errors** are often used interchangeably in casual conversation, but they have distinct meanings:

### Exceptions
- **Definition:** Exceptions are objects that represent runtime issues or unexpected situations that a program can handle.
- **Handling:** They can be caught and managed using \`try\`, \`catch\`, and \`finally\` blocks.
- **Examples:** \`NullReferenceException\`, \`IndexOutOfRangeException\`, \`FileNotFoundException\`.
- **Purpose:** Allow the program to recover or gracefully handle problems without crashing.

### Errors
- **Definition:** In C#, the term "error" is less formal. It generally refers to serious problems that are often outside the control of the program.
- **Handling:** Errors are typically not meant to be caught or handled by the application. They may represent issues like hardware failure or corrupted memory.
- **Examples:** Stack overflow, out of memory, or fatal system errors.
- **Purpose:** Indicate critical issues that usually require the program to terminate.

> **Summary:**  
> - **Exceptions** are recoverable and can be handled in code.
> - **Errors** are usually unrecoverable and indicate serious problems.

Most of the time in C#, you work with **exceptions** for error handling.
\`\`\``,level:"Beginner",created_at:"2025-04-21T05:05:02.745815Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"5b6ff4c4-74c3-4e12-bc4f-64559c534cf5",question:"How can you catch all exceptions in a try block?",answer:`\`\`\`markdown You can catch all exceptions in a try block by using a catch block that catches the base Exception type. Here’s an example:

\`\`\`csharp
try
{
    // Code that may throw an exception
}
catch (Exception ex)
{
    // Handle any exception
    Console.WriteLine("An error occurred: " + ex.Message);
}
\`\`\`

**Note:**  
Catching all exceptions can be useful for logging or displaying a generic error message, but it’s generally better to catch specific exceptions when possible to handle different error cases appropriately.`,level:"Beginner",created_at:"2025-04-21T05:05:02.745827Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"43352906-bf72-4210-b950-fae00e2bea48",question:"What is a NullReferenceException and how can it be avoided?",answer:'```markdown A **NullReferenceException** in C# occurs when you try to access a member (such as a method or property) on an object that is `null`. In other words, your code is trying to use an object that hasn\'t been initialized.\n\n### Example\n\n```csharp\nstring message = null;\nint length = message.Length; // This line throws NullReferenceException\n```\n\n### How to Avoid NullReferenceException\n\n1. **Check for null before accessing members:**\n\n   ```csharp\n   if (message != null)\n   {\n       int length = message.Length;\n   }\n   ```\n\n2. **Use the null-conditional operator (`?.`):**\n\n   ```csharp\n   int? length = message?.Length; // Returns null if message is null\n   ```\n\n3. **Initialize objects before use:**\n\n   ```csharp\n   string message = "";\n   int length = message.Length; // Safe, message is not null\n   ```\n\n4. **Use nullable value types and null-coalescing operator (`??`):**\n\n   ```csharp\n   int length = message?.Length ?? 0; // Returns 0 if message is null\n   ```\n\n### Summary\n\nA `NullReferenceException` happens when you try to use an object that is `null`. Always check for `null` or use safe navigation operators to prevent this error.',level:"Beginner",created_at:"2025-04-21T05:05:02.745841Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"cb20544c-82b2-42a4-b273-263dc185466f",question:"What is the purpose of the using statement in resource management?",answer:`\`\`\`markdown The using statement in C# is used for resource management, specifically to ensure that unmanaged resources (like file handles, database connections, or network streams) are properly released when they are no longer needed. It provides a convenient syntax that automatically calls the Dispose() method on objects that implement the IDisposable interface, even if an exception occurs.

**Purpose of the using statement:**

- **Automatic Resource Cleanup:** It ensures that resources are released as soon as the code block is exited.
- **Exception Safety:** Resources are disposed of even if an exception is thrown within the using block.
- **Cleaner Code:** It reduces boilerplate code by eliminating the need to explicitly call Dispose() in a finally block.

**Example:**

\`\`\`csharp
using (var file = new StreamReader("example.txt"))
{
    string content = file.ReadToEnd();
    // file is automatically closed and disposed at the end of this block
}
\`\`\`

In this example, the StreamReader object is disposed of automatically when the using block ends, ensuring that the file handle is released properly.`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745855Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"7e009bce-f389-408d-86c3-f24398bcb501",question:"How can you handle exceptions in LINQ queries?",answer:`\`\`\`markdown
In C#, exceptions in LINQ queries can occur during query execution, especially with deferred execution (e.g., when using \`IEnumerable<T>\`). To handle exceptions in LINQ queries:

1. **Wrap the query execution in a try-catch block:**  
   Since LINQ queries are often lazily evaluated, exceptions are thrown when you enumerate the results (e.g., with \`foreach\`, \`ToList()\`, etc.), not when you define the query.

   \`\`\`csharp
   try
   {
       var numbers = new List<int> { 1, 2, 0, 4 };
       var results = numbers.Select(n => 10 / n);

       foreach (var result in results)
       {
           Console.WriteLine(result);
       }
   }
   catch (DivideByZeroException ex)
   {
       Console.WriteLine($"Exception caught: {ex.Message}");
   }
   \`\`\`

2. **Handle exceptions within the query using helper methods:**  
   You can use a helper method inside your query to catch and handle exceptions for each element.

   \`\`\`csharp
   var numbers = new List<int> { 1, 2, 0, 4 };
   var results = numbers.Select(n => SafeDivide(10, n));

   foreach (var result in results)
   {
       Console.WriteLine(result);
   }

   int SafeDivide(int numerator, int denominator)
   {
       try
       {
           return numerator / denominator;
       }
       catch (DivideByZeroException)
       {
           return 0; // or any default/error value
       }
   }
   \`\`\`

**Summary:**  
- Use a try-catch block around the enumeration of the LINQ query.
- Alternatively, handle exceptions for each element within the query using helper methods.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745868Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"a5d26531-2c48-4e8d-a387-edbcb544c784",question:"What is the difference between a checked exception and an unchecked exception in C#?",answer:`\`\`\`markdown
In C#, the terms **checked exception** and **unchecked exception** are not formally used as they are in languages like Java. However, you can understand the difference as follows:

### Unchecked Exceptions
- In C#, **all exceptions are unchecked**.
- This means the compiler does **not require** methods to declare the exceptions they might throw, nor does it force callers to handle them.
- Most exceptions in C# (such as \`NullReferenceException\`, \`IndexOutOfRangeException\`, etc.) are derived from the \`System.Exception\` class.
- You can choose to handle exceptions using \`try-catch\` blocks, but it's not enforced by the compiler.

### Checked Exceptions (Not in C#)
- In languages like Java, **checked exceptions** are exceptions that must be either caught or declared in the method signature.
- C# **does not support checked exceptions**; there is no mechanism to enforce exception handling at compile time.

### Summary Table

| Language Feature      | C# Support | Java Support |
|----------------------|:----------:|:------------:|
| Checked Exceptions   | No         | Yes          |
| Unchecked Exceptions | Yes        | Yes          |

### Example

\`\`\`csharp
public void MyMethod()
{
    // This might throw an exception, but the compiler does not enforce handling it
    int x = int.Parse("not a number");
}
\`\`\`

In the above example, if an exception occurs, it's up to the developer to handle it. The compiler does not require any exception handling.

---

**In summary:**  
C# only has unchecked exceptions; it does not have checked exceptions like Java. Exception handling in C# is optional and not enforced by the compiler.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745881Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"b5590e47-9261-4db6-bfdf-ee25beeace69",question:"How can you handle exceptions in event handlers?",answer:`\`\`\`markdown
In C#, exceptions in event handlers can be handled using try-catch blocks within the event handler method itself. This ensures that any exceptions thrown during the execution of the handler are caught and managed, preventing them from propagating up the call stack and potentially crashing the application.

**Example:**

\`\`\`csharp
private void Button_Click(object sender, EventArgs e)
{
    try
    {
        // Code that may throw an exception
        int result = 10 / int.Parse("0");
    }
    catch (DivideByZeroException ex)
    {
        MessageBox.Show("Cannot divide by zero!");
    }
    catch (Exception ex)
    {
        // Handle other exceptions
        MessageBox.Show("An error occurred: " + ex.Message);
    }
}
\`\`\`

**Best Practices:**
- Always use specific exception types when possible.
- Avoid catching \`Exception\` unless necessary.
- Log exceptions for debugging and maintenance.
- Provide user-friendly error messages.

**Note:** If an exception is not handled within the event handler, it may terminate the application, especially in WinForms or WPF applications.
\`\`\``,level:"Intermediate",created_at:"2025-04-21T05:05:02.745892Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"36bbd0fc-6f36-4b4d-b6bf-113e5d696dc4",question:"What is the role of the Exception.Data property?",answer:`\`\`\`markdown The Exception.Data property in C# provides a key-value collection (specifically, an IDictionary) that allows you to attach additional, user-defined information to an exception object. This can be useful for supplying extra context about the error, such as variable values, operation details, or custom error codes, which can assist in debugging and logging.

**Example:**

\`\`\`csharp
try
{
    // Some code that may throw an exception
    throw new InvalidOperationException("Something went wrong!");
}
catch (InvalidOperationException ex)
{
    ex.Data["OperationID"] = 1234;
    ex.Data["Timestamp"] = DateTime.Now;
    Console.WriteLine($"Error: {ex.Message}");
    foreach (var key in ex.Data.Keys)
    {
        Console.WriteLine($"{key}: {ex.Data[key]}");
    }
}
\`\`\`

**Key Points:**

- Exception.Data is an IDictionary (key-value pairs).
- It is empty by default; you can add custom data as needed.
- Useful for passing additional context with exceptions.
- The data persists with the exception object and can be accessed wherever the exception is caught.

**Summary:**  
Exception.Data enables you to enrich exceptions with custom information, making error handling and diagnostics more effective.`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745904Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"980fb370-784a-433b-9f80-886e54cced01",question:"How do you handle exceptions in constructors and destructors?",answer:`\`\`\`markdown
### Handling Exceptions in Constructors and Destructors in C#

#### Constructors

- **Catching Exceptions:**  
  You can catch and handle exceptions within a constructor using a \`try-catch\` block. If an exception is not caught, it will propagate up the call stack, and the object will not be constructed.
- **Best Practices:**  
  - Avoid letting exceptions escape from constructors unless absolutely necessary.
  - If an exception occurs, ensure that any resources allocated before the exception are properly released.

**Example:**
\`\`\`csharp
public class MyClass
{
    public MyClass()
    {
        try
        {
            // Code that may throw an exception
        }
        catch (Exception ex)
        {
            // Handle or log the exception
            // Optionally, rethrow if you want to propagate
            throw new InvalidOperationException("Error in constructor", ex);
        }
    }
}
\`\`\`

#### Destructors (Finalizers)

- **Catching Exceptions:**  
  Exceptions thrown in destructors (finalizers) are **not** catchable by user code. If an exception is thrown and not handled within the destructor, the process may terminate or the exception will be ignored (in .NET Framework, it terminates the process; in .NET Core and later, it's ignored).
- **Best Practices:**  
  - Always wrap the finalizer code in a \`try-catch\` block.
  - Never let exceptions escape a destructor.
  - Log exceptions if necessary, but do not throw.

**Example:**
\`\`\`csharp
public class MyClass
{
    ~MyClass()
    {
        try
        {
            // Cleanup code that may throw
        }
        catch (Exception ex)
        {
            // Log the exception, but do not throw
            // e.g., Logger.Log(ex);
        }
    }
}
\`\`\`

#### Summary Table

| Context      | Can Catch Exceptions? | Best Practice                        |
|--------------|----------------------|--------------------------------------|
| Constructor  | Yes                  | Catch, handle, or rethrow as needed  |
| Destructor   | No (must handle)     | Catch and suppress/log exceptions    |

**References:**
- [Microsoft Docs: Exception Handling (C#)](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/)
- [Microsoft Docs: Finalizers (Destructors)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/destructors)
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.745917Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"6de2df84-395b-4744-8c9a-3d6f884b83ff",question:"How can you implement retry logic for transient errors?",answer:`\`\`\`markdown
To implement retry logic for transient errors in C#, you can use a loop or recursion to attempt the operation multiple times, catching exceptions that indicate transient failures (such as network timeouts). You can also introduce a delay (optionally with exponential backoff) between retries. For more robust solutions, you might use libraries like [Polly](https://github.com/App-vNext/Polly).

### Example: Manual Retry Logic with Exponential Backoff

\`\`\`csharp
int maxRetries = 5;
int delay = 1000; // Initial delay in milliseconds

for (int attempt = 1; attempt <= maxRetries; attempt++)
{
    try
    {
        // Attempt the operation
        PerformOperation();
        break; // Success, exit the loop
    }
    catch (TransientException ex) // Replace with your specific transient exception
    {
        if (attempt == maxRetries)
        {
            // Rethrow if max retries reached
            throw;
        }
        // Wait before retrying (exponential backoff)
        Thread.Sleep(delay);
        delay *= 2;
    }
}
\`\`\`

### Example: Using Polly Library

Polly is a popular .NET library for resilience and transient-fault handling.

\`\`\`csharp
using Polly;
using Polly.Retry;

var retryPolicy = Policy
    .Handle<TransientException>() // Replace with your transient exception
    .WaitAndRetry(
        retryCount: 5,
        sleepDurationProvider: attempt => TimeSpan.FromSeconds(Math.Pow(2, attempt))
    );

retryPolicy.Execute(() =>
{
    PerformOperation();
});
\`\`\`

### Key Points

- **Identify transient errors:** Only retry on exceptions that are likely to be resolved by retrying.
- **Limit retries:** Set a maximum number of attempts to avoid infinite loops.
- **Backoff strategy:** Use delays between retries, preferably with exponential backoff.
- **Use libraries:** Consider Polly for more advanced scenarios (circuit breakers, fallback, etc.).

**References:**
- [Polly Documentation](https://github.com/App-vNext/Polly)
- [Microsoft Docs: Transient Fault Handling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/transient-faults)
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.745930Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"5339c662-08c6-4460-bfb2-052ebad1e4cb",question:"What is the difference between catching Exception and catching specific exception types?",answer:`\`\`\`markdown When handling errors in C#, you can catch exceptions in two main ways: by catching the base Exception type or by catching specific exception types. Here’s the difference:

## Catching \`Exception\`

\`\`\`csharp
try
{
    // Code that may throw an exception
}
catch (Exception ex)
{
    // Handles any exception derived from System.Exception
}
\`\`\`

- **Catches all exceptions**: This block will catch any exception that inherits from \`System.Exception\`, including both expected and unexpected errors.
- **Less precise**: It can make debugging harder because you might inadvertently catch exceptions you didn’t anticipate, potentially hiding bugs.
- **Not recommended for most cases**: Catching all exceptions can mask programming errors (like \`NullReferenceException\` or \`OutOfMemoryException\`) that should usually be allowed to crash the program or be handled differently.

## Catching Specific Exception Types

\`\`\`csharp
try
{
    // Code that may throw an exception
}
catch (FileNotFoundException ex)
{
    // Handles only FileNotFoundException
}
catch (IOException ex)
{
    // Handles other IO exceptions
}
\`\`\`

- **Catches only specified exceptions**: Each catch block handles a particular exception type, allowing for tailored error handling.
- **More precise and safer**: You can provide appropriate responses for different error conditions and avoid swallowing unexpected exceptions.
- **Best practice**: It’s generally better to catch only the exceptions you expect and know how to handle.

## Summary Table

| Approach                | Scope                     | Use Case                        | Risk                        |
|-------------------------|---------------------------|----------------------------------|-----------------------------|
| \`catch (Exception ex)\`  | All exceptions            | Last-resort, logging, fallback   | May hide bugs, less control |
| \`catch (SpecificType)\`  | Specific exception types  | Expected/known error conditions  | More robust, safer          |

**In summary:**  
Catching specific exception types is preferred because it allows for more controlled and meaningful error handling, while catching \`Exception\` is broader and riskier, and should be reserved for scenarios where you need to handle any error in a generic way (such as logging unhandled exceptions).`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745947Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"5483a3de-c248-4c05-b27a-9c9e08534c1d",question:"How can you test exception handling in unit tests?",answer:`\`\`\`markdown To test exception handling in C# unit tests, you typically use the testing framework’s features to assert that a specific exception is thrown under certain conditions. Here’s how you can do it using **xUnit**, **NUnit**, and **MSTest**:

---

### xUnit Example

\`\`\`csharp
using Xunit;

public class CalculatorTests
{
    [Fact]
    public void Divide_ByZero_ThrowsDivideByZeroException()
    {
        var calculator = new Calculator();

        Assert.Throws<DivideByZeroException>(() => calculator.Divide(10, 0));
    }
}
\`\`\`

---

### NUnit Example

\`\`\`csharp
using NUnit.Framework;

public class CalculatorTests
{
    [Test]
    public void Divide_ByZero_ThrowsDivideByZeroException()
    {
        var calculator = new Calculator();

        Assert.Throws<DivideByZeroException>(() => calculator.Divide(10, 0));
    }
}
\`\`\`

---

### MSTest Example

\`\`\`csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class CalculatorTests
{
    [TestMethod]
    [ExpectedException(typeof(DivideByZeroException))]
    public void Divide_ByZero_ThrowsDivideByZeroException()
    {
        var calculator = new Calculator();
        calculator.Divide(10, 0);
    }
}
\`\`\`

---

## Key Points

- Use \`Assert.Throws<TException>\` (xUnit/NUnit) or \`[ExpectedException]\` (MSTest) to verify exceptions.
- You can also capture the exception and assert on its properties if needed:

    \`\`\`csharp
    var ex = Assert.Throws<DivideByZeroException>(() => calculator.Divide(10, 0));
    Assert.Equal("Attempted to divide by zero.", ex.Message);
    \`\`\`

- This ensures your code handles errors as expected and improves reliability.

---

**Summary:**  
Testing exception handling in unit tests involves asserting that the correct exception is thrown for invalid operations, using the features provided by your test framework.`,level:"Intermediate",created_at:"2025-04-21T05:05:02.745959Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"fa317af7-da6a-4fee-b951-ab6b22b1ced6",question:"What is the purpose of the FaultException class in WCF?",answer:`\`\`\`markdown
The \`FaultException\` class in Windows Communication Foundation (WCF) is used to handle and communicate errors between a WCF service and its clients in a controlled and interoperable manner. Unlike standard .NET exceptions, which may not serialize well across service boundaries, \`FaultException\` allows services to send SOAP faults that can be understood by clients regardless of their platform.

**Purpose of FaultException in WCF:**

- **Standardized Error Communication:** It enables WCF services to return detailed error information to clients using SOAP fault messages, rather than unhandled exceptions that could reveal sensitive information or cause interoperability issues.
- **Custom Faults:** By using the generic \`FaultException<TDetail>\`, developers can define and send custom error details (data contracts) to clients, allowing for rich error information while maintaining strong typing.
- **Graceful Error Handling:** Clients can catch \`FaultException\` and handle specific service errors gracefully, improving robustness and user experience.
- **Security:** It helps prevent leaking internal exception details to clients, as only the information included in the fault contract is sent.

**Example:**

\`\`\`csharp
// Define a fault contract
[DataContract]
public class MyCustomFault
{
    [DataMember]
    public string ErrorMessage { get; set; }
}

// Service operation with FaultContract
[OperationContract]
[FaultContract(typeof(MyCustomFault))]
void MyServiceOperation();

// Throwing a FaultException in the service
throw new FaultException<MyCustomFault>(
    new MyCustomFault { ErrorMessage = "A specific error occurred." },
    new FaultReason("Custom error")
);
\`\`\`

**Summary:**  
\`FaultException\` is essential in WCF for robust, interoperable, and secure error handling, allowing services to communicate faults to clients in a standardized way.
\`\`\``,level:"Advanced",created_at:"2025-04-21T05:05:02.745971Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"bc395aeb-7893-4dc6-bf01-66ef67c584d2",question:"How can you handle exceptions in ASP.NET Core applications?",answer:`\`\`\`markdown
In ASP.NET Core applications, exception handling is crucial for building robust and user-friendly web applications. Here are advanced techniques for handling exceptions:

### 1. **Middleware for Global Exception Handling**

ASP.NET Core provides middleware to catch unhandled exceptions globally. The most common approach is to use the built-in \`UseExceptionHandler\` middleware in \`Startup.cs\`:

\`\`\`csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/Home/Error"); // Redirects to Error action
        app.UseHsts();
    }
    // Other middleware...
}
\`\`\`

You can also configure a custom exception handling lambda:

\`\`\`csharp
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";
        var errorFeature = context.Features.Get<IExceptionHandlerFeature>();
        if (errorFeature != null)
        {
            var ex = errorFeature.Error;
            // Log the exception, etc.
            await context.Response.WriteAsync(new
            {
                error = ex.Message
            }.ToString());
        }
    });
});
\`\`\`

### 2. **Exception Filters**

For more granular control, you can use exception filters at the controller or action level:

\`\`\`csharp
public class CustomExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        // Log exception, set result, etc.
        context.Result = new ObjectResult("An error occurred")
        {
            StatusCode = 500
        };
        context.ExceptionHandled = true;
    }
}

// Register globally in Startup.cs
services.AddControllers(options =>
{
    options.Filters.Add<CustomExceptionFilter>();
});
\`\`\`

### 3. **Try-Catch Blocks**

For specific code sections, use traditional try-catch blocks:

\`\`\`csharp
public IActionResult MyAction()
{
    try
    {
        // Code that may throw
    }
    catch (SpecificException ex)
    {
        // Handle specific exception
        return BadRequest("Specific error occurred");
    }
    catch (Exception ex)
    {
        // Handle general exceptions
        return StatusCode(500, "An error occurred");
    }
}
\`\`\`

### 4. **Logging Exceptions**

Always log exceptions for diagnostics. Use built-in logging:

\`\`\`csharp
private readonly ILogger<HomeController> _logger;

public HomeController(ILogger<HomeController> logger)
{
    _logger = logger;
}

public IActionResult Index()
{
    try
    {
        // ...
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "An error occurred in Index");
        throw; // Optionally rethrow
    }
}
\`\`\`

### 5. **Problem Details for HTTP APIs**

For APIs, use standardized error responses:

\`\`\`csharp
app.UseExceptionHandler(appBuilder =>
{
    appBuilder.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/problem+json";
        var error = context.Features.Get<IExceptionHandlerFeature>()?.Error;
        var problem = new ProblemDetails
        {
            Status = 500,
            Title = "An error occurred",
            Detail = error?.Message
        };
        await context.Response.WriteAsJsonAsync(problem);
    });
});
\`\`\`

---

**Summary:**  
Handle exceptions in ASP.NET Core using global middleware, exception filters, try-catch blocks, and proper logging. For APIs, return standardized error responses using \`ProblemDetails\`. This ensures your application is robust, secure, and provides meaningful feedback to users and developers.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.745982Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"4999ecdb-db39-46c4-bc4c-e36233841b76",question:"How do you propagate exceptions across application domains?",answer:`\`\`\`markdown
### Propagating Exceptions Across Application Domains in C#

In .NET, **application domains** (AppDomains) provide isolation between executing applications. When you execute code in another AppDomain (for example, using \`AppDomain.DoCallBack\` or \`AppDomain.CreateInstanceAndUnwrap\`), exceptions that occur in the remote domain can be propagated back to the calling domain, but with some important considerations:

#### 1. Exception Serialization

- **Exceptions must be serializable** to cross AppDomain boundaries. Most built-in exceptions in .NET are serializable (they have the \`[Serializable]\` attribute).
- If you throw a custom exception, ensure it is marked with \`[Serializable]\` and implements the serialization constructor.

#### 2. How Exceptions Are Propagated

- When an exception is thrown in a remote AppDomain, the .NET runtime serializes the exception object and sends it to the calling AppDomain.
- The calling AppDomain receives a deserialized copy of the exception and can catch it as usual.

#### 3. Example

\`\`\`csharp
using System;
using System.Runtime.Serialization;

[Serializable]
public class MyCustomException : Exception
{
    public MyCustomException(string message) : base(message) { }
    protected MyCustomException(SerializationInfo info, StreamingContext context)
        : base(info, context) { }
}

public class Worker : MarshalByRefObject
{
    public void DoWork()
    {
        throw new MyCustomException("Something went wrong in the other AppDomain!");
    }
}

class Program
{
    static void Main()
    {
        AppDomain domain = AppDomain.CreateDomain("NewDomain");
        try
        {
            var worker = (Worker)domain.CreateInstanceAndUnwrap(
                typeof(Worker).Assembly.FullName,
                typeof(Worker).FullName);
            worker.DoWork();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Caught exception: {ex.GetType().Name} - {ex.Message}");
        }
        finally
        {
            AppDomain.Unload(domain);
        }
    }
}
\`\`\`

#### 4. Important Notes

- **Stack Trace:** The stack trace in the exception will reflect the remote AppDomain, not the calling domain.
- **Type Fidelity:** If the exception type is not available in the calling AppDomain, a \`SerializationException\` or a generic \`Exception\` may be thrown instead.
- **AppDomain Boundaries:** Exception propagation only works if the exception is serializable and both domains can resolve the exception type.

#### 5. Best Practices

- Always make custom exceptions serializable.
- Avoid passing non-serializable objects in exception properties.
- Handle exceptions at the AppDomain boundary to avoid losing information.

**References:**
- [MSDN: Handling and Propagating Exceptions Across AppDomain Boundaries](https://learn.microsoft.com/en-us/dotnet/framework/app-domains/handling-and-propagating-exceptions)
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.745996Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"396be438-3e8e-47fc-8f64-ab215551d987",question:"What are the limitations of exception handling in C#?",answer:`\`\`\`markdown
### Limitations of Exception Handling in C#

Exception handling in C# is a powerful mechanism, but it has several limitations and caveats that developers should be aware of:

1. **Performance Overhead**  
   Throwing and catching exceptions is computationally expensive. Overusing exceptions, especially for control flow, can significantly degrade performance.

2. **Not All Errors are Exceptions**  
   Some errors, such as stack overflows, out-of-memory conditions, or hardware failures, may not be catchable using standard exception handling mechanisms.

3. **Resource Leaks**  
   If resources (like file handles or database connections) are not properly released (e.g., by forgetting to use \`finally\` or \`using\`), exceptions can lead to resource leaks.

4. **Exception Swallowing**  
   Catch blocks that are too broad (e.g., \`catch (Exception)\`) can inadvertently hide bugs by swallowing exceptions, making debugging difficult.

5. **Loss of Context**  
   Rethrowing exceptions incorrectly (e.g., using \`throw ex;\` instead of \`throw;\`) can lose the original stack trace, making it harder to diagnose issues.

6. **Unhandled Exceptions**  
   If exceptions are not properly handled, they can crash the application. In multi-threaded applications, unhandled exceptions in threads can be particularly problematic.

7. **Non-deterministic Behavior**  
   Exceptions can make program flow harder to reason about, especially in complex systems, leading to unpredictable behavior if not managed carefully.

8. **Limited to Managed Code**  
   Exception handling in C# works only within managed code. Unmanaged code (e.g., native DLLs) may not propagate exceptions in a way that C# can handle.

9. **Exception Filters are Limited**  
   While C# supports exception filters (\`catch (Exception ex) when (...)\`), their use is limited compared to some other languages, and they can't always express complex filtering logic.

10. **No Compile-Time Checking**  
    Unlike some languages (e.g., Java with checked exceptions), C# does not enforce exception handling at compile time, which can lead to unhandled exceptions at runtime.

### Summary

While exception handling is essential for robust applications, it should be used judiciously and with an understanding of its limitations. Proper design, resource management, and error handling strategies are necessary to avoid common pitfalls.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:05:02.746007Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"4097c291-562e-41e0-9c6b-d72274e97918",question:"How can you use exception handling to implement graceful degradation?",answer:`\`\`\`markdown ### Using Exception Handling for Graceful Degradation in C#

**Graceful degradation** refers to designing software so that when part of it fails, the system continues to operate, possibly with reduced functionality, instead of crashing entirely. In C#, exception handling is a key tool for implementing this.

#### How to Use Exception Handling for Graceful Degradation

1. **Try-Catch Blocks Around Risky Operations**
   - Enclose code that might fail in a \`try\` block.
   - Catch specific exceptions to handle known failure modes.

2. **Fallback Logic in Catch Blocks**
   - In the \`catch\` block, provide alternative logic or reduced functionality.
   - For example, if a database connection fails, switch to reading from a local cache.

3. **Logging and User Notification**
   - Log the exception details for diagnostics.
   - Inform the user about the degraded state, if appropriate.

4. **Continue Application Execution**
   - Ensure the application continues running, even if with limited features.

#### Example

\`\`\`csharp
public string GetUserProfile(int userId)
{
    try
    {
        // Primary operation: fetch from database
        return FetchProfileFromDatabase(userId);
    }
    catch (SqlException ex)
    {
        // Log the error
        LogError(ex);

        // Graceful degradation: fallback to cache
        try
        {
            return FetchProfileFromCache(userId);
        }
        catch (Exception cacheEx)
        {
            LogError(cacheEx);
            // Inform the user or return a default profile
            return "User profile is temporarily unavailable.";
        }
    }
}
\`\`\`

#### Key Points

- **Catch Specific Exceptions:** Avoid catching \`Exception\` unless necessary; handle only expected failure types.
- **Fallback Strategies:** Use alternative resources, default values, or disable non-critical features.
- **User Experience:** Provide meaningful feedback to users about the degraded state.
- **Logging:** Always log exceptions for future troubleshooting.

---

By thoughtfully using exception handling, you can ensure your C# applications degrade gracefully, maintaining core functionality and a positive user experience even when errors occur.`,level:"Advanced",created_at:"2025-04-21T05:05:02.746019Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"fca833f8-95c3-4dd9-875a-dd6023c96695",question:"How does exception handling interact with async/await in C#?",answer:'```markdown\n### How Exception Handling Interacts with `async`/`await` in C#\n\nWhen using `async` and `await` in C#, exception handling works seamlessly with the familiar `try`/`catch` blocks, but with some important nuances:\n\n#### 1. Exceptions in Asynchronous Methods\n\n- If an exception is thrown **before** the first `await` in an `async` method, it behaves like a synchronous exception and is thrown immediately.\n- If an exception is thrown **after** an `await` (or inside a method that is awaited), it is captured and stored in the returned `Task`.\n\n#### 2. Catching Exceptions\n\n- To catch exceptions from an `async` method, you should `await` the method inside a `try`/`catch` block.\n- The exception is re-thrown at the point of the `await` if the task has faulted.\n\n```csharp\npublic async Task DoSomethingAsync()\n{\n    // This exception is thrown immediately\n    throw new InvalidOperationException("Oops!");\n}\n\npublic async Task UseAsyncMethod()\n{\n    try\n    {\n        await DoSomethingAsync();\n    }\n    catch (InvalidOperationException ex)\n    {\n        Console.WriteLine($"Caught exception: {ex.Message}");\n    }\n}\n```\n\n#### 3. Unobserved Exceptions\n\n- If you call an `async` method but **do not await** its returned `Task`, exceptions may go unobserved and can cause the process to terminate (in .NET 4.5+) or be swallowed.\n- Always `await` your tasks or explicitly observe exceptions via `Task.ContinueWith` or similar mechanisms.\n\n#### 4. AggregateException\n\n- When using `Task.Wait()` or `Task.Result` on a faulted task, exceptions are wrapped in an `AggregateException`.\n- With `await`, the original exception is re-thrown directly, making it easier to handle.\n\n#### 5. Example\n\n```csharp\npublic async Task<int> DivideAsync(int a, int b)\n{\n    await Task.Delay(100); // Simulate async work\n    return a / b; // May throw DivideByZeroException\n}\n\npublic async Task RunAsync()\n{\n    try\n    {\n        int result = await DivideAsync(10, 0);\n    }\n    catch (DivideByZeroException ex)\n    {\n        Console.WriteLine("Cannot divide by zero!");\n    }\n}\n```\n\n#### **Summary Table**\n\n| Scenario                           | Exception Handling Behavior                |\n|-------------------------------------|-------------------------------------------|\n| Exception before first `await`      | Thrown synchronously                      |\n| Exception after an `await`          | Captured in Task, re-thrown on `await`    |\n| Not awaiting the Task               | Exception may go unobserved               |\n| Using `Task.Wait()`/`Task.Result`   | Exception wrapped in `AggregateException` |\n\n**In summary:**  \nUse `try`/`catch` around `await` statements to handle exceptions from asynchronous methods, and always await your tasks to ensure exceptions are observed and handled properly.\n```\n',level:"Intermediate",created_at:"2025-04-21T05:05:02.746031Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"},{id:"a8e11047-8fbe-4139-a3d4-d6f5e9f33d11",question:"What is the difference between Task.Exception and Task.Status in error handling?",answer:"```markdown\n**Task.Exception** and **Task.Status** are both properties of the `Task` class in C#, but they serve different purposes in error handling:\n\n### Task.Exception\n- **Purpose:** Holds the exception(s) that caused the task to fault.\n- **Type:** `AggregateException`\n- **Usage:** Accessed when a task has failed (i.e., is in the `Faulted` state).\n- **Example:**  \n  ```csharp\n  if (myTask.IsFaulted)\n  {\n      Console.WriteLine(myTask.Exception);\n  }\n  ```\n- **Note:** Accessing `Exception` when the task has not faulted returns `null`.\n\n### Task.Status\n- **Purpose:** Indicates the current lifecycle state of the task.\n- **Type:** `TaskStatus` (an enum)\n- **Common Values:** `Created`, `Running`, `RanToCompletion`, `Faulted`, `Canceled`\n- **Usage:** Checked to determine if the task has completed successfully, failed, or was canceled.\n- **Example:**  \n  ```csharp\n  if (myTask.Status == TaskStatus.Faulted)\n  {\n      // Handle the error\n  }\n  ```\n\n### Summary Table\n\n| Property         | Purpose                        | Type                | Error Handling Role                    |\n|------------------|-------------------------------|---------------------|----------------------------------------|\n| `Task.Exception` | Holds exceptions from failure  | `AggregateException`| Provides details about the error(s)    |\n| `Task.Status`    | Indicates task's state         | `TaskStatus` enum   | Shows if the task failed, succeeded, etc.|\n\n**In summary:**  \nUse `Task.Status` to check if a task has faulted, and use `Task.Exception` to retrieve the exception details when it has.\n```",level:"Intermediate",created_at:"2025-04-21T05:05:02.746044Z",topic:"48cf0d0f-fb82-41e4-87c8-a9dda0e7565b"}];export{e as default};
