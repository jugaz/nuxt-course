// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
export default defineNuxtConfig({
    ssr: true,
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

    // hooks: {
    //     //: Por si no existe la ruta
    //     'pages:extend' (routes) {
    //         routes.push({
    //             path: '/:pathMatch(.*)*',
    //             redirect: '/'
    //           })
    //     }
    // }
})
