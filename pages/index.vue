<template>
    <div class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden">
        <div class="fixed left-0 right-0 bg-gradient z-10"></div>
        <div class="max-w-520px text-center z-20">
            <h1 class="text-8xl sm:text-10xl font-medium mb-8">Home</h1>
            <div class="w-full flex items-center justify-center">
                <nuxt-link to="contactos" class="btn-demo text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer mr-2">Contactos</nuxt-link>
                <nuxt-link to="contactos/123" class="btn-demo text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer mr-2">Parametros</nuxt-link>
                <nuxt-link to="contactos?v=123" class="btn-demo text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer mr-2">Query</nuxt-link>
                <nuxt-link to="contactos#123" class="btn-demo text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer mr-2">Hash</nuxt-link>
            </div>
        </div>
    </div>
</template>
