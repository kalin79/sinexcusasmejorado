<template>
  <div>
    <header-main />
    <header-movil />
    <nuxt />
    <footer-main />
  </div>
</template>
<script>
import HeaderMain from '@/components/Header/Header'
import HeaderMovil from '@/components/Header/HeaderMovil'
import FooterMain from '@/components/Footer/Footer'
export default {
  components: {
    HeaderMain,
    HeaderMovil,
    FooterMain,
  }
}
</script>