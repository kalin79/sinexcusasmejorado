<template>
    <article class="homeSectionOne">
        <div class="container">
            <div class="boxHeader">
                <div class="boxSubTitle">
                    <h3>Sin excusas para construir</h3>
                </div>
                <div class="boxTitle">
                    <h2>La responsabilidad es de todos</h2>
                </div>
                <div class="boxDescription">
                    <p>Cuando de labores domésticas se trata recuerda que eso no depende solo de tu pareja, madre, hija u hermana. Esa labor es una tarea que nos corresponde a todos los habitantes de la casa. </p>
                    <p>¿Cómo repartes esas labores en tu hogar? ¿Es equitativo?</p>
                </div>
                <div class="boxButtom">
                    <nuxt-link to="#" class="btn-nuxt">
                        Leer
                    </nuxt-link>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
    .homeSectionOne
        background: white
        .boxHeader
            padding-bottom: 2.5rem
            background: white
        .boxSubTitle
            @extend %PaddingTophome
        .boxDescription
            padding-top: 1.5rem
            width: 75%
            margin: auto
            p
                margin-bottom: 1.5rem
        .boxButtom
            width: 75%
            margin: auto
            text-align: center
            // .btn-nuxt
            //     position: relative
            //     height: 39px
            //     width: 160px
            //     box-sizing: border-box
            //     @function restoh()
            //         @return -(39px - 2px)
            //     @function restov()
            //         @return (160px - 2px)
            //     &:before,
            //     &:after
            //         position: absolute
            //         content: ''
            //         left: -2px
            //         background: $blue
            //         transition: .5s all ease
                    
            //     &:before
            //         height: 2px
            //         bottom: -2px
            //         width: 0%
            //         left: 0
            //         box-shadow: 0 restoh() $blue
            //     &:after
            //         width: 2px
            //         height: 0%
            //         top: -2px
            //         box-shadow: restov() 0 $blue
            //     &:hover
            //         &:before
            //             width: calc(100% + 2px)
            //         &:after
            //             height: calc(100% + 2px)  
</style>