import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

const apiUrl = process.env.VITE_API_URL || 'http://localhost:8000';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/css/app.css',
                'resources/css/funciones.css',
                'resources/css/SesionPomodoro.css'
            ],
            refresh: true,
        }),
        react(),
    ],
    server: {
        proxy: {
            '/img': apiUrl  // Asegúrate de redirigir /img a Laravel
        },
    },
    build: {
        outDir: 'public/build',
    },
    // server: {
    //     host: '0.0.0.0',
    //     port: 8000,
    //     https:true,
    // },

});
