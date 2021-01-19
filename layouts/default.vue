<template>
  <div>
    <header-main />
    <header-movil />
    <nuxt />
  </div>
</template>
<script>
import HeaderMain from '@/components/Header/Header'
import HeaderMovil from '@/components/Header/HeaderMovil'
export default {
  components: {
    HeaderMain,
    HeaderMovil,
  }
}
</script>