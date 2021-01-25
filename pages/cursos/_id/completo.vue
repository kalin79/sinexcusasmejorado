<template>
    <div class="boxCourseComplete">
        <div class="boxInsigniaComplete">
            <div class="d-flex justify-content-center">
                <div class="boxInsignniaImg">
                    <img src="~/assets/images/insignia.png" alt="">
                </div>
            </div>
        </div>
        <div class="boxDetailComplete">
            <div class="container">
                <div class="boxTitle">
                    <h1 class="text-grayDark">Curso completo</h1>
                </div>
                <div class="boxDescription">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
                <div class="boxButtomComplete">
                    <div class="d-flex justify-content-center align-items-center flex-column flex-lg-row">
                        <div class="boxButtom">
                            <a to="javascript:void(0)" target="_blank" class="btn-nuxt btn-link-complete">
                                DESCARGAR RECONOCIMIENTO
                            </a>
                        </div>
                        <div class="boxButtom">
                            <nuxt-link to="/cursos" class="btn-nuxt">
                                VOLVER A TODOS LOS CURSOS
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="boxSocialCourse">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="boxShare celeste">
                            <ShareNetwork
                                network="Twitter"
                                url="https://news.vuejs.org/issues/180"
                                title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                                hashtags="vuejs,vite,lili"
                                twitter-user="kalin,@putin"
                            >
                                <div class="d-flex justify-content-center align-items-center">
                                    <i class="icofont-twitter"></i> 
                                    <span>Twitter</span> 
                                </div>
                            </ShareNetwork>
                        </div>
                        <div class="boxShare azul">
                            <ShareNetwork
                                network="facebook"
                                url="https://news.vuejs.org/issues/180"
                                quote="The hot reload is so fast it\'s near instant. - Evan You"
                                hashtags="vuejs"
                                title="facebook"
                            >
                                <div class="d-flex justify-content-center align-items-center">
                                    <i class="icofont-facebook"></i> 
                                    <span>Like</span>
                                </div>
                            </ShareNetwork>
                        </div>
                        <div class="boxShare azuloscuro">
                            <ShareNetwork
                                network="LinkedIn"
                                title="LinkedIn"
                                url="https://news.vuejs.org/issues/180"
                            >
                                <div class="d-flex justify-content-center align-items-center">
                                    <i class="icofont-linkedin"></i>
                                    <span>Share</span>
                                </div>
                            </ShareNetwork>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.$root.$on('share_network_open', function (network, url) {
            event.preventDefault()
        })
    }
}
</script>
<style lang='sass'>
    .boxCourseComplete
        .boxInsignniaImg
            img
                width: 100px
                @media screen and (min-width: 1200px)
                    width: auto
        .boxSocialCourse
            padding: 2rem 0
            .boxShare
                line-height: 2rem
                padding: 0 1em
                margin: 0 .25em
                a
                    text-decoration: none
                i,
                span
                    color: white
                    font-size: 1.25rem
                span
                    @extend %uniLTStd
                    font-size: 1rem
                    position: relative
                    top: 2px
                    margin-left: .25rem 
                &.celeste
                    background: #4daae8
                &.azul
                    background: #425a93
                &.azuloscuro
                    background: #3579b1

        .boxButtomComplete
            .boxButtom
                width: 100%
                margin-bottom: 1rem
                @media screen and (min-width: 992px)
                    margin-left: .5rem
                    margin-right: .5rem
                    margin-bottom: 0
                    width: auto
                &:last-child
                    margin-bottom: 0rem
                a
                    cursor: pointer
                    width: 100%
                    padding: 0
                    text-align: center
                    @media screen and (min-width: 992px)
                        padding: 0 4.5em
                        width: auto
        .boxTitle
            padding-bottom: 2rem
        .boxDescription
            padding-bottom: 2rem
            @media screen and (min-width: 992px)
                width: 60%
                margin: auto
        .boxInsigniaComplete
            padding-top: 3rem
            padding-bottom: 2rem
</style>