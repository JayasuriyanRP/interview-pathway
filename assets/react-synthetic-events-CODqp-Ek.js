const e=[{id:"c4fe3d9c-c403-4950-8f52-07869ebd8eaf",question:"What is a synthetic event in React?",answer:`\`\`\`markdown A **synthetic event** in React is a wrapper around the browser’s native event system. React creates its own event system to ensure events work consistently across all browsers. When you handle events in React (like onClick, onChange, etc.), you’re working with these synthetic events, not the raw browser events.

**Key Points:**
- Synthetic events normalize events so they have the same properties across different browsers.
- They wrap the native browser event, providing the same interface.
- They are part of React’s event delegation system, which improves performance.

**Example:**

\`\`\`jsx
function MyButton() {
  function handleClick(event) {
    // event is a SyntheticEvent
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
\`\`\`

In this example, the event passed to handleClick is a synthetic event, not the native browser event.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225313Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"7f07d65e-26a6-4496-96e7-48bbeefd1769",question:"How do you persist a synthetic event for asynchronous use?",answer:`\`\`\`markdown To persist a React synthetic event for asynchronous use, you need to call the persist() method on the event object. By default, React reuses (pools) synthetic events for performance reasons, which means the event properties may be nullified after the event callback finishes. Calling persist() removes the event from the pool, allowing you to access its properties asynchronously.

**Example:**

\`\`\`jsx
function MyComponent() {
  function handleClick(event) {
    event.persist(); // Persist the event for async use

    setTimeout(() => {
      // You can safely access event properties here
      alert('Button clicked: ' + event.type);
    }, 1000);
  }

  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`

**Summary:**
- Use event.persist() to retain the event object for asynchronous operations.
- Without persist(), event properties may be cleared after the synchronous event handler finishes.`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225626Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"bd920c91-c152-4df6-b4f5-f382496b6d51",question:"What are some common synthetic event types provided by React?",answer:`\`\`\`markdown Some common synthetic event types provided by React include:

- **Mouse Events**
  - onClick
  - onDoubleClick
  - onMouseEnter
  - onMouseLeave
  - onMouseDown
  - onMouseUp
  - onMouseMove

- **Keyboard Events**
  - onKeyDown
  - onKeyUp
  - onKeyPress

- **Form Events**
  - onChange
  - onInput
  - onSubmit
  - onFocus
  - onBlur

- **Touch Events**
  - onTouchStart
  - onTouchMove
  - onTouchEnd

- **Clipboard Events**
  - onCopy
  - onCut
  - onPaste

React normalizes these events so they work consistently across different browsers. You can use them just like regular DOM events, but with camelCase naming.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225645Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"9480a7df-a937-49c8-84fd-142d7eec0b58",question:"How do you handle keyboard events in React?",answer:`\`\`\`markdown You can handle keyboard events in React by attaching event handlers like onKeyDown, onKeyUp, or onKeyPress to your elements. These handlers receive a SyntheticEvent object, which contains information about the keyboard event.

Here's a simple example:

\`\`\`jsx
import React from 'react';

function MyComponent() {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('Enter key pressed!');
    }
  };

  return (
    <input
      type="text"
      onKeyDown={handleKeyDown}
      placeholder="Press Enter"
    />
  );
}

export default MyComponent;
\`\`\`

**Key points:**
- Use event handlers like \`onKeyDown\`, \`onKeyUp\`, or \`onKeyPress\`.
- The event object provides properties such as \`event.key\` and \`event.code\` to identify which key was pressed.
- Attach the handler to the element you want to listen for keyboard events on (e.g., \`<input>\`, \`<div>\`, etc.).`,level:"Beginner",created_at:"2025-05-06T15:54:16.225661Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"b985713e-f399-4ffa-abcd-257fd154d680",question:"How do you handle form submission events in React?",answer:`\`\`\`markdown To handle form submission events in React, you typically use the onSubmit event on the <form> element. You define a handler function that receives the event object and call event.preventDefault() to prevent the default browser behavior (which would reload the page). Here’s a simple example:

\`\`\`jsx
import React, { useState } from 'react';

function MyForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    alert('Form submitted with value: ' + inputValue);
    // You can add more logic here, such as sending data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
\`\`\`

**Key points:**
- Attach your handler to the form’s \`onSubmit\` prop.
- Use \`event.preventDefault()\` to stop the default form submission.
- Access form data via state or refs as needed.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225676Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"75d28640-500a-4099-9a09-e235ed4aaf57",question:"How does React's synthetic event system differ from native DOM events?",answer:`\`\`\`markdown React’s synthetic event system wraps native DOM events to provide a consistent and cross-browser interface. Here’s how it differs from native DOM events:

- **Cross-browser compatibility:** Synthetic events normalize event properties and behavior, so you don’t have to worry about browser inconsistencies.
- **Event pooling:** React reuses SyntheticEvent objects for performance, which means event properties may be nullified after the event callback finishes. (Note: As of React 17+, event pooling is deprecated.)
- **Consistent API:** Synthetic events have the same interface as native events, but work identically across all browsers.
- **Delegation:** React attaches a single event listener at the root of the DOM (using event delegation), rather than adding listeners directly to each element. This improves performance and memory usage.

**Example:**

\`\`\`jsx
function MyButton() {
  function handleClick(event) {
    // event is a SyntheticEvent
    console.log(event.type); // 'click'
  }
  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`

**Summary Table:**

| Feature                | Native DOM Event         | React Synthetic Event      |
|------------------------|-------------------------|---------------------------|
| Browser consistency    | Varies                  | Consistent                |
| Event pooling          | No                      | Yes (pre-React 17)        |
| API                    | Varies by browser       | Standardized              |
| Event delegation       | Manual                  | Automatic (by React)      |

**In short:** React’s synthetic events make event handling easier and more reliable across different browsers by abstracting away inconsistencies and optimizing performance.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225384Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"980c2608-bc5b-49bb-8dac-b3ae80284be8",question:"How do you attach an event handler to a button in React?",answer:`\`\`\`markdown
In React, you attach an event handler to a button by passing a function to the button's event prop, such as onClick. Here's an example:

\`\`\`jsx
import React from 'react';

function MyComponent() {
  function handleClick() {
    alert('Button was clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default MyComponent;
\`\`\`

In this example, the handleClick function will run whenever the button is clicked.
\`\`\`
`,level:"Beginner",created_at:"2025-05-06T15:54:16.225404Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"b9bbfe3e-a24a-44dd-881b-14cfd43e252c",question:"What is the purpose of the 'onClick' prop in React components?",answer:`\`\`\`markdown The onClick prop in React is used to specify a function that should be called when a component is clicked. It allows you to handle click events in your React components, similar to how you would use addEventListener in plain JavaScript, but in a more declarative way.

**Example:**

\`\`\`jsx
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
\`\`\`

**Purpose:**  
The onClick prop lets you respond to user interactions (like mouse clicks) and perform actions such as updating state, showing messages, or triggering other functions in your application.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225421Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"d1ca8bb1-4425-4504-89dd-5f866984dcc3",question:"How do you prevent the default behavior of an event in React?",answer:`\`\`\`markdown To prevent the default behavior of an event in React, you use the preventDefault() method on the event object. Here’s an example with a form submission:

\`\`\`jsx
function MyForm() {
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission
    // Your custom logic here
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

**Explanation:**  
When the form is submitted, handleSubmit is called. Calling event.preventDefault() stops the browser from performing the default action (like reloading the page). This lets you handle the event with your own logic.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225441Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"2b307f26-ea1e-43ee-a2da-0b8ebb7d4d07",question:"How do you stop event propagation in React?",answer:`\`\`\`markdown To stop event propagation in React, you can call the stopPropagation() method on the event object inside your event handler. Here’s an example:

\`\`\`jsx
function MyComponent() {
  function handleClick(event) {
    event.stopPropagation();
    // Your logic here
  }

  return (
    <div onClick={() => alert('Parent clicked!')}>
      <button onClick={handleClick}>
        Click me (event will not bubble to parent)
      </button>
    </div>
  );
}
\`\`\`

**Explanation:**
- event.stopPropagation() prevents the event from bubbling up to parent elements.
- In the example above, clicking the button will not trigger the parent div's onClick handler.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225462Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"be1ead5a-5839-4fd3-9913-5c0cedc80b98",question:"What is the difference between 'event.preventDefault()' and 'event.stopPropagation()'?",answer:`\`\`\`markdown
**event.preventDefault()** and **event.stopPropagation()** are two different methods used in React (and plain JavaScript) to control how events behave:

- **event.preventDefault()**  
  This method prevents the default action that belongs to the event from occurring.  
  *Example:* If used in a form's \`onSubmit\` handler, it prevents the form from submitting and reloading the page.

- **event.stopPropagation()**  
  This method stops the event from bubbling up (or propagating) to parent elements.  
  *Example:* If you have a click event on a button inside a div, and both have click handlers, calling \`stopPropagation()\` in the button's handler will prevent the div's handler from firing.

**Summary Table:**

| Method                  | What it does                                    |
|-------------------------|-------------------------------------------------|
| \`event.preventDefault()\`| Stops default browser behavior                  |
| \`event.stopPropagation()\`| Stops event from bubbling to parent elements   |
\`\`\`
`,level:"Beginner",created_at:"2025-05-06T15:54:16.225487Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"72716e2f-c400-4bad-bd31-7573d853e376",question:"Why should you avoid using inline arrow functions in JSX event handlers?",answer:`\`\`\`markdown **Answer:**

Using inline arrow functions in JSX event handlers (e.g., \`<button onClick={() => handleClick()}>Click</button>\`) should generally be avoided for the following reasons:

1. **Performance Issues**:  
   Every time a component re-renders, a new function instance is created for each inline arrow function. This can lead to unnecessary re-renders of child components, especially if those handlers are passed as props, and can negatively impact performance in large or frequently updating components.

2. **Component Reconciliation**:  
   React uses reference equality to determine if props have changed. If you use an inline arrow function, the handler prop will always be a new function, causing React to think the prop has changed and potentially triggering unnecessary updates.

3. **Harder to Test and Debug**:  
   Inline functions can make it more difficult to test and debug your code, as they are anonymous and do not have a name in stack traces.

**Best Practice:**  
Define your event handler as a class method or a function outside of the render method, and reference it directly in your JSX:

\`\`\`jsx
function MyComponent() {
  const handleClick = () => {
    // handle click
  };

  return <button onClick={handleClick}>Click</button>;
}
\`\`\`

This approach improves performance, makes your code more readable, and avoids unnecessary re-renders.`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225505Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"1cb7e27d-6d78-454e-b249-eb4df3c3b929",question:"How does React handle event delegation?",answer:`\`\`\`markdown React handles event delegation by attaching a single event listener at the root of the DOM (typically the document or the root DOM node). Instead of attaching event listeners directly to each individual DOM element, React uses a centralized event system to manage all events.

### How It Works

- **Single Listener:** When you add an event handler (like \`onClick\`) to a React component, React does not attach that handler directly to the DOM node. Instead, it registers the handler internally.
- **Event Pooling:** React creates a synthetic event that wraps the native browser event, providing a consistent API across browsers.
- **Event Bubbling:** When an event occurs, it bubbles up to the root, where React's single event listener catches it.
- **Dispatching:** React determines which component(s) should receive the event based on the event's target and the registered handlers, then calls the appropriate handler(s).

### Benefits

- **Performance:** Fewer event listeners mean less memory usage and better performance, especially in large applications.
- **Consistency:** Synthetic events normalize event properties and behavior across different browsers.
- **Cleanup:** React can efficiently manage and clean up event listeners when components unmount.

### Example

\`\`\`jsx
function MyButton() {
  function handleClick(event) {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`

Even though it looks like the event handler is attached to the \`<button>\`, React manages it internally and uses event delegation to handle the click.

---

**In summary:**  
React uses event delegation by attaching a single event listener at the root and dispatching events to components using its synthetic event system, improving performance and consistency.`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225523Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"70061a65-8270-4102-b4e1-fbf691f0cced",question:"What are the benefits of using synthetic events in React?",answer:`\`\`\`markdown **Benefits of Using Synthetic Events in React**

React’s Synthetic Events offer several advantages over directly handling native browser events:

1. **Cross-Browser Compatibility**  
   Synthetic events normalize event properties and behavior across different browsers, ensuring consistent event handling regardless of the user’s environment.

2. **Performance Optimization**  
   React uses event delegation by attaching a single event listener at the root of the DOM. This reduces memory usage and improves performance, especially in applications with many interactive elements.

3. **Consistent API**  
   Synthetic events provide a consistent interface that matches the W3C spec, making it easier to work with events without worrying about browser inconsistencies.

4. **Automatic Cleanup**  
   React manages the lifecycle of event listeners, automatically cleaning them up when components unmount, which helps prevent memory leaks.

5. **Integration with React’s Lifecycle**  
   Synthetic events are integrated with React’s batching and update mechanisms, ensuring that state updates and re-renders happen efficiently and predictably.

**Example:**

\`\`\`jsx
function MyButton() {
  function handleClick(event) {
    // event is a SyntheticEvent
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
\`\`\`

**Summary Table**

| Benefit                   | Description                                                      |
|---------------------------|------------------------------------------------------------------|
| Cross-browser support     | Normalizes events for all browsers                               |
| Performance               | Uses event delegation for efficiency                             |
| Consistent API            | Uniform event properties and methods                             |
| Automatic cleanup         | Prevents memory leaks by managing listeners                      |
| React integration         | Works seamlessly with React’s update and lifecycle system        |`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225542Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"551e0f21-b37d-470c-be43-8aaa1930500f",question:"How can you access the value of an input field in an event handler?",answer:`\`\`\`markdown You can access the value of an input field in an event handler by using event.target.value. Here’s a simple example:

\`\`\`jsx
import React, { useState } from 'react';

function MyComponent() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
}
\`\`\`

**Explanation:**

- The event handler (handleChange) receives a synthetic event object.
- \`event.target\` refers to the input element.
- \`event.target.value\` gives you the current value of the input field.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225558Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"876d78ff-63ad-4954-aed6-72a87088ea70",question:"What is event pooling in React synthetic events?",answer:`\`\`\`markdown **Event pooling** in React refers to the optimization technique used by React’s SyntheticEvent system to reuse event objects for performance reasons. When an event handler is triggered in React, a SyntheticEvent object is created and passed to the handler. Instead of creating a new event object for every event, React reuses (or "pools") these objects to reduce memory overhead and improve performance.

### Key Points

- **SyntheticEvent objects are reused:** After your event handler finishes executing, the SyntheticEvent object’s properties are cleared and the object is put back into a pool for future use.
- **Accessing event properties asynchronously:** Because of pooling, you cannot reliably access event properties asynchronously (e.g., inside a setTimeout or after a promise resolves), as the properties may have been cleared.
- **Solution:** If you need to access the event properties asynchronously, you should call \`event.persist()\` to remove the event from the pool, or copy the properties you need into a variable.

### Example

\`\`\`jsx
function MyComponent() {
  function handleClick(event) {
    // This will work
    console.log(event.type);

    setTimeout(() => {
      // This may not work as expected due to event pooling
      console.log(event.type); // Might log 'undefined'
    }, 1000);

    // To fix, use event.persist() or copy the property
    // event.persist();
    // OR
    // const eventType = event.type;
  }

  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`

### Summary Table

| Aspect                | Description                                  |
|-----------------------|----------------------------------------------|
| What is pooled?       | SyntheticEvent objects                       |
| Why pool events?      | Performance and memory optimization          |
| How to avoid issues?  | Use \`event.persist()\` or copy properties     |

**Note:** As of React 17 and later, event pooling has been removed, but understanding it is still important for legacy codebases.`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225575Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"d215228b-f777-4cdb-b941-fd37aa52b413",question:"How can you access the native event from a synthetic event?",answer:`\`\`\`markdown To access the native event from a React SyntheticEvent, use the nativeEvent property provided by the SyntheticEvent object. For example:

\`\`\`jsx
function handleClick(e) {
  // e is the SyntheticEvent
  console.log(e.nativeEvent); // Access the native browser event
}

<button onClick={handleClick}>Click me</button>
\`\`\`

**Note:**  
- The nativeEvent property gives you direct access to the underlying browser event object.
- Use this only if you need functionality not provided by the SyntheticEvent API.  
- Be aware that React pools SyntheticEvent objects for performance, so if you need to access the event asynchronously, call e.persist() first.`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225591Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"c33e6404-8284-4138-a340-af51b7321f69",question:"What happens if you use a synthetic event after the event handler has finished executing?",answer:`\`\`\`markdown In React, synthetic events are pooled for performance reasons. This means that after your event handler has finished executing, the SyntheticEvent object is returned to a pool and its properties are nulled out. If you try to access the event's properties asynchronously (for example, inside a setTimeout or a Promise), you'll find that they are no longer available and may get an error or see that their values are null.

**Example:**

\`\`\`jsx
function handleClick(event) {
  setTimeout(() => {
    // This will not work as expected!
    console.log(event.type); // Might log null or throw an error
  }, 1000);
}
\`\`\`

**How to fix:**

If you need to access the event properties asynchronously, you should call event.persist() to remove the event from the pool, or copy the needed properties to a variable:

\`\`\`jsx
function handleClick(event) {
  event.persist(); // Prevents React from pooling the event
  setTimeout(() => {
    console.log(event.type); // Works as expected
  }, 1000);
}

// OR

function handleClick(event) {
  const eventType = event.type;
  setTimeout(() => {
    console.log(eventType); // Works as expected
  }, 1000);
}
\`\`\`

**Summary:**  
If you use a synthetic event after the handler has finished, its properties will be unavailable unless you persist the event or copy the needed values.`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225609Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"9cd98db7-7ad6-4813-8efc-884f77b20e5b",question:"How do you pass arguments to event handlers in React?",answer:`\`\`\`markdown
To pass arguments to event handlers in React, you can use an inline arrow function or the Function.prototype.bind method. This allows you to pass custom arguments along with the event object.

### Example using an arrow function

\`\`\`jsx
function MyButton({ id }) {
  function handleClick(customArg, event) {
    console.log('Button ID:', customArg);
    console.log('Event:', event.type);
  }

  return (
    <button onClick={(event) => handleClick(id, event)}>
      Click me
    </button>
  );
}
\`\`\`

### Example using \`bind\`

\`\`\`jsx
function MyButton({ id }) {
  function handleClick(customArg, event) {
    console.log('Button ID:', customArg);
    console.log('Event:', event.type);
  }

  return (
    <button onClick={handleClick.bind(null, id)}>
      Click me
    </button>
  );
}
\`\`\`

**Note:**  
- The first argument passed to the handler will be your custom argument (e.g., \`id\`), and the event object will be passed as the last argument.
- Using arrow functions is generally preferred for readability and performance in most cases.

---
**Summary:**  
Pass arguments to event handlers in React by using inline arrow functions or \`bind\`, ensuring your handler receives both custom arguments and the event object.
\`\`\`
`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225695Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"8b73ad75-8eed-49d8-b1bb-63682edd7e0d",question:"What is the difference between 'onChange' and 'onInput' in React?",answer:"```markdown\n**Difference between `onChange` and `onInput` in React:**\n\n- **`onChange`:**\n  - In React, the `onChange` event handler is triggered when the value of an input element changes and the element loses focus (for most input types), or after each keystroke for text inputs.\n  - For `<input type=\"text\">` and `<textarea>`, `onChange` fires on every change (i.e., every keystroke), which is different from the native DOM behavior where `change` fires only on blur.\n  - For other input types (like checkboxes, radios, selects), it fires when the value changes.\n\n- **`onInput`:**\n  - The `onInput` event handler is triggered immediately after the value of an input element changes, on every keystroke or input event, before the value is committed.\n  - This closely mirrors the native DOM `input` event.\n  - It can be useful for scenarios where you need to respond to every input event, including those not caused by keyboard (e.g., voice input, drag-and-drop).\n\n**Summary Table:**\n\n| Event      | When it Fires (React)                                   | Typical Use Cases                |\n|------------|--------------------------------------------------------|----------------------------------|\n| `onChange` | On every value change for text inputs; on blur for others | Form handling, validation        |\n| `onInput`  | On every input event (keystroke, paste, etc.)           | Live feedback, instant updates   |\n\n**Example:**\n\n```jsx\n<input\n  type=\"text\"\n  onChange={e => console.log('onChange:', e.target.value)}\n  onInput={e => console.log('onInput:', e.target.value)}\n/>\n```\n\n**Key Point:**  \nIn React, `onChange` for text inputs behaves more like the native `input` event, but `onInput` can still be used for more immediate or lower-level input handling.\n```\n",level:"Intermediate",created_at:"2025-05-06T15:54:16.225712Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"0fdb6ffe-541f-4262-9429-8ae1949f3653",question:"How can you handle events on dynamically generated elements in React?",answer:`\`\`\`markdown
In React, you can handle events on dynamically generated elements by attaching event handlers directly to the elements as you render them. Since React uses a virtual DOM and synthetic events, you don't need to manually delegate events like in vanilla JavaScript.

Here's how you can do it:

\`\`\`jsx
import React, { useState } from 'react';

function DynamicList() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

  const handleClick = (item) => {
    alert(\`You clicked on \${item}\`);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

**Explanation:**
- The \`onClick\` event handler is attached directly to each \`<li>\` as it is rendered.
- The handler receives the specific item as an argument, so you know which element was clicked.
- React's synthetic event system ensures that events work seamlessly, even for elements generated dynamically.

**Key Points:**
- Attach event handlers directly in your JSX when rendering dynamic lists.
- Use arrow functions or bind to pass parameters to event handlers.
- No need for manual event delegation; React handles event propagation efficiently.
\`\`\`
`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225730Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"35ff1623-df0d-4294-a6b8-849f658ee673",question:"What is the purpose of the 'event.target' property in React synthetic events?",answer:`\`\`\`markdown The event.target property in React synthetic events refers to the DOM element that triggered the event. It allows you to access properties or values of the element that initiated the event, such as the value of an input field.

**Example:**

\`\`\`jsx
function handleChange(event) {
  console.log(event.target.value); // Logs the current value of the input
}

<input type="text" onChange={handleChange} />
\`\`\`

**Purpose:**  
event.target helps you identify and interact with the specific element that caused the event, making it useful for handling user input and dynamic UI updates.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225745Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"b1c120d5-9396-4ac0-888f-abbaebe5436e",question:"How do you handle mouse events in React?",answer:`\`\`\`markdown You can handle mouse events in React by adding event handler props (such as onClick, onMouseEnter, onMouseLeave, etc.) to your JSX elements. These handlers receive a SyntheticEvent object as an argument.

Here's a simple example:

\`\`\`jsx
import React from 'react';

function MyButton() {
  function handleClick(event) {
    alert('Button was clicked!');
    // You can access event properties, e.g. event.type
    console.log(event.type); // "click"
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default MyButton;
\`\`\`

**Common mouse events in React:**

- \`onClick\`
- \`onDoubleClick\`
- \`onMouseEnter\`
- \`onMouseLeave\`
- \`onMouseDown\`
- \`onMouseUp\`
- \`onMouseMove\`

**Note:**  
React's event handlers use camelCase (e.g., onClick) instead of lowercase (e.g., onclick) as in plain HTML.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225768Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"43c98cae-b89d-453f-b7b4-936fe7c7db34",question:"How do you handle touch events in React?",answer:`\`\`\`markdown To handle touch events in React, you use the built-in synthetic event handlers that correspond to native touch events. React provides several touch event handlers, such as:

- onTouchStart
- onTouchMove
- onTouchEnd
- onTouchCancel

These handlers receive a SyntheticTouchEvent object, which contains information about the touch interaction.

**Example:**

\`\`\`jsx
import React from 'react';

function TouchComponent() {
  const handleTouchStart = (event) => {
    console.log('Touch started', event.touches);
  };

  const handleTouchMove = (event) => {
    console.log('Touch moved', event.touches);
  };

  const handleTouchEnd = (event) => {
    console.log('Touch ended');
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        width: 200,
        height: 200,
        backgroundColor: '#eee',
        textAlign: 'center',
        lineHeight: '200px',
      }}
    >
      Touch Me!
    </div>
  );
}

export default TouchComponent;
\`\`\`

**Key Points:**
- Attach touch event handlers directly to React elements.
- Use the event object to access touch data (e.g., \`event.touches\`, \`event.changedTouches\`).
- React normalizes these events across browsers for consistency.

**References:**
- [React Docs: Handling Events](https://react.dev/reference/react-dom/components/common#handling-events)
- [MDN: Touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225785Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"cbcdf000-0d09-4ea9-95b5-476f71cf4f0e",question:"What are the differences between 'onBlur' and 'onFocus' events in React?",answer:"```markdown\n**Differences between `onBlur` and `onFocus` events in React:**\n\n| Aspect         | `onFocus`                                        | `onBlur`                                         |\n|----------------|--------------------------------------------------|--------------------------------------------------|\n| Triggered When | An element gains focus (e.g., user clicks into an input or tabs into it) | An element loses focus (e.g., user clicks away or tabs out) |\n| Common Usage   | Start highlighting, show tooltips, or open dropdowns | Validate input, hide tooltips, or close dropdowns |\n| Event Propagation | In React, both use event bubbling (unlike native DOM, where `focus` and `blur` do not bubble) | In React, both use event bubbling |\n| Example        | `<input onFocus={handleFocus} />`                | `<input onBlur={handleBlur} />`                  |\n\n**Summary:**  \n- `onFocus` is used to handle actions when an element becomes active or selected.\n- `onBlur` is used to handle actions when an element loses its active state.\n- In React, both events bubble up the component tree, allowing parent components to handle them.\n```\n",level:"Intermediate",created_at:"2025-05-06T15:54:16.225803Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"d3c84d05-90b4-4536-8a15-93592bafc780",question:"How do you handle custom events in React?",answer:`\`\`\`markdown
### Handling Custom Events in React

React's SyntheticEvent system is designed to handle standard DOM events (like \`onClick\`, \`onChange\`, etc.), but sometimes you need to communicate between components using custom events. While React doesn't natively support custom DOM events in the same way as the browser's \`CustomEvent\`, you can handle custom events in React using a few different patterns:

#### 1. **Callback Props (Recommended for Parent-Child Communication)**

The most common React pattern is to pass callback functions as props:

\`\`\`jsx
// Parent Component
function Parent() {
  const handleCustomEvent = (data) => {
    console.log('Custom event received:', data);
  };

  return <Child onCustomEvent={handleCustomEvent} />;
}

// Child Component
function Child({ onCustomEvent }) {
  return (
    <button onClick={() => onCustomEvent('Hello from child!')}>
      Trigger Custom Event
    </button>
  );
}
\`\`\`

#### 2. **Context API (For Deeply Nested Components)**

If you need to handle custom events across deeply nested components, use React Context:

\`\`\`jsx
const CustomEventContext = React.createContext();

function Parent() {
  const handleCustomEvent = (data) => { /* ... */ };

  return (
    <CustomEventContext.Provider value={handleCustomEvent}>
      <DeepChild />
    </CustomEventContext.Provider>
  );
}

function DeepChild() {
  const handleCustomEvent = React.useContext(CustomEventContext);

  return <button onClick={() => handleCustomEvent('data')}>Fire Event</button>;
}
\`\`\`

#### 3. **Event Emitter (For Sibling or Unrelated Components)**

For more complex scenarios, you can use an event emitter library (like \`mitt\` or \`eventemitter3\`):

\`\`\`js
// eventBus.js
import mitt from 'mitt';
export const eventBus = mitt();
\`\`\`

\`\`\`jsx
// Component A
import { eventBus } from './eventBus';
eventBus.emit('customEvent', { foo: 'bar' });

// Component B
import { eventBus } from './eventBus';
React.useEffect(() => {
  const handler = (data) => { /* ... */ };
  eventBus.on('customEvent', handler);
  return () => eventBus.off('customEvent', handler);
}, []);
\`\`\`

#### 4. **Custom DOM Events (Rarely Needed in React)**

If you need to interact with third-party libraries that dispatch custom DOM events, you can use \`ref\` and native event listeners:

\`\`\`jsx
function MyComponent() {
  const ref = React.useRef();

  React.useEffect(() => {
    const handler = (e) => { /* ... */ };
    ref.current.addEventListener('mycustomevent', handler);
    return () => ref.current.removeEventListener('mycustomevent', handler);
  }, []);

  return <div ref={ref}>Listen for custom DOM events</div>;
}
\`\`\`

---

**Summary:**  
React encourages handling custom events through props, context, or event emitters, rather than the DOM's \`CustomEvent\`. Choose the pattern that best fits your component hierarchy and communication needs.
\`\`\`
`,level:"Advanced",created_at:"2025-05-06T15:54:16.225821Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"5f10d538-5e78-434e-ac63-477cc013fc56",question:"Can you use event capturing phase in React synthetic events?",answer:`\`\`\`markdown Yes, you can use the event capturing phase in React synthetic events.

By default, React event handlers listen during the bubbling phase. However, to listen during the capturing phase, you can add the Capture suffix to the event handler prop. For example:

\`\`\`jsx
<div onClickCapture={handleClick}>
  {/* ... */}
</div>
\`\`\`

In this example, handleClick will be invoked during the capturing phase, before bubbling event handlers (onClick) are called.

**Summary Table:**

| Phase      | React Prop         | Example                |
|------------|--------------------|------------------------|
| Bubbling   | onClick            | onClick={fn}           |
| Capturing  | onClickCapture     | onClickCapture={fn}    |

**References:**
- [React Docs: SyntheticEvent](https://react.dev/reference/react-dom/components/common#event-propagation)
- [React Docs: Event Propagation](https://react.dev/learn/responding-to-events#event-propagation)`,level:"Advanced",created_at:"2025-05-06T15:54:16.225836Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"f419b791-fcab-4b4e-88f3-310f4e7600b6",question:"How does React handle event propagation across component boundaries?",answer:`\`\`\`markdown React handles event propagation using its own event system called Synthetic Events, which is a cross-browser wrapper around the browser’s native events. Here’s how React manages event propagation across component boundaries:

## 1. Event Delegation

React does **not** attach event listeners directly to individual DOM nodes. Instead, it attaches a single event listener at the root of the DOM tree (usually the document or root container). When an event occurs, React’s event system captures it at the root and then determines which component(s) should receive the event.

## 2. Synthetic Event System

React wraps native events in a \`SyntheticEvent\` object, which normalizes event properties and behavior across browsers. This object mimics the native event but adds extra features, such as consistent event properties and pooling for performance.

## 3. Propagation Across Component Boundaries

- **Bubbling:** By default, events bubble up through the React component tree, similar to how they bubble in the DOM. If you have nested components, an event triggered in a child component will bubble up to its parent components unless \`event.stopPropagation()\` is called.
- **Component Boundaries:** Even though components are abstractions, React’s synthetic event system ensures that event bubbling works seamlessly across component boundaries. This means a parent component can listen for events that originate from its child components.
- **Stopping Propagation:** You can call \`event.stopPropagation()\` on the SyntheticEvent to prevent further propagation up the component tree, just like with native events.

## 4. Example

\`\`\`jsx
function Parent() {
  const handleClick = () => {
    alert('Parent clicked!');
  };

  return (
    <div onClick={handleClick}>
      <Child />
    </div>
  );
}

function Child() {
  const handleClick = (e) => {
    alert('Child clicked!');
    // e.stopPropagation(); // Uncomment to stop event from bubbling to Parent
  };

  return <button onClick={handleClick}>Click Me</button>;
}
\`\`\`

- Clicking the button will trigger both the \`Child\` and \`Parent\` handlers due to bubbling.
- If you uncomment \`e.stopPropagation()\`, the event will not bubble to the parent.

## 5. Summary Table

| Feature                   | React Synthetic Events           | Native DOM Events         |
|---------------------------|----------------------------------|--------------------------|
| Event Delegation          | Yes (at root)                    | No (per node)            |
| Cross-browser Consistency | Yes                              | No                       |
| Bubbling                  | Yes (across components)          | Yes (across DOM nodes)   |
| stopPropagation           | Supported                        | Supported                |

---

**In summary:**  
React’s synthetic event system ensures that event propagation (bubbling and capturing) works consistently across component boundaries, allowing parent components to handle events from their children, unless propagation is explicitly stopped. This is achieved through event delegation and the SyntheticEvent wrapper.`,level:"Advanced",created_at:"2025-05-06T15:54:16.225852Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"cd003b69-51e9-43a8-b4c2-623f83f6548a",question:"What is the impact of React synthetic events on performance?",answer:`\`\`\`markdown ### Impact of React Synthetic Events on Performance

React synthetic events are part of React’s event system, which wraps the browser’s native events to provide a consistent API across different browsers. Here’s how they impact performance:

#### 1. **Event Delegation**
- **How it works:** React attaches a single event listener at the root of the DOM (e.g., \`document\`) for each event type, rather than adding listeners to every individual element.
- **Performance Benefit:** This reduces the number of event listeners in the DOM, lowering memory usage and improving event handling efficiency, especially in large applications with many interactive elements.

#### 2. **Pooling of Event Objects**
- **How it works:** SyntheticEvent objects are reused (pooled) for performance reasons. After the event callback executes, the event object’s properties are cleared and reused for the next event.
- **Performance Benefit:** Reduces the overhead of creating and garbage-collecting many event objects.
- **Potential Pitfall:** Accessing event properties asynchronously (e.g., in a \`setTimeout\`) can lead to bugs, as the event object may have been reused. Use \`event.persist()\` to opt out of pooling if needed.

#### 3. **Cross-Browser Consistency**
- **How it works:** Synthetic events normalize event properties and behavior across browsers.
- **Performance Impact:** The normalization logic adds a small overhead, but this is generally negligible compared to the benefits of consistent behavior and easier debugging.

#### 4. **Batching and Updates**
- **How it works:** React batches state updates triggered by event handlers, reducing unnecessary re-renders.
- **Performance Benefit:** Improves rendering performance by minimizing the number of updates and reflows.

---

#### **Summary Table**

| Feature                  | Performance Impact                        |
|--------------------------|-------------------------------------------|
| Event Delegation         | Fewer listeners, lower memory usage       |
| Event Object Pooling     | Less GC overhead, but beware async access |
| Cross-Browser Consistency| Minor overhead, major developer benefit   |
| Batching Updates         | Fewer re-renders, better responsiveness   |

---

**In conclusion:**  
React’s synthetic event system is generally optimized for performance, especially in large-scale applications. The main benefits come from event delegation and batching, while the minor overhead from normalization is usually outweighed by the advantages in consistency and maintainability. Developers should be aware of event pooling to avoid bugs when accessing event properties asynchronously.`,level:"Advanced",created_at:"2025-05-06T15:54:16.225866Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"a842a090-cff4-49fa-bd0d-6e91a731ba3f",question:"How do you handle global events (e.g., window resize) in React?",answer:`\`\`\`markdown To handle global events (such as window resize) in React, you typically use the useEffect hook to add and clean up event listeners when your component mounts and unmounts. Here's a step-by-step example:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function WindowResizeComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler function for the resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  return (
    <div>
      <p>Window width: {windowWidth}px</p>
    </div>
  );
}

export default WindowResizeComponent;
\`\`\`

**Key Points:**
- Use useEffect to manage adding and removing global event listeners.
- Always clean up the event listener in the return function of useEffect to avoid memory leaks.
- React synthetic events only cover events attached to React elements. For global objects (window, document), use native event listeners as shown above.`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225881Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"c7ada480-212e-492c-92f1-3c8a55e35142",question:"How do you clean up event listeners in class and function components?",answer:`\`\`\`markdown
In React, cleaning up event listeners is important to prevent memory leaks and unexpected behavior. The approach differs between class components and function components (with hooks):

### Class Components

In class components, you typically add event listeners in \`componentDidMount\` and remove them in \`componentWillUnmount\`.

\`\`\`jsx
class MyComponent extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    // handle the resize event
  };

  render() {
    return <div>My Component</div>;
  }
}
\`\`\`

### Function Components (with Hooks)

In function components, you use the \`useEffect\` hook. The cleanup is done by returning a function from \`useEffect\`.

\`\`\`jsx
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const handleResize = () => {
      // handle the resize event
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  return <div>My Component</div>;
}
\`\`\`

### Key Points

- **Always clean up** event listeners you add to avoid memory leaks.
- In **class components**, use \`componentWillUnmount\`.
- In **function components**, return a cleanup function from \`useEffect\`.
- For **React synthetic events** (like \`onClick\` on JSX elements), React handles cleanup automatically. Manual cleanup is only needed for listeners attached directly to DOM elements or global objects (like \`window\` or \`document\`).

\`\`\``,level:"Intermediate",created_at:"2025-05-06T15:54:16.225896Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"0e421a7f-c07b-4d7d-8cfc-d7cbb407fb3e",question:"How do you test React synthetic events in unit tests?",answer:`\`\`\`markdown To test React synthetic events in unit tests, you typically use a testing library like React Testing Library or Enzyme. The general approach is to render the component, simulate the event, and assert the expected outcome.

Here's an example using **React Testing Library**:

\`\`\`jsx
// Button.js
import React from 'react';

function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

export default Button;
\`\`\`

\`\`\`jsx
// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick} />);
  
  fireEvent.click(getByText('Click me'));
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
\`\`\`

**Key Points:**

- Use \`fireEvent\` (or \`userEvent\` for more realistic interactions) to simulate synthetic events like \`click\`, \`change\`, etc.
- Pass a mock function (e.g., \`jest.fn()\`) as the event handler prop.
- Assert that the handler was called as expected using Jest assertions.

**References:**
- [React Testing Library Docs: Events](https://testing-library.com/docs/dom-testing-library/api-events/)
- [Jest Docs: Mock Functions](https://jestjs.io/docs/mock-functions)`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225912Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"01e7400f-8193-4ddd-ba3e-c956a5bbc8b2",question:"What is the difference between 'event.currentTarget' and 'event.target' in React?",answer:`\`\`\`markdown
In React (and in the underlying DOM), \`event.currentTarget\` and \`event.target\` refer to different elements involved in an event:

- **event.target**: This is the element on which the event originally occurred. It represents the deepest element in the DOM that triggered the event.

- **event.currentTarget**: This is the element on which the event handler is currently attached. In React, this is usually the element you specified the event handler on.

**Example:**

\`\`\`jsx
function Example() {
  return (
    <div onClick={(event) => {
      console.log('currentTarget:', event.currentTarget);
      console.log('target:', event.target);
    }}>
      <button>Click Me</button>
    </div>
  );
}
\`\`\`

- If you click on the \`<button>\`, \`event.target\` will be the \`<button>\`, but \`event.currentTarget\` will be the \`<div>\`, since that's where the handler is attached.

**Summary Table:**

| Property           | Description                                           |
|--------------------|------------------------------------------------------|
| event.target       | Element where the event originated                   |
| event.currentTarget| Element where the handler is attached (listener)     |

**In short:**  
- Use \`event.target\` to find out which element was interacted with.
- Use \`event.currentTarget\` to refer to the element handling the event.
\`\`\`
`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225928Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"2c95ca02-e9a7-4b22-bf81-ad7cf973f8b5",question:"How do you handle multiple events on the same element in React?",answer:`\`\`\`markdown You can handle multiple events on the same element in React by adding multiple event handler props to the element. Each event (like onClick, onMouseOver, onChange, etc.) can have its own handler function. Here’s an example:

\`\`\`jsx
import React from 'react';

function MyComponent() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleMouseOver = () => {
    console.log('Mouse is over the button!');
  };

  return (
    <button
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      Hover or Click Me
    </button>
  );
}

export default MyComponent;
\`\`\`

**Explanation:**
- \`onClick={handleClick}\` handles click events.
- \`onMouseOver={handleMouseOver}\` handles mouse over events.

You can add as many event handlers as needed, each for a different event type.`,level:"Beginner",created_at:"2025-05-06T15:54:16.225951Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"ebaf828f-a828-4230-8df9-d3de5319bc11",question:"How do you debounce or throttle event handlers in React?",answer:`\`\`\`markdown
To debounce or throttle event handlers in React, you typically use utility functions like \`debounce\` or \`throttle\` from libraries such as **lodash** or implement your own. This is especially useful for performance optimization when handling events that can fire rapidly (e.g., \`onChange\`, \`onScroll\`, \`onResize\`).

### Debouncing in React

**Debouncing** ensures that a function is only called after a certain period has elapsed since the last time it was invoked.

**Example using lodash.debounce:**

\`\`\`jsx
import React, { useCallback } from 'react';
import debounce from 'lodash.debounce';

function SearchInput() {
  // useCallback ensures the debounced function is not recreated on every render
  const handleChange = useCallback(
    debounce((event) => {
      console.log('Search:', event.target.value);
    }, 300), // 300ms debounce
    []
  );

  // React pools SyntheticEvent, so persist the event or use event.target.value directly
  const onChange = (event) => {
    event.persist();
    handleChange(event);
  };

  return <input type="text" onChange={onChange} />;
}
\`\`\`

### Throttling in React

**Throttling** ensures that a function is only called at most once in a specified time interval.

**Example using lodash.throttle:**

\`\`\`jsx
import React, { useCallback } from 'react';
import throttle from 'lodash.throttle';

function ScrollComponent() {
  const handleScroll = useCallback(
    throttle((event) => {
      console.log('Scroll position:', window.scrollY);
    }, 200), // 200ms throttle
    []
  );

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <div style={{ height: '200vh' }}>Scroll down!</div>;
}
\`\`\`

### Key Points

- **Synthetic Events** in React are pooled, so if you need to access the event asynchronously (as in debounced/throttled handlers), call \`event.persist()\` or extract needed values before passing.
- Use \`useCallback\` to memoize the debounced/throttled handler to avoid creating a new function on every render.
- For simple cases, you can implement your own debounce/throttle logic, but using a library like lodash is recommended for reliability.

**References:**
- [React Docs: SyntheticEvent](https://react.dev/reference/react-dom/components/common#syntheticevent)
- [Lodash debounce](https://lodash.com/docs/4.17.15#debounce)
- [Lodash throttle](https://lodash.com/docs/4.17.15#throttle)
\`\`\`
`,level:"Advanced",created_at:"2025-05-06T15:54:16.225967Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"252f1be7-6cf6-4226-b7f9-bc9ec566bb3d",question:"What are pointer events in React and how do you use them?",answer:`\`\`\`markdown
## What are Pointer Events in React and How Do You Use Them?

**Pointer events** in React are a set of synthetic events that handle interactions from various input devices such as a mouse, pen, or touch. They provide a unified way to handle user interactions across different device types, making it easier to write device-agnostic event handlers.

### Common Pointer Events in React

- \`onPointerDown\`
- \`onPointerMove\`
- \`onPointerUp\`
- \`onPointerEnter\`
- \`onPointerLeave\`
- \`onPointerOver\`
- \`onPointerOut\`
- \`onPointerCancel\`

These events correspond to the [Pointer Events API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) in the browser.

### Why Use Pointer Events?

- **Unified Handling:** One handler for mouse, touch, and pen input.
- **Rich Event Data:** Access to properties like \`pointerType\`, \`pressure\`, \`isPrimary\`, etc.
- **Better for Modern Devices:** Especially useful for touch screens and styluses.

### Example Usage

\`\`\`jsx
import React from 'react';

function PointerExample() {
  const handlePointerDown = (event) => {
    console.log('Pointer down:', event.pointerType);
  };

  const handlePointerMove = (event) => {
    console.log('Pointer move at:', event.clientX, event.clientY);
  };

  const handlePointerUp = (event) => {
    console.log('Pointer up');
  };

  return (
    <div
      style={{ width: 200, height: 200, background: '#eee' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      Interact with me!
    </div>
  );
}

export default PointerExample;
\`\`\`

### Notes

- Pointer events are supported in React 16.4 and above.
- They work similarly to other React synthetic events.
- Always check browser compatibility if you need to support older browsers.

**In summary:** Pointer events in React let you handle input from mouse, touch, and pen devices in a unified way, making your components more flexible and future-proof.
\`\`\`
`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225982Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"93aade8f-fac9-4722-bfd4-ccc24e77f0af",question:"How do you handle drag and drop events in React?",answer:`\`\`\`markdown To handle drag and drop events in React, you use the Synthetic Event system, which wraps the browser’s native drag and drop events. The most commonly used events are:

- onDragStart
- onDragOver
- onDrop
- onDragEnter
- onDragLeave
- onDragEnd

Here’s a basic example of implementing drag and drop in React:

\`\`\`jsx
import React, { useState } from 'react';

function DragAndDropExample() {
  const [dropped, setDropped] = useState(false);

  // Handler for drag start
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', 'This is a draggable item');
  };

  // Handler for drag over (must prevent default to allow drop)
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handler for drop
  const handleDrop = (e) => {
    e.preventDefault();
    setDropped(true);
    // You can access data with e.dataTransfer.getData('text')
  };

  return (
    <div>
      <div
        draggable
        onDragStart={handleDragStart}
        style={{
          width: '150px',
          height: '50px',
          backgroundColor: '#90caf9',
          marginBottom: '20px',
          textAlign: 'center',
          lineHeight: '50px',
          cursor: 'grab'
        }}
      >
        Drag me!
      </div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: dropped ? '#a5d6a7' : '#eeeeee',
          border: '2px dashed #90caf9',
          textAlign: 'center',
          lineHeight: '100px'
        }}
      >
        {dropped ? 'Dropped!' : 'Drop here'}
      </div>
    </div>
  );
}

export default DragAndDropExample;
\`\`\`

**Key Points:**
- Use the draggable attribute on the element you want to drag.
- Use onDragStart to initiate the drag and set data if needed.
- Use onDragOver on the drop target and call e.preventDefault() to allow dropping.
- Use onDrop to handle the drop logic.
- Optionally, use onDragEnter, onDragLeave, and onDragEnd for additional UI feedback.

React’s Synthetic Events ensure cross-browser compatibility and consistent event handling.`,level:"Intermediate",created_at:"2025-05-06T15:54:16.225996Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"48914bbf-9d47-4846-83e5-76e869a3ccc0",question:"How do you distinguish between synthetic and native events in React?",answer:`\`\`\`markdown
In React, **synthetic events** are React's cross-browser wrapper around the browser's native events. They normalize events so that they have consistent properties across different browsers.

### Distinguishing Between Synthetic and Native Events

1. **Accessing the Event Object:**
   - In a React event handler, the event object you receive is a **SyntheticEvent**.
   - Example:
     \`\`\`jsx
     function handleClick(event) {
       // event is a SyntheticEvent
     }
     \`\`\`

2. **Accessing the Native Event:**
   - Every SyntheticEvent has a \`nativeEvent\` property that references the underlying browser event.
   - Example:
     \`\`\`jsx
     function handleClick(event) {
       // Synthetic event
       console.log(event); // SyntheticEvent
       // Native event
       console.log(event.nativeEvent); // Native browser event
     }
     \`\`\`

3. **Instance Type:**
   - You can check the type of the event:
     \`\`\`jsx
     function handleClick(event) {
       console.log(event instanceof SyntheticEvent); // true
       console.log(event.nativeEvent instanceof MouseEvent); // true for mouse events
     }
     \`\`\`
   - Note: You may need to import \`SyntheticEvent\` from \`react\` for type checking in TypeScript.

4. **Event Pooling (React < 17):**
   - In React versions before 17, SyntheticEvents were pooled and reused for performance. Accessing properties asynchronously could lead to unexpected results. Native events are not pooled.
   - In React 17+, event pooling is removed.

5. **Properties:**
   - SyntheticEvent mimics the native event interface, but may have additional React-specific properties (e.g., \`persist()\` method).

### Summary Table

|                | Synthetic Event (\`event\`) | Native Event (\`event.nativeEvent\`) |
|----------------|--------------------------|------------------------------------|
| Origin         | React                    | Browser                            |
| Consistency    | Cross-browser            | Browser-specific                   |
| Extra Methods  | \`persist()\`              | No                                 |
| Access         | Handler param            | \`event.nativeEvent\`                |

### Example

\`\`\`jsx
function MyButton() {
  function handleClick(e) {
    // Synthetic event
    console.log('Synthetic:', e);
    // Native event
    console.log('Native:', e.nativeEvent);
  }
  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`

**In summary:**  
- The event object passed to React event handlers is a SyntheticEvent.
- The native browser event is accessible via the \`nativeEvent\` property of the SyntheticEvent.
\`\`\`
`,level:"Advanced",created_at:"2025-05-06T15:54:16.226012Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"ef3e5c2a-3127-445c-9ebf-c6c93e7ba519",question:"How do you use React synthetic events with portals?",answer:`\`\`\`markdown ### Using React Synthetic Events with Portals

React’s [portals](https://react.dev/reference/react-dom/createPortal) allow you to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This can raise questions about event handling, especially with React’s [synthetic event system](https://react.dev/reference/react/SyntheticEvent).

#### How Synthetic Events Work with Portals

React’s synthetic event system uses event delegation: it attaches a single event listener to the root of the React tree (typically the element where you call \`ReactDOM.render\`). When an event occurs, React creates a synthetic event and calls the appropriate handlers.

**With portals:**
- Even though the portal’s DOM nodes are outside the parent component’s DOM hierarchy, events from portal children still propagate through the React component tree as if they were descendants.
- This means you can handle events from portal content in parent components using React’s synthetic event system.

#### Example

\`\`\`jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <p>Click anywhere in this modal to close it.</p>
    </div>,
    document.getElementById('modal-root')
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = (e) => {
    alert('Modal clicked!');
    setShowModal(false);
  };

  return (
    <div onClick={() => alert('App clicked!')}>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
}
\`\`\`

#### Key Points

- **Event Bubbling:** Events from portal children bubble up to React parents as if the portal content was part of the parent’s DOM subtree.
- **Synthetic Events:** You can use React’s synthetic event handlers (\`onClick\`, \`onChange\`, etc.) on portal content, and they’ll work as expected.
- **Native Event Listeners:** If you add native event listeners (e.g., with \`addEventListener\`), they follow the DOM hierarchy, not the React component tree.

#### Caveats

- **Stop Propagation:** Calling \`e.stopPropagation()\` in a portal child’s event handler will prevent the event from bubbling up to React parents, just as in normal React trees.
- **Event Target:** The event target will be the actual DOM node where the event occurred, even if it’s outside the parent’s DOM subtree.

#### References

- [React Docs: Portals](https://react.dev/reference/react-dom/createPortal)
- [React Docs: SyntheticEvent](https://react.dev/reference/react/SyntheticEvent)

---

**Summary:**  
React synthetic events work seamlessly with portals. Events from portal content bubble through the React component tree, allowing parent components to handle them as if the portal content was a direct child. This maintains a consistent event handling model across your app, even when using portals.`,level:"Advanced",created_at:"2025-05-06T15:54:16.226034Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"30226e5d-00cb-4e35-91e8-f68b90097a33",question:"How does React handle event listeners in strict mode or concurrent mode?",answer:`\`\`\`markdown React handles event listeners differently in Strict Mode and Concurrent Mode to ensure consistency, performance, and reliability, especially as it prepares for features like time-slicing and interruptible rendering.

### 1. Event Delegation

React uses a **single event listener** at the root of the document for most events (like \`click\`, \`input\`, etc.). When an event occurs, React's synthetic event system determines which component(s) should receive the event, and then calls the appropriate event handlers.

### 2. Strict Mode

- **Double Invocations:** In React Strict Mode (development only), React intentionally double-invokes certain lifecycle methods and effects (including event handlers in some cases) to help identify side effects and ensure code is resilient.
- **Event Listeners:** The way event listeners are attached and managed does not fundamentally change in Strict Mode, but you may see handlers invoked more than once during development to surface potential issues.

### 3. Concurrent Mode

- **Event Batching:** In Concurrent Mode, React can pause, abort, or restart renders. To maintain consistency, React batches updates triggered by events, ensuring state updates are processed together.
- **Event Replay:** If a user interacts with the UI during an interrupted render, React can "replay" the event after the render is complete, ensuring the event is handled with the latest state.
- **Non-blocking Events:** React may delay or interrupt event processing to keep the UI responsive. This means event handlers might not run immediately but are guaranteed to run in the correct order with the correct state.

### 4. Summary Table

| Mode             | Event Listener Attachment | Handler Invocation | Special Behaviors                      |
|------------------|--------------------------|-------------------|----------------------------------------|
| Normal           | Delegated at root        | Once per event    | Standard synthetic event system        |
| Strict Mode      | Delegated at root        | May be double-invoked in dev | Helps detect side effects      |
| Concurrent Mode  | Delegated at root        | Batched, may be replayed     | Supports interruptible rendering, event replay |

### 5. Key Takeaways

- **React manages event listeners centrally** for performance and consistency.
- **Strict Mode** may invoke handlers more than once to help catch bugs.
- **Concurrent Mode** enables advanced features like event replay and batching to support interruptible rendering and maintain UI consistency.

**References:**
- [React Docs: Synthetic Events](https://react.dev/reference/react-dom/components/common#synthetic-events)
- [React Docs: Strict Mode](https://react.dev/reference/react/StrictMode)
- [React Docs: Concurrent Rendering](https://react.dev/learn/synchronizing-with-effects#concurrent-rendering)`,level:"Advanced",created_at:"2025-05-06T15:54:16.226050Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"1011517e-dc2f-41a3-8d3a-55eecb29a687",question:"How can you optimize event handler performance in large React applications?",answer:`\`\`\`markdown Optimizing Event Handler Performance in Large React Applications
----------------------------------------------------------------

When building large React applications, inefficient event handling can lead to unnecessary re-renders, memory leaks, and sluggish UI performance. Here are advanced strategies to optimize event handler performance:

### 1. Use \`useCallback\` to Memoize Handlers

React components re-create functions on every render. Use the \`useCallback\` hook to memoize event handlers and prevent unnecessary re-renders, especially when passing handlers to child components.

\`\`\`jsx
const handleClick = useCallback(() => {
  // handler logic
}, [/* dependencies */]);
\`\`\`

### 2. Avoid Inline Functions in JSX

Defining handlers inline (e.g., \`<button onClick={() => doSomething()}>\`) creates a new function on every render. Instead, define handlers outside of JSX or use \`useCallback\`.

\`\`\`jsx
// Bad
<button onClick={() => doSomething()} />

// Good
<button onClick={handleClick} />
\`\`\`

### 3. Delegate Events When Appropriate

For lists or large DOM trees, use event delegation by attaching a single event handler to a parent element and determining the target in the handler. This reduces the number of event listeners.

\`\`\`jsx
function List({ items }) {
  const handleClick = (e) => {
    const id = e.target.getAttribute('data-id');
    // handle item click
  };

  return (
    <ul onClick={handleClick}>
      {items.map(item => (
        <li key={item.id} data-id={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

### 4. Use Stable References for Handlers Passed to Memoized Components

If you use \`React.memo\` or \`PureComponent\`, ensure event handler references are stable to prevent unnecessary re-renders.

\`\`\`jsx
const MemoizedButton = React.memo(({ onClick }) => (
  <button onClick={onClick}>Click</button>
));

// In parent:
const handleClick = useCallback(() => { /* ... */ }, []);
<MemoizedButton onClick={handleClick} />
\`\`\`

### 5. Remove Unnecessary Listeners

Clean up event listeners in \`useEffect\` or component lifecycle methods to prevent memory leaks.

\`\`\`jsx
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
\`\`\`

### 6. Throttle or Debounce High-Frequency Events

For events like \`scroll\` or \`resize\`, use throttling or debouncing to limit handler execution frequency.

\`\`\`jsx
const throttledHandler = useMemo(() => throttle(handleScroll, 200), []);
\`\`\`

### 7. Prefer Functional Updates for State

When updating state based on the previous state in event handlers, use functional updates to avoid stale closures.

\`\`\`jsx
setCount(prevCount => prevCount + 1);
\`\`\`

---

**Summary Table**

| Technique                | Benefit                                      |
|--------------------------|----------------------------------------------|
| \`useCallback\`            | Prevents unnecessary re-renders              |
| Avoid inline handlers    | Reduces function re-creation                 |
| Event delegation         | Fewer event listeners, better performance    |
| Stable handler refs      | Works with memoized components               |
| Cleanup listeners        | Prevents memory leaks                        |
| Throttle/debounce        | Optimizes high-frequency events              |
| Functional state updates | Avoids stale closures                        |

---

**References:**
- [React Docs: Optimizing Performance](https://react.dev/learn/optimizing-performance)
- [React Docs: Synthetic Events](https://react.dev/reference/react-dom/components/common#events)
- [Kent C. Dodds: How to optimize your React app performance](https://kentcdodds.com/blog/how-to-optimize-your-react-app-performance)`,level:"Advanced",created_at:"2025-05-06T15:54:16.226066Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"68225348-d6d5-4eb1-8bb0-0314710fa5d5",question:"What are the security considerations when handling events in React?",answer:`\`\`\`markdown ### Security Considerations When Handling Events in React

When handling events in React using Synthetic Events, it's crucial to be aware of several security considerations to prevent vulnerabilities such as Cross-Site Scripting (XSS), data leaks, and privilege escalation. Here are the key points:

#### 1. **Avoid Direct DOM Manipulation**
- **Risk:** Bypassing React's virtual DOM and manipulating the DOM directly (e.g., via \`document.getElementById\`) can introduce XSS vulnerabilities and make your application harder to audit.
- **Best Practice:** Always use React's state and props to update the UI.

#### 2. **Sanitize User Input**
- **Risk:** Event handlers often process user input (e.g., from forms). Unsanitized input can be used to inject malicious scripts.
- **Best Practice:** Always sanitize and validate user input before using it, especially if rendering it as HTML or sending it to a server.

#### 3. **Avoid Using \`dangerouslySetInnerHTML\`**
- **Risk:** Using \`dangerouslySetInnerHTML\` in event handlers can expose your app to XSS if the HTML is not properly sanitized.
- **Best Practice:** Only use \`dangerouslySetInnerHTML\` with trusted, sanitized content.

#### 4. **Do Not Trust Event Data**
- **Risk:** Event objects (e.g., \`event.target.value\`) can be manipulated by malicious users.
- **Best Practice:** Treat all event data as untrusted and validate it before processing.

#### 5. **Prevent Event Bubbling When Necessary**
- **Risk:** Sensitive actions (like delete or update) can be unintentionally triggered by event bubbling.
- **Best Practice:** Use \`event.stopPropagation()\` or \`event.preventDefault()\` judiciously to control event flow.

#### 6. **Avoid Inline Event Handlers with User Data**
- **Risk:** Inline event handlers that interpolate user data can introduce XSS vulnerabilities.
- **Best Practice:** Do not inject user data directly into event handler attributes.

#### 7. **Least Privilege Principle**
- **Risk:** Event handlers that perform privileged actions (e.g., admin operations) can be abused if not properly protected.
- **Best Practice:** Ensure that sensitive event handlers check for proper authentication and authorization.

#### 8. **Beware of Third-Party Libraries**
- **Risk:** Third-party event handlers or components may not follow best security practices.
- **Best Practice:** Audit third-party code and keep dependencies up to date.

---

#### **Summary Table**

| Risk Area                        | Best Practice                                  |
|-----------------------------------|------------------------------------------------|
| Direct DOM Manipulation           | Use React state/props                          |
| Unsanitized User Input            | Sanitize and validate input                    |
| \`dangerouslySetInnerHTML\`         | Avoid or sanitize content                      |
| Trusting Event Data               | Always validate event data                     |
| Event Bubbling                    | Control with stopPropagation/preventDefault    |
| Inline Handlers with User Data    | Never interpolate user data directly           |
| Privileged Actions                | Check authentication/authorization             |
| Third-Party Libraries             | Audit and update dependencies                  |

---

**In summary:**  
Always treat event data as untrusted, avoid direct DOM manipulation, and ensure all user input is sanitized and validated. Follow the principle of least privilege and be cautious with third-party code to maintain a secure React application.`,level:"Advanced",created_at:"2025-05-06T15:54:16.226081Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"0fa73e54-0df0-47d1-a0a9-78d56c5d951e",question:"How do you handle accessibility-related events in React?",answer:`\`\`\`markdown Handling Accessibility-Related Events in React
---

In React, ensuring your application is accessible involves more than just handling standard mouse and keyboard events. You should consider accessibility-related events and best practices to make your components usable by everyone, including those using assistive technologies.

### Common Accessibility-Related Events

- **onFocus / onBlur**: Triggered when an element gains or loses focus. Useful for managing focus indicators or announcing changes to screen readers.
- **onKeyDown / onKeyUp / onKeyPress**: Capture keyboard interactions, which are crucial for users who navigate via keyboard.
- **onMouseEnter / onMouseLeave**: Can be used, but should always have keyboard-accessible alternatives.
- **onChange**: For form elements, to notify assistive tech of value changes.

### Example: Accessible Button Component

\`\`\`jsx
function AccessibleButton({ onClick, children }) {
  // Handles both click and keyboard activation (Enter/Space)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick(event);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onFocus={() => console.log('Button focused')}
      onBlur={() => console.log('Button blurred')}
      aria-pressed="false"
      style={{ cursor: 'pointer', padding: '8px', border: '1px solid #ccc' }}
    >
      {children}
    </div>
  );
}
\`\`\`

### Best Practices

- **Use Semantic HTML**: Prefer \`<button>\`, \`<a>\`, and other semantic elements when possible, as they have built-in accessibility.
- **Keyboard Support**: Always ensure interactive elements are accessible via keyboard.
- **ARIA Attributes**: Use ARIA roles and properties (like \`aria-pressed\`, \`aria-label\`) to provide additional context.
- **Announce Changes**: Use \`aria-live\` regions or similar techniques to announce dynamic content changes.

### Resources

- [React Accessibility Docs](https://react.dev/reference/react-dom/components/common#accessibility)
- [MDN: ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

By thoughtfully handling events and following accessibility best practices, you can create React applications that are inclusive and usable by all users.`,level:"Intermediate",created_at:"2025-05-06T15:54:16.226098Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"0d55371e-193f-4685-998f-68914639738b",question:"Can you use passive event listeners with React synthetic events?",answer:`\`\`\`markdown No, you cannot use passive event listeners with React synthetic events.

React's synthetic event system wraps native browser events in a cross-browser wrapper and manages event delegation internally. When you attach an event handler in React (e.g., onScroll, onWheel), React does not expose an API to specify options like { passive: true } on these synthetic events.

If you need to use passive event listeners (for example, to improve scroll performance), you must attach the event listener directly to the DOM node using addEventListener:

\`\`\`jsx
import { useEffect, useRef } from "react";

function MyComponent() {
  const divRef = useRef(null);

  useEffect(() => {
    const node = divRef.current;
    const handler = (e) => {
      // handle scroll
    };
    node.addEventListener("scroll", handler, { passive: true });

    return () => {
      node.removeEventListener("scroll", handler);
    };
  }, []);

  return <div ref={divRef}>Scrollable content</div>;
}
\`\`\`

**Summary:**  
React synthetic events do not support passive event listeners. Use native DOM event listeners if you need passive: true.`,level:"Advanced",created_at:"2025-05-06T15:54:16.226114Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"ffe852f8-d8b7-484b-98f8-43a84d9071a0",question:"How do you handle clipboard events in React?",answer:`\`\`\`markdown To handle clipboard events in React, you use the onCopy, onCut, and onPaste event handlers provided by React’s SyntheticEvent system. These handlers can be attached to input fields, textareas, or other elements that support clipboard operations.

Here’s an example of handling clipboard events in a React component:

\`\`\`jsx
import React from 'react';

function ClipboardExample() {
  const handleCopy = (event) => {
    alert('Text copied!');
    // You can access the copied text with event.clipboardData
  };

  const handleCut = (event) => {
    alert('Text cut!');
    // You can access the cut text with event.clipboardData
  };

  const handlePaste = (event) => {
    const pastedText = event.clipboardData.getData('text');
    alert(\`Pasted text: \${pastedText}\`);
    // You can manipulate the pasted text or prevent the default paste
    // event.preventDefault();
  };

  return (
    <textarea
      onCopy={handleCopy}
      onCut={handleCut}
      onPaste={handlePaste}
      placeholder="Try copying, cutting, or pasting here"
      rows={4}
      cols={40}
    />
  );
}

export default ClipboardExample;
\`\`\`

**Key Points:**
- React normalizes clipboard events as SyntheticEvents.
- The event object provides access to clipboard data via event.clipboardData.
- You can use event.preventDefault() to override the default clipboard behavior if needed.

**Supported Clipboard Events in React:**
- \`onCopy\`
- \`onCut\`
- \`onPaste\``,level:"Intermediate",created_at:"2025-05-06T15:54:16.226130Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"d5e92722-e7e1-40d7-8e26-beaea51fc7e2",question:"How do you handle composition events for input methods in React?",answer:`\`\`\`markdown
### Handling Composition Events for Input Methods in React

When dealing with input methods such as Chinese, Japanese, or Korean IMEs (Input Method Editors), React's standard \`onChange\` event can fire before the user has finished composing their input. This can lead to issues like prematurely updating state or validating incomplete input.

#### Key Composition Events in React

React supports the following composition events:

- \`onCompositionStart\`: Fired when composition starts.
- \`onCompositionUpdate\`: Fired when the composition is updated.
- \`onCompositionEnd\`: Fired when composition ends.

#### Best Practice: Deferring \`onChange\` Handling

To handle input correctly, you should track whether composition is in progress and only process the \`onChange\` event when composition has ended.

#### Example Implementation

\`\`\`jsx
import React, { useState, useRef } from 'react';

function InputWithIME() {
  const [value, setValue] = useState('');
  const isComposing = useRef(false);

  const handleComposition = (e) => {
    if (e.type === 'compositionstart') {
      isComposing.current = true;
    }
    if (e.type === 'compositionend') {
      isComposing.current = false;
      // After composition ends, handle the final input value
      setValue(e.target.value);
    }
  };

  const handleChange = (e) => {
    if (!isComposing.current) {
      setValue(e.target.value);
    }
    // If composing, do not update state yet
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      onCompositionStart={handleComposition}
      onCompositionUpdate={handleComposition}
      onCompositionEnd={handleComposition}
    />
  );
}
\`\`\`

#### Explanation

- **Track composition state:** Use a ref (\`isComposing\`) to track whether the user is currently composing input.
- **Defer state updates:** Only update the state (\`setValue\`) when not composing, or when composition ends.
- **Why this matters:** This prevents issues such as incomplete or invalid input being processed during IME composition.

#### References

- [React Docs: SyntheticEvent](https://react.dev/reference/react-dom/components/input#handling-composition-events)
- [MDN: Composition Events](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event)
\`\`\`
`,level:"Advanced",created_at:"2025-05-06T15:54:16.226146Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"1bdd45d9-4a4d-4a12-a678-8fd4f47be1f7",question:"What happens to synthetic events when a component unmounts?",answer:`\`\`\`markdown When a React component unmounts, all synthetic events attached to elements within that component are automatically cleaned up by React. This means:

- **Event listeners are removed:** React detaches any event handlers associated with the unmounted component’s DOM nodes.
- **Memory leaks are prevented:** Since event handlers are cleaned up, there’s no risk of memory leaks due to lingering references.
- **No further event handling:** Synthetic events will not fire for unmounted components, even if the DOM nodes still exist temporarily.

**Example:**

\`\`\`jsx
function Example() {
  useEffect(() => {
    // Setup logic
    return () => {
      // Cleanup logic runs on unmount
    };
  }, []);

  function handleClick(e) {
    // Synthetic event handler
    console.log('Clicked!');
  }

  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`

When the \`Example\` component unmounts, React ensures that \`handleClick\` is no longer attached to the button, and the synthetic event system will not process events for it.

**Summary Table**

| Action                   | React’s Behavior                   |
|--------------------------|------------------------------------|
| Component unmounts       | Synthetic events are cleaned up    |
| Event handler references | Automatically removed              |
| Memory leaks             | Prevented by React’s cleanup       |

**Note:** If you attach native DOM event listeners manually (e.g., \`element.addEventListener\`), you must clean those up yourself in \`useEffect\` cleanup functions.`,level:"Intermediate",created_at:"2025-05-06T15:54:16.226165Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"e7fc7812-dd56-4ed6-917e-d7dc8a37d0a1",question:"How do you handle event bubbling in nested React components?",answer:`\`\`\`markdown
In React, event bubbling occurs when an event triggered on a child element propagates up to its parent elements. To handle event bubbling in nested components, you can:

1. **Stop Propagation:**  
   Use \`event.stopPropagation()\` in your event handler to prevent the event from bubbling up to parent components.

   \`\`\`jsx
   function ChildComponent() {
     const handleClick = (event) => {
       event.stopPropagation();
       // Child-specific logic
     };

     return <button onClick={handleClick}>Click Me</button>;
   }
   \`\`\`

2. **Conditional Logic in Parent:**  
   In the parent component, you can check the source of the event or use flags to determine if the event should be handled.

   \`\`\`jsx
   function ParentComponent() {
     const handleParentClick = (event) => {
       // Parent-specific logic
     };

     return (
       <div onClick={handleParentClick}>
         <ChildComponent />
       </div>
     );
   }
   \`\`\`

3. **Event Delegation:**  
   Sometimes, you might want to allow bubbling for certain cases. In such scenarios, you can use event delegation and inspect \`event.target\` or \`event.currentTarget\` to decide how to handle the event.

**Summary:**  
To control event bubbling in nested React components, use \`event.stopPropagation()\` in child handlers or add conditional logic in parent handlers to manage how events are processed.
\`\`\`
`,level:"Intermediate",created_at:"2025-05-06T15:54:16.226180Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"},{id:"a903cb73-90b4-4834-bfae-fdcb575f8416",question:"How do you use event modifiers (like once, capture) in React?",answer:`\`\`\`markdown In React, you don't use event modifiers like once or capture as you might in Vue or plain HTML. Instead, React provides a declarative way to handle events using props, and you can achieve similar behaviors programmatically.

### 1. **Handling \`once\` (Run Handler Only Once)**

React doesn't have a built-in \`once\` modifier, but you can implement it yourself:

\`\`\`jsx
import { useState } from 'react';

function OnceButton() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (!clicked) {
      alert('Button clicked!');
      setClicked(true);
    }
  }

  return (
    <button onClick={handleClick} disabled={clicked}>
      Click me once
    </button>
  );
}
\`\`\`

Or, for a one-off event, you can remove the handler after the first call:

\`\`\`jsx
function OnceButton() {
  function handleClick(e) {
    alert('Clicked once!');
    e.target.onclick = null; // Removes the handler
  }

  return <button onClick={handleClick}>Click me once</button>;
}
\`\`\`

### 2. **Handling \`capture\` (Event Capturing Phase)**

React supports the capture phase by using the \`Capture\` suffix in event prop names:

\`\`\`jsx
function CaptureExample() {
  function handleClickCapture() {
    console.log('Captured on parent');
  }

  function handleClick() {
    console.log('Bubbled on child');
  }

  return (
    <div onClickCapture={handleClickCapture}>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
\`\`\`

- \`onClickCapture\` fires during the capture phase.
- \`onClick\` fires during the bubble phase.

### 3. **Summary Table**

| Modifier | React Equivalent                |
|----------|---------------------------------|
| \`once\`   | Custom logic in handler/state   |
| \`capture\`| Use \`onEventCapture\` prop       |

### 4. **References**

- [React Docs: SyntheticEvent](https://react.dev/reference/react-dom/components/common#events)
- [React Docs: Event Delegation](https://react.dev/learn/responding-to-events#event-propagation)

---

**In summary:**  
React does not use event modifiers in the template. Use \`onEventCapture\` for capture phase, and implement \`once\` behavior with state or custom logic.`,level:"Advanced",created_at:"2025-05-06T15:54:16.226195Z",topic:"cdb2d752-18d5-4337-81d3-111ac74d3c44"}];export{e as default};
