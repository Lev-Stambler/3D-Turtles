import { defineConfig } from "vite";
import resolve from "rollup-plugin-node-resolve";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import babel from "@rollup/plugin-babel";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
    },
  },
  plugins: [svelte()],
});
