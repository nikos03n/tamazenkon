<template>
  <div>
    <div class="mx-auto" max-width="1000" tile>
      <CoreAppBar class="mx-auto" max-width="1000" tile></CoreAppBar>
    </div>

    <vHedr> </vHedr>

    <div class="mx-auto" max-width="1500" tile>
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <div>
          <vHome />
          <SectionText />
          <div class="1sliding-background"></div>
        </div>
        <!-- <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" size="164" tile>
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/mai%20foto%2FImage-1.jpg?alt=media&token=c74b8004-b703-4a0a-991a-12312c163ed6"
                style="border-radius: 50%"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Marcus Obrien
                </v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row> -->
      </v-img>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CoreAppBar from "@/components/core/AppBar copy.vue";

import vHedr from "@/components/home/v-heder.vue";
import vHome from "@/components/home/v-home.vue";
import SectionText from "@/components/home/SectionText.vue";

export default {
  name: "Home",
  components: {
    CoreAppBar,
    vHedr,
    vHome,
    SectionText,
  },
  data: () => ({}),
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}

.sliding-background {
  background: url("https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/icon%2Fice_screenshot_20210421-092649.png?alt=media&token=6a6c0dc7-0c90-43aa-ac82-4643e27d6a77")
    repeat-x;
  height: 200px;
  width: 5076px;
  animation: slide 60s linear infinite;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1692px, 0, 0);
  }
}

.clas {
  font-family: Segoe UI Italic;
  font-size: 23px;
  margin-top: 43px;
  margin-bottom: 43px;
}
</style>
