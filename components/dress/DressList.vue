<script setup lang="ts">
import DressItem from "~/components/dress/DressItem.vue";
import type { DressItemType } from "~/types/Dress";

const list = ref<DressItemType[]>([
  {
    color: "#DAD4DF",
  },
  {
    color: "#D7C5D8",
  },
  {
    color: "#BAAAC8",
  },
  {
    color: "#88708E",
  },
  {
    color: "#2C0344",
  },
]);
</script>

<template>
  <div class="flex justify-center gap-[12px]">
    <DressItem v-for="(item, idx) in list" :key="idx" :item="item" />
  </div>
</template>
