<script lang="ts" setup>
import { useTemporalDate } from '../composables/useTemporalDate';
import DigitalClockWithTImezone from '../components/DigitalClockWithTImezone.vue';


const {temporalTimezoneKits} = useTemporalDate();

</script>

<template>
  <section>
    <h1 class="mb-12 text-center">
      Temporal API
    </h1>
    <article class="grid grid-cols-6 gap-4 text-center">
      <DigitalClockWithTImezone
        v-for="timezoneKit in temporalTimezoneKits"
        :key="timezoneKit.timezone"
        :time="timezoneKit.time"
        :timezone="timezoneKit.timezone"
        :date="timezoneKit.date"
        :offset="timezoneKit.offset"
      />
    </article>
  </section>
</template>

<style>

</style>