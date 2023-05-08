// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
export default defineNuxtConfig({
    app: {
        baseURL: "/nuxt-course/",
    },
    nitro: {
        output: {
            publicDir: path.join(__dirname, 'docs/')
        }
    },
     modules: [
        '@nuxtjs/tailwindcss'
    ],
    router: {
    // Usar `_` en lugar de `[]` para rutas dinámicas
        extendRoutes(routes, resolve) {
            for (const route of routes) {
                route.path = route.path.replace(/\[(\w+)\]/g, '_$1');
            }
        }
    }
})
