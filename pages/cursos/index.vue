<template>
    <div class="sectionCourses" v-if="loadingCourse">
        <header class="headerCurso">
            <div class="boxHeader">
                <div class="container">
                    <div class="d-flex justify-content-start align-items-center">
                        <div class="boxCircule">
                            <div class="boxTitle">
                                <h2 class="text-white">C</h2>
                            </div>
                            
                        </div>
                        <div class="boxTitle boxTitle-top">
                            <h1 class="text-grayDark">Cursos</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>   
        <section class="boxListCourses">
            <div class="container">
                <!-- {{ dataCourses }} -->
                <div class="d-flex justify-content-between align-items-start flex-wrap flex-column flex-lg-row">
                    <article class="boxViewCourse" v-for="(course, key, index) in dataCourses.courses" :key="index">
                        <div class="boxCourseImage">
                            <img :src="course.url_image" :alt="course.title">
                        </div>
                        <div class="boxCourseDetail">
                            <div class="boxSubTitle">
                                <h3>{{ course.title }}</h3>
                            </div>
                        </div>
                        <div class="boxCourseBottom">
                            <div class="boxButtom">
                                <a :href="'cursos/'+course.slug" class="btn-nuxt">
                                    empezar
                                </a>
                            </div>
                        </div>
                    </article>
                    
                </div>
                <div class="boxPagination" v-if="1==2">
                    <div class="container">
                        <div class="d-flex justify-content-center align-items-center">
                            <a href="javascript:void(0)" class="boxFlecha flecha-prev">
                                <icon-flecha />
                            </a>
                            <a href="javascript:void(0)" class="active">
                                <p>1</p>
                            </a>
                            <a href="javascript:void(0)">
                                <p>2</p>
                            </a>
                            <a href="javascript:void(0)">
                                <p>3</p>
                            </a>
                            <a href="javascript:void(0)" class="boxFlecha flecha-next">
                                <icon-flecha />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import IconFlecha from '@/components/Svg/IconFlecha'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    // middleware: 'datacursos',
    components: {
        IconFlecha
    },
    computed: {
        ...mapState('authentication/auth',['userAuth']),
        ...mapState('courses',['dataCourses']),
    },
    async mounted() {
        try {
            if (!this.userAuth.isLogged) await this.isAuthenticated()
            if (this.userAuth.isLogged){
                console.log("logueado")
                this.dataAllCourse()
                this.loadingCourse = true
            }else{
                this.$store.commit('authentication/auth/setPath', this.$route.fullPath)
                this.$router.push('/login')
            }
        } catch (e) {
            // this.logout();
            throw e;
        }
    },
    data () {
        return {
            loadingCourse: false
        }
    },
    methods: {
        ...mapActions({
            isAuthenticated: 'authentication/auth/isAuthenticated',
            dataAllCourse: 'courses/dataAllCourse',
        }),
        // goToCourse(slug,id){
        //     console.log(slug)
        //     console.log(id)
        // }
    }
}
</script>
<style lang='sass'>
    .sectionCourses
        .boxListCourses
            padding-bottom: 3rem
            .boxButtom
                .btn-nuxt
                    width: 100%
                    padding-left: 0
                    padding-right: 0
                    text-align: center
                    cursor: pointer
            .boxCourseDetail
                padding: 1rem 0
                .boxSubTitle
                    h3
                        font-size: 25px
                        line-height: 1.5em
                        @media screen and (min-width: 992px)
                            font-size: 30px
                        @media screen and (min-width: 1200px)
                            font-size: 36px
            .boxViewCourse
                width: 100%
                margin-bottom: 2rem
                @media screen and (min-width: 992px)
                    width: 49%
                &:last-child
                    margin-bottom: 0
                .boxCourseImage
                    height: 300px
                    img
                        width: 100%
                        object-fit: cover
                        height: 100%
        .headerCurso
            .boxHeader
                padding: 6rem 0 2rem
                .boxCircule
                    background: $redLight
                    border-radius: 50%
                    width: 50px
                    height: 50px
                    box-sizing: border-box
                    margin-right: .5rem
                    @media screen and(min-width: 1200px)
                        width: 60px
                        height: 60px
                .boxTitle
                    &-top
                        position: relative
                        top: 5px
                    h2
                        line-height: 1.15em
                        @media screen and(min-width: 1200px)
                            line-height: 1em
                    h1
                        text-align: left
</style>