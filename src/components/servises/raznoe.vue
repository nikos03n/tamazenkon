<template>
  <div max-width="1020">
    <CoreAppBar />

    <div>
      <v-card
        class="mx-auto home33"
        max-width="1020"
        tile
        class0="v-timeline-item__inner-dot"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-6">
              <v-img
                height="100%"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              >
                <v-card-text>
                  <div>
                    <v-card-text class="title white--text">
                      <div class="home1"></div>
                      Тамазенко Микола Васильович <br />
                      (066)-725-62-51 nik.tam03@icloud.com
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
                  ><v-hover>
                    <template v-slot:default="{ hover }">
                      <v-card :elevation="hover ? 24 : 2" class="mx-auto pa-6">
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
                            Оператор автоматичних ліній (біометричні паспорти та
                            і ін ) Поліграфкомбінат Україна.
                          </h4>
                          <vShowMoreDetailsCopy />
                        </v-timeline-item>
                      </v-card>
                    </template>
                  </v-hover>
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-card :elevation="hover ? 24 : 2" class="mx-auto pa-6">
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
                            Менеджер відділу збуту на заводі ПП "Промисловий
                            альянс 2012" (основна група товарів вироби з дроту,
                            сітка зварена і ін.), Регіональний менеджер
                            непродовольчих товарів (основна група товарів
                            пластикові ємності, будівельні матеріали, фільтра
                            під воду і ін.).
                          </h4>
                          <vShowMoreDetails />
                        </v-timeline-item>
                      </v-card>
                    </template>
                  </v-hover>
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-card :elevation="hover ? 24 : 2" class="mx-auto pa-6">
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
                            Cтарший державний податковий ревізор- інспектор
                            відділу податкового контролю юридичних осіб
                            (Державна податкова інспекція), фахівець (Управління
                            сільського господарства облдержадміністрація),
                            cпеціаліст по виплаті (Управління праці та
                            соціального захисту населення) .
                          </h4>
                        </v-timeline-item>
                      </v-card>
                    </template>
                  </v-hover>
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-card :elevation="hover ? 24 : 2" class="mx-auto pa-6">
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
                        </v-timeline-item>
                      </v-card>
                    </template>
                  </v-hover>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Тамазенко Микола Васильович (066)-725-62-51
                  nik.tam03@icloud.com, Дата народженння 01.10.1981, м. київ
                  пров. балтійський <br />Освіта вища (економіст-фінансист)
                  Посвідчення водія категорії В (маю легкове авто)<br />
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
                  приймаємо її, довіряємо один одному. <br />Любов до справи -
                  ми щасливі фанати справи, за яку взялися, отримуємо кайф.
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
    </div>
  </div>
</template>

<script>
import vHoverOff from "@/components/about/v-hover-off.vue";
import vShowMoreDetails from "@/components/about/v-show-more-details.vue";
import vShowMoreDetailsCopy from "@/components/about/v-show-more-details-copy.vue";
import CoreAppBar from "@/components/core/AppBar.vue";

export default {
  name: "About",
  components: { vShowMoreDetails, vShowMoreDetailsCopy, CoreAppBar },

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
.home33 {
  background: #868686;
}
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
</style>