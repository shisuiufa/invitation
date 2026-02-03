<script setup lang="ts">
type TransitionClasses = {
  enterActive: string
  enterFrom: string
  enterTo: string
}

const props = withDefaults(
    defineProps<{
      once?: boolean
      threshold?: number
      rootMargin?: string
      delay?: number
      t: TransitionClasses
    }>(),
    {
      once: true,
      threshold: 0.2,
      rootMargin: "0px 0px 5px 0px",
      delay: 0,
    }
)

const host = ref<HTMLElement | null>(null)
const shown = ref(false)

let io: IntersectionObserver | null = null
let timer: number | null = null

const cls = computed(() => {
  return [
    props.t.enterActive,
    shown.value ? props.t.enterTo : props.t.enterFrom,
  ].join(" ")
})

onMounted(() => {
  if (typeof IntersectionObserver === "undefined") {
    shown.value = true
    return
  }

  io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || shown.value) return

        timer = window.setTimeout(() => {
          requestAnimationFrame(() => {
            shown.value = true
          })
        }, props.delay)

        if (props.once) io?.disconnect()
      },
      { threshold: props.threshold, rootMargin: props.rootMargin }
  )

  if (host.value) io.observe(host.value)
})

onBeforeUnmount(() => {
  if (timer) window.clearTimeout(timer)
  io?.disconnect()
})
</script>

<template>
  <div ref="host">
    <div :class="cls">
      <slot />
    </div>
  </div>
</template>
