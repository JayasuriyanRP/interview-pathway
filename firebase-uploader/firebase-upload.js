import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import serviceAccount from "./firebase-service-account.json" assert { type: "json" };
import { fileURLToPath } from "url";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
console.log(db);

const collections = await db.listCollections();
console.log("Collections in Firestore:", collections);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, "../src/data");

// Function to read JSON files
const readJsonFile = (filePath) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return null;
  }
};

// Upload paths.json to Firestore
const uploadPaths = async () => {
  const pathsFile = path.join(dataDir, "paths", "paths.json");
  const pathsData = readJsonFile(pathsFile);

  if (!pathsData) return;

  const pathsCollection = db.collection("paths");

  for (const pathObj of pathsData) {
    await pathsCollection.doc(pathObj.id).set(pathObj);
    console.log(`Uploaded path: ${pathObj.id}`);
  }
};

// Recursively upload questions
const uploadQuestions = async (dir, parentPath = "") => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await uploadQuestions(fullPath, `${parentPath}/${file}`);
    } else if (file.endsWith(".json")) {
      const questionData = readJsonFile(fullPath);
      if (!questionData) continue;

      const fileName = path.basename(file, ".json");
      const collectionRef = db
        .collection("questions")
        .doc(fileName)
        .collection("list");

      for (const [index, question] of questionData.entries()) {
        await collectionRef.doc(`q${index + 1}`).set(question);
      }

      console.log(`Uploaded questions for: ${fileName}`);
    }
  }
};

// Main function
const main = async () => {
  const collections = await db.listCollections();
  console.log(
    "Collections in Firestore:",
    collections.map((col) => col.id)
  );

  console.log("Firestore Project ID:", admin.firestore().projectId);

  console.log("Uploading paths...");
  await uploadPaths();

  console.log("Uploading questions...");
  await uploadQuestions(path.join(dataDir, "questions"));

  console.log("✅ Upload complete!");
};

main().catch(console.error);
