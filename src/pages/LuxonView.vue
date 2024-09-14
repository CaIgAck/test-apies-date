<script setup lang="ts">
import DigitalClockWithTImezone from '../components/DigitalClockWithTImezone.vue';
import { useLuxonDate } from '../composables/useLuxonDate';

const { luxonTimezoneKits } = useLuxonDate();
</script>

<template>
  <section>
    <h1 class="mb-12 text-center">
      Luxon
    </h1>
    <article class="grid grid-cols-6 gap-4 text-center">
      <DigitalClockWithTImezone
        v-for="timezoneKit in luxonTimezoneKits"
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