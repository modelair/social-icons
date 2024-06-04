// import { viteSingleFile } from 'vite-plugin-singlefile'
// import alias from '@rollup/plugin-alias'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { resolve } from 'path'
import { defineConfig } from 'vite'
// import autoprefixer from 'autoprefixer'
// import fs from 'node:fs'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import $style from './src/style/modules'

export default defineConfig({
  css: {
    preprocessorOptions: {},

    modules: {
      exportGlobals: true,
      generateScopedName: '[hash:base64:5]',
    },

  },
  plugins: [
    vue(),

  ],

  server: {
    fs: {
      allow: [resolve(__dirname, '..')],
    },
  },
  build: {
    // cssCodeSplit: true,
    // cssCodeSplit: true,
    emptyOutDir: false,

    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'social-icons',
      fileName: (format) => `${format}.js`,
    },
    rollupOptions: {
      // external: ['vue'],
      output: {
        intro: '/**\n' +
          '* @decoroom/social-icons  v0.0.2\n' +
          '* (c) 2024 Dmitry Zotov\n' +
          '* @license MIT\n' +
          '**/',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
