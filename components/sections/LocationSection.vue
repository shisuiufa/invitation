<script setup lang="ts">
const openMap = () => {
  window.open("https://go.2gis.com/SynP7", "_blank", "noopener,noreferrer");
};
</script>

<template>
  <div class="px-[28px] md:px-[70px]">
    <AppReveal
      :delay="0"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 scale-x-0',
        enterTo: 'opacity-100 scale-x-100',
      }"
    >
      <div
        class="border-b-[1px] border-[#808080] w-[156px] xl:w-[300px] mx-auto"
      ></div>
    </AppReveal>

    <AppReveal
      :delay="80"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 translate-y-6',
        enterTo: 'opacity-100 translate-y-0',
      }"
    >
      <h1
        class="mt-[18px] text-[clamp(20px,9vw,35px)] xl:text-[clamp(35px,4.3vw,40px)] text-neutral text-center tracking-tighter text-shadow-soft"
      >
        Локация
      </h1>
    </AppReveal>

    <AppReveal
      :delay="160"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 scale-95 blur-[2px]',
        enterTo: 'opacity-100 scale-100 blur-0',
      }"
    >
      <img
        class="mt-[22px] h-[185px] xl:h-[350px] object-cover rounded-[25px] mx-auto"
        src="/images/location.png"
        alt="location"
      />
    </AppReveal>

    <AppReveal
      :delay="240"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 translate-y-4',
        enterTo: 'opacity-100 translate-y-0',
      }"
    >
      <p
        class="mt-[25px] font-montserrat text-center text-[15px] xl:text-[25px] leading-[170%] text-neutral text-shadow-soft"
      >
        Торжество состоится в ресторане “Юна” по адресу г.Уфа, ул. Менделеева,
        160/9
      </p>
    </AppReveal>

    <AppReveal
      :delay="320"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 translate-y-6',
        enterTo: 'opacity-100 translate-y-0',
      }"
    >
      <UiButton class="mt-[20px]" @click="openMap"> На карте </UiButton>
    </AppReveal>
  </div>
</template>
