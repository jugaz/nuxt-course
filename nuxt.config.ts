// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
    },
    rootId: 'app',
  },



  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt'],

  imports: {
    dirs: ['./store'],
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
      function changeRouteName(route: any, newName: any) {
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