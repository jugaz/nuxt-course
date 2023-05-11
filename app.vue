<template>
  <NuxtPage />
</template>

<script setup></script>

<style>
  .btn-demo {
    border-color: rgba(224, 224, 224, 1);
    border-width: 1px;
    border-radius: 0.75rem;
  }
  .btn-demo:hover {
    background-clip: padding-box, border-box !important;
    background-origin: padding-box, border-box !important;
    border-color: transparent;
    background: linear-gradient(to right, #ffffff, #ffffff), linear-gradient(to right, #00dc82, #1de0b1, #36e4da);
  }

  .bg-gradient {
    background: linear-gradient(45deg, #00dc82 0%, #36e4da 50%, #0047e1 100%);
    filter: blur(20vh);
    height: 40vh;
    bottom: -30vh;
  }
</style>
