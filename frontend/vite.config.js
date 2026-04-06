import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // Tailwind v3 needs PostCSS; Vite 8's default LightningCSS does not understand @tailwind / @apply.
  css: {
    transformer: 'postcss',
  },
  plugins: [
    react({
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: ['.preview.emergentagent.com', '.emergentagent.com', '.cluster-3.preview.emergentcf.cloud'],
    // Emergent cloud preview only: set VITE_EMERGENT_HMR=1 if you need WSS on 443 behind their proxy.
    ...(process.env.VITE_EMERGENT_HMR === '1'
      ? { hmr: { clientPort: 443, protocol: 'wss' } }
      : {}),
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
