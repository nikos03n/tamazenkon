<template>
  <div
    style="
      background: lightblue
        url('https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2FImage-1.jpg?alt=media&token=c74b8004-b703-4a0a-991a-12312c163ed6')
        no-repeat fixed center;
    "
  >
    <v-card>
      <v-toolbar
        flat
        color="#1976d2"
        extended
        extension-height="50"
        dark
        overflow-hidden
      >
        <div>
          <v-toolbar style="width: 700px; height: 0px"
            >Тамазенко Микола Васильович</v-toolbar
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
                <v-timeline-item
                  >з 2015 - оператор автоматичних ліній (біометричні паспорти)
                  Поліграфкомбінат Україна.
                </v-timeline-item>
                <v-timeline-item class="text-right">
                  з 2011 - Торгівля. Менеджер відділу збуту на заводі (основна
                  група товарів вироби з дроту, сітка зварена і ін.),
                  Регіональний менеджер непродовольчих товарів (основна група
                  товарів пластикові ємності, будівельні матеріали, фільтра під
                  воду і ін.).
                </v-timeline-item>
                <v-timeline-item
                  >з 2006 - Держ. Службовець. Спеціаліст по виплаті (Управління
                  праці та соціального захисту населення), старший державний
                  податковий ревізор- інспектор відділу податкового контролю
                  юридичних осіб (Державна податкова інспекція), фахівець
                  (Управління сільського господарства
                  облдержадміністрація).</v-timeline-item
                >
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                aliquam libero, non adipiscing dolor urna a orci. Curabitur
                ligula sapien, tincidunt non, euismod vitae, posuere imperdiet,
                leo. Nunc sed turpis.
              </p>

              <p>
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque
                egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                id tortor. Proin viverra, ligula sit amet ultrices semper,
                ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                hac habitasse platea dictumst. Fusce ac felis sit amet ligula
                pharetra condimentum.
              </p>

              <p>
                Sed consequat, leo eget bibendum sodales, augue velit cursus
                nunc, quis gravida magna mi a libero. Nam commodo suscipit quam.
                In consectetuer turpis ut velit. Sed cursus turpis vitae tortor.
                Aliquam eu nunc.
              </p>

              <p>
                Etiam ut purus mattis mauris sodales aliquam. Ut varius
                tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                fermentum odio nec arcu.
              </p>

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed,
                iaculis a, condimentum nec, nisi.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
                Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
                ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque
                facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut,
                mi. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <vHoverOff />
  </div>
</template>

<script>
import vHoverOff from "@/components/about/v-hover-off";

export default {
  name: "About",
  components: { vHoverOff },

  props: {
    msg: String,
  },
  data: () => ({
    return: {},
  }),
  computed: {},
  methods: {
    myFunction() {
      var element = document.getElementById("myDIV");
      element.classList.add("mystyle");
    },
  },
};
</script>

<style>
.mystyle {
  width: 100%;
  padding: 25px;
  background-color: coral;
  color: white;
  font-size: 25px;
}
</style>