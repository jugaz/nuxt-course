<template>
  <form>
    <div class="mb-6">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del Juego</label>
      <input type="text" id="name" :value="form.name" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del Juego" required>
    </div>
    
    <div class="mb-6">
      <label for="genero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genero del Juego</label>
      <input type="text" id="genero" :value="form.genero" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Genero del Juego" required>
    </div>

    <div class="mb-6">
      <label for="consola" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consolas de Juegos</label>
      <select id="consola"  v-model="form.consola" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
        <option value="" selected disabled>Seleccione...</option>
        {{ items.value }}
        <option v-for="(item, index) in items" :key="index" :value="item">
          {{ item }}
        </option>
      
      </select>
    </div>

    <div class="mb-6">
      <label for="portada" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portada del Juego</label>
      <input type="text" id="portada" :value="form.genero" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Portada del Juego" required>
    </div>

    <div class="mb-6">
      
    <label for="sinopsis" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sinopsis del Juego</label>
    <textarea id="sinopsis" rows="4" :value="form.sinopsis" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sinopsis del Juego"></textarea>

    </div>

    <div class="mb-6">
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{props.boton}}</button>
    </div>

    
   
  </form>

</template>

<script setup>

const props = defineProps(
    { boton: '', }
    );
  const form = ref({
    nombre: '',
    genero: '',
    consola: '',
    portada: '',
    sinopsis:''
  })

  const items = ref(
    ['PS4', 'Xbox One', 'Switch', 'Pc']
      )
</script>