// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
export default defineNuxtConfig({
    app: {
        baseURL: "/nuxt-course/",
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },
    nitro: {
        output: {
            publicDir: path.join(__dirname, 'docs/')
        }
    },
     modules: [
        '@nuxtjs/tailwindcss'
    ],
    ssr: true,
})
