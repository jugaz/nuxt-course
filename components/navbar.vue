<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="2xl:max-w-screen-2xl xl:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <nuxt-link to="/" activeClass="md:text-blue-700"
        class="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ props.title }}</span>
      </nuxt-link>

      <button data-collapse-toggle="navbar-dropdown" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <nuxt-link to="/" activeClass="md:text-blue-700"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Home
            </nuxt-link>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              {{
                Object.keys(route.query).length > 0
                  ? `Query`
                  : route.hash !== ""
                    ? `Hash`
                    : Object.keys(route.params).length > 0
                      ? `Parametros`
                      : route.path == "/contactos/contacto"
                        ? "Sección Contacto"
                        : "Contactos"
              }}
              <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>

            <div id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <nuxt-link to="/contactos"
                  :active-class="Object.keys(route.query).length === 0 && !route.hash ? 'md:text-blue-700' : ''"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Contactos
                </nuxt-link>

                <nuxt-link to="/contactos/contacto" activeClass="md:text-blue-700"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Sección Contacto
                </nuxt-link>

              </ul>
              <div class="py-1">
                <nuxt-link to="/contactos/123" activeClass="md:text-blue-700"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                  Parametros
                </nuxt-link>

                <nuxt-link to="/contactos?v=123"
                  :active-class="Object.keys(route.query).length > 0 && !route.hash ? 'md:text-blue-700' : ''"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                  Query
                </nuxt-link>

                <nuxt-link :to="{ path: '/contactos', hash: '#123' }"
                  :active-class="Object.keys(route.query).length === 0 && route.hash ? 'md:text-blue-700' : ''"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                  Hash
                </nuxt-link>

              </div>
            </div>
          </li>
          <nuxt-link to="/api-movies" activeClass="md:text-blue-700"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Api Movies
          </nuxt-link>

          <nuxt-link to="/pinia" activeClass="md:text-blue-700"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Pinia
          </nuxt-link>
          <li>
            <button id="dropdownNavbarLink1" data-dropdown-toggle="dropdownNavbar1"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              {{ route.fullPath.includes('/crud-firebase/') ? `Crud Firebase ${route.name.replace(/^[a-z]/, (match) =>
                match.toUpperCase())}` : 'Crud Firebase' }}
              <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>

            <div id="dropdownNavbar1"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton1">

                <nuxt-link to="/crud-firebase" activeClass="md:text-blue-700"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Crud Firebase
                </nuxt-link>

                <nuxt-link to="/crud-firebase/agregar" activeClass="md:text-blue-700"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Agregar
                </nuxt-link>

              </ul>

            </div>
          </li>


        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { initDropdowns } from "flowbite";
import { useFlowbite } from '~/composables/useFlowbite';
import { onMounted } from "vue";
const route = useRoute();

const props = defineProps(
  { title: null, }
);

onMounted(() => {
  useFlowbite(() => {
    initDropdowns();
  })
})
</script>
