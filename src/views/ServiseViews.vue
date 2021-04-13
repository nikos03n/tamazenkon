<template>
  <div>
    <div id="ServiseViews">
      <vCarousel
        :carousel_data="sliderItems"
        :slideWidth="500"
        :interval="2000"
      >
        <div class="caro">
          <v-carousel-item
            v-for="(item, i) in sliderItems"
            :key="i"
            :src="item.src"
          >
            <div class="title">
              <v-btn color="error" dark large @click="onClickHandler(i)">{{
                item.title
              }}</v-btn>
            </div>
          </v-carousel-item>+6
        </div>
      </vCarousel>
    </div>
  </div>
</template>

<script>
import vCarousel from "@/components/v-carousel.vue";

export default {
  name: "ServiseViews",
  components: {
    vCarousel,
  },
  props: ["showRackSec", "showSubrackSec", "showParts", "showDatabase"],

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      sliderItems: [
        { id: 1, name: "img1", img: "1.png", title: "Rack1 Section" },
        { id: 2, name: "img2", img: "2.png", title: "Rack2 Section" },
        { id: 3, name: "img3", img: "3.png", title: "Rack3 Section" },
        { id: 4, name: "img4", img: "2.png", title: "Rack4 Section" },
      ],
    };
  },
};
</script>

<style scoped>
</style>