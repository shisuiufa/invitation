<script setup lang="ts">
const emit = defineEmits<{
  (e: "timeupdate"): void;
}>();

const videoRef = ref<HTMLVideoElement | null>(null);

const onTimeUpdate = () => {
  emit("timeupdate");
};

defineExpose({
  video: videoRef,
});
</script>

<template>
  <video
    ref="videoRef"
    class="object-cover"
    playsinline
    preload="auto"
    poster="/images/welcome-poster.jpg"
    @timeupdate="onTimeUpdate"
  >
    <source src="/videos/welcome.mp4" type="video/mp4" />
  </video>
</template>
