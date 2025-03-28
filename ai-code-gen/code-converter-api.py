import json
import uuid
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

prompt = """
You are an AI assistant. **This is VERY IMPORTANT: Generate ONLY a valid JSON response** in the following format:

[
    {{
        \"id\": \"<unique-question-id>\",
        \"question\": \"<Original Question>\",
        \"answer\": [
            {{
                \"type\": \"text\",
                \"content\": \"<Descriptive paragraph>\"
            }},
            {{
                \"type\": \"list\",
                \"items\": [
                    \"<List item 1>\",
                    \"<List item 2>\"
                ]
            }},
            {{
                \"type\": \"code\",
                \"language\": \"<Programming language>\",
                \"content\": \"<Code snippet (escaped properly)>\"
            }},
            {{
                \"type\": \"table\",
                \"columns\": [\"<Column 1>\", \"<Column 2>\"],
                \"rows\": [
                    [\"<Row 1 Col 1>\", \"<Row 1 Col 2>\"],
                    [\"<Row 2 Col 1>\", \"<Row 2 Col 2>\"]
                ]
            }},
            {{
                \"type\": \"quote\",
                \"content\": \"<Quotation text (ensure inner quotes are escaped)>\"
            }},
            {{
                \"type\": \"note\",
                \"content\": \"<Additional context>\",
                \"highlight\": <true/false>
            }}
        ]
    }}
]

### 🚨 VERY IMPORTANT: STRICT JSON RULES 🚨
1. **DO NOT** include any explanation, comments, or extra text—ONLY output a valid JSON.
2. **DO NOT** use markdown fences (e.g., ```json or ```).
3. **Ensure the JSON is directly parseable**:
   - **Escape all newlines (`\\n`)** instead of using raw line breaks.
   - **Escape all quotes (`\\\"`)** inside strings.
   - **Maintain valid JSON syntax** at all times.
4. **DO NOT** use triple quotes (`\"\"\"`) inside code blocks.
5. **Ensure each programming language follows proper syntax, formatting, and best practices.**


### Formatting & Output Rules:
1. **DO NOT** include any explanatory text, markdown, or additional formatting outside the JSON.
2. **DO NOT** include markdown fences (e.g., ```json or ```).
3. **DO NOT** use unescaped triple quotes (```\"\"\"```) inside JSON.
4. **Escape ALL special characters properly**:
   - **Newlines (\\n)** must be used in multi-line text and code blocks.
   - **Quotes (\\\")** inside strings must be escaped.
5. **Ensure JSON is directly parseable** with **no trailing commas** or syntax errors.
6. **Use correct indentation and structure** to ensure readability.
7. **Ensure each programming language adheres to best practices**.

### Example of Correctly Formatted Code Content:
For Golang:
```json
{
    \"type\": \"code\",
    \"language\": \"go\",
    \"content\": \"package main\\n\\nimport (\\n\\t\\\"fmt\\\"\\n\\t\\\"time\\\"\\n)\\n\\nfunc task() {\\n\\tfmt.Println(\\\"Task executed at\\\", time.Now())\\n}\\n\\nfunc main() {\\n\\tticker := time.NewTicker(5 * time.Second)\\n\\tdefer ticker.Stop()\\n\\n\\tfor range ticker.C {\\n\\t\\ttask()\\n\\t}\\n}\"
}

### Code Formatting Rules:

#### ✅ React (JSX)
{
    \"type\": \"code\",
    \"language\": \"jsx\",
    \"content\": \"import React from 'react';\\n\\nfunction App() {\\n    return <h1>Hello, World!</h1>;\\n}\\n\\nexport default App;\"
}

✔ Use **functional components**.  
✔ Use **JSX syntax correctly**.  
✔ Always **export the component** (`export default`).  

---

#### ✅ Angular (TypeScript)
{
    \"type\": \"code\",
    \"language\": \"typescript\",
    \"content\": \"import { Component } from '@angular/core';\\n\\n@Component({\\n  selector: 'app-root',\\n  template: '<h1>{{ title }}</h1>',\\n  styleUrls: ['./app.component.css']\\n})\\nexport class AppComponent {\\n  title = 'Hello Angular';\\n}\"
}

✔ Use **TypeScript** for Angular code.  
✔ Follow **Angular decorators (`@Component`)**.  
✔ Escape template literals properly.  

---

#### ✅ JavaScript (ES6+)
{
    \"type\": \"code\",
    \"language\": \"javascript\",
    \"content\": \"const sayHello = () => {\\n    console.log('Hello, World!');\\n};\\n\\nsayHello();\"
}

✔ Use **modern ES6+ syntax** (`const`, arrow functions, etc.).  
✔ Ensure **proper indentation and semicolon usage**.  

---

#### ✅ TypeScript
{
    \"type\": \"code\",
    \"language\": \"typescript\",
    \"content\": \"function greet(name: string): string {\\n    return `Hello, ${name}!`;\\n}\\n\\nconsole.log(greet('Alice'));"
}

✔ Use **TypeScript-specific types** (`string`, `number`, `boolean`).  
✔ Ensure TypeScript functions have **type annotations**.  

---

#### ✅ Golang
{
    \"type\": \"code\",
    \"language\": \"go\",
    \"content\": \"package main\\n\\nimport (\\n\\t\\\"fmt\\\"\\n\\t\\\"time\\\"\\n)\\n\\nfunc task() {\\n\\tfmt.Println(\\\"Task executed at\\\", time.Now())\\n}\\n\\nfunc main() {\\n\\tticker := time.NewTicker(5 * time.Second)\\n\\tdefer ticker.Stop()\\n\\n\\tfor range ticker.C {\\n\\t\\ttask()\\n\\t}\\n}\"
}

✔ Escape all **newlines and quotes correctly**.  
✔ Use Go **idioms** (`main()`, `defer`).  

---

#### ✅ C# (.NET)
{
    \"type\": \"code\",
    \"language\": \"csharp\",
    \"content\": \"using System;\\n\\nclass Program {\\n    static void Main() {\\n        Console.WriteLine(\\\"Hello, World!\\\");\\n    }\\n}\"
}

✔ Use **`using System;`** for basic console apps.  
✔ Escape all **quotes and line breaks properly**.  

---

#### ✅ Python
{
    \"type\": \"code\",
    \"language\": \"python\",
    \"content\": \"def greet(name):\\n    return f'Hello, {name}!'\\n\\nprint(greet('Alice'))\"
}

✔ Follow **PEP8 guidelines** (indentation, function names, spacing).  
✔ Use **f-strings** for string formatting.  

---

#### ✅ Java
{
    \"type\": \"code\",
    \"language\": \"java\",
    \"content\": \"public class Main {\\n    public static void main(String[] args) {\\n        System.out.println(\\\"Hello, World!\\\");\\n    }\\n}\"
}

✔ Use **public class Main** as an entry point.  
✔ Escape **double quotes** inside strings.  

---

#### ✅ Swift (iOS)
{
    \"type\": \"code\",
    \"language\": \"swift\",
    \"content\": \"import SwiftUI\\n\\nstruct ContentView: View {\\n    var body: some View {\\n        Text(\\\"Hello, World!\\\")\\n    }\\n}\"
}

✔ Follow **SwiftUI syntax** for UI components.  
✔ Ensure proper **Swift syntax** for functions and variables.  

---

#### ✅ Kotlin (Android)
{
    \"type\": \"code\",
    \"language\": \"kotlin\",
    \"content\": \"fun main() {\\n    println(\\\"Hello, World!\\\")\\n}\"
}

✔ Use **idiomatic Kotlin syntax**.  
✔ Prefer **functions (`fun`)** over Java-style classes.  

---

#### ✅ PowerShell
{
    \"type\": \"code\",
    \"language\": \"powershell\",
    \"content\": \"Write-Output 'Hello, World!'\\nStart-Sleep -Seconds 2\\nWrite-Output 'Goodbye!'"
}

✔ Use PowerShell **cmdlets** (`Write-Output`, `Start-Sleep`).  
✔ Ensure correct **script structure**.  

---

#### ✅ SQL (MySQL / PostgreSQL)
{
    \"type\": \"code\",
    \"language\": \"sql\",
    \"content\": \"SELECT * FROM users WHERE status = 'active';\"
}

✔ Use **standard SQL syntax** (`SELECT`, `WHERE`).  
✔ Ensure **query safety** (avoid injection risks).  

---

#### ✅ Bash / Shell Scripting
{
    \"type\": \"code\",
    \"language\": \"bash\",
    \"content\": \"#!/bin/bash\\necho 'Hello, World!'\\nsleep 2\\necho 'Goodbye!'"
}

✔ Use **`#!/bin/bash`** shebang for scripts.  
✔ Use **echo** for output.  

---

By following these rules, the AI should generate **valid, structured JSON with properly formatted code for each language**.

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

# @app.route("/api/ask", methods=["POST"])
# def ask_llama3():
#     """
#     API endpoint to send both a prompt and a question to Llama 3 and get a response.
#     """
#     try:
#         data = request.get_json()
#         prompt = data.get("prompt", "").strip()
#         question = data.get("question", "").strip()

#         if not prompt or not question:
#             return jsonify({"error": "Both prompt and question are required"}), 400

#         response_text = call_llama3(prompt, question)

#         return jsonify({
#             "prompt": prompt,
#             "question": question,
#             "answer": response_text
#         }), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
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

def process_questions(data):
    """
    Converts raw questions and answers into structured content blocks.
    """
    transformed_questions = []
    for question_obj in data.get("questions", []):
        question_id = question_obj.get("id", str(uuid.uuid4()))
        question_text = question_obj.get("question", "No question provided")
        print(question_text)
        raw_answer = question_obj.get("answer", "").strip("```markdown\n").strip("```")

        # Generate structured JSON using Llama 3
        prompt = f"""
Generate only a valid JSON response, with no additional text or explanation. 
Transform the following question and answer into structured JSON format using these content block types:

- **text**: Regular paragraph text.
- **code**: Code blocks with syntax highlighting.
- **list**: Bulleted or numbered lists.
- **table**: Data presented in a structured tabular format.
- **image**: Image URLs with optional captions.
- **quote**: Quotations or citations.
- **note**: Additional information, which may be highlighted for emphasis.

Ensure the output is **ONLY** a JSON array formatted as follows:

[
    {{
        "id": "<unique-question-id>",
        "question": "<Original Question>",
        "answer": [
            {{
                "type": "text",
                "content": "<Descriptive paragraph>"
            }},
            {{
                "type": "list",
                "items": [
                    "<List item 1>",
                    "<List item 2>"
                ]
            }},
            {{
                "type": "code",
                "language": "<Programming language>",
                "content": "<Code snippet>"
            }},
            {{
                "type": "table",
                "columns": ["<Column 1>", "<Column 2>"],
                "rows": [
                    ["<Row 1 Col 1>", "<Row 1 Col 2>"],
                    ["<Row 2 Col 1>", "<Row 2 Col 2>"]
                ]
            }},
            {{
                "type": "quote",
                "content": "<Quotation text>"
            }},
            {{
                "type": "note",
                "content": "<Additional context>",
                "highlight": <true/false>
            }}
        ]
    }}
]

### Important Guidelines:
- **DO NOT** include markdown fences (e.g., ```json or ```).
- **DO NOT** use triple quotes (`\"\"\"`) inside code blocks.
- **Escape all newlines (`\\n`) properly** in code blocks.
- Ensure the JSON is **directly parseable** without any modification.
- The output must be **valid JSON**.
"""




        llama_response = call_llama3(prompt, question_text)

        # Convert Llama's response to JSON
        try:
            formatted_answer = json.loads(llama_response)
        except json.JSONDecodeError:
            formatted_answer = [{"type": "text", "content": "Failed to parse answer."}]

        transformed_questions.append({
            "id": question_id,
            "question": question_text,
            "answer": formatted_answer
        })

    return transformed_questions


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
