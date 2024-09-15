<script setup lang="ts">
import DigitalClockWithTImezone from '../components/DigitalClockWithTImezone.vue';
import { useDateAPI } from '../composables/useDefaultDate';
import BaseLayout from '../layouts/BaseLayout.vue';

const { dateTimezoneKits } = useDateAPI();
</script>

<template>
  <BaseLayout>
    <template #header>
      Date
    </template>
    <template #body>
      <DigitalClockWithTImezone
        v-for="timezoneKit in dateTimezoneKits"
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