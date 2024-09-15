<script lang="ts" setup>
import { computed } from 'vue';
import DigitalClock from '../components/DigitalClock.vue';

interface Props {
    timezone: string
    date: string
    time: string
    offset: string
}

const props = defineProps<Props>();

const splittedTime = computed(() => props.time.split(':'));

const getSeconds = computed(() => splittedTime.value[2] );
const getMinutes = computed(() => splittedTime.value[1] );
const getHours = computed(() => splittedTime.value[0] );


</script>

<template>
  <article class="mt-12 clock-container">
    <div class="clock__col">
      <h3 class="clock__unit">
        {{ props.timezone }}
        {{ props.offset }}
      </h3>
    </div>

    <article class="clock">
      <div class="clock__col">
        <DigitalClock :value="getHours" />
        <div class="clock__unit">
          Hours
        </div>
      </div>
      <div class="clock__col">
        <DigitalClock :value="getMinutes" />
        <div class="clock__unit">
          Minutes
        </div>
      </div>
      <div class="clock__col">
        <DigitalClock :value="getSeconds" />
        <div class="clock__unit">
          Seconds
        </div>
      </div>
    </article>
    <article>
      <div class="clock__col">
        <div class="clock__unit">
          {{ props.date }}
        </div>
      </div>
    </article>
  </article>
</template>

<style scoped>
.clock-container {
    @apply
        bg-gray-900 rounded-xl
}
.clock {
  @apply
    grid grid-cols-[1fr_1fr_1fr] gap-2 bg-gray-900 p-8;
}
.clock__col {
  @apply
    flex flex-col items-center justify-center
    bg-gray-700 border border-gray-600 rounded-xl py-4;
}
.clock__unit {
  @apply
    text-gray-400 uppercase text-xs font-black mt-1;
}
</style>