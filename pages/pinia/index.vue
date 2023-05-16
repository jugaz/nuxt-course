<template>
    <div>
      <NuxtLayout
        name="default" title-default='Pinia'
      />
      <div
        class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"
      >
        <div class="fixed left-0 right-0 bg-gradient z-10"></div>
        <div class="max-w-520px text-center z-20">
          <p class="text-8xl sm:text-10xl font-medium mb-8">Pinia</p>
        </div>
        <p>counter1: {{ counter1.count1 }}</p>
        <pre>{{ counter1.$state }}</pre>
        <button @click="counter1.increment1" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Count1 Incrementar
        </button>
        <p>counter2: {{ counter2.count2 }}</p>
        <pre>{{ counter2.$state }}</pre>
        <button @click="counter2.increment2" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Count1 Increment2
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
    const counter1 = UseCounter1()
    const counter2 = UseCounter2() 

  </script>
  