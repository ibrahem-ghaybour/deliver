import { defineConfig } from "vite";

// Dynamically determine base path for GitHub Pages
// - For repository pages: "/<repo-name>/"
// - For local dev or custom domain: "/"
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

export default defineConfig({
  base: isGitHubActions && repoName ? `/${repoName}/` : "/",

  // Optional quality-of-life settings
  server: {
    open: true,
    port: 5173,
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    target: "es2018",
  },
});
