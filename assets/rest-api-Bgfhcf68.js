const e=[{id:"6557093a-1eae-4cba-b153-f4993aff66bd",question:"What is a REST API?",answer:`\`\`\`markdown A **REST API** (Representational State Transfer Application Programming Interface) is a way for different software applications to communicate over the internet using standard HTTP methods like GET, POST, PUT, and DELETE. REST APIs follow a set of rules that make them easy to use and understand. They allow clients (such as web or mobile apps) to interact with servers to create, read, update, or delete data.

**Key points about REST APIs:**

- They use standard HTTP methods.
- Data is usually sent and received in formats like JSON or XML.
- Each resource (such as a user or product) is identified by a unique URL.
- REST APIs are stateless, meaning each request contains all the information needed to process it.

**Example:**  
A REST API endpoint to get a list of users might look like this:
\`\`\`
GET https://api.example.com/users
\`\`\`

In C#, you can use libraries like \`HttpClient\` to interact with REST APIs.`,level:"Beginner"},{id:"e5d71072-62f7-434c-8f24-fb66a3600a6a",question:"How do you create a simple REST API in C# using ASP.NET Core?",answer:`\`\`\`markdown To create a simple REST API in C# using ASP.NET Core, follow these steps:

### 1. Create a New ASP.NET Core Web API Project

\`\`\`bash
dotnet new webapi -n SimpleApi
cd SimpleApi
\`\`\`

### 2. Define a Model

Create a new file called \`TodoItem.cs\` in the \`Models\` folder:

\`\`\`csharp
namespace SimpleApi.Models
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }
    }
}
\`\`\`

### 3. Create a Controller

Create a new file called \`TodoController.cs\` in the \`Controllers\` folder:

\`\`\`csharp
using Microsoft.AspNetCore.Mvc;
using SimpleApi.Models;
using System.Collections.Generic;

namespace SimpleApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private static List<TodoItem> items = new List<TodoItem>
        {
            new TodoItem { Id = 1, Name = "Learn ASP.NET Core", IsComplete = false }
        };

        [HttpGet]
        public ActionResult<IEnumerable<TodoItem>> GetAll()
        {
            return items;
        }

        [HttpGet("{id}")]
        public ActionResult<TodoItem> GetById(long id)
        {
            var item = items.Find(x => x.Id == id);
            if (item == null) return NotFound();
            return item;
        }

        [HttpPost]
        public ActionResult<TodoItem> Create(TodoItem item)
        {
            item.Id = items.Count + 1;
            items.Add(item);
            return CreatedAtAction(nameof(GetById), new { id = item.Id }, item);
        }
    }
}
\`\`\`

### 4. Run the API

\`\`\`bash
dotnet run
\`\`\`

The API will be available at \`https://localhost:5001/api/todo\`.

### 5. Test the API

You can use tools like [Postman](https://www.postman.com/) or \`curl\` to test your endpoints:

- **GET all:** \`GET https://localhost:5001/api/todo\`
- **GET by id:** \`GET https://localhost:5001/api/todo/1\`
- **POST new:**  
  \`\`\`bash
  curl -X POST https://localhost:5001/api/todo -H "Content-Type: application/json" -d '{"name":"Write docs","isComplete":false}'
  \`\`\`

---

**Summary:**  
You’ve created a simple REST API in C# using ASP.NET Core by defining a model, creating a controller, and running the application. This basic structure can be expanded for more complex APIs.`,level:"Beginner"},{id:"deb0d3d4-bae7-4a69-bc41-7c38dc06aaf9",question:"What are HTTP verbs and how are they used in REST APIs?",answer:`\`\`\`markdown HTTP verbs are methods used in HTTP requests to indicate the desired action to be performed on a resource. In REST APIs, these verbs define the type of operation you want to perform on the data. The most commonly used HTTP verbs are:

- **GET**: Retrieves data from the server. For example, fetching a list of users.
- **POST**: Creates a new resource on the server. For example, adding a new user.
- **PUT**: Updates an existing resource entirely. For example, replacing a user's information.
- **PATCH**: Partially updates an existing resource. For example, updating only the user's email.
- **DELETE**: Removes a resource from the server. For example, deleting a user.

**Example in C#:**

\`\`\`csharp
// Example using HttpClient to send a GET request
using (var client = new HttpClient())
{
    HttpResponseMessage response = await client.GetAsync("https://api.example.com/users");
    string responseBody = await response.Content.ReadAsStringAsync();
}
\`\`\`

In summary, HTTP verbs are essential in REST APIs as they specify what kind of operation you want to perform on the resources exposed by the API.`,level:"Beginner"},{id:"b40e0ce6-7c36-46d3-864d-084c5b66c0ba",question:"What is the difference between GET, POST, PUT, and DELETE methods?",answer:`\`\`\`markdown **GET, POST, PUT, and DELETE** are HTTP methods commonly used in REST APIs to perform different operations on resources:

| Method  | Purpose                                 | Description                                                                 |
|---------|-----------------------------------------|-----------------------------------------------------------------------------|
| GET     | Retrieve data                           | Requests data from a server. Does not modify data.                          |
| POST    | Create new data                         | Sends data to the server to create a new resource.                          |
| PUT     | Update existing data (replace)          | Updates or replaces an existing resource with new data.                     |
| DELETE  | Remove data                             | Deletes a specified resource from the server.                               |

**Example: Managing a list of users**

- \`GET /users\` — Get the list of users.
- \`POST /users\` — Add a new user.
- \`PUT /users/1\` — Update user with ID 1.
- \`DELETE /users/1\` — Delete user with ID 1.

**Summary Table**

| Method  | Action         | Safe | Idempotent |
|---------|----------------|------|------------|
| GET     | Read           | Yes  | Yes        |
| POST    | Create         | No   | No         |
| PUT     | Update/Replace | No   | Yes        |
| DELETE  | Delete         | No   | Yes        |

- **Safe**: Does not change server data.
- **Idempotent**: Same request can be repeated with the same result.`,level:"Beginner"},{id:"1cd73cf9-af87-4cba-919c-80478f234151",question:"How do you define a route in an ASP.NET Core controller?",answer:`\`\`\`markdown
In ASP.NET Core, you define a route in a controller using attributes. The most common way is to use the \`[Route]\` attribute at the controller or action method level. Here’s a simple example:

\`\`\`csharp
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    // GET api/products
    [HttpGet]
    public IActionResult GetAll()
    {
        // Your code here
        return Ok();
    }

    // GET api/products/5
    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        // Your code here
        return Ok();
    }
}
\`\`\`

**Explanation:**
- \`[Route("api/[controller]")]\` sets the base route for the controller. \`[controller]\` is replaced by the controller's name (without "Controller"), so this becomes \`api/products\`.
- \`[HttpGet]\` and \`[HttpGet("{id}")]\` define routes for the action methods. The \`{id}\` is a route parameter.

You can also define custom routes directly on action methods using the \`[Route]\` attribute.
\`\`\``,level:"Beginner"},{id:"09d2edf5-d4b6-4286-aa1f-753f559fd914",question:"What is model binding in ASP.NET Core?",answer:`\`\`\`markdown **Model binding** in ASP.NET Core is the process by which the framework automatically maps data from HTTP requests (such as form fields, query strings, route data, or JSON bodies) to the parameters of your controller action methods or to properties of model objects.

For example, if you have a controller action like this:

\`\`\`csharp
public IActionResult Create(User user)
{
    // The 'user' parameter is automatically populated from the request data
    // ...
}
\`\`\`

ASP.NET Core will automatically create a \`User\` object and populate its properties with values from the incoming request, such as form fields or JSON data, without you having to manually parse the request.

**Key points:**
- Simplifies data handling in controllers.
- Supports binding from various sources (route, query, form, body).
- Handles complex types and collections.

**Example:**
If you send a POST request with JSON body:
\`\`\`json
{
  "Name": "Alice",
  "Age": 30
}
\`\`\`
ASP.NET Core will bind this data to a \`User\` model parameter in your action method.

**In summary:**  
Model binding makes it easy to work with incoming data by automatically converting request data into .NET objects for you.`,level:"Beginner"},{id:"414daeda-b4f1-471e-9707-3a8ef3c7ea51",question:"How do you return JSON data from a controller action?",answer:`\`\`\`markdown To return JSON data from a controller action in a C# ASP.NET Core Web API, you typically return an object from your action method. ASP.NET Core automatically serializes the object to JSON.

Here’s a simple example:

\`\`\`csharp
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class SampleController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var data = new { message = "Hello, World!", value = 123 };
        return Ok(data); // Returns JSON by default
    }
}
\`\`\`

**Explanation:**

- The \`Ok(data)\` method returns a 200 OK response with the data serialized as JSON.
- By default, ASP.NET Core uses JSON for response formatting.

**Tip:**  
You can also use \`return new JsonResult(data);\`, but \`Ok(data)\` is more common and recommended for Web APIs.`,level:"Beginner"},{id:"bd8fb87a-934d-4279-a0e3-45a818a581a6",question:"What is dependency injection and how is it used in ASP.NET Core REST APIs?",answer:`\`\`\`markdown **Dependency Injection (DI)** is a design pattern used to achieve Inversion of Control (IoC) between classes and their dependencies. Instead of a class creating its own dependencies, they are provided (injected) from the outside, making the code more modular, testable, and maintainable.

### How Dependency Injection Works in ASP.NET Core REST APIs

ASP.NET Core has built-in support for dependency injection. Here’s how it’s typically used:

1. **Register Services:**  
   In the \`Startup.cs\` (or \`Program.cs\` in .NET 6+), you register your services with the DI container using methods like \`AddSingleton\`, \`AddScoped\`, or \`AddTransient\`.

   \`\`\`csharp
   services.AddScoped<IMyService, MyService>();
   \`\`\`

2. **Inject Services:**  
   You request (inject) these services via constructor parameters in your controllers or other classes.

   \`\`\`csharp
   public class MyController : ControllerBase
   {
       private readonly IMyService _myService;

       public MyController(IMyService myService)
       {
           _myService = myService;
       }

       // Use _myService in your action methods
   }
   \`\`\`

### Benefits

- **Loose Coupling:** Classes depend on abstractions (interfaces), not concrete implementations.
- **Easier Testing:** You can inject mock implementations for unit testing.
- **Centralized Configuration:** All dependencies are configured in one place.

### Example

\`\`\`csharp
// Define an interface
public interface IWeatherService
{
    string GetForecast();
}

// Implement the interface
public class WeatherService : IWeatherService
{
    public string GetForecast() => "Sunny";
}

// Register in Program.cs (for .NET 6+)
builder.Services.AddScoped<IWeatherService, WeatherService>();

// Inject into a controller
public class WeatherController : ControllerBase
{
    private readonly IWeatherService _weatherService;

    public WeatherController(IWeatherService weatherService)
    {
        _weatherService = weatherService;
    }

    [HttpGet]
    public string Get()
    {
        return _weatherService.GetForecast();
    }
}
\`\`\`

**In summary:**  
Dependency Injection in ASP.NET Core REST APIs allows you to manage and inject dependencies efficiently, leading to cleaner, more maintainable, and testable code.`,level:"Beginner"},{id:"6be63062-f532-47e2-b594-5f48cfd32090",question:"How do you handle errors and exceptions in a REST API?",answer:`\`\`\`markdown
In a C# REST API (for example, using ASP.NET Core), handling errors and exceptions is important to provide meaningful responses to clients and to avoid exposing sensitive information. Here are some common practices:

### 1. Use Exception Handling Middleware

ASP.NET Core provides built-in middleware for handling exceptions globally. You can use the \`UseExceptionHandler\` middleware in your \`Startup.cs\`:

\`\`\`csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseExceptionHandler("/error"); // Redirects to /error on exceptions

    // Other middleware registrations...
}
\`\`\`

Then, create an error-handling endpoint:

\`\`\`csharp
[ApiController]
public class ErrorController : ControllerBase
{
    [Route("error")]
    public IActionResult Error()
    {
        return Problem(); // Returns a standardized error response
    }
}
\`\`\`

### 2. Return Appropriate HTTP Status Codes

When catching exceptions, return the correct HTTP status code. For example:

- \`400 Bad Request\` for invalid input
- \`404 Not Found\` for missing resources
- \`500 Internal Server Error\` for unexpected errors

Example in a controller action:

\`\`\`csharp
[HttpGet("{id}")]
public IActionResult GetItem(int id)
{
    try
    {
        var item = _service.GetItem(id);
        if (item == null)
            return NotFound(); // 404

        return Ok(item); // 200
    }
    catch (ArgumentException)
    {
        return BadRequest(); // 400
    }
    catch (Exception)
    {
        return StatusCode(500, "An unexpected error occurred."); // 500
    }
}
\`\`\`

### 3. Use Problem Details

ASP.NET Core supports [RFC 7807 Problem Details](https://tools.ietf.org/html/rfc7807) for error responses:

\`\`\`csharp
return Problem(
    detail: "The item was not found.",
    statusCode: 404,
    title: "Not Found"
);
\`\`\`

### 4. Logging

Always log exceptions for troubleshooting, but avoid returning stack traces or sensitive details to the client.

### Summary

- Use global exception handling middleware.
- Return appropriate HTTP status codes.
- Use standardized error responses (like Problem Details).
- Log exceptions for diagnostics.

This approach ensures your API is robust, secure, and user-friendly.
\`\`\`
`,level:"Beginner"},{id:"81845aa2-aa4b-411f-b71e-c111e43b9c3b",question:"What is the purpose of the [ApiController] attribute?",answer:`\`\`\`markdown The \`[ApiController]\` attribute in C# is used to indicate that a controller is intended to serve as an API endpoint. When you decorate a controller class with \`[ApiController]\`, it enables several features that make building RESTful APIs easier and more robust:

- **Automatic Model Validation:** The framework automatically checks if the incoming request data is valid according to your model's validation attributes. If not, it returns a 400 Bad Request response.
- **Attribute Routing Requirement:** It enforces the use of attribute routing (e.g., \`[Route("api/[controller]")]\`), which is common in APIs.
- **Binding Source Parameter Inference:** It automatically infers binding sources for action parameters (e.g., \`[FromBody]\`, \`[FromQuery]\`), so you don't always need to specify them explicitly.
- **Problem Details Responses:** It returns standardized error responses (RFC 7807 Problem Details) for common errors.

**Example:**

\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAllProducts()
    {
        // Implementation
    }
}
\`\`\`

**In summary:**  
The \`[ApiController]\` attribute simplifies the development of REST APIs by enabling helpful behaviors and conventions in your controller classes.`,level:"Beginner"},{id:"9094a72b-0631-4059-992f-54b3443892c1",question:"How do you test a REST API endpoint in C#?",answer:`\`\`\`markdown You can test a REST API endpoint in C# using the HttpClient class. Here’s a simple example of how to send a GET request and read the response:

\`\`\`csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using (HttpClient client = new HttpClient())
        {
            // Replace with your API endpoint
            string url = "https://jsonplaceholder.typicode.com/posts/1";

            HttpResponseMessage response = await client.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                string responseBody = await response.Content.ReadAsStringAsync();
                Console.WriteLine("Response:");
                Console.WriteLine(responseBody);
            }
            else
            {
                Console.WriteLine($"Error: {response.StatusCode}");
            }
        }
    }
}
\`\`\`

**Steps:**
1. Create an instance of \`HttpClient\`.
2. Use methods like \`GetAsync\`, \`PostAsync\`, etc., to send requests.
3. Check the response status and read the content.
4. Handle errors as needed.

**Tip:** For more advanced testing, consider using testing frameworks like xUnit or NUnit along with mocking libraries such as Moq.`,level:"Beginner"},{id:"e5180b50-4242-4813-a608-abc2b1aecda4",question:"What is Swagger and how do you use it with ASP.NET Core REST APIs?",answer:`\`\`\`markdown **Swagger** is an open-source framework for designing, building, documenting, and consuming RESTful web services. In the context of ASP.NET Core, Swagger is commonly used through the **Swashbuckle** library to automatically generate interactive API documentation.

### What Does Swagger Do?
- **Generates interactive documentation** for your REST API.
- Allows developers and testers to **explore and test endpoints** directly from a web UI.
- Produces a **machine-readable OpenAPI specification** (formerly known as Swagger specification) for your API.

---

## How to Use Swagger with ASP.NET Core REST APIs

### 1. Install Swashbuckle.AspNetCore

Add the NuGet package to your project:

\`\`\`bash
dotnet add package Swashbuckle.AspNetCore
\`\`\`

### 2. Configure Swagger in \`Startup.cs\` (or \`Program.cs\` in .NET 6+)

**For .NET 6+ (Minimal API):**

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable middleware to serve generated Swagger as a JSON endpoint.
app.UseSwagger();

// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.)
app.UseSwaggerUI();

app.MapControllers();

app.Run();
\`\`\`

### 3. Run Your Application

Start your application and navigate to:

\`\`\`
https://localhost:<port>/swagger
\`\`\`

You will see the interactive Swagger UI, where you can view and test your API endpoints.

---

## Summary Table

| Feature              | Description                                      |
|----------------------|--------------------------------------------------|
| **Swagger**          | Framework for API documentation and testing      |
| **Swashbuckle**      | Popular .NET library for integrating Swagger     |
| **Swagger UI**       | Interactive web interface for API exploration    |
| **OpenAPI Spec**     | Standard format for describing REST APIs         |

---

**In short:**  
Swagger (via Swashbuckle) makes it easy to document, test, and share your ASP.NET Core REST APIs with minimal setup.`,level:"Beginner"},{id:"b770a3ec-66f0-4e82-8f31-6c39009c644d",question:"How do you secure a REST API in C#?",answer:`\`\`\`markdown Securing a REST API in C#
--------------------------

Securing a REST API in C# typically involves several layers of protection. Here are common approaches and best practices:

### 1. **Authentication**

- **JWT (JSON Web Tokens):**  
  Use JWTs to authenticate users. After login, the server issues a token, which the client includes in the Authorization header for subsequent requests.

  \`\`\`csharp
  services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
      .AddJwtBearer(options =>
      {
          options.TokenValidationParameters = new TokenValidationParameters
          {
              ValidateIssuer = true,
              ValidateAudience = true,
              ValidateLifetime = true,
              ValidateIssuerSigningKey = true,
              // Set Issuer, Audience, and SigningKey
          };
      });
  \`\`\`

- **OAuth2/OpenID Connect:**  
  Integrate with identity providers (e.g., Azure AD, IdentityServer) for more advanced scenarios.

### 2. **Authorization**

- **Role-based Authorization:**  
  Use \`[Authorize]\` attributes to restrict access to controllers or actions.

  \`\`\`csharp
  [Authorize(Roles = "Admin")]
  public IActionResult GetAdminData() { ... }
  \`\`\`

- **Policy-based Authorization:**  
  Define custom policies for more granular control.

### 3. **HTTPS Enforcement**

- **Require HTTPS:**  
  Redirect all HTTP traffic to HTTPS to encrypt data in transit.

  \`\`\`csharp
  app.UseHttpsRedirection();
  \`\`\`

### 4. **Input Validation & Sanitization**

- Always validate and sanitize incoming data to prevent injection attacks.

### 5. **CORS (Cross-Origin Resource Sharing)**

- Configure CORS to allow only trusted domains.

  \`\`\`csharp
  services.AddCors(options =>
  {
      options.AddPolicy("AllowSpecificOrigin",
          builder => builder.WithOrigins("https://trusted.com")
                            .AllowAnyHeader()
                            .AllowAnyMethod());
  });
  \`\`\`

### 6. **Rate Limiting & Throttling**

- Implement rate limiting to prevent abuse (e.g., using middleware or third-party libraries).

### 7. **Logging & Monitoring**

- Log requests and monitor for suspicious activity.

### 8. **Other Best Practices**

- **Disable directory browsing and unnecessary endpoints.**
- **Keep dependencies updated.**
- **Use secure headers (e.g., HSTS, X-Content-Type-Options).**

---

**Example: Secure Controller**

\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
[Authorize] // Requires authentication
public class ValuesController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { Message = "Secure data" });
}
\`\`\`

---

By combining these techniques, you can significantly enhance the security of your REST API in C#.`,level:"Intermediate"},{id:"a1d92fa6-c975-47ee-b82a-1e7bb0c22af1",question:"What is JWT authentication and how is it implemented in ASP.NET Core?",answer:`\`\`\`markdown **JWT Authentication and Its Implementation in ASP.NET Core**

**What is JWT Authentication?**

JWT (JSON Web Token) authentication is a stateless, token-based authentication mechanism commonly used in REST APIs. It allows secure transmission of information between parties as a JSON object. The token is digitally signed, ensuring data integrity and authenticity.

A typical JWT contains three parts:
1. **Header**: Specifies the signing algorithm and token type.
2. **Payload**: Contains claims (user data and metadata).
3. **Signature**: Verifies the token’s integrity.

**How JWT Authentication Works:**
1. The client sends credentials (e.g., username/password) to the server.
2. The server validates credentials and generates a JWT.
3. The client stores the JWT (usually in local storage) and sends it in the Authorization header with each request.
4. The server validates the JWT and grants access if valid.

---

**Implementation in ASP.NET Core**

1. **Install Required NuGet Packages**
   \`\`\`bash
   dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
   \`\`\`

2. **Configure JWT Authentication in \`Program.cs\` or \`Startup.cs\`**
   \`\`\`csharp
   using Microsoft.AspNetCore.Authentication.JwtBearer;
   using Microsoft.IdentityModel.Tokens;
   using System.Text;

   var builder = WebApplication.CreateBuilder(args);

   // Add JWT authentication
   builder.Services.AddAuthentication(options =>
   {
       options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
       options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
   })
   .AddJwtBearer(options =>
   {
       options.TokenValidationParameters = new TokenValidationParameters
       {
           ValidateIssuer = true,
           ValidateAudience = true,
           ValidateLifetime = true,
           ValidateIssuerSigningKey = true,
           ValidIssuer = "yourIssuer",
           ValidAudience = "yourAudience",
           IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("yourSecretKey"))
       };
   });

   var app = builder.Build();

   app.UseAuthentication();
   app.UseAuthorization();
   \`\`\`

3. **Generating JWT Token**
   \`\`\`csharp
   using System.IdentityModel.Tokens.Jwt;
   using System.Security.Claims;
   using Microsoft.IdentityModel.Tokens;

   public string GenerateJwtToken(string username)
   {
       var claims = new[]
       {
           new Claim(JwtRegisteredClaimNames.Sub, username),
           new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
       };

       var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("yourSecretKey"));
       var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

       var token = new JwtSecurityToken(
           issuer: "yourIssuer",
           audience: "yourAudience",
           claims: claims,
           expires: DateTime.Now.AddHours(1),
           signingCredentials: creds);

       return new JwtSecurityTokenHandler().WriteToken(token);
   }
   \`\`\`

4. **Protecting Endpoints**
   \`\`\`csharp
   [Authorize]
   [ApiController]
   [Route("[controller]")]
   public class ValuesController : ControllerBase
   {
       [HttpGet]
       public IActionResult Get()
       {
           return Ok(new { message = "This is a protected endpoint." });
       }
   }
   \`\`\`

---

**Summary Table**

| Step                  | Description                                              |
|-----------------------|---------------------------------------------------------|
| Install Package       | Add \`Microsoft.AspNetCore.Authentication.JwtBearer\`     |
| Configure Services    | Set up JWT authentication in the service container      |
| Generate Token        | Issue JWT upon successful login                         |
| Protect Endpoints     | Use \`[Authorize]\` to secure API endpoints               |

**References:**
- [Microsoft Docs: JWT Bearer Authentication](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/jwt?view=aspnetcore-7.0)
- [JWT.io Introduction](https://jwt.io/introduction)

---

**In summary:**  
JWT authentication in ASP.NET Core involves configuring the authentication middleware, generating tokens upon successful login, and securing endpoints using the \`[Authorize]\` attribute. This approach enables stateless, scalable, and secure API authentication.`,level:"Intermediate"},{id:"81237b3c-f588-49b4-92f5-ff5204eedcdc",question:"How do you implement versioning in a REST API?",answer:`\`\`\`markdown
To implement versioning in a REST API using C#, you can use several common strategies. The most popular approaches are:

### 1. URI Versioning

Add the version number directly into the URL path.

**Example:**
\`\`\`
GET /api/v1/products
GET /api/v2/products
\`\`\`

**Implementation in ASP.NET Core:**
\`\`\`csharp
[ApiController]
[Route("api/v{version:apiVersion}/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() { ... }
}
\`\`\`

### 2. Query String Versioning

Pass the version as a query parameter.

**Example:**
\`\`\`
GET /api/products?api-version=1.0
\`\`\`

**Implementation:**
\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get([FromQuery(Name = "api-version")] string apiVersion) { ... }
}
\`\`\`

### 3. Header Versioning

Specify the version in a custom HTTP header.

**Example:**
\`\`\`
GET /api/products
api-version: 1.0
\`\`\`

**Implementation:**
Read the version from the request headers in your controller or middleware.

### Using Microsoft.AspNetCore.Mvc.Versioning

For a robust solution, use the [Microsoft.AspNetCore.Mvc.Versioning](https://github.com/dotnet/aspnet-api-versioning) NuGet package.

**Installation:**
\`\`\`
dotnet add package Microsoft.AspNetCore.Mvc.Versioning
\`\`\`

**Configuration in \`Startup.cs\`:**
\`\`\`csharp
services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
    options.ApiVersionReader = new UrlSegmentApiVersionReader(); // or QueryStringApiVersionReader, HeaderApiVersionReader
});
\`\`\`

**Controller Example:**
\`\`\`csharp
[ApiVersion("1.0")]
[ApiVersion("2.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetV1() { ... }

    [HttpGet, MapToApiVersion("2.0")]
    public IActionResult GetV2() { ... }
}
\`\`\`

---

**Summary:**  
You can implement REST API versioning in C# using URI, query string, or header-based approaches. For enterprise-grade solutions, leverage the \`Microsoft.AspNetCore.Mvc.Versioning\` package to manage versions cleanly and efficiently.
\`\`\`
`,level:"Intermediate"},{id:"0bb924fe-c95c-421a-8e9e-f5904a333a06",question:"What is CORS and how do you enable it in ASP.NET Core?",answer:`\`\`\`markdown **CORS (Cross-Origin Resource Sharing)** is a security feature implemented by browsers to restrict web applications running at one origin from interacting with resources from a different origin. By default, browsers block such cross-origin requests for security reasons. CORS allows servers to specify who can access their resources and which HTTP methods are permitted from external origins.

### Enabling CORS in ASP.NET Core

To enable CORS in an ASP.NET Core REST API, follow these steps:

1. **Install the CORS Middleware**  
   The CORS middleware is included by default in ASP.NET Core projects (\`Microsoft.AspNetCore.Cors\`).

2. **Configure CORS in \`Startup.cs\` or \`Program.cs\`**

   - **Define a CORS policy** in the \`ConfigureServices\` method:

     \`\`\`csharp
     public void ConfigureServices(IServiceCollection services)
     {
         services.AddCors(options =>
         {
             options.AddPolicy("AllowSpecificOrigin",
                 builder =>
                 {
                     builder.WithOrigins("https://example.com")
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                 });
         });

         services.AddControllers();
     }
     \`\`\`

   - **Enable the CORS middleware** in the \`Configure\` method:

     \`\`\`csharp
     public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
     {
         app.UseRouting();

         app.UseCors("AllowSpecificOrigin"); // Use the defined CORS policy

         app.UseAuthorization();

         app.UseEndpoints(endpoints =>
         {
             endpoints.MapControllers();
         });
     }
     \`\`\`

   > **Note:** In .NET 6 and later (minimal hosting model), the configuration is done in \`Program.cs\`:

   \`\`\`csharp
   var builder = WebApplication.CreateBuilder(args);

   builder.Services.AddCors(options =>
   {
       options.AddPolicy("AllowSpecificOrigin",
           policy => policy.WithOrigins("https://example.com")
                           .AllowAnyHeader()
                           .AllowAnyMethod());
   });

   var app = builder.Build();

   app.UseCors("AllowSpecificOrigin");

   app.MapControllers();

   app.Run();
   \`\`\`

3. **Apply CORS Policy to Controllers or Actions (Optional)**  
   You can also apply CORS policies at the controller or action level using the \`[EnableCors]\` attribute:

   \`\`\`csharp
   [ApiController]
   [Route("[controller]")]
   [EnableCors("AllowSpecificOrigin")]
   public class MyController : ControllerBase
   {
       // ...
   }
   \`\`\`

### Summary

- **CORS** controls cross-origin requests in browsers.
- In ASP.NET Core, enable CORS by configuring a policy in \`Startup.cs\` or \`Program.cs\`, and applying it globally or to specific controllers/actions.
- Use \`WithOrigins\`, \`AllowAnyHeader\`, and \`AllowAnyMethod\` to customize allowed origins, headers, and HTTP methods.

**References:**  
- [Microsoft Docs: Enable Cross-Origin Requests (CORS) in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/security/cors)`,level:"Intermediate"},{id:"15e335a2-4bd5-46ae-9db9-a2efbd2f8eb7",question:"How do you validate incoming request data in a REST API?",answer:`\`\`\`markdown To validate incoming request data in a REST API using C#, you typically use **model validation** with data annotations and, optionally, custom validation logic. Here’s how you can do it:

### 1. Use Data Annotations

Decorate your request models (DTOs) with validation attributes from the \`System.ComponentModel.DataAnnotations\` namespace:

\`\`\`csharp
public class CreateUserRequest
{
    [Required]
    [StringLength(100, MinimumLength = 3)]
    public string Username { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }
}
\`\`\`

### 2. Automatic Validation in Controllers

In ASP.NET Core, model validation is performed automatically when you use \`[ApiController]\`:

\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    [HttpPost]
    public IActionResult CreateUser([FromBody] CreateUserRequest request)
    {
        // If validation fails, ASP.NET Core returns 400 Bad Request automatically
        // with validation error details in the response body.

        // Your business logic here...
        return Ok();
    }
}
\`\`\`

### 3. Manual Validation (if needed)

If you need to manually check for validation errors:

\`\`\`csharp
if (!ModelState.IsValid)
{
    return BadRequest(ModelState);
}
\`\`\`

### 4. Custom Validation

You can create custom validation attributes by inheriting from \`ValidationAttribute\`:

\`\`\`csharp
public class NotFutureDateAttribute : ValidationAttribute
{
    public override bool IsValid(object value)
    {
        if (value is DateTime date)
        {
            return date <= DateTime.Now;
        }
        return false;
    }
}
\`\`\`

And use it in your model:

\`\`\`csharp
public class EventRequest
{
    [NotFutureDate(ErrorMessage = "Date cannot be in the future.")]
    public DateTime EventDate { get; set; }
}
\`\`\`

### 5. FluentValidation (Alternative)

For more complex scenarios, consider using the [FluentValidation](https://fluentvalidation.net/) library.

---

**Summary:**  
- Use data annotations for simple validation.
- ASP.NET Core automatically validates models and returns errors if \`[ApiController]\` is used.
- For custom rules, create custom attributes or use FluentValidation.
- Always validate incoming data to ensure API robustness and security.`,level:"Intermediate"},{id:"4c66d587-ce4c-41b0-9f35-fb3f93434481",question:"What is middleware and how is it used in ASP.NET Core REST APIs?",answer:`\`\`\`markdown **Middleware** in ASP.NET Core is software that's assembled into an application pipeline to handle requests and responses. Each component (middleware) in the pipeline can:

- Inspect, modify, or short-circuit HTTP requests and responses.
- Pass control to the next middleware in the pipeline.

### How Middleware Works

When an HTTP request comes in:

1. It enters the pipeline and passes through each middleware component in order.
2. Each middleware can:
   - Do something before passing the request to the next middleware.
   - Optionally stop the pipeline and generate a response.
   - Do something after the next middleware has processed the request (on the way back).

### Common Uses in REST APIs

- **Authentication & Authorization**: Ensuring users are who they say they are and have permission.
- **Logging**: Recording request and response details.
- **Error Handling**: Catching and formatting errors.
- **CORS**: Controlling cross-origin requests.
- **Routing**: Directing requests to the correct controller/action.

### Example: Adding Middleware in ASP.NET Core

In \`Startup.cs\` (or \`Program.cs\` in .NET 6+):

\`\`\`csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseRouting();

    // Custom middleware example
    app.Use(async (context, next) =>
    {
        // Do something with the request
        Console.WriteLine("Request incoming");

        await next(); // Call the next middleware

        // Do something with the response
        Console.WriteLine("Response outgoing");
    });

    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
\`\`\`

### Key Points

- Middleware is central to request processing in ASP.NET Core.
- Order matters: Middleware is executed in the order it's added.
- You can use built-in middleware or create your own.

**In summary:** Middleware in ASP.NET Core REST APIs is a powerful way to handle cross-cutting concerns (like logging, authentication, error handling) for every HTTP request and response.`,level:"Intermediate"},{id:"28c7001f-a1d0-46d8-96eb-e7666c56f569",question:"How do you implement logging in a REST API?",answer:`\`\`\`markdown
To implement logging in a REST API using C#, you typically use a logging framework such as **Serilog**, **NLog**, or **Microsoft.Extensions.Logging**. Here’s a step-by-step guide using the built-in logging in ASP.NET Core:

### 1. Configure Logging in \`Program.cs\`

ASP.NET Core comes with built-in logging support. In your \`Program.cs\` or \`Startup.cs\`, logging is usually configured automatically:

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);

// Add logging services (default providers: Console, Debug, etc.)
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

var app = builder.Build();
\`\`\`

### 2. Inject \`ILogger\` into Controllers

You can inject \`ILogger<T>\` into your controllers or services:

\`\`\`csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

[ApiController]
[Route("[controller]")]
public class WeatherController : ControllerBase
{
    private readonly ILogger<WeatherController> _logger;

    public WeatherController(ILogger<WeatherController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult Get()
    {
        _logger.LogInformation("GET request received at WeatherController.");
        try
        {
            // Your logic here
            return Ok("Weather data");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while getting weather data.");
            return StatusCode(500, "Internal server error");
        }
    }
}
\`\`\`

### 3. Log at Different Levels

Use different log levels as appropriate:

- \`LogTrace\`
- \`LogDebug\`
- \`LogInformation\`
- \`LogWarning\`
- \`LogError\`
- \`LogCritical\`

Example:

\`\`\`csharp
_logger.LogWarning("This is a warning message.");
_logger.LogError("This is an error message.");
\`\`\`

### 4. Logging Middleware (Optional)

For logging all requests and responses, you can create custom middleware:

\`\`\`csharp
public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestLoggingMiddleware> _logger;

    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        _logger.LogInformation("Handling request: {Method} {Path}", context.Request.Method, context.Request.Path);
        await _next(context);
        _logger.LogInformation("Finished handling request.");
    }
}

// Register middleware in Program.cs
app.UseMiddleware<RequestLoggingMiddleware>();
\`\`\`

### 5. Use Structured Logging (Optional)

With frameworks like Serilog, you can log structured data for better querying and analysis.

---

**Summary:**  
- Use built-in or third-party logging frameworks.
- Inject \`ILogger<T>\` into controllers/services.
- Log at appropriate levels.
- Optionally, implement middleware for request/response logging.
\`\`\`
`,level:"Intermediate"},{id:"7d03dbd2-b2dc-4830-aa55-e546192d8032",question:"What are Data Transfer Objects (DTOs) and why are they used?",answer:`\`\`\`markdown ### What are Data Transfer Objects (DTOs) and Why Are They Used?

**Data Transfer Objects (DTOs)** are simple objects used to transfer data between different layers of an application, especially between the server and client in a REST API. They typically contain only data fields (properties) and lack business logic.

#### Why are DTOs Used?

1. **Encapsulation of Data:**  
   DTOs help encapsulate the data you want to expose, hiding internal implementation details of your domain models.

2. **Decoupling:**  
   They decouple your API’s contract from your internal data models, allowing you to change your domain models without affecting the API consumers.

3. **Security:**  
   By using DTOs, you can prevent sensitive fields from being exposed unintentionally.

4. **Validation:**  
   DTOs can be tailored to the needs of specific API endpoints, making it easier to validate incoming data.

5. **Performance:**  
   DTOs can be shaped to include only the necessary data, reducing the payload size and improving performance.

#### Example in C#

\`\`\`csharp
// Domain Model
public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string PasswordHash { get; set; }
    public string Email { get; set; }
}

// DTO
public class UserDto
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
}
\`\`\`

In this example, the \`UserDto\` exposes only the \`Id\`, \`Username\`, and \`Email\` fields, hiding the sensitive \`PasswordHash\` field from API consumers.

---

**Summary:**  
DTOs are used in REST APIs to transfer only the necessary data, improve security, decouple internal models from external contracts, and optimize data transfer between client and server.`,level:"Intermediate"},{id:"c9473205-ef58-4297-ab4c-9ed958e64fb6",question:"How do you map between entities and DTOs in C#?",answer:`\`\`\`markdown To map between entities and DTOs (Data Transfer Objects) in C#, you typically use one of the following approaches:

### 1. Manual Mapping

You write code to copy properties from the entity to the DTO and vice versa.

\`\`\`csharp
// Entity
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
}

// DTO
public class UserDto
{
    public int Id { get; set; }
    public string Name { get; set; }
}

// Manual mapping
public UserDto MapToDto(User user)
{
    return new UserDto
    {
        Id = user.Id,
        Name = user.Name
    };
}

public User MapToEntity(UserDto dto)
{
    return new User
    {
        Id = dto.Id,
        Name = dto.Name
    };
}
\`\`\`

### 2. Using AutoMapper

[AutoMapper](https://automapper.org/) is a popular library that automates mapping between objects.

**Install AutoMapper via NuGet:**
\`\`\`shell
dotnet add package AutoMapper
\`\`\`

**Configure and use AutoMapper:**
\`\`\`csharp
using AutoMapper;

// Entity and DTO as above

// Create mapping profile
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<User, UserDto>();
        CreateMap<UserDto, User>();
    }
}

// Configure AutoMapper
var config = new MapperConfiguration(cfg => cfg.AddProfile<MappingProfile>());
var mapper = config.CreateMapper();

// Mapping
User user = new User { Id = 1, Name = "Alice" };
UserDto dto = mapper.Map<UserDto>(user);
\`\`\`

### 3. Using LINQ (for collections)

You can use LINQ to project a list of entities to DTOs:

\`\`\`csharp
List<User> users = ...;
List<UserDto> dtos = users.Select(u => new UserDto
{
    Id = u.Id,
    Name = u.Name
}).ToList();
\`\`\`

---

**Summary:**  
- Manual mapping gives you full control but can be verbose.
- AutoMapper reduces boilerplate and is ideal for large projects.
- LINQ is handy for mapping collections.

Choose the approach that best fits your project's complexity and requirements.`,level:"Intermediate"},{id:"773e7bdd-d3bd-4696-88e2-fc175828600f",question:"How do you handle concurrency in a REST API?",answer:`\`\`\`markdown Handling Concurrency in a REST API (C#)
---

Concurrency issues arise when multiple clients attempt to modify the same resource simultaneously. In REST APIs built with C#, common strategies to handle concurrency include:

### 1. Optimistic Concurrency Control

This approach assumes that conflicts are rare and checks for them before committing changes.

**How to implement:**

- Add a versioning property to your resource (e.g., a \`RowVersion\` byte array or a timestamp).
- When a client fetches a resource, include the version value.
- When updating, require the client to send back the version.
- On the server, check if the version matches the current value in the database.
    - If it matches, proceed with the update.
    - If not, return a \`409 Conflict\` response.

**Example using Entity Framework Core:**

\`\`\`csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    [Timestamp]
    public byte[] RowVersion { get; set; }
}
\`\`\`

\`\`\`csharp
[HttpPut("{id}")]
public async Task<IActionResult> UpdateProduct(int id, Product updatedProduct)
{
    var product = await _context.Products.FindAsync(id);
    if (product == null) return NotFound();

    // Copy updated fields
    product.Name = updatedProduct.Name;

    // Set original RowVersion
    _context.Entry(product).Property("RowVersion").OriginalValue = updatedProduct.RowVersion;

    try
    {
        await _context.SaveChangesAsync();
        return NoContent();
    }
    catch (DbUpdateConcurrencyException)
    {
        return Conflict("The resource was modified by another user.");
    }
}
\`\`\`

### 2. ETag and If-Match Headers

HTTP provides ETags (entity tags) to help with concurrency.

- The server returns an ETag header with the resource.
- The client includes the ETag value in the \`If-Match\` header when updating.
- The server compares the ETag with the current version.
    - If they match, update proceeds.
    - If not, return \`412 Precondition Failed\`.

**Example:**

\`\`\`csharp
// On GET
Response.Headers["ETag"] = $"\\"{Convert.ToBase64String(product.RowVersion)}\\"";

// On PUT
[HttpPut("{id}")]
public async Task<IActionResult> UpdateProduct(int id, Product updatedProduct)
{
    var ifMatch = Request.Headers["If-Match"].FirstOrDefault();
    var product = await _context.Products.FindAsync(id);
    if (product == null) return NotFound();

    var currentEtag = $"\\"{Convert.ToBase64String(product.RowVersion)}\\"";
    if (ifMatch != currentEtag)
        return StatusCode(412, "Resource has been modified.");

    // Proceed with update...
}
\`\`\`

### 3. Pessimistic Concurrency (Locking)

Less common in REST APIs due to statelessness, but possible:

- Lock the resource for a client (e.g., using a flag in the database).
- Other clients cannot modify until the lock is released.

This approach can lead to scalability issues and is generally discouraged in RESTful design.

---

**Summary Table**

| Method                          | Pros                      | Cons                         |
|----------------------------------|---------------------------|------------------------------|
| Optimistic Concurrency (version) | Simple, scalable          | May require retry logic      |
| ETag/If-Match                    | Standards-based, flexible | Requires client cooperation  |
| Pessimistic Locking              | Prevents all conflicts    | Scalability, complexity      |

---

**Best Practice:**  
Use optimistic concurrency (versioning or ETag) for most REST APIs in C#. This approach is scalable, aligns with REST principles, and is well-supported by frameworks like Entity Framework Core.`,level:"Intermediate"},{id:"7aeb805f-ab12-4317-aac5-44be0b199feb",question:"What is the difference between synchronous and asynchronous controller actions?",answer:`\`\`\`markdown **Synchronous vs. Asynchronous Controller Actions in C# (REST API)**

In ASP.NET Core (and earlier ASP.NET Web API), controller actions can be written as either synchronous or asynchronous methods. Here’s the difference:

### Synchronous Actions

- **Definition:** The method executes in a blocking manner. The thread processing the request waits until the action completes (e.g., database call, file I/O).
- **Signature Example:**
  \`\`\`csharp
  public IActionResult GetData()
  {
      var data = _service.GetData();
      return Ok(data);
  }
  \`\`\`
- **Behavior:** The thread is occupied for the entire duration of the operation, which can limit scalability under heavy load.

### Asynchronous Actions

- **Definition:** The method executes in a non-blocking manner using the async/await pattern. The thread can be released back to the thread pool while waiting for I/O operations (like database or network calls) to complete.
- **Signature Example:**
  \`\`\`csharp
  public async Task<IActionResult> GetDataAsync()
  {
      var data = await _service.GetDataAsync();
      return Ok(data);
  }
  \`\`\`
- **Behavior:** Improves scalability by freeing up threads to handle other requests while waiting for I/O operations.

---

### Key Differences

| Aspect            | Synchronous                          | Asynchronous                       |
|-------------------|--------------------------------------|------------------------------------|
| Thread Usage      | Blocks thread until completion       | Frees thread during I/O waits      |
| Scalability       | Less scalable under heavy load       | More scalable, especially for I/O  |
| Implementation    | Simple, straightforward              | Requires async/await, Task types   |
| Use Case          | CPU-bound, quick operations          | I/O-bound, long-running operations |

---

**Summary:**  
Use asynchronous controller actions when your API performs I/O-bound operations (like database or HTTP calls) to improve scalability and responsiveness. Use synchronous actions for simple, quick, CPU-bound tasks.`,level:"Intermediate"},{id:"89addad0-8564-4ae9-9fb0-fa457d2d6027",question:"How do you implement custom middleware in ASP.NET Core?",answer:`\`\`\`markdown
To implement custom middleware in ASP.NET Core, follow these steps:

1. **Create a Middleware Class**

Create a class with a constructor that takes a \`RequestDelegate\` and an \`Invoke\` method that accepts an \`HttpContext\`.

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
        // Custom logic before next middleware
        Console.WriteLine("Custom Middleware: Before");

        await _next(context); // Call the next middleware

        // Custom logic after next middleware
        Console.WriteLine("Custom Middleware: After");
    }
}
\`\`\`

2. **Register Middleware in the Pipeline**

In your \`Startup.cs\` (for .NET 5 and earlier) or \`Program.cs\` (for .NET 6+), add your middleware to the HTTP request pipeline using \`UseMiddleware<T>()\`:

\`\`\`csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseMiddleware<CustomMiddleware>();

    // Other middleware registrations
    app.UseRouting();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
\`\`\`

For .NET 6+ minimal hosting model:

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseMiddleware<CustomMiddleware>();

app.MapControllers();
app.Run();
\`\`\`

3. **(Optional) Use Extension Method for Cleaner Registration**

You can create an extension method for cleaner middleware registration:

\`\`\`csharp
public static class CustomMiddlewareExtensions
{
    public static IApplicationBuilder UseCustomMiddleware(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<CustomMiddleware>();
    }
}
\`\`\`

Then register it as:

\`\`\`csharp
app.UseCustomMiddleware();
\`\`\`

---

**Summary:**  
- Create a middleware class with an \`Invoke\` or \`InvokeAsync\` method.
- Register it in the pipeline with \`UseMiddleware<T>()\` or a custom extension.
- Add your custom logic before or after calling \`_next(context)\`.

**References:**  
- [Official Docs: Write custom ASP.NET Core middleware](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/write?view=aspnetcore-7.0)
\`\`\``,level:"Intermediate"},{id:"05046790-9bb1-43bf-9d70-74bfcd284198",question:"How do you implement pagination in a REST API?",answer:`\`\`\`markdown To implement pagination in a REST API using C#, you typically use query parameters to specify which page of results to return and how many items per page. Here’s a step-by-step guide:

### 1. Define Query Parameters

Common parameters are:

- \`page\`: The page number to retrieve (e.g., 1, 2, 3, ...)
- \`pageSize\`: The number of items per page

Example request:
\`\`\`
GET /api/products?page=2&pageSize=10
\`\`\`

### 2. Update Your Controller

Assume you have an \`IQueryable<Product>\` from your database. Use \`Skip\` and \`Take\` to paginate:

\`\`\`csharp
[HttpGet]
public async Task<IActionResult> GetProducts(int page = 1, int pageSize = 10)
{
    if (page <= 0) page = 1;
    if (pageSize <= 0) pageSize = 10;

    var totalItems = await _context.Products.CountAsync();
    var products = await _context.Products
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .ToListAsync();

    var result = new
    {
        Page = page,
        PageSize = pageSize,
        TotalItems = totalItems,
        TotalPages = (int)Math.Ceiling(totalItems / (double)pageSize),
        Items = products
    };

    return Ok(result);
}
\`\`\`

### 3. Return Pagination Metadata

Include metadata such as \`TotalItems\` and \`TotalPages\` in your response to help clients navigate.

### 4. Optional: Add Pagination Links

For better REST compliance, you can add \`next\`, \`prev\`, \`first\`, and \`last\` links.

### Example Response

\`\`\`json
{
  "page": 2,
  "pageSize": 10,
  "totalItems": 45,
  "totalPages": 5,
  "items": [
    // Array of products
  ]
}
\`\`\`

---

**Summary:**  
Use query parameters for \`page\` and \`pageSize\`, apply \`Skip\` and \`Take\` in your data query, and return pagination metadata in your API response. This approach is standard for implementing pagination in REST APIs with C#.`,level:"Intermediate"},{id:"fe11c5f3-6801-4ee2-81a8-0b94e2ac1330",question:"How do you implement filtering and sorting in REST API endpoints?",answer:`\`\`\`markdown
To implement filtering and sorting in REST API endpoints using C#, you typically use query parameters to allow clients to specify their filtering and sorting preferences. Here’s how you can achieve this in an ASP.NET Core Web API:

### 1. Define Query Parameters

Use query parameters in your endpoint to accept filtering and sorting options. For example:

\`\`\`
GET /api/products?category=electronics&minPrice=100&sortBy=price&sortOrder=desc
\`\`\`

### 2. Update the Controller Action

Modify your controller action to accept these parameters:

\`\`\`csharp
[HttpGet]
public async Task<IActionResult> GetProducts(
    [FromQuery] string category,
    [FromQuery] decimal? minPrice,
    [FromQuery] string sortBy = "name",
    [FromQuery] string sortOrder = "asc")
{
    var products = _context.Products.AsQueryable();

    // Filtering
    if (!string.IsNullOrEmpty(category))
    {
        products = products.Where(p => p.Category == category);
    }
    if (minPrice.HasValue)
    {
        products = products.Where(p => p.Price >= minPrice.Value);
    }

    // Sorting
    products = sortBy.ToLower() switch
    {
        "price" => sortOrder == "desc" ? products.OrderByDescending(p => p.Price) : products.OrderBy(p => p.Price),
        "name" => sortOrder == "desc" ? products.OrderByDescending(p => p.Name) : products.OrderBy(p => p.Name),
        _ => products
    };

    var result = await products.ToListAsync();
    return Ok(result);
}
\`\`\`

### 3. Best Practices

- **Validate Inputs:** Ensure that the \`sortBy\` and \`sortOrder\` parameters are validated to prevent SQL injection or invalid queries.
- **Use DTOs:** Return Data Transfer Objects (DTOs) instead of entities for better control over the API response.
- **Paging:** For large datasets, combine filtering and sorting with pagination.

### 4. Summary

- Use query parameters for filtering and sorting.
- Apply LINQ queries to filter and sort data in the controller.
- Always validate and sanitize input parameters.

This approach makes your REST API endpoints flexible and user-friendly for clients needing customized data retrieval.
\`\`\`
`,level:"Intermediate"},{id:"9df888d9-953c-481c-8594-9aa8966b3225",question:"How do you consume a REST API from a C# client?",answer:`\`\`\`markdown To consume a REST API from a C# client, you typically use the HttpClient class. Here’s a step-by-step example:

\`\`\`csharp
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Create HttpClient instance
        using (HttpClient client = new HttpClient())
        {
            // Set base address and headers if needed
            client.BaseAddress = new Uri("https://api.example.com/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            // Send GET request
            HttpResponseMessage response = await client.GetAsync("endpoint/resource");
            if (response.IsSuccessStatusCode)
            {
                // Read response as string or deserialize as needed
                string data = await response.Content.ReadAsStringAsync();
                Console.WriteLine(data);
            }
            else
            {
                Console.WriteLine($"Error: {response.StatusCode}");
            }
        }
    }
}
\`\`\`

**Key Steps:**

1. **Create an HttpClient instance** (preferably reuse it for multiple requests).
2. **Set the BaseAddress and headers** as required by the API.
3. **Send requests** using methods like \`GetAsync\`, \`PostAsync\`, etc.
4. **Read and process the response**, often deserializing JSON using \`System.Text.Json\` or \`Newtonsoft.Json\`.

**Example of deserializing JSON:**

\`\`\`csharp
using System.Text.Json;

// Assuming 'data' is the JSON string from the response
var result = JsonSerializer.Deserialize<MyModel>(data);
\`\`\`

**Note:**  
- For POST/PUT requests, use \`PostAsync\` or \`PutAsync\` and include content (e.g., \`StringContent\`).
- Always handle exceptions and consider using \`using\` or dependency injection for \`HttpClient\`.

**References:**
- [Microsoft Docs: HttpClient](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient)
- [Consuming a Web API in C#](https://learn.microsoft.com/en-us/aspnet/web-api/overview/advanced/calling-a-web-api-from-a-net-client)`,level:"Intermediate"},{id:"7864a110-b136-4648-8226-9472f2342411",question:"What is the role of the IHttpClientFactory in ASP.NET Core?",answer:`\`\`\`markdown
The \`IHttpClientFactory\` in ASP.NET Core is a built-in factory for creating and managing instances of \`HttpClient\`. Its primary roles are:

1. **Centralized Configuration**: It allows you to configure and name different \`HttpClient\` instances with specific settings (like base addresses, headers, or policies).

2. **Resource Management**: It manages the underlying \`HttpMessageHandler\` lifetimes, preventing common issues such as socket exhaustion that can occur when \`HttpClient\` is improperly instantiated.

3. **Dependency Injection**: It integrates with ASP.NET Core's dependency injection system, making it easy to inject properly configured \`HttpClient\` instances into your services.

4. **Resilience and Policies**: It supports adding resilience policies (like retries, circuit breakers) via libraries such as Polly.

**Example Usage:**
\`\`\`csharp
// Register in Startup.cs or Program.cs
services.AddHttpClient();

// Inject and use in a service
public class MyService
{
    private readonly HttpClient _httpClient;

    public MyService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<string> GetDataAsync()
    {
        return await _httpClient.GetStringAsync("https://api.example.com/data");
    }
}
\`\`\`

**Summary:**  
\`IHttpClientFactory\` helps you efficiently and safely use \`HttpClient\` in ASP.NET Core applications by handling configuration, lifetime management, and integration with DI and resilience strategies.
\`\`\``,level:"Intermediate"},{id:"b5240a09-8e40-41c3-b7af-55caada59442",question:"How do you handle file uploads in a REST API?",answer:`\`\`\`markdown To handle file uploads in a REST API using C#, you typically use the IFormFile interface provided by ASP.NET Core. Here’s a step-by-step guide:

### 1. Define the Controller Action

You can create an endpoint that accepts file uploads using \`[FromForm]\` and \`IFormFile\`. For example:

\`\`\`csharp
[HttpPost("upload")]
public async Task<IActionResult> UploadFile([FromForm] IFormFile file)
{
    if (file == null || file.Length == 0)
        return BadRequest("No file uploaded.");

    var filePath = Path.Combine("Uploads", file.FileName);

    using (var stream = new FileStream(filePath, FileMode.Create))
    {
        await file.CopyToAsync(stream);
    }

    return Ok(new { file.FileName, file.Length });
}
\`\`\`

### 2. Configure the Request

- The client must send the file as \`multipart/form-data\`.
- Example using \`curl\`:

  \`\`\`bash
  curl -F "file=@path/to/your/file.txt" https://yourapi.com/upload
  \`\`\`

### 3. Multiple File Uploads

To handle multiple files:

\`\`\`csharp
[HttpPost("upload-multiple")]
public async Task<IActionResult> UploadFiles([FromForm] List<IFormFile> files)
{
    foreach (var file in files)
    {
        var filePath = Path.Combine("Uploads", file.FileName);
        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }
    }
    return Ok(new { count = files.Count });
}
\`\`\`

### 4. Additional Considerations

- **Validation:** Check file size, type, and handle exceptions.
- **Security:** Store files outside the web root, sanitize file names, and validate content.
- **Configuration:** Set limits in \`Startup.cs\` if needed:

  \`\`\`csharp
  services.Configure<FormOptions>(options =>
  {
      options.MultipartBodyLengthLimit = 104857600; // 100 MB
  });
  \`\`\`

### Summary

Handling file uploads in a REST API with C# involves:
- Using \`IFormFile\` in controller actions.
- Accepting files via \`multipart/form-data\`.
- Saving files securely on the server.
- Validating and securing the upload process.

**References:**
- [ASP.NET Core File Upload Documentation](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/file-uploads)`,level:"Intermediate"},{id:"91be8a94-cfc6-4de0-a26f-4771351ce06e",question:"What is HATEOAS and how can it be implemented in a REST API?",answer:`\`\`\`markdown
**HATEOAS (Hypermedia As The Engine Of Application State)** is a constraint of the REST application architecture. It means that a client interacts with a REST API entirely through hypermedia provided dynamically by server responses. In other words, the server provides information about what actions are possible next (links), guiding the client through the application.

### Key Concepts

- **Hypermedia**: Data that contains links to other resources or actions.
- **Discoverability**: Clients do not need to hard-code URIs; they follow links provided in responses.
- **Decoupling**: Changes to the API structure are easier to manage, as clients rely on links, not fixed endpoints.

### Example Response with HATEOAS

\`\`\`json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "links": [
    { "rel": "self", "href": "/api/users/1" },
    { "rel": "update", "href": "/api/users/1", "method": "PUT" },
    { "rel": "delete", "href": "/api/users/1", "method": "DELETE" }
  ]
}
\`\`\`

### Implementing HATEOAS in C# (ASP.NET Core Example)

1. **Define a Link Model**

\`\`\`csharp
public class Link
{
    public string Href { get; set; }
    public string Rel { get; set; }
    public string Method { get; set; }
}
\`\`\`

2. **Extend Resource Models**

\`\`\`csharp
public class UserResource
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public List<Link> Links { get; set; } = new List<Link>();
}
\`\`\`

3. **Add Links in Controller**

\`\`\`csharp
[HttpGet("{id}")]
public IActionResult GetUser(int id)
{
    var user = _userService.GetById(id);
    if (user == null) return NotFound();

    var resource = new UserResource
    {
        Id = user.Id,
        Name = user.Name,
        Email = user.Email
    };

    resource.Links.Add(new Link
    {
        Href = Url.Link("GetUser", new { id = user.Id }),
        Rel = "self",
        Method = "GET"
    });
    resource.Links.Add(new Link
    {
        Href = Url.Link("UpdateUser", new { id = user.Id }),
        Rel = "update",
        Method = "PUT"
    });
    resource.Links.Add(new Link
    {
        Href = Url.Link("DeleteUser", new { id = user.Id }),
        Rel = "delete",
        Method = "DELETE"
    });

    return Ok(resource);
}
\`\`\`

### Benefits

- **Self-descriptive responses**: Clients know what actions are available.
- **Easier evolution**: APIs can change URLs or add new actions without breaking clients.
- **Improved navigation**: Clients can traverse the API dynamically.

### Summary

HATEOAS enriches REST APIs by embedding actionable links in responses, enabling clients to discover and interact with resources dynamically. In C#, this is typically implemented by including a collection of links in your resource representations and populating them in your controllers.
\`\`\`
`,level:"Advanced"},{id:"561c3b63-1860-48b9-a4d8-74933a77adbe",question:"How do you implement rate limiting in a REST API?",answer:`\`\`\`markdown
### Implementing Rate Limiting in a REST API (C#)

Rate limiting is crucial for protecting your REST API from abuse and ensuring fair usage among clients. In C#, especially when using ASP.NET Core, you can implement rate limiting in several ways. Below is an advanced approach using middleware and in-memory caching.

#### 1. Using ASP.NET Core Middleware

You can create custom middleware to track requests per client (e.g., by IP address or API key) and enforce limits.

##### Example: Custom Rate Limiting Middleware

\`\`\`csharp
public class RateLimitingMiddleware
{
    private readonly RequestDelegate _next;
    private static readonly MemoryCache _cache = new MemoryCache(new MemoryCacheOptions());
    private readonly int _maxRequests;
    private readonly TimeSpan _period;

    public RateLimitingMiddleware(RequestDelegate next, int maxRequests, TimeSpan period)
    {
        _next = next;
        _maxRequests = maxRequests;
        _period = period;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var key = GetClientKey(context);
        var counter = _cache.GetOrCreate(key, entry =>
        {
            entry.AbsoluteExpirationRelativeToNow = _period;
            return new RequestCounter();
        });

        lock (counter)
        {
            counter.Count++;
            if (counter.Count > _maxRequests)
            {
                context.Response.StatusCode = StatusCodes.Status429TooManyRequests;
                context.Response.Headers["Retry-After"] = _period.TotalSeconds.ToString();
                return;
            }
        }

        await _next(context);
    }

    private string GetClientKey(HttpContext context)
    {
        // Use IP address or API key for identification
        return context.Connection.RemoteIpAddress.ToString();
    }

    private class RequestCounter
    {
        public int Count { get; set; } = 0;
    }
}
\`\`\`

##### Register Middleware in \`Startup.cs\`

\`\`\`csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseMiddleware<RateLimitingMiddleware>(100, TimeSpan.FromMinutes(1)); // 100 requests per minute
    // ... other middleware
}
\`\`\`

#### 2. Using Third-Party Libraries

Libraries like [AspNetCoreRateLimit](https://github.com/stefanprodan/AspNetCoreRateLimit) provide robust and configurable rate limiting features, including support for distributed caches (e.g., Redis).

##### Example: Using AspNetCoreRateLimit

1. Install the NuGet package:
   \`\`\`
   dotnet add package AspNetCoreRateLimit
   \`\`\`

2. Configure in \`Startup.cs\`:

   \`\`\`csharp
   public void ConfigureServices(IServiceCollection services)
   {
       services.AddMemoryCache();
       services.Configure<IpRateLimitOptions>(Configuration.GetSection("IpRateLimiting"));
       services.AddInMemoryRateLimiting();
       services.AddSingleton<IRateLimitConfiguration, RateLimitConfiguration>();
       // ... other services
   }

   public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
   {
       app.UseIpRateLimiting();
       // ... other middleware
   }
   \`\`\`

3. Add configuration in \`appsettings.json\`:

   \`\`\`json
   "IpRateLimiting": {
     "EnableEndpointRateLimiting": true,
     "StackBlockedRequests": false,
     "RealIpHeader": "X-Real-IP",
     "ClientIdHeader": "X-ClientId",
     "HttpStatusCode": 429,
     "GeneralRules": [
       {
         "Endpoint": "*",
         "Period": "1m",
         "Limit": 100
       }
     ]
   }
   \`\`\`

#### 3. Best Practices

- **Identify clients**: Use API keys, user IDs, or IP addresses.
- **Store counters**: Use distributed caches (e.g., Redis) for scalability.
- **Return proper headers**: Inform clients about rate limits and retry times.
- **Customize per endpoint**: Allow different limits for different API routes.

#### 4. References

- [Microsoft Docs: Middleware in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/)
- [AspNetCoreRateLimit GitHub](https://github.com/stefanprodan/AspNetCoreRateLimit)

---

**Summary:**  
Implement rate limiting in C# REST APIs using custom middleware or third-party libraries like AspNetCoreRateLimit. Always identify clients, store counters efficiently, and inform clients of their limits.
\`\`\`
`,level:"Advanced"},{id:"610ce6cd-e6f4-48cf-9abd-47df533eed46",question:"What are best practices for securing sensitive data in REST API responses?",answer:`\`\`\`markdown **Best Practices for Securing Sensitive Data in REST API Responses (C#)**

1. **Never Expose Sensitive Fields**
   - Exclude fields like passwords, tokens, credit card numbers, or internal IDs from API responses.
   - Use DTOs (Data Transfer Objects) or ViewModels to control exactly what data is serialized and returned.

2. **Use Strong Authentication & Authorization**
   - Implement OAuth2, JWT, or other secure authentication mechanisms.
   - Ensure endpoints only return data to authorized users (e.g., using \`[Authorize]\` attributes in ASP.NET Core).

3. **Encrypt Sensitive Data**
   - If sensitive data must be transmitted, use HTTPS (TLS) to encrypt data in transit.
   - For extra protection, encrypt sensitive fields before sending and decrypt on the client as needed.

4. **Data Masking**
   - Mask sensitive information (e.g., show only last 4 digits of a credit card).
   - Example:
     \`\`\`csharp
     public string MaskCardNumber(string cardNumber)
     {
         return $"****-****-****-{cardNumber.Substring(cardNumber.Length - 4)}";
     }
     \`\`\`

5. **Avoid Over-Posting and Over-Fetching**
   - Use explicit models for responses rather than exposing your domain entities directly.
   - Use tools like AutoMapper to map only required fields.

6. **Implement Output Validation & Filtering**
   - Validate and sanitize all data before returning it to prevent injection attacks or data leaks.
   - Use response filters or middleware to inspect and clean outgoing data.

7. **Audit and Log Access**
   - Log access to sensitive endpoints and data, but never log sensitive data itself.
   - Monitor logs for suspicious activity.

8. **Version Your API**
   - Versioning helps you deprecate insecure or outdated endpoints without affecting all clients.

9. **Rate Limiting & Throttling**
   - Prevent abuse and brute-force attacks by limiting the number of requests per user/IP.

10. **Content Security Policy (CSP) & CORS**
    - Configure CORS to only allow trusted domains.
    - Use CSP headers to prevent data exfiltration via malicious scripts.

**Example: Using DTOs in ASP.NET Core**

\`\`\`csharp
public class UserDto
{
    public string Username { get; set; }
    public string Email { get; set; }
    // Do not include Password or other sensitive fields
}

// In your controller:
[HttpGet("{id}")]
public async Task<ActionResult<UserDto>> GetUser(int id)
{
    var user = await _context.Users.FindAsync(id);
    if (user == null) return NotFound();

    var userDto = new UserDto
    {
        Username = user.Username,
        Email = user.Email
    };
    return Ok(userDto);
}
\`\`\`

**Summary Table**

| Practice                      | Description                                      |
|-------------------------------|--------------------------------------------------|
| Exclude sensitive fields      | Use DTOs/ViewModels, never expose raw entities   |
| Strong authentication         | OAuth2, JWT, ASP.NET \`[Authorize]\`               |
| Encrypt data                  | Always use HTTPS, encrypt sensitive fields       |
| Data masking                  | Mask or partially display sensitive info         |
| Output validation/filtering   | Sanitize and validate outgoing data              |
| Logging & auditing            | Log access, not sensitive data                   |
| API versioning                | Deprecate insecure endpoints                     |
| Rate limiting                 | Prevent abuse and brute-force attacks            |
| CORS & CSP                    | Restrict access to trusted domains               |

**References:**
- [OWASP REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
- [Microsoft Docs: Secure ASP.NET Core Web APIs](https://learn.microsoft.com/en-us/aspnet/core/security/?view=aspnetcore-7.0)`,level:"Advanced"},{id:"3dbf95f8-7278-4b01-8d6b-3d68104407c0",question:"How do you implement caching in a REST API?",answer:`\`\`\`markdown
### Implementing Caching in a REST API (C#)

Caching is a crucial technique to improve the performance and scalability of REST APIs. In C#, especially when using ASP.NET Core, you can implement caching at various levels:

---

#### 1. **HTTP Cache Headers**

Set appropriate HTTP headers to enable client-side and proxy caching.

\`\`\`csharp
[HttpGet]
[ResponseCache(Duration = 60, Location = ResponseCacheLocation.Client)]
public IActionResult GetResource()
{
    var data = _service.GetData();
    return Ok(data);
}
\`\`\`
- \`Duration\`: Cache duration in seconds.
- \`Location\`: Where the response can be cached (Client, Any, None).

---

#### 2. **In-Memory Caching**

Use \`IMemoryCache\` for server-side caching of frequently accessed data.

**Register in Startup:**
\`\`\`csharp
services.AddMemoryCache();
\`\`\`

**Usage in Controller:**
\`\`\`csharp
private readonly IMemoryCache _cache;

public MyController(IMemoryCache cache)
{
    _cache = cache;
}

[HttpGet]
public IActionResult GetResource()
{
    var cacheKey = "resource_key";
    if (!_cache.TryGetValue(cacheKey, out MyResource resource))
    {
        resource = _service.GetData();
        var cacheEntryOptions = new MemoryCacheEntryOptions()
            .SetSlidingExpiration(TimeSpan.FromMinutes(5));
        _cache.Set(cacheKey, resource, cacheEntryOptions);
    }
    return Ok(resource);
}
\`\`\`

---

#### 3. **Distributed Caching**

For scalability across multiple servers, use distributed cache (e.g., Redis).

**Register in Startup:**
\`\`\`csharp
services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = "localhost:6379";
});
\`\`\`

**Usage in Controller:**
\`\`\`csharp
private readonly IDistributedCache _cache;

public MyController(IDistributedCache cache)
{
    _cache = cache;
}

[HttpGet]
public async Task<IActionResult> GetResource()
{
    var cacheKey = "resource_key";
    var cachedData = await _cache.GetStringAsync(cacheKey);
    if (cachedData == null)
    {
        var resource = _service.GetData();
        cachedData = JsonConvert.SerializeObject(resource);
        await _cache.SetStringAsync(cacheKey, cachedData, new DistributedCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10)
        });
    }
    var result = JsonConvert.DeserializeObject<MyResource>(cachedData);
    return Ok(result);
}
\`\`\`

---

#### 4. **ETag and Conditional Requests**

Implement ETag headers to allow clients to cache and validate resources.

\`\`\`csharp
[HttpGet]
public IActionResult GetResource()
{
    var resource = _service.GetData();
    var eTag = GenerateETag(resource);

    if (Request.Headers["If-None-Match"] == eTag)
        return StatusCode(304); // Not Modified

    Response.Headers["ETag"] = eTag;
    return Ok(resource);
}
\`\`\`
---

### **Best Practices**
- Cache only safe (idempotent) GET requests.
- Invalidate or update cache when underlying data changes.
- Use appropriate cache durations and eviction policies.
- Consider security and privacy when caching sensitive data.

---

By combining these techniques, you can significantly improve the performance and scalability of your REST API in C#.
\`\`\`
`,level:"Advanced"},{id:"ee21751a-82c4-4d03-a192-2e4fdebe2c1f",question:"How do you handle long-running operations in a REST API?",answer:`\`\`\`markdown
Handling long-running operations in a REST API (C#)

Long-running operations in REST APIs can cause timeouts and poor user experience if handled synchronously. In C#, the recommended approach is to implement an asynchronous pattern, often called the **"asynchronous request-response"** or **"polling pattern"**. Here’s how you can handle such scenarios:

### 1. Accept the Request and Return 202 Accepted

- When a client initiates a long-running operation (e.g., POST /process-data), immediately return a \`202 Accepted\` status code.
- Include a \`Location\` header in the response, pointing to a status endpoint (e.g., \`/operations/{operationId}\`).

\`\`\`csharp
[HttpPost("process-data")]
public IActionResult ProcessData([FromBody] DataModel model)
{
    var operationId = Guid.NewGuid().ToString();
    // Start background processing (e.g., via a queue or hosted service)
    _operationService.StartOperation(operationId, model);

    return AcceptedAtAction(nameof(GetOperationStatus), new { operationId }, null);
}
\`\`\`

### 2. Provide a Status Endpoint

- Implement a GET endpoint to check the status of the operation.

\`\`\`csharp
[HttpGet("operations/{operationId}")]
public IActionResult GetOperationStatus(string operationId)
{
    var status = _operationService.GetStatus(operationId);
    if (status == null)
        return NotFound();

    return Ok(status); // status can include progress, result, or error info
}
\`\`\`

### 3. Background Processing

- Use background services (e.g., \`IHostedService\`, queues, or Hangfire) to process the operation asynchronously.

\`\`\`csharp
public class OperationService : IOperationService
{
    // Store operation status in a thread-safe store (e.g., ConcurrentDictionary)
    public void StartOperation(string operationId, DataModel model)
    {
        // Enqueue or start background task
    }

    public OperationStatus GetStatus(string operationId)
    {
        // Return current status
    }
}
\`\`\`

### 4. Notify Client When Done (Optional)

- For advanced scenarios, implement **webhooks** or **SignalR** to notify clients when the operation completes.

### 5. Considerations

- **Timeouts:** Ensure the background task does not block the request thread.
- **Idempotency:** Make sure repeated requests with the same input do not trigger duplicate processing.
- **Security:** Validate operation IDs and user permissions.

### References

- [Microsoft REST API Guidelines: Long-Running Operations](https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md#1316-long-running-operations)
- [Asynchronous Request-Reply Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/async-request-reply)

---

**Summary:**  
Handle long-running operations by returning \`202 Accepted\` with a status endpoint, processing the task in the background, and allowing clients to poll for completion or receive notifications.
\`\`\`
`,level:"Advanced"},{id:"c2ad3f4e-0a73-48aa-a0c2-a235b3432118",question:"What are the differences between REST and gRPC in C#?",answer:`\`\`\`markdown
### Differences Between REST and gRPC in C#

| Aspect                | REST (with C#)                                      | gRPC (with C#)                                   |
|-----------------------|-----------------------------------------------------|--------------------------------------------------|
| **Protocol**          | HTTP/HTTPS (usually 1.1)                            | HTTP/2                                           |
| **Data Format**       | JSON, XML, or other text-based formats              | Protocol Buffers (binary, strongly typed)        |
| **Performance**       | Slower due to text parsing and larger payloads      | Faster due to binary serialization and HTTP/2    |
| **Contract**          | No strict contract; uses OpenAPI/Swagger optionally | Strongly typed via .proto files                  |
| **Streaming**         | Limited (Server-Sent Events, WebSockets)            | Native support for client, server, and bidirectional streaming |
| **Tooling**           | Mature, widely supported                            | Good tooling, but requires code generation       |
| **Browser Support**   | Natively supported                                  | Limited (no direct browser support)              |
| **Error Handling**    | HTTP status codes                                   | gRPC status codes (mapped to exceptions)         |
| **Use Case**          | Public APIs, web applications                       | Microservices, internal APIs, high-performance needs |
| **Versioning**        | URL or header-based                                 | Handled via .proto evolution rules               |
| **C# Implementation** | ASP.NET Core Web API                                | gRPC for .NET (Grpc.AspNetCore)                  |

#### Summary

- **REST** is ideal for interoperability, public APIs, and scenarios where human readability and browser compatibility are important.
- **gRPC** excels in high-performance, low-latency, and strongly-typed internal service communication, especially in microservices architectures.

**Example:**
- REST: \`[HttpGet("/users/{id}")]\` returns JSON.
- gRPC: \`rpc GetUser (GetUserRequest) returns (UserResponse);\` uses Protocol Buffers.

> **Note:** In C#, both REST and gRPC can be implemented using ASP.NET Core, but gRPC requires additional setup for .proto files and code generation.
\`\`\`
`,level:"Advanced"},{id:"8ae6c4f9-8d94-4118-a151-cb5bef043909",question:"How do you implement custom authentication schemes in ASP.NET Core?",answer:`\`\`\`markdown To implement custom authentication schemes in ASP.NET Core, you typically create a custom authentication handler by inheriting from \`AuthenticationHandler<TOptions>\`, register your scheme in \`Startup.cs\` (or \`Program.cs\` in .NET 6+), and configure your authentication logic. Here’s a step-by-step guide:

---

## 1. Create Custom Authentication Options

\`\`\`csharp
public class CustomAuthOptions : AuthenticationSchemeOptions
{
    // Add custom options if needed
}
\`\`\`

---

## 2. Implement the Authentication Handler

\`\`\`csharp
public class CustomAuthHandler : AuthenticationHandler<CustomAuthOptions>
{
    public CustomAuthHandler(
        IOptionsMonitor<CustomAuthOptions> options,
        ILoggerFactory logger,
        UrlEncoder encoder,
        ISystemClock clock)
        : base(options, logger, encoder, clock)
    { }

    protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
    {
        // Example: Extract token from header
        var authHeader = Request.Headers["Authorization"].FirstOrDefault();
        if (string.IsNullOrEmpty(authHeader) || !authHeader.StartsWith("CustomScheme "))
        {
            return AuthenticateResult.Fail("Invalid Authorization Header");
        }

        var token = authHeader.Substring("CustomScheme ".Length).Trim();

        // Validate the token (implement your logic)
        if (token != "expected-token")
        {
            return AuthenticateResult.Fail("Invalid Token");
        }

        // Create authenticated user
        var claims = new[] { new Claim(ClaimTypes.Name, "CustomUser") };
        var identity = new ClaimsIdentity(claims, Scheme.Name);
        var principal = new ClaimsPrincipal(identity);
        var ticket = new AuthenticationTicket(principal, Scheme.Name);

        return AuthenticateResult.Success(ticket);
    }
}
\`\`\`

---

## 3. Register the Custom Scheme

**.NET 6+ (Program.cs):**

\`\`\`csharp
builder.Services.AddAuthentication("CustomScheme")
    .AddScheme<CustomAuthOptions, CustomAuthHandler>("CustomScheme", options => { });
\`\`\`

**ASP.NET Core 3.1/5 (Startup.cs):**

\`\`\`csharp
services.AddAuthentication("CustomScheme")
    .AddScheme<CustomAuthOptions, CustomAuthHandler>("CustomScheme", options => { });
\`\`\`

---

## 4. Configure Authentication Middleware

\`\`\`csharp
app.UseAuthentication();
app.UseAuthorization();
\`\`\`

---

## 5. Protect Endpoints

\`\`\`csharp
[Authorize(AuthenticationSchemes = "CustomScheme")]
[ApiController]
[Route("[controller]")]
public class SecureController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok("You are authenticated!");
}
\`\`\`

---

## Summary

- **Create** custom options and handler.
- **Register** the scheme in DI.
- **Configure** authentication middleware.
- **Protect** endpoints with \`[Authorize]\`.

**References:**
- [Microsoft Docs: Custom authentication in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/customize-auth-handler)
- [Authentication and Authorization in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/)

---

**Note:** Replace the token validation logic with your actual authentication mechanism (e.g., database lookup, external service, etc.).`,level:"Advanced"},{id:"c7831933-a28a-4fb4-8ea5-d51bfe414fa7",question:"How can you ensure idempotency in REST API operations?",answer:`\`\`\`markdown To ensure **idempotency** in REST API operations using C#, you need to design your API so that making the same request multiple times has the same effect as making it once. This is especially important for operations like POST (typically non-idempotent), where duplicate submissions (e.g., due to network retries) could cause unintended side effects.

### Key Strategies for Ensuring Idempotency

#### 1. Use Idempotent HTTP Methods
- **GET, PUT, DELETE, and HEAD** are inherently idempotent by HTTP specification.
- **POST** is not idempotent by default, so extra care is needed.

#### 2. Idempotency Keys for POST Requests
- Require clients to send a unique \`Idempotency-Key\` header with each request.
- On the server, store the result of the first request with that key.
- For subsequent requests with the same key, return the stored result instead of processing again.

**Example Implementation in C#:**

\`\`\`csharp
[HttpPost]
public async Task<IActionResult> CreateOrder([FromBody] OrderDto order, [FromHeader(Name = "Idempotency-Key")] string idempotencyKey)
{
    if (string.IsNullOrEmpty(idempotencyKey))
        return BadRequest("Idempotency-Key header is required.");

    var existing = await _idempotencyStore.GetResultAsync(idempotencyKey);
    if (existing != null)
        return Ok(existing);

    var result = await _orderService.CreateOrderAsync(order);

    await _idempotencyStore.SaveResultAsync(idempotencyKey, result);

    return Ok(result);
}
\`\`\`

#### 3. Resource-Oriented Design
- Use **PUT** for creating/updating resources at a known URI (e.g., \`/users/123\`), which is idempotent by nature.
- Example: Repeatedly sending the same PUT request to \`/users/123\` with the same data will not create duplicate users.

#### 4. Database Constraints
- Enforce uniqueness at the database level (e.g., unique indexes) to prevent duplicate records.

#### 5. Safe Retry Logic
- Ensure that retrying a failed request (due to timeout, etc.) does not cause unintended side effects.

### Summary Table

| HTTP Method | Idempotent by Default? | How to Ensure Idempotency |
|-------------|-----------------------|---------------------------|
| GET         | Yes                   | No action needed          |
| PUT         | Yes                   | Use resource URI          |
| DELETE      | Yes                   | No action needed          |
| POST        | No                    | Use Idempotency-Key       |

---

**References:**
- [Idempotency in REST APIs (Microsoft Docs)](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#idempotency)
- [RFC 7231 - HTTP/1.1 Semantics and Content](https://tools.ietf.org/html/rfc7231#section-4.2.2)

---

**In summary:**  
To ensure idempotency in REST API operations in C#, use idempotent HTTP methods where possible, implement idempotency keys for POST requests, design your resources carefully, and enforce uniqueness at the data layer. This protects your API from unintended side effects due to duplicate or retried requests.`,level:"Advanced"},{id:"9b6dfd42-654d-4cbb-91a8-6766a571c039",question:"What are the common security vulnerabilities in REST APIs and how do you prevent them?",answer:`\`\`\`markdown
## Common Security Vulnerabilities in REST APIs and Their Prevention (C#)

REST APIs are susceptible to various security vulnerabilities. Here are some of the most common ones and strategies to prevent them, particularly in a C# (ASP.NET Core) context:

---

### 1. **Broken Authentication**
- **Vulnerability:** Attackers can compromise authentication tokens or credentials to impersonate users.
- **Prevention:**
  - Use strong authentication mechanisms (e.g., OAuth 2.0, OpenID Connect).
  - Store passwords securely using hashing algorithms like BCrypt.
  - Implement token expiration and rotation.
  - Use HTTPS to protect credentials in transit.

---

### 2. **Sensitive Data Exposure**
- **Vulnerability:** Sensitive data (e.g., passwords, tokens, personal information) is exposed in requests, responses, or logs.
- **Prevention:**
  - Always use HTTPS.
  - Avoid returning sensitive data in API responses.
  - Encrypt sensitive data at rest and in transit.
  - Mask sensitive fields in logs.

---

### 3. **Injection Attacks (e.g., SQL Injection)**
- **Vulnerability:** Unsanitized input is used in database queries or commands.
- **Prevention:**
  - Use parameterized queries or ORM frameworks like Entity Framework.
  - Validate and sanitize all user inputs.
  - Avoid dynamic SQL where possible.

---

### 4. **Lack of Rate Limiting**
- **Vulnerability:** APIs are susceptible to brute-force attacks or denial of service.
- **Prevention:**
  - Implement rate limiting using middleware (e.g., [AspNetCoreRateLimit](https://github.com/stefanprodan/AspNetCoreRateLimit)).
  - Monitor and block suspicious activity.

---

### 5. **Broken Access Control**
- **Vulnerability:** Users can access or modify resources they shouldn't.
- **Prevention:**
  - Enforce authorization checks on every endpoint (e.g., \`[Authorize]\` attribute in ASP.NET Core).
  - Use claims-based or role-based access control.
  - Never rely solely on client-side checks.

---

### 6. **Cross-Site Request Forgery (CSRF)**
- **Vulnerability:** Attackers trick users into making unwanted requests.
- **Prevention:**
  - For APIs intended for browsers, implement anti-CSRF tokens.
  - Use the \`SameSite\` cookie attribute.

---

### 7. **Improper Error Handling**
- **Vulnerability:** Detailed error messages reveal sensitive information.
- **Prevention:**
  - Return generic error messages to clients.
  - Log detailed errors server-side only.

---

### 8. **Insecure Deserialization**
- **Vulnerability:** Malicious payloads can exploit deserialization logic.
- **Prevention:**
  - Avoid deserializing untrusted data.
  - Use safe serialization libraries.
  - Validate input before deserialization.

---

### 9. **Security Misconfiguration**
- **Vulnerability:** Default configurations, unnecessary features, or verbose headers.
- **Prevention:**
  - Disable unused HTTP methods (e.g., PUT, DELETE if not needed).
  - Remove or restrict access to development/debug endpoints.
  - Set secure HTTP headers (e.g., \`X-Content-Type-Options\`, \`Strict-Transport-Security\`).

---

## **Best Practices in C# (ASP.NET Core)**
- Use \`[Authorize]\` and \`[ValidateAntiForgeryToken]\` attributes.
- Configure CORS policies strictly.
- Keep dependencies and frameworks up to date.
- Regularly perform security testing and code reviews.

---

**References:**
- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
- [Microsoft: Secure a Web API](https://learn.microsoft.com/en-us/aspnet/core/security/?view=aspnetcore-7.0)
\`\`\`
`,level:"Advanced"},{id:"1a9235ec-cc0c-482a-a396-41dd56669ebe",question:"How do you implement global exception handling in ASP.NET Core?",answer:`\`\`\`markdown
### Implementing Global Exception Handling in ASP.NET Core

Global exception handling in ASP.NET Core is typically achieved using **middleware**. This ensures that unhandled exceptions are caught and processed in a consistent way across your entire API.

#### 1. Create a Custom Exception Middleware

\`\`\`csharp
public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionMiddleware> _logger;
    private readonly IHostEnvironment _env;

    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
    {
        _next = next;
        _logger = logger;
        _env = env;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            await HandleExceptionAsync(httpContext, ex);
        }
    }

    private Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        var response = _env.IsDevelopment()
            ? new { message = exception.Message, stackTrace = exception.StackTrace }
            : new { message = "Internal Server Error" };

        return context.Response.WriteAsync(JsonSerializer.Serialize(response));
    }
}
\`\`\`

#### 2. Register the Middleware in the Pipeline

In your \`Startup.cs\` (ASP.NET Core 3.1/5) or \`Program.cs\` (ASP.NET Core 6+):

\`\`\`csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseMiddleware<ExceptionMiddleware>();
    // ... other middleware registrations
}
\`\`\`

#### 3. (Optional) Use Built-in Exception Handler

ASP.NET Core also provides a built-in exception handler:

\`\`\`csharp
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        context.Response.ContentType = "application/json";
        var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
        if (contextFeature != null)
        {
            await context.Response.WriteAsync(JsonSerializer.Serialize(new
            {
                message = "Internal Server Error"
            }));
        }
    });
});
\`\`\`

#### 4. Benefits

- **Centralized error handling**: All unhandled exceptions are processed in one place.
- **Consistent error responses**: Clients receive uniform error messages.
- **Logging**: Exceptions can be logged globally.

#### 5. References

- [Official Docs: Exception handling in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/error-handling)
\`\`\`
`,level:"Advanced"},{id:"e9bc20dc-dab2-4c20-9bad-3d5640944b16",question:"How do you perform integration testing for REST APIs in C#?",answer:`\`\`\`markdown
### Performing Integration Testing for REST APIs in C#

Integration testing for REST APIs in C# typically involves testing the API endpoints as a whole, including their interaction with databases and other services. Here’s a step-by-step approach using popular tools and frameworks:

#### 1. **Use the Right Testing Frameworks**
- **xUnit**, **NUnit**, or **MSTest** for test orchestration.
- **Microsoft.AspNetCore.Mvc.Testing** for bootstrapping the API in-memory.
- **FluentAssertions** or **Shouldly** for expressive assertions.
- **HttpClient** for sending HTTP requests.

#### 2. **Set Up the Test Project**
- Create a separate test project (e.g., \`MyApi.IntegrationTests\`).
- Reference your API project and necessary NuGet packages.

\`\`\`bash
dotnet add package Microsoft.AspNetCore.Mvc.Testing
dotnet add package xunit
dotnet add package FluentAssertions
\`\`\`

#### 3. **Configure WebApplicationFactory**
Use \`WebApplicationFactory<TEntryPoint>\` to spin up your API in-memory for testing.

\`\`\`csharp
public class CustomWebApplicationFactory<TStartup>
    : WebApplicationFactory<TStartup> where TStartup : class
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            // Optionally replace services, e.g., use in-memory DB
        });
    }
}
\`\`\`

#### 4. **Write Integration Tests**

\`\`\`csharp
public class MyApiIntegrationTests : IClassFixture<CustomWebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public MyApiIntegrationTests(CustomWebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task Get_Endpoint_ReturnsSuccessAndExpectedContent()
    {
        // Arrange
        var url = "/api/values";

        // Act
        var response = await _client.GetAsync(url);

        // Assert
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        content.Should().Contain("expected value");
    }
}
\`\`\`

#### 5. **Mock or Use In-Memory Databases**
- Use **InMemoryDatabase** (e.g., with Entity Framework Core) to avoid hitting production databases.
- Override configuration in \`ConfigureWebHost\`.

#### 6. **Test Various Scenarios**
- Test all endpoints (GET, POST, PUT, DELETE).
- Test with valid and invalid data.
- Test authentication/authorization if applicable.

#### 7. **Run Tests Automatically**
- Integrate with CI/CD pipelines for automated testing.

---

**References:**
- [Microsoft Docs: Integration tests in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests)
- [xUnit Documentation](https://xunit.net/docs/getting-started/netcore/cmdline)

---
\`\`\``,level:"Advanced"},{id:"0f720820-03be-40e2-8823-d576114554bb",question:"What is OpenAPI and how does it relate to REST APIs in C#?",answer:`\`\`\`markdown **OpenAPI** is a specification for describing and documenting RESTful APIs in a standardized, machine-readable format (usually YAML or JSON). Formerly known as Swagger, OpenAPI allows developers to define the endpoints, request/response types, authentication methods, and other aspects of an API in a way that both humans and computers can understand.

### How OpenAPI Relates to REST APIs in C#

- **API Documentation:** In C#, especially with ASP.NET Core, you can use tools like [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle.AspNetCore) or [NSwag](https://github.com/RicoSuter/NSwag) to automatically generate OpenAPI (Swagger) documentation from your REST API controllers and models.
- **Client Generation:** OpenAPI definitions can be used to auto-generate strongly-typed C# client libraries, making it easier to consume APIs with less manual coding.
- **Contract-First Development:** You can design your API using an OpenAPI specification first, then generate C# server stubs to implement the API, ensuring consistency between documentation and implementation.
- **Interactive Testing:** Tools like Swagger UI (integrated via Swashbuckle) provide interactive web pages to explore and test your C# REST API endpoints directly from the browser.

### Example Workflow in C#

1. **Annotate Controllers:** Use attributes in your ASP.NET Core controllers and models.
2. **Generate OpenAPI Spec:** Swashbuckle or NSwag scans your code and produces an OpenAPI document (\`swagger.json\`).
3. **Serve Documentation:** The OpenAPI document can be served with Swagger UI for interactive documentation.
4. **Client/Server Generation:** Use the OpenAPI spec to generate C# clients or server stubs as needed.

### Summary Table

| Feature                | OpenAPI Role in C# REST APIs                  |
|------------------------|-----------------------------------------------|
| Documentation          | Auto-generates interactive API docs           |
| Client Generation      | Produces C# clients from API definitions      |
| Server Stubs           | Generates C# server code from OpenAPI specs   |
| Testing                | Enables in-browser testing via Swagger UI     |

**In summary:**  
OpenAPI is a crucial standard for describing REST APIs, and in C# (especially with ASP.NET Core), it streamlines API documentation, testing, and code generation, improving both developer experience and API reliability.`,level:"Advanced"},{id:"33135de2-6e37-4868-bb4b-0a2216f4dcd3",question:"How do you implement role-based authorization in a REST API?",answer:`\`\`\`markdown
To implement role-based authorization in a REST API using C#, you typically use ASP.NET Core's built-in authentication and authorization features. Here’s a step-by-step approach:

### 1. Define Roles

Decide on the roles your application will use (e.g., \`Admin\`, \`User\`, \`Manager\`).

### 2. Configure Authentication

Set up authentication (e.g., JWT Bearer authentication) in \`Startup.cs\` or \`Program.cs\`:

\`\`\`csharp
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            // Configure token validation parameters
        };
    });
\`\`\`

### 3. Add Authorization Policies (Optional)

You can define policies for more granular control:

\`\`\`csharp
services.AddAuthorization(options =>
{
    options.AddPolicy("RequireAdminRole", policy => policy.RequireRole("Admin"));
});
\`\`\`

### 4. Decorate Controllers or Actions with \`[Authorize]\`

Use the \`[Authorize]\` attribute to restrict access based on roles:

\`\`\`csharp
[Authorize(Roles = "Admin")]
[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    // Only accessible by users with the 'Admin' role
    [HttpGet]
    public IActionResult GetAdminData()
    {
        return Ok("This is admin data.");
    }
}
\`\`\`

You can also use policies:

\`\`\`csharp
[Authorize(Policy = "RequireAdminRole")]
[HttpGet("secure-data")]
public IActionResult GetSecureData()
{
    return Ok("Only admins can see this.");
}
\`\`\`

### 5. Assign Roles to Users

When issuing JWT tokens, include the user's roles in the claims:

\`\`\`csharp
var claims = new List<Claim>
{
    new Claim(ClaimTypes.Name, user.UserName),
    new Claim(ClaimTypes.Role, "Admin")
    // Add more roles as needed
};
\`\`\`

### 6. Test the API

When a request is made to a role-protected endpoint, ASP.NET Core will automatically check the user's roles from the token and allow or deny access.

---

**Summary Table**

| Step                          | Description                                      |
|-------------------------------|--------------------------------------------------|
| Define Roles                  | Decide on roles (e.g., Admin, User)              |
| Configure Authentication      | Set up JWT or other authentication               |
| Add Authorization Policies    | (Optional) Define custom policies                |
| Use \`[Authorize]\` Attribute   | Restrict controllers/actions by role/policy      |
| Assign Roles in JWT Claims    | Add roles to user claims in the token            |
| Test                          | Ensure endpoints are secured as expected         |

---

**References:**
- [Microsoft Docs: Role-based authorization in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/roles)
- [Microsoft Docs: Authentication and authorization in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/)
\`\`\`
`,level:"Advanced"},{id:"1991c1d8-27ee-433b-9b09-f90547e23af0",question:"How do you handle circular references in JSON serialization?",answer:`\`\`\`markdown
### Handling Circular References in JSON Serialization in C#

Circular references occur when two or more objects reference each other, causing infinite loops during serialization. In C#, this is a common issue when serializing object graphs to JSON, especially with entity relationships (e.g., parent-child).

#### Approaches to Handle Circular References

#### 1. Using \`ReferenceHandler.Preserve\` (System.Text.Json in .NET 5+)

\`\`\`csharp
var options = new JsonSerializerOptions
{
    ReferenceHandler = ReferenceHandler.Preserve,
    WriteIndented = true
};

string json = JsonSerializer.Serialize(yourObject, options);
\`\`\`
This will serialize references using \`$id\` and \`$ref\` properties to handle cycles.

#### 2. Using \`[JsonIgnore]\` Attribute

You can prevent serialization of specific properties that cause circular references:

\`\`\`csharp
public class Parent
{
    public string Name { get; set; }
    public Child Child { get; set; }
}

public class Child
{
    public string Name { get; set; }
    [JsonIgnore]
    public Parent Parent { get; set; }
}
\`\`\`

#### 3. Using \`JsonSerializerSettings\` in Newtonsoft.Json

If you use Newtonsoft.Json (Json.NET):

\`\`\`csharp
var settings = new JsonSerializerSettings
{
    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
};

string json = JsonConvert.SerializeObject(yourObject, settings);
\`\`\`
Or, to preserve references:

\`\`\`csharp
var settings = new JsonSerializerSettings
{
    PreserveReferencesHandling = PreserveReferencesHandling.Objects
};

string json = JsonConvert.SerializeObject(yourObject, settings);
\`\`\`

#### 4. DTOs (Data Transfer Objects)

Map your entities to DTOs that do not contain circular references before serialization.

---

**Summary Table**

| Method                          | Library            | Notes                                  |
|----------------------------------|--------------------|----------------------------------------|
| \`ReferenceHandler.Preserve\`      | System.Text.Json   | .NET 5+, preserves object references   |
| \`[JsonIgnore]\`                   | Both               | Prevents property serialization        |
| \`ReferenceLoopHandling.Ignore\`   | Newtonsoft.Json    | Ignores circular references            |
| \`PreserveReferencesHandling\`     | Newtonsoft.Json    | Serializes references with \`$id\`/\`$ref\`|
| DTO Mapping                      | N/A                | Manual mapping, best for APIs          |

**Choose the method that best fits your application's requirements and serialization library.**
\`\`\`
`,level:"Advanced"},{id:"e11beac8-62e5-47d9-99c8-cee098bb27d0",question:"How do you implement health checks for a REST API in ASP.NET Core?",answer:`\`\`\`markdown
To implement health checks for a REST API in ASP.NET Core, you can use the built-in Health Checks middleware. This allows you to monitor the health of your application and its dependencies (like databases, external services, etc.). Here’s how you can set it up:

### 1. Add the Health Checks NuGet Package

If you’re using ASP.NET Core 2.2 or later, health checks are included by default. For additional checks (like SQL Server, Redis, etc.), you may need to install extra packages:

\`\`\`bash
dotnet add package Microsoft.AspNetCore.Diagnostics.HealthChecks
\`\`\`

### 2. Register Health Checks in \`Startup.cs\`

In the \`ConfigureServices\` method, add health checks:

\`\`\`csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();

    // Basic health check
    services.AddHealthChecks();

    // Example: Add a SQL Server health check
    // services.AddHealthChecks()
    //         .AddSqlServer(Configuration.GetConnectionString("DefaultConnection"));
}
\`\`\`

### 3. Configure the Health Checks Endpoint

In the \`Configure\` method, map the health check endpoint:

\`\`\`csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseRouting();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();

        // Expose the health check endpoint at /health
        endpoints.MapHealthChecks("/health");
    });
}
\`\`\`

### 4. Customizing Health Check Responses

To return a more detailed JSON response, use \`HealthCheckOptions\`:

\`\`\`csharp
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using System.Text.Json;

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();

    endpoints.MapHealthChecks("/health", new HealthCheckOptions
    {
        ResponseWriter = async (context, report) =>
        {
            context.Response.ContentType = "application/json";
            var result = JsonSerializer.Serialize(new
            {
                status = report.Status.ToString(),
                checks = report.Entries.Select(e => new {
                    name = e.Key,
                    status = e.Value.Status.ToString(),
                    description = e.Value.Description
                })
            });
            await context.Response.WriteAsync(result);
        }
    });
});
\`\`\`

### 5. Adding Custom Health Checks

You can implement your own health checks by creating a class that implements \`IHealthCheck\`:

\`\`\`csharp
public class CustomHealthCheck : IHealthCheck
{
    public Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context,
        CancellationToken cancellationToken = default)
    {
        // Custom logic here
        bool healthCheckResultHealthy = true;

        if (healthCheckResultHealthy)
        {
            return Task.FromResult(HealthCheckResult.Healthy("A healthy result."));
        }

        return Task.FromResult(HealthCheckResult.Unhealthy("An unhealthy result."));
    }
}
\`\`\`

Register your custom health check in \`ConfigureServices\`:

\`\`\`csharp
services.AddHealthChecks()
        .AddCheck<CustomHealthCheck>("custom_health_check");
\`\`\`

---

**Summary:**  
- Register health checks in \`ConfigureServices\`.
- Map a health check endpoint in \`Configure\`.
- Optionally customize the response and add checks for dependencies.
- Implement custom checks as needed.

**References:**  
- [Microsoft Docs: Health checks in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/health-checks)
\`\`\`
`,level:"Advanced"},{id:"f945ac47-1ea1-4e83-a26c-724d2dbf5956",question:"What is OData and how can it be used in REST APIs?",answer:`\`\`\`markdown **OData (Open Data Protocol)** is a standardized protocol developed by Microsoft for building and consuming RESTful APIs. It enables the creation and consumption of queryable and interoperable REST APIs in a simple and standard way.

### Key Features of OData

- **Query Options:** Supports rich querying capabilities directly via URL, such as \`$filter\`, \`$select\`, \`$orderby\`, \`$top\`, and \`$expand\`.
- **Metadata:** Exposes metadata (via \`$metadata\` endpoint) describing the data model, which helps clients understand the structure of the API.
- **Standardization:** Provides conventions for CRUD operations, navigation, and relationships, making APIs more predictable and interoperable.
- **Data Shaping:** Allows clients to request only the data they need, reducing payload size and improving performance.

### Using OData in C# REST APIs

#### 1. **Setup**

OData can be integrated into ASP.NET Core Web API projects using the \`Microsoft.AspNetCore.OData\` NuGet package.

\`\`\`bash
dotnet add package Microsoft.AspNetCore.OData
\`\`\`

#### 2. **Configuration**

In \`Startup.cs\` or \`Program.cs\`, configure OData in the service container and define the OData route and model:

\`\`\`csharp
using Microsoft.AspNetCore.OData;
using Microsoft.OData.ModelBuilder;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddOData(opt => opt.AddRouteComponents("odata", GetEdmModel()).Select().Filter().OrderBy().Expand().Count().SetMaxTop(100));

static IEdmModel GetEdmModel()
{
    var odataBuilder = new ODataConventionModelBuilder();
    odataBuilder.EntitySet<Product>("Products");
    return odataBuilder.GetEdmModel();
}
\`\`\`

#### 3. **Controller Example**

Create an OData controller that inherits from \`ODataController\`:

\`\`\`csharp
using Microsoft.AspNetCore.OData.Routing.Controllers;

public class ProductsController : ODataController
{
    private readonly List<Product> _products = new List<Product>
    {
        new Product { Id = 1, Name = "Laptop", Price = 1200 },
        new Product { Id = 2, Name = "Phone", Price = 800 }
    };

    [EnableQuery]
    public IActionResult Get()
    {
        return Ok(_products.AsQueryable());
    }
}
\`\`\`

#### 4. **Querying the API**

Clients can use OData query options in the URL:

- \`/odata/Products?$filter=Price gt 1000\`
- \`/odata/Products?$select=Name\`
- \`/odata/Products?$orderby=Price desc&$top=1\`

#### 5. **Benefits**

- **Flexibility:** Clients can shape the data they receive.
- **Discoverability:** Metadata endpoint helps clients understand the API.
- **Interoperability:** Standardized protocol eases integration with various tools and platforms.

---

**In summary:**  
OData is a protocol for building REST APIs that supports advanced querying, metadata exposure, and standardization. In C#, it can be easily integrated using ASP.NET Core and the OData libraries, enabling powerful and flexible APIs.`,level:"Advanced"},{id:"f3402893-b485-4262-b47a-b05b02cf7c9a",question:"How do you deploy a REST API built with C# to Azure?",answer:`\`\`\`markdown To deploy a REST API built with C# (commonly using ASP.NET Core) to Azure, follow these steps:

## 1. Prerequisites

- **Azure account** ([Sign up](https://azure.microsoft.com/free/))
- **.NET SDK** installed ([Download](https://dotnet.microsoft.com/download))
- **Visual Studio** or **VS Code** (optional, but recommended)
- **Azure CLI** ([Install](https://docs.microsoft.com/cli/azure/install-azure-cli))

---

## 2. Prepare Your API

Ensure your API is working locally:

\`\`\`bash
dotnet build
dotnet run
\`\`\`

---

## 3. Publish the API

Generate a publish-ready folder:

\`\`\`bash
dotnet publish -c Release -o ./publish
\`\`\`

---

## 4. Create an Azure App Service

You can use the Azure Portal or Azure CLI. Here’s how to do it with the CLI:

\`\`\`bash
# Log in to Azure
az login

# Create a resource group (if needed)
az group create --name MyResourceGroup --location "EastUS"

# Create an App Service plan
az appservice plan create --name MyAppServicePlan --resource-group MyResourceGroup --sku FREE

# Create a Web App
az webapp create --resource-group MyResourceGroup --plan MyAppServicePlan --name <YourUniqueAppName>
\`\`\`

---

## 5. Deploy the API

### Option 1: Deploy via Azure CLI

\`\`\`bash
az webapp deploy --resource-group MyResourceGroup --name <YourUniqueAppName> --src-path ./publish
\`\`\`

### Option 2: Deploy via Visual Studio

1. Right-click your project > **Publish**.
2. Select **Azure** > **Azure App Service (Windows/Linux)**.
3. Follow the prompts to create/select the App Service and publish.

---

## 6. Configure Application Settings (Optional)

Set environment variables or connection strings in the Azure Portal under **Configuration**.

---

## 7. Test Your API

Visit \`https://<YourUniqueAppName>.azurewebsites.net/api/your-endpoint\` to verify deployment.

---

## 8. Monitor and Scale

Use Azure Portal to monitor logs, set up scaling, and manage your API.

---

**References:**
- [Deploy ASP.NET Core app to Azure App Service](https://learn.microsoft.com/azure/app-service/quickstart-dotnetcore)
- [Azure CLI documentation](https://learn.microsoft.com/cli/azure/webapp)

---

**Tip:** For CI/CD, consider using [GitHub Actions](https://learn.microsoft.com/azure/app-service/deploy-github-actions) or [Azure DevOps](https://learn.microsoft.com/azure/devops/pipelines/targets/webapp).`,level:"Advanced"},{id:"3d80e6ff-4bbb-4426-94e3-af071d4d883f",question:"How do you monitor and log performance metrics in a REST API?",answer:`\`\`\`markdown To monitor and log performance metrics in a REST API built with C#, you can leverage middleware, logging frameworks, and performance monitoring tools. Here’s how you can approach this:

## 1. Middleware for Request Timing

Implement custom middleware to measure the time taken to process each request.

\`\`\`csharp
public class RequestTimingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestTimingMiddleware> _logger;

    public RequestTimingMiddleware(RequestDelegate next, ILogger<RequestTimingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var stopwatch = Stopwatch.StartNew();
        await _next(context);
        stopwatch.Stop();

        var elapsedMs = stopwatch.ElapsedMilliseconds;
        _logger.LogInformation("Request {method} {url} => {statusCode} took {elapsed} ms",
            context.Request.Method,
            context.Request.Path,
            context.Response.StatusCode,
            elapsedMs);
    }
}
\`\`\`

Register the middleware in \`Startup.cs\` or \`Program.cs\`:

\`\`\`csharp
app.UseMiddleware<RequestTimingMiddleware>();
\`\`\`

## 2. Structured Logging

Use a logging framework like [Serilog](https://serilog.net/) or [NLog](https://nlog-project.org/) for structured, queryable logs.

Example with Serilog:

\`\`\`csharp
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .WriteTo.File("logs/api-log.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

builder.Host.UseSerilog();
\`\`\`

## 3. Application Insights or Prometheus

Integrate with monitoring tools for advanced metrics:

- **Azure Application Insights**: Provides automatic collection of request rates, response times, failure rates, dependencies, and more.
  
  \`\`\`csharp
  builder.Services.AddApplicationInsightsTelemetry();
  \`\`\`

- **Prometheus & Grafana**: Use [prometheus-net](https://github.com/prometheus-net/prometheus-net) to expose metrics endpoints.

  \`\`\`csharp
  builder.Services.AddSingleton<IMetricServer>(_ => new KestrelMetricServer(port: 1234));
  \`\`\`

## 4. Health Checks

Add health checks to monitor the health and dependencies of your API.

\`\`\`csharp
builder.Services.AddHealthChecks();
app.MapHealthChecks("/health");
\`\`\`

## 5. Example Metrics to Log

- Request/response time
- HTTP status codes
- Exception details
- Throughput (requests per second)
- Resource usage (CPU, memory)

## 6. Sample Log Output

\`\`\`
Request GET /api/products => 200 took 45 ms
Request POST /api/orders => 500 took 120 ms
\`\`\`

## 7. Visualization

Use dashboards (e.g., Azure Portal, Grafana) to visualize and analyze metrics over time.

---

**Summary:**  
Monitor and log performance metrics in a C# REST API by implementing timing middleware, using structured logging frameworks, integrating with monitoring tools like Application Insights or Prometheus, and exposing health check endpoints. This enables real-time monitoring, troubleshooting, and performance optimization.`,level:"Advanced"},{id:"1a157832-4c17-4aba-892b-dd11dc4ddda1",question:"How do you implement multi-tenancy in a REST API?",answer:`\`\`\`markdown
### Implementing Multi-Tenancy in a REST API (C#)

Multi-tenancy allows a single REST API to serve multiple clients (tenants), isolating their data and configurations. In C#, especially with ASP.NET Core, you can implement multi-tenancy using several strategies:

#### 1. Tenant Identification

**Common Approaches:**
- **URL Path:** \`https://api.example.com/{tenantId}/resource\`
- **Subdomain:** \`https://{tenant}.api.example.com/resource\`
- **HTTP Header:** Custom header like \`X-Tenant-ID: tenant1\`
- **Token Claims:** Tenant info embedded in JWT tokens

**Example (Header-based):**
\`\`\`csharp
public class TenantMiddleware
{
    private readonly RequestDelegate _next;

    public TenantMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context, ITenantProvider tenantProvider)
    {
        var tenantId = context.Request.Headers["X-Tenant-ID"].FirstOrDefault();
        if (string.IsNullOrEmpty(tenantId))
        {
            context.Response.StatusCode = StatusCodes.Status400BadRequest;
            await context.Response.WriteAsync("Tenant ID is missing.");
            return;
        }

        tenantProvider.SetTenant(tenantId);
        await _next(context);
    }
}
\`\`\`

#### 2. Tenant Context Management

Create a service to hold the current tenant's context for each request.

\`\`\`csharp
public interface ITenantProvider
{
    string TenantId { get; }
    void SetTenant(string tenantId);
}

public class TenantProvider : ITenantProvider
{
    private string _tenantId;
    public string TenantId => _tenantId;
    public void SetTenant(string tenantId) => _tenantId = tenantId;
}
\`\`\`

Register \`TenantProvider\` as a scoped service in \`Startup.cs\` or \`Program.cs\`.

#### 3. Data Isolation Strategies

- **Separate Databases:** Each tenant has its own database.
- **Shared Database, Separate Schemas:** One database, different schemas per tenant.
- **Shared Database, Shared Schema:** Tenant ID column in all tables.

**Example (EF Core, Shared Schema):**
\`\`\`csharp
public class ApplicationDbContext : DbContext
{
    private readonly ITenantProvider _tenantProvider;

    public ApplicationDbContext(DbContextOptions options, ITenantProvider tenantProvider)
        : base(options) => _tenantProvider = tenantProvider;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>().HasQueryFilter(
            c => c.TenantId == _tenantProvider.TenantId);
    }
}
\`\`\`

#### 4. Authorization and Validation

Ensure all API endpoints validate the tenant context and restrict access to tenant-specific data.

#### 5. Dependency Injection and Middleware Registration

\`\`\`csharp
services.AddScoped<ITenantProvider, TenantProvider>();
app.UseMiddleware<TenantMiddleware>();
\`\`\`

#### 6. Additional Considerations

- **Caching:** Cache per tenant to avoid data leaks.
- **Logging & Auditing:** Include tenant info in logs.
- **Rate Limiting:** Apply limits per tenant.

---

**Summary:**  
Implementing multi-tenancy in a C# REST API involves identifying tenants (via URL, header, etc.), managing tenant context per request, isolating tenant data (database or schema strategies), and enforcing tenant-specific authorization. Middleware and dependency injection are key to integrating multi-tenancy cleanly into your API architecture.
\`\`\`
`,level:"Advanced"},{id:"ea5a7037-aec8-457e-8d4d-40a8d7dd9db8",question:"How do you handle API deprecation and backward compatibility?",answer:`\`\`\`markdown Handling API Deprecation and Backward Compatibility in C#
=========================================================

When developing and maintaining REST APIs in C#, ensuring backward compatibility and managing API deprecation are crucial for a smooth client experience. Here’s how you can approach these challenges:

### 1. **Versioning Your API**

- **URL Versioning:**  
  Example: \`/api/v1/products\`, \`/api/v2/products\`
- **Header Versioning:**  
  Clients specify the version in the request header (e.g., \`api-version: 2.0\`).
- **Query String Versioning:**  
  Example: \`/api/products?api-version=2.0\`

**ASP.NET Core Example:**
\`\`\`csharp
services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
});
\`\`\`

### 2. **Deprecating Endpoints**

- **Mark Deprecated Endpoints:**  
  Use attributes or documentation to indicate deprecated endpoints.
- **Custom Response Headers:**  
  Add headers like \`Deprecation\` or \`Sunset\` to responses.
- **Provide Alternatives:**  
  In documentation and responses, suggest the preferred new endpoints.

**Example:**
\`\`\`csharp
[Obsolete("This endpoint is deprecated. Use /api/v2/products instead.")]
[HttpGet("api/v1/products")]
public IActionResult GetProductsV1() { ... }
\`\`\`

### 3. **Graceful Deprecation Strategy**

- **Announce Deprecation Early:**  
  Communicate with clients via changelogs, documentation, and headers.
- **Support Old Versions Temporarily:**  
  Maintain old versions for a defined period.
- **Monitor Usage:**  
  Track usage of deprecated endpoints to inform clients and plan removal.
- **Remove Deprecated Endpoints:**  
  After the deprecation period, remove outdated endpoints.

### 4. **Backward Compatibility Practices**

- **Avoid Breaking Changes:**  
  - Only add new fields (never remove or rename existing ones).
  - Make new fields optional.
  - Don’t change existing response formats.
- **Use Feature Flags:**  
  Toggle new features for specific clients.
- **Contract Testing:**  
  Use tools like Swagger/OpenAPI to ensure contracts remain compatible.

### 5. **Documentation**

- Clearly document deprecated endpoints and their alternatives.
- Use OpenAPI/Swagger annotations to indicate deprecation.

**Swagger Example:**
\`\`\`csharp
[ApiExplorerSettings(IgnoreApi = false)]
[Obsolete("This endpoint is deprecated.")]
[HttpGet("api/v1/products")]
public IActionResult GetProductsV1() { ... }
\`\`\`

---

**Summary Table**

| Practice                | Description                                      |
|-------------------------|--------------------------------------------------|
| API Versioning          | Isolate breaking changes in new versions         |
| Deprecation Notices     | Mark endpoints as deprecated in code/docs        |
| Graceful Removal        | Announce, monitor, and eventually remove         |
| Backward Compatibility  | Avoid breaking changes, use additive changes     |
| Documentation           | Clearly communicate changes and alternatives     |

---

By following these practices, you can manage API deprecation and maintain backward compatibility, ensuring a stable and predictable experience for your API consumers.`,level:"Advanced"}];export{e as default};
