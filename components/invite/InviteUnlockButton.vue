<script setup lang="ts">
const props = defineProps<{
  x: number;
}>();

const emit = defineEmits<{
  (e: "start", event: MouseEvent | TouchEvent): void;
}>();
</script>

<template>
  <div
    class="absolute z-[2] left-1 top-1 w-16 h-16 rounded-full bg-gray flex items-center justify-center shadow-card cursor-pointer transition-transform"
    :style="{ transform: `translateX(${props.x}px)` }"
    @mousedown="emit('start', $event)"
    @touchstart.prevent="emit('start', $event)"
  >
    <img
      class="w-10 object-contain pointer-events-none"
      src="/images/arrow-right.png"
      alt="arrow"
    />
  </div>
</template>
