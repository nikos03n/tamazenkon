<template>
  <div>
    <v-card>
      <v-toolbar
        flat
        color="#050505"
        extended
        extension-height="50"
        dark
        overflow-hidden
      >
        <div>
          <v-toolbar style="width: 700px; height: 0px"
            ><v-spacer></v-spacer>Тамазенко Микола Васильович <br />
            (066)-725-62-51 nik.tam03@icloud.com</v-toolbar
          >
        </div>
      </v-toolbar>
      <v-tabs grow>
        <v-tab>
          <v-icon left> mdi-account </v-icon>
          Досвід роботи
        </v-tab>
        <v-tab>
          <v-icon left> mdi-lock </v-icon>
          Про мене
        </v-tab>
        <v-tab>
          <v-icon left> mdi-access-point </v-icon>
          Додаткова інформація
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-timeline>
                <v-timeline-item class="text-centre"
                  >з 2015 - оператор автоматичних ліній (біометричні паспорти та
                  і ін ) Поліграфкомбінат Україна.<vShowMoreDetailsCopy />
                </v-timeline-item>
                <v-timeline-item class="text-centre">
                  з 2011 - Торгівля. Менеджер відділу збуту на заводі (основна
                  група товарів вироби з дроту, сітка зварена і ін.),
                  Регіональний менеджер непродовольчих товарів (основна група
                  товарів пластикові ємності, будівельні матеріали, фільтра під
                  воду і ін.).<vShowMoreDetails />
                </v-timeline-item>
                <v-timeline-item class="text-centre"
                  >з 2006 - Держ. Службовець. Спеціаліст по виплаті (Управління
                  праці та соціального захисту населення), старший державний
                  податковий ревізор- інспектор відділу податкового контролю
                  юридичних осіб (Державна податкова інспекція), фахівець
                  (Управління сільського господарства
                  облдержадміністрація).</v-timeline-item
                >
                <v-timeline-item class="text-centre"
                  >з 1998 - Сільське господарство. Виконував обов'язки бригадира
                  в агородней бригаді. Вирощували помідори, огірки, цибуля та
                  ін. Овочі.</v-timeline-item
                >
                <v-timeline-item class="text-centre"
                  >з 1987 - Середня школа, музична школа (баян, болалайка,
                  гітара, шахи), Інститут</v-timeline-item
                >
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                Тамазенко Микола Васильович (066)-725-62-51
                nik.tam03@icloud.com, Дата народженння 01.10.1981, м. київ пров.
                балтійський <br />Освіта вища (економіст-фінансист) Посвідчення
                водія категорії В (маю легкове авто)<br />
                Одружений, маю двоє дітей.
              </p>

              <p>
                Рівень навичок роботи з ПК: адміністратор. Сайто будова c нуля
                та (на системі Джумла), html, css, Vue.js, JavaScript, mysql,
                Bootstrap, Microsoft Word, Excel, 1С, Github.com та ін.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p></p>

              <p class="mb-0">
                Володар якостей, таких як: <br />Чесність - говоримо правду і
                приймаємо її, довіряємо один одному. <br />Любов до справи - ми
                щасливі фанати справи, за яку взялися, отримуємо кайф.
                <br />Постійний розвиток - немає межі досконалості.
                Відповідальність і стабільність - це основа твого життя.
                Методичний аналітик - для тебе важлива мова цифр і грошей, у
                тебе добре виходить цифрувати результати роботи.
                nik.tam03@icloud.com 066-725-62-51
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <vHoverOff />
    <div class="wrapper">
      <div class="sliding-background">
        <div>
          <v-toolbar></v-toolbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHoverOff from "@/components/about/v-hover-off.vue";
import vShowMoreDetails from "@/components/about/v-show-more-details.vue";
import vShowMoreDetailsCopy from "@/components/about/v-show-more-details-copy.vue";

export default {
  name: "About",
  components: { vShowMoreDetails, vShowMoreDetailsCopy },

  props: {
    msg: String,
  },
  data: () => ({
    return: {},
  }),
  computed: {},
  methods: {},
};
</script>

<style scoped>
/* двигает изображение */
.wrapper {
  overflow: hidden;
}

.sliding-background {
  background: url("https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2Fice_screenshot_20210415-192406.png?alt=media&token=559b230d-dedb-4ba8-9193-16710d0b4f7c")
    repeat-x fixed;
  height: 0px;
  width: 5076px;
  animation: slide 60s linear infinite;
}

.v-toolbar__extension[data-v-039c5b43] {
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
  justify-content: center;
}
</style>