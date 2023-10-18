// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: true,
  components: [{ path: '@/components', pathPrefix: false }],
  dir: {
    pages: 'components/pages'
  },
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/assets/scss/breakpoints.scss";`
        }
      }
    }
  }
})
