import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src') // src 폴더의 절대 경로를 사용합니다.
        }
    },
    optimizeDeps: {
        exclude: ['vue-demi']
    },
    server: {
        proxy: {
            '/api': 'localhost:8052/'
        }
    }
});
