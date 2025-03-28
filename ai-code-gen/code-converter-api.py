import json
import uuid
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

prompt = f"""
        You are an AI that converts technical explanations into structured JSON format. 
        Your task is to transform the following question and answer into a structured JSON response using these content block types:

        1. **text** - Regular paragraph text
        2. **code** - Code blocks with syntax highlighting
        3. **list** - Bulleted or numbered lists
        4. **table** - Data presented in a structured tabular format
        5. **image** - Image URLs with optional captions
        6. **quote** - Quotations or citations
        7. **note** - Additional information, which may be highlighted for emphasis

        ### **Example JSON Output Format**
        ```json
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

```json
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
]"""



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
