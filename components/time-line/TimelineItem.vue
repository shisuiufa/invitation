<script setup lang="ts">
import type { TimelineItemType } from "~/types/Timeline";

defineProps<{
  item: TimelineItemType;
}>();
</script>

<template>
  <div class="relative flex items-center">
    <div v-if="item.side === 'left'" class="w-1/2 text-left">
      <div class="text-[25px] text-black font-montserrat leading-none">
        {{ item.time }}
      </div>
      <div class="text-[15px] text-black font-merienda leading-none mt-[5px]">
        {{ item.label }}
      </div>
    </div>
    <div v-else class="w-1/2" />

    <div
      v-if="item.side === 'right'"
      class="w-1/2 h-[79px] ps-[20px] text-left relative"
    >
      <div
        :class="
          item.id === 1 ? 'absolute top-[-10px]' : 'absolute bottom-[-10px]'
        "
      >
        <div class="text-[25px] text-black font-montserrat leading-none">
          {{ item.time }}
        </div>
        <div class="text-[15px] text-black font-merienda leading-none mt-[5px]">
          {{ item.label }}
        </div>
      </div>
    </div>
    <div v-else class="w-1/2" />
  </div>
</template>
