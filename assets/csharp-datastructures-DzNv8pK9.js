const e=[{id:"590651ef-446f-4f80-b8da-13f501f25789",question:"How do you add and remove elements from a List in C#?",answer:"```markdown\nTo **add** and **remove** elements from a `List` in C#, you can use the following methods:\n\n### Adding Elements\n\n- **Add an element:**\n  ```csharp\n  List<int> numbers = new List<int>();\n  numbers.Add(10); // Adds 10 to the list\n  ```\n\n- **Add multiple elements:**\n  ```csharp\n  numbers.AddRange(new int[] { 20, 30 }); // Adds 20 and 30 to the list\n  ```\n\n### Removing Elements\n\n- **Remove by value:**\n  ```csharp\n  numbers.Remove(10); // Removes the first occurrence of 10 from the list\n  ```\n\n- **Remove by index:**\n  ```csharp\n  numbers.RemoveAt(0); // Removes the element at index 0\n  ```\n\n- **Remove all matching a condition:**\n  ```csharp\n  numbers.RemoveAll(n => n > 15); // Removes all elements greater than 15\n  ```\n\n- **Clear all elements:**\n  ```csharp\n  numbers.Clear(); // Removes all elements from the list\n  ```\n\n**Summary:**  \nUse `Add()` or `AddRange()` to add elements, and `Remove()`, `RemoveAt()`, `RemoveAll()`, or `Clear()` to remove elements from a `List` in C#.\n```",level:"Beginner",created_at:"2025-04-21T11:57:09.252038Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"867e8993-50a0-4d71-8bf6-779170a92b08",question:"What is the purpose of the HashSet collection in C#?",answer:`\`\`\`markdown **Answer:**

The \`HashSet\` collection in C# is used to store a set of unique elements, meaning it automatically prevents duplicate values. It is part of the \`System.Collections.Generic\` namespace and is implemented using a hash table for fast lookups, additions, and deletions. The main purposes of using a \`HashSet\` are:

- **Ensuring uniqueness:** No duplicate items are allowed.
- **Efficient operations:** Provides fast operations for adding, removing, and checking if an item exists (typically O(1) time complexity).
- **Set operations:** Supports mathematical set operations like union, intersection, and difference.

**Example:**
\`\`\`csharp
HashSet<int> numbers = new HashSet<int>();
numbers.Add(1);
numbers.Add(2);
numbers.Add(2); // Duplicate, will not be added

Console.WriteLine(numbers.Count); // Output: 2
\`\`\`

**Summary:**  
\`HashSet\` is ideal when you need to store unique items and perform fast lookups or set-based operations.`,level:"Beginner",created_at:"2025-04-21T11:57:09.252050Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"82e4f1d7-a266-4bb9-a15d-3121e60e3523",question:"How do you iterate through a Dictionary in C#?",answer:`\`\`\`markdown You can iterate through a Dictionary in C# using a foreach loop. The Dictionary<TKey, TValue> class implements IEnumerable, allowing you to loop through its key-value pairs. Here’s a simple example:

\`\`\`csharp
Dictionary<string, int> ages = new Dictionary<string, int>
{
    { "Alice", 30 },
    { "Bob", 25 },
    { "Charlie", 35 }
};

foreach (KeyValuePair<string, int> entry in ages)
{
    Console.WriteLine($"Name: {entry.Key}, Age: {entry.Value}");
}
\`\`\`

Alternatively, you can iterate through just the keys or just the values:

\`\`\`csharp
// Iterate through keys
foreach (string name in ages.Keys)
{
    Console.WriteLine(name);
}

// Iterate through values
foreach (int age in ages.Values)
{
    Console.WriteLine(age);
}
\`\`\`

**Summary:**  
- Use foreach with KeyValuePair<TKey, TValue> to access both keys and values.
- Use .Keys or .Values to iterate through only keys or only values.`,level:"Beginner",created_at:"2025-04-21T11:57:09.252063Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"97ef8e21-fdf1-4fdd-b850-fcb6c344f9b2",question:"What is the difference between an array and a List in C#?",answer:`\`\`\`markdown **Answer:**

In C#, both arrays and Lists are used to store collections of items, but they have some key differences:

| Feature         | Array                                     | List (List<T>)                             |
|-----------------|-------------------------------------------|--------------------------------------------|
| Size            | Fixed size (set at creation)              | Dynamic size (can grow or shrink)          |
| Type            | Can be single or multi-dimensional        | Always single-dimensional                  |
| Performance     | Slightly faster for fixed-size collections| Slightly slower due to dynamic resizing    |
| Flexibility     | Limited (cannot add/remove elements)      | Flexible (can add, remove, insert, etc.)   |
| Syntax Example  | \`int[] numbers = new int[5];\`             | \`List<int> numbers = new List<int>();\`     |
| Namespace       | Built-in                                  | Requires \`using System.Collections.Generic;\`|

**Summary:**  
Use an array when you know the number of elements in advance and it won’t change. Use a List when you need a collection that can change size during runtime.`,level:"Beginner",created_at:"2025-04-21T11:57:09.251970Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"f3855453-a931-422d-83a6-cb01f9f97d55",question:"How do you declare and initialize a Dictionary in C#?",answer:'```markdown\nTo declare and initialize a Dictionary in C#, you use the `Dictionary<TKey, TValue>` class from the `System.Collections.Generic` namespace. Here’s a simple example:\n\n```csharp\n// Declare and initialize a Dictionary with string keys and int values\nDictionary<string, int> ages = new Dictionary<string, int>()\n{\n    { "Alice", 30 },\n    { "Bob", 25 },\n    { "Charlie", 35 }\n};\n```\n\n- `string` is the type of the key.\n- `int` is the type of the value.\n- The curly braces `{}` are used to add key-value pairs during initialization.\n\nYou can also add items later using the `Add` method:\n\n```csharp\nages.Add("David", 28);\n```\n```',level:"Beginner",created_at:"2025-04-21T11:57:09.252011Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"bbb11475-1e3b-4235-99c3-0bade86550d9",question:"What are the main differences between Stack and Queue in C#?",answer:`\`\`\`markdown **Answer:**

The main differences between Stack and Queue in C# are:

| Feature         | Stack                                | Queue                                 |
|-----------------|--------------------------------------|---------------------------------------|
| Order           | Last-In, First-Out (LIFO)            | First-In, First-Out (FIFO)            |
| Main Methods    | Push (add), Pop (remove), Peek       | Enqueue (add), Dequeue (remove), Peek |
| Usage Example   | Undo functionality, expression parsing| Print job scheduling, task processing  |
| Namespace       | System.Collections.Generic.Stack<T>  | System.Collections.Generic.Queue<T>    |

**Summary:**  
- **Stack**: The last element added is the first one to be removed.
- **Queue**: The first element added is the first one to be removed.`,level:"Beginner",created_at:"2025-04-21T11:57:09.252026Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"a5877084-f8a9-4f83-ad11-e04c8ece4cf9",question:"What is the difference between IEnumerable and ICollection interfaces?",answer:"```markdown **Difference between IEnumerable and ICollection interfaces in C#:**\n\n| Feature          | IEnumerable                          | ICollection                                 |\n|------------------|--------------------------------------|---------------------------------------------|\n| **Namespace**    | System.Collections                   | System.Collections, System.Collections.Generic |\n| **Purpose**      | Enables simple iteration over a collection (read-only access). | Extends IEnumerable; represents a collection of objects that can be enumerated, and supports additional operations like add, remove, and count. |\n| **Key Members**  | `IEnumerator GetEnumerator()`        | Inherits `GetEnumerator()`; adds `Count`, `Add()`, `Remove()`, `Clear()`, `Contains()`, `CopyTo()` |\n| **Modification** | Does not support modifying the collection. | Supports modifying the collection (if not read-only). |\n| **Count Property** | Not available                       | Available (`Count`)                          |\n| **Usage**        | Used for read-only iteration (e.g., `foreach`). | Used when you need to modify the collection or need to know its size. |\n\n**Example:**\n\n```csharp\nIEnumerable<int> enumerable = new List<int> { 1, 2, 3 };\nforeach (var item in enumerable)\n{\n    // Can only read items\n}\n\nICollection<int> collection = new List<int> { 1, 2, 3 };\ncollection.Add(4);    // Can add items\nint count = collection.Count; // Can get count\n```\n\n**Summary:**  \n- Use `IEnumerable` for simple, read-only iteration.\n- Use `ICollection` when you need to modify the collection or access its size.",level:"Intermediate",created_at:"2025-04-21T11:57:09.252078Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"6c2b52c1-14e2-4020-98bf-f6569b3511bc",question:"Explain the concept of boxing and unboxing in the context of C# collections.",answer:`\`\`\`markdown ### Boxing and Unboxing in C# Collections

**Boxing** and **unboxing** are concepts in C# that deal with converting value types (like \`int\`, \`double\`, \`struct\`, etc.) to reference types (\`object\`) and vice versa.

#### Boxing

- **Definition:** Boxing is the process of converting a value type to an object type (reference type).
- **How it works:** The value is wrapped inside a System.Object and stored on the heap instead of the stack.
- **Example:**
    \`\`\`csharp
    int num = 42;
    object boxedNum = num; // Boxing
    \`\`\`

#### Unboxing

- **Definition:** Unboxing is the process of extracting the value type from the object.
- **How it works:** The object is explicitly cast back to the original value type.
- **Example:**
    \`\`\`csharp
    object boxedNum = 42;
    int num = (int)boxedNum; // Unboxing
    \`\`\`

#### Boxing and Unboxing in Collections

Before the introduction of generics in C#, collections like \`ArrayList\` could only store objects of type \`object\`. When you added a value type (e.g., \`int\`) to such a collection, it was **boxed**. When retrieving it, you had to **unbox** it.

**Example using ArrayList:**
\`\`\`csharp
ArrayList list = new ArrayList();
int x = 10;
list.Add(x); // Boxing occurs here

int y = (int)list[0]; // Unboxing occurs here
\`\`\`

**Drawbacks:**
- **Performance Overhead:** Boxing and unboxing are computationally expensive because they involve copying and type conversion.
- **Type Safety:** Unboxing requires explicit casting, which can lead to runtime errors if the types do not match.

#### Modern Approach: Generics

With the introduction of generics (e.g., \`List<int>\`), boxing and unboxing can be avoided because generics allow collections to store value types directly, improving performance and type safety.

**Example using List<int>:**
\`\`\`csharp
List<int> list = new List<int>();
list.Add(10); // No boxing
int y = list[0]; // No unboxing
\`\`\`

---

**Summary:**  
Boxing and unboxing are important concepts when working with non-generic collections in C#. They allow value types to be stored in collections that expect reference types, but at the cost of performance and type safety. Using generic collections is the recommended approach to avoid these issues.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252091Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"7202413b-9569-4a0a-ba1a-c5335bf2c4dc",question:"How do you sort a List of custom objects in C#?",answer:`\`\`\`markdown To sort a List of custom objects in C#, you can use the List<T>.Sort() method. There are two common approaches:

### 1. Implementing IComparable<T> in Your Class

Implement the IComparable<T> interface in your custom class and define the comparison logic in the CompareTo method.

\`\`\`csharp
public class Person : IComparable<Person>
{
    public string Name { get; set; }
    public int Age { get; set; }

    public int CompareTo(Person other)
    {
        // Sort by Age
        return this.Age.CompareTo(other.Age);
    }
}

// Usage
List<Person> people = new List<Person>
{
    new Person { Name = "Alice", Age = 30 },
    new Person { Name = "Bob", Age = 25 }
};

people.Sort(); // Sorts by Age
\`\`\`

### 2. Using a Custom Comparer or Lambda Expression

You can also pass a custom comparison delegate or use a lambda expression with the Sort method.

\`\`\`csharp
List<Person> people = new List<Person>
{
    new Person { Name = "Alice", Age = 30 },
    new Person { Name = "Bob", Age = 25 }
};

// Sort by Name
people.Sort((p1, p2) => p1.Name.CompareTo(p2.Name));
\`\`\`

### Summary

- Implement \`IComparable<T>\` for default sorting.
- Use a custom \`IComparer<T>\` or a lambda for flexible, on-the-fly sorting.

This allows you to sort lists of custom objects based on any property or custom logic you need.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252104Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"357af23e-16e4-4081-902d-d7b8c34709ae",question:"What is the difference between List<T> and LinkedList<T> in C#?",answer:"```markdown\n**Difference between `List<T>` and `LinkedList<T>` in C#:**\n\n| Feature                | `List<T>`                                   | `LinkedList<T>`                             |\n|------------------------|---------------------------------------------|---------------------------------------------|\n| **Underlying Structure** | Backed by a dynamic array                   | Doubly linked list                          |\n| **Access Time**        | O(1) for index-based access (`list[i]`)     | O(n) for access by index                    |\n| **Insertion/Removal**  | O(n) for insert/remove (except at end)      | O(1) for insert/remove at known node        |\n| **Memory Overhead**    | Less (just array + a few fields)            | More (each node stores references to next/prev) |\n| **Random Access**      | Supported (via index)                       | Not supported                               |\n| **Best Use Case**      | Frequent access by index, few insertions/removals except at end | Frequent insertions/removals in the middle or at both ends |\n\n**Summary:**  \n- Use `List<T>` when you need fast random access and mostly add/remove at the end.\n- Use `LinkedList<T>` when you need fast insertions/removals at both ends or in the middle, and don't need index-based access.\n```",level:"Intermediate",created_at:"2025-04-21T11:57:09.252118Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"981f7375-a1ce-4152-9113-c7b91a6a167e",question:"When would you use a Dictionary over a List in C#?",answer:`\`\`\`markdown You would use a \`Dictionary\` over a \`List\` in C# when you need to store and quickly retrieve values based on a unique key, rather than by their position (index) in a collection.

### Key Differences

- **Dictionary**
  - Stores key-value pairs.
  - Provides fast lookups, additions, and deletions based on the key (on average O(1) time complexity).
  - Keys must be unique.
  - Useful when you need to associate data (e.g., mapping employee IDs to employee records).

- **List**
  - Stores items in a sequential order.
  - Accessed by index (integer position).
  - Searching for an item by value is O(n) time complexity.
  - Useful when order matters or when you need to iterate through all items.

### Example Scenario

- **Use a Dictionary:** When you need to look up a student's record by their unique student ID.
- **Use a List:** When you need to maintain a collection of items in a specific order, such as a list of tasks to complete.

### Sample Code

\`\`\`csharp
// Using a Dictionary for fast lookups by key
Dictionary<int, string> studentNames = new Dictionary<int, string>();
studentNames[101] = "Alice";
studentNames[102] = "Bob";

// Using a List for ordered collection
List<string> taskList = new List<string>();
taskList.Add("Do laundry");
taskList.Add("Write report");
\`\`\`

**In summary:**  
Use a \`Dictionary\` when you need efficient key-based access, and a \`List\` when you need ordered, index-based access.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252130Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"657339f3-b074-44aa-8e2d-1ce69c3188b8",question:"How does the capacity of a List<T> work and how can it affect performance?",answer:`\`\`\`markdown
**How does the capacity of a List<T> work and how can it affect performance?**

The \`List<T>\` class in C# is a dynamic array that manages an internal array to store its elements. The **capacity** of a \`List<T>\` refers to the number of elements the internal array can hold before it needs to resize. The **Count** property, on the other hand, represents the actual number of elements in the list.

### How Capacity Works

- When you create a new \`List<T>\`, it has a default capacity (usually 0 or a small number).
- As you add elements, if the number of elements exceeds the current capacity, the \`List<T>\` automatically resizes its internal array.
- The resizing process typically involves allocating a new, larger array (usually double the previous capacity), copying existing elements to the new array, and then discarding the old array.

### Performance Implications

- **Resizing Overhead:** Each time the capacity is exceeded, resizing occurs, which is an O(n) operation (where n is the number of elements in the list). Frequent resizing can degrade performance, especially if you add a large number of items one by one.
- **Memory Usage:** If you set the capacity much higher than needed, memory is allocated but unused, leading to wasted resources.
- **Optimization:** If you know the approximate number of items in advance, you can set the capacity using the constructor or the \`Capacity\` property to minimize resizing operations.

### Example

\`\`\`csharp
List<int> numbers = new List<int>(1000); // sets initial capacity to 1000
\`\`\`

### Best Practices

- **Set Capacity When Possible:** If you know the number of elements ahead of time, set the capacity to avoid multiple resizes.
- **Trim Excess:** After removing a large number of elements, you can call \`TrimExcess()\` to reduce the capacity and free unused memory.

### Summary Table

| Property      | Description                                 |
|---------------|---------------------------------------------|
| Capacity      | Number of elements the list can hold        |
| Count         | Number of elements actually in the list     |
| TrimExcess()  | Reduces capacity to match the count         |

**In summary:** The capacity of a \`List<T>\` determines how many elements it can hold before resizing. Managing capacity wisely can improve performance by reducing the number of costly resizing operations and optimizing memory usage.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252149Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"7f0555c4-a4d8-48f8-9ef9-79232af8cf84",question:"What is the difference between a shallow copy and a deep copy of a collection?",answer:`\`\`\`markdown **Difference Between Shallow Copy and Deep Copy of a Collection in C#:**

- **Shallow Copy:**
  - A shallow copy of a collection copies the references of the objects in the collection, not the actual objects themselves.
  - Both the original and the copied collection point to the same objects in memory.
  - Modifying an object in one collection will reflect in the other.
  - Example: Using \`MemberwiseClone()\` or the \`Clone()\` method of some collections.

  \`\`\`csharp
  List<Person> originalList = new List<Person> { new Person("Alice"), new Person("Bob") };
  List<Person> shallowCopy = new List<Person>(originalList);
  shallowCopy[0].Name = "Charlie";
  // originalList[0].Name is now "Charlie" as well
  \`\`\`

- **Deep Copy:**
  - A deep copy creates new instances of the objects in the collection, recursively copying all objects.
  - The original and copied collections are completely independent.
  - Modifying an object in one collection does not affect the other.
  - Deep copy usually requires custom implementation, such as serialization or manual cloning.

  \`\`\`csharp
  List<Person> originalList = new List<Person> { new Person("Alice"), new Person("Bob") };
  List<Person> deepCopy = originalList.Select(p => new Person(p.Name)).ToList();
  deepCopy[0].Name = "Charlie";
  // originalList[0].Name remains "Alice"
  \`\`\`

**Summary Table:**

| Aspect           | Shallow Copy                                         | Deep Copy                                         |
|------------------|-----------------------------------------------------|---------------------------------------------------|
| Object References| Copied                                              | Not copied (new objects created)                  |
| Independence     | Not independent (shared objects)                    | Completely independent                            |
| Use Case         | Fast, but risky if objects are mutable              | Safe, but may be slower and require more coding   |

**In short:**  
- Shallow copy duplicates the collection structure, but not the objects inside.
- Deep copy duplicates both the collection and the objects it contains.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252161Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"cb354713-ab4d-4541-badc-2579b6367ac5",question:"Explain how a HashSet ensures uniqueness of its elements.",answer:'```markdown A `HashSet` in C# ensures uniqueness of its elements using the following mechanisms:\n\n1. **Hashing**:  \n   When you add an element to a `HashSet`, it computes the element’s hash code using its `GetHashCode()` method. This hash code determines the bucket in which the element will be stored.\n\n2. **Equality Comparison**:  \n   If two elements have the same hash code (a hash collision), the `HashSet` uses the `Equals()` method to check if the elements are actually equal.\n\n3. **No Duplicates Allowed**:  \n   Before adding a new element, the `HashSet` checks if an element with the same hash code and considered equal (via `Equals()`) already exists in the set. If it does, the new element is not added.\n\n**Summary Table:**\n\n| Step             | Method Used         | Purpose                                  |\n|------------------|--------------------|------------------------------------------|\n| Hashing          | `GetHashCode()`    | Find bucket for element                  |\n| Equality Check   | `Equals()`         | Confirm if elements are truly identical  |\n| Uniqueness Check | -                  | Prevent duplicate entries                |\n\n**Example:**\n```csharp\nHashSet<string> set = new HashSet<string>();\nset.Add("apple");   // Added\nset.Add("banana");  // Added\nset.Add("apple");   // Not added (duplicate)\n```\nAfter these operations, `set` contains only `"apple"` and `"banana"`.\n\n**Conclusion:**  \nA `HashSet` relies on hashing and equality checks to ensure that each element is unique within the collection.',level:"Intermediate",created_at:"2025-04-21T11:57:09.252174Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"ee6c48a0-e7e0-4cf8-b8f4-63b8c0a7ec20",question:"What is the time complexity of searching for an element in a Dictionary?",answer:"```markdown\nThe time complexity of searching for an element in a `Dictionary` in C# is **O(1)** on average. This is because a `Dictionary` is implemented as a hash table, which allows for constant-time lookup operations under typical circumstances.\n\nHowever, in the worst case—such as when many elements hash to the same bucket—the time complexity can degrade to **O(n)**, where *n* is the number of elements in the dictionary. This situation is rare due to good hash functions and resizing strategies.\n\n**Summary:**\n- **Average case:** O(1)\n- **Worst case:** O(n)\n```",level:"Intermediate",created_at:"2025-04-21T11:57:09.252187Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"e4ad9803-6934-45e3-a7c6-87228b7a3dce",question:"How do you implement a custom comparer for sorting objects in a collection?",answer:`\`\`\`markdown To implement a custom comparer for sorting objects in a collection in C#, you can use the IComparer<T> interface. This allows you to define custom sorting logic for your objects. Here’s how you can do it:

### 1. Define Your Class

Suppose you have a simple class:

\`\`\`csharp
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}
\`\`\`

### 2. Implement a Custom Comparer

Create a class that implements \`IComparer<Person>\` and define the comparison logic in the \`Compare\` method:

\`\`\`csharp
public class AgeComparer : IComparer<Person>
{
    public int Compare(Person x, Person y)
    {
        if (x == null || y == null)
            throw new ArgumentException("Arguments cannot be null.");

        // Sort by Age in ascending order
        return x.Age.CompareTo(y.Age);
    }
}
\`\`\`

### 3. Use the Comparer to Sort a Collection

You can now use your custom comparer with sorting methods, such as \`List<T>.Sort\`:

\`\`\`csharp
List<Person> people = new List<Person>
{
    new Person { Name = "Alice", Age = 30 },
    new Person { Name = "Bob", Age = 25 },
    new Person { Name = "Charlie", Age = 35 }
};

people.Sort(new AgeComparer());

// The 'people' list is now sorted by Age in ascending order
\`\`\`

### 4. Alternative: Using Lambda Expressions

For simple cases, you can also use a lambda expression with the \`Sort\` method:

\`\`\`csharp
people.Sort((x, y) => x.Age.CompareTo(y.Age));
\`\`\`

---

**Summary:**  
To implement a custom comparer, create a class that implements \`IComparer<T>\`, override the \`Compare\` method with your custom logic, and use it with collection sorting methods. This approach gives you full control over how objects are compared and sorted.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252199Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"79873fb2-2c3d-4e40-9510-ba28e4e9e1c2",question:"What are the advantages and disadvantages of using arrays in C#?",answer:`\`\`\`markdown **Advantages of Using Arrays in C#:**

- **Fixed Size:** Arrays have a fixed size, which makes memory allocation efficient and predictable.
- **Fast Access:** Elements can be accessed directly using their index, resulting in fast retrieval and update operations (O(1) time complexity).
- **Simple Syntax:** Arrays are easy to declare and use, making them suitable for straightforward data storage needs.
- **Type Safety:** Arrays are strongly typed, so all elements must be of the same type, reducing runtime errors.

**Disadvantages of Using Arrays in C#:**

- **Fixed Size:** Once created, the size of an array cannot be changed, making it less flexible if the number of elements is not known in advance.
- **Insertion/Deletion Overhead:** Adding or removing elements (except at the end) requires shifting elements, which can be inefficient (O(n) time complexity).
- **Wasted Memory:** If the array is not fully utilized, it can lead to wasted memory.
- **No Built-in Methods:** Arrays lack many built-in methods for common operations (like searching, sorting, or resizing) that are available in other data structures like List<T>.

**Summary Table:**

| Advantage           | Disadvantage           |
|---------------------|-----------------------|
| Fast access (O(1))  | Fixed size            |
| Simple to use       | Costly insert/delete  |
| Type safe           | Wasted memory         |
| Efficient memory    | Limited functionality |`,level:"Beginner",created_at:"2025-04-21T11:57:09.252212Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"e312d903-636a-4c78-addf-e64989c9d6c6",question:"How do you remove duplicate elements from a List in C#?",answer:`\`\`\`markdown To remove duplicate elements from a List in C#, you can use the Distinct() method provided by LINQ. This method returns a new collection with only unique elements.

\`\`\`csharp
using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 2, 2, 3, 4, 4, 5 };
        List<int> uniqueNumbers = numbers.Distinct().ToList();

        Console.WriteLine(string.Join(", ", uniqueNumbers)); // Output: 1, 2, 3, 4, 5
    }
}
\`\`\`

**Explanation:**
- \`Distinct()\` filters out duplicate elements.
- \`ToList()\` converts the result back to a List.

**Note:**  
If you are working with custom objects, you may need to implement \`IEquatable<T>\` or override \`Equals()\` and \`GetHashCode()\` for \`Distinct()\` to work as expected.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252225Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"af3a20d3-ab98-4a09-ac63-e000c516362c",question:"What is the difference between ConcurrentDictionary and Dictionary?",answer:"```markdown\n**Difference between `ConcurrentDictionary` and `Dictionary` in C#:**\n\n| Feature                    | `Dictionary<TKey, TValue>`                         | `ConcurrentDictionary<TKey, TValue>`                |\n|----------------------------|---------------------------------------------------|-----------------------------------------------------|\n| **Thread Safety**          | Not thread-safe. Concurrent read/write operations can cause exceptions or data corruption. | Thread-safe. Designed for concurrent access from multiple threads without external synchronization. |\n| **Performance**            | Faster in single-threaded scenarios due to lack of synchronization overhead. | Slightly slower in single-threaded scenarios due to internal locking, but scales well with multiple threads. |\n| **Locking Mechanism**      | No built-in locking. Developers must implement their own synchronization (e.g., `lock` statements). | Uses fine-grained locking and lock-free techniques internally to allow safe concurrent operations. |\n| **Methods for Atomicity**  | No atomic operations. Composite operations (e.g., check-then-add) are not atomic. | Provides atomic methods like `GetOrAdd`, `AddOrUpdate`, and `TryUpdate` for safe composite operations. |\n| **Use Case**               | Suitable for single-threaded or externally synchronized scenarios. | Ideal for multi-threaded scenarios where multiple threads read/write concurrently. |\n| **Namespace**              | `System.Collections.Generic`                      | `System.Collections.Concurrent`                     |\n\n**Summary:**  \nUse `Dictionary` when thread safety is not a concern or when you handle synchronization externally. Use `ConcurrentDictionary` when you need a thread-safe collection for concurrent read/write operations without manual locking.\n```",level:"Advanced",created_at:"2025-04-21T11:57:09.252237Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"15b20261-746c-4981-9c65-7809f5b74258",question:"How does the SortedDictionary differ from Dictionary in C#?",answer:`\`\`\`markdown **Answer:**

In C#, both \`Dictionary<TKey, TValue>\` and \`SortedDictionary<TKey, TValue>\` are collections that store key-value pairs, but they differ in how they store and access data:

| Feature                | Dictionary<TKey, TValue>                | SortedDictionary<TKey, TValue>           |
|------------------------|-----------------------------------------|------------------------------------------|
| **Ordering**           | No guaranteed order of elements         | Elements are sorted by key               |
| **Underlying Structure** | Hash table                             | Binary search tree (Red-Black tree)      |
| **Performance (Lookup/Insert/Remove)** | O(1) average case, O(n) worst case | O(log n)                                 |
| **Key Requirements**   | Keys must be unique and hashable        | Keys must be unique and comparable (IComparable or IComparer) |
| **Use Case**           | Fast lookups without caring about order | When you need sorted keys                |

**Summary:**  
Use \`Dictionary\` for fast, unordered access. Use \`SortedDictionary\` when you need to maintain the keys in sorted order.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252249Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"c3e1857a-3ea4-431c-909b-c1d2eda34cd5",question:"Explain the internal implementation of a Dictionary in C#.",answer:`\`\`\`markdown
### Internal Implementation of a Dictionary in C#

In C#, the \`Dictionary<TKey, TValue>\` class is a generic collection that stores key-value pairs and provides fast lookup based on keys. Internally, it is implemented as a **hash table** with separate chaining for collision resolution. Here’s a breakdown of its internal workings:

#### 1. **Data Structures Used**
- **Buckets Array:** An integer array where each element represents the head index of a linked list (or chain) in the entries array.
- **Entries Array:** An array of structs, where each struct contains:
  - \`hashCode\`: The computed hash code of the key.
  - \`next\`: The index of the next entry in the chain (or -1 if it's the end).
  - \`key\`: The key itself.
  - \`value\`: The value associated with the key.

#### 2. **Hashing and Indexing**
- When a key is added, its hash code is computed using the key's \`GetHashCode()\` method.
- The hash code is then mapped to a bucket index using modulo operation: \`index = hashCode % buckets.Length\`.
- If multiple keys map to the same bucket (collision), they are stored in a linked list (chain) within the entries array.

#### 3. **Collision Resolution**
- **Separate Chaining:** Each bucket points to the first entry in the chain. Each entry has a \`next\` field pointing to the next entry in the same bucket.
- When searching for a key, the dictionary traverses the chain, comparing keys using the \`Equals()\` method.

#### 4. **Insertion**
- Compute the hash code and bucket index.
- Traverse the chain to check if the key already exists.
  - If it does, update the value.
  - If not, create a new entry and add it to the front of the chain (linked list).

#### 5. **Resizing**
- When the number of elements exceeds a certain threshold (typically 0.72 * buckets.Length), the dictionary resizes:
  - A new, larger buckets array and entries array are created.
  - All existing entries are rehashed and redistributed into the new buckets.

#### 6. **Performance**
- Average-case time complexity for lookup, insertion, and deletion is **O(1)**.
- Worst-case time complexity is **O(n)** (when all keys hash to the same bucket), but this is rare with a good hash function.

#### 7. **Example Structure (Simplified)**
\`\`\`csharp
struct Entry
{
    public int hashCode;
    public int next;
    public TKey key;
    public TValue value;
}

int[] buckets;
Entry[] entries;
\`\`\`

#### 8. **Key Points**
- Uses hash codes for fast access.
- Handles collisions via chaining.
- Automatically resizes to maintain performance.
- Relies on correct implementations of \`GetHashCode()\` and \`Equals()\` for key types.

---

**References:**
- [Microsoft Docs: Dictionary<TKey,TValue> Class](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)
- [Source code: .NET Core Dictionary Implementation](https://github.com/dotnet/runtime/blob/main/src/libraries/System.Private.CoreLib/src/System/Collections/Generic/Dictionary.cs)
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:57:09.252261Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"23252ffe-4cd6-4aa4-bac7-f3221cc1ed45",question:"What is the role of GetHashCode() and Equals() in hash-based collections?",answer:"```markdown\n### What is the role of `GetHashCode()` and `Equals()` in hash-based collections?\n\nIn C#, hash-based collections such as `Dictionary<TKey, TValue>`, `HashSet<T>`, and `Hashtable` rely on the `GetHashCode()` and `Equals()` methods to efficiently store and retrieve objects.\n\n#### `GetHashCode()`\n- **Purpose:** Returns an integer hash code for the object.\n- **Role:** When an object is added to a hash-based collection, its `GetHashCode()` method is called to determine the bucket in which the object should be placed.\n- **Requirement:** If two objects are considered equal according to `Equals()`, they **must** return the same hash code from `GetHashCode()`. However, different objects can have the same hash code (hash collision).\n\n#### `Equals()`\n- **Purpose:** Determines whether two object instances are considered equal.\n- **Role:** After locating the correct bucket using the hash code, the collection uses `Equals()` to check if the exact object exists (since multiple objects can share the same hash code).\n\n#### Why are both needed?\n- **Efficiency:** `GetHashCode()` quickly narrows down the search to a specific bucket.\n- **Accuracy:** `Equals()` ensures that the correct object is found within that bucket.\n\n#### Example\n\n```csharp\npublic class Person\n{\n    public string Name { get; set; }\n    public override bool Equals(object obj)\n    {\n        if (obj is Person other)\n            return this.Name == other.Name;\n        return false;\n    }\n    public override int GetHashCode()\n    {\n        return Name.GetHashCode();\n    }\n}\n```\n\n#### Summary Table\n\n| Method         | Used For                        | Must Be Consistent With |\n|----------------|--------------------------------|------------------------|\n| `GetHashCode()`| Bucket selection (hashing)      | `Equals()`             |\n| `Equals()`     | Object equality comparison      | `GetHashCode()`        |\n\n#### Key Points\n- Always override both `Equals()` and `GetHashCode()` together.\n- Failing to do so can cause incorrect behavior in hash-based collections (e.g., objects not found or duplicate entries).\n```\n",level:"Advanced",created_at:"2025-04-21T11:57:09.252274Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"2e6dec91-ecff-4528-bb28-2d11af660f92",question:"How do you implement a custom collection in C#?",answer:`\`\`\`markdown
To implement a custom collection in C#, you typically create a class that encapsulates the storage and management of its elements. For advanced usage, you should implement one or more standard collection interfaces such as \`IEnumerable<T>\`, \`ICollection<T>\`, or even \`IList<T>\` depending on the desired functionality.

### Example: Implementing a Custom Collection

Below is an example of a simple generic custom collection that implements \`IEnumerable<T>\`:

\`\`\`csharp
using System;
using System.Collections;
using System.Collections.Generic;

public class MyCustomCollection<T> : IEnumerable<T>
{
    private List<T> _items = new List<T>();

    public void Add(T item)
    {
        _items.Add(item);
    }

    public bool Remove(T item)
    {
        return _items.Remove(item);
    }

    public int Count => _items.Count;

    public T this[int index]
    {
        get => _items[index];
        set => _items[index] = value;
    }

    // Implementation of IEnumerable<T>
    public IEnumerator<T> GetEnumerator()
    {
        return _items.GetEnumerator();
    }

    // Explicit implementation for non-generic IEnumerable
    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
\`\`\`

### Key Points

- **Encapsulation:** The collection encapsulates a private \`List<T>\` to store elements.
- **Interface Implementation:** By implementing \`IEnumerable<T>\`, the collection supports \`foreach\` iteration.
- **Custom Methods:** You can add custom methods (e.g., \`Add\`, \`Remove\`) as needed.
- **Indexer:** Providing an indexer allows array-like access.
- **Extensibility:** For more advanced features (sorting, searching, etc.), implement additional interfaces like \`ICollection<T>\`, \`IList<T>\`, or even thread-safety mechanisms.

### Why Implement Custom Collections?

- To enforce specific business rules or constraints.
- To optimize for performance or memory usage.
- To provide additional functionality not present in standard collections.

### Best Practices

- Always implement the appropriate interfaces for maximum compatibility with .NET APIs.
- Consider inheriting from \`Collection<T>\` or \`List<T>\` if you only need to extend existing behavior.
- Ensure thread safety if the collection will be accessed concurrently.

\`\`\`

This approach demonstrates how to create a robust, reusable custom collection in C# suitable for advanced interview discussions.
\`\`\``,level:"Advanced",created_at:"2025-04-21T11:57:09.252287Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"b34c4f67-a2bc-44ab-8fa7-8f240aefef05",question:"What is the difference between ObservableCollection and List?",answer:"```markdown **Answer:**\n\nThe main differences between `ObservableCollection<T>` and `List<T>` in C# are:\n\n| Feature                    | `List<T>`                                  | `ObservableCollection<T>`                     |\n|----------------------------|--------------------------------------------|-----------------------------------------------|\n| **Namespace**              | `System.Collections.Generic`               | `System.Collections.ObjectModel`              |\n| **Notification Support**   | No built-in notification mechanism         | Notifies when items are added, removed, or the whole list is refreshed via `INotifyCollectionChanged` |\n| **Use Case**               | General-purpose collection                 | Data binding scenarios, especially in WPF, UWP, or Xamarin for UI updates |\n| **Performance**            | Slightly faster due to less overhead       | Slightly slower due to event notification overhead |\n| **Events**                 | None                                       | `CollectionChanged` event                     |\n| **Binding Support**        | Not suitable for data binding              | Designed for data binding in UI frameworks    |\n\n**Summary:**  \nUse `List<T>` for general data storage and manipulation when you don't need to notify other components about changes. Use `ObservableCollection<T>` when you need automatic UI updates or notifications when the collection changes, such as in MVVM patterns in WPF applications.",level:"Intermediate",created_at:"2025-04-21T11:57:09.252301Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"32feda03-90bb-483a-9a41-d4fdf53a96a7",question:"How do you make a collection thread-safe in C#?",answer:`\`\`\`markdown
To make a collection thread-safe in C#, you have several options depending on your requirements:

### 1. Use Built-in Thread-Safe Collections

.NET provides several thread-safe collections in the \`System.Collections.Concurrent\` namespace, such as:

- \`ConcurrentDictionary<TKey, TValue>\`
- \`ConcurrentQueue<T>\`
- \`ConcurrentStack<T>\`
- \`ConcurrentBag<T>\`
- \`BlockingCollection<T>\`

**Example:**
\`\`\`csharp
var concurrentDict = new ConcurrentDictionary<int, string>();
concurrentDict.TryAdd(1, "value1");
\`\`\`

These collections are designed for multi-threaded scenarios and handle synchronization internally.

---

### 2. Locking with \`lock\` Statement

If you are using a collection that is not thread-safe (e.g., \`List<T>\`, \`Dictionary<TKey, TValue>\`), you can use the \`lock\` statement to synchronize access:

\`\`\`csharp
private readonly object _lock = new object();
private List<int> _list = new List<int>();

public void AddItem(int item)
{
    lock (_lock)
    {
        _list.Add(item);
    }
}
\`\`\`

This ensures that only one thread can access the collection at a time.

---

### 3. Using Synchronized Wrappers

For legacy collections, you can use synchronized wrappers:

\`\`\`csharp
ArrayList arrayList = ArrayList.Synchronized(new ArrayList());
\`\`\`

However, this approach is less common in modern C# code.

---

### 4. Immutable Collections

Immutable collections from \`System.Collections.Immutable\` namespace are inherently thread-safe because their state cannot be changed after creation.

\`\`\`csharp
using System.Collections.Immutable;

ImmutableList<int> immutableList = ImmutableList<int>.Empty.Add(1);
\`\`\`

---

### Summary Table

| Approach                        | Thread-Safe | Suitable For       |
|----------------------------------|-------------|--------------------|
| Concurrent Collections           | Yes         | High concurrency   |
| \`lock\` Statement                 | Yes         | Custom logic       |
| Synchronized Wrappers            | Yes         | Legacy collections |
| Immutable Collections            | Yes         | Read-heavy, no mutation |

**Best Practice:**  
Prefer using concurrent or immutable collections for thread safety. Use \`lock\` only when you need custom synchronization logic.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:57:09.252313Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"ab8a35ec-4840-4b8c-8c23-24be00c90e90",question:"What are the differences between ArrayList and List<T>?",answer:"```markdown **Differences between ArrayList and List<T> in C#:**\n\n| Feature              | ArrayList                         | List<T>                                 |\n|----------------------|-----------------------------------|-----------------------------------------|\n| Namespace            | System.Collections                | System.Collections.Generic              |\n| Type Safety          | Not type-safe (stores objects as `object`) | Type-safe (stores specific type `T`)    |\n| Performance          | Slower (boxing/unboxing for value types) | Faster (no boxing/unboxing)             |\n| Generics Support     | No                                | Yes                                     |\n| Usage Recommendation | Legacy, not recommended for new code | Recommended for new code                |\n| Syntax Example       | `ArrayList list = new ArrayList();` | `List<int> list = new List<int>();`     |\n\n**Summary:**  \nUse `List<T>` for type safety, better performance, and modern C# code. `ArrayList` is mainly for backward compatibility.",level:"Beginner",created_at:"2025-04-21T11:57:09.252326Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"e3f819f8-4bc4-4bc3-bd19-11bc20fb96c1",question:"How do you reverse a collection in C#?",answer:"```markdown\nTo reverse a collection in C#, you can use the `Reverse()` method provided by various collection types. Here are some common ways:\n\n### 1. Using `List<T>.Reverse()`\nIf you have a `List<T>`, you can call its `Reverse()` method, which reverses the list in place:\n\n```csharp\nList<int> numbers = new List<int> { 1, 2, 3, 4, 5 };\nnumbers.Reverse();\n// numbers is now { 5, 4, 3, 2, 1 }\n```\n\n### 2. Using LINQ's `Reverse()` (for any IEnumerable)\nIf you want to reverse any collection without modifying the original, use LINQ's `Reverse()` extension method:\n\n```csharp\nusing System.Linq;\n\nint[] array = { 1, 2, 3, 4, 5 };\nvar reversed = array.Reverse(); // Returns IEnumerable<int>\nforeach (var num in reversed)\n{\n    Console.WriteLine(num); // Prints 5 4 3 2 1\n}\n```\n\n**Note:** LINQ's `Reverse()` does not change the original collection; it returns a new reversed sequence.\n\n### Summary Table\n\n| Collection Type | Method                | In-place? |\n|-----------------|----------------------|-----------|\n| List<T>         | `Reverse()`          | Yes       |\n| Array           | `Array.Reverse()`    | Yes       |\n| Any IEnumerable | `Enumerable.Reverse()`| No        |\n\nChoose the method that best fits your collection type and whether you want to reverse in place or create a new reversed sequence.\n```\n",level:"Beginner",created_at:"2025-04-21T11:57:09.252338Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"46c95e2f-2690-4e80-92c2-6ba1c6d92ab6",question:"What is a LinkedList and when would you use it over a List?",answer:`\`\`\`markdown A **LinkedList** in C# is a linear data structure where each element (called a node) contains a value and a reference (or link) to the next (and optionally previous) node in the sequence. The .NET Framework provides the \`LinkedList<T>\` class, which implements a doubly linked list, meaning each node has references to both the next and previous nodes.

### Key Characteristics

- **Dynamic Size:** Nodes can be efficiently added or removed without reallocating or shifting elements.
- **Non-contiguous Storage:** Elements are not stored in contiguous memory locations.
- **Efficient Insertions/Deletions:** Adding or removing nodes at the beginning, end, or middle is generally O(1) if you have a reference to the node.

### When to Use LinkedList Over List

You should consider using a \`LinkedList<T>\` instead of a \`List<T>\` when:

- **Frequent Insertions/Deletions:** You need to frequently add or remove elements from the beginning or middle of the collection. \`LinkedList<T>\` can perform these operations in O(1) time if you have a reference to the node, while \`List<T>\` may require O(n) time due to shifting elements.
- **Unknown Collection Size:** The size of the collection changes frequently and unpredictably.
- **No Need for Random Access:** You do not need to access elements by index often, as \`LinkedList<T>\` does not support efficient random access (O(n) time), whereas \`List<T>\` provides O(1) access by index.

### When to Prefer List

- **Frequent Random Access:** If you need fast access to elements by index, \`List<T>\` is more suitable.
- **Better Memory Locality:** \`List<T>\` stores elements in contiguous memory, which can be more cache-friendly and efficient for iteration.

### Example

\`\`\`csharp
// Using LinkedList
LinkedList<int> linkedList = new LinkedList<int>();
linkedList.AddLast(1);
linkedList.AddLast(2);
linkedList.AddFirst(0); // Efficient O(1) insertion at the beginning

// Using List
List<int> list = new List<int>();
list.Add(1);
list.Add(2);
list.Insert(0, 0); // O(n) insertion at the beginning (elements are shifted)
\`\`\`

---

**Summary:**  
Use \`LinkedList<T>\` when you need efficient insertions and deletions at arbitrary positions and do not require fast random access. Use \`List<T>\` when you need fast indexed access and insertions/deletions are infrequent or mostly at the end.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252350Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"137e8a71-0779-4eca-9594-3f70dc6adf51",question:"How do you find the intersection of two sets in C#?",answer:`\`\`\`markdown To find the intersection of two sets in C#, you can use the Intersect method provided by the HashSet<T> or LINQ. Here’s how you can do it using both approaches:

### Using HashSet<T>

\`\`\`csharp
var set1 = new HashSet<int> { 1, 2, 3, 4 };
var set2 = new HashSet<int> { 3, 4, 5, 6 };

// Modifies set1 to contain only elements also in set2
set1.IntersectWith(set2);

// set1 now contains: 3, 4
\`\`\`

### Using LINQ

\`\`\`csharp
using System.Linq;

var set1 = new HashSet<int> { 1, 2, 3, 4 };
var set2 = new HashSet<int> { 3, 4, 5, 6 };

var intersection = set1.Intersect(set2);

// intersection contains: 3, 4
\`\`\`

**Note:**  
- \`IntersectWith\` modifies the original set.
- \`Intersect\` (LINQ) returns a new IEnumerable<T> with the intersection.

**Summary:**  
Use \`IntersectWith\` for in-place intersection, or \`Intersect\` (LINQ) for a new collection containing the intersection of two sets.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252362Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"7b9a9a35-49c9-4afe-9951-106a8f97d1a0",question:"What is the difference between Stack<T> and Queue<T>?",answer:`\`\`\`markdown **Answer:**

In C#, both \`Stack<T>\` and \`Queue<T>\` are generic collection classes used to store objects, but they differ in the way elements are added and removed:

| Feature         | Stack<T>                          | Queue<T>                          |
|-----------------|-----------------------------------|-----------------------------------|
| Data Structure  | Last-In-First-Out (LIFO)          | First-In-First-Out (FIFO)         |
| Add Element     | \`Push(T item)\` (to the top)       | \`Enqueue(T item)\` (to the end)    |
| Remove Element  | \`Pop()\` (from the top)            | \`Dequeue()\` (from the front)      |
| Peek Element    | \`Peek()\` (top element)            | \`Peek()\` (front element)          |
| Use Case        | Undo operations, backtracking     | Order processing, task scheduling |

**Example:**

\`\`\`csharp
// Stack<T> example
Stack<int> stack = new Stack<int>();
stack.Push(1);
stack.Push(2);
int last = stack.Pop(); // last = 2

// Queue<T> example
Queue<int> queue = new Queue<int>();
queue.Enqueue(1);
queue.Enqueue(2);
int first = queue.Dequeue(); // first = 1
\`\`\`

**Summary:**  
- \`Stack<T>\` removes the most recently added element first (LIFO).
- \`Queue<T>\` removes the oldest added element first (FIFO).`,level:"Beginner",created_at:"2025-04-21T11:57:09.252374Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"3b4949d7-d416-41da-b35c-2c15043fd61b",question:"How do you convert an array to a List in C#?",answer:`\`\`\`markdown
You can convert an array to a \`List\` in C# using the \`ToList()\` extension method from the \`System.Linq\` namespace. Here’s how you can do it:

\`\`\`csharp
using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] array = { 1, 2, 3, 4, 5 };
        List<int> list = array.ToList();

        // Output the list
        foreach (int item in list)
        {
            Console.WriteLine(item);
        }
    }
}
\`\`\`

Alternatively, you can use the \`List\` constructor:

\`\`\`csharp
int[] array = { 1, 2, 3, 4, 5 };
List<int> list = new List<int>(array);
\`\`\`

Both methods will convert the array to a \`List<int>\`.
\`\`\`
`,level:"Beginner",created_at:"2025-04-21T11:57:09.252386Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"b9aebecd-54ef-4a58-9b47-420447d7dce4",question:"Explain the use of the yield keyword in C# collections.",answer:`\`\`\`markdown
### Explain the use of the \`yield\` keyword in C# collections

The \`yield\` keyword in C# is used to simplify the implementation of iterators for custom collections. It allows you to return elements one at a time, without creating an intermediate collection or explicitly managing the state of the iteration.

#### How it works

- When a method, operator, or accessor contains a \`yield return\` statement, it becomes an **iterator**.
- Each time the iterator is called (e.g., in a \`foreach\` loop), execution resumes from the last \`yield return\`.
- You can also use \`yield break\` to end the iteration early.

#### Example

\`\`\`csharp
public IEnumerable<int> GetEvenNumbers(int[] numbers)
{
    foreach (var num in numbers)
    {
        if (num % 2 == 0)
        {
            yield return num;
        }
    }
}
\`\`\`

**Usage:**
\`\`\`csharp
var evens = GetEvenNumbers(new int[] { 1, 2, 3, 4, 5 });
foreach (var n in evens)
{
    Console.WriteLine(n); // Output: 2, 4
}
\`\`\`

#### Benefits

- **Lazy evaluation:** Elements are generated on demand, saving memory and improving performance for large or infinite sequences.
- **Simplified code:** No need to maintain complex state or create temporary lists.

#### Common use cases

- Custom collection iteration
- Filtering or transforming sequences
- Implementing LINQ-like methods

**In summary:**  
The \`yield\` keyword makes it easy to create efficient, readable, and maintainable iterators for custom collections in C#.
\`\`\``,level:"Intermediate",created_at:"2025-04-21T11:57:09.252398Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"0e445d8f-9e9b-4874-b2c4-6c41d83a6060",question:"What is LINQ and how can it be used with collections?",answer:`\`\`\`markdown **What is LINQ and how can it be used with collections?**

LINQ (Language Integrated Query) is a powerful feature in C# that allows developers to write queries directly within the C# language to manipulate and retrieve data from various data sources, such as collections, databases, XML documents, and more. LINQ provides a consistent, readable, and type-safe way to query data.

### How LINQ Works with Collections

LINQ can be used with any collection that implements the \`IEnumerable<T>\` or \`IQueryable<T>\` interfaces, such as arrays, lists, dictionaries, and other generic collections. It enables developers to perform operations like filtering, sorting, grouping, and projecting data in a declarative manner.

#### Example: Using LINQ with a List

\`\`\`csharp
using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6 };

        // LINQ query to select even numbers
        var evenNumbers = from num in numbers
                          where num % 2 == 0
                          select num;

        // Alternatively, using method syntax
        var evenNumbersMethod = numbers.Where(num => num % 2 == 0);

        foreach (var n in evenNumbers)
        {
            Console.WriteLine(n); // Output: 2 4 6
        }
    }
}
\`\`\`

### Key Points

- **Query Syntax**: Similar to SQL, uses \`from\`, \`where\`, \`select\`, etc.
- **Method Syntax**: Uses extension methods like \`.Where()\`, \`.Select()\`, \`.OrderBy()\`, etc.
- **Type Safety**: LINQ queries are checked at compile time.
- **Versatility**: Works with in-memory collections, databases (via LINQ to SQL/Entity Framework), XML, and more.

### Benefits

- **Readable and concise code**
- **Reduces the need for loops and manual filtering**
- **Consistent querying experience across different data sources**

---

**In summary:** LINQ is a feature in C# that allows querying and manipulating collections in a declarative, type-safe, and readable way, making data operations much simpler and more maintainable.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252411Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"5d5b8f7e-2d04-4d9d-981a-8a51c4b7eac7",question:"How do you remove all elements from a collection that match a condition?",answer:`\`\`\`markdown To remove all elements from a collection that match a specific condition in C#, you can use the RemoveAll method available on List<T>. This method takes a predicate (a function that returns true for elements to remove) and removes all matching elements from the list.

Here's an example:

\`\`\`csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6 };

// Remove all even numbers
numbers.RemoveAll(n => n % 2 == 0);

// numbers now contains: 1, 3, 5
\`\`\`

**Notes:**
- RemoveAll is only available for List<T>, not for other collection types like arrays or generic ICollection<T>.
- For other collections, you may need to use a loop or LINQ to filter elements and create a new collection.

**Example using LINQ to create a new filtered collection:**

\`\`\`csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6 };

// Create a new list without even numbers
var oddNumbers = numbers.Where(n => n % 2 != 0).ToList();
\`\`\`

**Summary:**  
- Use \`RemoveAll(predicate)\` for List<T>.
- For other collections, use LINQ's \`Where\` to filter and create a new collection.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252423Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"8c418324-4ab0-4ef4-b2a4-a23ee9747b46",question:"What are the differences between a Set and a Dictionary?",answer:'```markdown **Differences Between a Set and a Dictionary in C#:**\n\n| Feature         | Set (`HashSet<T>`)            | Dictionary (`Dictionary<TKey, TValue>`)      |\n|-----------------|------------------------------|----------------------------------------------|\n| Purpose         | Stores unique elements only  | Stores key-value pairs                       |\n| Key             | No keys, only values         | Each value is associated with a unique key   |\n| Value           | Only values                  | Both keys and values                        |\n| Access          | Check for existence of value | Access value by key                          |\n| Duplicates      | Not allowed                  | Keys must be unique; values can duplicate    |\n| Example Usage   | `{1, 2, 3}`                  | `{1: "A", 2: "B", 3: "C"}`                  |\n| Typical Classes | `HashSet<T>`, `SortedSet<T>` | `Dictionary<TKey, TValue>`, `SortedDictionary<TKey, TValue>` |\n\n**Summary:**  \n- Use a Set when you need to store unique values and only care about existence.\n- Use a Dictionary when you need to associate unique keys with specific values.',level:"Beginner",created_at:"2025-04-21T11:57:09.252435Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"a22e4cc3-8f0e-4c5b-b9b1-5f1c4574c2f0",question:"How would you implement a LRU (Least Recently Used) cache in C#?",answer:`\`\`\`markdown
To implement an LRU (Least Recently Used) cache in C#, you typically use a combination of a \`Dictionary\` for O(1) access and a \`LinkedList\` to track the usage order. The \`Dictionary\` maps keys to linked list nodes, and the \`LinkedList\` maintains the order from most recently used (head) to least recently used (tail).

Here’s a sample implementation:

\`\`\`csharp
using System;
using System.Collections.Generic;

public class LRUCache<K, V>
{
    private readonly int capacity;
    private readonly Dictionary<K, LinkedListNode<CacheItem>> cacheMap;
    private readonly LinkedList<CacheItem> usageList;

    private class CacheItem
    {
        public K Key { get; }
        public V Value { get; set; }
        public CacheItem(K key, V value)
        {
            Key = key;
            Value = value;
        }
    }

    public LRUCache(int capacity)
    {
        if (capacity <= 0) throw new ArgumentException("Capacity must be greater than zero.");
        this.capacity = capacity;
        cacheMap = new Dictionary<K, LinkedListNode<CacheItem>>(capacity);
        usageList = new LinkedList<CacheItem>();
    }

    public V Get(K key)
    {
        if (!cacheMap.TryGetValue(key, out var node))
            throw new KeyNotFoundException();

        // Move accessed node to the front (most recently used)
        usageList.Remove(node);
        usageList.AddFirst(node);
        return node.Value.Value;
    }

    public void Put(K key, V value)
    {
        if (cacheMap.TryGetValue(key, out var node))
        {
            // Update value and move to front
            node.Value.Value = value;
            usageList.Remove(node);
            usageList.AddFirst(node);
        }
        else
        {
            if (cacheMap.Count >= capacity)
            {
                // Remove least recently used item
                var lruNode = usageList.Last;
                if (lruNode != null)
                {
                    cacheMap.Remove(lruNode.Value.Key);
                    usageList.RemoveLast();
                }
            }
            // Insert new item at front
            var newNode = new LinkedListNode<CacheItem>(new CacheItem(key, value));
            usageList.AddFirst(newNode);
            cacheMap[key] = newNode;
        }
    }
}
\`\`\`

**Usage Example:**
\`\`\`csharp
var lru = new LRUCache<int, string>(2);
lru.Put(1, "one");
lru.Put(2, "two");
Console.WriteLine(lru.Get(1)); // Outputs: one
lru.Put(3, "three"); // Evicts key 2
// lru.Get(2); // Throws KeyNotFoundException
\`\`\`

**Key Points:**
- \`Dictionary\` provides O(1) access to cache items.
- \`LinkedList\` maintains the usage order for O(1) updates.
- On every \`Get\` or \`Put\`, the accessed/inserted node is moved to the front.
- When the cache exceeds capacity, the least recently used item (at the end of the list) is removed.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:57:09.252447Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"66fc4835-6a61-4a72-85b9-49495d2ffbc2",question:"What is the difference between a value type and a reference type in collections?",answer:`\`\`\`markdown **Answer:**

In C#, the difference between a value type and a reference type in collections is:

- **Value Types** (e.g., \`int\`, \`struct\`, \`bool\`):
  - Store the actual data directly.
  - When you add a value type to a collection (like a \`List<int>\`), the value itself is stored.
  - Assigning a value type to another variable copies the data.

- **Reference Types** (e.g., \`class\`, \`string\`, \`object\`):
  - Store a reference (pointer) to the actual data in memory.
  - When you add a reference type to a collection (like a \`List<string>\`), the reference is stored, not the actual object.
  - Assigning a reference type to another variable copies the reference, not the object itself.

**Example:**

\`\`\`csharp
int a = 5;          // Value type
int b = a;          // b gets a copy of a's value

string s1 = "abc";  // Reference type
string s2 = s1;     // s2 points to the same object as s1
\`\`\`

**Summary Table:**

| Feature           | Value Type             | Reference Type           |
|-------------------|-----------------------|-------------------------|
| Stored in         | Stack                 | Heap                    |
| Assignment        | Copies value          | Copies reference        |
| In Collections    | Stores actual value   | Stores reference        |

Understanding this difference is important when working with collections, as it affects how data is stored, accessed, and modified.`,level:"Beginner",created_at:"2025-04-21T11:57:09.252459Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"d087aabb-e6a7-41c7-85a4-3375b64313e3",question:"How do you merge two lists in C#?",answer:"```markdown\nYou can merge two lists in C# using the `AddRange()` method or the LINQ `Concat()` method.\n\n**Example using `AddRange()`:**\n\n```csharp\nList<int> list1 = new List<int> { 1, 2, 3 };\nList<int> list2 = new List<int> { 4, 5, 6 };\n\nlist1.AddRange(list2); // list1 now contains {1, 2, 3, 4, 5, 6}\n```\n\n**Example using LINQ `Concat()`:**\n\n```csharp\nList<int> list1 = new List<int> { 1, 2, 3 };\nList<int> list2 = new List<int> { 4, 5, 6 };\n\nvar mergedList = list1.Concat(list2).ToList(); // mergedList contains {1, 2, 3, 4, 5, 6}\n```\n\n- Use `AddRange()` if you want to modify the first list.\n- Use `Concat()` if you want to create a new merged list without modifying the originals.\n```",level:"Beginner",created_at:"2025-04-21T11:57:09.252471Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"0a8c8352-2573-4a03-ba91-e20fd8dd611d",question:"What are extension methods and how can they be used with collections?",answer:`\`\`\`markdown **Extension methods** in C# are a way to "add" new methods to existing types without modifying the original type, recompiling, or using inheritance. They are defined as static methods in a static class, with the first parameter preceded by the this keyword, indicating the type they extend.

### How Extension Methods Work with Collections

Collections in C# (like \`List<T>\`, \`IEnumerable<T>\`, etc.) can be enhanced with extension methods. This is commonly used in LINQ, where methods like \`Where\`, \`Select\`, and \`OrderBy\` are extension methods for \`IEnumerable<T>\`.

#### Example: Creating an Extension Method for Collections

Suppose you want to add a method to all \`IEnumerable<T>\` collections that returns the count of elements greater than a specified value:

\`\`\`csharp
public static class CollectionExtensions
{
    public static int CountGreaterThan<T>(this IEnumerable<T> collection, T value) where T : IComparable<T>
    {
        int count = 0;
        foreach (var item in collection)
        {
            if (item.CompareTo(value) > 0)
                count++;
        }
        return count;
    }
}
\`\`\`

**Usage:**

\`\`\`csharp
List<int> numbers = new List<int> { 1, 5, 10, 20 };
int count = numbers.CountGreaterThan(5); // Returns 2 (10 and 20)
\`\`\`

### Key Points

- Extension methods let you add functionality to existing types, including collections, without altering their source code.
- They are widely used in LINQ to provide powerful querying capabilities on collections.
- To use an extension method, include its namespace with a using directive.

**Summary:**  
Extension methods are a powerful feature in C# for enhancing collections with custom or reusable functionality, making code more expressive and modular.`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252483Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"0073b7a9-1fc9-45c9-8d21-4f11c981b619",question:"How do you check if a collection is empty in C#?",answer:"```markdown\nTo check if a collection is empty in C#, you can use the `Count` property or the `Any()` method from LINQ. Here are two common ways:\n\n**1. Using the `Count` property:**\n```csharp\nif (myCollection.Count == 0)\n{\n    // The collection is empty\n}\n```\n\n**2. Using LINQ's `Any()` method:**\n```csharp\nusing System.Linq;\n\nif (!myCollection.Any())\n{\n    // The collection is empty\n}\n```\n\n**Note:**  \n- `Count` is available on collections like `List<T>`, `Array`, etc.\n- `Any()` works with any `IEnumerable<T>` and is often more efficient for large collections, as it returns as soon as it finds an element.\n```",level:"Beginner",created_at:"2025-04-21T11:57:09.252494Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"ca5206c7-bbd6-472f-ad40-2569fa23d45d",question:"What is the difference between ToArray() and ToList() methods?",answer:"```markdown **Answer:**\n\nIn C#, both `ToArray()` and `ToList()` are extension methods used to convert a collection (like IEnumerable or LINQ query results) into a different type of collection.\n\n- **ToArray()**  \n  - Converts the collection into an array (`T[]`).\n  - Returns a fixed-size array.\n  - Example:\n    ```csharp\n    var numbers = new List<int> { 1, 2, 3 };\n    int[] array = numbers.ToArray();\n    ```\n\n- **ToList()**  \n  - Converts the collection into a `List<T>`.\n  - Returns a dynamic, resizable list.\n  - Example:\n    ```csharp\n    var numbers = new int[] { 1, 2, 3 };\n    List<int> list = numbers.ToList();\n    ```\n\n**Key Differences:**\n- `ToArray()` returns an array, which has a fixed size.\n- `ToList()` returns a `List<T>`, which can be resized (add/remove elements).\n- Choose `ToArray()` when you need a fixed-size collection, and `ToList()` when you need to modify the collection after creation.",level:"Beginner",created_at:"2025-04-21T11:57:09.252506Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"982ef4c2-f944-4030-aee2-5bc9d1ae3bfc",question:"How do you handle duplicates in a Dictionary?",answer:`\`\`\`markdown
In C#, a \`Dictionary<TKey, TValue>\` does not allow duplicate keys—each key must be unique. If you attempt to add a key that already exists, a \`ArgumentException\` will be thrown. To handle duplicates, you have several options depending on your requirements:

### 1. Check for Key Existence Before Adding

You can check if the key already exists using the \`ContainsKey\` method before adding a new entry:

\`\`\`csharp
Dictionary<int, string> dict = new Dictionary<int, string>();

int key = 1;
string value = "Value1";

if (!dict.ContainsKey(key))
{
    dict.Add(key, value);
}
else
{
    // Handle duplicate key as needed (e.g., update value or ignore)
    dict[key] = value; // This will update the existing value
}
\`\`\`

### 2. Use the Indexer to Overwrite

Assigning a value using the indexer (\`dict[key] = value;\`) will add the key if it doesn't exist, or update the value if it does. This way, duplicates are handled by overwriting the existing value:

\`\`\`csharp
dict[key] = value; // Adds or updates
\`\`\`

### 3. Store Multiple Values per Key

If you need to store multiple values for the same key, use a collection as the value (e.g., \`List<T>\`):

\`\`\`csharp
Dictionary<int, List<string>> dict = new Dictionary<int, List<string>>();

int key = 1;
string value = "Value1";

if (!dict.ContainsKey(key))
{
    dict[key] = new List<string>();
}
dict[key].Add(value);
\`\`\`

### Summary

- **Duplicate keys are not allowed** in a \`Dictionary\`.
- Use \`ContainsKey\` to check before adding.
- Use the indexer to overwrite existing values.
- Use a collection as the value type if you need to associate multiple values with a single key.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252518Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"8ad554b5-97f2-4758-a1ed-31a4918120ac",question:"What is a PriorityQueue and how would you implement one in C#?",answer:`\`\`\`markdown
### What is a PriorityQueue and how would you implement one in C#?

A **PriorityQueue** is a data structure where each element is associated with a priority, and elements are served according to their priority (not just their insertion order). The element with the highest (or lowest, depending on implementation) priority is always removed first. This is commonly used in algorithms like Dijkstra's shortest path, A* search, and in scheduling systems.

#### Key Operations

- **Enqueue (Insert):** Add an element with a given priority.
- **Dequeue (Remove):** Remove and return the element with the highest (or lowest) priority.
- **Peek:** View the element with the highest (or lowest) priority without removing it.

#### Implementation in C#

The most efficient way to implement a PriorityQueue is using a **binary heap** (min-heap or max-heap). In .NET 6 and later, there is a built-in \`PriorityQueue<TElement, TPriority>\` class in \`System.Collections.Generic\`. For earlier versions, you can implement your own using a heap.

##### Using .NET 6+ Built-in PriorityQueue

\`\`\`csharp
using System.Collections.Generic;

var pq = new PriorityQueue<string, int>();

// Enqueue elements (element, priority)
pq.Enqueue("Task 1", 3);
pq.Enqueue("Task 2", 1);
pq.Enqueue("Task 3", 2);

// Dequeue elements (lowest priority first)
while (pq.Count > 0)
{
    string task = pq.Dequeue();
    Console.WriteLine(task);
}
\`\`\`

##### Custom Min-Heap Implementation (for .NET < 6)

\`\`\`csharp
public class PriorityQueue<T>
{
    private List<(T item, int priority)> heap = new();

    private int Parent(int i) => (i - 1) / 2;
    private int Left(int i) => 2 * i + 1;
    private int Right(int i) => 2 * i + 2;

    public void Enqueue(T item, int priority)
    {
        heap.Add((item, priority));
        int i = heap.Count - 1;
        while (i > 0 && heap[Parent(i)].priority > heap[i].priority)
        {
            (heap[Parent(i)], heap[i]) = (heap[i], heap[Parent(i)]);
            i = Parent(i);
        }
    }

    public T Dequeue()
    {
        if (heap.Count == 0) throw new InvalidOperationException("Empty queue");
        T result = heap[0].item;
        heap[0] = heap[^1];
        heap.RemoveAt(heap.Count - 1);
        Heapify(0);
        return result;
    }

    private void Heapify(int i)
    {
        int smallest = i;
        int left = Left(i);
        int right = Right(i);

        if (left < heap.Count && heap[left].priority < heap[smallest].priority)
            smallest = left;
        if (right < heap.Count && heap[right].priority < heap[smallest].priority)
            smallest = right;
        if (smallest != i)
        {
            (heap[i], heap[smallest]) = (heap[smallest], heap[i]);
            Heapify(smallest);
        }
    }

    public int Count => heap.Count;
}
\`\`\`

#### Summary

- **PriorityQueue** serves elements based on priority, not insertion order.
- Use \`PriorityQueue<TElement, TPriority>\` in .NET 6+.
- For earlier versions, implement using a binary heap for efficiency (\`O(log n)\` for insert and remove).
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:57:09.252531Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"813b0499-21e3-4ab4-9494-7492a38aa94d",question:"Explain the difference between IEnumerable, ICollection, and IList.",answer:"```markdown ### Difference between `IEnumerable`, `ICollection`, and `IList` in C#\n\n#### 1. `IEnumerable`\n- **Namespace:** `System.Collections`\n- **Purpose:** The base interface for all non-generic collections that can be enumerated.\n- **Key Features:**\n  - Provides a single method: `GetEnumerator()`.\n  - Allows iteration over a collection using `foreach`.\n  - **Read-only**: Does not provide methods to add, remove, or modify elements.\n- **Usage Example:**\n  ```csharp\n  IEnumerable collection = new List<int> { 1, 2, 3 };\n  foreach (var item in collection)\n  {\n      Console.WriteLine(item);\n  }\n  ```\n\n#### 2. `ICollection`\n- **Namespace:** `System.Collections`\n- **Purpose:** Extends `IEnumerable` and is the base interface for all collections.\n- **Key Features:**\n  - Inherits from `IEnumerable`.\n  - Provides methods for **counting** (`Count` property), **adding**, **removing**, and **checking** if an item exists.\n  - Supports **modification** of the collection.\n- **Usage Example:**\n  ```csharp\n  ICollection<int> collection = new List<int>();\n  collection.Add(1);\n  collection.Remove(1);\n  int count = collection.Count;\n  ```\n\n#### 3. `IList`\n- **Namespace:** `System.Collections`\n- **Purpose:** Extends `ICollection` and represents a collection of objects that can be individually accessed by index.\n- **Key Features:**\n  - Inherits from `ICollection` and `IEnumerable`.\n  - Provides **index-based access** (`this[int index]`).\n  - Allows **inserting** and **removing** elements at specific positions.\n  - Supports all functionalities of `ICollection` and `IEnumerable`.\n- **Usage Example:**\n  ```csharp\n  IList<int> list = new List<int>();\n  list.Add(1);\n  list.Insert(0, 2);\n  int value = list[0];\n  list.RemoveAt(1);\n  ```\n\n---\n\n#### **Summary Table**\n\n| Interface     | Inherits         | Key Features                              | Modification | Index Access |\n|---------------|------------------|-------------------------------------------|--------------|--------------|\n| `IEnumerable` | -                | Enumeration (`foreach`)                   | No           | No           |\n| `ICollection` | `IEnumerable`    | Count, Add, Remove, Contains              | Yes          | No           |\n| `IList`       | `ICollection`    | Indexer, Insert, RemoveAt, index access   | Yes          | Yes          |\n\n---\n\n**In short:**  \n- Use `IEnumerable` for simple iteration.\n- Use `ICollection` when you need to modify the collection (add/remove).\n- Use `IList` when you need index-based access and full list functionality.",level:"Intermediate",created_at:"2025-04-21T11:57:09.252544Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"b430d03b-2d76-465b-98da-426ff4c11100",question:"How do you perform a binary search on a collection in C#?",answer:`\`\`\`markdown
To perform a binary search on a collection in C#, you typically use the \`Array.BinarySearch\` method for arrays or the \`List<T>.BinarySearch\` method for lists. Binary search requires the collection to be sorted.

**Example using an array:**

\`\`\`csharp
int[] numbers = { 1, 3, 5, 7, 9, 11, 13 };
int index = Array.BinarySearch(numbers, 7);

if (index >= 0)
{
    Console.WriteLine($"Element found at index {index}");
}
else
{
    Console.WriteLine("Element not found");
}
\`\`\`

**Example using a list:**

\`\`\`csharp
List<string> names = new List<string> { "Alice", "Bob", "Charlie", "David" };
names.Sort(); // Ensure the list is sorted

int index = names.BinarySearch("Charlie");

if (index >= 0)
{
    Console.WriteLine($"Element found at index {index}");
}
else
{
    Console.WriteLine("Element not found");
}
\`\`\`

**Key Points:**
- The collection must be sorted before performing a binary search.
- The method returns the index of the element if found; otherwise, it returns a negative number.
- For custom objects, you may need to implement \`IComparable<T>\` or provide a custom comparer.
\`\`\``,level:"Intermediate",created_at:"2025-04-21T11:57:09.252555Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"9a935818-9466-48d2-b4b0-c328b74702fe",question:"What is the difference between a shallow copy and a deep copy in C# collections?",answer:`\`\`\`markdown
**Difference Between Shallow Copy and Deep Copy in C# Collections**

- **Shallow Copy:**
  - A shallow copy of a collection copies the references of the objects, not the actual objects themselves.
  - Both the original and the copied collection point to the same objects in memory.
  - Changes to an object in one collection will reflect in the other.
  - Example: Using \`MemberwiseClone()\` or the \`Clone()\` method of some collections.

- **Deep Copy:**
  - A deep copy creates a new collection and also creates new instances of the objects within the collection.
  - The original and the copied collection are completely independent.
  - Changes to an object in one collection do **not** affect the other.
  - Deep copy usually requires custom implementation (e.g., by serializing and deserializing the objects).

**Example:**

\`\`\`csharp
// Shallow Copy Example
List<Person> originalList = new List<Person> { new Person("Alice"), new Person("Bob") };
List<Person> shallowCopy = new List<Person>(originalList); // Only references are copied

// Deep Copy Example
List<Person> deepCopy = originalList.Select(p => new Person(p.Name)).ToList(); // New objects are created
\`\`\`

**Summary Table:**

| Aspect         | Shallow Copy                                | Deep Copy                                   |
|----------------|---------------------------------------------|---------------------------------------------|
| Object Copies  | References                                  | New instances                               |
| Independence   | Not independent (shared objects)            | Completely independent                      |
| Implementation | Built-in for some collections               | Usually requires manual implementation      |
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:57:09.252567Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"8a609fbd-b621-4fb7-b7fd-006d67098319",question:"How do you remove an item from a collection while iterating through it?",answer:`\`\`\`markdown
Removing an item from a collection while iterating through it in C# requires careful handling to avoid exceptions such as \`InvalidOperationException\`. Here are the recommended approaches:

### 1. Using a \`for\` Loop (for List<T>)

When working with a \`List<T>\`, iterate backwards to safely remove items:

\`\`\`csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
for (int i = numbers.Count - 1; i >= 0; i--)
{
    if (numbers[i] % 2 == 0)
    {
        numbers.RemoveAt(i);
    }
}
\`\`\`

### 2. Using \`RemoveAll\` (for List<T>)

For simple predicates, use the \`RemoveAll\` method:

\`\`\`csharp
numbers.RemoveAll(n => n % 2 == 0);
\`\`\`

### 3. Using a Temporary Collection

For collections that do not support indexed access (like \`HashSet<T>\` or \`Dictionary<K,V>\`), collect items to remove in a temporary list:

\`\`\`csharp
var itemsToRemove = new List<int>();
foreach (var item in collection)
{
    if (ShouldRemove(item))
    {
        itemsToRemove.Add(item);
    }
}
foreach (var item in itemsToRemove)
{
    collection.Remove(item);
}
\`\`\`

### 4. Using \`IEnumerator\` with \`ICollection<T>.Remove\`

If the collection supports it, you can use the \`Remove\` method outside the enumerator loop.

### **Important Note**
- **Never remove items directly from a collection inside a \`foreach\` loop**; this will throw an \`InvalidOperationException\` because the collection is being modified during enumeration.

### **Summary Table**

| Collection Type | Safe Removal Approach                |
|-----------------|-------------------------------------|
| List<T>         | Iterate backwards or use RemoveAll   |
| HashSet<T>      | Collect to temp list, then remove    |
| Dictionary<K,V> | Collect keys to temp list, then remove by key |

**Best Practice:**  
Always avoid modifying the collection directly during iteration. Use a safe pattern as shown above to prevent runtime exceptions and ensure correct behavior.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:57:09.252579Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"0b3d3de5-a59a-42a4-9580-7ae7af21dacb",question:"What are the thread-safe collection types available in .NET?",answer:"```markdown\n### What are the thread-safe collection types available in .NET?\n\n.NET provides several built-in thread-safe collection types within the `System.Collections.Concurrent` namespace, designed to support safe access and modification from multiple threads without requiring external synchronization. Some of the most commonly used thread-safe collections are:\n\n#### 1. `ConcurrentDictionary<TKey, TValue>`\n- A thread-safe implementation of a key-value pair dictionary.\n- Supports atomic operations like `AddOrUpdate`, `GetOrAdd`, and `TryRemove`.\n\n#### 2. `ConcurrentQueue<T>`\n- A thread-safe FIFO (First-In-First-Out) queue.\n- Allows multiple threads to enqueue and dequeue items safely.\n\n#### 3. `ConcurrentStack<T>`\n- A thread-safe LIFO (Last-In-First-Out) stack.\n- Supports safe push and pop operations from multiple threads.\n\n#### 4. `ConcurrentBag<T>`\n- A thread-safe, unordered collection of objects.\n- Optimized for scenarios where the same thread will both add and remove items.\n\n#### 5. `BlockingCollection<T>`\n- Provides blocking and bounding capabilities for thread-safe collections.\n- Can be used with any `IProducerConsumerCollection<T>` (such as `ConcurrentQueue<T>`, `ConcurrentStack<T>`, or `ConcurrentBag<T>`).\n- Supports blocking and bounding operations, making it suitable for producer-consumer scenarios.\n\n#### 6. `Immutable Collections` (in `System.Collections.Immutable`)\n- Collections like `ImmutableList<T>`, `ImmutableDictionary<TKey, TValue>`, etc., are inherently thread-safe because they never change after creation.\n- Any modification returns a new collection instance.\n\n---\n\n**Note:**  \nWhile legacy collections like `Hashtable` and `ArrayList` can be made thread-safe using wrappers (e.g., `Synchronized`), they are not recommended for new development. The concurrent collections listed above are specifically designed for high-performance, thread-safe operations in multi-threaded environments.\n```",level:"Advanced",created_at:"2025-04-21T11:57:09.252591Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"},{id:"4d9d6a82-bf90-4b03-b601-90fc3b71d5d1",question:"How do you implement a custom iterator for a collection in C#?",answer:`\`\`\`markdown
To implement a custom iterator for a collection in C#, you typically use the \`IEnumerable\` and \`IEnumerator\` interfaces, or more conveniently, the \`yield return\` statement. Here’s how you can do both:

### 1. Using \`yield return\` (Recommended)

This is the most concise and idiomatic way in C#.

\`\`\`csharp
public class MyCollection : IEnumerable<int>
{
    private int[] _items = { 1, 2, 3, 4, 5 };

    public IEnumerator<int> GetEnumerator()
    {
        for (int i = 0; i < _items.Length; i++)
        {
            yield return _items[i];
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
\`\`\`

**Usage:**
\`\`\`csharp
var collection = new MyCollection();
foreach (var item in collection)
{
    Console.WriteLine(item);
}
\`\`\`

### 2. Implementing \`IEnumerator\` Manually

For more control, implement \`IEnumerable\` and \`IEnumerator\` explicitly.

\`\`\`csharp
public class MyCollection : IEnumerable<int>
{
    private int[] _items = { 1, 2, 3, 4, 5 };

    public IEnumerator<int> GetEnumerator()
    {
        return new MyEnumerator(_items);
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }

    private class MyEnumerator : IEnumerator<int>
    {
        private int[] _items;
        private int _position = -1;

        public MyEnumerator(int[] items)
        {
            _items = items;
        }

        public int Current => _items[_position];

        object IEnumerator.Current => Current;

        public bool MoveNext()
        {
            _position++;
            return _position < _items.Length;
        }

        public void Reset()
        {
            _position = -1;
        }

        public void Dispose() { }
    }
}
\`\`\`

### **Key Points**
- Implement \`IEnumerable<T>\` and \`IEnumerator<T>\` for type safety and LINQ compatibility.
- Use \`yield return\` for simpler iterator logic.
- Implement \`IEnumerator\` manually if you need more control over iteration state.

**Interview Tip:**  
Explain both approaches and mention that \`yield return\` is preferred for most scenarios due to its simplicity and maintainability.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:57:09.252603Z",topic:"fb40198b-9fef-4f79-ac08-629ee12bef49"}];export{e as default};
