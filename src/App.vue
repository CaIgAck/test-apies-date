<script setup lang="ts">
</script>

<template>
  <nav class="max-w-screen-lg m-auto grid grid-cols-3 text-center mb-12">
    <RouterLink to="/">
      Go Temporal Api
    </RouterLink>
    <RouterLink to="/luxon">
      Go to Luxon 
    </RouterLink>
    <RouterLink to="/date">
      Go to Date Api 
    </RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
