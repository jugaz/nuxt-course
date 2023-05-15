<template>
  <NuxtLayout name="default" title-default="Home"></NuxtLayout>
  <div
    class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"
  >
    <div class="fixed left-0 right-0 bg-gradient z-10"></div>
    <div class="max-w-520px text-center z-20">
      <h1 class="text-8xl sm:text-10xl font-medium mb-8">Home</h1>
      <input
        id="default-input"
        v-model="id"
        placeholder="Escribir parametro"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div class="w-full flex items-center justify-center mt-4">
        <button
          class="btn-demo text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer mr-2"
          @click="enviarParametro(123)"
        >
          Enviar Parametro
        </button>
      </div>
    </div>
  </div>

</template>
<script setup>
import {UseCounter1, UseCounter2} from '../store/index'
  const Usecounter1 = UseCounter1() 
  const Usecounter2 = UseCounter2() 

  const router = useRouter();
  const id = ref("");

  const enviarParametro = (item) => {
    console.log("item", item);
    console.log("id",id.value)
    router.push(`contactos/${item} ${id.value}`);
  };
</script>
