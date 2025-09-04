import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathsFilePath = path.join(__dirname, "../data/paths/paths.json");
const questionsFolderPath = path.join(__dirname, "../data/questions");

// Load paths.json
const pathsData = JSON.parse(fs.readFileSync(pathsFilePath, "utf-8"));

// Function to recursively traverse paths and subpaths
const findLeafNodes = (paths) => {
  const leafNodes = [];

  const traverse = (node) => {
    if (!node.subpaths || node.subpaths.length === 0) {
      leafNodes.push(node.id);
    } else {
      node.subpaths.forEach((subpath) => traverse(subpath));
    }
  };

  paths.forEach((path) => traverse(path));
  return leafNodes;
};

// Get all leaf nodes
const leafNodes = findLeafNodes(pathsData);

// Check if corresponding question files exist
const missingQuestions = [];
leafNodes.forEach((id) => {
  const folders = fs.readdirSync(questionsFolderPath);
  let found = false;

  for (const folder of folders) {
    const questionFilePath = path.join(
      questionsFolderPath,
      folder,
      `${id}.json`
    );
    if (fs.existsSync(questionFilePath)) {
      found = true;
      break;
    }
  }

  if (!found) {
    missingQuestions.push(id);
  }
});

// Output results
if (missingQuestions.length > 0) {
  console.log(
    "The following paths/subpaths do not have corresponding question files:"
  );
  console.log(missingQuestions);
} else {
  console.log("All paths/subpaths have corresponding question files.");
}

// Remove paths/subpaths without corresponding question files
const updatedPaths = pathsData.filter((path) => {
  const traverseAndFilter = (node) => {
    if (!node.subpaths || node.subpaths.length === 0) {
      return !missingQuestions.includes(node.id);
    }
    node.subpaths = node.subpaths.filter(traverseAndFilter);
    return node.subpaths.length > 0 || !missingQuestions.includes(node.id);
  };
  return traverseAndFilter(path);
});

// Save the updated paths.json
fs.writeFileSync(pathsFilePath, JSON.stringify(updatedPaths, null, 2), "utf-8");

console.log("Updated paths.json to remove paths/subpaths without questions.");
