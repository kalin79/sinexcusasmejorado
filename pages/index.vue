<template>
  <div>
    <banner-home />
    <section-one :dataOne="dataHome[0]" />
    <section-two :dataTwo="dataHome[1]" />
    <section-three :dataThree="dataHome[2]" />
    <section-four :dataFour="dataHome[3]" />
  </div>
</template>
<script>
import BannerHome from '@/components/Banner/Home/Home'
import SectionOne from '@/components/Home/SectionOne'
import SectionTwo from '@/components/Home/SectionTwo'
import SectionThree from '@/components/Home/SectionThree'
import SectionFour from '@/components/Home/SectionFour'


/*
    Traemos la libreria de manera local en donde lo vamos a trabajar
*/
import {gsap} from "gsap/dist/gsap"
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  middleware: 'datahome',
  components: {
    BannerHome,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    
  },
  data() {
    return {
    
    }
  },
  computed: {
    ...mapState('home',['dataHome']),
  },
  created () {},
  mounted () {
    // console.log(this.dataHome)
    // Animacion de la seccion 1

    const pingSectionHomeOne = '.homeSectionOne .boxHeader'

    // console.log($(pingSectionHomeOne));
    /*Seteamos elementos*/
    gsap.set(pingSectionHomeOne, { y: -80})
    /*Realizamos la animacion*/
    const parallaxTl = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: pingSectionHomeOne,
            start: 'top top+=120',
            end: 'top',
            scrub: true, // permite que la animacion se vuelva a reproducir(true)
            markers: false,
            // onLeave: () => { console.log('onLeave'); },
            // onEnter: () => { console.log('onEnter'); },
            // onEnterBack: () => { console.log('onEnterBack'); },
        }
    })

    parallaxTl
      .to(pingSectionHomeOne, {duration: .5, y: 0})

    // Animacion de la seccion 2  
    
    const pingSectionHomeTwo = '.homeSectionTwo'
    const animationHomeTwo = '.homeSectionTwo .animationPing'
    const parallaxTl2 = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: pingSectionHomeTwo,
            start: 'top center-=20',
            end: 'top center-=120',
            scrub: true, // permite que la animacion se vuelva a reproducir(true)
            markers: false,
            // onLeave: () => { console.log('onLeave'); },
            // onEnter: () => { console.log('onEnter'); },
            // onEnterBack: () => { console.log('onEnterBack'); },
        }
    })

    parallaxTl2.
      from(animationHomeTwo, {duration: .5, opacity: 0, yPercent: 10, ease: "power2.out"})

    // Animacion de la seccion 3
    
    const pingSectionHomeThree = '.homeSectionThree'
    const boxTitleHomeThree = '.homeSectionThree .boxSubTitle'
    const boxSliderHomeThree = '.homeSectionThree .boxSliderArticles'

    const parallaxTl3 = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: boxSliderHomeThree,
            start: 'top bottom-=110',
            end: 'top bottom-=210',
            scrub: true, // permite que la animacion se vuelva a reproducir(true)
            markers: false,
            // onLeave: () => { console.log('onLeave'); },
            // onEnter: () => { console.log('onEnter'); },
            // onEnterBack: () => { console.log('onEnterBack'); },
        }
    })

    parallaxTl3.
      from(boxTitleHomeThree, {duration: .5, opacity: 0, xPercent: 10, ease: "power2.out"}).
      from(boxSliderHomeThree, {duration: .5, opacity: 0, xPercent: -10, ease: "power2.out"})

  },
  methods: {
  }
}
</script>

