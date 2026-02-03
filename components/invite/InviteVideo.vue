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
  <div class="absolute inset-0 w-full h-full bg-black">
    <img
      class="absolute inset-0 w-full h-full z-[1] object-cover"
      src="/images/welcome-poster.jpg"
      alt="poster"
      data-poster
    />

    <video
      ref="videoRef"
      playsinline
      preload="auto"
      poster="/images/welcome-poster.jpg"
      class="absolute inset-0 w-full h-full z-[2] object-cover"
      @timeupdate="onTimeUpdate"
    >
      <source src="/videos/welcome.mp4" type="video/mp4" />
    </video>
  </div>
</template>
