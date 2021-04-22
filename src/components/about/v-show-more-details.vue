
<template>
  <div>
    <div id="body1">
      <div id="demo" class="text-centre">
        <v-btn
          hide-on-scroll
          xLarge:false
          xSmall
          style="cursor: pointer"
          v-on:click="show = !show"
          >Детальніше</v-btn
        >
        <transition name="slide-fade">
          <p v-if="show">
            <v-layout perehid>
              <v-flex xs12 sm12 offset-sm0>
                <v-card style="box-shadow: inherit">
                  <v-card-title
                    primary-title
                    style="text-align: centre; margin-top: 10px"
                  >
                    <div>
                      <h2
                        class="headline mb-1 ont-weight-black"
                        style="font-weight: 700"
                      >
                        Резюме
                      </h2>
                      <h4
                        style="
                          font-size: 12px;
                          line-height: 1rem;
                          word-break: break-all;
                        "
                      >
                        {{ card_text }}
                      </h4>
                    </div>
                  </v-card-title>
                  <v-card-actions style="float: right"> </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    card_text:
      "У процеси торгівлі я створював сайти на движку Joomla для збільшення продажів. Це були сайти, будівельної [тематики для утеплення будинків та продажу будівельних матеріалів (суміші будівельні, пінопласт) та ін. Для утеплення. Також були сайти продажу металевоі сітки зварноі в картах і в рулонах, пластикових ємностей і фільтрів під воду (зворотний осмос та ін. Після, почав захоплюватися писати сайти з нуля і на vue.js",
  }),
};
</script>
<style scoped>
v-icon notranslate mdi mdi-chevron-left theme--dark {
  font-size: 36px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
#body1 {
  background-color: #cccccc00;
  width: center;
}
</style>