<template>
    <NuxtLayout name="default" title-default="api-movies"></NuxtLayout>
    <div class="flex items-start justify-center py-4 md:py-8 flex-wrap">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-4 mb-5">
        <img class="rounded-t-lg" :src="'https://image.tmdb.org/t/p/w500' + backdrop_path" alt="" />
        <div class="p-5">
            <h5 class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{overview}}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Clasificación: {{ vote_average }}</p>
        </div>
      </div>
    </div>
  </template>
  <script setup>
    const route = useRoute();

    const { data } = await useFetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=79c34c1d1e174024b60e79aaa6157408&language=es-ES&page=1&without_genres=27,58`)

    const {value: { vote_average,overview,backdrop_path }} = data;

  </script>
  