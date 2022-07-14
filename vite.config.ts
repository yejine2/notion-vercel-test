import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '~', replacement: `${__dirname}/src` }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:color";
          @use "sass:list";
          @use "sass:map";
          @use "sass:math";
          @use "sass:meta";
          @use "sass:selector";
          @use "sass:string";
          @import "~/scss/variables";
        `
      }      
    }
  },
  server: {
    port: 3000,
    // 2999번 포트를 마치 호스팅 3000번으로 사용하는 것임 
    proxy: {
      '/api': { target: 'http://localhost:2999' }
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
