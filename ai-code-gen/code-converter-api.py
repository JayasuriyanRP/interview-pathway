import json
import uuid
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from cachetools import TTLCache

app = Flask(__name__)

# Allow all origins (for testing). Restrict this in production.
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

# Ollama 3 API endpoint
OLLAMA_API_URL = "http://localhost:11434/api/generate"

# Cache to store previous answers for frequently asked questions
cache = TTLCache(maxsize=100, ttl=300)  # Cache for 5 minutes

def call_llama3(prompt, question):
    """
    Sends a request to the locally running Llama 3 model via Ollama API,
    using both a prompt and a user question.
    """
    full_prompt = f"""
    You are a highly skilled assistant capable of answering questions accurately based on the provided context. 
    Here is the information you can use:

    {prompt}

    Please provide the most accurate and relevant answer based on the context above. If the question is unclear or not directly related to the context, kindly respond with "Not enough information".

    ### Question:
    {question}
    """

    print(full_prompt)

    payload = {
        "model": "llama3", 
        "prompt": full_prompt, 
        "stream": False,
        "temperature": 0.2,  # Lower temperature for more deterministic results
        "max_tokens": 512,   # Limit response length to improve accuracy
        "top_p": 0.9         # Controls diversity of the response
    }

    try:
        response = requests.post(OLLAMA_API_URL, json=payload, timeout=30)
        response.raise_for_status()
        answer = response.json().get("response", "").strip()
        if not answer:
            return "Not enough information to answer this question."
        return answer
    except requests.exceptions.Timeout:
        print(f"❌ Timeout error: The request took too long.")
        return "Error: The request timed out."
    except requests.exceptions.RequestException as e:
        print(f"❌ Error: {e}")
        return "Error communicating with Llama 3"

def refine_question(question):
    """Refine the user input question to make it more consistent and clear."""
    return question.strip().capitalize()

def get_cached_answer(question):
    """Check the cache for a previously answered question."""
    return cache.get(question)

def cache_answer(question, answer):
    """Cache the answer for future use."""
    cache[question] = answer

@app.route("/api/ask", methods=["POST"])
def ask_llama3():
    try:
        data = request.get_json()
        question = data.get("question", "").strip()

        # print(f"📩 Received question: {question}")  # Log request

        if not question:
            return jsonify({"error": "Question is required"}), 400

        # Check if the answer is already cached
        cached_answer = get_cached_answer(question)
        if cached_answer:
            # print(f"📤 Returning cached answer")  # Log cache hit
            return jsonify({"question": question, "answer": cached_answer}), 200

        # Read the prompt from the file
        with open('important-prompt-v2.txt', 'r') as file:
            prompt = file.read()

        # Refine and process the user question
        refined_question = refine_question(question)

        # Call the model to get the answer
        response_text = call_llama3(prompt, refined_question)

        # Cache the response for future use
        cache_answer(refined_question, response_text)

        print(f"📤 Llama3 Response Sent")  # Log response

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
