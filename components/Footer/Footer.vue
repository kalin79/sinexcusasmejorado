<template>
    <footer class="footerMain">
        <div class="container">
            <div class="d-flex align-items-center justify-content-center">
                <div class="boxLogo">
                    <img src="@/assets/images/logo.svg" alt="Sin Excusas">
                </div>
            </div>
            <div class="separate"></div>
            <div class="d-flex align-items-center justify-content-center">
                <div class="boxTitleFooter d-flex align-items-center justify-content-start">
                    <h2>UN SITIO CREADO POR </h2>
                    <div class="boxLogoEnel">
                        <img src="@/assets/images/enel.svg" alt="Sin Excusas">
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <div class="boxDescriptionFooter">
                    <p>Todos los derechos reservados.</p>
                </div>
            </div>
            <div class="separate"></div>
            <div class="d-flex align-items-center justify-content-center">
                <div class="boxLink">
                    <nuxt-link to="#" class="btn-nuxt-link">
                        Políticas de cookies
                    </nuxt-link>
                </div>
                <div class="separate-link"></div>
                <div class="boxLink">
                    <nuxt-link to="#" class="btn-nuxt-link">
                        Políticas de privacidad
                    </nuxt-link>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="sass">
    .footerMain
        background: white
        padding: 2rem 0 1rem
        .boxLink
            margin: 0 .5rem
        .separate
            width: 100%
            height: 1rem
        .separate-link
            height: .75rem
        .boxLogoEnel
            margin-left: .25rem
            img
                width: 50px
                vertical-align: top
        .boxLogo
            img
                width: 150px
</style>