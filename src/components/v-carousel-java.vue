
<template>
  <div>
    <div id="body1">
      <div id="demo">
        <i
          style="
            cursor: pointer;
            <!-- background: lightblue no-repeat fixed center; -->
            font-style: initial;
            
          "
          v-on:click="show = !show"
          >Подробней</i
        >
        <transition name="slide-fade">
          <p v-if="show">
            <v-layout perehid>
              <div
                class="cover"
                style="background-image: url(path/to/user/image.jpg)"
              ></div>
              <v-flex>
                <v-img
                  style="height: 300px; width: 300px"
                  src="https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2FImage-1.jpg?alt=media&token=c74b8004-b703-4a0a-991a-12312c163ed6"
                  aspect-ratio="1.2"
                ></v-img>
              </v-flex>

              <v-flex xs8 sm8 offset-sm0>
                <v-card style="box-shadow: inherit">
                  <v-card-title primary-title style="text-align: left">
                    <div>
                      <h3
                        class="headline mb-1 ont-weight-black"
                        style="font-weight: 700"
                      >
                        Резюме
                      </h3>
                      <div style="font-size: 15px">{{ card_text }}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions style="float: right">
                    <v-btn
                      style="
                        font-size: 13px;
                        font-family: Segoe UI Italic;
                        background-color: #ffffff !important;
                        box-shadow: inherit;
                        text-indent: -7.910714em;
                        text-transform: revert;
                        letter-spacing: 0;
                      "
                      flat
                      color="orange"
                      >Read more
                    </v-btn>
                  </v-card-actions>
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
      "Неважно, будет это всего одна страница или более развернутое портфолио, сайт-резюме – это более персонализированная возможность поделиться информацией и продемонстрировать свои технические навыки. При этом использовать его могут представители всех профессий. Даже если у вас небольшой опыт, вы можете использовать сайт для эффектной демонстрации своих возможностей и качеств, чего просто невозможно сделать в обычном резюме.",
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