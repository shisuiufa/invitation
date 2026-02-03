<script setup lang="ts">
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
        class="mt-[18px] text-[clamp(20px,9vw,35px)] xl:text-[clamp(35px,4.3vw,40px)] tracking-[-0.15em] text-neutral text-center text-shadow-soft"
      >
        Пожелания
      </h1>
    </AppReveal>

    <AppReveal
      :delay="180"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 -translate-x-6 blur-[2px]',
        enterTo: 'opacity-100 translate-x-0 blur-0',
      }"
    >
      <p
        class="mt-[25px] font-montserrat text-center text-[15px] xl:text-[25px] leading-[170%] text-neutral text-shadow-soft"
      >
        В ресторане не предусмотрена детская зона и аниматоры, просим Вас
        заранее позаботиться о том, с кем оставить Вашу кроху на праздничный
        вечер!
      </p>
    </AppReveal>

    <AppReveal
      :delay="270"
      :t="{
        enterActive: 'transition-all duration-700 ease-out',
        enterFrom: 'opacity-0 translate-x-6 blur-[2px]',
        enterTo: 'opacity-100 translate-x-0 blur-0',
      }"
    >
      <p
        class="mt-[25px] font-montserrat text-center text-[15px] xl:text-[25px] leading-[170%]  text-neutral text-shadow-soft"
      >
        Пожалуйста, воздержитесь от покупки цветов - они недолговечны. Если Вы
        хотите дополнить Ваш основной подарок, приглашаем Вас стать соавтором
        нашей семейной библиотеки и подарить на память книгу с Вашим автографом!
      </p>
    </AppReveal>
  </div>
</template>
