<template>
  <div>
    <NuxtLayout name="default" title-default="api-movies"></NuxtLayout>
    <div
      class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"
    >
      <div class="fixed left-0 right-0 bg-gradient z-10"></div>
      <div class="max-w-520px text-center z-20">
        <h1 class="text-8xl sm:text-10xl font-medium mb-8">api-movies</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
  const { data } = await useAsyncData(() =>
    $fetch(`https://api.themoviedb.org/3/movie/popular?api_key=79c34c1d1e174024b60e79aaa6157408&page=1`)
  );
  const {
    value: { results },
  } = data;
  // console.log("results",results )
</script>
