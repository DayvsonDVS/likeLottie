<template>
  <div ref="element" class="dance-dragon" />
</template>

<script setup lang="ts">
import lottie from 'lottie-web'

const element = ref<HTMLElement>()
const isPlay = ref(0)


onMounted(() => {
  const lottieAnimation = lottie.loadAnimation({
    container: element.value!,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/json/Dragon.json',
  })

  document.addEventListener('keypress', () => {
    if (lottieAnimation.isPaused) {
      lottieAnimation.setSpeed(1)
      lottieAnimation.play()
      lottieAnimation.resetSegments(true)
    }
  })

})

</script>

<style lang="scss">
.dance-dragon {
  width: 100px;
}
</style>
