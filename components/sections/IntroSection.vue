<script setup lang="ts">

</script>

<template>
  <div class="pt-[50px] text-neutral px-[28px]">
    <AppReveal
      :delay="120" :t="{
      enterActive: 'transition-all duration-700 ease-out',
      enterFrom: 'opacity-0 translate-y-',
      enterTo: 'opacity-100 translate-y-0'
    }">
    <h1 class="text-[20px] leading-[30px] text-center font-normal tracking-[-0.15em] text-shadow-soft">
      Дорогие родные и друзья!
    </h1>
    </AppReveal>

    <AppReveal
:delay="120" :t="{
      enterActive: 'transition-all duration-700 ease-out',
      enterFrom: 'opacity-0 -translate-x-6',
      enterTo: 'opacity-100 translate-x-0'
    }">
    <p class="text-center font-montserrat text-[15px] mt-[20px] text-shadow-soft">
      Совсем скоро состоится очень важное и радостное для нас событие - наша свадьба!
      Этот день невозможно представить без самых близких для нас людей, поэтому мы очень хотим, чтобы вы провели его
      вместе с нами!
    </p>
    </AppReveal>

    <AppReveal
:delay="240" :t="{
      enterActive: 'transition duration-600 ease-out',
      enterFrom: 'opacity-0 scale-95',
      enterTo: 'opacity-100 scale-100'
    }">
    <h2 class="text-[20px] leading-[30px] text-center tracking-[-0.03em] mt-[20px] font-[500]">
      Июнь 2026
    </h2>
    </AppReveal>
    <AppReveal
:delay="360" :t="{
      enterActive: 'transition duration-700 ease-out',
      enterFrom: 'opacity-0 translate-y-4 rotate-[-1deg] blur-[3px]',
      enterTo: 'opacity-100 translate-y-0 rotate-0 blur-0'
    }">
    <CalendarList class="mt-[20px]"/>
    </AppReveal>
  </div>
</template>
