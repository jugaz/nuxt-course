// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  buildDir: 'dist',
  css: ["@/assets/css/main.css"],
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
    },
    rootId: 'app',
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  imports: {
    dirs: ['./store'],
  },

  hooks: {
    'pages:extend'(pages) {
      // Array de objetos con información sobre las rutas y sus nuevos nombres
      const routesToChange = [
        { path: '/crud-firebase/agregar', newName: 'agregar' },
        // Agrega más objetos para cambiar más rutas
      ];

      // Función para cambiar el nombre de una ruta (adaptada a Nuxt 3)
      function changeRouteName(route: any, newName: any) {
        route.name = newName; // Asignación directa del nombre
        if (route.children) {
          route.children.forEach((childRoute: any) => { // Recorrido con forEach
            changeRouteName(childRoute, newName);
          });
        }
      }

      // Recorre el array de rutas a cambiar y modifica los nombres correspondientes
      routesToChange.forEach((routeInfo) => {
        const routeToChange = pages.find((page) => page.path === routeInfo.path);
        if (routeToChange) {
          changeRouteName(routeToChange, routeInfo.newName);
        }
      });
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});