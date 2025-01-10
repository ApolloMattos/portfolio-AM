import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Makes the server accessible on all network interfaces
    port: 300,       // You can change this to any port you want
    open: true,       // Automatically open the browser
  },

})
