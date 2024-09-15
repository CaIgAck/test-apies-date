<script setup lang="ts">
import DigitalClockWithTImezone from '../components/DigitalClockWithTImezone.vue';
import { useLuxonDate } from '../composables/useLuxonDate';
import BaseLayout from '../layouts/BaseLayout.vue';

const { luxonTimezoneKits } = useLuxonDate();
</script>

<template>
  <BaseLayout>
    <template #header>
      Luxon
    </template>
    <template #body>
      <DigitalClockWithTImezone
        v-for="timezoneKit in luxonTimezoneKits"
        :key="timezoneKit.timezone"
        :time="timezoneKit.time"
        :timezone="timezoneKit.timezone"
        :date="timezoneKit.date"
        :offset="timezoneKit.offset"
      />
    </template>
  </BaseLayout>
</template>

<style scoped>

</style>