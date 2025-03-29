import json
import uuid
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

prompt = """
You are an AI assistant. **THIS IS CRITICAL: Generate ONLY a valid JSON response.**

**Important Rule**
1. Response should have this format. Inside answer property there can be any number of content type and content

The output should be in the following JSON structure:

```json
{
  "questions": [
    {
      "id": "<UUID>",
      "question": "<Question>",
      "answer": [
        {
          "type": "text",
          "content": "<Paragraph content>"
        },
        {
          "type": "list",
          "items": ["<list item 1>", "<list item 2>", ...]
        },
        {
          "type": "code",
          "language": "<language>",
          "content": "<code content>"
        }
      ],
      "level": "<Beginner/Intermediate/Advanced>",
    }
  ]
}


**Rules:**
1. The response must be a **JSON array** containing **one object per question**.
2. Each object must contain:
   - `"id"` (string) → random id.
   - `"question"` (string) → The main question being answered.
   - `"answer"` (array) → A list of content blocks related to the question.
3. Each content block inside `"answer"` can contain any number and combination of content types:
   - `"type"` (string) → The content type (**"text"**, **"code"**, **"list"**, **"table"**, **"image"**, **"quote"**, **"note"**).
   - `"content"` (string/array) → The actual content.
4. If `"type": "code"`, include:
   - `"language"` (string) → The programming language.
   - `"content"` (string) → The code snippet.
5. If `"type": "list"`, include:
   - `"items"` (array of strings) → List elements.
6. If `"type": "table"`, include:
   - `"columns"` (array of strings) → Table headers.
   - `"rows"` (array of arrays) → Table data.
7. Do not output anything except JSON.  
   -  NO extra text like "Here's a valid JSON response"  
   -  NO explanations.  
   -  Start immediately with `[` and end with `]`
8. DO NOT use markdown fences (e.g., ` ```json ` or ` ``` `).  
9. Escape all newlines (`\\n`) and quotes (`\\\"`) properly inside code blocks.**  
   - Incorrect: `"content": \"\"\"\nconst x = 10;\n\"\"\""`
   - Correct: `"content": "const x = 10;\\n"`
10. DO NOT use triple quotes (`\"\"\"`) inside code blocks.
11. For each question in the input request, extract the following content into the correct format:
    - The `question` field should be the main question.
    - The `answer` field should contain separate content blocks, based on content type (e.g., text, code, list).
12. For `answer` containing markdown content:
    - The markdown needs to be processed and converted into appropriate content types.
    - **Headings (e.g., '### Key Benefits of Using a Microservices Architecture')** should be included as `text` content with the heading level noted.
    - **Lists (e.g., numbered or bulleted lists)** should be extracted and converted into `list` content, with each list item represented as a separate string inside the `items` array.
    - **Code blocks (e.g., anything inside '```code block```')** should be extracted as `code` content with the appropriate language (e.g., `language: 'markdown'` if the content is markdown, or other applicable languages).
    - **Paragraphs or plain text** should be extracted as `text` content.
    - Special characters (like quotes or newlines) in markdown content need to be escaped properly in the `content` fields.
13. Ensure each content block is appropriately categorized (text, code, list, etc.) by processing the markdown appropriately, and be sure to escape special characters like quotes and newlines correctly.
14. The reponse should have the array of object. Each object shall have question and answer. Each answer should be any array of content type

###  **LANGUAGE-SPECIFIC CODE BLOCK RULES**  

####  React (JSX)
{
    \"type\": \"code\",
    \"language\": \"jsx\",
    \"content\": \"import React from 'react';\\n\\nfunction App() {\\n    return <h1>Hello, World!</h1>;\\n}\\n\\nexport default App;\"
}

- Use **functional components**.  
- Use **JSX syntax correctly**.  
- Always **export the component** (`export default`).  

---

####  **Angular (TypeScript)**
{
    "type": "code",
    "language": "typescript",
    "content": "import { Component } from '@angular/core';\\n\\n@Component({\\n  selector: 'app-root',\\n  template: '<h1>{{ title }}</h1>',\\n  styleUrls: ['./app.component.css']\\n})\\nexport class AppComponent {\\n  title = 'Hello Angular';\\n}"
}


- Use **TypeScript** for Angular code.  
- Follow **Angular decorators (`@Component`)**.  
- Escape template literals properly.  

---

####  JavaScript (ES6+)
{
    \"type\": \"code\",
    \"language\": \"javascript\",
    \"content\": \"const sayHello = () => {\\n    console.log('Hello, World!');\\n};\\n\\nsayHello();\"
}

- Use **modern ES6+ syntax** (`const`, arrow functions, etc.).  
- Ensure **proper indentation and semicolon usage**.  

---

####  TypeScript
{
    \"type\": \"code\",
    \"language\": \"typescript\",
    \"content\": \"function greet(name: string): string {\\n    return `Hello, ${name}!`;\\n}\\n\\nconsole.log(greet('Alice'));"
}

- Use **TypeScript-specific types** (`string`, `number`, `boolean`).  
- Ensure TypeScript functions have **type annotations**.  

---

####  Golang
{
    \"type\": \"code\",
    \"language\": \"go\",
    \"content\": \"package main\\n\\nimport (\\n\\t\\\"fmt\\\"\\n\\t\\\"time\\\"\\n)\\n\\nfunc task() {\\n\\tfmt.Println(\\\"Task executed at\\\", time.Now())\\n}\\n\\nfunc main() {\\n\\tticker := time.NewTicker(5 * time.Second)\\n\\tdefer ticker.Stop()\\n\\n\\tfor range ticker.C {\\n\\t\\ttask()\\n\\t}\\n}\"
}

- Escape all **newlines and quotes correctly**.  
- Use Go **idioms** (`main()`, `defer`).  

---

####  C# (.NET)
{
    \"type\": \"code\",
    \"language\": \"csharp\",
    \"content\": \"using System;\\n\\nclass Program {\\n    static void Main() {\\n        Console.WriteLine(\\\"Hello, World!\\\");\\n    }\\n}\"
}

- Use **`using System;`** for basic console apps.  
- Escape all **quotes and line breaks properly**.  

---

####  Python
{
    \"type\": \"code\",
    \"language\": \"python\",
    \"content\": \"def greet(name):\\n    return f'Hello, {name}!'\\n\\nprint(greet('Alice'))\"
}

- Follow **PEP8 guidelines** (indentation, function names, spacing).  
- Use **f-strings** for string formatting.  

---

####  Java
{
    \"type\": \"code\",
    \"language\": \"java\",
    \"content\": \"public class Main {\\n    public static void main(String[] args) {\\n        System.out.println(\\\"Hello, World!\\\");\\n    }\\n}\"
}

- Use **public class Main** as an entry point.  
- Escape **double quotes** inside strings.  

---

####  Swift (iOS)
{
    \"type\": \"code\",
    \"language\": \"swift\",
    \"content\": \"import SwiftUI\\n\\nstruct ContentView: View {\\n    var body: some View {\\n        Text(\\\"Hello, World!\\\")\\n    }\\n}\"
}

- Follow **SwiftUI syntax** for UI components.  
- Ensure proper **Swift syntax** for functions and variables.  

---

####  Kotlin (Android)
{
    \"type\": \"code\",
    \"language\": \"kotlin\",
    \"content\": \"fun main() {\\n    println(\\\"Hello, World!\\\")\\n}\"
}

- Use **idiomatic Kotlin syntax**.  
- Prefer **functions (`fun`)** over Java-style classes.  

---

####  PowerShell
{
    \"type\": \"code\",
    \"language\": \"powershell\",
    \"content\": \"Write-Output 'Hello, World!'\\nStart-Sleep -Seconds 2\\nWrite-Output 'Goodbye!'"
}

- Use PowerShell **cmdlets** (`Write-Output`, `Start-Sleep`).  
- Ensure correct **script structure**.  

---

####  SQL (MySQL / PostgreSQL)
{
    \"type\": \"code\",
    \"language\": \"sql\",
    \"content\": \"SELECT * FROM users WHERE status = 'active';\"
}

- Use **standard SQL syntax** (`SELECT`, `WHERE`).  
- Ensure **query safety** (avoid injection risks).  

---

####  Bash / Shell Scripting
{
    \"type\": \"code\",
    \"language\": \"bash\",
    \"content\": \"#!/bin/bash\\necho 'Hello, World!'\\nsleep 2\\necho 'Goodbye!'"
}

- Use **`#!/bin/bash`** shebang for scripts.  
- Use **echo** for output.  

---

### 🔥 **FINAL WARNING:**
-  **Start immediately with `[`**
-  **End only with `]`**
- ❌ **No explanations**
- ❌ **No extra text**
-  **Responses must use any combination of `"text"`, `"list"`, `"code"`, `"note"`, `"quote"`, and `"table"`**
-  **All `"code"` blocks must be properly escaped**

"""


# Allow all origins (for testing). Restrict this in production.
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

# Ollama 3 API endpoint
OLLAMA_API_URL = "http://localhost:11434/api/generate"

def call_llama3(prompt, question):
    """
    Sends a request to the locally running Llama 3 model via Ollama API,
    using both a prompt and a user question.
    """
    full_prompt = f"{prompt}\n\n### Question:\n{question}"
    payload = {"model": "llama3", "prompt": full_prompt, "stream": False}

    try:
        response = requests.post(OLLAMA_API_URL, json=payload, timeout=30)
        response.raise_for_status()
        return response.json().get("response", "").strip()
    except requests.exceptions.RequestException as e:
        print(f"❌ Error: {e}")
        return "Error communicating with Llama 3"

@app.route("/api/ask", methods=["POST"])
def ask_llama3():
    try:
        data = request.get_json()
        question = data.get("question", "").strip()

        print(f"📩 Received question: {question}")  # Log request

        if not question:
            return jsonify({"error": "Question is required"}), 400

        response_text = call_llama3(prompt, question)

        print(f"📤 Llama3 Response: {response_text}")  # Log response

        return jsonify({"question": question, "answer": response_text}), 200
    except Exception as e:
        print(f"❌ Error: {e}")  # Log errors
        return jsonify({"error": str(e)}), 500

# Handle CORS preflight requests explicitly
@app.route("/api/ask", methods=["OPTIONS"])
def handle_preflight():
    response = jsonify({"message": "Preflight OK"})
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response, 200

# Add global CORS headers for all responses
@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    return response

if __name__ == "__main__":
    app.run(debug=True, port=5000)
