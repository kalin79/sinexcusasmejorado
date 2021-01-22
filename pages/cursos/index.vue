<template>
    <div class="boxCursos">
        <div class="boxInfo">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <div class="boxTitle">
                          <h1>Título 1</h1>
                        </div>
                        <div class="separate"></div>
                        <div class="boxDescription">
                          <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                          </p>
                          <p>
                              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                          </p>
                          <p>
                              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                          </p>
                          <p>
                              Et iusto odio volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                          </p>
                        </div>
                        <div class="boxGalleyVideo">
                            <client-only>
                                <carousel
                                    :perPageCustom="[[300, 1]]" 
                                    :autoplay="true" 
                                    :autoplayTimeout=5000
                                    :paginationPadding=10
                                    :minSwipeDistance=20
                                    :navigationEnabled="false"
                                    :paginationEnabled="true"
                                    :loop="true"
                                    :mouse-drag="true"
                                    :touchDrag="true"
                                    
                                >
                                  <slide>
                                    <div class="boxVideoSlider">
                                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qTI0SygtA14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                  </slide>
                                  <slide>
                                    <div class="boxVideoSlider">
                                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qTI0SygtA14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                  </slide>
                                </carousel>
                            </client-only>
                        </div>
                        <div class="boxCuestionario">
                          <div class="boxTitle">
                            <h2>Cuestionario</h2>
                          </div>

                          <div class="boxQuestion">
                            <div class="tabs">
                              <div class="tab">
                                <!-- <input type="radio" id="rd1" name="rd"> -->
                                <label class="tab-label active" @click="accordion(1, $event)">
                                  Lorem ipsum dolor sit amet
                                  <icon-flecha-two />
                                </label>
                                <div class="tab-content active" id="tabContent1">
                                  <div class="boxDescription">
                                    <p>
                                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p>
                                      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.
                                    </p>
                                    <p>
                                      Et iusto odio volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="tab">
                                <!-- <input type="radio" id="rd2" name="rd"> -->
                                <label class="tab-label" @click="accordion(2, $event)">
                                  Item 2
                                  <icon-flecha-two />
                                </label>
                                <div class="tab-content" id="tabContent2">
                                  <div class="boxDescription">
                                    <p>
                                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <!-- <div class="tab">
                                <input type="radio" id="rd3" name="rd">
                                <label for="rd3" class="tab-close">Close others &times;</label>
                              </div> -->
                            </div>
                          </div>



                        </div>
                    </div>
                    <div class="col-4">2</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import IconFlechaTwo from '@/components/Svg/IconFlechaTwo'
/*
    Traemos la libreria de manera local en donde lo vamos a trabajar
*/
import {gsap} from "gsap/dist/gsap"
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)
export default {
  components: {
    IconFlechaTwo
  },
  data () {
    return {

    }
  },
  mounted(){
    // this.accordion()
  },
  methods: {
    accordion(index, event) {
      const tabAll = $('.tab-content')
      const boxTab = $('#tabContent'+index)
      if (!(boxTab.hasClass('active'))) {
        tabAll.removeClass('active')
        $('.tab-label').removeClass('active')
        boxTab.addClass('active')
        $(event.target).addClass('active')
        // setTimeout(function(){ 
        //   boxTab.addClass('active')
        // }, 1000)
      }
      
      
    }
  }
}
</script>
<style lang="sass">
    .boxCursos
        .boxGalleyVideo
          margin: 3rem 0
        .separate
          width: 10px
          height: 2rem
        .boxDescription
          p
            text-align: left
            margin-bottom: 1rem
</style>