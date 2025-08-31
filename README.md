# Interview Pathway: Technical Interview Preparation Platform

## Problem Statement & Motivation

Preparing for technical interviews across multiple tech stacks can be overwhelming, especially when trying to track progress and cover topics from Beginner to Advanced levels. As someone with experience in many technologies, I found it challenging to organize my preparation and monitor my learning journey.

This inspired me to build Interview Pathway—a platform for anyone facing similar struggles. I started by drafting my idea as a prompt in lovable.dev, which provided a solid foundation for the project structure. While preparing for interviews, I developed this app in parallel, and it helped me crack interviews more effectively. Now, I’m excited to share this tool with the community, hoping it helps others as much as it helped me.

I’ve enjoyed seeing the app improve with every small enhancement, including:

- Dark/Light mode
- Progress tracking with Firebase
- Path, Subpath, Nested path structure
- Grouping technology-wise paths
- Beginner, Intermediate, and Advanced topic organization
- AI-powered code conversion and Q&A - [Beta with Local LLM]
- Interactive quizzes and assessments (planned)
- Daily streaks and reminders (planned)
- Leaderboards and community features (planned)

## Project Overview

Interview Pathway is a modern web application designed to help users prepare for technical interviews. It provides structured learning paths, nested subpaths, and categorized questions/answers for a wide range of technologies (e.g., Frontend, Angular, HTML, CSS, and more).

### Key Features

- **Learning Paths**: Organized interview topics with nested subpaths for granular study.
- **Progress Tracking**: Track your completion status for paths and questions, with data synced locally and to Firebase.
- **Question & Answer Bank**: Curated questions and answers for each topic, including code samples and explanations.
- **AI Tools**: Includes code conversion and AI-powered Q&A features (see `ai-code-gen/`).
- **User Authentication**: Sign in with Google via Firebase for personalized progress and data sync.
- **Rich UI**: Built with React, TypeScript, Tailwind CSS, and shadcn-ui for a beautiful, responsive experience.

## Open Source

This project is open source! Feel free to fork, modify, and contribute. See the LICENSE file for details.

## Getting Started

To run the project locally:

```sh
git clone <YOUR_GIT_URL>
cd interview-pathway
npm install
npm run dev
```

You can also edit files directly in GitHub or use GitHub Codespaces for cloud-based development.

## Onboarding New Paths, Subpaths, Questions, and Answers

You can easily extend the platform by adding new learning paths, subpaths, questions, and answers. Answers are rendered using Markdown for rich formatting. This makes it simple to contribute new content and keep the app up to date.

> **Tip:** Always validate your JSON files to avoid syntax errors. You can use online tools like [jsonlint.com](https://jsonlint.com/) for validation.

### Adding a New Path

1. Go to `src/data/paths/paths.json`.
2. Add a new object to the array with the following structure:
   ```json
   {
      "id": "unique-path-id",
      "title": "Path Title",
      "description": "Description of the path.",
      "icon": "IconName",
      "level": "Beginner|Intermediate|Advanced",
      "subpaths": [ ... ] // Optional
   }
   ```
   See sample: [`src/data/paths/paths.json`](src/data/paths/paths.json)

### Adding a Subpath

1. Within a path object, add a `subpaths` array.
2. Each subpath should have:
   ```json
   {
     "id": "unique-subpath-id",
     "title": "Subpath Title",
     "description": "Description of the subpath.",
     "level": "Beginner|Intermediate|Advanced"
   }
   ```
   See sample: [`src/data/paths/paths.json`](src/data/paths/paths.json)

### Adding Questions and Answers

1. Go to the relevant folder in `src/data/questions/` (e.g., `src/data/questions/angular/`).
2. Add or edit a JSON file for your topic (e.g., `angular-cheatsheet.json`).
3. Each question should have:
   ```json
   {
     "id": "unique-question-id",
     "question": "Your interview question here.",
     "answer": "Your answer here in Markdown format.",
     "level": "Beginner|Intermediate|Advanced"
   }
   ```
   See sample: [`src/data/questions/angular/angular-cheatsheet.json`](src/data/questions/angular/angular-cheatsheet.json)

#### Markdown for Answers

- Answers support Markdown for formatting code, lists, tables, images, quotes, etc.
- Example:

  ```markdown
  ## How does React work?

  React uses a virtual DOM to efficiently update the UI...
  ```

After editing or adding new content, simply restart the development server to see your changes reflected in the app.

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Firebase (Authentication & Realtime Database)

## Deployment

You can deploy the app using Vercel, Netlify, or your preferred static hosting provider. For Firebase integration, ensure your Firebase config is set up in the app (see the FirebaseConfigModal component).

## Setting Up Firebase for Progress Sync

To enable progress syncing across devices, you need to set up your own Firebase project. No backend is required—your progress is stored securely in Firebase Realtime Database and linked to your Google account.

### Steps to Set Up Firebase

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. **Enable Realtime Database**
   - In your Firebase project, navigate to "Build" > "Realtime Database" and create a database (start in test mode for development).
3. **Get Your Firebase Credentials**
   - Go to "Project Settings" > "General" > "Your apps" and add a new Web app if you haven't already.
   - Copy the following values from your Firebase config:
     - `apiKey`
     - `projectId`
     - `databaseURL`
4. **Add Credentials in the App**
   - Open the app and click the Firebase configuration button (usually in the header or settings).
   - Enter your `apiKey`, `projectId`, and `databaseURL` in the modal and save.
   - Your progress will now sync across devices when you sign in with Google.

**Note:** Credentials are stored locally in your browser and used only for progress syncing. No other user data is stored or shared.

For more details, see the `FirebaseConfigModal` component in the codebase.

## Custom Domains

You can use custom domains with Netlify or Vercel. See their documentation for details.

## Folder Structure

- `src/` — Main React app source code
- `src/data/paths/` — Learning paths definitions (JSON)
- `src/data/questions/` — Interview questions and answers (JSON)
- `ai-code-gen/` — AI-powered code conversion and Q&A scripts
- `firebase-uploader/` — Scripts for uploading data to Firebase Firestore

## Future Features & Ideas

Here are some features and improvements that could make Interview Pathway even better:

- **Custom Domain Hosting**: Allow users to host their learning portal on their own domain with easy setup.
- **Centralized Backend for Progress**: Provide a managed backend so users don't need to set up Firebase individually; enable seamless progress sync and user management.
- **Daily Streaks & Reminders**: Motivate users with streak tracking, daily goals, and notifications to encourage consistent learning.
- **Quizzes & Assessments**: Add quizzes between topics or at the end of a learning path to reinforce knowledge and measure progress.
- **Leaderboard & Community Features**: Foster engagement with leaderboards, achievements, and community Q&A or discussion boards.
- **Mobile App**: Build a mobile version for on-the-go learning and notifications.
- **Personalized Recommendations**: Suggest paths, questions, or topics based on user progress and interests.
- **Rich Analytics Dashboard**: Visualize progress, strengths, and areas for improvement.
- **Multi-language Support**: Make the platform accessible to a global audience by supporting multiple languages.
- **Interview Simulator**: Simulate real interview scenarios with timed questions and feedback.
- **Bookmarking & Notes**: Allow users to bookmark questions and add personal notes for revision.

Contributions and suggestions for new features are always welcome!

## Contributing

Pull requests and suggestions are welcome! Please open an issue for major changes.
