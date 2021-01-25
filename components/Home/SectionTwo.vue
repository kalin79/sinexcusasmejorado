<template>
    <article class="homeSectionTwo">
        <div class="container">
            <div class="boxSubTitle animationPing">
                <h3>Sin excusas {{ dataTwo.name }}</h3>
            </div>
            <div class="boxSliderArticles animationPing">
                <client-only>
                    <carousel
                        :perPageCustom="[[300, 1], [992, 2]]" 
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
                        <slide v-for="(noticia, key, index) in dataTwo.articles" :key="index">
                            <div class="card">
                                <img :src="noticia.page_image" class="card-img" :alt="noticia.title">
                                <div class="card-body">
                                    <h5 class="card-title">{{ noticia.title }}</h5>
                                    <div class="boxDescription">
                                        <p>
                                            {{ noticia.resume }}
                                        </p>
                                    </div>
                                    
                                    <div class="boxButtom">
                                        <nuxt-link :to="'/identificar/'+noticia.slug" class="btn-nuxt">
                                            leer
                                        </nuxt-link>
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
    props: ['dataTwo'],
}
</script>
<style lang="sass">
    .homeSectionTwo
        .boxSliderArticles
            padding: 2.5rem 0 1.5rem
        .boxButtom
            padding-top: 1.75rem
        .card
            margin: .5rem
            padding-bottom: 1rem
            height: 100%
            .card-body
                text-align: center
                padding-top: 2rem 
                // .boxDescription
                //     height: 100px
                //     overflow: hidden
                //     border: 1px solid red
        .boxSubTitle
            @extend %PaddingTophome
</style>