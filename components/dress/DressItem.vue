<script setup lang="ts">
import type { DressItemType } from "~/types/Dress";

defineProps<{
  item: DressItemType;
}>();
</script>

<template>
  <div
    class="w-[clamp(30px,13vw,50px)] h-[clamp(30px,13vw,50px)] xl:w-[clamp(30px,7.5vw,70px)] xl:h-[clamp(30px,7.5vw,70px)] rounded-full"
    :style="{ backgroundColor: item.color }"
  ></div>
</template>
