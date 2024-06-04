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
      // getJSON(cssFileName, json, outputFileName) {
      //   console.log('ok', cssFileName, cssFileName.indexOf('/shared/'), cssFileName.indexOf('.module.'))
      //   if ((cssFileName.indexOf('/shared/') > -1) && (cssFileName.indexOf('.module.') > -1)) {
      //     console.log('LETSGFO ++__++__+_', outputFileName)
      //   }
      // },
      exportGlobals: true,
      generateScopedName: '[hash:base64:5]',
    },
    postcss: {
      // plugins: [autoprefixer({})],
    },
  },
  plugins: [
    libInjectCss(),
    // VueTypeImports(),
    // dts({
    //     insertTypesEntry: true,
    //     cleanVueFileName: true,
    //     staticImport: false
    // }),
    // vueJsx(),
    vue({
      style: {
        // trim:true

      },
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            // return tag.startsWith('ref') // (return true)
          },
        },
      },
    }),
    // viteSingleFile(),
    // alias({
    //   entries: [
    //     {
    //       find: '@randevo/icons',
    //       replacement: resolve(__dirname, '../icons/src'),
    //     },
    //     {
    //       find: '@randevo/core/hooks',
    //       replacement: resolve(__dirname, 'src/hooks'),
    //     },
    //     {
    //       find: '@randevo/core/util',
    //       replacement: resolve(__dirname, 'src/util'),
    //     },
    //     {
    //       find: '@randevo/core',
    //       replacement: resolve(__dirname, 'src'),
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      // '@randevo/core': resolve(__dirname, './src'),
      // '@randevo/icons': resolve(__dirname, '../icons/src'),
      // '@randevo/core/scss': resolve(__dirname, './src/style'),
    },
  },
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
          '* (c) 2024 Dmitry Zotovs\n' +
          '* @license MIT\n' +
          '**/',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
