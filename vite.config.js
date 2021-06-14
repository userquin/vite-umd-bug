import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "ViteUmdBug"
    },
    rollupOptions: {
      external: ["vue"],
      output: [{
        format: "esm",
        esModule: true,
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }, {
        format: "umd",
        inlineDynamicImports: true,
        interop: "esModule",
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }],

    }
  },
  plugins: [vue()]
})
