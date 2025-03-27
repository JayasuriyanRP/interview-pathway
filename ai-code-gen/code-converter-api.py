import json
import uuid
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

OLLAMA_API_URL = "http://localhost:11434/api/generate"  # Ollama 3 API endpoint

def call_llama3(prompt):
    """
    Sends a structured formatting request to the locally running Llama 3 model via Ollama API.
    """
    payload = {"model": "llama3", "prompt": prompt, "stream": False}
    response = requests.post(OLLAMA_API_URL, json=payload)

    if response.status_code == 200:
        return response.json().get("response", "").strip()
    else:
        print(f"❌ Error: Failed to get response from Llama 3: {response.text}")
        return ""

def process_questions(data):
    """
    Converts raw questions and answers into structured content blocks.
    """
    transformed_questions = []

    for question_obj in data.get("questions", []):
        question_id = question_obj.get("id", str(uuid.uuid4()))
        question_text = question_obj.get("question", "No question provided")
        raw_answer = question_obj.get("answer", "").strip("```markdown\n").strip("```")

        # Generate structured JSON using Llama 3
        prompt = f"""
        Convert the following question and answer into structured JSON using these content block types:

        1. **text** - Regular paragraph text
        2. **code** - Code blocks with syntax highlighting
        3. **list** - Bulleted lists
        4. **table** - Structured data in table format
        5. **image** - Images with optional captions
        6. **quote** - Quotations or citations
        7. **note** - Additional information or context (can be highlighted)

        Ensure the JSON output follows this structure:

        [
        {{
            "id": "<unique-question-id>",
            "question": "Question",
            "answer": [
            {{
                "type": "text",
                "content": "<paragraph content>"
            }},
            {{
                "type": "code",
                "language": "<language>",
                "content": "<code snippet>"
            }},
            {{
                "type": "list",
                "items": [
                "<list item 1>",
                "<list item 2>"
                ]
            }},
            {{
                "type": "table",
                "columns": ["<column 1>", "<column 2>"],
                "rows": [
                ["<row 1 col 1>", "<row 1 col 2>"],
                ["<row 2 col 1>", "<row 2 col 2>"]
                ]
            }},
            {{
                "type": "image",
                "imageUrl": "<image URL>",
                "alt": "<image description>",
                "content": "<caption>"
            }},
            {{
                "type": "quote",
                "content": "<quote content>"
            }},
            {{
                "type": "note",
                "content": "<note content>",
                "highlight": <true/false>
            }}
            ]
        }}
        ]

        Only output valid JSON. Do not include explanations.
        """
    
        llama_response = call_llama3(prompt)

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

@app.route("/format", methods=["POST"])
def format_questions():
    """
    API endpoint to format questions and answers into structured content blocks.
    """
    try:
        data = request.get_json()
        formatted_data = process_questions(data)
        return jsonify(formatted_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
