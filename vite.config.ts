import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Rollup plugin to minify JSON files
      plugins: [
        {
          name: "minify-json",
          transform(code, id) {
            if (id.endsWith(".json")) {
              // Minify JSON by removing spaces and newlines
              return JSON.stringify(JSON.parse(code));
            }
          },
        },
      ],
    },
  },
}));
