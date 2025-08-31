const e=[{id:"d83d59a0-47c4-40a9-b4ec-88c8497e666b",question:"What is an object in C#?",answer:`\`\`\`markdown An **object** in C# is an instance of a class. It is a concrete entity based on a class blueprint, which encapsulates data (fields/properties) and behavior (methods) defined by the class.

**Example:**

\`\`\`csharp
// Define a class
public class Car
{
    public string color;
    public void Drive()
    {
        Console.WriteLine("The car is driving.");
    }
}

// Create an object of the class
Car myCar = new Car();
myCar.color = "Red";
myCar.Drive();
\`\`\`

**Key Points:**
- An object is created using the \`new\` keyword.
- Objects have their own copies of class fields and can use class methods.
- Multiple objects can be created from the same class, each with its own state.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629770Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"718129c5-3e10-4fb6-a033-a49213a09d87",question:"How do you create an object from a class in C#?",answer:`\`\`\`markdown To create an object from a class in C#, you use the new keyword followed by the class name and parentheses. Here’s an example:

\`\`\`csharp
// Define a class
public class Car
{
    public string color;
}

// Create an object from the class
Car myCar = new Car();
myCar.color = "Red";
\`\`\`

In this example:

- Car is the class.
- myCar is the object created from the Car class using new Car().`,level:"Beginner",created_at:"2025-04-21T05:34:27.629783Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"abdd371b-5fb3-4ea5-9253-26066e1edec9",question:"How do you define a constructor in C#?",answer:`\`\`\`markdown
In C#, a constructor is a special method that is used to initialize objects of a class. It has the same name as the class and does not have a return type.

**Syntax:**
\`\`\`csharp
class ClassName
{
    // Constructor
    public ClassName()
    {
        // Initialization code
    }
}
\`\`\`

**Example:**
\`\`\`csharp
class Person
{
    public string Name;

    // Constructor
    public Person()
    {
        Name = "Unknown";
    }
}
\`\`\`

**Key Points:**
- The constructor name must match the class name.
- Constructors do not have a return type, not even \`void\`.
- Constructors are called automatically when an object is created.
\`\`\`
`,level:"Beginner",created_at:"2025-04-21T05:34:27.629876Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"8c65f561-3d37-41cf-9d0c-670b6b80438b",question:"What is the difference between abstract and virtual methods?",answer:`\`\`\`markdown
### Difference Between Abstract and Virtual Methods in C#

In C#, both **abstract** and **virtual** methods are used to achieve polymorphism, but they have key differences:

| Feature                | Abstract Method                                  | Virtual Method                                  |
|------------------------|--------------------------------------------------|-------------------------------------------------|
| Declaration            | Declared with the \`abstract\` keyword             | Declared with the \`virtual\` keyword             |
| Implementation         | No implementation in the base class; must be implemented in derived classes | Can have a default implementation in the base class; can be overridden in derived classes |
| Class Requirement      | The containing class must be \`abstract\`          | The containing class can be regular or abstract |
| Overriding             | Must be overridden in derived non-abstract classes | Can be optionally overridden in derived classes |
| Usage                  | Used when you want to force derived classes to provide their own implementation | Used when you want to provide a default implementation, but allow derived classes to override it |

#### Example

\`\`\`csharp
abstract class Animal
{
    // Abstract method: no implementation
    public abstract void MakeSound();

    // Virtual method: has a default implementation
    public virtual void Eat()
    {
        Console.WriteLine("Animal is eating.");
    }
}

class Dog : Animal
{
    // Must override abstract method
    public override void MakeSound()
    {
        Console.WriteLine("Bark!");
    }

    // Optionally override virtual method
    public override void Eat()
    {
        Console.WriteLine("Dog is eating.");
    }
}
\`\`\`

**Summary:**  
- Use **abstract** methods when you want to force derived classes to implement the method.
- Use **virtual** methods when you want to provide a default implementation that derived classes can override if needed.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630055Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"e9317210-e7dc-4c69-9a7f-386e88960663",question:"What is the difference between upcasting and downcasting in C#?",answer:`\`\`\`markdown
### Difference Between Upcasting and Downcasting in C#

In C#, **upcasting** and **downcasting** are two types of type conversions involving inheritance hierarchies.

#### Upcasting

- **Definition:** Converting a derived class object to a base class reference.
- **Syntax:** \`BaseClass baseRef = derivedObj;\`
- **Safety:** Always safe; no explicit cast required.
- **Purpose:** Allows treating derived objects as base objects, enabling polymorphism.
- **Example:**
  \`\`\`csharp
  class Animal { }
  class Dog : Animal { }

  Dog dog = new Dog();
  Animal animal = dog; // Upcasting
  \`\`\`

#### Downcasting

- **Definition:** Converting a base class reference back to a derived class reference.
- **Syntax:** \`DerivedClass derivedRef = (DerivedClass)baseRef;\`
- **Safety:** Not always safe; requires an explicit cast and may throw an \`InvalidCastException\` at runtime if the object is not actually of the derived type.
- **Purpose:** Access derived class members from a base class reference.
- **Example:**
  \`\`\`csharp
  Animal animal = new Dog(); // Upcasting
  Dog dog = (Dog)animal;     // Downcasting
  \`\`\`

#### Key Points

- **Upcasting** is implicit and safe.
- **Downcasting** is explicit and potentially unsafe; use \`as\` or \`is\` operators for safer casting.
- **Upcasting** enables polymorphic behavior, while **downcasting** allows access to derived-specific features.

---
**Summary Table:**

| Aspect         | Upcasting                  | Downcasting                          |
|----------------|---------------------------|--------------------------------------|
| Direction      | Derived → Base            | Base → Derived                       |
| Explicit Cast  | Not required              | Required                             |
| Safety         | Always safe               | May throw exception at runtime       |
| Usage          | Polymorphism              | Access derived-specific members      |
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:34:27.630303Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"5ebce542-0934-4f4e-a59e-6c3ab6871d5e",question:"List and briefly explain the four main pillars of OOP.",answer:`\`\`\`markdown
### Four Main Pillars of OOP in C#

1. **Encapsulation**
   - Encapsulation is the concept of wrapping data (fields) and methods (functions) together as a single unit. It restricts direct access to some of an object's components, which helps protect the integrity of the data by using access modifiers (like \`private\`, \`public\`, \`protected\`).

2. **Abstraction**
   - Abstraction means hiding complex implementation details and showing only the necessary features of an object. In C#, this can be achieved using abstract classes and interfaces, allowing users to interact with objects at a higher level.

3. **Inheritance**
   - Inheritance allows a class (child or derived class) to inherit properties and methods from another class (parent or base class). This promotes code reusability and establishes a relationship between classes.

4. **Polymorphism**
   - Polymorphism means "many forms." It allows objects to be treated as instances of their parent class rather than their actual class. In C#, polymorphism is achieved through method overriding and interfaces, enabling the same method to behave differently in different classes.
\`\`\`
`,level:"Beginner",created_at:"2025-04-21T05:34:27.629738Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"cc5a4bd3-e307-4df1-85e0-e08ff6bd6a52",question:"What is a class in C#?",answer:`\`\`\`markdown A **class** in C# is a blueprint or template for creating objects. It defines the properties (fields) and behaviors (methods) that the objects created from the class will have. A class encapsulates data for the object and methods to manipulate that data.

**Example:**

\`\`\`csharp
public class Car
{
    // Fields (properties)
    public string color;
    public string model;

    // Method (behavior)
    public void Drive()
    {
        Console.WriteLine("The car is driving.");
    }
}
\`\`\`

**Key Points:**
- A class is a fundamental concept in Object-Oriented Programming (OOP).
- Objects are created from classes.
- Classes help organize code and promote reusability.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629752Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"eeec6891-79b6-4e22-882e-b974ce9c99e5",question:"What is Object-Oriented Programming (OOP) in C#?",answer:`\`\`\`markdown **Object-Oriented Programming (OOP)** in C# is a programming paradigm that organizes software design around objects, rather than functions and logic. Objects are instances of classes, which are blueprints that define properties (data) and methods (behavior).

### Key Concepts of OOP in C#

1. **Class**: A template or blueprint for creating objects. It defines properties and methods.
2. **Object**: An instance of a class.
3. **Encapsulation**: Bundling data and methods that operate on the data within one unit (class), and restricting access to some of the object's components.
4. **Inheritance**: The ability of a class to inherit properties and methods from another class.
5. **Polymorphism**: The ability to use a single interface to represent different types of objects or methods.
6. **Abstraction**: Hiding complex implementation details and showing only the necessary features of an object.

### Example

\`\`\`csharp
// Define a class
public class Car
{
    public string Brand { get; set; }
    public void Drive()
    {
        Console.WriteLine("The car is driving.");
    }
}

// Create an object
Car myCar = new Car();
myCar.Brand = "Toyota";
myCar.Drive();
\`\`\`

**Summary:**  
OOP in C# helps in creating modular, reusable, and maintainable code by modeling real-world entities as objects.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629711Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"a94e894f-733f-4bf5-b5d5-67d72fd9d7fe",question:"What is encapsulation and how is it implemented in C#?",answer:`\`\`\`markdown **Encapsulation** is one of the fundamental concepts in Object-Oriented Programming (OOP). It refers to the bundling of data (fields) and methods (functions) that operate on the data into a single unit, called a class. Encapsulation also restricts direct access to some of an object's components, which is a means of preventing unintended interference and misuse.

### How Encapsulation is Implemented in C#

In C#, encapsulation is implemented using:

- **Access Modifiers** (like \`private\`, \`public\`, \`protected\`) to control the visibility of class members.
- **Properties** to provide controlled access to private fields.

#### Example

\`\`\`csharp
public class Person
{
    // Private field - cannot be accessed directly from outside
    private string name;

    // Public property - provides controlled access to the private field
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
}
\`\`\`

**Explanation:**

- The \`name\` field is marked as \`private\`, so it cannot be accessed directly from outside the \`Person\` class.
- The \`Name\` property is \`public\`, allowing controlled access to the \`name\` field. You can add validation or other logic in the property if needed.

**Benefits of Encapsulation:**

- Protects data from unauthorized access and modification.
- Makes the code more maintainable and flexible.
- Improves modularity by hiding the internal implementation details.

---

**In summary:**  
Encapsulation in C# is achieved by using access modifiers and properties to hide the internal state of an object and only expose what is necessary.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629796Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"a5255f09-cae8-4922-9dcd-b82b67c7f233",question:"What is inheritance in C#?",answer:`\`\`\`markdown **Inheritance in C#**

Inheritance is an important concept in Object-Oriented Programming (OOP) that allows a class to acquire properties and behaviors (fields and methods) from another class. In C#, inheritance enables you to create a new class (called the derived or child class) based on an existing class (called the base or parent class). The derived class inherits the members of the base class, and can also have its own additional members.

**Syntax Example:**
\`\`\`csharp
// Base class
public class Animal
{
    public void Eat()
    {
        Console.WriteLine("Animal is eating.");
    }
}

// Derived class
public class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("Dog is barking.");
    }
}
\`\`\`

**Key Points:**
- The : symbol is used to indicate inheritance.
- The derived class (Dog) inherits the Eat() method from the base class (Animal).
- Inheritance promotes code reusability and helps in organizing code in a hierarchical manner.

**Usage Example:**
\`\`\`csharp
Dog myDog = new Dog();
myDog.Eat();   // Output: Animal is eating.
myDog.Bark();  // Output: Dog is barking.
\`\`\`

In summary, inheritance in C# allows you to create new classes that reuse, extend, and modify the behavior defined in other classes.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629809Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"459e4bc8-0f74-4091-8465-a103b9fa3406",question:"What is polymorphism in C#?",answer:`\`\`\`markdown **Polymorphism** in C# is an Object-Oriented Programming (OOP) concept that allows objects of different classes to be treated as objects of a common base class. It enables a single interface to represent different underlying forms (data types).

There are two types of polymorphism in C#:

1. **Compile-time Polymorphism (Method Overloading):**
   - Achieved by defining multiple methods with the same name but different parameters within the same class.

   \`\`\`csharp
   class MathOperations
   {
       public int Add(int a, int b) => a + b;
       public double Add(double a, double b) => a + b;
   }
   \`\`\`

2. **Run-time Polymorphism (Method Overriding):**
   - Achieved using inheritance and the virtual and override keywords.
   - The base class defines a virtual method, and the derived class overrides it.

   \`\`\`csharp
   class Animal
   {
       public virtual void Speak()
       {
           Console.WriteLine("Animal speaks");
       }
   }

   class Dog : Animal
   {
       public override void Speak()
       {
           Console.WriteLine("Dog barks");
       }
   }
   \`\`\`

**Summary:**  
Polymorphism allows you to write flexible and reusable code by enabling objects to be treated as instances of their parent class, while still executing the overridden methods in the derived classes.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629824Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"6a7a1d1e-f035-4e7a-980a-b8702fcfc5c4",question:"What is abstraction in C#?",answer:`\`\`\`markdown **Abstraction in C#**

Abstraction is one of the fundamental concepts of Object-Oriented Programming (OOP) in C#. It refers to the process of hiding the complex implementation details of a system and exposing only the essential features to the user.

In C#, abstraction is achieved using abstract classes and interfaces. An abstract class can have abstract methods (without implementation) and concrete methods (with implementation). The abstract methods must be implemented by the derived classes.

**Example:**

\`\`\`csharp
// Abstract class
public abstract class Animal
{
    // Abstract method (no implementation)
    public abstract void MakeSound();

    // Concrete method
    public void Sleep()
    {
        Console.WriteLine("Sleeping...");
    }
}

// Derived class
public class Dog : Animal
{
    // Implementation of abstract method
    public override void MakeSound()
    {
        Console.WriteLine("Bark");
    }
}
\`\`\`

**Key Points:**
- Abstraction helps to reduce complexity and allows the programmer to focus on interactions at a higher level.
- It is implemented using abstract classes and interfaces.
- Abstract classes cannot be instantiated directly.

**Summary:**  
Abstraction in C# allows you to define the structure of a class without providing a complete implementation, focusing on what an object does instead of how it does it.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629838Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"85b65098-4233-44e6-90dc-a3ea2aeaac09",question:"What is the difference between a class and a struct in C#?",answer:`\`\`\`markdown **Answer:**

In C#, both classes and structs are used to define custom data types, but they have some important differences:

| Feature         | Class                                      | Struct                                  |
|-----------------|--------------------------------------------|-----------------------------------------|
| Type            | Reference type                             | Value type                              |
| Memory Storage  | Stored on the heap                         | Stored on the stack (usually)           |
| Inheritance     | Can inherit from another class             | Cannot inherit from another struct or class (can implement interfaces) |
| Default Value   | null (can be assigned null)                | All fields are set to default values    |
| Constructors    | Can have a default (parameterless) constructor | Cannot have a default constructor (except the implicit one) |
| Usage           | Used for complex objects with behavior     | Used for small, lightweight objects     |

**Example:**

\`\`\`csharp
// Class example
class Person
{
    public string Name;
    public int Age;
}

// Struct example
struct Point
{
    public int X;
    public int Y;
}
\`\`\`

**Summary:**  
Use a class when you need reference semantics, inheritance, or complex behavior. Use a struct for small, simple data structures that represent a single value.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629860Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"f4a16ace-2b41-401d-be35-c141cfaf4621",question:"What is a destructor in C#?",answer:`\`\`\`markdown A **destructor** in C# is a special method that is automatically invoked when an object is destroyed or finalized. Its main purpose is to perform cleanup operations, such as releasing unmanaged resources (like file handles, database connections, etc.) before the object is removed from memory.

### Key Points about Destructors in C#

- A destructor has the same name as the class, preceded by a tilde (~).
- It cannot have parameters or access modifiers.
- It cannot be called explicitly; it is called by the garbage collector.
- Only one destructor is allowed per class.
- Destructors are mainly used to clean up unmanaged resources.

### Syntax

\`\`\`csharp
class MyClass
{
    // Destructor
    ~MyClass()
    {
        // Cleanup code here
    }
}
\`\`\`

### Example

\`\`\`csharp
class FileHandler
{
    // Destructor
    ~FileHandler()
    {
        // Code to release file resources
        Console.WriteLine("Destructor called, resources released.");
    }
}
\`\`\`

> **Note:** In most cases, it's recommended to use the \`IDisposable\` interface and the \`Dispose\` method for resource cleanup, as destructors are non-deterministic and called by the garbage collector at an unspecified time.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629889Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"91ab96e7-61af-4bb9-8b13-4299c83a70e0",question:"What is the purpose of the 'this' keyword in C#?",answer:`\`\`\`markdown The this keyword in C# is used within an instance method or constructor to refer to the current object—the object whose method or constructor is being called.

**Purposes of the this keyword:**

- **Distinguish between fields and parameters:**  
  When a method or constructor parameter has the same name as a class field, this is used to refer to the field.

  \`\`\`csharp
  public class Person
  {
      private string name;

      public Person(string name)
      {
          this.name = name; // 'this.name' refers to the field, 'name' refers to the parameter
      }
  }
  \`\`\`

- **Pass the current object as a parameter:**  
  You can use this to pass the current object to another method.

  \`\`\`csharp
  SomeMethod(this);
  \`\`\`

- **Call another constructor in the same class:**  
  You can use this to call another constructor from a constructor (constructor chaining).

  \`\`\`csharp
  public Person() : this("Unknown") { }
  \`\`\`

- **Return the current object:**  
  Useful in methods that return the current object, enabling method chaining.

  \`\`\`csharp
  public Person SetName(string name)
  {
      this.name = name;
      return this;
  }
  \`\`\`

**Summary:**  
The this keyword helps clarify code and refer to the current instance of a class within its methods and constructors.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629904Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"eeb0b390-5396-4c99-a784-506f5d7be0a9",question:"What is a static member in a class?",answer:`\`\`\`markdown A **static member** in a class is a member (field, property, method, or constructor) that belongs to the class itself rather than to any specific instance of the class. This means:

- Static members are shared among all instances of the class.
- You access static members using the class name, not an object reference.

**Example:**

\`\`\`csharp
class MyClass
{
    public static int StaticValue = 10;

    public static void StaticMethod()
    {
        Console.WriteLine("This is a static method.");
    }
}

// Usage
Console.WriteLine(MyClass.StaticValue); // Output: 10
MyClass.StaticMethod(); // Output: This is a static method.
\`\`\`

**Key Points:**
- Use the static keyword to declare static members.
- Static members are initialized only once.
- They can be accessed without creating an object of the class.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629918Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"14a99ab9-6071-4632-ae9f-1cd19633ec91",question:"What is method overloading in C#?",answer:`\`\`\`markdown **Method overloading** in C# is a feature that allows a class to have more than one method with the same name, but with different parameters (different type, number, or both). It helps increase the readability of the program and allows methods to perform similar but slightly different tasks.

### Example

\`\`\`csharp
class Calculator
{
    // Method with two int parameters
    public int Add(int a, int b)
    {
        return a + b;
    }

    // Overloaded method with three int parameters
    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }

    // Overloaded method with two double parameters
    public double Add(double a, double b)
    {
        return a + b;
    }
}
\`\`\`

### Key Points

- Methods must have the same name but different parameter lists.
- Return type alone is not enough to distinguish overloaded methods.
- Method overloading increases code clarity and reusability.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629932Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"f5cc4454-da17-4b55-be15-93bd0d942e6f",question:"What is method overriding in C#?",answer:`\`\`\`markdown **Method overriding** in C# is a feature that allows a subclass (derived class) to provide a specific implementation of a method that is already defined in its base class. The overridden method in the derived class must have the same name, return type, and parameters as the method in the base class.

To override a method:

- The base class method must be marked with the virtual keyword.
- The derived class method must use the override keyword.

**Example:**

\`\`\`csharp
class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("The animal makes a sound.");
    }
}

class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("The dog barks.");
    }
}
\`\`\`

**Key Points:**
- Method overriding enables runtime polymorphism.
- It allows derived classes to provide their own behavior for base class methods.
- The base method must be virtual, abstract, or override.
- The derived method must use the override keyword.

**Usage:**
\`\`\`csharp
Animal myDog = new Dog();
myDog.Speak(); // Output: The dog barks.
\`\`\`

In this example, the Speak method of the Dog class overrides the Speak method of the Animal class.`,level:"Beginner",created_at:"2025-04-21T05:34:27.629946Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"c758f943-658c-4249-9fe1-88c6b9dfb32e",question:"What is the difference between 'override' and 'new' keywords in method overriding?",answer:`\`\`\`markdown
### Difference between \`override\` and \`new\` Keywords in C# Method Overriding

In C#, both \`override\` and \`new\` keywords are used when a derived class defines a method with the same name as a method in its base class, but they serve different purposes:

#### \`override\` Keyword

- **Purpose:** Used to override a virtual or abstract method defined in a base class.
- **Requirement:** The base class method must be marked as \`virtual\`, \`abstract\`, or \`override\`.
- **Behavior:** The derived class method replaces the base class method. When called through a base class reference, the overridden method in the derived class is executed (polymorphism).
- **Example:**
  \`\`\`csharp
  class BaseClass
  {
      public virtual void Display()
      {
          Console.WriteLine("BaseClass Display");
      }
  }

  class DerivedClass : BaseClass
  {
      public override void Display()
      {
          Console.WriteLine("DerivedClass Display");
      }
  }
  \`\`\`

#### \`new\` Keyword

- **Purpose:** Used to hide a method in the base class with a new implementation in the derived class.
- **Requirement:** The base class method does not need to be virtual.
- **Behavior:** The derived class method hides the base class method. When called through a base class reference, the base class method is executed; when called through a derived class reference, the new method is executed (no polymorphism).
- **Example:**
  \`\`\`csharp
  class BaseClass
  {
      public void Display()
      {
          Console.WriteLine("BaseClass Display");
      }
  }

  class DerivedClass : BaseClass
  {
      public new void Display()
      {
          Console.WriteLine("DerivedClass Display");
      }
  }
  \`\`\`

#### Summary Table

| Keyword   | Base Method Requirement | Polymorphism | Called via Base Reference | Called via Derived Reference |
|-----------|------------------------|--------------|--------------------------|-----------------------------|
| \`override\`| virtual/abstract/override | Yes         | Derived method           | Derived method              |
| \`new\`     | None                   | No           | Base method              | Derived method              |

#### Key Point

- Use \`override\` for true method overriding and polymorphism.
- Use \`new\` to explicitly hide a base class method when overriding is not possible or not intended.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T05:34:27.629960Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"81866fff-f31a-4954-a666-ee6a014ebe94",question:"How does access modifier 'private' differ from 'protected' and 'public'?",answer:`\`\`\`markdown
In C#, access modifiers control the visibility and accessibility of classes, methods, and other members. Here's how \`private\`, \`protected\`, and \`public\` differ:

- **private**
  - The member is accessible only within the same class.
  - It cannot be accessed from outside the class, not even by derived (child) classes.

- **protected**
  - The member is accessible within the same class and by derived classes (subclasses), even if they are in different assemblies.
  - It is not accessible from outside the class hierarchy.

- **public**
  - The member is accessible from any other code in the same assembly or another assembly that references it.
  - There are no restrictions on accessibility.

**Example:**
\`\`\`csharp
class BaseClass
{
    private int privateField;
    protected int protectedField;
    public int publicField;
}

class DerivedClass : BaseClass
{
    void Example()
    {
        // privateField = 1;    // Error: Not accessible
        protectedField = 2;     // OK: Accessible in derived class
        publicField = 3;        // OK: Accessible everywhere
    }
}
\`\`\`

**Summary Table:**

| Modifier   | Same Class | Derived Class | Outside Class |
|------------|------------|--------------|---------------|
| private    | Yes        | No           | No            |
| protected  | Yes        | Yes          | No            |
| public     | Yes        | Yes          | Yes           |
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T05:34:27.629972Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"f1cbffd4-d766-4d34-8b39-c255398c54e1",question:"What is an interface in C# and how is it different from an abstract class?",answer:`\`\`\`markdown ### What is an Interface in C#?

An **interface** in C# is a contract that defines a set of method signatures, properties, events, or indexers, but does not provide any implementation. Classes or structs that implement the interface must provide the implementation for all its members.

\`\`\`csharp
public interface IShape
{
    void Draw();
    double Area { get; }
}
\`\`\`

### Differences Between Interface and Abstract Class

| Feature                | Interface                                   | Abstract Class                              |
|------------------------|---------------------------------------------|---------------------------------------------|
| Implementation         | Cannot have any implementation (C# 7 and below); from C# 8, can have default implementations | Can have both abstract and concrete methods |
| Fields                 | Cannot have fields                          | Can have fields                             |
| Access Modifiers       | Members are public by default               | Can have different access modifiers         |
| Inheritance            | A class can implement multiple interfaces   | A class can inherit only one abstract class |
| Constructors           | Cannot have constructors                    | Can have constructors                       |
| Use Case               | When unrelated classes need to share a contract | When classes share a common base behavior   |

### Example

**Interface:**
\`\`\`csharp
public interface ILogger
{
    void Log(string message);
}
\`\`\`

**Abstract Class:**
\`\`\`csharp
public abstract class LoggerBase
{
    public abstract void Log(string message);
    public void LogInfo(string info)
    {
        Console.WriteLine("Info: " + info);
    }
}
\`\`\`

### Summary

- Use **interfaces** to define a contract for unrelated classes.
- Use **abstract classes** when you want to share common code among related classes.  
- Interfaces support multiple inheritance, while abstract classes do not.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.629986Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"ba43bd4c-3aaa-4bb9-8aa1-9f72c780dd59",question:"Can a class implement multiple interfaces in C#? Explain.",answer:`\`\`\`markdown Yes, a class in C# can implement multiple interfaces.

### Explanation

In C#, interfaces define a contract that classes can implement. Unlike inheritance (where a class can inherit from only one base class), C# allows a class to implement more than one interface. This is useful for achieving multiple inheritance of type, which is not possible with classes alone.

#### Syntax Example

\`\`\`csharp
interface IFirst
{
    void MethodA();
}

interface ISecond
{
    void MethodB();
}

class MyClass : IFirst, ISecond
{
    public void MethodA()
    {
        Console.WriteLine("MethodA from IFirst");
    }

    public void MethodB()
    {
        Console.WriteLine("MethodB from ISecond");
    }
}
\`\`\`

#### Key Points

- A class can implement any number of interfaces, separated by commas.
- The class must provide implementations for all members of all interfaces it implements.
- This feature is commonly used to provide multiple functionalities to a class, promote loose coupling, and support dependency injection.

**Conclusion:**  
Implementing multiple interfaces is a powerful feature in C# that enables flexible and modular design.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.629999Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"ddb72ebb-6ce1-4bf2-81f2-0c62db0aa668",question:"What is multiple inheritance and does C# support it?",answer:`\`\`\`markdown **Multiple inheritance** is an object-oriented programming concept where a class can inherit features (methods, properties, etc.) from more than one base class. This allows a derived class to combine and reuse functionality from multiple sources.

In C#, **multiple inheritance is not supported for classes**. That means a class cannot inherit from more than one class directly:

\`\`\`csharp
// This is NOT allowed in C#
class A { }
class B { }
class C : A, B { } // Error: 'C' cannot have multiple base classes
\`\`\`

However, **C# supports multiple inheritance through interfaces**. A class can implement multiple interfaces, allowing it to inherit contracts from multiple sources:

\`\`\`csharp
interface IA { void MethodA(); }
interface IB { void MethodB(); }

class C : IA, IB
{
    public void MethodA() { /* Implementation */ }
    public void MethodB() { /* Implementation */ }
}
\`\`\`

**Summary:**
- C# does **not** support multiple inheritance for classes.
- C# **does** support multiple inheritance via interfaces.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630012Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"0a8a3445-b69b-467b-bd91-e4e1e13e9a0f",question:"What is the purpose of the 'base' keyword in C#?",answer:`\`\`\`markdown The base keyword in C# is used within a derived class to access members (fields, properties, methods, or constructors) of its base (parent) class. It is commonly used for:

- Calling a base class constructor from a derived class constructor.
- Accessing a base class method that is overridden in the derived class.
- Accessing base class properties or fields that are hidden by derived class members.

**Example:**

\`\`\`csharp
class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("Animal speaks");
    }
}

class Dog : Animal
{
    public override void Speak()
    {
        base.Speak(); // Calls the base class method
        Console.WriteLine("Dog barks");
    }
}
\`\`\`

**Key Points:**
- Use base to avoid code duplication and to extend or modify base class behavior.
- It helps in constructor chaining and method overriding scenarios.

**Summary:**  
The base keyword provides a way for derived classes to interact with their base class implementations, ensuring proper inheritance and code reuse.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630026Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"82d32cdb-378a-4a48-bdb4-1096eab28a9d",question:"What is a sealed class in C#?",answer:`\`\`\`markdown A **sealed class** in C# is a class that cannot be inherited by any other class. When you declare a class as sealed using the sealed keyword, you prevent other classes from deriving from it. This is useful when you want to restrict the inheritance hierarchy for security, design, or performance reasons.

**Syntax:**
\`\`\`csharp
public sealed class MyClass
{
    // Class members
}
\`\`\`

**Key Points:**
- You cannot use a sealed class as a base class.
- Sealed classes can still inherit from other classes.
- Sealing a class can improve performance by enabling certain runtime optimizations.

**Example:**
\`\`\`csharp
public sealed class Animal
{
    public void Speak()
    {
        Console.WriteLine("Animal speaks");
    }
}

// This will cause a compile-time error
public class Dog : Animal
{
    // Error: 'Animal' is sealed and cannot be inherited
}
\`\`\`

**Use Cases:**
- Preventing further inheritance for security or design reasons.
- Sealing classes that provide complete functionality and should not be extended.

**Note:**  
You can also seal individual methods in a derived class using the sealed keyword, but only if the method is overriding a virtual method from the base class.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630040Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"0917d33c-0afb-46af-a491-8fcfed98286d",question:"How do you implement encapsulation using properties in C#?",answer:`\`\`\`markdown Encapsulation in C# is achieved by restricting direct access to the fields of a class and exposing them through properties. Properties provide controlled access (getters and setters) to private fields, allowing validation or logic during assignment or retrieval.

**Example:**

\`\`\`csharp
public class Person
{
    // Private field
    private string name;

    // Public property with getter and setter
    public string Name
    {
        get { return name; }
        set
        {
            // Optional: Add validation logic
            if (!string.IsNullOrEmpty(value))
            {
                name = value;
            }
        }
    }
}
\`\`\`

**Usage:**

\`\`\`csharp
Person person = new Person();
person.Name = "Alice";    // Calls the setter
Console.WriteLine(person.Name); // Calls the getter
\`\`\`

**Key Points:**

- Fields are marked as \`private\` to prevent direct access.
- Properties (\`public string Name { get; set; }\`) provide controlled access.
- You can add logic inside the getter or setter for validation, logging, etc.
- This approach hides the internal representation and protects the data, which is the essence of encapsulation.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630069Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"64ab4d53-b46f-4547-942c-d02cf709fc82",question:"What is the difference between a property and a field in C#?",answer:`\`\`\`markdown **Answer:**

In C#, a **field** is a variable that is declared directly in a class or struct. It is used to store data. Fields can have different access modifiers (like private, public, etc.), but they do not provide any logic for getting or setting their values.

A **property**, on the other hand, is a member that provides a flexible mechanism to read, write, or compute the value of a private field. Properties use get and set accessors to control how values are accessed or modified, allowing you to add logic (such as validation) when a value is retrieved or assigned.

**Example:**

\`\`\`csharp
// Field
private int age;

// Property
public int Age
{
    get { return age; }
    set 
    {
        if (value >= 0)
            age = value;
    }
}
\`\`\`

**Key Differences:**

| Field                | Property                                   |
|----------------------|--------------------------------------------|
| Stores data directly | Provides access to data (often a field)    |
| No logic on access   | Can include logic in get/set accessors     |
| Cannot be virtual, abstract, or interface members | Can be virtual, abstract, or interface members |
| Accessed directly    | Accessed like a field, but via accessors   |

**Summary:**  
Fields are for direct data storage, while properties provide controlled access to data, often encapsulating fields and allowing logic during get/set operations.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630081Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"37b9fde2-54ad-4b2b-ba2a-8c3fd9ed2301",question:"What is the difference between shallow copy and deep copy?",answer:`\`\`\`markdown **Difference Between Shallow Copy and Deep Copy in C#**

| Shallow Copy | Deep Copy |
|--------------|-----------|
| Copies the immediate values of the object's fields (including references to other objects). | Copies all fields and also creates copies of the objects referenced by the fields (recursive copy). |
| If the original object contains references to other objects, both the original and the copy will reference the same objects. | The original and the copy will reference different objects; changes to one do not affect the other. |
| Can be created using the \`MemberwiseClone()\` method. | Requires custom implementation (e.g., by cloning each referenced object manually or using serialization). |
| Faster and uses less memory. | Slower and uses more memory due to duplication of referenced objects. |

**Example:**

\`\`\`csharp
class Person
{
    public string Name;
    public Address Address;
}

class Address
{
    public string City;
}

// Shallow Copy
Person person1 = new Person { Name = "Alice", Address = new Address { City = "New York" } };
Person person2 = (Person)person1.MemberwiseClone();
person2.Address.City = "Los Angeles";
Console.WriteLine(person1.Address.City); // Output: Los Angeles

// Deep Copy (manual)
Person DeepCopy(Person original)
{
    return new Person
    {
        Name = original.Name,
        Address = new Address { City = original.Address.City }
    };
}
Person person3 = DeepCopy(person1);
person3.Address.City = "Chicago";
Console.WriteLine(person1.Address.City); // Output: Los Angeles
\`\`\`

**Summary:**  
- **Shallow Copy** duplicates only the top-level object; nested objects are shared.
- **Deep Copy** duplicates the top-level object and all nested objects, ensuring complete independence.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630093Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"309f0c25-5eb4-4301-ae67-35a56cf56880",question:"What is the role of the 'partial' keyword in C# classes?",answer:`\`\`\`markdown The partial keyword in C# allows the definition of a class, struct, or interface to be split across multiple files. This is particularly useful when working with large classes or when code is auto-generated (such as in designer files for Windows Forms or Entity Framework).

### Key Points

- **Splitting Implementation:** You can implement a class in multiple files. All parts are combined at compile time into a single class.
- **Collaboration:** Multiple developers can work on different parts of the same class without causing merge conflicts.
- **Auto-Generated Code:** Keeps user-written code separate from auto-generated code, making maintenance easier.

### Example

\`\`\`csharp
// File: Person.Part1.cs
public partial class Person
{
    public string FirstName { get; set; }
}

// File: Person.Part2.cs
public partial class Person
{
    public string LastName { get; set; }
}
\`\`\`

At compile time, these are combined into a single \`Person\` class with both \`FirstName\` and \`LastName\` properties.

### Summary

The partial keyword helps organize and manage large or auto-generated classes by allowing their implementation to be split across multiple files.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630105Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"b2bab937-933f-4e2c-80ac-470ac39f50b2",question:"What is an indexer in C#?",answer:`\`\`\`markdown An **indexer** in C# is a special type of property that allows objects of a class or struct to be indexed just like arrays. Indexers enable instances of a class to be accessed using the array access operator \`[]\`, making the object behave like a virtual array.

### Syntax

\`\`\`csharp
public <return_type> this[<parameter_type> index]
{
    get
    {
        // return the value at the specified index
    }
    set
    {
        // set the value at the specified index
    }
}
\`\`\`

### Example

\`\`\`csharp
class SampleCollection<T>
{
    private T[] arr = new T[100];

    public T this[int i]
    {
        get { return arr[i]; }
        set { arr[i] = value; }
    }
}
\`\`\`

**Usage:**

\`\`\`csharp
SampleCollection<string> collection = new SampleCollection<string>();
collection[0] = "Hello";
Console.WriteLine(collection[0]); // Output: Hello
\`\`\`

### Key Points

- Indexers are defined with the \`this\` keyword.
- They can be overloaded (by changing the parameter list).
- They can have one or more parameters (multi-dimensional indexers).
- Indexers do not have a name; they are always named \`this\`.

**In summary:**  
An indexer allows a class or struct to be accessed like an array, providing a natural and intuitive way to access internal data.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630119Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"e1b0abbf-b58e-4926-a23e-15a34a2d6f87",question:"What is operator overloading and how is it achieved in C#?",answer:`\`\`\`markdown **Operator overloading** in C# allows you to define custom behavior for standard operators (like +, -, *, etc.) when they are applied to instances of your own classes or structs. This makes your custom types behave more like built-in types and can improve code readability and usability.

### How Operator Overloading is Achieved in C#

- You overload an operator by defining a special static method in your class using the \`operator\` keyword.
- The method must be \`public\` and \`static\`.
- The method name is the keyword \`operator\` followed by the operator symbol you want to overload.
- Not all operators can be overloaded (e.g., \`=\`, \`&&\`, \`||\`, etc. cannot be overloaded).

#### Example: Overloading the \`+\` Operator

\`\`\`csharp
public class Complex
{
    public int Real { get; set; }
    public int Imaginary { get; set; }

    public Complex(int real, int imaginary)
    {
        Real = real;
        Imaginary = imaginary;
    }

    // Overloading the + operator
    public static Complex operator +(Complex c1, Complex c2)
    {
        return new Complex(c1.Real + c2.Real, c1.Imaginary + c2.Imaginary);
    }
}
\`\`\`

**Usage:**

\`\`\`csharp
Complex c1 = new Complex(1, 2);
Complex c2 = new Complex(3, 4);
Complex sum = c1 + c2; // Uses the overloaded + operator
\`\`\`

### Key Points

- Operator overloading improves code clarity for custom types.
- Only certain operators can be overloaded.
- Overloaded operators must be \`public static\` methods.
- Operator overloading should be used judiciously to avoid confusing code.

**In summary:** Operator overloading in C# lets you define how operators work with your own types by implementing special static methods using the \`operator\` keyword.`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630134Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"10636e2e-08f5-4148-ae11-1f0da2b89c85",question:"Explain the concept of late binding and early binding in C#.",answer:`\`\`\`markdown **Early Binding and Late Binding in C#**

### Early Binding

**Definition:**  
Early binding refers to the process where the method or property to be invoked is determined at compile time. The compiler knows the exact type of object and its members, allowing for type checking and better performance.

**Characteristics:**
- Type information is known at compile time.
- Errors are caught during compilation.
- Faster execution due to direct method calls.
- Achieved using normal method calls and compile-time type references.

**Example:**
\`\`\`csharp
class Animal
{
    public void Speak()
    {
        Console.WriteLine("Animal speaks");
    }
}

Animal animal = new Animal();
animal.Speak(); // Early binding
\`\`\`

---

### Late Binding

**Definition:**  
Late binding refers to the process where the method or property to be invoked is determined at runtime. The compiler does not know the exact type or member at compile time, so the binding occurs during execution.

**Characteristics:**
- Type information is determined at runtime.
- Errors may occur at runtime if the member does not exist.
- Slightly slower due to runtime resolution.
- Achieved using \`dynamic\` keyword or reflection.

**Example using \`dynamic\`:**
\`\`\`csharp
dynamic animal = new Animal();
animal.Speak(); // Late binding
\`\`\`

**Example using Reflection:**
\`\`\`csharp
object animal = new Animal();
var method = animal.GetType().GetMethod("Speak");
method.Invoke(animal, null); // Late binding
\`\`\`

---

### Key Differences

| Early Binding                | Late Binding                  |
|-----------------------------|-------------------------------|
| Resolved at compile time     | Resolved at runtime           |
| Faster execution             | Slower execution              |
| Compile-time type checking   | Runtime type checking         |
| Less flexible                | More flexible                 |
| Uses static typing           | Uses \`dynamic\` or reflection  |

---

### Use Cases

- **Early Binding:** When performance and type safety are priorities.
- **Late Binding:** When working with types unknown at compile time (e.g., COM objects, plugins, dynamic data).

---

**Summary:**  
Early binding provides better performance and compile-time safety, while late binding offers flexibility at the cost of runtime errors and performance. C# supports both approaches, allowing developers to choose based on their application requirements.`,level:"Advanced",created_at:"2025-04-21T05:34:27.630147Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"39afb062-82ac-4772-9dad-dbf0a05633bc",question:"What is covariance and contravariance in C# OOP?",answer:"```markdown\n### Covariance and Contravariance in C# OOP\n\nCovariance and contravariance are advanced concepts in C# that allow for more flexible assignment compatibility in generic interfaces and delegates, particularly when dealing with inheritance hierarchies.\n\n#### Covariance\n\nCovariance enables you to use a more derived type than originally specified. It preserves assignment compatibility for generic types. In C#, covariance is supported in generic interfaces and delegates by using the `out` keyword.\n\n**Example:**\n```csharp\nIEnumerable<string> strings = new List<string>();\nIEnumerable<object> objects = strings; // Covariance: IEnumerable<out T>\n```\nHere, `IEnumerable<T>` is covariant in `T` (declared as `out T`), so you can assign an `IEnumerable<string>` to an `IEnumerable<object>`.\n\n#### Contravariance\n\nContravariance enables you to use a less derived type than originally specified. It reverses assignment compatibility for generic types. In C#, contravariance is supported in generic interfaces and delegates by using the `in` keyword.\n\n**Example:**\n```csharp\nAction<object> actObject = obj => Console.WriteLine(obj);\nAction<string> actString = actObject; // Contravariance: Action<in T>\n```\nHere, `Action<T>` is contravariant in `T` (declared as `in T`), so you can assign an `Action<object>` to an `Action<string>`.\n\n#### Summary Table\n\n| Concept        | Keyword | Direction of Assignment        | Example Type         |\n|----------------|---------|-------------------------------|---------------------|\n| Covariance     | `out`   | Derived → Base                | `IEnumerable<out T>`|\n| Contravariance | `in`    | Base → Derived                | `Action<in T>`      |\n\n#### Key Points\n\n- **Covariance** applies to output positions (return types).\n- **Contravariance** applies to input positions (method parameters).\n- Only interfaces and delegates can be covariant or contravariant in C#.\n\nThese features make generic collections and delegates more flexible and type-safe when working with inheritance.\n```\n",level:"Advanced",created_at:"2025-04-21T05:34:27.630161Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"4abfc47b-e563-41ba-9966-f69409cf3a65",question:"How does C# implement runtime polymorphism?",answer:`\`\`\`markdown
### How does C# implement runtime polymorphism?

C# implements **runtime polymorphism** primarily through the use of **inheritance** and **virtual methods**. Runtime polymorphism, also known as **dynamic method dispatch**, allows the method to be invoked at runtime based on the actual object's type, not the reference type.

#### Key Concepts

1. **Virtual Methods**: In the base class, methods intended for polymorphic behavior are marked with the \`virtual\` keyword.
2. **Override Methods**: In derived classes, these methods are overridden using the \`override\` keyword.
3. **Base Class Reference**: Objects are accessed using a base class reference, but the actual method invoked is determined by the object's runtime type.

#### Example

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

class Program
{
    static void Main()
    {
        Animal a1 = new Dog();
        Animal a2 = new Cat();

        a1.Speak(); // Output: Dog barks
        a2.Speak(); // Output: Cat meows
    }
}
\`\`\`

#### How It Works

- The \`Speak\` method is declared as \`virtual\` in the base class \`Animal\`.
- The derived classes \`Dog\` and \`Cat\` override the \`Speak\` method.
- At runtime, when \`Speak\` is called on an \`Animal\` reference, the CLR determines the actual object type (\`Dog\` or \`Cat\`) and invokes the appropriate overridden method.

#### Behind the Scenes

- The .NET runtime uses a **virtual method table (vtable)** to resolve the method to call at runtime.
- This enables **late binding**, which is the essence of runtime polymorphism.

#### Summary

C# achieves runtime polymorphism through:
- Declaring methods as \`virtual\` in the base class.
- Overriding those methods in derived classes using \`override\`.
- Using base class references to refer to derived class objects.
- The actual method invoked is determined at runtime based on the object's type.

This mechanism allows for flexible and extensible code, adhering to the OOP principle of **polymorphism**.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:34:27.630185Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"a280bd70-aa1b-48b8-aad7-b2072d6fde10",question:"What is dependency injection and how does it relate to OOP principles?",answer:`\`\`\`markdown
**Dependency Injection (DI)** is a design pattern in C# (and other object-oriented languages) that deals with how objects acquire their dependencies. Instead of a class creating its own dependencies (objects it needs to function), those dependencies are provided (injected) from the outside, typically by a framework or container.

### How Dependency Injection Works

In C#, DI is commonly implemented in three ways:
- **Constructor Injection:** Dependencies are provided through a class constructor.
- **Property Injection:** Dependencies are set via public properties.
- **Method Injection:** Dependencies are passed as parameters to methods.

**Example:**

\`\`\`csharp
public interface ILogger
{
    void Log(string message);
}

public class ConsoleLogger : ILogger
{
    public void Log(string message) => Console.WriteLine(message);
}

public class OrderService
{
    private readonly ILogger _logger;

    // Constructor Injection
    public OrderService(ILogger logger)
    {
        _logger = logger;
    }

    public void PlaceOrder()
    {
        // Business logic...
        _logger.Log("Order placed.");
    }
}
\`\`\`

### Relation to OOP Principles

Dependency Injection supports several core OOP principles:

- **Abstraction:** By depending on interfaces (e.g., \`ILogger\`), classes are abstracted from concrete implementations.
- **Encapsulation:** Dependencies are managed externally, keeping classes focused on their primary responsibilities.
- **Loose Coupling:** Classes are less tightly bound to specific implementations, making code more flexible and easier to maintain or test.
- **Single Responsibility Principle (SRP):** Classes do not manage the creation of their dependencies, adhering to SRP by focusing on their main logic.

### Benefits

- **Testability:** Easier to substitute dependencies with mocks or stubs during unit testing.
- **Maintainability:** Changes to dependencies require less modification to dependent classes.
- **Reusability:** Classes can be reused with different implementations of their dependencies.

### Summary

Dependency Injection is a key pattern in OOP that promotes loose coupling, modularity, and testability by externalizing the creation and management of dependencies. It aligns closely with SOLID principles and is widely used in modern C# applications, especially with frameworks like ASP.NET Core.
\`\`\``,level:"Advanced",created_at:"2025-04-21T05:34:27.630200Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"97f8cb1b-c955-4c39-8783-db974cbd160e",question:"What is reflection in C# and how can it be used with OOP concepts?",answer:`\`\`\`markdown
### What is Reflection in C# and How Can It Be Used with OOP Concepts?

**Reflection** in C# is a powerful feature provided by the .NET Framework that allows programs to inspect and manipulate their own structure and metadata at runtime. It is part of the \`System.Reflection\` namespace.

#### Key Capabilities of Reflection

- **Inspecting Types:** You can examine assemblies, modules, types (classes, interfaces, structs, enums, delegates), and their members (methods, properties, fields, events).
- **Dynamic Instantiation:** Create instances of types dynamically at runtime.
- **Invoking Members:** Invoke methods, access properties, and fields dynamically.
- **Accessing Attributes:** Retrieve custom attributes applied to types and members.

#### How Reflection Relates to OOP Concepts

Reflection enhances and interacts with core OOP concepts in several ways:

1. **Encapsulation**
   - Reflection can bypass encapsulation by allowing access to private and protected members, though this should be used judiciously (e.g., for testing or serialization).

2. **Polymorphism**
   - Reflection can be used to discover and invoke overridden or implemented methods at runtime, supporting dynamic method invocation.

3. **Inheritance**
   - Reflection allows you to traverse the inheritance hierarchy, inspect base types, and analyze inherited members.

4. **Abstraction**
   - Reflection can be used to work with abstract types (interfaces or abstract classes) by discovering their concrete implementations at runtime.

#### Example: Using Reflection with OOP

Suppose you have a base class and a derived class:

\`\`\`csharp
public abstract class Animal
{
    public abstract void Speak();
}

public class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Woof!");
    }
}
\`\`\`

You can use reflection to:

- Discover all types that inherit from \`Animal\`.
- Dynamically create an instance of \`Dog\`.
- Invoke the \`Speak\` method without knowing the concrete type at compile time.

\`\`\`csharp
using System;
using System.Reflection;

Type animalType = typeof(Animal);
Assembly assembly = Assembly.GetExecutingAssembly();

foreach (Type type in assembly.GetTypes())
{
    if (animalType.IsAssignableFrom(type) && !type.IsAbstract)
    {
        // Create an instance dynamically
        Animal animal = (Animal)Activator.CreateInstance(type);
        // Invoke method dynamically
        MethodInfo speakMethod = type.GetMethod("Speak");
        speakMethod.Invoke(animal, null);
    }
}
\`\`\`

#### Common Use Cases

- **Dependency Injection Containers**
- **ORMs (Object-Relational Mappers)**
- **Serialization/Deserialization**
- **Unit Testing Frameworks**
- **Plugin Architectures**

#### Summary Table

| OOP Concept     | Reflection Usage Example                                   |
|-----------------|-----------------------------------------------------------|
| Encapsulation   | Accessing private fields for testing                      |
| Inheritance     | Discovering derived types at runtime                      |
| Polymorphism    | Invoking overridden methods dynamically                   |
| Abstraction     | Instantiating concrete types from abstract base types     |

---

**In summary:**  
Reflection in C# provides runtime type inspection and manipulation capabilities, which can be leveraged to implement flexible, extensible, and dynamic OOP-based solutions.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:34:27.630214Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"2f57a3aa-530e-4e59-8eb3-6456e0a5910f",question:"How can you implement custom events and delegates in C#?",answer:`\`\`\`markdown
### Implementing Custom Events and Delegates in C#

In C#, **delegates** are type-safe function pointers, and **events** are a way to provide notifications. Custom events and delegates are fundamental to implementing the Observer pattern and building loosely coupled systems.

#### 1. Define a Delegate

A delegate defines the signature for the event handler methods.

\`\`\`csharp
public delegate void MyCustomEventHandler(object sender, EventArgs e);
\`\`\`

#### 2. Declare an Event

Use the \`event\` keyword with the delegate type to declare an event in your class.

\`\`\`csharp
public class Publisher
{
    public event MyCustomEventHandler MyCustomEvent;

    public void RaiseEvent()
    {
        // Invoke the event if there are any subscribers
        MyCustomEvent?.Invoke(this, EventArgs.Empty);
    }
}
\`\`\`

#### 3. Subscribe to the Event

Other classes can subscribe to the event using \`+=\` and unsubscribe using \`-=\`.

\`\`\`csharp
public class Subscriber
{
    public void OnMyCustomEvent(object sender, EventArgs e)
    {
        Console.WriteLine("Event received!");
    }
}
\`\`\`

#### 4. Usage Example

\`\`\`csharp
class Program
{
    static void Main()
    {
        Publisher publisher = new Publisher();
        Subscriber subscriber = new Subscriber();

        // Subscribe to the event
        publisher.MyCustomEvent += subscriber.OnMyCustomEvent;

        // Raise the event
        publisher.RaiseEvent();

        // Unsubscribe if needed
        publisher.MyCustomEvent -= subscriber.OnMyCustomEvent;
    }
}
\`\`\`

#### 5. Custom EventArgs

For passing custom data, derive from \`EventArgs\`:

\`\`\`csharp
public class MyEventArgs : EventArgs
{
    public string Message { get; set; }
}
public delegate void MyCustomEventHandler(object sender, MyEventArgs e);
\`\`\`

#### 6. Encapsulating Event Access

You can provide custom add/remove logic for events:

\`\`\`csharp
private MyCustomEventHandler _myCustomEvent;
public event MyCustomEventHandler MyCustomEvent
{
    add { _myCustomEvent += value; }
    remove { _myCustomEvent -= value; }
}
\`\`\`

---

**Summary:**  
To implement custom events and delegates in C#, define a delegate, declare an event using that delegate, raise the event in your class, and allow other classes to subscribe/unsubscribe to the event. This enables flexible and decoupled event-driven programming.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:34:27.630229Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"3701c905-7646-47ce-a359-cc7545faf81c",question:"What is the SOLID principle in OOP and how does it apply to C#?",answer:`\`\`\`markdown
## SOLID Principles in OOP and Their Application in C#

The **SOLID** principles are a set of five design guidelines intended to make object-oriented software more understandable, flexible, and maintainable. These principles are especially relevant in C#, which is a strongly-typed, object-oriented language. Here’s a breakdown of each principle and its application in C#:

---

### 1. **Single Responsibility Principle (SRP)**
**Definition:**  
A class should have only one reason to change, meaning it should have only one job or responsibility.

**C# Example:**
\`\`\`csharp
// Bad: Handles both user data and file operations
class UserManager {
    public void AddUser(User user) { /* ... */ }
    public void SaveToFile(User user) { /* ... */ }
}

// Good: Separate responsibilities
class UserManager {
    public void AddUser(User user) { /* ... */ }
}

class UserFileSaver {
    public void SaveToFile(User user) { /* ... */ }
}
\`\`\`

---

### 2. **Open/Closed Principle (OCP)**
**Definition:**  
Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

**C# Example:**
\`\`\`csharp
// Using abstract classes or interfaces for extension
public abstract class Shape {
    public abstract double Area();
}

public class Circle : Shape {
    public double Radius { get; set; }
    public override double Area() => Math.PI * Radius * Radius;
}

public class Rectangle : Shape {
    public double Width { get; set; }
    public double Height { get; set; }
    public override double Area() => Width * Height;
}
\`\`\`
*New shapes can be added without modifying existing code.*

---

### 3. **Liskov Substitution Principle (LSP)**
**Definition:**  
Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.

**C# Example:**
\`\`\`csharp
public class Bird {
    public virtual void Fly() { /* ... */ }
}

public class Sparrow : Bird { }

public class Ostrich : Bird {
    public override void Fly() {
        throw new NotSupportedException("Ostrich can't fly!");
    }
}
// Violates LSP: Ostrich is a Bird, but can't fly. Better to refactor hierarchy.
\`\`\`

---

### 4. **Interface Segregation Principle (ISP)**
**Definition:**  
Clients should not be forced to depend on interfaces they do not use.

**C# Example:**
\`\`\`csharp
// Bad: One big interface
public interface IWorker {
    void Work();
    void Eat();
}

// Good: Split into smaller interfaces
public interface IWorkable {
    void Work();
}

public interface IFeedable {
    void Eat();
}
\`\`\`

---

### 5. **Dependency Inversion Principle (DIP)**
**Definition:**  
High-level modules should not depend on low-level modules; both should depend on abstractions.

**C# Example:**
\`\`\`csharp
// Bad: Direct dependency
public class EmailSender {
    public void Send(string message) { /* ... */ }
}

public class Notification {
    private EmailSender _emailSender = new EmailSender();
    public void Notify(string message) {
        _emailSender.Send(message);
    }
}

// Good: Depend on abstraction
public interface IMessageSender {
    void Send(string message);
}

public class EmailSender : IMessageSender {
    public void Send(string message) { /* ... */ }
}

public class Notification {
    private readonly IMessageSender _messageSender;
    public Notification(IMessageSender messageSender) {
        _messageSender = messageSender;
    }
    public void Notify(string message) {
        _messageSender.Send(message);
    }
}
\`\`\`

---

## Summary

Applying the **SOLID** principles in C# leads to code that is easier to maintain, extend, and test. These principles encourage the use of interfaces, abstractions, and proper class design, which are all well-supported in C# through its rich object-oriented features.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:34:27.630244Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"83272466-7bb6-4a01-8e72-3eabd667ba79",question:"What is the difference between composition and inheritance?",answer:`\`\`\`markdown **Composition vs. Inheritance in C# (OOP)**

| Aspect         | Inheritance                                                                 | Composition                                                      |
|----------------|-----------------------------------------------------------------------------|------------------------------------------------------------------|
| Definition     | A mechanism where a class derives from another class, inheriting its members.| A design principle where a class contains instances of other classes.|
| Relationship   | "Is-a" relationship (e.g., Dog is an Animal).                               | "Has-a" relationship (e.g., Car has an Engine).                  |
| Reusability    | Promotes code reuse via extending base classes.                             | Promotes code reuse by delegating responsibilities to components. |
| Flexibility    | Less flexible; tightly couples child to parent.                             | More flexible; can change components at runtime.                  |
| Multiple Base  | Single inheritance only (no multiple inheritance).                          | Can compose multiple unrelated classes.                           |
| Example        | \`\`\`csharp
class Animal { }
class Dog : Animal { }
\`\`\` |
\`\`\`csharp
class Engine { }
class Car
{
    private Engine engine = new Engine();
}
\`\`\` |
| When to Use    | When objects share a common base and behavior.                              | When you want to build complex types by combining simple ones.    |

**Summary:**  
- **Inheritance** is best for hierarchical relationships and code reuse through extension.
- **Composition** is preferred for flexibility, modularity, and avoiding tight coupling.  
- Favor composition over inheritance when possible (per SOLID principles).`,level:"Advanced",created_at:"2025-04-21T05:34:27.630259Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"4e2d38cb-0f64-4fe5-bbb8-aeccd69882bd",question:"How can you prevent a class from being inherited in C#?",answer:`\`\`\`markdown To prevent a class from being inherited in C#, you use the \`sealed\` keyword. A sealed class cannot be used as a base class, meaning no other class can derive from it.

**Example:**

\`\`\`csharp
sealed class MyClass
{
    // Class members go here
}

// The following will cause a compile-time error:
class DerivedClass : MyClass
{
    // Error: 'MyClass' is sealed and cannot be inherited
}
\`\`\`

**Key Points:**
- Use \`sealed\` before the class declaration.
- Sealed classes are often used to prevent further derivation for security, design, or optimization reasons.
- You can also seal individual methods in a derived class to prevent them from being overridden further.`,level:"Advanced",created_at:"2025-04-21T05:34:27.630276Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"0c648731-5d2a-4c9a-8b54-78558fe8f13d",question:"What is the use of the 'as' and 'is' operators in C# OOP?",answer:`\`\`\`markdown
### Use of the \`as\` and \`is\` Operators in C# OOP

#### \`is\` Operator

- **Purpose:** Checks if an object is compatible with a given type.
- **Usage:** Returns \`true\` if the object is of the specified type or can be converted to that type; otherwise, returns \`false\`.
- **Common Scenario:** Used for safe type checking before casting.

**Example:**
\`\`\`csharp
object obj = "Hello, World!";
if (obj is string)
{
    Console.WriteLine("obj is a string");
}
\`\`\`

#### \`as\` Operator

- **Purpose:** Attempts to cast an object to a specified reference type.
- **Usage:** Returns the object as the specified type if the cast is valid; otherwise, returns \`null\` (does not throw an exception).
- **Common Scenario:** Used for safe casting, especially when you are not sure if the cast will succeed.

**Example:**
\`\`\`csharp
object obj = "Hello, World!";
string str = obj as string;
if (str != null)
{
    Console.WriteLine("Casting succeeded: " + str);
}
else
{
    Console.WriteLine("Casting failed");
}
\`\`\`

#### Key Differences

- \`is\` checks type compatibility; \`as\` attempts safe casting.
- \`is\` returns a boolean; \`as\` returns the casted object or \`null\`.
- \`as\` can only be used with reference types or nullable types.

#### Practical Use in OOP

Both operators are essential in object-oriented programming for:
- Implementing polymorphism
- Working with inheritance hierarchies
- Safely handling objects of unknown or variable types at runtime
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:34:27.630291Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"ce5e8943-61ac-482f-9dc1-3ee0e1dd9bdf",question:"How does C# handle object finalization and garbage collection?",answer:`\`\`\`markdown
### How does C# handle object finalization and garbage collection?

C# manages memory automatically through a process called **garbage collection (GC)**, which is part of the .NET runtime. Here's how it works in the context of object finalization and memory management:

#### Garbage Collection

- **Automatic Memory Management:** When objects are created in C#, they are allocated on the managed heap. The garbage collector periodically checks for objects that are no longer accessible by any references in the application.
- **Mark and Sweep:** The GC marks all reachable objects and then sweeps the heap to reclaim memory from unreachable objects.
- **Generational Collection:** The heap is divided into generations (Gen 0, Gen 1, Gen 2) to optimize collection. New objects are allocated in Gen 0, and surviving objects are promoted to higher generations.

#### Object Finalization

- **Finalizer (~ClassName):** If a class needs to perform cleanup before the object is reclaimed (e.g., releasing unmanaged resources), it can define a finalizer using the \`~ClassName()\` syntax.
- **Non-Deterministic:** The finalizer is called by the GC, not by user code, and the exact time when it runs is non-deterministic.
- **Suppression and Re-Registration:** You can suppress finalization using \`GC.SuppressFinalize(this)\` if cleanup is done manually (e.g., via \`IDisposable\`). You can also re-register an object for finalization using \`GC.ReRegisterForFinalize(this)\`.

#### IDisposable and the Dispose Pattern

- **Deterministic Cleanup:** To allow deterministic release of resources, C# uses the \`IDisposable\` interface and the \`Dispose\` method. This is especially important for unmanaged resources.
- **Dispose Pattern:** The recommended pattern is to implement both \`Dispose\` and a finalizer, ensuring resources are released properly whether or not \`Dispose\` is called.

#### Example

\`\`\`csharp
class MyResource : IDisposable
{
    private bool disposed = false;

    // Finalizer
    ~MyResource()
    {
        Dispose(false);
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this); // Prevent finalizer from running
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!disposed)
        {
            if (disposing)
            {
                // Free managed resources
            }
            // Free unmanaged resources
            disposed = true;
        }
    }
}
\`\`\`

#### Summary Table

| Feature         | Purpose                                  | Triggered By         | Determinism      |
|-----------------|------------------------------------------|----------------------|------------------|
| Garbage Collector | Reclaims memory for unreachable objects | .NET runtime         | Non-deterministic|
| Finalizer       | Cleanup before object is collected        | Garbage Collector    | Non-deterministic|
| IDisposable     | Deterministic resource cleanup            | User code (\`Dispose\`)| Deterministic    |

**In summary:**  
C# uses garbage collection to automatically manage memory, and provides finalizers for non-deterministic cleanup of unmanaged resources. For deterministic cleanup, the \`IDisposable\` interface and the Dispose pattern are used.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:34:27.630316Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"9f594b47-75e5-42e7-8aa9-63823f5b314f",question:"What are extension methods and how do they relate to OOP?",answer:`\`\`\`markdown **Extension Methods in C# and Their Relation to OOP**

Extension methods are a feature in C# that allow developers to "add" new methods to existing types without modifying the original type, creating a derived type, or recompiling the code. They are defined as static methods in static classes, but are called as if they were instance methods on the extended type.

### Syntax Example

\`\`\`csharp
public static class StringExtensions
{
    public static bool IsNullOrEmpty(this string str)
    {
        return string.IsNullOrEmpty(str);
    }
}

// Usage:
string s = null;
bool result = s.IsNullOrEmpty(); // Calls the extension method
\`\`\`

### How Extension Methods Relate to OOP

- **Open/Closed Principle**: Extension methods support the OOP principle of being open for extension but closed for modification. You can extend the functionality of existing classes (even those you don't own, like .NET framework types) without altering their source code.
- **Encapsulation**: While extension methods provide additional functionality, they do not break encapsulation because they cannot access private members of the extended type—only public and protected members.
- **Polymorphism**: Extension methods do not support polymorphism. If an instance method with the same signature exists, the instance method is called instead of the extension method.
- **Separation of Concerns**: By grouping extension methods in static classes, you can keep related functionality together, promoting better organization and maintainability.

### Key Points

- Extension methods are static but can be called as if they were instance methods.
- They allow you to extend sealed or third-party classes.
- They do not modify the original type or support overriding.
- They are resolved at compile time, not runtime.

**In summary:** Extension methods provide a way to extend the behavior of existing types in a manner consistent with OOP principles, particularly the open/closed principle, but they do not offer true polymorphic behavior.`,level:"Advanced",created_at:"2025-04-21T05:34:27.630330Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"42582c13-1a4d-486b-a02a-cd8cadca184b",question:"What is a nested class and when would you use one?",answer:`\`\`\`markdown A **nested class** in C# is a class defined within the scope of another class. It is a member of its enclosing (outer) class, just like fields, properties, or methods.

\`\`\`csharp
public class OuterClass
{
    public class NestedClass
    {
        public void Display()
        {
            Console.WriteLine("Hello from NestedClass!");
        }
    }
}
\`\`\`

### When to Use a Nested Class

You would use a nested class when:

- **Encapsulation:** The nested class is only relevant to its containing class and should not be visible outside.
- **Logical Grouping:** The nested class logically belongs to the outer class, helping to organize code and clarify relationships.
- **Access to Outer Class Members:** A nested class can access private members of the outer class (if it's not static).
- **Helper/Utility Classes:** When you need a helper class that is only used by the outer class.

#### Example Scenario

Suppose you have a \`Car\` class, and you want to represent an \`Engine\` that should not be used independently of \`Car\`:

\`\`\`csharp
public class Car
{
    private Engine engine;

    public Car()
    {
        engine = new Engine();
    }

    public void Start()
    {
        engine.Ignite();
    }

    private class Engine
    {
        public void Ignite()
        {
            Console.WriteLine("Engine started!");
        }
    }
}
\`\`\`

Here, \`Engine\` is a nested class because it is only meaningful within the context of \`Car\`.

---

**Summary:**  
A nested class is a class defined within another class, used for encapsulation, logical grouping, and restricting scope when the inner class is only relevant to the outer class.`,level:"Advanced",created_at:"2025-04-21T05:34:27.630344Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"9a35e88e-e21c-4cf3-afd6-645aec65e613",question:"How do you implement the Singleton pattern in C#?",answer:`\`\`\`markdown
### Implementing the Singleton Pattern in C#

The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. In C#, the most common and thread-safe way to implement a Singleton is using a \`static\` property and a \`private\` constructor.

#### Example: Thread-Safe Singleton Implementation

\`\`\`csharp
public sealed class Singleton
{
    // Private static readonly instance
    private static readonly Singleton _instance = new Singleton();

    // Private constructor to prevent instantiation
    private Singleton()
    {
        // Initialization code here
    }

    // Public static property to provide global access point
    public static Singleton Instance
    {
        get
        {
            return _instance;
        }
    }

    // Example method
    public void DoSomething()
    {
        Console.WriteLine("Singleton instance method called.");
    }
}
\`\`\`

#### Key Points

- **Private Constructor:** Prevents external instantiation.
- **Static Readonly Instance:** Ensures only one instance is created, and it's thread-safe due to static initialization.
- **Global Access Point:** The \`Instance\` property provides access to the singleton object.
- **Sealed Class:** Prevents inheritance, which could lead to multiple instances.

#### Usage

\`\`\`csharp
Singleton singleton = Singleton.Instance;
singleton.DoSomething();
\`\`\`

#### Alternative: Lazy Initialization (with Lazy<T>)

If you want lazy initialization (instance created only when needed), use \`Lazy<T>\`:

\`\`\`csharp
public sealed class Singleton
{
    private static readonly Lazy<Singleton> _lazyInstance = new Lazy<Singleton>(() => new Singleton());

    private Singleton() { }

    public static Singleton Instance => _lazyInstance.Value;
}
\`\`\`

This approach is also thread-safe and delays creation until first use.

---
**Summary:**  
Implement the Singleton pattern in C# by using a private constructor, a static readonly instance (or \`Lazy<T>\` for lazy initialization), and a public static property for access.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:34:27.630357Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"1d717bb9-e138-49f6-be0a-b117e8bbf041",question:"What is the difference between interface inheritance and class inheritance?",answer:`\`\`\`markdown **Difference Between Interface Inheritance and Class Inheritance in C#**

| Aspect                        | Interface Inheritance                                  | Class Inheritance                                      |
|-------------------------------|-------------------------------------------------------|--------------------------------------------------------|
| **Definition**                | Inheriting from one or more interfaces.               | Inheriting from a base (parent) class.                 |
| **Syntax**                    | \`class MyClass : IMyInterface { }\`                    | \`class Derived : Base { }\`                             |
| **Multiple Inheritance**      | Supported (a class can implement multiple interfaces) | Not supported (a class can inherit from only one base class) |
| **Members**                   | Only method/property/event/indexer signatures (no implementation) | Can contain fields, methods (with implementation), properties, etc. |
| **Access Modifiers**          | Members are always public (no access modifiers)        | Members can have various access modifiers (public, protected, private, etc.) |
| **Purpose**                   | To define a contract that implementing classes must follow | To reuse code and extend functionality of base class   |
| **Constructors**              | Not allowed in interfaces                             | Allowed in classes                                     |
| **Implementation**            | Must be implemented by the derived class              | Can be inherited or overridden in the derived class    |

**Example:**

\`\`\`csharp
// Interface inheritance
interface IAnimal
{
    void Speak();
}

class Dog : IAnimal
{
    public void Speak() { Console.WriteLine("Woof!"); }
}

// Class inheritance
class Animal
{
    public virtual void Eat() { Console.WriteLine("Eating"); }
}

class Cat : Animal
{
    public override void Eat() { Console.WriteLine("Cat eating"); }
}
\`\`\`

**Summary:**  
- **Interface inheritance** is about defining capabilities (contracts) that must be implemented, supports multiple inheritance, and contains no implementation.
- **Class inheritance** is about reusing and extending existing code, supports only single inheritance, and can include implementation.`,level:"Advanced",created_at:"2025-04-21T05:34:27.630369Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"98ccf138-92d9-4af6-8226-7b0e19524c19",question:"How does C# support generic classes and methods in OOP?",answer:`\`\`\`markdown
C# supports generics to enable type-safe data structures and methods without committing to actual data types at compile time. This is a powerful feature in Object-Oriented Programming (OOP) that promotes code reusability, type safety, and performance.

## Generic Classes

A generic class allows you to define a class with placeholders for the data types it stores or uses. The actual type is specified when an instance of the class is created.

**Example:**

\`\`\`csharp
public class GenericList<T>
{
    private T[] items;
    private int count;

    public GenericList(int size)
    {
        items = new T[size];
        count = 0;
    }

    public void Add(T item)
    {
        items[count++] = item;
    }

    public T Get(int index)
    {
        return items[index];
    }
}
\`\`\`

- \`T\` is a type parameter, replaced with a real type (e.g., \`int\`, \`string\`) when you create an object:
    \`\`\`csharp
    var intList = new GenericList<int>(10);
    var stringList = new GenericList<string>(10);
    \`\`\`

## Generic Methods

Generic methods define type parameters at the method level, allowing the method to operate on different data types without duplicating code.

**Example:**

\`\`\`csharp
public class Utilities
{
    public static void Swap<T>(ref T a, ref T b)
    {
        T temp = a;
        a = b;
        b = temp;
    }
}
\`\`\`

- \`Swap\` can be used with any data type:
    \`\`\`csharp
    int x = 5, y = 10;
    Utilities.Swap<int>(ref x, ref y);

    string s1 = "hello", s2 = "world";
    Utilities.Swap(ref s1, ref s2); // Type inference
    \`\`\`

## Benefits in OOP

- **Type Safety:** Errors are caught at compile time.
- **Code Reusability:** Write once, use for any data type.
- **Performance:** No boxing/unboxing for value types.

## Constraints

C# allows you to specify constraints on generic types to enforce certain behaviors:

\`\`\`csharp
public class Repository<T> where T : class, new()
{
    public T CreateInstance()
    {
        return new T();
    }
}
\`\`\`

- \`where T : class, new()\` restricts \`T\` to reference types with a parameterless constructor.

---

**In summary:**  
C# generics enable the creation of flexible, reusable, and type-safe classes and methods, which are fundamental to robust OOP design.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:34:27.630381Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"4aa23a41-b52a-41db-9bf1-6a9690303275",question:"What is the purpose of the 'readonly' and 'const' keywords in C# OOP?",answer:`\`\`\`markdown
In C#, both \`readonly\` and \`const\` are used to define fields whose values cannot be changed, but they serve different purposes and have distinct behaviors:

### \`const\` Keyword

- **Purpose:** Declares a constant field or local constant whose value is set at compile time and cannot be changed.
- **Usage:** Typically used for values that are known at compile time and will never change (e.g., mathematical constants).
- **Characteristics:**
  - Must be initialized at the time of declaration.
  - Implicitly static; shared across all instances.
  - Value is substituted at compile time.
  - Only primitive types, enums, or strings can be \`const\`.

**Example:**
\`\`\`csharp
public const double Pi = 3.14159;
\`\`\`

---

### \`readonly\` Keyword

- **Purpose:** Declares a field that can only be assigned a value during its declaration or in the constructor of the containing class.
- **Usage:** Used when the value is not known at compile time but should not change after object construction.
- **Characteristics:**
  - Value can be set in the declaration or in a constructor.
  - Not implicitly static; each instance can have a different value.
  - Value is determined at runtime.

**Example:**
\`\`\`csharp
public readonly DateTime creationTime;

public MyClass()
{
    creationTime = DateTime.Now;
}
\`\`\`

---

### Summary Table

| Keyword   | When Set           | Static?      | Value Known At | Can Change After Construction? |
|-----------|--------------------|--------------|---------------|-------------------------------|
| \`const\`   | Declaration        | Yes          | Compile time  | No                            |
| \`readonly\`| Declaration/Constructor | No     | Runtime       | No                            |

**In summary:**  
- Use \`const\` for values that never change and are known at compile time.
- Use \`readonly\` for values that are set at runtime (in constructors) and should not change after the object is created.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T05:34:27.630393Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"},{id:"bf9f0d1e-f4f0-4680-990f-2c30a63e2fd2",question:"How do you implement custom attributes and how can they be used in OOP?",answer:`\`\`\`markdown
### Implementing Custom Attributes in C# and Their Use in OOP

#### 1. What are Custom Attributes?

Custom attributes in C# are user-defined metadata that can be attached to program entities such as classes, methods, properties, etc. They allow you to associate declarative information with your code, which can then be retrieved at runtime using reflection.

#### 2. How to Implement a Custom Attribute

To create a custom attribute:

- Inherit from \`System.Attribute\`.
- Optionally, define constructors and properties to store attribute data.
- Use the \`[AttributeUsage]\` attribute to specify where your attribute can be applied.

**Example:**

\`\`\`csharp
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = false)]
public class AuthorAttribute : Attribute
{
    public string Name { get; }
    public double Version { get; set; }

    public AuthorAttribute(string name)
    {
        Name = name;
    }
}
\`\`\`

#### 3. Applying Custom Attributes

You can apply your custom attribute to classes, methods, etc.:

\`\`\`csharp
[Author("Alice", Version = 1.1)]
public class SampleClass
{
    [Author("Bob", Version = 1.2)]
    public void SampleMethod() { }
}
\`\`\`

#### 4. Retrieving Attribute Data via Reflection

Attributes are accessed at runtime using reflection:

\`\`\`csharp
Type type = typeof(SampleClass);
object[] attrs = type.GetCustomAttributes(typeof(AuthorAttribute), false);

foreach (AuthorAttribute attr in attrs)
{
    Console.WriteLine($"Author: {attr.Name}, Version: {attr.Version}");
}
\`\`\`

#### 5. Use in OOP

Custom attributes enhance OOP in C# by:

- **Adding Metadata:** Attach descriptive or behavioral information to classes, methods, properties, etc.
- **Supporting Frameworks/Tools:** Many frameworks (e.g., ASP.NET, Entity Framework) use attributes for configuration and behavior control.
- **Aspect-Oriented Programming:** Implement cross-cutting concerns (like logging, validation) declaratively.
- **Custom Processing:** Enable custom logic based on attribute presence (e.g., custom serialization, validation).

**Example: Marking Methods for Logging**

\`\`\`csharp
[AttributeUsage(AttributeTargets.Method)]
public class LogAttribute : Attribute { }

public class MyService
{
    [Log]
    public void ImportantOperation() { }
}
\`\`\`

A logging framework could use reflection to find methods marked with \`[Log]\` and inject logging behavior.

---

**Summary:**  
Custom attributes in C# are a powerful OOP feature for attaching metadata to code elements. They are implemented by inheriting from \`System.Attribute\`, applied declaratively, and accessed via reflection to influence program behavior or provide additional information.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T05:34:27.630405Z",topic:"bb2dbf0c-7528-4614-acdb-7b7cb4c425a1"}];export{e as default};
