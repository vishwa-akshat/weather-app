import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            components: "/src/components",
            containers: "/src/containers",
            pages: "/src/pages",
            assets: "/src/assets",
        },
    },
});
