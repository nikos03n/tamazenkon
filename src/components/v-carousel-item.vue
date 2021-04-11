<template>
  <div>
    <v-div>
      <div class="v-carousel-item" :style="{ 'min-width': width + 'px' }">
        <p>верху</p>

        <img
          :src="require('../images/' + item_data.img)"
          alt=""
          v-if="imageSlide"
          
        />
        
        <!-- <v-container fill-height fluid pa-0 ma-0 pb-8
          ><img
            :src="require('../images/' + item_data.img)"
            alt=""
            v-if="imageSlide"
          />
          <v-layout fill-height align-end pb-4 mb-8>
            <v-flex xs12>
              <v-btn color="red" class="pa-2" style="bottom: 100px">
                <span class="headline white--text" v-btn="button_data"> </span>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container> -->

        <!-- <div class="item_content" v-else> 
            <p>jhklpj</p>
            <slot></slot>
        </div> -->
        <vCarouselItemButton></vCarouselItemButton></div
    ></v-div>
  </div>
</template>

<script>
import vCarouselItemButton from "./v-carousel-item-button.vue";

export default {
  name: "v-carousel-item",
  components: {
    vCarouselItemButton,
  },
  props: {
    item_data: {
      type: Object,
      default: () => [],
    },
    imageSlide: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
      items: [
        {
          id: "rack",
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          title: "Rack Section",
        },
        {
          id: "subrack",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "Subrack Section",
        },
        {
          id: "parts",
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "Parts Section",
        },
        {
          id: "admin",
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "Admin Section",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style scoped>
.v-carousel-item {
  min-width: 300px;
}
</style>
