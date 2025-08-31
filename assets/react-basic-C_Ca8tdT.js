const e=[{id:"4c52f716-997f-406c-916a-1cdd641e1c60",question:"What is the purpose of PropTypes in React?",answer:`\`\`\`markdown
PropTypes in React are used for type-checking the props passed to a component. They help ensure that the data passed to a component is of the correct type and structure, which can prevent bugs and make the code more robust and easier to maintain. By defining PropTypes, developers can specify the expected types for each prop and whether they are required or optional.

For example:

\`\`\`javascript
import PropTypes from 'prop-types';

function MyComponent({ name, age, isAdmin }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Admin: {isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool
};
\`\`\`

In this example:
- \`name\` must be a string and is required.
- \`age\` must be a number and is required.
- \`isAdmin\` must be a boolean but is optional.

If a prop is passed with an incorrect type or is missing when marked as required, React will log a warning in the console during development. This helps catch errors early and improves code quality.
\`\`\`
`,level:"Advanced",created_at:"2025-02-24T17:24:28.304198Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"e70168fa-a0a3-4c89-9b6e-210f5098d665",question:"What is Redux, and how does it work with React?",answer:`\`\`\`markdown
Redux is a predictable state management library often used with React applications to manage the application's state in a centralized manner. It helps in maintaining a single source of truth for the state, making it easier to debug and manage complex state interactions.

### How Redux Works with React:
1. **Store**: Redux uses a single store to hold the entire state of the application. This store is immutable, meaning the state cannot be directly modified.

2. **Actions**: Actions are plain JavaScript objects that describe what changes need to be made to the state. They typically have a \`type\` property and may include additional data (payload).

3. **Reducers**: Reducers are pure functions that take the current state and an action as arguments, and return a new state based on the action type. They determine how the state should change in response to an action.

4. **Dispatch**: The \`dispatch\` function is used to send actions to the Redux store. When an action is dispatched, the store invokes the appropriate reducer to update the state.

5. **React-Redux**: React-Redux is the official binding library that connects React and Redux. It provides components like \`Provider\` to make the Redux store available to the React component tree and \`connect\` or hooks like \`useSelector\` and \`useDispatch\` to interact with the store.

### Workflow:
1. A React component dispatches an action using \`dispatch\`.
2. The action is sent to the Redux store.
3. The store passes the current state and the action to the reducer.
4. The reducer processes the action and returns a new state.
5. The store updates the state and notifies the React components subscribed to the store.
6. The React components re-render with the updated state.

By using Redux with React, developers can manage application state more effectively, especially in large-scale applications with complex state interactions.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303904Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"b228a886-ece0-4564-9833-283dbcde06d7",question:"What are the main principles of Redux?",answer:`\`\`\`markdown
Redux is based on three main principles:

1. **Single Source of Truth**:  
   The entire state of the application is stored in a single JavaScript object called the "store". This ensures a predictable state management system and makes debugging and testing easier.

2. **State is Read-Only**:  
   The state can only be changed by dispatching actions. Actions are plain JavaScript objects that describe what happened, ensuring that state changes are predictable and traceable.

3. **Changes are Made with Pure Functions**:  
   To specify how the state tree is transformed by actions, you write pure functions called reducers. Reducers take the current state and an action as arguments and return a new state without mutating the original state.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303918Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"366b8481-1afa-4bd7-a505-445e96684076",question:"What is state in React, and how is it different from props?",answer:"```markdown\nIn React, **state** is a built-in object that allows components to store and manage dynamic data that can change over time. It is local to the component and can only be updated within that component using the `setState` function (for class components) or the `useState` hook (for functional components). When the state changes, React re-renders the component to reflect the updated data.\n\n**Props** (short for properties), on the other hand, are used to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component receiving them. They are used to make components reusable by allowing them to accept dynamic input.\n\n### Key Differences:\n| **State**                     | **Props**                     |\n|-------------------------------|-------------------------------|\n| Managed within the component. | Passed from parent to child.  |\n| Can be modified using `setState` or `useState`. | Immutable (read-only).       |\n| Used for dynamic data that changes over time. | Used to pass data and configuration. |\n| Local to the component.       | Accessible to child components. |\n\nIn summary, state is for managing a component's internal data, while props are for passing data between components.\n```",level:"Beginner",created_at:"2025-02-24T17:24:28.303670Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"494e5892-65fe-4e9a-868c-46a3a20dc19e",question:"How do you create a React application?",answer:"```markdown\nTo create a React application, you can use the following steps:\n\n1. **Install Node.js**: Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).\n\n2. **Install `create-react-app`** (optional): You can use the `npx` command to create a React app without installing `create-react-app` globally.\n\n3. **Create a React Application**:\n   Open your terminal or command prompt and run the following command:\n   ```bash\n   npx create-react-app my-app\n   ```\n   Replace `my-app` with the name of your application.\n\n4. **Navigate to Your Project Directory**:\n   ```bash\n   cd my-app\n   ```\n\n5. **Start the Development Server**:\n   Run the following command to start the development server:\n   ```bash\n   npm start\n   ```\n   This will open your React application in the browser at `http://localhost:3000`.\n\nYour React application is now set up and running. You can start editing the files in the `src` folder to build your app.\n```",level:"Beginner",created_at:"2025-02-24T17:24:28.303684Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"85f43446-b315-4031-8419-331c91d61843",question:"What is the role of create-react-app?",answer:"```markdown\n**The Role of `create-react-app`**\n\n`create-react-app` (CRA) is a command-line tool provided by the React team to quickly set up a new React project with a pre-configured development environment. Its primary role is to simplify the process of starting a React application by handling the setup of tools and configurations, so developers can focus on building their app.\n\n### Key Features of `create-react-app`:\n1. **Zero Configuration**: It abstracts away the complex setup of tools like Webpack, Babel, ESLint, etc.\n2. **Development Server**: Provides a local development server with live reloading for a smooth development experience.\n3. **Production Build**: Includes optimized production-ready build tools to bundle and minify the app.\n4. **File Structure**: Sets up a standard project structure to maintain consistency.\n5. **Support for Modern JavaScript**: Comes with support for modern JavaScript features out of the box.\n6. **Extensibility**: Allows customization through `eject` if advanced configurations are needed.\n\nIn summary, `create-react-app` is a convenient way to bootstrap a React project without worrying about the underlying tooling and configurations.\n```",level:"Beginner",created_at:"2025-02-24T17:24:28.303699Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"ca9f4014-f97e-44d6-9a67-4e37c1ba97a6",question:"What is the purpose of the render() method in React?",answer:"```markdown\nThe `render()` method in React is used to describe what the UI should look like for a component. It returns a React element, which is a lightweight representation of the DOM. The `render()` method is a required method in class components and is responsible for rendering the component's JSX to the DOM. React uses the output of the `render()` method to efficiently update and re-render the UI when the component's state or props change.\n\nExample:\n\n```jsx\nclass MyComponent extends React.Component {\n  render() {\n    return (\n      <div>\n        <h1>Hello, React!</h1>\n      </div>\n    );\n  }\n}\n```\n\nIn functional components, the `render()` method is replaced by the return statement of the function.\n```\n",level:"Beginner",created_at:"2025-02-24T17:24:28.303715Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"87290cd3-a350-4bf1-adc7-e2c9d3aed577",question:"What is React, and why is it used?",answer:`\`\`\`markdown
React is a popular JavaScript library developed by Facebook for building user interfaces, specifically for single-page applications. It allows developers to create reusable UI components, making the development process more efficient and maintainable.

### Why is React used?
1. **Component-Based Architecture**: React enables developers to build encapsulated components that manage their own state, which can be composed to create complex UIs.
2. **Virtual DOM**: React uses a virtual DOM to efficiently update and render only the components that change, improving performance.
3. **Declarative Syntax**: React's declarative approach makes it easier to design and debug UIs by describing what the UI should look like for a given state.
4. **Reusable Components**: Components can be reused across different parts of an application, reducing code duplication.
5. **Strong Ecosystem**: React has a large community and ecosystem, offering numerous libraries and tools to enhance development.
6. **Cross-Platform Development**: React can be used for web development (ReactJS) and mobile app development (React Native).

React is widely adopted because it simplifies the process of building dynamic and interactive user interfaces while maintaining high performance and scalability.
\`\`\``,level:"Beginner",created_at:"2025-02-24T17:24:28.303405Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"8c614415-a3a4-4a51-9865-2baca988d6cc",question:"What are the main features of React?",answer:`\`\`\`markdown
### Main Features of React

1. **Component-Based Architecture**: React allows developers to build encapsulated components that manage their own state and compose them to create complex UIs.

2. **Virtual DOM**: React uses a virtual representation of the DOM to optimize updates, making UI rendering faster and more efficient.

3. **Declarative UI**: React enables developers to design interactive and dynamic UIs declaratively, making the code more predictable and easier to debug.

4. **Unidirectional Data Flow**: React follows a unidirectional data flow, which ensures better control over the application state and makes debugging easier.

5. **JSX (JavaScript XML)**: React uses JSX, a syntax extension that allows writing HTML-like code within JavaScript, making the code more readable and expressive.

6. **Reusable Components**: React promotes reusability by allowing developers to create modular components that can be reused across the application.

7. **React Hooks**: Hooks provide a way to use state and other React features in functional components, simplifying the code and improving readability.

8. **Rich Ecosystem**: React has a vast ecosystem with libraries and tools for routing, state management, testing, and more.

9. **Cross-Platform Development**: React Native, built on React, allows developers to create mobile applications for iOS and Android using the same React principles.

10. **Community Support**: React has a large and active community, providing extensive resources, tutorials, and third-party libraries.

These features make React a powerful and flexible library for building modern web and mobile applications.
\`\`\``,level:"Beginner",created_at:"2025-02-24T17:24:28.303448Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"8c77137b-aab3-465b-881e-a7e8c219b875",question:"What is JSX in React?",answer:"```markdown\nJSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code directly within JavaScript, making it easier to create and visualize the structure of the UI. JSX is then transpiled into regular JavaScript using tools like Babel.\n\nFor example:\n```jsx\nconst element = <h1>Hello, World!</h1>;\n```\n\nThis JSX code is transformed into:\n```javascript\nconst element = React.createElement('h1', null, 'Hello, World!');\n```\n\nJSX improves code readability and enables developers to write components in a more declarative and intuitive way. It is not mandatory to use JSX in React, but it is widely adopted because of its simplicity and efficiency.\n```\n",level:"Beginner",created_at:"2025-02-24T17:24:28.303467Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"82bb1443-3d2f-41eb-98b1-70ca30e87431",question:"What is the Virtual DOM in React, and how does it work?",answer:`\`\`\`markdown
### What is the Virtual DOM in React, and How Does It Work?

The Virtual DOM in React is a lightweight, in-memory representation of the real DOM. It is a JavaScript object that React uses to optimize updates to the actual DOM, which can be slow and resource-intensive.

#### How It Works:
1. **Initial Rendering**: When a React component is rendered, a Virtual DOM tree is created to represent the structure of the UI.

2. **State or Prop Changes**: When the state or props of a component change, React creates a new Virtual DOM tree to reflect the updated UI.

3. **Diffing Algorithm**: React compares the new Virtual DOM tree with the previous one using a process called "reconciliation." It identifies the differences (or "diffs") between the two trees.

4. **Efficient Updates**: Based on the diffs, React updates only the parts of the real DOM that have changed, rather than re-rendering the entire DOM. This minimizes expensive DOM operations and improves performance.

#### Benefits:
- **Performance**: By reducing direct manipulation of the real DOM, React ensures faster updates and rendering.
- **Declarative UI**: Developers can focus on describing what the UI should look like, while React handles the efficient updates behind the scenes.

The Virtual DOM is a key concept that makes React highly efficient and responsive for building dynamic user interfaces.
\`\`\``,level:"Beginner",created_at:"2025-02-24T17:24:28.303484Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"357e2c5e-8f7c-4a67-8029-691c93b40e28",question:"What are components in React?",answer:`\`\`\`markdown
In React, components are the building blocks of a React application. They are reusable, independent pieces of code that define the structure, behavior, and appearance of a part of the user interface. Components allow developers to break down complex UIs into smaller, manageable pieces.

There are two main types of components in React:

1. **Functional Components**: These are simple JavaScript functions that return React elements (JSX). They are primarily used for rendering UI and can use React hooks for managing state and side effects.

   \`\`\`jsx
   function Greeting(props) {
       return <h1>Hello, {props.name}!</h1>;
   }
   \`\`\`

2. **Class Components**: These are ES6 classes that extend \`React.Component\`. They can manage their own state and lifecycle methods.

   \`\`\`jsx
   class Greeting extends React.Component {
       render() {
           return <h1>Hello, {this.props.name}!</h1>;
       }
   }
   \`\`\`

Components can accept inputs called **props** (short for properties) and return React elements that describe what should appear on the screen. By composing components together, developers can create complex UIs while keeping the code modular and maintainable.
\`\`\``,level:"Beginner",created_at:"2025-02-24T17:24:28.303498Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"aee34f7b-c802-40af-b1e9-f432767174a7",question:"What is the difference between functional and class components?",answer:"```markdown\nIn React, components can be created using either functional components or class components. Here are the key differences:\n\n### Functional Components:\n- **Definition**: Functional components are JavaScript functions that accept `props` as an argument and return React elements (JSX).\n- **State Management**: Initially, functional components were stateless, but with the introduction of React Hooks (e.g., `useState`, `useEffect`), they can now manage state and side effects.\n- **Syntax**: Simpler and more concise compared to class components.\n- **Performance**: Generally faster because they are plain functions and do not require the overhead of class instantiation.\n- **Example**:\n  ```jsx\n  function Greeting(props) {\n    return <h1>Hello, {props.name}!</h1>;\n  }\n  ```\n\n### Class Components:\n- **Definition**: Class components are ES6 classes that extend `React.Component` and must include a `render()` method to return React elements.\n- **State Management**: Class components have built-in state management using `this.state` and lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc.\n- **Syntax**: More verbose due to the need for `this` keyword and lifecycle methods.\n- **Performance**: Slightly slower due to the overhead of class instantiation.\n- **Example**:\n  ```jsx\n  class Greeting extends React.Component {\n    render() {\n      return <h1>Hello, {this.props.name}!</h1>;\n    }\n  }\n  ```\n\n### Key Differences:\n| Feature                | Functional Components              | Class Components                  |\n|------------------------|------------------------------------|-----------------------------------|\n| Syntax                | Simple function                   | ES6 class with `render()` method |\n| State Management      | Hooks (e.g., `useState`)           | `this.state`                     |\n| Lifecycle Methods     | Hooks (e.g., `useEffect`)          | Built-in lifecycle methods       |\n| Performance           | Faster (no class overhead)         | Slightly slower                  |\n| Code Complexity       | Less complex                      | More complex                     |\n\n### Conclusion:\nFunctional components are now the preferred way to write React components due to their simplicity and the power of React Hooks. Class components are still supported but are less commonly used in modern React development.\n```",level:"Beginner",created_at:"2025-02-24T17:24:28.303516Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"d1f75622-f7b8-4f41-adbd-94aca45dfad2",question:"What is the purpose of props in React?",answer:'```markdown\nProps (short for "properties") in React are used to pass data from a parent component to a child component. They allow components to be dynamic and reusable by enabling the parent to customize the child component\'s behavior or appearance. Props are immutable, meaning they cannot be modified by the child component, ensuring a unidirectional data flow in React.\n\nFor example:\n\n```jsx\nfunction Greeting(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}\n\nfunction App() {\n  return <Greeting name="Alice" />;\n}\n```\n\nIn this example, the `name` prop is passed from the `App` component to the `Greeting` component, allowing the `Greeting` component to display a personalized message.\n```\n',level:"Beginner",created_at:"2025-02-24T17:24:28.303653Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"f6caf12f-6d40-47cc-9a63-2cc758e51dd1",question:"How do you handle events in React?",answer:`\`\`\`markdown
In React, you handle events similarly to how you handle events in plain JavaScript, but with some differences:

1. **Use CamelCase for Event Names**: React uses camelCase for event names instead of lowercase. For example, \`onClick\` instead of \`onclick\`.

2. **Pass a Function as the Event Handler**: You pass a function as the event handler instead of a string.

Here’s an example of handling a button click event:

\`\`\`jsx
import React from 'react';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default App;
\`\`\`

### Key Points:
- You can define the event handler function inside the component or pass an inline function directly.
- If you need to pass arguments to the event handler, use an arrow function or \`.bind()\`:

\`\`\`jsx
<button onClick={() => handleClick('argument')}>Click Me</button>
\`\`\`

### Synthetic Events:
React wraps native events in a cross-browser wrapper called **SyntheticEvent** to ensure consistent behavior across different browsers.

For more complex event handling, you can refer to the [React documentation on events](https://reactjs.org/docs/handling-events.html).
\`\`\``,level:"Beginner",created_at:"2025-02-24T17:24:28.303729Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"abf4850d-5fe2-4c18-a586-f8cb6dacda86",question:"What is the purpose of keys in React?",answer:`\`\`\`markdown
In React, keys are used to uniquely identify elements in a list. They help React efficiently update and render components by tracking changes, additions, or removals in a list. When the list changes, React uses the keys to determine which elements need to be re-rendered, improving performance and ensuring the UI stays in sync with the underlying data.

For example:

\`\`\`jsx
const items = ['Apple', 'Banana', 'Cherry'];

const List = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
\`\`\`

Here, the \`key\` prop ensures that each \`<li>\` element is uniquely identified. It is recommended to use a stable and unique value (like an ID) for keys instead of relying on array indices, especially if the list items can change order or be modified.
\`\`\`
`,level:"Beginner",created_at:"2025-02-24T17:24:28.303751Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"7923509a-eef4-4130-96e9-c67ecd90f3ca",question:"What are React fragments, and why are they used?",answer:`\`\`\`markdown
### What are React Fragments, and Why are They Used?

React Fragments are a feature in React that allow you to group multiple elements without adding an extra node to the DOM. They are useful when you need to return multiple elements from a component but want to avoid adding unnecessary wrapper elements like \`<div>\`.

#### Syntax:
1. **Using \`<React.Fragment>\`:**
   \`\`\`jsx
   <React.Fragment>
     <h1>Title</h1>
     <p>Description</p>
   </React.Fragment>
   \`\`\`

2. **Using the shorthand \`<>\` (empty tags):**
   \`\`\`jsx
   <>
     <h1>Title</h1>
     <p>Description</p>
   </>
   \`\`\`

#### Why Use React Fragments?
- **Avoid Extra DOM Nodes:** Adding unnecessary wrapper elements like \`<div>\` can clutter the DOM and cause layout or styling issues.
- **Improved Performance:** Reducing extra nodes can lead to better performance, especially in large applications.
- **Cleaner Code:** Fragments make the code more readable and maintainable by avoiding redundant wrappers.

#### Example:
\`\`\`jsx
function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>Welcome to React.</p>
    </>
  );
}
\`\`\`

In this example, the \`<h1>\` and \`<p>\` elements are grouped together without adding an extra DOM node.
\`\`\``,level:"Beginner",created_at:"2025-02-24T17:24:28.303764Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"5bc8e47b-d563-4d79-bdf7-be3d0c78d9f6",question:"What is the difference between controlled and uncontrolled components?",answer:`\`\`\`markdown
In React, the difference between controlled and uncontrolled components lies in how the form data is handled:

### Controlled Components
- **Definition**: The form data is controlled by the React component's state.
- **Data Handling**: The \`value\` of the input field is set by the component's state, and any changes to the input are handled via event handlers (e.g., \`onChange\`).
- **Advantages**:
  - Provides better control over the form data.
  - Makes it easier to validate or manipulate data before submission.
  - Ensures a single source of truth for the data.
- **Example**:
  \`\`\`jsx
  import React, { useState } from 'react';

  function ControlledComponent() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>Input Value: {inputValue}</p>
      </div>
    );
  }
  \`\`\`

---

### Uncontrolled Components
- **Definition**: The form data is handled by the DOM itself, rather than the React component's state.
- **Data Handling**: The \`value\` of the input field is managed by the DOM, and you access it using a \`ref\` when needed.
- **Advantages**:
  - Simpler to implement for basic use cases.
  - Useful when you don't need to track or manipulate the input value in real-time.
- **Example**:
  \`\`\`jsx
  import React, { useRef } from 'react';

  function UncontrolledComponent() {
    const inputRef = useRef();

    const handleSubmit = () => {
      alert(\`Input Value: \${inputRef.current.value}\`);
    };

    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
  \`\`\`

---

### Key Differences
| Feature                  | Controlled Components       | Uncontrolled Components      |
|--------------------------|-----------------------------|------------------------------|
| **Data Source**          | React state                | DOM                          |
| **Real-time Updates**    | Yes                        | No                           |
| **Validation**           | Easier to implement        | More complex                 |
| **Use Case**             | Complex forms, validation  | Simple forms, minimal logic  |
| **Code Complexity**      | Higher                     | Lower                        |

In general, controlled components are preferred for most use cases in React due to their predictability and ease of debugging, while uncontrolled components are suitable for simpler scenarios.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303777Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"4c6981dd-0d5a-4397-b14c-c02476cebd41",question:"What is the purpose of React hooks?",answer:"```markdown\nReact hooks are functions that allow developers to use state and other React features in functional components, which were previously only available in class components. They simplify the process of managing state, side effects, and other React functionalities without the need for writing class-based components. \n\nThe main purposes of React hooks are:\n\n1. **State Management**: Hooks like `useState` enable functional components to manage local state.\n2. **Side Effects**: The `useEffect` hook allows handling side effects such as data fetching, subscriptions, or manually changing the DOM.\n3. **Reusability**: Custom hooks can be created to encapsulate and reuse logic across different components.\n4. **Cleaner Code**: Hooks eliminate the need for complex lifecycle methods in class components, leading to simpler and more readable code.\n5. **Improved Functional Components**: Hooks enhance the capabilities of functional components, making them as powerful as class components.\n\nSome commonly used hooks include `useState`, `useEffect`, `useContext`, `useReducer`, and `useRef`.\n```",level:"Intermediate",created_at:"2025-02-24T17:24:28.303791Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"8111a589-2969-4b08-b92e-354fe9b58945",question:"What is the useState hook in React?",answer:`\`\`\`markdown
The \`useState\` hook in React is a built-in function that allows you to add state management to functional components. It lets you declare state variables and update their values within a functional component, enabling you to manage dynamic data and re-render the component when the state changes.

### Syntax:
\`\`\`javascript
const [state, setState] = useState(initialValue);
\`\`\`

- \`state\`: The current state value.
- \`setState\`: A function to update the state value.
- \`initialValue\`: The initial value of the state.

### Example:
\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Declare a state variable "count" with an initial value of 0

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
\`\`\`

### Key Points:
1. **State Initialization**: The \`useState\` hook initializes the state with the provided \`initialValue\`.
2. **State Updates**: Calling the \`setState\` function updates the state and triggers a re-render of the component.
3. **Multiple States**: You can use multiple \`useState\` hooks in a single component to manage different pieces of state.

The \`useState\` hook is a fundamental tool for managing state in functional components, making React code more concise and easier to maintain.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303807Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"32e1e8a6-d77a-43d0-9096-a9912df21eb3",question:"What is the useEffect hook in React, and how does it work?",answer:`\`\`\`markdown
The \`useEffect\` hook in React is used to perform side effects in functional components. Side effects can include tasks like fetching data, directly manipulating the DOM, setting up subscriptions, or updating the document title. It serves a similar purpose to lifecycle methods like \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` in class components.

### How \`useEffect\` Works
\`useEffect\` takes two arguments:
1. **Effect Function**: A function that contains the side effect logic.
2. **Dependency Array** (optional): An array of values that the effect depends on. React will re-run the effect only if one of these dependencies changes.

#### Basic Syntax
\`\`\`javascript
useEffect(() => {
  // Side effect logic here
  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]);
\`\`\`

### Key Points
1. **Without Dependency Array**: If no dependency array is provided, the effect runs after every render.
   \`\`\`javascript
   useEffect(() => {
     console.log("Effect runs after every render");
   });
   \`\`\`

2. **With Empty Dependency Array**: If an empty array is provided, the effect runs only once, after the initial render (similar to \`componentDidMount\`).
   \`\`\`javascript
   useEffect(() => {
     console.log("Effect runs only once");
   }, []);
   \`\`\`

3. **With Dependencies**: If specific dependencies are provided, the effect runs only when one of the dependencies changes.
   \`\`\`javascript
   useEffect(() => {
     console.log("Effect runs when \`count\` changes");
   }, [count]);
   \`\`\`

4. **Cleanup Function**: The effect function can return a cleanup function, which is executed before the component unmounts or before the effect re-runs (similar to \`componentWillUnmount\`).
   \`\`\`javascript
   useEffect(() => {
     const interval = setInterval(() => {
       console.log("Interval running");
     }, 1000);

     return () => {
       clearInterval(interval); // Cleanup
       console.log("Cleanup on unmount or dependency change");
     };
   }, []);
   \`\`\`

### Common Use Cases
- Fetching data from an API
- Subscribing to events or WebSocket connections
- Managing timers or intervals
- Updating the document title dynamically

\`useEffect\` is a powerful tool for managing side effects in React functional components, ensuring that your application behaves predictably and efficiently.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303824Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"99da48f7-3019-4446-95f0-8ac9ddfd46b1",question:"What is the Context API in React, and when should you use it?",answer:`\`\`\`markdown
The Context API in React is a feature that allows you to share state or data across the component tree without having to pass props down manually at every level. It is particularly useful for managing global state or data that needs to be accessed by multiple components in a React application.

### Key Components of the Context API:
1. **React.createContext()**: Creates a Context object.
2. **Provider**: A component that wraps part of the component tree and provides the context value to its descendants.
3. **Consumer**: A component that subscribes to the context and allows access to its value.

### When to Use the Context API:
- **Avoiding Prop Drilling**: When you need to pass data deeply through the component tree without passing props at every level.
- **Global State Management**: For managing application-wide state, such as user authentication, theme settings, or language preferences.
- **Theming**: Sharing theme-related data (e.g., light/dark mode) across components.
- **Localization**: Providing language settings or translations throughout the app.

### Example:
\`\`\`jsx
import React, { createContext, useContext, useState } from 'react';

// Create a Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default App;
\`\`\`

### When Not to Use the Context API:
- For state that is only relevant to a specific component or a small part of the tree, use local state instead.
- For complex state management with advanced features like time travel or middleware, consider using state management libraries like Redux or Zustand.

The Context API is a powerful tool, but it should be used judiciously to avoid unnecessary complexity or performance issues.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303839Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"4ce5b849-563d-4b90-9c28-0280217d5f19",question:"What are higher-order components (HOCs) in React?",answer:`\`\`\`markdown
### Higher-Order Components (HOCs) in React

A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. It is a function that takes a component as an argument and returns a new component. HOCs are commonly used for cross-cutting concerns like authentication, data fetching, or state management.

#### Syntax:
\`\`\`javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
\`\`\`

#### Key Features:
1. **Code Reusability**: HOCs allow you to share logic between multiple components without duplicating code.
2. **Abstraction**: They abstract away complex logic, keeping components clean and focused on their primary purpose.
3. **Composition**: HOCs enable the composition of behaviors by wrapping components.

#### Example:
\`\`\`javascript
import React from 'react';

// A simple HOC that adds a prop to the wrapped component
const withExtraProp = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent extraProp="I am an extra prop!" {...props} />;
  };
};

// A basic component
const MyComponent = ({ extraProp }) => {
  return <div>{extraProp}</div>;
};

// Wrapping the component with the HOC
const EnhancedComponent = withExtraProp(MyComponent);

// Usage
const App = () => {
  return <EnhancedComponent />;
};

export default App;
\`\`\`

#### Best Practices:
- Avoid overusing HOCs, as they can make the component tree harder to understand.
- Name HOCs clearly to indicate their purpose (e.g., \`withAuth\`, \`withLogging\`).
- Ensure HOCs are pure functions and do not modify the original component.

#### Limitations:
- HOCs can lead to "wrapper hell" if nested excessively.
- Debugging can be challenging due to the added layers of abstraction.
- React hooks provide an alternative for many use cases previously handled by HOCs.

HOCs remain a powerful tool in React, but with the introduction of hooks, their usage has declined in favor of simpler and more declarative patterns.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303854Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"8a140d48-3dd3-4848-a476-de6fc36d13df",question:"What is React Router, and how do you use it?",answer:`\`\`\`markdown
React Router is a standard library for routing in React applications. It enables navigation between different components or views in a React app, allowing developers to create single-page applications (SPAs) with dynamic routing. React Router uses a component-based approach to declare routes and manage navigation, making it easy to handle URL changes and render the appropriate components.

### Key Features of React Router:
- **Dynamic Routing**: Routes are defined as components, allowing for dynamic updates based on the app's state.
- **Nested Routes**: Supports hierarchical routing, enabling parent-child relationships between routes.
- **URL Parameters**: Allows passing parameters through the URL for dynamic content rendering.
- **Programmatic Navigation**: Provides APIs like \`useNavigate\` to navigate programmatically.
- **Declarative Routing**: Routes are declared in JSX, making them easy to read and maintain.

### How to Use React Router:
1. **Install React Router**:
   Install the React Router library using npm or yarn:
   \`\`\`bash
   npm install react-router-dom
   \`\`\`

2. **Set Up the Router**:
   Wrap your application in a \`BrowserRouter\` component to enable routing:
   \`\`\`jsx
   import { BrowserRouter } from 'react-router-dom';

   function App() {
     return (
       <BrowserRouter>
         {/* Your app components */}
       </BrowserRouter>
     );
   }
   \`\`\`

3. **Define Routes**:
   Use the \`Routes\` and \`Route\` components to define paths and associate them with components:
   \`\`\`jsx
   import { Routes, Route } from 'react-router-dom';
   import Home from './Home';
   import About from './About';

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
         </Routes>
       </BrowserRouter>
     );
   }
   \`\`\`

4. **Navigate Between Routes**:
   Use the \`Link\` component for navigation:
   \`\`\`jsx
   import { Link } from 'react-router-dom';

   function Navbar() {
     return (
       <nav>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
       </nav>
     );
   }
   \`\`\`

5. **Access Route Parameters**:
   Use the \`useParams\` hook to access dynamic parameters in a route:
   \`\`\`jsx
   import { useParams } from 'react-router-dom';

   function UserProfile() {
     const { userId } = useParams();
     return <h1>User ID: {userId}</h1>;
   }
   \`\`\`

React Router simplifies navigation and routing in React applications, making it a powerful tool for building SPAs with clean and maintainable code.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303871Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"daeee9fb-e3b2-4e86-b6d5-2ddb28b9ebce",question:"What is the difference between React Router's BrowserRouter and HashRouter?",answer:`\`\`\`markdown
### Difference Between React Router's \`BrowserRouter\` and \`HashRouter\`

React Router provides two main types of routers for client-side navigation: \`BrowserRouter\` and \`HashRouter\`. The key differences between them are:

#### 1. **URL Structure**
   - **\`BrowserRouter\`**: Uses clean URLs without a hash (\`#\`) symbol. For example:
     \`\`\`
     https://example.com/about
     \`\`\`
   - **\`HashRouter\`**: Uses a hash symbol in the URL to manage routing. For example:
     \`\`\`
     https://example.com/#/about
     \`\`\`

#### 2. **Routing Mechanism**
   - **\`BrowserRouter\`**: Uses the HTML5 History API (\`pushState\`, \`replaceState\`, and \`popstate\` events) to manage navigation. This allows for clean URLs and better integration with server-side rendering.
   - **\`HashRouter\`**: Uses the hash portion of the URL (\`window.location.hash\`) to manage routing. This does not require server configuration since the hash is not sent to the server.

#### 3. **Server Configuration**
   - **\`BrowserRouter\`**: Requires proper server configuration to handle client-side routing. For example, the server should be set up to serve the \`index.html\` file for all routes to prevent 404 errors.
   - **\`HashRouter\`**: Does not require server configuration because the hash is handled entirely on the client side.

#### 4. **Use Cases**
   - **\`BrowserRouter\`**: Preferred for modern web applications where clean URLs and SEO are important. It is ideal when you have control over the server configuration.
   - **\`HashRouter\`**: Useful for static file hosting environments (e.g., GitHub Pages) where you cannot configure the server to handle client-side routing.

#### Example Usage
\`\`\`jsx
// BrowserRouter
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

// HashRouter
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
\`\`\`

#### Summary
- Use \`BrowserRouter\` for clean URLs and SEO-friendly applications with proper server support.
- Use \`HashRouter\` for simpler setups or when server configuration is not possible.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303888Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"0356165e-fc31-408f-a010-8f761b34c74d",question:"What is the difference between Redux and the Context API?",answer:`\`\`\`markdown
### Difference Between Redux and Context API in React

Both Redux and the Context API are used for state management in React applications, but they differ in their use cases, complexity, and functionality:

#### 1. **Purpose**
   - **Redux**: A state management library designed to handle complex state logic in large-scale applications. It provides a predictable state container with a strict unidirectional data flow.
   - **Context API**: A built-in feature of React used for passing data through the component tree without having to pass props manually at every level. It is suitable for simpler state-sharing scenarios.

#### 2. **Complexity**
   - **Redux**: Requires additional setup, including creating actions, reducers, and a store. It also involves middleware (e.g., Redux Thunk or Saga) for handling asynchronous operations.
   - **Context API**: Easier to set up as it is part of React itself. You only need to create a context and a provider to share state.

#### 3. **Use Cases**
   - **Redux**: Ideal for applications with complex state management needs, such as managing deeply nested state, asynchronous data fetching, or when multiple components need to interact with shared state.
   - **Context API**: Best for simpler use cases, such as passing theme, language, or authentication data across components.

#### 4. **Performance**
   - **Redux**: Optimized for performance with tools like \`connect\` from \`react-redux\`, which prevents unnecessary re-renders by subscribing only to specific parts of the state.
   - **Context API**: Can lead to performance issues if not used carefully, as changes in context can trigger re-renders for all consuming components.

#### 5. **Third-Party Dependency**
   - **Redux**: Requires installing the Redux library and often additional middleware for advanced use cases.
   - **Context API**: No external dependencies; it is built into React.

#### 6. **Debugging Tools**
   - **Redux**: Comes with powerful debugging tools like the Redux DevTools, which allow you to inspect state changes, actions, and the state tree.
   - **Context API**: Lacks dedicated debugging tools, making it harder to track state changes in complex scenarios.

#### Summary
- Use **Redux** for large-scale applications with complex state management needs.
- Use **Context API** for simpler, lightweight state-sharing requirements.

\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303931Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"70b3176b-8f8c-41dc-8a2c-fa3a97d2c1fd",question:"What are React portals, and when should you use them?",answer:`\`\`\`markdown
### What are React Portals, and When Should You Use Them?

React Portals provide a way to render children components into a DOM node that exists outside the hierarchy of the parent component. They are created using the \`ReactDOM.createPortal\` method, which takes two arguments: the child component to render and the DOM node where it should be rendered.

#### Syntax:
\`\`\`javascript
ReactDOM.createPortal(child, container)
\`\`\`

- \`child\`: The React component or elements to render.
- \`container\`: The DOM node where the child should be rendered.

#### Example:
\`\`\`javascript
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root') // A DOM node outside the main app root
  );
};

export default Modal;
\`\`\`

In this example, the \`Modal\` component renders its children into a DOM node (\`modal-root\`) that is outside the main application DOM hierarchy.

---

### When Should You Use React Portals?

React Portals are particularly useful in the following scenarios:

1. **Modals, Dialogs, and Tooltips**:
   - These components often need to be rendered outside the main DOM hierarchy to avoid issues with CSS styles like \`overflow: hidden\` or \`z-index\` conflicts.

2. **Avoiding Overflow Issues**:
   - When a child component needs to visually "break out" of its parent container (e.g., dropdowns or popovers), portals ensure that the component is not constrained by the parent's CSS properties.

3. **Event Bubbling Control**:
   - Even though portals render outside the parent DOM hierarchy, events still propagate through the React component tree. This allows you to manage event handling effectively while rendering outside the parent.

---

### Key Points to Remember:
- Portals do not create a new React tree; they only change where the DOM nodes are rendered.
- Event bubbling works as expected, propagating through the React component tree, not the DOM tree.
- Use portals sparingly and only when necessary to solve specific rendering or styling challenges.

React Portals provide a powerful way to handle complex UI scenarios while maintaining a clean and manageable component structure.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303945Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"68e7e4af-ea75-4f49-8c5b-85d518c213b5",question:"What is the purpose of error boundaries in React?",answer:`\`\`\`markdown
Error boundaries in React are special components designed to catch JavaScript errors that occur in their child component tree during rendering, lifecycle methods, or constructors. Their purpose is to prevent the entire application from crashing due to an error in a specific part of the UI.

### Key Points:
1. **Error Handling**: Error boundaries catch errors in their child components and display a fallback UI instead of breaking the whole app.
2. **Scope**: They only catch errors in the components below them in the tree, not in themselves or in event handlers.
3. **Methods**: To create an error boundary, a class component must implement the following lifecycle methods:
   - \`static getDerivedStateFromError(error)\`: Updates the state to display a fallback UI.
   - \`componentDidCatch(error, info)\`: Logs the error details for debugging purposes.
4. **Usage**: They are commonly used to wrap parts of the application where errors are more likely to occur, such as third-party components or experimental features.

### Example:
\`\`\`jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
\`\`\`

Error boundaries improve the user experience by isolating errors and allowing the rest of the application to function normally.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303959Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"60284706-13c2-4384-8d23-001247e7df08",question:"What is lazy loading in React, and how do you implement it?",answer:`\`\`\`markdown
### Lazy Loading in React

Lazy loading in React is a technique used to optimize the performance of an application by loading components or resources only when they are needed. Instead of loading all components upfront, lazy loading ensures that components are loaded dynamically as the user navigates through the application. This reduces the initial load time and improves the overall user experience.

React provides a built-in \`React.lazy()\` function to enable lazy loading of components. It works in conjunction with the \`Suspense\` component, which allows you to display a fallback UI (like a loading spinner) while the lazy-loaded component is being fetched.

---

### How to Implement Lazy Loading in React

Here’s a step-by-step guide to implementing lazy loading:

1. **Import \`React.lazy\` and \`Suspense\`:**
   Use \`React.lazy()\` to dynamically import the component you want to lazy load.

2. **Wrap the Lazy Component with \`Suspense\`:**
   Use the \`Suspense\` component to define a fallback UI that will be displayed while the lazy-loaded component is being fetched.

---

### Example Code

\`\`\`jsx
import React, { Suspense } from 'react';

// Lazy load the component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <h1>React Lazy Loading Example</h1>
      {/* Wrap the lazy-loaded component with Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
\`\`\`

---

### Explanation of the Code

1. **\`React.lazy(() => import('./LazyComponent'))\`:**
   This dynamically imports the \`LazyComponent\` only when it is rendered.

2. **\`<Suspense fallback={<div>Loading...</div>}>\`:**
   The \`fallback\` prop specifies the UI to display while the lazy-loaded component is being fetched. In this case, it shows a simple "Loading..." message.

3. **Performance Benefits:**
   By lazy loading components, you reduce the initial bundle size, which improves the app's load time and performance.

---

### Notes

- Lazy loading is especially useful for large components, routes, or libraries that are not immediately needed.
- Ensure proper error handling using tools like \`Error Boundaries\` to catch any issues that might occur during the loading process.
- Lazy loading works well with code-splitting, which is often handled by bundlers like Webpack.

\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303971Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"25a55462-7992-4c6f-9a6f-21530737445f",question:"What are render props in React, and how are they used?",answer:`\`\`\`markdown
### Render Props in React

**Render props** is a pattern in React that involves sharing code between components using a prop whose value is a function. This function is used to determine what to render. It allows components to share logic while maintaining separation of concerns.

#### How Render Props Work

A component with a render prop takes a function as a prop, and this function returns a React element. The component calls this function instead of implementing its own rendering logic, allowing the parent component to control what gets rendered.

#### Example of Render Props

\`\`\`jsx
import React from 'react';

// A component that uses a render prop
class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {/* Call the render prop function */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Using the MouseTracker component
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      )}
    />
  );
}

export default App;
\`\`\`

#### Key Points:
1. **Flexibility**: Render props allow components to be highly reusable and flexible.
2. **Custom Rendering**: The parent component has full control over how the child component's output is rendered.
3. **Avoiding HOCs**: Render props can be used as an alternative to Higher-Order Components (HOCs) for sharing logic.

#### Best Practices:
- Avoid overusing render props as they can lead to deeply nested code, making it harder to read and maintain.
- Use hooks (introduced in React 16.8) as a modern alternative for sharing logic, which can simplify the code in many cases.

Render props are a powerful pattern for sharing logic in React, but with the advent of hooks, they are less commonly used in modern React applications.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304094Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"d2dbc5e0-5cde-4664-82e1-f9b449078d91",question:"What is the difference between React.memo and useMemo?",answer:`\`\`\`markdown
### Difference Between \`React.memo\` and \`useMemo\` in React

#### **1. React.memo**
- \`React.memo\` is a **higher-order component (HOC)**.
- It is used to optimize functional components by preventing unnecessary re-renders.
- It works by **shallowly comparing props** of the component. If the props haven't changed, the component will not re-render.
- Example usage:
  \`\`\`javascript
  const MyComponent = React.memo((props) => {
    return <div>{props.value}</div>;
  });
  \`\`\`
- Use case: When you want to optimize a functional component that re-renders frequently but its props remain the same.

---

#### **2. useMemo**
- \`useMemo\` is a **React Hook**.
- It is used to **memoize the result of a computation** (i.e., a value or a function) to avoid recalculating it on every render.
- It works by recalculating the memoized value only when its dependencies change.
- Example usage:
  \`\`\`javascript
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  \`\`\`
- Use case: When you have an expensive computation or derived state that depends on certain variables and you want to optimize performance.

---

#### **Key Differences**
| Feature              | React.memo                          | useMemo                           |
|----------------------|-------------------------------------|-----------------------------------|
| Type                | Higher-order component (HOC)        | React Hook                        |
| Purpose             | Prevents re-rendering of components | Memoizes the result of a computation |
| Works On            | Entire functional component         | A specific value or function      |
| Dependency Tracking | Shallow comparison of props         | Dependency array provided by the user |

In summary, \`React.memo\` is for optimizing components, while \`useMemo\` is for optimizing computations within components.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303983Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"a4f9edc0-810e-4313-ae84-39e49371be44",question:"What is the purpose of the useRef hook in React?",answer:`\`\`\`markdown
The \`useRef\` hook in React is used to create a mutable reference object that persists across renders. It can be used for the following purposes:

1. **Accessing DOM Elements**: \`useRef\` is commonly used to directly access and interact with DOM elements. For example, you can attach a \`ref\` to an input element and programmatically focus it.

   \`\`\`jsx
   import React, { useRef } from 'react';

   function InputFocus() {
     const inputRef = useRef(null);

     const handleFocus = () => {
       inputRef.current.focus(); // Access the DOM element and focus it
     };

     return (
       <div>
         <input ref={inputRef} type="text" />
         <button onClick={handleFocus}>Focus Input</button>
       </div>
     );
   }
   \`\`\`

2. **Storing Mutable Values**: \`useRef\` can store any mutable value (not just DOM elements) without causing re-renders when the value changes. This is useful for storing values like timers, previous state values, or any data that doesn't need to trigger a re-render.

   \`\`\`jsx
   import React, { useRef, useState } from 'react';

   function Counter() {
     const countRef = useRef(0);
     const [renderCount, setRenderCount] = useState(0);

     const increment = () => {
       countRef.current += 1; // Update the mutable value
       console.log('Count:', countRef.current);
     };

     const triggerRender = () => {
       setRenderCount(renderCount + 1); // Trigger a re-render
     };

     return (
       <div>
         <button onClick={increment}>Increment Count</button>
         <button onClick={triggerRender}>Trigger Re-render</button>
         <p>Render Count: {renderCount}</p>
       </div>
     );
   }
   \`\`\`

3. **Persisting Values Across Renders**: Unlike state, the value stored in a \`useRef\` object does not reset when the component re-renders. This makes it ideal for persisting values like previous props or state.

   \`\`\`jsx
   import React, { useEffect, useRef, useState } from 'react';

   function PreviousValue() {
     const [count, setCount] = useState(0);
     const prevCountRef = useRef();

     useEffect(() => {
       prevCountRef.current = count; // Store the previous count
     });

     const prevCount = prevCountRef.current;

     return (
       <div>
         <p>Current Count: {count}</p>
         <p>Previous Count: {prevCount}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   \`\`\`

### Key Characteristics of \`useRef\`:
- It does not cause re-renders when the \`current\` property is updated.
- It is initialized with \`useRef(initialValue)\` and returns an object with a \`current\` property.
- It is useful for managing focus, text selection, media playback, and other imperative actions.

In summary, \`useRef\` is a versatile hook for accessing DOM elements, storing mutable values, and persisting data across renders without triggering re-renders.
\`\`\``,level:"Intermediate",created_at:"2025-02-24T17:24:28.303995Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"57fb6735-7d04-4906-a93c-b11625a2a277",question:"What is server-side rendering (SSR) in React, and how does it differ from client-side rendering (CSR)?",answer:`\`\`\`markdown
**Server-Side Rendering (SSR) in React** refers to the process of rendering React components on the server and sending fully rendered HTML to the client. When a user requests a page, the server generates the HTML for that page, which is then sent to the browser. Once the HTML is loaded, React takes over on the client side to make the page interactive by hydrating the components.

**How SSR Differs from Client-Side Rendering (CSR):**

1. **Rendering Location:**
   - **SSR:** Rendering happens on the server before the HTML is sent to the client.
   - **CSR:** Rendering happens entirely on the client after the JavaScript bundle is loaded.

2. **Performance:**
   - **SSR:** Improves the initial load time since the browser receives pre-rendered HTML, which can be displayed immediately.
   - **CSR:** Slower initial load time because the browser must download and execute JavaScript to render the page.

3. **SEO:**
   - **SSR:** Better for SEO as search engine crawlers can easily index the pre-rendered HTML.
   - **CSR:** Less SEO-friendly because search engine crawlers may struggle to index content that requires JavaScript execution.

4. **User Experience:**
   - **SSR:** Provides a faster "time-to-first-paint" as users see content sooner.
   - **CSR:** Users may experience a blank screen or loading spinner until the JavaScript is fully loaded and executed.

5. **Complexity:**
   - **SSR:** Requires additional setup and configuration (e.g., using frameworks like Next.js) and may increase server load.
   - **CSR:** Simpler to implement as rendering is handled entirely on the client side.

**Use Cases:**
- **SSR:** Ideal for applications where SEO and fast initial load times are critical, such as blogs, e-commerce sites, and marketing pages.
- **CSR:** Suitable for highly interactive applications where SEO is less important, such as dashboards or single-page applications (SPAs).

React frameworks like **Next.js** provide built-in support for SSR, making it easier to implement.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304007Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"6c8853c2-b15c-4c01-baed-7636f7cefd08",question:"What is Next.js, and how does it enhance React applications?",answer:`\`\`\`markdown
Next.js is a React-based framework that enables developers to build server-rendered and statically generated web applications with ease. It enhances React applications by providing several powerful features out of the box, such as:

1. **Server-Side Rendering (SSR):** Next.js allows pages to be rendered on the server, improving performance and SEO by delivering fully rendered HTML to the client.

2. **Static Site Generation (SSG):** It supports pre-rendering pages at build time, which results in faster load times and better performance for static content.

3. **API Routes:** Next.js provides a way to create serverless API endpoints directly within the application, eliminating the need for a separate backend.

4. **File-Based Routing:** It uses a file-based routing system, where the file structure in the \`pages\` directory automatically maps to application routes, simplifying navigation setup.

5. **Automatic Code Splitting:** Next.js automatically splits the code for each page, ensuring that only the necessary JavaScript is loaded for a given page, improving performance.

6. **Built-in CSS and Sass Support:** It supports importing CSS and Sass files directly, as well as CSS-in-JS solutions like styled-components.

7. **Image Optimization:** Next.js includes an optimized image component (\`next/image\`) that automatically handles resizing, lazy loading, and format selection for better performance.

8. **Incremental Static Regeneration (ISR):** It allows developers to update static content without rebuilding the entire site, enabling dynamic updates for static pages.

9. **TypeScript Support:** Next.js has built-in support for TypeScript, making it easier to build type-safe applications.

10. **Fast Refresh:** It provides an enhanced development experience with fast refresh, allowing developers to see changes instantly without losing the application state.

By combining these features, Next.js simplifies the development of modern web applications, improves performance, and enhances the overall developer experience.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304020Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"474ac2bd-1944-45df-8bea-302a826e14cc",question:"What is the purpose of the useReducer hook in React?",answer:`\`\`\`markdown
The \`useReducer\` hook in React is used for managing complex state logic in functional components. It is an alternative to the \`useState\` hook and is particularly useful when the state depends on previous state values or when the state logic involves multiple sub-values. The \`useReducer\` hook is based on the concept of reducers, similar to how state is managed in Redux.

### Purpose of \`useReducer\`
1. **Complex State Management**: It helps manage state transitions that involve multiple actions or complex updates.
2. **Improved Readability**: By centralizing state logic in a reducer function, it makes the code more predictable and easier to understand.
3. **Scalability**: It is more scalable than \`useState\` for applications with intricate state transitions.
4. **Predictable State Updates**: Since state updates are handled by a pure reducer function, it ensures predictable state changes.

### Syntax
\`\`\`javascript
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

- \`reducer\`: A function that takes the current state and an action, and returns the new state.
- \`initialState\`: The initial value of the state.
- \`state\`: The current state value.
- \`dispatch\`: A function to dispatch actions to the reducer.

### Example
\`\`\`javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

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

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
\`\`\`

### Key Benefits
- **Centralized State Logic**: All state transitions are handled in a single reducer function.
- **Better for Complex Scenarios**: Ideal for components with multiple state variables or intricate update logic.
- **Consistency**: Ensures consistent state updates by using a pure function.

In summary, \`useReducer\` is a powerful hook for managing state in React when \`useState\` becomes insufficient due to the complexity of the state logic.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304107Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"d9149e13-640c-447c-850c-0d8db41f32ba",question:"What is code splitting in React, and why is it important?",answer:`\`\`\`markdown
### What is Code Splitting in React, and Why is it Important?

**Code splitting** in React is a technique used to optimize the performance of an application by breaking down the application's codebase into smaller, more manageable chunks. Instead of loading the entire application code at once, code splitting allows you to load only the parts of the code that are needed at a specific time. This is typically achieved using tools like **Webpack** or **Vite**, and features like **React.lazy** and **dynamic imports**.

#### How Code Splitting Works
React supports code splitting through:
1. **Dynamic Imports**: Using \`import()\` to load modules dynamically.
2. **React.lazy**: A built-in function to lazily load React components.
3. **React Suspense**: Works in conjunction with \`React.lazy\` to handle loading states.

For example:
\`\`\`javascript
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

#### Why is Code Splitting Important?
1. **Improved Performance**: By loading only the necessary code, the initial load time of the application is reduced, leading to faster page rendering.
2. **Better User Experience**: Users can interact with the application sooner, as they don’t need to wait for the entire codebase to load.
3. **Efficient Resource Usage**: Code splitting ensures that resources like bandwidth and memory are used more efficiently.
4. **Scalability**: As applications grow larger, code splitting helps manage complexity and maintain performance.

In summary, code splitting is a critical optimization technique in React applications, enabling faster load times, better performance, and an overall improved user experience.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304032Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"2d35046d-c849-4eea-af60-a65292938686",question:"What is the difference between useCallback and useMemo?",answer:"```markdown\n### Difference Between `useCallback` and `useMemo` in React\n\nBoth `useCallback` and `useMemo` are React hooks used for performance optimization by memoizing values or functions to prevent unnecessary re-computations or re-creations. However, they serve different purposes:\n\n#### 1. **`useCallback`**\n   - **Purpose**: Memoizes a function.\n   - **Use Case**: Use `useCallback` when you want to prevent a function from being re-created on every render unless its dependencies change.\n   - **Syntax**:\n     ```javascript\n     const memoizedCallback = useCallback(() => {\n       // Function logic\n     }, [dependencies]);\n     ```\n   - **Example**:\n     ```javascript\n     const handleClick = useCallback(() => {\n       console.log('Button clicked');\n     }, []);\n     ```\n     Here, `handleClick` will remain the same across renders unless the dependencies change.\n\n#### 2. **`useMemo`**\n   - **Purpose**: Memoizes a computed value.\n   - **Use Case**: Use `useMemo` when you want to avoid re-computing an expensive value unless its dependencies change.\n   - **Syntax**:\n     ```javascript\n     const memoizedValue = useMemo(() => {\n       return computeExpensiveValue();\n     }, [dependencies]);\n     ```\n   - **Example**:\n     ```javascript\n     const expensiveCalculation = useMemo(() => {\n       return someHeavyComputation(input);\n     }, [input]);\n     ```\n     Here, `expensiveCalculation` will only be recomputed if `input` changes.\n\n#### Key Differences:\n| Aspect               | `useCallback`                          | `useMemo`                              |\n|----------------------|-----------------------------------------|----------------------------------------|\n| **Purpose**          | Memoizes a function                    | Memoizes a computed value              |\n| **Return Value**     | Returns a memoized function            | Returns a memoized value               |\n| **Use Case**         | Prevents re-creation of functions       | Prevents re-computation of expensive values |\n| **Example**          | `useCallback(() => {}, [deps])`        | `useMemo(() => compute(), [deps])`     |\n\n#### Summary:\n- Use `useCallback` for memoizing functions to avoid unnecessary re-creations.\n- Use `useMemo` for memoizing expensive computations to avoid unnecessary recalculations.\nBoth hooks help optimize performance, but their use depends on whether you're dealing with a function or a computed value.\n```",level:"Advanced",created_at:"2025-02-24T17:24:28.304044Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"634e4752-20d6-4af6-8ab9-22420501da34",question:"What are custom hooks in React, and how do you create one?",answer:`\`\`\`markdown
### Custom Hooks in React

Custom hooks in React are JavaScript functions that allow you to encapsulate and reuse stateful logic across multiple components. They enable developers to extract component logic into reusable functions, making the code cleaner, more modular, and easier to maintain. Custom hooks leverage React's built-in hooks (like \`useState\`, \`useEffect\`, etc.) and follow the naming convention of starting with the word \`use\`.

#### Why Use Custom Hooks?
- **Reusability**: Share logic between components without duplicating code.
- **Abstraction**: Encapsulate complex logic, keeping components focused on rendering.
- **Readability**: Simplify components by moving logic into separate hooks.

#### How to Create a Custom Hook
To create a custom hook:
1. Define a function that starts with \`use\`.
2. Use React's built-in hooks inside this function to implement the desired logic.
3. Return any values or functions that the consuming component will need.

#### Example: Creating a Custom Hook
Below is an example of a custom hook called \`useFetch\` that fetches data from an API.

\`\`\`javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
\`\`\`

#### Using the Custom Hook
You can use the \`useFetch\` hook in a component like this:

\`\`\`javascript
import React from 'react';
import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
\`\`\`

#### Key Points
- Custom hooks are just functions but must follow React's rules of hooks (e.g., only call hooks at the top level and in React functions).
- They allow you to keep your components clean and focused on UI, while the logic resides in the hook.
- Custom hooks can accept parameters and return values, making them highly flexible and reusable.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304057Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"f5ee1e63-a87f-4ec9-92a6-070f6e96b330",question:"What is React Fiber, and how does it improve React's performance?",answer:`\`\`\`markdown
### What is React Fiber, and how does it improve React's performance?

**React Fiber** is the reimplementation of React's core algorithm, introduced in React 16. It is a reconciliation engine designed to enable incremental rendering of the virtual DOM. React Fiber's primary goal is to improve the rendering performance of React applications, especially for complex UIs, by making the rendering process more flexible and efficient.

#### Key Features of React Fiber:
1. **Incremental Rendering (Time-Slicing):**
   React Fiber breaks the rendering work into smaller units of work called "fibers." This allows React to pause and resume rendering tasks, ensuring that high-priority updates (like user interactions) are handled promptly without blocking the main thread.

2. **Prioritization of Updates:**
   React Fiber assigns priority levels to updates. For example, user interactions and animations are treated as high-priority tasks, while less critical updates (like data fetching) are given lower priority. This ensures a smoother user experience.

3. **Concurrency:**
   React Fiber introduces a concurrent rendering mode, allowing React to work on multiple tasks simultaneously. This makes it possible to handle complex updates without freezing the UI.

4. **Better Error Handling:**
   React Fiber improves error boundaries, making it easier to catch and handle errors during rendering without crashing the entire application.

5. **Improved Scheduling:**
   React Fiber uses a scheduler to manage the execution of rendering tasks. This scheduler ensures that tasks are executed in the correct order based on their priority and available resources.

#### How React Fiber Improves Performance:
1. **Non-blocking Rendering:**
   By breaking rendering into smaller chunks and allowing interruptions, React Fiber ensures that the UI remains responsive even during heavy updates.

2. **Efficient Reconciliation:**
   React Fiber optimizes the process of comparing the virtual DOM with the real DOM, reducing unnecessary updates and improving rendering efficiency.

3. **Smooth User Experience:**
   With time-slicing and prioritization, React Fiber ensures that high-priority tasks like animations and user inputs are handled immediately, preventing lag or jank.

4. **Support for Concurrent Features:**
   React Fiber lays the foundation for advanced features like Suspense and Concurrent Mode, which further enhance performance and developer experience.

In summary, React Fiber is a significant architectural improvement that makes React more performant, flexible, and capable of handling modern application requirements.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304069Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"9551fe10-84d8-466e-aab0-3563fae6075d",question:"What is the difference between shallow rendering and deep rendering in React testing?",answer:"```markdown\nIn React testing, the difference between shallow rendering and deep rendering lies in the depth of component rendering and the level of child component interaction:\n\n### Shallow Rendering\n- **Definition**: Shallow rendering renders only the component being tested, without rendering its child components.\n- **Purpose**: It is used to test the component in isolation, ensuring that its logic and rendering work as expected without being affected by its children.\n- **Tool**: Commonly performed using `shallow` from the `enzyme` library.\n- **Use Case**: Ideal for unit testing when you want to focus solely on the behavior of a single component.\n- **Example**: If a component `<Parent />` renders `<Child />`, shallow rendering will only render `<Parent />` and not `<Child />`.\n\n### Deep Rendering (Full Rendering)\n- **Definition**: Deep rendering (or full rendering) renders the component along with all its child components, creating a full DOM tree.\n- **Purpose**: It is used to test the integration between a component and its children, ensuring that the entire component hierarchy works as expected.\n- **Tool**: Commonly performed using `mount` from the `enzyme` library or `render` from `@testing-library/react`.\n- **Use Case**: Suitable for integration testing or when you need to test the interaction between parent and child components.\n- **Example**: If a component `<Parent />` renders `<Child />`, deep rendering will render both `<Parent />` and `<Child />`.\n\n### Key Differences\n| Aspect                 | Shallow Rendering                | Deep Rendering                  |\n|------------------------|-----------------------------------|----------------------------------|\n| **Depth**             | Renders only the parent component | Renders the entire component tree |\n| **Child Components**  | Not rendered                     | Fully rendered                  |\n| **Performance**       | Faster, as it avoids rendering child components | Slower, as it renders the full DOM tree |\n| **Testing Scope**     | Unit testing                     | Integration testing             |\n\n### Summary\nShallow rendering is best for isolating and testing a single component, while deep rendering is better for testing the interaction between components in a full DOM environment.\n```",level:"Advanced",created_at:"2025-02-24T17:24:28.304082Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"04bce3df-cb3d-474b-95e5-92ed25089b55",question:"What are the best practices for optimizing React application performance?",answer:`\`\`\`markdown
### Best Practices for Optimizing React Application Performance

1. **Use React.memo for Component Memoization**  
   - Wrap functional components with \`React.memo\` to prevent unnecessary re-renders when props remain unchanged.

2. **Implement Code Splitting**  
   - Use dynamic \`import()\` and tools like React's \`React.lazy\` and \`Suspense\` to split code and load components only when needed.

3. **Use React's Profiler**  
   - Utilize the React Profiler to identify performance bottlenecks and optimize rendering behavior.

4. **Avoid Inline Functions and Objects**  
   - Define functions and objects outside the render method to prevent re-creation on every render.

5. **Optimize State Management**  
   - Lift state up only when necessary and avoid overusing global state. Use libraries like Redux Toolkit or Zustand for efficient state management.

6. **Use useCallback and useMemo Hooks**  
   - Use \`useCallback\` to memoize functions and \`useMemo\` to memoize expensive computations, reducing unnecessary re-renders.

7. **Lazy Load Images and Components**  
   - Use libraries like \`react-lazyload\` or native browser features to lazy load images and components.

8. **Avoid Reconciliation Issues**  
   - Use \`key\` props correctly in lists to help React identify which items have changed, been added, or removed.

9. **Minimize Re-renders with shouldComponentUpdate or React.PureComponent**  
   - For class components, override \`shouldComponentUpdate\` or extend \`React.PureComponent\` to prevent unnecessary updates.

10. **Debounce or Throttle Expensive Operations**  
    - Use debounce or throttle techniques for events like scrolling, resizing, or input changes to reduce the frequency of updates.

11. **Use Efficient CSS-in-JS Libraries**  
    - Use libraries like \`emotion\` or \`styled-components\` that optimize styles and avoid unnecessary DOM updates.

12. **Bundle Optimization**  
    - Use tools like Webpack or Vite to optimize bundle size by removing unused code (tree-shaking) and compressing assets.

13. **Server-Side Rendering (SSR) and Static Site Generation (SSG)**  
    - Use frameworks like Next.js to pre-render pages and improve initial load times.

14. **Avoid Prop Drilling**  
    - Use Context API or state management libraries to avoid passing props deeply through the component tree.

15. **Optimize Third-Party Libraries**  
    - Audit and replace heavy or unnecessary third-party libraries with lighter alternatives.

16. **Use Concurrent Features**  
    - Leverage React's concurrent features like \`startTransition\` to prioritize rendering tasks and improve responsiveness.

17. **Monitor and Optimize Network Requests**  
    - Use tools like \`axios\` interceptors or caching strategies to reduce redundant API calls.

18. **Keep Component Hierarchy Flat**  
    - Avoid deeply nested components to reduce the complexity of rendering and state updates.

19. **Use Immutable Data Structures**  
    - Ensure state updates are immutable to allow React to detect changes efficiently.

20. **Enable Production Mode**  
    - Ensure the application is running in production mode by setting \`NODE_ENV\` to \`production\` to enable React's optimizations.

By following these best practices, you can significantly improve the performance of your React applications.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304119Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"9dae84c4-1cce-42a6-aa50-78ebdc140b1a",question:"What is the difference between PureComponent and React.memo?",answer:"```markdown\n### Difference Between `PureComponent` and `React.memo` in React\n\n#### 1. **Definition**:\n   - **`PureComponent`**: A class-based component that automatically implements a shallow comparison of props and state in its `shouldComponentUpdate` lifecycle method. It prevents unnecessary re-renders if the props and state have not changed.\n   - **`React.memo`**: A higher-order component (HOC) used to optimize functional components. It wraps a functional component and performs a shallow comparison of its props to prevent unnecessary re-renders.\n\n#### 2. **Usage**:\n   - **`PureComponent`**: Used with class components.\n     ```javascript\n     import React, { PureComponent } from 'react';\n\n     class MyComponent extends PureComponent {\n       render() {\n         return <div>{this.props.value}</div>;\n       }\n     }\n     ```\n   - **`React.memo`**: Used with functional components.\n     ```javascript\n     import React from 'react';\n\n     const MyComponent = React.memo((props) => {\n       return <div>{props.value}</div>;\n     });\n     ```\n\n#### 3. **State Management**:\n   - **`PureComponent`**: Optimizes both `props` and `state` by performing a shallow comparison.\n   - **`React.memo`**: Optimizes only `props` by default. However, you can provide a custom comparison function to handle more complex scenarios.\n\n     Example with a custom comparison function:\n     ```javascript\n     const MyComponent = React.memo((props) => {\n       return <div>{props.value}</div>;\n     }, (prevProps, nextProps) => {\n       return prevProps.value === nextProps.value;\n     });\n     ```\n\n#### 4. **Performance Considerations**:\n   - **`PureComponent`**: May not be as performant as `React.memo` because class components inherently have more overhead compared to functional components.\n   - **`React.memo`**: More lightweight and efficient when used with functional components, especially in modern React where functional components are preferred.\n\n#### 5. **React Hooks Compatibility**:\n   - **`PureComponent`**: Does not work with React Hooks since it is used with class components.\n   - **`React.memo`**: Fully compatible with React Hooks, making it the preferred choice for optimizing functional components.\n\n#### Summary Table:\n\n| Feature                | `PureComponent`            | `React.memo`              |\n|------------------------|----------------------------|---------------------------|\n| Component Type         | Class-based               | Functional                |\n| Optimization Scope     | Props and State           | Props (customizable)      |\n| Custom Comparison      | Not Supported             | Supported                 |\n| Hooks Compatibility    | Not Compatible            | Fully Compatible          |\n| Performance Overhead   | Higher (class overhead)   | Lower (functional)        |\n\nIn modern React development, `React.memo` is generally preferred due to the shift towards functional components and the use of hooks.\n```",level:"Advanced",created_at:"2025-02-24T17:24:28.304131Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"a03b62f7-c8a0-4b2d-97ea-99154a81aa9f",question:"How does React handle reconciliation?",answer:`\`\`\`markdown
React handles reconciliation through a process that efficiently updates the DOM to match the desired application state. The key aspects of React's reconciliation process are:

1. **Virtual DOM**: React maintains a lightweight copy of the real DOM called the Virtual DOM. When the state or props of a component change, React creates a new Virtual DOM tree to represent the updated UI.

2. **Diffing Algorithm**: React uses a highly optimized diffing algorithm to compare the new Virtual DOM tree with the previous one. This algorithm identifies the minimal set of changes (additions, updates, or deletions) required to update the real DOM.

3. **Key Prop for Lists**: When rendering lists of elements, React uses the \`key\` prop to uniquely identify elements. This helps React efficiently determine which items have changed, been added, or been removed, reducing unnecessary re-renders.

4. **Component Re-rendering**: React determines whether a component needs to re-render based on changes to its props or state. If neither changes, React skips the re-rendering process for that component.

5. **Batching Updates**: React batches multiple state updates and DOM changes together to improve performance. This reduces the number of re-renders and DOM manipulations.

6. **Fiber Architecture**: React's Fiber architecture enhances reconciliation by breaking rendering work into smaller units. This allows React to pause and resume work, prioritizing updates based on urgency (e.g., user interactions are prioritized over background updates).

By leveraging these techniques, React ensures that updates to the UI are performed efficiently, minimizing the performance impact of DOM manipulations.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304145Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"d13abccb-b4ff-4520-91c9-3249cd3f46f9",question:"What are the limitations of React?",answer:`\`\`\`markdown
### Limitations of React

1. **Steep Learning Curve**: 
   - React's ecosystem is vast, and mastering concepts like JSX, state management, hooks, and lifecycle methods can be challenging for beginners.

2. **Poor Documentation for Ecosystem Tools**: 
   - While React itself has excellent documentation, third-party libraries and tools in the React ecosystem often lack comprehensive documentation, making integration and troubleshooting harder.

3. **JSX Complexity**: 
   - JSX syntax can be confusing for new developers, especially those unfamiliar with JavaScript or coming from a non-JavaScript background.

4. **High Pace of Development**: 
   - React and its ecosystem evolve rapidly, making it difficult for developers to keep up with the latest updates, best practices, and breaking changes.

5. **Dependency on Third-Party Libraries**: 
   - React focuses solely on the UI layer, requiring developers to rely on external libraries for routing, state management, and other functionalities. This can lead to compatibility issues and increased complexity.

6. **Performance Issues with Large Applications**: 
   - Without proper optimization techniques (e.g., memoization, lazy loading), React applications can suffer from performance bottlenecks, especially in large-scale applications with complex state management.

7. **SEO Challenges**: 
   - Although React can be optimized for SEO using tools like Next.js or server-side rendering (SSR), it requires additional configuration and effort compared to traditional server-rendered frameworks.

8. **Boilerplate Code**: 
   - Setting up a React project often involves writing a significant amount of boilerplate code, especially when integrating state management libraries like Redux.

9. **Overhead of Virtual DOM**: 
   - While the Virtual DOM improves performance in many cases, it can introduce unnecessary overhead for simple or static applications where direct DOM manipulation might be more efficient.

10. **Community Fragmentation**: 
    - The abundance of libraries and tools in the React ecosystem can lead to decision fatigue, as there are often multiple competing solutions for the same problem.

11. **Lack of Built-in Opinionation**: 
    - React is unopinionated, which gives developers flexibility but can also lead to inconsistent codebases and architectural decisions within teams.

12. **Backward Compatibility Issues**: 
    - Although React strives for backward compatibility, breaking changes in major updates can still require significant refactoring in large projects.

React is a powerful library, but understanding its limitations is crucial for making informed decisions about its use in a project.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304158Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"b84689b9-7538-4337-adec-5ff7ac927069",question:"What is the difference between static and dynamic routing in React?",answer:`\`\`\`markdown
### Difference Between Static and Dynamic Routing in React

In React, routing refers to the process of navigating between different components or views. Static and dynamic routing are two approaches to implementing routing in React applications. Here's a comparison:

#### Static Routing
- **Definition**: Static routing involves defining all the routes of the application at compile time. The routes are hardcoded and do not change during the application's lifecycle.
- **Implementation**: Typically implemented using libraries like \`react-router-dom\` where routes are predefined in a configuration or component structure.
- **Flexibility**: Less flexible as routes are fixed and cannot be altered dynamically.
- **Use Case**: Suitable for applications with a fixed set of routes that do not change based on user input or external data.
- **Example**:
  \`\`\`jsx
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
  \`\`\`

#### Dynamic Routing
- **Definition**: Dynamic routing allows routes to be defined or modified at runtime based on user input, API responses, or other dynamic data.
- **Implementation**: Routes can be generated dynamically, often using parameters or data-driven logic.
- **Flexibility**: Highly flexible as routes can adapt to changes in the application's state or external factors.
- **Use Case**: Ideal for applications where routes depend on user actions, such as e-commerce platforms or content management systems.
- **Example**:
  \`\`\`jsx
  import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

  function Product() {
    const { id } = useParams();
    return <h1>Product ID: {id}</h1>;
  }

  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Router>
    );
  }
  \`\`\`

#### Key Differences
| Aspect              | Static Routing                          | Dynamic Routing                         |
|---------------------|-----------------------------------------|-----------------------------------------|
| **Definition**      | Predefined, fixed routes.               | Routes generated or modified at runtime.|
| **Flexibility**     | Limited flexibility.                    | Highly flexible and adaptable.          |
| **Use Case**        | Simple, predictable route structures.   | Complex, data-driven applications.      |
| **Example**         | Hardcoded paths like \`/about\`.          | Dynamic paths like \`/product/:id\`.      |

In summary, static routing is straightforward and suitable for simpler applications, while dynamic routing provides the flexibility needed for more complex, data-driven applications.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304171Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"cdb21d24-b126-4ff1-9518-30cea2be7727",question:"How do you manage side effects in a React application?",answer:`\`\`\`markdown
Managing side effects in a React application can be achieved using several approaches, depending on the complexity and requirements of the application. Here are the most common methods:

### 1. **Using \`useEffect\` Hook**
The \`useEffect\` hook is the primary way to handle side effects in functional components. It allows you to perform operations like data fetching, subscriptions, or manually changing the DOM after rendering.

\`\`\`jsx
import React, { useEffect, useState } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Side effect: Fetching data
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));

    // Cleanup function (optional, e.g., for unsubscribing)
    return () => {
      console.log('Cleanup on unmount or dependency change');
    };
  }, []); // Dependency array: [] means it runs only once on mount

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
\`\`\`

### 2. **Using Custom Hooks**
For reusable side effect logic, you can encapsulate the logic into custom hooks.

\`\`\`jsx
import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [url]);

  return data;
}

function ExampleComponent() {
  const data = useFetchData('https://api.example.com/data');
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
\`\`\`

### 3. **Using Context and Reducers**
For more complex state and side effect management, you can use \`useReducer\` with \`useEffect\` or integrate a global state management library like Redux or Zustand.

\`\`\`jsx
import React, { useReducer, useEffect } from 'react';

const initialState = { data: null, loading: true };

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { ...state, loading: false };
    default:
      return state;
  }
}

function ExampleComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
      .catch(() => dispatch({ type: 'FETCH_ERROR' }));
  }, []);

  return state.loading ? <div>Loading...</div> : <div>{JSON.stringify(state.data)}</div>;
}
\`\`\`

### 4. **Using External Libraries**
For large-scale applications, libraries like Redux (with middleware such as Redux Thunk or Redux Saga) or React Query can be used to manage side effects more effectively.

#### Example with React Query:
\`\`\`bash
npm install @tanstack/react-query
\`\`\`

\`\`\`jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

function fetchData() {
  return fetch('https://api.example.com/data').then(res => res.json());
}

function ExampleComponent() {
  const { data, isLoading, error } = useQuery(['data'], fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return <div>{JSON.stringify(data)}</div>;
}
\`\`\`

### 5. **Server-Side Rendering (SSR)**
For SSR frameworks like Next.js, you can handle side effects during server-side rendering using functions like \`getServerSideProps\` or \`getStaticProps\`.

\`\`\`javascript
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}

function ExampleComponent({ data }) {
  return <div>{JSON.stringify(data)}</div>;
}
\`\`\`

### Key Considerations:
- **Cleanup:** Always clean up side effects (e.g., subscriptions, timers) to avoid memory leaks.
- **Dependencies:** Properly define the dependency array in \`useEffect\` to avoid unnecessary re-renders or missing updates.
- **Error Handling:** Ensure robust error handling for side effects like API calls.
- **Performance:** Avoid running expensive side effects unnecessarily by optimizing dependency arrays or using memoization.

By choosing the right approach based on the application's needs, you can effectively manage side effects in React.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304184Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"0902930f-4628-468e-9737-7381492c5396",question:"What is the difference between hydration and rendering in React?",answer:`\`\`\`markdown
In React, **hydration** and **rendering** are two distinct processes that are used to generate and manage the user interface, particularly in the context of server-side rendering (SSR) and client-side rendering (CSR).

### 1. Rendering
Rendering refers to the process of creating the React component tree and generating the corresponding DOM elements. This can happen in two contexts:
- **Server-Side Rendering (SSR):** React components are rendered to HTML on the server and sent to the client as a fully-formed HTML document.
- **Client-Side Rendering (CSR):** React components are rendered directly in the browser, where JavaScript generates the DOM elements dynamically.

In CSR, rendering happens entirely on the client, while in SSR, the initial rendering happens on the server.

### 2. Hydration
Hydration is a process specific to SSR. When a React application is server-rendered, the server sends a static HTML representation of the app to the client. On the client side, React takes over this static HTML and "hydrates" it by attaching event listeners and making it interactive. During hydration:
- React reconciles the server-rendered HTML with the React component tree.
- React attaches event handlers and initializes the app's state.

Hydration ensures that the server-rendered HTML becomes a fully functional React application on the client side.

### Key Differences
| Aspect               | Rendering                                | Hydration                                |
|----------------------|------------------------------------------|------------------------------------------|
| **Purpose**          | Creates the DOM structure from React components. | Makes the server-rendered HTML interactive. |
| **When it occurs**   | Happens during initial rendering (CSR or SSR). | Happens after SSR, on the client side.   |
| **Input**            | React components.                       | Pre-rendered HTML from the server.       |
| **Output**           | DOM elements.                           | Interactive React app with event handlers. |
| **Use Case**         | Used in both CSR and SSR.               | Specific to SSR.                         |

### Example Workflow
1. **Server-Side Rendering:** The server renders the React app to HTML and sends it to the client.
2. **Hydration:** The client receives the HTML, React reuses the existing DOM structure, and attaches event handlers to make it interactive.

### Why is Hydration Important?
Hydration is crucial for SSR because it allows React to reuse the server-rendered HTML instead of re-rendering the entire app from scratch. This improves performance and ensures a seamless user experience.

\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304211Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"8cdc978b-c1ca-47b9-9754-0eaec2d48cbe",question:"How do you implement authentication in a React application?",answer:`\`\`\`markdown
Implementing authentication in a React application typically involves the following steps:

### 1. **Set Up the Backend for Authentication**
   - Use a backend service (e.g., Node.js, Django, or a third-party service like Firebase or Auth0) to handle user authentication.
   - Implement endpoints for user registration, login, and token generation (e.g., JWT).

### 2. **Install Necessary Libraries**
   Install libraries to manage authentication and HTTP requests:
   \`\`\`bash
   npm install axios react-router-dom
   \`\`\`
   Optionally, you can install libraries like \`jsonwebtoken\` for token decoding or \`react-query\` for data fetching.

### 3. **Create an Authentication Context**
   Use React Context to manage authentication state globally:
   \`\`\`jsx
   import React, { createContext, useState, useEffect } from 'react';

   export const AuthContext = createContext();

   export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);

     const login = (userData) => {
       setUser(userData);
       localStorage.setItem('authToken', userData.token); // Save token
     };

     const logout = () => {
       setUser(null);
       localStorage.removeItem('authToken'); // Clear token
     };

     useEffect(() => {
       const token = localStorage.getItem('authToken');
       if (token) {
         // Optionally validate token or fetch user data
         setUser({ token });
       }
     }, []);

     return (
       <AuthContext.Provider value={{ user, login, logout }}>
         {children}
       </AuthContext.Provider>
     );
   };
   \`\`\`

### 4. **Protect Routes with PrivateRoute**
   Create a higher-order component to protect routes:
   \`\`\`jsx
   import React, { useContext } from 'react';
   import { Navigate } from 'react-router-dom';
   import { AuthContext } from './AuthContext';

   const PrivateRoute = ({ children }) => {
     const { user } = useContext(AuthContext);

     return user ? children : <Navigate to="/login" />;
   };

   export default PrivateRoute;
   \`\`\`

### 5. **Set Up Routing**
   Use \`react-router-dom\` to define public and private routes:
   \`\`\`jsx
   import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import { AuthProvider } from './AuthContext';
   import PrivateRoute from './PrivateRoute';
   import LoginPage from './LoginPage';
   import Dashboard from './Dashboard';

   const App = () => {
     return (
       <AuthProvider>
         <Router>
           <Routes>
             <Route path="/login" element={<LoginPage />} />
             <Route
               path="/dashboard"
               element={
                 <PrivateRoute>
                   <Dashboard />
                 </PrivateRoute>
               }
             />
           </Routes>
         </Router>
       </AuthProvider>
     );
   };

   export default App;
   \`\`\`

### 6. **Handle Login and Logout**
   Create a login form and use the \`AuthContext\` to manage authentication:
   \`\`\`jsx
   import React, { useState, useContext } from 'react';
   import { AuthContext } from './AuthContext';
   import axios from 'axios';

   const LoginPage = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const { login } = useContext(AuthContext);

     const handleLogin = async (e) => {
       e.preventDefault();
       try {
         const response = await axios.post('/api/login', { email, password });
         login(response.data); // Pass user data to context
       } catch (error) {
         console.error('Login failed:', error);
       }
     };

     return (
       <form onSubmit={handleLogin}>
         <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
         <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
         <button type="submit">Login</button>
       </form>
     );
   };

   export default LoginPage;
   \`\`\`

### 7. **Secure API Requests**
   Use an HTTP client like \`axios\` to include the authentication token in API requests:
   \`\`\`jsx
   import axios from 'axios';

   const apiClient = axios.create({
     baseURL: '/api',
   });

   apiClient.interceptors.request.use((config) => {
     const token = localStorage.getItem('authToken');
     if (token) {
       config.headers.Authorization = \`Bearer \${token}\`;
     }
     return config;
   });

   export default apiClient;
   \`\`\`

### 8. **Optional: Token Expiry and Refresh**
   - Decode the JWT token to check its expiry using libraries like \`jsonwebtoken\`.
   - Implement token refresh logic if the backend supports it.

### 9. **Testing and Debugging**
   - Test the authentication flow thoroughly, including edge cases like expired tokens or invalid credentials.
   - Use browser developer tools to inspect network requests and local storage.

By following these steps, you can implement a robust authentication system in your React application.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304224Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"},{id:"3cbf678b-f131-4895-b9cc-cd3bcb207eec",question:"What is the difference between React's useLayoutEffect and useEffect hooks?",answer:`\`\`\`markdown
### Difference Between \`useLayoutEffect\` and \`useEffect\` in React

Both \`useLayoutEffect\` and \`useEffect\` are React hooks used to perform side effects in functional components. However, they differ in when they are executed during the rendering lifecycle.

#### 1. **Execution Timing**
   - **\`useEffect\`:**
     - Runs asynchronously after the browser has painted the screen.
     - It does not block the browser's rendering process.
     - Suitable for non-blocking operations like fetching data, subscribing to events, or updating state based on user interactions.

   - **\`useLayoutEffect\`:**
     - Runs synchronously after React has performed all DOM mutations but **before** the browser paints the screen.
     - It blocks the browser's rendering process until the effect is complete.
     - Suitable for operations that require measuring or manipulating the DOM (e.g., reading layout or applying styles).

#### 2. **Performance Impact**
   - **\`useEffect\`:**
     - Since it runs after the paint phase, it does not delay the rendering of the UI.
     - It is more performant for side effects that do not require immediate DOM interaction.

   - **\`useLayoutEffect\`:**
     - Since it runs before the paint phase, it can delay rendering if the effect is computationally expensive.
     - Should be used sparingly and only when necessary to avoid performance bottlenecks.

#### 3. **Use Cases**
   - **\`useEffect\`:**
     - Fetching data from an API.
     - Subscribing to or unsubscribing from events.
     - Logging or debugging information.

   - **\`useLayoutEffect\`:**
     - Measuring DOM elements (e.g., getting dimensions or positions).
     - Applying styles or animations that depend on DOM measurements.
     - Synchronizing the DOM with external libraries that manipulate the DOM directly.

#### Example
\`\`\`jsx
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function Example() {
  const [size, setSize] = useState(0);
  const ref = useRef();

  // useLayoutEffect: Runs before the browser paints
  useLayoutEffect(() => {
    const width = ref.current.offsetWidth;
    setSize(width);
  }, []);

  // useEffect: Runs after the browser paints
  useEffect(() => {
    console.log('Component rendered');
  }, []);

  return (
    <div ref={ref} style={{ width: '200px', height: '100px', background: 'lightblue' }}>
      Width: {size}px
    </div>
  );
}
\`\`\`

#### Key Takeaway
- Use \`useEffect\` for most side effects as it is non-blocking and better for performance.
- Use \`useLayoutEffect\` only when you need to perform DOM measurements or manipulations that must happen before the browser paints the screen.
\`\`\``,level:"Advanced",created_at:"2025-02-24T17:24:28.304236Z",topic:"7b099c2e-e1e2-494d-bfb2-4bc33b7d0f28"}];export{e as default};
