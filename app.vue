<template>
    <NuxtPage />
  
  <div class="w-full flex items-center justify-center">
    <nuxt-link to="/" class="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">Home</nuxt-link>
  </div>
</template>
<style>

.btn-demo {
  border-color: rgba(224,224,224,1);
  border-width: 1px;
  border-radius: .75rem;
}
.btn-demo:hover {
  background-clip: padding-box, border-box !important;
  background-origin: padding-box, border-box !important;
  border-color: transparent;
  background: linear-gradient(to right, #ffffff, #ffffff), linear-gradient(to right, #00DC82, #1DE0B1, #36E4DA);
}

.bg-gradient {
  background: linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);
  filter: blur(20vh);
  height: 40vh;
  bottom: -30vh;
}
</style>