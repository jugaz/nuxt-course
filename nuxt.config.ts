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

  hooks: {
    'pages:extend'(pages) {
      //El redict por si no quieres crear un pagina de error
      // pages.push({
      //   path: '/:pathMatch(.*)*',
      //   redirect: '/'
      // })

      // Array de objetos con información sobre las rutas y sus nuevos nombres
      const routesToChange = [
        { path: '/crud-firebase/agregar', newName: 'agregar' },
        // Agrega más objetos para cambiar más rutas
      ];

      // Función para cambiar el nombre de una ruta
      function changeRouteName(route:any, newName:any) {
        if (route.name) {
          route.name = newName;
        }
        if (route.children) {
          for (const childRoute of route.children) {
            changeRouteName(childRoute, newName);
          }
        }
      }

      // Recorre el array de rutas a cambiar y modifica los nombres correspondientes
      for (const routeInfo of routesToChange) {
        const routeToChange = pages.find((page) => page.path === routeInfo.path);
        if (routeToChange) {
          changeRouteName(routeToChange, routeInfo.newName);
        }
      }
    },
  },
  
});