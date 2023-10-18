<template>
  <div ref="element" class="like-animation" />
</template>

<script setup lang="ts">
import lottie from 'lottie-web'
const element = ref<HTMLElement>()
const isLike = ref(false)

onMounted(() => {
  const lottieAnimation = lottie.loadAnimation({
    container: element.value!,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/json/like.json',
  })

  lottieAnimation.addEventListener('DOMLoaded', () => {
    const hoverEl = element.value?.firstElementChild?.lastElementChild!

    hoverEl.addEventListener('click', () => {
      lottieAnimation.play()
    })

  })
})

</script>

<style lang="scss">
.like-animation {
  width: 100px;

  svg {
    g {
      cursor: pointer;
    }
  }
}
</style>
