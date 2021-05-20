<template>
  <div>
    <div>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-6"
            ><h2>Здесь перечень моих работ на vue.js</h2>
          </v-card>
        </template>
      </v-hover>
    </div>

    <v-container class="pa-4 text-center">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-6">
            <v-row class="fill-height" align="center" justify="center">
              <template v-for="(item, i) in items3">
                <v-col :key="i" cols="12" md="4">
                  <v-hover v-slot="{ hover }">
                    <v-card
                      :href="item.href"
                      :target="item.target"
                      :elevation="hover ? 12 : 2"
                      :class="{ 'on-hover': hover }"
                    >
                      <v-href :href="item.href"></v-href>
                      <v-img :src="item.img" height="225px">
                        <v-card-title class="title white--text">
                          <v-row
                            class="fill-height flex-column"
                            justify="space-between"
                          >
                            <p class="mt-4 subheading text-top color-text">
                              {{ item.title }}
                            </p>

                            <div>
                              <p
                                class="ma-0 body-1 font-weight-bold font-italic text-left color-text"
                              >
                                {{ item.text }}
                              </p>
                              <p
                                class="caption font-weight-medium font-italic text-left color-text"
                              >
                                {{ item.subtext }}
                              </p>
                            </div>
                            <div class="align-self-center">
                              <v-btn
                                v-for="(icon, index) in icons3"
                                :key="index"
                                :class="{ 'show-btns': hover }"
                                :color="transparent"
                                :href="item.href"
                                :target="item.target"
                                icon
                              >
                                <v-icon
                                  :class="{ 'show-btns': hover }"
                                  :color="transparent"
                                  class="caption font-weight-medium font-italic text-left color-text"
                                >
                                  {{ icon }}
                                </v-icon>
                              </v-btn>
                            </div>
                          </v-row>
                        </v-card-title>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-col>
              </template>

              <template v-for="(item, i) in items1">
                <v-col :key="i" cols="12" md="4">
                  <v-hover v-slot="{ hover }">
                    <v-card
                      :href="item.href"
                      :target="item.target"
                      :elevation="hover ? 12 : 2"
                      :class="{ 'on-hover': hover }"
                    >
                      <v-href :href="item.href"></v-href>
                      <v-img :src="item.img" height="225px">
                        <v-card-title class="title white--text">
                          <v-row
                            class="fill-height flex-column"
                            justify="space-between"
                          >
                            <p class="mt-4 subheading text-left color-text">
                              {{ item.title }}
                            </p>

                            <div>
                              <p
                                class="ma-0 body-1 font-weight-bold font-italic text-left color-text"
                              >
                                {{ item.text }}
                              </p>
                              <p
                                class="caption font-weight-medium font-italic text-left color-text"
                              >
                                {{ item.subtext }}
                              </p>
                            </div>
                            <div class="align-self-center">
                              <v-btn
                                v-for="(icon, index) in icons1"
                                :key="index"
                                :class="{ 'show-btns': hover }"
                                :color="transparent"
                                :href="item.href"
                                :target="item.target"
                                icon
                              >
                                <v-icon
                                  :class="{ 'show-btns': hover }"
                                  :color="transparent"
                                  class="caption font-weight-medium font-italic text-left color-text"
                                >
                                  {{ icon }}
                                </v-icon>
                              </v-btn>
                            </div>
                          </v-row>
                        </v-card-title>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-col>
              </template>

              <template v-for="(item, i) in items2">
                <v-col :key="i" cols="12" md="4">
                  <v-hover v-slot="{ hover }">
                    <v-card
                      :href="item.href"
                      :target="item.target"
                      :elevation="hover ? 12 : 2"
                      :class="{ 'on-hover': hover }"
                    >
                      <v-img :src="item.img" height="225px">
                        <v-card-title class="title white--text">
                          <v-row
                            class="fill-height flex-column"
                            justify="space-between"
                          >
                            <p class="mt-4 subheading text-left color-text">
                              {{ item.title }}
                            </p>

                            <div>
                              <p
                                class="ma-0 body-1 font-weight-bold font-italic text-left color-text"
                              >
                                {{ item.text }}
                              </p>
                              <p
                                class="caption font-weight-medium font-italic text-left color-text"
                              >
                                {{ item.subtext }}
                              </p>
                            </div>

                            <div class="align-self-center">
                              <v-btn
                                v-for="(icon, index) in icons2"
                                :key="index"
                                :class="{ 'show-btns': hover }"
                                :color="transparent"
                                icon
                              >
                                <v-icon
                                  :class="{ 'show-btns': hover }"
                                  :color="transparent"
                                  class="caption font-weight-medium font-italic text-left color-text"
                                >
                                  {{ icon }}
                                </v-icon>
                              </v-btn>
                            </div>
                          </v-row>
                        </v-card-title>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-col>
              </template>
            </v-row></v-card
          >
        </template>
      </v-hover>
    </v-container>
  </div>
</template>



<script>
export default {
  data: () => ({
    icons0: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    icons1: ["Написаный с шаблона Photoshop"],
    icons2: ["С рабочей базой данных на firebese"],
    icons3: ["Мой сайт резюме"],

    items3: [
      {
        title: "",
        text: ``,
        subtext: "",

        img:
          "https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2Fportfolio.png?alt=media&token=2b6f6f23-d9e5-487d-8112-bdab6bfa9547",
        href: "https://my-sait-v.web.app/",
        target: "_blank",
      },
    ],
    items1: [
      {
        title: "",
        text: ``,
        subtext: "",

        img:
          "https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2Ffoto-saita-vinto.png?alt=media&token=edc3eff6-40fb-4a62-a15b-68b664ec9948",
        href: "https://portfolio1-3010c.firebaseapp.com/",
        target: "_blank",
      },
    ],
    items2: [
      {
        title: "",
        text: "",
        subtext: " ",
        img:
          "https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2Ffotosaita-pita.png?alt=media&token=3d11a103-e638-46de-83b4-1d9c7dcd0418",
        href: "https://vuevlad.web.app/",
        target: "_blank",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

/* .v-card:not(.on-hover) {
  opacity: 0.6;
 } */

.show-btns {
  color: rgb(63, 16, 150) !important;
}

.color-text {
  color: rgb(110, 17, 17);
}
</style>
