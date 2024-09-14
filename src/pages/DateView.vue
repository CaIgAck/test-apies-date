<script setup lang="ts">
import DigitalClockWithTImezone from '../components/DigitalClockWithTImezone.vue';
import { useDateAPI } from '../composables/useDefaultDate';

const { dateTimezoneKits } = useDateAPI();
</script>

<template>
  <section>
    <h1 class="mb-12 text-center">
      Date
    </h1>
    <article class="grid grid-cols-6 gap-4 text-center">
      <DigitalClockWithTImezone
        v-for="timezoneKit in dateTimezoneKits"
        :key="timezoneKit.timezone"
        :time="timezoneKit.time"
        :timezone="timezoneKit.timezone"
        :date="timezoneKit.date"
        :offset="timezoneKit.offset"
      />
    </article>
  </section>
</template>

<style scoped>

</style>