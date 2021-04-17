<template>
  <div>
    <v-layout perehid>
      <div
        class="cover"
        style="background-image: url(path/to/user/image.jpg)"
      ></div>
      <dir>
        <v-img
          style="
            border-radius: 50%;
            display: block;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            center
          "
          src="https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2FImage-1.jpg?alt=media&token=c74b8004-b703-4a0a-991a-12312c163ed6"
          aspect-ratio="1.2"
        ></v-img>
      </dir>

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
              <div style="font-family: Segoe UI Italic">{{ card_text }}</div>
            </div>
          </v-card-title>
          <v-card-actions style="float: right"> </v-card-actions>

          <v-btn to="/About">
            <span>Детальніше</span>
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- <v-card style="box-shadow: inherit; margin-bottom: 10px">
      <v-text-no-wrap class11="text-sm-left" style="font-size: 23px"
        ><spane style="color: #000000" ></spane> Детальніше</v-text-no-wrap
      >
    </v-card> -->
  </div>
</template>
<script>
export default {
  components: {},
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: () => ({
    value: 1,
    card_text:
      "Неважно, будет это всего одна страница или более развернутое портфолио, сайт-резюме – это более персонализированная возможность поделиться информацией и продемонстрировать свои технические навыки (сайт выполнен средствами vue.js). При этом использовать его могут представители всех профессий. Даже если у вас небольшой опыт, вы можете использовать сайт для эффектной демонстрации своих возможностей и качеств, чего просто невозможно сделать в обычном резюме.",
  }),
};
</script>
<style scoped>
.qwer {
  background-color: #f5f5f5;
}

/*Responsive*/

/* 992px - 1200px */
@media screen and (max-width: 1300px) {
}

/* 768px - 992px */
@media screen and (max-width: 992px) {
  .perehid {
    background-size: 100%;
    flex-direction: column;
    width: 100%;
    padding-right: 0px;
    max-width: 400%;
  }
  .flex.sm4.otdel {
    flex-basis: 40%;
    max-width: 100%;
  }
}

/* 576px - 768px */
@media screen and (max-width: 768px) {
}
/* 320px - 576px */
@media screen and (max-width: 576px) {
}

@media (min-width: 0) {
  .flex.xs8 {
    flex-grow: 0;
    max-width: 100.666667%;
  }
}
</style>
