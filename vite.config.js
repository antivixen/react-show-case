import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
  esbuild: {
    loader: "tsx",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/show.tsx"),
      name: "Show",
      formats: ["es", "umd"],
      fileName: (format) => `show.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      include: ["src/lib/show.tsx"],
    }),
  ],
});
