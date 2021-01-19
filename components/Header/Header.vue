<template>
    <header class="menuPC headerNavegationMain">
        <div class="boxLogin">
            <div class="d-flex justify-content-start  align-items-center">
                <nuxt-link to="/" class="box-user-link">
                    <icon-search />
                </nuxt-link>
                <div class="separate"></div>
                <nuxt-link to="/" class="box-user-link">
                    <div class="d-flex justify-content-start  align-items-center">
                        <icon-user />
                    </div>
                </nuxt-link>
            </div>
        </div>
        <div class="container">
            <div class="boxMain">
                <div class="row">
                    <div class="col-md-5">
                        <ul class="boxOptionsMenu ulMenu">
                            <li>
                                <nuxt-link to="/" class="link-menu curso">
                                    <div class="d-flex justify-content-start  align-items-center">
                                        <icon-lapiz />
                                        <p>cursos</p>
                                    </div>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/" class="link-menu">
                                    <p>para identificar</p>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/" class="link-menu">
                                    <p>para compartir</p>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <nuxt-link to="/" class="box-logo">
                            <img src="@/assets/images/logo.svg" alt="Sin Excusas">
                        </nuxt-link>
                    </div>
                    <div class="col-md-5">
                        <ul class="boxOptionsMenu ulMenu">
                            <li>
                                <nuxt-link to="/" class="link-menu">
                                    <p>para construir</p>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/" class="link-menu">
                                    <p>para avanzar</p>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import IconLapiz from '@/components/Svg/IconLapiz'
import IconUser from '@/components/Svg/IconUser'
import IconSearch from '@/components/Svg/IconBuscador'

import { mapMutations, mapState, mapGetters } from 'vuex'


export default {
    components: {
        IconLapiz,
        IconUser,
        IconSearch,
    },
    data() {
            return {
                auth: []
            }
        },
    computed: {
        ...mapState(
            { 
                AuthUser: state => state.authentication.auth.userAuth,
            },
        ),
    },
    mounted() {
        this.auth = this.AuthUser
        console.log(this.auth)
    },
}
</script>
<style lang="sass">
    .menuPC
        display: none
        @media screen and (min-width: 992px)
            display: block
    .headerNavegationMain
        .box-user-link
            .boxSearch,
            .boxUser
                position: relative
                top: -3px
                svg
                    width: 20px
                    .svgUser,
                    .svgSearch
                        fill: $grayDark 
                        transition: .5s ease fill
            
            &:hover
                .boxUser,
                .boxSearch
                    svg
                        .svgUser,
                        .svgSearch
                            fill: $redLight
        .boxLapiz
            position: relative
            top: -2px
            svg
                width: 20px
                .svgLapiz
                    fill: $redLight
        .boxLogin
            position: absolute
            right: 10px
            top: 50%
            transform: translateY(-50%)
            .separate
                width: 5px
                height: 1px
            .loginIcon
                color: $grayDark
        .boxMain
            padding: .75rem 0
            .ulMenu
                padding: 0
                list-style: none
                margin: 0
                display: flex
                justify-content: flex-start
                li
                    display: flex
                    flex: 1 1 100px
                    align-items: center
                    justify-content: center
            .boxOptionsMenu
                height: 100%
                .link-menu
                    // border: 1px solid $green
                    text-decoration: none
                    &.curso
                        p
                            color: $redLight
                            &:before,
                            &:after
                                background: $redLight
                    &:hover,
                        p
                            &:before,
                            &:after
                                width: 51%
                    &.active 
                        p
                            &:before,
                            &:after
                                width: 51%
                                
                    p
                        @extend %dinBold
                        margin: 0
                        text-transform: uppercase
                        color: $grayDark
                        font-size: 14px
                        position: relative
                        letter-spacing: -.05em
                        @media screen and (min-width: 1200px)
                            font-size: 16px
                        &:before,
                        &:after
                            content: ''
                            position: absolute
                            bottom: 0px
                            width: 0%
                            height: 1px
                            background: $grayDark
                            transition: .5s ease width
                        &:before
                            left: 0 
                        &:after
                            right: 0  

                .box-logo
                    display: block
                    width: 100%
    // .container
    //     border: 1px solid blue
</style>