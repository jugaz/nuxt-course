<template>
    <NuxtPage />
  
  <div class="w-full flex items-center justify-center">
    <nuxt-link to="/" class="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">Home</nuxt-link>
  </div>
</template>
<style>
.gradient-border {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 2px);
    border-radius: 12px;
    z-index: -1;
    transform: translate(-1px,  -1px);
}

.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.5rem;
  padding: 2px;
  width: 100%;
  background-size: 400% auto;
  opacity: 0.5;
  transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}

.gradient-border:hover::before {
  background-position: -50% 0;
  opacity: 1;
  background: linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%);
}

@media (prefers-color-scheme: light) {
  .gradient-border[data-v-bc8852ab]::before {
    background: linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%);
  }
}

.spotlight {
  background: linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);
  filter: blur(20vh);
  height: 40vh;
  bottom: -30vh;
}

</style>