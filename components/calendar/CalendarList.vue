<script setup lang="ts">
import type { CalendarItemType } from "~/types/Calendar";

const list = ref<CalendarItemType[]>([
  { label: "ПН", day: 8 },
  { label: "ВТ", day: 9 },
  { label: "СР", day: 10 },
  { label: "ЧТ", day: 11 },
  { label: "ПТ", day: 12, active: true },
  { label: "СБ", day: 13 },
  { label: "ВСК", day: 14 },
]);
</script>

<template>
  <div
    class="bg-[#FFFFFF80] border border-[#E0E0E0CC] rounded-full flex justify-center gap-[clamp(8px,3.7vw,14px)] px-[clamp(18px,6vw,23px)] py-[12px] overflow-auto"
  >
    <CalendarItem v-for="(item, idx) in list" :key="idx" :item="item" />
  </div>
</template>
