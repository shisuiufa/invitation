<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const emits = defineEmits(["unlock"]);

const slider = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const isUnlocked = ref(false);

const MAX_SLIDE = 160;

const start = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true;
  startX.value = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
};
const move = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;

  const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;

  const delta = clientX - startX.value;
  slider.value = Math.max(0, Math.min(delta, MAX_SLIDE));
};

const end = () => {
  if (!isDragging.value) return;
  isDragging.value = false;

  if (slider.value >= MAX_SLIDE * 0.85) {
    unlock();
  } else {
    slider.value = 0;
  }
};

const unlock = () => {
  slider.value = MAX_SLIDE;
  isUnlocked.value = true;
  emits("unlock");
};

onMounted(() => {
  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", end);
  window.addEventListener("touchmove", move, { passive: false });
  window.addEventListener("touchend", end);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", move);
  window.removeEventListener("mouseup", end);
  window.removeEventListener("touchmove", move);
  window.removeEventListener("touchend", end);
});
</script>

<template>
  <div
    class="relative bg-[#CACFD28C] p-1 rounded-full flex items-center h-fit select-none"
  >
    <InviteUnlockButton :x="slider" @start="start" />

    <div class="relative z-[1] w-16 h-16 opacity-0"></div>

    <h1
      class="font-ysa text-center text-xl text-neutral w-full transition-opacity duration-200 text-shadow-soft"
      :class="
        isDragging
          ? 'opacity-0'
          : !isUnlocked && !isUnlocked
            ? 'opacity-100'
            : 'opacity-0'
      "
    >
      Разблокировать <br />
      приглашение
    </h1>
  </div>
</template>
