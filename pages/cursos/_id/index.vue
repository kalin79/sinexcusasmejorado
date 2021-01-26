<template>
    <div class="boxCursos" v-if="loadingCourse">
        <div class="boxInfo">
            <div class="container">
                <div class="row align-items-stretch">
                    <div class="d-lg-none d-block col-12">
                        <div class="boxCourseUnit">
                            <div class="boxTitle">
                                <h3>Partes del curso</h3>
                            </div>
                            <div class="boxBullet">
                                <ul>
                                    <li v-for="(unit, key, index) in dataCourse.units" :key="index">
                                        <div class="boxButtom">
                                            <a href="javascript:void(0)" class="btn-nuxt btn-nuxt100" :class="{ 'active' : unit.title === dataCourse.unitTitle }">
                                                <div class="d-flex justify-content-start align-items-center">
                                                    <icon-bullet />
                                                    <p>{{ unit.title }}</p>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="boxTitle">
                          <h1>{{ dataCourse.title }}</h1>
                        </div>
                        <div class="separate"></div>
                        <div class="boxDescription" v-html="dataCourse.unitDescription"></div>
                        <div class="boxGalleyVideo" v-if="dataCourse.unitVideos">
                            <client-only>
                                <carousel
                                    :perPageCustom="[[300, 1]]" 
                                    :autoplay="true" 
                                    :autoplayTimeout=5000
                                    :paginationPadding=10
                                    :minSwipeDistance=20
                                    :navigationEnabled="false"
                                    :paginationEnabled="true"
                                    :loop="true"
                                    :mouse-drag="true"
                                    :touchDrag="true"
                                    
                                >
                                  <slide v-for="(video, key, index) in dataCourse.unitVideos" :key="index">
                                    <div class="boxVideoSlider">
                                      <iframe width="100%" height="100%" :src="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                  </slide>
                                </carousel>
                            </client-only>
                        </div>
                        <div class="boxCuestionario">
                            <div class="boxTitle">
                                <h2>Cuestionario</h2>
                            </div>

                            <div class="boxQuestion">
                                <div class="tabs">
                                    <div class="tab">
                                        <!-- <input type="radio" id="rd1" name="rd"> -->
                                        <label class="tab-label active" @click="accordion(1, $event)">
                                            Lorem ipsum dolor sit amet
                                            <icon-flecha-two />
                                        </label>
                                        <div class="tab-content active" id="tabContent1">
                                            <div class="boxDescription">
                                                <p>
                                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                </p>
                                                <p>
                                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                                                </p>
                                                <p>
                                                    Et iusto odio volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                                                </p>
                                            </div>
                                            <div class="boxOptionsQuestion">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <div class="boxButtom">
                                                        <a href="#" class="btn-nuxt">
                                                            DE ACUERDO
                                                        </a>
                                                    </div>
                                                    <div class="boxButtom">
                                                        <a href="#" class="btn-nuxt">
                                                            DESACUERDO
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab">
                                        <label class="tab-label" @click="accordion(2, $event)">
                                            Item 2
                                            <icon-flecha-two />
                                        </label>
                                        <div class="tab-content" id="tabContent2">
                                            <div class="boxDescription">
                                                <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                                                </p>
                                            </div>
                                            <div class="boxOptionsQuestion">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <div class="boxButtom">
                                                        <a href="#" class="btn-nuxt">
                                                            DE ACUERDO
                                                        </a>
                                                    </div>
                                                    <div class="boxButtom">
                                                        <a href="#" class="btn-nuxt">
                                                            DESACUERDO
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div class="boxNextCourse">
                          <div class="boxDescription">
                            <div class="d-flex justify-content-start align-items-center flex-column flex-lg-row">
                                <div class="d-flex justify-content-start align-items-center">
                                    <p>Marcar esta unidad como terminada</p>
                                    <div class="form-checkbox">
                                        <input class="styled-checkbox" id="checkbox-term" type="checkbox" v-model="checkEnd" true-value="1" false-value="0">
                                        <label for="checkbox-term"><span></span></label>
                                    </div>
                                </div>
                                <div class="boxButtom">
                                    <a to="javascript:void(0)" class="btn-nuxt">
                                    <div class="d-flex justify-content-center align-items-center">
                                        Siguiente Unidad
                                        <icon-flecha-horizontal />
                                    </div>
                                    </a>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="d-none d-lg-block col-lg-4">
                      <div class="boxUnit">
                        <div class="boxSubTitle">
                            <h3>Partes del curso</h3>
                        </div>
                        <div class="boxBullet">
                          <ul>
                            <li v-for="(unit, key, index) in dataCourse.units" :key="index">
                                <a href="javascript:void(0)" class="btn-link" :class="{ 'active' : unit.title === dataCourse.unitTitle }">
                                    <div class="d-flex justify-content-start align-items-center">
                                        <icon-bullet />
                                        <p>{{ unit.title }}</p>
                                    </div>
                                </a>
                            </li>
                          </ul>
                        </div>
                        <div class="boxUnitImage">
                            <img :src="dataCourse.imgPortda" class="card-img" :alt="dataCourse.title">
                        </div>
                      </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IconFlechaTwo from '@/components/Svg/IconFlechaTwo'
import IconFlechaHorizontal from '@/components/Svg/IconFlechaHorizontal'
import IconBullet from '@/components/Svg/IconBullet'
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
    // middleware: 'datacurso',
    components: {
        IconFlechaTwo,
        IconFlechaHorizontal,
        IconBullet,
    },
    data () {
        return {
            checkEnd: '0',
            loadingCourse: false,
            course: {
                title: ''
            }
        }
    },
    computed: {
        ...mapState('authentication/auth',['userAuth']),
        ...mapGetters('courses/course', ['getCourse']),
        ...mapState('courses/course', ['dataCourse']),
        // objectVideos() {
        //     let videosString = this.dataCourse.unitVideos.split('||')
        //     let pos = 0, numElementos = videosString.length
        //     let objVideos = videosString.splice(pos,numElementos)
        //     return objVideos
        // }
    },
    async mounted() {
        try {
            if (!this.userAuth.isLogged) await this.isAuthenticated()
            if (this.userAuth.isLogged){
                this.dataGetCourse(3)
                this.loadingCourse = true

            }else{
                this.$store.commit('authentication/auth/setPath', this.$route.fullPath)
                this.$router.push('/login')
            }
        } catch (e) {
            throw e;
        } finally {
        }
    },
    methods: {
        ...mapActions({
            isAuthenticated: 'authentication/auth/isAuthenticated',
            dataGetCourse: 'courses/course/dataGetCourse',
        }),
        accordion(index, event) {
            const tabAll = $('.tab-content')
            const boxTab = $('#tabContent'+index)
            if (!(boxTab.hasClass('active'))) {
                tabAll.removeClass('active')
                $('.tab-label').removeClass('active')
                boxTab.addClass('active')
                $(event.target).addClass('active')
            }
        }
    }
}
</script>
<style lang="sass">
    .boxCursos
        .boxCourseUnit
            padding-bottom: 1rem 
        .boxOptionsQuestion
            .boxButtom
                margin: 0 .5rem
                .btn-nuxt
                    padding: 0 1.5em
        .boxInfo
            padding-bottom: 0 !important
        .boxUnit
            border-left: 1px solid rgba($grayDark,.35)
            padding-left: 2rem
            height: 100%
        // .boxUnitImage
        //     img
        //         height: 200px
        .boxSubTitle
            padding-top: 3rem
            h3
                text-align: left
                font-size: 18px
                @media screen and (min-width: 992px)
                    font-size: 25px
                @media screen and (min-width: 1200px)
                    font-size: 30px
        .boxBullet
            padding: 1rem 0
            ul
                margin: 0
                padding: 0
                list-style: none
            li
                padding: .5rem 0
                .btn-nuxt,
                .btn-link
                    padding: 0 1rem
                    text-decoration: none
                    border: 2px solid $redLight
                    background: white
                    @media screen and (min-width: 992px)
                        padding: 0
                        border: 0px solid $redLight
                        background: transparent

                    p
                        transition: .5s ease color
                        font-size: 14px
                        position: relative
                        top: 2px
                        color: $grayDark
                        @media screen and (min-width: 992px)
                            color: $grayDark
                        @media screen and (min-width: 1200px)
                            font-size: 16px
                    &.active,
                    &:hover
                        background: $redLight
                        @media screen and (min-width: 992px)
                            background: transparent
                        p
                            color: white
                            @media screen and (min-width: 992px)
                                color: $blueLight
                        .boxIconBullet
                            .svgIconBullet
                                .st0
                                    stroke: white
                                    @media screen and (min-width: 992px)
                                        stroke: $blueLight
                    .boxIconBullet
                        margin-right: .5rem
                        .svgIconBullet
                            width: 23px
                            .st0
                                stroke: $grayDark
                                @media screen and (min-width: 992px)
                                    stroke: $blueLight
        .boxNextCourse
            padding: 2rem 0 0rem
            @media screen and (min-width: 992px)
                padding: 4rem 0 0rem
            .boxButtom
                .btn-nuxt
                    background: $blueLight
                    border: 2px solid $blueLight
                    color: white
                    padding: 0 1.5em
                    cursor: pointer
                    .boxFlechaHorizontal
                        margin-left: .5rem
                        .svgFlechaHorizontal
                            width: 20px
                            .st0
                                fill: white
                    &:hover
                        color: $blueLight
                        background: white
                        .boxFlechaHorizontal
                            .svgFlechaHorizontal
                                .st0
                                    fill: $blueLight
            .boxDescription
                .form-checkbox
                    margin-left: .5rem
                p
                    margin: 0
        .boxGalleyVideo
            margin: 3rem 0 1rem
        .separate
            width: 10px
            height: 2rem
        .boxDescription
            p
                text-align: left
                margin-bottom: 1rem
</style>