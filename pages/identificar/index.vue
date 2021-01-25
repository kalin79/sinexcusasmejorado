<template>
    <div class="boxNews">
        <section class="boxBanner">
            <div class="container">
                <div class="boxSlider d-flex justify-content-center flex-column align-items-center">
                    <div class="boxTitle">
                        <h1>Sin excusas para reconocer</h1>
                    </div>
                    <div class="separate"></div>
                    <div class="boxDescription">
                        <p>Para fomentar una cultura de equidad necesitamos identicar y derribar los micromachismos que se esconden en nuestro día a día. Generemos el cambio.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="boxListNews">
            <div class="container">
                <article class="d-flex justify-content-center justify-content-lg-start align-items-center  align-items-lg-stretch flex-column flex-lg-row">
                    <div class="newsContent">
                        <img src="~/assets/images/card1.jpg" class="card-img" alt="Card title">
                    </div>
                    <div class="newsContent">
                        <div class="card d-flex justify-content-center align-items-center">
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
                    </div>
                </article>
                <article class="d-flex justify-content-center justify-content-lg-start align-items-center  align-items-lg-stretch flex-column flex-lg-row">
                    <div class="newsContent">
                        <img src="~/assets/images/card1.jpg" class="card-img" alt="Card title">
                    </div>
                    <div class="newsContent">
                        <div class="card d-flex justify-content-center align-items-center">
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
</template>
<script>
import IconFlecha from '@/components/Svg/IconFlecha'
export default {
    components: {
        IconFlecha
    },
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