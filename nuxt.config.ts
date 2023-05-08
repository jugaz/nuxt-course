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
})
