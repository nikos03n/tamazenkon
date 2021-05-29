<template>
  <div max-width="1020">
    <CoreAppBar />

    <div>
      <v-card class="mx-auto" max-width="1020" tile>
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card to="/" :elevation="hover ? 24 : 6" class="mx-auto pa-6">
              <v-img
                height="100%"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              >
                <v-card-text>
                  <div>
                    <v-card-text
                      style="margin-top: 60px"
                      class="title blak--text"
                    >
                      <div class="home1"></div>
                      Тамазенко Микола Васильович <br />
                      (066)-725-62-51
                    </v-card-text>
                  </div>
                </v-card-text></v-img
              >
            </v-card>
          </template>
        </v-hover>
        <div></div>
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
            <v-card flat elevation="8">
              <v-card-text>
                <v-timeline
                  ><v-alert elevation="14" class="hidden-sm-and-down">
                    <v-timeline-item
                      v-for="(year, i) in years"
                      :key="i"
                      :color="year.color"
                      small
                      id="1"
                      class="text-centre py-4"
                    >
                      <template v-slot:opposite>
                        <span
                          :class="`headline font-weight-bold ${year.color}--text `"
                          v-text="year.year"
                        ></span>
                      </template>
                      <h2
                        :class="`headline font-weight-medium mb-4 ${year.color}--text`"
                      >
                        Виробництво
                      </h2>
                      <h4>
                        Оператор автоматичних ліній (біометричні паспорти та ін
                        ) Поліграфкомбінат Україна.<vShowMoreDetailsCopy />
                      </h4> </v-timeline-item
                  ></v-alert>

                  <v-alert elevation="14" class="hidden-md-and-up">
                    <v-card
                      v-for="(year, i) in years"
                      :key="i"
                      :color="year.color"
                      small
                      id="1"
                      class="text-centre py-4"
                    >
                      <template v-slot:opposite>
                        <span
                          :class="`headline font-weight-bold ${year.color}--text `"
                          v-text="year.year"
                        ></span>
                      </template>
                      <h2
                        :class="`headline font-weight-medium mb-4 ${year.color}--text`"
                      >
                        Виробництво з 2015
                      </h2>
                      <h4>
                        Оператор автоматичних ліній (біометричні паспорти та ін
                        ) Поліграфкомбінат Україна.<vShowMoreDetailsCopy />
                      </h4> </v-card
                  ></v-alert>

                  <v-alert elevation="14" class="hidden-sm-and-down">
                    <v-timeline-item
                      v-for="(year, i) in years1"
                      :key="i"
                      :color="year.color"
                      small
                      class="text-centre py-4"
                    >
                      <template v-slot:opposite>
                        <span
                          :class="`headline font-weight-bold ${year.color}--text`"
                          v-text="year.year"
                        ></span>
                      </template>
                      <h2
                        :class="`headline font-weight-bold mb-4 ${year.color}--text`"
                      >
                        Торгівля
                      </h2>
                      <h4>
                        - Менеджер відділу збуту на заводі ПП "Промисловий
                        альянс " (основна група товарів вироби з дроту, сітка
                        зварена та ін.).<br />
                        - Регіональний менеджер непродовольчих товарів (основна
                        група товарів пластикові ємності, будівельні матеріали,
                        фільтра під воду та ін.).<vShowMoreDetails />
                      </h4> </v-timeline-item
                  ></v-alert>

                  <v-alert elevation="14" class="hidden-md-and-up">
                    <v-card
                      v-for="(year, i) in years1"
                      :key="i"
                      :color="year.color"
                      small
                      class="text-centre py-4"
                    >
                      <template v-slot:opposite>
                        <span
                          :class="`headline font-weight-bold ${year.color}--text`"
                          v-text="year.year"
                        ></span>
                      </template>
                      <h2
                        :class="`headline font-weight-bold mb-4 ${year.color}--text`"
                      >
                        Торгівля з 2011
                      </h2>
                      <h4>
                        - Менеджер відділу збуту на заводі ПП "Промисловий
                        альянс " (основна група товарів вироби з дроту, сітка
                        зварена та ін.).<br />
                        - Регіональний менеджер непродовольчих товарів (основна
                        група товарів пластикові ємності, будівельні матеріали,
                        фільтра під воду та ін.).<vShowMoreDetails />
                      </h4> </v-card
                  ></v-alert>

                  <v-alert elevation="14" class="hidden-sm-and-down">
                    <v-timeline-item
                      v-for="(year, i) in years2"
                      :key="i"
                      :color="year.color"
                      small
                      class="text-centre py-4"
                    >
                      <template v-slot:opposite>
                        <span
                          :class="`headline font-weight-bold ${year.color}--text`"
                          v-text="year.year"
                        ></span>
                      </template>
                      <h2
                        :class="`headline font-weight-bold mb-4 ${year.color}--text`"
                      >
                        Державна служба
                      </h2>
                      <h4>
                        - Фахівець (Управління сільського господарства Донецької
                        облдержадміністрації).
                        <br />
                        - Старший державний податковий ревізор- інспектор
                        відділу податкового контролю юридичних осіб (Державна
                        податкова інспекція). <br />
                        - Спеціаліст по виплаті (Управління праці та соціального
                        захисту населення).
                        <vHoverOff />
                      </h4> </v-timeline-item
                  ></v-alert>

                  <v-alert elevation="14" class="hidden-md-and-up">
                    <v-card
                      v-for="(year, i) in years2"
                      :key="i"
                      :color="year.color"
                      small
                      class="text-centre py-4"
                    >
                      <template v-slot:opposite>
                        <span
                          :class="`headline font-weight-bold ${year.color}--text`"
                          v-text="year.year"
                        ></span>
                      </template>
                      <h2
                        :class="`headline font-weight-bold mb-4 ${year.color}--text`"
                      >
                        Державна служба з 2006
                      </h2>
                      <h4>
                        - Фахівець (Управління сільського господарства Донецької
                        облдержадміністрації).
                        <br />
                        - Старший державний податковий ревізор- інспектор
                        відділу податкового контролю юридичних осіб (Державна
                        податкова інспекція). <br />
                        - Спеціаліст по виплаті (Управління праці та соціального
                        захисту населення).
                        <vHoverOff />
                      </h4> </v-card
                  ></v-alert>

                  <v-alert elevation="14" class="hidden-sm-and-down">
                    <v-timeline-item
                      v-for="(year, i) in years3"
                      :key="i"
                      :color="year.color"
                      small
                      class="text-centre py-4"
                    >
                      <template v-slot:opposite>
                        <span
                          :class="`headline font-weight-bold ${year.color}--text`"
                          v-text="year.year"
                        ></span>
                      </template>
                      <h2
                        :class="`headline font-weight-bold mb-4 ${year.color}--text`"
                      >
                        Сільське господарство
                      </h2>
                      <h4>
                        Виконував обов'язки бригадира в агородней бригаді.
                        Вирощували помідори, огірки, цибуля та ін. овочі.
                      </h4>
                    </v-timeline-item></v-alert
                  >

                  <v-alert elevation="14" class="hidden-md-and-up">
                    <v-card
                      v-for="(year, i) in years3"
                      :key="i"
                      :color="year.color"
                      small
                      class="text-centre py-4"
                    >
                      <template v-slot:opposite>
                        <span
                          :class="`headline font-weight-bold ${year.color}--text`"
                          v-text="year.year"
                        ></span>
                      </template>
                      <h2
                        :class="`headline font-weight-bold mb-4 ${year.color}--text`"
                      >
                        Сільське господарство з 1998
                      </h2>
                      <h4>
                        Виконував обов'язки бригадира в агородней бригаді.
                        Вирощували помідори, огірки, цибуля та ін. овочі.
                      </h4>
                    </v-card></v-alert
                  >
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-alert elevation="14">
                  <h4>
                    Тамазенко Микола Васильович народився 01.10.1981 у с.Бугас
                    обл.Донецька під м.Маріуполь в сімьї Греків Приазовья
                    (066)-725-62-51, nik.tam03@icloud.com м. Київ пров.
                    Балтійський (Куреневка)
                    <br />Освіта вища (економіст-фінансист) Посвідчення водія
                    категорії В (маю легкове авто)<br />
                    Одружений, маю двоє дітей.
                  </h4>

                  <h4>
                    Рівень навичок роботи з ПК: адміністратор. Сайто будова c
                    нуля та (на системі Джумла), html, css, Vue.js, JavaScript,
                    mysql, Bootstrap, Microsoft Word, Excel (таблицы, формулы),
                    1С, Github.com та ін.
                  </h4></v-alert
                >
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-alert elevation="14">
                  <p></p>

                  <h4 class="mb-0">
                    Володар якостей, таких як:
                    <br />Чесність - говоримо правду і приймаємо її, довіряємо
                    один одному. <br />Любов до справи - ми щасливі фанати
                    справи, за яку взялися, отримуємо кайф. <br />Постійний
                    розвиток - немає межі досконалості. <br />Відповідальність і
                    стабільність - це основа мого життя. <br />
                    Методичний аналітик - для мене важлива мова цифр, у мене
                    добре виходить цифрувати результати роботи.
                  </h4>
                </v-alert>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </div>
    <!-- <v-carousel
      ><v-carousel-item v-for="ad in promoAds" :key="ad.id" :src="ad.imageSrc">
        <div class="car-link">
          <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
        </div>
        <h2 v-for="te in textAds" :key="te.id">{{ te.text }}</h2>
      </v-carousel-item></v-carousel
    >
    <div>
      <h2 v-for="te in textAds" :key="te.id">{{ te.text }}</h2>
    </div> -->
  </div>
</template>

<script>
import vHoverOff from "@/components/about/v-hover-off.vue";
import vShowMoreDetails from "@/components/about/v-show-more-details.vue";
import vShowMoreDetailsCopy from "@/components/about/v-show-more-details-copy.vue";
import CoreAppBar from "@/components/core/AppBar.vue";

export default {
  name: "About",
  components: { vShowMoreDetails, vShowMoreDetailsCopy, CoreAppBar, vHoverOff },

  props: {
    msg: String,
  },
  data: () => ({
    return: {},
    years: [
      {
        id: "100px",
        color1: "rgb(102 102 102)",
        year: "з 2015",
      },
    ],
    years1: [
      {
        id: 2,
        color1: "green",
        year: "з 2011 ",
      },
    ],
    years2: [
      {
        id: 3,
        color1: "pink",
        year: "з 2006 ",
      },
    ],
    years3: [
      {
        id: 4,
        color1: "orange",
        year: "з 1998  ",
      },
    ],
    years4: [
      {
        id: 5,
        color: "amber",
        year: "з 1987 ",
      },
    ],
  }),
  computed: {
    promoAds() {
      return this.$store.getters.promoAds;
    },
    ads() {
      return this.$store.getters.ads;
    },
    textAds() {
      return this.$store.getters.textAds;
    },
  },
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

.home1 {
  background: url("https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2FImage-1.jpg?alt=media&token=c74b8004-b703-4a0a-991a-12312c163ed6")
    no-repeat;
  background-size: 150px;
  padding-bottom: 150px;
  background-position: 50%;
  border-radius: 50%;
}
.home3 {
  background: url("https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/icon%2Fice_screenshot_20210421-092705.png?alt=media&token=c2047817-6f83-46a3-aa1a-ce4fd4ba8722")
    no-repeat;
}
/* .home33 {
  background: #868686;
} */
.home2 {
  color: #ffffff;
  text-align: center;
  border: 1px solid rgb(57, 196, 196);
  border: 200px;
  border-top: 300px;
  background-size: 300px;
  padding-bottom: 250px;
  height: 200px;
}
/* .v-timeline .theme--light {
  right: 200px;
} */
/* @media screen and (max-width: 500px) {
  .v-timeline .theme--light {
    right: 50px;
  }
} */
</style>