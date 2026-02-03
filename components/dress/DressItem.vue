<script setup lang="ts">
import type { DressItemType } from "~/types/Dress";

defineProps<{
  item: DressItemType;
}>();
</script>

<template>
  <div
    class="w-[50px] h-[50px] rounded-full"
    :style="{ backgroundColor: item.color }"
  ></div>
</template>
