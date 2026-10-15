import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {fileURLToPath, URL} from 'node:url';
export default defineConfig({plugins:[react(),tailwindcss()],resolve:{alias:{'@':fileURLToPath(new URL('./src',import.meta.url)),'@workspace/api-client-react':fileURLToPath(new URL('./src/lib/api-client/index.ts',import.meta.url))}},ssr:{noExternal:[/^@workspace\//]},build:{outDir:'dist/public',emptyOutDir:true},server:{host:'0.0.0.0'}});
