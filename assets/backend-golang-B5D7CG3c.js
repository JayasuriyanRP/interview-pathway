const e=[{id:"gb-1",question:"What are the basic data types in Golang?",answer:[{type:"text",content:"Golang has several basic data types categorized into numeric, string, and boolean types."},{type:"text",content:"**1. Numeric Types:**"},{type:"list",items:["Integers: `int`, `int8`, `int16`, `int32`, `int64`","Unsigned Integers: `uint`, `uint8`, `uint16`, `uint32`, `uint64`","Floating Points: `float32`, `float64`","Complex Numbers: `complex64`, `complex128`"]},{type:"text",content:"**2. Other Basic Types:**"},{type:"list",items:["Boolean: `bool` (true/false)","Strings: `string` (UTF-8 encoded text)","Byte & Rune: `byte` (alias for `uint8`), `rune` (alias for `int32`, used for Unicode characters)"]},{type:"text",content:"**Example of using different data types:**"},{type:"code",language:"go",content:`package main

import "fmt"

func main() {
	var a int = 10
	var b float64 = 3.14
	var c string = "Hello"
	var d bool = true
	fmt.Println(a, b, c, d)
}`}]},{id:"gb-2",question:"What are pointers in Golang? How do they work?",answer:[{type:"text",content:"Pointers in Golang store memory addresses of variables. They help in efficient memory manipulation and function parameter passing."},{type:"text",content:"**Pointer Syntax:**"},{type:"list",items:["`*T` → Defines a pointer to a type `T`.","`&` → Returns the memory address of a variable.","`*p` → Dereferences a pointer (accesses the value at the memory address)."]},{type:"text",content:"**Example of using pointers:**"},{type:"code",language:"go",content:`package main

import "fmt"

func main() {
	num := 10
	ptr := &num // Pointer to num
	fmt.Println("Memory Address:", ptr)
	fmt.Println("Value:", *ptr) // Dereferencing
}`}]},{id:"be-3",question:"What are the basic syntax rules and features of Golang?",answer:[{type:"text",content:"Golang (Go) is a statically typed, compiled language designed for simplicity, efficiency, and concurrency. It follows C-like syntax but removes complexities like header files and manual memory management."},{type:"text",content:"Here are the fundamental syntax rules and features of Go:"},{type:"list",items:["**Package Declaration**: Every Go program starts with a `package` declaration.","**Import Statements**: Uses `import` to include standard or custom packages.","**Functions**: Functions are defined using the `func` keyword.","**Variables**: Declared using `var`, `:=` (short assignment), or constants using `const`.","**Data Types**: Includes basic types like `int`, `float64`, `string`, `bool`, and composite types like `array`, `slice`, `map`, `struct`, `interface`.","**Control Structures**: Uses `if`, `for`, and `switch` for flow control.","**Concurrency**: Supports goroutines (`go func() {}`) and channels for concurrent execution.","**Error Handling**: Uses explicit error handling with `error` return values."]},{type:"code",language:"go",content:`package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")

    // Variable declaration
    var x int = 10
    y := 20 // Short assignment

    // Conditional statement
    if y > x {
        fmt.Println("y is greater than x")
    }

    // Loop
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }

    // Function call
    sum := add(5, 3)
    fmt.Println("Sum:", sum)
}

// Function definition
func add(a int, b int) int {
    return a + b
}`}]},{id:"gb-3",question:"What is the difference between arrays and slices in Golang?",answer:[{type:"text",content:"**Arrays:** Fixed-size collections of elements of the same type."},{type:"list",items:["Declared using `[size]Type{values}`","Size is part of the type, so cannot be resized","Stored sequentially in memory"]},{type:"text",content:"**Slices:** Dynamic, flexible views into arrays."},{type:"list",items:["Declared using `[]Type{values}` or `make([]Type, length, capacity)`","Can grow dynamically using `append()`","Stores reference to underlying array"]},{type:"text",content:"**Example:**"},{type:"code",language:"go",content:`package main

import "fmt"

func main() {
	arr := [3]int{1, 2, 3} // Array
	slice := []int{1, 2, 3} // Slice
	slice = append(slice, 4) // Append to slice

	fmt.Println(arr, slice)
}`}]},{id:"gb-4",question:"What are structs in Golang? How do you define and use them?",answer:[{type:"text",content:"A struct is a collection of fields (data members) used to define a custom data type."},{type:"text",content:"**Defining and Using Structs:**"},{type:"code",language:"go",content:`package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func main() {
	p := Person{Name: "Alice", Age: 25}
	fmt.Println(p.Name, p.Age)
}`}]},{id:"gb-5",question:"What are interfaces in Golang?",answer:[{type:"text",content:"Interfaces define method signatures that types must implement. They enable polymorphism."},{type:"text",content:"**Example of an Interface:**"},{type:"code",language:"go",content:`package main

import "fmt"

type Speaker interface {
	Speak() string
}

type Dog struct{}

func (d Dog) Speak() string {
	return "Woof!"
}

func main() {
	var s Speaker = Dog{}
	fmt.Println(s.Speak())
}`}]},{id:"gb-6",question:"What is the difference between pass-by-value and pass-by-reference in Golang?",answer:[{type:"text",content:"**Pass-by-Value:** A copy of the variable is passed to a function."},{type:"text",content:"**Pass-by-Reference:** A pointer to the original variable is passed, allowing modifications."},{type:"text",content:"**Example of pass-by-value:**"},{type:"code",language:"go",content:`package main

import "fmt"

func modify(x int) {
	x = 100
}

func main() {
	n := 10
	modify(n)
	fmt.Println(n) // Output: 10 (unchanged)
}`}]},{id:"gb-7",question:"What are maps in Golang?",answer:[{type:"text",content:"Maps are key-value data structures similar to hash tables."},{type:"text",content:"**Example of using a map:**"},{type:"code",language:"go",content:`package main

import "fmt"

func main() {
	m := map[string]int{"Alice": 25, "Bob": 30}
	fmt.Println(m["Alice"])
}`}]},{id:"gc-1",question:"Explain mutable and immutable types in Golang. Are strings and other types mutable? Provide examples.",answer:[{type:"text",content:"Mutable types can be modified after creation, whereas immutable types cannot be changed once assigned."},{type:"text",content:"**Immutable Types in Golang:**"},{type:"list",items:["Strings (`string`) - Once created, their value cannot be modified.","Numbers (`int`, `float`, `complex`) - These are copied when assigned."]},{type:"text",content:"**Mutable Types in Golang:**"},{type:"list",items:["Slices (`[]T`) - Can be resized and modified.","Maps (`map[T]T`) - Can add/remove/update key-value pairs.","Pointers (`*T`) - Allow modification of referenced data.","Structs (`struct`) - Fields can be modified (except when using pointers to them)."]},{type:"text",content:"**Example: Strings are immutable in Golang**"},{type:"code",language:"go",content:`package main

import "fmt"

func main() {
	s := "hello"
	// s[0] = 'H' // This will cause an error as strings are immutable
	s = "Hello" // This is allowed (creates a new string)
	fmt.Println(s)
}`}]},{id:"gc-2",question:"Explain call by value and call by reference with examples in Golang.",answer:[{type:"text",content:"**Call by Value:** A copy of the argument is passed to the function, meaning changes inside the function do not affect the original variable."},{type:"text",content:"**Example of Call by Value:**"},{type:"code",language:"go",content:`package main

import "fmt"

func modify(x int) {
	x = 100 // This modifies a copy, not the original variable
}

func main() {
	n := 10
	modify(n)
	fmt.Println(n) // Output: 10 (unchanged)
}`}]},{id:"gc-3",question:"Explain call by reference with an example.",answer:[{type:"text",content:"**Call by Reference:** A pointer to the argument is passed to the function, allowing modification of the original variable."},{type:"text",content:"**Example of Call by Reference:**"},{type:"code",language:"go",content:`package main

import "fmt"

func modifyPointer(x *int) {
	*x = 100 // Modifies the original variable
}

func main() {
	n := 10
	modifyPointer(&n) // Passing memory address
	fmt.Println(n) // Output: 100 (modified)
}`}]},{id:"be-3",question:"How does garbage collection work in Golang compared to C#?",answer:[{type:"text",content:"Garbage collection (GC) is the process of automatically reclaiming memory occupied by objects that are no longer in use. Both Golang and C# use garbage collection, but they have different approaches to it."},{type:"text",content:"**Garbage Collection in Golang:**"},{type:"list",items:["Golang uses a **concurrent, non-blocking garbage collector** to minimize pause times and improve performance.","It focuses on **low-latency** garbage collection to make it suitable for real-time applications.","The GC runs in the background and works in **multiple small steps** to avoid stopping the entire application.","It uses a **tri-color marking algorithm** that classifies objects as **white, gray, or black** to track object reachability efficiently.","Since Go does not have manual memory management (like C or C++), developers rely on GC to handle memory cleanup automatically.","Objects are automatically deallocated when they are no longer reachable."]},{type:"text",content:"**Garbage Collection in C#:**"},{type:"list",items:["C# uses a **generational garbage collector**, which divides objects into **three generations** (Gen 0, Gen 1, Gen 2).","Objects that survive multiple collections move to higher generations (long-lived objects reside in Gen 2).","The GC in C# is **managed by the Common Language Runtime (CLR)**, and developers can trigger collection using `GC.Collect()`, though it's usually not recommended.","Uses a **mark-and-sweep algorithm** similar to Go but is optimized with generational heuristics.","Supports **finalizers** (`~ClassName()`) for custom cleanup, but they should be used cautiously as they impact performance.","Provides **manual memory management** via `IDisposable` and `using` statements for deterministic cleanup of resources (e.g., database connections, file streams)."]},{type:"text",content:"**Key Differences:**"},{type:"list",items:["Golang's GC is **designed for low-latency applications**, whereas C#'s GC is **optimized for long-running applications**.","C# has a **generational garbage collector**, while Go uses a **concurrent, tri-color marking algorithm**.","C# allows **manual memory management (IDisposable, `GC.Collect()`)**, while Go strictly relies on automatic GC.","Golang's GC is optimized for **server-side performance**, whereas C#'s GC is highly optimized for **desktop, cloud, and enterprise applications**."]},{type:"text",content:"In summary, Golang focuses on minimizing pause times to improve concurrency, while C#'s generational GC optimizes memory management for different object lifetimes."}]},{id:"be-4",question:"Discuss asynchronous programming in C# and Golang (async/await, goroutines).",answer:[{type:"text",content:"Asynchronous programming allows tasks to run concurrently without blocking the main execution thread, improving performance and responsiveness. C# and Golang have different approaches to handling concurrency and asynchronous operations."},{type:"text",content:"**Asynchronous Programming in C# (async/await):**"},{type:"list",items:["C# uses the **async/await** pattern to handle asynchronous operations.","The `Task` and `Task<T>` types represent asynchronous operations that can run in the background.","The `await` keyword allows code execution to pause and resume without blocking the main thread.","Uses the **Thread Pool** for managing multiple tasks efficiently.","Asynchronous programming in C# is useful for **I/O-bound operations** like database calls, network requests, and file operations."]},{type:"code",language:"csharp",content:`using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        Console.WriteLine("Start");
        string result = await FetchData();
        Console.WriteLine(result);
        Console.WriteLine("End");
    }

    static async Task<string> FetchData()
    {
        await Task.Delay(2000); // Simulate async work
        return "Data received";
    }
}`},{type:"text",content:"**Asynchronous Programming in Golang (Goroutines):**"},{type:"list",items:["Golang uses **goroutines**, which are lightweight threads managed by the Go runtime.","Unlike OS threads, goroutines use less memory and allow thousands of tasks to run concurrently.","The `go` keyword is used to start a new goroutine.","Channels (`chan`) are used to communicate safely between goroutines.","Ideal for **CPU-bound** and **network-intensive** operations."]},{type:"code",language:"go",content:`package main

import (
    "fmt"
    "time"
)

func fetchData(ch chan string) {
    time.Sleep(2 * time.Second) // Simulate async work
    ch <- "Data received"
}

func main() {
    fmt.Println("Start")
    ch := make(chan string)
    go fetchData(ch)
    result := <-ch
    fmt.Println(result)
    fmt.Println("End")
}`},{type:"text",content:"**Key Differences:**"},{type:"list",items:["C# uses **async/await with Tasks**, while Golang uses **goroutines and channels**.","C#'s **Thread Pool** manages threads, whereas Golang’s **runtime scheduler** manages goroutines.","Goroutines are **lighter and more efficient** than C# tasks, making them suitable for high-concurrency applications.","C#'s `await` helps avoid blocking the main thread, whereas Go relies on **channels and synchronization** for communication.","C# is more structured for **asynchronous I/O operations**, while Go excels at **parallel execution and concurrency control**."]},{type:"text",content:"In summary, C#'s async/await is designed for easier asynchronous coding in **I/O-bound** applications, while Go's goroutines provide a more **lightweight and efficient** concurrency model for **highly concurrent** systems."}]},{id:"be-6",question:"What are the benefits of using Golang for backend services compared to C#? (Including memory usage and footprint comparison)",answer:[{type:"text",content:"Golang and C# both offer strong backend capabilities, but they differ in terms of memory consumption, execution speed, and deployment footprint. Below is a detailed comparison."},{type:"text",content:"**1. Performance & Execution Speed**"},{type:"list",items:["Golang is **compiled directly to native machine code**, making it faster at execution than C#'s **JIT (Just-In-Time) compilation** in .NET.","C# runs on the **.NET runtime**, which adds some overhead but provides benefits like runtime optimizations and garbage collection."]},{type:"text",content:"**2. Memory Usage & Garbage Collection**"},{type:"list",items:["Golang’s **garbage collector (GC)** is optimized for **low-latency, high-throughput** applications with **short pauses**.","C#'s **.NET GC** is powerful but can cause **longer pauses** in high-memory applications due to **heap compaction and generational collection**.","Go’s memory model avoids **heap fragmentation**, making it more predictable in **containerized environments**."]},{type:"text",content:"**3. Deployment & Binary Size**"},{type:"list",items:["Golang compiles into a **single static binary** with no external dependencies, making deployment easy.","A **Golang binary** typically ranges between **5-15 MB**, depending on the project.","C# applications depend on **.NET runtime (CoreCLR or Mono)**, which increases the size.","A self-contained **C# .NET Core application** can range from **50-100 MB+** when bundled with runtime dependencies."]},{type:"text",content:"**4. Memory Footprint in Real-World Usage**"},{type:"list",items:["A simple **Hello World** app in Go uses **1-2 MB RAM**, while in C# .NET, it starts at **15-30 MB RAM** due to runtime overhead.","Go’s **HTTP server** consumes around **5-10 MB RAM** under load, while an equivalent ASP.NET Core service may require **50-100 MB+ RAM**.","For **high-concurrency services**, Go’s lightweight **goroutines** allow handling **millions of requests** with lower memory usage compared to C#'s **ThreadPool-based tasks**."]},{type:"text",content:"**5. Containerization & Cloud Deployment**"},{type:"list",items:["Go's small footprint makes it ideal for **Docker and Kubernetes**, with **small container images (~10-20 MB)**.","C# applications packaged in Docker often require **Alpine (~80-100 MB) or Debian (~200-300 MB)** base images to include the .NET runtime.","Golang is preferred for **serverless functions** and cloud-native applications due to its **low memory consumption**."]},{type:"text",content:"**Key Takeaways:**"},{type:"list",items:["**Use Golang if:** You need a lightweight, fast, and highly efficient backend with **minimal memory consumption and small deployment size**.","**Use C# if:** You require a feature-rich backend with **robust framework support**, even at the cost of a **larger memory footprint and dependency on .NET runtime**."]},{type:"text",content:"In summary, Golang is a better choice for high-performance microservices, cloud-native applications, and low-latency APIs, while C# excels in enterprise solutions where rich ecosystem support and framework capabilities matter more."}]},{id:"be-7",question:"Explain Rate Limiting and how to implement it in a Golang-based microservice.",answer:[{type:"text",content:"Rate limiting is a technique used to control the number of requests a client can make to a server in a given time period. It helps prevent abuse, maintain service availability, and ensure fair usage of resources."},{type:"text",content:"**Common Rate Limiting Strategies:**"},{type:"list",items:["**Token Bucket**: Clients acquire tokens before making requests. Requests are denied if tokens are exhausted.","**Leaky Bucket**: Requests are processed at a fixed rate, and excess requests are queued.","**Fixed Window**: Limits requests within a specific time window (e.g., 100 requests per minute).","**Sliding Window**: More dynamic than fixed window; calculates limits based on the recent request history."]},{type:"text",content:"**Rate Limiting Implementation in Golang**"},{type:"text",content:"Below is a Golang example implementing rate limiting using the `golang.org/x/time/rate` package, which provides an efficient token bucket algorithm."},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"log"
	"net/http"
	"sync"
	"time"

	"golang.org/x/time/rate"
)

// RateLimiter struct for per-client rate limiting
type RateLimiter struct {
	clients map[string]*rate.Limiter
	mutex   sync.Mutex
	rate  rate.Limit
	burst int
}

// NewRateLimiter initializes a new rate limiter
func NewRateLimiter(r rate.Limit, b int) *RateLimiter {
	return &RateLimiter{
		clients: make(map[string]*rate.Limiter),
		rate:    r,
		burst:   b,
	}
}

// GetLimiter retrieves or creates a rate limiter for a client
func (rl *RateLimiter) GetLimiter(ip string) *rate.Limiter {
	rl.mutex.Lock()
	defer rl.mutex.Unlock()

	if limiter, exists := rl.clients[ip]; exists {
		return limiter
	}

	limiter := rate.NewLimiter(rl.rate, rl.burst)
	rl.clients[ip] = limiter
	return limiter
}

func main() {
	rl := NewRateLimiter(1, 5) // 1 request per second, burst of 5

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		ip := r.RemoteAddr
		limiter := rl.GetLimiter(ip)

		if !limiter.Allow() {
			http.Error(w, "429 Too Many Requests", http.StatusTooManyRequests)
			return
		}

		fmt.Fprintln(w, "Request successful")
	})

	log.Println("Starting server on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}`},{type:"text",content:"**How It Works:**"},{type:"list",items:["Each client is identified by their **IP address**.","A **token bucket rate limiter** is created for each client.","If the client **exceeds the request limit**, they receive a **429 Too Many Requests** response.","The limit is set to **1 request per second** with a burst capacity of **5 requests**."]},{type:"text",content:"**Alternative Implementations:**"},{type:"list",items:["Use **Redis-based rate limiting** for distributed systems (`github.com/go-redis/redis/v8`).","Use **nginx or API Gateway** for rate limiting before requests reach the backend.","Implement a **Sliding Window Counter** using a database like PostgreSQL."]},{type:"text",content:"Rate limiting is crucial for protecting microservices from abuse and ensuring fair resource usage. In high-scale systems, it's recommended to use a distributed rate limiter backed by **Redis** or an API gateway like **Kong or Envoy**."}]},{id:"be-8",question:"How do you secure APIs using OAuth, JWT, or API keys?",answer:[{type:"text",content:"Securing APIs is essential to prevent unauthorized access and data breaches. Common authentication and authorization mechanisms include OAuth, JWT, and API Keys."},{type:"text",content:"**1. OAuth 2.0**"},{type:"list",items:["OAuth 2.0 is an open standard for access delegation, commonly used to grant third-party applications limited access to user data.","It uses **Access Tokens** to authenticate API requests.","OAuth supports **authorization flows** such as Authorization Code, Client Credentials, and Password Grant."]},{type:"text",content:"**Example: Implementing OAuth 2.0 in Golang with `oauth2` package**"},{type:"code",language:"go",content:`package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"golang.org/x/oauth2"
)

var googleOauthConfig = &oauth2.Config{
	ClientID:     "your-client-id",
	ClientSecret: "your-client-secret",
	RedirectURL:  "http://localhost:8080/callback",
	Scopes:       []string{"profile", "email"},
	Endpoint:     oauth2.Endpoint{
		AuthURL:  "https://accounts.google.com/o/oauth2/auth",
		TokenURL: "https://oauth2.googleapis.com/token",
	},
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	url := googleOauthConfig.AuthCodeURL("state-token", oauth2.AccessTypeOffline)
	http.Redirect(w, r, url, http.StatusFound)
}

func callbackHandler(w http.ResponseWriter, r *http.Request) {
	code := r.URL.Query().Get("code")
	token, err := googleOauthConfig.Exchange(context.Background(), code)
	if err != nil {
		log.Println("Failed to get token:", err)
		return
	}
	fmt.Fprintf(w, "Access Token: %s", token.AccessToken)
}

func main() {
	http.HandleFunc("/login", loginHandler)
	http.HandleFunc("/callback", callbackHandler)
	log.Println("Server started at :8080")
	http.ListenAndServe(":8080", nil)
}`},{type:"text",content:"**2. JSON Web Token (JWT)**"},{type:"list",items:["JWT is a compact, self-contained token format that encodes user claims and authentication data.","It consists of **Header, Payload, and Signature**.","JWTs are signed using HMAC or RSA to ensure integrity."]},{type:"text",content:"**Example: JWT Authentication in Golang using `github.com/golang-jwt/jwt/v4`**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"github.com/golang-jwt/jwt/v4"
	"net/http"
	"time"
)

var secretKey = []byte("your-secret-key")

func generateJWT() (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user": "admin",
		"exp":  time.Now().Add(time.Hour * 1).Unix(),
	})
	return token.SignedString(secretKey)
}

func jwtMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		tokenString := r.Header.Get("Authorization")
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		})
		if err != nil || !token.Valid {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func protectedEndpoint(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Access granted to protected resource")
}

func main() {
	http.Handle("/protected", jwtMiddleware(http.HandlerFunc(protectedEndpoint)))
	http.ListenAndServe(":8080", nil)
}`},{type:"text",content:"**3. API Keys Authentication**"},{type:"list",items:["API Keys are simple authentication tokens passed in HTTP headers or query parameters.","They are commonly used for **service-to-service communication**.","API Keys should be **revocable and scoped** to control access."]},{type:"text",content:"**Example: API Key Middleware in Golang**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"net/http"
)

var validAPIKey = "your-api-key"

func apiKeyMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		apiKey := r.Header.Get("X-API-Key")
		if apiKey != validAPIKey {
			http.Error(w, "Forbidden", http.StatusForbidden)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func protectedHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "API Key authentication successful")
}

func main() {
	http.Handle("/secure", apiKeyMiddleware(http.HandlerFunc(protectedHandler)))
	http.ListenAndServe(":8080", nil)
}`},{type:"text",content:"**Choosing the Right Authentication Method:**"},{type:"list",items:["**OAuth 2.0**: Best for user authentication in third-party integrations (e.g., Google, Facebook login).","**JWT**: Ideal for securing API endpoints in microservices without needing session storage.","**API Keys**: Useful for machine-to-machine authentication but should be used with caution due to security risks."]},{type:"text",content:"A combination of these methods can be used to enhance API security, e.g., using **OAuth for user login** and **JWT for API authorization**."}]},{id:"be-9",question:"How does goroutine scheduling work in Golang? How does it differ from OS threads?",answer:[{type:"text",content:"Goroutines are lightweight, managed by the Go runtime, and allow concurrent execution. Unlike OS threads, goroutines have minimal memory overhead and can scale efficiently."},{type:"text",content:"**Goroutine Scheduling:**"},{type:"list",items:["Golang uses **Goroutine Scheduler** to map thousands of goroutines onto a small number of OS threads.","The scheduler is **non-preemptive** but can yield execution during function calls and specific points (e.g., I/O operations).","It follows a **work-stealing** strategy where idle processors (P) take work from busy ones.","Each OS thread (M) is bound to a user-level scheduler (P) managing a pool of goroutines."]},{type:"text",content:"**Differences between Goroutines and OS Threads:**"},{type:"list",items:["**Goroutines:** Small stack (~2KB), dynamically grows; managed by Go runtime.","**OS Threads:** Large stack (~1MB), fixed size; managed by the operating system.","**Goroutines:** Multiplexed over OS threads, allowing millions of goroutines.","**OS Threads:** Limited in number due to resource constraints."]}]},{id:"be-10",question:"Explain channels vs. mutexes. When would you use one over the other?",answer:[{type:"text",content:"Channels and mutexes are synchronization primitives in Golang."},{type:"text",content:"**Channels:**"},{type:"list",items:["Used for **message passing** between goroutines.","Avoids shared memory, enabling safe concurrent programming.","Synchronous (blocking) or asynchronous (buffered) communication."]},{type:"text",content:"**Mutexes:**"},{type:"list",items:["Used for **mutual exclusion** (locking shared data).","Provides fine-grained control over shared resources.","More efficient for protecting small, frequently accessed variables."]},{type:"text",content:"**When to use which?**"},{type:"list",items:["Use **channels** when you want to pass ownership of data instead of locking it.","Use **mutexes** when multiple goroutines need to modify a shared variable safely."]},{type:"text",content:"**Example: Channel-based synchronization**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"sync"
)

func main() {
	ch := make(chan int)

	go func() {
		ch <- 42 // Send data to channel
	}()

	fmt.Println(<-ch) // Receive data from channel
}`},{type:"text",content:"**Example: Mutex-based synchronization**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"sync"
)

var counter int
var mu sync.Mutex

func increment(wg *sync.WaitGroup) {
	defer wg.Done()
	mu.Lock()
	counter++
	mu.Unlock()
}

func main() {
	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go increment(&wg)
	}
	wg.Wait()
	fmt.Println("Final Counter:", counter)
}`}]},{id:"be-11",question:"What are defer, panic, and recover in Golang? How do they work?",answer:[{type:"text",content:"In Golang, `defer`, `panic`, and `recover` are mechanisms for handling cleanup and error recovery."},{type:"text",content:"**1. Defer:**"},{type:"list",items:["Used to schedule a function to execute **after** the surrounding function returns.","Useful for **resource cleanup** (closing files, unlocking mutexes, etc.)."]},{type:"text",content:"**Example of defer:**"},{type:"code",language:"go",content:`package main

import "fmt"

func main() {
	defer fmt.Println("This will execute last")
	fmt.Println("This executes first")
}`},{type:"text",content:"**2. Panic:**"},{type:"list",items:["Used to **abort execution** immediately.","Typically used for **critical errors** like accessing an invalid memory location."]},{type:"text",content:"**Example of panic:**"},{type:"code",language:"go",content:`package main

import "fmt"

func main() {
	fmt.Println("Before panic")
	panic("Something went wrong!")
	fmt.Println("This will not execute")
}`},{type:"text",content:"**3. Recover:**"},{type:"list",items:["Used inside `defer` to **catch a panic** and prevent program crash.","Returns `nil` if no panic occurs."]},{type:"text",content:"**Example of recover:**"},{type:"code",language:"go",content:`package main

import "fmt"

func main() {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Recovered from panic:", r)
		}
	}()
	panic("Something went wrong!")
}`}]},{id:"be-12",question:"How would you implement worker pools in Golang?",answer:[{type:"text",content:"Worker pools are a pattern used to control concurrency by limiting the number of goroutines processing tasks."},{type:"text",content:"**Steps to implement a worker pool:**"},{type:"list",items:["Create a buffered channel for tasks.","Spawn a fixed number of worker goroutines.","Each worker fetches and processes tasks from the channel.","Close the channel when all tasks are dispatched."]},{type:"text",content:"**Example of a Worker Pool in Golang:**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"sync"
	"time"
)

func worker(id int, jobs <-chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	for job := range jobs {
		fmt.Printf("Worker %d processing job %d\\n", id, job)
		time.Sleep(time.Second)
	}
}

func main() {
	jobs := make(chan int, 5)
	var wg sync.WaitGroup

	// Create worker pool
	for i := 1; i <= 3; i++ {
		wg.Add(1)
		go worker(i, jobs, &wg)
	}

	// Send jobs to channel
	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	close(jobs)

	wg.Wait()
}`}]},{id:"be-13",question:"Explain context package in Golang. How do you use it for request cancellation?",answer:[{type:"text",content:"The `context` package in Golang provides a way to manage request deadlines, cancellations, and timeouts across API calls and goroutines."},{type:"text",content:"**Key Features:**"},{type:"list",items:["Allows request **cancellation** to prevent resource leaks.","Supports **timeouts** and **deadlines**.","Enables **passing metadata** between function calls."]},{type:"text",content:"**Example: Using context for request cancellation**"},{type:"code",language:"go",content:`package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel() // Ensure cleanup

	go func(ctx context.Context) {
		for {
			select {
			case <-ctx.Done():
				fmt.Println("Request canceled")
				return
			default:
				fmt.Println("Processing...")
				time.Sleep(500 * time.Millisecond)
			}
		}
	}(ctx)

time.Sleep(3 * time.Second)
}`}]},{id:"be-14",question:"How do you handle race conditions in a concurrent Golang application?",answer:[{type:"text",content:"Race conditions occur when multiple goroutines access shared data simultaneously, leading to unpredictable behavior."},{type:"text",content:"**Ways to Prevent Race Conditions:**"},{type:"list",items:["Use **sync.Mutex** to lock shared data.","Use **channels** to control access.","Use **sync/atomic** for atomic operations.","Use **Go's race detector** (`go run -race`)."]},{type:"text",content:"**Example: Using Mutex to prevent race conditions**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"sync"
)

var count int
var mu sync.Mutex

func increment(wg *sync.WaitGroup) {
	defer wg.Done()
	mu.Lock()
	count++
	mu.Unlock()
}

func main() {
	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go increment(&wg)
	}
	wg.Wait()
	fmt.Println("Final Count:", count)
}`}]},{id:"be-15",question:"What are interface types, and how does Golang’s interface system differ from C#’s?",answer:[{type:"text",content:"**Golang Interfaces:**"},{type:"list",items:["Interfaces define **behavior** rather than **inheritance**.","A type **implicitly** satisfies an interface if it implements the required methods.","Interfaces allow **decoupled code** and **mocking** in tests."]},{type:"text",content:"**Difference from C# Interfaces:**"},{type:"list",items:["**Golang:** Implicit implementation (structs automatically satisfy interfaces).","**C#:** Explicit implementation using `interface` keyword.","**Golang:** No need to declare an interface in the struct.","**C#:** Classes must explicitly declare they implement an interface."]},{type:"text",content:"**Example of Golang Interface:**"},{type:"code",language:"go",content:`package main

import "fmt"

type Animal interface {
	Speak() string
}

type Dog struct {}

func (d Dog) Speak() string {
	return "Woof!"
}

func main() {
	var a Animal = Dog{}
	fmt.Println(a.Speak())
}`}]},{id:"be-16",question:"How does dependency injection work in Golang?",answer:[{type:"text",content:"Dependency Injection (DI) is a design pattern where dependencies are **injected** instead of being created inside a struct."},{type:"text",content:"**DI Approaches in Golang:**"},{type:"list",items:["Using **constructor functions**.","Passing **interfaces instead of concrete types**.","Using **third-party DI libraries** (e.g., `uber-go/fx`, `wire`)."]},{type:"text",content:"**Example: Constructor-based DI**"},{type:"code",language:"go",content:`package main

import "fmt"

type Service struct {
	message string
}

func NewService(msg string) *Service {
	return &Service{message: msg}
}

func main() {
	service := NewService("Hello, DI!")
	fmt.Println(service.message)
}`}]},{id:"be-17",question:"How do you design a highly available, scalable Golang microservice?",answer:[{type:"text",content:"**Best Practices for Scalable Microservices:**"},{type:"list",items:["Use **stateless** services with shared databases or caches.","Implement **load balancing** (e.g., Nginx, HAProxy).","Use **goroutines and channels** for concurrency.","Apply **caching** (Redis, Memcached) to reduce DB load.","Implement **rate limiting** to prevent abuse.","Use **Docker and Kubernetes** for containerization and orchestration."]},{type:"text",content:"**Example: Goroutine-based request handling**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello, Microservice!")
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}`}]},{id:"be-18",question:"Explain the difference between struct embedding and inheritance in Golang.",answer:[{type:"text",content:"**Golang does not support classical inheritance** like C++ or Java but uses **struct embedding** for composition."},{type:"text",content:"**Struct Embedding:**"},{type:"list",items:["Allows code reuse without a strict parent-child hierarchy.","Encapsulates behavior while avoiding deep inheritance chains.","Methods of the embedded struct are promoted to the outer struct."]},{type:"text",content:"**Example of Struct Embedding:**"},{type:"code",language:"go",content:`package main

import "fmt"

type Engine struct {
	Horsepower int
}

type Car struct {
	Engine // Embedded struct
	Brand string
}

func main() {
	c := Car{Engine{250}, "Toyota"}
	fmt.Println("Car brand:", c.Brand, "Horsepower:", c.Horsepower)
}`}]},{id:"be-13",question:"What are best practices for logging and monitoring in Golang applications?",answer:[{type:"text",content:"Logging and monitoring are essential for observability in Golang applications. Here are best practices:"},{type:"text",content:"**Best Practices for Logging:**"},{type:"list",items:["Use structured logging with libraries like `logrus` or `zap`.","Log at appropriate levels: `Debug`, `Info`, `Warning`, `Error`, and `Fatal`.","Include contextual information (e.g., request ID, user ID).","Write logs in JSON format for easy parsing.","Avoid logging sensitive information (passwords, API keys)."]},{type:"text",content:"**Example using logrus:**"},{type:"code",language:"go",content:`package main

import (
	"github.com/sirupsen/logrus"
)

func main() {
	log := logrus.New()
	log.SetFormatter(&logrus.JSONFormatter{})
	log.Info("Application started")
}`},{type:"text",content:"**Best Practices for Monitoring:**"},{type:"list",items:["Use Prometheus for metrics collection.","Track key performance indicators (latency, request count, errors).","Use distributed tracing (e.g., OpenTelemetry, Jaeger).","Monitor logs centrally with ELK (Elasticsearch, Logstash, Kibana) or Loki."]}]},{id:"be-14",question:"How do you implement retry logic with exponential backoff in Golang?",answer:[{type:"text",content:"Retry logic with exponential backoff helps in handling transient failures by delaying retries progressively."},{type:"text",content:"**Steps to implement exponential backoff:**"},{type:"list",items:["Define maximum retries and initial delay.","Double the delay after each failed attempt.","Introduce jitter to avoid synchronized retries.","Stop retrying after a maximum number of attempts."]},{type:"text",content:"**Example using exponential backoff in Golang:**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"math/rand"
	"time"
)

func retryWithBackoff(attempts int, baseDelay time.Duration) error {
	for i := 0; i < attempts; i++ {
		err := makeRequest()
		if err == nil {
			return nil
		}
		jitter := time.Duration(rand.Intn(100)) * time.Millisecond
		sleepTime := baseDelay * (1 << i) + jitter
		fmt.Println("Retrying in", sleepTime)
		time.Sleep(sleepTime)
	}
	return fmt.Errorf("operation failed after %d attempts", attempts)
}

func makeRequest() error {
	return fmt.Errorf("temporary error")
}

func main() {
	retryWithBackoff(5, 500*time.Millisecond)
}`}]},{id:"be-15",question:"How does Golang handle JSON marshaling and unmarshaling?",answer:[{type:"text",content:"Golang uses the `encoding/json` package to marshal (convert struct to JSON) and unmarshal (convert JSON to struct)."},{type:"text",content:"**Example of JSON marshaling (struct to JSON):**"},{type:"code",language:"go",content:`package main

import (
	"encoding/json"
	"fmt"
)

type User struct {
	Name  string \`json:"name"\`
	Age   int    \`json:"age"\`
	Email string \`json:"email"\`
}

func main() {
	user := User{Name: "Alice", Age: 25, Email: "alice@example.com"}
	jsonData, _ := json.Marshal(user)
	fmt.Println(string(jsonData))
}`},{type:"text",content:"**Example of JSON unmarshaling (JSON to struct):**"},{type:"code",language:"go",content:`package main

import (
	"encoding/json"
	"fmt"
)

type User struct {
	Name  string \`json:"name"\`
	Age   int    \`json:"age"\`
	Email string \`json:"email"\`
}

func main() {
	jsonData := \`{"name": "Bob", "age": 30, "email": "bob@example.com"}\`
	var user User
	json.Unmarshal([]byte(jsonData), &user)
	fmt.Println(user)
}`},{type:"text",content:"**Handling Unknown JSON Fields:**"},{type:"code",language:"go",content:'type Response struct {\n	Data map[string]interface{} `json:"data"`\n}'}]},{id:"be-16",question:"How do you implement WebSockets in a Golang API?",answer:[{type:"text",content:"WebSockets enable real-time communication between clients and a Golang server. The `github.com/gorilla/websocket` package is commonly used."},{type:"text",content:"**Steps to implement WebSockets:**"},{type:"list",items:["Upgrade HTTP requests to WebSocket connections.","Handle WebSocket messages in a loop.","Gracefully close the connection when the client disconnects."]},{type:"text",content:"**Example WebSocket server in Golang:**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"net/http"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

func handleWebSocket(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println("Error upgrading connection:", err)
		return
	}
	defer conn.Close()

	for {
		messageType, msg, err := conn.ReadMessage()
		if err != nil {
			fmt.Println("Error reading message:", err)
			break
		}
		fmt.Println("Received:", string(msg))
		conn.WriteMessage(messageType, []byte("Hello from server!"))
	}
}

func main() {
	http.HandleFunc("/ws", handleWebSocket)
	http.ListenAndServe(":8080", nil)
}`}]}];export{e as default};
