const e=[{id:"5fe9f31d-a762-4a57-9164-87b316f7f3fe",question:"What is a CSS media query?",answer:`\`\`\`markdown A **CSS media query** is a technique used in CSS to apply styles based on specific conditions, such as the screen size, device type, or orientation. Media queries help create responsive web designs that look good on different devices (like phones, tablets, and desktops).

**Example:**

\`\`\`css
/* This style applies only if the screen width is 600px or less */
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
\`\`\`

**How it works:**
- The styles inside the media query block are only applied if the condition (in this case, screen width ≤ 600px) is true.
- Media queries are commonly used to make websites adapt to different screen sizes.

**Summary:**  
A CSS media query lets you apply CSS rules only when certain conditions about the user's device or screen are met, making your website responsive.`,level:"Beginner",created_at:"2025-04-20T11:23:52.622092Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"15a9bdd6-879a-45ec-af9f-3146a7aff76c",question:"How do you write a basic media query in CSS?",answer:"```markdown A basic media query in CSS is written using the @media rule. Here’s an example that changes the background color of the body when the screen width is 600px or less:\n\n```css\n@media (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}\n```\n\n**Explanation:**\n- `@media` starts the media query.\n- `(max-width: 600px)` is the condition (applies styles when the viewport is 600px wide or less).\n- The CSS inside the curly braces `{}` will only apply when the condition is true.",level:"Beginner",created_at:"2025-04-20T11:23:52.622134Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"dae62292-8a62-42b6-b92e-bb238c24cf2c",question:"What is the purpose of using media queries in web development?",answer:`\`\`\`markdown **Answer:**

Media queries in CSS are used to apply different styles to a website based on the characteristics of the user's device, such as screen size, resolution, or orientation. This allows web developers to create responsive designs that look good and function well on a variety of devices, including desktops, tablets, and smartphones.

**Example:**

\`\`\`css
/* Styles for screens smaller than 600px */
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
\`\`\`

**Purpose:**  
Media queries help ensure that websites are user-friendly and visually appealing on all devices by adapting the layout and design to fit different screen sizes and capabilities.`,level:"Beginner",created_at:"2025-04-20T11:23:52.622147Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"c2ad8515-db49-40f6-9b1b-036a55c9ff3b",question:"Which CSS rule is used to apply styles for devices with a maximum width of 600px?",answer:"```css\n@media (max-width: 600px) {\n  /* CSS rules go here */\n}\n```\n\nThis rule applies the enclosed CSS styles to devices with a screen width of 600 pixels or less.",level:"Beginner",created_at:"2025-04-20T11:23:52.622159Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"5901ea3e-29bd-42ed-bbf5-dd98619990ab",question:"What does the 'min-width' feature in a media query do?",answer:`\`\`\`markdown The \`min-width\` feature in a CSS media query is used to apply specific styles only when the viewport (browser window) is at least a certain width. In other words, the styles inside the media query will take effect if the screen width is greater than or equal to the value you specify.

**Example:**

\`\`\`css
@media (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}
\`\`\`

**Explanation:**

- The above CSS will set the background color of the body to light blue only when the viewport is 600 pixels wide or wider.
- If the viewport is less than 600 pixels wide, the styles inside the media query will not be applied.

**Use case:**  
\`min-width\` is commonly used for creating responsive designs that adapt to larger screens, such as tablets and desktops.`,level:"Beginner",created_at:"2025-04-20T11:23:52.622170Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"5937c55e-e471-4b62-be8d-2383ac55b130",question:"How can you target print styles using a media query?",answer:`\`\`\`markdown To target print styles using a CSS media query, use the \`@media print\` rule. This allows you to apply specific styles only when the page is printed.

\`\`\`css
@media print {
  /* Styles here will only apply when printing */
  body {
    background: white;
    color: black;
  }

  .no-print {
    display: none;
  }
}
\`\`\`

**Explanation:**
- The styles inside \`@media print { ... }\` will only be used when the page is printed or in print preview.
- You can use this to hide elements, change colors, or adjust layouts for better printing.`,level:"Beginner",created_at:"2025-04-20T11:23:52.622184Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"54bbb4f8-cea1-467c-9428-c4bf412e568f",question:"How do media queries interact with CSS preprocessors like Sass or Less?",answer:`\`\`\`markdown Media queries work seamlessly with CSS preprocessors like **Sass** and **Less**, but preprocessors offer additional features that enhance how you write and organize your media queries.

### 1. Nesting Media Queries

Preprocessors allow you to **nest** media queries inside selectors, making your code more organized and readable.

**Sass Example:**
\`\`\`scss
.button {
  color: black;
  @media (max-width: 600px) {
    color: red;
  }
}
\`\`\`
Compiles to:
\`\`\`css
.button {
  color: black;
}
@media (max-width: 600px) {
  .button {
    color: red;
  }
}
\`\`\`

**Less Example:**
\`\`\`less
.button {
  color: black;
  @media (max-width: 600px) {
    color: red;
  }
}
\`\`\`

### 2. Variables in Media Queries

You can use variables for breakpoints, making your media queries more maintainable.

**Sass Example:**
\`\`\`scss
$mobile: 600px;

@media (max-width: $mobile) {
  .container {
    width: 100%;
  }
}
\`\`\`

**Less Example:**
\`\`\`less
@mobile: 600px;

@media (max-width: @mobile) {
  .container {
    width: 100%;
  }
}
\`\`\`

### 3. Mixins for Media Queries

Preprocessors let you create **mixins** for reusable media query logic.

**Sass Example:**
\`\`\`scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 600px) { @content; }
  }
}

.container {
  width: 80%;
  @include respond-to(mobile) {
    width: 100%;
  }
}
\`\`\`

**Less Example:**
\`\`\`less
.respond-to(@breakpoint) when (@breakpoint = mobile) {
  @media (max-width: 600px) {
    .container {
      width: 100%;
    }
  }
}
\`\`\`

### 4. Output

After preprocessing, all media queries are compiled into standard CSS. The browser interprets them as usual; preprocessors only help you write and organize them more efficiently.

---

**Summary:**  
Media queries in Sass or Less are ultimately compiled into regular CSS, but preprocessors provide powerful features like nesting, variables, and mixins, making media queries easier to manage and maintain in large projects.`,level:"Advanced",created_at:"2025-04-20T11:23:52.622453Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"7eaf5e4f-74ab-45bb-aad2-2a762a1478d8",question:"What is the difference between 'min-width' and 'max-width' in media queries?",answer:"```markdown\n**Difference between `min-width` and `max-width` in CSS Media Queries:**\n\n- **`min-width`**: The styles inside this media query will apply **when the viewport width is greater than or equal to** the specified value.\n  - Example: \n    ```css\n    @media (min-width: 600px) {\n      /* Styles here apply when the viewport is 600px or wider */\n    }\n    ```\n\n- **`max-width`**: The styles inside this media query will apply **when the viewport width is less than or equal to** the specified value.\n  - Example:\n    ```css\n    @media (max-width: 600px) {\n      /* Styles here apply when the viewport is 600px or narrower */\n    }\n    ```\n\n**Summary Table:**\n\n| Media Query      | Applies When...                  |\n|------------------|----------------------------------|\n| `min-width`      | Width is **at least** X pixels   |\n| `max-width`      | Width is **at most** X pixels    |\n\n**Use Case:**\n- Use `min-width` for **responsive designs that scale up** (mobile-first).\n- Use `max-width` for **responsive designs that scale down** (desktop-first).\n```\n",level:"Beginner",created_at:"2025-04-20T11:23:52.622195Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"faef065b-77eb-46ef-8e82-1d005da368cb",question:"How do you combine multiple conditions in a single media query?",answer:`\`\`\`markdown You can combine multiple conditions in a single CSS media query using logical operators:

- and: All conditions must be true.
- , (comma): At least one condition must be true (acts like OR).
- not: Negates a condition.

**Example using and:**

\`\`\`css
@media (min-width: 600px) and (max-width: 900px) {
  /* Styles for screens between 600px and 900px wide */
}
\`\`\`

**Example using comma (OR):**

\`\`\`css
@media (max-width: 500px), (orientation: landscape) {
  /* Styles for screens up to 500px wide OR in landscape orientation */
}
\`\`\`

**Example using not:**

\`\`\`css
@media not all and (monochrome) {
  /* Styles for devices that are NOT monochrome */
}
\`\`\`

**Summary:**  
Use and to require multiple conditions, comma to allow any condition, and not to exclude a condition.`,level:"Beginner",created_at:"2025-04-20T11:23:52.622208Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"5f7d7e1c-d88c-4b5b-8bd6-53ed002b366e",question:"What is the syntax for targeting only screen devices in a media query?",answer:"```css\n@media screen {\n  /* CSS rules for screen devices go here */\n}\n```\n\n**Explanation:**  \nThe `@media screen { ... }` syntax targets only devices with a screen (like computers, tablets, and phones), excluding other media types such as print. You can add additional conditions (like width) if needed.",level:"Beginner",created_at:"2025-04-20T11:23:52.622221Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"14cb0a53-ed0a-4b34-ab96-851c08890f61",question:"How do you use media queries to create a responsive layout?",answer:`\`\`\`markdown To create a responsive layout with CSS media queries, you use the \`@media\` rule to apply different styles based on the device's characteristics, such as screen width. Here’s a simple example:

\`\`\`css
/* Base styles for all devices */
body {
  font-size: 16px;
  background: #fff;
}

/* Styles for screens 600px wide or less */
@media (max-width: 600px) {
  body {
    font-size: 14px;
    background: #f0f0f0;
  }
}
\`\`\`

**How it works:**

- The base styles apply to all devices.
- The styles inside the \`@media (max-width: 600px)\` block only apply when the screen width is 600px or less, making your layout adapt to smaller screens like phones.

**Tip:**  
You can use different breakpoints for tablets, desktops, etc., to make your layout fully responsive.

\`\`\`css
@media (min-width: 601px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (min-width: 1025px) {
  /* Desktop styles */
}
\`\`\`

**Summary:**  
Media queries let you change CSS based on device features, helping you build layouts that look good on all screen sizes.`,level:"Beginner",created_at:"2025-04-20T11:23:52.622234Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"7abd0caf-8e00-466a-bd68-910df05b952d",question:"What are some common breakpoints used in responsive design?",answer:`\`\`\`markdown **Common Breakpoints in Responsive Design**

In responsive web design, breakpoints are specific screen widths where the layout adapts to provide an optimal viewing experience. Here are some commonly used breakpoints:

\`\`\`css
/* Extra small devices (phones, less than 576px) */
@media (max-width: 575.98px) { ... }

/* Small devices (phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) { ... }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }
\`\`\`

**Note:**  
These breakpoints are commonly used in frameworks like Bootstrap, but you can adjust them to fit your project's needs. The idea is to ensure your design looks good on all devices, from mobile phones to large desktop screens.`,level:"Beginner",created_at:"2025-04-20T11:23:52.622246Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"5575ad30-14c5-4e2d-be86-2cdfc68e3bc6",question:"Can you use media queries inside inline styles?",answer:`\`\`\`markdown No, you cannot use media queries inside inline styles. Inline styles (using the style attribute in HTML) only support individual CSS properties and values, not CSS rules or at-rules like @media. Media queries must be placed inside a <style> block in your HTML or in an external CSS file.

**Example (Correct usage in a <style> block):**

\`\`\`html
<style>
  @media (max-width: 600px) {
    .example {
      color: red;
    }
  }
</style>
<div class="example">This text will be red on small screens.</div>
\`\`\`

**Example (Incorrect usage with inline styles):**

\`\`\`html
<!-- This will NOT work -->
<div style="@media (max-width: 600px) { color: red; }">Text</div>
\`\`\`

**Summary:**  
Use media queries in <style> tags or external CSS files, not in inline styles.`,level:"Beginner",created_at:"2025-04-20T11:23:52.622256Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"3c8747bb-538f-4225-b53d-3d6d820660da",question:"How do you apply a media query only to landscape orientation?",answer:`\`\`\`markdown To apply a CSS media query only to landscape orientation, use the orientation feature set to landscape. Here’s an example:

\`\`\`css
@media (orientation: landscape) {
  /* CSS rules here will only apply when the device is in landscape mode */
  body {
    background-color: lightblue;
  }
}
\`\`\`

This code will change the background color of the body to light blue only when the device is in landscape orientation.`,level:"Beginner",created_at:"2025-04-20T11:23:52.622267Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"7806d522-73ca-46df-a5e0-d345988d773a",question:"What is the '@media' rule in CSS?",answer:`\`\`\`markdown The \`@media\` rule in CSS is used to apply styles only when certain conditions are met, such as the width of the screen or the type of device. This is commonly used to make websites responsive, so they look good on different devices like phones, tablets, and desktops.

**Example:**

\`\`\`css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
\`\`\`

In this example, the background color of the page will change to light blue only when the screen width is 600 pixels or less.

**Key Points:**
- \`@media\` helps create responsive designs.
- You can target different screen sizes, orientations, and device types.
- Styles inside a \`@media\` block only apply when the specified condition is true.`,level:"Beginner",created_at:"2025-04-20T11:23:52.622277Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"512482b6-452b-485a-a569-3cd738101137",question:"How do you write a media query that targets devices with a screen width between 600px and 900px?",answer:"```css\n@media (min-width: 600px) and (max-width: 900px) {\n  /* CSS rules for devices with screen width between 600px and 900px */\n}\n```\n\n**Explanation:**\n- `min-width: 600px` targets devices with a screen width of at least 600px.\n- `max-width: 900px` targets devices with a screen width of up to 900px.\n- The `and` keyword combines both conditions, so the styles inside the block apply only when the screen width is between 600px and 900px (inclusive).",level:"Intermediate",created_at:"2025-04-20T11:23:52.622287Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"39fee2c4-9781-474d-b002-1973d4d8da9f",question:"What is the 'only' keyword used for in media queries?",answer:`\`\`\`markdown The only keyword in CSS media queries is used to prevent older browsers that do not support media queries from applying the given styles. When only is used, the browser will only apply the styles if it understands media queries and the specified media type matches.

**Example:**

\`\`\`css
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
\`\`\`

**Explanation:**

- In the example above, only ensures that the styles inside the media query are applied **only** on screens (not print, etc.) and **only** if the browser supports media queries.
- Older browsers that do not support media queries will ignore the entire rule if only is present.
- In modern browsers, only is optional and does not affect the behavior, but it can be useful for backward compatibility.

**Summary Table:**

| Keyword | Purpose                                                                 |
|---------|-------------------------------------------------------------------------|
| only    | Targets browsers that understand media queries, preventing older ones from applying the styles. |

**Note:**  
In most modern development, only is rarely needed, but you may still see it in legacy code or for extra compatibility.`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622300Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"3db4f08b-dbf4-4ce4-932d-1636a7c4d8f4",question:"How can you target high-resolution (retina) displays using media queries?",answer:`\`\`\`markdown To target high-resolution (retina) displays using CSS media queries, you can use the min-device-pixel-ratio or min-resolution features. Here are some examples:

\`\`\`css
/* Using min-device-pixel-ratio */
@media only screen and (-webkit-min-device-pixel-ratio: 2),
       only screen and (min--moz-device-pixel-ratio: 2),
       only screen and (-o-min-device-pixel-ratio: 2/1),
       only screen and (min-device-pixel-ratio: 2),
       only screen and (min-resolution: 192dpi),
       only screen and (min-resolution: 2dppx) {
  /* High-resolution styles go here */
  body {
    background-image: url('background@2x.png');
    background-size: cover;
  }
}
\`\`\`

**Explanation:**

- \`min-device-pixel-ratio: 2\` targets devices with a pixel ratio of 2 or higher (retina displays).
- \`min-resolution: 192dpi\` or \`min-resolution: 2dppx\` are equivalent ways to target high-resolution screens.
- Vendor prefixes (\`-webkit-\`, \`-moz-\`, \`-o-\`) ensure compatibility with different browsers.

**Tip:** Use these queries to serve higher-resolution images or adjust styles for sharper displays.`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622312Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"dd3a1a1d-863e-43b6-8018-5c120079e91a",question:"What is the difference between 'screen' and 'all' media types?",answer:`\`\`\`markdown
The difference between \`screen\` and \`all\` media types in CSS media queries is:

- **screen**: Targets styles specifically for devices with screens, such as desktops, laptops, tablets, and smartphones. It excludes other media types like print or speech.
  
  \`\`\`css
  @media screen and (max-width: 600px) {
    /* Styles for screens only */
  }
  \`\`\`

- **all**: Applies styles to all media types, including screen, print, speech, etc. It is the broadest media type and is often the default if no media type is specified.

  \`\`\`css
  @media all and (max-width: 600px) {
    /* Styles for all media types */
  }
  \`\`\`

**Summary Table:**

| Media Type | Applies To                  |
|------------|----------------------------|
| screen     | Screens only               |
| all        | All media types (universal)|

**Key Point:**  
Use \`screen\` to target only screen devices, and \`all\` to target every media type.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622326Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"fdf8bd07-0b13-4139-8784-3761252b523e",question:"How do you use logical operators like 'and', 'not', and 'or' in media queries?",answer:'```markdown\nIn CSS media queries, logical operators allow you to combine or modify conditions to apply styles more precisely:\n\n### 1. `and`\n- **Usage:** Combines multiple conditions; all must be true for the styles to apply.\n- **Syntax Example:**\n  ```css\n  @media (min-width: 600px) and (max-width: 900px) {\n    /* Styles for screens between 600px and 900px */\n  }\n  ```\n\n### 2. `not`\n- **Usage:** Excludes a condition; styles apply if the condition is **not** met.\n- **Syntax Example:**\n  ```css\n  @media not screen and (max-width: 600px) {\n    /* Styles for everything except screens 600px wide or less */\n  }\n  ```\n\n### 3. `or` (comma `,`)\n- **Usage:** Applies styles if **any** of the comma-separated conditions are true.\n- **Syntax Example:**\n  ```css\n  @media (max-width: 600px), (orientation: landscape) {\n    /* Styles for screens 600px wide or less OR in landscape orientation */\n  }\n  ```\n\n**Note:**  \n- `and` and `not` are explicit keywords.\n- `or` is represented by a comma `,` (not the word "or").\n\n#### Example combining all:\n```css\n@media screen and (min-width: 700px), print and not (color) {\n  /* Styles for screens wider than 700px OR non-color printers */\n}\n```\n```',level:"Intermediate",created_at:"2025-04-20T11:23:52.622339Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"78a60a91-ab62-44ee-986c-d756f5f8a99f",question:"Can you nest media queries in CSS? If so, how?",answer:`\`\`\`markdown Yes, you can nest media queries in CSS, but the method depends on whether you’re using plain CSS or a CSS preprocessor like SCSS.

### In Plain CSS

You **cannot** nest media queries directly inside selectors. Media queries must always be at the top level:

\`\`\`css
.button {
  color: blue;
}

@media (max-width: 600px) {
  .button {
    color: red;
  }
}
\`\`\`

### In SCSS (Sass)

With SCSS, you **can** nest media queries inside selectors, which makes your code more organized:

\`\`\`scss
.button {
  color: blue;

  @media (max-width: 600px) {
    color: red;
  }
}
\`\`\`

This SCSS will compile to the plain CSS example above.

---

**Summary:**  
- In plain CSS, media queries cannot be nested.
- In SCSS (or similar preprocessors), you can nest media queries inside selectors for cleaner code.`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622352Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"d8febf69-9544-4237-96a5-f396ae729e97",question:"How do media queries affect CSS specificity and cascade?",answer:`\`\`\`markdown Media queries do **not** change the rules of CSS specificity or the cascade; they simply act as conditional wrappers that determine when certain CSS rules are applied.

### How Media Queries Interact with Specificity and Cascade

- **Specificity:**  
  The specificity of a CSS rule inside a media query is calculated exactly the same as outside a media query. The media query itself does not add to or affect the specificity.

- **Cascade:**  
  If multiple rules target the same element and property, the normal cascade rules apply:
  - The rule with higher specificity wins.
  - If specificity is equal, the rule that appears last in the CSS (regardless of whether it's inside or outside a media query) wins, *provided* its media query condition is met.

- **Order of Appearance:**  
  If two conflicting rules have the same specificity and both are valid for the current viewport, the one that appears later in the stylesheet takes precedence.

### Example

\`\`\`css
/* Base rule */
.button {
  color: blue;
}

/* Media query rule */
@media (max-width: 600px) {
  .button {
    color: red;
  }
}
\`\`\`

- On screens **wider than 600px**, \`.button\` will be blue.
- On screens **600px or less**, the media query applies, and \`.button\` will be red.
- If you add a more specific selector inside the media query, it will override less specific ones, as usual.

\`\`\`css
@media (max-width: 600px) {
  .container .button {
    color: green;
  }
}
\`\`\`

Now, on small screens, \`.container .button\` will be green, overriding the less specific \`.button\` selector.

---

**Summary:**  
Media queries control *when* rules apply, but do not alter how specificity or the cascade work. The usual CSS rules for specificity and cascade still apply within and outside media queries.`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622364Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"fd36239c-2367-4111-a84e-d39d19b99462",question:"What is the 'pointer' media feature and how is it used?",answer:`\`\`\`markdown
The \`pointer\` media feature in CSS is used to detect the quality of the primary input device's pointing accuracy, such as a mouse, touchscreen, or stylus. It helps developers tailor user interfaces based on whether users interact with precise pointers (like a mouse) or coarse ones (like a finger on a touchscreen).

### Possible Values

- \`none\`: No pointing device is available.
- \`coarse\`: The primary input device has limited accuracy (e.g., a finger on a touchscreen).
- \`fine\`: The primary input device can accurately select small targets (e.g., a mouse or stylus).

### Usage Example

\`\`\`css
/* Styles for devices with a fine pointer (e.g., mouse) */
@media (pointer: fine) {
  button:hover {
    background-color: #007bff;
    cursor: pointer;
  }
}

/* Styles for devices with a coarse pointer (e.g., touchscreen) */
@media (pointer: coarse) {
  button {
    font-size: 1.2em;
    padding: 1.5em;
  }
}

/* Styles for devices with no pointer */
@media (pointer: none) {
  .pointer-dependent {
    display: none;
  }
}
\`\`\`

### When to Use

- To enhance usability for touch devices by increasing target sizes.
- To provide hover effects only when a precise pointer is available.
- To hide or adjust features that require a pointer when none is present.

**Summary:**  
The \`pointer\` media feature allows you to create responsive designs that adapt to the user's input device, improving accessibility and user experience.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622373Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"f1a39e15-9d75-4ab1-b4d7-222f4b5fdbe9",question:"How can you use media queries to detect device orientation?",answer:`\`\`\`markdown You can use CSS media queries to detect device orientation by targeting the \`orientation\` feature. There are two possible values: \`portrait\` and \`landscape\`. Here’s how you can apply different styles based on the device’s orientation:

\`\`\`css
/* Styles for portrait orientation */
@media (orientation: portrait) {
  body {
    background-color: lightblue;
  }
}

/* Styles for landscape orientation */
@media (orientation: landscape) {
  body {
    background-color: lightgreen;
  }
}
\`\`\`

**Explanation:**
- \`@media (orientation: portrait) { ... }\` targets devices when their height is greater than or equal to their width.
- \`@media (orientation: landscape) { ... }\` targets devices when their width is greater than their height.

This allows you to create responsive designs that adapt to how the user is holding their device.`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622380Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"93a2891f-ef09-4867-8d82-dc023a3b7d8e",question:"What is the 'aspect-ratio' media feature and how can it be used?",answer:`\`\`\`markdown
## What is the \`aspect-ratio\` Media Feature and How Can It Be Used?

The \`aspect-ratio\` media feature in CSS is used to apply styles based on the ratio of the viewport's width to its height. This is particularly useful for designing responsive layouts that adapt not just to screen size, but also to the shape of the device (for example, distinguishing between wide screens and tall screens).

### Syntax

\`\`\`css
@media (aspect-ratio: width/height) {
  /* CSS rules */
}
\`\`\`

You can use comparison operators as well:

- \`min-aspect-ratio\`
- \`max-aspect-ratio\`

### Example Usage

\`\`\`css
/* Apply styles when the viewport is wider than it is tall (landscape) */
@media (min-aspect-ratio: 16/9) {
  body {
    background-color: lightblue;
  }
}

/* Apply styles when the viewport is taller than it is wide (portrait) */
@media (max-aspect-ratio: 1/1) {
  body {
    background-color: lightcoral;
  }
}
\`\`\`

### When to Use

- To adjust layouts for ultra-wide or ultra-tall screens.
- To optimize UI for devices like tablets, phones, or monitors with unusual aspect ratios.
- To provide a better user experience by adapting to the shape of the viewport, not just its size.

### Notes

- The values for \`aspect-ratio\` are integers separated by a slash (e.g., \`16/9\`, \`4/3\`, \`1/1\`).
- This feature is widely supported in modern browsers.

**In summary:**  
The \`aspect-ratio\` media feature allows you to write CSS that responds to the shape of the viewport, enabling more flexible and adaptive designs.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622388Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"18e2b5b4-f012-46eb-ba4a-6d4ac347ce58",question:"How do you use media queries with CSS Grid or Flexbox for responsive layouts?",answer:`\`\`\`markdown To create responsive layouts with CSS Grid or Flexbox, you combine their layout properties with media queries. Media queries allow you to apply different CSS rules based on the device’s screen size or other characteristics.

**Example with CSS Grid:**

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

@media (max-width: 800px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .container {
    grid-template-columns: 1fr;
  }
}
\`\`\`

**Example with Flexbox:**

\`\`\`css
.flex-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
\`\`\`

**How it works:**

- The default layout uses multiple columns (Grid) or a row direction (Flexbox).
- When the screen width matches the media query (e.g., \`max-width: 800px\`), the layout changes (fewer columns or column direction).
- This makes your layout adapt to different screen sizes, improving usability on mobile and desktop devices.

**Tip:**  
You can combine multiple media queries and adjust other properties (like font size, padding, etc.) for a fully responsive design.`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622396Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"7786f3aa-4179-49ca-9c75-dd3d0d74110c",question:"What is the difference between 'em' and 'px' units in media queries?",answer:`\`\`\`markdown
### Difference Between \`em\` and \`px\` Units in CSS Media Queries

- **\`px\` (Pixels):**
  - Represents an absolute unit.
  - Media queries using \`px\` are based on the device's actual pixel dimensions.
  - Example: \`@media (max-width: 600px) { ... }\` targets screens up to 600 device pixels wide.
  - Does **not** scale with user settings like zoom or font size changes.

- **\`em\`:**
  - Represents a relative unit.
  - In media queries, \`1em\` is equal to the browser's default font size (usually 16px).
  - Example: \`@media (max-width: 37.5em) { ... }\` (which equals 600px if 1em = 16px).
  - **Scales** with the user's font size settings, making layouts more accessible and responsive to user preferences.

#### Summary Table

| Unit | Absolute/Relative | Based On         | Scales with User Settings? |
|------|-------------------|------------------|----------------------------|
| px   | Absolute          | Device pixels    | No                         |
| em   | Relative          | Root font size   | Yes                        |

#### Example

\`\`\`css
/* Using px */
@media (max-width: 600px) {
  body { background: lightblue; }
}

/* Using em */
@media (max-width: 37.5em) { /* 37.5em * 16px = 600px */
  body { background: lightgreen; }
}
\`\`\`

**In summary:**  
Use \`em\` units in media queries for better accessibility and responsiveness, as they respect user font size preferences. Use \`px\` for strict, device-based breakpoints.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622404Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"f55df50a-857b-4324-aee9-75ad56453d61",question:"How can you target users with reduced motion preferences using media queries?",answer:`\`\`\`markdown You can target users who have indicated a preference for reduced motion (often for accessibility reasons) using the prefers-reduced-motion media feature in your CSS media queries. Here’s how you can do it:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  /* CSS rules for users who prefer reduced motion */
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
\`\`\`

**Explanation:**

- The prefers-reduced-motion media feature detects if the user has requested reduced motion in their operating system or browser settings.
- Inside the media query, you can override or disable animations, transitions, or any motion effects to improve accessibility for those users.

**Example:**

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
    transition: none;
  }
}
\`\`\`

This ensures your website is more accessible to users who may be sensitive to motion effects.`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622411Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"6bc3dc11-ea90-473b-90a4-430bf4dd5b52",question:"What is the 'hover' media feature and when would you use it?",answer:`\`\`\`markdown The \`hover\` media feature in CSS is used to detect whether the user's primary input mechanism can hover over elements—such as a mouse pointer, as opposed to a touchscreen. It allows you to apply styles conditionally, depending on whether the device supports hover interactions.

### Syntax

\`\`\`css
@media (hover: hover) {
  /* Styles for devices that support hover */
}

@media (hover: none) {
  /* Styles for devices that do NOT support hover */
}
\`\`\`

### Values

- \`hover: hover\` — The primary input mechanism **can** hover over elements (e.g., a mouse).
- \`hover: none\` — The primary input mechanism **cannot** hover (e.g., most touchscreens).
- \`hover: on-demand\` — The primary input mechanism can sometimes hover, but not always (less common).

### When to Use

You would use the \`hover\` media feature when you want to:

- **Enhance accessibility:** Avoid showing hover-dependent UI (like dropdown menus or tooltips) on devices that don't support hover.
- **Improve user experience:** Adjust or disable hover effects for touch devices where they might not work as intended.
- **Create responsive designs:** Serve different styles or interactions based on the user's device capabilities.

#### Example

\`\`\`css
/* Only apply hover effects if the device supports hover */
@media (hover: hover) {
  button:hover {
    background-color: blue;
  }
}

/* Provide alternative styles for devices without hover */
@media (hover: none) {
  button:active {
    background-color: blue;
  }
}
\`\`\`

This ensures your site is usable and visually consistent across both mouse and touch devices.`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622418Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"b1b3a5d9-fec3-42d9-8790-9613685b5f3d",question:"How do you use media queries to support dark mode in CSS?",answer:`\`\`\`markdown To support dark mode in CSS using media queries, you can use the prefers-color-scheme media feature. This allows you to apply different styles based on the user's system color scheme preference (light or dark).

Here's an example:

\`\`\`css
/* Default (light mode) styles */
body {
  background: #fff;
  color: #222;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  body {
    background: #222;
    color: #fff;
  }
}
\`\`\`

**How it works:**

- The default styles apply to all users.
- The \`@media (prefers-color-scheme: dark)\` block overrides those styles for users whose system is set to dark mode.

**Tips:**
- You can use \`prefers-color-scheme: light\` for light mode-specific styles if needed.
- This media query is widely supported in modern browsers.

**References:**
- [MDN Web Docs: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622425Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"7fe69852-e0d3-4331-9c58-46fe281ab746",question:"How can you test media queries in the browser developer tools?",answer:`\`\`\`markdown You can test CSS media queries in the browser developer tools using the following steps:

1. **Open Developer Tools**  
   - Press \`F12\` or \`Ctrl+Shift+I\` (Windows/Linux) or \`Cmd+Option+I\` (Mac) to open the DevTools.

2. **Toggle Device Toolbar**  
   - Click the device toolbar icon (looks like a phone/tablet) or press \`Ctrl+Shift+M\` (\`Cmd+Shift+M\` on Mac).
   - This enables responsive design mode.

3. **Resize the Viewport**  
   - Drag the edges of the viewport to change its width and height.
   - You can also select from preset device sizes (e.g., iPhone, iPad) or enter custom dimensions.

4. **Observe Media Query Changes**  
   - As you resize, watch how your layout and styles change based on your media queries.
   - In the "Elements" panel, you can see which CSS rules are being applied.

5. **Check Active Media Queries**  
   - In Chrome, go to the "Sources" panel, then open the "CSS" file. Active media queries are often highlighted.
   - In the "Styles" pane, media query rules that match the current viewport are shown; others are greyed out.

6. **Force Specific Media Types (Optional)**  
   - In Chrome DevTools, open the Command Menu (\`Ctrl+Shift+P\`), type "Show rendering", and select it.
   - In the "Rendering" panel, you can emulate different media types (like \`print\`).

---

**Example Screenshot:**

\`\`\`plaintext
[ Device Toolbar Enabled ]
+---------------------------+
|   [ iPhone X ] [ 375px ]  |
|                           |
|   [ Your website here ]   |
|                           |
+---------------------------+
\`\`\`

---

**Tip:**  
Testing media queries in DevTools helps ensure your site is responsive across devices and screen sizes.`,level:"Intermediate",created_at:"2025-04-20T11:23:52.622439Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"e5a567cd-bc93-41d5-b61e-e28263ef5424",question:"What is the 'resolution' media feature and how can it be used?",answer:`\`\`\`markdown ### What is the \`resolution\` Media Feature in CSS?

The \`resolution\` media feature in CSS is used within media queries to target devices based on the pixel density of their display. It allows you to apply different styles depending on how many device pixels fit into a CSS pixel, which is especially useful for supporting high-DPI (Retina) screens.

#### Syntax

\`\`\`css
@media (resolution: 300dpi) { ... }
@media (min-resolution: 2dppx) { ... }
@media (max-resolution: 150dpi) { ... }
\`\`\`

#### Accepted Units

- **dpi**: Dots per inch
- **dpcm**: Dots per centimeter
- **dppx**: Dots per CSS pixel (1dppx = 96dpi)

#### Example Usage

\`\`\`css
/* Target screens with at least 2 device pixels per CSS pixel (Retina displays) */
@media (min-resolution: 2dppx) {
  .logo {
    background-image: url('logo@2x.png');
    background-size: 100px 50px;
  }
}

/* Target screens with a resolution of 300dpi or higher */
@media (min-resolution: 300dpi) {
  body {
    font-smooth: always;
  }
}
\`\`\`

#### Practical Use Cases

- **Serving high-resolution images** for Retina/4K displays.
- **Adjusting font smoothing** or anti-aliasing for high-density screens.
- **Optimizing UI elements** for different screen densities.

#### Notes

- The \`resolution\` feature is most useful for distinguishing between standard and high-density displays.
- Always provide fallback styles for devices that do not match the high-resolution query.

---

**References:**
- [MDN Web Docs: resolution media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/resolution)
- [W3C Media Queries Level 4: resolution](https://www.w3.org/TR/mediaqueries-4/#resolution)`,level:"Advanced",created_at:"2025-04-20T11:23:52.622446Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"9cf68995-d5bd-4628-8474-4f069e5fc733",question:"What are container queries and how do they differ from media queries?",answer:`\`\`\`markdown **Container Queries vs. Media Queries in CSS**

**Container Queries**  
Container queries allow you to apply styles to an element based on the size of its *container* (the parent or ancestor element), rather than the size of the *viewport* (browser window). This enables truly modular, context-aware components that adapt their layout or appearance depending on where and how they are used.

**Syntax Example:**
\`\`\`css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-content {
    font-size: 2rem;
  }
}
\`\`\`
In this example, \`.card-content\`'s font size increases only when its container (\`.card\`) is at least 400px wide, regardless of the overall viewport size.

---

**Media Queries**  
Media queries apply styles based on characteristics of the *viewport* or device, such as width, height, orientation, or resolution.

**Syntax Example:**
\`\`\`css
@media (min-width: 600px) {
  .sidebar {
    display: block;
  }
}
\`\`\`
Here, \`.sidebar\` is shown only when the viewport is at least 600px wide.

---

**Key Differences**

| Feature            | Media Queries                              | Container Queries                          |
|--------------------|--------------------------------------------|--------------------------------------------|
| Basis for queries  | Viewport or device properties              | Container (ancestor element) properties    |
| Use case           | Responsive layouts for entire page         | Responsive, modular components             |
| Modularity         | Limited; components can't adapt independently | High; components adapt to their container  |
| Syntax             | \`@media (condition) { ... }\`               | \`@container (condition) { ... }\`           |

---

**Summary**  
- **Media queries** are for adapting layouts to different devices or viewport sizes.
- **Container queries** are for making components responsive to their immediate context, enabling better reusability and flexibility in design systems.`,level:"Advanced",created_at:"2025-04-20T11:23:52.622460Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"22083b8a-1bb3-4a47-a203-54b63065d6f9",question:"How can you use media queries to serve different images for different devices?",answer:`\`\`\`markdown You can use CSS media queries to serve different images for different devices by combining media queries with the background-image property for CSS backgrounds, or by using the \`<picture>\` element with \`<source>\` elements and media attributes for inline images. Here’s how you can do both:

### 1. Using CSS Media Queries for Background Images

\`\`\`css
.hero {
  background-image: url('images/hero-desktop.jpg');
}

@media (max-width: 768px) {
  .hero {
    background-image: url('images/hero-tablet.jpg');
  }
}

@media (max-width: 480px) {
  .hero {
    background-image: url('images/hero-mobile.jpg');
  }
}
\`\`\`

**Explanation:**  
- The default image is for desktop.
- For screens up to 768px wide (tablets), a different image is used.
- For screens up to 480px wide (mobiles), another image is used.

---

### 2. Using the \`<picture>\` Element for Inline Images

\`\`\`html
<picture>
  <source srcset="images/photo-mobile.jpg" media="(max-width: 480px)">
  <source srcset="images/photo-tablet.jpg" media="(max-width: 768px)">
  <img src="images/photo-desktop.jpg" alt="Responsive Photo">
</picture>
\`\`\`

**Explanation:**  
- The browser selects the first \`<source>\` whose media query matches the device.
- If none match, the \`<img>\` fallback is used (for desktop in this example).

---

### Key Points

- **CSS media queries** are ideal for background images or decorative images set in CSS.
- The **\`<picture>\` element** is best for inline images, allowing you to specify different images for different device characteristics.
- Both methods improve performance and user experience by serving appropriately sized images for each device.

---

**References:**
- [MDN: Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [MDN: Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)`,level:"Advanced",created_at:"2025-04-20T11:23:52.622468Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"cf76438c-734d-41f0-8f34-de69cc941cb4",question:"What are some performance considerations when using many media queries?",answer:`\`\`\`markdown ### Performance Considerations When Using Many CSS Media Queries

Using numerous media queries in your CSS can impact performance and maintainability. Here are some key considerations:

#### 1. **CSS File Size**
- **Larger Files:** More media queries generally mean more CSS code, increasing the file size.
- **Impact:** Larger files take longer to download, especially on slow connections, affecting page load times.

#### 2. **CSS Parsing and Rendering**
- **Browser Processing:** Browsers must parse and evaluate all CSS rules, including those inside media queries, even if they don’t apply to the current device.
- **Impact:** Excessive or complex media queries can slow down the rendering process, especially on low-powered devices.

#### 3. **Specificity and Cascade Complexity**
- **Overlapping Queries:** Many media queries can lead to overlapping or conflicting rules, making the cascade harder to manage.
- **Impact:** This can increase the time browsers spend resolving which styles to apply, and make debugging more difficult.

#### 4. **Maintainability**
- **Code Duplication:** Repeating similar styles across multiple queries can bloat your CSS and make updates error-prone.
- **Impact:** Harder to maintain and optimize, leading to potential performance and scalability issues.

#### 5. **Critical CSS and Above-the-Fold Content**
- **Render-Blocking:** If critical CSS is wrapped in media queries, it might delay the rendering of above-the-fold content.
- **Impact:** This can negatively affect perceived performance and Core Web Vitals.

#### 6. **Best Practices to Mitigate Performance Issues**
- **Combine Queries:** Group similar breakpoints and minimize the number of queries.
- **Mobile-First Approach:** Write base styles for mobile and use min-width queries for larger screens, reducing overrides.
- **Use Tools:** Leverage CSS preprocessors or PostCSS to optimize and combine media queries.
- **Audit and Prune:** Regularly audit your CSS to remove unused or redundant queries.

---

**Summary Table**

| Consideration           | Impact                                   | Mitigation                        |
|------------------------|------------------------------------------|-----------------------------------|
| File Size              | Slower downloads                         | Minify and combine queries        |
| Parsing/Rendering      | Slower rendering, especially on mobile   | Simplify and optimize queries     |
| Cascade Complexity     | Harder to debug and maintain             | Use clear, non-overlapping rules  |
| Maintainability        | Increased risk of errors                 | DRY principles, modular CSS       |
| Critical CSS           | Delayed content rendering                | Inline critical CSS, avoid wrapping in queries |

---

**References:**  
- [MDN: Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)  
- [Google Web Fundamentals: Optimize CSS Delivery](https://web.dev/optimize-css-background/)`,level:"Advanced",created_at:"2025-04-20T11:23:52.622477Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"e08ec22e-f0bd-41c1-9c23-6f2d4e94d1ce",question:"How do you write a media query for devices that support touch input?",answer:`\`\`\`css
@media (pointer: coarse) {
  /* CSS rules for devices with touch input */
}
\`\`\`

**Explanation:**

- The \`(pointer: coarse)\` media feature targets devices where the primary input mechanism (like a finger) is imprecise—typical of touchscreens.
- You can also use the \`hover: none\` feature for finer targeting, as most touch devices do not support hover:

\`\`\`css
@media (hover: none) and (pointer: coarse) {
  /* CSS rules for touch-only devices */
}
\`\`\`

**References:**
- [MDN: pointer media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer)
- [MDN: hover media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover)`,level:"Advanced",created_at:"2025-04-20T11:23:52.622484Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"dc3e128e-a7df-4a2b-8c23-cb3014eea98d",question:"What is the 'color-gamut' media feature and how is it used?",answer:`\`\`\`markdown
### What is the \`color-gamut\` Media Feature and How Is It Used?

The \`color-gamut\` media feature in CSS is used to query the approximate color range (gamut) supported by the user's display device. It allows developers to serve enhanced visuals (like more vibrant images or gradients) to devices that support wider color gamuts, while providing fallback options for devices with more limited color capabilities.

#### Possible Values

- **srgb**: The device supports the sRGB color gamut (the minimum guaranteed for all modern devices).
- **p3**: The device supports the DCI-P3 color gamut (wider than sRGB, used by many modern smartphones and displays).
- **rec2020**: The device supports the Rec. 2020 color gamut (even wider, used in high-end displays and some TVs).

#### Usage Example

\`\`\`css
/* Default styles for all devices (at least sRGB) */
body {
  background: linear-gradient(to right, #ff6f00, #ff8e53);
}

/* Enhanced colors for devices with P3 support */
@media (color-gamut: p3) {
  body {
    background: linear-gradient(to right, color(display-p3 1 0.4 0), color(display-p3 1 0.56 0.325));
  }
}

/* Even more vibrant colors for Rec.2020 support */
@media (color-gamut: rec2020) {
  body {
    background: linear-gradient(to right, color(rec2020 1 0.5 0), color(rec2020 1 0.7 0.3));
  }
}
\`\`\`

#### How It Works

- The browser evaluates the user's display capabilities.
- If the device supports a wider gamut (e.g., P3 or Rec.2020), the corresponding media query block is applied, overriding previous styles.
- This enables progressive enhancement: users with capable hardware see richer, more accurate colors, while all users get a functional baseline.

#### Practical Use Cases

- Serving higher-fidelity images or gradients to devices that can display them.
- Ensuring color-critical designs look their best on modern displays.
- Reducing bandwidth for users who wouldn't benefit from wide-gamut assets.

#### Browser Support

Support for \`color-gamut\` is available in most modern browsers, but always check [Can I use](https://caniuse.com/?search=color-gamut) for up-to-date compatibility.

---

**Summary:**  
The \`color-gamut\` media feature enables responsive color design, letting you tailor your site's visuals to the color capabilities of each user's device.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:23:52.622491Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"effac500-5741-44f7-9f1d-49022084c9c4",question:"How can you use media queries to target accessibility preferences, such as high contrast mode?",answer:`\`\`\`markdown You can use CSS media queries to detect and respond to user accessibility preferences, such as high contrast mode, reduced motion, or color scheme preferences. For high contrast mode, the most relevant media feature is \`forced-colors\`, which is supported in some browsers (notably Microsoft Edge and Internet Explorer).

### Example: Targeting High Contrast Mode

\`\`\`css
@media (forced-colors: active) {
  body {
    background: Window;
    color: WindowText;
  }
  a {
    color: LinkText;
  }
  /* Use system color keywords for best compatibility */
}
\`\`\`

- \`forced-colors: active\` applies styles when the user has enabled a high contrast mode.
- Use [system color keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors) (like \`Window\`, \`WindowText\`, \`LinkText\`) to ensure your styles adapt to the user's chosen color scheme.

### Other Accessibility Media Features

- **Reduced Motion:**
  \`\`\`css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
  \`\`\`
- **Color Scheme (Dark/Light):**
  \`\`\`css
  @media (prefers-color-scheme: dark) {
    body {
      background: #111;
      color: #eee;
    }
  }
  \`\`\`

### Browser Support

- \`forced-colors\` is currently best supported in Microsoft Edge and Internet Explorer.
- \`prefers-reduced-motion\` and \`prefers-color-scheme\` have broader support across modern browsers.

### References

- [MDN: forced-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)
- [MDN: System Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#system_colors)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

**In summary:**  
Use the \`@media (forced-colors: active)\` query and system color keywords to style your site for users who enable high contrast mode, ensuring better accessibility.`,level:"Advanced",created_at:"2025-04-20T11:23:52.622499Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"770b4f05-bbc9-4ebe-8e3d-2a6104d2c7ca",question:"How do media queries work with imported CSS files using @import?",answer:`\`\`\`markdown When using the @import rule in CSS, you can specify media queries directly within the import statement. This allows you to conditionally load entire CSS files based on the media features (such as screen size, orientation, etc.).

**Syntax Example:**
\`\`\`css
@import url('print.css') print;
@import url('mobile.css') screen and (max-width: 600px);
\`\`\`

**How It Works:**

- The imported CSS file is only applied if the media query condition is met.
- For example, print.css will only be used for print media, and mobile.css will only be applied to screens with a maximum width of 600px.
- You can also combine multiple media features:
  \`\`\`css
  @import url('tablet.css') screen and (min-width: 601px) and (max-width: 900px);
  \`\`\`

**Key Points:**

- Media queries in @import are evaluated by the browser before applying the imported stylesheet.
- This allows you to modularize your CSS and load only the necessary styles for specific devices or conditions.
- You can still use media queries inside the imported CSS files themselves for more granular control.

**Best Practice:**

While @import with media queries is supported, using <link> tags with media attributes in HTML is generally preferred for performance reasons, as @import can block rendering.

**Example with <link>:**
\`\`\`html
<link rel="stylesheet" href="print.css" media="print">
<link rel="stylesheet" href="mobile.css" media="screen and (max-width: 600px)">
\`\`\`

**Summary Table:**

| Method         | Media Query Placement         | Example                                      |
|----------------|------------------------------|----------------------------------------------|
| @import        | In CSS, after the URL        | @import url('foo.css') screen and (max-width: 600px); |
| <link>         | In HTML, media attribute     | <link rel="stylesheet" href="foo.css" media="screen and (max-width: 600px)"> |

**References:**
- [MDN: @import - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)
- [MDN: Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)`,level:"Advanced",created_at:"2025-04-20T11:23:52.622507Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"9c8861bd-5532-4820-b1cf-54274e2e87f7",question:"What is the 'any-pointer' and 'any-hover' media feature?",answer:`\`\`\`markdown ### \`any-pointer\` and \`any-hover\` Media Features in CSS

The \`any-pointer\` and \`any-hover\` media features are advanced CSS media queries used to detect the capabilities of **any** input device available to the user, not just the primary one.

---

#### \`any-pointer\`

- **Purpose:** Detects the accuracy of any pointing device (mouse, stylus, touchscreen, etc.) available to the user.
- **Possible Values:**
  - \`none\`: No pointing device is present.
  - \`coarse\`: At least one pointing device can only do coarse pointing (e.g., a finger on a touchscreen).
  - \`fine\`: At least one pointing device can do fine pointing (e.g., a mouse or stylus).

**Example:**
\`\`\`css
@media (any-pointer: fine) {
  /* At least one input device has fine pointer accuracy */
  .button { outline: 2px solid blue; }
}
\`\`\`

---

#### \`any-hover\`

- **Purpose:** Detects if **any** input device can trigger hover interactions.
- **Possible Values:**
  - \`none\`: No input device can hover.
  - \`hover\`: At least one input device can hover (e.g., a mouse).

**Example:**
\`\`\`css
@media (any-hover: hover) {
  /* At least one input device supports hover */
  .menu-item:hover { background: #eee; }
}
\`\`\`

---

#### Difference from \`pointer\` and \`hover\`

- \`pointer\` and \`hover\` only consider the **primary** input device.
- \`any-pointer\` and \`any-hover\` consider **all** input devices (e.g., a laptop with both a touchscreen and a mouse).

---

#### Use Case

These features are useful for creating responsive designs that adapt to hybrid devices, ensuring your UI works well whether the user has a mouse, touchscreen, or both.

---

**References:**
- [MDN: any-pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer)
- [MDN: any-hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover)`,level:"Advanced",created_at:"2025-04-20T11:23:52.622514Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"4ba091a8-00fe-424c-9171-ae3cf310ae51",question:"How do you use media queries in JavaScript (e.g., with window.matchMedia)?",answer:`\`\`\`markdown
You can use media queries in JavaScript with the \`window.matchMedia()\` method. This allows you to programmatically test and respond to CSS media query conditions.

### Basic Usage

\`\`\`js
// Define your media query as a string
const mediaQuery = window.matchMedia('(max-width: 600px)');

// Check if the media query matches
if (mediaQuery.matches) {
  // The viewport is 600px or less
  console.log('Viewport is 600px or less');
} else {
  // The viewport is greater than 600px
  console.log('Viewport is greater than 600px');
}
\`\`\`

### Responding to Changes

You can listen for changes to the media query's state using the \`addEventListener\` method (or the older \`addListener\`):

\`\`\`js
function handleMediaQueryChange(e) {
  if (e.matches) {
    // The viewport is 600px or less
    document.body.style.background = 'lightblue';
  } else {
    // The viewport is greater than 600px
    document.body.style.background = 'white';
  }
}

// Set up the media query
const mediaQuery = window.matchMedia('(max-width: 600px)');

// Initial check
handleMediaQueryChange(mediaQuery);

// Listen for changes
mediaQuery.addEventListener('change', handleMediaQueryChange);

// For older browsers, use:
// mediaQuery.addListener(handleMediaQueryChange);
\`\`\`

### Summary

- Use \`window.matchMedia('(media-query)')\` to create a MediaQueryList object.
- Check \`.matches\` to see if the query currently applies.
- Use \`.addEventListener('change', callback)\` to respond to changes in the media query's evaluation.

This approach allows you to synchronize your JavaScript behavior with your CSS media queries, enabling responsive and adaptive web applications.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:23:52.622521Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"7cd19413-b3b9-444c-8f12-5e6d35ec43d4",question:"How can you debug complex media queries?",answer:`\`\`\`markdown ### Debugging Complex CSS Media Queries

Debugging complex media queries can be challenging, but the following strategies and tools can help:

#### 1. **Use Browser DevTools**
- **Responsive Design Mode:** Most browsers (like Chrome, Firefox, Edge) have a responsive design mode. Activate it (usually via F12 or Ctrl+Shift+M) to simulate different screen sizes and see which media queries are applied.
- **Inspect Element:** Right-click an element and select "Inspect". In the Styles pane, you can see which media queries are affecting the element and toggle them on/off.

#### 2. **Add Temporary Visual Aids**
- **Outline Elements:** Temporarily add colored borders or backgrounds within specific media queries to visually confirm when they are active.
    \`\`\`css
    @media (max-width: 600px) {
      body::before {
        content: "max-width: 600px active";
        display: block;
        background: yellow;
        color: black;
        text-align: center;
      }
    }
    \`\`\`
- **Change Colors:** Use distinct colors for backgrounds or text in different queries to quickly spot which one is active.

#### 3. **Log Media Query Matches in JavaScript**
- Use JavaScript to log when a media query matches:
    \`\`\`js
    const mq = window.matchMedia("(max-width: 600px)");
    mq.addEventListener("change", (e) => {
      if (e.matches) {
        console.log("max-width: 600px matched");
      } else {
        console.log("max-width: 600px not matched");
      }
    });
    \`\`\`

#### 4. **Check for Overlapping or Conflicting Queries**
- Ensure that your queries do not overlap in unintended ways. For example, \`(max-width: 800px)\` and \`(min-width: 600px)\` overlap between 600px and 800px.
- Use logical operators (\`and\`, \`not\`, \`only\`) carefully to avoid conflicts.

#### 5. **Organize and Comment Your CSS**
- Clearly comment each media query block to indicate its purpose.
- Group related queries together for easier scanning.

#### 6. **Use CSS Preprocessors**
- Tools like Sass or Less can help you nest media queries and manage them more cleanly, reducing errors.

#### 7. **Test on Real Devices**
- Emulators are helpful, but always test on actual devices when possible to catch device-specific quirks.

---

**Summary Table**

| Method                       | Description                                      |
|------------------------------|--------------------------------------------------|
| Browser DevTools             | Inspect and toggle media queries in real time    |
| Visual Aids                  | Add borders, backgrounds, or content for cues    |
| JavaScript Logging           | Log when queries match for dynamic feedback      |
| Check for Overlaps           | Review logic to avoid conflicting queries        |
| Organize & Comment           | Make CSS readable and maintainable               |
| Preprocessors                | Use tools for better structure and nesting       |
| Real Device Testing          | Verify on actual hardware                        |

---

**Tip:**  
Always keep your media queries as simple and specific as possible. The more complex they are, the harder they are to debug!`,level:"Advanced",created_at:"2025-04-20T11:23:52.622529Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"9dbace60-f9b2-4eb9-b725-161acdde0bb4",question:"What are the limitations of CSS media queries?",answer:`\`\`\`markdown **Limitations of CSS Media Queries**

CSS media queries are powerful for creating responsive designs, but they have several limitations:

1. **Device Capability Detection is Limited**
   - Media queries primarily detect viewport size, resolution, orientation, and a few other features (like color depth). They cannot detect device capabilities such as touch support, camera availability, or hardware performance.

2. **No Contextual Awareness**
   - Media queries do not know about the user’s context, such as whether the user is using a mouse or keyboard, or if they are in a dark room. They can’t adapt to user preferences beyond what’s exposed (e.g., prefers-color-scheme).

3. **No JavaScript or Dynamic Data Integration**
   - Media queries are static and cannot react to dynamic data or state changes in your application. For example, you cannot use media queries to style based on data fetched from an API or user interactions.

4. **Limited to CSS Properties**
   - Media queries can only control CSS properties. They cannot conditionally load or unload HTML content, images, or scripts based on media features.

5. **Complexity with Multiple Breakpoints**
   - Managing many breakpoints can become complex and hard to maintain, especially for large projects with many device targets.

6. **No Fine-Grained Feature Detection**
   - Media queries cannot detect support for specific CSS features (like grid or flexbox). For that, you need feature queries (\`@supports\`), which are separate from media queries.

7. **Performance Concerns**
   - Overusing media queries or having too many can impact performance, especially on low-end devices, as the browser must evaluate all queries on resize or orientation change.

8. **Inconsistent Browser Support for Some Features**
   - Not all media features are supported equally across browsers, especially newer ones like \`hover\`, \`pointer\`, or \`prefers-reduced-motion\`.

---

**Summary Table**

| Limitation                        | Description                                                      |
|------------------------------------|------------------------------------------------------------------|
| Device Capability Detection        | Cannot detect touch, camera, or hardware performance             |
| Contextual Awareness               | No knowledge of user context or environment                      |
| No Dynamic Data Integration        | Cannot react to JavaScript or dynamic application state          |
| Limited to CSS                     | Cannot conditionally load HTML, images, or scripts               |
| Complexity with Breakpoints        | Hard to maintain with many breakpoints                           |
| No Fine-Grained Feature Detection  | Cannot detect specific CSS feature support                       |
| Performance Concerns               | Too many queries can slow down rendering                         |
| Inconsistent Browser Support       | Some features not supported everywhere                           |

**References:**
- [MDN Web Docs: Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [CSS-Tricks: Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)`,level:"Advanced",created_at:"2025-04-20T11:23:52.622537Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"dba2cd41-91e1-48d3-bff3-861bcd9ee30b",question:"How do media queries interact with viewport meta tags on mobile devices?",answer:`\`\`\`markdown Media queries and the viewport meta tag work together to create responsive web designs, especially on mobile devices.

**Viewport Meta Tag**

The viewport meta tag controls the visible area of a web page on mobile devices. For example:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1">
\`\`\`

- \`width=device-width\`: Sets the viewport width to the device’s width.
- \`initial-scale=1\`: Sets the initial zoom level.

Without this tag, mobile browsers often render pages at a desktop width and scale them down, which can break responsive layouts.

**Media Queries**

Media queries apply CSS rules based on device characteristics, such as screen width:

\`\`\`css
@media (max-width: 600px) {
  body {
    background: lightblue;
  }
}
\`\`\`

**Interaction**

- On mobile devices, if the viewport meta tag is missing, the browser may use a default (often 980px) layout width. Media queries like \`@media (max-width: 600px)\` may not trigger as expected, because the page is rendered at a larger virtual width.
- When the viewport meta tag is present and set to \`width=device-width\`, the CSS pixel width matches the device’s actual screen width. Media queries then respond accurately to the device’s size.

**Summary Table**

| Scenario                              | Media Query Behavior                                 |
|----------------------------------------|------------------------------------------------------|
| No viewport meta tag                   | Media queries use a large virtual width (e.g., 980px); responsive rules may not apply as intended. |
| With viewport meta tag (\`device-width\`)| Media queries use the actual device width; responsive rules work as expected. |

**Key Point:**  
The viewport meta tag ensures that media queries reflect the true device width on mobile, enabling effective responsive design. Always include an appropriate viewport meta tag when using media queries for mobile layouts.`,level:"Advanced",created_at:"2025-04-20T11:23:52.622548Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"b19f6738-9ad2-4db9-8172-4035491cf13a",question:"How can you use media queries to create a print-friendly version of your site?",answer:`\`\`\`markdown To create a print-friendly version of your site using CSS media queries, you can use the \`@media print\` rule. This allows you to specify styles that will only apply when the page is printed or previewed for printing. Here’s how you can do it:

\`\`\`css
@media print {
  /* Hide navigation, sidebars, and other non-essential elements */
  nav, .sidebar, .footer {
    display: none !important;
  }

  /* Make content full width */
  .main-content {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  /* Adjust font size and colors for print */
  body {
    color: #000;
    background: #fff;
    font-size: 12pt;
  }

  /* Remove background images and colors */
  * {
    background: none !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  /* Prevent page breaks inside important elements */
  h1, h2, h3, p, img {
    page-break-inside: avoid;
  }

  /* Add page numbers (optional, for paged media) */
  @page {
    margin: 1in;
  }
}
\`\`\`

**Key Steps:**

1. **Target Print Media:** Use \`@media print { ... }\` to wrap your print-specific styles.
2. **Hide Non-Essential Elements:** Hide navigation bars, sidebars, footers, or any elements not needed in print.
3. **Optimize Layout:** Adjust widths, margins, and paddings to use the printable area efficiently.
4. **Simplify Colors:** Use high-contrast, print-friendly colors (typically black text on white background).
5. **Remove Backgrounds:** Remove background images and colors to save ink and improve readability.
6. **Control Page Breaks:** Use \`page-break-inside: avoid;\` to prevent awkward splits in content.
7. **Set Print Margins:** Use the \`@page\` rule to control page margins.

**Example Usage:**

\`\`\`html
<link rel="stylesheet" href="styles.css" media="print">
\`\`\`
or include the \`@media print\` block in your main CSS file.

By using these techniques, you can ensure your website is clean, readable, and professional-looking when printed.`,level:"Advanced",created_at:"2025-04-20T11:23:52.622558Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"fba4b34a-974b-4433-a237-3f8c9fbeb369",question:"What is the 'display-mode' media feature and how is it used in progressive web apps?",answer:`\`\`\`markdown
### What is the \`display-mode\` Media Feature in CSS and How is it Used in Progressive Web Apps?

The \`display-mode\` media feature is a CSS media query that allows developers to apply styles based on how a web application is being displayed, especially in the context of Progressive Web Apps (PWAs).

#### **What Does \`display-mode\` Do?**

It detects the current [display mode](https://developer.mozilla.org/en-US/docs/Web/Manifest/display) of the web application, which can be one of the following values:

- \`fullscreen\` – The app is running in full-screen mode (no browser UI).
- \`standalone\` – The app looks and feels like a standalone native app (minimal browser UI).
- \`minimal-ui\` – The app has a minimal set of browser UI elements for user convenience.
- \`browser\` – The app is running in a standard browser tab.

#### **Syntax**

\`\`\`css
@media (display-mode: standalone) {
  /* Styles for standalone mode */
}
\`\`\`

#### **Usage in Progressive Web Apps**

PWAs can be installed to a user's device and launched independently of the browser. The \`display-mode\` media feature allows developers to tailor the user interface and experience depending on how the app is launched:

- **Standalone/Fullscreen:** Hide navigation bars, adjust layouts, or show app-specific UI elements.
- **Browser:** Show prompts to install the app or display browser-specific navigation.

##### **Example:**

\`\`\`css
/* Style the header differently when the app is installed */
@media (display-mode: standalone) {
  header {
    background: #222;
    color: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
}

/* Show an install banner only in browser mode */
@media (display-mode: browser) {
  .install-banner {
    display: block;
  }
}
\`\`\`

#### **Why is it Useful?**

- **Enhanced User Experience:** Provides a more app-like experience when installed.
- **Conditional UI:** Enables or disables features based on context.
- **Consistency:** Ensures the app looks and behaves appropriately in all display modes.

#### **Browser Support**

Most modern browsers that support PWAs also support the \`display-mode\` media feature, but always check [current compatibility](https://caniuse.com/mdn-css_at-rules_media_display-mode).

---

**References:**
- [MDN: display-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode)
- [Web.dev: display-mode media query](https://web.dev/display-mode/)
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:23:52.622569Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"a133068e-1f31-4d76-9f17-8c872b6322e5",question:"How do you write a media query that targets devices with a specific device pixel ratio?",answer:"```markdown To target devices with a specific device pixel ratio using CSS media queries, you use the resolution feature or the deprecated device-pixel-ratio feature. The modern and recommended approach is to use min-resolution and max-resolution.\n\n**Example: Target devices with a device pixel ratio of 2 (e.g., Retina displays):**\n\n```css\n@media \n  (-webkit-min-device-pixel-ratio: 2), /* For older WebKit browsers */\n  (min-resolution: 192dpi),             /* Dots per inch */\n  (min-resolution: 2dppx)               /* Dots per pixel unit */\n{\n  /* CSS rules for high-DPR devices */\n  body {\n    background-image: url('image@2x.png');\n  }\n}\n```\n\n**Explanation:**\n\n- `-webkit-min-device-pixel-ratio: 2`: Targets WebKit browsers (Safari, older Chrome) with a DPR of 2 or higher.\n- `min-resolution: 192dpi`: Targets devices with a minimum resolution of 192 dots per inch (2 × 96dpi).\n- `min-resolution: 2dppx`: Targets devices with a minimum resolution of 2 device pixels per CSS pixel (modern, standard syntax).\n\n**Note:**  \n- Use `min-` or `max-` to target ranges (e.g., `min-resolution: 2dppx` for 2 or higher).\n- For an exact match, combine `min-` and `max-`:\n\n```css\n@media (min-resolution: 2dppx) and (max-resolution: 2dppx) {\n  /* Exact DPR of 2 */\n}\n```\n\n**Best Practice:**  \nPrefer using `min-resolution`/`max-resolution` with `dppx` for modern browsers. Use `-webkit-min-device-pixel-ratio` for broader compatibility with older WebKit browsers.",level:"Advanced",created_at:"2025-04-20T11:23:52.622581Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"578460da-ce85-48e6-ba9e-5af46d1c7569",question:"How can you use media queries to support both left-to-right and right-to-left layouts?",answer:`\`\`\`markdown
To support both left-to-right (LTR) and right-to-left (RTL) layouts using CSS media queries, you can leverage the \`direction\` or \`dir\` attribute of the HTML document. While media queries themselves do not directly detect text direction, you can combine them with attribute selectors or use the \`:dir()\` pseudo-class (supported in modern browsers) to apply different styles based on the document's direction.

### Example 1: Using the \`:dir()\` Pseudo-class

\`\`\`css
/* Styles for LTR layouts */
:dir(ltr) .container {
  margin-left: 20px;
  margin-right: 0;
  text-align: left;
}

/* Styles for RTL layouts */
:dir(rtl) .container {
  margin-right: 20px;
  margin-left: 0;
  text-align: right;
}
\`\`\`

### Example 2: Combining with Media Queries

You can combine \`:dir()\` with media queries to make your layout responsive and direction-aware:

\`\`\`css
@media (max-width: 600px) {
  :dir(ltr) .sidebar {
    left: 0;
    right: auto;
  }
  :dir(rtl) .sidebar {
    right: 0;
    left: auto;
  }
}
\`\`\`

### Example 3: Using Attribute Selectors

Alternatively, use attribute selectors if \`:dir()\` is not supported:

\`\`\`css
html[dir="ltr"] .nav {
  float: left;
}

html[dir="rtl"] .nav {
  float: right;
}
\`\`\`

### Summary

- Use the \`:dir()\` pseudo-class or \`[dir="rtl"]\`/\`[dir="ltr"]\` attribute selectors to target direction.
- Combine with media queries for responsive, direction-aware layouts.
- This approach ensures your site adapts to both LTR and RTL languages seamlessly.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:23:52.622593Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"},{id:"fbc10759-8ecc-4e0b-a1fd-674307611313",question:"How do you handle browser compatibility issues with media queries?",answer:`\`\`\`markdown
### Handling Browser Compatibility Issues with CSS Media Queries

To ensure your media queries work consistently across different browsers, follow these best practices:

1. **Use Standard Syntax**  
   Stick to the standard media query syntax as defined by the [W3C specification](https://www.w3.org/TR/css3-mediaqueries/). For example:
   \`\`\`css
   @media (max-width: 600px) {
     /* styles */
   }
   \`\`\`

2. **Vendor Prefixes (Rarely Needed)**  
   Most modern browsers support media queries without prefixes. However, for very old browsers (like early versions of Safari or Android), you might encounter issues. If targeting such browsers, consider using vendor prefixes:
   \`\`\`css
   @media screen and (-webkit-min-device-pixel-ratio: 2) {
     /* styles for retina displays */
   }
   \`\`\`

3. **Feature Detection**  
   Use [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) to check for feature support before applying certain styles:
   \`\`\`css
   @supports (display: grid) {
     @media (min-width: 800px) {
       /* grid-specific styles */
     }
   }
   \`\`\`

4. **Fallbacks for Older Browsers**  
   Write your CSS with a "mobile-first" approach. Place base styles outside media queries, and use media queries to enhance for larger screens. Older browsers that don't support media queries will get the base styles.

5. **Testing Across Browsers**  
   Test your site in multiple browsers and devices (using tools like BrowserStack, Sauce Labs, or built-in browser emulators) to identify inconsistencies.

6. **Avoid Deprecated or Non-Standard Features**  
   Some media features (like \`device-width\`, \`device-height\`) are deprecated or unreliable. Prefer using \`width\`, \`height\`, \`orientation\`, etc.

7. **Graceful Degradation and Progressive Enhancement**  
   Design your CSS so that if a media query isn't supported, the site remains usable and readable.

8. **Polyfills (if absolutely necessary)**  
   For extremely old browsers (like IE8 and below), you can use JavaScript polyfills such as [Respond.js](https://github.com/scottjehl/Respond) to add basic media query support.

#### Example: Mobile-First with Fallback
\`\`\`css
/* Base styles for all browsers */
body {
  font-size: 16px;
}

/* Enhanced styles for wider screens */
@media (min-width: 600px) {
  body {
    font-size: 18px;
  }
}
\`\`\`

#### Resources
- [Can I use: CSS Media Queries](https://caniuse.com/css-mediaqueries)
- [MDN: Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

**Summary:**  
Use standard, well-supported media features, test thoroughly, provide sensible fallbacks, and use feature detection for advanced CSS. This ensures your responsive designs work reliably across browsers.
\`\`\`
`,level:"Advanced",created_at:"2025-04-20T11:23:52.622606Z",topic:"28c46ca5-3706-402c-8b74-99b27c5e32d0"}];export{e as default};
