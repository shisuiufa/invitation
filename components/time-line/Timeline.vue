<script setup lang="ts">
import type { TimelineItemType } from "~/types/Timeline";
import TimelineItem from "~/components/time-line/TimelineItem.vue";

const items: TimelineItemType[] = [
  { id: 1, time: "15:30", label: "сбор гостей", side: "right" },
  { id: 2, time: "16:00", label: "торжественная церемония", side: "left" },
  { id: 3, time: "17:00", label: "банкет", side: "right" },
];
</script>

<template>
  <div class="relative mx-auto w-full max-w-[320px] xl:max-w-[600px]">
    <div
      class="absolute left-1/2 top-0 h-full w-px bg-neutral -translate-x-1/2"
    />

    <div
      class="absolute left-1/2 top-0 h-[11px] w-[11px] xl:h-[30px] xl:w-[30px] rounded-full bg-gray -translate-x-1/2"
    />
    <div
      class="absolute left-1/2 top-1/2 h-[11px] w-[11px] xl:h-[30px] xl:w-[30px] rounded-full bg-gray -translate-x-1/2 -translate-y-1/2"
    />
    <div
      class="absolute left-1/2 bottom-0 h-[11px] w-[11px] xl:h-[30px] xl:w-[30px] rounded-full bg-gray -translate-x-1/2"
    />

    <div class="flex flex-col justify-between h-full">
      <TimelineItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
