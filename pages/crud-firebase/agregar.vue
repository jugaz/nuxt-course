<template>
  <NuxtLayout name="default" title-default="Crud FireBase Agregar"></NuxtLayout>
  <div
    class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden">
    <div class="fixed left-0 right-0 bg-gradient z-10"></div>
    <div class="max-w-520px text-center z-20">
      <h1 class="text-8xl sm:text-10xl font-medium mb-8">Crud FireBase Agregar</h1>
      <Form boton="Guardar Juego"/>
    </div>
  </div>

</template>
<script setup>
  import Form from "../../components/form.vue";

</script>
