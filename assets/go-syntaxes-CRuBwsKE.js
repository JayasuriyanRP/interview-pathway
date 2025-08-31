const n=[{id:"b78f9c82-11a6-4ac9-9379-f686a4bf7331",question:"What is the correct syntax to declare a variable in Go?",answer:'```go\nvar variableName type\n```\n\n**Example:**\n```go\nvar age int\n```\n\nYou can also declare and initialize a variable in one line:\n```go\nvar name string = "Alice"\n```\n\nOr use shorthand inside functions:\n```go\nage := 25\n```',level:"Beginner"},{id:"4bbda388-6d00-4a1e-b7fd-70ce09a73d4b",question:"How do you declare and initialize a constant in Go?",answer:'```markdown You can declare and initialize a constant in Go using the const keyword, followed by the name, optional type, and value. Here’s the syntax:\n\n```go\nconst name type = value\n```\n\nThe type is optional if it can be inferred from the value.\n\n**Examples:**\n\n```go\nconst Pi = 3.14           // type inferred as float64\nconst Greeting string = "Hello, Go!" // explicit type\n```\n\nConstants must be assigned a value at compile time and cannot be changed later.',level:"Beginner"},{id:"d134e6a8-9b3d-440f-9ed2-07c621c2ba81",question:"What is the syntax for creating a function in Go?",answer:`\`\`\`go
func functionName(parameters) returnType {
    // function body
}
\`\`\`

**Example:**

\`\`\`go
func add(a int, b int) int {
    return a + b
}
\`\`\`

- func: Keyword to declare a function.
- functionName: Name of the function.
- parameters: List of input parameters with their types.
- returnType: (Optional) The type of value the function returns.
- Function body: Code to be executed when the function is called.`,level:"Beginner"},{id:"adcf14bc-0aa7-4a0c-b727-51afa72ddb3d",question:"How do you import a package in Go?",answer:'```markdown To import a package in Go, use the import keyword followed by the package name in quotes. For example, to import the fmt package:\n\n```go\nimport "fmt"\n```\n\nYou can also import multiple packages using parentheses:\n\n```go\nimport (\n    "fmt"\n    "math"\n)\n```',level:"Beginner"},{id:"c125de64-9a1c-4cbd-9bd5-44f5610b89c0",question:"What is the short variable declaration syntax in Go?",answer:'```markdown In Go, the short variable declaration syntax uses := to declare and initialize variables in one step. It is typically used inside functions.\n\n```go\nname := "Alice"\nage := 30\n```\n\nThis is equivalent to:\n\n```go\nvar name string = "Alice"\nvar age int = 30\n```\n\n**Note:** The short variable declaration (:=) can only be used inside functions, not at the package level.',level:"Beginner"},{id:"7622de82-2da4-4fde-8db5-15ffa3376cf9",question:"How do you write a for loop in Go?",answer:`\`\`\`go
// Basic for loop in Go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
\`\`\`

**Explanation:**
- \`i := 0\` initializes the loop variable.
- \`i < 5\` is the loop condition.
- \`i++\` increments the variable after each iteration.

Go's \`for\` loop is similar to other C-style languages, but it's the only looping construct in Go. You can also use it in different forms, such as:

\`\`\`go
// Like a while loop
i := 0
for i < 5 {
    fmt.Println(i)
    i++
}
\`\`\`

\`\`\`go
// Infinite loop
for {
    // your code here
}
\`\`\``,level:"Beginner"},{id:"a0490475-6f78-41bb-ad23-ce1d0a2c1ded",question:"What is the syntax for an if-else statement in Go?",answer:`\`\`\`go
if condition {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}
\`\`\`

**Example:**
\`\`\`go
x := 10
if x > 5 {
    fmt.Println("x is greater than 5")
} else {
    fmt.Println("x is 5 or less")
}
\`\`\``,level:"Beginner"},{id:"dbb73bff-cf60-41bd-b0b5-ea56ba768fe2",question:"How do you define a struct in Go?",answer:`\`\`\`markdown You can define a struct in Go using the type and struct keywords. Here’s the basic syntax:

\`\`\`go
type StructName struct {
    FieldName1 FieldType1
    FieldName2 FieldType2
    // Add more fields as needed
}
\`\`\`

**Example:**

\`\`\`go
type Person struct {
    Name string
    Age  int
}
\`\`\`

This defines a struct named Person with two fields: Name (a string) and Age (an int).`,level:"Beginner"},{id:"de3f5d0c-ab6d-41fe-aa10-93d613f1870b",question:"How do you create an array in Go?",answer:"```markdown You can create an array in Go by specifying the length and the type of its elements. Here’s the basic syntax:\n\n```go\nvar arrayName [length]elementType\n```\n\n**Example:**\n\n```go\nvar numbers [5]int // An array of 5 integers\n```\n\nYou can also initialize the array with values:\n\n```go\nnumbers := [5]int{1, 2, 3, 4, 5}\n```\n\nIf you want Go to determine the length automatically, use `...`:\n\n```go\nnumbers := [...]int{1, 2, 3, 4, 5}\n```\n\n**Summary:**  \n- Use `[length]type` to declare an array.\n- Use `{}` to initialize with values.",level:"Beginner"},{id:"d2cafe79-102b-4361-8578-5bf2740504e1",question:"What is the syntax for declaring a slice in Go?",answer:`\`\`\`go
// Declaring a slice of integers
var numbers []int

// Declaring and initializing a slice of strings
fruits := []string{"apple", "banana", "cherry"}
\`\`\`

- Use var sliceName []Type to declare a slice.
- Use sliceName := []Type{values} to declare and initialize a slice.`,level:"Beginner"},{id:"d24c6646-6d1c-4661-91ec-e604f0f654f7",question:"How do you append an element to a slice in Go?",answer:"```markdown You can append an element to a slice in Go using the built-in append function. Here’s the syntax:\n\n```go\nslice = append(slice, element)\n```\n\n**Example:**\n\n```go\nnumbers := []int{1, 2, 3}\nnumbers = append(numbers, 4)\n// numbers now contains: [1, 2, 3, 4]\n```\n\nYou can also append multiple elements at once:\n\n```go\nnumbers = append(numbers, 5, 6)\n// numbers now contains: [1, 2, 3, 4, 5, 6]\n```",level:"Beginner"},{id:"4cf7afc5-0760-44c0-bf90-beab614d8a8f",question:"What is the syntax for a switch statement in Go?",answer:`\`\`\`go
switch expression {
case value1:
    // code to execute if expression == value1
case value2:
    // code to execute if expression == value2
default:
    // code to execute if no case matches
}
\`\`\`

**Example:**
\`\`\`go
num := 2
switch num {
case 1:
    fmt.Println("One")
case 2:
    fmt.Println("Two")
default:
    fmt.Println("Other number")
}
\`\`\`

**Notes:**
- The switch expression is evaluated once.
- The first matching case is executed.
- The default case is optional and runs if no other case matches.
- You can omit the expression to create a switch that acts like a series of if-else statements.`,level:"Beginner"},{id:"0a2bddc1-6247-4af9-b851-26a05d03057c",question:"How do you declare a map in Go?",answer:`\`\`\`markdown You can declare a map in Go using the following syntax:

\`\`\`go
var myMap map[keyType]valueType
\`\`\`

For example, to declare a map with string keys and int values:

\`\`\`go
var ages map[string]int
\`\`\`

To create and initialize a map, you can use the make function:

\`\`\`go
ages := make(map[string]int)
\`\`\`

Or, you can use a map literal:

\`\`\`go
ages := map[string]int{
    "Alice": 30,
    "Bob":   25,
}
\`\`\`

**Summary:**  
- Use map[keyType]valueType to declare a map type.
- Use make or a map literal to initialize a map.`,level:"Beginner"},{id:"720f4c17-5c84-4cc2-af6f-eae2f84425fb",question:"What is the syntax for a range loop in Go?",answer:`\`\`\`go
for index, value := range collection {
    // code to use index and value
}
\`\`\`

- collection can be an array, slice, string, map, or channel.
- index is the current index/key (for maps, it's the key).
- value is the element at that index/key.
- If you only need the value, use _ for the index: for _, value := range collection { ... }
- If you only need the index/key, use _ for the value: for index := range collection { ... }`,level:"Beginner"},{id:"8e385e55-d0c8-4e16-81bd-6383bad7ffde",question:"How do you define a pointer in Go?",answer:`\`\`\`markdown In Go, you define a pointer by using the * (asterisk) symbol before a type. A pointer holds the memory address of a variable.

Here's how you define and use a pointer:

\`\`\`go
var a int = 10     // a is an integer variable
var p *int         // p is a pointer to an int
p = &a             // p now holds the address of a

fmt.Println(p)     // prints the memory address of a
fmt.Println(*p)    // prints the value stored at that address (10)
\`\`\`

- &a gives the address of variable a.
- *p gives the value stored at the address p points to.`,level:"Beginner"},{id:"c77edc0c-d820-42e8-aea5-abd505f4c878",question:"How do you dereference a pointer in Go?",answer:`\`\`\`markdown To dereference a pointer in Go, use the * (asterisk) operator before the pointer variable. This gives you access to the value stored at the memory address the pointer refers to.

\`\`\`go
package main

import "fmt"

func main() {
    x := 10
    p := &x        // p is a pointer to x
    fmt.Println(*p) // Dereference p to get the value of x (prints 10)
}
\`\`\`

In this example, *p gives you the value stored at the address p points to.`,level:"Beginner"},{id:"613eba49-d294-4333-838d-cf5136f312b3",question:"What is the syntax for creating a new instance of a struct?",answer:`\`\`\`markdown To create a new instance of a struct in Go, you can use one of the following syntaxes:

\`\`\`go
// Define a struct type
type Person struct {
    Name string
    Age  int
}

// 1. Using a struct literal
p1 := Person{Name: "Alice", Age: 30}

// 2. Using the new keyword (returns a pointer)
p2 := new(Person)
p2.Name = "Bob"
p2.Age = 25

// 3. Using the address-of operator with a struct literal (pointer)
p3 := &Person{Name: "Charlie", Age: 40}
\`\`\`

- p1 is a value of type Person.
- p2 and p3 are pointers to Person structs.`,level:"Beginner"},{id:"ce62799f-1ed6-4761-9b1e-f28de6e6f16b",question:"How do you access struct fields in Go?",answer:'```markdown You access struct fields in Go using the dot (.) notation. Here’s a simple example:\n\n```go\ntype Person struct {\n    Name string\n    Age  int\n}\n\nfunc main() {\n    p := Person{Name: "Alice", Age: 30}\n    fmt.Println(p.Name) // Accesses the Name field\n    fmt.Println(p.Age)  // Accesses the Age field\n}\n```\n\nIn this example, `p.Name` and `p.Age` access the `Name` and `Age` fields of the `Person` struct instance `p`.',level:"Beginner"},{id:"b3f20ee6-359d-41eb-8801-cc3b9c876c30",question:"How do you define a method for a struct in Go?",answer:`\`\`\`markdown To define a method for a struct in Go, you use a receiver argument in the function definition. The receiver specifies which struct the method belongs to. Here’s the syntax:

\`\`\`go
type Person struct {
    Name string
    Age  int
}

// Method with value receiver
func (p Person) Greet() {
    fmt.Printf("Hello, my name is %s.\\n", p.Name)
}

// Method with pointer receiver (allows modification)
func (p *Person) HaveBirthday() {
    p.Age++
}
\`\`\`

**Key Points:**
- The receiver appears between the func keyword and the method name.
- Use a value receiver (e.g., p Person) if the method does not modify the struct.
- Use a pointer receiver (e.g., p *Person) if the method modifies the struct or for efficiency with large structs.

**Example Usage:**

\`\`\`go
p := Person{Name: "Alice", Age: 30}
p.Greet()           // Output: Hello, my name is Alice.
p.HaveBirthday()
fmt.Println(p.Age)  // Output: 31
\`\`\`
`,level:"Intermediate"},{id:"100253d2-1757-4832-ae02-868083cef64c",question:"What is the syntax for an interface in Go?",answer:`\`\`\`go
type InterfaceName interface {
    MethodName1(param1 type1, param2 type2) returnType1
    MethodName2(param1 type1) (returnType2, returnType3)
    // ... more method signatures
}
\`\`\`

**Example:**
\`\`\`go
type Shape interface {
    Area() float64
    Perimeter() float64
}
\`\`\`

- Use the type keyword followed by the interface name and the interface keyword.
- List method signatures inside curly braces.
- No method bodies are provided in the interface.`,level:"Intermediate"},{id:"ece7478f-20c8-4200-bdcb-d502b2fca71e",question:"How do you implement an interface in Go?",answer:`\`\`\`markdown To implement an interface in Go, you define a type (usually a struct) and then provide method definitions with the exact signatures specified in the interface. Go uses implicit implementation, so you don't need to declare that a type implements an interface—if the methods match, it does.

**Example:**

\`\`\`go
package main

import "fmt"

// Define the interface
type Speaker interface {
    Speak() string
}

// Define a struct
type Person struct {
    Name string
}

// Implement the interface method for the struct
func (p Person) Speak() string {
    return "Hello, my name is " + p.Name
}

func main() {
    var s Speaker
    s = Person{Name: "Alice"}
    fmt.Println(s.Speak())
}
\`\`\`

**Key Points:**
- The \`Person\` struct implements the \`Speaker\` interface by defining a \`Speak()\` method.
- No explicit declaration is needed; implementation is automatic if the method set matches.
- You can assign a \`Person\` value to a variable of type \`Speaker\` because it satisfies the interface.`,level:"Intermediate"},{id:"975e8e6a-4398-4f20-9328-5a37386f3ec6",question:"How do you use type assertion in Go?",answer:`\`\`\`markdown Type assertion in Go is used to retrieve the dynamic value of an interface variable and convert it to a specified type. The syntax is:

\`\`\`go
value := interfaceVariable.(Type)
\`\`\`

If the interface holds the specified type, the assertion succeeds and value is assigned. If not, the program panics.

**Example:**

\`\`\`go
var i interface{} = "hello"

s := i.(string) // s is now "hello"
fmt.Println(s)
\`\`\`

To avoid a panic, you can use the "comma, ok" idiom:

\`\`\`go
s, ok := i.(string)
if ok {
    fmt.Println("String value:", s)
} else {
    fmt.Println("Not a string")
}
\`\`\`

**Summary Table:**

| Syntax                   | Description                                 |
|--------------------------|---------------------------------------------|
| \`v := x.(T)\`             | Asserts x holds type T, panics if not       |
| \`v, ok := x.(T)\`         | ok is true if x holds type T, false otherwise |

Type assertion is commonly used when working with interfaces, especially the empty interface (interface{}).`,level:"Intermediate"},{id:"e832b25b-e9fc-49f3-b489-1fe8e6794587",question:"What is the syntax for a goroutine in Go?",answer:`\`\`\`go
go functionName(arguments)
\`\`\`

**Example:**
\`\`\`go
package main

import (
    "fmt"
    "time"
)

func sayHello() {
    fmt.Println("Hello from goroutine!")
}

func main() {
    go sayHello() // Starts sayHello in a new goroutine

    time.Sleep(time.Second) // Wait for goroutine to finish
}
\`\`\`

**Explanation:**
- The go keyword starts a new goroutine, which runs concurrently with the main function.
- You can use go with any function or anonymous function:
  \`\`\`go
  go func() {
      fmt.Println("Anonymous goroutine")
  }()
  \`\`\`
- Goroutines are lightweight threads managed by the Go runtime.`,level:"Intermediate"},{id:"aeba2971-3e1b-49fc-b260-1fb603ecc969",question:"How do you create and use a channel in Go?",answer:`\`\`\`markdown To create and use a channel in Go, you use the make function and the chan keyword. Channels are used to communicate between goroutines.

Here's a step-by-step example:

\`\`\`go
package main

import (
    "fmt"
)

func main() {
    // Create a channel of type int
    ch := make(chan int)

    // Start a goroutine that sends a value into the channel
    go func() {
        ch <- 42 // Send the value 42 to the channel
    }()

    // Receive the value from the channel
    value := <-ch
    fmt.Println(value) // Output: 42
}
\`\`\`

**Explanation:**

- \`ch := make(chan int)\` creates a channel that can transport int values.
- \`ch <- 42\` sends the value 42 into the channel.
- \`<-ch\` receives a value from the channel.
- Channels are often used to synchronize and communicate between goroutines.

**Note:** Channels can also be buffered (e.g., \`make(chan int, 2)\`) to allow sending without immediate receiving.`,level:"Intermediate"},{id:"98575b91-da2b-4aa6-a334-a82dc1543cea",question:"What is the select statement syntax in Go?",answer:`\`\`\`go
select {
case <-chan1:
    // code to execute when chan1 receives a value
case val := <-chan2:
    // code to execute when chan2 receives a value, with val assigned
case chan3 <- value:
    // code to execute when value is sent to chan3
default:
    // code to execute if no other case is ready
}
\`\`\`

**Explanation:**

- The \`select\` statement lets a goroutine wait on multiple communication operations (channels).
- Each \`case\` must be a channel operation (receive or send).
- The \`default\` case (optional) runs if no channels are ready.
- Only one case is chosen at random if multiple are ready.
- \`select\` blocks until one case can proceed, unless there is a \`default\` case.

**Example:**
\`\`\`go
select {
case msg := <-messages:
    fmt.Println("Received", msg)
case sig := <-signals:
    fmt.Println("Signal received", sig)
default:
    fmt.Println("No communication")
}
\`\`\``,level:"Intermediate"},{id:"90ed6aff-8bda-47d0-a11d-fe2a56b285a8",question:"How do you define a variadic function in Go?",answer:`\`\`\`markdown In Go, a variadic function is defined by using an ellipsis (...) before the type of the last parameter. This allows the function to accept zero or more arguments of that type.

Here's the syntax:

\`\`\`go
func functionName(paramName ...Type) {
    // function body
}
\`\`\`

**Example:**

\`\`\`go
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

result := sum(1, 2, 3, 4) // result is 10
\`\`\`

**Key Points:**

- The variadic parameter must be the last parameter in the function signature.
- Inside the function, the variadic parameter behaves like a slice of the specified type.
- You can call the function with any number of arguments (including zero).`,level:"Intermediate"},{id:"ca34083f-89c8-419e-9a9a-600487dfd0d2",question:"What is the syntax for defer statements in Go?",answer:`\`\`\`go
defer functionName(arguments)
\`\`\`

**Explanation:**
- The defer statement in Go is used to ensure that a function call is performed later in a program’s execution, usually for purposes of cleanup.
- Deferred functions are executed in LIFO (Last In, First Out) order just before the surrounding function returns.

**Example:**
\`\`\`go
package main

import "fmt"

func main() {
    defer fmt.Println("World")
    fmt.Println("Hello")
}
\`\`\`
**Output:**
\`\`\`
Hello
World
\`\`\`

**Note:** You can also defer anonymous functions or methods:
\`\`\`go
defer func() {
    fmt.Println("Deferred call")
}()
\`\`\``,level:"Intermediate"},{id:"1de62b18-685d-4a42-8f8c-9ee06429e25f",question:"How do you handle errors in Go?",answer:`\`\`\`markdown In Go, error handling is typically done by returning an error value as the last return value from a function. You check if the error is not nil to determine if something went wrong. Here’s a common pattern:

\`\`\`go
package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result)
}
\`\`\`

**Key Points:**
- Functions that can fail usually return an error as the last return value.
- The error type is an interface; you can use errors.New or fmt.Errorf to create errors.
- Always check if err != nil before using the other return values.
- You can define custom error types by implementing the Error() string method.

**Example with custom error:**

\`\`\`go
type MyError struct {
    Msg string
}

func (e *MyError) Error() string {
    return e.Msg
}

func doSomething() error {
    return &MyError{"something went wrong"}
}
\`\`\`

**Summary:**  
Go does not use exceptions for error handling. Instead, it uses explicit error values, making error handling straightforward and explicit.`,level:"Intermediate"},{id:"7e96d020-028f-4c5d-9adc-14a9ea11e182",question:"What is the blank identifier and how is it used in Go?",answer:`\`\`\`markdown The **blank identifier** in Go is represented by an underscore (\`_\`). It acts as an anonymous placeholder that can be assigned any value, but the value is discarded and not stored anywhere. The blank identifier is useful in situations where a variable is required syntactically, but its value is not needed.

### Common Uses of the Blank Identifier

1. **Ignoring Return Values**

   Many Go functions return multiple values. If you only care about some of them, you can use \`_\` to ignore the rest:

   \`\`\`go
   value, _ := someFunction() // Ignore the second return value
   \`\`\`

2. **Importing Packages for Side Effects**

   Sometimes you want to import a package only for its side effects (like initialization):

   \`\`\`go
   import _ "net/http/pprof"
   \`\`\`

3. **Ignoring Values in Range Loops**

   When iterating over a slice or map, you might not need both the index and the value:

   \`\`\`go
   for _, value := range mySlice {
       fmt.Println(value)
   }
   \`\`\`

   Or, if you only need the index:

   \`\`\`go
   for index, _ := range mySlice {
       fmt.Println(index)
   }
   \`\`\`

4. **Satisfying Interface Requirements**

   If a function requires you to implement an interface method that you don't use, you can use \`_\` to ignore parameters:

   \`\`\`go
   func (t myType) UnusedMethod(_ int) {
       // Do nothing
   }
   \`\`\`

### Key Points

- The blank identifier cannot be used as a variable; it cannot be read from.
- It is a write-only variable.
- It helps avoid compiler errors about unused variables or imports.

### Example

\`\`\`go
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

result, _ := divide(10, 2) // Ignore the error for simplicity
fmt.Println(result)
\`\`\`

**Summary:**  
The blank identifier \`_\` is a powerful feature in Go that allows you to ignore values you don't need, making your code cleaner and avoiding compiler warnings about unused variables.`,level:"Intermediate"},{id:"ee4ce31e-f582-40f8-ba4b-4e958a91655a",question:"How do you use the init function in Go?",answer:`\`\`\`markdown
In Go, the \`init\` function is a special function that is automatically executed when a package is initialized, before the main function runs. You can use \`init\` to set up initial state, initialize variables, or perform setup tasks.

**Key points about \`init\`:**
- You can have multiple \`init\` functions in a single package (even in different files).
- \`init\` functions cannot take arguments or return values.
- They are executed in the order they appear within a file, and files are initialized in the order determined by the Go compiler.

**Example:**

\`\`\`go
package main

import "fmt"

var message string

func init() {
    message = "Hello from init!"
    fmt.Println("Init function executed")
}

func main() {
    fmt.Println(message)
}
\`\`\`

**Output:**
\`\`\`
Init function executed
Hello from init!
\`\`\`

**Usage scenarios:**
- Initializing package-level variables
- Registering types or plugins
- Setting up configuration or logging

**Note:** Use \`init\` sparingly, as excessive use can make code harder to understand and test.
\`\`\`
`,level:"Intermediate"},{id:"184e4a8f-bd33-417e-a7f8-4e804274f8ea",question:"What is the syntax for embedding structs in Go?",answer:`\`\`\`go
// Embedding a struct in Go

type Address struct {
    City    string
    ZipCode string
}

type Person struct {
    Name string
    Age  int
    Address // Embedded struct
}
\`\`\`

**Explanation:**

- To embed a struct, simply declare the struct type (e.g., Address) as a field in another struct (e.g., Person) without a field name.
- The fields of the embedded struct become accessible directly on the outer struct.

**Usage Example:**

\`\`\`go
p := Person{
    Name: "Alice",
    Age:  30,
    Address: Address{
        City:    "New York",
        ZipCode: "10001",
    },
}

fmt.Println(p.City)    // Output: New York
fmt.Println(p.ZipCode) // Output: 10001
\`\`\`
**Note:** Embedded structs allow for composition and promote code reuse in Go.`,level:"Intermediate"},{id:"21d77654-1b4e-4a7d-8084-26d7396f3ebf",question:"How do you use anonymous structs in Go?",answer:`\`\`\`markdown You can use **anonymous structs** in Go when you need a struct type only once or for a short-lived purpose, without declaring a named type. Anonymous structs are defined and instantiated inline.

Here’s how you use anonymous structs in Go:

\`\`\`go
package main

import "fmt"

func main() {
    // Define and instantiate an anonymous struct
    person := struct {
        Name string
        Age  int
    }{
        Name: "Alice",
        Age:  30,
    }

    fmt.Println(person.Name) // Output: Alice
    fmt.Println(person.Age)  // Output: 30

    // You can also use anonymous structs in slices or maps
    people := []struct {
        Name string
        Age  int
    }{
        {Name: "Bob", Age: 25},
        {Name: "Carol", Age: 28},
    }

    for _, p := range people {
        fmt.Printf("%s is %d years old\\n", p.Name, p.Age)
    }
}
\`\`\`

**Key Points:**

- Anonymous structs are useful for short-lived data structures.
- They are defined inline using the struct keyword without a type name.
- You can use them in variables, slices, maps, or as function parameters/returns.

**Example Usage:**

\`\`\`go
func printPerson(p struct{ Name string; Age int }) {
    fmt.Printf("%s is %d years old\\n", p.Name, p.Age)
}
\`\`\`

This allows for quick, concise struct definitions without polluting your code with extra type names.`,level:"Intermediate"},{id:"230c89eb-d39e-4de9-9c45-85060932704f",question:"How do you create a slice from an array in Go?",answer:"```markdown To create a slice from an array in Go, you use the slicing syntax: `array[start:end]`. This creates a new slice that references elements from index `start` up to, but not including, index `end` of the array.\n\nHere's an example:\n\n```go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n    arr := [5]int{10, 20, 30, 40, 50}\n    // Create a slice from index 1 to 3 (elements 20, 30, 40)\n    slice := arr[1:4]\n    fmt.Println(slice) // Output: [20 30 40]\n}\n```\n\n**Notes:**\n- The original array is not copied; the slice references the same underlying array.\n- Omitting `start` defaults to 0, and omitting `end` defaults to the array's length. For example, `arr[:3]` is equivalent to `arr[0:3]`.",level:"Intermediate"},{id:"8d7de37e-79eb-4e78-a4cc-2d6a5ac1da59",question:"What is the syntax for a type alias in Go?",answer:"```go\ntype NewName = ExistingType\n```\n\n**Example:**\n```go\ntype MyInt = int\n```\n\nThis creates a type alias `MyInt` for the built-in type `int`. Both names refer to the exact same type.",level:"Intermediate"},{id:"60a6b6ba-040a-42d5-998a-17c0e2582267",question:"How do you use the make function in Go?",answer:`\`\`\`markdown
The \`make\` function in Go is used to initialize and allocate memory for slices, maps, and channels. Unlike the \`new\` function, which only allocates memory and returns a pointer to a zeroed value, \`make\` returns an initialized (not zeroed) value of the specified type.

### Syntax

\`\`\`go
make(type, length)
make(type, length, capacity)
\`\`\`

- **type**: The type of the slice, map, or channel.
- **length**: For slices, the number of elements; for channels, the buffer size.
- **capacity** (optional): For slices, the total allocated capacity.

### Examples

#### Slices

\`\`\`go
s := make([]int, 5)           // Creates a slice of int with length 5 and capacity 5
s2 := make([]int, 3, 10)      // Creates a slice of int with length 3 and capacity 10
\`\`\`

#### Maps

\`\`\`go
m := make(map[string]int)     // Creates an empty map
m2 := make(map[string]int, 10) // Creates a map with space for 10 elements (hint)
\`\`\`

#### Channels

\`\`\`go
ch := make(chan int)          // Creates an unbuffered channel
ch2 := make(chan int, 5)      // Creates a buffered channel with capacity 5
\`\`\`

### Key Points

- \`make\` can only be used with slices, maps, and channels.
- It returns an initialized (ready-to-use) value, not a pointer.
- For slices, you can specify both length and capacity.
- For maps, the second argument is a hint for initial capacity (optional).
- For channels, the second argument specifies the buffer size (optional).

**Example Usage:**

\`\`\`go
numbers := make([]int, 0, 100) // Slice with length 0 and capacity 100
myMap := make(map[string]bool) // Empty map
queue := make(chan string, 10) // Buffered channel
\`\`\`
\`\`\``,level:"Intermediate"},{id:"a4bf05f3-5d91-4ddf-9cb5-6e549007acd4",question:"How do you use the new function in Go?",answer:`\`\`\`markdown In Go, the new function is used to allocate memory for a variable of a specified type and returns a pointer to it. The allocated memory is zeroed.

**Syntax:**

\`\`\`go
ptr := new(Type)
\`\`\`

- Type is the type of the variable you want to allocate.
- ptr is a pointer to a newly allocated zero value of Type.

**Example:**

\`\`\`go
package main

import "fmt"

func main() {
    numPtr := new(int)      // Allocates memory for an int, sets it to 0
    fmt.Println(*numPtr)    // Output: 0

    *numPtr = 42
    fmt.Println(*numPtr)    // Output: 42

    strPtr := new(string)   // Allocates memory for a string, sets it to ""
    fmt.Println(*strPtr)    // Output: (empty string)
}
\`\`\`

**Key Points:**

- new(Type) returns a pointer to a zero-initialized value of Type.
- It is commonly used for allocating basic types or structs.
- For slices, maps, and channels, use the make function instead.

**When to use new:**

- When you need a pointer to a newly allocated zero value of a type.
- When you want to avoid using explicit variable declarations and referencing their address.

**When not to use new:**

- When working with slices, maps, or channels (use make).
- When you do not need a pointer.`,level:"Intermediate"},{id:"2e14f63a-948e-445c-96e0-3519c6c25f45",question:"What is the syntax for a closure in Go?",answer:`\`\`\`markdown In Go, a closure is an anonymous function that captures variables from its surrounding scope. The syntax for a closure is as follows:

\`\`\`go
func(parameterList) returnType {
    // function body
}
\`\`\`

You can assign a closure to a variable or use it directly. Here’s an example:

\`\`\`go
package main

import "fmt"

func main() {
    // Closure that captures variable 'x'
    x := 10
    add := func(y int) int {
        return x + y
    }

    fmt.Println(add(5)) // Output: 15
}
\`\`\`

In this example, the anonymous function assigned to add forms a closure over the variable x from the enclosing scope. Closures in Go can access and modify variables defined outside their body.`,level:"Advanced"},{id:"05aff3fd-c77e-47a5-8ef7-633d025d02f6",question:"How do you use recover and panic in Go?",answer:'```markdown\nIn Go, `panic` and `recover` are built-in functions used for handling unexpected errors and controlling the flow of execution during exceptional situations.\n\n### `panic`\n\n- The `panic` function is used to stop the normal execution of a goroutine. When `panic` is called, the program begins to unwind the stack, running any deferred functions along the way.\n- After all deferred functions have executed, the program crashes and prints the panic value and stack trace.\n\n**Example:**\n```go\nfunc mayPanic() {\n    panic("something went wrong")\n}\n```\n\n### `recover`\n\n- The `recover` function regains control of a panicking goroutine. It only works if called within a deferred function.\n- If called during a normal execution, `recover` returns `nil`. If called during a panic, it captures the panic value and stops the panic.\n\n**Example:**\n```go\nfunc safeCall() {\n    defer func() {\n        if r := recover(); r != nil {\n            fmt.Println("Recovered from panic:", r)\n        }\n    }()\n    mayPanic()\n    fmt.Println("After mayPanic") // This line will not be executed if mayPanic panics\n}\n```\n\n### Usage Pattern\n\nA common pattern is to use `defer` with an anonymous function containing `recover` to handle panics gracefully:\n\n```go\nfunc main() {\n    safeCall()\n    fmt.Println("Program continues after recovery")\n}\n```\n\n**Output:**\n```\nRecovered from panic: something went wrong\nProgram continues after recovery\n```\n\n### Key Points\n\n- Use `panic` for unrecoverable errors or programmer mistakes.\n- Use `recover` to regain control after a panic, typically for logging or cleanup.\n- Only deferred functions can call `recover` successfully during a panic.\n- Overusing `panic` and `recover` is discouraged; idiomatic Go prefers error returns.\n\n**References:**\n- [Go Blog: Defer, Panic, and Recover](https://blog.golang.org/defer-panic-and-recover)\n- [Official Go Documentation](https://golang.org/pkg/builtin/#panic)\n```\n',level:"Advanced"},{id:"56cc2e6c-13c9-482b-aabc-042b345fd961",question:"How do you define and use custom error types in Go?",answer:`\`\`\`markdown
### Defining and Using Custom Error Types in Go

In Go, you can define custom error types by creating a type that implements the \`error\` interface. The \`error\` interface requires a single method:

\`\`\`go
type error interface {
    Error() string
}
\`\`\`

#### 1. Define a Custom Error Type

You typically define a struct to hold additional error information:

\`\`\`go
type MyError struct {
    Code    int
    Message string
}
\`\`\`

#### 2. Implement the \`Error()\` Method

Implement the \`Error()\` method for your custom type:

\`\`\`go
func (e *MyError) Error() string {
    return fmt.Sprintf("Error %d: %s", e.Code, e.Message)
}
\`\`\`

#### 3. Create and Use the Custom Error

You can now create and return your custom error from functions:

\`\`\`go
func doSomething(flag bool) error {
    if !flag {
        return &MyError{Code: 123, Message: "Something went wrong"}
    }
    return nil
}
\`\`\`

#### 4. Type Assertion or Errors.As for Handling

When handling errors, you can use type assertion or the \`errors.As\` function to check for your custom error type:

\`\`\`go
err := doSomething(false)
if err != nil {
    if myErr, ok := err.(*MyError); ok {
        fmt.Println("Custom error occurred:", myErr.Code, myErr.Message)
    } else {
        fmt.Println("Other error:", err)
    }
}
\`\`\`

Or, using \`errors.As\` (Go 1.13+):

\`\`\`go
var myErr *MyError
if errors.As(err, &myErr) {
    fmt.Println("Custom error occurred:", myErr.Code, myErr.Message)
}
\`\`\`

---

#### **Summary Table**

| Step                       | Example Code Snippet                                    |
|----------------------------|--------------------------------------------------------|
| Define struct              | \`type MyError struct { Code int; Message string }\`     |
| Implement \`Error()\`        | \`func (e *MyError) Error() string { ... }\`             |
| Return custom error        | \`return &MyError{Code: 123, Message: "msg"}\`           |
| Check error type           | \`if myErr, ok := err.(*MyError); ok { ... }\`           |

---

**References:**
- [Go Blog: Error handling and Go](https://blog.golang.org/error-handling-and-go)
- [GoDoc: errors package](https://pkg.go.dev/errors)
\`\`\`
`,level:"Advanced"},{id:"47207b22-8415-4f71-9a19-1f791994b014",question:"What is the syntax for embedding interfaces in Go?",answer:`\`\`\`go
// Embedding interfaces in Go

// Define base interfaces
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

// Embed interfaces to create a new interface
type ReadWriter interface {
    Reader  // Embedded interface
    Writer  // Embedded interface
}
\`\`\`

**Explanation:**

- In Go, you embed interfaces by listing their names inside a new interface type.
- The new interface (\`ReadWriter\`) will require all methods from the embedded interfaces (\`Reader\` and \`Writer\`).
- No additional keywords are needed—just the interface names.

**Usage Example:**

\`\`\`go
func UseReadWriter(rw ReadWriter) {
    // rw has both Read and Write methods
}
\`\`\`
`,level:"Advanced"},{id:"ecebb0a6-0aae-44b1-90c6-b17b172e83ac",question:"How do you use type switches in Go?",answer:`\`\`\`markdown
### Using Type Switches in Go

A **type switch** in Go is a special form of the \`switch\` statement that allows you to compare the dynamic type of an interface variable against multiple types. This is particularly useful when you have a value of interface type and want to handle it differently based on its underlying concrete type.

#### Syntax

\`\`\`go
switch v := x.(type) {
case T1:
    // v has type T1
case T2:
    // v has type T2
default:
    // v has type other than T1 or T2
}
\`\`\`

- \`x\` must be of interface type.
- \`v\` is a variable of the type in each case clause.
- Each \`case\` specifies a type, not a value.

#### Example

\`\`\`go
func describe(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("Twice %v is %v\\n", v, v*2)
    case string:
        fmt.Printf("%q is %d bytes long\\n", v, len(v))
    default:
        fmt.Printf("I don't know about type %T!\\n", v)
    }
}

func main() {
    describe(21)
    describe("hello")
    describe(true)
}
\`\`\`

**Output:**
\`\`\`
Twice 21 is 42
"hello" is 5 bytes long
I don't know about type bool!
\`\`\`

#### Key Points

- Type switches let you perform different actions based on the actual type stored in an interface.
- The variable declared (\`v\` in the example) is of the type matched in the case.
- The \`default\` case handles all types not explicitly listed.

#### References

- [Go Tour: Type Switches](https://tour.golang.org/methods/16)
- [Go Blog: Type Switches](https://blog.golang.org/laws-of-reflection#TOC_7.)
\`\`\`
`,level:"Advanced"},{id:"342a54df-ec3d-41d0-8ed9-83a78bbae657",question:"How do you use reflection in Go?",answer:`\`\`\`markdown
## Using Reflection in Go

Reflection in Go is provided by the \`reflect\` package, which allows you to inspect the type and value of variables at runtime. This is useful for writing generic code, serialization, or frameworks.

### Basic Concepts

- **reflect.Type**: Represents the type of a Go variable.
- **reflect.Value**: Represents the value of a Go variable.

### Example: Inspecting Type and Value

\`\`\`go
package main

import (
    "fmt"
    "reflect"
)

func main() {
    var x float64 = 3.4

    fmt.Println("type:", reflect.TypeOf(x))   // type: float64
    fmt.Println("value:", reflect.ValueOf(x)) // value: 3.4
}
\`\`\`

### Modifying Values

To modify a value using reflection, the value must be addressable (usually a pointer):

\`\`\`go
package main

import (
    "fmt"
    "reflect"
)

func main() {
    x := 3.4
    v := reflect.ValueOf(&x).Elem()
    fmt.Println("Before:", x)
    v.SetFloat(7.1)
    fmt.Println("After:", x)
}
\`\`\`

### Inspecting Struct Fields

\`\`\`go
type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{"Alice", 30}
    v := reflect.ValueOf(p)
    t := reflect.TypeOf(p)

    for i := 0; i < v.NumField(); i++ {
        fmt.Printf("Field %d: %s = %v\\n", i, t.Field(i).Name, v.Field(i).Interface())
    }
}
\`\`\`

### Key Functions in \`reflect\` Package

- \`reflect.TypeOf(i interface{}) reflect.Type\`
- \`reflect.ValueOf(i interface{}) reflect.Value\`
- \`reflect.Value.Kind()\` returns the specific kind (e.g., reflect.Struct, reflect.Int)
- \`reflect.Value.Interface()\` returns the value as an interface{}
- \`reflect.Value.SetXxx()\` sets the value (if addressable)

### Cautions

- Reflection can be slower and more complex than regular code.
- Type safety is lost; errors may occur at runtime.
- Use reflection only when necessary.

**References:**
- [reflect package documentation](https://pkg.go.dev/reflect)
\`\`\`
`,level:"Advanced"},{id:"ce02fdaf-9a66-40e0-8c5d-2043cf526a29",question:"What is the syntax for generic functions in Go 1.18+?",answer:`\`\`\`go
// Syntax for a generic function in Go 1.18+
func FunctionName[T any](param T) T {
    // function body using param of type T
    return param
}
\`\`\`

**Explanation:**
- \`T\` is a type parameter, declared in square brackets \`[T any]\` after the function name.
- \`any\` is a constraint (in this case, any type).
- You can specify multiple type parameters and more complex constraints.

**Example:**
\`\`\`go
func PrintSlice[T any](s []T) {
    for _, v := range s {
        fmt.Println(v)
    }
}
\`\`\`

**Usage:**
\`\`\`go
PrintSlice([]int{1, 2, 3})
PrintSlice([]string{"a", "b", "c"})
\`\`\`
Generics allow functions to operate on different types while maintaining type safety.`,level:"Advanced"},{id:"01bba472-b2f2-453a-93eb-b8d5c57138ea",question:"How do you define and use generic types in Go?",answer:`\`\`\`markdown
## Defining and Using Generic Types in Go

Go introduced support for generics in version 1.18. Generics allow you to write functions, types, and methods that can operate on different types without sacrificing type safety.

### 1. Defining a Generic Function

You define type parameters in square brackets \`[]\` after the function name:

\`\`\`go
func PrintSlice[T any](s []T) {
    for _, v := range s {
        fmt.Println(v)
    }
}
\`\`\`
- \`T\` is a type parameter.
- \`any\` is a built-in constraint (alias for \`interface{}\`), meaning \`T\` can be any type.

### 2. Calling a Generic Function

You can call the function with any slice type:

\`\`\`go
PrintSlice([]int{1, 2, 3})
PrintSlice([]string{"a", "b", "c"})
\`\`\`

### 3. Defining a Generic Type

You can also define generic types, such as structs:

\`\`\`go
type Pair[A, B any] struct {
    First  A
    Second B
}
\`\`\`

### 4. Using a Generic Type

\`\`\`go
p1 := Pair[int, string]{First: 1, Second: "one"}
p2 := Pair[float64, bool]{First: 3.14, Second: true}
\`\`\`

### 5. Adding Constraints

You can restrict type parameters using constraints:

\`\`\`go
type Adder[T int | float64] interface {
    Add(a, b T) T
}

func Sum[T int | float64](a, b T) T {
    return a + b
}
\`\`\`

### 6. Example: Generic Map Function

\`\`\`go
func Map[T any, U any](s []T, f func(T) U) []U {
    result := make([]U, len(s))
    for i, v := range s {
        result[i] = f(v)
    }
    return result
}
\`\`\`

**Usage:**
\`\`\`go
doubled := Map([]int{1, 2, 3}, func(x int) int { return x * 2 })
\`\`\`

---

**Summary:**  
- Use \`[T any]\` (or other constraints) to define type parameters.
- Apply generics to functions, types, and methods.
- Use constraints to restrict permissible types for type parameters.
\`\`\`
`,level:"Advanced"},{id:"431b26ca-ed61-4d1f-bef6-ea697eedce95",question:"How do you use constraints with generics in Go?",answer:`\`\`\`markdown
In Go, constraints are used with generics to restrict the types that can be used as type parameters. Constraints are typically defined using interfaces, and the \`constraints\` package in the standard library provides some common ones (like \`constraints.Ordered\`).

### Defining a Constraint

You can define your own constraint as an interface. For example, to constrain a type parameter to types that support the \`+\` operator (like \`int\` and \`float64\`):

\`\`\`go
type Adder interface {
    ~int | ~float64
}
\`\`\`

The \`~\` allows types whose underlying type matches.

### Using Constraints in Generic Functions

You specify constraints in the type parameter list:

\`\`\`go
func Add[T Adder](a, b T) T {
    return a + b
}
\`\`\`

Here, \`T\` is constrained by \`Adder\`, so only types that satisfy \`Adder\` can be used.

### Using Standard Library Constraints

Go 1.18+ includes the \`constraints\` package:

\`\`\`go
import "golang.org/x/exp/constraints"

func Max[T constraints.Ordered](a, b T) T {
    if a > b {
        return a
    }
    return b
}
\`\`\`

\`constraints.Ordered\` allows any type that supports \`<\`, \`>\`, etc.

### Example: Generic Map Function with Constraint

\`\`\`go
type Stringer interface {
    String() string
}

func PrintAll[T Stringer](items []T) {
    for _, item := range items {
        fmt.Println(item.String())
    }
}
\`\`\`

Only types that implement the \`String()\` method can be used.

---

**Summary:**  
Constraints in Go generics are specified using interfaces, either custom or from the standard library, to restrict the set of types that can be used as type parameters in generic functions, types, or methods.
\`\`\`
`,level:"Advanced"},{id:"2e823e6d-a7f2-46b8-92d4-f6a682ecf150",question:"How do you implement custom marshaling and unmarshaling for JSON in Go?",answer:`\`\`\`markdown To implement custom marshaling and unmarshaling for JSON in Go, you need to define the \`MarshalJSON()\` and \`UnmarshalJSON()\` methods for your type. These methods allow you to control how your type is encoded to and decoded from JSON.

Here's an example:

\`\`\`go
package main

import (
    "encoding/json"
    "fmt"
)

// Custom type
type Person struct {
    Name string
    Age  int
}

// Custom marshaling
func (p Person) MarshalJSON() ([]byte, error) {
    // Custom structure for JSON output
    type Alias Person
    return json.Marshal(&struct {
        Alias
        IsAdult bool \`json:"is_adult"\`
    }{
        Alias:   (Alias)(p),
        IsAdult: p.Age >= 18,
    })
}

// Custom unmarshaling
func (p *Person) UnmarshalJSON(data []byte) error {
    // Custom structure for JSON input
    type Alias Person
    aux := &struct {
        Alias
    }{
        Alias: (Alias)(*p),
    }
    if err := json.Unmarshal(data, &aux); err != nil {
        return err
    }
    *p = Person(aux.Alias)
    return nil
}

func main() {
    p := Person{Name: "Alice", Age: 30}
    b, _ := json.Marshal(p)
    fmt.Println(string(b)) // Output includes "is_adult":true

    var p2 Person
    json.Unmarshal(b, &p2)
    fmt.Printf("%+v\\n", p2) // Output: {Name:Alice Age:30}
}
\`\`\`

**Key Points:**
- Implement \`MarshalJSON() ([]byte, error)\` for custom encoding.
- Implement \`UnmarshalJSON([]byte) error\` for custom decoding.
- Use an alias type to avoid infinite recursion.
- You can add or omit fields, transform data, or validate during marshaling/unmarshaling.

**References:**
- [encoding/json documentation](https://pkg.go.dev/encoding/json#Marshaler)
- [Go Blog: JSON and Go](https://blog.golang.org/json-and-go)`,level:"Advanced"},{id:"351b6cc8-4f33-4063-96b3-afdcbe84b2b6",question:"How do you use build tags in Go source files?",answer:`\`\`\`markdown
## Using Build Tags in Go Source Files

In Go, **build tags** (also known as build constraints) allow you to include or exclude files from a build based on certain conditions, such as the target operating system, architecture, or custom tags. Build tags are specified as comments at the top of a Go source file.

### Syntax

A build tag is a line comment that starts with \`//go:build\` (preferred since Go 1.17) or the legacy \`// +build\` (deprecated but still supported):

\`\`\`go
//go:build <expression>
// +build <expression>
\`\`\`

- The build tag **must appear before the package declaration and after the copyright or license comments** (if any).
- The \`//go:build\` line should come before any \`// +build\` lines if both are present.

### Examples

#### 1. OS-Specific File

To include a file only when building for Linux:

\`\`\`go
//go:build linux
// +build linux

package mypackage

// Linux-specific code here
\`\`\`

#### 2. Multiple Conditions

To include a file for either Linux or Darwin (macOS):

\`\`\`go
//go:build linux || darwin
// +build linux darwin

package mypackage

// Code for Linux or macOS
\`\`\`

#### 3. Custom Build Tags

You can define custom tags when building:

\`\`\`go
//go:build mytag
// +build mytag

package mypackage

// Code included only when built with -tags mytag
\`\`\`

Build with:

\`\`\`sh
go build -tags mytag
\`\`\`

#### 4. Excluding a File

To exclude a file from builds with a certain tag:

\`\`\`go
//go:build !integration
// +build !integration

package mypackage

// Code excluded when built with -tags integration
\`\`\`

### Notes

- Prefer \`//go:build\` syntax for new code.
- Tags are evaluated per file, not per package.
- Common tags: \`linux\`, \`darwin\`, \`windows\`, \`amd64\`, \`arm64\`, \`cgo\`, and any custom tag.

### References

- [Go Build Constraints Documentation](https://pkg.go.dev/cmd/go#hdr-Build_constraints)
\`\`\`
`,level:"Advanced"},{id:"60b9765f-74be-408f-b2e2-9ca27b7ef6a4",question:"What is the syntax for embedding files using the //go:embed directive?",answer:'```go\n//go:embed <pattern>\nvar <variable> <type>\n```\n\n**Explanation:**\n\n- The `//go:embed` directive is placed immediately above a variable declaration.\n- `<pattern>` is a string or list of strings specifying the file(s) or directory to embed (supports glob patterns).\n- `<variable>` is the name of the variable that will hold the embedded data.\n- `<type>` must be one of: `string`, `[]byte`, or `embed.FS`.\n\n**Examples:**\n\nEmbed a single file as a string:\n```go\nimport _ "embed"\n\n//go:embed hello.txt\nvar hello string\n```\n\nEmbed a single file as bytes:\n```go\nimport _ "embed"\n\n//go:embed image.png\nvar imageData []byte\n```\n\nEmbed multiple files or directories using embed.FS:\n```go\nimport "embed"\n\n//go:embed templates/*.html static/\nvar content embed.FS\n```\n\n**Note:**  \n- The `embed` package must be imported (even as `_` if not directly used).\n- The directive must be directly above the variable declaration with no intervening lines.',level:"Advanced"},{id:"bdea179d-12aa-4933-967c-7bc81efb3102",question:"How do you use the unsafe package in Go?",answer:`\`\`\`markdown
### Using the \`unsafe\` Package in Go

The \`unsafe\` package in Go provides low-level memory manipulation capabilities that break some of Go's type safety guarantees. It is typically used for advanced operations such as interfacing with hardware, implementing memory-efficient data structures, or interoperating with C code.

#### Importing the Package

\`\`\`go
import "unsafe"
\`\`\`

#### Common Uses

1. **Obtaining the Size of a Type**

   \`\`\`go
   var x int64
   size := unsafe.Sizeof(x) // returns 8 on most systems
   \`\`\`

2. **Pointer Arithmetic**

   \`\`\`go
   arr := [4]int{1, 2, 3, 4}
   ptr := &arr[0]
   secondElemPtr := (*int)(unsafe.Pointer(uintptr(unsafe.Pointer(ptr)) + unsafe.Sizeof(arr[0])))
   fmt.Println(*secondElemPtr) // Output: 2
   \`\`\`

3. **Converting Between Types**

   \`\`\`go
   var f float64 = 3.14
   p := (*uint64)(unsafe.Pointer(&f))
   fmt.Printf("%x\\n", *p) // Prints the IEEE 754 representation of 3.14
   \`\`\`

#### Important Types and Functions

- \`unsafe.Pointer\`: A special pointer type that can be converted to and from any pointer type.
- \`uintptr\`: An integer type that can hold any pointer value.
- \`unsafe.Sizeof(x)\`: Returns the size in bytes of the value \`x\`.
- \`unsafe.Alignof(x)\`: Returns the alignment of the type of \`x\`.
- \`unsafe.Offsetof(x)\`: Returns the offset of a struct field within its struct.

#### Example: Accessing a Private Struct Field

\`\`\`go
type secret struct {
    public  int
    private int
}

s := secret{public: 1, private: 42}
privatePtr := (*int)(unsafe.Pointer(uintptr(unsafe.Pointer(&s)) + unsafe.Offsetof(s.private)))
fmt.Println(*privatePtr) // Output: 42
\`\`\`

#### **Cautions**

- Code using \`unsafe\` is not portable and may break with future Go versions or on different architectures.
- Misuse can lead to memory corruption, crashes, or security vulnerabilities.
- Use \`unsafe\` only when absolutely necessary and after exhausting all safe alternatives.

**References:**
- [Official documentation](https://pkg.go.dev/unsafe)
\`\`\`
`,level:"Advanced"}];export{n as default};
