<template>
  <div>
    <NuxtLayout name="default" title-default="Parametros" />
    <div
      class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"
    >
      <div class="fixed left-0 right-0 bg-gradient z-10"></div>
      <div class="max-w-520px text-center z-20">
        <h1 class="text-8xl sm:text-10xl font-medium mb-8">Parametros {{ params }}</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
  const route = useRoute();
  const params = route.params.slug;

  definePageMeta({
    validate: async (item) => {
      const hasId = Object.keys(item.params).includes("slug");
      const hasQuery = Object.keys(item.query).length > 0;
      const hasHash = item.hash != "";

      return (hasId && /^[\d\s]+$/.test(item.params.slug)) || hasQuery || hasHash;
    },
  });
</script>
