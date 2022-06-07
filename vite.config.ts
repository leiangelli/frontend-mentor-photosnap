import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'

import babel from 'vite-plugin-babel'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    babel({
      babelConfig: {
        plugins: [
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-proposal-optional-chaining',
          [
            '@vue/babel-plugin-jsx',
            {
              optimize: false,
              enableObjectSlots: false
            }
          ]
        ]
      }
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      polyfills: []
    }),
    checker({
      vueTsc: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
