import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/700.css"; // Bold

// Use createRoot API from React 18
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
