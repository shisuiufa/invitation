<script setup lang="ts"></script>

<template>
  <div class="px-[28px]">
    <AppReveal
      :delay="0"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 scale-x-0',
        enterTo: 'opacity-100 scale-x-100',
      }"
    >
      <div class="border-b-[1px] border-[#808080] w-[156px] mx-auto"></div>
    </AppReveal>

    <AppReveal
      :delay="120"
      :t="{
        enterActive: 'transition-all duration-800 ease-out',
        enterFrom: 'opacity-0 translate-y-6 blur-[2px]',
        enterTo: 'opacity-100 translate-y-0 blur-0',
      }"
    >
      <h1
        class="mt-[37px] text-[20px] leading-[40px] text-neutral text-center font-montserrat font-semibold text-shadow-soft"
      >
        С нетерпением ждём встречи, Ваши
        <br />
        Антон и Ксения!
      </h1>
    </AppReveal>
  </div>
</template>
