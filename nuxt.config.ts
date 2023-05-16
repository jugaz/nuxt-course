// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
export default defineNuxtConfig({

  app: {
    // baseURL:"",
    rootId:'nuxtCourse',
  },

  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs/'),
    },
  },
  

  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt'],
  
  imports: {
    dirs: ['./store'],
  },
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
  // pinia: {
  //   autoImports: ['defineStore', 'acceptHMRUpdate'],
  // },

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