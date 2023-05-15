// https://nuxt.com/docs/api/configuration/nuxt-config

const path = require("path");

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: "/nuxt-course/",
    buildAssetsDir: '',
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs'),
    },
  }, 
  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt'],
  eslint: {
    root: true,
    env: {
      browser: true,
      node: true,
      commonjs: true,
      es2022: true,
    },
    extends: ["prettier", "eslint:recommended", "plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'linebreak-style': ['error', 'windows'],
      'no-console': 'warn',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/match-component-file-name': [
        'error',
        {
          extensions: ['js', 'vue'],
          shouldMatchCase: false,
        },
      ],
      'vue/no-multiple-template-root': 'off'
    }
  },
  experimental: {
    payloadExtraction: true
  },
  imports: {
    dirs: ['./store'],
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  //El redict por si no quieres crear un pagina de error
  // hooks: {
  //   'pages:extend' (routes:any) {
  //     routes.push({
  //         path: '/:pathMatch(.*)*',
  //         redirect: '/'

  //       })
  //   }
  // }
  
});
