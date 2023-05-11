<template>


    <NuxtLayout  name="default" :titleDefault="Object.keys(route.query).length > 0 ? `Query` : route.hash !== '' ? `Hash` : 'El contacto'"/>
    <div class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden">
    <div class="fixed left-0 right-0 bg-gradient z-10"></div>
    <div class="max-w-520px text-center z-20">
      <p class="text-8xl sm:text-10xl font-medium mb-8">
        {{ Object.keys(route.query).length > 0 ? `Query ${JSON.stringify(route.query)}` : route.hash !== '' ? `Hash ${route.hash}` : 'El contacto' }}
      </p>
    </div>

  </div>

</template>

<script setup>
  const route = useRoute();
</script>
  