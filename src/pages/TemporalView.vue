<script lang="ts" setup>
import { useTemporalDate } from '../composables/useTemporalDate';
import DigitalClockWithTImezone from '../components/DigitalClockWithTImezone.vue';
import BaseLayout from '../layouts/BaseLayout.vue';


const {temporalTimezoneKits} = useTemporalDate();

</script>

<template>
  <BaseLayout>
    <template #header>
      Temporal API
    </template>
    <template #body>
      <DigitalClockWithTImezone
        v-for="timezoneKit in temporalTimezoneKits"
        :key="timezoneKit.timezone"
        :time="timezoneKit.time"
        :timezone="timezoneKit.timezone"
        :date="timezoneKit.date"
        :offset="timezoneKit.offset"
      />
    </template>
  </BaseLayout>
</template>

<style>

</style>