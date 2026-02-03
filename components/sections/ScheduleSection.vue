<script setup lang="ts">

import Timeline from "~/components/time-line/Timeline.vue";
</script>

<template>
<div class="px-[28px]">
  <AppReveal
      :delay="0"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 scale-x-0',
        enterTo: 'opacity-100 scale-x-100'
      }"
  >
  <div class="border-b-[1px] border-[#808080] w-[156px] mx-auto"></div>
  </AppReveal>

  <AppReveal
      :delay="90"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 translate-y-6',
        enterTo: 'opacity-100 translate-y-0'
      }"
  >
  <h1 class="mt-[18px] text-[35px] leading-[40px] tracking-[-0.15em] text-neutral text-center text-shadow-soft">
    Программа <br> дня
  </h1>
  </AppReveal>

  <AppReveal
      :delay="180"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 translate-y-8 blur-[2px]',
        enterTo: 'opacity-100 translate-y-0 blur-0'
      }"
  >
  <Timeline class="mt-[41px]"/>
  </AppReveal>
</div>
</template>
