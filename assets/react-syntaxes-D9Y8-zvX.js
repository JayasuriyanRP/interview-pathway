const n=[{id:"d9c1cb5d-5e8a-4ed7-8c76-e5c7a7447ebe",question:"How do you create a functional component in React?",answer:`\`\`\`markdown You can create a functional component in React by defining a JavaScript function that returns JSX. Here’s a simple example:

\`\`\`jsx
import React from 'react';

function MyComponent() {
  return <h1>Hello, React!</h1>;
}

export default MyComponent;
\`\`\`

Alternatively, you can use an arrow function:

\`\`\`jsx
import React from 'react';

const MyComponent = () => {
  return <h1>Hello, React!</h1>;
};

export default MyComponent;
\`\`\`

A functional component must start with a capital letter and return JSX (the UI you want to display).`,level:"Beginner",created_at:"2025-04-20T08:54:25.085045Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"1eff575e-bfae-481d-9194-64ecb9d9b9ac",question:"How do you render a list of elements in React using the map() function?",answer:`\`\`\`markdown To render a list of elements in React using the map() function, you typically have an array of data and use map() to transform each item into a React element. Each element should have a unique key prop.

Here's an example:

\`\`\`jsx
const fruits = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
\`\`\`

**Explanation:**
- \`fruits.map(...)\` iterates over the fruits array.
- For each fruit, it returns an \`<li>\` element.
- The \`key\` prop (here, using the index) helps React identify which items have changed.

**Note:**  
It's better to use a unique id as the key if available, rather than the index.`,level:"Beginner",created_at:"2025-04-20T08:54:25.085061Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"7828c5c6-31f1-46e9-8003-1e125c34c3a5",question:"What is the correct syntax to import a component in React?",answer:"```jsx\nimport ComponentName from './ComponentName';\n```\n\n- Replace `ComponentName` with the name of your component.\n- Replace `'./ComponentName'` with the correct path to your component file.\n\n**Example:**\n```jsx\nimport Header from './Header';\n```\nThis imports the `Header` component from the `Header.js` file in the same directory.",level:"Beginner",created_at:"2025-04-20T08:54:25.085073Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"7c89c754-20cb-462c-9c2c-5bbb3ece1ceb",question:"How do you pass props to a child component?",answer:`\`\`\`markdown You can pass props to a child component in React by adding attributes to the child component in the parent’s JSX. The attribute names become the prop names, and the values can be any valid JavaScript expression.

**Example:**

\`\`\`jsx
// ChildComponent.js
function ChildComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// ParentComponent.js
function ParentComponent() {
  return <ChildComponent name="Alice" />;
}
\`\`\`

In this example, the ParentComponent passes a prop called name with the value "Alice" to ChildComponent. The child can access it using props.name.`,level:"Beginner",created_at:"2025-04-20T08:54:25.085086Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"97ca90c7-f034-4bce-8d47-ac99e48aae61",question:"How do you access props inside a functional component?",answer:'```markdown You can access props inside a functional component by including props as a parameter in your component function. Then, you can use props.propertyName to access individual properties.\n\n```jsx\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}\n```\n\nAlternatively, you can use destructuring to directly extract specific props:\n\n```jsx\nfunction Welcome({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n```\n\nIn both cases, props are passed to the component when it is used:\n\n```jsx\n<Welcome name="Alice" />\n```',level:"Beginner",created_at:"2025-04-20T08:54:25.085097Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"92479ca8-bbf0-4e9c-8c1e-67730ac2cae3",question:"What is the syntax for using useState in a functional component?",answer:`\`\`\`jsx
import React, { useState } from 'react';

function MyComponent() {
  const [stateVariable, setStateVariable] = useState(initialValue);

  // Example usage:
  // const [count, setCount] = useState(0);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}
\`\`\`

**Explanation:**
- \`useState\` is a React Hook that lets you add state to functional components.
- It returns an array with two elements: the current state value and a function to update it.
- You can use array destructuring to assign names to these values.`,level:"Beginner",created_at:"2025-04-20T08:54:25.085111Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"2b5a3e5f-d635-4208-b8a2-6f414712ab74",question:"How do you handle an onClick event in React?",answer:`\`\`\`markdown To handle an onClick event in React, you attach the onClick attribute to a JSX element and pass it a function to execute when the element is clicked. Here’s a simple example:

\`\`\`jsx
import React from 'react';

function MyButton() {
  function handleClick() {
    alert('Button was clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default MyButton;
\`\`\`

**Key Points:**
- Use \`onClick\` (camelCase) in JSX.
- Pass a function reference (not a function call) to \`onClick\`.
- The function can be defined inside or outside the component.

**Example with Inline Function:**

\`\`\`jsx
<button onClick={() => alert('Clicked!')}>
  Click Me
</button>
\`\`\`

This will show an alert when the button is clicked.`,level:"Beginner",created_at:"2025-04-20T08:54:25.085124Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"e4f7fbbc-6619-40e4-83f1-d53b740aa0b8",question:"How do you write inline styles in JSX?",answer:`\`\`\`markdown In JSX, inline styles are written using a JavaScript object, where the CSS property names are written in camelCase instead of kebab-case. The style object is then passed to the style attribute using curly braces.

**Example:**

\`\`\`jsx
function MyComponent() {
  return (
    <div style={{ backgroundColor: 'lightblue', fontSize: '20px' }}>
      This is a styled div!
    </div>
  );
}
\`\`\`

**Key Points:**
- Use double curly braces: the first pair is for embedding JavaScript, the second is for the style object.
- CSS properties use camelCase (e.g., backgroundColor instead of background-color).
- Values are usually strings (e.g., '20px', 'red').`,level:"Beginner",created_at:"2025-04-20T08:54:25.085138Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"74df58a7-e5a8-4acf-951e-a006861ea27c",question:"What is the syntax for conditional rendering using the ternary operator in JSX?",answer:`\`\`\`jsx
{condition ? <ComponentIfTrue /> : <ComponentIfFalse />}
\`\`\`

**Example:**

\`\`\`jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}
\`\`\`

**Explanation:**  
In JSX, you can use the ternary operator (\`condition ? expr1 : expr2\`) to render one component or element if the condition is true, and another if it is false.`,level:"Beginner",created_at:"2025-04-20T08:54:25.085163Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"6b9ad00f-5cf4-48c3-afbb-34db8e16dbaa",question:"How do you create a class component in React?",answer:`\`\`\`markdown To create a class component in React, you define a JavaScript class that extends React.Component and implement a render() method that returns JSX. Here’s an example:

\`\`\`jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello from a Class Component!</h1>
      </div>
    );
  }
}

export default MyComponent;
\`\`\`

**Key Points:**
- The class must extend \`React.Component\` (or just \`Component\` if imported directly).
- The \`render()\` method is required and must return JSX.
- Props can be accessed via \`this.props\`, and state via \`this.state\` (if state is used).`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085179Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"60ef8e0f-3fba-4c9e-8310-8860900fe8aa",question:"How do you define and use state in a class component?",answer:`\`\`\`markdown
In a React class component, state is defined as an object property called \`state\`. You initialize it in the constructor, and you update it using the \`setState\` method.

**Defining State:**

\`\`\`jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
  }

  // Method to update state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
\`\`\`

**Key Points:**
- State is initialized in the constructor with \`this.state = { ... }\`.
- To update state, use \`this.setState({ ... })\`.
- Access state in the render method with \`this.state.propertyName\`.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085192Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"d08f3ff1-7f73-40f1-aa03-e0abb90c1d59",question:"How do you prevent the default behavior of an event in React?",answer:`\`\`\`markdown To prevent the default behavior of an event in React, you use the event object's preventDefault() method inside your event handler function. Here’s an example with a button click and a form submission:

\`\`\`jsx
function MyComponent() {
  function handleClick(event) {
    event.preventDefault(); // Prevents the default action
    alert('Default behavior prevented!');
  }

  return (
    <form onSubmit={handleClick}>
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

**Explanation:**
- The event object is automatically passed to event handler functions.
- Calling event.preventDefault() stops the browser’s default action (like submitting a form or following a link).

**Summary:**  
Use \`event.preventDefault()\` inside your event handler to prevent the default behavior in React.`,level:"Beginner",created_at:"2025-04-20T08:54:25.085481Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"c9ee084f-75c0-4dc7-8188-ce06a477c95d",question:"How do you handle form submissions in React?",answer:`\`\`\`markdown
To handle form submissions in React, you typically use an event handler function that is triggered when the form is submitted. You prevent the default browser behavior using \`event.preventDefault()\`, and then process the form data as needed.

Here's a simple example:

\`\`\`jsx
import React, { useState } from 'react';

function MyForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    alert('Form submitted with: ' + inputValue);
    // You can also send the data to a server here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
\`\`\`

**Key points:**
- Use the \`onSubmit\` prop on the \`<form>\` element.
- Call \`event.preventDefault()\` in your handler to stop the default form submission.
- Use state (with \`useState\`) to manage form input values.
\`\`\`
`,level:"Beginner",created_at:"2025-04-20T08:54:25.085493Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"6354e57f-e2c0-4d0b-91a7-e9c7df6f28c4",question:"What is JSX and how is it different from regular JavaScript?",answer:`\`\`\`markdown **JSX** (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows you to write HTML-like code directly within JavaScript files.

**Example of JSX:**
\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

**How JSX is different from regular JavaScript:**

- **JSX looks like HTML,** but it is not HTML. It is syntactic sugar for \`React.createElement()\` calls.
- **Browsers can’t read JSX directly.** JSX code is compiled (usually by Babel) into regular JavaScript before running in the browser.
- **JSX allows embedding expressions** inside curly braces \`{}\`:
  \`\`\`jsx
  const name = "Alice";
  const greeting = <h1>Hello, {name}!</h1>;
  \`\`\`
- **Regular JavaScript** does not allow HTML-like syntax within code files.

**Summary Table:**

| JSX                          | Regular JavaScript            |
|------------------------------|-------------------------------|
| \`<h1>Hello</h1>\`             | \`React.createElement('h1', null, 'Hello')\` |
| Can embed expressions: \`{}\`  | No HTML-like syntax           |
| Needs compilation (e.g. Babel)| Runs as-is in browsers        |

JSX makes writing React components more intuitive and readable, but it must be transpiled to regular JavaScript before execution.`,level:"Beginner",created_at:"2025-04-20T08:54:25.085004Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"f8823441-b33e-4e34-9184-80959b8fbd8f",question:"What is the correct way to bind event handlers in class components?",answer:`\`\`\`markdown
In React class components, event handlers do not automatically bind this to the component instance. There are several correct ways to bind event handlers:

### 1. Binding in the Constructor (Recommended)
\`\`\`jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 'this' refers to the component instance
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
\`\`\`

### 2. Using Class Fields (Public Class Fields Syntax)
\`\`\`jsx
class MyComponent extends React.Component {
  handleClick = () => {
    // 'this' refers to the component instance
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
\`\`\`

### 3. Binding Inline in Render (Not Recommended)
\`\`\`jsx
class MyComponent extends React.Component {
  handleClick() {
    // 'this' refers to the component instance
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>Click me</button>;
  }
}
\`\`\`
> **Note:** Binding in the render method creates a new function on every render, which can negatively impact performance.

---

**Summary:**  
The recommended way is to bind event handlers in the constructor or use the class fields syntax to ensure that this refers to the correct component instance.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085205Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"401ed7f0-05ae-439c-94e2-6a11b3caedc7",question:"How do you use the useEffect hook in a functional component?",answer:`\`\`\`markdown
The \`useEffect\` hook in React is used to perform side effects in functional components, such as fetching data, updating the DOM, or setting up subscriptions. It runs after the component renders.

**Basic Syntax:**
\`\`\`jsx
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Code to run after render (side effect)
    console.log('Component mounted or updated');

    // Optional cleanup function
    return () => {
      console.log('Cleanup before next effect or unmount');
    };
  }, [/* dependencies */]);

  return <div>Hello, useEffect!</div>;
}
\`\`\`

**How It Works:**

- The first argument to \`useEffect\` is a function containing your side effect code.
- The second argument is an optional dependency array:
  - If empty (\`[]\`), the effect runs only once after the initial render.
  - If you list variables, the effect runs whenever any of those variables change.
  - If omitted, the effect runs after every render.

**Example: Fetching Data Once on Mount**
\`\`\`jsx
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []); // Runs only once

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
\`\`\`

**Summary Table:**

| Dependency Array | When Effect Runs                        |
|------------------|----------------------------------------|
| Omitted          | After every render                     |
| []               | Once after initial render (on mount)   |
| [a, b]           | When \`a\` or \`b\` changes                |
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085217Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"5a577116-0f86-4bc4-9946-7c425f18e850",question:"How do you pass a function as a prop to a child component?",answer:`\`\`\`markdown To pass a function as a prop to a child component in React, you define the function in the parent component and then include it as a prop when rendering the child. The child component can then access and invoke this function via its props.

**Example:**

\`\`\`jsx
// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const handleClick = () => {
    alert('Button clicked in child!');
  };

  return (
    <div>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
\`\`\`

\`\`\`jsx
// ChildComponent.jsx
import React from 'react';

function ChildComponent({ onButtonClick }) {
  return (
    <button onClick={onButtonClick}>
      Click Me
    </button>
  );
}

export default ChildComponent;
\`\`\`

**Summary:**
- Define the function in the parent.
- Pass it as a prop (e.g., \`onButtonClick={handleClick}\`).
- Access and use it in the child via \`props\` (or destructuring).`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085229Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"c605666a-20e7-475d-a374-0d76cb7948af",question:"What is the syntax for using default props in a functional component?",answer:`\`\`\`jsx
// Using default parameters (recommended way)
function MyComponent({ name = "Guest", age = 18 }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// OR, using the defaultProps property (less common with function components)
function MyComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

MyComponent.defaultProps = {
  name: "Guest",
  age: 18,
};
\`\`\`

**Note:**  
- The default parameter syntax (first example) is the modern and preferred approach for functional components.
- The \`defaultProps\` property (second example) is still supported but is less commonly used with function components since React 16.6+.  
- For TypeScript, you can also use default values in the function signature.`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085241Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"e7d6c472-d243-41da-b5de-21c4e245c9e9",question:"How do you use fragments in JSX to return multiple elements?",answer:`\`\`\`markdown In React, fragments let you group multiple elements without adding extra nodes to the DOM. This is useful when a component needs to return multiple elements, but you don’t want to wrap them in an unnecessary \`<div>\`.

**Syntax 1: Using \`<React.Fragment>\`**

\`\`\`jsx
import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Description goes here.</p>
    </React.Fragment>
  );
}
\`\`\`

**Syntax 2: Using Short Syntax \`<>...</>\`**

\`\`\`jsx
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Description goes here.</p>
    </>
  );
}
\`\`\`

**Key Points:**
- Fragments do not produce extra nodes in the DOM.
- The short syntax (\`<>...</>\`) is more concise, but you can’t pass keys or attributes to it.
- Use fragments when you need to return multiple sibling elements from a component.`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085254Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"5cdbaad4-a272-45ab-b2d6-d5a18baaba15",question:"How do you use the spread operator to pass props to a component?",answer:`\`\`\`markdown
You can use the spread operator (...) to pass all properties of an object as props to a React component. This is especially useful when you have a props object and want to forward all its key-value pairs to a child component.

**Example:**

\`\`\`jsx
const user = {
  name: 'Alice',
  age: 25,
  isAdmin: true
};

function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Admin: {props.isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}

// Using the spread operator to pass all props from the user object
<UserProfile {...user} />
\`\`\`

**Explanation:**
- \`{...user}\` spreads all properties of the \`user\` object as individual props to the \`UserProfile\` component.
- This is equivalent to writing \`<UserProfile name="Alice" age={25} isAdmin={true} />\`.

**Note:**  
If you specify a prop explicitly along with the spread operator, the explicitly specified prop will override the one from the spread object if they have the same key.

\`\`\`jsx
<UserProfile {...user} isAdmin={false} />
// Here, isAdmin will be false, overriding user.isAdmin
\`\`\`
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085267Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"12b412a4-27e0-4638-821a-9a51f1674758",question:"How do you use destructuring to access props or state in a component?",answer:`\`\`\`markdown
In React, destructuring is a convenient way to extract values from props or state objects directly within your component. This makes your code cleaner and more readable.

### Destructuring Props

**Functional Component Example:**

\`\`\`jsx
function Greeting({ name, age }) {
  return (
    <p>
      Hello, {name}! You are {age} years old.
    </p>
  );
}

// Usage:
<Greeting name="Alice" age={30} />
\`\`\`

Alternatively, you can destructure inside the function body:

\`\`\`jsx
function Greeting(props) {
  const { name, age } = props;
  return (
    <p>
      Hello, {name}! You are {age} years old.
    </p>
  );
}
\`\`\`

### Destructuring State

**Using useState Hook:**

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // destructuring array returned by useState

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

**Destructuring State Object:**

\`\`\`jsx
const [state, setState] = useState({ name: 'Alice', age: 30 });
const { name, age } = state;
\`\`\`

### Summary

- **Props:** Destructure in the function parameter or inside the function body.
- **State:** Destructure from the state object or from the array returned by hooks like \`useState\`.

Destructuring helps keep your React components concise and easy to read.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085283Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"72b24bdc-eea6-424f-86f2-5821729f91a1",question:"How do you use the key prop when rendering lists in React?",answer:`\`\`\`markdown When rendering lists in React, the key prop is used to help React identify which items have changed, are added, or are removed. Each child in a list should have a unique key prop. This helps React optimize rendering and update only the necessary components.

**Example:**

\`\`\`jsx
const items = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
\`\`\`

**Best Practices:**
- Use a unique and stable value for the key (like an id from your data).
- Avoid using the array index as a key if the list can change, as this can lead to issues with component state and rendering.

**Example with unique IDs:**

\`\`\`jsx
const fruits = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
];

function FruitList() {
  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

**Summary:**  
Always provide a unique key prop to each list element to help React efficiently update and render components.`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085295Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"d9aeeb90-5f52-4051-942c-5dc41dd438c0",question:"What is the syntax for using context with the useContext hook?",answer:`\`\`\`jsx
import React, { useContext } from 'react';
import { MyContext } from './MyContextProvider';

function MyComponent() {
  const value = useContext(MyContext);

  return (
    <div>
      The context value is: {value}
    </div>
  );
}
\`\`\`

**Explanation:**
- Import the context object (e.g., \`MyContext\`) from its provider file.
- Call \`useContext(MyContext)\` inside your functional component to access the current context value.
- Use the value as needed in your component's JSX.`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085307Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"f8f96da2-0be7-4528-8e5a-d6b2682ada7f",question:"How do you create a ref using useRef in a functional component?",answer:`\`\`\`markdown To create a ref using useRef in a functional component, you first import useRef from React, then call it inside your component. The returned ref object can be attached to a DOM element via the ref attribute.

\`\`\`jsx
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
\`\`\`

**Explanation:**
- \`useRef(null)\` creates a ref object with an initial value of \`null\`.
- Attach the ref to an element using \`ref={inputRef}\`.
- Access the DOM node via \`inputRef.current\` (e.g., to call \`.focus()\` on the input).`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085319Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"3da2fabc-4cf1-4cc9-aedb-28bc46021d71",question:"How do you forward refs to child components using React.forwardRef?",answer:`\`\`\`markdown To forward refs to child components in React, you use the React.forwardRef API. This allows a parent component to pass a ref through a component to one of its DOM children. Here’s how you can do it:

\`\`\`jsx
import React, { forwardRef } from 'react';

// Define a functional component using React.forwardRef
const MyInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

// Usage in a parent component
function ParentComponent() {
  const inputRef = React.useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus the input</button>
    </>
  );
}
\`\`\`

**Explanation:**

- \`React.forwardRef\` takes a render function as its argument. This function receives \`props\` and \`ref\` as parameters.
- The \`ref\` is attached to the desired DOM element (e.g., \`<input ref={ref} />\`).
- When the parent component uses \`<MyInput ref={inputRef} />\`, the \`inputRef\` will point to the underlying \`<input>\` DOM node, allowing direct manipulation (e.g., focusing).

**Use Cases:**

- Forwarding refs is useful for reusable component libraries, higher-order components, or when you need to expose a DOM node to a parent component.

**Note:**  
You cannot use ref with function components unless they are wrapped with \`React.forwardRef\`.`,level:"Advanced",created_at:"2025-04-20T08:54:25.085330Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"3aec78aa-daec-4d0c-a772-6e189e45bb29",question:"What is the syntax for using memoization with React.memo?",answer:`\`\`\`markdown
### Using Memoization with \`React.memo\`

\`React.memo\` is a higher-order component that memoizes a functional component, preventing unnecessary re-renders when the component's props have not changed.

#### Basic Syntax

\`\`\`jsx
import React from 'react';

const MyComponent = React.memo(function MyComponent(props) {
  // component implementation
  return <div>{props.value}</div>;
});
\`\`\`

#### With Custom Comparison Function

You can provide a custom comparison function as the second argument to control when the component should re-render:

\`\`\`jsx
const MyComponent = React.memo(
  function MyComponent(props) {
    // component implementation
    return <div>{props.value}</div>;
  },
  (prevProps, nextProps) => {
    // return true if props are equal (skip re-render), false otherwise
    return prevProps.value === nextProps.value;
  }
);
\`\`\`

#### Usage Example

\`\`\`jsx
<MyComponent value={someValue} />
\`\`\`

**Summary:**  
- \`React.memo(Component)\` memoizes the component based on shallow comparison of props.
- \`React.memo(Component, areEqual)\` allows custom comparison logic for props.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:25.085337Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"abcea364-5c82-425d-b0c7-2bb11b316334",question:"How do you use the useCallback hook and what is its syntax?",answer:`\`\`\`markdown ### Using the \`useCallback\` Hook in React

The \`useCallback\` hook is used to memoize a callback function in React, preventing its recreation on every render unless its dependencies change. This is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

#### Syntax

\`\`\`jsx
const memoizedCallback = useCallback(
  () => {
    // function body
  },
  [dependency1, dependency2, ...]
);
\`\`\`

- The first argument is the function you want to memoize.
- The second argument is an array of dependencies. The callback is only recreated if one of these dependencies changes.

#### Example

\`\`\`jsx
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // No dependencies, so 'increment' is memoized once

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
\`\`\`

#### When to Use

- When you pass a callback to a child component that relies on reference equality (e.g., \`React.memo\`).
- When you want to avoid unnecessary re-creations of functions on each render.

#### Note

- Overusing \`useCallback\` can make code harder to read and may not always provide performance benefits. Use it when you notice actual performance issues due to unnecessary renders.

---

**Summary:**  
\`useCallback\` memoizes a function, only recreating it when its dependencies change, helping optimize performance in certain scenarios. Its syntax is:

\`\`\`jsx
const memoizedCallback = useCallback(() => { /* ... */ }, [deps]);
\`\`\``,level:"Advanced",created_at:"2025-04-20T08:54:25.085346Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"12e33995-6ee6-4f0b-a109-d1b898f36b9e",question:"How do you use the useMemo hook and what is its syntax?",answer:`\`\`\`markdown
The \`useMemo\` hook in React is used to memoize the result of a computation, preventing unnecessary recalculations on every render. It is particularly useful for optimizing performance when you have expensive calculations or when you want to avoid re-creating objects or arrays unless their dependencies change.

**Syntax:**

\`\`\`jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
\`\`\`

- The first argument is a function that returns the value you want to memoize.
- The second argument is an array of dependencies. The memoized value will only be recalculated when one of these dependencies changes.

**Example:**

\`\`\`jsx
import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ a, b }) {
  const [count, setCount] = useState(0);

  const expensiveResult = useMemo(() => {
    // Simulate expensive calculation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += a * b;
    }
    return result;
  }, [a, b]);

  return (
    <div>
      <p>Expensive result: {expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <p>Count: {count}</p>
    </div>
  );
}
\`\`\`

**Key Points:**
- \`useMemo\` only recomputes the memoized value when a dependency has changed.
- It helps avoid expensive calculations on every render.
- Use it for performance optimization, not as a general caching mechanism.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:25.085358Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"7a2ca3b8-e118-4865-81da-ece0e08d30d8",question:"How do you create a custom hook in React?",answer:`\`\`\`markdown To create a custom hook in React, you define a JavaScript function whose name starts with use and which can call other hooks (like useState, useEffect, etc.) inside it. Custom hooks allow you to extract and reuse stateful logic across multiple components.

Here's an example of a custom hook that tracks the window width:

\`\`\`jsx
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
\`\`\`

**Usage in a component:**

\`\`\`jsx
import React from 'react';
import useWindowWidth from './useWindowWidth';

function MyComponent() {
  const width = useWindowWidth();

  return <div>Window width: {width}px</div>;
}
\`\`\`

**Key Points:**
- Custom hooks must start with the word use.
- They can use other hooks inside them.
- They help encapsulate and share logic between components.
- Custom hooks do not return JSX; they return values or functions.`,level:"Advanced",created_at:"2025-04-20T08:54:25.085369Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"11a6853f-8f6a-4f63-9504-a87e7dc58553",question:"What is the syntax for lazy loading components using React.lazy and Suspense?",answer:`\`\`\`markdown
To lazy load components in React, you use \`React.lazy()\` to dynamically import the component, and wrap its usage in a \`React.Suspense\` component to handle the loading state.

**Syntax Example:**

\`\`\`jsx
import React, { Suspense } from 'react';

// Lazy load the component
const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}

export default App;
\`\`\`

**Key Points:**
- \`React.lazy(() => import('./MyComponent'))\` dynamically imports the component.
- \`<Suspense fallback={...}>\` specifies what to render while the component is loading.
- You must use \`Suspense\` whenever you use a lazy-loaded component.

**Note:** \`React.lazy\` and \`Suspense\` are available in React 16.6 and above.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:25.085381Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"4371398c-ef0d-4048-8acd-c01b1b1cdcf0",question:"How do you implement error boundaries in React?",answer:`\`\`\`markdown
### Implementing Error Boundaries in React

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole component tree.

#### Steps to Implement Error Boundaries

1. **Create a Class Component**
   Error boundaries must be class components because only class components can implement lifecycle methods used for error handling.

2. **Implement \`static getDerivedStateFromError(error)\`**
   This lifecycle method is used to render a fallback UI after an error is thrown.

3. **Implement \`componentDidCatch(error, info)\`**
   This lifecycle method is used to log error information.

4. **Render a Fallback UI**
   Display an alternative UI when an error is caught.

#### Example

\`\`\`jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
\`\`\`

#### Usage

Wrap your components with the \`ErrorBoundary\`:

\`\`\`jsx
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
\`\`\`

#### Notes

- Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
- They **do not** catch errors inside event handlers, asynchronous code, or errors thrown in the error boundary itself.

**References:**
- [React Docs: Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:25.085393Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"e42b8d93-f4df-4113-97f5-c51ea17f8b25",question:"How do you use PropTypes for type checking in React components?",answer:`\`\`\`markdown
In React, **PropTypes** is used to perform type checking on the props that a component receives. This helps catch bugs by ensuring that components are used with the correct types of props.

### How to Use PropTypes

1. **Import PropTypes**
   \`\`\`js
   import PropTypes from 'prop-types';
   \`\`\`

2. **Define PropTypes on Your Component**
   \`\`\`js
   function MyComponent({ name, age }) {
     return (
       <div>
         <p>Name: {name}</p>
         <p>Age: {age}</p>
       </div>
     );
   }

   MyComponent.propTypes = {
     name: PropTypes.string.isRequired,
     age: PropTypes.number,
   };
   \`\`\`

   - \`PropTypes.string\` specifies that \`name\` should be a string.
   - \`.isRequired\` makes \`name\` a required prop.
   - \`PropTypes.number\` specifies that \`age\` should be a number.

3. **Common PropTypes Validators**
   - \`PropTypes.string\`
   - \`PropTypes.number\`
   - \`PropTypes.bool\`
   - \`PropTypes.array\`
   - \`PropTypes.object\`
   - \`PropTypes.func\`
   - \`PropTypes.node\` (anything that can be rendered)
   - \`PropTypes.element\` (a React element)
   - \`PropTypes.oneOf(['A', 'B'])\` (enum)
   - \`PropTypes.arrayOf(PropTypes.string)\`
   - \`PropTypes.shape({ ... })\`

### Example with More Types

\`\`\`js
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
  }),
  onClick: PropTypes.func,
};
\`\`\`

### Notes

- PropTypes are only checked in development mode.
- For large projects, consider using TypeScript for more robust type checking.

**References:**
- [React Docs: Typechecking With PropTypes](https://react.dev/reference/react/Component#typechecking-with-proptypes)
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085408Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"c19cd451-0374-4904-991a-46b6ff3fcd3d",question:"What is the correct way to update state based on previous state in useState?",answer:`\`\`\`markdown To update state based on the previous state with useState, you should use the functional form of the state setter. This ensures you always get the latest state value, especially when updates are asynchronous or batched.

**Example:**

\`\`\`jsx
const [count, setCount] = useState(0);

// Correct way to update based on previous state
setCount(prevCount => prevCount + 1);
\`\`\`

**Explanation:**

- The setter function (setCount) can take a function as its argument.
- This function receives the previous state value (prevCount).
- You return the new state based on the previous one.

**Why?**

Directly using setCount(count + 1) may result in stale state if multiple updates happen quickly. The functional form always uses the latest state.

**Summary Table:**

| Incorrect                              | Correct                                 |
|-----------------------------------------|-----------------------------------------|
| \`setCount(count + 1)\`                   | \`setCount(prevCount => prevCount + 1)\`  |`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085420Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"b43a97e8-14d2-41b7-b6a8-6e170601c942",question:"How do you use the children prop in React components?",answer:'```markdown\nIn React, the `children` prop is a special property that allows you to pass components or elements between the opening and closing tags of a component. This is useful for creating reusable wrapper or layout components.\n\n**Example:**\n\n```jsx\nfunction Card({ children }) {\n  return (\n    <div className="card">\n      {children}\n    </div>\n  );\n}\n\n// Usage:\n<Card>\n  <h2>Title</h2>\n  <p>This is some content inside the card.</p>\n</Card>\n```\n\nIn the example above, everything between `<Card>` and `</Card>` is passed as the `children` prop to the `Card` component and rendered inside the `<div>`.\n\n**Key Points:**\n- `children` can be any valid React node: elements, strings, numbers, fragments, etc.\n- You access `children` via `props.children` (or destructure it as shown).\n- Useful for creating flexible and reusable components.\n```',level:"Intermediate",created_at:"2025-04-20T08:54:25.085432Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"0d83b9c0-4eb2-42c4-bf28-7991380fa52d",question:"How do you conditionally add class names in JSX?",answer:`\`\`\`markdown You can conditionally add class names in JSX by using JavaScript expressions inside the className attribute. Common approaches include using ternary operators, logical AND (&&), or utility libraries like classnames.

### Example 1: Ternary Operator

\`\`\`jsx
<div className={isActive ? "active" : "inactive"}>
  Content
</div>
\`\`\`

### Example 2: Logical AND (&&)

\`\`\`jsx
<div className={"base-class" + (isActive ? " active" : "")}>
  Content
</div>
\`\`\`

### Example 3: Using the \`classnames\` Library

First, install the library:

\`\`\`bash
npm install classnames
\`\`\`

Then use it in your component:

\`\`\`jsx
import classNames from 'classnames';

<div className={classNames("base-class", { active: isActive, disabled: isDisabled })}>
  Content
</div>
\`\`\`

**Summary:**  
You can use JavaScript expressions directly in JSX to conditionally apply class names, making your components dynamic and responsive to state or props.`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085444Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"703a7c5f-62df-4c74-98ed-6040dc41f1e6",question:"How do you use the spread operator to clone and extend objects in state?",answer:`\`\`\`markdown To clone and extend objects in React state, you can use the JavaScript spread operator (...). This is commonly done when updating state to ensure immutability.

**Example: Cloning and Extending an Object in State**

Suppose you have a state object like this:

\`\`\`jsx
const [user, setUser] = useState({
  name: 'Alice',
  age: 25
});
\`\`\`

To update the age and add a new property (e.g., email), use the spread operator:

\`\`\`jsx
setUser(prevUser => ({
  ...prevUser,         // clone all existing properties
  age: 26,             // update age
  email: 'alice@example.com' // add new property
}));
\`\`\`

**Explanation:**

- ...prevUser clones all properties from the previous user object.
- Any properties after the spread (like age and email) will overwrite or add to the cloned object.
- This ensures you don’t mutate the original state directly.

**Summary Table**

| Syntax                              | Purpose                        |
|--------------------------------------|--------------------------------|
| \`{ ...prevState }\`                   | Clone the object               |
| \`{ ...prevState, newProp: value }\`   | Clone and extend/overwrite     |

**Best Practice:**  
Always use the spread operator (or similar immutable methods) when updating objects in React state to avoid direct mutation and ensure proper re-rendering.`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085456Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"80d13d9f-6ffa-436d-a398-a127a62f3acb",question:"What is the syntax for using multiple useEffect hooks in a single component?",answer:`\`\`\`markdown
You can use multiple \`useEffect\` hooks in a single React component by simply calling \`useEffect\` as many times as needed, each with its own callback and dependency array. This allows you to separate concerns and handle different side effects independently.

**Example:**

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // First useEffect: runs when 'count' changes
  useEffect(() => {
    console.log(\`Count changed: \${count}\`);
  }, [count]);

  // Second useEffect: runs when 'name' changes
  useEffect(() => {
    console.log(\`Name changed: \${name}\`);
  }, [name]);

  // Third useEffect: runs once on mount
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}
\`\`\`

**Key Points:**
- Each \`useEffect\` can have its own dependencies.
- Effects run independently based on their dependency arrays.
- This pattern helps keep side effects organized and easier to manage.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085468Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"d2d250f1-41a3-401d-983f-58164c8e841a",question:"How do you use controlled components for form inputs in React?",answer:`\`\`\`markdown To use controlled components for form inputs in React, you need to:

1. **Store the input value in the component's state.**
2. **Update the state when the input changes using an onChange handler.**
3. **Set the input's value prop to the state variable.**

This way, the input's value is always controlled by React state.

**Example:**

\`\`\`jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(\`Submitted name: \${name}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
\`\`\`

**Key Points:**
- The input's value is set by the state variable (\`value={name}\`).
- The \`onChange\` handler updates the state (\`setName\`).
- The component "controls" the input, making it a controlled component.

This pattern works for all form elements (inputs, textareas, selects, etc.) in React.`,level:"Intermediate",created_at:"2025-04-20T08:54:25.085505Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"f1d033a4-1b5a-421a-b047-a9bd2197cd93",question:"How do you use the useReducer hook and what is its syntax?",answer:`\`\`\`markdown
The \`useReducer\` hook in React is used for managing complex state logic in functional components, especially when state depends on previous values or when multiple sub-values are involved. It is an alternative to \`useState\` and is inspired by Redux-like reducer patterns.

## Syntax

\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState, initFunction?);
\`\`\`

- **reducer**: A function that takes the current state and an action, and returns the new state.
- **initialState**: The initial value of the state.
- **initFunction (optional)**: A function to lazily initialize the state.

## Example

\`\`\`jsx
import React, { useReducer } from 'react';

// 1. Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// 2. Use useReducer in your component
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
\`\`\`

## Key Points

- \`useReducer\` returns the current state and a \`dispatch\` function.
- The \`dispatch\` function is used to send actions to the reducer.
- Useful for managing state transitions that are more complex than simple updates.

## When to Use

- When you have complex state logic involving multiple sub-values.
- When the next state depends on the previous state.
- When you want to centralize state updates in a single function (the reducer).
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:25.085517Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"6a59ca49-b797-4e94-a55f-8387c00f2378",question:"How do you use higher-order components (HOCs) in React?",answer:`\`\`\`markdown
### Using Higher-Order Components (HOCs) in React

A **Higher-Order Component (HOC)** is a function that takes a component and returns a new component, enhancing it with additional functionality or data. HOCs are a pattern for reusing component logic.

#### 1. Defining a HOC

A HOC is simply a function:

\`\`\`jsx
function withExtraProps(WrappedComponent) {
  return function EnhancedComponent(props) {
    // Add extra props or logic here
    return <WrappedComponent {...props} extraProp="I'm extra!" />;
  };
}
\`\`\`

#### 2. Using a HOC

You use a HOC by passing a component to it:

\`\`\`jsx
function MyComponent(props) {
  return <div>{props.extraProp}</div>;
}

const EnhancedMyComponent = withExtraProps(MyComponent);
\`\`\`

Now, \`EnhancedMyComponent\` will render \`MyComponent\` with the additional \`extraProp\`.

#### 3. Example: withLoading HOC

A common use case is to show a loading indicator:

\`\`\`jsx
function withLoading(WrappedComponent) {
  return function ({ isLoading, ...otherProps }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...otherProps} />;
  };
}

function DataDisplay({ data }) {
  return <div>Data: {data}</div>;
}

const DataDisplayWithLoading = withLoading(DataDisplay);

// Usage
<DataDisplayWithLoading isLoading={true} data="Hello" />
\`\`\`

#### 4. Notes

- HOCs do **not** modify the original component; they create a new one.
- Always pass through props (\`...props\`) to avoid breaking the contract.
- HOCs can be composed for multiple enhancements.

#### 5. Best Practices

- Name your HOC functions with a \`with\` prefix (e.g., \`withAuth\`, \`withTheme\`).
- Avoid copying static methods from the wrapped component unless necessary (see [hoist-non-react-statics](https://www.npmjs.com/package/hoist-non-react-statics)).
- Use HOCs for cross-cutting concerns like authentication, theming, or data fetching.

---

**Summary:**  
To use a HOC in React, define a function that takes a component and returns a new component with enhanced behavior, then wrap your base component with this function.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:25.085528Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"206f17f7-9cf0-4484-9a2d-1e18ed8d09ba",question:"How do you use default and named exports/imports in React?",answer:`\`\`\`markdown
In React (and JavaScript ES6 modules), you can export and import components or functions using **default** and **named** exports/imports.

### Default Export/Import

- **Export:** Use \`export default\` to export a single value from a file.
- **Import:** You can import it with any name.

**Example:**

\`\`\`js
// MyComponent.js
export default function MyComponent() {
  return <div>Hello!</div>;
}
\`\`\`

\`\`\`js
// App.js
import MyComponent from './MyComponent';
\`\`\`

---

### Named Export/Import

- **Export:** Use \`export\` before each item you want to export.
- **Import:** You must use the exact exported name, wrapped in curly braces \`{}\`.

**Example:**

\`\`\`js
// utils.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14;
\`\`\`

\`\`\`js
// App.js
import { add, PI } from './utils';
\`\`\`

---

### Combining Both

You can have both default and named exports in the same file:

\`\`\`js
// MyComponent.js
export default function MyComponent() { ... }
export const helper = () => { ... }
\`\`\`

\`\`\`js
// App.js
import MyComponent, { helper } from './MyComponent';
\`\`\`

---

**Summary Table**

| Export Type      | Syntax (Export)                | Syntax (Import)                  |
|------------------|-------------------------------|----------------------------------|
| Default Export   | \`export default ...\`           | \`import AnyName from '...'\`      |
| Named Export     | \`export const foo = ...\`       | \`import { foo } from '...'\`      |
\`\`\`
`,level:"Beginner",created_at:"2025-04-20T08:54:25.085539Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"af7ead26-33e4-4e99-87b4-e145d3719cd6",question:"How do you use optional chaining in JSX expressions?",answer:"```markdown You can use **optional chaining** (`?.`) in JSX expressions to safely access deeply nested object properties without causing errors if a reference is `null` or `undefined`. This is especially useful when rendering data that may not be immediately available.\n\n**Example:**\n\n```jsx\nfunction UserProfile({ user }) {\n  return (\n    <div>\n      <h2>{user?.name}</h2>\n      <p>Email: {user?.contact?.email}</p>\n      <p>City: {user?.address?.city}</p>\n    </div>\n  );\n}\n```\n\n**Explanation:**\n\n- `user?.name` will return `undefined` (and render nothing) if `user` is `null` or `undefined`.\n- `user?.contact?.email` safely accesses `email` even if `contact` is missing.\n- This prevents runtime errors like \"Cannot read property 'email' of undefined\".\n\n**Usage Tips:**\n\n- Optional chaining can be used in any JavaScript expression inside JSX curly braces `{}`.\n- It works with properties (`obj?.prop`), array elements (`arr?.[index]`), and function calls (`func?.()`).\n\n**Note:**  \nOptional chaining is supported in React projects created with recent versions of Create React App or Next.js. For older setups, ensure your Babel configuration supports it.",level:"Intermediate",created_at:"2025-04-20T08:54:25.085550Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"e47c02b7-be36-44c5-ae3d-346a8c548cc6",question:"How do you use async/await inside useEffect?",answer:`\`\`\`markdown
Using \`async/await\` directly in the \`useEffect\` callback is **not allowed** because the callback function itself cannot be \`async\` (it must return either \`undefined\` or a cleanup function, not a Promise). However, you can define an async function **inside** the effect and then call it. Here’s how you do it:

\`\`\`jsx
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the async function inside the effect
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the async function
    fetchData();
  }, []); // Dependency array

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}
\`\`\`

**Key Points:**
- Do **not** make the \`useEffect\` callback itself \`async\`.
- Define an \`async\` function **inside** the effect, then call it.
- Handle cleanup and dependencies as usual.

**Why?**  
Making the effect callback \`async\` would cause it to return a Promise, which React does not expect and can lead to unexpected behavior.

**References:**
- [React Docs: Using the Effect Hook](https://react.dev/reference/react/useEffect)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:25.085561Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"66233f91-7e6a-4bbf-9607-6012bd7c8924",question:"How do you use dynamic imports in React?",answer:`\`\`\`markdown
### Using Dynamic Imports in React

Dynamic imports in React allow you to load JavaScript modules asynchronously, which is useful for code-splitting and improving application performance. This is typically achieved using the \`import()\` syntax and React's \`React.lazy\` for components.

#### 1. Basic Dynamic Import Syntax

\`\`\`js
import('module-path').then((module) => {
  // Use the dynamically imported module
});
\`\`\`

#### 2. Dynamic Import with React.lazy

To dynamically import a React component:

\`\`\`js
import React, { Suspense } from 'react';

const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  );
}
\`\`\`

- \`React.lazy()\` takes a function that returns a promise from \`import()\`.
- The component must be rendered inside a \`Suspense\` component, which handles the loading state.

#### 3. Dynamic Import with Variables

You can use variables to dynamically determine which module to import:

\`\`\`js
function loadComponent(componentName) {
  return React.lazy(() => import(\`./components/\${componentName}\`));
}

const DynamicComponent = loadComponent('Header');

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent />
    </Suspense>
  );
}
\`\`\`

#### 4. Dynamic Import for Non-Component Modules

You can also use dynamic imports for utility functions or other modules:

\`\`\`js
async function handleClick() {
  const { someUtilityFunction } = await import('./utils');
  someUtilityFunction();
}
\`\`\`

#### 5. Notes

- Dynamic imports return a promise.
- When using with components, always wrap with \`Suspense\`.
- Useful for code-splitting and reducing initial bundle size.

**References:**
- [React Docs: Code-Splitting](https://react.dev/reference/react/lazy)
- [MDN: import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:25.085573Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"dc4d89d3-d7b3-453d-8647-257328af7a95",question:"How do you use the classnames library to manage dynamic class names?",answer:"```markdown To use the classnames library for managing dynamic class names in React, follow these steps:\n\n1. **Install the library:**\n\n```bash\nnpm install classnames\n```\n\n2. **Import classnames in your component:**\n\n```jsx\nimport classNames from 'classnames';\n```\n\n3. **Use it to conditionally apply classes:**\n\nYou can pass strings, objects, or arrays. If you pass an object, the key is the class name and the value is a boolean indicating whether the class should be applied.\n\n```jsx\nfunction Button({ isPrimary, isDisabled }) {\n  const btnClass = classNames('btn', {\n    'btn-primary': isPrimary,\n    'btn-disabled': isDisabled,\n  });\n\n  return <button className={btnClass}>Click me</button>;\n}\n```\n\n**Explanation:**\n\n- If `isPrimary` is `true`, `btn-primary` will be added.\n- If `isDisabled` is `true`, `btn-disabled` will be added.\n- The base class `btn` is always included.\n\n**You can also combine static and dynamic classes:**\n\n```jsx\nconst btnClass = classNames('btn', 'extra-class', {\n  'btn-primary': isPrimary,\n});\n```\n\n**Summary Table:**\n\n| Syntax Example                                  | Resulting Class Name(s)              |\n|-------------------------------------------------|--------------------------------------|\n| `classNames('foo', 'bar')`                      | `'foo bar'`                          |\n| `classNames({ foo: true, bar: false })`         | `'foo'`                              |\n| `classNames('foo', { bar: true })`              | `'foo bar'`                          |\n| `classNames(['foo', 'bar'])`                    | `'foo bar'`                          |\n\n**Tip:**  \nUsing classnames helps keep your JSX clean and makes conditional styling much easier to manage.",level:"Intermediate",created_at:"2025-04-20T08:54:25.085585Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"4e3ca06d-a45b-4f6c-a8ea-58673a25f661",question:"How do you use short-circuit evaluation for conditional rendering in JSX?",answer:"```markdown You can use short-circuit evaluation in JSX with the logical AND operator (`&&`) to conditionally render elements. If the condition before `&&` is true, the expression after `&&` will be rendered; otherwise, nothing will be rendered.\n\n**Example:**\n\n```jsx\nfunction Greeting({ isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn && <h1>Welcome back!</h1>}\n    </div>\n  );\n}\n```\n\nIn this example, `<h1>Welcome back!</h1>` will only be rendered if `isLoggedIn` is `true`. If `isLoggedIn` is `false`, nothing will be rendered in its place.",level:"Beginner",created_at:"2025-04-20T08:54:25.085597Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"5d1457fe-89b9-4b9e-a35f-398345af4508",question:"How do you use template literals for dynamic values in JSX?",answer:'```markdown You can use template literals (enclosed by backticks `` ` ``) inside JSX curly braces to dynamically construct strings using JavaScript expressions. This is especially useful for combining variables and static text.\n\n**Example:**\n\n```jsx\nconst firstName = "Jane";\nconst lastName = "Doe";\nconst age = 28;\n\nfunction Greeting() {\n  return (\n    <div>\n      <h1>{`Hello, ${firstName} ${lastName}!`}</h1>\n      <p>{`You are ${age} years old.`}</p>\n    </div>\n  );\n}\n```\n\n**Explanation:**\n\n- The expressions inside `${}` are evaluated and inserted into the string.\n- The entire template literal is wrapped in `{}` so that JSX treats it as a JavaScript expression.\n\n**When to use:**\n- When you need to build a string from variables or expressions inside JSX.\n\n**Tip:**  \nYou can use any valid JavaScript expression inside `${}` within the template literal.',level:"Intermediate",created_at:"2025-04-20T08:54:25.085607Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"5471780b-cbab-4847-8597-fcbd6e26ebed",question:"How do you use the React.Children API to manipulate children elements?",answer:`\`\`\`markdown
The \`React.Children\` API provides utilities for dealing with the \`children\` prop in React components, especially when you want to inspect, transform, or count child elements. Here’s how you can use it to manipulate children elements:

### Common Methods

- **\`React.Children.map(children, function)\`**  
  Similar to \`Array.prototype.map\`, but works with the opaque \`children\` prop. It allows you to transform each child.

- **\`React.Children.forEach(children, function)\`**  
  Like \`map\`, but does not return a new array.

- **\`React.Children.count(children)\`**  
  Returns the total number of children.

- **\`React.Children.only(children)\`**  
  Verifies that there is only one child and returns it.

- **\`React.Children.toArray(children)\`**  
  Flattens children into a regular array, useful for manipulation.

### Example: Cloning and Modifying Children

Suppose you want to add a prop to each child:

\`\`\`jsx
function AddClassToChildren({ children }) {
  return React.Children.map(children, child => {
    // Only modify if it's a valid React element
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { className: 'my-class' });
    }
    return child;
  });
}

// Usage
<AddClassToChildren>
  <div>One</div>
  <span>Two</span>
</AddClassToChildren>
\`\`\`

### Example: Filtering Children by Type

\`\`\`jsx
function OnlyDivs({ children }) {
  return React.Children.toArray(children).filter(
    child => React.isValidElement(child) && child.type === 'div'
  );
}

// Usage
<OnlyDivs>
  <div>Show me</div>
  <span>Hide me</span>
</OnlyDivs>
\`\`\`

### Notes

- Always use \`React.Children\` methods instead of directly mapping over \`props.children\`, as children can be a single element, an array, or even \`null\`.
- Use \`React.cloneElement\` to add or modify props on children.

**References:**  
- [React.Children Documentation](https://react.dev/reference/react/Children)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:25.085616Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"},{id:"81922d9e-726b-4ea2-bebe-17b15384faeb",question:"How do you use portals to render components outside the main DOM hierarchy?",answer:`\`\`\`markdown To render components outside the main DOM hierarchy in React, you use **portals**. Portals allow you to render a child component into a DOM node that exists outside the DOM hierarchy of the parent component.

### Syntax

\`\`\`jsx
import ReactDOM from 'react-dom';

ReactDOM.createPortal(child, container)
\`\`\`

- **child**: The React element you want to render.
- **container**: The DOM node to render the child into.

### Example

Suppose you want to render a modal outside the main \`#root\` element:

#### 1. Add a container in your HTML

\`\`\`html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
\`\`\`

#### 2. Create a Modal component using a portal

\`\`\`jsx
import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    modalRoot
  );
}
\`\`\`

#### 3. Use the Modal component

\`\`\`jsx
function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <Modal>
          <h2>Hello from the portal!</h2>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}
\`\`\`

### Key Points

- Portals help with scenarios like modals, tooltips, and overlays, where you need to visually break out of the parent DOM hierarchy.
- Event bubbling works as if the portal content is still inside the React tree.

**References:**  
- [React Docs: Portals](https://react.dev/reference/react-dom/createPortal)`,level:"Advanced",created_at:"2025-04-20T08:54:25.085626Z",topic:"8e309cbf-9157-4482-b102-b8e9cfc69e72"}];export{n as default};
