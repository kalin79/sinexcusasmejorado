<template>
    <article class="homeSectionFour">
        <div class="container">
            <div class="boxSubTitle">
                <h3>Sin excusas {{ dataFour.name }}</h3>
            </div>
            <div class="boxSliderArticles">
                <client-only>
                    <carousel
                        :perPageCustom="[[300, 1]]" 
                        :autoplay="true" 
                        :autoplayTimeout=5000
                        :paginationPadding=10
                        :minSwipeDistance=20
                        :navigationEnabled="true"
                        :paginationEnabled="false"
                        :loop="false"
                        :mouse-drag="true"
                        :touchDrag="true"
                    >
                        <slide v-for="(noticia, key, index) in dataFour.articles" :key="index">
                            <div class="card">
                                <div class="d-flex justify-content-start flex-lg-row flex-column align-items-stretch">
                                    <div class="cardBoxImages">
                                        <img :src="noticia.page_image" class="card-img" :alt="noticia.title">
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{{ noticia.title }}</h5>
                                        <div class="boxDescription">
                                            <p>
                                                {{ noticia.resume }}
                                            </p>
                                        </div>
                                        
                                        <div class="boxButtom">
                                            <nuxt-link :to="'/avanzar/'+noticia.slug" class="btn-nuxt">
                                                Súmate
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </slide>
                        
                    </carousel>
                </client-only>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    props: ['dataFour'],
}
</script>
<style lang="sass">
    .homeSectionFour
        .boxSliderArticles
            padding: 2.5rem 0 3.5rem
        .boxButtom
            padding-top: 1.75rem
        .cardBoxImages,
        .card-body
            width: 100%
            @media screen and (min-width: 992px)
                width: 50%
        .card
            margin: .5rem
            .cardBoxImages
                height: auto
                @media screen and (min-width: 992px)
                    height: 350px
                @media screen and (min-width: 1200px)
                    height: 450px
                img
                    object-fit: cover
                    width: 100%
                    height: 100%
            .card-body
                text-align: center
                padding-top: 2rem
                padding-bottom: 2rem
                @media screen and (min-width: 992px)
                    padding-top: 4rem
                    padding-bottom: 0rem
                .boxDescription
                    p
                        font-size: 14px
                        @media screen and (min-width: 992px)
                            font-size: 18px
                        @media screen and (min-width: 1200px)
                            font-size: 26px
                .card-title
                    @extend %uniLTStd
                    font-size: 25px
                    line-height: 1em
                    @media screen and (min-width: 992px)
                        font-size: 40px
                    @media screen and (min-width: 1200px)
                        font-size: 50px
                
        .boxSubTitle
            @extend %PaddingTophome
</style>