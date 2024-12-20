import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

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
    build: {
        outDir: 'public/build',
    },


    // server: {
    //     host: '0.0.0.0',
    //     port: 8000,
    //     https:true,
    // },

});
