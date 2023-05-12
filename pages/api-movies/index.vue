<template>
  
  <NuxtLayout name="default" title-default="api-movies"></NuxtLayout>
    <div class="flex items-start justify-center py-4 md:py-8 flex-wrap">
      <div v-for="movies in results" :key="movies.id" class="max-w-[20rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-4 mb-5">
          <a href="#">
            <img class="rounded-t-lg" :src="'https://image.tmdb.org/t/p/w500' + movies.poster_path" alt="" />
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{{movies.title}}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ movies.release_date }}</p>
              <nuxt-link :to="'/api-movies/movie/' + movies.id"  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ver más </nuxt-link>
             
          </div>
      </div>
    </div>


</template>
<script setup>
  const { data } = await useFetch('https://api.themoviedb.org/3/movie/popular?api_key=79c34c1d1e174024b60e79aaa6157408&language=es-ES&page=1&without_genres=27,58')
    
  const {value: { results }} = data;
</script>
