<script setup lang="ts">
useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/images/qr.png",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/family.png",
    },
  ],
});
</script>

<template>
  <div
    class="flex gap-[clamp(30px,2.7vw,50px)] h-screen pointer-events-none select-none"
  >
    <img
      class="w-[30%] h-full object-cover object-[50%_30%]"
      src="/images/family.png"
      alt="family"
    />
    <div
      class="grow bg-[#E0E0E0] flex flex-col gap-[7vh] justify-center items-center font-ysa p-[5vh]"
    >
      <h1 class="text-[clamp(30px,4vh,40px)] font-[100] text-center">
        Wedding day
      </h1>

      <h2 class="text-[clamp(50px,7vh,70px)] font-[200] text-center">
        Антон & Ксения
      </h2>

      <AppQr class="max-w-[25vh] max-h-[25vh]" />

      <p
        class="text-[clamp(20px,2.5vh,30px)] font-[100] max-w-[520px] text-center"
      >
        Для перехода в мобильную версию приглашения отсканируйте QR-код камерой
        Вашего мобильного устройства
      </p>
    </div>
  </div>
</template>
