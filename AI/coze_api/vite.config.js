import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/coze-api': {
                target: 'https://6fcdh9vz69.coze.site',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/coze-api/, '')
            }
        },
    },
})
