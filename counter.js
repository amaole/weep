import { defineConfig } from 'vite'
import path, { join } from 'path'

export default defineConfig({
  //公共项
  publicDir: 'public',

base:'/weep',

  define: {
    __APP_VERSION__: JSON.stringify('v1.0.0'),
  },
  build: {
    // 出口目录
    outDir: 'dist',

    // 打包配置
    rollupOptions: {
      // 配置入口文件
      input: {
        index: join(__dirname, './index.html'),
        search: join(__dirname, './search.html'),
        detail: join(__dirname, './detail.html')
      },
      output: {
        chunkFileNames: 'js/[name]-[hash:8].js',
        entryFileNames: 'js/[name]-[hash:8].js',
        assetFileNames: chunkInfo => {
          const imageReg = /(png|gif|jpeg|svg|webp)$/
          const [, ext] = path.basename(chunkInfo.name).split('.')
          if (ext === 'css') {
            return `css/[name]-[hash:8].${ext}`
          } else if (imageReg.test(ext)) {
            return `images/[name]-[hash:8].${ext}`
          }
          return 'assets/[name]-[hash:8].[ext]'
        }
      }
    },
  },

  // 配置开发服务器
  server: {
    port: 8000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }

    }
  }


})


