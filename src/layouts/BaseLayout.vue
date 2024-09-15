<template>
  <section class="my-12 ">
    <h1 class="mb-12 text-center">
      <slot name="header" />
    </h1>
    <article class="flex items-center flex-wrap justify-center gap-4 m-auto">
      <slot name="body" />
    </article>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>