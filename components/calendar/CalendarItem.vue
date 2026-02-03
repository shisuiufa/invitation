<script setup lang="ts">
  import type {CalendarItemType} from "~/types/Calendar";

  defineProps<{
    item: CalendarItemType
  }>()
</script>

<template>
  <div
class="flex flex-col gap-[9px] text-[12px] font-inter text-center
">
    <h4>
      {{item.label}}
    </h4>
    <div class="h-[21px] flex justify-center items-center leading-none" :class="{'bg-[#FF999959] rounded-full w-[21px]' : item.active}">
      <h5>
        {{item.day}}
      </h5>
    </div>
  </div>
</template>
