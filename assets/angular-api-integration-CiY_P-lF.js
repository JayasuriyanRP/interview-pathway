const e=[{id:"67b34ca8-ad5b-47bc-a727-b856142fda94",question:"How do you handle the response of an asynchronous API call in AngularJS?",answer:"```markdown\nIn AngularJS, you handle the response of an asynchronous API call using promises, typically with the `$http` service. When you make an API call, `$http` returns a promise object. You can use the `.then()` method to handle the response when the call succeeds, and `.catch()` (or the second parameter of `.then()`) to handle errors.\n\n**Example:**\n\n```javascript\n// Inject $http into your controller or service\n$http.get('https://api.example.com/data')\n  .then(function(response) {\n    // Success: handle the response data\n    $scope.data = response.data;\n  })\n  .catch(function(error) {\n    // Error: handle the error\n    console.error('API call failed:', error);\n  });\n```\n\n**Key Points:**\n- Use `$http` for making API calls.\n- Handle successful responses in the `.then()` callback.\n- Handle errors in the `.catch()` callback.\n- Update your scope or component variables with the response data as needed.\n```\n",level:"Beginner",created_at:"2025-04-20T11:04:10.396060Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"482960c3-87dd-48e6-a693-7729dde8b516",question:"How do you cancel an ongoing HTTP request in AngularJS?",answer:`\`\`\`markdown
To cancel an ongoing HTTP request in AngularJS, you can use the \`timeout\` property of the \`$http\` service. This property can be set to a promise; when the promise is resolved, the HTTP request is aborted.

**Example:**

\`\`\`javascript
var canceler = $q.defer();

$http({
  method: 'GET',
  url: '/api/data',
  timeout: canceler.promise
}).then(function(response) {
  // Handle success
}, function(error) {
  if (error.status === -1) {
    // Request was canceled
  } else {
    // Handle other errors
  }
});

// To cancel the request:
canceler.resolve();
\`\`\`

**Explanation:**
- Create a deferred object using \`$q.defer()\`.
- Pass \`canceler.promise\` to the \`timeout\` property of the \`$http\` config.
- When you want to cancel the request, call \`canceler.resolve()\`.
- If the request is canceled, the error callback will be invoked with \`status: -1\`.

This approach is useful for scenarios like aborting previous requests when a user initiates a new search or navigates away from a view.
\`\`\``,level:"Intermediate",created_at:"2025-04-20T11:04:10.396157Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"bcf7bcbd-ae5f-4645-99b4-9e79dc67bff2",question:"What are the common HTTP methods supported by AngularJS $http service?",answer:`\`\`\`markdown **Answer:**

AngularJS’s \`$http\` service supports the following common HTTP methods:

- **GET**: Retrieves data from the server.
- **POST**: Sends data to the server to create a new resource.
- **PUT**: Updates an existing resource on the server.
- **DELETE**: Removes a resource from the server.
- **HEAD**: Retrieves metadata (headers) for a resource.
- **PATCH**: Partially updates an existing resource.

**Example usage:**

\`\`\`javascript
// GET request
$http.get('/api/items');

// POST request
$http.post('/api/items', { name: 'New Item' });

// PUT request
$http.put('/api/items/1', { name: 'Updated Item' });

// DELETE request
$http.delete('/api/items/1');
\`\`\`

These methods allow AngularJS applications to interact with RESTful APIs and perform CRUD (Create, Read, Update, Delete) operations.`,level:"Beginner",created_at:"2025-04-20T11:04:10.396169Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"b7f6eeb7-6b99-45a2-9b75-1c8844a662c4",question:"What is an asynchronous operation in AngularJS?",answer:`\`\`\`markdown An **asynchronous operation** in AngularJS refers to any process that runs independently of the main application flow, allowing the application to continue executing other tasks while waiting for the operation to complete. Common examples include fetching data from a server using HTTP requests, timers, or reading files.

In AngularJS, asynchronous operations are typically handled using **promises** (via the $q service) or **callbacks**. For instance, when you use the \`$http\` service to make an API call, it returns a promise that resolves when the data is received, without blocking the rest of your application.

**Example:**

\`\`\`js
$http.get('https://api.example.com/data')
  .then(function(response) {
    // This code runs after the data is fetched
    $scope.data = response.data;
  });
\`\`\`

**Key Points:**
- Asynchronous operations do not block the main thread.
- They improve user experience by keeping the app responsive.
- AngularJS uses promises to handle async operations cleanly.`,level:"Beginner",created_at:"2025-04-20T11:04:10.396005Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"33e5aa2a-ad2a-4ae4-a9c0-e6a8729f6d35",question:"How does AngularJS handle asynchronous operations?",answer:`\`\`\`markdown AngularJS handles asynchronous operations primarily using promises, which are provided by its $q service. When you perform actions like making HTTP requests with the $http service, AngularJS returns a promise object. This allows you to handle the result of the operation once it completes, without blocking the rest of your application.

**Key Points:**

- **Promises:** AngularJS uses promises to manage asynchronous operations. A promise represents a value that may be available now, later, or never.
- **$q Service:** This is AngularJS’s implementation of promises, allowing you to create, resolve, or reject promises.
- **$http Service:** Used for API integration, it returns a promise that resolves when the HTTP request completes.

**Example:**

\`\`\`javascript
$http.get('/api/data')
  .then(function(response) {
    // Success: handle the data
    $scope.data = response.data;
  })
  .catch(function(error) {
    // Error: handle the error
    console.error('Error:', error);
  });
\`\`\`

**Summary:**  
AngularJS handles asynchronous operations using promises, enabling smooth API integration and non-blocking code execution.`,level:"Beginner",created_at:"2025-04-20T11:04:10.396023Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"5bd93ef3-eec3-4b26-aa9b-53c6583a6f63",question:"What is the $http service in AngularJS used for?",answer:`\`\`\`markdown The \`$http\` service in AngularJS is used to make asynchronous HTTP requests to remote servers. It allows your AngularJS application to communicate with backend APIs, fetch or send data, and handle responses. Common operations include GET, POST, PUT, and DELETE requests.

**Example Usage:**

\`\`\`javascript
$http.get('https://api.example.com/data')
  .then(function(response) {
    // Handle successful response
    console.log(response.data);
  }, function(error) {
    // Handle error
    console.error(error);
  });
\`\`\`

**Key Points:**
- Enables communication with RESTful APIs.
- Returns a promise, making it easy to handle asynchronous operations.
- Supports configuration options for headers, parameters, and more.`,level:"Beginner",created_at:"2025-04-20T11:04:10.396032Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"433c8336-92bd-4689-9ac0-fa3140447250",question:"How do you make a GET request to an API using AngularJS?",answer:`\`\`\`markdown To make a GET request to an API using AngularJS, you can use the \`$http\` service. Here’s a simple example:

\`\`\`javascript
angular.module('myApp', [])
  .controller('MyController', function($scope, $http) {
    $http.get('https://api.example.com/data')
      .then(function(response) {
        // Success callback
        $scope.apiData = response.data;
      }, function(error) {
        // Error callback
        console.error('Error fetching data:', error);
      });
  });
\`\`\`

**Explanation:**
- Inject the \`$http\` service into your controller.
- Use \`$http.get('API_URL')\` to make the GET request.
- Handle the response in the \`.then()\` method.
- On success, the data is available in \`response.data\`.

**Note:** Replace \`'https://api.example.com/data'\` with your actual API endpoint.`,level:"Beginner",created_at:"2025-04-20T11:04:10.396040Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"8171744e-b090-41b3-8223-46621831e88c",question:"What is a promise in AngularJS?",answer:`\`\`\`markdown A **promise** in AngularJS is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are commonly used for handling asynchronous tasks such as API calls, timers, or reading files.

### Key Points:
- A promise can be in one of three states: **pending**, **resolved** (fulfilled), or **rejected**.
- In AngularJS, promises are typically created and managed using the \`$q\` service.
- Promises allow you to attach callbacks using \`.then()\` for success and \`.catch()\` for errors, making asynchronous code easier to read and maintain.

### Example:
\`\`\`javascript
// Using $http service which returns a promise
$http.get('/api/data')
  .then(function(response) {
    // Success: handle response data
    console.log(response.data);
  })
  .catch(function(error) {
    // Error: handle error
    console.error(error);
  });
\`\`\`

### Benefits:
- Simplifies handling of asynchronous operations.
- Avoids "callback hell" by chaining \`.then()\` methods.
- Makes code more readable and maintainable.

**In summary:**  
A promise in AngularJS is a way to handle asynchronous operations, allowing you to write cleaner and more manageable code when dealing with things like API integrations.`,level:"Beginner",created_at:"2025-04-20T11:04:10.396048Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"ad3110e8-023b-4c51-ba7c-627294dfc203",question:"What is the difference between $http.get and $http.post in AngularJS?",answer:`\`\`\`markdown **Answer:**

In AngularJS, both \`$http.get\` and \`$http.post\` are methods used to make HTTP requests to a server, but they are used for different purposes:

| Method         | Purpose                                  | Data Sent To Server          |
|----------------|------------------------------------------|------------------------------|
| \`$http.get\`    | Retrieves data from the server (read)     | Data is sent as URL params   |
| \`$http.post\`   | Sends data to the server (create/update)  | Data is sent in the request body |

**Key Differences:**

- **$http.get**  
  - Used to fetch or retrieve data from the server.
  - Parameters are sent as part of the URL.
  - Example:
    \`\`\`js
    $http.get('/api/users?role=admin')
      .then(function(response) {
        // handle success
      });
    \`\`\`

- **$http.post**  
  - Used to send data to the server, often to create or update resources.
  - Data is sent in the body of the HTTP request.
  - Example:
    \`\`\`js
    $http.post('/api/users', { name: 'John', role: 'admin' })
      .then(function(response) {
        // handle success
      });
    \`\`\`

**Summary:**  
Use \`$http.get\` for retrieving data, and \`$http.post\` for sending data to the server.`,level:"Beginner",created_at:"2025-04-20T11:04:10.396069Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"946416c4-cb89-4fdc-b808-631a1a91d6bc",question:"How do you handle errors in API calls using AngularJS?",answer:`\`\`\`markdown
In AngularJS, you typically handle errors in API calls by using the \`.catch()\` method (or the error callback) when working with promises returned by the \`$http\` service. Here’s a simple example:

\`\`\`javascript
$http.get('/api/data')
  .then(function(response) {
    // Success: handle the response data
    $scope.data = response.data;
  })
  .catch(function(error) {
    // Error: handle the error
    console.error('API call failed:', error);
    $scope.errorMessage = 'Failed to load data from the server.';
  });
\`\`\`

**Key Points:**
- Use \`.catch()\` to handle any errors that occur during the API call.
- You can also use the second argument of \`.then(success, error)\` to handle errors.
- Always provide user feedback or log errors for debugging.

**Example with \`.then(success, error)\` syntax:**

\`\`\`javascript
$http.get('/api/data')
  .then(
    function(response) {
      // Success handler
      $scope.data = response.data;
    },
    function(error) {
      // Error handler
      console.error('API call failed:', error);
      $scope.errorMessage = 'Failed to load data.';
    }
  );
\`\`\`

By handling errors this way, you can ensure your application responds gracefully to failed API calls.
\`\`\`
`,level:"Beginner",created_at:"2025-04-20T11:04:10.396077Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"299ff5c7-4489-4736-9dfc-e74aad5d24ec",question:"What is the $q service in AngularJS?",answer:`\`\`\`markdown The \`$q\` service in AngularJS is a built-in service that helps you work with asynchronous operations using promises. It allows you to execute functions asynchronously and handle the results (success or failure) in a clean and manageable way.

### Key Points about \`$q\`:

- **Promise Creation:** \`$q\` lets you create and return promise objects, which represent a value that may be available now, later, or never.
- **Chaining:** You can chain \`.then()\`, \`.catch()\`, and \`.finally()\` methods to handle the result or error of an asynchronous operation.
- **Integration:** It is commonly used for API calls, timeouts, and any other async tasks in AngularJS.

### Example Usage

\`\`\`javascript
app.controller('MyController', function($scope, $q, $timeout) {
  function asyncOperation() {
    var deferred = $q.defer();

    $timeout(function() {
      if (Math.random() > 0.5) {
        deferred.resolve('Success!');
      } else {
        deferred.reject('Error!');
      }
    }, 1000);

    return deferred.promise;
  }

  asyncOperation().then(function(result) {
    $scope.message = result;
  }).catch(function(error) {
    $scope.message = error;
  });
});
\`\`\`

### Summary

- \`$q\` is AngularJS’s promise implementation for handling asynchronous operations.
- It helps you write cleaner, more maintainable code when dealing with API calls and other async tasks.`,level:"Beginner",created_at:"2025-04-20T11:04:10.396085Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"987501f1-eb7d-49c7-82e1-06846d59003c",question:"How can you use $q to create custom promises in AngularJS?",answer:`\`\`\`markdown
In AngularJS, the \`$q\` service is used to create and manage promises for asynchronous operations. To create a custom promise using \`$q\`, you typically use the \`$q.defer()\` method, which gives you a deferred object. This object has a \`promise\` property and methods like \`resolve\`, \`reject\`, and \`notify\` to control the promise's state.

**Example: Creating a Custom Promise with \`$q\`**

\`\`\`javascript
app.controller('MyController', function($scope, $q, $timeout) {
  function asyncOperation() {
    var deferred = $q.defer();

    // Simulate an async task (e.g., API call)
    $timeout(function() {
      var success = true; // Simulate success/failure
      if (success) {
        deferred.resolve('Operation successful!');
      } else {
        deferred.reject('Operation failed.');
      }
    }, 2000);

    return deferred.promise;
  }

  asyncOperation().then(function(result) {
    $scope.message = result;
  }, function(error) {
    $scope.message = error;
  });
});
\`\`\`

**Key Points:**
- Use \`$q.defer()\` to create a deferred object.
- Perform your async operation, then call \`deferred.resolve(data)\` on success or \`deferred.reject(error)\` on failure.
- Return \`deferred.promise\` so callers can use \`.then()\` and \`.catch()\` to handle results.
- You can also use \`$q(function(resolve, reject) { ... })\` for a more modern style (similar to native Promises).

**Alternative with \`$q\` Constructor:**

\`\`\`javascript
function asyncOperation() {
  return $q(function(resolve, reject) {
    $timeout(function() {
      var success = true;
      if (success) {
        resolve('Operation successful!');
      } else {
        reject('Operation failed.');
      }
    }, 2000);
  });
}
\`\`\`

**Summary:**  
Use \`$q\` to wrap asynchronous logic and return a promise, allowing you to handle async results in a clean, promise-based way in AngularJS.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396093Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"251414ba-b61c-427b-8028-bfaaa56ca511",question:"What is the role of callbacks in asynchronous operations in AngularJS?",answer:`\`\`\`markdown **Answer:**

In AngularJS, callbacks play a crucial role in handling asynchronous operations, such as API calls or timers. When you perform an asynchronous task (like fetching data from a server), you don't get the result immediately. Instead, you provide a callback function that will be executed once the operation is complete.

**Role of Callbacks:**

- **Non-blocking:** Callbacks allow the application to continue running other code while waiting for the asynchronous operation to finish.
- **Handling Results:** The callback function receives the result (data or error) of the asynchronous operation and processes it accordingly.
- **API Integration:** When making HTTP requests (using \`$http\` service), you pass callback functions to handle the response.

**Example:**

\`\`\`javascript
$http.get('/api/data').then(function(response) {
  // This is the callback function
  $scope.data = response.data;
}, function(error) {
  // This is the error callback
  console.error('Error:', error);
});
\`\`\`

**Summary:**  
Callbacks in AngularJS are essential for managing the flow of code after asynchronous operations, ensuring that the application responds to events like API responses without blocking the user interface.`,level:"Beginner",created_at:"2025-04-20T11:04:10.396100Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"150e6ca6-22d8-489b-9694-ccef8086f9df",question:"How do you chain multiple asynchronous operations in AngularJS?",answer:`\`\`\`markdown To chain multiple asynchronous operations in AngularJS, you typically use the $q service, which implements promises. Chaining allows you to perform a sequence of async tasks where each step depends on the result of the previous one.

Here's how you can do it:

\`\`\`javascript
// Assume myService.getData1(), myService.getData2(), and myService.getData3() return promises

myService.getData1()
  .then(function(result1) {
    // Use result1 to get data2
    return myService.getData2(result1.id);
  })
  .then(function(result2) {
    // Use result2 to get data3
    return myService.getData3(result2.value);
  })
  .then(function(result3) {
    // All operations completed, handle final result
    console.log('Final result:', result3);
  })
  .catch(function(error) {
    // Handle any error that occurred in the chain
    console.error('An error occurred:', error);
  });
\`\`\`

**Key Points:**

- Each \`.then()\` returns a new promise, allowing chaining.
- Each step can return a value or a promise; if a promise is returned, the next \`.then()\` waits for it to resolve.
- Use \`.catch()\` at the end to handle errors from any step in the chain.

**Example with $http:**

\`\`\`javascript
$http.get('/api/user')
  .then(function(response) {
    var userId = response.data.id;
    return $http.get('/api/orders/' + userId);
  })
  .then(function(response) {
    var orders = response.data;
    // Do something with orders
  })
  .catch(function(error) {
    // Handle error
  });
\`\`\`

This pattern keeps your asynchronous logic clean and readable.`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396108Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"93d28ab8-c68d-41db-8069-e70a3d6ff783",question:"What is the difference between synchronous and asynchronous operations?",answer:`\`\`\`markdown **Synchronous vs. Asynchronous Operations in AngularJS**

| Synchronous Operations                        | Asynchronous Operations                          |
|-----------------------------------------------|--------------------------------------------------|
| Tasks are performed one after another.        | Tasks can be started and completed independently.|
| Each operation waits for the previous one to finish. | Operations don’t block the execution of others.  |
| The program execution is paused until the task completes. | The program continues running while the task completes in the background. |
| Example: Reading a file line by line and waiting for each line to be read before moving to the next. | Example: Making an API call and continuing with other tasks while waiting for the response. |

**In AngularJS:**
- Synchronous code executes step by step.
- Asynchronous code (like HTTP requests) uses callbacks, promises, or observables to handle results when they are ready, without blocking the rest of the code.

**Example:**
\`\`\`js
// Synchronous
var result = calculateSum(1, 2); // Waits for calculateSum to finish

// Asynchronous (using $http in AngularJS)
$http.get('/api/data').then(function(response) {
  // This runs when the data is received, without blocking other code
});
\`\`\`

**Summary:**  
Synchronous operations block further execution until they finish, while asynchronous operations allow the program to continue running and handle results when they are ready. This is especially useful for API integration in AngularJS, where waiting for server responses should not freeze the user interface.`,level:"Beginner",created_at:"2025-04-20T11:04:10.396116Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"1e7edb66-8c1a-404a-a140-615b86828a21",question:"How do you send data to an API using $http.post in AngularJS?",answer:`\`\`\`markdown
To send data to an API using \`$http.post\` in AngularJS, you use the \`$http\` service and call its \`.post()\` method. The \`.post()\` method takes two main arguments: the API endpoint URL and the data object you want to send.

**Example:**

\`\`\`javascript
// Inject $http into your controller or service
app.controller('MyController', function($scope, $http) {
  $scope.sendData = function() {
    var data = {
      name: 'John Doe',
      email: 'john@example.com'
    };

    $http.post('https://api.example.com/users', data)
      .then(function(response) {
        // Success callback
        console.log('Data sent successfully:', response.data);
      }, function(error) {
        // Error callback
        console.error('Error sending data:', error);
      });
  };
});
\`\`\`

**Explanation:**

- \`$http.post(url, data)\` sends a POST request to the specified \`url\` with the \`data\` object as the request body.
- The \`.then()\` method handles the response: the first function is called on success, and the second on error.

**Note:**  
You may also send additional configuration (like headers) as a third argument if needed.

\`\`\`javascript
$http.post(url, data, { headers: { 'Content-Type': 'application/json' } });
\`\`\`
\`\`\``,level:"Beginner",created_at:"2025-04-20T11:04:10.396124Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"150da359-0181-4564-a0cd-e917ccfb4d2f",question:"How can you intercept HTTP requests and responses in AngularJS?",answer:`\`\`\`markdown
In AngularJS, you can intercept HTTP requests and responses using **$http interceptors**. Interceptors allow you to globally modify or handle HTTP requests and responses before they are processed by your application.

### How to Create an HTTP Interceptor

1. **Define the Interceptor as a Factory:**

\`\`\`javascript
app.factory('myHttpInterceptor', function($q) {
  return {
    // Intercept outgoing requests
    request: function(config) {
      // Modify request config if needed
      // e.g., add authorization headers
      config.headers = config.headers || {};
      config.headers.Authorization = 'Bearer YOUR_TOKEN';
      return config;
    },

    // Intercept request errors
    requestError: function(rejection) {
      // Handle request error
      return $q.reject(rejection);
    },

    // Intercept incoming responses
    response: function(response) {
      // Modify response if needed
      return response;
    },

    // Intercept response errors
    responseError: function(rejection) {
      // Handle response error
      return $q.reject(rejection);
    }
  };
});
\`\`\`

2. **Register the Interceptor with $httpProvider:**

\`\`\`javascript
app.config(function($httpProvider) {
  $httpProvider.interceptors.push('myHttpInterceptor');
});
\`\`\`

### Use Cases

- **Add authentication tokens to headers**
- **Log requests and responses**
- **Handle global errors**
- **Modify response data**

### Example: Adding a Token to Every Request

\`\`\`javascript
app.factory('authInterceptor', function() {
  return {
    request: function(config) {
      config.headers = config.headers || {};
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
      return config;
    }
  };
});

app.config(function($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
\`\`\`

### Summary

- Use \`$httpProvider.interceptors\` to register interceptors.
- Interceptors can modify requests, responses, and handle errors globally.
- They are useful for cross-cutting concerns like authentication, logging, and error handling.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396132Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"646e8027-0469-4a1d-aa12-1e39a13489d9",question:"What is $resource in AngularJS and how is it used for API integration?",answer:`\`\`\`markdown
### What is \`$resource\` in AngularJS and how is it used for API integration?

In AngularJS, \`$resource\` is a service provided by the \`ngResource\` module that simplifies interaction with RESTful APIs. It provides a higher-level abstraction over the lower-level \`$http\` service, making it easier to perform CRUD (Create, Read, Update, Delete) operations on server-side data.

#### Key Features of \`$resource\`:
- Maps RESTful endpoints to client-side objects.
- Provides methods like \`.get()\`, \`.save()\`, \`.query()\`, \`.remove()\`, and \`.delete()\`.
- Handles URL parameterization and data serialization automatically.
- Returns resource instances that can be manipulated and synchronized with the server.

#### How to Use \`$resource\` for API Integration

1. **Include the \`ngResource\` Module:**
   \`\`\`javascript
   angular.module('myApp', ['ngResource']);
   \`\`\`

2. **Inject and Define a Resource:**
   \`\`\`javascript
   angular.module('myApp')
     .factory('User', function($resource) {
       return $resource('/api/users/:userId', {userId: '@id'});
     });
   \`\`\`

3. **Perform API Operations:**
   \`\`\`javascript
   // Fetch a user with ID 123
   User.get({userId: 123}, function(user) {
     console.log(user);
   });

   // Get all users
   User.query(function(users) {
     console.log(users);
   });

   // Create a new user
   var newUser = new User({name: 'Alice'});
   newUser.$save();

   // Update an existing user
   User.save({userId: 123}, {name: 'Bob'});

   // Delete a user
   User.delete({userId: 123});
   \`\`\`

#### Summary Table

| Method     | HTTP Verb | Description                  |
|------------|-----------|------------------------------|
| \`.get()\`   | GET       | Fetch a single resource      |
| \`.query()\` | GET       | Fetch an array of resources  |
| \`.save()\`  | POST/PUT  | Create or update a resource  |
| \`.remove()\`| DELETE    | Delete a resource            |
| \`.delete()\`| DELETE    | Delete a resource            |

#### When to Use \`$resource\`
- When working with RESTful APIs.
- When you want to reduce boilerplate code for common API operations.
- When you need easy mapping between client objects and server data.

> **Note:** \`$resource\` is specific to AngularJS (1.x) and is not available in Angular (2+). For newer Angular versions, use \`HttpClient\`.

\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396144Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"9b34b04a-42dd-4ed2-b971-a5f08c49a7ea",question:"How do you handle multiple concurrent API calls in AngularJS?",answer:`\`\`\`markdown
To handle multiple concurrent API calls in AngularJS, you can use the \`$q\` service, which provides promise-based utilities. The most common approach is to use \`$q.all()\`, which allows you to execute multiple asynchronous operations in parallel and wait until all of them are completed.

**Example:**

\`\`\`javascript
app.controller('MyController', function($scope, $http, $q) {
  var apiCall1 = $http.get('/api/resource1');
  var apiCall2 = $http.get('/api/resource2');
  var apiCall3 = $http.get('/api/resource3');

  $q.all([apiCall1, apiCall2, apiCall3]).then(function(responses) {
    // responses is an array with the results in order
    $scope.data1 = responses[0].data;
    $scope.data2 = responses[1].data;
    $scope.data3 = responses[2].data;
  }, function(error) {
    // Handle error from any of the API calls
    console.error('One or more API calls failed:', error);
  });
});
\`\`\`

**Key Points:**
- \`$q.all()\` takes an array of promises and returns a new promise.
- The \`.then()\` callback receives an array of responses, corresponding to the order of the promises.
- If any of the API calls fail, the \`.catch()\` or error callback is triggered.
- This approach is useful for fetching data from multiple endpoints simultaneously and proceeding only when all data is available.

**Alternative:**  
If you need to handle results as soon as each call completes (rather than waiting for all), you can handle each promise individually and update your scope accordingly.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396180Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"441bd556-a616-4044-ab13-9402d76e50d8",question:"What is the purpose of $httpProvider in AngularJS?",answer:`\`\`\`markdown
The \`$httpProvider\` in AngularJS is a configuration provider that allows you to customize the behavior of the \`$http\` service, which is used for making asynchronous HTTP requests (such as API calls). It is typically configured during the application's configuration phase using the \`.config()\` method.

**Key purposes of \`$httpProvider\` include:**

- **Setting Default Headers:** You can define default headers (like authentication tokens) that will be sent with every HTTP request.
- **Configuring Interceptors:** You can add interceptors to globally handle or modify requests and responses (e.g., for logging, error handling, or modifying requests).
- **Changing Default Settings:** You can adjust default settings such as timeout, withCredentials, or how data is transformed before sending or after receiving.

**Example:**
\`\`\`js
angular.module('myApp', [])
  .config(function($httpProvider) {
    // Add a default header
    $httpProvider.defaults.headers.common['Authorization'] = 'Bearer TOKEN';

    // Add an interceptor
    $httpProvider.interceptors.push('myHttpInterceptor');
  });
\`\`\`

**Summary:**  
\`$httpProvider\` is essential for configuring the global behavior of HTTP requests in AngularJS applications, making it easier to manage API integration and asynchronous operations.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396193Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"b911b90e-c43f-48fb-a9d0-141bd885e9bf",question:"How do you configure default headers for all API requests in AngularJS?",answer:"```markdown\nTo configure default headers for all API requests in AngularJS, you can use the `$httpProvider` service during the configuration phase of your AngularJS module. This allows you to set default headers that will be included with every `$http` request made by your application.\n\nHere's how you can do it:\n\n```javascript\nangular.module('myApp', [])\n  .config(['$httpProvider', function($httpProvider) {\n    // Set default headers for all requests\n    $httpProvider.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN_HERE';\n    $httpProvider.defaults.headers.common['Custom-Header'] = 'CustomValue';\n    // You can also set headers for specific methods:\n    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';\n  }]);\n```\n\n**Explanation:**\n- `$httpProvider.defaults.headers.common` sets headers for all HTTP methods (GET, POST, PUT, etc.).\n- `$httpProvider.defaults.headers.post` (or `.get`, `.put`, etc.) sets headers for specific HTTP methods.\n- Place this configuration inside your module's `.config()` block to ensure it runs during the configuration phase.\n\n**Note:**  \nIf you need to set dynamic headers (e.g., tokens that change at runtime), consider using an `$http` interceptor instead.\n```",level:"Intermediate",created_at:"2025-04-20T11:04:10.396205Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"beff5241-add3-4493-b13a-1ab14ae9881a",question:"What is JSONP and how does AngularJS support it?",answer:`\`\`\`markdown **JSONP (JSON with Padding)** is a technique used to overcome the limitations of the same-origin policy in web browsers, which restricts making AJAX requests to a domain different from the one that served the web page. JSONP allows web pages to request data from servers in different domains by exploiting the fact that \`<script>\` tags are not subject to the same-origin policy.

### How JSONP Works

- The client adds a \`<script>\` tag to the page with a \`src\` attribute pointing to the API endpoint.
- The server responds with JavaScript code that calls a callback function (specified by the client) with the data as its argument.
- The browser executes the script, and the callback function processes the data.

**Example:**
\`\`\`html
<script src="https://api.example.com/data?callback=myCallback"><\/script>
\`\`\`
The server responds with:
\`\`\`js
myCallback({ "key": "value" });
\`\`\`

### AngularJS Support for JSONP

AngularJS provides built-in support for JSONP through its \`$http\` service. To make a JSONP request, you use the \`$http.jsonp()\` method or specify the \`method: 'JSONP'\` in the \`$http\` configuration.

**Usage Example:**
\`\`\`js
$http.jsonp('https://api.example.com/data?callback=JSON_CALLBACK')
  .then(function(response) {
    // Handle success
    console.log(response.data);
  }, function(error) {
    // Handle error
    console.log(error);
  });
\`\`\`

**Key Points:**
- The URL must include the string \`JSON_CALLBACK\` as a placeholder for the callback function name.
- AngularJS replaces \`JSON_CALLBACK\` with an auto-generated function name to handle the response.

**Summary Table:**

| Feature         | Description                                         |
|-----------------|-----------------------------------------------------|
| Purpose         | Cross-domain requests for data retrieval            |
| AngularJS Method| \`$http.jsonp()\`                                     |
| Callback Marker | \`JSON_CALLBACK\` in the URL                          |
| Limitation      | Only supports HTTP GET requests                     |

**Note:** JSONP is less secure than CORS and should be used only when CORS is not available and with trusted APIs.`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396212Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"90491bf6-5dc1-49c3-8988-2386f04f1c2a",question:"How do you use $http.jsonp in AngularJS?",answer:`\`\`\`markdown
To use \`$http.jsonp\` in AngularJS for making cross-domain requests (where CORS is not available), you can follow these steps:

### 1. JSONP Endpoint Requirement
The API endpoint must support JSONP by accepting a \`callback\` parameter and wrapping the response in a function call.

### 2. Syntax

\`\`\`javascript
$http.jsonp(url, [config])
\`\`\`

- \`url\`: The API endpoint, **must** include \`JSON_CALLBACK\` as the callback placeholder.
- \`config\`: (Optional) Additional configuration.

### 3. Example

Suppose you want to fetch data from \`https://api.example.com/data\` using JSONP:

\`\`\`javascript
angular.module('myApp', [])
  .controller('MyController', function($scope, $http) {
    var url = 'https://api.example.com/data?callback=JSON_CALLBACK';

    $http.jsonp(url)
      .then(function(response) {
        // Success callback
        $scope.data = response.data;
      }, function(error) {
        // Error callback
        console.error('Error:', error);
      });
  });
\`\`\`

### 4. Notes

- Always use \`JSON_CALLBACK\` in the URL; AngularJS will replace it with an auto-generated function name.
- JSONP only supports HTTP GET requests.
- Use JSONP only when CORS is not available and the API supports JSONP.

### 5. Security Consideration

JSONP can expose your application to XSS attacks if the API is not trusted. Use it only with trusted sources.

---

**Summary:**  
Use \`$http.jsonp('API_URL?callback=JSON_CALLBACK')\` to make cross-domain GET requests to APIs that support JSONP in AngularJS.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396221Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"8305051d-f148-407e-96b8-768cf8308c76",question:"What is CORS and how does it affect API integration in AngularJS?",answer:`\`\`\`markdown **CORS (Cross-Origin Resource Sharing)** is a security feature implemented by web browsers to restrict web applications running on one origin (domain, protocol, and port) from making requests to a different origin. This is important for protecting users from malicious websites trying to access sensitive data from another site.

### How CORS Works

When your AngularJS application tries to make an HTTP request (e.g., using \`$http\` or \`$resource\`) to an API hosted on a different domain, the browser checks if the target server allows such cross-origin requests. The server must include specific HTTP headers (like \`Access-Control-Allow-Origin\`) in its response to permit the request.

### Impact on AngularJS API Integration

- **Blocked Requests:** If the API server does not send the appropriate CORS headers, the browser will block the request, and your AngularJS app will not receive the response.
- **Preflight Requests:** For certain types of requests (e.g., those with custom headers or methods like \`PUT\` or \`DELETE\`), the browser sends a preflight \`OPTIONS\` request to check if the actual request is safe to send.
- **No Effect in Backend:** CORS is enforced by browsers, not by AngularJS or the server. Server-to-server requests (like from Node.js) are not affected.

### Handling CORS in AngularJS

- **Server-Side Solution:** The best way to resolve CORS issues is to configure the API server to include the correct CORS headers, such as:
  \`\`\`
  Access-Control-Allow-Origin: *
  \`\`\`
  or restrict to specific origins as needed.

- **Proxy Approach:** During development, you can use a proxy server to route API requests through the same origin as your AngularJS app, bypassing CORS restrictions.

### Example Error

If CORS is not configured, you might see an error like:
\`\`\`
No 'Access-Control-Allow-Origin' header is present on the requested resource.
\`\`\`

### Summary Table

| Aspect         | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| What is CORS?  | Browser security feature restricting cross-origin HTTP requests              |
| Affects        | AngularJS API calls to different domains                                    |
| Solution       | Configure server to send appropriate CORS headers                           |
| Workarounds    | Use proxy during development, or enable CORS on the server                  |

**In summary:**  
CORS is a browser-enforced security mechanism that can block your AngularJS app from accessing APIs on different domains unless the server explicitly allows it. Always configure your API server to handle CORS properly for smooth integration.`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396233Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"b321a2b4-c354-411c-9fd8-607f09dc8898",question:"How do you handle API authentication in AngularJS?",answer:`\`\`\`markdown
To handle API authentication in AngularJS, you typically use HTTP interceptors to attach authentication tokens (like JWTs) to outgoing API requests and manage authentication state. Here’s a step-by-step approach:

1. **Obtain the Token:**  
   After a successful login, the server returns an authentication token (e.g., JWT). Store this token securely, usually in \`localStorage\` or \`sessionStorage\`.

   \`\`\`js
   // Example: Save token after login
   localStorage.setItem('authToken', response.data.token);
   \`\`\`

2. **Attach Token to Requests:**  
   Use an \`$http\` interceptor to automatically add the token to the \`Authorization\` header of each outgoing request.

   \`\`\`js
   app.factory('AuthInterceptor', function($q) {
     return {
       request: function(config) {
         var token = localStorage.getItem('authToken');
         if (token) {
           config.headers.Authorization = 'Bearer ' + token;
         }
         return config;
       },
       responseError: function(response) {
         // Handle 401 Unauthorized responses
         if (response.status === 401) {
           // Redirect to login or show an error
         }
         return $q.reject(response);
       }
     };
   });

   app.config(function($httpProvider) {
     $httpProvider.interceptors.push('AuthInterceptor');
   });
   \`\`\`

3. **Handle Authentication Errors:**  
   In the interceptor’s \`responseError\`, handle cases like expired or invalid tokens (e.g., redirect to login).

4. **Logout:**  
   Remove the token from storage when the user logs out.

   \`\`\`js
   localStorage.removeItem('authToken');
   \`\`\`

**Summary:**  
- Store the authentication token after login.
- Use an \`$http\` interceptor to attach the token to API requests.
- Handle authentication errors globally.
- Remove the token on logout.

This approach ensures secure and consistent API authentication in AngularJS applications.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396241Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"d9a18ecf-e175-478b-ac73-d9b1de63bbce",question:"How can you retry a failed API request in AngularJS?",answer:`\`\`\`markdown
To retry a failed API request in AngularJS, you can use the \`$q\` service to create a retry mechanism. Here’s a common approach:

### Example: Retrying a Failed API Request

Suppose you have a service method that makes an HTTP request using \`$http\`. You can wrap the request in a function that attempts the request and retries it a specified number of times if it fails.

\`\`\`javascript
app.factory('ApiService', function($http, $q, $timeout) {
  function retryRequest(httpConfig, retries, delay) {
    return $http(httpConfig).catch(function(error) {
      if (retries > 0) {
        // Wait for 'delay' milliseconds before retrying
        return $timeout(function() {
          return retryRequest(httpConfig, retries - 1, delay);
        }, delay);
      } else {
        // No retries left, reject the promise
        return $q.reject(error);
      }
    });
  }

  return {
    getDataWithRetry: function(url) {
      var httpConfig = {
        method: 'GET',
        url: url
      };
      // Retry up to 3 times with a 1000ms delay between attempts
      return retryRequest(httpConfig, 3, 1000);
    }
  };
});
\`\`\`

### Usage in Controller

\`\`\`javascript
app.controller('MainCtrl', function($scope, ApiService) {
  ApiService.getDataWithRetry('/api/data')
    .then(function(response) {
      $scope.data = response.data;
    })
    .catch(function(error) {
      $scope.error = 'Failed to load data after retries.';
    });
});
\`\`\`

### Key Points

- The \`retryRequest\` function recursively retries the HTTP request if it fails.
- \`$timeout\` is used to add a delay between retries.
- The number of retries and delay can be configured as needed.
- If all retries fail, the promise is rejected and can be handled in the controller.

This pattern helps make your API integration more robust against temporary network or server issues.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396248Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"b8577847-a319-414f-b488-cf229cdc137e",question:"What are interceptors in AngularJS and how do you use them?",answer:`\`\`\`markdown ### What are Interceptors in AngularJS?

**Interceptors** in AngularJS are a feature of the \`$http\` service that allow you to globally intercept and modify HTTP requests and responses. They are commonly used for tasks such as:

- Adding authentication tokens to headers
- Logging requests and responses
- Handling errors globally
- Modifying request or response data

Interceptors are implemented as services that expose specific methods and are registered with the \`$httpProvider\`.

---

### How to Use Interceptors in AngularJS

#### 1. Create an Interceptor Service

An interceptor is simply a factory that returns an object with one or more of the following methods:

- \`request(config)\`
- \`requestError(rejection)\`
- \`response(response)\`
- \`responseError(rejection)\`

\`\`\`js
app.factory('myHttpInterceptor', function($q) {
  return {
    // Intercept outgoing requests
    request: function(config) {
      // Example: Add an auth token to headers
      config.headers = config.headers || {};
      config.headers.Authorization = 'Bearer my-token';
      return config;
    },

    // Intercept request errors
    requestError: function(rejection) {
      // Handle request error
      return $q.reject(rejection);
    },

    // Intercept incoming responses
    response: function(response) {
      // Modify or log the response
      return response;
    },

    // Intercept response errors
    responseError: function(rejection) {
      // Handle response errors globally
      if (rejection.status === 401) {
        // Redirect to login, for example
      }
      return $q.reject(rejection);
    }
  };
});
\`\`\`

---

#### 2. Register the Interceptor

You need to register your interceptor with the \`$httpProvider\` in your app's config block:

\`\`\`js
app.config(function($httpProvider) {
  $httpProvider.interceptors.push('myHttpInterceptor');
});
\`\`\`

---

#### 3. How It Works

- Every \`$http\` request and response will pass through your interceptor.
- You can chain multiple interceptors; they will be called in the order they are added.

---

### Example Use Cases

- **Authentication:** Automatically attach JWT tokens to every request.
- **Error Handling:** Show a global error message for certain HTTP status codes.
- **Logging:** Log every request and response for debugging.

---

### Summary Table

| Method           | Purpose                                 |
|------------------|-----------------------------------------|
| request          | Modify outgoing request config           |
| requestError     | Handle request errors                    |
| response         | Modify incoming response                 |
| responseError    | Handle response errors                   |

---

**In summary:**  
Interceptors in AngularJS are powerful tools for handling cross-cutting concerns in HTTP communication, making your code cleaner and more maintainable.`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396255Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"c7496bd9-ddbb-4f55-b4eb-02af7ecf99a8",question:"How do you transform requests and responses in AngularJS $http?",answer:`\`\`\`markdown In AngularJS, the $http service allows you to transform requests before they are sent to the server and responses after they are received. This is achieved using the transformRequest and transformResponse properties.

### Transforming Requests

- **transformRequest** is used to modify the request data before it is sent to the server.
- It can be a single function or an array of functions.
- Each function receives the data and headersGetter as arguments and must return the transformed data.

**Example:**

\`\`\`javascript
$http({
  method: 'POST',
  url: '/api/data',
  data: { name: 'AngularJS' },
  transformRequest: function(data, headersGetter) {
    // Convert data object to a URL-encoded string
    var str = [];
    for (var p in data)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
    return str.join("&");
  },
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});
\`\`\`

### Transforming Responses

- **transformResponse** is used to modify the response data before it is passed to your application.
- It can also be a single function or an array of functions.
- Each function receives the data and headersGetter as arguments and must return the transformed data.

**Example:**

\`\`\`javascript
$http({
  method: 'GET',
  url: '/api/data',
  transformResponse: function(data, headersGetter) {
    // Parse JSON and extract a specific property
    var jsonData = angular.fromJson(data);
    return jsonData.result;
  }
});
\`\`\`

### Using Defaults

You can also set default transformations for all $http requests:

\`\`\`javascript
// Add a default response transformer
$http.defaults.transformResponse.push(function(data) {
  // Custom transformation logic
  return data;
});
\`\`\`

### Chaining Multiple Transformers

Both transformRequest and transformResponse can be arrays. Each function in the array is called in sequence, passing the result to the next.

\`\`\`javascript
$http({
  url: '/api/data',
  transformResponse: [
    function(data) {
      // First transformation
      return angular.fromJson(data);
    },
    function(data) {
      // Second transformation
      return data.items;
    }
  ]
});
\`\`\`

### Summary Table

| Property            | Purpose                                 | Type                |
|---------------------|-----------------------------------------|---------------------|
| transformRequest    | Modify request data before sending       | Function/Array      |
| transformResponse   | Modify response data after receiving     | Function/Array      |

---

**In summary:**  
Use \`transformRequest\` to preprocess outgoing data and \`transformResponse\` to postprocess incoming data in AngularJS $http operations, either globally or per-request, using functions or arrays of functions for flexible data transformation.`,level:"Advanced",created_at:"2025-04-20T11:04:10.396263Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"b68a67a8-59b0-4bf3-baab-3d9d517c8b65",question:"What is the difference between $q.all and $q.when in AngularJS?",answer:`\`\`\`markdown
### Difference between \`$q.all\` and \`$q.when\` in AngularJS

#### \`$q.all\`
- **Purpose:** Used to wait for multiple promises to resolve.
- **Input:** Takes an array (or object) of promises.
- **Behavior:** Returns a single promise that resolves when *all* of the input promises are resolved. If any promise is rejected, the returned promise is rejected immediately.
- **Use Case:** When you need to perform actions after several asynchronous operations have all completed.

**Example:**
\`\`\`javascript
$q.all([promise1, promise2, promise3]).then(function(results) {
  // All promises resolved, results is an array of values
});
\`\`\`

#### \`$q.when\`
- **Purpose:** Normalizes a value or a promise into a promise.
- **Input:** Takes a value or a promise.
- **Behavior:** If the input is already a promise, it is returned as-is. If the input is a non-promise value, it returns a promise that is immediately resolved with that value.
- **Use Case:** When you want to ensure you always have a promise, regardless of whether the input is already a promise or just a value.

**Example:**
\`\`\`javascript
$q.when(someValueOrPromise).then(function(result) {
  // result is the resolved value
});
\`\`\`

---

**Summary Table**

| Feature      | \`$q.all\`                        | \`$q.when\`                           |
|--------------|---------------------------------|-------------------------------------|
| Input        | Array/Object of promises        | Value or promise                    |
| Output       | Single promise                  | Single promise                      |
| Resolves     | When all input promises resolve | When input value/promise resolves   |
| Use Case     | Wait for multiple async ops     | Normalize value to a promise        |
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396270Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"f0164e0c-12bc-4553-abe2-054abdf35c9e",question:"How do you manage loading indicators during async operations in AngularJS?",answer:`\`\`\`markdown
To manage loading indicators during asynchronous operations in AngularJS, you typically use a combination of scope variables and conditional rendering in your templates. Here’s a common approach:

1. **Define a Loading Variable**  
   In your controller, create a variable (e.g., \`$scope.isLoading\`) to track the loading state.

   \`\`\`javascript
   app.controller('MyController', function($scope, $http) {
     $scope.isLoading = false;

     $scope.loadData = function() {
       $scope.isLoading = true;
       $http.get('/api/data')
         .then(function(response) {
           $scope.data = response.data;
         })
         .finally(function() {
           $scope.isLoading = false;
         });
     };
   });
   \`\`\`

2. **Show/Hide the Loading Indicator in the Template**  
   Use \`ng-show\` or \`ng-if\` to display a loading spinner or message when the async operation is in progress.

   \`\`\`html
   <button ng-click="loadData()">Load Data</button>

   <div ng-show="isLoading">
     <p>Loading...</p>
     <!-- You can use a spinner icon here -->
   </div>

   <div ng-if="!isLoading">
     <!-- Display your data here -->
     <pre>{{ data | json }}</pre>
   </div>
   \`\`\`

3. **Best Practices**
   - Use \`.finally()\` to ensure the loading indicator is hidden regardless of success or error.
   - For multiple concurrent requests, consider using a counter or a service to manage loading states globally.

**Summary:**  
By toggling a scope variable before and after your async operation, and binding it to your template, you can easily manage loading indicators in AngularJS applications.
\`\`\``,level:"Intermediate",created_at:"2025-04-20T11:04:10.396277Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"76f983df-566a-4522-b18a-7885c1674d4f",question:"How do you handle API rate limiting in AngularJS applications?",answer:`\`\`\`markdown
### Handling API Rate Limiting in AngularJS Applications

API rate limiting restricts the number of requests a client can make to a server within a specific timeframe. Exceeding these limits can result in errors or temporary bans. In AngularJS applications, handling rate limiting involves both proactive and reactive strategies:

---

#### **1. Throttling and Debouncing Requests**

- **Throttling**: Ensures that a function (e.g., an API call) is only executed once in a specified period.
- **Debouncing**: Delays the function execution until a certain period has passed since the last invocation (useful for search/autocomplete).

**Example using lodash:**
\`\`\`javascript
$scope.search = _.debounce(function(query) {
  // API call here
}, 300);
\`\`\`

---

#### **2. Queueing Requests**

Implement a request queue to ensure that only a certain number of requests are sent per time window.

**Example:**
\`\`\`javascript
var requestQueue = [];
var isProcessing = false;

function processQueue() {
  if (requestQueue.length === 0 || isProcessing) return;
  isProcessing = true;
  var req = requestQueue.shift();
  $http(req.config).then(req.resolve, req.reject).finally(function() {
    isProcessing = false;
    setTimeout(processQueue, 1000); // 1 request per second
  });
}

function rateLimitedHttp(config) {
  return $q(function(resolve, reject) {
    requestQueue.push({ config: config, resolve: resolve, reject: reject });
    processQueue();
  });
}
\`\`\`

---

#### **3. Handling 429 Too Many Requests Responses**

APIs often respond with HTTP 429 when rate limits are exceeded. Handle these in a global \`$http\` interceptor.

**Example:**
\`\`\`javascript
app.factory('rateLimitInterceptor', function($q, $timeout) {
  return {
    responseError: function(rejection) {
      if (rejection.status === 429) {
        var retryAfter = rejection.headers('Retry-After') || 1;
        return $timeout(function() {
          return $http(rejection.config);
        }, retryAfter * 1000);
      }
      return $q.reject(rejection);
    }
  };
});

app.config(function($httpProvider) {
  $httpProvider.interceptors.push('rateLimitInterceptor');
});
\`\`\`

---

#### **4. Respecting Server Rate Limit Headers**

Some APIs return headers like \`X-RateLimit-Remaining\` and \`X-RateLimit-Reset\`. Monitor these headers and adjust request logic accordingly.

**Example:**
\`\`\`javascript
$http.get('/api/data').then(function(response) {
  var remaining = response.headers('X-RateLimit-Remaining');
  var reset = response.headers('X-RateLimit-Reset');
  // Use this info to adjust request frequency
});
\`\`\`

---

#### **5. Using Third-Party Libraries**

Consider libraries like [angular-rate-limit](https://github.com/krispo/angular-rate-limit) or integrating with RxJS for more advanced rate limiting and retry strategies.

---

### **Summary Table**

| Strategy                | Description                                      |
|-------------------------|--------------------------------------------------|
| Throttling/Debouncing   | Limit frequency of API calls                     |
| Queueing                | Serialize requests to avoid bursts               |
| Interceptors            | Handle 429 errors and implement retries          |
| Header Monitoring       | Adjust logic based on rate limit headers         |
| Libraries               | Use existing solutions for complex scenarios     |

---

**Best Practice:**  
Combine these strategies as needed, depending on your API's rate limiting policy and your application's requirements.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:04:10.396283Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"edc0275a-cac7-4336-ba09-050e10ff0682",question:"How do you cache API responses in AngularJS?",answer:`\`\`\`markdown
### How to Cache API Responses in AngularJS

Caching API responses in AngularJS can improve performance by reducing unnecessary network requests. Here are common approaches to caching API responses:

#### 1. Using \`$http\` with Caching

AngularJS's \`$http\` service supports built-in caching for GET requests. You can enable it by setting the \`cache\` option to \`true\`:

\`\`\`javascript
$http.get('/api/data', { cache: true })
  .then(function(response) {
    // Use response.data
  });
\`\`\`

- **How it works:** The response is cached in the default \`$cacheFactory\` cache. Subsequent requests to the same URL will return the cached response.

#### 2. Custom Cache with \`$cacheFactory\`

For more control, create a custom cache using \`$cacheFactory\`:

\`\`\`javascript
angular.module('myApp').factory('myCache', function($cacheFactory) {
  return $cacheFactory('myCache');
});

angular.module('myApp').service('ApiService', function($http, myCache) {
  this.getData = function() {
    var cachedData = myCache.get('data');
    if (cachedData) {
      return Promise.resolve(cachedData);
    } else {
      return $http.get('/api/data').then(function(response) {
        myCache.put('data', response.data);
        return response.data;
      });
    }
  };
});
\`\`\`

- **How it works:** The service checks the cache before making an API call. If data is cached, it returns it; otherwise, it fetches from the API and stores the result.

#### 3. Using Third-Party Libraries

Libraries like [\`angular-cache\`](https://github.com/jmdobry/angular-cache) provide advanced caching features, such as expiration and persistence.

#### 4. Manual Caching in Services

You can also manually cache responses in a service variable:

\`\`\`javascript
angular.module('myApp').service('ApiService', function($http) {
  var cachedData = null;

  this.getData = function() {
    if (cachedData) {
      return Promise.resolve(cachedData);
    } else {
      return $http.get('/api/data').then(function(response) {
        cachedData = response.data;
        return cachedData;
      });
    }
  };
});
\`\`\`

---

**Summary:**  
AngularJS offers built-in and customizable ways to cache API responses, primarily through the \`$http\` service's \`cache\` option, \`$cacheFactory\`, or manual caching in services. Choose the approach that best fits your application's needs.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396291Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"048cb597-910a-4b05-a5f6-1db5fce83081",question:"What are the best practices for error handling in async operations in AngularJS?",answer:`\`\`\`markdown
### Best Practices for Error Handling in Async Operations in AngularJS

Handling errors effectively in asynchronous operations (such as HTTP requests or promises) is crucial for building robust AngularJS applications. Here are some best practices:

---

#### 1. **Use \`.catch()\` or \`.then(null, errorCallback)\` with Promises**
Always attach error handlers to your promises to catch and process errors.

\`\`\`javascript
$http.get('/api/data')
  .then(function(response) {
    // Success logic
  })
  .catch(function(error) {
    // Error handling logic
  });
\`\`\`

---

#### 2. **Centralize Error Handling with Interceptors**
AngularJS allows you to define \`$http\` interceptors to handle errors globally.

\`\`\`javascript
app.factory('httpErrorInterceptor', function($q, $injector) {
  return {
    responseError: function(rejection) {
      // Handle error (e.g., show notification)
      return $q.reject(rejection);
    }
  };
});

app.config(function($httpProvider) {
  $httpProvider.interceptors.push('httpErrorInterceptor');
});
\`\`\`

---

#### 3. **Provide User Feedback**
Display meaningful error messages to users, but avoid exposing sensitive information.

\`\`\`javascript
.catch(function(error) {
  $scope.errorMessage = "An error occurred. Please try again later.";
});
\`\`\`

---

#### 4. **Log Errors for Debugging**
Use AngularJS’s \`$log\` service or a custom logging service to record errors for debugging.

\`\`\`javascript
.catch(function(error) {
  $log.error('API error:', error);
});
\`\`\`

---

#### 5. **Graceful Degradation**
Ensure your application can continue to function (at least partially) even if some async operations fail.

---

#### 6. **Retry Failed Requests (When Appropriate)**
Implement retry logic for transient errors (e.g., network issues).

\`\`\`javascript
function retryHttpRequest(requestFn, retries) {
  return requestFn().catch(function(error) {
    if (retries > 0) {
      return retryHttpRequest(requestFn, retries - 1);
    }
    return $q.reject(error);
  });
}
\`\`\`

---

#### 7. **Handle Specific Error Codes**
Differentiate error handling based on HTTP status codes (e.g., 401 Unauthorized, 404 Not Found).

\`\`\`javascript
.catch(function(error) {
  if (error.status === 401) {
    // Redirect to login
  } else if (error.status === 404) {
    // Show not found message
  }
});
\`\`\`

---

#### 8. **Clean Up Resources**
On error, ensure any resources (like loading indicators or subscriptions) are properly cleaned up.

---

#### 9. **Use \`$q.reject()\` for Custom Errors**
When creating custom promises, use \`$q.reject()\` to propagate errors.

\`\`\`javascript
return $q.reject('Custom error message');
\`\`\`

---

#### 10. **Document and Test Error Scenarios**
Document possible error cases and write unit tests to ensure your error handling works as expected.

---

**Summary Table**

| Practice                        | Benefit                              |
|----------------------------------|--------------------------------------|
| Use \`.catch()\`                   | Catches and handles promise errors   |
| Centralize with interceptors     | DRY, consistent error handling       |
| Provide user feedback            | Better user experience               |
| Log errors                       | Easier debugging                     |
| Graceful degradation             | App remains usable                   |
| Retry logic                      | Handles transient failures           |
| Handle specific error codes      | Appropriate responses per error type |
| Clean up resources               | Prevents memory leaks, UI issues     |
| Use \`$q.reject()\`                | Proper promise error propagation     |
| Document & test                  | Reliable, maintainable code          |

---
\`\`\``,level:"Advanced",created_at:"2025-04-20T11:04:10.396298Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"ada7d714-0b0b-490c-b008-7d0c02fef4f1",question:"How do you test asynchronous API calls in AngularJS?",answer:`\`\`\`markdown
### Testing Asynchronous API Calls in AngularJS

Testing asynchronous API calls in AngularJS typically involves using the built-in \`$httpBackend\` service provided by the \`ngMock\` module. This allows you to mock HTTP requests and control their responses, enabling you to test how your code handles asynchronous operations without making real API calls.

#### Steps to Test Asynchronous API Calls

1. **Include the \`ngMock\` Module**  
   Make sure to include \`angular-mocks.js\` in your test environment.

2. **Inject Dependencies**  
   Inject the service under test and \`$httpBackend\` into your test.

   \`\`\`javascript
   beforeEach(module('myApp'));

   var $httpBackend, myService;
   beforeEach(inject(function(_$httpBackend_, _myService_) {
     $httpBackend = _$httpBackend_;
     myService = _myService_;
   }));
   \`\`\`

3. **Set Up Mock HTTP Expectations**  
   Use \`$httpBackend.expectGET()\`, \`.expectPOST()\`, etc., to specify expected API calls and their mock responses.

   \`\`\`javascript
   $httpBackend.expectGET('/api/data').respond(200, { result: 'success' });
   \`\`\`

4. **Trigger the API Call**  
   Call the method in your service or controller that makes the HTTP request.

   \`\`\`javascript
   var response;
   myService.getData().then(function(res) {
     response = res.data;
   });
   \`\`\`

5. **Flush the Backend**  
   Use \`$httpBackend.flush()\` to simulate the asynchronous response.

   \`\`\`javascript
   $httpBackend.flush();
   \`\`\`

6. **Assert the Results**  
   Check that your code handled the response as expected.

   \`\`\`javascript
   expect(response).toEqual({ result: 'success' });
   \`\`\`

7. **Verify No Outstanding Requests**  
   Ensure there are no unexpected HTTP requests left.

   \`\`\`javascript
   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });
   \`\`\`

#### Example Test

\`\`\`javascript
describe('myService', function() {
  beforeEach(module('myApp'));

  var $httpBackend, myService;

  beforeEach(inject(function(_$httpBackend_, _myService_) {
    $httpBackend = _$httpBackend_;
    myService = _myService_;
  }));

  it('should fetch data asynchronously', function() {
    $httpBackend.expectGET('/api/data').respond(200, { result: 'success' });

    var result;
    myService.getData().then(function(response) {
      result = response.data;
    });

    $httpBackend.flush();
    expect(result).toEqual({ result: 'success' });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
});
\`\`\`

#### Key Points

- Use \`$httpBackend\` to mock and control HTTP requests.
- Always flush the backend to resolve promises.
- Clean up with \`verifyNoOutstandingExpectation()\` and \`verifyNoOutstandingRequest()\`.

This approach allows you to reliably test asynchronous API integration in AngularJS applications.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:04:10.396305Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"a70e62f8-f31c-49d1-82e6-72fa00bfc2e0",question:"How do you mock HTTP requests in AngularJS unit tests?",answer:`\`\`\`markdown To mock HTTP requests in AngularJS unit tests, you use the $httpBackend service provided by the ngMock module. This allows you to simulate backend API responses without making real HTTP calls. Here’s how you can do it:

\`\`\`javascript
describe('MyService', function() {
  var $httpBackend, MyService;

  beforeEach(module('myApp'));

  beforeEach(inject(function(_$httpBackend_, _MyService_) {
    $httpBackend = _$httpBackend_;
    MyService = _MyService_;
  }));

  afterEach(function() {
    // Ensure that all expects set on the $httpBackend were actually called
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch data from API', function() {
    var mockResponse = { data: 'test' };

    // Set up the expected HTTP request and response
    $httpBackend.expectGET('/api/data').respond(200, mockResponse);

    var result;
    MyService.getData().then(function(response) {
      result = response.data;
    });

    // Flush pending HTTP requests
    $httpBackend.flush();

    expect(result).toEqual('test');
  });
});
\`\`\`

**Key Points:**

- Inject $httpBackend in your test.
- Use $httpBackend.expectGET(), expectPOST(), etc., to define expected requests and mock responses.
- Call $httpBackend.flush() to simulate the asynchronous response.
- Use $httpBackend.verifyNoOutstandingExpectation() and $httpBackend.verifyNoOutstandingRequest() to ensure all requests are handled.
- This approach isolates your unit tests from real backend services, making them fast and reliable.

**References:**
- [AngularJS $httpBackend documentation](https://docs.angularjs.org/api/ngMock/service/$httpBackend)
- [Testing AngularJS Applications (Official Guide)](https://docs.angularjs.org/guide/unit-testing)`,level:"Advanced",created_at:"2025-04-20T11:04:10.396312Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"7f8698c8-66f9-4970-bc8b-3aa0c9fef3d7",question:"What is the digest cycle and how does it relate to async operations in AngularJS?",answer:`\`\`\`markdown
### What is the Digest Cycle and How Does it Relate to Async Operations in AngularJS?

#### The Digest Cycle

In AngularJS, the **digest cycle** is the core mechanism that keeps the view (DOM) in sync with the model (JavaScript objects). It is a loop that checks all the watched expressions (using \`$watch\`) on the \`$scope\` for changes. If a change is detected, AngularJS updates the DOM accordingly.

- The digest cycle is triggered automatically by AngularJS when certain events occur, such as user interactions (ng-click), HTTP responses, or timers (like \`$timeout\`).
- Internally, the digest cycle repeatedly checks all watchers until no more changes are detected (this is called "dirty checking").

#### Relation to Async Operations

Async operations—such as HTTP requests, timeouts, and custom asynchronous code—often update the model outside of AngularJS's direct control. AngularJS needs to be notified to run the digest cycle so that changes are reflected in the view.

- **$http, $timeout, $interval**: These AngularJS services automatically trigger the digest cycle after their callbacks execute. For example, when an \`$http\` request completes, AngularJS runs \`$digest\` to update the view with new data.
- **Third-party async code (e.g., setTimeout, Promises not using $q)**: If you use native JavaScript async APIs, AngularJS is unaware of the changes. You must manually trigger a digest cycle using \`$scope.$apply()\` to update the view.

#### Example

\`\`\`javascript
// Using $http (digest cycle triggered automatically)
$http.get('/api/data').then(function(response) {
  $scope.data = response.data;
  // No need to call $scope.$apply()
});

// Using native setTimeout (digest cycle NOT triggered automatically)
setTimeout(function() {
  $scope.value = 42;
  $scope.$apply(); // Manually trigger digest cycle
}, 1000);
\`\`\`

#### Summary Table

| Async Source         | Digest Cycle Triggered Automatically? | Manual Action Needed?      |
|----------------------|:-------------------------------------:|:-------------------------:|
| \`$http\`, \`$timeout\`  | Yes                                   | No                        |
| Native \`setTimeout\`  | No                                    | Yes, use \`$scope.$apply()\`|
| Custom async code    | No                                    | Yes, use \`$scope.$apply()\`|

#### Key Takeaway

The digest cycle is essential for AngularJS's two-way data binding. For async operations, ensure that the digest cycle runs after your model changes—either automatically (with AngularJS services) or manually (with \`$scope.$apply()\` for external async code)—to keep your view and model in sync.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:04:10.396319Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"53bc3b4b-a162-40e4-a358-3b58f33c8582",question:"How do you prevent memory leaks in AngularJS when dealing with async operations?",answer:`\`\`\`markdown
### Preventing Memory Leaks in AngularJS with Async Operations

Memory leaks in AngularJS often occur when asynchronous operations (such as \`$http\`, \`$timeout\`, \`$interval\`, or custom event listeners) are not properly cleaned up, especially when controllers or scopes are destroyed. Here are best practices to prevent such leaks:

---

#### 1. **Unsubscribe from Events and Observables**

- **$scope.$on**: When registering event listeners, always deregister them on scope destruction.

  \`\`\`javascript
  var deregister = $scope.$on('someEvent', function() { ... });
  $scope.$on('$destroy', deregister);
  \`\`\`

- **Custom Event Listeners**: Remove any listeners you add to DOM or services.

---

#### 2. **Cancel Pending $timeout and $interval**

- Always store the promise returned by \`$timeout\` or \`$interval\` and cancel it on \`$destroy\`.

  \`\`\`javascript
  var timeoutPromise = $timeout(function() { ... }, 1000);
  $scope.$on('$destroy', function() {
    $timeout.cancel(timeoutPromise);
  });
  \`\`\`

---

#### 3. **Abort Pending $http Requests**

- Use the \`timeout\` property in \`$http\` to cancel requests when the scope is destroyed.

  \`\`\`javascript
  var canceler = $q.defer();
  $http.get('/api/data', { timeout: canceler.promise });

  $scope.$on('$destroy', function() {
    canceler.resolve(); // Aborts the request
  });
  \`\`\`

---

#### 4. **Clean Up Third-Party Subscriptions**

- If using libraries like RxJS, always unsubscribe on \`$destroy\`.

  \`\`\`javascript
  var subscription = observable.subscribe(...);
  $scope.$on('$destroy', function() {
    subscription.unsubscribe();
  });
  \`\`\`

---

#### 5. **Avoid Global State Pollution**

- Do not attach data or listeners to \`$rootScope\` unless necessary, and always clean up if you do.

---

#### 6. **Use One-Time Bindings Where Possible**

- Use \`::\` one-time bindings to avoid unnecessary watchers.

  \`\`\`html
  <span>{{::someValue}}</span>
  \`\`\`

---

#### **Summary Table**

| Async Operation      | Prevention Technique                        |
|---------------------|---------------------------------------------|
| $scope.$on          | Deregister on \`$destroy\`                    |
| $timeout/$interval  | Cancel on \`$destroy\`                        |
| $http               | Use \`timeout\` and resolve on \`$destroy\`     |
| RxJS/Observables    | Unsubscribe on \`$destroy\`                   |
| DOM/Event Listeners | Remove on \`$destroy\`                        |

---

**In summary:**  
Always clean up any asynchronous operation or event listener when the associated scope or component is destroyed. This ensures that no references are kept, preventing memory leaks in AngularJS applications.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:04:10.396326Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"950e45d9-8e7d-4100-be8d-1d7283077730",question:"How do you update the UI after an async operation completes in AngularJS?",answer:"```markdown\nIn AngularJS, when you perform an asynchronous operation (such as an API call using `$http` or `$q`), Angular's digest cycle automatically updates the UI when the operation completes, as long as the async code runs within Angular's context.\n\n**Example:**\n\n```javascript\napp.controller('MyController', function($scope, $http) {\n  $scope.data = null;\n\n  $http.get('/api/data').then(function(response) {\n    $scope.data = response.data;\n    // The UI will automatically update to reflect the new value of $scope.data\n  });\n});\n```\n\n**Key Points:**\n- Use AngularJS services like `$http` or `$q` for async operations.\n- Update `$scope` variables inside the `.then()` or `.success()` callback.\n- AngularJS will detect the change and update the UI automatically.\n\n**Note:**  \nIf you use non-AngularJS async code (like plain JavaScript `setTimeout` or third-party libraries), you may need to manually trigger a digest cycle using `$scope.$apply()`:\n\n```javascript\nsetTimeout(function() {\n  $scope.$apply(function() {\n    $scope.data = 'Updated!';\n  });\n}, 1000);\n```\n```\n",level:"Beginner",created_at:"2025-04-20T11:04:10.396333Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"75534b73-badd-4de8-b47d-d053d667c7f7",question:"How do you handle file uploads to an API in AngularJS?",answer:`\`\`\`markdown
To handle file uploads to an API in AngularJS, you typically use the following approach:

### 1. Use a File Input in Your HTML

\`\`\`html
<form ng-submit="uploadFile()">
  <input type="file" file-model="myFile" />
  <button type="submit">Upload</button>
</form>
\`\`\`

### 2. Create a Custom Directive to Bind the File Input

AngularJS does not natively bind file inputs to models, so you need a directive:

\`\`\`javascript
app.directive('fileModel', ['$parse', function ($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function(){
        scope.$apply(function(){
          modelSetter(scope, element[0].files[0]);
        });
      });
    }
  };
}]);
\`\`\`

### 3. Use FormData and \`$http\` to Send the File

In your controller:

\`\`\`javascript
app.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.uploadFile = function() {
    var file = $scope.myFile;
    var formData = new FormData();
    formData.append('file', file);

    $http.post('/api/upload', formData, {
      transformRequest: angular.identity,
      headers: { 'Content-Type': undefined }
    }).then(function(response) {
      // Handle success
      console.log('File uploaded successfully', response.data);
    }, function(error) {
      // Handle error
      console.error('Error uploading file', error);
    });
  };
}]);
\`\`\`

### 4. Key Points

- Use \`FormData\` to send files as multipart/form-data.
- Set \`Content-Type\` to \`undefined\` so the browser sets the correct boundary.
- Use \`angular.identity\` for \`transformRequest\` to prevent Angular from serializing the data.

### 5. Optional: Use Third-Party Libraries

For more advanced use cases (progress bars, drag-and-drop, etc.), consider libraries like [ng-file-upload](https://github.com/danialfarid/ng-file-upload).

---

**Summary:**  
File uploads in AngularJS require a custom directive for file input binding, use of \`FormData\` for payload, and proper configuration of \`$http\` to send the file to your API endpoint.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396345Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"a3943ca7-8a4c-499c-9b69-2b47f9a785e0",question:"How do you handle long polling or server-sent events in AngularJS?",answer:`\`\`\`markdown
To handle **long polling** or **server-sent events (SSE)** in AngularJS, you need to manage asynchronous communication with the server, often outside the standard \`$http\` service. Here’s how you can approach each:

---

### 1. Long Polling

Long polling involves repeatedly making HTTP requests to the server, where the server holds the request open until new data is available or a timeout occurs.

**Implementation Steps:**

- Use \`$http\` or \`$resource\` to make the initial request.
- On response, process the data and immediately issue another request.
- Handle errors and implement retry logic as needed.

**Example:**

\`\`\`javascript
app.factory('LongPollingService', function($http, $timeout, $rootScope) {
  var poll = function() {
    $http.get('/api/updates').then(function(response) {
      // Process new data
      $rootScope.$broadcast('newData', response.data);
      // Immediately poll again
      poll();
    }, function(error) {
      // Retry after a delay on error
      $timeout(poll, 5000);
    });
  };

  return {
    start: poll
  };
});
\`\`\`

**Usage:**

\`\`\`javascript
app.controller('MainCtrl', function(LongPollingService) {
  LongPollingService.start();
});
\`\`\`

---

### 2. Server-Sent Events (SSE)

SSE uses the \`EventSource\` API to receive automatic updates from the server via a persistent HTTP connection.

**Implementation Steps:**

- Use the native \`EventSource\` API (not available in \`$http\`).
- Listen for messages and update the AngularJS scope accordingly.
- Use \`$scope.$apply()\` or \`$timeout\` to trigger digest cycles when updating scope variables.

**Example:**

\`\`\`javascript
app.factory('SSEService', function($rootScope, $timeout) {
  var source = new EventSource('/api/stream');

  source.onmessage = function(event) {
    // Use $timeout to safely update scope
    $timeout(function() {
      $rootScope.$broadcast('newData', JSON.parse(event.data));
    });
  };

  source.onerror = function(error) {
    // Handle errors (e.g., reconnect logic)
    console.error('SSE error:', error);
  };

  return source;
});
\`\`\`

**Usage:**

\`\`\`javascript
app.controller('MainCtrl', function($scope, SSEService) {
  $scope.data = [];

  $scope.$on('newData', function(event, data) {
    $scope.data.push(data);
  });
});
\`\`\`

---

### **Best Practices**

- Always clean up event listeners or polling intervals when the controller/scope is destroyed to prevent memory leaks.
- Use \`$timeout\` or \`$scope.$apply()\` when updating scope variables from outside AngularJS (e.g., native EventSource callbacks).
- Handle network errors and implement reconnection logic as needed.

---

**Summary Table**

| Technique         | API Used      | AngularJS Integration      | Use Case                |
|-------------------|--------------|----------------------------|-------------------------|
| Long Polling      | \`$http\`      | Recursively call on success| Broad compatibility     |
| Server-Sent Events| \`EventSource\`| Use \`$timeout\` for digest  | Real-time updates, SSE  |
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:04:10.396358Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"3297078e-ec3e-49db-b17e-f5f4ff5dd66c",question:"How do you implement request throttling or debouncing in AngularJS API calls?",answer:`\`\`\`markdown
### Implementing Request Throttling or Debouncing in AngularJS API Calls

In AngularJS, to prevent excessive API calls (such as those triggered by rapid user input), you can implement **throttling** or **debouncing**. These techniques help optimize performance and reduce server load.

#### 1. Debouncing API Calls

**Debouncing** ensures that the API call is made only after a specified period of inactivity. This is useful for scenarios like search inputs.

**Example using \`$timeout\`:**

\`\`\`javascript
app.controller('SearchController', function($scope, $http, $timeout) {
  let debounceTimeout;

  $scope.search = function(query) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
    }
    debounceTimeout = $timeout(function() {
      $http.get('/api/search', { params: { q: query } })
        .then(function(response) {
          $scope.results = response.data;
        });
    }, 300); // 300ms debounce
  };
});
\`\`\`

**Usage in template:**
\`\`\`html
<input ng-model="searchQuery" ng-change="search(searchQuery)">
\`\`\`

#### 2. Throttling API Calls

**Throttling** ensures that the API call is made at most once in a specified interval, regardless of how many times the event is triggered.

**Example using a custom throttle function:**

\`\`\`javascript
app.factory('throttle', function($timeout) {
  return function(fn, threshhold) {
    let last, promise;
    return function() {
      let context = this, args = arguments;
      let now = Date.now();
      if (last && now < last + threshhold) {
        $timeout.cancel(promise);
        promise = $timeout(function() {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  };
});

app.controller('SearchController', function($scope, $http, throttle) {
  $scope.throttledSearch = throttle(function(query) {
    $http.get('/api/search', { params: { q: query } })
      .then(function(response) {
        $scope.results = response.data;
      });
  }, 500); // 500ms throttle
});
\`\`\`

**Usage in template:**
\`\`\`html
<input ng-model="searchQuery" ng-change="throttledSearch(searchQuery)">
\`\`\`

---

### Summary Table

| Technique   | When to Use                      | AngularJS Tooling      |
|-------------|----------------------------------|------------------------|
| Debouncing  | Wait for user to stop typing     | \`$timeout\`             |
| Throttling  | Limit calls to fixed intervals   | Custom/throttle factory|

---

**Tip:** For more advanced use-cases, consider integrating lodash's \`_.debounce\` or \`_.throttle\` functions with AngularJS.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:04:10.396369Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"b07c5586-0140-4af4-ad26-352b90518e98",question:"How do you secure sensitive data in API requests made from AngularJS?",answer:`\`\`\`markdown
Securing sensitive data in API requests from AngularJS involves several best practices, as client-side code is inherently exposed to users. Here are key strategies:

### 1. **Never Store Sensitive Data in the Frontend**
- Do **not** store secrets (API keys, passwords, tokens) in AngularJS code or configuration files.
- Use environment variables and server-side logic to handle sensitive data.

### 2. **Use HTTPS**
- Always serve your AngularJS application and make API requests over HTTPS to encrypt data in transit and prevent man-in-the-middle attacks.

### 3. **Authentication & Authorization**
- Implement secure authentication mechanisms (e.g., OAuth 2.0, JWT).
- Store tokens securely (preferably in \`HttpOnly\` cookies to mitigate XSS attacks).
- Never expose authentication credentials in the frontend.

### 4. **Backend as a Proxy**
- Route API requests through your backend server. The frontend communicates with your backend, which then securely interacts with third-party APIs using sensitive credentials.

### 5. **Input Validation & Sanitization**
- Validate and sanitize all user input on both client and server sides to prevent injection attacks.

### 6. **CORS Configuration**
- Restrict API access using CORS policies to only allow trusted origins.

### 7. **Use CSRF Protection**
- Implement CSRF tokens for state-changing requests to prevent cross-site request forgery.

### 8. **Minimal Data Exposure**
- Only send necessary data in API requests and responses. Avoid sending sensitive information unless absolutely required.

### 9. **Monitor and Log**
- Monitor API usage and log suspicious activities for auditing and incident response.

---

**Example: Using Backend Proxy for API Integration**

\`\`\`javascript
// AngularJS frontend makes a request to your backend
$http.post('/api/secure-action', { data: userInput })
  .then(function(response) {
    // handle response
  });
\`\`\`

\`\`\`js
// Node.js backend securely interacts with the third-party API
app.post('/api/secure-action', (req, res) => {
  // Use server-stored API keys/secrets
  // Make request to third-party API
  // Return result to frontend
});
\`\`\`

---

**Summary Table**

| Practice                  | Where to Implement | Purpose                                   |
|---------------------------|-------------------|-------------------------------------------|
| No secrets in frontend    | Frontend          | Prevent exposure of sensitive data        |
| HTTPS                     | Both              | Encrypt data in transit                   |
| Auth & tokens             | Both              | Secure user authentication                |
| Backend proxy             | Backend           | Hide credentials from client              |
| Input validation          | Both              | Prevent injection attacks                 |
| CORS                      | Backend           | Restrict API access                       |
| CSRF protection           | Backend           | Prevent CSRF attacks                      |
| Minimal data exposure     | Both              | Reduce risk of data leakage               |
| Monitoring                | Backend           | Detect and respond to threats             |

---

**In summary:**  
Sensitive data should never be exposed or handled directly in AngularJS code. Always use secure, server-side mechanisms for authentication, authorization, and API integration, and follow security best practices to protect your application and users.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:04:10.396381Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"802407ce-373c-432f-be1a-40f1797070d2",question:"How do you handle API versioning in AngularJS applications?",answer:`\`\`\`markdown
### Handling API Versioning in AngularJS Applications

API versioning is crucial for maintaining backward compatibility and enabling smooth upgrades in your AngularJS applications. Here’s how you can effectively handle API versioning:

#### 1. **URL-Based Versioning**
The most common approach is to include the version number in the API endpoint URL.

**Example:**
\`\`\`javascript
// Service definition
angular.module('myApp').service('UserService', function($http) {
  const API_BASE = 'https://api.example.com/v2'; // v2 indicates the API version

  this.getUser = function(id) {
    return $http.get(\`\${API_BASE}/users/\${id}\`);
  };
});
\`\`\`
- **Pros:** Easy to manage multiple versions.
- **Cons:** Requires updating all endpoints when changing versions.

#### 2. **Header-Based Versioning**
Specify the API version in the HTTP headers.

**Example:**
\`\`\`javascript
angular.module('myApp').service('UserService', function($http) {
  const API_BASE = 'https://api.example.com';

  this.getUser = function(id) {
    return $http.get(\`\${API_BASE}/users/\${id}\`, {
      headers: { 'Accept-Version': 'v2' }
    });
  };
});
\`\`\`
- **Pros:** Clean URLs, versioning is abstracted from the endpoint.
- **Cons:** Requires server support for header parsing.

#### 3. **Centralized Configuration**
Use AngularJS constants or configuration blocks to manage API versions centrally.

**Example:**
\`\`\`javascript
angular.module('myApp')
  .constant('API_CONFIG', {
    baseUrl: 'https://api.example.com',
    version: 'v2'
  })
  .service('UserService', function($http, API_CONFIG) {
    this.getUser = function(id) {
      return $http.get(\`\${API_CONFIG.baseUrl}/\${API_CONFIG.version}/users/\${id}\`);
    };
  });
\`\`\`
- **Pros:** Easy to update the version in one place.

#### 4. **Interceptors for Dynamic Versioning**
Use \`$httpInterceptor\` to automatically append version info to all requests.

**Example:**
\`\`\`javascript
angular.module('myApp')
  .factory('apiVersionInterceptor', function(API_CONFIG) {
    return {
      request: function(config) {
        if (config.url.startsWith(API_CONFIG.baseUrl)) {
          config.url = config.url.replace(API_CONFIG.baseUrl, \`\${API_CONFIG.baseUrl}/\${API_CONFIG.version}\`);
        }
        return config;
      }
    };
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('apiVersionInterceptor');
  });
\`\`\`
- **Pros:** Centralizes versioning logic, reduces code duplication.

#### 5. **Best Practices**
- **Document** which API version each service uses.
- **Gracefully handle** deprecated endpoints and errors.
- **Test** thoroughly when upgrading API versions.

---

**Summary:**  
API versioning in AngularJS can be managed via URL paths, headers, centralized configs, or interceptors. Choose the method that best fits your backend and team workflow, and always keep versioning logic maintainable and well-documented.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:04:10.396388Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"a601e228-b850-4e4f-817e-4f64dbd9b063",question:"How do you use $timeout and $interval for async operations in AngularJS?",answer:`\`\`\`markdown
In AngularJS, \`$timeout\` and \`$interval\` are services used to handle asynchronous operations related to timing.

### \`$timeout\`
- Similar to JavaScript's \`setTimeout\`.
- Executes a function after a specified delay (in milliseconds).
- Returns a promise, allowing you to handle completion or cancellation.

**Example:**
\`\`\`javascript
app.controller('MyCtrl', function($scope, $timeout) {
  $scope.message = "Waiting...";

  $timeout(function() {
    $scope.message = "Timeout executed!";
  }, 2000); // Executes after 2 seconds
});
\`\`\`

### \`$interval\`
- Similar to JavaScript's \`setInterval\`.
- Repeatedly executes a function at specified intervals.
- Returns a promise-like object that can be cancelled.

**Example:**
\`\`\`javascript
app.controller('MyCtrl', function($scope, $interval) {
  $scope.counter = 0;

  var stop = $interval(function() {
    $scope.counter++;
    if ($scope.counter === 5) {
      $interval.cancel(stop); // Stop after 5 increments
    }
  }, 1000); // Executes every 1 second
});
\`\`\`

### Key Points
- Both services automatically trigger AngularJS's digest cycle, updating the view when the model changes.
- Always cancel intervals/timeouts in \`$destroy\` event to prevent memory leaks:
  \`\`\`javascript
  $scope.$on('$destroy', function() {
    $interval.cancel(stop);
  });
  \`\`\`

### Use Cases
- \`$timeout\`: Delayed actions (e.g., showing messages, debouncing input).
- \`$interval\`: Polling APIs, updating clocks, or periodic tasks.

These services help manage async operations in a way that's integrated with AngularJS's scope and digest cycle.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396395Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"454e2944-76fe-48c7-a033-7e6b19094ec9",question:"What are the limitations of AngularJS $http service for API integration?",answer:`\`\`\`markdown
### Limitations of AngularJS \`$http\` Service for API Integration

While AngularJS's \`$http\` service provides a convenient way to make HTTP requests, it has several limitations when used for API integration, especially in advanced or large-scale applications:

1. **Limited Interceptors and Middleware Support**
   - \`$http\` supports request and response interceptors, but the mechanism is less flexible compared to modern alternatives (like Angular's \`HttpClient\` or libraries such as Axios).
   - Complex middleware chains or advanced request/response transformations can be cumbersome to implement.

2. **No Built-in Retry or Advanced Error Handling**
   - \`$http\` does not provide built-in support for retrying failed requests, exponential backoff, or circuit breaker patterns.
   - Developers must manually implement such logic, increasing code complexity.

3. **Lack of Observable Support**
   - \`$http\` uses promises (\`$q\`), not Observables, limiting its ability to handle complex asynchronous flows, cancellations, or streams of data.
   - This makes it less suitable for real-time or event-driven API integrations.

4. **No Automatic JSON Transformation for Non-Standard APIs**
   - \`$http\` automatically serializes and deserializes JSON, but if an API uses a different content type or requires custom serialization, extra configuration is needed.

5. **CORS and Security Limitations**
   - \`$http\` cannot bypass browser-enforced CORS restrictions. If the API does not support CORS, integration is not possible from the browser.
   - Handling authentication tokens (e.g., JWT) and secure storage must be managed manually.

6. **Limited Progress Event Support**
   - \`$http\` does not natively support progress events for uploads/downloads, making it harder to provide user feedback during large file transfers.

7. **No Built-in Request Cancellation**
   - While \`$http\` allows request cancellation via the \`timeout\` property, it is less intuitive and flexible compared to modern APIs that use \`AbortController\` or Observable cancellation.

8. **Verbose Configuration for Advanced Scenarios**
   - Advanced configurations (e.g., custom headers, credentials, response types) require verbose and sometimes repetitive code.

9. **No Built-in Support for Modern Features**
   - Lacks built-in support for features like HTTP/2, WebSockets, or GraphQL, which are increasingly common in modern APIs.

10. **Deprecation and Lack of Updates**
    - AngularJS (and thus \`$http\`) is no longer actively maintained, meaning no new features, security updates, or bug fixes.

---

**Summary:**  
While AngularJS’s \`$http\` service is sufficient for basic API integration, it falls short in terms of flexibility, advanced features, and modern best practices required for robust, scalable, and secure API interactions in contemporary web applications.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:04:10.396402Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"df71cfb2-cc04-4505-8412-626de6749755",question:"How do you handle cross-domain requests in AngularJS?",answer:`\`\`\`markdown
### Handling Cross-Domain Requests in AngularJS

In AngularJS, cross-domain (CORS) requests are typically handled using the \`$http\` service, which supports AJAX calls to external APIs. However, browsers enforce the Same-Origin Policy, so the server you are requesting data from must explicitly allow cross-origin requests.

#### Steps to Handle Cross-Domain Requests:

1. **Enable CORS on the Server:**
   - The server must include appropriate CORS headers, such as:
     \`\`\`
     Access-Control-Allow-Origin: *
     \`\`\`
   - This allows browsers to accept responses from different origins.

2. **Making a Cross-Domain Request in AngularJS:**
   \`\`\`javascript
   $http.get('https://api.example.com/data')
     .then(function(response) {
       // Success: handle response.data
     }, function(error) {
       // Error: handle error
     });
   \`\`\`

3. **Custom Headers and Credentials:**
   - If you need to send credentials (cookies, HTTP authentication), set \`withCredentials: true\`:
     \`\`\`javascript
     $http({
       method: 'GET',
       url: 'https://api.example.com/data',
       withCredentials: true
     });
     \`\`\`
   - The server must also allow credentials:
     \`\`\`
     Access-Control-Allow-Credentials: true
     \`\`\`

4. **Using JSONP as a Fallback:**
   - If the server does not support CORS, you can use JSONP for GET requests:
     \`\`\`javascript
     $http.jsonp('https://api.example.com/data?callback=JSON_CALLBACK')
       .then(function(response) {
         // Handle response
       });
     \`\`\`
   - Note: JSONP only supports GET requests and requires the server to support JSONP.

#### Summary Table

| Method         | Server Requirement           | AngularJS Usage                      |
|----------------|-----------------------------|--------------------------------------|
| CORS           | CORS headers                | \`$http.get/post/put/delete\`          |
| JSONP          | JSONP endpoint              | \`$http.jsonp\`                        |

#### Best Practices

- Always prefer CORS over JSONP for security and flexibility.
- Ensure the server is configured correctly for CORS.
- Avoid using JSONP for sensitive data.

**References:**
- [AngularJS $http Documentation](https://docs.angularjs.org/api/ng/service/$http)
- [MDN CORS Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396410Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"08e29fe9-d2fa-440d-9498-105d2b6fd850",question:"How do you use third-party libraries like Restangular for API integration in AngularJS?",answer:`\`\`\`markdown
To use third-party libraries like **Restangular** for API integration in AngularJS, follow these steps:

### 1. Install Restangular and Dependencies

You need to include both \`restangular.js\` and its dependency, \`lodash.js\` (or \`underscore.js\`):

- Using npm:
  \`\`\`bash
  npm install restangular lodash
  \`\`\`
- Or include via CDN in your HTML:
  \`\`\`html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"><\/script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/restangular/1.6.1/restangular.min.js"><\/script>
  \`\`\`

### 2. Add Restangular as a Dependency

When defining your AngularJS module, add \`restangular\` as a dependency:

\`\`\`javascript
angular.module('myApp', ['restangular']);
\`\`\`

### 3. Configure Restangular (Optional)

You can configure the base URL or default headers in a \`.config\` block:

\`\`\`javascript
angular.module('myApp')
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('https://api.example.com');
    // Optional: set default headers
    RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer TOKEN'});
  });
\`\`\`

### 4. Inject and Use Restangular in Controllers/Services

Inject \`Restangular\` where you need to make API calls:

\`\`\`javascript
angular.module('myApp')
  .controller('MainCtrl', function($scope, Restangular) {
    // GET request to /users
    Restangular.all('users').getList().then(function(users) {
      $scope.users = users;
    });

    // GET request to /users/1
    Restangular.one('users', 1).get().then(function(user) {
      $scope.user = user;
    });

    // POST request to /users
    Restangular.all('users').post({name: 'John Doe'}).then(function(newUser) {
      $scope.newUser = newUser;
    });
  });
\`\`\`

### 5. Handling Async Operations

Restangular methods return **promises**, so you can use \`.then()\` for handling responses and errors:

\`\`\`javascript
Restangular.all('posts').getList()
  .then(function(posts) {
    // Success
    $scope.posts = posts;
  })
  .catch(function(error) {
    // Error handling
    console.error(error);
  });
\`\`\`

---

**Summary:**  
Restangular simplifies API integration in AngularJS by providing a clean, promise-based interface for RESTful operations. Install it, add it as a dependency, configure as needed, and use its methods to perform async API calls in your application.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396417Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"ccb5c77c-9223-409a-907f-5c50ec240f14",question:"How do you manage API endpoints and environment variables in AngularJS?",answer:`\`\`\`markdown
### Managing API Endpoints and Environment Variables in AngularJS

In AngularJS (version 1.x), managing API endpoints and environment variables typically involves separating configuration from your application logic. Here’s how you can do it:

#### 1. Use AngularJS Constants or Values

Define your API endpoints and environment-specific variables using \`.constant\` or \`.value\` in a dedicated configuration module.

\`\`\`javascript
// app.config.js
angular.module('app.config', [])
  .constant('API_ENDPOINTS', {
    BASE_URL: 'https://api.example.com',
    USERS: '/users',
    POSTS: '/posts'
  })
  .constant('ENV', {
    name: 'development'
  });
\`\`\`

#### 2. Inject Configuration into Services

Inject these constants into your services or controllers to use them for API calls.

\`\`\`javascript
angular.module('app')
  .service('UserService', function($http, API_ENDPOINTS) {
    this.getUsers = function() {
      return $http.get(API_ENDPOINTS.BASE_URL + API_ENDPOINTS.USERS);
    };
  });
\`\`\`

#### 3. Environment-Specific Files

Maintain separate configuration files for each environment (e.g., \`config.dev.js\`, \`config.prod.js\`). During your build or deployment process, include the appropriate config file.

- **config.dev.js**
  \`\`\`javascript
  angular.module('app.config', [])
    .constant('API_ENDPOINTS', {
      BASE_URL: 'http://localhost:3000',
      USERS: '/users'
    });
  \`\`\`

- **config.prod.js**
  \`\`\`javascript
  angular.module('app.config', [])
    .constant('API_ENDPOINTS', {
      BASE_URL: 'https://api.production.com',
      USERS: '/users'
    });
  \`\`\`

#### 4. Automate Environment Selection

Use build tools (like Grunt, Gulp, or Webpack) or scripts to include the correct config file based on the environment.

#### 5. Avoid Hardcoding in Source Files

Never hardcode sensitive or environment-specific values directly in your controllers or services. Always use injected constants or values.

---

**Summary:**  
To manage API endpoints and environment variables in AngularJS, define them as constants or values in a separate module, inject them where needed, and maintain separate config files for different environments. Use build tools to automate the selection of the correct configuration during deployment.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396424Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"b9d5d073-3cea-4d72-8064-8efbcb9e9440",question:"How do you handle large data sets from APIs efficiently in AngularJS?",answer:`\`\`\`markdown
Handling large data sets from APIs efficiently in AngularJS involves several strategies to optimize performance, user experience, and resource usage:

### 1. **Pagination (Server-side)**
- **Request only a subset of data** (e.g., 20–50 items per page) from the API.
- Update the UI as users navigate between pages.
- Example:
  \`\`\`javascript
  $http.get('/api/items?page=' + page + '&size=' + pageSize)
    .then(function(response) {
      $scope.items = response.data.items;
    });
  \`\`\`

### 2. **Infinite Scrolling / Lazy Loading**
- Load more data as the user scrolls, instead of fetching all at once.
- Useful for lists and feeds.
- Use libraries like [ngInfiniteScroll](https://sroze.github.io/ngInfiniteScroll/).

### 3. **Filtering and Searching on the Server**
- Send filter/search parameters to the API so only relevant data is returned.
- Reduces payload size and client-side processing.

### 4. **Debouncing API Requests**
- When implementing search or filter features, debounce user input to avoid excessive API calls.
- Example using \`$timeout\`:
  \`\`\`javascript
  var timeout;
  $scope.search = function(query) {
    if (timeout) $timeout.cancel(timeout);
    timeout = $timeout(function() {
      $http.get('/api/items?search=' + query)
        .then(function(response) {
          $scope.items = response.data.items;
        });
    }, 300);
  };
  \`\`\`

### 5. **Virtual Scrolling**
- Render only the visible portion of a large list in the DOM.
- Use libraries like [angular-ui-scroll](https://github.com/angular-ui/ui-scroll).

### 6. **Efficient Data Binding**
- Use \`track by\` in \`ng-repeat\` to optimize DOM updates:
  \`\`\`html
  <div ng-repeat="item in items track by item.id">{{item.name}}</div>
  \`\`\`
- Avoid deep watches on large objects.

### 7. **Caching**
- Cache API responses where appropriate to avoid redundant requests.
- Use AngularJS’s \`$cacheFactory\` or HTTP cache.

### 8. **Web Workers (Advanced)**
- For heavy client-side processing, offload work to Web Workers to keep the UI responsive.

---

**Summary Table**

| Technique                | Benefit                                 |
|--------------------------|-----------------------------------------|
| Pagination               | Reduces data per request                |
| Infinite Scrolling       | Loads data as needed                    |
| Server-side Filtering    | Minimizes unnecessary data transfer     |
| Debouncing               | Prevents excessive API calls            |
| Virtual Scrolling        | Optimizes DOM rendering                 |
| Efficient Data Binding   | Reduces digest cycle workload           |
| Caching                  | Avoids redundant API calls              |
| Web Workers              | Offloads heavy processing from UI thread|

**Best Practice:**  
Combine multiple strategies (e.g., server-side pagination + virtual scrolling) for optimal results when dealing with very large data sets in AngularJS.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:04:10.396431Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"},{id:"56ef223e-2a7a-439e-a3b0-cc0c4999ccb0",question:"How do you implement pagination with API data in AngularJS?",answer:`\`\`\`markdown
To implement pagination with API data in AngularJS, follow these steps:

1. **API Design**  
   Ensure your API supports pagination, typically via query parameters like \`page\` and \`pageSize\` (or \`limit\` and \`offset\`).

2. **Controller Logic**  
   In your AngularJS controller, manage the current page, page size, and total items. Fetch data from the API whenever the page changes.

   \`\`\`javascript
   app.controller('PaginationCtrl', function($scope, $http) {
     $scope.currentPage = 1;
     $scope.pageSize = 10;
     $scope.totalItems = 0;
     $scope.items = [];

     $scope.getData = function() {
       $http.get('/api/items', {
         params: {
           page: $scope.currentPage,
           pageSize: $scope.pageSize
         }
       }).then(function(response) {
         $scope.items = response.data.items;
         $scope.totalItems = response.data.total; // assuming API returns total count
       });
     };

     $scope.pageChanged = function(newPage) {
       $scope.currentPage = newPage;
       $scope.getData();
     };

     // Initial load
     $scope.getData();
   });
   \`\`\`

3. **View (HTML)**
   Use AngularJS directives like \`ng-repeat\` to display items and create pagination controls.

   \`\`\`html
   <div ng-controller="PaginationCtrl">
     <ul>
       <li ng-repeat="item in items">{{ item.name }}</li>
     </ul>

     <button ng-disabled="currentPage === 1" ng-click="pageChanged(currentPage - 1)">
       Previous
     </button>
     Page {{currentPage}}
     <button ng-disabled="items.length < pageSize" ng-click="pageChanged(currentPage + 1)">
       Next
     </button>
   </div>
   \`\`\`

4. **Optional: Pagination Libraries**  
   For more advanced pagination (page numbers, first/last, etc.), consider using AngularJS pagination directives like [angular-ui-bootstrap's pagination](https://angular-ui.github.io/bootstrap/).

**Summary:**  
Pagination in AngularJS with API data involves tracking the current page, requesting the correct data from the API, and updating the view when the page changes. Always ensure your API supports pagination parameters and returns the total item count for accurate navigation.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:04:10.396439Z",topic:"4ed9fb15-da0c-4e22-8b5e-fd58305a1615"}];export{e as default};
