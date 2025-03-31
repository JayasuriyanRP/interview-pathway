# AI Code Converter API

This project provides a Flask-based API that leverages Llama 3 (via Ollama) to convert technical explanations into structured JSON responses. The API processes user questions and generates structured content blocks such as text, code, lists, tables, quotes, and more.

## 🚀 Setup Instructions

### 1. Install Python

Ensure you have Python 3.8+ installed.

Check your Python version:

```sh
python --version
```

If not installed, download it from [python.org](https://www.python.org/downloads/).

### 2. Create a Virtual Environment

Navigate to the project directory and create a virtual environment:

```sh
python -m venv venv
```

Activate the virtual environment:

- **Windows:** `venv\Scripts\activate`
- **Mac/Linux:** `source venv/bin/activate`

### 3. Install Dependencies

Run the following command to install the required dependencies:

```sh
pip install -r requirements.txt
```

### 4. Install and Run Ollama (Llama 3 API)

Ollama is required to run Llama 3 locally.

1. Download and install Ollama from [ollama.ai](https://ollama.ai/).
2. Pull the Llama 3 model:
   ```sh
   ollama pull llama3
   ```
3. Start the Ollama server:
   ```sh
   ollama serve
   ```

### 5. Run the Flask API

Start the API server with:

```sh
python code-converter-api.py
```

The API should now be running at `http://localhost:5000`.

## 🛠 API Endpoints

### 1. Ask Llama 3

- **Endpoint:** `POST /api/ask`
- **Request Body:**

```json
{
  "question": "What are microservices?"
}
```

- **Response:**

````json
{
  "question": "What are microservices?",
  "answer": "```markdown <Generated structured JSON>"
}
````

## 📌 About the Prompt

The API uses a carefully designed prompt to ensure structured JSON responses. The AI is instructed to convert explanations into a structured format using content blocks like:

- `text` (paragraphs)
- `code` (syntax-highlighted snippets)
- `list` (bulleted/numbered lists)
- `table` (structured data)
- `quote` (citations)
- `note` (additional context)

This approach helps maintain consistency and readability in generated responses.

## ❓ Troubleshooting

- If the API fails to communicate with Llama 3, ensure Ollama is running.
- If dependencies fail, try running:
  ```sh
  pip install --upgrade pip
  pip install -r requirements.txt
  ```
- Restart the server if necessary using `CTRL+C` and rerunning the Flask app.

## 🎯 Future Improvements

- Enhance response formatting.
- Add authentication for API endpoints.
- Expand support for more structured content types.

Happy coding! 🚀
