<script setup lang="ts">
const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>

<template>
  <div
    class="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat h-screen md:h-full md:min-h-screen flex flex-col"
  >
    <UiContainer class="relative h-full flex flex-col grow">
      <Transition
        enter-active-class="transition-all duration-700 ease-out"
        enter-from-class="opacity-0 translate-y-6"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div v-if="show" class="pt-[10vh] flex gap-[30px] lg:gap-[50px]">
          <h1
            class="ms-[15px] text-[55px] leading-[130%] lg:text-[110px] lg:ms-[50px] xl:text-[150px] xl:ms-[50px] text-neutral text-center"
          >
            12 <br />
            06 <br />
            26
          </h1>
          <div class="border border-neutral mt-[10%] pb-[5%]"></div>
          <div class="relative w-full">
            <h2
              class="text-[25px] lg:text-[40px] xl:text-[60px] absolute bottom-[-11%] text-neutral"
            >
              Save the date
            </h2>
          </div>
        </div>
      </Transition>

      <Transition
        enter-active-class="transition-all duration-700 delay-300 ease-out"
        enter-from-class="opacity-0 translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
        class="grow"
      >
        <div
          v-if="show"
          class="mt-[81px] md:min-h-[300px] xl:min-h-[600px] pt-[48px] lg:mt-[100px] lg:pt-[60px] xl:mt-[150px] xl:pt-[70px] grow bg-white/70 shadow-softNoBottom rounded-t-full"
        >
          <h2
            class="text-center text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px] xl:text-[60px] xl:leading-[120%] text-neutral text-shadow-soft"
          >
            Антон <br />
            & <br />
            Ксения
          </h2>
          <img
            class="absolute w-full left-0 bottom-[19px] object-contain"
            src="/images/main-vector.png"
            alt="vector"
          />
        </div>
      </Transition>
    </UiContainer>
  </div>
</template>
