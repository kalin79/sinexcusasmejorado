<template>
    <div class="boxSliderNews">
        <div class="boxCarouselNews">
            <client-only>
                <carousel
                    :perPageCustom="[[300, 1]]" 
                    :autoplay="true" 
                    :autoplayTimeout=5000
                    :paginationPadding=10
                    :minSwipeDistance=20
                    :navigationEnabled="false"
                    :paginationEnabled="false"
                    :loop="true"
                    :mouse-drag="true"
                    :touchDrag="true"
                    
                >
                    <slide>
                        <div class="fullBoxImage">
                            <img src="~/assets/images/slider.jpg" alt="">
                        </div>
                    </slide>
                </carousel>
            </client-only>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang='sass'>

</style>