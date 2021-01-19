<template>
    <header class="menuMovil headerNavegationMain">
        <div class="container-fluid">
            <div class="d-flex justify-content-between d-flex align-items-center">
                <div class="boxMenuNavegation">
                    <a href="javascript:void(0)" @click="viewMenu">
                        <i class="icofont-navigation-menu"></i>
                    </a>
                </div>
                <div class="boxLogoCenter">
                    <nuxt-link to="/" class="box-logo">
                        <img src="@/assets/images/logo.svg" alt="Sin Excusas">
                    </nuxt-link>
                </div>
                <div class="boxMenuNavegation boxSearch">
                    <a href="javascript:void(0)">
                        <i class="icofont-search"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="panelOptionMenu">
            <div class="container-fluid">
                <div class="boxPanel">
                    <div class="d-flex justify-content-between d-flex align-items-center">
                        <div class="boxLogoCenter">
                            <nuxt-link to="/" class="box-logo">
                                <img src="@/assets/images/logo.svg" alt="Sin Excusas">
                            </nuxt-link>
                        </div>
                        <div class="boxMenuNavegation boxClose">
                            <a href="javascript:void(0)" @click="closeMenu">
                                <i class="icofont-close"></i>
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div class="d-flex justify-content-between d-flex align-items-center">
                                <div class="boxButtom">
                                    <nuxt-link to="#" class="btn-nuxt">
                                        CREar cuenta
                                    </nuxt-link>
                                </div>
                                <div class="boxButtom d-flex justify-content-end">
                                    <nuxt-link to="#" class="btn-nuxt">
                                        iniciar sesión
                                    </nuxt-link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex justify-content-start d-flex align-items-center">
                                <div class="boxIconUser">
                                    <i class="icofont-user-alt-3"></i>
                                </div>
                                <div class="boxDetailUser">
                                    <h2>Carlos Augusto Espinoza</h2>
                                    <div class="d-flex justify-content-between d-flex align-items-center">
                                        <nuxt-link to="/" class="box-logo">
                                            <p>Mi cuenta</p>
                                        </nuxt-link>
                                        <nuxt-link to="/" class="box-logo">
                                            <p class="text-grayDark">Cerrar Sesión</p>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <nuxt-link to="/" class="btn-link">
                                <p class="text-redLight">Cursos</p>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/" class="btn-link">
                                <p>para identificar</p>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/" class="btn-link">
                                <p>para compartir</p>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/" class="btn-link">
                                <p>para construir</p>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/" class="btn-link">
                                <p>para avanzar</p>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    
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

        }
    },
    computed: {},
    mounted () {
        const boxMenu = ".panelOptionMenu"
        gsap.set(boxMenu, {x:"-100%", autoAlpha: 0});
    },
    methods: {
        viewMenu() {
            const boxMenu = ".panelOptionMenu"
            gsap.to(boxMenu,{duration: .5, autoAlpha: 1, x: 0})
        },
        closeMenu() {
            const boxMenu = ".panelOptionMenu"
            gsap.to(boxMenu,{duration: .5, autoAlpha: 0, x: "-100%"})
        }
    }
}
</script>
<style lang="sass">
    .menuMovil
        display: block
        @media screen and (min-width: 992px)
            display: none
        .boxButtom
            width: 90%
            a.btn-nuxt
                padding: 0em
                width: 90%
                text-align: center
        .boxDetailUser
            width: 100%
        .panelOptionMenu
            position: fixed
            top: 0
            left: 0
            z-index: 90
            width: 100%
            height: 100vh
            background: white
            .boxDetailUser
                h2
                    @extend %uniLTStdBold
                    font-size: 14px
                    color: $grayDark
                    line-height: 1.5em

                a
                    display: inline-block
                    p
                        @extend %uniLTStdBold
                        font-size: 12px
                        color: $redLight
                        line-height: 1em

            .boxIconUser
                margin-right: .5rem
                i
                    font-size: 2rem
            ul
                margin: 1rem 0 0 0
                padding: 0
                list-style: none
                li
                    width: 100%
                    padding: 1rem 0
                    border-bottom: 1px solid $grayLight2
            .boxClose
                a
                    i
                        font-size: 2rem
            .boxPanel
                padding-top: 1rem
        .container-fluid
            padding-top: .5rem
            padding-bottom: .5rem
        .boxMenuNavegation
            a
                text-decoration: none
                i
                    font-size: 1rem
                    color: $blue
        .boxLogoCenter
            width: 150px
            a
                &.box-logo
                    display: inline-block
                    width: 100%
    

</style>