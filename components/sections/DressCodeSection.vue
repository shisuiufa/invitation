<script setup lang="ts">
</script>

<template>
  <div>
    <div class="px-[28px] md:px-[70px]">
      <AppReveal
        :delay="0"
        :t="{
          enterActive: 'transition-all duration-700 ease-out',
          enterFrom: 'opacity-0 scale-x-0',
          enterTo: 'opacity-100 scale-x-100',
        }"
      >
        <div class="border-b-[1px] border-[#808080] w-[156px] xl:w-[300px] mx-auto"></div>
      </AppReveal>

      <AppReveal
        :delay="90"
        :t="{
          enterActive: 'transition-all duration-700 ease-out',
          enterFrom: 'opacity-0 translate-y-6',
          enterTo: 'opacity-100 translate-y-0',
        }"
      >
        <h1
          class="mt-[18px] text-[clamp(20px,9vw,35px)] xl:text-[clamp(35px,4.3vw,40px)] text-neutral text-center tracking-[-0.15em] text-shadow-soft"
        >
          Дресс-код
        </h1>
      </AppReveal>

      <AppReveal
        :delay="180"
        :t="{
          enterActive: 'transition-all duration-700 ease-out',
          enterFrom: 'opacity-0 -translate-y-2 blur-[2px]',
          enterTo: 'opacity-100 translate-y-0 blur-0',
        }"
      >
        <p
          class="mt-[21px] font-montserrat text-center text-[15px] xl:text-[25px] leading-[170%] text-neutral text-shadow-soft"
        >
          Для нас главное - Ваше присутствие, но мы будем очень рады, если при
          выборе своих нарядов вы поддержите цветовую гамму нашей свадьбы!
        </p>
      </AppReveal>
    </div>

    <AppReveal
      :delay="260"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 translate-y-6',
        enterTo: 'opacity-100 translate-y-0',
      }"
    >
      <DressList class="mt-[18px]" />
    </AppReveal>
  </div>
</template>
