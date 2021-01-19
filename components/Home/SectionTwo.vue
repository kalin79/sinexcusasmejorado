<template>
    <article class="homeSectionTwo">
        <div class="container">
            <div class="boxSubTitle animationPing">
                <h3>Sin excusas para reconocer</h3>
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
                        <slide>
                            <div class="card">
                                <img src="~/assets/images/card1.jpg" class="card-img" alt="Card title">
                                <div class="card-body">
                                    <h5 class="card-title">El camarero y la cuenta</h5>
                                    <div class="boxDescription">
                                        <p>
                                            ¿Te ha pasado que el camarero dice "La cuenta señor", a pesar de que fue una mujer quien la pidió?
                                        </p>
                                    </div>
                                    
                                    <div class="boxButtom">
                                        <nuxt-link to="#" class="btn-nuxt">
                                            leer
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="card">
                                <img src="~/assets/images/card2.jpg" class="card-img" alt="Card title">
                                <div class="card-body">
                                    <h5 class="card-title">El camarero y la cuenta</h5>
                                    <div class="boxDescription">
                                        <p>
                                            ¿Te ha pasado que el camarero dice "La cuenta señor", a pesar de que fue una mujer quien la pidió?
                                        </p>
                                    </div>
                                    
                                    <div class="boxButtom">
                                        <nuxt-link to="#" class="btn-nuxt">
                                            leer
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="card">
                                <img src="~/assets/images/card2.jpg" class="card-img" alt="Card title">
                                <div class="card-body">
                                    <h5 class="card-title">El camarero y la cuenta</h5>
                                    <div class="boxDescription">
                                        <p>
                                            ¿Te ha pasado que el camarero dice "La cuenta señor", a pesar de que fue una mujer quien la pidió?
                                        </p>
                                    </div>
                                    
                                    <div class="boxButtom">
                                        <nuxt-link to="#" class="btn-nuxt">
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