<template>
    <div class="boxNews">
        <section class="boxBanner">
            <div class="container">
                <div class="boxSlider d-flex justify-content-center flex-column align-items-center">
                    <div class="boxTitle">
                        <h1>Sin excusas {{ data.name }}</h1>
                    </div>
                    <div class="separate"></div>
                    <div class="boxDescription" v-html="data.description"></div>
                </div>
            </div>
        </section>
        <section class="boxListNews">
            <div class="container">
                <!-- {{ data.articles }} -->
                <article v-for="(noticia, key, index) in noticias" :key="index">
                    <div class="d-flex justify-content-center justify-content-lg-start align-items-center  align-items-lg-stretch flex-column flex-lg-row">
                        <div class="newsContent">
                            <img :src="noticia.page_image" class="card-img" :alt="noticia.title">
                        </div>
                        <div class="newsContent">
                            <div class="card d-flex justify-content-center align-items-center">
                                <div class="card-body">
                                    <h5 class="card-title">{{ noticia.title }}</h5>
                                    <div class="boxDescription">
                                        <p>
                                            {{ noticia.resume }}
                                        </p>
                                    </div>
                                    
                                    <div class="boxButtom">
                                        <a :href="'/avanzar/'+noticia.slug" class="btn-nuxt">
                                            leer
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                
            </div>
        </section>
        <div class="boxPagination">
            <div class="container">
                <div class="d-flex justify-content-center align-items-center">
                    <a href="javascript:void(0)" class="boxFlecha flecha-prev">
                        <icon-flecha />
                    </a>
                    <a href="javascript:void(0)" :class="{ active: page===pagination.current_page }" v-for="(page, key, index) in pagination.pages" :key="index">
                        <p>{{ page }}</p>
                    </a>
                    <a href="javascript:void(0)" class="boxFlecha flecha-next">
                        <icon-flecha />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IconFlecha from '@/components/Svg/IconFlecha'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    middleware: 'avanzar',
    data() {
        return {
            data: [],
            noticias: [],
            pagination: {
                current_page: 1,
                last_page: 1,
                to: 1,
                total: 1,
                pages: [],
                per_page: 1,
            },
        }
    },
    components: {
        IconFlecha
    },
    computed: {
        ...mapState('articles/articles',['dataArticles']),
    },
    methods: {
        // viewArticle(slug, id){
        //     console.log(slug)
        //     console.log(id)
        // },
    },
    mounted(){
        // console.log(this.dataArticles)
        this.data = this.dataArticles.articles
        this.noticias = this.data.articles.data
        console.log(this.data.articles)
        this.pagination.current_page = this.data.articles.current_page
        this.pagination.last_page = this.data.articles.last_page
        this.pagination.to = this.data.articles.to
        this.pagination.total = this.data.articles.total
        this.pagination.from = this.data.articles.from
        this.pagination.per_page = this.data.articles.per_page
        let numberOfPages = Math.ceil(this.pagination.total / this.pagination.per_page);
        console.log(numberOfPages)
        for (let index = this.pagination.from; index <= numberOfPages; index++){
            this.pagination.pages.push(index);
        }
        console.log(this.pagination.pages.slice())

    } 
}
</script>
<style lang="sass">
    .boxNews
        .boxSlider
            .boxDescription
                width: 60%
        .separate
            width: 10px
            height: 1.75rem
        .boxTitle
            h1
                color: $grayDark
</style>