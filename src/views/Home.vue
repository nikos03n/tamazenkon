<template>
  <div>
    <div>
      <CoreAppBar></CoreAppBar>
    </div>

    <vHedr> </vHedr>

    <div class="mx-auto" max-width="1500" tile>
              <div>
          <vHome />
          <SectionText />
        </div>

      <!-- <v-img
        class="fix"
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
      </v-img> -->
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

.fix {
   /* background-image: url("https://mdn.mozillademos.org/files/12057/starsolid.gif"), url("https://mdn.mozillademos.org/files/12059/startransparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y; */
}

/* @media screen and (max-width: 900px) {
  .mx-auto .pa-3 .v-card .v-sheet .theme--light{
    width: 600px;
  }
} */
</style>