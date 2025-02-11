import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, '.'); // Use '.' to load from the current directory

  return {
    base: env.VITE_BASE_URL || '/', // Use the environment variable or default to '/'
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      // Customize the output directory for assets
      rollupOptions: {
        output: {
          assetFileNames: 'image/[name][extname]',
        },
      },
    }

  };
});
