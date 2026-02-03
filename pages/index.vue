<script setup>
import UnlockSection from "~/components/sections/UnlockSection.vue";
import MainSection from "~/components/sections/MainSection.vue";
import IntroSection from "~/components/sections/IntroSection.vue";
import LocationSection from "~/components/sections/LocationSection.vue";
import DressCodeSection from "~/components/sections/DressCodeSection.vue";
import ScheduleSection from "~/components/sections/ScheduleSection.vue";
import WishesSection from "~/components/sections/WishesSection.vue";
import FooterSection from "~/components/sections/FooterSection.vue";
const locked = ref(true);

useHead({
  link: [
    {
      rel: "preload",
      as: "video",
      href: "/videos/welcome.mp4",
      type: "video/mp4",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/welcome-poster.jpg",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/play.png",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/arrow-right.png",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/bg.png",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/location.png",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/main-vector.png",
    },
  ],
});

const unlock = () => {
  locked.value = false;
};
</script>

<template>
  <div :class="locked ? 'overflow-hidden' : 'overflow-auto'">
    <Transition
      leave-active-class="transition-all duration-400 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-6"
    >
      <UnlockSection v-if="locked" key="unlock" @unlock="unlock" />
    </Transition>

    <Transition
      enter-active-class="transition-opacity duration-1000 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      appear
    >
      <div v-if="!locked" class="h-full pb-[12px]">
        <MainSection />
        <UiContainer>
          <div class="bg-white/70 shadow-soft pb-[57px] rounded-b-full">
            <IntroSection />
            <LocationSection class="mt-[29px]" />
            <DressCodeSection class="mt-[35px]" />
            <ScheduleSection class="mt-[43px]" />
            <WishesSection class="mt-[57px]" />
            <FooterSection class="mt-[57px]" />
          </div>
        </UiContainer>
      </div>
    </Transition>
  </div>
</template>
