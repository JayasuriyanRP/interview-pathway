import os
import re
import json
import uuid
import requests
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

app = Flask(__name__)


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
    # payload = {"model": "llama3", "prompt": full_prompt, "stream": False}
    payload = {
        "model": "llama3",
        "prompt": full_prompt,
        "stream": False,
        "max_tokens": 4096,
        "temperature": 0.2,
        "top_p": 0.9
    }

    try:
        response = requests.post(OLLAMA_API_URL, json=payload, timeout=300)
        response.raise_for_status()
        return response.json().get("response", "").strip()
    except requests.exceptions.RequestException as e:
        print(f"❌ Error: {e}")
        return "Error communicating with Llama 3"

def extract_json_content(text):
    """
    Extracts and returns the content inside the ```json ... ``` tag from the input text.
    Returns None if no such tag is found.
    """
    pattern = r'```json\s*(.*?)\s*```'
    match = re.search(pattern, text, re.DOTALL)
    if match:
        return match.group(1).strip()
    return text

def remove_markdown_tags(text):
    """
    Extracts and returns the content inside the markdown block delimiters (```markdown and ```)
    and removes the delimiters. If no markdown block is found, returns the original text.
    """
    # Regex to match content inside a markdown block delimited by ```markdown and ```
    pattern = r'```markdown\s*(.*?)\s*```'
    match = re.search(pattern, text, re.DOTALL)
    if match:
        return match.group(1).strip()
    return text

@app.route("/api/generate", methods=["POST"])
def generate_from_file():
    try:
        with open("generate-prompt.txt", "r", encoding="utf-8") as file:
            prompt = file.read()

        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400
        
        file = request.files['file']
        data = json.load(file)

        # Ensure file format is correct
        if "questions" not in data or not isinstance(data["questions"], list):
            return jsonify({"error": "Invalid file format: Missing 'questions' key or incorrect structure"}), 400

        results = []
        for q in data["questions"]:
            question  = q.get("question", "").strip()
            trimmed_answer_text  = q.get("answer", "").strip()
            trimmed_answer_text  = remove_markdown_tags(trimmed_answer_text)
            if not trimmed_answer_text:
                continue

            print(f"Processing: {question}")
            
            response_text = call_llama3(prompt, trimmed_answer_text)
            
            response_text = extract_json_content(response_text)
            print(response_text)
            try:
                response_data = json.loads(response_text)  # Ensure response is parsed JSON
            except json.JSONDecodeError as e:
                print(f"❌ JSON Decode Error: {e}")
                return jsonify({"error": "Invalid JSON response from AI"}), 500

            # Ensure response is in expected format
            if not isinstance(response_data, dict) or "question" not in response_data or "answer" not in response_data:
                return jsonify({"error": "AI response format is incorrect"}), 500
            
            formatted_question = {
                "id": response_data.get("id", str(uuid.uuid4())),
                "question": question,
                "answer": response_data.get("answer", [])
            }
            
            results.append(formatted_question)

        # Save results to file
        output_filename = f"processed_questions_{uuid.uuid4()}.json"
        output_path = os.path.join("./", output_filename)
        with open(output_path, "w") as outfile:
            json.dump(results, outfile, indent=4)

        return send_file(output_path, as_attachment=True, download_name=output_filename), 200

    except Exception as e:
        print(f"❌ Error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route("/api/ask", methods=["POST"])
def ask_llama3():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400
        
        file = request.files['file']
        questions = json.load(file)
        results = []
        
        for q in questions:
            trimmed_answer_text = q.get("question", "").strip()
            if not trimmed_answer_text:
                continue
            
            response_text = call_llama3(prompt, trimmed_answer_text)
            response_data = json.loads(response_text)  # Ensure the API response is valid JSON
            
            formatted_questions = []
            for item in response_data:
                formatted_questions.append({
                    "id": str(uuid.uuid4()),
                    "question": item.get("question", ""),
                    "answer": item.get("answer", [])
                })
            
            results.extend(formatted_questions)
        
        return jsonify(results), 200
    except Exception as e:
        print(f"❌ Error: {e}")
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
