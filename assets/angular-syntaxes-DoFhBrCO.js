const e=[{id:"2dc36a59-598d-47e6-aabc-fb6ee140d118",question:"What is the syntax for string interpolation in Angular templates?",answer:"```markdown **Answer:**\n\nIn Angular templates, string interpolation is done using double curly braces `{{ }}`. You place the expression you want to evaluate inside the braces.\n\n**Syntax:**\n```html\n{{ expression }}\n```\n\n**Example:**\n```html\n<p>Hello, {{ userName }}!</p>\n```\n\nThis will display the value of the `userName` property from the component in the template.",level:"Beginner",created_at:"2025-04-20T08:54:51.509166Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"e8ed1e6b-c8b6-48fb-b0d4-3b9e1ddc23e3",question:"How do you bind a property of a DOM element to a component property in Angular?",answer:'```markdown You can bind a property of a DOM element to a component property in Angular using **property binding** syntax. This is done by enclosing the DOM property in square brackets and assigning it the component property.\n\n**Syntax:**\n\n```html\n<element [property]="componentProperty"></element>\n```\n\n**Example:**\n\nSuppose you have a component property called `imageUrl`:\n\n```typescript\nexport class MyComponent {\n  imageUrl = \'https://example.com/image.jpg\';\n}\n```\n\nYou can bind the `src` property of an `<img>` element to `imageUrl` like this:\n\n```html\n<img [src]="imageUrl">\n```\n\nThis way, the `src` attribute of the `<img>` element will always reflect the value of the `imageUrl` property in your component.',level:"Beginner",created_at:"2025-04-20T08:54:51.509200Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"7a31a05b-d466-4baf-b01e-a5b2551f40fd",question:"What is the syntax for event binding in Angular?",answer:'```markdown **Answer:**\n\nIn Angular, the syntax for event binding is to enclose the event name in parentheses and assign it to a template statement. The general syntax is:\n\n```html\n<button (click)="onClickHandler()">Click me</button>\n```\n\n- **(click)** is the event you want to listen for (in this case, the click event).\n- **onClickHandler()** is the method in your component that will be called when the event occurs.\n\n**General Syntax:**\n\n```html\n<element (event)="statement"></element>\n```\n\n**Example:**\n\n```html\n<input (input)="onInputChange($event)">\n```',level:"Beginner",created_at:"2025-04-20T08:54:51.509212Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"a87adb92-e296-4f1d-b1fb-3d1474a79874",question:"How do you use two-way data binding in Angular templates?",answer:'```markdown To use two-way data binding in Angular templates, you use the **ngModel** directive with the special "banana-in-a-box" syntax: `[(ngModel)]`.\n\n**Example:**\n\n```html\n<input [(ngModel)]="username">\n<p>Your username is: {{ username }}</p>\n```\n\n- `[(ngModel)]="username"` binds the input\'s value to the `username` property in your component.\n- Any changes in the input field update the `username` property, and vice versa.\n\n**Note:**  \nTo use `ngModel`, you need to import the `FormsModule` in your Angular module:\n\n```typescript\nimport { FormsModule } from \'@angular/forms\';\n\n@NgModule({\n  imports: [FormsModule]\n})\nexport class AppModule { }\n```\n\n**Summary:**  \nUse `[(ngModel)]` for two-way data binding in Angular templates.',level:"Beginner",created_at:"2025-04-20T08:54:51.509219Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"e8e25c54-c8b6-4478-ac01-e6faa8cc0eda",question:"What is the syntax for using ngIf directive in Angular?",answer:'```html\n<div *ngIf="condition">\n  <!-- Content to display if condition is true -->\n</div>\n```\n\n- Replace `condition` with your boolean expression.\n- The content inside the `<div>` will only be rendered if the condition evaluates to `true`.',level:"Beginner",created_at:"2025-04-20T08:54:51.509244Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"ce871c25-51dc-4d6c-9813-785c3cc1f3a8",question:"How do you use ngFor to loop over a list in Angular templates?",answer:`\`\`\`markdown To loop over a list in Angular templates, use the \`*ngFor\` directive. Here’s the basic syntax:

\`\`\`html
<li *ngFor="let item of items">
  {{ item }}
</li>
\`\`\`

**Explanation:**
- \`items\` is an array defined in your component.
- \`let item of items\` creates a local variable \`item\` for each element in the array.
- The \`<li>\` element will be repeated for each item in the \`items\` array.

**Example:**

Suppose your component has:

\`\`\`typescript
items = ['Apple', 'Banana', 'Cherry'];
\`\`\`

Your template:

\`\`\`html
<ul>
  <li *ngFor="let item of items">
    {{ item }}
  </li>
</ul>
\`\`\`

**Output:**

- Apple
- Banana
- Cherry

This is how you use \`ngFor\` to loop over a list in Angular templates.`,level:"Beginner",created_at:"2025-04-20T08:54:51.509257Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"6493494a-47e5-4010-90ab-de5ad592a797",question:"What is the syntax for applying a CSS class conditionally in Angular?",answer:"```markdown\nIn Angular, you can apply a CSS class conditionally using the `[class.class-name]` binding or the `[ngClass]` directive.\n\n**Example using `[class.class-name]`:**\n```html\n<div [class.active]=\"isActive\">Content</div>\n```\nThis will add the active class to the div only if isActive is true.\n\n**Example using `[ngClass]`:**\n```html\n<div [ngClass]=\"{ 'active': isActive, 'disabled': isDisabled }\">Content</div>\n```\nThis will add the active class if isActive is true and the disabled class if isDisabled is true.\n```\n",level:"Beginner",created_at:"2025-04-20T08:54:51.509270Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"2ca35aef-8087-4e4e-9e98-60c0fe1f5a60",question:"How do you bind inline styles dynamically in Angular?",answer:`\`\`\`markdown You can bind inline styles dynamically in Angular using the \`[style]\` or \`[ngStyle]\` directive.

### Using \`[style.property]\` Syntax

Bind a single style property dynamically:

\`\`\`html
<div [style.background-color]="isActive ? 'green' : 'red'">
  This div's background color changes dynamically.
</div>
\`\`\`

### Using \`[ngStyle]\` Directive

Bind multiple style properties using an object:

\`\`\`html
<div [ngStyle]="{'font-size': fontSize + 'px', 'color': fontColor}">
  This div's styles are set dynamically.
</div>
\`\`\`

**In your component:**

\`\`\`typescript
fontSize = 20;
fontColor = 'blue';
\`\`\`

---

**Summary:**  
- Use \`[style.property]="expression"\` for single style properties.
- Use \`[ngStyle]="styleObject"\` for multiple or complex style bindings.`,level:"Beginner",created_at:"2025-04-20T08:54:51.509283Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"f2930903-638a-4135-92fd-25018ba9333b",question:"What is the syntax for using trackBy function with ngFor?",answer:'```markdown\nIn Angular, the `trackBy` function is used with `*ngFor` to optimize rendering by uniquely identifying items in a list. The syntax for using `trackBy` with `ngFor` is as follows:\n\n```html\n<div *ngFor="let item of items; trackBy: trackByFn">\n  {{ item.name }}\n</div>\n```\n\nWhere `trackByFn` is a method defined in your component:\n\n```typescript\ntrackByFn(index: number, item: any): any {\n  return item.id; // or any unique identifier\n}\n```\n\n**Summary of the syntax:**\n```html\n*ngFor="let item of items; trackBy: trackByFn"\n```\n```',level:"Intermediate",created_at:"2025-04-20T08:54:51.509471Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"d886180c-cdf5-41ca-bde5-14e244da83ae",question:"How do you use template reference variables to access DOM elements?",answer:`\`\`\`markdown
In Angular, you can use **template reference variables** to access DOM elements directly within your template. To create a template reference variable, add a \`#\` symbol followed by a variable name to an element.

**Example:**

\`\`\`html
<input #myInput type="text">
<button (click)="logValue(myInput.value)">Log Input Value</button>
\`\`\`

In this example:

- \`#myInput\` is the template reference variable.
- You can access the input element's value using \`myInput.value\` in your template or pass it to a method in your component.

**Component method:**

\`\`\`typescript
logValue(value: string) {
  console.log(value);
}
\`\`\`

**Summary:**  
Template reference variables allow you to reference and interact with DOM elements directly in your Angular templates.
\`\`\``,level:"Beginner",created_at:"2025-04-20T08:54:51.509489Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"b8dc9b86-f1bc-4f04-a26b-0120972c56b8",question:"What is the syntax for using the async pipe with Observables?",answer:`\`\`\`markdown
In Angular, the **async pipe** is used in templates to subscribe to an Observable (or Promise) and automatically manage subscriptions. The syntax for using the async pipe with Observables is:

\`\`\`html
{{ observableVariable | async }}
\`\`\`

Or, when used with structural directives like *ngIf or *ngFor:

\`\`\`html
<div *ngIf="observableVariable | async as value">
  {{ value }}
</div>
\`\`\`

**Example:**

\`\`\`typescript
// In your component.ts
myObservable$: Observable<string> = of('Hello, Angular!');
\`\`\`

\`\`\`html
<!-- In your component.html -->
<p>{{ myObservable$ | async }}</p>
\`\`\`

**Key Points:**
- The async pipe subscribes to the Observable and returns the latest emitted value.
- It automatically unsubscribes when the component is destroyed, helping to prevent memory leaks.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509567Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"e91bffd6-679d-4bcd-b52b-d376b7c97fae",question:"How do you pass data from a parent component to a child component using @Input?",answer:`\`\`\`markdown To pass data from a parent component to a child component in Angular, you use the @Input decorator in the child component. Here’s how you can do it:

### 1. In the Child Component

Import \`Input\` from \`@angular/core\` and decorate the property you want to receive data with \`@Input()\`:

\`\`\`typescript
// child.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: \`<p>Received: {{ data }}</p>\`
})
export class ChildComponent {
  @Input() data: string;
}
\`\`\`

### 2. In the Parent Component Template

Bind the property you want to pass to the child component’s input property using property binding syntax \`[property]="value"\`:

\`\`\`html
<!-- parent.component.html -->
<app-child [data]="parentData"></app-child>
\`\`\`

Here, \`parentData\` is a property defined in the parent component’s class.

### 3. In the Parent Component Class

Define the property you want to pass:

\`\`\`typescript
// parent.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  parentData = 'Hello from Parent!';
}
\`\`\`

---

**Summary:**  
- Use \`@Input()\` in the child component to declare a property for receiving data.
- Use property binding \`[childProperty]="parentValue"\` in the parent’s template to pass data.`,level:"Beginner",created_at:"2025-04-20T08:54:51.509295Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"ce6cf013-e3e9-4303-8660-e4ac9255f060",question:"What is the syntax for emitting an event from a child component to a parent using @Output?",answer:`\`\`\`markdown
To emit an event from a child component to a parent using \`@Output\` in Angular:

1. **In the child component:**
   - Import \`EventEmitter\` and \`Output\` from \`@angular/core\`.
   - Create an \`@Output\` property with an \`EventEmitter\`.
   - Call \`.emit()\` to send the event.

   \`\`\`typescript
   // child.component.ts
   import { Component, Output, EventEmitter } from '@angular/core';

   @Component({
     selector: 'app-child',
     template: \`<button (click)="sendMessage()">Send Message</button>\`
   })
   export class ChildComponent {
     @Output() messageEvent = new EventEmitter<string>();

     sendMessage() {
       this.messageEvent.emit('Hello from Child!');
     }
   }
   \`\`\`

2. **In the parent component template:**
   - Listen to the event using the child selector and event binding syntax.

   \`\`\`html
   <!-- parent.component.html -->
   <app-child (messageEvent)="receiveMessage($event)"></app-child>
   \`\`\`

3. **In the parent component class:**
   - Define the handler method.

   \`\`\`typescript
   // parent.component.ts
   receiveMessage(message: string) {
     console.log(message); // Output: Hello from Child!
   }
   \`\`\`

**Summary of the syntax:**
- In child: \`@Output() eventName = new EventEmitter<Type>();\`
- In child: \`this.eventName.emit(data);\`
- In parent template: \`<child-selector (eventName)="handler($event)"></child-selector>\`
\`\`\`
`,level:"Beginner",created_at:"2025-04-20T08:54:51.509307Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"982c347c-6a0f-41a0-9f3d-cd7045068763",question:"How do you define a template reference variable in Angular?",answer:'```markdown You can define a template reference variable in Angular by prefixing a variable name with a hash symbol (#) within your template. This variable can then be used to reference a DOM element or an Angular component/directive instance.\n\n**Example:**\n\n```html\n<input #myInput type="text">\n<button (click)="logValue(myInput.value)">Log Value</button>\n```\n\nIn this example, #myInput is a template reference variable that refers to the input element. You can access its properties (like value) within the template.',level:"Beginner",created_at:"2025-04-20T08:54:51.509319Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"8a477144-f4d7-4f46-abdd-084971935c69",question:"What is the syntax for using pipes in Angular templates?",answer:`\`\`\`markdown In Angular templates, pipes are used to transform data before displaying it. The syntax for using a pipe is:

\`\`\`html
{{ expression | pipeName }}
\`\`\`

You can also chain multiple pipes or pass parameters to a pipe:

\`\`\`html
{{ expression | pipeName:parameter1:parameter2 | anotherPipe }}
\`\`\`

**Example:**

\`\`\`html
<!-- Using the 'uppercase' pipe -->
<p>{{ 'hello world' | uppercase }}</p>
<!-- Output: HELLO WORLD -->

<!-- Using the 'date' pipe with a format parameter -->
<p>{{ myDate | date:'longDate' }}</p>
\`\`\`

**Summary:**  
Use the pipe (|) character in interpolation to apply a pipe to an expression.`,level:"Beginner",created_at:"2025-04-20T08:54:51.509327Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"180cf281-06e2-416d-b840-a99f8cd0da68",question:"How do you use the safe navigation operator in Angular templates?",answer:'```markdown\nIn Angular templates, the **safe navigation operator** (`?.`) is used to prevent errors when trying to access properties of objects that might be `null` or `undefined`. It allows you to safely read the value without causing a runtime error if the object does not exist.\n\n**Syntax Example:**\n\n```html\n<p>{{ user?.name }}</p>\n```\n\nIn this example, if `user` is `null` or `undefined`, Angular will not throw an error and will simply render nothing for `user.name`.\n\n**Use Case:**\n\nUse the safe navigation operator when you are not sure if an object or its property exists at the time the template is rendered.\n\n**More Examples:**\n\n```html\n<!-- Accessing nested properties safely -->\n<p>{{ order?.customer?.address?.city }}</p>\n\n<!-- Safe navigation in property binding -->\n<img [src]="profile?.avatarUrl">\n```\n```',level:"Beginner",created_at:"2025-04-20T08:54:51.509334Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"048cc759-6ed3-4718-8393-23236ea29238",question:"What is the syntax for using ngSwitch in Angular templates?",answer:'```markdown\nIn Angular templates, the `ngSwitch` directive is used to conditionally display elements based on a matching expression. The syntax involves three main directives:\n\n- `*ngSwitch`: Placed on a container element, it evaluates an expression.\n- `*ngSwitchCase`: Placed on child elements, it matches against the value of `ngSwitch`.\n- `*ngSwitchDefault`: Placed on a child element to display when no cases match.\n\n**Example Syntax:**\n\n```html\n<div [ngSwitch]="expression">\n  <div *ngSwitchCase="\'case1\'">Case 1 content</div>\n  <div *ngSwitchCase="\'case2\'">Case 2 content</div>\n  <div *ngSwitchDefault>Default content</div>\n</div>\n```\n\n- Replace `expression` with the variable or value you want to check.\n- Each `*ngSwitchCase` checks for a specific value.\n- The `*ngSwitchDefault` block is shown if none of the cases match.\n```\n',level:"Intermediate",created_at:"2025-04-20T08:54:51.509342Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"d84ccb09-84a3-4ce6-9435-36accdf92853",question:"How do you create a custom pipe and use it in a template?",answer:`\`\`\`markdown To create a custom pipe in Angular and use it in a template, follow these steps:

### 1. Generate a Pipe

You can use the Angular CLI:

\`\`\`bash
ng generate pipe myCustom
\`\`\`

Or manually create a file, e.g., \`my-custom.pipe.ts\`.

### 2. Implement the Pipe

Edit the generated file:

\`\`\`typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustom'
})
export class MyCustomPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    // Example: Make text uppercase
    return value.toUpperCase();
  }
}
\`\`\`

### 3. Register the Pipe

Ensure your pipe is declared in the \`declarations\` array of your module (usually \`app.module.ts\`):

\`\`\`typescript
import { MyCustomPipe } from './my-custom.pipe';

@NgModule({
  declarations: [
    // other components and pipes
    MyCustomPipe
  ],
  // ...
})
export class AppModule { }
\`\`\`

### 4. Use the Pipe in a Template

Apply your pipe using the pipe operator (\`|\`) in your component's template:

\`\`\`html
<p>{{ 'hello world' | myCustom }}</p>
\`\`\`

**Output:**
\`\`\`
HELLO WORLD
\`\`\`

---

**Summary:**  
- Create a pipe class implementing \`PipeTransform\`.
- Register it in your module.
- Use it in templates with the \`|\` operator.`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509349Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"da1c9e94-03dd-4634-8764-b952286a73b5",question:"What is the syntax for dependency injection in Angular components?",answer:`\`\`\`markdown
In Angular, dependency injection (DI) is typically implemented in components by specifying dependencies as parameters in the component’s constructor. Angular’s DI framework automatically provides instances of these dependencies when the component is created.

**Syntax Example:**

\`\`\`typescript
import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  constructor(private myService: MyService) {
    // Now you can use myService within this component
  }
}
\`\`\`

**Key Points:**
- Dependencies are listed as constructor parameters, usually with an access modifier (\`private\` or \`public\`).
- Angular injects the required service instance automatically.
- The service must be provided in the module or component (using \`providers\` array or \`providedIn: 'root'\` in the service).

**General Syntax:**

\`\`\`typescript
constructor(private dependencyName: DependencyType) { }
\`\`\`
\`\`\``,level:"Intermediate",created_at:"2025-04-20T08:54:51.509357Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"a0edfe7d-08b2-480b-9326-188917977ace",question:"How do you use the async pipe in Angular?",answer:`\`\`\`markdown
The \`async\` pipe in Angular is used to subscribe to an \`Observable\` or \`Promise\` directly from the template, automatically handling subscription and unsubscription. This is especially useful for displaying data from asynchronous sources without manually subscribing in your component code.

**Usage Example:**

Suppose you have an observable in your component:

\`\`\`typescript
// my.component.ts
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html'
})
export class MyComponent {
  data$: Observable<string> = of('Hello from Observable!');
}
\`\`\`

You can use the \`async\` pipe in your template like this:

\`\`\`html
<!-- my.component.html -->
<p>{{ data$ | async }}</p>
\`\`\`

**How it works:**

- The \`async\` pipe subscribes to \`data$\` and renders its emitted value.
- When the observable emits a new value, the view updates automatically.
- When the component is destroyed, the \`async\` pipe unsubscribes to prevent memory leaks.

**With *ngIf and async:**

You can also use it with structural directives:

\`\`\`html
<div *ngIf="data$ | async as data">
  {{ data }}
</div>
\`\`\`

**Summary Table:**

| Source Type   | Usage Example                |
| ------------- | --------------------------- |
| Observable    | \`{{ myObservable$ | async }}\` |
| Promise       | \`{{ myPromise | async }}\`     |

**Key Points:**

- No need to manually subscribe/unsubscribe in the component.
- Works with both Observables and Promises.
- Simplifies template code for asynchronous data.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509364Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"31435fc9-c271-450c-984c-eb70b57738e4",question:"What is the syntax for defining a route in Angular Router?",answer:`\`\`\`typescript
// Import the necessary Angular Router modules
import { Routes, RouterModule } from '@angular/router';
import { MyComponent } from './my.component';

// Define the routes array
const routes: Routes = [
  { path: 'my-path', component: MyComponent },
  // Additional routes can be added here
];

// Import the routes into your module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
\`\`\`

**Explanation:**
- Each route is an object with at least a \`path\` and a \`component\`.
- The \`path\` is the URL fragment, and \`component\` is the Angular component to display.
- Routes are registered using \`RouterModule.forRoot(routes)\` in your module.`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509373Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"52c5c981-f3b3-4792-91d5-73e2a9faa33f",question:"How do you use routerLink directive for navigation in Angular templates?",answer:`\`\`\`markdown To use the \`routerLink\` directive for navigation in Angular templates, you bind it to the target route path within an element, typically an anchor tag (\`<a>\`). This directive tells Angular’s Router to navigate to the specified route when the element is clicked, without reloading the page.

**Basic Syntax:**

\`\`\`html
<a routerLink="/path">Link Text</a>
\`\`\`

**Examples:**

1. **Navigate to a simple route:**
   \`\`\`html
   <a routerLink="/dashboard">Dashboard</a>
   \`\`\`

2. **Navigate with route parameters:**
   \`\`\`html
   <a [routerLink]="['/user', userId]">User Details</a>
   \`\`\`

3. **Using query parameters:**
   \`\`\`html
   <a [routerLink]="['/search']" [queryParams]="{query: 'angular'}">Search</a>
   \`\`\`

**Notes:**
- Use square brackets (\`[routerLink]\`) for dynamic values or route parameters.
- The \`routerLinkActive\` directive can be used to add a CSS class when the link is active:
  \`\`\`html
  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
  \`\`\`

**Summary Table:**

| Syntax                        | Usage Example                                      |
|-------------------------------|---------------------------------------------------|
| \`routerLink="/path"\`          | \`<a routerLink="/home">Home</a>\`                  |
| \`[routerLink]="['/path']"\`    | \`<a [routerLink]="['/user', userId]">User</a>\`    |
| \`[queryParams]="{...}"\`       | \`<a [routerLink]="['/search']" [queryParams]="{q: 'test'}">Search</a>\` |

This approach enables client-side navigation in Angular applications.`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509380Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"b3e16874-ad82-4148-a334-44bac10138cf",question:"How do you bind to form controls using ngModel in Angular?",answer:`\`\`\`markdown To bind to form controls using \`ngModel\` in Angular, you use the \`[(ngModel)]\` directive in your template. This enables two-way data binding between your component's property and the form control.

**Example:**

Suppose you have a component with a property called \`username\`:

\`\`\`typescript
// app.component.ts
export class AppComponent {
  username: string = '';
}
\`\`\`

You can bind an input field to this property using \`ngModel\`:

\`\`\`html
<!-- app.component.html -->
<input type="text" [(ngModel)]="username" placeholder="Enter your username">
<p>Your username is: {{ username }}</p>
\`\`\`

**Key Points:**

- \`[(ngModel)]\` creates a two-way binding: changes in the input update the component property, and vice versa.
- Make sure to import \`FormsModule\` in your module to use \`ngModel\`:

  \`\`\`typescript
  import { FormsModule } from '@angular/forms';

  @NgModule({
    imports: [BrowserModule, FormsModule],
    // ...
  })
  export class AppModule { }
  \`\`\`

**Summary Table:**

| Syntax                | Description                        |
|-----------------------|------------------------------------|
| \`[ngModel]\`           | One-way binding (component → view) |
| \`(ngModelChange)\`     | Event binding (view → component)   |
| \`[(ngModel)]\`         | Two-way binding                    |

**Note:**  
Always use \`FormsModule\` for template-driven forms with \`ngModel\`. For reactive forms, use \`FormControl\` and \`formControlName\` instead.`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509387Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"12343039-6137-4171-b9b1-fa7be6d1df75",question:"What is the syntax for creating a reactive form in Angular?",answer:`\`\`\`markdown
To create a reactive form in Angular, you use the \`FormGroup\`, \`FormControl\`, and optionally \`FormBuilder\` classes from \`@angular/forms\`. Here’s the typical syntax:

1. **Import Reactive Forms Module**  
   In your module (usually \`app.module.ts\`):

   \`\`\`typescript
   import { ReactiveFormsModule } from '@angular/forms';

   @NgModule({
     imports: [
       ReactiveFormsModule,
       // other imports
     ],
   })
   export class AppModule { }
   \`\`\`

2. **Create the Form in the Component**  
   In your component TypeScript file:

   \`\`\`typescript
   import { Component } from '@angular/core';
   import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

   @Component({
     selector: 'app-example-form',
     templateUrl: './example-form.component.html'
   })
   export class ExampleFormComponent {
     // Option 1: Using FormGroup and FormControl directly
     myForm = new FormGroup({
       name: new FormControl(''),
       email: new FormControl(''),
     });

     // Option 2: Using FormBuilder (recommended for larger forms)
     constructor(private fb: FormBuilder) {
       this.myForm = this.fb.group({
         name: [''],
         email: ['']
       });
     }
   }
   \`\`\`

3. **Bind the Form in the Template**  
   In your component HTML file:

   \`\`\`html
   <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
     <input formControlName="name" placeholder="Name">
     <input formControlName="email" placeholder="Email">
     <button type="submit">Submit</button>
   </form>
   \`\`\`

**Summary of Syntax:**

- Use \`[formGroup]="myForm"\` on the \`<form>\` element.
- Use \`formControlName="controlName"\` on input elements.
- Create the form model in the component using \`FormGroup\` and \`FormControl\` or \`FormBuilder\`.

**Example:**

\`\`\`typescript
// In component
myForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
});
\`\`\`

\`\`\`html
<!-- In template -->
<form [formGroup]="myForm">
  <input formControlName="username">
  <input formControlName="password" type="password">
</form>
\`\`\`
\`\`\``,level:"Intermediate",created_at:"2025-04-20T08:54:51.509395Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"752a2001-563b-44d4-883e-84b61247d72c",question:"How do you use ngClass with multiple conditions in Angular?",answer:"```markdown To use `ngClass` with multiple conditions in Angular, you can bind it to an object where the keys are the CSS class names and the values are boolean expressions. Angular will add a class if its corresponding expression evaluates to `true`.\n\n**Example:**\n\n```html\n<div [ngClass]=\"{\n  'active': isActive,\n  'error': hasError,\n  'highlight': isHighlighted && !hasError\n}\">\n  This div's classes depend on component state.\n</div>\n```\n\n**Component:**\n\n```typescript\nisActive = true;\nhasError = false;\nisHighlighted = true;\n```\n\n**Resulting classes:**  \nThe `<div>` will have the classes `active` and `highlight` applied, but not `error`.\n\n**Summary Table:**\n\n| Class Name   | Condition                | Applied if...           |\n|--------------|-------------------------|-------------------------|\n| `active`     | `isActive`              | `isActive` is `true`    |\n| `error`      | `hasError`              | `hasError` is `true`    |\n| `highlight`  | `isHighlighted && !hasError` | `isHighlighted` is `true` and `hasError` is `false` |\n\nYou can use any valid JavaScript expression for the conditions. This makes `ngClass` very flexible for applying multiple classes based on different component states.",level:"Intermediate",created_at:"2025-04-20T08:54:51.509403Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"7d8b0718-cb4f-441c-971c-15d3ee7d863a",question:"What is the syntax for using ng-template and ng-container in Angular?",answer:'```markdown\nIn Angular, `ng-template` and `ng-container` are structural directives used for rendering elements conditionally or grouping elements without adding extra nodes to the DOM.\n\n### `ng-template` Syntax\n\n`ng-template` defines a template that is not rendered by default. It is often used with structural directives like `*ngIf`, `*ngFor`, or with `ngTemplateOutlet`.\n\n**Example:**\n```html\n<ng-template #myTemplate>\n  <p>This is a template!</p>\n</ng-template>\n\n<!-- Usage with ngIf -->\n<ng-container *ngIf="showTemplate; else myTemplate">\n  <p>Template is shown!</p>\n</ng-container>\n```\n\n### `ng-container` Syntax\n\n`ng-container` acts as a grouping element that does not render any extra DOM. It is useful for applying structural directives without introducing new elements.\n\n**Example:**\n```html\n<ng-container *ngIf="isLoggedIn">\n  <p>Welcome, user!</p>\n  <button (click)="logout()">Logout</button>\n</ng-container>\n```\n\n### Summary Table\n\n| Directive      | Purpose                                 | Syntax Example                                     |\n|----------------|-----------------------------------------|----------------------------------------------------|\n| `ng-template`  | Define a template block (not rendered)  | `<ng-template #tpl>...</ng-template>`              |\n| `ng-container` | Group elements, no extra DOM node       | `<ng-container *ngIf="cond">...</ng-container>`    |\n\n**Note:**  \n- `ng-template` is not rendered unless specifically referenced.\n- `ng-container` is rendered only if its condition is true, but does not add an extra element to the DOM.\n```\n',level:"Intermediate",created_at:"2025-04-20T08:54:51.509410Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"c7e0ff5d-210e-41e7-9d61-36c9efa8a071",question:"How do you use structural directives with the asterisk (*) syntax in Angular?",answer:'```markdown\nIn Angular, structural directives are used to change the structure of the DOM by adding or removing elements. The most common structural directives are `*ngIf`, `*ngFor`, and `*ngSwitch`. The asterisk (`*`) syntax is a shorthand that tells Angular to transform the element and its directive into an `<ng-template>` under the hood.\n\n### Usage Examples\n\n#### 1. `*ngIf`\nDisplays an element only if the condition is true.\n```html\n<div *ngIf="isLoggedIn">\n  Welcome, user!\n</div>\n```\n\n#### 2. `*ngFor`\nRepeats an element for each item in a collection.\n```html\n<li *ngFor="let item of items">\n  {{ item }}\n</li>\n```\n\n#### 3. `*ngSwitchCase`\nUsed with `ngSwitch` to display elements based on a switch expression.\n```html\n<div [ngSwitch]="color">\n  <p *ngSwitchCase="\'red\'">Red color</p>\n  <p *ngSwitchCase="\'blue\'">Blue color</p>\n  <p *ngSwitchDefault>Other color</p>\n</div>\n```\n\n### How the Asterisk Works\n\nThe asterisk (`*`) is syntactic sugar for using the `<ng-template>` element. For example:\n```html\n<div *ngIf="isVisible">Hello</div>\n```\nis equivalent to:\n```html\n<ng-template [ngIf]="isVisible">\n  <div>Hello</div>\n</ng-template>\n```\n\n### Summary\n\n- Use the `*` syntax before a structural directive to conditionally add or repeat elements.\n- Angular transforms the element into an `<ng-template>` at runtime.\n- This syntax makes templates more concise and readable.\n\n**References:**\n- [Angular Structural Directives Guide](https://angular.io/guide/structural-directives)\n```\n',level:"Intermediate",created_at:"2025-04-20T08:54:51.509418Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"9b6d27a0-0b22-43fb-a6cf-9e87ee1b8f57",question:"What is the syntax for creating a custom structural directive?",answer:`\`\`\`typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructural]'
})
export class MyStructuralDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appMyStructural(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
\`\`\`

**Usage in template:**
\`\`\`html
<div *appMyStructural="someCondition">
  This content is conditionally rendered.
</div>
\`\`\`

**Explanation:**
- The directive uses \`@Directive\` with a selector in attribute form (e.g., \`[appMyStructural]\`).
- Inject \`TemplateRef\` (the template to render) and \`ViewContainerRef\` (the location in the DOM).
- Use an \`@Input()\` property with the same name as the selector to receive the expression value.
- Use \`createEmbeddedView\` to render the template or \`clear\` to remove it, based on the condition.`,level:"Advanced",created_at:"2025-04-20T08:54:51.509425Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"6c7c879b-a074-43a3-8fa0-b09bce5eceb8",question:"How do you use ViewChild and ViewChildren decorators in Angular?",answer:`\`\`\`markdown
In Angular, the \`@ViewChild\` and \`@ViewChildren\` decorators are used to access DOM elements, directives, or child components from a parent component class. They allow you to interact with elements after Angular has rendered the view.

## \`@ViewChild\` Decorator

- **Purpose:** Gets a reference to a single DOM element, directive, or child component.
- **Usage:** Place the decorator above a class property and pass a selector (template reference variable, component, or directive type).

**Example: Accessing a template reference variable**
\`\`\`typescript
// In your component template
<input #myInput type="text">

// In your component class
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

export class MyComponent implements AfterViewInit {
  @ViewChild('myInput') inputElement!: ElementRef;

  ngAfterViewInit() {
    this.inputElement.nativeElement.focus();
  }
}
\`\`\`

**Example: Accessing a child component**
\`\`\`typescript
// Child component
@Component({ selector: 'child-comp', template: '...' })
export class ChildComponent {
  sayHello() { console.log('Hello!'); }
}

// Parent component
@ViewChild(ChildComponent) childComp!: ChildComponent;

ngAfterViewInit() {
  this.childComp.sayHello();
}
\`\`\`

## \`@ViewChildren\` Decorator

- **Purpose:** Gets a reference to multiple DOM elements, directives, or child components as a \`QueryList\`.
- **Usage:** Place the decorator above a class property and pass a selector.

**Example: Accessing multiple elements**
\`\`\`typescript
// In your component template
<div #item *ngFor="let i of [1,2,3]">{{i}}</div>

// In your component class
import { ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

export class MyComponent implements AfterViewInit {
  @ViewChildren('item') items!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.items.forEach((item) => {
      console.log(item.nativeElement.textContent);
    });
  }
}
\`\`\`

## Key Points

- Both decorators should be used with \`AfterViewInit\` lifecycle hook to ensure the view is initialized.
- \`@ViewChild\` returns the first matching element/component.
- \`@ViewChildren\` returns a \`QueryList\` of all matching elements/components.
- Useful for direct DOM manipulation, accessing child component APIs, or working with directives.

**References:**
- [Angular Docs: @ViewChild](https://angular.io/api/core/ViewChild)
- [Angular Docs: @ViewChildren](https://angular.io/api/core/ViewChildren)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:51.509432Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"6833974e-906c-4745-a009-715989f3a316",question:"What is the syntax for using ContentChild and ContentChildren in Angular?",answer:`\`\`\`markdown
In Angular, \`@ContentChild\` and \`@ContentChildren\` are decorators used to access projected content within a component (i.e., content passed between \`<ng-content>\` tags).

### Syntax

#### 1. \`@ContentChild\`

Used to get a reference to a single projected element or directive.

\`\`\`typescript
import { Component, ContentChild, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: \`<ng-content></ng-content>\`
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('projectedContent') content!: ElementRef;

  ngAfterContentInit() {
    console.log(this.content); // Access the projected element
  }
}
\`\`\`

**Usage in parent template:**
\`\`\`html
<child-comp>
  <div #projectedContent>Some projected content</div>
</child-comp>
\`\`\`

#### 2. \`@ContentChildren\`

Used to get a \`QueryList\` of references to multiple projected elements or directives.

\`\`\`typescript
import { Component, ContentChildren, QueryList, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: \`<ng-content></ng-content>\`
})
export class ChildComponent implements AfterContentInit {
  @ContentChildren('projectedContent') contents!: QueryList<ElementRef>;

  ngAfterContentInit() {
    this.contents.forEach(content => console.log(content));
  }
}
\`\`\`

**Usage in parent template:**
\`\`\`html
<child-comp>
  <div #projectedContent>First</div>
  <div #projectedContent>Second</div>
</child-comp>
\`\`\`

---

### Notes

- The first argument to \`@ContentChild\`/\`@ContentChildren\` can be a template reference variable (as a string), a component/directive class, or a token.
- These decorators query for content **projected** into the component, not its own view.
- Access to the queried elements is available after the \`ngAfterContentInit\` lifecycle hook.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:51.509439Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"360b26c1-4eea-4c2f-914c-b568b5e8a34f",question:"How do you use HostListener and HostBinding decorators in Angular?",answer:`\`\`\`markdown
In Angular, \`@HostListener\` and \`@HostBinding\` are decorators used within directives and components to interact with the host element—the element to which the directive or component is applied.

---

## \`@HostListener\` Decorator

- **Purpose:** Listens to events on the host element and triggers a method in your directive/component.
- **Syntax:**
  \`\`\`typescript
  @HostListener('eventName', ['eventArg'])
  methodName(eventArg) {
    // logic here
  }
  \`\`\`
- **Example:**
  \`\`\`typescript
  import { Directive, HostListener } from '@angular/core';

  @Directive({
    selector: '[appClickTracker]'
  })
  export class ClickTrackerDirective {
    @HostListener('click', ['$event'])
    onClick(event: Event) {
      console.log('Host element clicked!', event);
    }
  }
  \`\`\`

---

## \`@HostBinding\` Decorator

- **Purpose:** Binds a property of the host element to a property in the directive/component.
- **Syntax:**
  \`\`\`typescript
  @HostBinding('propertyName') property: type;
  \`\`\`
- **Example:**
  \`\`\`typescript
  import { Directive, HostBinding } from '@angular/core';

  @Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective {
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor() {
      this.backgroundColor = 'yellow';
    }
  }
  \`\`\`

---

## Combined Example

\`\`\`typescript
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  @HostBinding('style.backgroundColor') bgColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = 'lightblue';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = '';
  }
}
\`\`\`
**Usage in template:**
\`\`\`html
<div appHoverHighlight>
  Hover over me to see the effect!
</div>
\`\`\`

---

## Summary Table

| Decorator      | Purpose                                      | Example Usage                       |
|----------------|----------------------------------------------|-------------------------------------|
| \`@HostListener\`| Listen to host element events                | \`@HostListener('click')\`            |
| \`@HostBinding\` | Bind host element properties/attributes      | \`@HostBinding('class.active')\`      |

---

**In summary:**  
- Use \`@HostListener\` to react to host element events.
- Use \`@HostBinding\` to bind properties or attributes of the host element to values in your directive/component.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:51.509447Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"6f023764-37e7-4942-b55f-7a842207f276",question:"What is the syntax for creating a dynamic component using ComponentFactoryResolver?",answer:"```markdown\nTo create a dynamic component in Angular using `ComponentFactoryResolver`, follow these steps:\n\n1. **Import Required Modules:**\n\n```typescript\nimport { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';\nimport { MyDynamicComponent } from './my-dynamic.component';\n```\n\n2. **Add a ViewChild Reference in Your Host Component:**\n\n```typescript\n@ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })\ncontainer!: ViewContainerRef;\n```\n\n3. **Add a Template Reference in the HTML:**\n\n```html\n<ng-template #dynamicContainer></ng-template>\n```\n\n4. **Use ComponentFactoryResolver to Create the Component:**\n\n```typescript\nconstructor(private resolver: ComponentFactoryResolver) {}\n\nngOnInit() {\n  const factory = this.resolver.resolveComponentFactory(MyDynamicComponent);\n  const componentRef = this.container.createComponent(factory);\n  // Optionally pass data to the component instance:\n  // componentRef.instance.someInput = someValue;\n}\n```\n\n---\n\n### **Summary Syntax**\n\n```typescript\nconst factory = this.resolver.resolveComponentFactory(MyDynamicComponent);\nconst componentRef = this.container.createComponent(factory);\n```\n\n- `MyDynamicComponent` is the component you want to create dynamically.\n- `container` is a `ViewContainerRef` pointing to an `<ng-template>` in your template.\n- `componentRef` is a reference to the created component instance.\n\n> **Note:**  \n> As of Angular 13+, you can use `ViewContainerRef.createComponent` directly without `ComponentFactoryResolver` for most use cases.\n```\n",level:"Advanced",created_at:"2025-04-20T08:54:51.509454Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"9800d36f-3065-4f0b-8106-4feee767195d",question:"How do you use attribute binding in Angular templates?",answer:`\`\`\`markdown Attribute binding in Angular allows you to set the value of an HTML attribute dynamically using template expressions. The syntax uses square brackets around the attribute name.

**Syntax:**
\`\`\`html
[element-attribute]="expression"
\`\`\`

**Example:**
\`\`\`html
<!-- Binds the src attribute of the image to the component's imageUrl property -->
<img [src]="imageUrl">

<!-- Binds the colspan attribute of the table cell to the component's colSpan property -->
<td [attr.colspan]="colSpan"></td>
\`\`\`

**Notes:**
- Use \`[attr.attributeName]\` when binding to non-standard or custom attributes.
- Attribute binding is useful for setting attributes that cannot be set with property binding (e.g., \`colspan\`, \`aria-*\`, etc.).

**Component Example:**
\`\`\`typescript
export class ExampleComponent {
  imageUrl = 'assets/logo.png';
  colSpan = 2;
}
\`\`\`

**Summary Table:**

| Syntax                | Purpose                            |
|-----------------------|------------------------------------|
| \`[src]="imageUrl"\`    | Binds property (standard attribute)|
| \`[attr.colspan]="2"\`  | Binds non-standard attribute       |

Attribute binding ensures that the attribute value updates automatically when the component property changes.`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509461Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"3ea62828-122a-4e8f-a81c-d05818e1f03b",question:"What is the syntax for using ngModel with form validation?",answer:`\`\`\`markdown
To use \`ngModel\` with form validation in Angular, you typically:

1. Import the \`FormsModule\` in your module.
2. Use the \`[(ngModel)]\` directive for two-way data binding.
3. Apply validation attributes (like \`required\`, \`minlength\`, etc.) to your input.
4. Access validation state via template reference variables.

**Example Syntax:**

\`\`\`html
<form #myForm="ngForm">
  <input
    name="username"
    [(ngModel)]="user.username"
    required
    minlength="3"
    #username="ngModel"
  />

  <div *ngIf="username.invalid && username.touched">
    <span *ngIf="username.errors?.required">Username is required.</span>
    <span *ngIf="username.errors?.minlength">
      Username must be at least 3 characters long.
    </span>
  </div>

  <button [disabled]="myForm.invalid">Submit</button>
</form>
\`\`\`

**Key Points:**
- \`[(ngModel)]="user.username"\` binds the input to the model.
- Validation attributes like \`required\` and \`minlength\` are added to the input.
- \`#username="ngModel"\` creates a local variable to access validation state.
- Use \`username.invalid\`, \`username.touched\`, and \`username.errors\` to show validation messages.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509497Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"e9ef8ea2-0f8f-4a53-9c46-51bfa3c4dbc9",question:"How do you use the $event object in event binding?",answer:'```markdown\nIn Angular, the `$event` object is used in event binding to access information about the event that was triggered (such as a click, keypress, etc.). You can pass `$event` to your component method directly from the template.\n\n**Example:**\n\n```html\n<!-- In your template -->\n<button (click)="onClick($event)">Click Me</button>\n```\n\n```typescript\n// In your component\nonClick(event: Event) {\n  console.log(event); // Logs the event object\n}\n```\n\n**Explanation:**\n- `(click)` is the event binding syntax.\n- `onClick($event)` calls the `onClick` method and passes the event object as an argument.\n- Inside your method, you can use the event object to get details like the target element, mouse position, etc.\n```\n',level:"Beginner",created_at:"2025-04-20T08:54:51.509504Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"b728a36f-ba38-44e6-a254-5a22da23670c",question:"What is the syntax for using multiple pipes in a single interpolation?",answer:"```markdown You can use multiple pipes in a single interpolation by chaining them with the pipe (|) symbol. The output of the first pipe becomes the input for the next pipe.\n\n**Syntax:**\n```html\n{{ value | pipe1 | pipe2 | pipe3 }}\n```\n\n**Example:**\n```html\n{{ message | lowercase | slice:0:5 }}\n```\nIn this example, message is first converted to lowercase, then sliced from index 0 to 5.",level:"Beginner",created_at:"2025-04-20T08:54:51.509510Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"89cc96d4-6d26-4f46-96e6-60e789a5b7e9",question:"How do you use the keyvalue pipe in Angular?",answer:`\`\`\`markdown
The \`keyvalue\` pipe in Angular is used to transform an object or a Map into an array of key-value pair objects, making it easier to iterate over the properties in templates (e.g., with \`*ngFor\`). 

**Usage Example:**

Suppose you have the following object in your component:

\`\`\`typescript
user = {
  name: 'Alice',
  age: 30,
  country: 'USA'
};
\`\`\`

You can use the \`keyvalue\` pipe in your template like this:

\`\`\`html
<ul>
  <li *ngFor="let item of user | keyvalue">
    {{ item.key }}: {{ item.value }}
  </li>
</ul>
\`\`\`

**Output:**
\`\`\`
name: Alice
age: 30
country: USA
\`\`\`

**Notes:**
- The \`keyvalue\` pipe returns an array of objects with \`key\` and \`value\` properties.
- By default, the keys are sorted alphabetically. You can provide a custom compare function to change the order.

**Custom Sorting Example:**

\`\`\`html
<li *ngFor="let item of user | keyvalue: customSort">
  {{ item.key }}: {{ item.value }}
</li>
\`\`\`

\`\`\`typescript
customSort = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
  // Example: keep original order or implement custom logic
  return 0;
};
\`\`\`
\`\`\``,level:"Intermediate",created_at:"2025-04-20T08:54:51.509517Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"325c3f6a-1ce2-4dd0-b97c-d25c3968e423",question:"What is the syntax for using ngFor with index and other local variables?",answer:'```markdown\nIn Angular, the `*ngFor` directive can be used to iterate over a collection. You can also access local variables such as the current index, the first/last element, and whether the current element is even or odd.\n\n**Syntax:**\n\n```html\n<div *ngFor="let item of items; let i = index; let first = first; let last = last; let even = even; let odd = odd">\n  {{i}}: {{item}} \n  <span *ngIf="first">(First)</span>\n  <span *ngIf="last">(Last)</span>\n  <span *ngIf="even">(Even)</span>\n  <span *ngIf="odd">(Odd)</span>\n</div>\n```\n\n**Explanation:**\n\n- `let i = index` — Gets the current index of the item in the array.\n- `let first = first` — `true` if the item is the first in the collection.\n- `let last = last` — `true` if the item is the last in the collection.\n- `let even = even` — `true` if the index is even.\n- `let odd = odd` — `true` if the index is odd.\n\nYou can use any combination of these local variables as needed within your template.\n```\n',level:"Intermediate",created_at:"2025-04-20T08:54:51.509524Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"9a6e1d7a-fc37-4ac6-8cc7-98e11a4e2032",question:"How do you use the ng-content directive for content projection?",answer:`\`\`\`markdown ### Using \`ng-content\` for Content Projection in Angular

Content projection in Angular allows you to pass content from a parent component into a child component. The \`ng-content\` directive is used in the child component’s template to mark where this projected content should appear.

#### Basic Usage

1. **Child Component Template (\`child.component.html\`):**
   \`\`\`html
   <div class="child-container">
     <ng-content></ng-content>
   </div>
   \`\`\`

2. **Parent Component Template (\`parent.component.html\`):**
   \`\`\`html
   <app-child>
     <p>This content will be projected into the child component!</p>
   </app-child>
   \`\`\`

**Result:**  
The \`<p>\` element will be rendered inside the \`<div class="child-container">\` of the child component.

---

#### Multiple Slots with Selectors

You can use multiple \`<ng-content>\` tags with the \`select\` attribute to project content into different slots.

**Child Component Template:**
\`\`\`html
<div class="header">
  <ng-content select="[header]"></ng-content>
</div>
<div class="body">
  <ng-content></ng-content>
</div>
\`\`\`

**Parent Component Template:**
\`\`\`html
<app-child>
  <h1 header>Header Content</h1>
  <p>Body Content</p>
</app-child>
\`\`\`

- The element with the \`header\` attribute (\`<h1 header>\`) will be projected into the header slot.
- The \`<p>\` element will be projected into the default slot.

---

### Summary Table

| Syntax                     | Description                                 |
|----------------------------|---------------------------------------------|
| \`<ng-content></ng-content>\`| Projects all content                        |
| \`<ng-content select="...">\`| Projects content matching the selector      |

---

**References:**
- [Angular Docs: Content Projection](https://angular.io/guide/content-projection)`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509531Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"6e41081d-0b8d-4f83-bf4e-adf7e8bdabad",question:"What is the syntax for using @HostBinding to bind to host element properties?",answer:"```markdown\nIn Angular, the `@HostBinding` decorator is used within a directive or component class to bind a property of the host element to a property in the class. This allows you to dynamically set properties, attributes, classes, or styles on the host element.\n\n**Syntax:**\n\n```typescript\n@HostBinding('hostPropertyName') propertyName: type;\n```\n\n- `'hostPropertyName'`: The name of the property, attribute, class, or style on the host element you want to bind to.\n- `propertyName`: The name of the property in your class.\n- `type`: The type of the property (e.g., `string`, `boolean`).\n\n**Examples:**\n\n1. **Binding to a property (e.g., `id`):**\n   ```typescript\n   @HostBinding('id') elementId = 'my-element-id';\n   ```\n\n2. **Binding to a class:**\n   ```typescript\n   @HostBinding('class.active') isActive = true;\n   ```\n\n3. **Binding to a style:**\n   ```typescript\n   @HostBinding('style.backgroundColor') bgColor = 'yellow';\n   ```\n\n4. **Binding to an attribute:**\n   ```typescript\n   @HostBinding('attr.aria-label') ariaLabel = 'My Label';\n   ```\n\n**Summary Table:**\n\n| HostBinding Syntax                | Effect on Host Element           |\n|-----------------------------------|----------------------------------|\n| `'property'`                      | Sets a property                  |\n| `'attr.attributeName'`            | Sets an attribute                |\n| `'class.className'`               | Adds/removes a class             |\n| `'style.styleName'`               | Sets a style property            |\n\n**Usage Example in a Directive:**\n\n```typescript\nimport { Directive, HostBinding } from '@angular/core';\n\n@Directive({\n  selector: '[appHighlight]'\n})\nexport class HighlightDirective {\n  @HostBinding('class.highlighted') isHighlighted = true;\n  @HostBinding('style.color') textColor = 'red';\n}\n```\n```\n",level:"Advanced",created_at:"2025-04-20T08:54:51.509538Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"91b83152-19e8-4535-971c-4be89244bdd5",question:"How do you use the @Inject decorator for injecting dependencies?",answer:`\`\`\`markdown
In Angular, the \`@Inject\` decorator is used to explicitly specify a dependency to be injected into a class constructor. This is particularly useful when the type information is not sufficient for Angular's dependency injection system to resolve the dependency, such as when injecting interfaces, tokens, or values.

### Syntax

\`\`\`typescript
import { Inject, Injectable } from '@angular/core';
import { SOME_TOKEN } from './tokens';

@Injectable()
export class MyService {
  constructor(@Inject(SOME_TOKEN) private value: any) {
    // Now \`value\` is injected using the token SOME_TOKEN
  }
}
\`\`\`

### When to Use \`@Inject\`

- **Injecting using an InjectionToken**: When you provide a value or service using an \`InjectionToken\`.
- **Injecting interfaces or types that do not exist at runtime**: Since TypeScript interfaces are erased at runtime, you must use \`@Inject\` with a token.
- **When the type cannot be inferred**: For example, when injecting a string, number, or any non-class dependency.

### Example: Injecting a Configuration Value

\`\`\`typescript
// config.token.ts
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('apiUrl');

// app.module.ts
import { API_URL } from './config.token';

@NgModule({
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' }
  ]
})
export class AppModule { }

// my.service.ts
import { Inject, Injectable } from '@angular/core';
import { API_URL } from './config.token';

@Injectable()
export class MyService {
  constructor(@Inject(API_URL) private apiUrl: string) {
    console.log(this.apiUrl); // 'https://api.example.com'
  }
}
\`\`\`

### Summary

- Use \`@Inject(token)\` in the constructor to tell Angular which provider to use.
- It is most commonly used with \`InjectionToken\`s or when type information is not enough.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:51.509545Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"805cc440-356a-4ff1-90ba-4e7210dfb259",question:"What is the syntax for using lifecycle hooks in Angular components?",answer:`\`\`\`markdown
In Angular, lifecycle hooks are special methods that allow you to tap into key moments in a component's lifecycle (creation, update, and destruction). To use a lifecycle hook, you implement the corresponding interface and define the method in your component class.

**Example: Using \`OnInit\` and \`OnDestroy\` lifecycle hooks**

\`\`\`typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-example',
  template: \`<p>Example Component</p>\`
})
export class ExampleComponent implements OnInit, OnDestroy {

  // Called once after the first ngOnChanges
  ngOnInit(): void {
    console.log('Component initialized');
  }

  // Called just before the component is destroyed
  ngOnDestroy(): void {
    console.log('Component destroyed');
  }
}
\`\`\`

**General Syntax:**

1. Import the lifecycle hook interface(s) from \`@angular/core\`.
2. Implement the interface(s) in your component class.
3. Define the corresponding lifecycle method(s) (e.g., \`ngOnInit()\`, \`ngOnDestroy()\`, \`ngAfterViewInit()\`, etc.).

**Common Lifecycle Hooks:**

- \`ngOnInit()\`: Initialization logic.
- \`ngOnDestroy()\`: Cleanup logic.
- \`ngOnChanges(changes: SimpleChanges)\`: Respond to input property changes.
- \`ngDoCheck()\`: Custom change detection.
- \`ngAfterContentInit()\`: After content projection.
- \`ngAfterContentChecked()\`: After every check of projected content.
- \`ngAfterViewInit()\`: After component's view initialized.
- \`ngAfterViewChecked()\`: After every check of component's view.

**Note:**  
Implementing the interface (e.g., \`OnInit\`) is optional but recommended for better type checking and code clarity.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509552Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"6595cf3c-338e-431b-aace-92e0bb970ae5",question:"How do you use the ngPlural directive in Angular?",answer:'```markdown\n### Using the `ngPlural` Directive in Angular\n\nThe `ngPlural` directive in Angular is used to display pluralized messages based on a numeric value. It works together with the `ngPluralCase` directive to define different templates for various plural categories (e.g., zero, one, few, many, other).\n\n#### Syntax\n\n```html\n<div [ngPlural]="value">\n  <ng-template ngPluralCase="=0">No items</ng-template>\n  <ng-template ngPluralCase="=1">One item</ng-template>\n  <ng-template ngPluralCase="few">A few items</ng-template>\n  <ng-template ngPluralCase="other"># items</ng-template>\n</div>\n```\n\n- `[ngPlural]="value"`: Binds the numeric value to be evaluated.\n- `<ng-template ngPluralCase="...">`: Defines the template for each plural case.\n- The `#` symbol inside the template will be replaced by the value.\n\n#### Example\n\nSuppose you have a component property `itemCount`:\n\n```typescript\nexport class AppComponent {\n  itemCount = 3;\n}\n```\n\nYou can use `ngPlural` in your template as follows:\n\n```html\n<div [ngPlural]="itemCount">\n  <ng-template ngPluralCase="=0">No items found.</ng-template>\n  <ng-template ngPluralCase="=1">One item found.</ng-template>\n  <ng-template ngPluralCase="other"># items found.</ng-template>\n</div>\n```\n\nIf `itemCount` is `3`, the output will be:\n\n```\n3 items found.\n```\n\n#### Notes\n\n- You can use explicit numbers (e.g., `=0`, `=1`) or plural categories (`zero`, `one`, `few`, `many`, `other`).\n- The `other` case is required as a fallback.\n- The plural categories depend on the current locale.\n\n#### References\n\n- [Angular Documentation: NgPlural](https://angular.io/api/common/NgPlural)\n```\n',level:"Advanced",created_at:"2025-04-20T08:54:51.509560Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"3f40005b-f7e0-4b6c-aa51-2fe281a7c758",question:"How do you use template-driven forms and their directives in Angular?",answer:`\`\`\`markdown To use **template-driven forms** in Angular, you leverage Angular’s built-in directives within your component templates to create and manage forms. Here’s how you can do it:

---

## 1. Import \`FormsModule\`

First, import the \`FormsModule\` in your application module:

\`\`\`typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // <-- Import here
  ],
  declarations: [ /* your components */ ],
  bootstrap: [ /* your root component */ ]
})
export class AppModule { }
\`\`\`

---

## 2. Create the Form in the Template

Use Angular directives like \`ngModel\`, \`#templateReference\`, and \`ngForm\` in your HTML:

\`\`\`html
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <label>
    Name:
    <input name="name" ngModel required>
  </label>
  <label>
    Email:
    <input name="email" ngModel email>
  </label>
  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
\`\`\`

### Key Directives

- **ngModel**: Binds input fields to properties on your component.
- **ngForm**: Angular automatically creates a \`NgForm\` directive instance for the form, which tracks the form’s state and validity.
- **#userForm="ngForm"**: Template reference variable to access the form instance in the template and component.

---

## 3. Access Form Data in the Component

In your component, define the \`onSubmit()\` method to handle form submission:

\`\`\`typescript
import { NgForm } from '@angular/forms';

export class MyComponent {
  onSubmit(form: NgForm) {
    console.log(form.value); // Access form values
    console.log(form.valid); // Check form validity
  }
}
\`\`\`

---

## 4. Validation and Status

You can use form and field properties for validation:

\`\`\`html
<input name="name" ngModel required #name="ngModel">
<div *ngIf="name.invalid && name.touched">
  Name is required.
</div>
\`\`\`

---

## Summary Table

| Directive        | Usage Example                 | Purpose                                 |
|------------------|------------------------------|-----------------------------------------|
| \`ngModel\`        | \`<input ngModel>\`            | Two-way data binding                    |
| \`ngForm\`         | \`<form #f="ngForm">\`         | Tracks form state and validity          |
| \`ngModelGroup\`   | \`<div ngModelGroup="address">\` | Groups controls within a form           |
| Template Ref     | \`#name="ngModel"\`            | Access control state in the template    |

---

**In summary:**  
Template-driven forms in Angular are easy to set up using directives like \`ngModel\` and \`ngForm\` directly in your templates, with minimal code in your component class. This approach is ideal for simple forms and rapid development.`,level:"Intermediate",created_at:"2025-04-20T08:54:51.509574Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"57372028-4410-4651-a2b2-38eb7b53ca83",question:"What is the syntax for using the ngStyle directive for dynamic styles?",answer:"```markdown\nThe `ngStyle` directive in Angular is used to set inline styles dynamically on an HTML element. The syntax for using `ngStyle` is:\n\n```html\n<div [ngStyle]=\"{'property': value, 'another-property': anotherValue}\">\n  Content here\n</div>\n```\n\n**Example:**\n\n```html\n<div [ngStyle]=\"{'color': textColor, 'font-size': fontSize + 'px'}\">\n  This text will have dynamic color and font size.\n</div>\n```\n\nHere, `textColor` and `fontSize` are component properties that determine the styles dynamically.\n```\n",level:"Beginner",created_at:"2025-04-20T08:54:51.509581Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"9f420fac-9e02-4705-b3a4-b4a9eef1de4e",question:"How do you use the @ViewChild decorator to access a child component?",answer:`\`\`\`markdown To access a child component using the \`@ViewChild\` decorator in Angular, follow these steps:

1. **Assign a Template Reference Variable**  
   In your parent component's template, assign a template reference variable (e.g., \`#childComp\`) to the child component:

   \`\`\`html
   <app-child #childComp></app-child>
   \`\`\`

2. **Import and Use @ViewChild in the Parent Component**  
   In the parent component's TypeScript file, import \`ViewChild\` and the child component class. Then, use the \`@ViewChild\` decorator to get a reference to the child component instance:

   \`\`\`typescript
   import { Component, ViewChild, AfterViewInit } from '@angular/core';
   import { ChildComponent } from './child.component';

   @Component({
     selector: 'app-parent',
     templateUrl: './parent.component.html'
   })
   export class ParentComponent implements AfterViewInit {
     @ViewChild('childComp') child!: ChildComponent;

     ngAfterViewInit() {
       // Now you can access properties and methods of ChildComponent
       this.child.someChildMethod();
     }
   }
   \`\`\`

   - The string \`'childComp'\` matches the template reference variable.
   - The \`!\` (non-null assertion) is used because the property will be set after view initialization.
   - Access the child component in the \`ngAfterViewInit\` lifecycle hook to ensure the view is initialized.

3. **Access Child Component Methods/Properties**  
   You can now call methods or access properties of the child component via \`this.child\`.

---

**Summary Table**

| Step | Code Example |
|------|--------------|
| Template | \`<app-child #childComp></app-child>\` |
| Parent TS | \`@ViewChild('childComp') child!: ChildComponent;\` |

---

**Note:**  
If you have multiple instances or want to access a native element, you can adjust the usage of \`@ViewChild\` accordingly. For static queries (access before \`ngAfterViewInit\`), use \`{ static: true }\` as a second argument.`,level:"Advanced",created_at:"2025-04-20T08:54:51.509587Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"70a8d0eb-8bbe-435a-b33a-c377821e20fd",question:"What is the syntax for using the spread operator in Angular templates?",answer:`\`\`\`markdown
In Angular templates, the spread operator (\`...\`) is not directly supported in the same way as in TypeScript or JavaScript. However, you can use the spread operator in your component class to prepare data, and then bind the resulting array or object in your template.

**Example: Using the spread operator in the component class**

\`\`\`typescript
// my.component.ts
export class MyComponent {
  baseArray = [1, 2, 3];
  extendedArray = [...this.baseArray, 4, 5];
}
\`\`\`

**Template usage:**

\`\`\`html
<ul>
  <li *ngFor="let item of extendedArray">{{ item }}</li>
</ul>
\`\`\`

If you want to use the spread operator for objects (e.g., for \`[ngStyle]\`, \`[ngClass]\`, or \`[attr]\` bindings), you must also prepare the object in the component:

\`\`\`typescript
// my.component.ts
export class MyComponent {
  baseStyles = { color: 'red', fontWeight: 'bold' };
  additionalStyles = { fontSize: '20px' };
  combinedStyles = { ...this.baseStyles, ...this.additionalStyles };
}
\`\`\`

\`\`\`html
<div [ngStyle]="combinedStyles">Styled Text</div>
\`\`\`

**Summary Table**

| Context         | Spread Operator Usage         | Angular Template Syntax      |
|-----------------|-----------------------------|-----------------------------|
| Arrays/Objects  | Use in component class       | Bind result in template     |
| Template        | Not directly supported       | Use *ngFor, [ngStyle], etc. |

**Note:**  
If you need to perform dynamic spreading within the template, consider using a custom pipe or a method in your component to return the spread result.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:51.509594Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"7de40c83-b43d-43e2-bce5-8ceba25189df",question:"How do you use the ngZone service for change detection?",answer:`\`\`\`markdown
### Using \`NgZone\` Service for Change Detection in Angular

Angular's change detection mechanism runs automatically for most asynchronous operations. However, when you perform operations outside of Angular's zone (for example, using certain third-party libraries or native event listeners), Angular may not detect changes automatically. The \`NgZone\` service allows you to explicitly control when Angular should run change detection.

#### Importing and Injecting \`NgZone\`

\`\`\`typescript
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-zone-demo',
  template: \`<p>{{ counter }}</p>
             <button (click)="increaseCounter()">Increase Counter</button>\`
})
export class ZoneDemoComponent {
  counter = 0;

  constructor(private ngZone: NgZone) {}

  increaseCounter() {
    // Simulate an async operation outside Angular's zone
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        // This code runs outside Angular's zone, so change detection won't happen automatically
        this.counter++;

        // To trigger change detection, re-enter Angular's zone
        this.ngZone.run(() => {
          // Now Angular will detect the change
          this.counter++;
        });
      }, 1000);
    });
  }
}
\`\`\`

#### Key Methods

- **\`ngZone.runOutsideAngular(fn: Function)\`**  
  Executes the function outside Angular's zone. Changes made here will not trigger change detection.

- **\`ngZone.run(fn: Function)\`**  
  Executes the function inside Angular's zone. Changes made here will trigger change detection.

#### When to Use

- When integrating with third-party libraries that perform DOM manipulations or async operations outside Angular.
- When you want to optimize performance by running code outside Angular's change detection, and then re-enter Angular's zone only when necessary.

#### Example Workflow

1. **Run expensive or frequent operations outside Angular's zone** to avoid unnecessary change detection cycles.
2. **Re-enter Angular's zone using \`ngZone.run()\`** when you need Angular to update the view based on changes.

---

**References:**
- [Angular NgZone Documentation](https://angular.io/api/core/NgZone)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:51.509601Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"},{id:"dc57d367-0de2-4158-871b-de637db4c74e",question:"What is the syntax for using the async/await pattern in Angular services?",answer:`\`\`\`markdown
In Angular services, you can use the \`async/await\` pattern to work with asynchronous operations, such as HTTP requests or other Promises. The syntax involves marking your service method as \`async\` and using \`await\` to pause execution until a Promise resolves.

**Example: Using async/await in an Angular service**

\`\`\`typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Async method returning a Promise
  async getData(): Promise<any> {
    try {
      const data = await this.http.get('https://api.example.com/data').toPromise();
      return data;
    } catch (error) {
      // Handle error
      throw error;
    }
  }
}
\`\`\`

**Key Points:**
- Mark the method as \`async\`.
- Use \`await\` before a Promise-returning call (e.g., \`toPromise()\` on an Observable).
- The method returns a \`Promise\`.
- Handle errors with \`try/catch\` blocks.

> **Note:** In Angular 16+, \`toPromise()\` is deprecated. Use \`firstValueFrom()\` or \`lastValueFrom()\` from \`rxjs\`:
>
> \`\`\`typescript
> import { firstValueFrom } from 'rxjs';
>
> async getData(): Promise<any> {
>   return await firstValueFrom(this.http.get('https://api.example.com/data'));
> }
> \`\`\`

This is the recommended syntax for using \`async/await\` in Angular services.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T08:54:51.509608Z",topic:"e0ee05b6-c081-488f-b075-1cc54469939f"}];export{e as default};
