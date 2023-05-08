<template>
  <div class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden">
      <div class="fixed left-0 right-0 bg-gradient z-10"></div>
      <div class="max-w-520px text-center z-20">
          <h1 class="text-black dark:text-white text-4xl sm:text-5xl font-semibold text-center">Parametros {{ params }}</h1>
          <h1 class="text-black dark:text-white text-4xl sm:text-5xl font-semibold text-center">Query {{ query}}</h1>
          <h1 class="text-black dark:text-white text-4xl sm:text-5xl font-semibold text-center">Hash {{ hash}}</h1>
          <div class="w-full flex items-center justify-center mt-5">
             <nuxt-link to="/" class="btn-demo text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer mr-2">Go back home</nuxt-link>
          </div>
      </div>
  </div>
</template>
<script setup>
const route = useRoute()
const params = route.params.id
const query = route.query
const hash = route.hash

// definePageMeta({
//   validate: async (item) => {
//     const hasId = Object.keys(item.params).includes('id')
//     const hasQuery = Object.keys(item.query).length > 0
//     const hasHash = item.hash !== ''

//     return (hasId && /^\d+$/.test(item.params.id)) || hasQuery || hasHash
//   }
// })

</script>

