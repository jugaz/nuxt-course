<template>
    <div class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden">
        <div class="fixed left-0 right-0 bg-gradient z-10"></div>
        <div class="max-w-520px text-center z-20">
            
            <h1 v-if="Object.keys(query).length > 0" class="text-8xl sm:text-10xl font-medium mb-8">Query {{ query}}</h1>
            <h1 v-else-if="hash != '' " class="text-8xl sm:text-10xl font-medium mb-8">Hash {{ hash}}</h1>
            <h1 v-else class="text-8xl sm:text-10xl font-medium mb-8">el contacto</h1>
            <div class="w-full flex items-center justify-center mt-5">
                <a href="/nuxt-course/" class="btn-demo text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">Go back home</a>
            </div>
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
const query = route.query
const hash = route.hash
console.log("query",query)
console.log("hash",hash)
</script>