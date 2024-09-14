<script setup lang="ts">
</script>

<template>
  <nav>
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
