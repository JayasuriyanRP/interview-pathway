# Questions Directory

This directory contains separate JSON files for each learning path and subpath.

## File Structure

- Each file should be named after the path or subpath ID: `[path-id].json`
- **Each file should contain an array of question objects**

## JSON Structure

Each file should be structured as an **array** of questions:

```json
[
  {
    "id": "unique-question-id",
    "question": "The question text?",
    "answer": [
      {
        "type": "text",
        "content": "Text content here"
      },
      {
        "type": "code",
        "language": "javascript",
        "content": "// Code content here"
      }
      // More content blocks...
    ]
  }
]
```

## Available Content Block Types

1. `text` - Regular paragraph text
2. `code` - Code blocks with syntax highlighting
3. `list` - Bulleted lists
4. `table` - Structured data in table format
5. `image` - Images with optional captions
6. `quote` - Quotations or citations
7. `note` - Additional information or context (can be highlighted)

See `example-path.json` for a complete example of all content block types.

# Questions Data

This folder contains JSON files for interview questions categorized by topics and frameworks.

## Scripts for Validation

### 1. Validate Questions Script

**File:** `src/scripts/validate_questions.js`

**Purpose:**

- Checks all paths and subpaths in `paths.json` to ensure they have corresponding question files in the `questions` folder.
- Removes paths and subpaths without corresponding question files.

**Usage:**

```bash
node src/scripts/validate_questions.js
```

### 2. Find Unlinked Questions Script

**File:** `src/scripts/find_unlinked_questions.js`

**Purpose:**

- Identifies question files in the `questions` folder that are not linked to any path or subpath in `paths.json`.

**Usage:**

```bash
node src/scripts/find_unlinked_questions.js
```

## Notes

- Ensure `paths.json` and the `questions` folder are up-to-date before running the scripts.
- Run these scripts to maintain consistency between paths and question files.
