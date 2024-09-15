<script setup lang="ts">
</script>

<template>
  <nav class="max-w-screen-lg m-auto grid grid-cols-4 text-center">
    <RouterLink to="/">
      Home 
    </RouterLink>
    <RouterLink to="/temporal">
      Temporal Api
    </RouterLink>
    <RouterLink to="/luxon">
      Luxon 
    </RouterLink>
    <RouterLink to="/date">
      Date Api 
    </RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
