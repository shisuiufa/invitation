<script setup lang="ts">
import type { TimelineItemType } from "~/types/Timeline";

const props = defineProps<{
  item: TimelineItemType;
}>();

const delay = computed(() => props.item.id * 120);

const leftT = {
  enterActive: "transition-all duration-700 ease-out",
  enterFrom: "opacity-0 -translate-x-8 blur-[2px]",
  enterTo: "opacity-100 translate-x-0 blur-0",
};

const rightT = {
  enterActive: "transition-all duration-700 ease-out",
  enterFrom: "opacity-0 translate-x-8 blur-[2px]",
  enterTo: "opacity-100 translate-x-0 blur-0",
};
</script>

<template>
  <div class="relative flex items-center">
    <div v-if="item.side === 'left'" class="w-1/2 text-left">
      <AppReveal
        v-if="item.side === 'left'"
        :delay="delay"
        :threshold="0.35"
        :t="leftT"
      >
        <div class="w-min ms-auto pe-[20px] xl:pe-[50px]">
          <div
            class="text-[25px] xl:text-[40px] text-black font-montserrat leading-none"
          >
            {{ item.time }}
          </div>
          <div
            class="text-[15px] xl:text-[30px] text-black font-merienda leading-[140%] mt-[5px]"
          >
            {{ item.label }}
          </div>
        </div>
      </AppReveal>
    </div>
    <div v-else class="w-1/2" />

    <div
      v-if="item.side === 'right'"
      class="w-1/2 h-[79px] xl:h-[150px] ps-[20px] xl:ps-[50px] text-left relative"
    >
      <AppReveal
        :delay="delay"
        :threshold="0.35"
        :t="rightT"
        :class="
          item.id === 1 ? 'absolute top-[-10px]' : 'absolute bottom-[-10px]'
        "
      >
        <div
          class="text-[25px] xl:text-[40px] text-black font-montserrat leading-none"
        >
          {{ item.time }}
        </div>
        <div
          class="text-[15px] xl:text-[30px] text-black font-merienda leading-[140%] mt-[5px]"
        >
          {{ item.label }}
        </div>
      </AppReveal>
    </div>
    <div v-else class="w-1/2" />
  </div>
</template>
