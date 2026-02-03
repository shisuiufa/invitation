<script setup lang="ts">
import PlayButton from "~/components/ui/PlayButton.vue";
import InviteVideo from "~/components/invite/InviteVideo.vue";

const emits = defineEmits(["unlock"]);

const showPlayButton = ref(false);
const videoRef = ref<{ video: HTMLVideoElement | null } | null>(null);
const showUI = ref(false);
const hideUI = ref(false);
const isPlaying = ref(false);

const playVideo = () => {
  const video = videoRef.value?.video;
  if (!video) return;

  video.play();
  isPlaying.value = true;
};

const onTimeUpdate = () => {
  const video = videoRef.value?.video;
  if (!video || showUI.value || !video.duration) return;

  if (video.currentTime >= video.duration / 2.5) {
    showUI.value = true;
  }
};

const unlock = () => {
  hideUI.value = true;
  setTimeout(() => {
    emits("unlock");
  }, 100);
};

onMounted(() => {
  requestAnimationFrame(() => {
    showPlayButton.value = true;
  });
});
</script>

<template>
  <div class="w-full h-[100svh] overflow-hidden">
    <InviteVideo
      ref="videoRef"
      class="z-[5] w-full h-full pointer-events-none select-none"
      @timeupdate="onTimeUpdate"
    />

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-90"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-90"
    >
      <PlayButton
        v-if="showPlayButton && !isPlaying"
        class="absolute z-[10] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        @click="playVideo"
      />
    </Transition>

    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-6"
      enter-to-class="opacity-100 translate-y-0"
    >
      <UiContainer
        v-if="showUI"
        class="relative z-[10] h-full flex items-end pb-9"
      >
        <InviteUnlockSlider class="w-full" @unlock="unlock" />
      </UiContainer>
    </Transition>
  </div>
</template>
