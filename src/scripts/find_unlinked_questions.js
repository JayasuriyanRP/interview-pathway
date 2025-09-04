import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathsFilePath = path.join(__dirname, "../data/paths/paths.json");
const questionsFolderPath = path.join(__dirname, "../data/questions");

// Load paths.json
const pathsData = JSON.parse(fs.readFileSync(pathsFilePath, "utf-8"));

// Function to recursively collect all linked question IDs
const collectLinkedQuestionIds = (paths) => {
  const linkedIds = new Set();

  const traverse = (node) => {
    linkedIds.add(node.id);
    if (node.subpaths) {
      node.subpaths.forEach((subpath) => traverse(subpath));
    }
  };

  paths.forEach((path) => traverse(path));
  return linkedIds;
};

// Get all linked question IDs
const linkedQuestionIds = collectLinkedQuestionIds(pathsData);

// Get all question files in the questions folder
const allQuestionFiles = [];
const folders = fs.readdirSync(questionsFolderPath);
folders.forEach((folder) => {
  const folderPath = path.join(questionsFolderPath, folder);
  if (fs.statSync(folderPath).isDirectory()) {
    const files = fs.readdirSync(folderPath);
    files.forEach((file) => {
      if (file.endsWith(".json")) {
        allQuestionFiles.push({
          id: path.basename(file, ".json"),
          filePath: path.join(folderPath, file),
        });
      }
    });
  }
});

// Identify unlinked question files
const unlinkedFiles = allQuestionFiles.filter(
  (file) => !linkedQuestionIds.has(file.id)
);

// Output results
if (unlinkedFiles.length > 0) {
  console.log(
    "The following question files are not linked to any path or subpath:"
  );
  unlinkedFiles.forEach((file) => console.log(file.filePath));
} else {
  console.log("All question files are linked to paths or subpaths.");
}
