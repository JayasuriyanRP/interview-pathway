const e=[{id:"cf4fcf2f-aa1d-46c8-bad7-3ecc3f758495",question:"How do you define a string variable and assign it a value?",answer:`\`\`\`csharp
// Define a string variable and assign it a value
string message = "Hello, world!";
\`\`\`

In this example:

- string is the data type.
- message is the variable name.
- "Hello, world!" is the value assigned to the variable.`,level:"Beginner"},{id:"d2811663-2ed2-4ecc-add6-461c6e2d1e30",question:"What is the syntax for a switch statement in C#?",answer:`\`\`\`csharp
switch (expression)
{
    case value1:
        // Code to execute if expression == value1
        break;
    case value2:
        // Code to execute if expression == value2
        break;
    // Add more cases as needed
    default:
        // Code to execute if none of the cases match
        break;
}
\`\`\`

**Example:**
\`\`\`csharp
int number = 2;

switch (number)
{
    case 1:
        Console.WriteLine("One");
        break;
    case 2:
        Console.WriteLine("Two");
        break;
    default:
        Console.WriteLine("Other number");
        break;
}
\`\`\`
**Output:**  
Two`,level:"Beginner"},{id:"7597062d-d6af-4f48-ae81-c9ad7154ec8e",question:"How do you declare a constant value in C#?",answer:'```markdown You can declare a constant value in C# using the const keyword. The syntax is:\n\n```csharp\nconst <data_type> <constant_name> = <value>;\n```\n\n**Example:**\n\n```csharp\nconst int MaxValue = 100;\nconst string Greeting = "Hello, World!";\n```\n\n- Constants must be assigned a value at the time of declaration.\n- Their values cannot be changed later in the code.',level:"Beginner"},{id:"f68b9b1c-52d9-452e-a435-355343a60754",question:"What is the syntax for a while loop in C#?",answer:`\`\`\`csharp
while (condition)
{
    // Code to execute as long as the condition is true
}
\`\`\`

**Example:**
\`\`\`csharp
int i = 0;
while (i < 5)
{
    Console.WriteLine(i);
    i++;
}
\`\`\`

This loop will print numbers 0 to 4. The loop continues as long as the condition (i < 5) is true.`,level:"Beginner"},{id:"44cd5e5b-ba5a-4f45-9862-1a331a2817a5",question:"How do you define a class in C#?",answer:`\`\`\`csharp
// Defining a simple class in C#
public class Person
{
    // Fields or properties
    public string Name;
    public int Age;

    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    // Method
    public void Greet()
    {
        Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
    }
}
\`\`\`

**Explanation:**
- Use the class keyword followed by the class name.
- The class body is enclosed in curly braces \`{ }\`.
- You can define fields, properties, constructors, and methods inside the class.`,level:"Beginner"},{id:"9331c971-4b67-478a-9c30-08de61d4303f",question:"How do you access a public property of an object in C#?",answer:'```markdown\nTo access a public property of an object in C#, use the dot (.) operator with the object reference followed by the property name. For example:\n\n```csharp\npublic class Person\n{\n    public string Name { get; set; }\n}\n\nPerson person = new Person();\nperson.Name = "Alice"; // Setting the property\nConsole.WriteLine(person.Name); // Accessing (getting) the property\n```\n\nIn this example, `Name` is a public property of the `Person` class, and you access it using `person.Name`.\n```',level:"Beginner"},{id:"9e5f4e53-56d3-40fe-9841-7a953852e5b0",question:"What is the correct syntax for a namespace declaration?",answer:`\`\`\`csharp
namespace MyNamespace
{
    // Classes, interfaces, enums, etc. go here
}
\`\`\`

**Example:**
\`\`\`csharp
namespace MyApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            // Code here
        }
    }
}
\`\`\`

**Syntax:**  
namespace NamespaceName  
{  
    // Members  
}`,level:"Beginner"},{id:"ec8972f5-543a-4c5e-9b66-b2651223ead3",question:"How do you write a method that takes an integer parameter and returns an integer?",answer:`\`\`\`csharp
// This method takes an integer parameter and returns an integer.
int Square(int number)
{
    return number * number;
}
\`\`\`

**Explanation:**
- int before the method name specifies the return type.
- Square is the method name.
- (int number) means the method takes one integer parameter named number.
- The method returns an integer value (in this case, the square of the input).`,level:"Intermediate"},{id:"42beb477-1a22-464e-9e17-efc9a404f9e4",question:"What is the syntax for exception handling using try-catch in C#?",answer:`\`\`\`csharp
try
{
    // Code that may throw an exception
}
catch (ExceptionType1 ex1)
{
    // Handle ExceptionType1
}
catch (ExceptionType2 ex2)
{
    // Handle ExceptionType2
}
finally
{
    // Code that will always execute (optional)
}
\`\`\`

**Key Points:**
- The try block contains code that might throw exceptions.
- One or more catch blocks handle specific exception types.
- The finally block is optional and runs regardless of whether an exception was thrown.
- Example:

\`\`\`csharp
try
{
    int result = 10 / int.Parse(userInput);
}
catch (FormatException ex)
{
    Console.WriteLine("Input was not a valid number.");
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Cannot divide by zero.");
}
finally
{
    Console.WriteLine("Operation complete.");
}
\`\`\``,level:"Intermediate"},{id:"375b5118-2512-4695-9067-6e38ee18f05b",question:"How do you define a constructor in a C# class?",answer:`\`\`\`markdown In C#, a constructor is a special method that is called automatically when an instance of a class is created. It has the same name as the class and does not have a return type (not even void).

Here’s how you define a constructor in a C# class:

\`\`\`csharp
public class Person
{
    public string Name;
    public int Age;

    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}
\`\`\`

**Key points:**
- The constructor’s name must match the class name.
- Constructors can have parameters or be parameterless (default constructor).
- Constructors do not have a return type.
- You can have multiple constructors in a class (constructor overloading).`,level:"Intermediate"},{id:"90b15a2a-27f5-4b7a-b9e7-71b50241fed7",question:"What is the syntax for inheritance in C#?",answer:`\`\`\`markdown
In C#, inheritance is implemented using the : (colon) symbol. The derived class specifies the base class after the colon.

**Syntax:**
\`\`\`csharp
class BaseClass
{
    // Base class members
}

class DerivedClass : BaseClass
{
    // Derived class members
}
\`\`\`

**Example:**
\`\`\`csharp
class Animal
{
    public void Eat()
    {
        Console.WriteLine("Animal is eating.");
    }
}

class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("Dog is barking.");
    }
}
\`\`\`

In this example, \`Dog\` inherits from \`Animal\`, so it has access to the \`Eat()\` method.
\`\`\`
`,level:"Intermediate"},{id:"7d957f3c-6e59-462e-9625-669719eeb34d",question:"How do you declare an interface in C#?",answer:`\`\`\`markdown In C#, you declare an interface using the interface keyword. An interface defines a contract that classes or structs can implement. It can contain method signatures, properties, events, or indexers, but no implementation.

**Syntax Example:**

\`\`\`csharp
public interface IShape
{
    void Draw();
    double GetArea();
}
\`\`\`

**Key Points:**
- Use the interface keyword.
- Interface names often start with a capital "I" by convention (e.g., IShape).
- Members in an interface do not have access modifiers (they are public by default) and do not contain implementation.
- A class or struct implements an interface using the : symbol.

**Example of Implementation:**

\`\`\`csharp
public class Circle : IShape
{
    public void Draw()
    {
        Console.WriteLine("Drawing a circle.");
    }

    public double GetArea()
    {
        return Math.PI * radius * radius;
    }

    private double radius = 5;
}
\`\`\``,level:"Intermediate"},{id:"670ba183-50a8-488b-9927-bfb642f206a7",question:"What is the syntax for implementing an interface in a class?",answer:`\`\`\`markdown To implement an interface in a C# class, use a colon (:) after the class name, followed by the interface name. Then, provide implementations for all the interface's members within the class.

**Syntax Example:**

\`\`\`csharp
// Define the interface
public interface IMyInterface
{
    void MyMethod();
}

// Implement the interface in a class
public class MyClass : IMyInterface
{
    public void MyMethod()
    {
        // Implementation of the method
        Console.WriteLine("MyMethod implementation.");
    }
}
\`\`\`

**Key Points:**
- Use a colon (:) to specify the interface after the class name.
- The class must provide concrete implementations for all members of the interface.
- A class can implement multiple interfaces by separating them with commas:

\`\`\`csharp
public class MyClass : IFirstInterface, ISecondInterface
{
    // Implement members of both interfaces
}
\`\`\``,level:"Intermediate"},{id:"60a8fd2b-d6da-4586-96c0-1f409e02360e",question:"How do you define a property with get and set accessors?",answer:`\`\`\`markdown In C#, you define a property with get and set accessors using the following syntax:

\`\`\`csharp
public class Person
{
    private string name; // Backing field

    public string Name
    {
        get { return name; }
        set { name = value; }
    }
}
\`\`\`

Alternatively, you can use auto-implemented properties for simpler cases:

\`\`\`csharp
public class Person
{
    public string Name { get; set; }
}
\`\`\`

- The get accessor returns the property value.
- The set accessor assigns a value to the property.
- value is an implicit parameter in the set accessor representing the value being assigned.`,level:"Intermediate"},{id:"9e85a1ae-b7c7-42a3-aa42-790167bcca98",question:"What is the syntax for a static method in C#?",answer:`\`\`\`csharp
// Syntax for a static method in C#
class ClassName
{
    public static ReturnType MethodName(ParameterList)
    {
        // Method body
    }
}

// Example:
class MathUtils
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}
\`\`\`

**Key Points:**
- Use the static keyword before the return type.
- Static methods belong to the class, not to any instance.
- Call static methods using the class name: \`MathUtils.Add(3, 5);\``,level:"Intermediate"},{id:"27445100-12c4-4ea3-8a15-a98f89c8c0ba",question:"What is the syntax for an indexer in C#?",answer:`\`\`\`csharp
// Syntax for an indexer in C#
public class SampleCollection<T>
{
    private T[] arr = new T[100];

    // Indexer declaration
    public T this[int index]
    {
        get { return arr[index]; }
        set { arr[index] = value; }
    }
}
\`\`\`

**Explanation:**
- The indexer is declared using the \`this\` keyword followed by a parameter list in square brackets.
- The return type (\`T\` in this example) specifies the type of value the indexer returns.
- The \`get\` accessor retrieves the value at the specified index.
- The \`set\` accessor assigns a value at the specified index.
- Indexers can be overloaded and can have multiple parameters (e.g., for multidimensional access).`,level:"Advanced"},{id:"a2945c5f-a78b-4ead-a1e1-95af8003431b",question:"How do you define a tuple and deconstruct it in C#?",answer:'```markdown\nIn C#, you can define a tuple using the syntax `(type1, type2, ...)` and instantiate it with values. You can also deconstruct a tuple into separate variables for easier access.\n\n**Defining a Tuple:**\n```csharp\nvar person = (Name: "Alice", Age: 30, Country: "USA");\n```\n\n**Deconstructing a Tuple:**\n```csharp\nvar (name, age, country) = person;\nConsole.WriteLine($"Name: {name}, Age: {age}, Country: {country}");\n```\n\n**Explanation:**\n- The tuple is defined with named elements (`Name`, `Age`, `Country`).\n- Deconstruction assigns each tuple element to a separate variable (`name`, `age`, `country`).\n- You can also deconstruct tuples returned from methods:\n\n```csharp\n(string, int) GetPerson() => ("Bob", 25);\n\nvar (personName, personAge) = GetPerson();\n```\n\n**Note:** Tuples require C# 7.0 or later.\n```\n',level:"Advanced"},{id:"83c86132-5f28-460e-81c3-31be80718585",question:"What is the syntax for a local function inside a method?",answer:`\`\`\`csharp
void OuterMethod()
{
    // Local function declaration
    int LocalFunction(int x, int y)
    {
        return x + y;
    }

    // Local function invocation
    int result = LocalFunction(3, 4);
    Console.WriteLine(result); // Output: 7
}
\`\`\`

**Key points:**
- Local functions are declared inside the body of a method.
- They can have parameters, return types, and access variables from the containing method.
- Syntax is similar to a regular method, but nested within another method.`,level:"Advanced"},{id:"92c82a5e-5ec3-4fdb-b692-9ddf15a25483",question:"What is the syntax for a switch expression introduced in C# 8.0?",answer:`\`\`\`csharp
// Syntax for a switch expression in C# 8.0:

var result = input switch
{
    Pattern1 => Result1,
    Pattern2 => Result2,
    Pattern3 => Result3,
    _        => DefaultResult
};
\`\`\`

**Example:**

\`\`\`csharp
string GetDayType(DayOfWeek day) =>
    day switch
    {
        DayOfWeek.Saturday => "Weekend",
        DayOfWeek.Sunday   => "Weekend",
        DayOfWeek.Monday   => "Weekday",
        DayOfWeek.Tuesday  => "Weekday",
        DayOfWeek.Wednesday=> "Weekday",
        DayOfWeek.Thursday => "Weekday",
        DayOfWeek.Friday   => "Weekday",
        _                  => "Unknown"
    };
\`\`\`

**Key Points:**
- The switch expression uses the \`input switch { ... }\` syntax.
- Each case uses the \`=>\` lambda operator.
- The \`_\` pattern is used as a default case.
- Switch expressions can return values directly and are expressions, not statements.`,level:"Advanced"},{id:"5ccd2ee7-e7f4-4462-a429-9751014d6aa1",question:"What is the correct syntax to declare an integer variable in C#?",answer:"```csharp\nint myNumber;\n```\n\nYou can also assign a value at the time of declaration:\n\n```csharp\nint myNumber = 10;\n```",level:"Beginner"},{id:"683968e2-8209-4247-81ae-f170e6d4c2e9",question:"How do you write a single-line comment in C#?",answer:'```markdown You write a single-line comment in C# by using two forward slashes (//). Everything after the // on that line is treated as a comment and ignored by the compiler.\n\n```csharp\n// This is a single-line comment in C#\nConsole.WriteLine("Hello, World!"); // This prints a message to the console\n```',level:"Beginner"},{id:"37f2c415-a26e-4074-b4f5-ba8eb7b4f581",question:"How do you write a multi-line comment in C#?",answer:"```csharp\n/*\nThis is a multi-line comment in C#.\nYou can write comments spanning multiple lines.\nEverything between the /* and */ is ignored by the compiler.\n*/\n```",level:"Beginner"},{id:"8d207159-2ebe-4bd9-b377-67e665552f17",question:"What is the syntax for defining a method that returns void and takes no parameters?",answer:`\`\`\`csharp
void MethodName()
{
    // Method body
}
\`\`\`

**Example:**
\`\`\`csharp
void PrintHello()
{
    Console.WriteLine("Hello!");
}
\`\`\``,level:"Beginner"},{id:"9689058e-cbaf-4d70-9b1d-cff138d787a8",question:"How do you create an array of integers with 5 elements in C#?",answer:"```csharp\nint[] numbers = new int[5];\n```\n\nThis line creates an array of integers named numbers with 5 elements, all initialized to 0 by default.",level:"Beginner"},{id:"5ffa3a58-d8cd-4dd8-90f4-cc81ba81db41",question:"What is the correct way to instantiate an object of a class named 'Person'?",answer:"```csharp\nPerson person = new Person();\n```\n\nThis line creates a new instance of the Person class and assigns it to the variable person.",level:"Beginner"},{id:"0a0278ed-b673-4e5a-80ec-969ddcc7356b",question:"How do you write a for loop that iterates from 0 to 9?",answer:`\`\`\`csharp
for (int i = 0; i < 10; i++)
{
    // Code to execute in each iteration
    Console.WriteLine(i);
}
\`\`\`

This loop starts at 0 and runs while i is less than 10, printing numbers 0 through 9.`,level:"Beginner"},{id:"f6683b21-4827-4df4-9128-42cc5f704306",question:"What is the syntax for an if-else statement in C#?",answer:`\`\`\`csharp
if (condition)
{
    // Code to execute if condition is true
}
else
{
    // Code to execute if condition is false
}
\`\`\`

**Example:**
\`\`\`csharp
int number = 10;

if (number > 5)
{
    Console.WriteLine("Number is greater than 5.");
}
else
{
    Console.WriteLine("Number is 5 or less.");
}
\`\`\``,level:"Beginner"},{id:"cd6fbb36-12d5-444a-8f9a-37d6ef0c49e4",question:"How do you use the 'using' statement to manage resources?",answer:`\`\`\`markdown In C#, the using statement is used to ensure that resources are properly disposed of when they are no longer needed. This is especially important for objects that access unmanaged resources, such as file handles, database connections, or network streams. The using statement provides a convenient syntax that automatically calls the Dispose() method on the object when the code block is exited, even if an exception occurs.

**Syntax:**

\`\`\`csharp
using (ResourceType resource = new ResourceType())
{
    // Use the resource here
}
// resource.Dispose() is automatically called here
\`\`\`

**Example:**

\`\`\`csharp
using (StreamReader reader = new StreamReader("file.txt"))
{
    string content = reader.ReadToEnd();
    Console.WriteLine(content);
}
// reader.Dispose() is called automatically
\`\`\`

**Key Points:**
- The object used in a using statement must implement the IDisposable interface.
- The using statement ensures deterministic disposal of resources.
- You can declare multiple resources in a single using statement (C# 8.0 and later):

  \`\`\`csharp
  using var stream = new FileStream("file.txt", FileMode.Open);
  using var reader = new StreamReader(stream);
  // Use reader here
  // Both reader and stream are disposed at the end of the scope
  \`\`\`

**Summary:**  
Use the using statement to manage resources efficiently and avoid resource leaks by ensuring that Dispose() is called automatically.`,level:"Intermediate"},{id:"838e0317-3f76-4bfd-ab16-362a1a9cf685",question:"What is the correct way to declare and use a delegate in C#?",answer:`\`\`\`markdown
In C#, a delegate is a type that represents references to methods with a specific parameter list and return type. Here’s how you can declare and use a delegate:

### 1. Declare a Delegate

\`\`\`csharp
// Declaration
public delegate int Operation(int x, int y);
\`\`\`

### 2. Define Methods Matching the Delegate Signature

\`\`\`csharp
public class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }

    public int Multiply(int a, int b)
    {
        return a * b;
    }
}
\`\`\`

### 3. Instantiate and Use the Delegate

\`\`\`csharp
class Program
{
    static void Main()
    {
        Calculator calc = new Calculator();

        // Instantiate the delegate
        Operation op = new Operation(calc.Add);

        // Use the delegate
        int result = op(5, 3); // Calls Add(5, 3)
        Console.WriteLine(result); // Output: 8

        // Reassign to another method
        op = calc.Multiply;
        result = op(5, 3); // Calls Multiply(5, 3)
        Console.WriteLine(result); // Output: 15
    }
}
\`\`\`

### Summary

- **Declare** the delegate type.
- **Create** methods that match the delegate signature.
- **Instantiate** the delegate, referencing a matching method.
- **Invoke** the delegate as if it were a method.

> **Note:** With C# 2.0 and later, you can also use anonymous methods or lambda expressions with delegates.
\`\`\`
`,level:"Intermediate"},{id:"ade9ffec-45df-4aae-a5b8-adce8e276733",question:"How do you define an enum in C#?",answer:`\`\`\`markdown You define an enum in C# using the enum keyword, followed by the name of the enum and a list of named constants (members) enclosed in curly braces. Here’s the basic syntax:

\`\`\`csharp
enum DayOfWeek
{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
\`\`\`

By default, the first member has the value 0, and each subsequent member increases by 1. You can also explicitly assign values:

\`\`\`csharp
enum ErrorCode
{
    None = 0,
    NotFound = 404,
    ServerError = 500
}
\`\`\`

You can then use the enum like this:

\`\`\`csharp
DayOfWeek today = DayOfWeek.Monday;
if (today == DayOfWeek.Monday)
{
    Console.WriteLine("It's Monday!");
}
\`\`\`

Enums are commonly used to represent a set of related named constants in a type-safe way.`,level:"Intermediate"},{id:"f78e063b-9ec9-4fcc-a9d0-325352b9753a",question:"What is the syntax for a generic method in C#?",answer:`\`\`\`csharp
// Syntax for a generic method in C#
public T MethodName<T>(T parameter)
{
    // Method logic here
    return parameter;
}
\`\`\`

**Example:**
\`\`\`csharp
public T Add<T>(T a, T b)
{
    dynamic x = a;
    dynamic y = b;
    return x + y;
}
\`\`\`

**Usage:**
\`\`\`csharp
int result = Add<int>(3, 5);        // result = 8
double sum = Add<double>(2.5, 4.1); // sum = 6.6
\`\`\`

**Explanation:**
- The type parameter \`<T>\` is specified after the method name.
- You can use \`T\` as a type within the method's parameters and return type.
- The actual type is provided when calling the method.`,level:"Intermediate"},{id:"8cf790a8-132b-430f-831f-f65a7092ecfb",question:"How do you create an auto-implemented property in C#?",answer:"```markdown To create an auto-implemented property in C#, you use the following syntax:\n\n```csharp\npublic class Person\n{\n    public string Name { get; set; }\n}\n```\n\nIn this example, Name is an auto-implemented property. The compiler automatically creates a private, anonymous backing field that can only be accessed through the property's get and set accessors. You can also specify access modifiers or make it read-only or write-only:\n\n```csharp\npublic int Age { get; private set; } // Read-only outside the class\n```\n\nAuto-implemented properties simplify property declarations when no additional logic is required in the property accessors.",level:"Intermediate"},{id:"8b34aa97-6a38-4281-aa14-bfb2bf1741d2",question:"What is the syntax for a lambda expression in C#?",answer:"```markdown A lambda expression in C# uses the following syntax:\n\n```csharp\n(parameters) => expression\n```\nor for a statement block:\n```csharp\n(parameters) => { statements }\n```\n\n**Examples:**\n\nSingle parameter, single expression:\n```csharp\nx => x * x\n```\n\nMultiple parameters:\n```csharp\n(x, y) => x + y\n```\n\nWith a statement block:\n```csharp\n(x, y) => \n{\n    int sum = x + y;\n    return sum * 2;\n}\n```\n\n**Usage Example:**\n```csharp\nList<int> numbers = new List<int> { 1, 2, 3, 4, 5 };\nvar evenNumbers = numbers.Where(n => n % 2 == 0);\n```\n\n**Note:**  \n- The parameters can be explicitly typed, e.g., `(int x, int y) => x + y`.\n- If there is only one parameter, parentheses are optional: `n => n * n`.",level:"Intermediate"},{id:"732dee06-c2fe-4b46-83e2-3c3bcc0f093d",question:"How do you define an abstract class and an abstract method?",answer:`\`\`\`markdown In C#, you define an abstract class using the abstract keyword. An abstract class can contain abstract methods, which are method signatures without an implementation. Abstract methods must also use the abstract keyword and do not have a body. Any class inheriting from the abstract class must provide an implementation for all abstract methods.

**Example:**

\`\`\`csharp
// Abstract class definition
public abstract class Animal
{
    // Abstract method (no implementation)
    public abstract void MakeSound();

    // Regular method (with implementation)
    public void Sleep()
    {
        Console.WriteLine("Sleeping...");
    }
}

// Derived class must implement the abstract method
public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}
\`\`\`

**Key Points:**
- Use the abstract keyword for both the class and its abstract methods.
- Abstract methods do not have a body (no curly braces).
- Derived classes must override and implement all abstract methods.`,level:"Intermediate"},{id:"0de76851-82df-426e-8e4b-85aaea3cec77",question:"How do you declare and use an event in C#?",answer:`\`\`\`markdown
### Declaring and Using an Event in C#

In C#, **events** are a way for a class to provide notifications to clients of that class when something of interest occurs. Events are typically used with delegates.

#### 1. Declare a Delegate

First, define a delegate that matches the signature of the event handler methods:

\`\`\`csharp
public delegate void MyEventHandler(object sender, EventArgs e);
\`\`\`

#### 2. Declare an Event

Use the \`event\` keyword with the delegate type:

\`\`\`csharp
public class Publisher
{
    public event MyEventHandler MyEvent;

    public void DoSomething()
    {
        // Some logic here...

        // Raise the event
        OnMyEvent(EventArgs.Empty);
    }

    protected virtual void OnMyEvent(EventArgs e)
    {
        MyEvent?.Invoke(this, e);
    }
}
\`\`\`

#### 3. Subscribe to the Event

A subscriber class can attach a handler to the event:

\`\`\`csharp
public class Subscriber
{
    public void HandleEvent(object sender, EventArgs e)
    {
        Console.WriteLine("Event received!");
    }
}
\`\`\`

\`\`\`csharp
// Usage
Publisher publisher = new Publisher();
Subscriber subscriber = new Subscriber();

publisher.MyEvent += subscriber.HandleEvent; // Subscribe

publisher.DoSomething(); // This will trigger the event and call HandleEvent
\`\`\`

#### 4. Unsubscribe from the Event

You can unsubscribe using the \`-=\` operator:

\`\`\`csharp
publisher.MyEvent -= subscriber.HandleEvent;
\`\`\`

---

#### Notes

- Events can only be invoked from within the class that declares them.
- The \`EventHandler\` and \`EventHandler<TEventArgs>\` delegates are commonly used for events.
- Use the null-conditional operator (\`?.\`) to safely invoke events.

---

#### Example Using Built-in EventHandler

\`\`\`csharp
public class Publisher
{
    public event EventHandler MyEvent;

    public void DoSomething()
    {
        MyEvent?.Invoke(this, EventArgs.Empty);
    }
}
\`\`\`
\`\`\``,level:"Advanced"},{id:"8d82ba87-8ad4-4505-a49f-b45a8f7180b6",question:"What is the correct syntax for an extension method?",answer:`\`\`\`csharp
// Extension methods must be defined in a static class
public static class StringExtensions
{
    // The first parameter specifies the type being extended, preceded by 'this'
    public static bool IsNullOrEmpty(this string str)
    {
        return string.IsNullOrEmpty(str);
    }
}

// Usage:
string s = null;
bool result = s.IsNullOrEmpty(); // Calls the extension method
\`\`\`

**Key Points:**
- The extension method must be in a static class.
- The method itself must be static.
- The first parameter must have the this modifier and specify the type to extend.
- Extension methods are called as if they were instance methods on the extended type.`,level:"Advanced"},{id:"75aaacd6-94de-4853-98af-2771a9066827",question:"How do you use the 'yield return' statement in an iterator method?",answer:`\`\`\`markdown
In C#, the \`yield return\` statement is used within an iterator method to provide a value to the enumerator object one at a time. This allows you to create custom collections that can be iterated over using \`foreach\`, without needing to create an intermediate collection.

### Syntax Example

\`\`\`csharp
public IEnumerable<int> GetEvenNumbers(int max)
{
    for (int i = 0; i <= max; i++)
    {
        if (i % 2 == 0)
        {
            yield return i; // Returns the next even number
        }
    }
}
\`\`\`

### How it works

- The method must return \`IEnumerable\`, \`IEnumerable<T>\`, \`IEnumerator\`, or \`IEnumerator<T>\`.
- Each time \`yield return\` is executed, the current location in the code is remembered.
- When the next value is requested (e.g., by the next iteration of a \`foreach\` loop), execution resumes immediately after the last \`yield return\`.

### Usage Example

\`\`\`csharp
foreach (int even in GetEvenNumbers(10))
{
    Console.WriteLine(even);
}
\`\`\`

This would output:
\`\`\`
0
2
4
6
8
10
\`\`\`

### Notes

- You can also use \`yield break;\` to end the iteration early.
- \`yield return\` is especially useful for generating sequences on-the-fly or for implementing lazy evaluation.
\`\`\`
`,level:"Advanced"},{id:"6a49183e-6721-4ccd-b279-588b2258a225",question:"What is the syntax for a nullable value type in C#?",answer:"```markdown\nIn C#, a nullable value type allows a value type (such as int, double, bool, etc.) to represent all the values of its underlying type plus an additional null value. The syntax for declaring a nullable value type is by appending a question mark (?) to the value type.\n\n**Syntax:**\n```csharp\nTypeName? variableName;\n```\n\n**Example:**\n```csharp\nint? age = null;\ndouble? temperature = 36.6;\nbool? isActive = null;\n```\n\nAlternatively, you can use the `Nullable<T>` generic type:\n\n```csharp\nNullable<int> age = null;\n```\n\nBoth syntaxes are functionally equivalent, but the `?` syntax is more concise and commonly used.\n```",level:"Advanced"},{id:"df05b98d-ac22-426a-9a6c-55fd658e4a13",question:"How do you use the 'async' and 'await' keywords in a method?",answer:'```markdown\nIn C#, the `async` and `await` keywords are used to write asynchronous methods, allowing your code to perform non-blocking operations such as I/O, network calls, or long-running computations.\n\n### Syntax\n\n- Mark the method with the `async` modifier.\n- Use the `await` keyword before a call to an asynchronous operation (a method returning `Task`, `Task<T>`, or `ValueTask<T>`).\n\n### Example\n\n```csharp\npublic async Task<string> DownloadContentAsync(string url)\n{\n    using (HttpClient client = new HttpClient())\n    {\n        // The await keyword asynchronously waits for the task to complete.\n        string content = await client.GetStringAsync(url);\n        return content;\n    }\n}\n```\n\n### Key Points\n\n- The method signature must include the `async` modifier.\n- The return type is usually `Task`, `Task<T>`, or `void` (for event handlers).\n- Use `await` only inside an `async` method.\n- The `await` keyword pauses the method execution until the awaited task completes, without blocking the calling thread.\n\n### Usage\n\n```csharp\nstring result = await DownloadContentAsync("https://example.com");\n```\n\n> **Note:** The calling method must also be `async` if you use `await` directly, or you can use `.Result` or `.Wait()` for synchronous blocking (not recommended).\n\n```\n',level:"Advanced"},{id:"babc3190-b27a-469f-94dc-c5ff98aed7e5",question:"What is the syntax for pattern matching using 'is' and 'switch' expressions?",answer:`\`\`\`markdown Certainly! Here’s an advanced overview of pattern matching syntax in C# using is and switch expressions:

## Pattern Matching with \`is\`

You can use the \`is\` keyword to check if an object matches a type or pattern, and optionally assign it to a variable:

\`\`\`csharp
object obj = "hello";

if (obj is string s && s.Length > 3)
{
    Console.WriteLine($"String of length > 3: {s}");
}
\`\`\`

You can also use more advanced patterns, such as property patterns:

\`\`\`csharp
if (obj is string { Length: > 5 } longString)
{
    Console.WriteLine($"Long string: {longString}");
}
\`\`\`

## Pattern Matching with \`switch\` Expressions

The switch expression (introduced in C# 8.0) allows concise pattern matching:

\`\`\`csharp
string Classify(object input) => input switch
{
    int i when i > 0 => "Positive integer",
    int i => "Non-positive integer",
    string { Length: > 0 } s => $"Non-empty string: {s}",
    null => "Null value",
    _ => "Unknown type"
};
\`\`\`

### Example with Record Types and Positional Patterns

\`\`\`csharp
public record Point(int X, int Y);

string Describe(Point p) => p switch
{
    (0, 0) => "Origin",
    (var x, 0) => $"X-axis at {x}",
    (0, var y) => $"Y-axis at {y}",
    (var x, var y) when x == y => "On the line X=Y",
    _ => $"Point at ({p.X}, {p.Y})"
};
\`\`\`

## Summary Table

| Syntax                | Example                                              |
|-----------------------|-----------------------------------------------------|
| Type pattern          | \`if (obj is int i) { ... }\`                         |
| Property pattern      | \`if (obj is string { Length: > 5 } s) { ... }\`      |
| Switch expression     | \`input switch { int i => ..., string s => ... }\`    |
| Positional pattern    | \`p switch { (0, 0) => ..., (x, y) => ... }\`         |

**References:**  
- [Microsoft Docs: Pattern matching](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)
- [Microsoft Docs: switch expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/switch-expression)`,level:"Advanced"},{id:"74527b41-9076-4657-9340-98550aa3eb14",question:"How do you use the 'ref' and 'out' keywords in method parameters?",answer:`\`\`\`markdown
In C#, the \`ref\` and \`out\` keywords are used to pass arguments by reference to methods, allowing the method to modify the value of the parameter and have that change reflected outside the method.

## \`ref\` Keyword

- The \`ref\` keyword indicates that a parameter is passed by reference.
- The variable passed as a \`ref\` parameter must be initialized before it is passed to the method.

**Example:**

\`\`\`csharp
void Increment(ref int number)
{
    number++;
}

int x = 5;
Increment(ref x);
// x is now 6
\`\`\`

## \`out\` Keyword

- The \`out\` keyword also passes a parameter by reference.
- Unlike \`ref\`, the variable passed as an \`out\` parameter does **not** need to be initialized before being passed.
- The called method **must** assign a value to the \`out\` parameter before the method returns.

**Example:**

\`\`\`csharp
void GetValues(out int a, out int b)
{
    a = 10;
    b = 20;
}

int x, y;
GetValues(out x, out y);
// x is 10, y is 20
\`\`\`

## Key Differences

| Feature         | \`ref\`                  | \`out\`                       |
|-----------------|------------------------|-----------------------------|
| Initialization  | Must be initialized    | Doesn't need to be initialized |
| Assignment      | Optional in method     | Must be assigned in method  |

## Usage in Method Signatures

\`\`\`csharp
void MyMethod(ref int value1, out int value2)
{
    value1 += 5;      // value1 must be initialized before call
    value2 = value1;  // value2 must be assigned before return
}
\`\`\`

**Calling the method:**

\`\`\`csharp
int a = 3;
int b;
MyMethod(ref a, out b);
// a is now 8, b is 8
\`\`\`
\`\`\``,level:"Advanced"},{id:"642ce137-4309-46b9-9033-9b31001bec45",question:"What is the correct syntax for a partial class?",answer:`\`\`\`csharp
// File: MyClass.Part1.cs
public partial class MyClass
{
    public void MethodA()
    {
        // Implementation of MethodA
    }
}

// File: MyClass.Part2.cs
public partial class MyClass
{
    public void MethodB()
    {
        // Implementation of MethodB
    }
}
\`\`\`

**Explanation:**

- The partial keyword is used to split the definition of a class, struct, or interface over two or more source files.
- All parts must use the partial keyword and have the same accessibility, name, and namespace.
- At compile time, all parts are combined into a single class.

**Syntax:**
\`\`\`csharp
public partial class ClassName
{
    // Members
}
\`\`\``,level:"Advanced"},{id:"6ce6e870-06ba-4b70-9a29-f1276a79672e",question:"How do you use the 'nameof' operator in C#?",answer:`\`\`\`markdown
The \`nameof\` operator in C# is used to obtain the simple (unqualified) string name of a variable, type, or member. It is evaluated at compile time, making it useful for refactoring, error messages, and avoiding hard-coded string literals.

### Syntax

\`\`\`csharp
nameof(identifier)
\`\`\`

### Example Usage

\`\`\`csharp
class Person
{
    public string FirstName { get; set; }
}

Person person = new Person();
string propertyName = nameof(person.FirstName); // "FirstName"
string className = nameof(Person);              // "Person"
\`\`\`

### Common Scenarios

- **Exception messages:**
  \`\`\`csharp
  void SetName(string name)
  {
      if (name == null)
          throw new ArgumentNullException(nameof(name));
  }
  \`\`\`

- **INotifyPropertyChanged implementations:**
  \`\`\`csharp
  public event PropertyChangedEventHandler PropertyChanged;

  protected void OnPropertyChanged(string propertyName)
  {
      PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
  }

  public string Name { get; set; }

  public void UpdateName(string value)
  {
      Name = value;
      OnPropertyChanged(nameof(Name));
  }
  \`\`\`

### Benefits

- **Refactoring safety:** If you rename the identifier, the string returned by \`nameof\` automatically updates.
- **Compile-time checking:** Errors are caught at compile time if the identifier does not exist.

### Notes

- \`nameof\` does not evaluate expressions; it only returns the name of the identifier.
- Introduced in C# 6.0.

\`\`\`
`,level:"Advanced"},{id:"55f70049-45a6-4c23-9b13-0f36411aac30",question:"What is the syntax for a record type in C#?",answer:`\`\`\`csharp
// Basic record type declaration
public record Person(string FirstName, string LastName);

// With properties and methods
public record Employee
{
    public int Id { get; init; }
    public string Name { get; init; }

    public string GetDisplayName() => $"{Id}: {Name}";
}

// With inheritance
public record Manager(string FirstName, string LastName, int TeamSize) : Person(FirstName, LastName);
\`\`\`

**Explanation:**
- Use the record keyword to define an immutable reference type.
- You can use positional parameters (primary constructor) or define properties inside the body.
- Records support inheritance and value-based equality by default.`,level:"Advanced"},{id:"76562de4-366f-4663-85fd-940fae0df613",question:"How do you define a static constructor in a class?",answer:`\`\`\`csharp
class MyClass
{
    // Static constructor
    static MyClass()
    {
        // Initialization code here
    }
}
\`\`\`

**Key Points:**
- A static constructor is declared using the static keyword and has no access modifiers or parameters.
- It is called automatically before the first instance is created or any static members are referenced.
- Used to initialize static fields or perform actions that need to be executed only once.`,level:"Advanced"},{id:"53ab16a9-66cc-4340-9ec4-758988eca30b",question:"What is the syntax for an explicit interface implementation?",answer:`\`\`\`csharp
// Interface definition
public interface IExample
{
    void DoWork();
}

// Explicit interface implementation in a class
public class ExampleClass : IExample
{
    // Note: No access modifier (not public/private/protected)
    void IExample.DoWork()
    {
        // Implementation code here
        Console.WriteLine("Explicit interface implementation called.");
    }
}
\`\`\`

**Key Points:**
- The method is prefixed with the interface name (\`IExample.DoWork\`).
- No access modifier is used (not even \`public\`).
- The method can only be accessed through an interface reference:

\`\`\`csharp
IExample obj = new ExampleClass();
obj.DoWork(); // Calls the explicit implementation
\`\`\`
- It cannot be called directly via the class instance (\`new ExampleClass().DoWork();\` would result in a compile-time error).`,level:"Advanced"},{id:"1387aa58-25bf-4d58-a195-cbf2ff491402",question:"How do you use the 'lock' statement for thread safety?",answer:"```markdown\nThe `lock` statement in C# is used to ensure that a block of code runs by only one thread at a time, providing thread safety when accessing shared resources. It works by acquiring an exclusive lock on a specified object reference for the duration of the code block.\n\n**Syntax:**\n```csharp\nlock (lockObject)\n{\n    // Critical section: code that accesses shared resources\n}\n```\n\n**Example:**\n```csharp\nprivate readonly object _lock = new object();\nprivate int _counter = 0;\n\npublic void IncrementCounter()\n{\n    lock (_lock)\n    {\n        _counter++;\n        // Only one thread can execute this block at a time\n    }\n}\n```\n\n**Key Points:**\n- The object used in `lock` (e.g., `_lock`) should be private and not externally accessible to avoid deadlocks.\n- Avoid locking on `this`, `typeof(TypeName)`, or string literals.\n- The `lock` statement is syntactic sugar for `Monitor.Enter` and `Monitor.Exit`.\n\n**When to Use:**\nUse `lock` when you need to protect shared data from concurrent access in a multithreaded environment.\n```\n",level:"Advanced"},{id:"8f3cd340-d7b9-43c8-9cdb-89b6b2836a4e",question:"How do you use the 'var' keyword for implicit typing?",answer:`\`\`\`markdown In C#, the var keyword is used for implicit typing of local variables. When you use var, the compiler determines the variable's type based on the expression on the right side of the assignment at compile time.

**Syntax Example:**

\`\`\`csharp
var number = 10;          // number is inferred as int
var name = "Alice";       // name is inferred as string
var items = new List<int>(); // items is inferred as List<int>
\`\`\`

**Key Points:**
- The variable must be initialized at the time of declaration.
- The type is inferred by the compiler and cannot change after initialization.
- var can only be used for local variables (not fields, method parameters, or return types).

**When to Use:**
- When the type is obvious from the right side of the assignment.
- To simplify code, especially with complex types.

**When Not to Use:**
- When it reduces code readability or makes the type unclear.

**Example:**

\`\`\`csharp
var person = new Person(); // person is of type Person
\`\`\`

**Note:**  
Using var does not make C# a dynamically-typed language; the type is still determined at compile time.`,level:"Intermediate"},{id:"d10749f2-296c-402a-b495-c37d0e6aa00d",question:"How do you define an enum in C#?",answer:`\`\`\`csharp
// Defining an enum in C#
enum DaysOfWeek
{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
\`\`\`

**Explanation:**
- The enum keyword is used to declare an enumeration, a distinct type consisting of a set of named constants called the enumerator list.
- By default, the underlying type of each element in the enum is \`int\`, and the first enumerator has the value 0, with each successive enumerator increasing by 1.
- You can also specify custom values:

\`\`\`csharp
enum ErrorCode
{
    None = 0,
    Unknown = 1,
    ConnectionLost = 100,
    OutOfMemory = 200
}
\`\`\`

**Usage Example:**
\`\`\`csharp
DaysOfWeek today = DaysOfWeek.Monday;
if (today == DaysOfWeek.Monday)
{
    Console.WriteLine("Start of the work week!");
}
\`\`\``,level:"Intermediate",created_at:"2025-04-20T08:59:27.953181Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"67956ae2-aaba-4956-8943-aec3b15fa4dc",question:"What is the syntax for pattern matching in C# switch statements?",answer:'```csharp\n// Example of pattern matching in a C# switch statement\n\nobject value = 42;\n\nswitch (value)\n{\n    case int i when i > 0:\n        Console.WriteLine($"Positive integer: {i}");\n        break;\n    case string s:\n        Console.WriteLine($"String: {s}");\n        break;\n    case null:\n        Console.WriteLine("Null value");\n        break;\n    default:\n        Console.WriteLine("Other type");\n        break;\n}\n```\n\n**Explanation:**\n- `case int i when i > 0:` matches if `value` is an `int` greater than 0.\n- `case string s:` matches if `value` is a `string`.\n- `case null:` matches if `value` is `null`.\n- `default:` matches any other case.\n\nPattern matching in switch statements allows you to match types and apply conditions (using `when`), making your code more expressive and concise.',level:"Intermediate",created_at:"2025-04-20T08:59:27.953193Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"ae3e3c4f-7190-4560-a5d5-7ddecd2ed64e",question:"What is the syntax for creating a generic class in C#?",answer:`\`\`\`csharp
// Syntax for creating a generic class in C#
public class MyGenericClass<T>
{
    // Field of generic type
    private T _value;

    // Constructor
    public MyGenericClass(T value)
    {
        _value = value;
    }

    // Method that returns the generic type
    public T GetValue()
    {
        return _value;
    }
}
\`\`\`

**Usage Example:**
\`\`\`csharp
var intInstance = new MyGenericClass<int>(10);
int value = intInstance.GetValue(); // value = 10

var stringInstance = new MyGenericClass<string>("Hello");
string text = stringInstance.GetValue(); // text = "Hello"
\`\`\`

**Explanation:**
- The angle brackets \`<T>\` indicate that \`MyGenericClass\` is generic and \`T\` is a type parameter.
- You can use any valid identifier instead of \`T\`, but \`T\` is conventional for "Type".
- The class can be instantiated with any type (e.g., \`int\`, \`string\`, custom classes).`,level:"Advanced",created_at:"2025-04-20T08:59:27.953244Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"f8ac4d41-0806-4e93-88de-ed0d937a1637",question:"What is the syntax for creating a record type in C# 9.0 and above?",answer:`\`\`\`csharp
// Basic record type with positional parameters
public record Person(string FirstName, string LastName);

// Record type with properties and custom members
public record Employee
{
    public int Id { get; init; }
    public string Name { get; init; }
    public decimal Salary { get; init; }

    // Custom method
    public decimal AnnualSalary() => Salary * 12;
}
\`\`\`

**Explanation:**
- The \`record\` keyword is used to define an immutable reference type with value-based equality.
- Positional records (e.g., \`Person\`) automatically generate properties and a constructor.
- Records can also be declared with property initializers and custom members, as shown in \`Employee\`.
- Properties in records are typically \`init\`-only, allowing assignment during object initialization but not afterward.`,level:"Advanced",created_at:"2025-04-20T08:59:27.953293Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"b3c1b645-a08e-4b91-bda2-bc821bc80fe8",question:"What is the correct syntax to define a class in C# for .NET Core?",answer:`\`\`\`csharp
public class MyClass
{
    // Class members go here
}
\`\`\`

- Use the public (or another access modifier) keyword.
- Use the class keyword followed by the class name (e.g., MyClass).
- Enclose the class body within curly braces { }.
- Add properties, methods, and other members inside the class body.`,level:"Beginner",created_at:"2025-04-20T08:59:27.952964Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"9980448b-52a5-4e29-b981-a940eb39f8c4",question:"How do you declare a variable of type string in C#?",answer:'```markdown You can declare a variable of type string in C# using the following syntax:\n\n```csharp\nstring myVariable = "Hello, World!";\n```\n\nHere, string is the data type, myVariable is the variable name, and "Hello, World!" is the value assigned to the variable.',level:"Beginner",created_at:"2025-04-20T08:59:27.952988Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"60dc4044-cd4a-4457-b992-e4acf674ed59",question:"What is the syntax for a for loop in C#?",answer:"```csharp\nfor (int i = 0; i < 10; i++)\n{\n    // Code to execute in each iteration\n    Console.WriteLine(i);\n}\n```\n\n**Explanation:**\n- `int i = 0;` initializes the loop variable.\n- `i < 10;` is the loop condition; the loop continues while this is true.\n- `i++` increments the loop variable after each iteration.\n- The code inside the `{ }` block runs on each loop iteration.",level:"Beginner",created_at:"2025-04-20T08:59:27.952998Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"74e33d36-0774-4794-9acb-3c66db1ea245",question:"How do you write a method that returns an integer in C#?",answer:`\`\`\`markdown To write a method that returns an integer in C#, you specify int as the return type, give the method a name, and use the return statement to return an integer value. Here’s a simple example:

\`\`\`csharp
public int GetNumber()
{
    return 42;
}
\`\`\`

In this example:

- public is the access modifier.
- int is the return type.
- GetNumber is the method name.
- return 42; returns the integer value 42.`,level:"Beginner",created_at:"2025-04-20T08:59:27.953008Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"3cdd1747-2ab3-454a-85b9-a1e1c6cb7e7e",question:"What is the syntax for an if-else statement in C#?",answer:`\`\`\`csharp
if (condition)
{
    // Code to execute if the condition is true
}
else
{
    // Code to execute if the condition is false
}
\`\`\`

**Example:**
\`\`\`csharp
int number = 10;

if (number > 5)
{
    Console.WriteLine("Number is greater than 5");
}
else
{
    Console.WriteLine("Number is 5 or less");
}
\`\`\``,level:"Beginner",created_at:"2025-04-20T08:59:27.953017Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"35e1fb33-8be7-412b-bbbc-72953fc40c17",question:"How do you create an array of integers in C#?",answer:"```markdown You can create an array of integers in C# using the following syntax:\n\n```csharp\nint[] numbers = new int[5]; // Creates an array of 5 integers (all initialized to 0)\n```\n\nYou can also initialize the array with values:\n\n```csharp\nint[] numbers = new int[] { 1, 2, 3, 4, 5 };\n```\n\nOr, using shorthand syntax:\n\n```csharp\nint[] numbers = { 1, 2, 3, 4, 5 };\n```\n\nAll of these are valid ways to create an array of integers in C#.",level:"Beginner",created_at:"2025-04-20T08:59:27.953025Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"e0cccda3-5dc5-4cc9-9b05-26dfcf8911a5",question:"How do you instantiate an object from a class in C#?",answer:`\`\`\`markdown To instantiate an object from a class in C#, you use the new keyword followed by the class name and parentheses. Here’s the basic syntax:

\`\`\`csharp
ClassName objectName = new ClassName();
\`\`\`

**Example:**

\`\`\`csharp
// Define a class
public class Person
{
    public string Name;
}

// Instantiate an object from the class
Person person1 = new Person();
person1.Name = "Alice";
\`\`\`

This creates a new instance of the Person class and assigns it to the variable person1.`,level:"Beginner",created_at:"2025-04-20T08:59:27.953032Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"c929f616-dcec-443b-8b3b-220a9c8c9366",question:"What is the syntax for a switch statement in C#?",answer:`\`\`\`csharp
switch (variable)
{
    case value1:
        // Code to execute if variable == value1
        break;
    case value2:
        // Code to execute if variable == value2
        break;
    default:
        // Code to execute if variable doesn't match any case
        break;
}
\`\`\`

**Example:**
\`\`\`csharp
int day = 3;

switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    default:
        Console.WriteLine("Another day");
        break;
}
\`\`\`
**Output:**  
\`\`\`
Wednesday
\`\`\`
**Note:**  
- Each case must end with a break (or another jump statement like return).
- The default case is optional and handles any values not matched by the cases.`,level:"Beginner",created_at:"2025-04-20T08:59:27.953040Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"71cb0901-f589-45a6-9678-7918d9fe86b0",question:"How do you write a comment in C#?",answer:`\`\`\`csharp
// This is a single-line comment

/*
This is a
multi-line comment
*/
\`\`\``,level:"Beginner",created_at:"2025-04-20T08:59:27.953047Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"eedd1689-47e4-46a0-9902-d3fc87f79911",question:"How do you define a constructor in a C# class?",answer:`\`\`\`markdown In C#, you define a constructor in a class by creating a method with the same name as the class and no return type. Here’s a simple example:

\`\`\`csharp
public class Person
{
    // Constructor
    public Person()
    {
        // Initialization code here
        Console.WriteLine("Person object created!");
    }
}
\`\`\`

**Key points:**
- The constructor has the same name as the class (\`Person\`).
- It does not have a return type (not even \`void\`).
- Constructors are used to initialize objects when they are created.`,level:"Beginner",created_at:"2025-04-20T08:59:27.953054Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"781c98c9-6133-4b03-b692-0fa8923e44b2",question:"What is the syntax for exception handling using try-catch in C#?",answer:`\`\`\`csharp
try
{
    // Code that may throw an exception
}
catch (ExceptionType ex)
{
    // Code to handle the exception
    // ex.Message can be used to get the error message
}
\`\`\`

**Example:**
\`\`\`csharp
try
{
    int result = 10 / 0;
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Cannot divide by zero: " + ex.Message);
}
\`\`\`

You can also use a general catch block:
\`\`\`csharp
catch (Exception ex)
{
    // Handles any exception
}
\`\`\``,level:"Beginner",created_at:"2025-04-20T08:59:27.953062Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"db255fe8-7137-4a28-b35a-7b78164b0ad6",question:"How do you define a property in a C# class?",answer:`\`\`\`markdown You can define a property in a C# class using the following syntax:

\`\`\`csharp
public class Person
{
    // Property with get and set accessors
    public string Name { get; set; }
}
\`\`\`

- public: Access modifier (can also be private, protected, etc.)
- string: Data type of the property
- Name: Name of the property
- { get; set; }: Accessors to get and set the value

You can also add logic to the accessors if needed:

\`\`\`csharp
private int age;
public int Age
{
    get { return age; }
    set { age = value; }
}
\`\`\`

This is how you define properties in a C# class in .NET Core.`,level:"Beginner",created_at:"2025-04-20T08:59:27.953069Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"0e95a74f-c430-4330-8d25-89a9be2320ba",question:"How do you use string interpolation in C#?",answer:`\`\`\`markdown You can use string interpolation in C# by prefixing a string literal with the $ symbol and placing expressions inside curly braces {} within the string. Here's an example:

\`\`\`csharp
string name = "Alice";
int age = 30;

string message = $"Hello, my name is {name} and I am {age} years old.";
Console.WriteLine(message);
// Output: Hello, my name is Alice and I am 30 years old.
\`\`\`

String interpolation makes it easy to include variable values and expressions directly inside strings.`,level:"Beginner",created_at:"2025-04-20T08:59:27.953077Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"e4ead2ec-e01d-490e-a84f-08c18eb6860e",question:"What is the syntax for a while loop in C#?",answer:`\`\`\`csharp
while (condition)
{
    // Code to execute as long as the condition is true
}
\`\`\`

**Example:**
\`\`\`csharp
int i = 0;
while (i < 5)
{
    Console.WriteLine(i);
    i++;
}
\`\`\`

This loop will print numbers 0 to 4.`,level:"Beginner",created_at:"2025-04-20T08:59:27.953085Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"435d0188-8b73-48e0-9d49-75df8ea0ce6b",question:"How do you declare a constant in C#?",answer:'```markdown You can declare a constant in C# using the const keyword. The value of a constant must be assigned at the time of declaration and cannot be changed later.\n\n```csharp\nconst int MyNumber = 10;\nconst string Greeting = "Hello, World!";\n```\n\nConstants are usually written in uppercase letters by convention.',level:"Beginner",created_at:"2025-04-20T08:59:27.953092Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"2f73208b-0745-4705-a231-d7e967292c0b",question:"How do you define an interface in C#?",answer:`\`\`\`markdown To define an interface in C#, use the interface keyword followed by the interface name and a set of method/property signatures (without implementation). Here’s the syntax:

\`\`\`csharp
public interface IMyInterface
{
    void DoWork();
    int Calculate(int x, int y);
    string Name { get; set; }
}
\`\`\`

**Key Points:**
- Interface names often start with I by convention.
- Members of an interface do not have access modifiers (they are always public).
- Interfaces cannot contain fields or implementation code (except for default interface methods in newer C# versions).
- A class or struct implements an interface using the : symbol:

\`\`\`csharp
public class MyClass : IMyInterface
{
    public string Name { get; set; }

    public void DoWork()
    {
        // Implementation here
    }

    public int Calculate(int x, int y)
    {
        return x + y;
    }
}
\`\`\``,level:"Intermediate",created_at:"2025-04-20T08:59:27.953101Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"d8a6fce1-c22e-4393-b881-658221f6c7f1",question:"What is the syntax for implementing an interface in a C# class?",answer:`\`\`\`markdown To implement an interface in a C# class in .NET Core, use the following syntax:

\`\`\`csharp
// Define the interface
public interface IMyInterface
{
    void MyMethod();
}

// Implement the interface in a class
public class MyClass : IMyInterface
{
    public void MyMethod()
    {
        // Implementation of the method
        Console.WriteLine("MyMethod implementation.");
    }
}
\`\`\`

**Key points:**
- Use the : symbol after the class name to specify the interface(s) being implemented.
- All members of the interface must be implemented in the class.
- A class can implement multiple interfaces by separating them with commas.

\`\`\`csharp
public class MyClass : IFirstInterface, ISecondInterface
{
    // Implement members of both interfaces
}
\`\`\``,level:"Intermediate",created_at:"2025-04-20T08:59:27.953109Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"9956f11a-3d68-4429-bda3-5abe785ca3ca",question:"How do you define an abstract class in C#?",answer:`\`\`\`markdown In C#, you define an abstract class using the abstract keyword. An abstract class cannot be instantiated directly and can contain abstract methods (methods without implementation) as well as regular methods with implementation.

Here’s the syntax:

\`\`\`csharp
public abstract class Animal
{
    public abstract void MakeSound(); // Abstract method (no body)

    public void Eat() // Regular method
    {
        Console.WriteLine("Eating...");
    }
}
\`\`\`

Key points:

- Use the abstract keyword before the class declaration.
- Abstract classes can have both abstract and non-abstract members.
- Any class inheriting from an abstract class must implement all abstract methods.`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953117Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"d2f7ec03-dcd1-4c98-b148-a6eeef620e47",question:"How do you write a lambda expression in C#?",answer:`\`\`\`markdown A lambda expression in C# is a concise way to represent an anonymous method using the => (lambda) operator. The basic syntax is:

\`\`\`csharp
(parameters) => expression_or_statement_block
\`\`\`

**Examples:**

1. **Single parameter, single expression:**
   \`\`\`csharp
   Func<int, int> square = x => x * x;
   // Usage: square(5) returns 25
   \`\`\`

2. **Multiple parameters:**
   \`\`\`csharp
   Func<int, int, int> add = (a, b) => a + b;
   // Usage: add(2, 3) returns 5
   \`\`\`

3. **No parameters:**
   \`\`\`csharp
   Action greet = () => Console.WriteLine("Hello!");
   // Usage: greet();
   \`\`\`

4. **Statement block:**
   \`\`\`csharp
   Func<int, int, int> max = (a, b) =>
   {
       if (a > b)
           return a;
       else
           return b;
   };
   // Usage: max(4, 7) returns 7
   \`\`\`

**Usage Contexts:**
- LINQ queries
- Delegates
- Event handlers

**Summary:**  
A lambda expression uses the => operator to define anonymous functions inline, making your code more concise and readable.`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953125Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"b0342fe2-91d9-4d1b-b361-d7342441acd8",question:"What is the syntax for using LINQ to filter a list in C#?",answer:`\`\`\`csharp
using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 5, 8, 12, 20, 25 };

        // Using LINQ query syntax
        var evenNumbersQuery = from n in numbers
                               where n % 2 == 0
                               select n;

        // Using LINQ method syntax
        var evenNumbersMethod = numbers.Where(n => n % 2 == 0);

        Console.WriteLine("Even numbers (Query Syntax): " + string.Join(", ", evenNumbersQuery));
        Console.WriteLine("Even numbers (Method Syntax): " + string.Join(", ", evenNumbersMethod));
    }
}
\`\`\`

**Explanation:**

- **Query Syntax:**  
  \`\`\`csharp
  var result = from item in collection
               where condition
               select item;
  \`\`\`
- **Method Syntax:**  
  \`\`\`csharp
  var result = collection.Where(item => condition);
  \`\`\`

Both syntaxes filter a list based on a condition using LINQ in C#.`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953134Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"5475cad0-e017-45d7-ba93-5d6dc6b8d7a6",question:"How do you define an asynchronous method in C#?",answer:`\`\`\`markdown To define an asynchronous method in C#, you use the async modifier in the method signature and typically return a Task or Task<T>. Inside the method, you can use the await keyword to asynchronously wait for operations.

Here’s a basic example:

\`\`\`csharp
public async Task MyAsyncMethod()
{
    await Task.Delay(1000); // Simulates an asynchronous operation
    Console.WriteLine("Operation completed.");
}
\`\`\`

For methods that return a value:

\`\`\`csharp
public async Task<int> CalculateAsync()
{
    await Task.Delay(500);
    return 42;
}
\`\`\`

If the method doesn’t need to return a value or a Task, you can use async void, but this is generally reserved for event handlers:

\`\`\`csharp
public async void Button_Click(object sender, EventArgs e)
{
    await Task.Delay(1000);
    // Handle event
}
\`\`\`

**Key Points:**
- Use async in the method signature.
- Return Task, Task<T>, or (rarely) void.
- Use await for asynchronous operations inside the method.`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953142Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"d3715d2d-5138-4ef3-b907-961a3731360a",question:"What is the syntax for dependency injection in ASP.NET Core?",answer:`\`\`\`markdown
In ASP.NET Core, dependency injection (DI) is built-in and typically configured in the \`Startup.cs\` file (or in \`Program.cs\` in .NET 6+ minimal hosting model). The syntax involves registering services in the DI container and then injecting them into constructors.

### 1. Registering Services

You register services in the \`ConfigureServices\` method:

\`\`\`csharp
public void ConfigureServices(IServiceCollection services)
{
    // Register a transient service
    services.AddTransient<IMyService, MyService>();

    // Register a scoped service
    services.AddScoped<IOtherService, OtherService>();

    // Register a singleton service
    services.AddSingleton<IAnotherService, AnotherService>();
}
\`\`\`

### 2. Injecting Services

You inject services via constructor injection:

\`\`\`csharp
public class MyController : Controller
{
    private readonly IMyService _myService;

    public MyController(IMyService myService)
    {
        _myService = myService;
    }

    // Use _myService in your actions
}
\`\`\`

### 3. Minimal API Example (.NET 6+)

In .NET 6+ with the minimal hosting model:

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IMyService, MyService>();

var app = builder.Build();

app.MapGet("/", (IMyService myService) => myService.DoSomething());

app.Run();
\`\`\`

**Summary Table:**

| Lifetime    | Method                | Description                  |
|-------------|----------------------|------------------------------|
| Transient   | AddTransient<T, U>() | New instance every request   |
| Scoped      | AddScoped<T, U>()    | One per HTTP request         |
| Singleton   | AddSingleton<T, U>() | One for the application's lifetime |

**References:**
- [Microsoft Docs: Dependency injection in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection)
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953150Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"751a1d52-0e35-4034-891f-8f8ad35d9e62",question:"How do you register a service in the dependency injection container in .NET Core?",answer:`\`\`\`markdown To register a service in the dependency injection (DI) container in .NET Core, you typically use the IServiceCollection interface in the ConfigureServices method of your Startup class. You can register services with different lifetimes: Singleton, Scoped, or Transient.

Here's an example:

\`\`\`csharp
public void ConfigureServices(IServiceCollection services)
{
    // Register a service with transient lifetime
    services.AddTransient<IMyService, MyService>();

    // Register a service with scoped lifetime
    services.AddScoped<IOtherService, OtherService>();

    // Register a service with singleton lifetime
    services.AddSingleton<IAnotherService, AnotherService>();
}
\`\`\`

**Explanation:**
- \`AddTransient<TInterface, TImplementation>()\`: A new instance is provided every time the service is requested.
- \`AddScoped<TInterface, TImplementation>()\`: A new instance is created per scope (typically per web request).
- \`AddSingleton<TInterface, TImplementation>()\`: A single instance is used throughout the application's lifetime.

After registration, you can inject these services into your controllers or other classes via constructor injection.`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953158Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"c0573e78-82b5-4cf4-83f9-fc1d4273e274",question:"How do you use the 'using' statement for resource management in C#?",answer:`\`\`\`markdown In C#, the using statement is used to ensure that objects that consume unmanaged resources (like file handles, database connections, etc.) are properly disposed of when they are no longer needed. This helps prevent resource leaks.

Here's the basic syntax:

\`\`\`csharp
using (var resource = new ResourceType())
{
    // Use the resource here
}
// At this point, resource.Dispose() is called automatically
\`\`\`

**Example: Using a FileStream**

\`\`\`csharp
using (var fileStream = new FileStream("example.txt", FileMode.Open))
{
    // Read from or write to the file
}
// fileStream.Dispose() is called automatically here
\`\`\`

**Key Points:**

- The object used in the using statement must implement the IDisposable interface.
- When the code block completes (even if an exception occurs), the Dispose method is called automatically.
- In C# 8.0 and later, you can use the using declaration for more concise syntax:

\`\`\`csharp
using var fileStream = new FileStream("example.txt", FileMode.Open);
// Use fileStream here
// fileStream.Dispose() is called at the end of the scope
\`\`\`

This pattern is essential for managing resources efficiently in .NET Core applications.`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953167Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"5b796138-ae47-4eab-a815-1f54c46572d5",question:"How do you create a generic method in C#?",answer:`\`\`\`markdown To create a generic method in C#, you use angle brackets <> to specify the type parameter(s) after the method name. This allows the method to operate on different data types without duplicating code.

**Syntax Example:**

\`\`\`csharp
public T GenericMethod<T>(T parameter)
{
    // You can use 'T' as a type within this method
    return parameter;
}
\`\`\`

**Usage Example:**

\`\`\`csharp
int result = GenericMethod<int>(5);          // T is int
string text = GenericMethod<string>("hello"); // T is string
\`\`\`

**Key Points:**
- The type parameter (e.g., T) is declared in angle brackets after the method name.
- You can specify multiple type parameters: \`<T1, T2>\`.
- The type is inferred by the compiler in many cases, so you may not always need to specify it explicitly when calling the method.

**Example with Multiple Type Parameters:**

\`\`\`csharp
public void Swap<T>(ref T a, ref T b)
{
    T temp = a;
    a = b;
    b = temp;
}
\`\`\`

**Calling the Swap method:**

\`\`\`csharp
int x = 1, y = 2;
Swap(ref x, ref y); // x is now 2, y is now 1
\`\`\`

Generics help you write reusable and type-safe code in C#.`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953174Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"bd72e330-2684-4991-b201-ee76c7dcacc4",question:"How do you use extension methods in C#?",answer:`\`\`\`markdown To use extension methods in C#, follow these steps:

1. **Define a static class** to contain your extension method.
2. **Create a static method** inside that class. The first parameter of the method specifies which type the method operates on, and it must be preceded by the this modifier.
3. **Import the namespace** containing your extension method with a using directive.
4. **Call the extension method** as if it were a regular method on the target type.

### Example

\`\`\`csharp
// 1. Define the static class and extension method
public static class StringExtensions
{
    // 2. 'this' keyword on the first parameter
    public static bool IsCapitalized(this string str)
    {
        if (string.IsNullOrEmpty(str))
            return false;
        return char.IsUpper(str[0]);
    }
}

// 3. Import the namespace (if needed)
// using YourNamespace;

// 4. Use the extension method
class Program
{
    static void Main()
    {
        string word = "Hello";
        bool result = word.IsCapitalized(); // Calls the extension method
        Console.WriteLine(result); // Output: True
    }
}
\`\`\`

### Key Points

- Extension methods must be defined in a static class.
- The first parameter specifies the type being extended and uses the this keyword.
- Extension methods are called as if they are instance methods on the type.
- You need to include the namespace where the extension method is defined.

**Note:** Extension methods do not actually modify the original type; they provide syntactic sugar for calling static methods.`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953200Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"01a4a62c-c566-419a-bafa-3a248ba14b6c",question:"How do you define and use nullable types in C#?",answer:`\`\`\`markdown
### Defining and Using Nullable Types in C#

In C#, value types (like \`int\`, \`double\`, \`bool\`, etc.) cannot be assigned \`null\` by default. To allow a value type to represent \`null\`, you can use **nullable types**.

#### 1. Defining Nullable Types

You can define a nullable type in two ways:

- Using the \`?\` syntax:
  \`\`\`csharp
  int? myNumber = null;
  \`\`\`

- Using the \`Nullable<T>\` generic type:
  \`\`\`csharp
  Nullable<int> myNumber = null;
  \`\`\`

Both are equivalent.

#### 2. Checking for a Value

You can check if a nullable type has a value using the \`.HasValue\` property or by comparing to \`null\`:

\`\`\`csharp
if (myNumber.HasValue)
{
    Console.WriteLine($"Value: {myNumber.Value}");
}
else
{
    Console.WriteLine("No value assigned.");
}
\`\`\`

Or simply:

\`\`\`csharp
if (myNumber != null)
{
    Console.WriteLine($"Value: {myNumber}");
}
\`\`\`

#### 3. Getting the Value

- Use \`.Value\` to get the value (throws an exception if \`null\`):
  \`\`\`csharp
  int value = myNumber.Value;
  \`\`\`

- Use the null-coalescing operator \`??\` to provide a default:
  \`\`\`csharp
  int value = myNumber ?? 0; // If myNumber is null, value will be 0
  \`\`\`

#### 4. Example

\`\`\`csharp
int? age = null;

age = 25;

if (age.HasValue)
{
    Console.WriteLine($"Age is {age.Value}");
}
else
{
    Console.WriteLine("Age is not specified.");
}

// Using null-coalescing operator
int displayAge = age ?? -1;
Console.WriteLine($"Display Age: {displayAge}");
\`\`\`

#### 5. Nullable Reference Types (C# 8.0+)

For reference types, you can use nullable reference types to indicate whether a variable may be \`null\`:

\`\`\`csharp
string? name = null;
\`\`\`

> **Note:** Nullable reference types require enabling nullable context in your project.

---

**Summary:**  
Use \`?\` or \`Nullable<T>\` to define nullable value types, check for \`null\` before accessing their value, and use the null-coalescing operator for default values.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953207Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"2076e4f3-bac3-4c81-847a-8c9444433df8",question:"How do you create a custom attribute in C#?",answer:`\`\`\`markdown To create a custom attribute in C#, you define a class that inherits from System.Attribute. You can also specify usage restrictions with the AttributeUsage attribute.

\`\`\`csharp
using System;

// Define the custom attribute
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = false, AllowMultiple = true)]
public class MyCustomAttribute : Attribute
{
    public string Description { get; }
    public int Version { get; set; }

    public MyCustomAttribute(string description)
    {
        Description = description;
    }
}

// Apply the custom attribute
[MyCustomAttribute("This is a sample class", Version = 1)]
public class SampleClass
{
    [MyCustomAttribute("This is a sample method", Version = 2)]
    public void SampleMethod() { }
}
\`\`\`

**Key Points:**
- Inherit from \`System.Attribute\`.
- Use \`[AttributeUsage]\` to control where your attribute can be applied.
- Define constructors and properties for attribute parameters.
- Apply your attribute using \`[MyCustomAttribute(...)]\` syntax.`,level:"Advanced",created_at:"2025-04-20T08:59:27.953215Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"32f44b50-4453-43cf-9d45-fed0bd2dd356",question:"What is the syntax for reflection to get type information in .NET Core?",answer:`\`\`\`csharp
// Using reflection to get type information in .NET Core

// 1. Get the Type object from an instance
var obj = new MyClass();
Type type1 = obj.GetType();

// 2. Get the Type object from a type name
Type type2 = typeof(MyClass);

// 3. Get the Type object from a fully qualified type name
Type type3 = Type.GetType("Namespace.MyClass, AssemblyName");

// Example: Getting type information
Console.WriteLine(type1.FullName); // Prints the full type name

// Getting properties, methods, etc.
var properties = type1.GetProperties();
var methods = type1.GetMethods();
var fields = type1.GetFields();
var constructors = type1.GetConstructors();

// Example: Listing all method names
foreach (var method in methods)
{
    Console.WriteLine(method.Name);
}
\`\`\`

**Note:**  
- Reflection is in the \`System.Reflection\` namespace.
- In .NET Core, reflection APIs are similar to .NET Framework, but some APIs may have different behaviors or limitations.  
- Always include \`using System;\` and \`using System.Reflection;\` as needed.`,level:"Advanced",created_at:"2025-04-20T08:59:27.953222Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"b59511b5-b148-4f62-b451-a1cb01b41e1e",question:"How do you use async/await with Task in C#?",answer:'```markdown\nIn C#, `async` and `await` are used to write asynchronous code in a clear and concise way, especially when working with `Task` or `Task<T>` objects. Here’s how you use them:\n\n### 1. Mark the Method as `async`\n\nAdd the `async` modifier to your method. The method should return either `Task`, `Task<T>`, or `void` (for event handlers).\n\n```csharp\npublic async Task MyAsyncMethod()\n{\n    // Asynchronous code here\n}\n```\n\n### 2. Use `await` with an Asynchronous Operation\n\nInside the `async` method, use the `await` keyword before a method that returns a `Task` or `Task<T>`. This tells the compiler to asynchronously wait for the task to complete.\n\n```csharp\npublic async Task<string> DownloadContentAsync(string url)\n{\n    using (var httpClient = new HttpClient())\n    {\n        string content = await httpClient.GetStringAsync(url);\n        return content;\n    }\n}\n```\n\n### 3. Calling the Async Method\n\nYou can call the async method and either `await` it (if inside another async method) or use `.Result` or `.Wait()` (not recommended, as it can cause deadlocks).\n\n```csharp\n// Inside another async method\nstring result = await DownloadContentAsync("https://example.com");\n\n// In a synchronous context (not recommended)\nstring result = DownloadContentAsync("https://example.com").Result;\n```\n\n### 4. Example: Using Task.Run\n\nYou can also run CPU-bound work asynchronously using `Task.Run`:\n\n```csharp\npublic async Task<int> CalculateAsync()\n{\n    int result = await Task.Run(() => \n    {\n        // Simulate long-running calculation\n        Thread.Sleep(2000);\n        return 42;\n    });\n    return result;\n}\n```\n\n### Key Points\n\n- Use `async` on the method signature.\n- Use `await` before a `Task`-returning method.\n- The method returns `Task` or `Task<T>`.\n- Avoid blocking calls like `.Result` or `.Wait()` in UI or ASP.NET Core apps.\n\n### References\n\n- [Microsoft Docs: Asynchronous programming with async and await](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/)\n```\n',level:"Advanced",created_at:"2025-04-20T08:59:27.953229Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"1cdd68be-2dac-40bb-bc8d-62f31f6b43f2",question:"How do you write a custom middleware in ASP.NET Core?",answer:`\`\`\`markdown To write a custom middleware in ASP.NET Core, you typically create a class with an Invoke or InvokeAsync method that takes an HttpContext and a RequestDelegate. You then register this middleware in the application's request pipeline using the IApplicationBuilder.UseMiddleware<T>() extension method.

Here's a step-by-step example:

1. **Create the Middleware Class**

\`\`\`csharp
public class CustomMiddleware
{
    private readonly RequestDelegate _next;

    public CustomMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Pre-processing logic before the next middleware
        Console.WriteLine("Custom Middleware: Before next middleware");

        await _next(context); // Call the next middleware

        // Post-processing logic after the next middleware
        Console.WriteLine("Custom Middleware: After next middleware");
    }
}
\`\`\`

2. **Register the Middleware in the Pipeline**

In your \`Startup.cs\` (for .NET Core 3.x and earlier) or in the \`Program.cs\` (for .NET 6+ minimal hosting), register the middleware:

\`\`\`csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseMiddleware<CustomMiddleware>();

    // Other middlewares (e.g., routing, endpoints)
    app.UseRouting();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
\`\`\`

**Or in .NET 6+ minimal hosting:**

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseMiddleware<CustomMiddleware>();

app.MapControllers();
app.Run();
\`\`\`

3. **(Optional) Create an Extension Method for Cleaner Syntax**

\`\`\`csharp
public static class CustomMiddlewareExtensions
{
    public static IApplicationBuilder UseCustomMiddleware(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<CustomMiddleware>();
    }
}
\`\`\`

Then register with:

\`\`\`csharp
app.UseCustomMiddleware();
\`\`\`

---

**Summary:**  
A custom middleware in ASP.NET Core is a class with an \`Invoke\` or \`InvokeAsync\` method that processes the \`HttpContext\` and calls the next middleware in the pipeline. Register it using \`app.UseMiddleware<YourMiddleware>()\` or a custom extension method.`,level:"Advanced",created_at:"2025-04-20T08:59:27.953236Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"c36fc2c5-c484-4f99-a8e9-6731463faa9d",question:"How do you use dependency injection with scoped, singleton, and transient lifetimes in .NET Core?",answer:`\`\`\`markdown
In .NET Core, dependency injection (DI) is built-in and configured in the \`Startup.cs\` (or \`Program.cs\` in .NET 6+). Services are registered with different lifetimes:

- **Singleton**: A single instance is created and shared throughout the application's lifetime.
- **Scoped**: A new instance is created per HTTP request (or per scope).
- **Transient**: A new instance is created every time the service is requested.

### Registering Services

You register services in the DI container using the following methods:

\`\`\`csharp
public void ConfigureServices(IServiceCollection services)
{
    // Singleton: One instance for the entire application
    services.AddSingleton<IMySingletonService, MySingletonService>();

    // Scoped: One instance per HTTP request
    services.AddScoped<IMyScopedService, MyScopedService>();

    // Transient: New instance every time it's requested
    services.AddTransient<IMyTransientService, MyTransientService>();
}
\`\`\`

### Injecting Services

You can inject these services into controllers or other services via constructor injection:

\`\`\`csharp
public class MyController : ControllerBase
{
    private readonly IMySingletonService _singletonService;
    private readonly IMyScopedService _scopedService;
    private readonly IMyTransientService _transientService;

    public MyController(
        IMySingletonService singletonService,
        IMyScopedService scopedService,
        IMyTransientService transientService)
    {
        _singletonService = singletonService;
        _scopedService = scopedService;
        _transientService = transientService;
    }

    // Use the services in your actions
}
\`\`\`

### Summary Table

| Lifetime   | Instance per...         | Use case                          |
|------------|------------------------|-----------------------------------|
| Singleton  | Application            | Shared state, stateless services  |
| Scoped     | HTTP Request / Scope   | Per-request data, DB contexts     |
| Transient  | Service request        | Lightweight, stateless services   |

### Notes

- Avoid storing state in singleton services that is specific to a user/request.
- Scoped services are ideal for things like EF Core \`DbContext\`.
- Transient services are best for lightweight, stateless operations.

For more advanced scenarios, you can also inject \`IServiceProvider\` or use factory methods.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:59:27.953252Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"e7b5a8ab-9a32-4888-ba05-c7c892c588fd",question:"How do you define and use delegates in C#?",answer:`\`\`\`markdown
### Defining and Using Delegates in C#

A **delegate** in C# is a type that represents references to methods with a particular parameter list and return type. Delegates are used to pass methods as arguments to other methods, and they are the foundation for events and callback methods.

#### 1. Defining a Delegate

To define a delegate, use the \`delegate\` keyword followed by the return type and parameter list:

\`\`\`csharp
// Delegate that takes two integers and returns an integer
public delegate int Operation(int x, int y);
\`\`\`

#### 2. Assigning a Method to a Delegate

You can assign any method that matches the delegate's signature:

\`\`\`csharp
public class Calculator
{
    public int Add(int a, int b) => a + b;
    public int Subtract(int a, int b) => a - b;
}
\`\`\`

\`\`\`csharp
Calculator calc = new Calculator();
Operation op = calc.Add; // Assigning method to delegate
\`\`\`

#### 3. Invoking the Delegate

You can invoke the delegate as if it were a method:

\`\`\`csharp
int result = op(5, 3); // Calls calc.Add(5, 3)
Console.WriteLine(result); // Output: 8
\`\`\`

#### 4. Multicast Delegates

Delegates can reference multiple methods using the \`+\` or \`+=\` operator:

\`\`\`csharp
Operation op = calc.Add;
op += calc.Subtract; // Now op references both Add and Subtract

int result = op(10, 5); // Only the result of the last method (Subtract) is returned
\`\`\`

#### 5. Using Anonymous Methods and Lambda Expressions

You can use anonymous methods or lambda expressions with delegates:

\`\`\`csharp
Operation op = delegate(int x, int y) { return x * y; };
Operation op2 = (x, y) => x / y;
\`\`\`

#### 6. Built-in Delegates

C# provides generic delegates like \`Func<>\`, \`Action<>\`, and \`Predicate<>\`:

\`\`\`csharp
Func<int, int, int> multiply = (a, b) => a * b;
Action<string> print = s => Console.WriteLine(s);
\`\`\`

---

**Summary Table**

| Syntax                       | Example                                 |
|------------------------------|-----------------------------------------|
| Delegate declaration         | \`public delegate int Operation(int x, int y);\` |
| Assign method to delegate    | \`Operation op = calc.Add;\`              |
| Invoke delegate              | \`int result = op(5, 3);\`                |
| Multicast delegate           | \`op += calc.Subtract;\`                  |
| Lambda with delegate         | \`Operation op = (x, y) => x * y;\`       |
| Built-in delegate (Func)     | \`Func<int, int, int> f = (x, y) => x+y;\`|

---

**References:**
- [Microsoft Docs: Delegates](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:59:27.953259Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"468648ea-418d-43f2-b8f1-16980ebb3576",question:"What is the syntax for creating and using events in C#?",answer:`\`\`\`markdown
### Creating and Using Events in C# (.NET Core)

#### 1. Define a Delegate

An event in C# is based on a delegate type. First, define a delegate that specifies the signature of the event handler methods.

\`\`\`csharp
public delegate void MyEventHandler(object sender, EventArgs e);
\`\`\`

#### 2. Declare an Event

Use the \`event\` keyword with the delegate type to declare an event in a class.

\`\`\`csharp
public class Publisher
{
    public event MyEventHandler MyEvent;
}
\`\`\`

#### 3. Raise (Invoke) the Event

Within the class, raise the event by invoking it, typically in a protected virtual method.

\`\`\`csharp
public class Publisher
{
    public event MyEventHandler MyEvent;

    protected virtual void OnMyEvent()
    {
        MyEvent?.Invoke(this, EventArgs.Empty);
    }

    public void DoSomething()
    {
        // Some logic...
        OnMyEvent(); // Raise the event
    }
}
\`\`\`

#### 4. Subscribe to the Event

Other classes can subscribe to the event using \`+=\` and provide a handler method matching the delegate signature.

\`\`\`csharp
public class Subscriber
{
    public void HandleEvent(object sender, EventArgs e)
    {
        Console.WriteLine("Event received!");
    }
}
\`\`\`

\`\`\`csharp
var publisher = new Publisher();
var subscriber = new Subscriber();

publisher.MyEvent += subscriber.HandleEvent;
publisher.DoSomething(); // Output: Event received!
\`\`\`

---

#### **Using Built-in EventHandler Delegate**

For most cases, you can use the built-in \`EventHandler\` or \`EventHandler<TEventArgs>\` delegate:

\`\`\`csharp
public class Publisher
{
    public event EventHandler MyEvent;

    protected virtual void OnMyEvent()
    {
        MyEvent?.Invoke(this, EventArgs.Empty);
    }
}
\`\`\`

---

### **Summary Table**

| Step         | Syntax Example                                  |
|--------------|-------------------------------------------------|
| Delegate     | \`public delegate void MyEventHandler(...);\`      |
| Event        | \`public event MyEventHandler MyEvent;\`           |
| Raise Event  | \`MyEvent?.Invoke(this, EventArgs.Empty);\`        |
| Subscribe    | \`publisher.MyEvent += subscriber.HandleEvent;\`   |

---
\`\`\``,level:"Advanced",created_at:"2025-04-20T08:59:27.953266Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"ee7e0c15-f59e-4324-b9ae-e1452e6fed5c",question:"How do you use tuples in C#?",answer:`\`\`\`markdown
### Using Tuples in C#

Tuples in C# (from C# 7.0 onwards) provide a lightweight way to group multiple values into a single compound value without creating a custom class or struct. The syntax is concise and supports named elements for better readability.

#### 1. Creating a Tuple

You can create a tuple using the \`(T1, T2, ..., Tn)\` syntax:

\`\`\`csharp
var tuple = (1, "apple", true);
\`\`\`

#### 2. Accessing Tuple Elements

Tuple elements can be accessed using \`.Item1\`, \`.Item2\`, etc.:

\`\`\`csharp
Console.WriteLine(tuple.Item1); // 1
Console.WriteLine(tuple.Item2); // apple
Console.WriteLine(tuple.Item3); // true
\`\`\`

#### 3. Named Tuple Elements

You can assign names to tuple elements for clarity:

\`\`\`csharp
var person = (Name: "Alice", Age: 30, IsMember: true);
Console.WriteLine(person.Name);     // Alice
Console.WriteLine(person.Age);      // 30
Console.WriteLine(person.IsMember); // true
\`\`\`

#### 4. Returning Tuples from Methods

Tuples are commonly used to return multiple values from a method:

\`\`\`csharp
(string Name, int Age) GetPerson()
{
    return ("Bob", 25);
}

var result = GetPerson();
Console.WriteLine(result.Name); // Bob
Console.WriteLine(result.Age);  // 25
\`\`\`

#### 5. Deconstructing Tuples

You can deconstruct tuples into separate variables:

\`\`\`csharp
var (name, age) = GetPerson();
Console.WriteLine(name); // Bob
Console.WriteLine(age);  // 25
\`\`\`

#### 6. Tuple Type Declaration

You can explicitly declare the tuple type:

\`\`\`csharp
(ValueTuple<int, string, bool> myTuple) = (42, "dotnet", false);
\`\`\`

#### 7. Using Tuples with LINQ and Collections

Tuples can be used in collections and LINQ queries:

\`\`\`csharp
var list = new List<(int Id, string Value)>
{
    (1, "A"),
    (2, "B")
};

foreach (var (id, value) in list)
{
    Console.WriteLine($"{id}: {value}");
}
\`\`\`

#### 8. Notes

- Tuples are value types (\`struct\`) and are mutable.
- For more complex scenarios or when you need immutability, consider using \`record\` types or custom classes.

**References:**
- [Microsoft Docs: Tuples](https://learn.microsoft.com/en-us/dotnet/csharp/tuples)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:59:27.953273Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"acac0888-ca48-42d7-a2e5-7fd32566c1c3",question:"How do you implement IDisposable and use the Dispose pattern in C#?",answer:`\`\`\`markdown
To implement \`IDisposable\` and use the Dispose pattern in C#, follow these steps:

### 1. Implement the IDisposable Interface

The \`IDisposable\` interface requires you to implement the \`Dispose()\` method.

### 2. Dispose Pattern (with Finalizer)

If your class holds unmanaged resources directly or references to other IDisposable objects, use the full dispose pattern:

\`\`\`csharp
public class MyResource : IDisposable
{
    // Flag to detect redundant calls
    private bool _disposed = false;

    // Example of an unmanaged resource
    private IntPtr _unmanagedResource;

    // Example of a managed resource
    private SomeManagedResource _managedResource;

    public MyResource()
    {
        // Allocate resources
        _unmanagedResource = /* allocate unmanaged resource */;
        _managedResource = new SomeManagedResource();
    }

    // Public implementation of Dispose pattern callable by consumers.
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    // Protected implementation of Dispose pattern.
    protected virtual void Dispose(bool disposing)
    {
        if (_disposed)
            return;

        if (disposing)
        {
            // Free any other managed objects here.
            _managedResource?.Dispose();
        }

        // Free any unmanaged objects here.
        if (_unmanagedResource != IntPtr.Zero)
        {
            // Release unmanaged resource
            // Example: Marshal.FreeHGlobal(_unmanagedResource);
            _unmanagedResource = IntPtr.Zero;
        }

        _disposed = true;
    }

    // Destructor/Finalizer
    ~MyResource()
    {
        Dispose(false);
    }
}
\`\`\`

### 3. Usage Example

\`\`\`csharp
using (var resource = new MyResource())
{
    // Use resource
}
// Dispose is called automatically at the end of the using block
\`\`\`

### 4. Key Points

- **Dispose(bool disposing):**  
  - \`disposing == true\`: Called from \`Dispose()\`, safe to access managed objects.
  - \`disposing == false\`: Called from finalizer, only unmanaged resources should be accessed.
- **GC.SuppressFinalize(this):** Prevents the finalizer from running if Dispose has already been called.
- **Finalizer (~MyResource):** Only needed if you have unmanaged resources.

### 5. Reference

- [Microsoft Docs: Implement a Dispose method](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose)

\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:59:27.953280Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"7d00fda5-48db-476c-868b-620de341969d",question:"How do you use the yield return statement in C#?",answer:`\`\`\`markdown
The \`yield return\` statement in C# is used within an iterator method to provide a value to the enumerator object one at a time, without creating a temporary collection. This enables deferred execution and efficient memory usage, especially when working with large data sets or streams.

**Syntax Example:**

\`\`\`csharp
public IEnumerable<int> GetEvenNumbers(int max)
{
    for (int i = 0; i <= max; i++)
    {
        if (i % 2 == 0)
        {
            yield return i;
        }
    }
}
\`\`\`

**Usage:**

\`\`\`csharp
foreach (var even in GetEvenNumbers(10))
{
    Console.WriteLine(even);
}
\`\`\`

**Key Points:**

- The method must return \`IEnumerable\`, \`IEnumerable<T>\`, \`IEnumerator\`, or \`IEnumerator<T>\`.
- Each \`yield return\` pauses the method, saving its state, and resumes when the next value is requested.
- You can use \`yield break;\` to end the iteration early.
- Useful for custom collection iteration, streaming data, or implementing lazy evaluation.

**Example with \`yield break\`:**

\`\`\`csharp
public IEnumerable<int> GetNumbersUntilNegative(IEnumerable<int> numbers)
{
    foreach (var n in numbers)
    {
        if (n < 0)
            yield break;
        yield return n;
    }
}
\`\`\`
\`\`\``,level:"Advanced",created_at:"2025-04-20T08:59:27.953287Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"b538724a-dc6e-411b-960e-22769826ff50",question:"How do you use dependency injection in a console application in .NET Core?",answer:`\`\`\`markdown
In .NET Core, dependency injection (DI) is built-in and can be used in console applications similarly to how it's used in ASP.NET Core. Here’s how you can set up and use DI in a .NET Core console app:

### 1. Add Required NuGet Packages

Make sure your project references the following package (if not already present):

\`\`\`bash
dotnet add package Microsoft.Extensions.DependencyInjection
\`\`\`

### 2. Define Your Services and Interfaces

\`\`\`csharp
public interface IGreetingService
{
    void Greet(string name);
}

public class GreetingService : IGreetingService
{
    public void Greet(string name)
    {
        Console.WriteLine($"Hello, {name}!");
    }
}
\`\`\`

### 3. Configure the DI Container

In your \`Program.cs\`, set up the service collection and build the service provider:

\`\`\`csharp
using Microsoft.Extensions.DependencyInjection;

class Program
{
    static void Main(string[] args)
    {
        // 1. Create service collection
        var serviceCollection = new ServiceCollection();

        // 2. Register services
        serviceCollection.AddTransient<IGreetingService, GreetingService>();

        // 3. Build service provider
        var serviceProvider = serviceCollection.BuildServiceProvider();

        // 4. Resolve and use services
        var greeter = serviceProvider.GetRequiredService<IGreetingService>();
        greeter.Greet("World");
    }
}
\`\`\`

### 4. Constructor Injection

You can also use constructor injection for classes that depend on services:

\`\`\`csharp
public class App
{
    private readonly IGreetingService _greetingService;

    public App(IGreetingService greetingService)
    {
        _greetingService = greetingService;
    }

    public void Run()
    {
        _greetingService.Greet("Dependency Injection");
    }
}

// In Program.cs
serviceCollection.AddTransient<App>();
var app = serviceProvider.GetRequiredService<App>();
app.Run();
\`\`\`

### 5. Summary

- Register your services with \`IServiceCollection\`.
- Build the provider with \`BuildServiceProvider()\`.
- Use \`GetRequiredService<T>()\` to resolve dependencies.
- Use constructor injection for dependent classes.

This approach brings the power of dependency injection to your .NET Core console applications, making them more modular and testable.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:59:27.953301Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"b2bff153-a298-45ab-8bd2-222b11473692",question:"How do you use the 'global using' directive in .NET 6 and above?",answer:`\`\`\`markdown
In .NET 6 and above, the \`global using\` directive allows you to specify namespaces that are automatically available across all files in your project, eliminating the need to repeatedly include the same \`using\` statements in every file.

### Syntax

\`\`\`csharp
global using NamespaceName;
\`\`\`

For example:
\`\`\`csharp
global using System;
global using System.Collections.Generic;
\`\`\`

### How to Use

1. **In Any C# File**  
   You can place \`global using\` directives at the top of any \`.cs\` file. However, it's common practice to create a dedicated file (e.g., \`GlobalUsings.cs\`) in your project root and put all your global usings there.

2. **Effect**  
   All files in the same project will have access to the namespaces specified with \`global using\`, as if you had written a normal \`using\` directive at the top of each file.

### Example

**GlobalUsings.cs**
\`\`\`csharp
global using System;
global using System.Linq;
global using MyProject.Shared;
\`\`\`

**AnyOtherFile.cs**
\`\`\`csharp
// No need to write 'using System;' or 'using System.Linq;'
Console.WriteLine("Hello, World!");
var numbers = Enumerable.Range(1, 10);
\`\`\`

### Notes

- \`global using\` is only available in .NET 6 (C# 10) and above.
- You can also use \`global using static\` and \`global using alias\` for static imports and aliases, respectively.

**Example:**
\`\`\`csharp
global using static System.Math;
global using Project = MyCompany.MyProject;
\`\`\`

### Benefits

- Reduces boilerplate code.
- Makes common namespaces available everywhere in the project.
- Improves code readability and maintainability.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:59:27.953308Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"365fcba7-c8ad-42b9-9b84-20814a569935",question:"How do you use nullable reference types and what is the syntax to enable them?",answer:`\`\`\`markdown
### Using Nullable Reference Types in .NET Core

Nullable reference types help you write safer code by distinguishing between variables that can be \`null\` and those that cannot. This feature is available in C# 8.0 and later.

#### Enabling Nullable Reference Types

You can enable nullable reference types in your project in two main ways:

1. **Project-wide (Recommended):**

   Add the following line to your \`.csproj\` file inside a \`<PropertyGroup>\`:

   \`\`\`xml
   <Nullable>enable</Nullable>
   \`\`\`

2. **Per File or Region:**

   At the top of your C# file or within a code region, use:

   \`\`\`csharp
   #nullable enable
   \`\`\`

#### Syntax and Usage

- **Non-nullable reference type:**  
  By default, reference types are non-nullable when the feature is enabled.

  \`\`\`csharp
  string name = "Alice"; // Cannot be null
  \`\`\`

- **Nullable reference type:**  
  Add a \`?\` to indicate a reference type can be null.

  \`\`\`csharp
  string? nickname = null; // Can be null
  \`\`\`

- **Nullability Warnings:**  
  The compiler will warn you if you assign \`null\` to a non-nullable reference type or if you dereference a potentially null value.

  \`\`\`csharp
  void PrintLength(string? input)
  {
      // Warning: Possible dereference of a null reference
      Console.WriteLine(input.Length);
  }
  \`\`\`

  To suppress the warning (if you're sure it's not null), use the null-forgiving operator \`!\`:

  \`\`\`csharp
  Console.WriteLine(input!.Length);
  \`\`\`

#### Example

\`\`\`csharp
#nullable enable

public class Person
{
    public string Name { get; set; } // Non-nullable
    public string? Nickname { get; set; } // Nullable
}
\`\`\`

#### Summary Table

| Syntax           | Meaning                        |
|------------------|-------------------------------|
| \`string\`         | Non-nullable reference type    |
| \`string?\`        | Nullable reference type        |
| \`#nullable enable\` | Enable in file/region        |
| \`<Nullable>enable</Nullable>\` | Enable in project |

**Note:** Nullable reference types are a compile-time feature and do not change the runtime behavior of your code.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:59:27.953314Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"e630ad06-2568-42eb-adb7-6da874c91331",question:"How do you create and use local functions in C#?",answer:`\`\`\`markdown
### Creating and Using Local Functions in C#

**Local functions** in C# are functions declared inside the body of another method, constructor, or property accessor. They help encapsulate helper logic that is only relevant within the containing method, improving code organization and readability.

#### Syntax

\`\`\`csharp
void OuterMethod()
{
    // Local function declaration
    void LocalFunction(int x)
    {
        Console.WriteLine($"Value: {x}");
    }

    // Using the local function
    LocalFunction(42);
}
\`\`\`

#### Key Points

- Local functions can have parameters, return types, and even be generic.
- They can access variables and parameters from the containing method (including \`ref\`, \`out\`, and \`in\` parameters).
- They are only visible within the scope of the containing method.

#### Example: Returning Values

\`\`\`csharp
int CalculateSum(int a, int b)
{
    // Local function with return value
    int Add(int x, int y) => x + y;

    return Add(a, b);
}
\`\`\`

#### Example: Using Local Functions for Recursion

\`\`\`csharp
int Factorial(int n)
{
    // Recursive local function
    int Compute(int x)
    {
        if (x <= 1) return 1;
        return x * Compute(x - 1);
    }

    return Compute(n);
}
\`\`\`

#### When to Use Local Functions

- When helper logic is only relevant to a single method.
- To avoid polluting the containing class with private methods.
- To improve code clarity and maintainability.

#### Notes

- Local functions were introduced in C# 7.0.
- They differ from lambdas: local functions have better performance, can be recursive, and support \`ref\`/\`out\` parameters.

**References:**
- [Microsoft Docs: Local Functions](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/local-functions)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:59:27.953322Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"2bef05aa-b6ce-42da-8e05-f035212b7c02",question:"How do you use the 'with' expression for immutable objects in C#?",answer:`\`\`\`markdown
In C#, the \`with\` expression is used with **record types** to create a copy of an immutable object with some properties modified. This feature was introduced in C# 9.0 and is primarily intended for use with records, which are reference types designed for immutability.

### Syntax Example

\`\`\`csharp
public record Person(string FirstName, string LastName, int Age);

var person1 = new Person("Alice", "Smith", 30);

// Create a new object with a modified Age property
var person2 = person1 with { Age = 31 };

// person1 remains unchanged
Console.WriteLine(person1); // Output: Person { FirstName = Alice, LastName = Smith, Age = 30 }
Console.WriteLine(person2); // Output: Person { FirstName = Alice, LastName = Smith, Age = 31 }
\`\`\`

### Key Points

- The \`with\` expression creates a **shallow copy** of the original object, applying any specified property changes.
- It only works with **record types** (not with regular classes or structs).
- The original object remains unchanged, preserving immutability.

### Usage

The \`with\` expression is ideal for scenarios where you want to create a new version of an object with some updated values, without mutating the original instance.

\`\`\`csharp
var updatedPerson = person1 with { LastName = "Johnson", Age = 32 };
\`\`\`

This creates a new \`Person\` object with the updated \`LastName\` and \`Age\`, while \`person1\` remains unchanged.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:59:27.953329Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"8c4960db-1f35-46ff-9b14-4877209a5b3c",question:"How do you define and use indexers in C#?",answer:`\`\`\`markdown
### Defining and Using Indexers in C#

**Indexers** in C# allow objects to be indexed like arrays. They are defined using the \`this\` keyword and are commonly used to provide array-like access to collections or custom types.

#### Defining an Indexer

Here's a basic example of how to define an indexer in a class:

\`\`\`csharp
public class SampleCollection<T>
{
    private T[] arr = new T[100];

    // Indexer declaration
    public T this[int index]
    {
        get { return arr[index]; }
        set { arr[index] = value; }
    }
}
\`\`\`

- The \`this\` keyword is used to define the indexer.
- The parameter list (e.g., \`int index\`) specifies the type of index.
- The return type (\`T\` in this case) is the type of element accessed.

#### Using an Indexer

You can use the indexer just like an array:

\`\`\`csharp
var collection = new SampleCollection<string>();
collection[0] = "Hello";
collection[1] = "World";

Console.WriteLine(collection[0]); // Output: Hello
Console.WriteLine(collection[1]); // Output: World
\`\`\`

#### Key Points

- Indexers can be overloaded (e.g., by using different parameter types or numbers).
- Indexers can be read-only, write-only, or read-write.
- Indexers can have multiple parameters (like multidimensional arrays).

#### Example: Indexer with Multiple Parameters

\`\`\`csharp
public class Matrix
{
    private int[,] data = new int[10, 10];

    public int this[int row, int col]
    {
        get { return data[row, col]; }
        set { data[row, col] = value; }
    }
}

// Usage:
var matrix = new Matrix();
matrix[2, 3] = 42;
Console.WriteLine(matrix[2, 3]); // Output: 42
\`\`\`

**Summary:**  
Indexers provide a way to access class or struct instances using array-like syntax, making your types more intuitive and flexible.
\`\`\``,level:"Advanced",created_at:"2025-04-20T08:59:27.953340Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"c718b7e5-07cf-49a8-b977-ac9464b0fa5e",question:"How do you use the 'init' accessor for properties in C# 9.0 and above?",answer:`\`\`\`markdown
In C# 9.0 and above, the \`init\` accessor allows you to set properties only during object initialization (i.e., in an object initializer or constructor), but not afterwards. This enables immutable objects with more flexible initialization than traditional \`readonly\` properties.

**Syntax Example:**

\`\`\`csharp
public class Person
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
}
\`\`\`

**Usage:**

\`\`\`csharp
var person = new Person
{
    FirstName = "Alice",
    LastName = "Smith"
};

// The following line would cause a compile-time error:
// person.FirstName = "Bob"; // Error: init-only property
\`\`\`

**Key Points:**
- \`init\` can be used instead of \`set\` for properties.
- Properties with \`init\` can only be assigned during object creation (object initializer or constructor).
- After initialization, the property becomes effectively immutable.
- Useful for creating immutable data models and records.

**With Records (C# 9.0+):**

\`\`\`csharp
public record Person(string FirstName, string LastName);

// Or with explicit properties:
public record Person
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
}
\`\`\`
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:59:27.953351Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"},{id:"76030a2c-6955-4732-a58f-0f3f6dd48eb7",question:"How do you use the 'nameof' operator in C#?",answer:`\`\`\`markdown The nameof operator in C# is used to obtain the simple (unqualified) string name of a variable, type, or member. It is evaluated at compile time and helps avoid hardcoding string literals, making code more maintainable and less error-prone.

**Syntax Example:**

\`\`\`csharp
public class Person
{
    public string FirstName { get; set; }

    public void PrintName()
    {
        Console.WriteLine(nameof(FirstName)); // Output: FirstName
    }
}
\`\`\`

**Common Use Cases:**

- **Argument validation:**
  \`\`\`csharp
  void SetAge(int age)
  {
      if (age < 0)
          throw new ArgumentException("Age cannot be negative.", nameof(age));
  }
  \`\`\`

- **PropertyChanged notifications (MVVM):**
  \`\`\`csharp
  public event PropertyChangedEventHandler PropertyChanged;

  protected void OnPropertyChanged(string propertyName)
  {
      PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
  }

  private string _name;
  public string Name
  {
      get => _name;
      set
      {
          _name = value;
          OnPropertyChanged(nameof(Name));
      }
  }
  \`\`\`

**Benefits:**

- Refactoring safety: If you rename the variable or member, the nameof expression updates automatically.
- Compile-time checking: Errors are caught at compile time, not runtime.

**Summary Table:**

| Expression         | Output         |
|--------------------|---------------|
| nameof(Person)     | "Person"      |
| nameof(FirstName)  | "FirstName"   |
| nameof(SetAge)     | "SetAge"      |

Use nameof for safer, cleaner, and more maintainable code when referring to identifiers as strings.`,level:"Intermediate",created_at:"2025-04-20T08:59:27.953362Z",topic:"4de1383d-ac22-4fba-a29c-821f652249aa"}];export{e as default};
