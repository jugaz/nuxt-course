<template>
  <Navbar :title="props.titleDefault" />
</template>
<script setup>
  import Navbar from "../components/navbar.vue";
  const props = defineProps({
    titleDefault: null,
  });
</script>
