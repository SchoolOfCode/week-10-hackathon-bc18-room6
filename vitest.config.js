// vitest.config.ts
import { defineConfig } from "vitest/config";
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test functions like `describe`, `it`, `expect`
    environment: "jsdom", // Use jsdom to simulate a browser environment
    transformMode: {
      web: [/\.[jt]sx$/], // Ensure Vitest processes `.jsx` and `.tsx` files
    },
  },
});
