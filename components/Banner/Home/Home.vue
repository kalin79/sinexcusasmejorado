<template>
    <section class="BannerMainHome">
        <div class="boxCarouselHome">
            <client-only>
                <carousel
                    :perPageCustom="[[300, 1]]" 
                    :autoplay="true" 
                    :autoplayTimeout=5000
                    :paginationPadding=10
                    :minSwipeDistance=20
                    :navigationEnabled="false"
                    :paginationEnabled="false"
                    :loop="true"
                    :mouse-drag="true"
                    :touchDrag="true"
                    
                >
                    <slide>
                        <div class="boxVideoSlider">
                            <client-only>
                                <div class="video-player-box"
                                    v-video-player:myVideoPlayer="playerOptions"
                                    @play="onPlayerPlay($event)"
                                >
                                </div>
                            </client-only>
                        </div>
                    </slide>
                </carousel>
            </client-only>
        </div>
    </section>
</template>
<script>
/*
    Traemos la libreria de manera local en donde lo vamos a trabajar
*/
import {gsap} from "gsap/dist/gsap"
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)
export default {
    data() {
        return {
            playerOptions: {
                // videojs options
                muted: false,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [
                    {
                        type: "video/mp4",
                        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
                    }
                ],
                poster: require("~/assets/images/posterVideo.jpg"),
            }
        }
    },
    mounted() {
        this.playerOptions.sources[0]['src'] = require("~/assets/video/video.mp4")
        // this.playerOptions.poster = this.dataSomos.image
    },
    methods: {
        onPlayerPlay(player) {
            console.log('player play!', player)
            const boxHeaderSectionOne = '.homeSectionOne .boxHeader'
            gsap.to(boxHeaderSectionOne, {duration: .5, y: 0})
        },
    }
}
</script>
<style lang="sass">
    .BannerMainHome
        .boxCarouselHome
            height: 40vh
            width: 100%
            overflow-x: hidden
            background: black
            @media screen and (min-width: 992px)
                height: 85vh
        .boxVideoSlider
            width: 100%
            background: black
            height: 40vh
            @media screen and (min-width: 992px)
                height: 85vh
            .vjs-poster
                background-size: cover
            .vjs-control-bar
                padding-left: 1rem
                height: 4em
                background: transparent
            .vjs-button > .vjs-icon-placeholder
                &:before
                  line-height: 35px  
            .vjs-slider
                background-color: rgba(255,255,255,.5)
            .vjs-load-progress
                background: white
                div
                    background: white
            .vjs-play-progress
                background: rgba(0,129,194,1)
                &:before 
                    color: rgba(231,55,102,1)
            .vjs-play-control
                width: 35px
                line-height: 35px
                height: 35px
                background: rgba(231,55,102,1)
                border-radius: 50%
                .vjs-icon-placeholder
                    &:before
                        line-height: 35px
            .vjs-big-play-button
                top: 50%
                left: 50%
                transform: translate(-50%,-50%)
                width: 80px
                height: 80px
                border-radius: 50%
                line-height: 80px
                font-size: 3rem
                border: 2px solid $redLight
                color: $redLight
                background: rgba(255,255,255,1)
                transition: .5s ease all
                &:hover
                    background: rgba(231,55,102,1) !important
                    border: 2px solid white
                    color: white
            .video-js
                width: 100%
                height: 40vh
                @media screen and (min-width: 992px)
                    height: 85vh
                .vjs-big-play-button
                    background: rgba(255,255,255,1)
</style>